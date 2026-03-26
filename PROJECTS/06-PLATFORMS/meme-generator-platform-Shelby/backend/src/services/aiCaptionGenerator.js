const axios = require('axios');

class AICaptionGenerator {
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.baseUrl = 'https://api.openai.com/v1';
    this.model = 'gpt-4';
  }

  // Generate captions for a meme
  async generateCaptions(options) {
    const {
      template,
      context,
      topic,
      tone = 'humorous',
      variations = 5,
      maxLength = 50
    } = options;

    const prompt = this.buildCaptionPrompt(template, context, topic, tone, variations, maxLength);

    try {
      const response = await axios.post(
        `${this.baseUrl}/chat/completions`,
        {
          model: this.model,
          messages: [
            {
              role: 'system',
              content: 'You are a witty meme caption generator. Create short, punchy, viral-worthy captions. Use internet slang, wordplay, and cultural references. Keep captions under the specified character limit.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 15000
        }
      );

      const captions = this.parseCaptions(response.data.choices[0].message.content);
      return captions.map(caption => ({
        text: caption,
        tone,
        viralScore: this.calculateViralScore(caption),
        hashtags: this.generateHashtags(caption, topic)
      }));
    } catch (err) {
      console.error('AI Caption generation error:', err.message);
      return this.getFallbackCaptions(template, tone);
    }
  }

  // Generate context-aware captions based on trending topics
  async generateTrendingCaptions(trend, template) {
    return this.generateCaptions({
      template: template.name,
      context: `This meme relates to the trending topic: ${trend.topic}`,
      topic: trend.topic,
      tone: 'trendy',
      variations: 5
    });
  }

  // Generate captions for specific occasions
  async generateOccasionCaptions(occasion) {
    const occasions = {
      monday: { tone: 'relatable', context: 'Monday struggles, coffee needed, weekend is over' },
      friday: { tone: 'celebratory', context: 'TGIF, weekend plans, freedom' },
      holiday: { tone: 'festive', context: 'Holiday celebrations, family, gifts' },
      work: { tone: 'corporate', context: 'Meetings, emails, deadlines, coffee breaks' },
      relationship: { tone: 'romantic', context: 'Dating, love, relationships' },
      gaming: { tone: 'gamer', context: 'Gaming, esports, streaming' }
    };

    const config = occasions[occasion] || occasions.work;
    
    return this.generateCaptions({
      template: 'Generic',
      context: config.context,
      topic: occasion,
      tone: config.tone,
      variations: 5
    });
  }

  // Rewrite existing caption with different tone
  async rewriteCaption(caption, newTone) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/chat/completions`,
        {
          model: this.model,
          messages: [
            {
              role: 'system',
              content: 'Rewrite the given meme caption in a different tone while keeping the core meaning.'
            },
            {
              role: 'user',
              content: `Original: "${caption}"\nNew tone: ${newTone}\n\nRewrite:`
            }
          ],
          temperature: 0.7,
          max_tokens: 100
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        text: response.data.choices[0].message.content.trim(),
        tone: newTone
      };
    } catch (err) {
      return { text: caption, tone: newTone };
    }
  }

  // Build prompt for AI
  buildCaptionPrompt(template, context, topic, tone, variations, maxLength) {
    return `Generate ${variations} meme captions for the "${template}" template.

Context: ${context}
Topic: ${topic}
Tone: ${tone}
Max length: ${maxLength} characters each

Requirements:
- Each caption should be unique
- Use current internet culture references
- Include wordplay, puns, or unexpected twists
- Make them shareable and relatable
- Format as a numbered list

Generate captions now:`;
  }

  // Parse AI response
  parseCaptions(response) {
    const lines = response.split('\n');
    const captions = [];

    for (const line of lines) {
      const match = line.match(/^\d+\.?\s*(.*)$/);
      if (match && match[1]) {
        captions.push(match[1].trim());
      }
    }

    return captions.length > 0 ? captions : [response.trim()];
  }

  // Calculate viral potential score for caption
  calculateViralScore(caption) {
    let score = 50;

    // Length optimization (shorter = more shareable)
    if (caption.length < 30) score += 15;
    else if (caption.length < 50) score += 10;

    // Question format (engages audience)
    if (caption.includes('?')) score += 10;

    // Relatability keywords
    const relatableWords = ['me', 'when', 'that', 'this', 'my', 'your', 'we', 'us'];
    const hasRelatable = relatableWords.some(word => caption.toLowerCase().includes(word));
    if (hasRelatable) score += 15;

    // Emotional triggers
    const emotionalWords = ['love', 'hate', 'never', 'always', 'best', 'worst'];
    const hasEmotional = emotionalWords.some(word => caption.toLowerCase().includes(word));
    if (hasEmotional) score += 10;

    return Math.min(100, score);
  }

  // Generate relevant hashtags
  generateHashtags(caption, topic) {
    const baseHashtags = ['meme', 'memes', 'funny', 'viral'];
    const topicHashtags = topic ? [topic.toLowerCase().replace(/\s+/g, '')] : [];
    
    return [...baseHashtags, ...topicHashtags].slice(0, 5);
  }

  // Fallback captions when AI fails
  getFallbackCaptions(template, tone) {
    const fallbacks = [
      'When you realize it\'s already Monday',
      'That feeling when the weekend is over',
      'Me pretending to understand what\'s happening',
      'Nobody: ... Me:',
      'POV: You\'re trying to be productive'
    ];

    return fallbacks.map(text => ({
      text,
      tone: tone || 'humorous',
      viralScore: 50,
      hashtags: ['meme', 'relatable']
    }));
  }
}

module.exports = new AICaptionGenerator();
