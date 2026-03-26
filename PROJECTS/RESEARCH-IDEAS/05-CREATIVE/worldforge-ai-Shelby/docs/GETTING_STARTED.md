# 📚 WorldForge AI Documentation

Welcome to the WorldForge AI documentation. This guide will help you create amazing virtual worlds using natural language.

## Table of Contents

1. [Getting Started](#getting-started)
2. [World Builder Guide](#world-builder-guide)
3. [Asset Generation](#asset-generation)
4. [Game Logic](#game-logic)
5. [Multiplayer](#multiplayer)
6. [Export Guide](#export-guide)
7. [Marketplace](#marketplace)
8. [API Reference](#api-reference)

---

## Getting Started

### What is WorldForge AI?

WorldForge AI is a no-code platform that lets you create virtual worlds using natural language. Simply describe what you want, and our AI generates it for you.

### Quick Start

1. **Sign Up** - Create a free account at [worldforge.ai](https://worldforge.ai)
2. **Describe Your World** - Use natural language to describe your vision
3. **Generate** - Let AI create your world
4. **Customize** - Add assets, define rules, create quests
5. **Export & Share** - Export to your preferred format or publish to the marketplace

### System Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- For local development: Node.js 18+, PostgreSQL, Redis

---

## World Builder Guide

### Describing Your World

The key to great world generation is detailed descriptions. Include:

- **Setting**: Where is your world? (forest, city, space, underwater)
- **Atmosphere**: What's the mood? (mysterious, peaceful, dangerous)
- **Features**: What makes it unique? (floating islands, ancient ruins)
- **Time Period**: When is it set? (medieval, futuristic, modern)

#### Example Prompts

**Good:**
> "A mystical forest with glowing mushrooms, ancient stone ruins covered in moss, and floating islands connected by magical bridges. The sky is purple with two moons."

**Better:**
> "Create an enchanted forest realm called 'Moonshade Grove'. Giant bioluminescent mushrooms serve as homes for forest spirits. Ancient elven ruins are scattered throughout, overgrown with luminescent vines. Three floating islands hover above, connected by shimmering magical bridges. The perpetual twilight sky features two moons - one silver, one crimson. Peaceful but mysterious atmosphere."

### World Settings

#### Genres
- **Fantasy** - Magic, mythical creatures, medieval settings
- **Sci-Fi** - Futuristic technology, space, cyberpunk
- **Horror** - Dark, scary, suspenseful environments
- **Adventure** - Exploration-focused, action-oriented
- **RPG** - Character progression, quests, stats
- **Simulation** - Realistic systems, management

#### Art Styles
- **Realistic** - Photorealistic graphics
- **Cartoon** - Stylized, animated look
- **Pixel** - Retro pixel art aesthetic
- **Low Poly** - Geometric, minimalist 3D
- **Anime** - Japanese animation style

### Terrain Generation

The AI automatically generates terrain based on your description. You can also specify:

```
"Generate mountainous terrain with deep valleys, a large central lake, and coastal beaches on the eastern side."
```

---

## Asset Generation

### Creating Assets

Assets are the building blocks of your world. Generate them with text prompts.

#### Asset Types

- **Characters** - NPCs, players, creatures
- **Buildings** - Houses, castles, towers
- **Props** - Furniture, decorations, items
- **Vehicles** - Cars, ships, spaceships
- **Weapons** - Swords, guns, magical staves
- **Vegetation** - Trees, plants, flowers

#### Best Practices

1. **Be Specific**: "A medieval wooden house" vs "A two-story Tudor-style cottage with a thatched roof, flower boxes, and a stone chimney"

2. **Include Style**: Match your world's art style
   > "A sci-fi laboratory console, cartoon style, with glowing blue screens"

3. **Specify Scale**: Indicate size relative to characters
   > "A giant ancient door, 3x the height of a human"

### Asset Properties

Generated assets include:
- 3D model (GLB/GLTF format)
- Textures (PNG, up to 4K)
- Metadata (poly count, materials)
- Thumbnail preview

---

## Game Logic

### Creating Rules

Define how your world works with natural language:

```
"Players can collect wood and stone. They can craft tools at workbenches. 
Health regenerates over time. Day lasts 10 minutes, night lasts 5 minutes."
```

### Quests

Create engaging quests:

```
"Create a quest where the player must find 5 ancient artifacts scattered 
across the realm and return them to the village elder for a reward."
```

Quest structure:
- **Objectives**: What players must do
- **Rewards**: Experience, items, currency
- **NPCs**: Who gives the quest
- **Conditions**: Prerequisites and triggers

### NPC Behaviors

Define NPC AI:

```
"The blacksmith works at his forge during the day, goes to the tavern at night. 
He buys ores from players and sells weapons. Friendly but grumpy personality."
```

---

## Multiplayer

### Enabling Multiplayer

1. Go to World Settings
2. Enable "Multiplayer Mode"
3. Set player limit (default: 50)
4. Configure permissions (chat, trading, PvP)

### Features

- **Real-time Sync**: Player positions, actions, world state
- **Chat**: Text and voice chat support
- **Trading**: Player-to-player item trading
- **Friends**: Friend system and parties
- **Persistence**: World state saved for all players

### Best Practices

- Set appropriate player limits for performance
- Use regions to distribute player load
- Implement anti-cheat for competitive games
- Moderate chat for public worlds

---

## Export Guide

### Supported Formats

#### WebGL
- **Use Case**: Browser-based games
- **Output**: HTML + JavaScript + assets
- **Requirements**: Modern browser with WebGL support
- **Size**: Optimized for web delivery

#### Unity
- **Use Case**: Professional game development
- **Output**: Unity package (.unitypackage)
- **Requirements**: Unity 2022.3+
- **Includes**: C# scripts, prefabs, scenes

#### Godot
- **Use Case**: Open-source game development
- **Output**: Godot project folder
- **Requirements**: Godot 4.0+
- **Includes**: GDScript, scenes, resources

#### glTF/GLB
- **Use Case**: Universal 3D format
- **Output**: .gltf or .glb file
- **Requirements**: Any 3D software
- **Includes**: Models, textures, animations

### Export Process

1. Click "Export" in the builder
2. Select your format
3. Configure options (quality, compression)
4. Wait for processing
5. Download or deploy

### Export Tips

- **Optimize First**: Reduce poly count for better performance
- **Test Locally**: Always test exports before publishing
- **Version Control**: Keep multiple versions
- **Documentation**: Include README with your export

---

## Marketplace

### Selling Your Creations

Turn your worlds and assets into income:

1. **Create Quality Content**: High-quality, unique creations sell best
2. **Set Pricing**: Competitive pricing based on complexity
3. **Add Previews**: Showcase your work with images/videos
4. **Write Descriptions**: Clear, detailed descriptions
5. **Publish**: Submit for review (24-48 hours)

### Pricing Guidelines

- **Small Assets** (props, simple items): $1-5
- **Medium Assets** (characters, buildings): $5-20
- **Large Assets** (vehicles, complex structures): $20-50
- **World Templates**: $10-100
- **Asset Packs**: $10-50

### Revenue Share

- **Creator Tier**: 95% revenue share
- **Publisher Tier**: 95% revenue share + bonus features
- **Platform Fee**: 5% transaction fee

### Marketplace Rules

- Original content only (no copyright infringement)
- No offensive or inappropriate content
- Must work as advertised
- Respond to customer issues promptly

---

## API Reference

### Authentication

```bash
curl -X POST https://api.worldforge.ai/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Generate World

```bash
curl -X POST https://api.worldforge.ai/worlds/generate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A magical forest with glowing trees",
    "genre": "fantasy",
    "style": "realistic",
    "dimensions": "3d"
  }'
```

### Generate Asset

```bash
curl -X POST https://api.worldforge.ai/worlds/{id}/assets/generate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A medieval sword with ruby in the hilt",
    "type": "weapon",
    "style": "realistic"
  }'
```

### Export World

```bash
curl -X POST https://api.worldforge.ai/exports/{worldId}/unity \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### WebSocket Events

```javascript
// Connect to multiplayer
const socket = io('wss://multiplayer.worldforge.ai');

// Join a world
socket.emit('join-world', {
  worldId: 'world-123',
  playerData: { name: 'Player1', avatar: 'avatar-url' }
});

// Send movement
socket.emit('player-move', {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 }
});

// Send chat message
socket.emit('chat-message', {
  message: 'Hello, world!',
  type: 'text'
});
```

---

## Tutorials

### Tutorial 1: Your First World (15 min)

Learn the basics of world creation.

[Watch Video](#) | [Read Guide](#)

### Tutorial 2: Creating NPCs (20 min)

Design and implement NPCs with AI.

[Watch Video](#) | [Read Guide](#)

### Tutorial 3: Quest Systems (30 min)

Build engaging quest mechanics.

[Watch Video](#) | [Read Guide](#)

### Tutorial 4: Multiplayer Setup (25 min)

Enable multiplayer in your world.

[Watch Video](#) | [Read Guide](#)

### Tutorial 5: Publishing to Marketplace (20 min)

Monetize your creations.

[Watch Video](#) | [Read Guide](#)

---

## Support

### Getting Help

- **Documentation**: You're reading it!
- **Discord**: [Join our community](https://discord.gg/worldforge)
- **Email**: support@worldforge.ai
- **Status**: [status.worldforge.ai](https://status.worldforge.ai)

### Reporting Bugs

Found a bug? Report it on our [GitHub Issues](https://github.com/worldforge-ai/platform/issues).

### Feature Requests

Have an idea? Share it on our [Feature Request Board](https://feedback.worldforge.ai).

---

## FAQ

**Q: Is WorldForge AI really no-code?**  
A: Yes! Everything can be done with natural language. Advanced users can also use our scripting API.

**Q: Can I use my creations commercially?**  
A: Yes, with Creator or Publisher tier. Free tier is for personal use only.

**Q: What AI models do you use?**  
A: We use a combination of GPT-4 for logic, Stable Diffusion XL for 2D assets, and custom models for 3D generation.

**Q: How long does generation take?**  
A: Worlds: 30-60 seconds. Assets: 10-30 seconds. Logic: 15-45 seconds.

**Q: Can I collaborate with others?**  
A: Yes! Multiplayer mode supports real-time collaboration. Publisher tier includes team features.

**Q: What if I don't like the generated result?**  
A: Regenerate as many times as you want! You can also manually edit any aspect of your world.

---

*Last updated: March 2024*
