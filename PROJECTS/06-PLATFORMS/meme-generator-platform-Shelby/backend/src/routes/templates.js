const express = require('express');
const router = express.Router();
const Template = require('../models/Template');
const Meme = require('../models/Meme');

// Get all templates with filters
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      search, 
      premium, 
      trending, 
      page = 1, 
      limit = 50 
    } = req.query;

    const query = { status: 'active' };

    if (category) query.category = category;
    if (premium !== undefined) query.isPremium = premium === 'true';
    if (trending === 'true') query.isTrending = true;

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const templates = await Template.find(query)
      .sort({ usageCount: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();

    const count = await Template.countDocuments(query);

    res.json({
      success: true,
      data: templates,
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

// Get template by ID
router.get('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    
    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    // Increment usage count
    template.usageCount += 1;
    await template.save();

    res.json({ success: true, data: template });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get categories
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Template.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get trending templates
router.get('/meta/trending', async (req, res) => {
  try {
    const trending = await Template.find({ 
      isTrending: true,
      status: 'active'
    })
    .sort({ usageCount: -1 })
    .limit(20)
    .lean();

    res.json({ success: true, data: trending });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get popular templates
router.get('/meta/popular', async (req, res) => {
  try {
    const popular = await Template.find({ status: 'active' })
      .sort({ usageCount: -1 })
      .limit(50)
      .lean();

    res.json({ success: true, data: popular });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Like template
router.post('/:id/like', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    
    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    template.likes += 1;
    await template.save();

    res.json({ success: true, likes: template.likes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create template (admin/user upload)
router.post('/', async (req, res) => {
  try {
    const templateData = {
      ...req.body,
      createdBy: req.user?._id
    };

    const template = new Template(templateData);
    await template.save();

    res.status(201).json({ success: true, data: template });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Update template
router.put('/:id', async (req, res) => {
  try {
    const template = await Template.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    res.json({ success: true, data: template });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Delete template
router.delete('/:id', async (req, res) => {
  try {
    const template = await Template.findByIdAndDelete(req.params.id);

    if (!template) {
      return res.status(404).json({ success: false, error: 'Template not found' });
    }

    res.json({ success: true, message: 'Template deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
