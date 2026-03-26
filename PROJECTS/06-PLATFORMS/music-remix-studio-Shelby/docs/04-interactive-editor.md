# 🎚️ Interactive Editor Specification

## Overview

The Interactive Editor provides real-time control over remixed audio, allowing users to fine-tune tempo, key, arrangement, and individual stem levels. It features an intuitive DAW-like interface optimized for web browsers.

---

## 1. Editor Architecture

### 1.1 System Design

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERACTIVE EDITOR                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    TIMELINE VIEW                            │ │
│  │  ┌──────────────────────────────────────────────────────┐  │ │
│  │  │  [Vocals] ████████████████████████████████████████   │  │ │
│  │  │  [Drums]  ████████████████████████████████████████   │  │ │
│  │  │  [Bass]   ████████████████████████████████████████   │  │ │
│  │  │  [Other]  ████████████████████████████████████████   │  │ │
│  │  └──────────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   TEMPO      │  │     KEY      │  │    ARRANGEMENT       │  │
│  │   Control    │  │   Control    │  │      Editor          │  │
│  │   80-200 BPM │  │   ±12 semi   │  │  Structure, Sections │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                   STEM MIXER                               │ │
│  │  [Vocals] ━━━━━━━━━○━━━━━━━  [M] [S] [FX]                 │ │
│  │  [Drums]  ━━━━━━━━━━━━○━━━━━  [M] [S] [FX]                 │ │
│  │  [Bass]   ━━━━━━━━━━○━━━━━━━━  [M] [S] [FX]                 │ │
│  │  [Other]  ━━━━━━━━━━━━━○━━━━━  [M] [S] [FX]                 │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │     EQ       │  │  COMPRESSION │  │      EFFECTS         │  │
│  │   (per stem) │  │  (per stem)  │  │  Reverb, Delay, etc  │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

```typescript
interface EditorTechStack {
  // Audio Engine
  audioEngine: 'Web Audio API' | 'Tone.js' | 'Howler.js';
  
  // Waveform Visualization
  waveform: 'Wavesurfer.js' | 'Peaks.js' | 'Custom Canvas';
  
  // UI Framework
  ui: 'React' | 'Vue' | 'Svelte';
  
  // State Management
  state: 'Zustand' | 'Redux' | 'Jotai';
  
  // Real-time Collaboration
  collaboration: 'Yjs' | 'Automerge' | 'Liveblocks';
  
  // Performance
  worker: 'Web Worker' | 'Audio Worklet';
}
```

---

## 2. Timeline View

### 2.1 Waveform Display

```typescript
interface WaveformConfig {
  container: string;
  waveColor: string;
  progressColor: string;
  cursorColor: string;
  barWidth: number;
  barGap: number;
  barRadius: number;
  height: number;
  normalize: boolean;
  minHeight: number;
  pixelRatio: number;
}

// Multi-track waveform
interface MultiTrackWaveform {
  tracks: Array<{
    id: string;
    name: string;
    color: string;
    waveformUrl: string;
    peaks: number[];
    duration: number;
    offset: number;
  }>;
  zoom: number;
  scrollPosition: number;
  playhead: number;
}
```

### 2.2 Zoom & Navigation

```typescript
interface ZoomControl {
  min: number;        // 10 (full view)
  max: number;        // 1000 (sample-level)
  current: number;
  presets: [
    { name: 'Fit', level: 10 },
    { name: 'Section', level: 50 },
    { name: 'Phrase', level: 100 },
    { name: 'Detail', level: 500 }
  ];
}

// Keyboard shortcuts
const navigationShortcuts = {
  'Space': 'togglePlay',
  'Home': 'goToStart',
  'End': 'goToEnd',
  'ArrowLeft': 'moveBack5s',
  'ArrowRight': 'moveForward5s',
  'Cmd+ArrowLeft': 'moveBack1s',
  'Cmd+ArrowRight': 'moveForward1s',
  'Cmd+/': 'toggleZoom',
  'Cmd+0': 'zoomToFit'
};
```

