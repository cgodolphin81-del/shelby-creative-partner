# 🌍 WorldForge AI - No-Code Virtual World Builder

**Create immersive virtual worlds with natural language. No coding required.**

![WorldForge AI](./frontend/public/hero-banner.png)

## 🚀 Features

### Core Platform
- **🎨 World Description Interface** - Describe your world in natural language, AI generates it
- **🤖 AI Asset Generator** - Create characters, buildings, terrain from text prompts
- **⚙️ Game Logic Engine** - Define rules, quests, NPC behaviors with simple prompts
- **📦 Multi-Format Export** - Export to WebGL, Unity, Godot, and more
- **👥 Multiplayer Support** - Built-in player accounts, chat, trading systems
- **🏪 Marketplace** - Buy, sell, and trade user-created assets and worlds
- **📚 Tutorial System** - Interactive tutorials and comprehensive documentation

### Pricing Tiers
| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0/mo | 1 world, basic assets, community access |
| **Creator** | $14.99/mo | Unlimited worlds, premium assets, priority export |
| **Publisher** | $49.99/mo + 5% revenue share | All features, marketplace selling, analytics, white-label |

## 🏗️ Architecture

```
worldforge-ai/
├── backend/          # Node.js API server
│   ├── src/
│   │   ├── api/      # REST & GraphQL APIs
│   │   ├── ai/       # AI generation services
│   │   ├── exporters/ # Format exporters (WebGL, Unity, Godot)
│   │   └── services/ # Core business logic
├── frontend/         # React/Next.js application
│   └── src/
│       ├── components/ # UI components
│       ├── pages/     # Page components
│       └── utils/     # Client utilities
├── docs/            # Documentation & tutorials
└── marketplace-assets/ # User-generated content
```

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express
- PostgreSQL (user data, worlds, marketplace)
- Redis (caching, sessions)
- MongoDB (world state, assets)
- WebSocket (real-time multiplayer)

**Frontend:**
- React 18 + Next.js 14
- Three.js / React Three Fiber (3D rendering)
- TailwindCSS + Framer Motion
- Zustand (state management)

**AI Services:**
- Stable Diffusion XL (asset generation)
- LLM integration (world logic, NPC behaviors)
- Custom fine-tuned models for game assets

**Infrastructure:**
- Docker + Kubernetes
- AWS S3 (asset storage)
- Cloudflare CDN
- Stripe (payments)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Docker (optional)

### Installation

```bash
# Clone repository
git clone https://github.com/worldforge-ai/platform.git
cd worldforge-ai

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development servers
npm run dev:all
```

### Docker Deployment

```bash
docker-compose up -d
```

## 📖 Documentation

- [Getting Started](./docs/getting-started.md)
- [World Builder Guide](./docs/world-builder.md)
- [Asset Generation](./docs/asset-generator.md)
- [Logic Engine](./docs/logic-engine.md)
- [Export Guide](./docs/exports.md)
- [Multiplayer Setup](./docs/multiplayer.md)
- [Marketplace Guide](./docs/marketplace.md)
- [API Reference](./docs/api-reference.md)

## 💰 Revenue Model

### Subscription Revenue
- Creator Tier: $14.99/month
- Publisher Tier: $49.99/month + 5% marketplace revenue share

### Marketplace Revenue
- 5% transaction fee on all asset sales
- 10% fee on world template sales
- Premium asset packs (revenue share with creators)

### Projections (Year 1)
- Target: 10,000 active users
- Conversion: 5% to Creator, 1% to Publisher
- Monthly Revenue: ~$100K (subscriptions + marketplace)

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](./CONTRIBUTING.md).

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🌟 Community

- Discord: [Join our server](https://discord.gg/worldforge)
- Twitter: [@WorldForgeAI](https://twitter.com/worldforgeai)
- YouTube: [Tutorials & Demos](https://youtube.com/worldforgeai)

---

**Built with ❤️ by the WorldForge Team**

*Create worlds. Share dreams. Build together.*
