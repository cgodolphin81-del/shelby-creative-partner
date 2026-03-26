# ComicForge AI - UI/UX Design Specification

## Design System

### Brand Identity

**Logo:** Stylized "CF" monogram with comic panel border  
**Tagline:** "Create Professional Comics with AI-Powered Tools"  
**Voice:** Empowering, creative, professional yet accessible

### Color Palette

#### Primary Colors
```
Cosmic Blue:     #2563EB  (Primary action, links)
Stellar Purple:  #7C3AED  (Secondary, AI features)
Nebula Pink:     #EC4899  (Accents, highlights)
```

#### Neutral Colors
```
Void Black:      #0F172A  (Primary text, dark backgrounds)
Space Gray:      #64748B  (Secondary text)
Starlight:       #F8FAFC  (Backgrounds)
Pure White:      #FFFFFF  (Cards, surfaces)
```

#### Semantic Colors
```
Success:         #10B981  (Completed, approved)
Warning:         #F59E0B  (Pending, caution)
Error:           #EF4444  (Failed, errors)
Info:            #3B82F6  (Information, tips)
```

#### Art Style Preview Colors
```
Manga:           #FF6B6B  (Warm red accent)
American:        #4ECDC4  (Bold teal)
European:        #95E1D3  (Soft mint)
Webtoon:         #FFE66D  (Bright yellow)
Indie:           #A8E6CF  (Muted green)
```

### Typography

#### Font Families
```
Headings:        'Bangers', cursive (Comic display)
Body:            'Inter', sans-serif (UI text)
Dialogue:        'Comic Sans MS', 'Comic Neue', cursive (In-app preview)
Code:            'JetBrains Mono', monospace (Technical)
```

#### Type Scale
```
Display XL:      64px / 4rem   (Hero sections)
Display L:       48px / 3rem   (Page titles)
Heading 1:       36px / 2.25rem
Heading 2:       30px / 1.875rem
Heading 3:       24px / 1.5rem
Heading 4:       20px / 1.25rem
Body L:          18px / 1.125rem
Body:            16px / 1rem
Body S:          14px / 0.875rem
Caption:         12px / 0.75rem
```

### Spacing System

```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
```

### Border Radius

```
none:  0px
sm:    4px
md:    8px
lg:    12px
xl:    16px
2xl:   24px
full:  9999px
```

### Shadows

```
sm:    0 1px 2px rgba(0,0,0,0.05)
md:    0 4px 6px rgba(0,0,0,0.1)
lg:    0 10px 15px rgba(0,0,0,0.1)
xl:    0 20px 25px rgba(0,0,0,0.15)
glow:  0 0 20px rgba(37,99,235,0.5)  (AI features)
```

---

## Core Layouts