---

## 3. Tempo Control

### 3.1 Tempo Adjustment

```typescript
interface TempoControl {
  current: number;      // Current BPM
  original: number;     // Original BPM
  min: number;          // 80 BPM
  max: number;          // 200 BPM
  lock: boolean;        // Lock to grid
  
  // Time-stretching algorithm
  algorithm: 'phase-vocoder' | 'wsola' | 'elastique';
  
  // Quality settings
  quality: 'fast' | 'good' | 'high' | 'premium';
}

// Real-time tempo change
function changeTempo(bpm: number): void {
  // Using Web Audio API playbackRate
  const rate = bpm / originalBpm;
  audioSource.playbackRate.value = rate;
  
  // For better quality, use WSOLA or phase vocoder
  if (quality === 'high' || quality === 'premium') {
    useElastiqueStretch(audioBuffer, bpm);
  }
}
```

### 3.2 Tempo Detection & Display

```typescript
interface TempoDisplay {
  detected: number;
  confidence: number;
  tapTempo: () => number;
  grid: {
    enabled: boolean;
    subdivision: '1/4' | '1/8' | '1/16' | '1/32';
    snapToGrid: boolean;
  };
}
```

---

## 4. Key Control

### 4.1 Key Transposition

```typescript
interface KeyControl {
  current: KeyInfo;
  original: KeyInfo;
  semitones: number;    // -12 to +12
  
  // Musical key info
  key: string;          // C, C#, D, etc.
  mode: 'major' | 'minor';
}

interface KeyInfo {
  root: string;
  mode: 'major' | 'minor';
  notation: 'sharp' | 'flat';
}

// Pitch shifting
function transpose(semitones: number): void {
  // Using pitch shift algorithm
  const shifted = pitchShift(audioBuffer, semitones);
  
  // Preserve formants for vocals
  if (stemType === 'vocals') {
    useFormantPreservingShift(shifted, semitones);
  }
}
```

### 4.2 Key Detection

```typescript
interface KeyDetection {
  detected: KeyInfo;
  confidence: number;
  alternatives: Array<{
    key: KeyInfo;
    confidence: number;
  }>;
  
  // Camelot wheel for harmonic mixing
  camelotCode: string;  // e.g., "8A" for A minor
}

// Camelot wheel compatibility
function getCompatibleKeys(camelotCode: string): string[] {
  // Same key
  // ±1 hour on wheel
  // Relative major/minor
  
  return compatibleKeys;
}
```

---

## 5. Arrangement Editor

### 5.1 Structure Visualization

```typescript
interface ArrangementEditor {
  sections: Section[];
  structure: StructurePreset | CustomStructure;
}

interface Section {
  id: string;
  label: SectionLabel;
  start: number;        // seconds
  duration: number;     // seconds
  bars: number;
  color: string;
  markers: Marker[];
}

type SectionLabel = 
  | 'intro'
  | 'verse'
  | 'pre-chorus'
  | 'chorus'
  | 'post-chorus'
  | 'bridge'
  | 'solo'
  | 'breakdown'
  | 'build'
  | 'drop'
  | 'outro';

interface Marker {
  id: string;
  type: 'beat' | 'bar' | 'custom';
  position: number;     // seconds
  label?: string;
}
```

### 5.2 Arrangement Operations

```typescript
interface ArrangementOperations {
  // Section manipulation
  duplicateSection: (sectionId: string) => void;
  deleteSection: (sectionId: string) => void;
  moveSection: (sectionId: string, newIndex: number) => void;
  resizeSection: (sectionId: string, newDuration: number) => void;
  
  // Structure presets
  applyPreset: (preset: StructurePreset) => void;
  saveAsPreset: (name: string) => void;
  
  // Looping
  setLoopRegion: (start: number, end: number) => void;
  toggleLoop: () => void;
}

// Common structure presets
const structurePresets = {
  'pop-standard': [
    { label: 'intro', bars: 4 },
    { label: 'verse', bars: 16 },
    { label: 'chorus', bars: 8 },
    { label: 'verse', bars: 16 },
    { label: 'chorus', bars: 8 },
    { label: 'bridge', bars: 8 },
    { label: 'chorus', bars: 8 },
    { label: 'outro', bars: 4 }
  ],
  'edm-standard': [
    { label: 'intro', bars: 16 },
    { label: 'build', bars: 16 },
    { label: 'drop', bars: 32 },
    { label: 'break', bars: 16 },
    { label: 'build', bars: 16 },
    { label: 'drop', bars: 32 },
    { label: 'outro', bars: 16 }
  ]
};
```

