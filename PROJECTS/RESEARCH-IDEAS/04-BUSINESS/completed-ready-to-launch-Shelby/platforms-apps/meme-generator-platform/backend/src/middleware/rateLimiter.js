const rateLimit = require('express-rate-limit');

// General API rate limiter
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: 'Too many requests, please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Stricter limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 attempts per 15 minutes
  message: {
    success: false,
    error: 'Too many login attempts, please try again later'
  }
});

// Limiter for meme creation (prevent abuse)
const memeCreationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50, // 50 memes per hour
  message: {
    success: false,
    error: 'Meme creation limit reached. Upgrade to Pro for unlimited memes!'
  }
});

// Limiter for API endpoints (for API subscribers)
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1000, // 1000 API calls per hour
  message: {
    success: false,
    error: 'API rate limit exceeded'
  }
});

module.exports = {
  rateLimiter,
  authLimiter,
  memeCreationLimiter,
  apiLimiter
};
