# Music Selection - 5 Mood-Based Tracks

## Overview
Each trailer style is paired with a carefully selected music track that matches the emotional tone. Music can be AI-generated (Suno/Udio) or selected from a royalty-free library.

---

## 1. 🎬 EPIC - "Rise of Heroes"

**Genre:** Orchestral Cinematic
**Duration:** 2:30
**BPM:** 80-120 (variable)
**Key:** D Minor

### Instrumentation
- Full string section (violins, violas, cellos, basses)
- Brass section (trumpets, trombones, French horns)
- Epic percussion (taiko drums, timpani, cymbals)
- SATB Choir (for climactic moments)
- Solo French horn (for emotional passages)

### Structure
```
0:00-0:30  - Intro (soft strings, building tension)
0:30-1:00  - Theme introduction (brass, heroic melody)
1:00-1:30  - Development (full orchestra, rising action)
1:30-2:00  - Climax (choir, maximum intensity)
2:00-2:30  - Resolution (triumphant finale)
```

### Mood Keywords
Epic, Triumphant, Dramatic, Heroic, Cinematic, Powerful

### Similar To
- Two Steps From Hell - "Victory"
- Hans Zimmer - "Time" (Inception)
- Audiomachine - "Guardians at the Gate"

---

## 2. 💕 ROMANTIC - "Endless Love"

**Genre:** Piano & Strings
**Duration:** 2:00
**BPM:** 60-70
**Key:** E-flat Major

### Instrumentation
- Grand piano (lead instrument)
- Solo violin (melodic counterpoint)
- Cello section (warm foundation)
- Soft string pads (ambient texture)
- Gentle harp arpeggios (accents)

### Structure
```
0:00-0:20  - Piano intro (gentle, intimate)
0:20-0:50  - Strings enter (warm embrace)
0:50-1:20  - Full arrangement (emotional peak)
1:20-1:40  - Quiet reflection (piano solo)
1:40-2:00  - Tender resolution (soft strings)
```

### Mood Keywords
Warm, Emotional, Tender, Intimate, Loving, Gentle

### Similar To
- Yiruma - "River Flows in You"
- Ludovico Einaudi - "Nuvole Bianche"
- Joe Hisaishi - "One Summer's Day"

---

## 3. 😂 FUNNY - "Comedy Chase"

**Genre:** Upbeat Comedy
**Duration:** 1:45
**BPM:** 140-160
**Key:** C Major

### Instrumentation
- Pizzicato strings (playful bounce)
- Woodwinds (flute, clarinet, bassoon)
- Light percussion (xylophone, triangle, snare)
- Tuba (comedic bass lines)
- Slide whistle (accent effects)

### Structure
```
0:00-0:15  - Quirky intro (pizzicato)
0:15-0:45  - Main theme (woodwind melody)
0:45-1:00  - Comedic break (tuba solo)
1:00-1:30  - Chase sequence (accelerating)
1:30-1:45  - Playful ending (stinger)
```

### Mood Keywords
Playful, Lighthearted, Quirky, Whimsical, Fun, Bouncy

### Similar To
- Kevin MacLeod - "Sneaky Snitch"
- Ray Chen - "Comedy Overture"
- Benny Hill Theme

---

## 4. 📼 NOSTALGIC - "Yesterday's Dreams"

**Genre:** Vintage Warm
**Duration:** 2:15
**BPM:** 65-75
**Key:** G Major

### Instrumentation
- Acoustic guitar (fingerstyle)
- Upright piano (warm, slightly detuned)
- Warm string section (vintage sound)
- Vinyl crackle (texture layer)
- Melodica (nostalgic accent)

### Structure
```
0:00-0:25  - Guitar intro (warm, intimate)
0:25-0:55  - Piano enters (gentle melody)
0:55-1:30  - Strings swell (emotional depth)
1:30-1:50  - Memory lane (solo guitar)
1:50-2:15  - Fading warmth (gentle outro)
```

### Mood Keywords
Sentimental, Warm, Reflective, Vintage, Bittersweet, Cozy

