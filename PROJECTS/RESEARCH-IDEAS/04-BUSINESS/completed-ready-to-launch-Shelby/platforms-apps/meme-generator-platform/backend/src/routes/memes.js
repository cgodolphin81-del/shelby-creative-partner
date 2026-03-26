const express = require('express');
const router = express.Router();
const Meme = require('../models/Meme');
const Template = require('../models/Template');
const imageEditor = require('../services/imageEditor');
const viralPredictor = require('../services/viralPredictor');

// Create meme
router.post('/create', async (req, res) => {
  try {
    const {
      templateId,
      captions,
      filters,
      stickers,
      drawings,
      isPublic,
      tags,
      challenge
    } = req.body;

    // Get template
    const template = await Template.findById(templateId);
    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    // Generate meme image
    const templatePath = template.imageUrl;
    const memeResult = await imageEditor.createMeme(templatePath, {
      captions,
      filters,
      stickers,
      drawings,
      addWatermark: req.user?.subscription?.plan === 'free',
      watermarkConfig: { text: 'MemeGenerator' }
    });

    // Create meme document
    const meme = new Meme({
      user: req.user._id,
      template: templateId,
      imageUrl: memeResult.url,
      thumbnailUrl: memeResult.url,
      captions,
      filters,
      stickers,
      drawings,
      isPublic: isPublic || false,
      hasWatermark: req.user?.subscription?.plan === 'free',
      tags: tags || [],
      challenge,
      metadata: {
        width: memeResult.width,
        height: memeResult.height,
        format: memeResult.format,
        size: memeResult.size
      }
    });

    // Predict viral potential
    const viralPrediction = await viralPredictor.predictViralPotential({
      captions,
      template: templateId,
      tags,
      isPublic: meme.isPublic,
      metadata: meme.metadata
    });

    meme.viralScore = {
      predicted: viralPrediction.score,
      factors: viralPrediction.factors
    };

    await meme.save();

    // Update template usage
    template.usageCount += 1;
    await template.save();

    // Update user stats
    req.user.stats.memesCreated += 1;
    await req.user.save();

    res.status(201).json({
      success: true,
      data: meme,
      viralPrediction
    });
  } catch (err) {
    console.error('Create meme error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get user's memes
router.get('/my', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;

    const memes = await Meme.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('template', 'name category')
      .lean();

    const count = await Meme.countDocuments({ user: req.user._id });

    res.json({
      success: true,
      data: memes,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get public memes (feed)
router.get('/feed', async (req, res) => {
  try {
    const { page = 1, limit = 20, category, trending } = req.query;

    const query = { isPublic: true };

    if (trending === 'true') {
      query['viralScore.predicted'] = { $gte: 70 };
    }

    const memes = await Meme.find(query)
      .sort({ 'stats.likes': -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('user', 'username avatar')
      .populate('template', 'name category')
      .lean();

    const count = await Meme.countDocuments(query);

    res.json({
      success: true,
      data: memes,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get meme by ID
router.get('/:id', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id)
      .populate('user', 'username avatar')
      .populate('template')
      .populate('challenge');

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    // Increment views
    meme.stats.views += 1;
    await meme.save();

    res.json({ success: true, data: meme });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Like meme
router.post('/:id/like', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    meme.stats.likes += 1;
    await meme.save();

    res.json({ success: true, likes: meme.stats.likes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Share meme
router.post('/:id/share', async (req, res) => {
  try {
    const { platform } = req.body;
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    meme.stats.shares += 1;
    await meme.save();

    res.json({
      success: true,
      shares: meme.stats.shares,
      shareUrl: `${process.env.FRONTEND_URL}/meme/${meme._id}`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Download meme
router.get('/:id/download', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    // Remove watermark for Pro users
    if (req.user?.subscription?.plan !== 'free') {
      // Regenerate without watermark
      // Implementation depends on storage setup
    }

    meme.stats.downloads += 1;
    await meme.save();

    res.download(meme.imageUrl);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete meme
router.delete('/:id', async (req, res) => {
  try {
    const meme = await Meme.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    res.json({ success: true, message: 'Meme deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
