# User Flow Diagram - Your Life as a Movie Trailer

## Complete User Journey

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           YOUR LIFE AS A MOVIE TRAILER                       │
│                              User Flow Diagram                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   LANDING    │────▶│   UPLOAD     │────▶│    STYLE     │────▶│   PREVIEW    │
│     PAGE     │     │   PHOTOS     │     │   SELECT     │     │   & EDIT     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │                    │
       │                    │                    │                    │
       ▼                    ▼                    ▼                    ▼
  [Hero Section]     [Drag & Drop]       [5 Style Options]    [Video Player]
  [How It Works]     [5-10 Photos]       [Epic/Romantic/     [Trim Scenes]
  [Pricing Tiers]    [Max 10MB Each]      Funny/Nostalgic/   [Add Text]
  [Examples]         [Preview Grid]       Action]             [Adjust Music]
       │                    │                    │                    │
       │                    │                    │                    │
       └────────────────────┴────────────────────┴────────────────────┘
                                    │
                                    ▼
                          ┌──────────────────┐
                          │   GENERATE       │
                          │   TRAILER        │
                          └──────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
           ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
           │  ELEVENLABS │ │   SUNO/     │ │   FFMPEG    │
           │   VOICEOVER │ │   UDIO      │ │   ASSEMBLY  │
           │             │ │   MUSIC     │ │             │
           └─────────────┘ └─────────────┘ └─────────────┘
                                    │
                                    ▼
                          ┌──────────────────┐
                          │   DOWNLOAD       │
                          │   & SHARE        │
                          └──────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
           ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
           │   FREE      │ │    HD       │ │    4K       │
           │ Watermarked │ │   $19       │ │   $49       │
           │   720p      │ │   1080p     │ │ + Custom    │
           └─────────────┘ └─────────────┘ └─────────────┘
```

## Step-by-Step Flow

### 1. LANDING PAGE (Entry Point)
- User arrives at homepage
- Sees hero section with demo trailer
- Reads "How It Works" (3 simple steps)
- Views example trailers
- Checks pricing tiers
- **CTA:** "Create Your Trailer" → Upload Page

### 2. UPLOAD PHOTOS
- Drag & drop interface OR file picker
- Accepts: JPG, PNG, HEIC, WebP
- Minimum: 5 photos | Maximum: 10 photos
- Max file size: 10MB per photo
- Real-time upload progress
- Photo preview grid with reorder capability
- **CTA:** "Continue to Style Selection"

### 3. STYLE SELECTION
- 5 Trailer Style Cards:
  - 🎬 **Epic** - Dramatic, cinematic, blockbuster feel
  - 💕 **Romantic** - Warm, emotional, love story
  - 😂 **Funny** - Lighthearted, comedic, upbeat
  - 📼 **Nostalgic** - Vintage, sentimental, memories
  - ⚡ **Action** - High-energy, intense, thrilling
- Each style shows sample narrator voice & music preview
- **CTA:** "Generate My Trailer"

### 4. AI GENERATION (Backend Processing)
```
┌────────────────────────────────────────────────────────────┐
│                    GENERATION PIPELINE                      │
├────────────────────────────────────────────────────────────┤
│  1. Photo Analysis → Select best 8-12 shots                │
│  2. Apply filters & transitions per style                  │
│  3. Generate voiceover (ElevenLabs)                        │
│  4. Select/generate music (Suno/Udio)                      │
│  5. Assemble video (FFmpeg/Remotion)                       │
│  6. Add titles, credits, watermark                         │
│  7. Encode for target quality                              │
└────────────────────────────────────────────────────────────┘
Processing Time: 2-5 minutes
```

### 5. PREVIEW & EDIT
- Full trailer preview in player
- Basic editing options:
  - Trim start/end
  - Adjust volume (voice/music balance)
  - Add custom text overlays
  - Choose different music track
- **CTAs:** "Regenerate" | "Download" | "Share"

### 6. DOWNLOAD & SHARE
- Select quality tier:
  - **Free:** 720p with watermark
  - **HD ($19):** 1080p, no watermark
  - **4K ($49):** 4K resolution + custom voice option
- Download options: MP4, shareable link
- Social share buttons (Instagram, TikTok, YouTube)

## Technical Flow

```
Frontend (React/Vanilla JS)
         │
         │ HTTPS/API
         ▼
Backend (Node.js + Express)
         │
    ┌────┼────┬────────────┐
    │    │    │            │
    ▼    ▼    ▼            ▼
ElevenLabs  Suno/Udio   FFmpeg    Storage
  API       API        Pipeline   (S3/Local)
    │         │           │         │
    └─────────┴───────────┴─────────┘
                    │
                    ▼
              Return Video URL
                    │
                    ▼
              Frontend Display
```

## Error Handling

- Upload failures → Retry with progress
- API timeouts → Queue for async processing
- Payment failures → Clear error messages
- Generation failures → Auto-refund + retry option

## Success Metrics

- Upload completion rate
- Style selection distribution
- Generation success rate
- Conversion (Free → Paid)
- Average order value
- Share rate
