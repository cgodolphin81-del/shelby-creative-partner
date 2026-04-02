# Episode 022: Machu Picchu - TTS Audio Generation

## Status: ⚠️ BLOCKED - Missing API Key

## What's Ready

✅ Episode text split into 3 segments (by Acts)
✅ Output directory created
✅ Generation scripts prepared
✅ Voice settings configured (Sarah - Warm Narrator)

## What's Needed

❌ **ELEVENLABS_API_KEY** environment variable must be set

## Quick Start (Once API Key is Available)

```bash
# 1. Set API key
export ELEVENLABS_API_KEY=your-key-here

# 2. Install dependencies
pip install requests

# 3. Generate audio
cd /mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/audio/022-machu-picchu
python3 generate_all_tts.py
```

## Segment Breakdown

| File | Act | Content | Words | Duration |
|------|-----|---------|-------|----------|
| `022-machu-picchu-part1.mp3` | I | The Lost City | 903 | ~6 min |
| `022-machu-picchu-part2.mp3` | II | The City of Stone | 1,301 | ~8.5 min |
| `022-machu-picchu-part3.mp3` | III | The Mountain That Remains | 1,244 | ~8 min |

**Total**: ~22.5 minutes of audio

## Voice Configuration

Using ElevenLabs "Sarah" voice (warm, storytelling):
- Voice ID: `EXAVITQu4vr4xnSDxMaL`
- Model: `eleven_monolingual_v1`
- Stability: 0.75
- Similarity Boost: 0.75
- Style: 0.15

## Files in This Directory

- `segment-1.txt`, `segment-2.txt`, `segment-3.txt` - Text segments ready for TTS
- `generate_all_tts.py` - Main generation script (handles chunking + combining)
- `split_episode.py` - Utility to split episode by acts
- `TTS-GENERATION-STATUS.md` - Detailed status report
- `README.md` - This file

---

*Prepared by Shelby TTS Agent* 🤖
