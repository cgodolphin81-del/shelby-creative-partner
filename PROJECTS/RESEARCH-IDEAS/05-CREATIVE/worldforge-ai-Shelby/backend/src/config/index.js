import dotenv from 'dotenv';

dotenv.config();

const config = {
  // Server
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3001,
  host: process.env.HOST || 'localhost',
  
  // Database
  databaseUrl: process.env.DATABASE_URL || 'postgresql://localhost:5432/worldforge',
  mongoDbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/worldforge',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  
  // Authentication
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 12,
  
  // AI Services
  openaiApiKey: process.env.OPENAI_API_KEY,
  replicateApiToken: process.env.REPLICATE_API_TOKEN,
  stableDiffusionApiKey: process.env.STABLE_DIFFUSION_API_KEY,
  
  // Storage
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    s3Bucket: process.env.S3_BUCKET || 'worldforge-assets'
  },
  
  // Payments
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
  },
  
  // Pricing
  pricing: {
    freeTierWorlds: parseInt(process.env.FREE_TIER_WORLDS, 10) || 1,
    creatorTierPrice: parseInt(process.env.CREATOR_TIER_PRICE, 10) || 1499, // cents
    publisherTierPrice: parseInt(process.env.PUBLISHER_TIER_PRICE, 10) || 4999, // cents
    marketplaceFeePercent: parseFloat(process.env.MARKETPLACE_FEE_PERCENT, 10) || 5,
    worldTemplateFeePercent: parseFloat(process.env.WORLD_TEMPLATE_FEE_PERCENT, 10) || 10
  },
  
  // WebSocket
  wsPort: parseInt(process.env.WS_PORT, 10) || 3002,
  
  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000, // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100
  },
  
  // CORS
  allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  
  // Logging
  logLevel: process.env.LOG_LEVEL || 'info'
};

export default config;
