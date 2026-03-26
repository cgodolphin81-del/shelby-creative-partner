require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const redis = require('redis');

// Routes
const authRoutes = require('./routes/auth');
const memeRoutes = require('./routes/memes');
const templateRoutes = require('./routes/templates');
const captionRoutes = require('./routes/captions');
const trendRoutes = require('./routes/trends');
const viralRoutes = require('./routes/viral');
const challengeRoutes = require('./routes/challenges');
const paymentRoutes = require('./routes/payments');
const socialRoutes = require('./routes/social');
const brandRoutes = require('./routes/brands');
const analyticsRoutes = require('./routes/analytics');

// Middleware
const { errorHandler } = require('./middleware/errorHandler');
const { rateLimiter } = require('./middleware/rateLimiter');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Security & Performance
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rate Limiting
app.use('/api/', rateLimiter);

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meme-generator');
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

// Redis Connection
let redisClient;
const connectRedis = async () => {
  try {
    redisClient = redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    });
    await redisClient.connect();
    console.log('✅ Redis Connected');
  } catch (err) {
    console.warn('⚠️ Redis not available, using memory cache');
  }
};

// Socket.IO for real-time features
io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);
  
  socket.on('join-challenge', (challengeId) => {
    socket.join(`challenge:${challengeId}`);
  });
  
  socket.on('meme-created', (data) => {
    io.emit('new-meme', data);
  });
  
  socket.on('vote-cast', (data) => {
    io.to(`challenge:${data.challengeId}`).emit('vote-update', data);
  });
  
  socket.on('disconnect', () => {
    console.log('🔌 Client disconnected:', socket.id);
  });
});

// Make io accessible to routes
app.set('io', io);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/memes', memeRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/captions', captionRoutes);
app.use('/api/trends', trendRoutes);
app.use('/api/viral', viralRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/social', socialRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await connectRedis();
  
  server.listen(PORT, () => {
    console.log(`🚀 Meme Generator API running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

startServer();

module.exports = { app, io };
