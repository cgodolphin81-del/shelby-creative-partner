const express = require('express');
const router = express.Router();
const aiCaptionGenerator = require('../services/aiCaptionGenerator');
const Trend = require('../models/Trend');

// Generate captions for template
router.post('/generate', async (req, res) => {
  try {
    const { template, context, topic, tone, variations } = req.body;

    const captions = await aiCaptionGenerator.generateCaptions({
      template,
      context,
      topic,
      tone: tone || 'humorous',
      variations: variations || 5
    });

    res.json({ success: true, data: captions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Generate trending captions
router.post('/trending', async (req, res) => {
  try {
    const { templateId, trendId } = req.body;

    const Template = require('../models/Template');
    const template = await Template.findById(templateId);

    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    const trend = trendId ? await Trend.findById(trendId) : null;

    if (!trend) {
      return res.status(404).json({ success: false, error: 'Trend not found' });
    }

    const captions = await aiCaptionGenerator.generateTrendingCaptions(trend, template);

    res.json({ success: true, data: captions, trend });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Generate occasion-based captions
router.get('/occasion/:occasion', async (req, res) => {
  try {
    const { occasion } = req.params;

    const captions = await aiCaptionGenerator.generateOccasionCaptions(occasion);

    res.json({ success: true, data: captions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Rewrite caption with different tone
router.post('/rewrite', async (req, res) => {
  try {
    const { caption, tone } = req.body;

    if (!caption || !tone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Caption and tone are required' 
      });
    }

    const rewritten = await aiCaptionGenerator.rewriteCaption(caption, tone);

    res.json({ success: true, data: rewritten });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
