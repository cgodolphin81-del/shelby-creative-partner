const mongoose = require('mongoose');
const Meme = require('../models/Meme');

class ViralPredictorService {
  constructor() {
    // Feature weights for viral prediction
    this.weights = {
      captionQuality: 0.20,
      templatePopularity: 0.15,
      timingScore: 0.15,
      trendAlignment: 0.20,
      visualAppeal: 0.10,
      shareability: 0.10,
      emotionalImpact: 0.10
    };
  }

  // Predict viral potential for a meme
  async predictViralPotential(memeData) {
    const factors = await this.analyzeFactors(memeData);
    const score = this.calculateScore(factors);
    
    return {
      score: Math.round(score),
      rating: this.getRating(score),
      factors: factors.map(f => ({
        name: f.name,
        score: Math.round(f.score),
        weight: f.weight,
        contribution: Math.round(f.score * f.weight * 100) / 100
      })),
      recommendations: this.generateRecommendations(factors),
      predictedReach: this.predictReach(score),
      confidence: this.calculateConfidence(factors)
    };
  }

  // Analyze all viral factors
  async analyzeFactors(memeData) {
    const factors = [];

    // 1. Caption Quality
    factors.push(await this.analyzeCaptionQuality(memeData.captions));

    // 2. Template Popularity
    factors.push(await this.analyzeTemplatePopularity(memeData.template));

    // 3. Timing Score
    factors.push(this.analyzeTiming());

    // 4. Trend Alignment
    factors.push(await this.analyzeTrendAlignment(memeData.tags, memeData.context));

    // 5. Visual Appeal (simplified - would use ML model in production)
    factors.push(this.analyzeVisualAppeal(memeData));

    // 6. Shareability
    factors.push(this.analyzeShareability(memeData));

    // 7. Emotional Impact
    factors.push(this.analyzeEmotionalImpact(memeData.captions));

    return factors;
  }

  // Analyze caption quality
  async analyzeCaptionQuality(captions) {
    let score = 50;

    if (!captions || captions.length === 0) {
      return { name: 'Caption Quality', score: 30, weight: this.weights.captionQuality };
    }

    const captionText = captions.map(c => c.text || '').join(' ');

    // Length optimization
    if (captionText.length >= 20 && captionText.length <= 100) score += 20;
    
    // Relatability
    const relatablePatterns = ['when', 'that moment', 'me:', 'nobody:', 'pov'];
    if (relatablePatterns.some(p => captionText.toLowerCase().includes(p))) score += 15;

    // Humor indicators
    const humorPatterns = ['lol', 'lmao', '💀', '😂', 'tf', 'wtf'];
    if (humorPatterns.some(p => captionText.toLowerCase().includes(p))) score += 10;

    // Readability
    if (captionText.split(' ').length <= 15) score += 5;

    return { name: 'Caption Quality', score: Math.min(100, score), weight: this.weights.captionQuality };
  }

  // Analyze template popularity
  async analyzeTemplatePopularity(templateId) {
    let score = 50;

    if (!templateId) {
      return { name: 'Template Popularity', score: 40, weight: this.weights.templatePopularity };
    }

    try {
      const Template = mongoose.model('Template');
      const template = await Template.findById(templateId);

      if (template) {
        // Usage count
        if (template.usageCount > 10000) score += 30;
        else if (template.usageCount > 1000) score += 20;
        else if (template.usageCount > 100) score += 10;

        // Trending status
        if (template.isTrending) score += 20;

        // Category popularity
        const popularCategories = ['reaction', 'classic', 'trending', 'gaming'];
        if (popularCategories.includes(template.category)) score += 10;
      }
    } catch (err) {
      console.error('Template analysis error:', err.message);
    }

    return { name: 'Template Popularity', score: Math.min(100, score), weight: this.weights.templatePopularity };
  }

  // Analyze timing
  analyzeTiming() {
    let score = 50;
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    // Best posting times (evenings and weekends)
    if (hour >= 18 && hour <= 22) score += 25; // Evening
    else if (hour >= 12 && hour <= 14) score += 15; // Lunch
    else if (hour >= 8 && hour <= 10) score += 10; // Morning

    // Weekend boost
    if (day === 0 || day === 6) score += 15; // Sunday or Saturday

    return { name: 'Timing Score', score: Math.min(100, score), weight: this.weights.timingScore };
  }

  // Analyze trend alignment
  async analyzeTrendAlignment(tags, context) {
    let score = 50;

    try {
      const Trend = mongoose.model('Trend');
      const trendingTopics = await Trend.find({ 
        platform: 'all',
        expiresAt: { $gt: new Date() }
      }).limit(20);

      const trendingNames = trendingTopics.map(t => t.topic.toLowerCase());
      
      // Check if tags match trending topics
      if (tags && tags.length > 0) {
        const matches = tags.filter(tag => 
          trendingNames.some(trend => trend.includes(tag.toLowerCase()))
        );
        score += matches.length * 15;
      }

      // Check context
      if (context && trendingNames.some(trend => context.toLowerCase().includes(trend))) {
        score += 20;
      }
    } catch (err) {
      console.error('Trend alignment error:', err.message);
    }

    return { name: 'Trend Alignment', score: Math.min(100, score), weight: this.weights.trendAlignment };
  }

