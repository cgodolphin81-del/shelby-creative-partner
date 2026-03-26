# AI Voice Scripts - 5 Trailer Narrator Styles

## Overview
Each trailer style includes a custom AI-generated voiceover using ElevenLabs. The scripts are designed to evoke the emotional tone of each style while remaining generic enough to work with any photo set.

---

## 1. 🎬 EPIC STYLE

**Voice:** Adam (Deep, Authoritative)
**Tone:** Dramatic, Cinematic, Blockbuster
**Pacing:** Slow to moderate, with dramatic pauses

### Full Script (60 seconds)
```
In a world... where ordinary moments become extraordinary...

[PAUSE 1s]

One story stands above all the rest.

[PAUSE 0.5s]

Through triumph... and challenge...
Through laughter... and tears...
This is the journey that changed everything.

[PAUSE 1s]

Witness the courage.
Feel the emotion.
Experience the legend.

[MUSIC SWELLS]

This summer... your life becomes cinema.

[DRAMATIC FINALE]
```

### Short Version (30 seconds)
```
In a world where moments matter... one story changes everything.
Witness the journey. Experience the legend.
Your life... as an epic.
```

### Voice Settings (ElevenLabs)
- Stability: 45%
- Similarity Boost: 75%
- Style Exaggeration: 20%
- Speaker Boost: Enabled

---

## 2. 💕 ROMANTIC STYLE

**Voice:** Rachel (Warm, Emotional)
**Tone:** Tender, Sentimental, Heartfelt
**Pacing:** Slow, gentle, with emotional warmth

### Full Script (60 seconds)
```
Some love stories... are written in the stars.

[PAUSE 1s]

Others are captured in fleeting moments...
A glance across a crowded room...
A touch that says everything...
A smile that lights up the world.

[PAUSE 0.5s]

This is more than a story.
This is a journey of the heart.
Two souls... finding their way home.

[SOFT MUSIC BUILD]

A tale of love... of you... of forever.

[GENTLE FINALE]
```

### Short Version (30 seconds)
```
Some moments take your breath away.
Some hearts are meant to be together.
This is your love story... captured forever.
```

### Voice Settings (ElevenLabs)
- Stability: 55%
- Similarity Boost: 70%
- Style Exaggeration: 15%
- Speaker Boost: Enabled

---

## 3. 😂 FUNNY STYLE

**Voice:** Antoni (Witty, Light)
**Tone:** Comedic, Playful, Irreverent
**Pacing:** Quick, upbeat, with comedic timing

### Full Script (60 seconds)
```
They said it couldn't be done.

[PAUSE 0.5s]

They said you were absolutely crazy.

[PAUSE 0.5s]

Well... look who's laughing now!

[UPBEAT MUSIC STING]

Get ready for the most unexpectedly amazing adventure ever captured.
Featuring: questionable decisions... spontaneous moments...
and that one photo everyone asks about.

[PAUSE 1s]

Starring YOU!
Co-starring: Your best friends, your worst moments, and that dog.

[COMEDIC FINALE]

Coming soon to a screen near you!
```

### Short Version (30 seconds)
```
They said it was impossible. They were wrong.
Get ready for the comedy of a lifetime... starring you!
Because normal is overrated.
```

### Voice Settings (ElevenLabs)
- Stability: 40%
- Similarity Boost: 65%
- Style Exaggeration: 35%
- Speaker Boost: Enabled

---

## 4. 📼 NOSTALGIC STYLE

**Voice:** Rachel (Warm, Reflective)
**Tone:** Sentimental, Vintage, Wistful
**Pacing:** Slow, contemplative, with gentle pauses

### Full Script (60 seconds)
```
Some memories fade with time...

[PAUSE 1s]

Others... become legends.

[WARM MUSIC FADES IN]

Journey back to where it all began.
To lazy summer afternoons...
To laughter that echoed through the years...
To moments we thought would last forever.

[PAUSE 1s]

They say you can't go home again.
But maybe... just maybe...
You can visit for a while.

[SENTIMENTAL BUILD]

These are your memories.
Your story.
Your legacy.

[GENTLE FINALE]
```

### Short Version (30 seconds)
```
Some memories fade. Others become legends.
Journey back to the moments that shaped us.
To the memories that live forever.
```

### Voice Settings (ElevenLabs)
- Stability: 60%
- Similarity Boost: 70%
- Style Exaggeration: 10%
- Speaker Boost: Enabled

---

## 5. ⚡ ACTION STYLE

**Voice:** Adam (Intense, Dramatic)
**Tone:** High-Energy, Thrilling, Adrenaline-Fueled
**Pacing:** Fast, punchy, with dramatic emphasis

### Full Script (60 seconds)
```
One person.

[DRAMATIC PAUSE]

Countless adventures.

[DRUM HIT]

Against all odds... they never backed down.
Through every challenge... every obstacle... every impossible moment...
They kept moving forward.

[FAST PACED]

This is not just a story.
This is a legend in the making.
A testament to courage.
A celebration of life.

[MUSIC BUILDS INTENSELY]

Your life... as an action epic.

[EPIC FINALE]

Coming to screens everywhere!
```

### Short Version (30 seconds)
```
One person. Countless adventures.
Against all odds, they never backed down.
Your life... as an action epic.
```

### Voice Settings (ElevenLabs)
- Stability: 40%
- Similarity Boost: 80%
- Style Exaggeration: 30%
- Speaker Boost: Enabled

---

## Implementation Notes

### ElevenLabs API Integration

```javascript
const generateVoiceover = async (style, text) => {
    const voiceMap = {
        epic: 'Adam',
        romantic: 'Rachel',
        funny: 'Antoni',
        nostalgic: 'Rachel',
        action: 'Adam'
    };
    
    const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceMap[style]}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': process.env.ELEVENLABS_API_KEY
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_monolingual_v1',
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75
                }
            })
        }
    );
    
    return await response.arrayBuffer();
};
```

### Cost Estimates

| Style | Characters | Cost (per generation) |
|-------|------------|----------------------|
| Epic (60s) | ~180 chars | ~$0.018 |
| Romantic (60s) | ~190 chars | ~$0.019 |
| Funny (60s) | ~200 chars | ~$0.020 |
| Nostalgic (60s) | ~185 chars | ~$0.019 |
| Action (60s) | ~175 chars | ~$0.018 |

**Monthly Costs (at 1000 trailers/month):**
- Voice generation: ~$20-40/month (depending on tier mix)
- ElevenLabs Starter Plan: $5/month (30k characters)
- ElevenLabs Creator Plan: $22/month (100k characters)

---

## Customization Options

### Premium Tier ($49)
- Custom name insertion: "This is the story of [NAME]..."
- Custom date/location: "Summer 2024... [LOCATION]..."
- Extended script (90 seconds)
- Choice of alternate voice actors

### Enterprise
- Fully custom scripts
- Brand voice training
- Multiple language support
- Bulk generation API
