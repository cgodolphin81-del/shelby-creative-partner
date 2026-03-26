# Editing Workflow Guide

Professional editing workflows for Premiere Pro, Final Cut Pro, and DaVinci Resolve.

---

## Table of Contents

1. [Pre-Production Setup](#pre-production-setup)
2. [Ingest & Organization](#ingest--organization)
3. [Premiere Pro Workflow](#premiere-pro-workflow)
4. [Final Cut Pro Workflow](#final-cut-pro-workflow)
5. [DaVinci Resolve Workflow](#davinci-resolve-workflow)
6. [Color Grading Basics](#color-grading-basics)
7. [Audio Post-Production](#audio-post-production)
8. [Export & Delivery](#export--delivery)
9. [Quality Control Checklist](#quality-control-checklist)

---

## Pre-Production Setup

### Folder Structure Template

```
PROJECT_NAME/
├── 01_RAW_FOOTAGE/
│   ├── CAM_A/
│   ├── CAM_B/
│   └── AUDIO/
├── 02_PROJECT_FILES/
│   ├── PREMIERE/
│   ├── FCP/
│   └── RESOLVE/
├── 03_ASSETS/
│   ├── GRAPHICS/
│   ├── MUSIC/
│   ├── SFX/
│   └── STOCK/
├── 04_EXPORTS/
│   ├── ROUGH_CUT/
│   ├── FINE_CUT/
│   ├── COLOR/
│   └── FINAL/
└── 05_DELIVERABLES/
    ├── YOUTUBE/
    ├── SOCIAL/
    └── CLIENT/
```

### Project Settings Checklist

**Before You Start:**
- [ ] Confirm frame rate (24, 25, 30, 60 fps)
- [ ] Confirm resolution (1080p, 4K, etc.)
- [ ] Confirm aspect ratio (16:9, 9:16, 1:1)
- [ ] Set up folder structure
- [ ] Create project backup location
- [ ] Verify all footage is backed up

---

## Ingest & Organization

### Step 1: Transfer Footage

1. **Copy all cards immediately** – Don't edit from cards
2. **Verify transfer** – Check file sizes match
3. **Create backup** – 3-2-1 rule (3 copies, 2 formats, 1 offsite)
4. **Don't format cards** – Wait until project is complete

### Step 2: Organize & Label

**File Naming Convention:**
```
YYYYMMDD_PROJECT_SCENE_TAKE.MP4
Example: 20260322_ACME_INTRO_TAKE03.MP4
```

**Metadata to Add:**
- Scene name
- Take number
- Good/Bad rating
- Notes (audio issues, etc.)

### Step 3: Create Proxies (For 4K+)

**When to Use Proxies:**
- Editing 4K or higher on modest hardware
- Multiple camera angles
- Complex timelines

**Proxy Settings:**
- Resolution: 1/4 or 1/2 original
- Codec: ProRes Proxy or DNxHR LB
- Same frame rate as original

---

## Premiere Pro Workflow

### Phase 1: Project Setup (15 min)

```
1. File > New > Project
   - Name: PROJECTNAME_DATE
   - Location: 02_PROJECT_FILES/PREMIERE/
   - Renderer: Mercury Playback Engine GPU

2. Settings > General
   - Display Format: Timecode
   - Capture Format: DV (default)

3. Settings > Scratch Disks
   - Set all to custom: 02_PROJECT_FILES/PREMIERE/
```

### Phase 2: Import & Organize (30-60 min)

```
1. File > Import (or Cmd/Ctrl + I)
   - Import all footage folders
   - Import audio, graphics, music

2. Create Bins (folders in Project panel):
   - 01_FOOTAGE
   - 02_AUDIO
   - 03_MUSIC
   - 04_GRAPHICS
   - 05_SEQUENCES

3. Subdivide FOOTAGE bin:
   - CAM_A
   - CAM_B
   - B_ROLL
   - SCREEN_RECORDINGS
```

### Phase 3: Rough Cut (2-4 hours)

```
1. Create Sequence:
   - File > New > Sequence
   - Match to footage (right-click clip > New Sequence from Clip)

2. Assembly Edit:
   - Review all footage (use JKL playback)
   - Mark favorites (F) and rejects (Delete)
   - Drag best takes to timeline

3. Rough Cut:
   - Focus on story flow
   - Don't worry about timing yet
   - Use Q and W for ripple trim
   - Target duration: 1.5x final length
```

### Phase 4: Fine Cut (2-4 hours)

```
1. Tighten Edits:
   - Trim excess footage
   - Improve pacing
   - Add J and L cuts for smoothness

2. Add B-Roll:
   - Layer B-roll on V2, V3
   - Match to narration/dialogue
   - Use cutaways for variety

3. Add Graphics:
   - Essential Graphics panel
   - Lower thirds
   - Titles
   - End cards

4. Lock Picture:
   - No more timing changes
   - Export for client review
   - Get approval before color/audio
```

### Phase 5: Color & Audio (2-3 hours)

```
Color (Lumetri):
1. Window > Lumetri Color
2. Basic Correction:
   - White balance
   - Exposure
   - Contrast
3. Creative:
   - Look/LUT
   - Intensity
4. Curves/Wheels:
   - Fine-tune shadows/midtones/highlights

Audio:
1. Window > Essential Sound
2. Tag clips (Dialogue, Music, SFX)
3. Dialogue:
   - Loudness: -23 LUFS (broadcast) or -14 LUFS (web)
   - Dynamics processing
   - De-noise if needed
4. Music:
   - Ducking under dialogue
   - Fade in/out
```

### Phase 6: Export (30 min)

```
1. File > Export > Media (Cmd/Ctrl + M)

2. YouTube 4K:
   - Format: H.264
   - Preset: YouTube 4K
   - Bitrate: VBR, 2 pass, Target 45, Max 60

3. Master File:
   - Format: QuickTime
   - Codec: ProRes 422 HQ
   - For archival and future use

4. Social Versions:
   - Export 9:16 (1080x1920)
   - Export 1:1 (1080x1080)
   - Export 15-sec teasers
```

### Premiere Pro Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Play/Stop | Space |
| Jog Left/Right | J / L |
| Pause | K |
| Mark In | I |
| Mark Out | O |
| Insert | , (comma) |
| Overwrite | . (period) |
| Ripple Trim Start | Q |
| Ripple Trim End | W |
| Razor Tool | C |
| Selection Tool | V |
| Undo | Cmd/Ctrl + Z |
| Save | Cmd/Ctrl + S |
| Export | Cmd/Ctrl + M |

---

## Final Cut Pro Workflow

### Phase 1: Library & Event Setup (10 min)

```
1. File > New > Library
   - Name: PROJECTNAME
   - Location: External drive or fast SSD

2. File > New > Event
   - Name: PROJECTNAME_DATE
   - Organization: Into one event

3. File > New > Project
   - Name: EDIT_01
   - Resolution: Match footage
   - Frame Rate: Match footage
```

### Phase 2: Import & Organization (30-60 min)

```
1. Import (Cmd + I):
   - Select all footage
   - Choose storage location
   - Leave files in place (recommended)

2. Keywords & Favorites:
   - Select clips > Cmd + K (add keyword)
   - F = Favorite
   - Delete = Reject
   - Use keyword collections for organization

3. Smart Collections:
   - Auto-organize by metadata
   - Camera angle
   - Frame rate
   - Favorite status
```

### Phase 3: Editing (3-6 hours)

```
1. Primary Storyline:
   - Drag A-roll to primary storyline
   - FCP's magnetic timeline handles connections

2. Connected Clips (B-Roll):
   - Drag above primary storyline
   - Automatically connects to nearest clip

3. Compound Clips:
   - Select multiple clips > Cmd + G
   - For complex sequences
   - Reusable elements

4. Auditions:
   - Select multiple takes > Cmd + Y
   - Cycle through with up/down arrows
   - Choose best take

5. Multicam:
   - Select all angles > Right-click > New Multicam Clip
   - Sync by timecode or audio
   - Edit with angle viewer
```

### Phase 4: Color Correction (1-2 hours)

```
1. Color Board (Cmd + 6):
   - Exposure: Shadows, Midtones, Highlights
   - Saturation: Overall color intensity
   - Color Balance: Temperature, tint

2. Color Wheels:
   - More precise control
   - Shadow/Mid/Highlight wheels

3. Color Curves:
   - Hue vs Saturation
   - Hue vs Hue
   - Luma vs Saturation

4. Apply LUTs:
   - Custom LUTs in Effects browser
   - Adjust intensity as needed
```

### Phase 5: Audio (1-2 hours)

```
1. Audio Enhancement:
   - Select dialogue clip
   - Inspector > Volume > Loudness
   - Check "Loudness" for auto-adjustment

2. Audio EQ:
   - Inspector > EQ
   - High-pass filter (80-100Hz)
   - Boost presence (3-5kHz)

3. Audio Compression:
   - Inspector > Dynamics
   - Threshold: -20 to -30dB
   - Ratio: 3:1 to 4:1

4. Music Ducking:
   - Auto-ducking in Roles
   - Or manual keyframes
```

### Phase 6: Export (20 min)

```
1. File > Share > Master File (Cmd + E)
   - Format: Video and Audio
   - Codec: ProRes 422 HQ
   - For archival

2. File > Share > YouTube
   - 4K if source is 4K
   - Automatic optimization

3. File > Share > Add Destination
   - Create custom exports
   - Social media sizes
   - Client delivery specs
```

### Final Cut Pro Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Play/Pause | Space |
| Skim | S |
| Mark In/Out | I / O |
| Insert | Q |
| Append | E |
| Connect | T |
| Position | D |
| Blade | B |
| Select | A |
| Trim | T |
| Range Select | R |
| Undo | Cmd + Z |
| Save | Cmd + S |
| Share | Cmd + E |

---

## DaVinci Resolve Workflow

### Phase 1: Project Setup (10 min)

```
1. Project Manager > New Project
   - Name: PROJECTNAME_DATE

2. Project Settings (gear icon):
   - Timeline Resolution: 1920x1080 or 3840x2160
   - Timeline Frame Rate: Match footage
   - Color Science: DaVinci YRGB Color Managed

3. Master Settings:
   - Timeline Format: HD or UHD
   - Output Color Space: Rec.709
```

### Phase 2: Media Management (30 min)

```
1. Media Pool:
   - Import all footage (Cmd/Ctrl + I)
   - Create bins for organization

2. Smart Bins:
   - Auto-sort by metadata
   - Camera, frame rate, codec

3. Proxy Media (if needed):
   - Select clips > Right-click > Generate Proxy Media
   - Choose Half Resolution
   - Toggle proxies in playback
```

### Phase 3: Edit Page (3-6 hours)

```
1. Timeline Creation:
   - Drag clips to timeline
   - Or right-click > Create New Timeline

2. Editing Tools:
   - Blade: B
   - Selection: A
   - Trim: T
   - Dynamic: R

3. Multicam:
   - Select all angles
   - Right-click > Create New Multicam Clip
   - Sync by timecode/waveform
   - Open in Multicam Viewer

4. Fusion Titles:
   - Effects > Titles > Fusion
   - Drag to timeline
   - Customize in Inspector

5. Fairlight Audio:
   - Switch to Fairlight page
   - Professional audio tools
   - ADR, mixing, mastering
```

### Phase 4: Color Page (2-4 hours)

```
DaVinci's signature strength - professional color grading

1. Node Structure:
   - Serial nodes for corrections
   - Parallel for effects
   - Layer for compositing

2. Primary Correction:
   - Lift (shadows)
   - Gamma (midtones)
   - Gain (highlights)
   - Offset (overall)

3. Qualifier (HSL):
   - Select specific colors
   - Isolate and adjust
   - Skin tone qualifier

4. Power Windows:
   - Isolate areas
   - Track movement
   - Local adjustments

5. Tracking:
   - Point tracker
   - Face refinement
   - Object tracking

6. LUTs:
   - Apply film emulation LUTs
   - Adjust intensity
   - Create custom LUTs
```

### Phase 5: Fusion Page (Optional, 1-4 hours)

```
For VFX and motion graphics:

1. Node-based compositing
2. Text animation
3. Particle effects
4. Green screen keying
5. Object removal
6. 3D compositing

Note: For simple graphics, Edit page titles may suffice.
```

### Phase 6: Deliver Page (30 min)

```
1. Render Queue:
   - Add to Render Queue
   - Choose preset or custom

2. YouTube Preset:
   - Format: MP4
   - Codec: H.264
   - Resolution: Match timeline
   - Frame Rate: Match timeline
   - Quality: Restrict to 45000 Kb/s

3. Master File:
   - Format: QuickTime
   - Codec: ProRes 422 HQ
   - Color Space: Rec.709

4. Social Exports:
   - Custom resolution (1080x1920 for vertical)
   - H.264 codec
   - Optimized bitrate
```

### DaVinci Resolve Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Play/Stop | Space |
| Jog Left/Right | J / L |
| Pause | K |
| Mark In/Out | I / O |
| Blade | B |
| Selection | A |
| Trim | T |
| Dynamic Trim | R |
| Snap | N |
| Zoom In/Out | Cmd/Ctrl + / - |
| Undo | Cmd/Ctrl + Z |
| Save | Cmd/Ctrl + S |
| Render | Cmd/Ctrl + R |
| Switch Pages | Cmd/Ctrl + 1-7 |

---

## Color Grading Basics

### Understanding Scopes

**Waveform:** Shows luminance levels (0-100 IRE)
- Proper exposure: 0-100 without clipping
- Skin tones: 60-70 IRE

**Vectorscope:** Shows color saturation and hue
- Skin tone line reference
- Don't push past outer circles

**Histogram:** Distribution of tones
- Balanced = bell curve
- Avoid spikes at edges

### Basic Correction Order

```
1. Exposure (get it right)
2. White Balance (neutral grays)
3. Contrast (S-curve)
4. Saturation (subtle)
5. Creative Look (LUTs, stylization)
```

### Common Looks

| Look | Characteristics |
|------|-----------------|
| **Natural** | Accurate colors, moderate contrast |
| **Cinematic** | S-curve, teal/orange, slight desat |
| **Warm** | Orange/amber tint, cozy feel |
| **Cool** | Blue tint, clinical/modern |
| **B&W** | Remove saturation, adjust luminance |
| **Vintage** | Fade blacks, warm tint, grain |

---

## Audio Post-Production

### Loudness Standards

| Platform | Standard |
|----------|----------|
| YouTube | -14 LUFS |
| Facebook | -14 LUFS |
| Instagram | -14 LUFS |
| Broadcast (US) | -24 LKFS |
| Broadcast (EU) | -23 LUFS |
| Podcast | -16 to -18 LUFS |
| Cinema | -27 LKFS |

### Audio Processing Chain

```
1. High-Pass Filter (80-100Hz)
   - Remove rumble

2. EQ
   - Cut mud (200-400Hz)
   - Boost presence (3-5kHz)
   - Air (10kHz+)

3. Compression
   - Threshold: -20 to -30dB
   - Ratio: 3:1 to 4:1
   - Attack: 5-10ms
   - Release: 50-100ms

4. De-esser
   - Target 5-8kHz
   - Reduce sibilance

5. Limiter
   - Ceiling: -1dB
   - Prevent clipping
```

### Music & SFX

**Music Levels:**
- Background: -25 to -30dB
- Under dialogue: -20 to -25dB
- Featured: -12 to -15dB

**SFX Levels:**
- Subtle: -30 to -35dB
- Moderate: -20 to -25dB
- Prominent: -15 to -20dB

**Fades:**
- Music: 1-2 second fades
- SFX: Match action
- Dialogue: Minimal, natural

---

## Export & Delivery

### YouTube Export Settings

```
Resolution: 3840x2160 (4K) or 1920x1080
Frame Rate: Match source (24, 25, 30, 60)
Codec: H.264
Profile: High
Level: 5.2
Bitrate: VBR 2-pass
  - Target: 45 Mbps (4K) / 20 Mbps (1080p)
  - Max: 60 Mbps (4K) / 30 Mbps (1080p)
Audio: AAC, 320 kbps, 48kHz
```

### Instagram/TikTok Export

```
Resolution: 1080x1920 (9:16 vertical)
Frame Rate: 30 or 60 fps
Codec: H.264
Bitrate: 15-20 Mbps
Audio: AAC, 320 kbps
Duration: 15-90 seconds (Reels), up to 10 min
```

### Client Delivery Package

```
DELIVERABLES/
├── MASTER_PRORES.mov (archive quality)
├── YOUTUBE_4K.mp4
├── YOUTUBE_1080p.mp4
├── INSTAGRAM_VERTICAL.mp4
├── INSTAGRAM_SQUARE.mp4
├── THUMBNAIL.jpg (1280x720)
├── SOCIAL_TEASER_15s.mp4
└── DELIVERY_NOTES.pdf
```

---

## Quality Control Checklist

### Visual QC

- [ ] No flash frames (single-frame glitches)
- [ ] No audio pops/clicks
- [ ] Colors consistent throughout
- [ ] No clipping (pure white/black)
- [ ] Graphics readable on mobile
- [ ] No watermark artifacts
- [ ] Aspect ratio correct
- [ ] No interlacing issues

### Audio QC

- [ ] Dialogue clear and intelligible
- [ ] Music levels appropriate
- [ ] No clipping/distortion
- [ ] Smooth transitions
- [ ] Loudness matches platform spec
- [ ] No background noise
- [ ] Fades are smooth

### Technical QC

- [ ] File plays on multiple devices
- [ ] Correct resolution
- [ ] Correct frame rate
- [ ] Correct codec
- [ ] Audio channels correct (stereo/mono)
- [ ] File size reasonable
- [ ] Metadata included (if required)

### Content QC

- [ ] Story flows logically
- [ ] Pacing appropriate
- [ ] CTA clear and visible
- [ ] Branding correct
- [ ] No typos in graphics
- [ ] Links/URLs correct
- [ ] Client approval received

---

## Workflow Efficiency Tips

### Time-Saving Techniques

1. **Templates:** Save project templates with bins, sequences, graphics
2. **Presets:** Export presets for common deliveries
3. **Keyboard Shortcuts:** Learn and customize
4. **Proxy Workflow:** Edit smoothly, conform for final
5. **Markers:** Use markers for notes, beats, revisions
6. **Render Cache:** Pre-render complex sections

### Revision Management

```
VERSION_NAMING:
PROJECT_v01_ROUGH
PROJECT_v02_FINE
PROJECT_v03_COLOR
PROJECT_v04_CLIENT_REVIEW
PROJECT_v05_REVISION_1
PROJECT_FINAL
PROJECT_FINAL_v2 (yes, this happens)
```

### Backup Strategy

```
DURING PROJECT:
- Auto-save every 5 minutes
- Manual save after every major change
- Daily backup to external drive

COMPLETION:
- Archive project folder
- Keep raw footage for 90 days minimum
- Delete proxy files (regenerate if needed)
- Document any custom settings
```

---

*Last Updated: March 2026*
*Video Production Service Package*
