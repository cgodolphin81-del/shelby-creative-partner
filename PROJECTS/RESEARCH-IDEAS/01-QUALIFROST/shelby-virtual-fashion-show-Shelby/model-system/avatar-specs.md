# Model System Specification
## AI-Generated Models & Avatars

---

## Model Generation Framework

### Core Philosophy
Create diverse, realistic, and customizable AI-generated models that represent a broad spectrum of human beauty while maintaining brand alignment and technical performance.

---

## Body Type Diversity

### Standard Body Type Presets

```json
{
  "bodyTypes": [
    {
      "id": "ectomorph_lean",
      "name": "Lean Athletic",
      "measurements": {
        "height_cm": [175, 183],
        "bust_cm": [81, 86],
        "waist_cm": [58, 63],
        "hips_cm": [86, 91],
        "shoulder_width_cm": [40, 44]
      },
      "characteristics": ["narrow frame", "low body fat", "defined muscle"],
      "usage": "High fashion, athletic wear"
    },
    {
      "id": "mesomorph_athletic",
      "name": "Athletic Build",
      "measurements": {
        "height_cm": [168, 180],
        "bust_cm": [86, 94],
        "waist_cm": [63, 71],
        "hips_cm": [91, 99],
        "shoulder_width_cm": [42, 47]
      },
      "characteristics": ["broad shoulders", "defined waist", "muscular"],
      "usage": "Sportswear, casual, swimwear"
    },
    {
      "id": "endomorph_curvy",
      "name": "Curvy Plus",
      "measurements": {
        "height_cm": [163, 175],
        "bust_cm": [96, 112],
        "waist_cm": [76, 91],
        "hips_cm": [101, 117],
        "shoulder_width_cm": [40, 45]
      },
      "characteristics": ["fuller figure", "defined waist", "proportionate"],
      "usage": "Inclusive fashion, body-positive campaigns"
    },
    {
      "id": "pear_shape",
      "name": "Pear Shape",
      "measurements": {
        "height_cm": [160, 173],
        "bust_cm": [84, 94],
        "waist_cm": [66, 76],
        "hips_cm": [99, 112],
        "shoulder_width_cm": [38, 43]
      },
      "characteristics": ["narrower shoulders", "wider hips", "defined waist"],
      "usage": "Denim, bottoms-focused collections"
    },
    {
      "id": "apple_shape",
      "name": "Apple Shape",
      "measurements": {
        "height_cm": [163, 175],
        "bust_cm": [94, 107],
        "waist_cm": [81, 96],
        "hips_cm": [96, 107],
        "shoulder_width_cm": [42, 47]
      },
      "characteristics": ["fuller torso", "slimmer legs", "bustier"],
      "usage": "Tops, dresses, flowy silhouettes"
    },
    {
      "id": "rectangular",
      "name": "Rectangular",
      "measurements": {
        "height_cm": [170, 183],
        "bust_cm": [84, 94],
        "waist_cm": [68, 78],
        "hips_cm": [86, 96],
        "shoulder_width_cm": [41, 46]
      },
      "characteristics": ["athletic build", "minimal waist definition", "balanced"],
      "usage": "Structured tailoring, minimalist fashion"
    },
    {
      "id": "hourglass",
      "name": "Hourglass",
      "measurements": {
        "height_cm": [165, 175],
        "bust_cm": [91, 102],
        "waist_cm": [61, 71],
        "hips_cm": [91, 102],
        "shoulder_width_cm": [40, 45]
      },
      "characteristics": ["balanced bust/hips", "narrow waist", "curvy"],
      "usage": "Fitted dresses, vintage-inspired, couture"
    },
    {
      "id": "petite",
      "name": "Petite",
      "measurements": {
        "height_cm": [152, 163],
        "bust_cm": [79, 89],
        "waist_cm": [58, 68],
        "hips_cm": [84, 94],
        "shoulder_width_cm": [36, 40]
      },
      "characteristics": ["shorter stature", "proportionate", "compact"],
      "usage": "Petite-specific collections, accessible fashion"
    },
    {
      "id": "tall",
      "name": "Tall",
      "measurements": {
        "height_cm": [180, 191],
        "bust_cm": [86, 97],
        "waist_cm": [63, 74],
        "hips_cm": [91, 102],
        "shoulder_width_cm": [43, 48]
      },
      "characteristics": ["elongated limbs", "statuesque", "commanding"],
      "usage": "Runway, editorial, luxury fashion"
    },
    {
      "id": "adaptive",
      "name": "Adaptive/Disabled",
      "measurements": "variable",
      "characteristics": ["wheelchair users", "prosthetics", "mobility aids"],
      "usage": "Adaptive fashion, inclusive campaigns"
    }
  ]
}
```

