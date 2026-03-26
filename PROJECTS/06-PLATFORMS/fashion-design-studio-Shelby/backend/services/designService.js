/**
 * Design Generation Engine Service
 * Handles text-to-garment generation, style transfer, and trend analysis
 */

const { v4: uuidv4 } = require('uuid');

class DesignGenerationService {
  constructor() {
    this.designs = new Map();
    this.styleTemplates = this.initializeStyleTemplates();
    this.trendData = this.initializeTrendData();
  }

  initializeStyleTemplates() {
    return {
      casual: {
        name: 'Casual',
        keywords: ['comfortable', 'relaxed', 'everyday', 'streetwear'],
        colors: ['#4A90E2', '#7ED321', '#F5A623', '#BD10E0', '#50E3C2'],
        fabrics: ['cotton', 'denim', 'jersey', 'fleece']
      },
      formal: {
        name: 'Formal',
        keywords: ['elegant', 'sophisticated', 'business', 'evening'],
        colors: ['#000000', '#1A1A1A', '#2C3E50', '#8E44AD', '#C0392B'],
        fabrics: ['silk', 'satin', 'wool', 'velvet']
      },
      sporty: {
        name: 'Sporty',
        keywords: ['athletic', 'performance', 'active', 'gym'],
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
        fabrics: ['polyester', 'spandex', 'nylon', 'mesh']
      },
      bohemian: {
        name: 'Bohemian',
        keywords: ['flowy', 'artistic', 'free-spirited', 'vintage'],
        colors: ['#D4A574', '#A67B5B', '#8B4513', '#DEB887', '#F4A460'],
        fabrics: ['linen', 'cotton', 'chiffon', 'lace']
      },
      minimalist: {
        name: 'Minimalist',
        keywords: ['simple', 'clean', 'modern', 'neutral'],
        colors: ['#FFFFFF', '#F5F5F5', '#D3D3D3', '#A9A9A9', '#696969'],
        fabrics: ['cotton', 'linen', 'wool', 'cashmere']
      }
    };
  }

  initializeTrendData() {
    return {
      spring2026: {
        colors: ['Pastel Lavender', 'Mint Green', 'Coral Pink', 'Sky Blue', 'Butter Yellow'],
        patterns: ['Floral', 'Stripes', 'Geometric', 'Abstract'],
        silhouettes: ['Oversized', 'Cropped', 'High-waisted', 'Asymmetric'],
        materials: ['Organic Cotton', 'Recycled Polyester', 'Tencel', 'Linen']
      },
      summer2026: {
        colors: ['Ocean Blue', 'Sunset Orange', 'Tropical Green', 'Sand Beige', 'White'],
        patterns: ['Tropical', 'Paisley', 'Tie-dye', 'Color Block'],
        silhouettes: ['Flowy', 'Sleeveless', 'Mini', 'Wide-leg'],
        materials: ['Linen', 'Cotton Voile', 'Chiffon', 'Seersucker']
      },
      fall2026: {
        colors: ['Burnt Orange', 'Deep Burgundy', 'Olive Green', 'Mustard', 'Chocolate'],
        patterns: ['Plaid', 'Houndstooth', 'Animal Print', 'Paisley'],
        silhouettes: ['Layered', 'Oversized', 'Fitted', 'Midi'],
        materials: ['Wool', 'Cashmere', 'Leather', 'Corduroy']
      },
      winter2026: {
        colors: ['Navy', 'Charcoal', 'Emerald', 'Ruby', 'Silver'],
        patterns: ['Fair Isle', 'Argyle', 'Solid', 'Textured'],
        silhouettes: ['Cozy', 'Structured', 'Long', 'Padded'],
        materials: ['Wool', 'Cashmere', 'Faux Fur', 'Down']
      }
    };
  }

  /**
   * Generate design from text description
   */
  generateFromText(prompt, options = {}) {
    const designId = uuidv4();
    const timestamp = new Date().toISOString();

    // Parse the prompt to extract design elements
    const parsedPrompt = this.parsePrompt(prompt);
    
    // Generate design specifications
    const design = {
      id: designId,
      name: options.name || this.generateDesignName(parsedPrompt),
      description: prompt,
      category: parsedPrompt.category || 'general',
      style: parsedPrompt.style || 'casual',
      garmentType: parsedPrompt.garmentType || 'top',
      colors: parsedPrompt.colors || this.styleTemplates.casual.colors.slice(0, 3),
      fabrics: parsedPrompt.fabrics || ['cotton'],
      measurements: this.generateMeasurements(parsedPrompt.garmentType),
      details: parsedPrompt.details || [],
      styleTransfer: options.styleTransfer || null,
      trendAlignment: this.calculateTrendAlignment(parsedPrompt),
      createdAt: timestamp,
      updatedAt: timestamp,
      status: 'draft',
      thumbnail: null,
      variations: []
    };

    // Generate variations
    if (options.generateVariations !== false) {
      design.variations = this.generateVariations(design, options.variationCount || 3);
    }

    this.designs.set(designId, design);
    return design;
  }