  // Analyze visual appeal
  analyzeVisualAppeal(memeData) {
    let score = 60;

    // Check dimensions (square formats perform well)
    if (memeData.metadata) {
      const { width, height } = memeData.metadata;
      const ratio = width / height;
      
      // Square or vertical formats
      if (ratio >= 0.8 && ratio <= 1.2) score += 20;
      else if (ratio < 1) score += 10; // Vertical

      // Resolution check
      if (width >= 1080 && height >= 1080) score += 10;
    }

    return { name: 'Visual Appeal', score: Math.min(100, score), weight: this.weights.visualAppeal };
  }

  // Analyze shareability
  analyzeShareability(memeData) {
    let score = 50;

    // Public memes are more shareable
    if (memeData.isPublic) score += 20;

    // Tags increase discoverability
    if (memeData.tags && memeData.tags.length >= 3) score += 15;
    else if (memeData.tags && memeData.tags.length > 0) score += 8;

    // Challenge participation
    if (memeData.challenge) score += 15;

    return { name: 'Shareability', score: Math.min(100, score), weight: this.weights.shareability };
  }

  // Analyze emotional impact
  analyzeEmotionalImpact(captions) {
    let score = 50;

    if (!captions || captions.length === 0) {
      return { name: 'Emotional Impact', score: 40, weight: this.weights.emotionalImpact };
    }

    const captionText = captions.map(c => c.text || '').join(' ').toLowerCase();

    // Emotional keywords
    const emotions = {
      positive: ['love', 'happy', 'amazing', 'best', 'awesome', 'great'],
      negative: ['hate', 'worst', 'terrible', 'awful', 'sad', 'angry'],
      relatable: ['me', 'when', 'that', 'this', 'everyone', 'nobody'],
      surprising: ['wait', 'what', 'really', 'actually', 'unexpected']
    };

    let emotionCount = 0;
    Object.values(emotions).forEach(emotionList => {
      if (emotionList.some(word => captionText.includes(word))) emotionCount++;
    });

    score += emotionCount * 12;

    return { name: 'Emotional Impact', score: Math.min(100, score), weight: this.weights.emotionalImpact };
  }

  // Calculate overall score
  calculateScore(factors) {
    let totalScore = 0;
    let totalWeight = 0;

    factors.forEach(factor => {
      totalScore += factor.score * factor.weight;
      totalWeight += factor.weight;
    });

    return totalScore / totalWeight;
  }

  // Get rating based on score
  getRating(score) {
    if (score >= 90) return '🔥 VIRAL (Top 1%)';
    if (score >= 80) return '⭐ Excellent (Top 5%)';
    if (score >= 70) return '👍 Great (Top 20%)';
    if (score >= 60) return '😊 Good (Top 50%)';
    if (score >= 50) return '👌 Average';
    return '📉 Below Average';
  }

  // Generate recommendations for improvement
  generateRecommendations(factors) {
    const recommendations = [];

    factors.forEach(factor => {
      if (factor.score < 50) {
        switch (factor.name) {
          case 'Caption Quality':
            recommendations.push('💡 Try shorter, punchier captions with relatable scenarios');
            break;
          case 'Template Popularity':
            recommendations.push('📊 Consider using trending or classic templates');
            break;
          case 'Timing Score':
            recommendations.push('⏰ Post during peak hours (6-10 PM) for better reach');
            break;
          case 'Trend Alignment':
            recommendations.push('🔥 Add trending topics or current events to your meme');
            break;
          case 'Shareability':
            recommendations.push('📱 Add relevant tags and make your meme public');
            break;
        }
      }
    });

    return recommendations.length > 0 ? recommendations : ['✅ Your meme looks great! Ready to share.'];
  }

  // Predict potential reach
  predictReach(score) {
    if (score >= 90) return { min: 100000, max: 1000000, label: '100K - 1M+' };
    if (score >= 80) return { min: 50000, max: 100000, label: '50K - 100K' };
    if (score >= 70) return { min: 10000, max: 50000, label: '10K - 50K' };
    if (score >= 60) return { min: 1000, max: 10000, label: '1K - 10K' };
    return { min: 100, max: 1000, label: '100 - 1K' };
  }

  // Calculate prediction confidence
  calculateConfidence(factors) {
    const scores = factors.map(f => f.score);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const variance = scores.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / scores.length;
    const stdDev = Math.sqrt(variance);

    // Lower variance = higher confidence
    if (stdDev < 10) return 0.95;
    if (stdDev < 20) return 0.85;
    if (stdDev < 30) return 0.70;
    return 0.60;
  }
}

module.exports = new ViralPredictorService();