### 5.3 Drag-and-Drop Arrangement

```typescript
// React component for arrangement editor
const ArrangementEditor: React.FC = () => {
  const { sections, moveSection, resizeSection } = useEditorStore();
  
  return (
    <div className="arrangement-timeline">
      {sections.map((section, index) => (
        <DraggableSection
          key={section.id}
          section={section}
          onMove={(newIndex) => moveSection(section.id, newIndex)}
          onResize={(newDuration) => resizeSection(section.id, newDuration)}
          color={getSectionColor(section.label)}
        >
          <span className="section-label">{section.label}</span>
          <span className="section-bars">{section.bars} bars</span>
        </DraggableSection>
      ))}
    </div>
  );
};
```

---

## 6. Stem Mixer

### 6.1 Mixer Channels

```typescript
interface StemMixer {
  channels: Array<StemChannel>;
  master: MasterChannel;
}

interface StemChannel {
  id: string;
  name: string;
  icon: string;
  color: string;
  
  // Volume & Pan
  volume: number;       // -∞ to +6 dB
  pan: number;          // -1 (L) to +1 (R)
  mute: boolean;
  solo: boolean;
  
  // Processing
  eq: EQSettings;
  compression: CompressionSettings;
  effects: EffectChain;
  
  // Metering
  levelMeter: {
    peak: number;
    rms: number;
    gainReduction: number;
  };
}

interface MasterChannel {
  volume: number;
  limiter: LimiterSettings;
  metering: {
    peak: number;
    rms: number;
    loudness: number;   // LUFS
  };
}
```

### 6.2 Volume Automation

```typescript
interface VolumeAutomation {
  enabled: boolean;
  points: AutomationPoint[];
  curve: 'linear' | 'exponential' | 'bezier';
}

interface AutomationPoint {
  time: number;         // seconds
  value: number;        // 0-1
  curve?: string;
}

// Draw automation
function drawAutomation(
  canvas: HTMLCanvasElement,
  points: AutomationPoint[]
): void {
  const ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(points[0].time, points[0].value);
  
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    
    // Linear interpolation
    ctx.lineTo(curr.time, curr.value);
  }
  
  ctx.stroke();
}
```

---

## 7. Effects Processing

### 7.1 Built-in Effects

```typescript
interface EffectLibrary {
  // Dynamics
  compressor: Compressor;
  limiter: Limiter;
  gate: NoiseGate;
  expander: Expander;
  
  // EQ
  eq3Band: EQ3Band;
  eq8Band: EQ8Band;
  eqParametric: ParametricEQ;
  
  // Time-based
  reverb: Reverb;
  delay: Delay;
  chorus: Chorus;
  flanger: Flanger;
  phaser: Phaser;
  
  // Distortion
  distortion: Distortion;
  saturation: Saturation;
  bitcrusher: Bitcrusher;
  
  // Utility
  gain: Gain;
  pan: StereoPan;
  filter: Filter;
  pitchShift: PitchShift;
}
```

### 7.2 Effect Presets

