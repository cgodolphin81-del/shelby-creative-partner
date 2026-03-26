# Music & Atmosphere Specification
## AI-Generated Soundtracks & Audio Design

---

## Audio Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUDIO EXPERIENCE LAYERS                      │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 1: MAIN SOUNDTRACK (continuous music bed)                │
│  LAYER 2: CUE POINTS (transitions, highlights, moments)         │
│  LAYER 3: AMBIENCE (venue atmosphere, audience sounds)          │
│  LAYER 4: VOICEOVER (optional narration, designer commentary)   │
│  LAYER 5: SFX (footsteps, fabric, applause, interactions)       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ADAPTIVE AUDIO ENGINE                        │
│  • Mood matching (music responds to garment style)              │
│  • Dynamic mixing (balance layers in real-time)                 │
│  • Spatial audio (3D positioning for VR/AR)                     │
│  • Platform optimization (web, mobile, VR, broadcast)           │
└─────────────────────────────────────────────────────────────────┘
```

---

## AI Music Generation System

### Music Generation Pipeline

**Input Parameters:**
```json
{
  "showTheme": "Renewal & Radiance",
  "collection": "Spring/Summer 2026",
  "brandIdentity": "The Unicorn Stable",
  "targetMood": ["uplifting", "fresh", "sophisticated", "hopeful"],
  "targetAudience": "Women 25-45, urban professionals",
  "tempo": {
    "min": 100,
    "max": 120,
    "unit": "BPM"
  },
  "duration": {
    "total": 720,
    "unit": "seconds"
  },
  "structure": {
    "intro": 30,
    "act1": 180,
    "act2": 240,
    "act3": 180,
    "finale": 90
  },
  "excludedGenres": ["heavy metal", "hard techno"],
  "referenceTracks": [
    "Artist - Track (for vibe reference)",
    "Artist - Track (for tempo reference)"
  ]
}
```

### AI Music Tools Integration

**Recommended Platforms:**
```
1. SOUNDRAW (commercial licensing, customizable)
2. AIVA (classical/cinematic focus)
3. AMUSIC (pop/electronic focus)
4. BOOMY (quick generation, simple edits)
5. CUSTOM MODEL (fine-tuned on brand audio identity)
```

**Generation Workflow:**
```python
def generate_show_soundtrack(show_config):
    # Phase 1: Generate base tracks per act
    acts = []
    for act in show_config.structure:
        track = ai_generate(
            duration=act.duration,
            bpm=show_config.tempo,
            mood=show_config.targetMood,
            genre=show_config.preferredGenres,
            instrumentation=show_config.instrumentation
        )
        acts.append(track)
    
    # Phase 2: Create transitions
    transitions = []
    for i in range(len(acts) - 1):
        transition = ai_generate_transition(
            from_track=acts[i],
            to_track=acts[i+1],
            duration=5  # seconds
        )
        transitions.append(transition)
    
    # Phase 3: Generate cue points
    cues = generate_cue_tracks(show_config.cuePoints)
    
    # Phase 4: Master and normalize
    final = master_soundtrack(acts, transitions, cues)
    
    # Phase 5: Export formats
    exports = {
        'stereo': export_stereo(final),
        'spatial': export_spatial_audio(final),
        'stems': export_stems(final),
        'loopable': export_loopable_sections(final)
    }
    
    return exports
```

---

## Soundtrack Structure

### Standard Show Format (12 minutes)

```
00:00 - 00:30  PRE-SHOW AMBIENCE
                 - Venue atmosphere
                 - Audience murmur
                 - Anticipation building
                 - Volume: 40%

00:30 - 01:00  OPENING THEME
                 - Brand signature sound
                 - Theme establishment
                 - First model entrance cue
                 - Volume: 70% → 85%

01:00 - 04:00  ACT I: FOUNDATION
                 - Casual/Daywear looks
                 - Tempo: 100-110 BPM
                 - Mood: Light, approachable
                 - Volume: 85%

04:00 - 04:15  TRANSITION I
                 - Musical bridge
                 - Lighting change sync
                 - Anticipation build
                 - Volume: 60% → 80%

