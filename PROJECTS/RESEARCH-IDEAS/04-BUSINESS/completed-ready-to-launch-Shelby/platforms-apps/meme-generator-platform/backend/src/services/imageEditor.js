const sharp = require('sharp');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs').promises;
const path = require('path');

class ImageEditorService {
  constructor() {
    this.uploadDir = process.env.UPLOAD_DIR || './uploads';
    this.outputDir = process.env.OUTPUT_DIR || './output';
    this.fontsDir = path.join(__dirname, '../../shared/assets/fonts');
    this.stickersDir = path.join(__dirname, '../../shared/assets/stickers');
    
    this.ensureDirectories();
  }

  async ensureDirectories() {
    await fs.mkdir(this.uploadDir, { recursive: true });
    await fs.mkdir(this.outputDir, { recursive: true });
  }

  // Create meme from template
  async createMeme(templatePath, options) {
    const {
      captions = [],
      filters = [],
      stickers = [],
      drawings = [],
      outputFormat = 'png',
      quality = 90
    } = options;

    // Load template
    const template = await loadImage(templatePath);
    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');

    // Draw template
    ctx.drawImage(template, 0, 0);

    // Apply filters
    if (filters.length > 0) {
      await this.applyFilters(ctx, canvas, filters);
    }

    // Add captions
    if (captions.length > 0) {
      await this.addCaptions(ctx, captions);
    }

    // Add stickers
    if (stickers.length > 0) {
      await this.addStickers(ctx, stickers);
    }

    // Add drawings
    if (drawings.length > 0) {
      await this.addDrawings(ctx, drawings);
    }

    // Add watermark if needed
    if (options.addWatermark) {
      await this.addWatermark(ctx, canvas, options.watermarkConfig);
    }

    // Export
    const buffer = canvas.toBuffer(`image/${outputFormat}`, { quality });
    const filename = `meme-${Date.now()}.${outputFormat}`;
    const outputPath = path.join(this.outputDir, filename);

    await fs.writeFile(outputPath, buffer);

    return {
      path: outputPath,
      filename,
      url: `/output/${filename}`,
      width: canvas.width,
      height: canvas.height,
      format: outputFormat,
      size: buffer.length
    };
  }

  // Add text captions
  async addCaptions(ctx, captions) {
    for (const caption of captions) {
      const {
        text,
        position,
        font = 'Impact',
        fontSize = 48,
        color = '#FFFFFF',
        strokeColor = '#000000',
        align = 'center'
      } = caption;

      ctx.font = `bold ${fontSize}px "${font}", sans-serif`;
      ctx.textAlign = align;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = fontSize / 15;

      const x = position?.x || ctx.canvas.width / 2;
      const y = position?.y || 60;

      // Text with stroke (classic meme style)
      ctx.strokeText(text, x, y);
      ctx.fillText(text, x, y);
    }
  }

  // Apply image filters
  async applyFilters(ctx, canvas, filters) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (const filter of filters) {
      switch (filter.name) {
        case 'grayscale':
          this.applyGrayscale(data, filter.intensity || 1);
          break;
        case 'sepia':
          this.applySepia(data, filter.intensity || 1);
          break;
        case 'brightness':
          this.applyBrightness(data, filter.intensity || 0);
          break;
        case 'contrast':
          this.applyContrast(data, filter.intensity || 1);
          break;
        case 'saturation':
          this.applySaturation(data, filter.intensity || 1);
          break;
        case 'blur':
          // Blur requires canvas filter property
          ctx.filter = `blur(${filter.intensity || 2}px)`;
          break;
        case 'vintage':
          this.applyVintage(data);
          break;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  applyGrayscale(data, intensity) {
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i] + (avg - data[i]) * intensity;
      data[i + 1] = data[i + 1] + (avg - data[i + 1]) * intensity;
      data[i + 2] = data[i + 2] + (avg - data[i + 2]) * intensity;
    }
  }