  parsePrompt(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    const result = {
      category: 'general',
      style: 'casual',
      garmentType: 'top',
      colors: [],
      fabrics: [],
      details: []
    };

    // Detect garment type
    const garmentTypes = ['dress', 'shirt', 'blouse', 'pants', 'jeans', 'skirt', 'jacket', 'coat', 'sweater', 'hoodie', 'shorts', 'jumpsuit', 'blazer', 'vest', 'cardigan'];
    for (const garment of garmentTypes) {
      if (lowerPrompt.includes(garment)) {
        result.garmentType = garment;
        break;
      }
    }

    // Detect style
    const styles = Object.keys(this.styleTemplates);
    for (const style of styles) {
      if (lowerPrompt.includes(style)) {
        result.style = style;
        break;
      }
    }

    // Detect colors
    const colorKeywords = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink', 'purple', 'orange', 'gray', 'brown', 'navy', 'beige', 'gold', 'silver'];
    for (const color of colorKeywords) {
      if (lowerPrompt.includes(color)) {
        result.colors.push(color);
      }
    }

    // Detect fabrics
    const fabricKeywords = ['cotton', 'silk', 'wool', 'linen', 'denim', 'leather', 'polyester', 'cashmere', 'velvet', 'satin', 'chiffon', 'lace'];
    for (const fabric of fabricKeywords) {
      if (lowerPrompt.includes(fabric)) {
        result.fabrics.push(fabric);
      }
    }

    // Detect details
    const detailKeywords = ['buttons', 'pockets', 'hood', 'zipper', 'belt', 'collar', 'sleeves', 'print', 'embroidery', 'sequins'];
    for (const detail of detailKeywords) {
      if (lowerPrompt.includes(detail)) {
        result.details.push(detail);
      }
    }

    return result;
  }

  generateDesignName(parsedPrompt) {
    const adjectives = ['Elegant', 'Modern', 'Classic', 'Chic', 'Stylish', 'Sophisticated', 'Trendy', 'Timeless'];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    return `${randomAdj} ${parsedPrompt.garmentType.charAt(0).toUpperCase() + parsedPrompt.garmentType.slice(1)}`;
  }

  generateMeasurements(garmentType) {
    const baseMeasurements = {
      chest: 36,
      waist: 28,
      hips: 38,
      length: 25,
      sleeveLength: 24,
      shoulderWidth: 16
    };

    // Adjust based on garment type
    const adjustments = {
      dress: { length: 36, waist: 26 },
      pants: { length: 40, waist: 30 },
      jacket: { length: 28, chest: 38 },
      skirt: { length: 20, waist: 27 }
    };

    return { ...baseMeasurements, ...(adjustments[garmentType] || {}) };
  }

  calculateTrendAlignment(parsedPrompt) {
    const currentSeason = this.getCurrentSeason();
    const trends = this.trendData[currentSeason];
    
    let alignmentScore = 50; // Base score
    
    // Check color alignment
    if (parsedPrompt.colors.length > 0) {
      alignmentScore += 20;
    }
    
    // Check style alignment
    if (parsedPrompt.style) {
      alignmentScore += 15;
    }
    
    // Check fabric alignment
    if (parsedPrompt.fabrics.some(f => trends.materials.some(m => m.toLowerCase().includes(f)))) {
      alignmentScore += 15;
    }

    return {
      score: Math.min(100, alignmentScore),
      season: currentSeason,
      matchingTrends: trends
    };
  }

  getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring2026';
    if (month >= 5 && month <= 7) return 'summer2026';
    if (month >= 8 && month <= 10) return 'fall2026';
    return 'winter2026';
  }

  generateVariations(baseDesign, count) {
    const variations = [];
    for (let i = 0; i < count; i++) {
      const variation = {
        ...baseDesign,
        id: uuidv4(),
        name: `${baseDesign.name} - Variation ${i + 1}`,
        colors: this.shuffleArray(baseDesign.colors),
        isVariation: true,
        parentDesignId: baseDesign.id
      };
      variations.push(variation);
    }
    return variations;
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Apply style transfer to existing design
   */
  applyStyleTransfer(designId, targetStyle) {
    const design = this.designs.get(designId);
    if (!design) {
      throw new Error('Design not found');
    }

    const styleTemplate = this.styleTemplates[targetStyle];
    if (!styleTemplate) {
      throw new Error('Invalid style template');
    }

    const transferredDesign = {
      ...design,
      id: uuidv4(),
      name: `${design.name} (${styleTemplate.name} Style)`,
      style: targetStyle,
      colors: styleTemplate.colors.slice(0, 3),
      fabrics: styleTemplate.fabrics,
      styleTransfer: {
        originalStyle: design.style,
        targetStyle: targetStyle,
        appliedAt: new Date().toISOString()
      },
      updatedAt: new Date().toISOString()
    };

    this.designs.set(transferredDesign.id, transferredDesign);
    return transferredDesign;
  }

  /**
   * Get trend analysis
   */
  getTrendAnalysis(season = null) {
    const targetSeason = season || this.getCurrentSeason();
    const trends = this.trendData[targetSeason];
    
    return {
      season: targetSeason,
      trends: trends,
      recommendations: this.generateTrendRecommendations(trends),
      popularityScore: Math.floor(Math.random() * 30) + 70
    };
  }

  generateTrendRecommendations(trends) {
    return [
      `Incorporate ${trends.colors[0]} into your designs for maximum impact`,
      `${trends.silhouettes[0]} silhouettes are trending this season`,
      `Consider using ${trends.materials[0]} for sustainable appeal`,
      `${trends.patterns[0]} patterns are gaining popularity`
    ];
  }

  /**
   * Get design by ID
   */
  getDesign(designId) {
    return this.designs.get(designId) || null;
  }

  /**
   * Get all designs
   */
  getAllDesigns() {
    return Array.from(this.designs.values());
  }

  /**
   * Delete design
   */
  deleteDesign(designId) {
    return this.designs.delete(designId);
  }
}

module.exports = new DesignGenerationService();
