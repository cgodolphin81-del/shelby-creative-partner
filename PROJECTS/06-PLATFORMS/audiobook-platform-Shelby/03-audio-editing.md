# 3. Audio Editing System

## Overview

The Audio Editing System provides professional-grade tools for refining AI-generated narration. Authors and producers can adjust pacing, emphasis, emotion, and audio quality without requiring technical expertise.

---

## Editor Interface

### Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│  NARRATEAI AUDIO EDITOR                                    [Save] [✓] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  WAVEFORM DISPLAY (Full Chapter)                                 │ │
│  │  ═══════════════════════════════════════════════════════════════ │ │
│  │  ▂▂▁▂▃▂▂▁▁▂▃▂▂▂▁▃▂▂▁▂▃▂▂▂▁▂▃▂▂▁▂▂▃▂▂▁▂▃▂▂▂▁▂▃▂▂▁▂▂▃▂▂▁▂▃▂▂▂▁▂▃▂ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  0:00          2:30          5:00          7:30         10:00     │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  ZOOMED VIEW (Selected Region)                                   │ │
│  │  ═══════════════════════════════════════════════════════════════ │ │
│  │  ▂▂▁▂▃▂▂▁▁▂▃▂▂▂▁▃▂▂▁▂▃▂▂▂▁▂▃▂▂▁▂▂▃▂▂▁▂▃▂▂▂▁▂▃▂▂▁▂▂▃▂▂▁▂▃▂▂▂▁▂▃▂ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │  [◀◀] [◀] [▶] [▶▶]  [Trim] [Split] [Delete] [Undo] [Redo]         │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐    │
│  │   PACING         │  │   EMPHASIS       │  │   EMOTION        │    │
│  │   ────────       │  │   ────────       │  │   ────────       │    │
│  │   Slow ● Fast    │  │   None ● Strong  │  │   Neutral ● Varied│   │
│  │   [1.0x]         │  │   [Moderate]     │  │   [Add Markers]  │    │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  TEXT TRANSCRIPT (Synced with Audio)                             │ │
│  │  ─────────────────────────────────────────────────────────────   │ │
│  │  "The morning sun cast long shadows across the empty street."    │ │
│  │   ^^^^^^^^ [Click to adjust pronunciation]                       │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Pacing Controls

### Global Pacing

Adjust the overall narration speed for the entire chapter or book:

```typescript
interface GlobalPacing {
  rate: number;           // 0.5x to 2.0x (default: 1.0)
  preservePitch: boolean; // Maintain original pitch when changing speed
  applyTo: 'chapter' | 'book' | 'selected';
}
```

**Pacing Presets:**
| Preset | Rate | Use Case |
|--------|------|----------|
| Very Slow | 0.75x | Complex technical content, poetry |
| Slow | 0.85x | Dense narrative, literary fiction |
| Normal | 1.0x | Standard narration (150 wpm) |
| Fast | 1.15x | Light fiction, faster pacing |
| Very Fast | 1.25x | Action sequences, thrillers |

### Section-Based Pacing

Apply different pacing to specific sections:

```typescript
interface SectionPacing {
  sectionId: string;
  startTime: number;    // Seconds from chapter start
  endTime: number;
  rate: number;
  transition: 'instant' | 'fade-in' | 'fade-out' | 'crossfade';
  transitionDuration: number; // milliseconds
}
```

**Use Cases:**
- **Flashbacks**: Slower pace for dreamlike quality
- **Action scenes**: Faster pace for urgency
- **Dialogue**: Natural conversational speed
- **Descriptions**: Measured pace for imagery

### Auto-Pacing Detection

The system can automatically suggest pacing adjustments:

```javascript
// Content analysis for pacing recommendations
const pacingRules = [
  {
    pattern: /[,;:]\s+/g,
    suggestion: 'slight_pause',
    duration: 200  // ms
  },
  {
    pattern: /[.!?]\s+/g,
    suggestion: 'full_pause',
    duration: 500  // ms
  },
  {
    pattern: /\n\s*\n/,
    suggestion: 'paragraph_pause',
    duration: 800  // ms
  },
  {
    pattern: /###|CHAPTER|Part/gi,
    suggestion: 'section_pause',
    duration: 1500  // ms
  },
  {
    pattern: /\w+-\w+|\[.*?\]|\(.*?\)/g,
    suggestion: 'parenthetical_pace',
    rate: 0.9  // Slightly slower
  }
];
```

---

## Emphasis Controls

### Word-Level Emphasis

Select individual words to emphasize:

```typescript
interface WordEmphasis {
  wordIndex: number;
  emphasisLevel: 'none' | 'moderate' | 'strong' | 'maximum';
  emphasisType: 'volume' | 'pitch' | 'duration' | 'combined';
  customSettings?: {
    volumeBoost?: number;    // dB (-10 to +10)
    pitchShift?: number;     // semitones (-12 to +12)
    durationStretch?: number; // 0.5x to 2.0x
  };
}
```

**Visual Indicators:**
- 🟡 Yellow highlight = Moderate emphasis
- 🟠 Orange highlight = Strong emphasis
- 🔴 Red highlight = Maximum emphasis

### Phrase Emphasis

Apply emphasis to entire phrases:

```typescript
interface PhraseEmphasis {
  startWordIndex: number;
  endWordIndex: number;
  emphasisStyle: 'dramatic' | 'subtle' | 'whisper' | 'shout' | 'sarcastic';
  intensity: number;  // 0-100
}
```

### Emphasis Presets

| Preset | Description | Settings |
|--------|-------------|----------|
| **Dramatic** | Strong emphasis for key moments | +4dB, +2 semitones, 1.2x duration |
| **Subtle** | Light emphasis for important words | +2dB, +1 semitone, 1.1x duration |
| **Whisper** | Quiet, intimate delivery | -6dB, -1 semitone, 0.9x duration |
| **Shout** | Loud, intense delivery | +8dB, +3 semitones, 1.3x duration |
| **Sarcastic** | Ironic, exaggerated emphasis | Variable pitch, elongated vowels |

---

## Emotion Controls

### Emotion Markers

Add emotion markers to specific passages:

```typescript
interface EmotionMarker {
  id: string;
  startTime: number;    // Seconds
  endTime: number;
  emotion: EmotionType;
  intensity: number;    // 0-100
  blendWithPrevious: boolean;
  blendWithNext: boolean;
}

enum EmotionType {
  NEUTRAL = 'neutral',
  HAPPY = 'happy',
  SAD = 'sad',
  ANGRY = 'angry',
  FEARFUL = 'fearful',
  SURPRISED = 'surprised',
  DISGUSTED = 'disgusted',
  EXCITED = 'excited',
  ROMANTIC = 'romantic',
  SUSPENSEFUL = 'suspenseful',
  COMEDIC = 'comedic',
  MYSTERIOUS = 'mysterious',
  CONFIDENT = 'confident',
  UNCERTAIN = 'uncertain'
}
```

### Emotion Timeline

Visual timeline showing emotion changes throughout the chapter:

```
Emotion Timeline: Chapter 3
═══════════════════════════════════════════════════════════════════

Neutral    ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Happy      ░░░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Sad        ░░░░░░░░░░░░░░░░░░░░░░░░░░████████████░░░░░░░░░░░░░░░░
Suspense   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████
           0:00              3:00              6:00              9:00
```

### Emotion Blending

Smooth transitions between emotions:

```typescript
interface EmotionBlend {
  fromEmotion: EmotionType;
  toEmotion: EmotionType;
  transitionDuration: number;  // milliseconds
  transitionCurve: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}
```

### Auto-Emotion Detection

AI suggests emotions based on text analysis:

```javascript
const emotionKeywords = {
  happy: ['smiled', 'laughed', 'joy', 'delighted', 'cheerful'],
  sad: ['cried', 'tears', 'sorrow', 'grief', 'mournful'],
  angry: ['shouted', 'furious', 'rage', 'fumed', 'livid'],
  fearful: ['trembled', 'terrified', 'panic', 'dread', 'horror'],
  romantic: ['kissed', 'embraced', 'longed', 'desire', 'passion'],
  suspenseful: ['suddenly', 'unknown', 'shadow', 'crept', 'silence']
};

function detectEmotion(text: string): EmotionSuggestion {
  // Analyze keywords, sentence structure, punctuation
  // Return emotion + confidence score
}
```

---

## Audio Editing Tools

### Basic Editing

| Tool | Function | Keyboard Shortcut |
|------|----------|-------------------|
| **Trim** | Remove start/end of selection | T |
| **Split** | Cut audio at cursor position | S |
| **Delete** | Remove selected region | Delete/Backspace |
| **Duplicate** | Copy selected region | Ctrl/Cmd + D |
| **Undo** | Revert last action | Ctrl/Cmd + Z |
| **Redo** | Reapply undone action | Ctrl/Cmd + Y |

### Advanced Editing

#### Silence Removal

Automatically detect and remove unwanted silences:

```typescript
interface SilenceRemoval {
  threshold: number;     // dB (default: -40)
  minimumDuration: number; // milliseconds (default: 500)
  keepBuffer: number;    // milliseconds to keep (default: 100)
  action: 'remove' | 'reduce' | 'mark';
}
```

#### Noise Reduction

Clean up background noise:

```typescript
interface NoiseReduction {
  enabled: boolean;
  profile: 'light' | 'medium' | 'strong' | 'custom';
  customSettings?: {
    reductionAmount: number;    // 0-100
    frequencyRange: [number, number]; // Hz
    preserveTransients: boolean;
  };
}
```

#### EQ (Equalization)

Adjust frequency balance:

```typescript
interface EQSettings {
  enabled: boolean;
  preset?: 'warm' | 'bright' | 'balanced' | 'radio' | 'custom';
  bands: Array<{
    frequency: number;  // Hz
    gain: number;       // dB (-15 to +15)
    q: number;          // Bandwidth
  }>;
}
```

**EQ Presets:**
| Preset | Description | Best For |
|--------|-------------|----------|
| Warm | Boost lows, smooth highs | Intimate narration |
| Bright | Boost highs, clear | Non-fiction, instructional |
| Balanced | Flat response | General purpose |
| Radio | Compressed, present | Promotional content |

#### Compression

Control dynamic range:

```typescript
interface CompressionSettings {
  threshold: number;    // dB (-60 to 0)
  ratio: number;        // 1:1 to 20:1
  attack: number;       // ms
  release: number;      // ms
  makeup: number;       // dB gain
}
```

#### Normalization

Ensure consistent volume levels:

```typescript
interface NormalizationSettings {
  targetLevel: number;  // dBFS (default: -16 for audiobooks)
  method: 'peak' | 'loudness';
  loudnessStandard?: 'EBU R128' | 'ATSC A/85' | 'ReplayGain';
}
```

---

## Pronunciation Editor

### Custom Pronunciation

Fix mispronounced words:

```typescript
interface PronunciationFix {
  word: string;
  startTime: number;
  endTime: number;
  correction: {
    method: 'respell' | 'phonetic' | 'audio-replace';
    respelling?: string;      // "kuh-THOOL-hoo"
    phonetic?: string;        // IPA: "kəˈθuːlhuː"
    audioReplacement?: string; // URL to uploaded audio
  };
  applyGlobally: boolean;  // Apply to all instances
}
```

### Pronunciation Dictionary

Manage custom pronunciations per project:

```typescript
interface PronunciationDictionary {
  projectId: string;
  rules: Array<{
    word: string;
    phonetic: string;
    context?: string;  // "always" or specific context
    addedBy: string;
    createdAt: Date;
  }>;
  importedFrom?: string;  // Previous project
}
```

