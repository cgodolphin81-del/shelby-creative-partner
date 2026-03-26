const express = require('express');
const router = express.Router();
const socialScheduler = require('../services/socialScheduler');

// Schedule post
router.post('/schedule', async (req, res) => {
  try {
    const { memeId, platform, scheduledAt, caption, options } = req.body;

    const result = await socialScheduler.schedulePost(
      memeId,
      platform,
      new Date(scheduledAt),
      caption,
      options
    );

    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Schedule to multiple platforms
router.post('/schedule-multi', async (req, res) => {
  try {
    const { memeId, platforms, scheduledAt, captions } = req.body;

    const results = await socialScheduler.scheduleMultiPlatform(
      memeId,
      platforms,
      new Date(scheduledAt),
      captions
    );

    res.json({ success: true, data: results });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Auto-schedule
router.post('/auto-schedule', async (req, res) => {
  try {
    const { memeId, platforms, caption } = req.body;

    const results = await socialScheduler.autoSchedule(memeId, platforms, caption);

    res.json({ success: true, data: results });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get scheduled posts
router.get('/scheduled/:memeId', async (req, res) => {
  try {
    const posts = await socialScheduler.getScheduledPosts(req.params.memeId);

    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Cancel scheduled post
router.delete('/scheduled/:memeId/:postId', async (req, res) => {
  try {
    const result = await socialScheduler.cancelScheduledPost(
      req.params.memeId,
      req.params.postId
    );

    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get best posting times
router.get('/best-times/:platform', (req, res) => {
  try {
    const times = socialScheduler.getBestPostingTimes(req.params.platform);

    res.json({ success: true, data: times });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
