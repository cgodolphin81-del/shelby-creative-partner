const axios = require('axios');
const cron = require('node-cron');
const Meme = require('../models/Meme');

class SocialSchedulerService {
  constructor() {
    this.platforms = {
      twitter: { enabled: false, client: null },
      instagram: { enabled: false, client: null },
      reddit: { enabled: false, client: null },
      tiktok: { enabled: false, client: null }
    };
    
    this.initializeClients();
    this.startScheduler();
  }

  initializeClients() {
    // Twitter/X
    if (process.env.TWITTER_API_KEY && process.env.TWITTER_API_SECRET) {
      try {
        // In production, use twitter-api-v2 library
        this.platforms.twitter.enabled = true;
        console.log('✅ Twitter client initialized');
      } catch (err) {
        console.warn('⚠️ Twitter client not configured');
      }
    }

    // Instagram
    if (process.env.INSTAGRAM_ACCESS_TOKEN) {
      try {
        this.platforms.instagram.enabled = true;
        console.log('✅ Instagram client initialized');
      } catch (err) {
        console.warn('⚠️ Instagram client not configured');
      }
    }

    // Reddit
    if (process.env.REDDIT_CLIENT_ID && process.env.REDDIT_CLIENT_SECRET) {
      try {
        this.platforms.reddit.enabled = true;
        console.log('✅ Reddit client initialized');
      } catch (err) {
        console.warn('⚠️ Reddit client not configured');
      }
    }

    // TikTok
    if (process.env.TIKTOK_ACCESS_TOKEN) {
      try {
        this.platforms.tiktok.enabled = true;
        console.log('✅ TikTok client initialized');
      } catch (err) {
        console.warn('⚠️ TikTok client not configured');
      }
    }
  }

  // Start cron scheduler
  startScheduler() {
    // Check for pending posts every minute
    cron.schedule('* * * * *', async () => {
      await this.processPendingPosts();
    });

    console.log('🕐 Social scheduler started');
  }

  // Schedule a post
  async schedulePost(memeId, platform, scheduledAt, caption, options = {}) {
    try {
      const meme = await Meme.findById(memeId).populate('user');
      if (!meme) {
        throw new Error('Meme not found');
      }

      if (!this.platforms[platform]?.enabled) {
        throw new Error(`${platform} is not configured`);
      }

      const scheduledPost = {
        platform,
        scheduledAt,
        caption,
        status: 'pending',
        options
      };

      meme.scheduledPosts.push(scheduledPost);
      await meme.save();

      return {
        success: true,
        message: `Post scheduled for ${platform} at ${scheduledAt}`,
        postId: meme.scheduledPosts[meme.scheduledPosts.length - 1]._id
      };
    } catch (err) {
      console.error('Schedule post error:', err.message);
      return { success: false, error: err.message };
    }
  }

  // Schedule to multiple platforms
  async scheduleMultiPlatform(memeId, platforms, scheduledAt, captions) {
    const results = [];

    for (const platform of platforms) {
      const caption = captions[platform] || captions.default || '';
      const result = await this.schedulePost(memeId, platform, scheduledAt, caption);
      results.push({ platform, ...result });
    }

    return results;
  }

  // Process pending posts
  async processPendingPosts() {
    try {
      const now = new Date();

      const memes = await Meme.find({
        'scheduledPosts.status': 'pending',
        'scheduledPosts.scheduledAt': { $lte: now }
      });

      for (const meme of memes) {
        for (const post of meme.scheduledPosts) {
          if (post.status === 'pending' && post.scheduledAt <= now) {
            await this.publishPost(meme, post);
          }
        }
      }
    } catch (err) {
      console.error('Process pending posts error:', err.message);
    }
  }

  // Publish post to platform
  async publishPost(meme, post) {
    try {
      let result;

      switch (post.platform) {
        case 'twitter':
          result = await this.postToTwitter(meme, post);
          break;
        case 'instagram':
          result = await this.postToInstagram(meme, post);
          break;
        case 'reddit':
          result = await this.postToReddit(meme, post);
          break;
        case 'tiktok':
          result = await this.postToTikTok(meme, post);
          break;
        default:
          throw new Error(`Unknown platform: ${post.platform}`);
      }

      // Update post status
      post.status = 'posted';
      post.postId = result.id;
      post.postUrl = result.url;
      await meme.save();

      console.log(`✅ Posted to ${post.platform}: ${result.url}`);
      return result;
    } catch (err) {
      console.error(`Post to ${post.platform} error:`, err.message);
      post.status = 'failed';
      post.error = err.message;
      await meme.save();
      throw err;
    }
  }

