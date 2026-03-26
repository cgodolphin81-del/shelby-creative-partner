# Interactive Elements Specification
## Viewer Choices, Zoom Details & Purchase Integration

---

## Interactive Feature Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERACTIVE FEATURE TIERS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TIER 1: FREE (All Viewers)                                     │
│  • Camera angle selection                                       │
│  • Basic zoom (2x)                                              │
│  • Chat participation                                           │
│  • Reaction emojis                                              │
│  • Show schedule viewing                                        │
│                                                                 │
│  TIER 2: REGISTERED (Free Account)                              │
│  • Advanced zoom (10x)                                          │
│  • 360° garment viewer                                          │
│  • Save favorites                                               │
│  • Share to social                                              │
│  • Size recommendation AI                                       │
│                                                                 │
│  TIER 3: VIP (Ticket Holders)                                   │
│  • Front row virtual seating                                    │
│  • Backstage access (live feed)                                 │
│  • Meet & greet (avatar interaction)                            │
│  • Early shopping access                                        │
│  • Exclusive content (designer commentary)                      │
│  • Limited edition NFTs                                         │
│                                                                 │
│  TIER 4: ULTRA VIP (Premium Ticket)                             │
│  • All VIP features                                             │
│  • 1:1 virtual styling consultation                             │
│  • Custom avatar creation                                       │
│  • Physical goodie bag (shipped)                                │
│  • Private post-show Q&A                                        │
│  • First access to pre-orders                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Camera Control System

### Viewer-Directed Experience

**Camera Modes:**
```json
{
  "cameraModes": [
    {
      "id": "DIRECTOR",
      "name": "Director's Cut",
      "description": "Professional multi-camera editing",
      "controls": "None (auto-directed)",
      "availability": "All tiers"
    },
    {
      "id": "FREEDOM",
      "name": "Free Look",
      "description": "Full camera control, explore the venue",
      "controls": "Mouse/touch drag, scroll zoom, WASD movement",
      "availability": "Registered+"
    },
    {
      "id": "FRONT_ROW",
      "name": "Front Row Seat",
      "description": "Fixed premium viewing angle",
      "controls": "Limited pan/tilt, zoom only",
      "availability": "VIP+"
    },
    {
      "id": "BACKSTAGE",
      "name": "Backstage Pass",
      "description": "Behind-the-scenes perspective",
      "controls": "Fixed angles, switch between cams",
      "availability": "VIP+"
    },
    {
      "id": "MODEL_CAM",
      "name": "Model POV",
      "description": "See the runway from model's perspective",
      "controls": "Auto-follow selected model",
      "availability": "Registered+"
    },
    {
      "id": "DETAIL",
      "name": "Detail Focus",
      "description": "Automatic close-ups on garment details",
      "controls": "Select detail hotspots",
      "availability": "All tiers"
    }
  ]
}
```

### Camera Control Implementation

```javascript
class InteractiveCamera {
  constructor(mode, userTier) {
    this.mode = mode;
    this.userTier = userTier;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.controls = this.initializeControls();
  }
  
  initializeControls() {
    switch(this.mode) {
      case 'FREEDOM':
        return new THREE.OrbitControls(this.camera);
      case 'FRONT_ROW':
        return new LimitedOrbitControls(this.camera, {
          minPolarAngle: 75 * Math.PI / 180,
          maxPolarAngle: 105 * Math.PI / 180,
          minAzimuthAngle: -30 * Math.PI / 180,
          maxAzimuthAngle: 30 * Math.PI / 180
        });
      case 'MODEL_CAM':
        return new FollowControls(this.camera, {
          target: 'activeModel',
          offset: { x: 0, y: 1.7, z: -0.5 },
          smoothness: 0.1
        });
      default:
        return null; // Auto-directed
    }
  }
  
  enableZoom(minZoom, maxZoom) {
    this.controls.minDistance = minZoom;
    this.controls.maxDistance = maxZoom;
  }
}

// Tier-based zoom limits
const zoomLimits = {
  'FREE': { min: 2, max: 2 },
  'REGISTERED': { min: 1.5, max: 10 },
  'VIP': { min: 1, max: 15 },
  'ULTRA_VIP': { min: 0.5, max: 20 }
};
```

