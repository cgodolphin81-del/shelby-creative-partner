# Garment Display Specification
## Dynamic Fabric Simulation & 360° Views

---

## Garment Digitization Pipeline

### Input Sources

```
┌─────────────────────────────────────────────────────────────┐
│                    GARMENT INPUT SOURCES                    │
├─────────────────┬─────────────────┬─────────────────────────┤
│   PHYSICAL      │   DIGITAL       │   HYBRID                │
│   Garments      │   Native 3D     │   Photo + AI            │
├─────────────────┼─────────────────┼─────────────────────────┤
│ • Flat lay photos│ • CLO3D exports │ • Single photo → 3D     │
│ • Mannequin shots│ • Marvelous     │ • Pattern files + AI    │
│ • On-model photos│   Designer      │ • Sketch → 3D           │
│ • 360° turntable │ • Browzwear     │ • Tech pack → 3D        │
│ • Video capture  │ • Optitex       │                         │
└─────────────────┴─────────────────┴─────────────────────────┘
```

---

## 3D Garment Creation Methods

### Method 1: Professional 3D Design Software Export

**Supported Formats:**
```
CLO3D → .zprj, .fbx, .obj
Marvelous Designer → .zprj, .fbx, .obj
Browzwear → .vstitcher, .fbx
Optitex → .pds, .fbx
```

**Export Settings:**
```json
{
  "format": "FBX",
  "version": "7.4",
  "geometry": {
    "triangulate": true,
    "smoothNormals": true,
    "tangentSpace": true
  },
  "materials": {
    "embedTextures": false,
    "texturePath": "./textures/",
    "format": "PNG"
  },
  "animation": {
    "includeAnimations": false,
    "bakeSimulation": true,
    "frameRate": 30
  },
  "scale": "centimeters",
  "upAxis": "Y"
}
```

**Texture Requirements:**
```
Diffuse/Albedo: 2048x2048 PNG (sRGB)
Normal Map: 2048x2048 PNG (linear, DX or GL)
Roughness: 1024x1024 PNG (grayscale, linear)
Metallic: 1024x1024 PNG (grayscale, linear)
Displacement: 1024x1024 PNG (grayscale, linear)
AO: 1024x1024 PNG (grayscale, sRGB)
```

---

### Method 2: Photogrammetry (Physical Garments)

**Capture Setup:**
```
Camera: DSLR or mirrorless (24MP+)
Lens: 50mm prime (minimal distortion)
Lighting: 3-point softbox setup
Turntable: Motorized, 360° rotation
Background: Seamless white or green

Capture Pattern:
  - 24 photos around horizontal (every 15°)
  - 3 vertical angles (eye level, +30°, -30°)
  - Total: 72 photos per garment
  - Additional: Detail shots (buttons, seams, texture)
```

**Processing Pipeline:**
```bash
# Photogrammetry workflow
1. Import photos → RealityCapture / Metashape
2. Align images → Generate point cloud
3. Create mesh → Dense cloud → Mesh
4. UV unwrap → Automatic or manual
5. Texture bake → From photos
6. Retopology → Reduce polycount
7. Export → GLB/FBX for runtime
```

**Output Quality:**
```
High fidelity: 50,000-100,000 tris (hero pieces)
Standard: 20,000-40,000 tris (main collection)
Optimized: 5,000-15,000 tris (mobile/VR)
```

---

### Method 3: AI-Assisted Generation (Sketch/Photo to 3D)

**Input Options:**
```
Option A: Technical Flat Sketch
  - Upload vector or raster sketch
  - AI interprets garment type
  - Generates 3D base mesh
  - Artist refines details

Option B: Single Photo
  - Upload garment photo
  - AI estimates depth + structure
  - Generates approximate 3D model
  - Artist corrects geometry

Option C: Text Description + References
  - Describe garment in detail
  - Provide mood board images
  - AI generates concept model
  - Artist finalizes for production
```

