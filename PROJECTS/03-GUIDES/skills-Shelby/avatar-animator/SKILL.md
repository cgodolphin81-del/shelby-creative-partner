---
name: avatar-animator
description: Create AI avatars from photos (free, no watermark)
homepage: https://github.com/ai-avatar-system
metadata: {
  "openclaw": {
    "emoji": "👤",
    "requires": {},
    "always": true,
  }
}
---

# Avatar Animator

Create consistent AI avatars from photos. Perfect for AI influencers, faceless channels!

## Usage

### Create Avatar from Photo
```
/avatar --photo "selfie.jpg" --style "realistic" --output "avatar.png"
```

### Generate Multiple Expressions
```
/avatar --base "avatar.png" --expressions 5 --output ./avatars/
```

### Create Avatar Variations
```
/avatar --photo "selfie.jpg" --variations 10 --style "anime"
```

### Animate Avatar (Talking)
```
/avatar --photo "selfie.jpg" --audio "voiceover.mp3" --output "talking-avatar.mp4"
```

## Free Avatar APIs

| Service | Free Tier | Watermark | Quality |
|---------|-----------|-----------|---------|
| **D-ID** | 5 min/month | ❌ No | ⭐⭐⭐⭐⭐ |
| **HeyGen** | 1 credit | ❌ No | ⭐⭐⭐⭐⭐ |
| **Synthesia** | Trial only | ❌ No | ⭐⭐⭐⭐⭐ |
| **SadTalker** | FREE (local) | ❌ No | ⭐⭐⭐⭐ |
| **Wav2Lip** | FREE (local) | ❌ No | ⭐⭐⭐⭐ |

## Implementation

```bash
# Local SadTalker (FREE, unlimited)
git clone https://github.com/OpenTalker/SadTalker
cd SadTalker

# Generate talking avatar
python inference.py \
  --driven_audio "voiceover.mp3" \
  --source_image "avatar.png" \
  --result_dir ./output \
  --still \
  --preprocess full
```

## Examples

### Example 1: AI Influencer Avatar
```
You: Create AI influencer from my photo
Agent: 👤 Creating avatar...
       
       Input: charmainer-selfie.jpg
       Style: Realistic, professional
       Variations: 5 (different angles)
       
       ✅ Generated:
       - avatar-front.png
       - avatar-side.png
       - avatar-smile.png
       - avatar-neutral.png
       - avatar-professional.png
       
       Ready for content creation!
```

### Example 2: Talking Avatar Video
```
You: Make my avatar say "Welcome to my channel"
Agent: 👤 Creating talking avatar...
       
       1. Generate avatar from photo ✅
       2. Create voiceover (TTS) ✅
       3. Animate with SadTalker ✅
       
       ✅ Output: welcome-video.mp4
       Duration: 15 seconds
       Perfect for TikTok intro!
```

### Example 3: Avatar Variations
```
You: Create anime version of my avatar
Agent: 👤 Creating anime variations...
       
       Style: Anime/manga
       Variations: 10
       
       ✅ Generated 10 unique anime avatars
       Saved to: ./avatars/anime-collection/
       
       Use for:
       - Gaming content
       - Anime niche
       - Younger audience
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `--photo` | string | Yes* | - | Source photo |
| `--base` | string | Yes* | - | Existing avatar |
| `--style` | string | No | realistic | realistic, anime, cartoon, artistic |
| `--expressions` | number | No | 1 | Number of expressions |
| `--variations` | number | No | 1 | Number of variations |
| `--audio` | string | No | - | Audio for lip-sync |
| `--output` | string | No | auto | Output folder |

## Use Cases

**AI Influencers:**
- Consistent avatar across all content
- Multiple expressions for different moods
- Different styles for different platforms

**Faceless Channels:**
- Professional avatar for narration
- Animated for engagement
- Brand consistency

**Business:**
- Spokesperson avatar
- Training videos
- Customer support

**Personal:**
- Social media avatar
- Video messages
- Creative projects

## Related Skills

- `tts-narrator` - Voiceover for avatars
- `lip-sync-auto` - Sync avatar to audio
- `script-writer` - Scripts for avatar videos
- `design-generator` - Avatar backgrounds

---

*Version: 1.0.0*
*Last Updated: March 19, 2026*
*API: SadTalker (local), D-ID, HeyGen*
