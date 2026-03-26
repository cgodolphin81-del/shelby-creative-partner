const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['daily', 'weekly', 'special', 'brand'],
    default: 'daily'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  prizes: [{
    rank: Number,
    prize: String,
    value: Number
  }],
  sponsor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand'
  },
  entries: [{
    meme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Meme'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    votes: { type: Number, default: 0 },
    rank: Number
  }],
  rules: [String],
  allowedTemplates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template'
  }],
  votingEnabled: { type: Boolean, default: true },
  votingEndsAt: Date,
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meme'
  },
  status: {
    type: String,
    enum: ['upcoming', 'active', 'voting', 'completed'],
    default: 'upcoming'
  },
  participants: { type: Number, default: 0 },
  totalVotes: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

// Indexes
challengeSchema.index({ status: 1, startDate: -1 });
challengeSchema.index({ type: 1 });
challengeSchema.index({ featured: 1 });

module.exports = mongoose.model('Challenge', challengeSchema);