04:15 - 08:15  ACT II: STATEMENT
                 - Evening/Special pieces
                 - Tempo: 110-120 BPM
                 - Mood: Dramatic, confident
                 - Volume: 90%

08:15 - 08:30  TRANSITION II
                 - Moment of silence/ambient
                 - Finale preparation
                 - Volume: 30% → 70%

08:30 - 11:00  ACT III: HERO COLLECTION
                 - Signature pieces
                 - Tempo: 100-115 BPM
                 - Mood: Emotional, powerful
                 - Volume: 95%

11:00 - 12:00  FINALE
                 - All models return
                 - Theme reprise
                 - Climactic moment
                 - Designer walk (if applicable)
                 - Volume: 100% → fade

12:00+         POST-SHOW
                 - Shopping music (extended mix)
                 - Lower energy, loopable
                 - Volume: 60%
```

---

## Mood Matching System

### Garment-to-Music Mapping

**Automatic Mood Detection:**
```json
{
  "garmentAnalysis": {
    "US-SS26-001": {
      "style": "Ethereal Blazer",
      "detectedMood": ["sophisticated", "dreamy", "empowering"],
      "colorPalette": ["ivory", "blush", "soft gold"],
      "fabric": "flowing, lightweight",
      "suggestedMusic": {
        "tempo": 105,
        "key": "D major",
        "instrumentation": ["strings", "piano", "soft synth pad"],
        "energy": 0.6
      }
    },
    "US-SS26-008": {
      "style": "Power Suit",
      "detectedMood": ["confident", "bold", "commanding"],
      "colorPalette": ["midnight", "charcoal", "silver"],
      "fabric": "structured, tailored",
      "suggestedMusic": {
        "tempo": 118,
        "key": "E minor",
        "instrumentation": ["bass", "drums", "brass hits"],
        "energy": 0.85
      }
    }
  }
}
```

### Dynamic Music Adaptation

**Real-Time Adjustment:**
```javascript
class AdaptiveSoundtrack {
  constructor(soundtrack, garmentQueue) {
    this.soundtrack = soundtrack;
    this.garmentQueue = garmentQueue;
    this.currentMood = null;
    this.transitionTime = 3.0; // seconds
  }
  
  onGarmentChange(newGarment) {
    const targetMood = newGarment.suggestedMusic;
    
    if (this.currentMood !== targetMood) {
      // Smooth transition to new mood
      this.morphToMood(targetMood);
      this.currentMood = targetMood;
    }
  }
  