```typescript
interface EffectPreset {
  id: string;
  name: string;
  category: string;
  effects: Array<{
    type: string;
    settings: Record<string, number>;
  }>;
  tags: string[];
}

const effectPresets: EffectPreset[] = [
  {
    id: 'vocal-pop',
    name: 'Pop Vocals',
    category: 'vocals',
    effects: [
      { type: 'eq', settings: { lowCut: 100, highShelf: 8000, highGain: 3 } },
      { type: 'compressor', settings: { ratio: 4, threshold: -20, attack: 10, release: 100 } },
      { type: 'deesser', settings: { frequency: 6000, threshold: -30 } },
      { type: 'reverb', settings: { room: 'medium', mix: 0.25 } },
      { type: 'delay', settings: { time: 0.25, feedback: 0.2, mix: 0.15 } }
    ],
    tags: ['vocals', 'pop', 'polished']
  },
  {
    id: 'drums-punchy',
    name: 'Punchy Drums',
    category: 'drums',
    effects: [
      { type: 'eq', settings: { lowBoost: 60, lowGain: 4, highBoost: 5000, highGain: 3 } },
      { type: 'compressor', settings: { ratio: 6, threshold: -15, attack: 5, release: 50 } },
      { type: 'transient-shaper', settings: { attack: 0.8, sustain: 0.5 } },
      { type: 'saturation', settings: { amount: 0.3, type: 'tape' } }
    ],
    tags: ['drums', 'punchy', 'aggressive']
  },
  {
    id: 'bass-sub',
    name: 'Sub Bass',
    category: 'bass',
    effects: [
      { type: 'eq', settings: { lowPass: 150, lowBoost: 50, lowGain: 6 } },
      { type: 'compressor', settings: { ratio: 4, threshold: -18 } },
      { type: 'saturation', settings: { amount: 0.2, type: 'tube' } }
    ],
    tags: ['bass', 'sub', 'electronic']
  }
];
```

### 7.3 Effect Chain Editor

```typescript
interface EffectChain {
  slots: Array<EffectSlot | null>;
  maxSlots: number;
}

interface EffectSlot {
  effect: EffectType;
  enabled: boolean;
  settings: Record<string, number>;
  order: number;
}

// Drag-and-drop effect chain
const EffectChainEditor: React.FC = () => {
  const { chain, moveEffect, addEffect, removeEffect } = useMixerStore();
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="effect-chain">
        {chain.slots.map((slot, index) => (
          <EffectSlotComponent
            key={index}
            slot={slot}
            onRemove={() => removeEffect(index)}
            onSettingsChange={(settings) => updateSettings(index, settings)}
          />
        ))}
        <AddEffectButton onSelect={(effect) => addEffect(effect)} />
      </div>
    </DndContext>
  );
};
```

---

## 8. Real-time Processing

### 8.1 Audio Worklet

```javascript
// audio-worklet-processor.js
class RemixProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.tempo = 1.0;
    this.semitones = 0;
    this.effects = [];
    
    this.port.onmessage = (event) => {
      const { type, data } = event.data;
      
      if (type === 'PARAM_CHANGE') {
        this.updateParameter(data.param, data.value);
      } else if (type === 'ADD_EFFECT') {
        this.effects.push(data.effect);
      }
    };
  }
  
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];
    
    // Process audio
    let processed = input;
    
    // Apply tempo change
    processed = this.applyTimeStretch(processed, this.tempo);
    
    // Apply pitch shift
    processed = this.applyPitchShift(processed, this.semitones);
    
    // Apply effects chain
    for (const effect of this.effects) {
      processed = effect.process(processed);
    }
    
    // Output
    for (let channel = 0; channel < output.length; channel++) {
      output[channel].set(processed[channel]);
    }
    
    return true;
  }
}

registerProcessor('remix-processor', RemixProcessor);
```

### 8.2 Parameter Automation

```typescript
interface ParameterAutomation {
  parameter: string;      // 'volume', 'pan', 'cutoff', etc.
  points: AutomationPoint[];
  interpolation: 'linear' | 'exponential' | 'hold';
}

// Real-time parameter updates
function updateParameter(
  nodeId: string,
  param: string,
  value: number,
  time?: number
): void {
  const node = audioNodes.get(nodeId);
  
  if (time !== undefined) {
    // Scheduled change
    node[param].setValueAtTime(node[param].value, audioContext.currentTime);
    node[param].linearRampToValueAtTime(value, time);
  } else {
    // Immediate change
    node[param].value = value;
  }
}
```

