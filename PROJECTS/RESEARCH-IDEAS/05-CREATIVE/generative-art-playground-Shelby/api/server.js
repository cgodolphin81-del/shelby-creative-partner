// Backend API Server - Express.js
const express = require('express');
const cors = require('cors');
const ArtGenerationEngine = require('../src/lib/artEngine');
const NFTMintingService = require('../src/lib/nftService');
const PrintOnDemandService = require('../src/lib/printService');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize services
const artEngine = new ArtGenerationEngine({ provider: 'pollinations' });
const nftService = new NFTMintingService();
const printService = new PrintOnDemandService();

// In-memory storage (replace with MongoDB in production)
const userGenerations = new Map();
const orders = new Map();

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Generate art
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, style, width, height, seed, userId } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const result = await artEngine.generate(prompt, {
      style,
      width: width || 1024,
      height: height || 1024,
      seed
    });

    // Store generation
    const generationId = `gen_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const generation = {
      id: generationId,
      userId,
      ...result,
      createdAt: new Date().toISOString()
    };

    if (userId) {
      const userGens = userGenerations.get(userId) || [];
      userGens.push(generation);
      userGenerations.set(userId, userGens);
    }

    res.json({
      success: true,
      generationId,
      imageUrl: result.imageUrl,
      metadata: result.metadata
    });
  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Generate batch
app.post('/api/generate/batch', async (req, res) => {
  try {
    const { prompt, style, count = 4, userId } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const results = await artEngine.generateBatch(prompt, { style }, count);

    res.json({
      success: true,
      count: results.length,
      generations: results
    });
  } catch (error) {
    console.error('Batch generation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get art styles
app.get('/api/styles', (req, res) => {
  const { artStyles, categories } = require('../src/lib/artStyles');
  res.json({
    success: true,
    styles: artStyles,
    categories
  });
});

// Get style by ID
app.get('/api/styles/:id', (req, res) => {
  const { getStyleById } = require('../src/lib/artStyles');
  const style = getStyleById(req.params.id);

  if (!style) {
    return res.status(404).json({ error: 'Style not found' });
  }

  res.json({
    success: true,
    style
  });
});

// Mint NFT
app.post('/api/nft/mint', async (req, res) => {
  try {
    const { imageUrl, metadata, contractAddress, recipient } = req.body;

    if (!imageUrl || !metadata || !contractAddress || !recipient) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await nftService.mintNFT(contractAddress, recipient, metadata, imageUrl);

    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error('NFT minting error:', error);
    res.status(500).json({ error: error.message });
  }
});

// List on OpenSea
app.post('/api/nft/list', async (req, res) => {
  try {
    const { contractAddress, tokenId, price } = req.body;

    if (!contractAddress || !tokenId || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await nftService.listOnOpenSea(contractAddress, tokenId, price);

    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error('OpenSea listing error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get print products
app.get('/api/print/products', async (req, res) => {
  try {
    const products = await printService.getProducts();

    res.json({
      success: true,
      products
    });
  } catch (error) {
    console.error('Product fetch error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create print order
app.post('/api/print/order', async (req, res) => {
  try {
    const { recipient, items, artworkUrl } = req.body;

    if (!recipient || !items || !artworkUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const order = await printService.createOrder({ recipient, items, artworkUrl });

    // Store order
    const orderId = `order_${Date.now()}`;
    orders.set(orderId, { ...order, createdAt: new Date().toISOString() });

    res.json({
      success: true,
      orderId,
      ...order
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get order status
app.get('/api/print/order/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check in-memory first
    let order = orders.get(id);

    if (!order) {
      // Query print service
      const status = await printService.getOrderStatus(id);
      order = { id, ...status };
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    console.error('Order status error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Calculate print pricing
app.get('/api/print/pricing', async (req, res) => {
  try {
    const { productId, variantId, quantity = 1 } = req.query;

    if (!productId || !variantId) {
      return res.status(400).json({ error: 'Product and variant ID required' });
    }

    const pricing = await printService.calculatePricing(productId, variantId, parseInt(quantity));

    res.json({
      success: true,
      pricing
    });
  } catch (error) {
    console.error('Pricing error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get user generations
app.get('/api/user/:userId/generations', (req, res) => {
  const { userId } = req.params;
  const generations = userGenerations.get(userId) || [];

  res.json({
    success: true,
    generations: generations.reverse(), // Most recent first
    count: generations.length
  });
});

// Stripe webhook (for subscription payments)
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Verify webhook signature (implementation omitted for brevity)
  // Process subscription events

  res.json({ received: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎨 ArtPlayground API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
