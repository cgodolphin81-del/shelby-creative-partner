const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  logo: String,
  website: String,
  industry: {
    type: String,
    enum: ['tech', 'food', 'fashion', 'gaming', 'entertainment', 'finance', 'health', 'automotive', 'retail', 'other']
  },
  description: String,
  contact: {
    name: String,
    email: { type: String, required: true },
    phone: String
  },
  subscription: {
    plan: {
      type: String,
      enum: ['starter', 'professional', 'enterprise'],
      default: 'starter'
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'trial'],
      default: 'trial'
    },
    startDate: Date,
    endDate: Date,
    stripeCustomerId: String
  },
  memePacks: [{
    name: String,
    description: String,
    templates: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template'
    }],
    brandGuidelines: {
      colors: [String],
      fonts: [String],
      logos: [String],
      tone: String
    },
    usage: { type: Number, default: 0 }
  }],
  campaigns: [{
    name: String,
    brief: String,
    budget: Number,
    startDate: Date,
    endDate: Date,
    goals: [String],
    metrics: {
      impressions: Number,
      engagements: Number,
      conversions: Number
    }
  }],
  stats: {
    memesCreated: { type: Number, default: 0 },
    totalReach: { type: Number, default: 0 },
    totalEngagement: { type: Number, default: 0 }
  },
  billing: {
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String
    },
    taxId: String
  }
}, { timestamps: true });

brandSchema.index({ industry: 1 });
brandSchema.index({ 'subscription.status': 1 });

module.exports = mongoose.model('Brand', brandSchema);