---

## 9. Editor UI Components

### 9.1 Main Editor Layout

```typescript
const EditorLayout: React.FC = () => {
  return (
    <div className="editor-container">
      {/* Top Bar */}
      <TopBar>
        <TransportControls />
        <TempoDisplay />
        <KeyDisplay />
        <ExportButton />
      </TopBar>
      
      {/* Main Content */}
      <div className="editor-content">
        {/* Left Sidebar */}
        <Sidebar>
          <StyleSelector />
          <EffectLibrary />
          <PresetBrowser />
        </Sidebar>
        
        {/* Center - Timeline */}
        <Timeline>
          <WaveformDisplay />
          <ArrangementView />
          <Playhead />
        </Timeline>
        
        {/* Right Sidebar */}
        <Sidebar right>
          <Inspector />
          <Properties />
        </Sidebar>
      </div>
      
      {/* Bottom - Mixer */}
      <Mixer>
        <StemChannels />
        <MasterChannel />
      </Mixer>
    </div>
  );
};
```

### 9.2 Transport Controls

```typescript
const TransportControls: React.FC = () => {
  const { isPlaying, position, duration } = useAudioStore();
  
  return (
    <div className="transport">
      <Button onClick={goToStart} title="Go to Start">
        <IconSkipStart />
      </Button>
      <Button onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? <IconPause /> : <IconPlay />}
      </Button>
      <Button onClick={stop} title="Stop">
        <IconStop />
      </Button>
      <Button onClick={toggleLoop} title="Loop">
        <IconLoop className={isLooping ? 'active' : ''} />
      </Button>
      
      <TimeDisplay
        current={formatTime(position)}
        total={formatTime(duration)}
      />
    </div>
  );
};
```

### 9.3 Inspector Panel

```typescript
const Inspector: React.FC = () => {
  const { selectedElement } = useEditorStore();
  
  if (!selectedElement) {
    return <EmptyState>Select an element to edit</EmptyState>;
  }
  
  switch (selectedElement.type) {
    case 'section':
      return <SectionInspector section={selectedElement} />;
    case 'stem':
      return <StemInspector stem={selectedElement} />;
    case 'effect':
      return <EffectInspector effect={selectedElement} />;
    default:
      return null;
  }
};
```

---

## 10. Keyboard Shortcuts

```typescript
const keyboardShortcuts = {
  // Transport
  'Space': { action: 'togglePlay', description: 'Play/Pause' },
  'Return': { action: 'playFromStart', description: 'Play from Start' },
  'Shift+Space': { action: 'playFromCursor', description: 'Play from Cursor' },
  
  // Navigation
  'Home': { action: 'goToStart', description: 'Go to Start' },
  'End': { action: 'goToEnd', description: 'Go to End' },
  'ArrowLeft': { action: 'moveBack5s', description: 'Move Back 5s' },
  'ArrowRight': { action: 'moveForward5s', description: 'Move Forward 5s' },
  
  // Editing
  'Cmd+Z': { action: 'undo', description: 'Undo' },
  'Cmd+Shift+Z': { action: 'redo', description: 'Redo' },
  'Cmd+S': { action: 'save', description: 'Save Project' },
  'Cmd+D': { action: 'duplicate', description: 'Duplicate Selection' },
  'Delete': { action: 'delete', description: 'Delete Selection' },
  
  // Zoom
  'Cmd+0': { action: 'zoomToFit', description: 'Zoom to Fit' },
  'Cmd+/': { action: 'toggleZoom', description: 'Toggle Zoom' },
  'MouseWheel': { action: 'zoom', description: 'Zoom In/Out' },
  
  // Mixer
  'M': { action: 'toggleMute', description: 'Mute Selected' },
  'S': { action: 'toggleSolo', description: 'Solo Selected' },
  '0-9': { action: 'selectChannel', description: 'Select Channel 0-9' },
  
  // Tools
  'T': { action: 'selectTool', description: 'Select Tool' },
  'C': { action: 'cutTool', description: 'Cut Tool' },
  'H': { action: 'handTool', description: 'Hand Tool' },
  'Z': { action: 'zoomTool', description: 'Zoom Tool' }
};
```

