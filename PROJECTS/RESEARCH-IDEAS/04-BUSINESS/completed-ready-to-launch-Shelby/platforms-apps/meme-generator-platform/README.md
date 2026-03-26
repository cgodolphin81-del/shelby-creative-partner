# 🎭 MemeGenerator - AI-Powered Viral Meme Platform

**The complete platform for creating, sharing, and monetizing viral memes.**

![MemeGenerator](https://img.shields.io/badge/MemeGenerator-v1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-production--ready-green)

---

## 🚀 Features

### 1. **Meme Template Library** (500+ Templates)
- Categorized templates: Classic, Reaction, Gaming, Corporate, Animals, etc.
- Premium templates for Pro users
- Daily trending template updates
- User-submitted templates (moderated)
- Smart template recommendations

### 2. **AI Caption Generator**
- Context-aware caption suggestions
- Multiple tone options (humorous, sarcastic, wholesome, dark)
- Trending topic integration
- Caption rewriting with different tones
- Multi-language support (coming soon)

### 3. **Advanced Image Editor**
- Text positioning & customization
- 20+ fonts including Impact (classic meme font)
- Filters: Grayscale, Sepia, Vintage, Blur, etc.
- Stickers & emojis
- Freehand drawing tools
- Layers support
- HD exports (up to 4K)

### 4. **Trend Tracker**
- Real-time trending topics from:
  - Reddit (r/memes, r/dankmemes, etc.)
  - Twitter/X trending
  - TikTok viral sounds
  - Instagram trending
- Meme potential scoring
- Suggested templates for trends
- Trend alerts & notifications

### 5. **Viral Predictor**
- AI-powered viral score (0-100)
- Analyzes: caption quality, template popularity, timing, trend alignment
- Predicted reach estimation
- Improvement recommendations
- Performance tracking (predicted vs. actual)

### 6. **Social Scheduler**
- Auto-post to:
  - Twitter/X
  - Instagram
  - Reddit (multiple subreddits)
  - TikTok
- Optimal posting time suggestions
- Multi-platform scheduling
- Post analytics & performance

### 7. **Meme Challenges**
- Daily challenges with prompts
- Weekly themed competitions
- Brand-sponsored challenges
- Community voting system
- Prizes: Cash, Pro subscriptions, Featured placement
- Leaderboards & achievements

### 8. **Monetization**
#### Free Tier
- Basic templates
- Watermarked exports
- Standard filters
- Community access

#### Pro ($9.99/month)
- All templates (500+)
- No watermark
- HD downloads
- AI captions (unlimited)
- Viral predictor
- Priority support

#### API ($99/month)
- All Pro features
- REST API access
- 10,000 API calls/month
- Custom integrations
- Dedicated support

### 9. **Brand Meme Service**
- Starter: $500/month (10 custom templates)
- Professional: $2,000/month (50 templates + analytics)
- Enterprise: $5,000/month (unlimited + white-label)
- Custom meme packs
- Brand guidelines integration
- Campaign management
- Performance analytics

### 10. **Revenue Streams**
- Subscriptions (Pro + API)
- Brand partnerships
- Advertising (free tier)
- Sponsored challenges
- Template marketplace (creator revenue share)

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Cache:** Redis
- **AI:** OpenAI GPT-4
- **Image Processing:** Sharp, Canvas
- **Authentication:** JWT, bcrypt
- **Payments:** Stripe
- **Real-time:** Socket.IO

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Animations:** Framer Motion
- **Notifications:** React Hot Toast
- **Charts:** (Optional: Recharts)

### Infrastructure
- **Hosting:** AWS / Vercel / Railway
- **CDN:** Cloudflare
- **Storage:** AWS S3 / Cloudinary
- **Monitoring:** Sentry, LogRocket
- **CI/CD:** GitHub Actions

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Redis 7+
- npm or yarn

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials:
# MONGODB_URI=mongodb://localhost:27017/meme-generator
# REDIS_URL=redis://localhost:6379
# JWT_SECRET=your-secret-key
# OPENAI_API_KEY=sk-...
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_WEBHOOK_SECRET=whsec_...

# Seed templates (500+)
npm run seed

# Start development server
npm run dev

# Start production server
npm start
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local:
# API_URL=http://localhost:5000/api
# WS_URL=http://localhost:5000

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

---

## 📚 API Documentation

### Authentication

```bash
# Register
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "securepassword",
  "username": "memelord"
}

# Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Memes

```bash
# Create meme
POST /api/memes/create
Headers: Authorization: Bearer <token>
{
  "templateId": "...",
  "captions": [
    {
      "text": "Top text",
      "position": { "x": 250, "y": 50 },
      "fontSize": 40
    }
  ],
  "filters": [],
  "isPublic": true,
  "tags": ["funny", "viral"]
}

# Get user's memes
GET /api/memes/my

# Get public feed
GET /api/memes/feed
```

### Templates

```bash
# Get all templates
GET /api/templates?category=classic&limit=50

# Get trending templates
GET /api/templates/meta/trending

# Get template by ID
GET /api/templates/:id
```

### AI Captions

```bash
# Generate captions
POST /api/captions/generate
{
  "template": "Drake Hotline Bling",
  "context": "work from home",
  "tone": "humorous",
  "variations": 5
}
```

### Trends

```bash
# Get all trends
GET /api/trends?platform=all&limit=50

# Get live trends
GET /api/trends/live

# Refresh trends (admin)
POST /api/trends/refresh
```

### Viral Prediction

```bash
# Predict viral score
POST /api/viral/predict
{
  "template": "...",
  "captions": [...],
  "tags": ["funny"],
  "isPublic": true
}
```

### Challenges

```bash
# Get active challenges
GET /api/challenges/active

# Join challenge
POST /api/challenges/:id/join
{
  "memeId": "..."
}

# Vote for entry
POST /api/challenges/:id/vote
{
  "entryId": "..."
}
```

### Payments

```bash
# Create checkout session
POST /api/payments/checkout
{
  "planId": "pro",
  "successUrl": "https://yoursite.com/success",
  "cancelUrl": "https://yoursite.com/cancel"
}

# Get subscription
GET /api/payments/subscription
```

---

## 🎯 Project Structure

```
meme-generator-platform/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── memes.js
│   │   │   ├── templates.js
│   │   │   ├── captions.js
│   │   │   ├── trends.js
│   │   │   ├── viral.js
│   │   │   ├── challenges.js
│   │   │   ├── payments.js
│   │   │   ├── social.js
│   │   │   ├── brands.js
│   │   │   └── analytics.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Meme.js
│   │   │   ├── Template.js
│   │   │   ├── Challenge.js
│   │   │   ├── Trend.js
│   │   │   └── Brand.js
│   │   ├── services/
│   │   │   ├── aiCaptionGenerator.js
│   │   │   ├── viralPredictor.js
│   │   │   ├── trendTracker.js
│   │   │   ├── imageEditor.js
│   │   │   └── socialScheduler.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   └── scripts/
│   │       └── seed-templates.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.js
│   │   │   ├── create/
│   │   │   │   └── page.js
│   │   │   ├── trending/
│   │   │   ├── challenges/
│   │   │   ├── templates/
│   │   │   ├── pricing/
│   │   │   └── profile/
│   │   ├── components/
│   │   └── utils/
│   ├── package.json
│   └── tailwind.config.js
├── shared/
│   ├── templates/
│   ├── assets/
│   │   ├── fonts/
│   │   └── stickers/
│   └── uploads/
├── docs/
│   ├── REVENUE_PROJECTIONS.md
│   ├── API.md
│   └── DEPLOYMENT.md
└── README.md
```

---

## 🚀 Deployment

### Backend (Railway/Render)

```bash
# Set environment variables
# Connect MongoDB Atlas
# Connect Redis Cloud
# Deploy
```

### Frontend (Vercel)

```bash
# Connect GitHub repo
# Set environment variables
# Deploy automatically on push
```

### Database (MongoDB Atlas)

1. Create free cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Add to `.env`: `MONGODB_URI=mongodb+srv://...`

---

## 📊 Business Metrics

### Target KPIs (Year 1)
- **Monthly Active Users:** 100,000
- **Pro Subscribers:** 10,000
- **API Customers:** 500
- **Brand Partners:** 75
- **Memes Created:** 1,000,000+
- **Revenue:** $3.5M ARR

### Viral Coefficient
- Target: 1.5+ (each user brings 1.5 new users)
- Strategy: Watermark sharing, challenge referrals, social auto-post

---

## 🛡️ Security

- JWT authentication with expiration
- Rate limiting on all endpoints
- Input validation & sanitization
- HTTPS everywhere
- Secure file uploads
- CORS configuration
- Regular security audits

---

## 📝 License

MIT License - see LICENSE file for details

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📞 Support

- **Email:** support@memegenerator.com
- **Discord:** [Join our server]
- **Twitter:** @MemeGenerator
- **Documentation:** https://docs.memegenerator.com

---

## 🙏 Acknowledgments

- Meme templates from public domain / fair use
- OpenAI for GPT-4 API
- Stripe for payment processing
- MongoDB for database
- Vercel for hosting
- All contributors

---

**Built with ❤️ for the meme community**

*Remember: With great meme power comes great meme responsibility.*
