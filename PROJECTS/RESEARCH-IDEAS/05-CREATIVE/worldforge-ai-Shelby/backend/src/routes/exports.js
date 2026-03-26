import express from 'express';
import { body, validationResult } from 'express-validator';
import World from '../models/World.js';
import exportService from '../services/exporter.js';
import logger from '../utils/logger.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/exports/:worldId/webgl
 * Export world to WebGL format
 */
router.post('/:worldId/webgl', authenticate, async (req, res) => {
  try {
    const { worldId } = req.params;
    const { size, includePhysics = true, includeLighting = true } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Start export process
    const exportResult = await exportService.exportToWebGL(world, {
      size,
      includePhysics,
      includeLighting
    });
    
    if (!exportResult.success) {
      return res.status(500).json({
        error: 'Export failed',
        message: exportResult.error
      });
    }
    
    // Update world with export info
    world.exports.push({
      format: 'webgl',
      url: `/exports/${exportResult.exportId}`,
      status: 'completed'
    });
    await world.save();
    
    res.json({
      success: true,
      export: {
        id: exportResult.exportId,
        format: 'webgl',
        downloadUrl: `/api/exports/download/${exportResult.exportId}`,
        previewUrl: `/exports/${exportResult.exportId}/index.html`,
        files: exportResult.files
      }
    });
  } catch (error) {
    logger.error('WebGL export error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/exports/:worldId/unity
 * Export world to Unity format
 */
router.post('/:worldId/unity', authenticate, async (req, res) => {
  try {
    const { worldId } = req.params;
    const { unityVersion = '2022.3', renderPipeline = 'urp' } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Start export process
    const exportResult = await exportService.exportToUnity(world, {
      unityVersion,
      renderPipeline
    });
    
    if (!exportResult.success) {
      return res.status(500).json({
        error: 'Export failed',
        message: exportResult.error
      });
    }
    
    // Update world with export info
    world.exports.push({
      format: 'unity',
      url: `/exports/${exportResult.exportId}`,
      status: 'completed'
    });
    await world.save();
    
    res.json({
      success: true,
      export: {
        id: exportResult.exportId,
        format: 'unity',
        downloadUrl: `/api/exports/download/${exportResult.exportId}`,
        files: exportResult.files,
        unityVersion,
        renderPipeline
      }
    });
  } catch (error) {
    logger.error('Unity export error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/exports/:worldId/godot
 * Export world to Godot format
 */
router.post('/:worldId/godot', authenticate, async (req, res) => {
  try {
    const { worldId } = req.params;
    const { godotVersion = '4.0' } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Start export process
    const exportResult = await exportService.exportToGodot(world, {
      godotVersion
    });
    
    if (!exportResult.success) {
      return res.status(500).json({
        error: 'Export failed',
        message: exportResult.error
      });
    }
    
    // Update world with export info
    world.exports.push({
      format: 'godot',
      url: `/exports/${exportResult.exportId}`,
      status: 'completed'
    });
    await world.save();
    
    res.json({
      success: true,
      export: {
        id: exportResult.exportId,
        format: 'godot',
        downloadUrl: `/api/exports/download/${exportResult.exportId}`,
        files: exportResult.files,
        godotVersion
      }
    });
  } catch (error) {
    logger.error('Godot export error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * POST /api/exports/:worldId/gltf
 * Export world to glTF/GLB format
 */
router.post('/:worldId/gltf', authenticate, async (req, res) => {
  try {
    const { worldId } = req.params;
    const { binary = true } = req.body;
    
    // Verify world ownership
    const world = await World.findOne({ _id: worldId, creator: req.user.id });
    if (!world) {
      return res.status(404).json({ error: 'World not found' });
    }
    
    // Start export process
    const exportResult = await exportService.exportToGLTF(world, {
      binary
    });
    
    if (!exportResult.success) {
      return res.status(500).json({
        error: 'Export failed',
        message: exportResult.error
      });
    }
    
    // Update world with export info
    world.exports.push({
      format: 'gltf',
      url: `/exports/${exportResult.exportId}`,
      status: 'completed'
    });
    await world.save();
    
    res.json({
      success: true,
      export: {
        id: exportResult.exportId,
        format: binary ? 'glb' : 'gltf',
        downloadUrl: `/api/exports/download/${exportResult.exportId}`,
        files: exportResult.files
      }
    });
  } catch (error) {
    logger.error('glTF export error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/exports/:exportId/status
 * Get export status
 */
router.get('/:exportId/status', authenticate, async (req, res) => {
  try {
    const { exportId } = req.params;
    
    // Find the world with this export
    const world = await World.findOne({
      'exports._id': exportId,
      creator: req.user.id
    });
    
    if (!world) {
      return res.status(404).json({ error: 'Export not found' });
    }
    
    const exportData = world.exports.id(exportId);
    
    res.json({
      success: true,
      export: {
        id: exportId,
        format: exportData.format,
        status: exportData.status,
        createdAt: exportData.createdAt,
        url: exportData.url
      }
    });
  } catch (error) {
    logger.error('Get export status error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/exports/download/:exportId
 * Download export package
 */
router.get('/download/:exportId', authenticate, async (req, res) => {
  try {
    const { exportId } = req.params;
    
    // Find the world with this export
    const world = await World.findOne({
      'exports._id': exportId,
      creator: req.user.id
    });
    
    if (!world) {
      return res.status(404).json({ error: 'Export not found' });
    }
    
    const exportData = world.exports.id(exportId);
    
    if (exportData.status !== 'completed') {
      return res.status(400).json({
        error: 'Export not ready',
        status: exportData.status
      });
    }
    
    // TODO: Implement actual file download
    // For now, return the export path
    res.json({
      success: true,
      downloadUrl: exportData.url,
      format: exportData.format
    });
  } catch (error) {
    logger.error('Download export error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

export default router;