### 1. Dashboard Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ☰  ComicForge AI                    [+ New]    👤 Profile  │
├─────────┬───────────────────────────────────────────────────┤
│         │                                                   │
│  📊     │  Welcome back, ComicCreator!                      │
│  Home   │                                                   │
│         │  ┌─────────────┐  ┌─────────────┐  ┌───────────┐ │
│  📁     │  │   Projects  │  │  Characters │  │   Pages   │ │
│  Projects│  │     12      │  │     23      │  │    147    │ │
│         │  └─────────────┘  └─────────────┘  └───────────┘ │
│  🎨     │                                                   │
│  Characters│  Recent Projects                               │
│         │  ┌─────────────────────────────────────────────┐ │
│  ✍️     │  │ ┌─────┐  My Awesome Comic                   │ │
│  Stories │  │ │IMG  │  Last edited 2 hours ago           │ │
│         │  │ └─────┘  12 pages • In Progress             │ │
│  🤝     │  └─────────────────────────────────────────────┘ │
│  Collaborate│ ┌─────────────────────────────────────────────┐ │
│         │  │ ┌─────┐  Urban Fantasy                        │ │
│  📤     │  │ │IMG  │  Last edited yesterday                │ │
│  Publish │  │ └─────┘  8 pages • Draft                     │ │
│         │  └─────────────────────────────────────────────┘ │
│  ⚙️     │                                                   │
│  Settings│  Quick Actions                                   │
│         │  [Create Character] [Generate Script] [Export]   │
│         │                                                   │
└─────────┴───────────────────────────────────────────────────┘
```

### 2. Page Builder Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  ← Back  │  My Awesome Comic - Page 13          [Save] [Export] ⋮   │
├──────────┼──────────────────────────────────────────────────────────┤
│          │                                                           │
│  TOOLS   │    ┌─────────────────────────────────────────────────┐   │
│          │    │                                                 │   │
│  ┌────┐  │    │                                                 │   │
│  │ ✏️ │  │    │              CANVAS AREA                        │   │
│  │Select│ │    │                                                 │   │
│  └────┘  │    │         (WebGL-powered comic editor)            │   │
│          │    │                                                 │   │
│  ┌────┐  │    │                                                 │   │
│  │ 🖌️ │  │    │                                                 │   │
│  │Brush │ │    │                                                 │   │
│  └────┘  │    │                                                 │   │
│          │    │                                                 │   │
│  ┌────┐  │    └─────────────────────────────────────────────────┘   │
│  │ 💬 │  │                                                           │
│  │Text  │ │  ┌─────────────────────────────────────────────────┐   │
│  └────┘  │  │  LAYERS                    │  PROPERTIES         │   │
│          │  │  ┌──────────────────────┐  │  ┌───────────────┐  │   │
│  ┌────┐  │  │  │ 👁️ Background        │  │  │ Stroke: 2px   │  │   │
│  │ 🎭 │  │  │  │ 👁️ Panel 1           │  │  │ Fill: #000    │  │   │
│  │Panel │ │  │  │ 👁️ Character        │  │  │ Opacity: 100% │  │   │
│  └────┘  │  │  │ 👁️ Speech Bubble    │  │  │               │  │   │
│          │  │  │ 👁️ SFX              │  │  │               │  │   │
│  ┌────┐  │  │  └──────────────────────┘  │  └───────────────┘  │   │
│  │ 🖼️ │  │  └─────────────────────────────────────────────────┘   │
│  │Asset │ │                                                         │
│  └────┘  │                                                         │
│          │                                                         │
└──────────┴─────────────────────────────────────────────────────────┘
```