---

## 11. Performance Optimization

### 11.1 Audio Rendering

```typescript
interface RenderConfig {
  // Quality settings
  sampleRate: 44100 | 48000 | 96000;
  bitDepth: 16 | 24 | 32;
  
  // Processing quality
  timeStretchQuality: 'fast' | 'good' | 'high' | 'premium';
  pitchShiftQuality: 'fast' | 'good' | 'high';
  
  // Buffering
  bufferSize: number;     // 256, 512, 1024, 2048
  prebuffer: number;      // seconds
}

// Offline rendering for export
async function renderOffline(config: RenderConfig): Promise<AudioBuffer> {
  const offlineContext = new OfflineAudioContext(
    2,
    config.sampleRate * duration,
    config.sampleRate
  );
  
  // Connect all nodes
  setupAudioGraph(offlineContext);
  
  // Render
  const rendered = await offlineContext.startRendering();
  
  return rendered;
}
```

### 11.2 Memory Management

```typescript
interface MemoryManager {
  maxAudioBuffers: number;
  bufferPool: AudioBuffer[];
  
  acquireBuffer(duration: number): AudioBuffer;
  releaseBuffer(buffer: AudioBuffer): void;
  cleanup(): void;
}

// Lazy loading for large files
function lazyLoadAudio(url: string): Promise<AudioBuffer> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    
    request.onload = async () => {
      const audioData = await audioContext.decodeAudioData(
        request.response
      );
      resolve(audioData);
    };
    
    request.onerror = reject;
    request.send();
  });
}
```

---

## 12. Collaboration Features

### 12.1 Real-time Sync

```typescript
interface CollaborationConfig {
  provider: 'yjs' | 'liveblocks' | 'automerge';
  roomId: string;
  userId: string;
  
  // Sync settings
  syncInterval: number;   // ms
  conflictResolution: 'last-write-wins' | 'operational-transform';
}

// Real-time cursor positions
interface CursorState {
  userId: string;
  userName: string;
  color: string;
  position: number;       // timeline position
  selection?: {
    start: number;
    end: number;
  };
}

// Broadcast cursor updates
function broadcastCursor(position: number): void {
  collaborationProvider.broadcast('cursor', {
    userId: currentUser.id,
    position,
    timestamp: Date.now()
  });
}
```

### 12.2 Comments & Annotations

```typescript
interface Comment {
  id: string;
  userId: string;
  userName: string;
  timestamp: number;      // Position in audio (seconds)
  text: string;
  resolved: boolean;
  replies: Comment[];
  createdAt: Date;
}

// Add comment at playhead position
function addComment(text: string): Comment {
  const comment: Comment = {
    id: generateId(),
    userId: currentUser.id,
    userName: currentUser.name,
    timestamp: audioContext.currentTime,
    text,
    resolved: false,
    replies: [],
    createdAt: new Date()
  };
  
  comments.push(comment);
  syncComments();
  
  return comment;
}
```

---

## 13. API Integration

### 13.1 Editor State API

```typescript
// Save editor state
POST /api/v1/projects/:projectId/editor-state
{
  "timeline": {
    "zoom": 100,
    "scrollPosition": 5000
  },
  "tempo": 128,
  "key": {
    "root": "C",
    "mode": "major",
    "semitones": 0
  },
  "arrangement": [...],
  "mixer": {
    "channels": [...],
    "master": {...}
  },
  "effects": {...},
  "automation": {...}
}

// Load editor state
GET /api/v1/projects/:projectId/editor-state

Response:
{
  "state": {...},
  "lastModified": "2026-03-22T08:00:00Z",
  "modifiedBy": "user-id"
}
```

---

*Version: 1.0.0*
*Last Updated: March 2026*
