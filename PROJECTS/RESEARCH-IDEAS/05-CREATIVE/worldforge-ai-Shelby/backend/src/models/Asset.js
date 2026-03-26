import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
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
  
  // Asset generation from text
  prompt: {
    type: String,
    required: true
  },
  
  // Asset type
  type: {
    type: String,
    required: true,
    enum: ['character', 'building', 'terrain', 'prop', 'vehicle', 'weapon', 'armor', 'item', 'creature', 'vegetation', 'effect', 'sound', 'music', 'texture', 'material', 'other']
  },
  
  // Style & dimensions
  style: {
    type: String,
    enum: ['realistic', 'cartoon', 'pixel', 'lowpoly', 'anime', 'custom'],
    default: 'realistic'
  },
  dimensions: {
    type: String,
    enum: ['2d', '3d'],
    default: '3d'
  },
  
  // File information
  files: [{
    format: {
      type: String,
      enum: ['png', 'jpg', 'webp', 'glb', 'gltf', 'fbx', 'obj', 'blend', 'mp3', 'wav', 'ogg']
    },
    url: String,
    size: Number,
    resolution: {
      width: Number,
      height: Number
    },
    polyCount: Number, // for 3D models
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  
  // Thumbnail
  thumbnail: {
    url: String,
    format: String
  },
  
  // Asset properties
  properties: {
    // For characters
    gender: {
      type: String,
      enum: ['male', 'female', 'non-binary', 'other', 'N/A']
    },
    age: String,
    height: Number,
    weight: Number,
    
    // For buildings
    floors: Number,
    rooms: Number,
    area: Number,
    
    // For items
    rarity: {
      type: String,
      enum: ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic']
    },
    stats: mongoose.Schema.Types.Mixed,
    
    // For all
    tags: [String],
    category: String,
    subcategory: String
  },
  
  // Licensing
  license: {
    type: String,
    enum: ['cc0', 'cc-by', 'cc-by-sa', 'cc-by-nc', 'cc-by-nc-sa', 'all-rights-reserved', 'custom'],
    default: 'all-rights-reserved'
  },
  allowCommercialUse: {
    type: Boolean,
    default: false
  },
  allowModification: {
    type: Boolean,
    default: false
  },
  requireAttribution: {
    type: Boolean,
    default: true
  },
  
  // Marketplace
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
    },
    reviews: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      rating: Number,
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }]
  },
  
  // AI generation metadata
  aiGenerated: {
    type: Boolean,
    default: true
  },
  model: {
    type: String,
    enum: ['stable-diffusion-xl', 'midjourney', 'dall-e-3', 'custom']
  },
  generationParams: {
    type: mongoose.Schema.Types.Mixed
  },
  generationTime: {
    type: Number // milliseconds
  },
  
  // Usage
  usedInWorlds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'World'
  }],
  downloads: {
    type: Number,
    default: 0
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Status
  status: {
    type: String,
    enum: ['draft', 'processing', 'completed', 'failed', 'deleted'],
    default: 'draft'
  },
  visibility: {
    type: String,
    enum: ['private', 'public', 'friends'],
    default: 'private'
  },
  
  // Version control
  version: {
    type: String,
    default: '1.0.0'
  }
}, {
  timestamps: true
});

// Indexes
assetSchema.index({ creator: 1, type: 1 });
assetSchema.index({ 'marketplace.listed': 1, 'marketplace.price': 1 });
assetSchema.index({ type: 1, style: 1, tags: 1 });
assetSchema.index({ name: 'text', description: 'text', tags: 'text' });

export default mongoose.model('Asset', assetSchema);