### Similar To
- Simon & Garfunkel acoustic vibes
- Vintage film scores (1960s-70s)
- Bon Iver - "Holocene" (instrumental)

---

## 5. ⚡ ACTION - "Adrenaline Rush"

**Genre:** Epic Action
**Duration:** 2:45
**BPM:** 140-180
**Key:** A Minor

### Instrumentation
- Heavy percussion (epic drums, taiko)
- Electric guitar (distorted, rhythmic)
- Synth bass (modern edge)
- Brass section (aggressive stabs)
- Electronic elements (sub drops, impacts)

### Structure
```
0:00-0:20  - Tension builder (drums, synth)
0:20-0:50  - Main riff (guitar, aggressive)
0:50-1:20  - Action sequence (full intensity)
1:20-1:50  - Battle climax (maximum energy)
1:50-2:20  - Victory charge (triumphant)
2:20-2:45  - Epic finale (big finish)
```

### Mood Keywords
Intense, Thrilling, High-Energy, Aggressive, Powerful, Adrenaline

### Similar To
- Two Steps From Hell - "Heart of Courage"
- Steve Jablonsky - Transformers scores
- Zack Zimmer - Action cues

---

## Music Sources

### Option 1: AI Generation (Suno/Udio)

**Suno API Integration:**
```javascript
const generateMusic = async (style, duration) => {
    const prompts = {
        epic: 'Epic orchestral cinematic trailer music, heroic brass, full strings, choir, dramatic, 120 BPM',
        romantic: 'Romantic piano and strings, emotional love theme, gentle, intimate, 65 BPM',
        funny: 'Playful comedy chase music, pizzicato strings, woodwinds, quirky, upbeat, 150 BPM',
        nostalgic: 'Warm nostalgic acoustic guitar and piano, vintage, sentimental, cozy, 70 BPM',
        action: 'High-energy action trailer music, epic drums, electric guitar, intense, 160 BPM'
    };
    
    const response = await fetch('https://api.suno.ai/v1/generate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.SUNO_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompts[style],
            duration: duration,
            instrumental: true
        })
    });
    
    return await response.json();
};
```

**Pricing:**
- Suno Pro: $10/month (500 credits, ~50 songs)
- Udio Pro: $10/month (600 generations)

### Option 2: Royalty-Free Libraries

**Recommended Sources:**
| Library | License | Cost | Quality |
|---------|---------|------|---------|
| Epidemic Sound | Commercial | $15/month | Excellent |
| Artlist | Commercial | $16.60/month | Excellent |
| AudioJungle | Per-track | $15-50/track | Good |
| PremiumBeat | Per-track | $49/track | Excellent |
| YouTube Audio Library | Free | Free | Variable |

**Budget Alternative:** Start with YouTube Audio Library (free) for MVP, upgrade to Epidemic Sound for production.

---

## Music Integration

### FFmpeg Audio Mixing
```bash
# Mix voiceover and music with ducking
ffmpeg -i voiceover.mp3 -i music.mp3 \
  -filter_complex "[1:a]volume=0.3[a];[0:a][a]amix=inputs=2" \
  -y output_audio.mp3
```

### Volume Levels
| Element | Level | Notes |
|---------|-------|-------|
| Voiceover | 0 dB | Primary focus |
| Background Music | -15 to -20 dB | Should not compete |
| Music Climax | -10 dB | Slightly louder for impact |
| Transitions | -25 dB | Fade during scene changes |

---

## Licensing Notes

### For MVP/Testing
- Use AI-generated or royalty-free music
- Clearly mark as "Preview" with watermark

### For Commercial Use
- Purchase appropriate license for each track
- Keep license documentation
- Consider blanket license (Epidemic Sound, Artlist)

### For Custom/Premium Tier
- Commission original compositions
- Exclusive rights negotiation
- Artist credit in end titles

---

## File Organization

```
music/
├── epic/
│   ├── rise_of_heroes_full.mp3
│   ├── rise_of_heroes_60s.mp3
│   └── rise_of_heroes_30s.mp3
├── romantic/
│   ├── endless_love_full.mp3
│   └── ...
├── funny/
├── nostalgic/
└── action/
```
