# Episode 110: The Floating Temples
## Visual Mood Board & Design Guide

---

## Color Palette

### Primary Colors

**Temple Grey**
- Hex: `#6B6B6B`
- RGB: `107, 107, 107`
- CMYK: `0, 0, 0, 58`
- Usage: Main text, stone textures, architectural elements
- Emotion: Ancient, timeless, grounded, weathered

**Jungle Green**
- Hex: `#2D5016`
- RGB: `45, 80, 22`
- CMYK: `44, 0, 73, 69`
- Usage: Backgrounds, nature elements, accent graphics
- Emotion: Lush, patient, alive, embracing

**Sunrise Orange**
- Hex: `#E87722`
- RGB: `232, 119, 34`
- CMYK: `0, 49, 85, 9`
- Usage: Call-to-action buttons, highlights, warm accents
- Emotion: Hope, awakening, warmth, transformation

**Bayon Blue**
- Hex: `#1E3A5F`
- RGB: `30, 58, 95`
- CMYK: `68, 39, 0, 63`
- Usage: Deep backgrounds, night scenes, contemplative moments
- Emotion: Mystery, depth, wisdom, twilight

---

### Secondary Colors

**Sandstone Beige**
- Hex: `#C9B99B`
- RGB: `201, 185, 155`
- Usage: Secondary backgrounds, card backgrounds
- Emotion: Warm, approachable, earthy

**Moss Green**
- Hex: `#8A9A5B`
- RGB: `138, 154, 91`
- Usage: Overlays, nature accents, soft backgrounds
- Emotion: Growth, age, softness, patina

**Dawn Pink**
- Hex: `#F4C2C2`
- RGB: `244, 194, 194`
- Usage: Highlights, soft gradients, feminine touches
- Emotion: Gentle, hopeful, tender, new beginning

**Deep Earth**
- Hex: `#3E2723`
- RGB: `62, 39, 35`
- Usage: Dark backgrounds, text on light, grounding elements
- Emotion: Stable, rich, foundational, serious

---

### Gradient Combinations

**Sunrise Gradient**
```
Linear gradient (45°):
#1E3A5F (Bayon Blue) → #E87722 (Sunrise Orange) → #F4C2C2 (Dawn Pink)
```
Usage: Episode artwork backgrounds, story highlights, video intros

**Jungle Canopy Gradient**
```
Linear gradient (180°):
#2D5016 (Jungle Green) → #8A9A5B (Moss Green) → #C9B99B (Sandstone)
```
Usage: Section dividers, card backgrounds, overlay tints

**Stone & Sky Gradient**
```
Linear gradient (90°):
#6B6B6B (Temple Grey) → #C9B99B (Sandstone) → #1E3A5F (Bayon Blue)
```
Usage: Headers, footers, transitional elements

---

## Typography

### Primary Font: Serif (Headlines & Quotes)

**Font:** Playfair Display (Google Fonts)
**Weights:** Regular (400), Medium (500), SemiBold (600), Bold (700)

**Usage:**
- Episode titles
- Major section headers
- Pull quotes
- Social media graphics (main text)

**Why:** Elegant, timeless, evokes history and literature, pairs beautifully with ancient subject matter

**CSS:**
```css
font-family: 'Playfair Display', serif;
font-weight: 600;
letter-spacing: -0.02em;
```

---

### Secondary Font: Sans-Serif (Body & UI)

**Font:** Inter (Google Fonts)
**Weights:** Regular (400), Medium (500), SemiBold (600)

**Usage:**
- Body text
- Captions
- UI elements
- Social media graphics (supporting text)

**Why:** Clean, modern, highly readable, balances the ornate serif

**CSS:**
```css
font-family: 'Inter', sans-serif;
font-weight: 400;
letter-spacing: -0.01em;
line-height: 1.6;
```

---

### Accent Font: Display (Special Moments)

**Font:** Cormorant Garamond (Google Fonts)
**Weights:** Light (300), Regular (400), Medium (500)

**Usage:**
- Episode number styling
- Decorative elements
- Quote attributions
- Special typography moments

**Why:** Classical, refined, adds sophistication without overwhelming

**CSS:**
```css
font-family: 'Cormorant Garamond', serif;
font-weight: 400;
font-style: italic;
letter-spacing: 0.05em;
```

---

### Typography Hierarchy

