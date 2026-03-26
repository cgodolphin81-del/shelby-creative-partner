const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 30
  },
  avatar: String,
  subscription: {
    plan: {
      type: String,
      enum: ['free', 'pro', 'api', 'brand'],
      default: 'free'
    },
    status: {
      type: String,
      enum: ['active', 'cancelled', 'expired'],
      default: 'active'
    },
    startDate: Date,
    endDate: Date,
    stripeCustomerId: String,
    stripeSubscriptionId: String
  },
  stats: {
    memesCreated: { type: Number, default: 0 },
    totalVotes: { type: Number, default: 0 },
    totalShares: { type: Number, default: 0 },
    viralScore: { type: Number, default: 0 }
  },
  preferences: {
    defaultFont: String,
    defaultTemplate: String,
    autoWatermark: { type: Boolean, default: true },
    notifications: { type: Boolean, default: true }
  },
  socialAccounts: {
    twitter: String,
    instagram: String,
    reddit: String,
    tiktok: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Index for faster queries
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
