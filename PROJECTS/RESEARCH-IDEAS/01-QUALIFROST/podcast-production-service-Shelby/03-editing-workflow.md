# Editing Workflow

**Professional podcast editing in Descript and Adobe Audition**

---

## 🎬 Overview: The Editing Process

```
Raw Recording → Backup → Rough Cut → Fine Edit → Audio Repair → 
Leveling → Music/SFX → Export → Quality Check → Final Delivery
```

**Time Estimates:**
- 30-minute episode: 1-2 hours (experienced), 3-4 hours (beginner)
- 60-minute episode: 2-3 hours (experienced), 5-6 hours (beginner)

---

## 📁 File Organization

### Folder Structure
```
Podcast_Name/
├── 01_Raw_Recordings/
│   ├── Episode_001/
│   │   ├── Host_Track.wav
│   │   ├── Guest_Track.wav
│   │   └── Backup_Recording.mp3
│   └── Episode_002/
├── 02_Projects/
│   ├── Episode_001.descript (or .sesx for Audition)
│   └── Episode_002.descript
├── 03_Music/
│   ├── Intro_Theme.wav
│   ├── Outro_Theme.wav
│   ├── Transition_SFX.wav
│   └── Background_Beds/
├── 04_Exports/
│   ├── Episode_001_MASTER.wav
│   ├── Episode_001_MP3.mp3
│   └── Episode_001_VIDEO.mp4
├── 05_Show_Notes/
│   └── Episode_001_Notes.md
└── 06_Artwork/
    ├── Cover_Art_3000x3000.jpg
    └── Episode_001_Social.jpg
```

### Naming Conventions
- **Raw files:** `EP001_Host_Raw_20260322.wav`
- **Projects:** `EP001_Edit_v1.descript`
- **Exports:** `EP001_MASTER.wav`, `EP001_DISTRIBUTION.mp3`
- **Versions:** Always version your edits (v1, v2, final)

### Backup First!
1. [ ] Copy raw recordings to cloud storage immediately
2. [ ] Keep original files – never edit the only copy
3. [ ] Use version control for projects

---

## ✂️ Descript Workflow

### Why Descript?
- Edit audio by editing text (transcription-based)
- Remove filler words automatically
- Overdub feature (AI voice cloning for fixes)
- Screen recording + video podcast support
- Collaborative editing

### Setup
1. **Import:** Drag audio/video files into Descript
2. **Transcription:** Auto-transcribes (accurate, ~95%)
3. **Multitrack:** Each speaker gets separate track automatically

### Step-by-Step Editing

#### Phase 1: Rough Cut (15-30 minutes)
1. **Read through transcript** while listening
2. **Mark sections to remove:**
   - Long pauses (>3 seconds)
   - Technical difficulties
   - Off-topic tangents
   - False starts, "let me try that again"
3. **Delete marked sections** (highlight text, press delete)
4. **Listen to transitions** – ensure they flow naturally

#### Phase 2: Fine Edit (20-40 minutes)
1. **Remove filler words:**
   - Edit → Remove Filler Words
   - Review each removal (some "ums" add authenticity)
   - Typical reduction: 30-50% of filler words
2. **Tighten pauses:**
   - Select pause in transcript
   - Adjust length or delete
   - Keep natural breathing room (0.5-1 second between thoughts)
3. **Fix cross-talk:**
   - In multitrack, adjust timing
   - Lower volume of person not speaking
   - Cut overlapping sections if needed

