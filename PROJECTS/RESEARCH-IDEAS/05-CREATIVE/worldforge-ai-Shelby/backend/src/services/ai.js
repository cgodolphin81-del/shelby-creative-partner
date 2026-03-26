import OpenAI from 'openai';
import Replicate from 'replicate';
import config from '../config/index.js';
import logger from '../utils/logger.js';

class AIService {
  constructor() {
    this.openai = config.openaiApiKey ? new OpenAI({
      apiKey: config.openaiApiKey
    }) : null;
    
    this.replicate = config.replicateApiToken ? new Replicate({
      auth: config.replicateApiToken
    }) : null;
    
    logger.info('AI Service initialized', {
      openai: !!this.openai,
      replicate: !!this.replicate
    });
  }
  
  /**
   * Generate world from natural language description
   */
  async generateWorld(prompt, options = {}) {
    try {
      const systemPrompt = `You are a world generation AI for WorldForge AI, a no-code game creation platform.
      
Your task is to convert natural language descriptions into structured world data.

Return a JSON object with:
- name: World name (creative, fitting the description)
- description: Detailed world description
- genre: fantasy|scifi|horror|adventure|rpg|simulation|other
- style: realistic|cartoon|pixel|lowpoly|anime
- dimensions: 2d|3d|2.5d
- terrain: Object with heightmap data, biomes, landmarks
- regions: Array of distinct areas with coordinates and features
- climate: Object with weather patterns, day/night cycle
- lore: Background story and world history
- suggestedAssets: Array of asset types needed
- suggestedRules: Game rules that fit this world
- suggestedQuests: Initial quest ideas

Be creative and detailed. The world should feel alive and immersive.`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Create a world based on this description: ${prompt}` }
        ],
        temperature: 0.8,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      });
      
      const worldData = JSON.parse(response.choices[0].message.content);
      
      return {
        success: true,
        data: worldData,
        tokens: response.usage.total_tokens
      };
    } catch (error) {
      logger.error('World generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  /**
   * Generate 3D/2D asset from text prompt
   */
  async generateAsset(prompt, options = {}) {
    const {
      type = 'prop',
      style = 'realistic',
      dimensions = '3d',
      resolution = '1024x1024'
    } = options;
    
    try {
      let imageUrl;
      let generationTime;
      const startTime = Date.now();
      
      if (dimensions === '2d' || type === 'texture') {
        // Use Stable Diffusion via Replicate for 2D assets
        if (this.replicate) {
          const output = await this.replicate.run(
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea351df4979778f7e9332fd5ab",
            {
              input: {
                prompt: `${prompt}, ${style} style, game asset, high quality, detailed`,
                negative_prompt: 'blurry, low quality, distorted, watermark, text',
                width: parseInt(resolution.split('x')[0]),
                height: parseInt(resolution.split('x')[1]),
                num_outputs: 1,
                guidance_scale: 7.5,
                num_inference_steps: 50
              }
            }
          );
          imageUrl = output[0];
        } else if (this.openai) {
          // Fallback to DALL-E 3
          const response = await this.openai.images.generate({
            model: 'dall-e-3',
            prompt: `${prompt}, ${style} style, game asset, high quality`,
            n: 1,
            size: '1024x1024'
          });
          imageUrl = response.data[0].url;
        }
      } else {
        // For 3D assets, use a 3D generation model
        if (this.replicate) {
          const output = await this.replicate.run(
            "ashawkey/imagedream:8a5441a4b8e7e8a8f0e6f8e8e8e8e8e8",
            {
              input: {
                input_image: null, // Text-to-3D
                prompt: `${prompt}, ${style} style, 3d model, game ready`,
                steps: 50,
                guidance_scale: 7.5
              }
            }
          );
          imageUrl = output;
        }
      }
      
      generationTime = Date.now() - startTime;
      
      return {
        success: true,
        data: {
          imageUrl,
          prompt,
          type,
          style,
          dimensions,
          generationTime
        }
      };
    } catch (error) {
      logger.error('Asset generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  /**
   * Generate game logic/rules from description
   */
  async generateGameLogic(description, worldData = {}) {
    try {
      const systemPrompt = `You are a game design AI for WorldForge AI.

Convert natural language game mechanics into structured logic rules.

Return JSON with:
- rules: Array of game rules with conditions and effects
- quests: Array of quest definitions with objectives and rewards
- npcs: Array of NPC definitions with behaviors and dialogue trees
- economy: Economic system settings (currencies, prices, trading rules)
- combat: Combat system configuration (if applicable)
- progression: Player progression systems (levels, skills, achievements)
- events: Dynamic events and triggers

Make the logic clear, balanced, and implementable.`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Create game logic for: ${description}\n\nWorld context: ${JSON.stringify(worldData)}`
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      });
      
