# Distribution Platform Specification
## Multi-Channel Experience Delivery

---

## Platform Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    DISTRIBUTION ECOSYSTEM                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PRIMARY PLATFORMS                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   Web GL    │ │   YouTube   │ │   Mobile    │               │
│  │   Experience│ │   Premiere  │ │   App       │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
│                                                                 │
│  IMMERSIVE PLATFORMS                                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   VR        │ │   AR        │ │   Mixed     │               │
│  │   Headset   │ │   Mobile    │ │   Reality   │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
│                                                                 │
│  SOCIAL PLATFORMS                                               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   Instagram │ │   TikTok    │ │   Twitter   │               │
│  │   Live      │ │   Live      │ │   Spaces    │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
│                                                                 │
│  BROADCAST PLATFORMS                                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   Twitch    │ │   Vimeo     │ │   Custom    │               │
│  │   Stream    │ │   OTT       │ │   CDN       │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 1. Web GL Experience

### Technical Stack

**Recommended Architecture:**
```javascript
// Frontend Stack
{
  "framework": "React 18+",
  "3dEngine": "Three.js + React Three Fiber",
  "stateManagement": "Zustand or Redux Toolkit",
  "styling": "Tailwind CSS + CSS Modules",
  "build": "Vite or Next.js",
  "hosting": "Vercel, Netlify, or AWS S3 + CloudFront"
}

// Backend Services
{
  "api": "Node.js + Express or Fastify",
  "realtime": "Socket.io or WebSocket",
  "database": "PostgreSQL + Redis",
  "mediaStorage": "AWS S3 or Cloudflare R2",
  "cdn": "Cloudflare or AWS CloudFront",
  "analytics": "Custom + Google Analytics 4"
}
```

### Performance Requirements

**Target Metrics:**
```
┌──────────────────────────────────────────────────────────────┐
│  METRIC              │  TARGET      │  MINIMUM    │  IDEAL   │
├──────────────────────────────────────────────────────────────┤
│  First Contentful    │  < 1.5s     │  < 2.5s     │  < 1.0s  │
│  Paint (FCP)         │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  Largest Contentful  │  < 2.5s     │  < 4.0s     │  < 2.0s  │
│  Paint (LCP)         │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  Time to Interactive │  < 3.5s     │  < 5.0s     │  < 3.0s  │
│  (TTI)               │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  First Input Delay   │  < 100ms    │  < 300ms    │  < 50ms  │
│  (FID)               │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  Cumulative Layout   │  < 0.1      │  < 0.25     │  < 0.05  │
│  Shift (CLS)         │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  3D Scene Load       │  < 3.0s     │  < 5.0s     │  < 2.0s  │
├──────────────────────────────────────────────────────────────┤
│  Frame Rate          │  60 FPS     │  30 FPS     │  60+ FPS │
│  (Desktop)           │             │             │          │
├──────────────────────────────────────────────────────────────┤
│  Frame Rate (Mobile) │  30 FPS     │  24 FPS     │  60 FPS  │
└──────────────────────────────────────────────────────────────┘
```

### Browser Support Matrix

```
✅ FULL SUPPORT:
   - Chrome 90+ (Desktop & Mobile)
   - Firefox 88+ (Desktop & Mobile)
   - Safari 15+ (Desktop & iOS)
   - Edge 90+ (Desktop)

⚠️  LIMITED SUPPORT:
   - Safari 13-14 (reduced quality, no WebXR)
   - Samsung Internet (testing required)
   - Opera (testing required)

❌ NOT SUPPORTED:
   - Internet Explorer (any version)
   - Chrome < 80
   - Firefox < 80
   - Safari < 13
```

### Embed Code

**Website Integration:**
```html
<!-- Standard Embed -->
<div id="fashion-show-embed" 
     data-show-id="US-SS26-RUNWAY"
     data-experience="full"
     data-theme="unicorn-stable"
     style="width: 100%; height: 600px;">
</div>

<script src="https://cdn.unicornstable.com/experience/v1/embed.js"></script>
<script>
  FashionShowEmbed.init({
    container: 'fashion-show-embed',
    showId: 'US-SS26-RUNWAY',
    experience: 'full', // 'full', 'lite', 'preview'
    theme: {
      primaryColor: '#FF6B9D',
      secondaryColor: '#C44569',
      fontFamily: 'Inter, sans-serif'
    },
    features: {
      chat: true,
      shopping: true,
      social: true,
      vr: true
    },
    onReady: () => console.log('Experience loaded'),
    onShowStart: () => console.log('Show started'),
    onShowEnd: () => console.log('Show ended'),
    onPurchase: (item) => console.log('Purchase:', item)
  });
</script>

<!-- Lite Embed (simplified) -->
<iframe 
  src="https://experience.unicornstable.com/embed/US-SS26-RUNWAY?mode=lite"
  width="100%"
  height="500"
  frameborder="0"
  allowfullscreen
  allow="autoplay; fullscreen">
</iframe>
```

