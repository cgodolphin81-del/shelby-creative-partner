const axios = require('axios');
const Trend = require('../models/Trend');
const redis = require('redis');

class TrendTrackerService {
  constructor() {
    this.redisClient = null;
    this.cacheTTL = 300; // 5 minutes
    this.initializeRedis();
  }

  async initializeRedis() {
    try {
      this.redisClient = redis.createClient({
        url: process.env.REDIS_URL || 'redis://localhost:6379'
      });
      await this.redisClient.connect();
      console.log('✅ TrendTracker Redis connected');
    } catch (err) {
      console.warn('⚠️ TrendTracker using memory cache');
    }
  }

  // Fetch trending topics from Reddit
  async fetchRedditTrends() {
    try {
      const response = await axios.get('https://www.reddit.com/trending.json', {
        headers: { 'User-Agent': 'MemeGenerator/1.0' },
        timeout: 5000
      });

      const trends = response.data.children.map((post, index) => ({
        topic: post.data.title,
        platform: 'reddit',
        category: this.categorizeTopic(post.data.title),
        rank: index + 1,
        score: post.data.score || 0,
        volume: post.data.num_comments || 0,
        growth: this.calculateGrowth(post.data),
        hashtags: this.extractHashtags(post.data.title),
        memePotential: this.calculateMemePotential(post.data),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
      }));

      return trends.slice(0, 50);
    } catch (err) {
      console.error('Reddit trends error:', err.message);
      return this.getFallbackTrends('reddit');
    }
  }

  // Fetch trending topics from Twitter
  async fetchTwitterTrends() {
    try {
      // Using public trends endpoint (in production, use Twitter API v2)
      const response = await axios.get('https://api.twitter.com/1.1/trends/place.json?id=1', {
        headers: {
          'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
          'User-Agent': 'MemeGenerator/1.0'
        },
        timeout: 5000
      });

      const trends = response.data[0].trends.map((trend, index) => ({
        topic: trend.name,
        platform: 'twitter',
        category: this.categorizeTopic(trend.name),
        rank: index + 1,
        score: trend.tweet_volume || 0,
        volume: trend.tweet_volume || 0,
        growth: 0,
        hashtags: [trend.name.replace('#', '')],
        memePotential: this.calculateMemePotential({ title: trend.name }),
        expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000)
      }));

      return trends.slice(0, 50);
    } catch (err) {
      console.error('Twitter trends error:', err.message);
      return this.getFallbackTrends('twitter');
    }
  }

  // Fetch trending topics from TikTok
  async fetchTikTokTrends() {
    try {
      // TikTok doesn't have public API for trends, using web scraping approach
      // In production, use TikTok Business API
      const response = await axios.get('https://www.tiktok.com/api/recommend/item_list/', {
        params: {
          count: 50,
          aid: 1988
        },
        headers: { 'User-Agent': 'MemeGenerator/1.0' },
        timeout: 5000
      });

      const trends = response.data.itemList.map((item, index) => ({
        topic: item.desc?.substring(0, 100) || 'TikTok Trend',
        platform: 'tiktok',
        category: this.categorizeTopic(item.desc),
        rank: index + 1,
        score: item.stats.diggCount || 0,
        volume: item.stats.playCount || 0,
        growth: 0,
        hashtags: item.textExtra?.map(e => e.hashtagName) || [],
        memePotential: this.calculateMemePotential({ title: item.desc }),
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000)
      }));

      return trends.slice(0, 50);
    } catch (err) {
      console.error('TikTok trends error:', err.message);
      return this.getFallbackTrends('tiktok');
    }
  }

  // Aggregate trends from all platforms
  async getAllTrends() {
    const [reddit, twitter, tiktok] = await Promise.all([
      this.fetchRedditTrends(),
      this.fetchTwitterTrends(),
      this.fetchTikTokTrends()
    ]);

    // Combine and deduplicate
    const allTrends = [...reddit, ...twitter, ...tiktok];
    const uniqueTrends = this.deduplicateTrends(allTrends);

    // Sort by score and assign overall rank
    uniqueTrends.sort((a, b) => b.score - a.score);
    uniqueTrends.forEach((trend, index) => {
      trend.overallRank = index + 1;
    });

    return uniqueTrends.slice(0, 100);
  }

  // Save trends to database
  async saveTrends(trends) {
    try {
      const bulkOps = trends.map(trend => ({
        updateOne: {
          filter: { topic: trend.topic, platform: trend.platform },
          update: { $set: trend },
          upsert: true
        }
      }));

      await Trend.bulkWrite(bulkOps);
      console.log(`✅ Saved ${trends.length} trends`);
    } catch (err) {
      console.error('Save trends error:', err.message);
    }
  }

  // Get trends with caching
  async getTrends(platform = 'all', limit = 50) {
    const cacheKey = `trends:${platform}:${limit}`;
    
    if (this.redisClient) {
      const cached = await this.redisClient.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    }

    let trends;
    if (platform === 'all') {
      trends = await this.getAllTrends();
    } else {
      const fetchMethod = `fetch${platform.charAt(0).toUpperCase() + platform.slice(1)}Trends`;
      trends = await this[fetchMethod]();
    }

    trends = trends.slice(0, limit);
    await this.saveTrends(trends);

    if (this.redisClient) {
      await this.redisClient.setEx(cacheKey, this.cacheTTL, JSON.stringify(trends));
    }

    return trends;
  }

  // Helper methods
  categorizeTopic(topic) {
    const lower = topic.toLowerCase();
    if (lower.match(/game|gaming|esports|twitch/)) return 'gaming';
    if (lower.match(/movie|film|cinema|netflix/)) return 'movies';
    if (lower.match(/music|song|album|concert/)) return 'music';
    if (lower.match(/tech|ai|crypto|bitcoin/)) return 'tech';
    if (lower.match(/sport|football|basketball|soccer/)) return 'sports';
    if (lower.match(/politic|election|government/)) return 'politics';
    return 'general';
  }

  calculateGrowth(postData) {
    // Simplified growth calculation
    const hoursOld = (Date.now() - new Date(postData.created_utc * 1000)) / (1000 * 60 * 60);
    if (hoursOld < 1) return 100;
    if (hoursOld < 6) return 75;
    if (hoursOld < 24) return 50;
    return 25;
  }

  calculateMemePotential(postData) {
    let score = 50;
    
    // Upvotes/engagement
    if (postData.score > 10000) score += 20;
    else if (postData.score > 1000) score += 10;
    
    // Comments (discussion = meme potential)
    if (postData.num_comments > 1000) score += 15;
    else if (postData.num_comments > 100) score += 8;
    
    // Title characteristics
    const title = postData.title || '';
    if (title.includes('?')) score += 5;
    if (title.length < 50) score += 5;
    if (title.match(/when|that|this|me|my/)) score += 10;
    
    return Math.min(100, score);
  }

  extractHashtags(text) {
    const matches = text.match(/#\w+/g) || [];
    return matches.map(tag => tag.replace('#', ''));
  }

  deduplicateTrends(trends) {
    const seen = new Set();
    return trends.filter(trend => {
      const key = `${trend.topic.toLowerCase()}-${trend.platform}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  getFallbackTrends(platform) {
    return [
      { topic: 'Monday Motivation', platform, category: 'general', rank: 1, score: 1000, memePotential: 60 },
      { topic: 'Weekend Vibes', platform, category: 'general', rank: 2, score: 900, memePotential: 65 },
      { topic: 'Work From Home', platform, category: 'tech', rank: 3, score: 850, memePotential: 70 }
    ];
  }
}

module.exports = new TrendTrackerService();