**AI Tools Integration:**
```python
# Example AI garment generation pipeline
def generate_garment_3d(input_type, input_data):
    if input_type == "sketch":
        base_mesh = ai_sketch_to_mesh(input_data.image)
        semantics = ai_garment_segmentation(input_data.image)
        
    elif input_type == "photo":
        depth_map = ai_monocular_depth(input_data.image)
        base_mesh = ai_depth_to_mesh(depth_map)
        texture = ai_texture_enhancement(input_data.image)
        
    elif input_type == "text":
        base_mesh = ai_text_to_3d(input_data.description)
        texture = ai_generate_texture(input_data.description)
    
    # Refine and optimize
    refined = ai_mesh_refinement(base_mesh)
    optimized = optimize_for_realtime(refined)
    
    return {
        "mesh": optimized,
        "uv_maps": generate_uvs(optimized),
        "materials": assign_materials(optimized, input_data),
        "confidence": ai_confidence_score()
    }
```

---

## Fabric Simulation System

### Physics Engine

**Recommended:** NVIDIA PhysX / Unity Cloth / Three.js Cloth Simulation

**Simulation Parameters:**
```json
{
  "fabricProperties": {
    "silk": {
      "mass": 0.05,
      "stiffness": 0.3,
      "damping": 0.15,
      "friction": 0.2,
      "stretchResistance": 0.1,
      "bendResistance": 0.05,
      "thickness": 0.001
    },
    "cotton": {
      "mass": 0.15,
      "stiffness": 0.5,
      "damping": 0.2,
      "friction": 0.4,
      "stretchResistance": 0.3,
      "bendResistance": 0.15,
      "thickness": 0.003
    },
    "denim": {
      "mass": 0.35,
      "stiffness": 0.8,
      "damping": 0.25,
      "friction": 0.5,
      "stretchResistance": 0.6,
      "bendResistance": 0.4,
      "thickness": 0.006
    },
    "wool": {
      "mass": 0.25,
      "stiffness": 0.6,
      "damping": 0.3,
      "friction": 0.45,
      "stretchResistance": 0.4,
      "bendResistance": 0.25,
      "thickness": 0.004
    },
    "leather": {
      "mass": 0.4,
      "stiffness": 0.9,
      "damping": 0.2,
      "friction": 0.3,
      "stretchResistance": 0.8,
      "bendResistance": 0.5,
      "thickness": 0.008
    }
  }
}
```

### Real-Time Simulation

**Update Loop:**
```javascript
// Cloth simulation update (per frame)
function updateClothSimulation(deltaTime) {
  for (const garment of activeGarments) {
    // Apply forces
    applyGravity(garment, deltaTime);
    applyWind(garment, windVector, deltaTime);
    applyCollision(garment, modelBody, deltaTime);
    
    // Solve constraints
    solveStretchConstraints(garment, iterations: 3);
    solveBendConstraints(garment, iterations: 2);
    solveCollisionConstraints(garment, iterations: 3);
    
    // Integrate positions
    verletIntegration(garment, deltaTime);
    
    // Update visual mesh
    garment.mesh.vertices = garment.physicsVertices;
    garment.mesh.computeNormals();
  }
}
```

**Wind System:**
```json
{
  "windZones": [
    {
      "type": "ambient",
      "direction": [0.1, 0, 0.05],
      "strength": 0.3,
      "turbulence": 0.1,
      "frequency": 0.5
    },
    {
      "type": "directional",
      "trigger": "model_turn",
      "direction": "model_forward",
      "strength": 0.8,
      "duration": 1.5
    },
    {
      "type": "dramatic",
      "trigger": "pose_hold",
      "direction": [0, 0, 1],
      "strength": 1.2,
      "duration": 2.0,
      "garments": ["dress", "coat", "scarf"]
    }
  ]
}
```

---

## 360° View System

### Camera Orbit Controls

