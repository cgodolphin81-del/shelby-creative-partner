# Tech Stack Setup - Your Life as a Movie Trailer

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND                                  │
│  HTML5 + CSS3 + Vanilla JavaScript (No framework dependencies)  │
│  - Drag & drop upload (Dropzone.js alternative)                 │
│  - Video player (Video.js or native)                            │
│  - Responsive design (Mobile-first)                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND                                   │
│  Node.js + Express.js                                           │
│  - Multer (file uploads)                                        │
│  - FFmpeg-fluent (video processing)                             │
│  - Stripe (payments)                                            │
│  - JWT (authentication)                                         │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
     ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
     │  ELEVENLABS │ │   SUNO API  │ │   STRIPE    │
     │    TTS      │ │   MUSIC     │ │  PAYMENTS   │
     └─────────────┘ └─────────────┘ └─────────────┘
```

## Core Technologies

### Frontend
| Technology | Purpose | Why |
|------------|---------|-----|
| HTML5 | Structure | Universal support |
| CSS3 (Flexbox/Grid) | Styling | Modern, responsive |
| Vanilla JavaScript | Interactivity | No build step, fast |
| Video.js | Video Player | Cross-browser, customizable |

### Backend
| Technology | Purpose | Why |
|------------|---------|-----|
| Node.js v18+ | Runtime | Async I/O, npm ecosystem |
| Express.js | Web Framework | Simple, flexible |
| Multer | File Uploads | Handles multipart/form-data |
| FFmpeg | Video Processing | Industry standard |
| Fluent-FFmpeg | FFmpeg Wrapper | Promise-based, clean API |

### AI Services

#### 1. ElevenLabs (Voice Generation)
- **Purpose:** Generate cinematic trailer voiceovers
- **Endpoint:** `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`
- **Recommended Voices:**
  - `Adam` - Deep, authoritative (Epic/Action)
  - `Rachel` - Warm, emotional (Romantic/Nostalgic)
  - `Antoni` - Versatile, clear (All styles)
- **Pricing:** Free tier: 10k chars/month | Starter: $5/month
- **API Key Setup:** Get from https://elevenlabs.io

#### 2. Suno/Udio (Music Generation)
- **Purpose:** Generate custom background music per style
- **Suno API:** `POST https://api.suno.ai/v1/generate`
- **Udio API:** `POST https://api.udio.com/v1/tracks`
- **Alternative:** Use pre-licensed royalty-free tracks initially
- **Pricing:** Suno ~$10/month for commercial use

#### 3. FFmpeg (Video Assembly)
- **Purpose:** Combine photos, voice, music into trailer
- **Installation:** `brew install ffmpeg` (Mac) | `apt install ffmpeg` (Linux)
- **Key Operations:**
  - Resize/crop photos to 16:9
  - Apply transitions (fade, dissolve)
  - Sync voiceover with music
  - Add text overlays
  - Encode to MP4 (H.264)

### Storage
| Option | Purpose | Cost |
|--------|---------|------|
| Local (dev) | Development/testing | Free |
| AWS S3 | Production storage | ~$0.023/GB |
| Cloudflare R2 | Alternative | Free egress |

### Payments
| Technology | Purpose | Fees |
|------------|---------|------|
| Stripe | Payment processing | 2.9% + $0.30 |
| Stripe Checkout | Hosted payment page | Included |

## Setup Instructions

### 1. Environment Setup

```bash
# Create project directory
cd movie-trailer-mvp

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express multer fluent-ffmpeg cors dotenv stripe jsonwebtoken bcrypt
npm install --save-dev nodemon

# Create environment file
cp .env.example .env
```

### 2. Environment Variables (.env)

```env
# Server
PORT=3000
NODE_ENV=development

# ElevenLabs
ELEVENLABS_API_KEY=your_elevenlabs_key_here
ELEVENLABS_VOICE_EPIC=Adam
ELEVENLABS_VOICE_ROMANTIC=Rachel
ELEVENLABS_VOICE_FUNNY=Antoni
ELEVENLABS_VOICE_NOSTALGIC=Rachel
ELEVENLABS_VOICE_ACTION=Adam

# Suno/Udio (optional - can use royalty-free initially)
SUNO_API_KEY=your_suno_key_here

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PRICE_HD=price_hd_id
STRIPE_PRICE_4K=price_4k_id

# Storage
STORAGE_PATH=./uploads
S3_BUCKET=your-bucket-name
S3_REGION=us-east-1
S3_ACCESS_KEY=your_access_key
S3_SECRET_KEY=your_secret_key

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this
```

### 3. FFmpeg Installation

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt update
sudo apt install ffmpeg

# Verify installation
ffmpeg -version
```

### 4. Directory Structure

```
movie-trailer-mvp/
├── src/
│   ├── components/       # Frontend components
│   ├── styles/           # CSS files
│   ├── scripts/          # Frontend JS
│   └── server/           # Backend code
│       ├── routes/       # API routes
│       ├── services/     # Business logic
│       └── middleware/   # Auth, upload, etc.
├── public/
│   ├── assets/           # Images, fonts
│   └── examples/         # Sample trailers
├── uploads/              # Temporary file storage
├── outputs/              # Generated trailers
├── docs/                 # Documentation
├── config/               # Configuration files
├── .env
├── .env.example
├── package.json
└── server.js
```

### 5. API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/upload` | Upload photos |
| POST | `/api/generate` | Generate trailer |
| GET | `/api/trailer/:id` | Get trailer status |
| GET | `/api/trailer/:id/download` | Download trailer |
| POST | `/api/payment/create` | Create payment session |
| POST | `/api/webhook/stripe` | Stripe webhook |

### 6. Rate Limits & Quotas

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| ElevenLabs | 10k chars/mo | 30k-100k chars/mo |
| Suno | 50 songs/mo | 500+ songs/mo |
| FFmpeg | Local CPU | Scale with server |
| Storage | Local disk | S3 (unlimited) |

## Security Considerations

1. **File Uploads:**
   - Validate file types (images only)
   - Limit file size (10MB max)
   - Sanitize filenames
   - Store outside web root

2. **API Keys:**
   - Never expose in frontend
   - Use environment variables
   - Rotate regularly

3. **Payments:**
   - Use Stripe Checkout (hosted)
   - Verify webhooks
   - Never store card data

4. **Authentication:**
   - JWT for API protection
   - Rate limiting on endpoints
   - CORS configuration

## Scaling Considerations

- **Phase 1 (MVP):** Single server, local storage
- **Phase 2:** Separate worker queue for video processing
- **Phase 3:** CDN for video delivery, auto-scaling

## Cost Estimates (Monthly)

| Service | Estimated Cost |
|---------|----------------|
| ElevenLabs (Starter) | $5 |
| Suno (Pro) | $10 |
| Server (DigitalOcean) | $12 |
| S3 Storage | ~$5 |
| Stripe Fees | 2.9% per transaction |
| **Total Fixed** | ~$32/month |