### Audio Replacement

For problematic words, replace with recorded audio:

```http
POST /api/v1/projects/:id/pronunciation/replace

Request (multipart):
- word: string
- audio: File (WAV/MP3)
- applyGlobally: boolean

Response:
{
  "replacementId": "rep_abc123",
  "insertedAt": 245.6,  // Seconds into chapter
  "duration": 0.8       // Seconds
}
```

---

## Chapter Assembly

### Reordering Chapters

Drag-and-drop interface for chapter sequence:

```typescript
interface ChapterOrder {
  projectId: string;
  chapters: Array<{
    chapterId: string;
    originalOrder: number;
    newOrder: number;
    transition?: {
      type: 'hard' | 'fade' | 'crossfade';
      duration: number;  // ms
    };
  }>;
}
```

### Chapter Transitions

Configure how chapters flow into each other:

| Transition Type | Description | Duration |
|-----------------|-------------|----------|
| **Hard Cut** | Immediate transition | 0ms |
| **Short Pause** | Brief silence | 500ms |
| **Medium Pause** | Standard break | 1000ms |
| **Long Pause** | Extended break | 2000ms |
| **Fade Out/In** | Smooth audio fade | 500-1000ms |
| **Crossfade** | Overlapping transition | 300-500ms |
| **Music Bed** | Background music transition | Custom |

### Front/Back Matter

Handle non-story content:

```typescript
interface FrontMatter {
  include: boolean;
  sections: Array<{
    type: 'copyright' | 'dedication' | 'contents' | 'acknowledgments' | 'preface' | 'prologue';
    voiceId?: string;  // Different voice for front matter
    pacing?: number;
  }>;
}

interface BackMatter {
  include: boolean;
  sections: Array<{
    type: 'epilogue' | 'afterword' | 'about-author' | 'also-by' | 'preview' | 'credits';
    voiceId?: string;
    pacing?: number;
  }>;
}
```

---

## Audio Quality Controls

### Output Format Options

| Format | Bit Rate | Sample Rate | Use Case |
|--------|----------|-------------|----------|
| **WAV** | 16-bit/24-bit | 44.1kHz/48kHz | Master archive |
| **FLAC** | Lossless | 44.1kHz/48kHz | Archive, audiophile |
| **MP3** | 320 kbps | 44.1kHz | Distribution (Audible) |
| **MP3** | 192 kbps | 44.1kHz | Distribution (smaller) |
| **AAC** | 256 kbps | 44.1kHz | iTunes/Apple |
| **OGG** | 192 kbps | 44.1kHz | Spotify |

### Loudness Standards

Compliance with platform requirements:

```typescript
interface LoudnessCompliance {
  standard: 'ACX' | 'Audible' | 'iTunes' | 'Spotify' | 'Custom';
  targetLUFS: number;     // -16 to -24 (Audible: -18 to -22)
  truePeakMax: number;    // dBTP (Audible: -3.0)
  noiseFloor: number;     // dB (Audible: -60)
  reportCompliance: boolean;
}
```

**Platform Requirements:**

| Platform | LUFS | True Peak | Noise Floor | Format |
|----------|------|-----------|-------------|--------|
| Audible/ACX | -18 to -22 | ≤ -3.0 dBTP | ≤ -60 dB | MP3 192+ |
| iTunes | -16 | ≤ -1.0 dBTP | ≤ -60 dB | AAC/MP3 |
| Spotify | -16 to -14 | ≤ -1.0 dBTP | ≤ -60 dB | OGG |
| Findaway | -18 to -22 | ≤ -3.0 dBTP | ≤ -60 dB | MP3 192+ |

### Quality Analysis

Automated quality check before export:

```typescript
interface QualityReport {
  overallScore: number;  // 0-100
  checks: Array<{
    name: string;
    passed: boolean;
    value: number | string;
    expected: string;
    severity: 'error' | 'warning' | 'info';
  }>;
  recommendations: string[];
}
```

