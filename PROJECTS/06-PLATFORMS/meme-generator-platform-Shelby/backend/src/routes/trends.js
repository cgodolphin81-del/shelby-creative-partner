const express = require('express');
const router = express.Router();
const trendTracker = require('../services/trendTracker');
const Trend = require('../models/Trend');

// Get all trends
router.get('/', async (req, res) => {
  try {
    const { platform = 'all', limit = 50, category } = req.query;

    const query = {
      expiresAt: { $gt: new Date() }
    };

    if (platform !== 'all') {
      query.platform = platform;
    }

    if (category) {
      query.category = category;
    }

    const trends = await Trend.find(query)
      .sort({ rank: 1 })
      .limit(parseInt(limit))
      .lean();

    res.json({ success: true, data: trends });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get trending topics (fresh from sources)
router.get('/live', async (req, res) => {
  try {
    const { platform = 'all' } = req.query;

    const trends = await trendTracker.getTrends(platform);

    res.json({ success: true, data: trends });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get trends by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 20 } = req.query;

    const trends = await Trend.find({
      category,
      expiresAt: { $gt: new Date() }
    })
    .sort({ score: -1 })
    .limit(parseInt(limit))
    .lean();

    res.json({ success: true, data: trends });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get trend by topic
router.get('/topic/:topic', async (req, res) => {
  try {
    const { topic } = req.params;

    const trends = await Trend.find({
      topic: { $regex: topic, $options: 'i' },
      expiresAt: { $gt: new Date() }
    })
    .sort({ score: -1 })
    .limit(10)
    .lean();

    res.json({ success: true, data: trends });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Refresh trends (admin)
router.post('/refresh', async (req, res) => {
  try {
    const { platform = 'all' } = req.body;

    const trends = await trendTracker.getTrends(platform);
    await trendTracker.saveTrends(trends);

    res.json({ 
      success: true, 
      message: `Refreshed ${trends.length} trends`,
      count: trends.length
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
