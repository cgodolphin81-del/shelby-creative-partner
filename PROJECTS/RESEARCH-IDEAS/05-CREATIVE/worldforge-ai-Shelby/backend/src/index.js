import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import winston from 'winston';

import config from './config/index.js';
import { connectDatabase, connectMongoDB, connectRedis } from './database/index.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import worldRoutes from './routes/worlds.js';
import assetRoutes from './routes/assets.js';
import logicRoutes from './routes/logic.js';
import marketplaceRoutes from './routes/marketplace.js';
import paymentRoutes from './routes/payments.js';
import exportRoutes from './routes/exports.js';
import multiplayerRoutes from './routes/multiplayer.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import { setupWebSocket } from './services/websocket.js';

dotenv.config();

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: config.allowedOrigins,
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({ origin: config.allowedOrigins }));
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(rateLimiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/worlds', worldRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/logic', logicRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/exports', exportRoutes);
app.use('/api/multiplayer', multiplayerRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Database connections
async function initialize() {
  try {
    await connectDatabase();
    await connectMongoDB();
    await connectRedis();
    
    // Setup WebSocket
    setupWebSocket(io);
    
    // Start server
    httpServer.listen(config.port, config.host, () => {
      logger.info(`🚀 WorldForge AI Backend running on http://${config.host}:${config.port}`);
      logger.info(`🎮 WebSocket server ready`);
    });
  } catch (error) {
    logger.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  httpServer.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

initialize();

export default app;