#### Phase 3: Audio Repair (10-20 minutes)
1. **Studio Sound** (Descript's AI enhancement):
   - Enable per-track
   - Adjust intensity (start at 50%)
   - Don't overdo it – can sound robotic
2. **Noise Reduction:**
   - Effects → Noise Reduction
   - Select noise print (use your room tone recording)
   - Apply conservatively
3. **EQ (if needed):**
   - Effects → EQ
   - High-pass filter at 80Hz (removes rumble)
   - Slight boost at 3-5kHz for clarity

#### Phase 4: Music & SFX (10-15 minutes)
1. **Import music** into Composition
2. **Add intro music:**
   - Place at beginning
   - Fade out under host intro (3-5 seconds)
   - Duck music when voice starts
3. **Add outro music:**
   - Start under final thoughts
   - Fade up as host wraps
   - Full volume for outro tag
4. **Add transitions** (optional):
   - Subtle whooshes between segments
   - Don't overuse – distracts from content

#### Phase 5: Leveling & Export (5-10 minutes)
1. **Normalize:**
   - Select all tracks
   - Effects → Normalize to -16 LUFS (podcast standard)
2. **Limiter:**
   - Add limiter on master track
   - Ceiling: -1dB (prevents clipping)
3. **Export:**
   - File → Export
   - Format: MP3, 128kbps mono (or 192kbps stereo for music)
   - Also export WAV master for archives

### Descript Pro Tips
- **Keyboard shortcuts:** Learn them (cuts editing time in half)
- **Overdub:** Fix mistakes without re-recording (train your voice first)
- **Screen recording:** Great for video podcasts or tutorials
- **Collaboration:** Share with team for feedback before export
- **Templates:** Save intro/outro structure as template

---

## 🎚️ Adobe Audition Workflow

### Why Audition?
- Industry standard
- Powerful spectral editing
- Advanced noise reduction
- Precise control
- Batch processing

### Setup
1. **Create Session:** File → New → Multitrack Session
2. **Settings:** 48kHz, 24-bit, WAV
3. **Import Files:** Drag audio into Files panel
4. **Place on Tracks:** Drag to multitrack timeline

### Step-by-Step Editing

#### Phase 1: Rough Cut (20-35 minutes)
1. **Listen through** entire recording
2. **Use Razor Tool (R)** to mark cuts
3. **Select and delete** unwanted sections:
   - Long pauses
   - Mistakes/restarts
   - Off-topic content
   - Technical issues
4. **Close gaps:** Select gap, right-click → Close Gap

#### Phase 2: Fine Edit (25-45 minutes)
1. **Zoom in** on waveform for precision
2. **Remove breaths** (optional, use tastefully):
   - Select breath sound
   - Effects → Amplitude → Gain
   - Reduce by -12 to -18dB (don't eliminate completely)
3. **Remove mouth clicks:**
   - Spot Healing Brush Tool
   - Click on offending sound
   - Audition auto-repairs
4. **Tighten pauses:**
   - Select pause
   - Cut or shorten
   - Crossfade edges (0.01-0.05 seconds)

#### Phase 3: Audio Repair (15-25 minutes)

**Noise Reduction:**
1. Select section of pure noise (room tone)
2. Effects → Noise Reduction/Restoration → Capture Noise Print
3. Select entire track
4. Effects → Noise Reduction/Restoration → Noise Reduction
5. Settings: Reduction 50-70%, Noise Floor -40 to -50dB
6. Preview, adjust, apply

**DeEsser** (reduce harsh "S" sounds):
1. Effects → Amplitude and Compression → DeEsser
2. Preset: "Male Sibilance" or "Female Sibilance"
3. Adjust frequency and threshold
4. Aim for reduction without lisping

**EQ** (Equalization):
1. Effects → Filter and EQ → Parametric Equalizer
2. Recommended starting point:
   - High-pass: 80Hz (cut rumble)
   - Slight cut: 200-400Hz (reduce boxiness)
   - Slight boost: 3-5kHz (add clarity)
   - High shelf: 10kHz+ (add air, optional)
3. Use narrow Q for cuts, wide Q for boosts

**Compression** (even out dynamics):
1. Effects → Amplitude and Compression → Single-Band Compressor
2. Starting settings:
   - Threshold: -20dB
   - Ratio: 3:1
   - Attack: 10ms
   - Release: 100ms
   - Makeup gain: +3dB
3. Adjust to taste – aim for 3-6dB gain reduction on peaks

#### Phase 4: Music & SFX (10-20 minutes)
1. **Import music** to separate tracks
2. **Position intro/outro**
3. **Add fades:**
   - Select edge of clip
   - Drag fade handle
   - Intro: 3-5 second fade out
   - Outro: 3-5 second fade in
4. **Duck music under voice:**
   - Add keyframes on music track volume
   - Lower music -15 to -20dB when voice present
   - Or use Sidechain Compression (advanced)

#### Phase 5: Mastering & Export (10-15 minutes)

**Loudness Matching (Critical for Podcasts):**
1. Window → Loudness Radar
2. Effects → Amplitude and Compression → Hard Limiter
3. Settings:
   - Maximum Amplitude: -1dB
   - Input Boost: Adjust to hit -16 LUFS
4. Or use: Effects → Amplitude and Compression → Speech Volume Leveler

**Export:**
1. File → Export → Multitrack Mixdown → Entire Session
2. Format: WAV, 44.1kHz, 16-bit (for distribution)
3. Also save: WAV 48kHz/24-bit master for archives
4. For MP3: File → Export → File, choose MP3, 128kbps mono

### Audition Pro Tips
- **Spectral Display:** Shift+D – see and remove specific noises
- **Favorites:** Save常用 effects chains as favorites
- **Batch Processing:** Process multiple files with same settings
- **Markers:** Use markers to note sections (intro, segments, outro)
- **Undo History:** Window → Undo History – lifesaver

---

## 🎧 Quality Control Checklist

Before exporting final version:

### Audio Quality
- [ ] No clipping (nothing hits 0dB)
- [ ] Consistent volume throughout
- [ ] No distracting background noise
- [ ] No mouth clicks or excessive breaths
- [ ] Music balanced properly with voice
- [ ] Smooth transitions between edits

### Content Quality
- [ ] Intro present and clear
- [ ] All segments flow logically
- [ ] No awkward silences (>5 seconds)
- [ ] Outro includes call-to-action
- [ ] Episode length matches format goals

### Technical Quality
- [ ] Sample rate: 44.1kHz or 48kHz
- [ ] Bit depth: 16-bit for distribution
- [ ] Format: MP3 for distribution, WAV for archive
- [ ] Bitrate: 128kbps mono (or 192kbps stereo)
- [ ] Loudness: -16 LUFS ±1 (Spotify/Apple standard)
- [ ] True peak: -1dB maximum

### Metadata
- [ ] ID3 tags filled (title, artist, album, episode number)
- [ ] Cover art embedded (3000x3000 pixels)
- [ ] Episode title accurate
- [ ] Season/episode number correct

---

## 📊 Loudness Standards

| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -16 LUFS | -1dB |
| Apple Podcasts | -16 LUFS | -1dB |
| Google Podcasts | -16 LUFS | -1dB |
| YouTube | -14 LUFS | -1dB |
| General Podcast Standard | -16 LUFS | -1dB |

**LUFS Explained:** Loudness Units Full Scale – measures perceived loudness over time, not just peak levels.

**Tools to Measure:**
- Descript: Built-in loudness meter
- Audition: Loudness Radar panel
- Free: Youlean Loudness Meter (plugin)
- Online: loudnessmeter.com

---

## ⚡ Speed Editing Tips

### Reduce Editing Time by 50%
1. **Use templates** – save your intro/outro/music structure
2. **Learn keyboard shortcuts** – muscle memory is faster than menus
3. **Edit at 1.5x speed** – train your ear to catch issues faster
4. **Batch similar tasks** – remove all filler words at once
5. **Set time limits** – Parkinson's Law: work expands to fill time
6. **Outsource** – hire an editor once you're monetizing

### Common Shortcuts

**Descript:**
- Space: Play/Pause
- Cmd/Ctrl + Z: Undo
- Cmd/Ctrl + Shift + Z: Redo
- Delete: Remove selection
- Cmd/Ctrl + F: Find in transcript

**Audition:**
- Space: Play/Pause
- Cmd/Ctrl + Z: Undo
- R: Razor tool
- V: Move tool
- B: Zoom in
- Z: Zoom out
- M: Add marker

---

## 🔄 Revision Workflow

### Client Revisions (If Applicable)
1. **Export draft** with watermark or "PREVIEW" in filename
2. **Send for review** with specific questions:
   - Any sections to remove?
   - Music levels okay?
   - Overall tone/pacing?
3. **Track changes** in spreadsheet:
   | Timestamp | Issue | Action | Status |
   |-----------|-------|--------|--------|
   | 3:45 | Music too loud | Lower -5dB | ✅ |
4. **Limit revisions** – specify in contract (2 rounds included)
5. **Final approval** before distribution export

### Self-Revision
1. **Take a break** – listen with fresh ears (minimum 1 hour, ideally 24 hours)
2. **Listen on different devices** – headphones, car, phone speaker
3. **Get second opinion** – trusted friend or colleague
4. **Sleep on it** – if unsure, wait until tomorrow

---

## 🚨 Common Editing Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Over-compression | Sounds squashed, fatiguing | Use gentler settings, aim for 3-6dB reduction |
| Too much noise reduction | Robotic, underwater sound | Use less, accept some ambient noise |
| Removing all breaths | Unnatural, choppy | Keep some breaths for natural flow |
| Music too loud | Distracts from content | Duck music -15 to -20dB under voice |
| Inconsistent levels | Listener adjusts volume constantly | Use compression and automation |
| Harsh edits | Audible clicks/pops | Always use crossfades (0.01-0.05s) |
| Ignoring loudness standards | Platform turns down your audio | Master to -16 LUFS |

---

## 📦 Deliverable Checklist

Before sending to client or uploading:

- [ ] Final MP3 exported (128kbps mono or 192kbps stereo)
- [ ] WAV master archived
- [ ] Loudness verified (-16 LUFS ±1)
- [ ] True peak verified (-1dB max)
- [ ] ID3 tags complete
- [ ] Cover art embedded
- [ ] Filename follows convention (EP001_Title.mp3)
- [ ] Backup saved to cloud
- [ ] Show notes prepared
- [ ] Client approved (if applicable)

---

**Remember:** The goal of editing is to make the content shine, not to show off your editing skills. Invisible editing is the best editing.