---

## Zoom & Detail System

### Multi-Level Zoom

**Zoom Levels:**
```
Level 0: Full Runway View (1x)
  - See entire runway and multiple models
  - Context and choreography
  - Available: All tiers

Level 1: Model Full Body (2-3x)
  - Single model, head to toe
  - Overall silhouette and styling
  - Available: All tiers

Level 2: Garment Detail (5-7x)
  - Specific garment sections
  - Fabric texture visible
  - Available: Registered+

Level 3: Micro Detail (10-15x)
  - Stitching, buttons, hardware
  - Craftsmanship showcase
  - Available: VIP+

Level 4: Extreme Close-up (20x)
  - Fabric weave, material structure
  - Quality verification
  - Available: Ultra VIP+
```

### Smart Zoom Features

**Auto-Focus Tracking:**
```javascript
class SmartZoom {
  constructor(viewer) {
    this.viewer = viewer;
    this.autoFocusTargets = [
      'model_face',
      'garment_center',
      'detail_hotspot',
      'accessory'
    ];
  }
  
  onUserZoom(targetZoom) {
    // Smooth zoom with auto-focus
    this.smoothZoomTo(targetZoom);
    
    // Detect intent
    if (targetZoom > 5) {
      this.showDetailHotspots();
    }
    
    if (targetZoom > 10) {
      this.enableMicroDetailMode();
    }
  }
  
  showDetailHotspots() {
    // Highlight interactive garment areas
    const hotspots = this.viewer.currentGarment.hotspots;
    hotspots.forEach(hotspot => {
      hotspot.showCallout();
    });
  }
  
  async showGarmentInfo(hotspotId) {
    const info = await fetchGarmentDetail(hotspotId);
    this.viewer.showOverlay({
      type: 'garment_detail',
      title: info.title,
      description: info.description,
      materials: info.materials,
      care: info.careInstructions,
      price: info.price,
      sizes: info.availableSizes,
      cta: 'Add to Bag'
    });
  }
}
```

### Detail Hotspot System

**Hotspot Types:**
```json
{
  "hotspotTypes": [
    {
      "type": "FABRIC",
      "icon": "texture",
      "onClick": "show_fabric_composition",
      "info": {
        "materials": "95% Organic Cotton, 5% Elastane",
        "origin": "Woven in Portugal",
        "weight": "220 GSM",
        "care": "Machine wash cold, hang dry",
        "sustainability": "GOTS certified organic"
      }
    },
    {
      "type": "CONSTRUCTION",
      "icon": "seam",
      "onClick": "show_construction_detail",
      "info": {
        "technique": "French seams",
        "stitchCount": "12 stitches per inch",
        "reinforcement": "Bar-tacked stress points",
        "quality": "Luxury garment construction"
      }
    },
    {
      "type": "HARDWARE",
      "icon": "button",
      "onClick": "show_hardware_detail",
      "info": {
        "type": "Custom horn buttons",
        "origin": "Hand-carved in Italy",
        "finish": "Natural polish",
        "uniqueness": "Each button is one-of-a-kind"
      }
    },
    {
      "type": "DESIGN",
      "icon": "sketch",
      "onClick": "show_design_story",
      "info": {
        "inspiration": "Morning mist over English countryside",
        "designer": "Creative Director name",
        "sketch": "Original design sketch image",
        "evolution": "From concept to final piece"
      }
    },
    {
      "type": "STYLING",
      "icon": "hanger",
      "onClick": "show_styling_suggestions",
      "info": {
        "wearWith": ["High-waist trousers", "Slip skirt", "Denim"],
        "occasions": ["Office", "Brunch", "Evening out"],
        "seasons": ["Spring", "Summer", "Fall (layered)"],
        "completeTheLook": "See full outfit suggestions"
      }
    },
    {
      "type": "SHOP",
      "icon": "bag",
      "onClick": "open_product_page",
      "info": {
        "price": "$895",
        "sizes": "XS-XL (see size guide)",
        "colors": "3 available",
        "availability": "In stock",
        "shipping": "Free shipping & returns"
      }
    }
  ]
}
```

---