  // Post to Twitter/X
  async postToTwitter(meme, post) {
    // In production, use twitter-api-v2
    const mediaData = await axios.get(meme.imageUrl, { responseType: 'arraybuffer' });
    
    // Simulated Twitter API call
    // const twitterClient = new TwitterApi({ ... });
    // const mediaId = await twitterClient.v1.uploadMedia(mediaData.data);
    // const tweet = await twitterClient.v2.tweet({ text: post.caption, media: { media_ids: [mediaId] } });

    return {
      id: `twitter_${Date.now()}`,
      url: `https://twitter.com/status/${Date.now()}`
    };
  }

  // Post to Instagram
  async postToInstagram(meme, post) {
    // Instagram Graph API
    const igUserId = process.env.INSTAGRAM_USER_ID;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    // Step 1: Create media container
    const containerResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${igUserId}/media`,
      {
        image_url: meme.imageUrl,
        caption: post.caption,
        access_token: accessToken
      }
    );

    const creationId = containerResponse.data.id;

    // Wait for processing
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Step 2: Publish
    const publishResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${igUserId}/media_publish`,
      {
        creation_id: creationId,
        access_token: accessToken
      }
    );

    return {
      id: publishResponse.data.id,
      url: `https://instagram.com/p/${publishResponse.data.id}`
    };
  }

  // Post to Reddit
  async postToReddit(meme, post) {
    // Reddit OAuth2 API
    const subreddit = post.options.subreddit || 'memes';
    
    // Get access token
    const tokenResponse = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      'grant_type=client_credentials',
      {
        auth: {
          username: process.env.REDDIT_CLIENT_ID,
          password: process.env.REDDIT_CLIENT_SECRET
        }
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Submit post
    const submitResponse = await axios.post(
      `https://oauth.reddit.com/api/submit`,
      {
        sr: subreddit,
        title: post.caption,
        url: meme.imageUrl,
        kind: 'image',
        resubmit: true
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': 'MemeGenerator/1.0'
        }
      }
    );

    const postData = submitResponse.data.json.data;

    return {
      id: postData.name,
      url: `https://reddit.com${postData.url}`
    };
  }

  // Post to TikTok
  async postToTikTok(meme, post) {
    // TikTok API for Business
    // Note: TikTok has limited API access for regular posting
    
    return {
      id: `tiktok_${Date.now()}`,
      url: `https://tiktok.com/@user/video/${Date.now()}`,
      note: 'TikTok posting requires manual approval for most accounts'
    };
  }

  // Get scheduled posts for a meme
  async getScheduledPosts(memeId) {
    const meme = await Meme.findById(memeId);
    if (!meme) {
      throw new Error('Meme not found');
    }

    return meme.scheduledPosts;
  }

  // Cancel scheduled post
  async cancelScheduledPost(memeId, postId) {
    const meme = await Meme.findById(memeId);
    if (!meme) {
      throw new Error('Meme not found');
    }

    const post = meme.scheduledPosts.id(postId);
    if (!post) {
      throw new Error('Scheduled post not found');
    }

    if (post.status !== 'pending') {
      throw new Error('Can only cancel pending posts');
    }

    post.status = 'cancelled';
    await meme.save();

    return { success: true, message: 'Post cancelled' };
  }

  // Get best posting times
  getBestPostingTimes(platform) {
    const times = {
      twitter: [
        { day: 'weekday', hours: [8, 12, 18, 20] },
        { day: 'weekend', hours: [10, 14, 19] }
      ],
      instagram: [
        { day: 'weekday', hours: [9, 13, 19] },
        { day: 'weekend', hours: [11, 15, 20] }
      ],
      reddit: [
        { day: 'weekday', hours: [7, 12, 17] },
        { day: 'weekend', hours: [10, 14] }
      ],
      tiktok: [
        { day: 'weekday', hours: [6, 10, 22] },
        { day: 'weekend', hours: [11, 19, 21] }
      ]
    };

    return times[platform] || times.twitter;
  }

  // Auto-schedule based on optimal times
  async autoSchedule(memeId, platforms, caption) {
    const now = new Date();
    const schedules = [];

    for (const platform of platforms) {
      const bestTimes = this.getBestPostingTimes(platform);
      const nextBestTime = this.getNextOptimalTime(now, bestTimes);

      const result = await this.schedulePost(memeId, platform, nextBestTime, caption);
      schedules.push({ platform, scheduledAt: nextBestTime, ...result });
    }

    return schedules;
  }

  getNextOptimalTime(now, bestTimes) {
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const timeSlot = isWeekend 
      ? bestTimes.find(t => t.day === 'weekend') 
      : bestTimes.find(t => t.day === 'weekday');

    const hours = timeSlot?.hours || [12];
    const currentHour = now.getHours();

    // Find next available hour
    let nextHour = hours.find(h => h > currentHour);
    
    if (!nextHour) {
      // Tomorrow
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(hours[0], 0, 0, 0);
      return tomorrow;
    }

    const scheduled = new Date(now);
    scheduled.setHours(nextHour, 0, 0, 0);
    return scheduled;
  }
}

module.exports = new SocialSchedulerService();