  morphToMood(targetMood) {
    // Gradually adjust parameters
    this.soundtrack.tempo.rampTo(targetMood.tempo, this.transitionTime);
    this.soundtrack.energy.rampTo(targetMood.energy, this.transitionTime);
    this.soundtrack.instrumentation.crossfade(
      targetMood.instrumentation,
      this.transitionTime
    );
  }
}
```

---

## Audio Layers Specification

### Layer 1: Main Soundtrack

**Format Requirements:**
```
Sample Rate: 48 kHz
Bit Depth: 24-bit
Format: WAV (master), AAC 256kbps (streaming)
Channels: Stereo (2.0) or Spatial (5.1/Atmos)
Loudness: -14 LUFS (streaming standard)
True Peak: -1.0 dBTP max
```

**Stem Exports:**
```
STEM_01_Drums.wav
STEM_02_Bass.wav
STEM_03_Harmony.wav
STEM_04_Melody.wav
STEM_05_FX.wav
STEM_06_Ambience.wav
```

---

### Layer 2: Cue Points

**Cue Types:**
```json
{
  "cues": [
    {
      "id": "MODEL_ENTRANCE",
      "type": "stinger",
      "duration": 2.0,
      "trigger": "model_enters_runway",
      "audio": "cue_entrance_01.wav",
      "volume": 0.8,
      "ducking": {
        "mainMusic": -6,
        "duration": 3.0
      }
    },
    {
      "id": "POSEMoment",
      "type": "hit",
      "duration": 1.0,
      "trigger": "model_strikes_pose",
      "audio": "cue_pose_hit_01.wav",
      "volume": 0.7,
      "ducking": {
        "mainMusic": -3,
        "duration": 2.0
      }
    },
    {
      "id": "TRANSITION",
      "type": "sweep",
      "duration": 4.0,
      "trigger": "act_transition",
      "audio": "cue_transition_build_01.wav",
      "volume": 0.9,
      "ducking": {
        "mainMusic": -12,
        "duration": 5.0
      }
    },
    {
      "id": "HERO_REVEAL",
      "type": "climax",
      "duration": 5.0,
      "trigger": "hero_piece_enter",
      "audio": "cue_hero_climax_01.wav",
      "volume": 1.0,
      "ducking": {
        "mainMusic": -20,
        "duration": 6.0
      }
    }
  ]
}
```

---

### Layer 3: Ambience

**Venue Atmosphere:**
```json
{
  "ambienceLayers": [
    {
      "name": "Room Tone",
      "file": "ambience_gallery_space.wav",
      "volume": 0.3,
      "loop": true,
      "spatial": false
    },
    {
      "name": "Audience Murmur",
      "file": "ambience_crowd_low.wav",
      "volume": 0.25,
      "loop": true,
      "spatial": true,
      "position": "audience_area"
    },
    {
      "name": "Fabric Rustle",
      "file": "sfx_fabric_movement.wav",
      "volume": 0.15,
      "trigger": "model_walk",
      "spatial": true,
      "position": "follow_model"
    },
    {
      "name": "Footsteps",
      "file": "sfx_heels_runway.wav",
      "volume": 0.4,
      "trigger": "model_walk",
      "spatial": true,
      "position": "follow_model"
    }
  ]
}
```

---

### Layer 4: Voiceover (Optional)

**Voiceover Types:**
```
1. DESIGNER COMMENTARY
   - Pre-recorded track
   - Designer discusses inspiration
   - Triggered per look or per act
   - Volume: Music ducks to -18 LUFS

2. NARRATOR GUIDE
   - Professional voice actor
   - Context and storytelling
   - Accessibility feature
   - Volume: Music ducks to -16 LUFS

3. MODEL INTRODUCTIONS
   - Name and details per model
   - Optional toggle
   - Volume: Music ducks to -14 LUFS
```

**Voiceover Script Template:**
```
[PRE-SHOW]
"Welcome to The Unicorn Stable Spring/Summer 2026 collection.
Tonight's show, 'Renewal & Radiance,' celebrates the beauty of
new beginnings..."

[LOOK 01]
"Opening look: The Ethereal Blazer. Crafted from organic cotton
blend, inspired by dawn light on misty fields..."

[ACT TRANSITION]
"As we move into our evening collection, notice the shift in
silhouette—bolder, more dramatic..."

[FINALE]
"Thank you for joining us. The full collection is now available
for preview. Visit our shopping experience to explore each piece..."
```

---

### Layer 5: Sound Effects

**SFX Library:**
```
FOOTSTEPS:
  - heels_hard_runway.wav
  - heels_soft_runway.wav
  - boots_runway.wav
  - flats_runway.wav

FABRIC:
  - silk_swish.wav
  - wool_movement.wav
  - leather_creak.wav
  - tulle_rustle.wav

AUDIENCE:
  - applause_light.wav
  - applause_heavy.wav
  - cheers_excited.wav
  - camera_shutters.wav

TRANSITIONS:
  - whoosh_transition.wav
  - light_beam_swoosh.wav
  - curtain_open.wav
  - spotlight_click.wav

UI_INTERACTIONS:
  - click_soft.wav
  - hover_subtle.wav
  - purchase_success.wav
  - notification_gentle.wav
