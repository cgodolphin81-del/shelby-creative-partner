# 3D Runway Design Specification
## Virtual Venue & Environment

---

## Venue Architecture

### Core Runway Dimensions

**Standard Configuration:**
```
Runway Length: 40 meters (131 feet)
Runway Width: 3 meters (10 feet)
Stage Height: 0.5 meters (1.5 feet)
Audience Distance: 5-15 meters from runway edge
Camera Height: 1.5-2.5 meters (adjustable)
```

**Runway Shapes:**
1. **Straight Classic** - Traditional linear runway
2. **T-Stage** - Extended cross-section at end
3. **U-Shape** - Wraps around audience
4. **Circular** - 360° viewing experience
5. **Zigzag** - Dynamic angular path

---

## Venue Templates

### 1. THE GALLERY (Minimalist)
**Use Case:** Capsule collections, high fashion focus

**Environment:**
- Floor: Polished concrete or white lacquer
- Walls: Seamless white cyclorama
- Ceiling: Industrial grid with adjustable lighting
- Size: 60m x 40m x 8m (L x W x H)

**Lighting Setup:**
```
Key Lights: 12x LED spotlights (3200K-5600K tunable)
Fill Lights: 8x softbox panels (overhead)
Accent Lights: 16x RGB LED strips (architectural)
Specials: 4x follow spotlights (automated)
```

**Camera Positions:**
- Cam 1: Front center (main view)
- Cam 2: Side profile (garment flow)
- Cam 3: Rear follow (exit walk)
- Cam 4: Overhead (pattern/choreography)
- Cam 5: Low angle (dramatic entrance)

---

### 2. THE TERRACE (Natural Light)
**Use Case:** Spring/Summer, resort wear

**Environment:**
- Floor: Weathered wood decking
- Backdrop: Skybox (day/night cycle)
- Vegetation: Potted trees, hanging plants
- Architecture: Glass walls, open ceiling
- Size: 50m x 35m x 12m

**Lighting Setup:**
- Primary: Simulated sunlight (directional, 5500K)
- Secondary: Reflector panels (bounce fill)
- Ambient: HDRI sky environment
- Practical: String lights, lanterns (atmosphere)

**Time-of-Day Presets:**
- Dawn: Soft pink/orange, long shadows
- Midday: Bright neutral, minimal shadows
- Golden Hour: Warm amber, dramatic shadows
- Dusk: Cool blue, practical lights activate
- Night: Artificial lighting only, moody

---

### 3. THE VAULT (Industrial)
**Use Case:** Fall/Winter, streetwear, edgy collections

**Environment:**
- Floor: Black steel grating or dark concrete
- Walls: Exposed brick, corrugated metal
- Ceiling: Visible ductwork, chain hoists
- Size: 70m x 45m x 10m

**Lighting Setup:**
```
Key: 8x Fresnel spotlights (warm 3200K)
Backlight: 6x LED bars (RGB, color-changing)
Hazards: 4x rotating disco balls (accent)
Fog: Low-lying atmospheric haze (continuous)
```

**Special Effects:**
- Particle systems: Ember sparks, dust motes
- Dynamic shadows: Gobo patterns on walls
- Reflective surfaces: Puddles, polished metal

---

### 4. THE ATRIUM (Luxury)
**Use Case:** Couture, evening wear, bridal

**Environment:**
- Floor: Marble tiles (black/white check or solid)
- Walls: Velvet drapes, gold trim, columns
- Ceiling: Crystal chandeliers, coffered
- Size: 55m x 50m x 15m

**Lighting Setup:**
- Chandeliers: 3x main fixtures (practical + light source)
- Wall Wash: 12x warm LED (architecture emphasis)
- Runway Edge: LED strip (subtle guidance)
- Spotlight: 2x automated follow spots

**Atmosphere:**
- Reverb: Hall acoustics simulation
- Particles: Subtle dust in light beams
- Reflections: Ray-traced floor and surfaces

---

## Camera System Specification

### Virtual Camera Rig

**Camera Types:**
```
1. MAIN_CAM (Primary viewer perspective)
   - FOV: 45° (natural human vision)
   - Height: 1.7m (eye level)
   - Movement: Smooth dolly tracking
   - Auto-focus: Model face/torso priority

2. DETAIL_CAM (Garment close-ups)
   - FOV: 85° (portrait lens)
   - Height: Variable (1.0-2.0m)
   - Movement: Slow push-in on cues
   - Focus: Fabric texture, details

3. WIDE_CAM (Full scene context)
   - FOV: 24° (wide angle)
   - Height: 3.0m (elevated)
   - Movement: Static or slow pan
   - Use: Opening/closing shots

4. FOLLOW_CAM (Model tracking)
   - FOV: 50° (standard)
   - Height: 1.5m
   - Movement: Automated model tracking
   - Smoothing: Low latency, minimal lag

5. DRONE_CAM (Aerial perspectives)
   - FOV: 35° (medium wide)
   - Height: 5-10m (overhead)
   - Movement: Fly-through paths
   - Use: Transitions, choreography
```