**Implementation:**
```javascript
class GarmentViewer360 {
  constructor(garmentMesh, container) {
    this.mesh = garmentMesh;
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.radius = 2.5; // Distance from garment
    this.theta = 0; // Horizontal angle
    this.phi = 90; // Vertical angle (90 = eye level)
    
    this.controls = {
      rotate: true,
      zoom: true,
      autoRotate: false,
      autoRotateSpeed: 2.0,
      minZoom: 1.5,
      maxZoom: 5.0
    };
  }
  
  update() {
    // Convert spherical to Cartesian
    this.camera.position.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.position.y = this.radius * Math.cos(this.phi);
    this.camera.position.z = this.radius * Math.sin(this.phi) * Math.sin(this.theta);
    
    this.camera.lookAt(this.mesh.position);
  }
  
  // User interaction handlers
  onRotate(dx, dy) {
    this.theta -= dx * 0.01;
    this.phi = Math.max(10, Math.min(170, this.phi - dy * 0.01));
  }
  
  onZoom(delta) {
    this.radius = Math.max(
      this.controls.minZoom,
      Math.min(this.controls.maxZoom, this.radius + delta)
    );
  }
}
```

### Preset View Angles

```json
{
  "viewPresets": [
    {
      "name": "Front",
      "theta": 0,
      "phi": 90,
      "zoom": 2.5,
      "label": "Front view"
    },
    {
      "name": "Back",
      "theta": 180,
      "phi": 90,
      "zoom": 2.5,
      "label": "Back view"
    },
    {
      "name": "Left Side",
      "theta": 90,
      "phi": 90,
      "zoom": 2.5,
      "label": "Left profile"
    },
    {
      "name": "Right Side",
      "theta": 270,
      "phi": 90,
      "zoom": 2.5,
      "label": "Right profile"
    },
    {
      "name": "Detail - Fabric",
      "theta": 45,
      "phi": 80,
      "zoom": 4.5,
      "label": "Fabric texture close-up"
    },
    {
      "name": "Detail - Construction",
      "theta": 135,
      "phi": 70,
      "zoom": 4.0,
      "label": "Seam and construction detail"
    },
    {
      "name": "Full Length",
      "theta": 0,
      "phi": 60,
      "zoom": 3.5,
      "label": "Full garment view"
    },
    {
      "name": "Overhead",
      "theta": 0,
      "phi": 10,
      "zoom": 3.0,
      "label": "Top-down view"
    }
  ]
}
```

### Auto-Rotation Showcase

**Showcase Mode:**
```javascript
function startShowcaseMode(viewer) {
  viewer.controls.autoRotate = true;
  viewer.controls.autoRotateSpeed = 1.5;
  
  // Smooth transitions between key angles
  const keyframes = [
    { theta: 0, phi: 90, zoom: 2.5, hold: 3000 },
    { theta: 45, phi: 85, zoom: 3.0, hold: 2000 },
    { theta: 90, phi: 90, zoom: 2.5, hold: 3000 },
    { theta: 135, phi: 80, zoom: 3.5, hold: 2000 },
    { theta: 180, phi: 90, zoom: 2.5, hold: 3000 },
    { theta: 270, phi: 90, zoom: 2.5, hold: 3000 },
    { theta: 0, phi: 90, zoom: 2.5, hold: 3000 }
  ];
  
  animateThroughKeyframes(viewer, keyframes);
}
```

---

## Garment Detail System

### Interactive Hotspots

**Hotspot Types:**
```json
{
  "hotspots": [
    {
      "id": "button_detail",
      "type": "clickable",
      "position": { "x": 0.15, "y": 0.6, "z": 0.02 },
      "triggerRadius": 0.05,
      "action": "zoom_and_highlight",
      "info": {
        "title": "Custom Horn Buttons",
        "description": "Hand-carved from sustainable horn, each button is unique.",
        "closeUp": "button_texture_4k.jpg"
      }
    },
    {
      "id": "seam_construction",
      "type": "hover",
      "position": { "x": -0.2, "y": 0.4, "z": 0.0 },
      "triggerRadius": 0.08,
      "action": "wireframe_overlay",
      "info": {
        "title": "French Seams",
        "description": "Double-stitched French seams for durability and clean finish.",
        "diagram": "french_seam_diagram.svg"
      }
    },
    {
      "id": "fabric_texture",
      "type": "hover",
      "position": { "x": 0.0, "y": 0.5, "z": 0.03 },
      "triggerRadius": 0.15,
      "action": "texture_magnify",
      "info": {
        "title": "Italian Wool Blend",
        "description": "95% merino wool, 5% elastane. Woven in Biella, Italy.",
        "swatch": "fabric_swatch_scan.jpg",
        "properties": {
          "weight": "280 GSM",
          "stretch": "2-way",
          "care": "Dry clean only"
        }
      }
    },
    {
      "id": "lining",
      "type": "clickable",
      "position": { "x": 0.0, "y": 0.3, "z": -0.02 },
      "triggerRadius": 0.1,
      "action": "toggle_transparency",
      "info": {
        "title": "Silk Lining",
        "description": "100% mulberry silk lining for comfort and luxury.",
        "closeUp": "silk_lining_detail.jpg"
      }
    }
  ]
}
```