---

## 2. YouTube Premiere

### Premiere Configuration

**Setup Requirements:**
```json
{
  "youtubePremiere": {
    "videoSpecs": {
      "resolution": "3840x2160 (4K UHD)",
      "frameRate": "30 or 60 fps",
      "codec": "H.264 or VP9",
      "bitrate": "45-60 Mbps (4K)",
      "audioCodec": "AAC",
      "audioBitrate": "384 kbps",
      "aspectRatio": "16:9",
      "duration": "12-25 minutes"
    },
    "premiereSettings": {
      "premiereType": "scheduled",
      "premiereDate": "2026-04-15T19:00:00Z",
      "countdownEnabled": true,
      "countdownDuration": 300,
      "chatEnabled": true,
      "chatModeration": "held for review",
      "membersOnly": false,
      "unlisted": false
    },
    "metadata": {
      "title": "The Unicorn Stable | Spring/Summer 2026",
      "description": "Full show description with timestamps, links, credits",
      "tags": ["fashion", "runway", "virtual fashion", "SS26"],
      "category": "Entertainment",
      "thumbnail": "custom_1280x720.jpg",
      "endScreen": "Subscribe + related videos",
      "cards": "Product links, website link"
    }
  }
}
```

### 360° Video Option

**Spatial Video Specs:**
```
Format: Equirectangular projection
Resolution: 4096x2048 (4K 360) or 8192x4096 (8K 360)
Frame Rate: 30 fps minimum
Codec: H.264 or VP9
Stereo: Monoscopic or Stereoscopic 3D
Spatial Audio: Ambisonics (first-order minimum)

Metadata for 360:
<rdf:Description rdf:about=""
  xmlns:GSpherical="http://ns.google.com/videos/1.0/spherical/">
  <GSpherical:SphericalVideoContentVersion rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1</GSpherical:SphericalVideoContentVersion>
  <GSpherical:SphericalVideoProjection rdf:datatype="http://www.w3.org/2001/XMLSchema#string">equirectangular</GSpherical:SphericalVideoProjection>
</rdf:Description>
```

### Live Streaming Setup

**OBS Configuration:**
```
Video Settings:
  - Base Canvas: 1920x1080
  - Output: 1920x1080
  - Downscale Filter: Lanczos
  - FPS: 60

Output Settings:
  - Rate Control: CBR
  - Bitrate: 6000 Kbps
  - Keyframe Interval: 2s
  - Profile: high
  - Preset: quality

Audio Settings:
  - Sample Rate: 48 kHz
  - Channels: Stereo
  - Bitrate: 320 Kbps
```

### YouTube Integration Features

```javascript
// YouTube IFrame API Integration
const player = new YT.Player('youtube-player', {
  height: '100%',
  width: '100%',
  videoId: 'VIDEO_ID',
  playerVars: {
    'autoplay': 0,
    'controls': 1,
    'modestbranding': 1,
    'rel': 0
  },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});

function onPlayerReady(event) {
  // Player ready, can control playback
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // Sync with experience (chat, reactions, shopping)
    syncExperienceWithVideo();
  }
}
```

---

## 3. Mobile App

### Native App Features

**iOS App (Swift/SwiftUI):**
```swift
// Core Features
struct FashionShowApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(ShowState())
                .environmentObject(ShoppingCart())
        }
    }
}

// 3D Rendering (SceneKit + RealityKit)
class RunwayRenderer: ObservableObject {
    @Published var scene: SCNScene
    
    func loadShow(showId: String) {
        // Load 3D assets
        // Configure lighting
        // Set up camera
    }
    
    func renderModel(_ model: Model) {
        // Render model with garment
    }
}

// Shopping Integration
class StoreIntegration {
    func addToCart(item: Product) async throws {
        // Shopify/WooCommerce API
    }
    
    func checkout() async throws {
        // Apple Pay integration
    }
}
```

