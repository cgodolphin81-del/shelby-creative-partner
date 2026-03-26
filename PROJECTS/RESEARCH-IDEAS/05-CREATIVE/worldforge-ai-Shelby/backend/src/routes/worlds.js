import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import World from '../models/World.js';
import aiService from '../services/ai.js';
import logger from '../utils/logger.js';
import { authenticate, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/worlds/generate
 * Generate a new world from natural language description
 */
router.post('/generate', authenticate, [
  body('prompt').trim().notEmpty().withMessage('World description is required'),
  body('genre').optional().isIn(['fantasy', 'scifi', 'horror', 'adventure', 'rpg', 'simulation', 'other']),
  body('style').optional().isIn(['realistic', 'cartoon', 'pixel', 'lowpoly', 'anime', 'custom']),
  body('dimensions').optional().isIn(['2d', '3d', '2.5d'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { prompt, genre, style, dimensions } = req.body;
    
    // Check user's world limit based on tier
    const user = await User.findById(req.user.id);
    const userWorldCount = await World.countDocuments({ creator: user._id });
    
    const tierLimits = {
      free: 1,
      creator: Infinity,
      publisher: Infinity
    };
    
    if (userWorldCount >= tierLimits[user.tier]) {
      return res.status(403).json({
        error: 'World limit reached',
        message: `You've reached your world limit for the ${user.tier} tier. Upgrade to create more worlds.`
      });
    }
    
    // Generate world using AI
    const generationResult = await aiService.generateWorld(prompt, {
      genre,
      style,
      dimensions
    });
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'Generation failed',
        message: generationResult.error
      });
    }
    
    // Create the world
    const worldData = {
      ...generationResult.data,
      creator: user._id,
      prompt
    };
    
    const world = new World(worldData);
    await world.save();
    
    // Update user's world count
    user.worlds.push(world._id);
    user.stats.worldsCreated += 1;
    await user.save();
    
    logger.info('World generated', { 
      worldId: world._id, 
      userId: user._id,
      prompt: prompt.substring(0, 100)
    });
    
    res.status(201).json({
      success: true,
      world: {
        id: world._id,
        name: world.name,
        description: world.description,
        genre: world.genre,
        style: world.style,
        dimensions: world.dimensions,
        createdAt: world.createdAt
      },
      generationStats: {
        tokens: generationResult.tokens
      }
    });
  } catch (error) {
    logger.error('World generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/worlds/:id/assets/generate
 * Generate assets for a world
 */
router.post('/:id/assets/generate', authenticate, [
  body('prompt').trim().notEmpty().withMessage('Asset description is required'),
  body('type').optional().isIn(['character', 'building', 'terrain', 'prop', 'vehicle', 'weapon', 'armor', 'item', 'creature', 'vegetation']),
  body('style').optional().isIn(['realistic', 'cartoon', 'pixel', 'lowpoly', 'anime', 'custom']),
  body('dimensions').optional().isIn(['2d', '3d'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { id: worldId } = req.params;
    const { prompt, type, style, dimensions } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Generate asset using AI
    const generationResult = await aiService.generateAsset(prompt, {
      type,
      style,
      dimensions
    });
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'Asset generation failed',
        message: generationResult.error
      });
    }
    
    // TODO: Save asset to database and storage
    // For now, return the generated data
    
    res.json({
      success: true,
      asset: generationResult.data
    });
  } catch (error) {
    logger.error('Asset generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/worlds/:id/logic/generate
 * Generate game logic for a world
 */
router.post('/:id/logic/generate', authenticate, [
  body('description').trim().notEmpty().withMessage('Game logic description is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { id: worldId } = req.params;
    const { description } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Generate game logic using AI
    const generationResult = await aiService.generateGameLogic(description, {
      name: world.name,
      genre: world.genre,
      style: world.style
    });
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'Logic generation failed',
        message: generationResult.error
      });
    }
    
    // Update world with generated logic
    world.rules = generationResult.data.rules || {};
    world.quests = generationResult.data.quests || [];
    world.npcs = generationResult.data.npcs || [];
    await world.save();
    
    res.json({
      success: true,
      logic: generationResult.data,
      generationStats: {
        tokens: generationResult.tokens
      }
    });
  } catch (error) {
    logger.error('Logic generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/worlds/:id/terrain/generate
 * Generate terrain for a world
 */
router.post('/:id/terrain/generate', authenticate, [
  body('description').trim().optional(),
  body('size').optional().isObject()
], async (req, res) => {
  try {
    const { id: worldId } = req.params;
    const { description, size } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Generate terrain using AI
    const terrainDescription = description || world.description;
    const generationResult = await aiService.generateTerrain(terrainDescription, size);
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'Terrain generation failed',
        message: generationResult.error
      });
    }
    
    // Update world with generated terrain
    world.terrain = generationResult.data;
    await world.save();
    
    res.json({
      success: true,
      terrain: generationResult.data
    });
  } catch (error) {
    logger.error('Terrain generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/worlds/:id/npc/generate
 * Generate an NPC for a world
 */
router.post('/:id/npc/generate', authenticate, [
  body('characterConcept').trim().notEmpty().withMessage('Character concept is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { id: worldId } = req.params;
    const { characterConcept } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Generate NPC using AI
    const generationResult = await aiService.generateNPC(characterConcept, {
      name: world.name,
      genre: world.genre
    });
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'NPC generation failed',
        message: generationResult.error
      });
    }
    
    // Add NPC to world
    const npcId = `npc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    world.npcs.push({
      id: npcId,
      ...generationResult.data
    });
    await world.save();
    
    res.json({
      success: true,
      npc: {
        id: npcId,
        ...generationResult.data
      }
    });
  } catch (error) {
    logger.error('NPC generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/worlds/:id/quest/generate
 * Generate a quest for a world
 */
router.post('/:id/quest/generate', authenticate, [
  body('questConcept').trim().notEmpty().withMessage('Quest concept is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { id: worldId } = req.params;
    const { questConcept } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Generate quest using AI
    const generationResult = await aiService.generateQuest(questConcept, {
      name: world.name,
      genre: world.genre
    });
    
    if (!generationResult.success) {
      return res.status(500).json({
        error: 'Quest generation failed',
        message: generationResult.error
      });
    }
    
    // Add quest to world
    const questId = `quest-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    world.quests.push({
      id: questId,
      ...generationResult.data
    });
    await world.save();
    
    res.json({
      success: true,
      quest: {
        id: questId,
        ...generationResult.data
      }
    });
  } catch (error) {
    logger.error('Quest generation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/worlds
 * Get all worlds for the authenticated user
 */
router.get('/', authenticate, async (req, res) => {
  try {
    const { page = 1, limit = 20, sort = '-createdAt' } = req.query;
    
    const worlds = await World.find({ creator: req.user.id })
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const count = await World.countDocuments({ creator: req.user.id });
    
    res.json({
      success: true,
      worlds,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    logger.error('Get worlds error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/worlds/:id
 * Get a specific world
 */
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;
    
    const world = await World.findById(id)
      .populate('creator', 'username displayName avatar')
      .populate('assets', 'name type thumbnail');
    
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Check visibility
    if (world.visibility === 'private' && world.creator._id.toString() !== req.user?.id) {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    res.json({
      success: true,
      world
    });
  } catch (error) {
    logger.error('Get world error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * PUT /api/worlds/:id
 * Update a world
 */
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const world = await World.findOneAndUpdate(
      { _id: id, creator: req.user.id },
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    res.json({
      success: true,
      world
    });
  } catch (error) {
    logger.error('Update world error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * DELETE /api/worlds/:id
 * Delete a world
 */
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    
    const world = await World.findOneAndDelete({ _id: id, creator: req.user.id });
    
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Update user's world list
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { worlds: id }
    });
    
    res.json({
      success: true,
      message: 'World deleted successfully'
    });
  } catch (error) {
    logger.error('Delete world error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

export default router;
