# 🚀 Quick Start Guide - ArtPlayground

Get your AI art platform running in 5 minutes!

---

## Step 1: Install Dependencies

```bash
cd generative-art-playground
npm install
```

---

## Step 2: Configure Environment

```bash
cp .env.example .env
```

**Minimum required for testing (no API keys needed):**
```env
POLLINATIONS_ENABLED=true
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

**For full functionality, add:**
- Hugging Face API key (optional, for better quality)
- Pinata API keys (for NFT metadata)
- Printful API key (for print orders)
- Stripe keys (for subscriptions)

---

## Step 3: Run Development Server

```bash
# Frontend (Next.js)
npm run dev

# API Server (optional, in new terminal)
npm run api
```

Open **http://localhost:3000** in your browser.

---

## Step 4: Create Your First Art

1. Click "Create" in navigation
2. Enter a prompt: "cyberpunk city at night"
3. Select a style: "Cyberpunk"
4. Click "Generate Art"
5. Wait 5-10 seconds
6. Download or create variations!

---

## Step 5: Explore Features

### Generate Art
- Try different styles from the 50+ available
- Use batch generation for 4 variations at once
- Create variations of your favorite pieces

### Browse Styles
- Visit the Style Library
- Filter by category (Modern, Sci-Fi, Traditional, etc.)
- Copy prompt templates for your own use

### View Gallery
- Check out community creations
- See what's possible with the platform

### Check Pricing
- Free tier: 10 generations/day
- Pro: $9.99/mo for unlimited + commercial use

---

## Production Deployment

### Frontend (Vercel)
```bash
npm install -g vercel
vercel --prod
```

### API (Railway)
```bash
npm install -g @railway/cli
railway up
```

### Smart Contract (Ethereum)
```bash
# Install Hardhat
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Configure hardhat.config.js with your wallet

# Deploy
npx hardhat run scripts/deploy.js --network mainnet
```

---

## Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### API not responding
```bash
# Check API server is running
npm run api

# Test health endpoint
curl http://localhost:3001/api/health
```

### Art not generating
- Check internet connection
- Verify Pollinations is accessible
- Try a simpler prompt first

---

## Next Steps

1. **Customize branding**: Update `src/pages/index.js` with your logo/colors
2. **Add authentication**: Integrate NextAuth.js or Clerk
3. **Connect database**: Add MongoDB for user data persistence
4. **Set up payments**: Configure Stripe for subscriptions
5. **Deploy NFT contract**: Use the provided Solidity contract
6. **Launch marketing**: Follow the 30-day social media plan

---

## Resources

- **Full Documentation**: `README.md`
- **Project Summary**: `PROJECT_SUMMARY.md`
- **API Reference**: `http://localhost:3001/api/health`
- **Social Media Plan**: `docs/social-media-content.md`
- **Revenue Model**: `docs/revenue-projections.md`

---

## Support

- **GitHub Issues**: For bugs and feature requests
- **Discord**: Community support (link in README)
- **Email**: support@artplayground.io

---

**Happy Creating! 🎨**
