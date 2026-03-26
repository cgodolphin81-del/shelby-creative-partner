# 🎬 Your Life as a Movie Trailer

**Turn your photos into a cinematic movie trailer in 2 minutes.**

Upload 5-10 photos, choose a style (Epic, Romantic, Funny, Nostalgic, or Action), and let AI generate a professional trailer with voiceover and music.

![MovieTrailer Demo](public/assets/demo.gif)

---

## ✨ Features

- **5 Cinematic Styles:** Epic, Romantic, Funny, Nostalgic, Action
- **AI Voiceover:** Professional narrator voices via ElevenLabs
- **Custom Music:** Mood-matched background tracks
- **Quick Generation:** 2-5 minute turnaround
- **Multiple Quality Tiers:** Free (720p), HD ($19), 4K ($49)
- **Drag & Drop Upload:** Simple, intuitive interface
- **Instant Preview:** Watch before you download

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (`node -v`)
- FFmpeg (`ffmpeg -version`)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd movie-trailer-mvp

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your API keys
# - ElevenLabs API key (https://elevenlabs.io)
# - Stripe keys (https://stripe.com)

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Environment Setup

Edit `.env` with your credentials:

```env
PORT=3000
ELEVENLABS_API_KEY=your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

---

## 📁 Project Structure

```
movie-trailer-mvp/
├── public/
│   ├── index.html          # Main landing page
│   ├── styles/
│   │   └── main.css        # All styles
│   ├── scripts/
│   │   └── main.js         # Frontend JavaScript
│   └── assets/             # Images, fonts
├── src/
│   └── server/
│       ├── routes/         # API endpoints
│       └── services/       # Business logic
├── docs/
│   ├── USER-FLOW.md        # User journey diagram
│   ├── TECH-STACK.md       # Technology documentation
│   ├── VOICE-SCRIPTS.md    # AI narrator scripts
│   ├── MUSIC-SELECTION.md  # Music track details
│   ├── VIDEO-ASSEMBLY.md   # FFmpeg pipeline
│   ├── PRICING.md          # Pricing tiers & Stripe
│   └── LAUNCH-PLAN.md      # Go-to-market strategy
├── uploads/                # User uploads (temp)
├── outputs/                # Generated trailers
├── server.js               # Express server
├── package.json
└── .env.example
```

---

## 🎭 Trailer Styles

| Style | Voice | Music | Vibe |
|-------|-------|-------|------|
| 🎬 **Epic** | Adam (Deep) | Orchestral | Blockbuster drama |
| 💕 **Romantic** | Rachel (Warm) | Piano & Strings | Love story |
| 😂 **Funny** | Antoni (Witty) | Upbeat Comedy | Lighthearted fun |
| 📼 **Nostalgic** | Rachel (Soft) | Vintage Warm | Sentimental journey |
| ⚡ **Action** | Adam (Intense) | Epic Drums | High-energy thriller |

---

## 💰 Pricing

| Tier | Price | Resolution | Length | Watermark |
|------|-------|------------|--------|-----------|
| **Free** | $0 | 720p | 30s | ✅ Yes |
| **HD** | $19 | 1080p | 60s | ❌ No |
| **4K Premium** | $49 | 4K | 90s | ❌ No |

---

## 🛠️ API Endpoints

### Upload Photos
```http
POST /api/upload
Content-Type: multipart/form-data

photos: [file] (5-10 images, max 10MB each)
```

### Generate Trailer
```http
POST /api/generate
Content-Type: application/json

{
  "photoIds": ["id1", "id2", ...],
  "style": "epic",
  "tier": "free"
}
```

### Check Status
```http
GET /api/trailer/:id
```

### Download
```http
GET /api/trailer/:id/download
```

---

## 🧪 Testing

### Local Testing
```bash
# Run server
npm run dev

# Test upload endpoint
curl -X POST http://localhost:3000/api/upload \
  -F "photos=@photo1.jpg" \
  -F "photos=@photo2.jpg"

# Test generation
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"photoIds":["id1","id2"],"style":"epic"}'
```

### Sample Photos
Use the sample photos in `public/examples/` for testing.

---

## 📊 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **AI Voice:** ElevenLabs API
- **Music:** Suno API / Royalty-free library
- **Video:** FFmpeg (fluent-ffmpeg)
- **Payments:** Stripe
- **Storage:** Local (dev) / S3 (production)

---

## 🚀 Deployment

### Production Checklist

- [ ] Set up production environment (DigitalOcean, Heroku, AWS)
- [ ] Configure environment variables
- [ ] Set up S3 for file storage
- [ ] Enable HTTPS (Let's Encrypt)
- [ ] Configure Stripe webhooks
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Enable CDN for video delivery
- [ ] Configure auto-scaling

### Docker (Optional)
```bash
docker build -t movie-trailer .
docker run -p 3000:3000 --env-file .env movie-trailer
```

---

## 📝 Documentation

- [User Flow Diagram](docs/USER-FLOW.md)
- [Tech Stack Details](docs/TECH-STACK.md)
- [AI Voice Scripts](docs/VOICE-SCRIPTS.md)
- [Music Selection](docs/MUSIC-SELECTION.md)
- [Video Assembly Pipeline](docs/VIDEO-ASSEMBLY.md)
- [Pricing Setup](docs/PRICING.md)
- [Launch Plan](docs/LAUNCH-PLAN.md)

---

## 🤝 Contributing

This is an MVP project. Contributions welcome!

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

---

## 📄 License

MIT License - see LICENSE file for details.

---

## 🙏 Acknowledgments

- **ElevenLabs** for amazing AI voice technology
- **Suno** for AI music generation
- **FFmpeg** community for the video processing powerhouse
- **Stripe** for seamless payments

---

## 📞 Support

- Email: support@movietrailer.com
- Twitter: @MovieTrailerApp
- Documentation: /docs

---

**Made with ❤️ by the MovieTrailer Team**

*Turn your memories into cinema.*
