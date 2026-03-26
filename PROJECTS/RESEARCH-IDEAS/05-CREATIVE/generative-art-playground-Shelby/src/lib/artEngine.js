// Art Generation Engine - Stable Diffusion Integration
// Supports multiple backends: Pollinations (free), Hugging Face, Local SD

const axios = require('axios');

class ArtGenerationEngine {
  constructor(options = {}) {
    this.apiKey = options.apiKey || process.env.STABLE_DIFFUSION_API_KEY;
    this.provider = options.provider || 'pollinations'; // pollinations, huggingface, local
    this.baseUrl = {
      pollinations: 'https://image.pollinations.ai/prompt',
      huggingface: 'https://api-inference.huggingface.co/models',
      local: 'http://localhost:7860/sdapi/v1'
    };
    this.model = options.model || 'stable-diffusion-xl';
  }

  /**
   * Generate art from text prompt
   * @param {string} prompt - Text description of desired art
   * @param {object} options - Generation options
   * @returns {Promise<{imageUrl: string, metadata: object}>}
   */
  async generate(prompt, options = {}) {
    const {
      width = 1024,
      height = 1024,
      steps = 30,
      guidance = 7.5,
      seed = Math.floor(Math.random() * 1000000),
      negativePrompt = '',
      style = '',
      model = this.model
    } = options;

    // Enhance prompt with style
    const enhancedPrompt = this.enhancePrompt(prompt, style);

    console.log(`Generating art: "${enhancedPrompt}" (${width}x${height})`);

    try {
      let imageUrl;
      let metadata;

      switch (this.provider) {
        case 'pollinations':
          imageUrl = await this.generatePollinations(enhancedPrompt, { width, height, seed, negativePrompt });
          break;
        case 'huggingface':
          imageUrl = await this.generateHuggingFace(enhancedPrompt, { width, height, steps, guidance, seed });
          break;
        case 'local':
          imageUrl = await this.generateLocal(enhancedPrompt, { width, height, steps, guidance, seed, negativePrompt });
          break;
        default:
          imageUrl = await this.generatePollinations(enhancedPrompt, { width, height, seed, negativePrompt });
      }

      metadata = {
        prompt: enhancedPrompt,
        originalPrompt: prompt,
        width,
        height,
        steps,
        guidance,
        seed,
        negativePrompt,
        style,
        model,
        provider: this.provider,
        timestamp: new Date().toISOString(),
        imageUrl
      };

      return { imageUrl, metadata };
    } catch (error) {
      console.error('Generation failed:', error.message);
      throw new Error(`Art generation failed: ${error.message}`);
    }
  }

  /**
   * Generate using Pollinations AI (free, no API key)
   */
  async generatePollinations(prompt, options) {
    const { width, height, seed, negativePrompt } = options;
    
    // Build URL with parameters
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `${this.baseUrl.pollinations}/${encodedPrompt}?width=${width}&height=${height}&seed=${seed}&nologo=true`;
    
    // Add negative prompt if provided
    if (negativePrompt) {
      const encodedNegative = encodeURIComponent(negativePrompt);
      return `${url}&negative_prompt=${encodedNegative}`;
    }
    
    return url;
  }

  /**
   * Generate using Hugging Face Inference API
   */
  async generateHuggingFace(prompt, options) {
    const { width, height, steps, guidance, seed } = options;
    
    if (!this.apiKey) {
      throw new Error('Hugging Face API key required');
    }

    const response = await axios.post(
      `${this.baseUrl.huggingface}/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        inputs: prompt,
        parameters: {
          width,
          height,
          num_inference_steps: steps,
          guidance_scale: guidance,
          seed
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    );

    // Convert to base64 for display
    const base64 = Buffer.from(response.data).toString('base64');
    return `data:image/png;base64,${base64}`;
  }

  /**
   * Generate using local Stable Diffusion installation
   */
  async generateLocal(prompt, options) {
    const { width, height, steps, guidance, seed, negativePrompt } = options;

    const response = await axios.post(
      `${this.baseUrl.local}/txt2img`,
      {
        prompt,
        negative_prompt: negativePrompt,
        width,
        height,
        steps,
        cfg_scale: guidance,
        seed,
        sampler_name: 'Euler a'
      }
    );

    const base64 = response.data.images[0];
    return `data:image/png;base64,${base64}`;
  }

  /**
   * Enhance prompt with style template
   */
  enhancePrompt(prompt, style) {
    if (!style || !style.promptTemplate) {
      return prompt;
    }

    return style.promptTemplate.replace('{subject}', prompt);
  }

  /**
   * Generate variations of existing image
   */
  async generateVariation(imageUrl, prompt, options = {}) {
    // For variation, we use img2img or add variation keywords
    const variationPrompt = `${prompt}, variation, alternative interpretation, different composition`;
    return this.generate(variationPrompt, options);
  }

  /**
   * Upscale image
   */
  async upscale(imageUrl, scale = 2) {
    // This would integrate with an upscaling service
    // For now, return original with metadata
    return {
      imageUrl,
      metadata: { scale, originalUrl: imageUrl }
    };
  }

  /**
   * Generate batch of images
   */
  async generateBatch(prompt, options = {}, count = 4) {
    const results = [];
    
    for (let i = 0; i < count; i++) {
      try {
        const result = await this.generate(prompt, {
          ...options,
          seed: options.seed ? options.seed + i : undefined
        });
        results.push(result);
      } catch (error) {
        console.error(`Batch item ${i} failed:`, error.message);
      }
    }

    return results;
  }

  /**
   * Get generation history
   */
  getHistory(limit = 50) {
    // This would query a database in production
    return [];
  }

  /**
   * Save generation to database
   */
  async saveGeneration(metadata, userId) {
    // This would save to MongoDB/PostgreSQL
    console.log('Saving generation:', metadata.id);
    return metadata;
  }
}

module.exports = ArtGenerationEngine;