```

---

## Spatial Audio (VR/AR)

### 3D Audio Positioning

**Object-Based Audio:**
```json
{
  "spatialObjects": [
    {
      "id": "model_footsteps",
      "source": "sfx_heels_runway.wav",
      "position": "track_model_position",
      "movementInterpolation": true,
      "distanceModel": "inverse",
      "refDistance": 1.0,
      "maxDistance": 20.0,
      "rolloffFactor": 1.0
    },
    {
      "id": "audience_left",
      "source": "ambience_crowd_left.wav",
      "position": { "x": -10, "y": 0, "z": 5 },
      "coneInnerAngle": 360,
      "coneOuterAngle": 360
    },
    {
      "id": "audience_right",
      "source": "ambience_crowd_right.wav",
      "position": { "x": 10, "y": 0, "z": 5 },
      "coneInnerAngle": 360,
      "coneOuterAngle": 360
    },
    {
      "id": "music_master",
      "source": "soundtrack_master.wav",
      "position": { "x": 0, "y": 5, "z": -10 },
      "spatialBlend": 0.3,
      "dopplerLevel": 0.0
    }
  ]
}
```

### Dolby Atmos / Spatial Formats

**Deliverables:**
```
Format 1: Stereo (2.0)
  - All platforms
  - Default fallback

Format 2: 5.1 Surround
  - Premium web experience
  - Smart TV apps

Format 3: Dolby Atmos
  - VR experiences
  - Cinema screenings
  - High-end home theater

Format 4: Binaural
  - Headphone listeners
  - Mobile VR
  - 360° video
```

---

## Platform Optimization

### Audio Format Matrix

| Platform | Format | Bitrate | Channels | Notes |
|----------|--------|---------|----------|-------|
| Web (Desktop) | AAC | 256 kbps | 2.0 | HTML5 Audio |
| Web (Mobile) | AAC | 128 kbps | 2.0 | Data-conscious |
| YouTube | AAC | 384 kbps | 2.0/5.1 | Platform default |
| VR (Quest) | Vorbis | 256 kbps | Binaural | Unity/Unreal |
| VR (PC) | FLAC | Lossless | Atmos | High fidelity |
| Broadcast | WAV | 24-bit/48k | 5.1 | Professional |

### Adaptive Streaming

**HLS Audio Tracks:**
```m3u8
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio-low",NAME="Low",BANDWIDTH=96000,URI="audio_low.m3u8"
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio-med",NAME="Medium",BANDWIDTH=128000,URI="audio_med.m3u8"
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio-high",NAME="High",BANDWIDTH=256000,URI="audio_high.m3u8"
```

---

## Music Licensing

### Licensing Framework

**AI-Generated Music Rights:**
```
✅ Commercial Use: Included (platform-dependent)
✅ Broadcast Rights: Verify per platform
✅ Sync Rights: Usually included
✅ Performance Rights: May require PRO registration
❌ Exclusive Rights: Not available (AI-generated)
```

**Recommended Approach:**
1. Use commercial AI music platform (Soundraw, etc.)
2. Purchase unlimited license for brand
3. Register with PRO if needed (ASCAP, BMI, etc.)
4. Keep generation logs for rights verification

**Alternative: Original Composition**
```
Commission original score from composer
Budget: $5,000 - $25,000 (depending on complexity)
Timeline: 2-4 weeks
Rights: Full ownership negotiable
```

---

## Audio Implementation

### Web Audio API Integration

```javascript
class FashionShowAudio {
  constructor() {
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.connect(this.ctx.destination);
    
    this.layers = {
      music: null,
      cues: null,
      ambience: null,
      voiceover: null,
      sfx: null
    };
    
    this.loadSoundscape();
  }
  
  async loadSoundscape() {
    // Load main soundtrack
    this.layers.music = await this.loadBuffer('soundtrack_master.wav');
    
    // Load cue sounds
    this.layers.cues = await this.loadCueLibrary();
    
    // Load ambience loops
    this.layers.ambience = await this.loadAmbienceLayers();
    
    // Load SFX
    this.layers.sfx = await this.loadSFXLibrary();
  }
  
  playCue(cueId) {
    const cue = this.layers.cues[cueId];
    if (cue) {
      const source = this.ctx.createBufferSource();
      source.buffer = cue.buffer;
      
      // Duck main music
      this.layers.music.gain.rampToValueAtTime(
        this.layers.music.gain.value - cue.ducking,
        this.ctx.currentTime,
        cue.duckDuration
      );
      
      source.connect(this.masterGain);
      source.start();
    }
  }
  
  setMood(moodProfile) {
    // Crossfade to new mood
    // Adjust EQ, tempo, energy
  }
}
```

---

**Next:** Review `../interactive/feature-list.md` for viewer interaction specs.