### Camera Control System

**Auto-Director Mode:**
```javascript
// Camera switching logic
const cameraCues = [
  { time: 0, from: 'WIDE_CAM', to: 'MAIN_CAM', transition: 'cut' },
  { time: 8, from: 'MAIN_CAM', to: 'DETAIL_CAM', transition: 'dissolve_0.5s' },
  { time: 15, from: 'DETAIL_CAM', to: 'FOLLOW_CAM', transition: 'smooth_1s' },
  // ... per-show configuration
];
```

**Viewer Control (Interactive):**
- Toggle between camera angles
- Free-look mode (VR/desktop)
- Zoom slider (2x-10x magnification)
- Picture-in-picture (main + detail)

---

## Lighting System

### Programmable Lighting Grid

**Fixture Types:**
```yaml
Spotlight:
  count: 16
  channels: [intensity, color_temp, zoom, focus]
  control: DMX over network

Wash:
  count: 12
  channels: [RGB, intensity, diffusion]
  control: Art-Net protocol

LED_Strips:
  count: 8 (runway edges)
  channels: [RGB, animation_pattern]
  control: SPI controller

Practicals:
  count: variable
  channels: [intensity, flicker_simulation]
  control: Binary on/off + dimming
```

### Lighting Cues

**Cue Structure:**
```json
{
  "cueId": "LOOK_01_ENTER",
  "trigger": "model_enter_stage",
  "fadeTime": 2.0,
  "fixtures": [
    { "id": "SPOT_01", "intensity": 100, "color": 5600 },
    { "id": "SPOT_02", "intensity": 80, "color": 5600 },
    { "id": "WASH_03", "intensity": 40, "color": [255, 240, 200] }
  ],
  "atmosphere": {
    "fog_density": 0.3,
    "shadow_softness": 0.5
  }
}
```

---

## Audience Experience

### Virtual Seating

**Seating Tiers:**
```
VIP FRONT ROW (50 seats)
  - Distance: 5m from runway
  - View angle: Prime center
  - Features: Backstage pass, meet & greet avatar

GENERAL ADMISSION (500 seats)
  - Distance: 8-12m from runway
  - View angle: Side to center
  - Features: Standard viewing, chat access

STANDING ROOM (1000 capacity)
  - Distance: 12-20m from runway
  - View angle: Variable
  - Features: Mobile viewing, social features

OVERFLOW (unlimited)
  - Platform: YouTube simulcast
  - View angle: Director's cut
  - Features: Chat, reactions, no interaction
```

### Audience Avatars

**Customization Options:**
- Body type (10 presets)
- Skin tone (20+ shades)
- Hairstyle (50+ options)
- Outfit (casual, formal, branded merch)
- Accessories (glasses, jewelry, bags)

**Social Features:**
- Proximity voice chat (VIP only)
- Text chat (global + section)
- Reactions (applause, cheers, emojis)
- Photo mode (selfies with runway backdrop)

---

## Technical Implementation

### 3D Engine Requirements

**Recommended:** Three.js + React Three Fiber
**Alternative:** Unity WebGL, Unreal Pixel Streaming

**Performance Targets:**
```
Desktop (High): 60 FPS, 1440p, ultra settings
Desktop (Standard): 60 FPS, 1080p, high settings
Mobile: 30 FPS, 720p, medium settings
VR: 90 FPS, per-eye 1440p, optimized settings
```

**Asset Optimization:**
- Models: LOD system (3 levels)
- Textures: 2K max, compressed (Basis/ASTC)
- Draw calls: <500 per frame
- Triangle count: <2M visible per frame

### File Structure
```
/venue/
  ├── models/
  │   ├── gallery.glb
  │   ├── terrace.glb
  │   ├── vault.glb
  │   └── atrium.glb
  ├── lighting/
  │   ├── presets.json
  │   └── cues/
  ├── cameras/
  │   ├── positions.json
  │   └── paths.json
  └── audience/
      ├── seating.json
      └── avatars/
```

---

**Next:** Review `../model-system/avatar-specs.md` for model generation.
