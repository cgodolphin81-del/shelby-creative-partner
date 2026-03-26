import mongoose from 'mongoose';

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
    select: false
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  displayName: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    default: '/avatars/default.png'
  },
  
  // Subscription tier
  tier: {
    type: String,
    enum: ['free', 'creator', 'publisher'],
    default: 'free'
  },
  subscription: {
    active: {
      type: Boolean,
      default: false
    },
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    currentPeriodEnd: Date,
    cancelAtPeriodEnd: {
      type: Boolean,
      default: false
    }
  },
  
  // Profile
  bio: {
    type: String,
    maxlength: 500
  },
  socialLinks: {
    website: String,
    twitter: String,
    discord: String,
    youtube: String
  },
  
  // Worlds & assets
  worlds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'World'
  }],
  assets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset'
  }],
  
  // Marketplace
  marketplace: {
    sellerRating: {
      type: Number,
      default: 0
    },
    totalSales: {
      type: Number,
      default: 0
    },
    totalRevenue: {
      type: Number,
      default: 0
    },
    itemsSold: {
      type: Number,
      default: 0
    }
  },
  
  // Preferences
  preferences: {
    defaultDimensions: {
      type: String,
      enum: ['2d', '3d', '2.5d'],
      default: '3d'
    },
    defaultStyle: {
      type: String,
      enum: ['realistic', 'cartoon', 'pixel', 'lowpoly', 'anime'],
      default: 'realistic'
    },
    notifications: {
      email: {
        type: Boolean,
        default: true
      },
      marketplace: {
        type: Boolean,
        default: true
      },
      updates: {
        type: Boolean,
        default: true
      }
    }
  },
  
  // Statistics
  stats: {
    worldsCreated: {
      type: Number,
      default: 0
    },
    assetsCreated: {
      type: Number,
      default: 0
    },
    hoursPlayed: {
      type: Number,
      default: 0
    },
    worldsPlayed: {
      type: Number,
      default: 0
    }
  },
  
  // Friends & social
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendRequests: [{
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'declined'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Authentication
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String
}, {
  timestamps: true
});

// Indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'marketplace.totalSales': -1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return this.displayName || this.username;
});

export default mongoose.model('User', userSchema);
