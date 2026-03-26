# 🎨 ArtPlayground - Generative AI Art Platform

**Create stunning AI art with 50+ styles. Mint NFTs. Sell prints. Build your creative empire.**

![ArtPlayground Banner](https://image.pollinations.ai/prompt/generative%20AI%20art%20platform%20psychedelic%20design?width=1200&height=630&seed=42)

---

## ✨ Features

### 🎨 Art Generation Engine
- **50+ Curated Art Styles**: From Abstract Expressionism to Cyberpunk, Anime to Watercolor
- **Multiple AI Backends**: Pollinations (free), Hugging Face, Local Stable Diffusion
- **Batch Generation**: Create 4+ variations at once
- **Interactive Canvas**: Modify, remix, and iterate on your creations
- **High Resolution**: Up to 4096x4096 for Pro users

### 🖼️ Gallery System
- **Personal Gallery**: Organize and manage your creations
- **Community Showcase**: Discover and get inspired by others
- **Social Features**: Like, comment, and share artwork
- **Search & Filter**: Find art by style, artist, or tags

### 🔮 NFT Minting
- **One-Click Minting**: Deploy to Ethereum with a single click
- **OpenSea Integration**: Auto-list on the largest NFT marketplace
- **Foundation Support**: Mint on exclusive Foundation platform
- **IPFS Storage**: Permanent decentralized storage for metadata
- **Royalty Support**: Earn 2.5% on secondary sales

### 🛍️ Print-on-Demand
- **Multiple Products**: Prints, phone cases, canvases, mugs, t-shirts
- **Integrated Fulfillment**: Printful, Printify, Gelato integration
- **Profit Sharing**: Keep 70-85% of each sale
- **Global Shipping**: Worldwide delivery handled automatically

### 💎 Pricing Tiers
- **Free**: 10 generations/day, standard quality, watermarked
- **Pro ($9.99/mo)**: Unlimited, HD quality, commercial license, NFT minting
- **Enterprise ($49.99/mo)**: Ultra HD, custom styles, team features, API access

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- (Optional) MetaMask wallet for NFT minting
- (Optional) Printful/Printify account for print sales

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/generative-art-playground.git
cd generative-art-playground

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Run development server
npm run dev

# API server (optional)
npm run api
```

### Environment Variables

```env
# AI Generation
STABLE_DIFFUSION_API_KEY=your_huggingface_key
POLLINATIONS_ENABLED=true

# Blockchain
ETH_RPC_URL=https://mainnet.infura.io/v3/your_key
WALLET_PRIVATE_KEY=your_wallet_private_key
OPENSEA_API_KEY=your_opensea_key

# IPFS
PINATA_API_KEY=your_pinata_key
PINATA_SECRET=your_pinata_secret

# Print-on-Demand
PRINTFUL_API_KEY=your_printful_key
PRINTIFY_API_KEY=your_printify_key
PRINTIFY_SHOP_ID=your_shop_id

# Payments
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

---

## 📁 Project Structure

```
generative-art-playground/
├── src/
│   ├── pages/              # Next.js pages
│   │   ├── index.js        # Landing page
│   │   ├── create.js       # Art generator
│   │   ├── gallery.js      # Gallery view
│   │   └── pricing.js      # Pricing page
│   ├── components/         # React components
│   │   ├── ArtGenerator.js # Main generator UI
│   │   ├── StyleLibrary.js # Style browser
│   │   ├── Gallery.js      # Gallery component
│   │   └── Pricing.js      # Pricing cards
│   └── lib/                # Core libraries
│       ├── artEngine.js    # AI generation logic
│       ├── artStyles.js    # 50+ style definitions
│       ├── nftService.js   # NFT minting
│       └── printService.js # Print-on-demand
├── api/
│   └── server.js           # Express API server
├── contracts/
│   └── ArtPlaygroundNFT.sol # ERC-721 smart contract
├── docs/
│   ├── social-media-content.md # 30-day content plan
│   └── revenue-projections.md  # 3-year financial model
├── public/                 # Static assets
└── package.json
```

---

## 🎯 Usage Examples

### Generate Art

```javascript
const ArtEngine = require('./src/lib/artEngine');
const engine = new ArtEngine({ provider: 'pollinations' });

// Single generation
const result = await engine.generate('cyberpunk city at night', {
  width: 1024,
  height: 1024,
  style: cyberpunkStyle
});

console.log(result.imageUrl);

// Batch generation
const batch = await engine.generateBatch('fantasy landscape', {}, 4);
console.log(`Generated ${batch.length} images`);
```

### Mint NFT

```javascript
const NFTService = require('./src/lib/nftService');
const nftService = new NFTService();

const result = await nftService.mintNFT(
  '0xContractAddress',
  '0xRecipientWallet',
  {
    name: 'Cosmic Dreams #1',
    description: 'AI-generated cosmic artwork',
    attributes: [{ trait_type: 'Style', value: 'Cosmic' }]
  },
  imageUrl
);

console.log(`Minted token ${result.tokenId}`);
console.log(`OpenSea: ${result.openseaUrl}`);
```

### Create Print Order

```javascript
const PrintService = require('./src/lib/printService');
const printService = new PrintService({ provider: 'printful' });

const order = await printService.createOrder({
  recipient: {
    name: 'John Doe',
    address1: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US'
  },
  items: [
    {
      variantId: 12345,
      quantity: 1
    }
  ],
  artworkUrl: 'https://...'
});

console.log(`Order ${order.orderId} created`);
```

---

## 🎨 Available Art Styles (50+)

### Modern
- Abstract Expressionism
- Surrealism
- Psychedelic
- Pop Art
- Minimalism
- Cubism
- Glitch Art

### Sci-Fi
- Cyberpunk
- Steampunk
- Biomechanical
- Space Opera
- Dieselpunk
- Afrofuturism

### Traditional
- Ukiyo-e
- Watercolor
- Ink Drawing
- Stained Glass
- Celtic
- Medieval

### Digital
- Low Poly
- Pixel Art
- Anime
- Chibi
- Claymation
- Lo-Fi

### Fantasy
- Fantasy Art
- Cosmic Horror
- Dreamscape
- Dark Fantasy
- Bioluminescent
- Crystalline

### And 25+ more!

---

## 📊 Revenue Model

### Three Revenue Streams

1. **Subscriptions (60%)**
   - Pro: $9.99/month
   - Enterprise: $49.99/month
   - Target: 5% free-to-pro conversion

2. **Print Commissions (25%)**
   - 15-30% margin on print sales
   - Average order: $45
   - Platform keeps: $9/order

3. **NFT Royalties (15%)**
   - 2.5% on secondary sales
   - Average NFT: 0.3 ETH
   - Passive income stream

### 3-Year Projections

| Year | Revenue | Profit |
|------|---------|--------|
| 1 | $135K | $93K |
| 2 | $564K | $210K |
| 3 | $1.38M | $737K |

---

## 📱 Social Media Strategy

30-day launch campaign included in `/docs/social-media-content.md`:

- **Week 1**: Awareness & Teasers
- **Week 2**: Features & Benefits
- **Week 3**: Social Proof & Engagement
- **Week 4**: Conversion & Urgency

**Platforms:**
- Instagram (daily posts + stories)
- Twitter (3-5 tweets/day)
- TikTok (3-4 videos/week)
- YouTube (2 tutorials/week)
- Discord (community building)

---

## 🔧 API Reference

### Generate Art
```
POST /api/generate
Body: { prompt, style, width, height, seed, userId }
Response: { imageUrl, metadata }
```

### Get Styles
```
GET /api/styles
Response: { styles: [...], categories: [...] }
```

### Mint NFT
```
POST /api/nft/mint
Body: { imageUrl, metadata, contractAddress, recipient }
Response: { tokenId, transactionHash, openseaUrl }
```

### Create Print Order
```
POST /api/print/order
Body: { recipient, items, artworkUrl }
Response: { orderId, status, totalCost }
```

---

## 🛡️ Security

- **API Keys**: Never commit to git, use environment variables
- **Wallet Security**: Use separate wallet for minting, not main holdings
- **Rate Limiting**: Implement on API endpoints
- **Input Validation**: Sanitize all user inputs
- **HTTPS Only**: Enforce secure connections in production

---

## 🚀 Deployment

### Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

### Railway/Heroku (API)
```bash
# Railway
railway login
railway up

# Heroku
heroku create
git push heroku main
```

### Smart Contract Deployment
```bash
# Install Hardhat
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Deploy
npx hardhat run scripts/deploy.js --network mainnet
```

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 🙏 Acknowledgments

- Stable Diffusion team for the AI model
- Pollinations.ai for free generation API
- OpenZeppelin for smart contract templates
- OpenSea for NFT marketplace integration
- Printful/Printify for print-on-demand

---

## 📞 Support

- **Documentation**: `/docs` folder
- **Discord**: [Join our community](#)
- **Twitter**: [@ArtPlayground](#)
- **Email**: support@artplayground.io

---

**Ready to create? Let's make art! 🎨**
