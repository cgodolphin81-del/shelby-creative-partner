const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['reddit', 'twitter', 'tiktok', 'instagram', 'all']
  },
  category: {
    type: String,
    enum: ['general', 'entertainment', 'sports', 'politics', 'tech', 'gaming', 'music', 'movies', 'viral']
  },
  rank: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    default: 0
  },
  growth: {
    type: Number,
    default: 0
  },
  relatedTopics: [String],
  hashtags: [String],
  samplePosts: [{
    text: String,
    url: String,
    platform: String,
    engagement: Number
  }],
  memePotential: {
    type: Number,
    min: 0,
    max: 100
  },
  suggestedTemplates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template'
  }],
  expiresAt: Date,
  firstSeen: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Compound index for efficient trending queries
trendSchema.index({ platform: 1, rank: 1 });
trendSchema.index({ category: 1, score: -1 });
trendSchema.index({ expiresAt: 1 });

module.exports = mongoose.model('Trend', trendSchema);
