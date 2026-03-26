import mongoose from 'mongoose';

const worldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // World generation from natural language
  prompt: {
    type: String,
    required: true
  },
  
  // World settings
  genre: {
    type: String,
    enum: ['fantasy', 'scifi', 'horror', 'adventure', 'rpg', 'simulation', 'other'],
    default: 'fantasy'
  },
  style: {
    type: String,
    enum: ['realistic', 'cartoon', 'pixel', 'lowpoly', 'anime', 'custom'],
    default: 'realistic'
  },
  dimensions: {
    type: String,
    enum: ['2d', '3d', '2.5d'],
    default: '3d'
  },
  
  // World structure
  terrain: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  regions: [{
    name: String,
    description: String,
    coordinates: {
      x: Number,
      y: Number,
      z: Number
    },
    size: Number,
    biome: String,
    assets: [String]
  }],
  
  // Assets in the world
  assets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset'
  }],
  
  // Game logic
  rules: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  quests: [{
    id: String,
    name: String,
    description: String,
    objectives: [String],
    rewards: mongoose.Schema.Types.Mixed,
    npcId: String
  }],
  npcs: [{
    id: String,
    name: String,
    type: String,
    behavior: String,
    dialogue: [String],
    position: {
      x: Number,
      y: Number,
      z: Number
    }
  }],
  
  // Multiplayer settings
  multiplayer: {
    enabled: {
      type: Boolean,
      default: false
    },
    maxPlayers: {
      type: Number,
      default: 50
    },
    allowTrading: {
      type: Boolean,
      default: true
    },
    allowChat: {
      type: Boolean,
      default: true
    },
    voiceChat: {
      type: Boolean,
      default: false
    }
  },
  
  // Export formats
  exports: [{
    format: {
      type: String,
      enum: ['webgl', 'unity', 'godot', 'unreal', 'gltf', 'fbx']
    },
    url: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending'
    }
  }],
  
  // Visibility & marketplace
  visibility: {
    type: String,
    enum: ['private', 'public', 'friends'],
    default: 'private'
  },
  published: {
    type: Boolean,
    default: false
  },
  marketplace: {
    listed: {
      type: Boolean,
      default: false
    },
    price: Number,
    currency: {
      type: String,
      default: 'USD'
    },
    sales: {
      type: Number,
      default: 0
    },
    rating: {
      average: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      }
    }
  },
  
  // Statistics
  stats: {
    plays: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    }
  },
  
  // Version control
  version: {
    type: String,
    default: '1.0.0'
  },
  versionHistory: [{
    version: String,
    changes: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Indexes for performance
worldSchema.index({ creator: 1, createdAt: -1 });
worldSchema.index({ 'marketplace.listed': 1, 'marketplace.price': 1 });
worldSchema.index({ genre: 1, style: 1 });
worldSchema.index({ name: 'text', description: 'text' });

export default mongoose.model('World', worldSchema);
