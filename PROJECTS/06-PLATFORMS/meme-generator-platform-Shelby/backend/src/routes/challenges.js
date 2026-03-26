const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');
const Meme = require('../models/Meme');

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const { status, type, featured, page = 1, limit = 20 } = req.query;

    const query = {};

    if (status) query.status = status;
    if (type) query.type = type;
    if (featured === 'true') query.featured = true;

    const challenges = await Challenge.find(query)
      .sort({ startDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('sponsor', 'name logo')
      .lean();

    const count = await Challenge.countDocuments(query);

    res.json({
      success: true,
      data: challenges,
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

// Get active challenges
router.get('/active', async (req, res) => {
  try {
    const now = new Date();

    const challenges = await Challenge.find({
      status: 'active',
      startDate: { $lte: now },
      endDate: { $gte: now }
    })
    .sort({ endDate: 1 })
    .populate('sponsor', 'name logo')
    .lean();

    res.json({ success: true, data: challenges });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get challenge by ID
router.get('/:id', async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id)
      .populate('sponsor', 'name logo')
      .populate('entries.meme', 'imageUrl stats')
      .populate('entries.user', 'username avatar')
      .populate('winner');

    if (!challenge) {
      return res.status(404).json({ success: false, error: 'Challenge not found' });
    }

    res.json({ success: true, data: challenge });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Join challenge (submit meme)
router.post('/:id/join', async (req, res) => {
  try {
    const { memeId } = req.body;
    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ success: false, error: 'Challenge not found' });
    }

    if (challenge.status !== 'active') {
      return res.status(400).json({ 
        success: false, 
        error: 'Challenge is not accepting entries' 
      });
    }

    const meme = await Meme.findOne({
      _id: memeId,
      user: req.user._id
    });

    if (!meme) {
      return res.status(404).json({ success: false, error: 'Meme not found' });
    }

    // Check if already joined
    const alreadyJoined = challenge.entries.some(
      entry => entry.user.toString() === req.user._id.toString()
    );

    if (alreadyJoined) {
      return res.status(400).json({ 
        success: false, 
        error: 'You have already joined this challenge' 
      });
    }

    // Add entry
    challenge.entries.push({
      meme: memeId,
      user: req.user._id,
      votes: 0
    });
    challenge.participants += 1;
    await challenge.save();

    // Update meme
    meme.challenge = challenge._id;
    await meme.save();

    res.json({ 
      success: true, 
      message: 'Successfully joined challenge!',
      entry: challenge.entries[challenge.entries.length - 1]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Vote for entry
router.post('/:id/vote', async (req, res) => {
  try {
    const { entryId } = req.body;
    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ success: false, error: 'Challenge not found' });
    }

    if (!challenge.votingEnabled) {
      return res.status(400).json({ 
        success: false, 
        error: 'Voting is not enabled' 
      });
    }

    const entry = challenge.entries.id(entryId);
    if (!entry) {
      return res.status(404).json({ success: false, error: 'Entry not found' });
    }

    entry.votes += 1;
    challenge.totalVotes += 1;
    await challenge.save();

    // Emit socket event for real-time updates
    const io = req.app.get('io');
    if (io) {
      io.to(`challenge:${challenge._id}`).emit('vote-update', {
        entryId,
        votes: entry.votes
      });
    }

    res.json({ success: true, votes: entry.votes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create challenge (admin)
router.post('/', async (req, res) => {
  try {
    const challengeData = {
      ...req.body,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate)
    };

    const challenge = new Challenge(challengeData);
    await challenge.save();

    res.status(201).json({ success: true, data: challenge });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
