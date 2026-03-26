const express = require('express');
const router = express.Router();
const viralPredictor = require('../services/viralPredictor');
const Meme = require('../models/Meme');

// Predict viral potential for meme data
router.post('/predict', async (req, res) => {
  try {
    const { template, captions, tags, isPublic, metadata } = req.body;

    const prediction = await viralPredictor.predictViralPotential({
      template,
      captions,
      tags,
      isPublic,
      metadata
    });

    res.json({ success: true, data: prediction });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get viral score for existing meme
router.get('/meme/:id', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    // Update actual viral score based on engagement
    const engagementScore = calculateEngagementScore(meme.stats);
    
    if (meme.viralScore) {
      meme.viralScore.actual = engagementScore;
      await meme.save();
    }

    res.json({ 
      success: true, 
      data: {
        predicted: meme.viralScore?.predicted || 0,
        actual: engagementScore,
        factors: meme.viralScore?.factors || []
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get top viral memes
router.get('/top', async (req, res) => {
  try {
    const { limit = 20 } = req.query;

    const memes = await Meme.find({ isPublic: true })
      .sort({ 'viralScore.predicted': -1 })
      .limit(parseInt(limit))
      .populate('user', 'username')
      .populate('template', 'name')
      .lean();

    res.json({ success: true, data: memes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper function
function calculateEngagementScore(stats) {
  const { views = 0, likes = 0, shares = 0, comments = 0 } = stats;
  
  // Weighted engagement calculation
  let score = 0;
  score += Math.min(30, views / 100); // Views contribute up to 30 points
  score += Math.min(40, likes * 2); // Likes contribute up to 40 points
  score += Math.min(20, shares * 5); // Shares contribute up to 20 points
  score += Math.min(10, comments * 3); // Comments contribute up to 10 points
  
  return Math.min(100, Math.round(score));
}

module.exports = router;