      const logicData = JSON.parse(response.choices[0].message.content);
      
      return {
        success: true,
        data: logicData,
        tokens: response.usage.total_tokens
      };
    } catch (error) {
      logger.error('Game logic generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  /**
   * Generate NPC behavior and dialogue
   */
  async generateNPC(characterConcept, worldContext = {}) {
    try {
      const systemPrompt = `You are an NPC design AI for WorldForge AI.

Create detailed NPCs with personality, behavior, and dialogue.

Return JSON with:
- name: NPC name
- role: Their role in the world
- personality: Personality traits
- appearance: Physical description
- backstory: Character history
- behavior: Behavioral patterns and routines
- dialogue: Array of dialogue lines with conditions
- quests: Quests they offer (if any)
- inventory: Items they carry or sell
- relationships: Connections to other NPCs`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Create an NPC: ${characterConcept}\n\nWorld: ${JSON.stringify(worldContext)}`
          }
        ],
        temperature: 0.8,
        max_tokens: 3000,
        response_format: { type: 'json_object' }
      });
      
      const npcData = JSON.parse(response.choices[0].message.content);
      
      return {
        success: true,
        data: npcData
      };
    } catch (error) {
      logger.error('NPC generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  /**
   * Generate quest from description
   */
  async generateQuest(questConcept, worldContext = {}) {
    try {
      const systemPrompt = `You are a quest design AI for WorldForge AI.

Create engaging quests with clear objectives and rewards.

Return JSON with:
- name: Quest name
- description: Quest summary
- giver: Who gives this quest
- objectives: Array of objective steps
  - type: kill|collect|deliver|explore|talk|solve
  - description: What to do
  - target: Target count or NPC/item ID
  - optional: Is this optional?
- rewards: Experience, items, currency, reputation
- difficulty: easy|medium|hard|epic
- estimatedTime: Minutes to complete
- prerequisites: Required quests or levels
- branching: Alternative paths or outcomes`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Create a quest: ${questConcept}\n\nWorld: ${JSON.stringify(worldContext)}`
          }
        ],
        temperature: 0.8,
        max_tokens: 2500,
        response_format: { type: 'json_object' }
      });
      
      const questData = JSON.parse(response.choices[0].message.content);
      
      return {
        success: true,
        data: questData
      };
    } catch (error) {
      logger.error('Quest generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  /**
   * Generate terrain heightmap and biome data
   */
  async generateTerrain(worldDescription, size = { width: 1000, height: 1000 }) {
    try {
      const systemPrompt = `You are a terrain generation AI for WorldForge AI.

Create detailed terrain data for a game world.

Return JSON with:
- heightmap: 2D array of height values (0-1)
- biomes: Array of biome regions
  - name: Biome name
  - type: forest|desert|mountain|ocean|plains|tundra|swamp|volcanic
  - coordinates: {x, y, width, height}
  - properties: Specific biome properties
- landmarks: Notable locations
  - name: Landmark name
  - type: city|ruin|dungeon|monument|natural
  - coordinates: {x, y}
  - description: What makes it special
- resources: Resource deposits
  - type: ore|wood|herb|water|gem
  - coordinates: {x, y}
  - quantity: Amount available
- waterBodies: Lakes, rivers, oceans
- elevationZones: Height-based zones`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Generate terrain for: ${worldDescription}\nSize: ${size.width}x${size.height}`
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      });
      
      const terrainData = JSON.parse(response.choices[0].message.content);
      
      return {
        success: true,
        data: terrainData
      };
    } catch (error) {
      logger.error('Terrain generation failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default new AIService();