**Quality Checks:**
- ✅ Loudness compliance
- ✅ Peak level compliance
- ✅ Noise floor compliance
- ✅ Clipping detection
- ✅ DC offset check
- ✅ Sample rate consistency
- ✅ Channel configuration (mono/stereo)
- ✅ Metadata completeness

---

## Collaboration Features

### Comments & Annotations

Add time-stamped notes:

```typescript
interface Annotation {
  id: string;
  timestamp: number;  // Seconds
  type: 'comment' | 'fix-requested' | 'approved' | 'question';
  content: string;
  author: string;
  createdAt: Date;
  resolved: boolean;
  replies: Annotation[];
}
```

### Version History

Track all changes:

```typescript
interface Version {
  id: string;
  chapterId: string;
  versionNumber: number;
  changes: Array<{
    type: 'pacing' | 'emphasis' | 'emotion' | 'edit' | 'export';
    description: string;
    timestamp: Date;
    author: string;
  }>;
  downloadable: boolean;
}
```

### Sharing & Review

```http
POST /api/v1/projects/:id/share

Request:
{
  "email": "reviewer@example.com",
  "permission": 'view' | 'comment' | 'edit',
  "expiresAt": "2026-04-22T14:31:00Z",
  "message": "Please review Chapter 3"
}

Response:
{
  "shareId": "shr_xyz789",
  "reviewUrl": "https://narrateai.com/review/shr_xyz789",
  "expiresAt": "2026-04-22T14:31:00Z"
}
```

---

## API Endpoints

### Get Chapter Audio

```http
GET /api/v1/projects/:projectId/chapters/:chapterId/audio

Response: Audio stream (WAV/MP3)
```

### Apply Edit

```http
POST /api/v1/projects/:projectId/chapters/:chapterId/edit

Request:
{
  "editType": "pacing" | "emphasis" | "emotion" | "trim" | "replace",
  "parameters": { ... },  // Type-specific
  "region": {
    "startTime": 0.0,
    "endTime": 45.5
  }
}

Response:
{
  "editId": "edit_abc123",
  "status": "processing" | "complete",
  "previewUrl": "https://cdn.narrateai.com/previews/edit_abc123.mp3"
}
```

### Export Chapter

```http
POST /api/v1/projects/:projectId/chapters/:chapterId/export

Request:
{
  "format": "mp3" | "wav" | "flac" | "aac",
  "quality": "standard" | "high" | "studio",
  "includeMetadata": true,
  "loudnessStandard": "ACX"
}

Response:
{
  "exportId": "exp_abc123",
  "status": "processing",
  "estimatedCompletion": "2026-03-22T14:35:00Z",
  "downloadUrl": "https://cdn.narrateai.com/exports/exp_abc123.mp3"
}
```

---

## Keyboard Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Play/Pause | Space | Space |
| Rewind 5s | ← | ← |
| Fast Forward 5s | → | → |
| Rewind 1s | Shift + ← | Shift + ← |
| Fast Forward 1s | Shift + → | Shift + → |
| Zoom In | Ctrl + + | Cmd + + |
| Zoom Out | Ctrl + - | Cmd + - |
| Split | S | S |
| Trim | T | T |
| Delete | Delete | Delete |
| Undo | Ctrl + Z | Cmd + Z |
| Redo | Ctrl + Y | Cmd + Shift + Z |
| Save | Ctrl + S | Cmd + S |
| Export | Ctrl + E | Cmd + E |

---

## Performance Metrics

| Metric | Target |
|--------|--------|
| Editor Load Time | <2 seconds |
| Audio Playback Latency | <100ms |
| Edit Apply Time | <3 seconds |
| Export Speed | 10x real-time |
| Auto-save Interval | 30 seconds |
| Version Retention | 50 versions/chapter |

---

*Version: 1.0.0 | Last Updated: March 2026*
