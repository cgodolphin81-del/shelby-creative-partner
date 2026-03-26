#!/bin/bash
# ArtPlayground Deployment Script
# Automates deployment to Vercel (frontend) and Railway (API)

set -e

echo "🎨 ArtPlayground Deployment Script"
echo "==================================="
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Build Next.js
echo "🔨 Building Next.js frontend..."
npm run build
echo ""

# Check for .env file
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found"
    echo "   Copy .env.example to .env and fill in your values"
    echo ""
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod
    echo "✅ Frontend deployed to Vercel"
else
    echo "⚠️  Vercel CLI not installed"
    echo "   Install with: npm install -g vercel"
    echo "   Or deploy manually at: https://vercel.com"
fi
echo ""

# Deploy API to Railway (optional)
echo "🚀 Deploying API to Railway..."
if command -v railway &> /dev/null; then
    railway up
    echo "✅ API deployed to Railway"
else
    echo "⚠️  Railway CLI not installed"
    echo "   Install with: npm install -g @railway/cli"
    echo "   Or deploy manually at: https://railway.app"
fi
echo ""

# Deploy smart contract (optional)
echo "📜 Smart Contract Deployment"
echo "   To deploy the NFT contract:"
echo "   1. Install Hardhat: npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox"
echo "   2. Configure hardhat.config.js with your wallet"
echo "   3. Run: npx hardhat run scripts/deploy.js --network mainnet"
echo ""

# Summary
echo "==================================="
echo "✅ Deployment Complete!"
echo ""
echo "Next Steps:"
echo "1. Set up environment variables on Vercel/Railway"
echo "2. Configure Stripe webhooks for subscriptions"
echo "3. Deploy NFT contract to Ethereum"
echo "4. Update NEXT_PUBLIC_APP_URL in .env"
echo "5. Test the full flow: Generate → Mint → Sell"
echo ""
echo "🎨 Happy Creating!"