---

## Facial Feature Diversity

### Ethnicity & Heritage Presets

**Representation Matrix:**
```
African Diaspora (15 variants)
  - West African features
  - East African features
  - African-American features
  - Afro-Caribbean features
  - Mixed African heritage

Asian (20 variants)
  - East Asian (Chinese, Japanese, Korean)
  - Southeast Asian (Thai, Vietnamese, Filipino)
  - South Asian (Indian, Pakistani, Bangladeshi)
  - Central Asian
  - Mixed Asian heritage

European (15 variants)
  - Northern European
  - Southern European
  - Eastern European
  - Mediterranean
  - Mixed European heritage

Latino/Hispanic (15 variants)
  - Mexican
  - Central American
  - South American
  - Caribbean Latino
  - Mixed Latino heritage

Middle Eastern (10 variants)
  - Arab
  - Persian
  - Turkish
  - North African
  - Mixed Middle Eastern heritage

Indigenous (10 variants)
  - Native American
  - First Nations
  - Aboriginal Australian
  - Māori
  - Pacific Islander

Mixed/Multiracial (15 variants)
  - Blended heritage combinations
  - Unique feature sets
```

### Age Range Options

```json
{
  "ageRanges": [
    { "range": "18-24", "category": "emerging", "characteristics": ["youthful skin", "full features"] },
    { "range": "25-34", "category": "prime", "characteristics": ["mature beauty", "defined features"] },
    { "range": "35-44", "category": "established", "characteristics": ["character lines", "experienced look"] },
    { "range": "45-54", "category": "sophisticated", "characteristics": ["graceful aging", "wisdom"] },
    { "range": "55+", "category": "timeless", "characteristics": ["silver hair options", "elegant aging"] }
  ]
}
```

---

## Custom Avatar Creator

### User-Generated Models

**Creation Flow:**
```
1. Base Selection
   └─> Choose body type preset
   └─> Choose height (slider: 152-191cm)

2. Facial Features
   └─> Select ethnicity heritage
   └─> Adjust feature sliders:
       - Eye shape/size
       - Nose bridge/width
       - Lip fullness
       - Cheekbone prominence
       - Jawline definition

3. Skin & Complexion
   └─> Skin tone (50+ shades)
   └─> Undertone (cool/warm/neutral)
   └─> Skin texture (smooth/freckles/moles)
   └─> Special markers (scars, vitiligo, etc.)

4. Hair
   └─> Style (50+ presets)
   └─> Color (natural + fashion colors)
   └─> Texture (straight/wavy/curly/coily)
   └─> Length (buzz to floor-length)

5. Personalization
   └─> Upload reference photo (AI matching)
   └─> Name your model
   └─> Save to profile
```

### Technical Implementation

**AI Model Generation Pipeline:**
```python
# Pseudo-code for model generation
def generate_model(parameters):
    # 1. Base mesh selection
    base_mesh = load_body_type(parameters.body_type)
    
    # 2. Morph target blending
    face_mesh = blend_morph_targets(
        base_face,
        parameters.ethnicity_weights,
        parameters.age_factor,
        parameters.feature_sliders
    )
    
    # 3. Texture generation
    skin_texture = generate_skin_texture(
        parameters.skin_tone,
        parameters.undertone,
        parameters.skin_details
    )
    
    # 4. Hair system
    hair_asset = generate_hair(
        parameters.hair_style,
        parameters.hair_color,
        parameters.hair_texture
    )
    
    # 5. Final assembly
    model = assemble_model(
        body=base_mesh,
        face=face_mesh,
        skin=skin_texture,
        hair=hair_asset
    )
    
    return optimize_for_platform(model, target_platform)
```

---

## Model Walk & Animation

### Walk Cycle Library