**Android App (Kotlin/Jetpack Compose):**
```kotlin
// Core Features
@HiltAndroidApp
class FashionShowApp : Application()

@Composable
fun FashionShowExperience(showId: String) {
    val viewModel: ShowViewModel = viewModel()
    
    SceneView(
        scene = viewModel.scene,
        modifier = Modifier.fillMaxSize()
    )
    
    ShoppingOverlay(
        items = viewModel.products,
        onAddToCart = { item ->
            viewModel.addToCart(item)
        }
    )
}
```

### React Native Option

**Cross-Platform:**
```javascript
// App Structure
import { View, StyleSheet } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer, useRender } from 'three';

function FashionShowViewer({ showId }) {
  const onContextCreate = async (gl) => {
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    
    // Render loop
    const render = () => {
      renderer.render(scene, camera);
      gl.endFrameEXP();
      requestAnimationFrame(render);
    };
    render();
  };
  
  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}
```

### App Store Requirements

**iOS App Store:**
```
- Minimum iOS: 15.0
- Device support: iPhone, iPad
- App size: < 200 MB (initial download)
- Content rating: 4+
- In-app purchases: Enabled (VIP tickets, digital goods)
- Privacy: App Tracking Transparency required
```

**Google Play Store:**
```
- Minimum Android: API 26 (Android 8.0)
- Device support: Phone, Tablet
- App size: < 150 MB (APK), unlimited (Play Asset Delivery)
- Content rating: Everyone
- In-app purchases: Enabled
- Privacy: Data safety section required
```

---

## 4. VR/AR Platforms

### VR Headset Support

**Meta Quest (Standalone):**
```json
{
  "platform": "Meta Quest 2/3/Pro",
  "engine": "Unity 2022 LTS + Oculus Integration",
  "rendering": {
    "resolution": "1832x1920 per eye",
    "refreshRate": "72/90/120 Hz",
    "foveatedRendering": "Fixed or Eye-tracked (Quest Pro)"
  },
  "performance": {
    "targetFPS": 72,
    "cpuTime": "< 11ms",
    "gpuTime": "< 11ms",
    "memory": "< 2GB"
  },
  "controls": {
    "input": "Touch Controllers",
    "locomotion": "Teleport + Smooth",
    "interaction": "Hand tracking + Controller"
  },
  "distribution": "Meta Quest Store (App Lab or Official)"
}
```

**PC VR (SteamVR):**
```json
{
  "platform": "SteamVR (Valve Index, HTC Vive, etc.)",
  "engine": "Unity 2022 LTS or Unreal Engine 5",
  "rendering": {
    "resolution": "Per headset (up to 2880x1600 per eye)",
    "refreshRate": "90/120/144 Hz",
    "antiAliasing": "MSAA 4x or TAA"
  },
  "performance": {
    "targetFPS": 90,
    "gpu": "RTX 3060 or equivalent minimum",
    "cpu": "Intel i5-10600K / AMD Ryzen 5 3600"
  },
  "distribution": "Steam Store"
}
```

**Apple Vision Pro:**
```json
{
  "platform": "visionOS",
  "engine": "Unity 2022 LTS + PolySpatial or RealityKit",
  "rendering": {
    "resolution": "Micro-OLED displays",
    "passthrough": "Full color video passthrough",
    "eyeTracking": "Native support",
    "handTracking": "Native support"
  },
  "interaction": {
    "input": "Eye tracking + Hand gestures",
    "navigation": "Eye gaze + Pinch",
    "keyboard": "Virtual keyboard"
  },
  "distribution": "Apple Vision Pro App Store"
}
```

### AR Mobile Experience

**ARKit (iOS):**
```swift
import ARKit
import RealityKit

class FashionShowAR: NSObject, ARSessionDelegate {
    var arView: ARView!
    var anchor: AnchorEntity!
    
    func setupAR() {
        arView = ARView(frame: .zero)
        arView.session.delegate = self
        
        // Configure plane detection
        let config = ARWorldTrackingConfiguration()
        config.planeDetection = [.horizontal, .vertical]
        arView.session.run(config)
        
        // Add runway anchor
        anchor = AnchorEntity(plane: .horizontal)
        arView.scene.addAnchor(anchor)
        
        // Load 3D show content
        let showEntity = try? ModelEntity.load(named: "runway_show.usdz")
        anchor.addChild(showEntity!)
    }
    
    func session(_ session: ARSession, didAdd anchors: [ARAnchor]) {
        // Handle detected surfaces
    }
}
```