**H1 - Episode Title**
- Font: Playfair Display Bold
- Size: 48px (desktop), 32px (mobile)
- Color: Temple Grey (#6B6B6B) or Bayon Blue (#1E3A5F)
- Spacing: letter-spacing -0.03em

**H2 - Section Headers**
- Font: Playfair Display SemiBold
- Size: 32px (desktop), 24px (mobile)
- Color: Jungle Green (#2D5016)
- Spacing: letter-spacing -0.02em

**H3 - Subsections**
- Font: Playfair Display Medium
- Size: 24px (desktop), 20px (mobile)
- Color: Deep Earth (#3E2723)
- Spacing: letter-spacing -0.01em

**Body Text**
- Font: Inter Regular
- Size: 16px (desktop), 14px (mobile)
- Color: Temple Grey (#6B6B6B) on light, Sandstone (#C9B99B) on dark
- Line-height: 1.6

**Pull Quotes**
- Font: Playfair Display Italic
- Size: 28px (desktop), 22px (mobile)
- Color: Sunrise Orange (#E87722)
- Spacing: letter-spacing -0.02em, line-height 1.4

**Captions & Small Text**
- Font: Inter Regular
- Size: 12px
- Color: Temple Grey at 70% opacity
- Spacing: letter-spacing 0.02em

---

## Imagery Style

### Photography Direction

**Mood:** Contemplative, atmospheric, reverent
**Lighting:** Golden hour, blue hour, dappled shade
**Composition:** Rule of thirds, leading lines, negative space
**Processing:** Warm tones, slight film grain, muted highlights

**Do:**
- Capture scale (tiny human, massive temple)
- Show texture (weathered stone, moss, roots)
- Use natural frames (doorways, windows, tree branches)
- Include human element (solitude, not crowds)
- Embrace mist and atmosphere

**Don't:**
- Over-saturate (keep colors natural)
- Use harsh midday light
- Focus only on famous angles (find fresh perspectives)
- Include modern distractions (signs, trash, crowds when possible)

---

### Image Treatment

**Overlay Tints:**
- Light overlay: Bayon Blue at 10-20% opacity for text readability
- Dark overlay: Deep Earth at 40-60% opacity for dramatic effect
- Gradient overlay: Sunrise Gradient for emotional moments

**Filters:**
- Warmth: +10-15 (enhance golden hour feel)
- Contrast: -5 to -10 (soften for contemplative mood)
- Highlights: -15 to -20 (preserve detail in bright skies)
- Shadows: +10 to +15 (lift for mystery)
- Grain: +5 to +10 (film-like texture)
- Vignette: Subtle, -5 to -10 (draw eye to center)

**Borders & Frames:**
- Thin white border (10px) for social media posts
- Rounded corners (8px) for cards and UI elements
- No borders for full-bleed hero images

---

## Graphic Elements

### Textures

**Stone Texture**
- Use: Weathered granite, sandstone close-ups
- Application: Background overlays at 5-10% opacity
- Source: Original photography or textured stock

**Jungle Texture**
- Use: Leaf patterns, moss, bark
- Application: Section dividers, card backgrounds
- Source: Macro photography of temple vegetation

**Water Texture**
- Use: Reflection pool ripples, mist
- Application: Transition elements, loading states
- Source: Angkor Wat moat photography

---

### Icons & Symbols

**Style:** Minimal line icons, 2px stroke weight
**Color:** Temple Grey or Bayon Blue
**Size:** 24px, 32px, 48px (consistent scale)

**Key Icons:**
- Temple/tower silhouette
- Tree/root symbol
- Sun/sunrise
- Face (Bayon reference)
- Path/journey
- Lotus flower
- Reflection (water waves)
- Compass/direction

**Icon Library:** Feather Icons, Heroicons (customized)

---

### Patterns

**Geometric Khmer Pattern**
- Inspired by traditional Khmer decorative motifs
- Use: Subtle backgrounds, section dividers
- Opacity: 5-10% (should be barely visible)
- Color: Sandstone or Temple Grey

**Root Network Pattern**
- Organic, branching lines (like tree roots)
- Use: Background texture, connecting elements
- Style: Hand-drawn feel, not too perfect
- Color: Jungle Green at low opacity

---

## Layout Principles

### Composition

**Rule of Thirds:**
- Place key elements (temples, faces, figures) at intersection points
- Leave negative space for text overlay
- Create balance between ancient and natural elements

**Leading Lines:**
- Use causeways, corridors, tree roots to draw eye
- Create depth and journey feeling
- Point toward focal point (temple, horizon, figure)

**Layering:**
- Foreground: Vegetation, stone details, human element
- Midground: Temple structures, main subject
- Background: Sky, distant towers, jungle canopy
- Create depth and immersion

---

### White Space

**Philosophy:** Generous white space = contemplative mood
**Margins:** Minimum 48px on desktop, 24px on mobile
**Padding:** 32px internal spacing for cards/sections
**Line Height:** 1.6 for body, 1.4 for headlines

**Don't:**
- Crowd elements
- Fill every pixel
- Fear empty space

**Do:**
- Let images breathe
- Give text room to be read
- Create moments of pause

---

## Platform-Specific Specifications

### Instagram Feed Posts
- **Size:** 1080x1350px (4:5 portrait) or 1080x1080px (1:1 square)
- **Format:** JPG or PNG
- **Color Profile:** sRGB
- **Text Safe Zone:** Keep critical text within center 80%

### Instagram Stories
- **Size:** 1080x1920px (9:16 vertical)
- **Format:** JPG, PNG, or MP4 (for video)
- **Safe Zones:** 
  - Top: 250px (avoid status bar)
  - Bottom: 250px (avoid reply field)
  - Sides: 50px margin

### Instagram Reels
- **Size:** 1080x1920px (9:16 vertical)
- **Format:** MP4 (H.264 codec)
- **Duration:** 15-90 seconds
- **Frame Rate:** 30fps or 60fps

### YouTube Thumbnail
- **Size:** 1280x720px (16:9)
- **Format:** JPG or PNG
- **Max File Size:** 2MB
- **Text:** Large, high contrast (readable at small sizes)

### YouTube Video
- **Size:** 1920x1080px (1080p) or 3840x2160px (4K)
- **Format:** MP4 (H.264 or H.265)
- **Frame Rate:** 24fps, 30fps, or 60fps
- **Aspect Ratio:** 16:9

### Facebook Post
- **Size:** 1200x630px (1.91:1 landscape) or 1080x1080px (1:1 square)
- **Format:** JPG or PNG
- **Text Limit:** Keep under 20% of image for ad compliance

### LinkedIn Post
- **Size:** 1200x627px (1.91:1 landscape)
- **Format:** JPG or PNG
- **Professional Tone:** Clean, minimal text overlay

### Pinterest Pin
- **Size:** 1000x1500px (2:3 vertical) or 1000x2100px (1:2.1 tall)
- **Format:** JPG or PNG
- **Text:** Vertical-friendly, large and readable

### TikTok
- **Size:** 1080x1920px (9:16 vertical)
- **Format:** MP4
- **Duration:** 15-180 seconds
- **Safe Zones:** Avoid edges (UI overlays)

### Email Header
- **Size:** 600px width (height flexible, ~300-400px)
- **Format:** JPG or PNG
- **File Size:** Under 200KB for fast loading

### Blog Featured Image
- **Size:** 1200x630px (1.91:1) or 1600x900px (16:9)
- **Format:** JPG (optimized) or WebP
- **Alt Text:** Descriptive for SEO and accessibility

---

## Episode Artwork Specifications

### Main Episode Cover
- **Size:** 3000x3000px (1:1 square)
- **Format:** JPG or PNG
- **Color Profile:** sRGB
- **Elements:**
  - Episode title (large, readable at thumbnail size)
  - Episode number (subtle, corner placement)
  - Series branding (The Infinite Walk logo)
  - Compelling image (Angkor Wat silhouette or Bayon faces)

**Design Notes:**
- Must be legible at 150x150px (podcast app thumbnail)
- Avoid tiny text
- High contrast between text and background
- Test in both light and dark mode

### YouTube Episode Artwork
- **Size:** 1280x720px (16:9)
- **Elements:**
  - Episode title (large, left or center)
  - Striking visual (sunrise, faces, or jungle)
  - Series logo (small, corner)
  - Optional: "Episode 110" badge

---

## Accessibility Guidelines

### Color Contrast
- **Text on background:** Minimum 4.5:1 ratio (WCAG AA)
- **Large text (18px+):** Minimum 3:1 ratio
- **Tools:** Use WebAIM Contrast Checker

### Alt Text
- **All images:** Descriptive alt text
- **Decorative images:** Empty alt="" attribute
- **Complex images:** Long description in caption or nearby text

**Example:**
```
Alt: "Angkor Wat temple at sunrise, five towers reflected in still 
moat water, orange and pink sky, lone figure walking on causeway"
```

### Text Size
- **Minimum body text:** 14px (mobile), 16px (desktop)
- **Scalable:** Use relative units (rem, em) where possible
- **Line height:** 1.5-1.6 for readability

### Focus States
- **Interactive elements:** Visible focus indicators
- **Color:** Don't rely on color alone (use icons, underlines)

---

## Motion & Animation (Video/Social)

### Animation Style
**Principles:** Slow, contemplative, purposeful
**Duration:** 300-600ms for transitions
**Easing:** Ease-in-out (smooth, not abrupt)

**Movements:**
- Slow zoom on temple images (Ken Burns effect)
- Gentle fade transitions (not cuts)
- Subtle parallax on layered images
- Text reveals: fade or slow slide (no bouncy effects)

**Avoid:**
- Fast cuts
- Jarring transitions
- Overly complex animations
- Anything that distracts from the message

### Video Specifications
- **Frame Rate:** 24fps (cinematic) or 30fps (standard)
- **Codec:** H.264 (MP4)
- **Bitrate:** 10-20 Mbps for 1080p
- **Audio:** 48kHz, stereo, -16 LUFS

---

## File Organization

### Directory Structure
```
episode-110-angkor-return/
├── visuals/
│   ├── 09-visual-mood-board.md (this file)
│   ├── source-images/
│   │   ├── angkor-wat/
│   │   ├── bayon/
│   │   ├── ta-prohm/
│   │   └── people-culture/
│   ├── generated/
│   │   ├── ai-images/ (from image prompts)
│   │   └── edited/ (post-processed)
│   ├── graphics/
│   │   ├── logos/
│   │   ├── icons/
│   │   └── patterns/
│   ├── social/
│   │   ├── instagram/
│   │   ├── youtube/
│   │   ├── tiktok/
│   │   └── pinterest/
│   └── exports/
│       ├── print/ (high-res)
│       └── web/ (optimized)
```

### Naming Conventions
- **Format:** `ep110_[description]_[size]_[version].[ext]`
- **Examples:**
  - `ep110_angkor-sunrise_1080x1350_v1.jpg`
  - `ep110_bayon-faces_thumbnail_v2.png`
  - `ep110_quote-impermanence_instagram_v1.jpg`

### Version Control
- **Final files:** No version number (or "final")
- **Working files:** Include version (v1, v2, v3)
- **Archive:** Old versions in `/archive` subfolder

---

## Inspiration & References

### Photography Inspiration
- **Steve McCurry** - Human element in ancient places
- **Michael Kenna** - Minimalist, contemplative landscapes
- **Fan Ho** - Light, shadow, and geometry
- **National Geographic** - Cultural depth, storytelling

### Design Inspiration
- **Kinfolk Magazine** - Minimal, contemplative layouts
- **Monocle** - Sophisticated, timeless design
- **Aeon.co** - Thoughtful long-form presentation
- **On Being Project** - Spiritual, warm, accessible

### Color Inspiration
- Sunrise at Angkor Wat (photograph reference)
- Weathered sandstone textures
- Jungle canopy greens
- Bayon twilight blues

---

## Quick Reference Card

### Colors (Hex)
- Temple Grey: `#6B6B6B`
- Jungle Green: `#2D5016`
- Sunrise Orange: `#E87722`
- Bayon Blue: `#1E3A5F`
- Sandstone: `#C9B99B`

### Fonts
- Headlines: Playfair Display
- Body: Inter
- Accent: Cormorant Garamond

### Key Sizes
- Instagram Post: 1080x1350px
- YouTube Thumb: 1280x720px
- Episode Art: 3000x3000px
- Pinterest: 1000x1500px

### Mood Keywords
- Contemplative
- Ancient
- Atmospheric
- Reverent
- Timeless
- Warm
- Mysterious
- Peaceful

---

*This mood board guides all visual content for Episode 110. Consistency creates recognition. Recognition builds trust. Trust deepens impact.*

**Design with intention. Honor the stones.**