**Walk Styles:**
```
1. CLASSIC_RUNWAY
   - Tempo: 120 BPM
   - Stride: Long, confident
   - Arm swing: Minimal, controlled
   - Head position: High, forward gaze
   - Hip movement: Subtle figure-8

2. COMMERCIAL_FRIENDLY
   - Tempo: 100 BPM
   - Stride: Moderate, approachable
   - Arm swing: Natural, relaxed
   - Head position: Level, slight smile
   - Hip movement: Minimal

3. AVANT_GARDE
   - Tempo: 90 BPM
   - Stride: Deliberate, angular
   - Arm swing: Stylized, artistic
   - Head position: Variable, dramatic
   - Hip movement: Exaggerated or suppressed

4. CASUAL_STROLL
   - Tempo: 80 BPM
   - Stride: Relaxed, natural
   - Arm swing: Free, unposed
   - Head position: Relaxed, looking around
   - Hip movement: Natural gait

5. POWER_STRUT
   - Tempo: 110 BPM
   - Stride: Aggressive, commanding
   - Arm swing: Sharp, punctuated
   - Head position: Chin up, intense gaze
   - Hip movement: Strong, confident
```

### Animation Blending

**State Machine:**
```
IDLE (waiting at wing)
  │
  ├─> WALK_ON (entrance animation)
  │     │
  │     └─> RUNWAY_WALK (main walk cycle)
  │           │
  │           ├─> POSE_FRONT (end of runway)
  │           │     │
  │           │     └─> TURN (180° pivot)
  │           │           │
  │           │           └─> RUNWAY_WALK (return)
  │           │                 │
  │           │                 └─> WALK_OFF (exit)
  │           │
  │           └─> POSE_SIDE (garment detail moment)
  │
  └─> WAVE (audience interaction)
```

**Blend Times:**
- Walk to pose: 0.3 seconds
- Pose to turn: 0.5 seconds
- Turn to walk: 0.3 seconds
- Emergency stop: 0.1 seconds

---

## Model Casting System

### Automated Casting

**Input:** Collection brief
**Output:** Recommended model lineup

```json
{
  "collectionBrief": {
    "theme": "Spring Summer 2026",
    "targetAudience": "Women 25-45, urban professionals",
    "brandValues": ["inclusive", "sustainable", "empowering"],
    "garmentTypes": ["workwear", "evening", "casual"]
  },
  "recommendedCasting": {
    "totalModels": 12,
    "diversityTargets": {
      "ethnicities": 6,
      "bodyTypes": 5,
      "ageRanges": 3,
      "heightRange": "165-183cm"
    },
    "models": [
      {
        "slot": 1,
        "role": "opener",
        "bodyType": "tall",
        "ethnicity": "East Asian",
        "ageRange": "25-34",
        "walkStyle": "CLASSIC_RUNWAY"
      },
      // ... additional model specs
    ]
  }
}
```

---

## Technical Specifications

### Model Asset Requirements

**3D Model Specs:**
```
Format: GLB/GLTF 2.0
Polygon count: 15,000-25,000 tris (body + face)
Texture resolution: 2048x2048 (skin), 1024x1024 (hair)
Rig: Humanoid (Mixamo-compatible)
LOD levels: 3 (high/medium/low)
File size: <5MB per model (compressed)
```

**Animation Specs:**
```
Format: FBX or GLTF animation
Frame rate: 30 or 60 FPS
Compression: Keyframe reduction
File size: <500KB per animation
Blend shapes: Facial expressions (50+ targets)
```

### Performance Optimization

**Rendering Budget:**
```
Max models on screen: 15 (runway + audience)
Draw calls per model: <10
Skinning bones: 65 (standard humanoid)
Real-time shadows: 4 dynamic lights max
Reflections: Screen-space (not ray-traced on mobile)
```

---

## Integration Points

### Garment Fitting

**Automatic Retargeting:**
- Models generated with standard UV mapping
- Garments auto-skin to model rig
- Collision detection for fabric simulation
- Size adjustments via morph targets

### E-Commerce Connection

**"Shop This Model" Feature:**
- Click model → view all worn garments
- Toggle model body type (see fit on different bodies)
- Save model avatar (for virtual try-on)
- Share model + outfit (social media)

---

**Next:** Review `../garment-display/fabric-simulation.md` for garment rendering.