**ARCore (Android):**
```kotlin
class FashionShowARActivity : AppCompatActivity() {
    private lateinit var sceneView: SceneView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        sceneView = SceneView(this)
        setContentView(sceneView)
        
        sceneView.session.run(
            Config(this).apply {
                planeFindingMode = Config.PlaneFindingMode.HORIZONTAL_AND_VERTICAL
            }
        )
        
        sceneView.scene.addOnUpdateListener { frameTime ->
            // Update AR content
        }
    }
}
```

### WebXR (Browser-Based VR/AR)

```javascript
// WebXR Implementation
async function initVR() {
  if (!navigator.xr) {
    console.log('WebXR not supported');
    return;
  }
  
  const supported = await navigator.xr.isSessionSupported('immersive-vr');
  if (supported) {
    const session = await navigator.xr.requestSession('immersive-vr', {
      optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking']
    });
    
    renderer.setAnimationLoop(onXRFrame);
  }
}

function onXRFrame(time, frame) {
  const session = frame.session;
  const referenceSpace = await session.requestReferenceSpace('local');
  const pose = frame.getViewerPose(referenceSpace);
  
  // Render for each eye
  for (const view of pose.views) {
    renderView(view);
  }
}
```

---

## 5. Social Media Integration

### Instagram Live

**Setup:**
```
Platform: Instagram Live
Max Duration: 4 hours
Quality: Up to 1080p
Orientation: Vertical (9:16) or Horizontal (16:9)
Features: Live comments, reactions, viewer count
Integration: Link in bio for shopping
```

### TikTok Live

**Setup:**
```
Platform: TikTok Live
Requirements: 1,000+ followers for live access
Quality: Up to 1080p
Features: Live comments, gifts, reactions
Integration: TikTok Shop integration
```

### Twitch Stream

**Setup:**
```json
{
  "platform": "Twitch",
  "category": "Fashion & Beauty",
  "resolution": "1920x1080",
  "fps": 60,
  "bitrate": "6000 Kbps",
  "features": [
    "Live chat",
    "Channel points",
    "Subscriber emotes",
    "Raids",
    "Clips"
  ],
  "monetization": [
    "Subscriptions",
    "Bits",
    "Ads",
    "Sponsorships"
  ]
}
```

---

## 6. CDN & Infrastructure

### Global Content Delivery

**Recommended CDN:**
```
Primary: Cloudflare
  - Edge locations: 275+ cities
  - Features: DDoS protection, WAF, caching
  - Video: Cloudflare Stream integration

Alternative: AWS CloudFront
  - Edge locations: 400+ locations
  - Features: Lambda@Edge, custom SSL
  - Video: Integration with MediaPackage

Video-Specific: Mux or Vimeo OTT
  - Adaptive bitrate streaming
  - Analytics built-in
  - DRM options
```

### Scaling Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRAFFIC SCALING PLAN                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXPECTED: < 1,000 concurrent viewers                           │
│  └─> Single server, standard CDN                                │
│  └─> Cost: ~$100-500/month                                      │
│                                                                 │
│  EXPECTED: 1,000-10,000 concurrent viewers                      │
│  └─> Load balanced servers (2-5 instances)                      │
│  └─> Redis for session management                               │
│  └─> CDN for static assets                                      │
│  └─> Cost: ~$500-2,000/month                                    │
│                                                                 │
│  EXPECTED: 10,000-100,000 concurrent viewers                    │
│  └─> Auto-scaling server cluster (5-20 instances)               │
│  └─> Multi-region deployment                                    │
│  └─> Dedicated video CDN                                        │
│  └─> Real-time message queue (Kafka/RabbitMQ)                   │
│  └─> Cost: ~$2,000-10,000/month                                 │
│                                                                 │
│  EXPECTED: 100,000+ concurrent viewers                          │
│  └─> Full enterprise architecture                               │
│  └─> Global load balancing                                      │
│  └─> Edge computing for real-time features                      │
│  └─> Dedicated infrastructure team                              │
│  └─> Cost: $10,000+/month                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

**Next:** Review `../marketing/campaign-framework.md` for marketing strategy.