### X-Ray / Transparency Mode

**Layer Visualization:**
```javascript
function enableXRayMode(garment) {
  garment.material.transparent = true;
  garment.material.opacity = 0.5;
  garment.material.side = THREE.DoubleSide;
  
  // Highlight inner layers
  garment.lining.visible = true;
  garment.lining.material.emissive = new THREE.Color(0x444444);
  
  // Show construction elements
  garment.seams.visible = true;
  garment.interfacing.visible = true;
}

function disableXRayMode(garment) {
  garment.material.opacity = 1.0;
  garment.lining.visible = false;
  garment.seams.visible = false;
  garment.interfacing.visible = false;
}
```

---

## The Unicorn Stable Integration

### Brand-Specific Features

**Collection Tagging:**
```json
{
  "collection": "The Unicorn Stable",
  "season": "SS26",
  "garments": [
    {
      "id": "US-SS26-001",
      "name": "Ethereal Blazer",
      "category": "outerwear",
      "price": 895,
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Ivory", "Blush", "Midnight"],
      "materials": ["Organic cotton blend", "Recycled polyester lining"],
      "sustainability": {
        "carbonFootprint": "2.3 kg CO2e",
        "waterUsage": "45 L",
        "recycledContent": "40%"
      },
      "story": "Inspired by dawn light on misty fields...",
      "styling": ["Pair with high-waist trousers", "Layer over slip dress"]
    }
  ]
}
```

### Virtual Try-On Integration

**"Try This Look" Feature:**
```javascript
async function tryOnGarment(garmentId, userAvatar) {
  // Load garment
  const garment = await loadGarment(garmentId);
  
  // Auto-size to avatar
  const sizeRecommendation = recommendSize(garment, userAvatar.measurements);
  garment.scaleToSize(sizeRecommendation);
  
  // Fit to avatar
  const fitted = fitGarmentToAvatar(garment, userAvatar);
  
  // Enable simulation
  fitted.enablePhysics();
  
  // Render in viewer
  viewer.load(fitted);
  
  return {
    garment: fitted,
    size: sizeRecommendation,
    fitScore: calculateFitScore(fitted, userAvatar)
  };
}
```

---

## Performance Optimization

### LOD (Level of Detail) System

```json
{
  "LODLevels": [
    {
      "level": 0,
      "distance": "0-2m",
      "triangles": 25000,
      "textures": "2048x2048",
      "simulation": "full physics",
      "use": "Close inspection, detail view"
    },
    {
      "level": 1,
      "distance": "2-5m",
      "triangles": 10000,
      "textures": "1024x1024",
      "simulation": "simplified physics",
      "use": "Runway walk, standard viewing"
    },
    {
      "level": 2,
      "distance": "5m+",
      "triangles": 3000,
      "textures": "512x512",
      "simulation": "vertex animation only",
      "use": "Distant shots, crowd scenes"
    }
  ]
}
```

### Texture Compression

```
Desktop: BC7 compression (RGB), BC5 (normal maps)
Mobile: ASTC 4x4 or ETC2
VR: BC7 high quality
Web: Basis Universal (cross-platform)

Target sizes:
- Diffuse: <1MB per 2K texture
- Normal: <500KB per 2K texture
- Packed (ORM): <500KB per 1K texture
```

---

**Next:** Review `../music-atmosphere/audio-design.md` for soundtrack specification.