## Purchase Integration

### Seamless Shopping Flow

**In-Experience Purchase:**
```
┌─────────────────────────────────────────────────────────────────┐
│                    PURCHASE USER JOURNEY                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. DISCOVERY                                                   │
│     Viewer sees garment on runway                              │
│     ↓                                                         │
│  2. ENGAGEMENT                                                  │
│     Click/tap garment or hotspot                              │
│     ↓                                                         │
│  3. EXPLORATION                                                 │
│     View 360°, zoom details, read info                        │
│     ↓                                                         │
│  4. CONSIDERATION                                               │
│     Check sizes, colors, styling suggestions                  │
│     ↓                                                         │
│  5. DECISION                                                    │
│     Select size/color, add to bag                             │
│     ↓                                                         │
│  6. CHECKOUT                                                    │
│     In-experience checkout or redirect                        │
│     ↓                                                         │
│  7. CONFIRMATION                                                │
│     Order confirmation + tracking info                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Product Card Overlay

**Quick View Component:**
```javascript
class ProductCardOverlay {
  constructor(garmentData) {
    this.data = garmentData;
    this.element = this.createOverlay();
  }
  
  createOverlay() {
    return `
      <div class="product-card-overlay">
        <div class="product-media">
          <img src="${this.data.mainImage}" alt="${this.data.name}">
          <button class="view-360">360° View</button>
        </div>
        
        <div class="product-info">
          <h3>${this.data.name}</h3>
          <p class="designer">The Unicorn Stable</p>
          <p class="price">$${this.data.price}</p>
          
          <div class="size-selector">
            <label>Size:</label>
            <div class="size-buttons">
              ${this.data.sizes.map(size => `
                <button class="size-btn ${size.available ? '' : 'sold-out'}">
                  ${size.label}
                </button>
              `).join('')}
            </div>
            <button class="size-guide">Size Guide</button>
          </div>
          
          <div class="color-selector">
            <label>Color:</label>
            <div class="color-swatches">
              ${this.data.colors.map(color => `
                <button class="color-swatch" 
                        style="background: ${color.hex}"
                        data-color="${color.name}">
                </button>
              `).join('')}
            </div>
          </div>
          
          <div class="actions">
            <button class="add-to-bag" ${!this.data.inStock ? 'disabled' : ''}>
              ${this.data.inStock ? 'Add to Bag' : 'Notify When Available'}
            </button>
            <button class="add-to-wishlist">♡</button>
          </div>
          
          <div class="quick-details">
            <details>
              <summary>Materials & Care</summary>
              <p>${this.data.materials}</p>
              <p>${this.data.careInstructions}</p>
            </details>
            <details>
              <summary>Shipping & Returns</summary>
              <p>Free shipping on orders over $500</p>
              <p>30-day return policy</p>
            </details>
            <details>
              <summary>Sustainability</summary>
              <p>${this.data.sustainabilityInfo}</p>
            </details>
          </div>
        </div>
        
        <button class="close-overlay">×</button>
      </div>
    `;
  }
}
```

### Shopping Cart Integration

**Persistent Cart:**
```javascript
class ExperienceCart {
  constructor() {
    this.items = this.loadCart();
    this.cartVisible = false;
  }
  
  addItem(garment, size, color) {
    const item = {
      id: garment.id,
      name: garment.name,
      price: garment.price,
      size,
      color,
      image: garment.image,
      addedAt: Date.now()
    };
    
    this.items.push(item);
    this.saveCart();
    this.showAddConfirmation(item);
    this.updateCartBadge();
  }
  
  showAddConfirmation(item) {
    // Non-intrusive notification
    this.showToast({
      message: `${item.name} added to bag`,
      action: 'View Bag',
      onAction: () => this.openCart(),
      duration: 3000
    });
  }
  
  openCart() {
    this.cartVisible = true;
    // Show slide-out cart panel
  }
  