### 3. Character Creator Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Back  │  Character Creator                    [Save] [Generate] │
├──────────┼──────────────────────────────────────────────────────────┤
│          │                                                           │
│  STEPS   │  ┌───────────────────────────────────────────────────┐  │
│          │  │                                                   │  │
│  1 ✓     │  │     ┌─────────┐                                   │  │
│  Basics  │  │     │         │    Name: [Captain Stellar     ]  │  │
│          │  │     │  CHAR   │    Age:  [30                  ▼] │  │
│  2 ✓     │  │     │  ACTER  │    Gender: [Male              ▼] │  │
│  Face    │  │     │  PREVIEW│    Body Type: [Athletic       ▼] │  │
│          │  │     │         │                                   │  │
│  3 ◐     │  │     └─────────┘    ┌─────────────────────────┐   │  │
│  Body    │  │                      │ Hair Style             │   │  │
│          │  │                      │ ┌───┐ ┌───┐ ┌───┐     │   │  │
│  4       │  │                      │ │ ● │ │   │ │   │     │   │  │
│  Costume │  │                      │ └───┘ └───┘ └───┘     │   │  │
│          │  │                      │ Hair Color: [#FFD700 █]│   │  │
│  5       │  │                      └─────────────────────────┘   │  │
│  Powers  │  │                                                   │  │
│          │  │  ┌─────────────────────────────────────────────┐  │  │
│  6       │  │  │ Personality Traits                          │  │  │
│  Review  │  │  │ Brave ────────●─────── Cautious            │  │  │
│          │  │  │ Selfless ────●──────── Selfish             │  │  │
│          │  │  │ Optimistic ──●──────── Cynical             │  │  │
│          │  │  └─────────────────────────────────────────────┘  │  │
│          │  │                                                   │  │
│          │  │  [← Previous]  [Next →]  [Generate Variants ✨]  │  │
│          │  └───────────────────────────────────────────────────┘  │
│          │                                                           │
└──────────┴───────────────────────────────────────────────────────────┘
```

### 4. Story Generator Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Back  │  Story Generator                       [Save] [Export]  │
├──────────┼──────────────────────────────────────────────────────────┤
│          │                                                           │
│  INPUT   │  STORY STRUCTURE                                         │
│          │  ┌─────────────────────────────────────────────────────┐ │
│  Genre:  │  │  Act 1: Setup (25%)                                 │ │
│  [Superhero ▼]│  ┌─────────────────────────────────────────────┐ │ │
│          │  │  │ ○ Opening Image                               │ │ │
│  Logline:│  │  │ ○ Theme Stated                                │ │ │
│  [A cosmic-│  │  │ ○ Catalyst                                    │ │ │
│  powered  │  │  │ ● Break into Two ← You are here              │ │ │
│  hero...] │  │  └─────────────────────────────────────────────┘ │ │
│          │  └─────────────────────────────────────────────────────┘ │
│  Tone:   │  ┌─────────────────────────────────────────────────────┐ │
│  [Epic ▼]│  │  Act 2: Confrontation (50%)                         │ │
│          │  │  (15 beats)                                          │ │
│  Length: │  └─────────────────────────────────────────────────────┘ │
│  [24 pages]│ ┌─────────────────────────────────────────────────────┐ │
│          │  │  Act 3: Resolution (25%)                              │ │
│  [✨     │  │  (6 beats)                                           │ │
│   Generate│  └─────────────────────────────────────────────────────┘ │
│   Outline]│                                                          │
│          │  GENERATED BEATS                                         │
│          │  ┌─────────────────────────────────────────────────────┐ │
│          │  │ Beat 1: Opening Image                               │ │
│          │  │ "Captain Stellar patrols the cosmos, showing his    │ │
│          │  │  daily routine and power set."                      │ │
│          │  │                                      [Edit] [Expand]│ │
│          │  └─────────────────────────────────────────────────────┘ │
│          │  ┌─────────────────────────────────────────────────────┐ │
│          │  │ Beat 2: Catalyst                                    │ │
│          │  │ "Distress signal from Earth - ancient threat       │ │
│          │  │  awakening."                                        │ │
│          │  │                                      [Edit] [Expand]│ │
│          │  └─────────────────────────────────────────────────────┘ │
│          │                                                           │
└──────────┴───────────────────────────────────────────────────────────┘
```

### 5. Collaboration View

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Back  │  My Awesome Comic  │  👤 You  👤 ArtistPro  👤 Editor   │
├──────────┼──────────────────────────────────────────────────────────┤
│          │                                                           │
│  PAGES   │  ┌───────────────────────────────────────────────────┐  │
│          │  │                                                   │  │
│  ┌────┐  │  │   Page 13 - The Battle Begins                     │  │
│  │ 1  │  │  │                                                   │  │
│  │ ✓  │  │  │   ┌─────┐  ┌─────┐  ┌─────┐                      │  │
│  └────┘  │  │   │     │  │  💬 │  │     │  ← Comment from     │  │
│          │  │   │     │  │     │  │     │     ArtistPro        │  │
│  ┌────┐  │  │   │     │  │     │  │     │                      │  │
│  │ 2  │  │  │   │     │  │     │  │     │  "Can we make the   │  │
│  │ ✓  │  │  │   │     │  │     │  │     │   explosion bigger?"│  │
│  └────┘  │  │   │     │  │     │  │     │                      │  │
│          │  │   └─────┘  └─────┘  └─────┘                      │  │
│  ┌────┐  │  │                                                   │  │
│  │ 13 │  │  │  COMMENTS (3)                                     │  │
│  │ ●  │  │  │  ┌─────────────────────────────────────────────┐ │  │
│  └────┘  │  │  │ 👤 ArtistPro • 2 hours ago                  │ │  │
│          │  │  │ "Can we make the explosion bigger in panel 3?"││  │
│  ┌────┐  │  │  │                                    [Reply] ✓│ │  │
│  │ 14 │  │  │  └─────────────────────────────────────────────┘ │  │
│  │    │  │  │  ┌─────────────────────────────────────────────┐ │  │
│  └────┘  │  │  │ 👤 You • 1 hour ago                         │ │  │
│          │  │  │ "Good idea! I'll increase it by 50%"        │ │  │
│  [+Add]  │  │  │                                    [Edit] ✓│ │  │
│          │  │  └─────────────────────────────────────────────┘ │  │
│          │  └───────────────────────────────────────────────────┘  │
│          │                                                           │
└──────────┴───────────────────────────────────────────────────────────┘
```

---

## Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: #2563EB;
  border: 2px solid #2563EB;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
```

#### AI Button (Special)
```css
.btn-ai {
  background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.btn-ai::before {
  content: '✨';
  margin-right: 8px;
}

.btn-ai:hover {
  animation: shimmer 2s infinite;
}
```

### Input Fields

```css
.input {
  border: 2px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.2s;
}

.input:focus {
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  outline: none;
}

.input-error {
  border-color: #EF4444;
}
```

### Cards

```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  aspect-ratio: 16/9;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}
```

### Loading States

#### Skeleton Loader
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #F1F5F9 0%,
    #E2E8F0 50%,
    #F1F5F9 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### AI Generation Loader
```css
.ai-loader {
  width: 48px;
  height: 48px;
  border: 4px solid #E2E8F0;
  border-top-color: #7C3AED;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* Single column layout */
  /* Bottom navigation */
  /* Full-width cards */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Two column layout */
  /* Side navigation collapsible */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full multi-column layout */
  /* Persistent side navigation */
  /* Advanced features visible */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Maximum content width */
  /* Enhanced spacing */
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

- **Color Contrast:** All text meets 4.5:1 minimum ratio
- **Keyboard Navigation:** Full keyboard accessibility
- **Screen Readers:** ARIA labels on all interactive elements
- **Focus Indicators:** Visible focus rings on all interactive elements
- **Reduced Motion:** Respects prefers-reduced-motion

### Keyboard Shortcuts

```
General:
  ⌘/Ctrl + S    Save
  ⌘/Ctrl + Z    Undo
  ⌘/Ctrl + Y    Redo
  ⌘/Ctrl + +    Zoom in
  ⌘/Ctrl + -    Zoom out
  ⌘/Ctrl + 0    Reset zoom
  ?             Show shortcuts

Page Builder:
  V             Select tool
  B             Brush tool
  T             Text tool
  P             Panel tool
  L             Lasso tool
  Space + Drag  Pan canvas
  [ ]           Brush size
```

---

## Animation Guidelines

### Principles

1. **Purposeful:** Every animation serves a function
2. **Subtle:** Avoid distracting or excessive motion
3. **Fast:** Keep under 300ms for UI interactions
4. **Smooth:** Use ease-in-out curves

### Common Animations

```css
/* Fade In */
.fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
.slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
.scale-in {
  animation: scaleIn 0.2s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## Mobile Considerations

### Touch Targets

- Minimum size: 44x44px
- Adequate spacing between targets
- No hover-dependent interactions

### Gesture Support

- **Swipe:** Navigate between pages
- **Pinch:** Zoom canvas
- **Double-tap:** Quick zoom
- **Long-press:** Context menu

### Performance

- Lazy load images
- Defer off-screen content
- Optimize animations for 60fps
- Use CSS transforms over position changes

---

*Document Version: 1.0*  
*Created: March 2026*  
*Status: UI/UX Specification Complete*
