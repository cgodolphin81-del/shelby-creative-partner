const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: String,
  captions: [{
    text: String,
    position: {
      x: Number,
      y: Number
    },
    font: String,
    fontSize: Number,
    color: String,
    strokeColor: String
  }],
  filters: [{
    name: String,
    intensity: Number
  }],
  stickers: [{
    type: String,
    url: String,
    position: {
      x: Number,
      y: Number
    },
    rotation: Number,
    scale: Number
  }],
  drawings: [{
    path: String,
    color: String,
    strokeWidth: Number
  }],
  viralScore: {
    predicted: Number,
    actual: Number,
    factors: [{
      name: String,
      score: Number,
      weight: Number
    }]
  },
  stats: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
  },
  tags: [String],
  isPublic: { type: Boolean, default: false },
  hasWatermark: { type: Boolean, default: true },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge'
  },
  scheduledPosts: [{
    platform: String,
    scheduledAt: Date,
    status: {
      type: String,
      enum: ['pending', 'posted', 'failed'],
      default: 'pending'
    },
    postId: String,
    postUrl: String
  }],
  metadata: {
    width: Number,
    height: Number,
    format: String,
    size: Number
  }
}, { timestamps: true });

// Indexes for performance
memeSchema.index({ user: 1, createdAt: -1 });
memeSchema.index({ isPublic: 1, 'stats.likes': -1 });
memeSchema.index({ tags: 1 });
memeSchema.index({ viralScore: -1 });

module.exports = mongoose.model('Meme', memeSchema);