  checkout() {
    // Option 1: In-experience checkout
    if (config.useIntegratedCheckout) {
      this.openIntegratedCheckout();
    }
    // Option 2: Redirect to e-commerce site
    else {
      this.redirectToCheckout(this.items);
    }
  }
}
```

### E-Commerce Platform Integration

**Supported Platforms:**
```json
{
  "integrations": [
    {
      "platform": "Shopify",
      "method": "Storefront API",
      "features": [
        "Product sync",
        "Inventory check",
        "Cart management",
        "Checkout redirect"
      ],
      "setup": "API key + Storefront access token"
    },
    {
      "platform": "WooCommerce",
      "method": "REST API",
      "features": [
        "Product sync",
        "Real-time inventory",
        "Cart integration",
        "Order creation"
      ],
      "setup": "Consumer key + Consumer secret"
    },
    {
      "platform": "Custom",
      "method": "GraphQL/REST",
      "features": [
        "Custom implementation",
        "Full control",
        "Tailored experience"
      ],
      "setup": "API documentation required"
    }
  ]
}
```

### Size Recommendation AI

**Smart Sizing:**
```javascript
class SizeRecommendation {
  constructor(userProfile) {
    this.user = userProfile; // height, weight, measurements, fit preferences
  }
  
  recommendSize(garment) {
    const measurements = this.user.measurements;
    const garmentSpecs = garment.sizeChart;
    const fitPreference = this.user.fitPreference; // 'tight', 'regular', 'loose'
    
    // Calculate best match
    const scores = garmentSpecs.sizes.map(size => {
      const bustScore = this.calculateFitScore(
        measurements.bust,
        size.bust,
        fitPreference
      );
      const waistScore = this.calculateFitScore(
        measurements.waist,
        size.waist,
        fitPreference
      );
      const hipScore = this.calculateFitScore(
        measurements.hips,
        size.hips,
        fitPreference
      );
      
      return {
        size: size.label,
        score: (bustScore + waistScore + hipScore) / 3,
        details: { bustScore, waistScore, hipScore }
      };
    });
    
    // Return best match
    const best = scores.reduce((max, s) => s.score > max.score ? s : max);
    
    return {
      recommendedSize: best.size,
      confidence: best.score,
      explanation: this.generateExplanation(best),
      alternative: scores[1]?.size // Second best option
    };
  }
  
  generateExplanation(bestMatch) {
    if (bestMatch.score > 0.9) {
      return "Perfect match for your measurements!";
    } else if (bestMatch.score > 0.7) {
      return "Great fit based on your profile.";
    } else {
      return "Consider checking the size guide for details.";
    }
  }
}
```

---

## Social Features

### Live Chat System

**Chat Tiers:**
```json
{
  "chatFeatures": {
    "FREE": {
      "enabled": true,
      "rateLimit": "1 message per 10 seconds",
      "moderation": "AI + human",
      "features": ["text", "emojis"]
    },
    "REGISTERED": {
      "enabled": true,
      "rateLimit": "1 message per 5 seconds",
      "moderation": "AI + human",
      "features": ["text", "emojis", "images"]
    },
    "VIP": {
      "enabled": true,
      "rateLimit": "none",
      "moderation": "AI only",
      "features": ["text", "emojis", "images", "voice notes"],
      "priority": "highlighted messages"
    }
  }
}
```

### Reaction System

**Real-Time Reactions:**
```javascript
class ReactionSystem {
  constructor() {
    this.reactions = [
      { emoji: '🔥', label: 'Fire' },
      { emoji: '😍', label: 'Love' },
      { emoji: '👏', label: 'Applause' },
      { emoji: '✨', label: 'Stunning' },
      { emoji: '💖', label: 'Want' },
      { emoji: '🙌', label: 'Yes' }
    ];
  }
  
  sendReaction(emoji, targetId) {
    // Send to server
    websocket.send({
      type: 'REACTION',
      emoji,
      targetId, // garment ID, model ID, or 'global'
      timestamp: Date.now()
    });
    
    // Show local animation
    this.showReactionAnimation(emoji, targetId);
  }
  
