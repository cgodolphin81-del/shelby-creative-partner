const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: String,
  category: {
    type: String,
    required: true,
    enum: [
      'classic',
      'reaction',
      'wholesome',
      'dark',
      'wholesome',
      'surreal',
      'corporate',
      'gaming',
      'anime',
      'movies',
      'tv',
      'sports',
      'politics',
      'tech',
      'animals',
      'food',
      'relationship',
      'motivational',
      'seasonal',
      'trending'
    ]
  },
  subcategory: String,
  tags: [String],
  dimensions: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 }
  },
  textAreas: [{
    defaultText: String,
    x: Number,
    y: Number,
    maxWidth: Number,
    fontSize: Number,
    fontFamily: String,
    color: { type: String, default: '#FFFFFF' },
    strokeColor: { type: String, default: '#000000' },
    align: { type: String, enum: ['left', 'center', 'right'], default: 'center' },
    isTop: Boolean
  }],
  usageCount: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  isPremium: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  source: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  nsfw: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'active'
  }
}, { timestamps: true });

// Indexes
templateSchema.index({ category: 1, isTrending: -1 });
templateSchema.index({ tags: 1 });
templateSchema.index({ usageCount: -1 });
templateSchema.index({ isPremium: 1 });

module.exports = mongoose.model('Template', templateSchema);
