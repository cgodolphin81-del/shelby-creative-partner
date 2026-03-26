const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
const Template = require('../models/Template');

// Get all brands (for partnerships)
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find({ 'subscription.status': 'active' })
      .select('name logo industry')
      .lean();

    res.json({ success: true, data: brands });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get brand by ID
router.get('/:id', async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    res.json({ success: true, data: brand });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create brand (registration)
router.post('/', async (req, res) => {
  try {
    const brandData = {
      ...req.body,
      subscription: {
        plan: req.body.plan || 'starter',
        status: 'trial',
        startDate: new Date(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14-day trial
      }
    };

    const brand = new Brand(brandData);
    await brand.save();

    res.status(201).json({ success: true, data: brand });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Create meme pack for brand
router.post('/:id/packs', async (req, res) => {
  try {
    const { name, description, templates, brandGuidelines } = req.body;
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    const pack = {
      name,
      description,
      templates,
      brandGuidelines,
      usage: 0
    };

    brand.memePacks.push(pack);
    await brand.save();

    res.status(201).json({ 
      success: true, 
      data: brand.memePacks[brand.memePacks.length - 1] 
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get brand meme packs
router.get('/:id/packs', async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id)
      .populate('memePacks.templates', 'name imageUrl category');

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    res.json({ success: true, data: brand.memePacks });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create campaign
router.post('/:id/campaigns', async (req, res) => {
  try {
    const { name, brief, budget, startDate, endDate, goals } = req.body;
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    const campaign = {
      name,
      brief,
      budget,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      goals,
      metrics: {
        impressions: 0,
        engagements: 0,
        conversions: 0
      }
    };

    brand.campaigns.push(campaign);
    await brand.save();

    res.status(201).json({ 
      success: true, 
      data: brand.campaigns[brand.campaigns.length - 1] 
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get brand analytics
router.get('/:id/analytics', async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }

    const analytics = {
      totalMemes: brand.stats.memesCreated,
      totalReach: brand.stats.totalReach,
      totalEngagement: brand.stats.totalEngagement,
      activeCampaigns: brand.campaigns.filter(c => 
        new Date(c.endDate) > new Date()
      ).length,
      memePacks: brand.memePacks.length
    };

    res.json({ success: true, data: analytics });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