  showReactionAnimation(emoji, targetId) {
    // Floating emoji animation
    const element = document.createElement('div');
    element.className = 'floating-reaction';
    element.textContent = emoji;
    element.style.left = this.getRandomPosition();
    element.style.animationDuration = '2s';
    
    document.getElementById(targetId).appendChild(element);
    
    // Clean up after animation
    setTimeout(() => element.remove(), 2000);
  }
}
```

### Social Sharing

**Share Options:**
```json
{
  "shareTargets": [
    {
      "platform": "Instagram Stories",
      "format": "1080x1920 vertical video",
      "content": "15-second clip with product tag",
      "deepLink": "Opens product in app"
    },
    {
      "platform": "TikTok",
      "format": "1080x1920 vertical video",
      "content": "Show highlight + trending audio option",
      "deepLink": "Product link in bio"
    },
    {
      "platform": "Twitter/X",
      "format": "GIF or short video",
      "content": "Look reveal + commentary",
      "deepLink": "Direct product URL"
    },
    {
      "platform": "Pinterest",
      "format": "High-res image",
      "content": "Lookbook-style pin",
      "deepLink": "Product page"
    },
    {
      "platform": "WhatsApp",
      "format": "Image or video",
      "content": "Share with friends",
      "deepLink": "Product URL"
    }
  ]
}
```

---

## Gamification Elements

### Collection Quest

**Engagement Mechanics:**
```json
{
  "quests": [
    {
      "id": "COMPLETE_VIEWER",
      "name": "Dedicated Fan",
      "description": "Watch the entire show without leaving",
      "reward": "Exclusive wallpaper pack",
      "xp": 100
    },
    {
      "id": "DETAIL_EXPLORER",
      "name": "Detail Detective",
      "description": "Zoom in on 10 garment details",
      "reward": "10% discount code",
      "xp": 150
    },
    {
      "id": "SOCIAL_BUTTERFLY",
      "name": "Social Butterfly",
      "description": "Share 3 looks to social media",
      "reward": "Early access to next show",
      "xp": 200
    },
    {
      "id": "SHOPPING_PRO",
      "name": "Style Setter",
      "description": "Add 5 items to your bag",
      "reward": "Free shipping on next order",
      "xp": 250
    },
    {
      "id": "VIP_ENGAGEMENT",
      "name": "Front Row Regular",
      "description": "Attend 3 VIP shows",
      "reward": "VIP upgrade for next season",
      "xp": 500
    }
  ]
}
```

### Leaderboard (Optional)

```javascript
class ShowLeaderboard {
  constructor() {
    this.categories = [
      'Most Reactions Given',
      'Most Shares',
      'Top Spender',
      'Longest Watch Time',
      'Best Dressed Avatar'
    ];
  }
  
  updateLeaderboard(category, userId, score) {
    // Update real-time leaderboard
    websocket.send({
      type: 'LEADERBOARD_UPDATE',
      category,
      userId,
      score
    });
  }
  
  showLeaderboard(category) {
    // Display top 10 for category
    return fetch(`/api/leaderboard/${category}?limit=10`);
  }
}
```

---

## Accessibility Features

### Inclusive Design

```json
{
  "accessibility": {
    "keyboardNavigation": {
      "enabled": true,
      "shortcuts": {
        "Space": "Play/Pause",
        "F": "Fullscreen",
        "M": "Mute",
        "C": "Toggle camera mode",
        "Z": "Zoom in",
        "X": "Zoom out",
        "H": "Show hotspots",
        "S": "Open shopping"
      }
    },
    "screenReader": {
      "enabled": true,
      "ariaLabels": "All interactive elements",
      "liveRegions": "Show updates, chat messages",
      "skipLinks": "Skip to content, skip to navigation"
    },
    "reducedMotion": {
      "enabled": true,
      "respectsSystemPreference": true,
      "alternatives": "Static transitions, no auto-rotation"
    },
    "colorContrast": {
      "wcagLevel": "AA",
      "minimumRatio": "4.5:1",
      "colorblindModes": ["Deuteranopia", "Protanopia", "Tritanopia"]
    },
    "captions": {
      "enabled": true,
      "languages": ["en", "es", "fr", "de", "it", "ja", "zh"],
      "customization": "Size, color, background"
    },
    "audioDescription": {
      "enabled": true,
      "track": "Descriptive audio for visually impaired",
      "content": "Garment details, model movements, scene changes"
    }
  }
}
```

---

**Next:** Review `../distribution/platform-specs.md` for distribution channels.
