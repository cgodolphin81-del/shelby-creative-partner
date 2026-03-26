/**
 * AI Fashion Design Studio - Main Server
 * A comprehensive platform for AI-powered fashion design
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const designRoutes = require('./routes/design');
const fabricRoutes = require('./routes/fabric');
const tryOnRoutes = require('./routes/tryon');
const collectionRoutes = require('./routes/collection');
const techPackRoutes = require('./routes/techpack');
const manufacturerRoutes = require('./routes/manufacturer');
const marketplaceRoutes = require('./routes/marketplace');
const sustainabilityRoutes = require('./routes/sustainability');
const analyticsRoutes = require('./routes/analytics');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', express.static(path.join(__dirname, 'data')));
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API Routes
app.use('/api/design', designRoutes);
app.use('/api/fabric', fabricRoutes);
app.use('/api/tryon', tryOnRoutes);
app.use('/api/collection', collectionRoutes);
app.use('/api/techpack', techPackRoutes);
app.use('/api/manufacturer', manufacturerRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/sustainability', sustainabilityRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'AI Fashion Design Studio',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Platform info
app.get('/api/info', (req, res) => {
  res.json({
    name: 'AI Fashion Design Studio',
    version: '1.0.0',
    features: [
      'Design Generation Engine',
      'Fabric/Material Library (50+ materials)',
      'Virtual Try-On System',
      'Collection Builder',
      'Tech Pack Generator',
      'Manufacturer Matching',
      'Pricing Model (Free/Pro/Brand)',
      'Marketplace',
      'Sustainability Scoring',
      'Revenue Projections'
    ],
    pricing: {
      free: { price: 0, designs: 5, period: 'month' },
      pro: { price: 39.99, designs: 'unlimited', period: 'month' },
      brand: { price: 199.99, designs: 'unlimited', manufacturing: true, period: 'month' }
    }
  });
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`🎨 AI Fashion Design Studio running on port ${PORT}`);
  console.log(`📊 Features: Design Engine, Fabric Library, Virtual Try-On, Collections, Tech Packs, Manufacturing, Marketplace`);
});

module.exports = app;