  applySepia(data, intensity) {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      data[i] = Math.min(255, r + (0.393 * r + 0.769 * g + 0.189 * b - r) * intensity);
      data[i + 1] = Math.min(255, g + (0.349 * r + 0.686 * g + 0.168 * b - g) * intensity);
      data[i + 2] = Math.min(255, b + (0.272 * r + 0.534 * g + 0.131 * b - b) * intensity);
    }
  }

  applyBrightness(data, brightness) {
    const adjustment = brightness * 255;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, Math.max(0, data[i] + adjustment));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + adjustment));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + adjustment));
    }
  }

  applyContrast(data, contrast) {
    const factor = (259 * (contrast * 255 + 255)) / (255 * (259 - contrast * 255));
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, Math.max(0, factor * (data[i] - 128) + 128));
      data[i + 1] = Math.min(255, Math.max(0, factor * (data[i + 1] - 128) + 128));
      data[i + 2] = Math.min(255, Math.max(0, factor * (data[i + 2] - 128) + 128));
    }
  }

  applySaturation(data, saturation) {
    for (let i = 0; i < data.length; i += 4) {
      const max = Math.max(data[i], data[i + 1], data[i + 2]);
      const min = Math.min(data[i], data[i + 1], data[i + 2]);
      const lum = (max + min) / 2;
      
      if (max !== min) {
        data[i] = lum + (data[i] - lum) * saturation;
        data[i + 1] = lum + (data[i + 1] - lum) * saturation;
        data[i + 2] = lum + (data[i + 2] - lum) * saturation;
      }
    }
  }

  applyVintage(data) {
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, data[i] * 1.1); // Red boost
      data[i + 1] = data[i + 1] * 0.9; // Green reduce
      data[i + 2] = data[i + 2] * 0.8; // Blue reduce
      data[i + 3] = Math.min(255, data[i + 3] * 0.95); // Slight fade
    }
  }

  // Add stickers
  async addStickers(ctx, stickers) {
    for (const sticker of stickers) {
      try {
        const stickerPath = path.join(this.stickersDir, `${sticker.type}.png`);
        const stickerImage = await loadImage(stickerPath);
        
        ctx.save();
        ctx.translate(sticker.position.x, sticker.position.y);
        ctx.rotate((sticker.rotation || 0) * Math.PI / 180);
        ctx.scale(sticker.scale || 1, sticker.scale || 1);
        ctx.drawImage(stickerImage, -stickerImage.width / 2, -stickerImage.height / 2);
        ctx.restore();
      } catch (err) {
        console.error('Sticker error:', err.message);
      }
    }
  }

  // Add drawings
  async addDrawings(ctx, drawings) {
    for (const drawing of drawings) {
      ctx.beginPath();
      ctx.strokeStyle = drawing.color || '#000000';
      ctx.lineWidth = drawing.strokeWidth || 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Parse SVG path or simple coordinates
      if (drawing.path) {
        // Simple path parsing (in production, use proper SVG parser)
        const points = drawing.path.split(' ').map(p => parseFloat(p));
        if (points.length >= 2) {
          ctx.moveTo(points[0], points[1]);
          for (let i = 2; i < points.length; i += 2) {
            ctx.lineTo(points[i], points[i + 1]);
          }
        }
      }

      ctx.stroke();
    }
  }

  // Add watermark
  async addWatermark(ctx, canvas, config = {}) {
    const {
      text = 'MemeGenerator',
      position = 'bottom-right',
      opacity = 0.5,
      fontSize = 24,
      color = '#FFFFFF'
    } = config;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';

    let x, y;
    const padding = 20;

    switch (position) {
      case 'top-left':
        x = padding;
        y = padding + fontSize;
        ctx.textAlign = 'left';
        break;
      case 'top-right':
        x = canvas.width - padding;
        y = padding + fontSize;
        break;
      case 'bottom-left':
        x = padding;
        y = canvas.height - padding;
        ctx.textAlign = 'left';
        break;
      default: // bottom-right
        x = canvas.width - padding;
        y = canvas.height - padding;
    }

    ctx.fillText(text, x, y);
    ctx.restore();
  }

  // Resize image
  async resizeImage(inputPath, options) {
    const { width, height, fit = 'contain', background = { r: 0, g: 0, b: 0, alpha: 0 } } = options;

    const metadata = await sharp(inputPath).metadata();
    const outputFilename = `resized-${path.basename(inputPath)}`;
    const outputPath = path.join(this.outputDir, outputFilename);

    await sharp(inputPath)
      .resize(width, height, { fit, background })
      .toFile(outputPath);

    return { path: outputPath, filename: outputFilename };
  }

  // Convert image format
  async convertFormat(inputPath, format, options = {}) {
    const outputFilename = `${path.basename(inputPath, path.extname(inputPath))}.${format}`;
    const outputPath = path.join(this.outputDir, outputFilename);

    await sharp(inputPath)
      .toFormat(format, options)
      .toFile(outputPath);

    return { path: outputPath, filename: outputFilename };
  }

  // Get available fonts
  async getAvailableFonts() {
    try {
      const files = await fs.readdir(this.fontsDir);
      return files
        .filter(f => f.endsWith('.ttf') || f.endsWith('.otf'))
        .map(f => path.basename(f, path.extname(f)));
    } catch (err) {
      return ['Impact', 'Arial', 'Helvetica', 'Times New Roman', 'Comic Sans MS'];
    }
  }

  // Get available stickers
  async getAvailableStickers() {
    try {
      const files = await fs.readdir(this.stickersDir);
      return files
        .filter(f => f.endsWith('.png'))
        .map(f => path.basename(f, path.extname(f)));
    } catch (err) {
      return ['fire', 'heart', 'laugh', 'cry', 'thinking', 'cool'];
    }
  }
}

module.exports = new ImageEditorService();
