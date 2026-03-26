const express = require('express');
const router = express.Router();
const Meme = require('../models/Meme');
const User = require('../models/User');
const Challenge = require('../models/Challenge');

// Get platform analytics
router.get('/platform', async (req, res) => {
  try {
    const [
      totalUsers,
      totalMemes,
      totalChallenges,
      activeChallenges
    ] = await Promise.all([
      User.countDocuments(),
      Meme.countDocuments(),
      Challenge.countDocuments(),
      Challenge.countDocuments({ status: 'active' })
    ]);

    const recentMemes = await Meme.aggregate([
      { $sort: { createdAt: -1 } },
      { $limit: 30 },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
          views: { $sum: '$stats.views' },
          likes: { $sum: '$stats.likes' }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      success: true,
      data: {
        totalUsers,
        totalMemes,
        totalChallenges,
        activeChallenges,
        recentActivity: recentMemes
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get user analytics
router.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const memes = await Meme.find({ user: req.params.userId });
    
    const totalViews = memes.reduce((sum, m) => sum + (m.stats.views || 0), 0);
    const totalLikes = memes.reduce((sum, m) => sum + (m.stats.likes || 0), 0);
    const totalShares = memes.reduce((sum, m) => sum + (m.stats.shares || 0), 0);
    const avgViralScore = memes.reduce((sum, m) => sum + (m.viralScore?.predicted || 0), 0) / memes.length || 0;

    res.json({
      success: true,
      data: {
        memesCreated: user.stats.memesCreated,
        totalViews,
        totalLikes,
        totalShares,
        avgViralScore: Math.round(avgViralScore),
        topMemes: memes.sort((a, b) => b.stats.likes - a.stats.likes).slice(0, 5)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get meme analytics
router.get('/meme/:memeId', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id)
      .populate('template');

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    const analytics = {
      views: meme.stats.views,
      likes: meme.stats.likes,
      shares: meme.stats.shares,
      downloads: meme.stats.downloads,
      comments: meme.stats.comments,
      engagementRate: calculateEngagementRate(meme.stats),
      viralScore: meme.viralScore,
      template: meme.template?.name,
      createdAt: meme.createdAt,
      performance: getPerformanceRating(meme.stats)
    };

    res.json({ success: true, data: analytics });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get trending analytics
router.get('/trending', async (req, res) => {
  try {
    const trending = await Meme.find({ isPublic: true })
      .sort({ 'stats.likes': -1 })
      .limit(10)
      .populate('user', 'username')
      .populate('template', 'name category')
      .lean();

    res.json({ success: true, data: trending });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get category analytics
router.get('/categories', async (req, res) => {
  try {
    const categories = await Meme.aggregate([
      { $match: { isPublic: true } },
      { $lookup: {
          from: 'templates',
          localField: 'template',
          foreignField: '_id',
          as: 'template'
        }
      },
      { $unwind: '$template' },
      {
        $group: {
          _id: '$template.category',
          count: { $sum: 1 },
          totalViews: { $sum: '$stats.views' },
          totalLikes: { $sum: '$stats.likes' },
          avgViralScore: { $avg: '$viralScore.predicted' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper functions
function calculateEngagementRate(stats) {
  const { views = 0, likes = 0, shares = 0 } = stats;
  if (views === 0) return 0;
  return Math.round(((likes + shares * 2) / views) * 100);
}

function getPerformanceRating(stats) {
  const { views = 0, likes = 0 } = stats;
  const rate = views > 0 ? (likes / views) * 100 : 0;
  
  if (rate >= 10) return '🔥 Viral';
  if (rate >= 5) return '⭐ Great';
  if (rate >= 2) return '👍 Good';
  return '📊 Average';
}

module.exports = router;
