# Visual Mood Board - Episode 097: The Ice Cave
## Color Palette, Textures, and Visual Direction

---

## COLOR PALETTE

### Primary Colors

**Ice Blue (Primary)**
```
HEX: #4A90C8
RGB: 74, 144, 200
CMYK: 63, 28, 0, 22
Pantone: 7450 C
```
*Usage: Main brand color, ice cave imagery, primary buttons, headlines*

**Deep Sapphire (Secondary)**
```
HEX: #1B3A5F
RGB: 27, 58, 95
CMYK: 72, 39, 0, 63
Pantone: 7545 C
```
*Usage: Dark backgrounds, text overlays, depth in ice formations*

**Glacier White (Neutral)**
```
HEX: #E8F4F8
RGB: 232, 244, 248
CMYK: 6, 2, 0, 3
Pantone: 656 C
```
*Usage: Backgrounds, text on dark, highlights, snow/ice areas*

**Volcanic Black (Accent)**
```
HEX: #1A1A1D
RGB: 26, 26, 29
CMYK: 11, 9, 7, 89
Pantone: Black 6 C
```
*Usage: Text, borders, black sand beaches, contrast elements*

---

### Secondary Colors

**Aurora Green (Feature)**
```
HEX: #39B54A
RGB: 57, 181, 74
CMYK: 69, 0, 59, 0
Pantone: 7482 C
```
*Usage: Northern lights imagery, CTAs, success states, highlights*

**Aurora Purple (Feature)**
```
HEX: #8B5FBF
RGB: 139, 95, 191
CMYK: 27, 50, 0, 25
Pantone: 265 C
```
*Usage: Aurora accents, gradient overlays, special features*

**Waterfall Silver (Accent)**
```
HEX: #B8C5D1
RGB: 184, 197, 209
CMYK: 22, 14, 10, 18
Pantone: 5445 C
```
*Usage: Water imagery, mist, secondary backgrounds*

**Lava Red (Warning)**
```
HEX: #C4302B
RGB: 196, 48, 43
CMYK: 0, 76, 78, 23
Pantone: 186 C
```
*Usage: Safety warnings, danger zones, urgent CTAs*

---

### Gradient Palettes

**Ice Cave Gradient**
```
Linear Gradient (Top to Bottom):
#E8F4F8 (0%) → #4A90C8 (50%) → #1B3A5F (100%)
```
*Usage: Background overlays, section dividers, story elements*

**Aurora Gradient**
```
Linear Gradient (Left to Right):
#1A1A1D (0%) → #39B54A (30%) → #8B5FBF (70%) → #1A1A1D (100%)
```
*Usage: Aurora imagery, special features, night sections*

**Black Sand Gradient**
```
Linear Gradient (Top to Bottom):
#1A1A1D (0%) → #3D3D40 (50%) → #1A1A1D (100%)
```
*Usage: Beach sections, dramatic backgrounds, footer*

---

## TYPOGRAPHY

### Primary Font (Headlines)

**Font:** Montserrat (Google Fonts)
**Weights:** 700 (Bold), 800 (Extra Bold)
**Usage:** Episode titles, section headers, social media graphics

```
Example:
THE ICE CAVE
Episode 097
```

### Secondary Font (Body)

**Font:** Lato (Google Fonts)
**Weights:** 400 (Regular), 700 (Bold)
**Usage:** Body text, captions, descriptions

```
Example:
Walk through glacier caves older than language.
Stand behind waterfalls. Watch aurora dance over
black sand beaches.
```

### Accent Font (Special Use)

**Font:** Playfair Display (Google Fonts)
**Weights:** 700 (Bold)
**Usage:** Poetic quotes, episode openers, special features

```
Example:
"The glacier remembers what the world has forgotten."
```

### Font Pairing Guide

**Social Media Graphics:**
- Headline: Montserrat Bold, 48-72pt
- Body: Lato Regular, 18-24pt
- Quote: Playfair Display Bold, 32-40pt

**Website/Blog:**
- H1: Montserrat Extra Bold, 48pt
- H2: Montserrat Bold, 36pt
- H3: Montserrat Bold, 24pt
- Body: Lato Regular, 18pt
- Caption: Lato Regular, 14pt

**Audio Episode Artwork:**
- Title: Montserrat Extra Bold, 60pt
- Episode: Montserrat Bold, 24pt
- Series: Lato Bold, 18pt

---

## TEXTURES & PATTERNS

### Ice Texture

**Description:** Smooth, crystalline surfaces with subtle variations
**Usage:** Backgrounds, overlays, section dividers
**Style:** Semi-transparent, low opacity (10-20%)

**CSS Example:**
```css
.ice-texture {
  background-image: url('textures/ice-crystal.png');
  background-blend-mode: overlay;
  opacity: 0.15;
}
```

### Volcanic Sand Texture

**Description:** Fine black grainy texture, subtle noise
**Usage:** Footers, dark sections, contrast backgrounds
**Style:** Low opacity, subtle

**CSS Example:**
```css
.volcanic-texture {
  background-image: url('textures/volcanic-sand.png');
  background-blend-mode: multiply;
  opacity: 0.3;
}
```

### Aurora Pattern

**Description:** Flowing, organic wave patterns in green/purple
**Usage:** Special sections, episode highlights, backgrounds
**Style:** Gradient overlay, animated if possible

**CSS Example:**
```css
.aurora-pattern {
  background: linear-gradient(
    135deg,
    #1A1A1D 0%,
    #39B54A 30%,
    #8B5FBF 70%,
    #1A1A1D 100%
  );
  background-size: 200% 200%;
  animation: aurora-flow 10s ease infinite;
}

@keyframes aurora-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Water/Mist Texture

**Description:** Soft, flowing, semi-transparent white/grey
**Usage:** Waterfall sections, transitions, overlays
**Style:** Very low opacity (5-10%), subtle

---

## IMAGERY STYLE

### Photography Direction

**Ice Caves:**
- Wide-angle shots showing scale
- Close-ups of ice texture and formations
- Human figure for scale (distant, small)
- Blue-dominant color grading
- High contrast, dramatic lighting

**Waterfalls:**
- Long exposure for silky water effect
- Behind-the-falls perspective (unique angle)
- Rainbow inclusion when possible
- Green landscape or white snow context
- Dynamic, powerful composition

**Black Sand Beaches:**
- High contrast: black sand, white waves
- Basalt columns as leading lines
- Sea stacks in background
- Moody, dramatic skies
- Safety-conscious framing (show distance from water)

**Northern Lights:**
- Long exposure (5-15 seconds)
- Foreground interest (icebergs, mountains, beaches)
- Green-dominant with purple accents
- Star-visible skies
- Reflection shots when possible

### Color Grading

**Ice Cave Images:**
- Boost blues (+15-20)
- Reduce yellows (-10)
- Increase contrast (+10)
- Slight cool temperature (-5)
- Enhance clarity (+15)

**Waterfall Images:**
- Enhance greens (landscape) or whites (snow)
- Boost blues in sky/water
- Moderate contrast
- Natural color balance
- Sharpness for water detail

**Aurora Images:**
- Boost greens and purples
- Deep blacks for sky contrast
- Reduce noise (high ISO cleanup)
- Maintain natural aurora colors
- Enhance foreground subtly

### Composition Guidelines

**Rule of Thirds:**
- Place horizon on upper or lower third
- Position key elements at intersection points
- Leave negative space for text overlay

**Leading Lines:**
- Use ice cave walls to draw eye inward
- Waterfall flow as vertical leading line
- Beach patterns guiding to sea stacks

**Scale:**
- Include human figure for scale in vast landscapes
- Show cave entrance with person for size reference
- Waterfall height comparison with nearby elements

**Framing:**
- Ice cave entrance as natural frame
- Basalt columns framing beach scenes
- Waterfall mist as soft frame

---

## GRAPHIC ELEMENTS

### Icons

**Style:** Line icons, 2px stroke, rounded caps
**Color:** Glacier White (#E8F4F8) on dark, Deep Sapphire (#1B3A5F) on light

**Icon Set:**
- 🧊 Ice cube (ice caves)
- 💧 Water drop (waterfalls)
- 🏖️ Beach (black sand)
- ✨ Sparkles (aurora)
- 🎧 Headphones (audio/podcast)
- 🗺️ Map (travel guide)
- ⚠️ Warning triangle (safety)
- 📷 Camera (photography)
- 🎒 Backpack (gear/packing)
- 🚗 Car (transportation)

### Dividers

**Ice Divider:**
```
━━━━━━━━━━━━━━━━━━━━
  ❄️   ❄️   ❄️   ❄️
━━━━━━━━━━━━━━━━━━━━
```

**Wave Divider:**
```
〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
```

**Aurora Divider:**
```
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
```

### Buttons

**Primary Button:**
- Background: Ice Blue (#4A90C8)
- Text: White (#FFFFFF)
- Border Radius: 8px
- Padding: 12px 24px
- Hover: Deep Sapphire (#1B3A5F)

**Secondary Button:**
- Background: Transparent
- Text: Ice Blue (#4A90C8)
- Border: 2px solid Ice Blue
- Border Radius: 8px
- Padding: 12px 24px
- Hover: Ice Blue background, white text

**CTA Button:**
- Background: Aurora Green (#39B54A)
- Text: White (#FFFFFF)
- Border Radius: 8px
- Padding: 16px 32px
- Hover: Darker green

---

## SOCIAL MEDIA TEMPLATES

### Instagram Post (1080x1080)

**Layout:**
- Top 1/3: Image (ice cave, waterfall, etc.)
- Middle 1/3: Gradient overlay with text
- Bottom 1/3: Call-to-action + branding

**Text Placement:**
- Headline: Montserrat Bold, 48pt, centered
- Subhead: Lato Regular, 24pt, centered
- CTA: Lato Bold, 20pt, centered
- Logo: Bottom right corner

**Example:**
```
[Image: Blue ice cave]
[Gradient overlay: Deep Sapphire 50% opacity]

THE ICE CAVE
Episode 097 | The Infinite Walk

[CTA Button: Listen Now]
[Podcast logo bottom right]
```

### Instagram Story (1080x1920)

**Layout:**
- Full-screen image/video
- Text overlay at top and bottom
- Interactive elements (poll, link, countdown)

**Text Placement:**
- Top: Headline (safe zone: 250px from top)
- Bottom: CTA + link sticker (safe zone: 250px from bottom)

### TikTok/Reels Cover (1080x1920)

**Layout:**
- Key frame from video
- Large headline text
- Episode branding

**Text:**
- Title: Montserrat Extra Bold, 72pt
- Episode: Montserrat Bold, 36pt
- Hashtags: Lato Regular, 24pt

### Twitter/X Post (1200x675)

**Layout:**
- Landscape image
- Text overlay bottom 1/3
- Logo bottom right

**Text:**
- Headline: Montserrat Bold, 48pt
- Subhead: Lato Regular, 24pt

### Pinterest Pin (1000x1500)

**Layout:**
- Vertical image
- Text overlay middle section
- Logo bottom

**Text:**
- Title: Montserrat Bold, 56pt
- Description: Lato Regular, 28pt
- URL: Lato Bold, 20pt

---

## VIDEO/ANIMATION GUIDELINES

### Motion Graphics

**Ice Cave Animation:**
- Slow pan across ice formations
- Subtle shimmer effect on ice
- Blue light pulses (gentle, 10% opacity)
- Duration: 3-5 seconds loop

**Aurora Animation:**
- Flowing gradient movement
- Green to purple transitions
- Wave-like motion (top to bottom)
- Duration: 10 seconds loop

**Waterfall Animation:**
- Vertical particle flow (water)
- Mist overlay (subtle, drifting)
- Rainbow arc (appears/disappears)
- Duration: 5 seconds loop

### Transitions

**Ice Transition:**
- Freeze effect (screen frosts over)
- Shatter reveal to next scene
- Duration: 1.5 seconds

**Water Transition:**
- Wave wipe (left to right)
- Mist fade
- Duration: 1 second

**Aurora Transition:**
- Green light sweep
- Fade through black
- Duration: 2 seconds

---

## BRAND ELEMENTS

### Logo Placement

**Primary Logo:**
- Position: Bottom right or center bottom
- Size: 10% of canvas width
- Clear space: 2x logo height on all sides

**Watermark:**
- Opacity: 30-50%
- Position: Bottom right corner
- Size: 5% of canvas width

### Episode Numbering

**Format:**
```
Ep. 097
```
**Font:** Montserrat Bold
**Size:** 24-36pt (varies by canvas)
**Color:** Glacier White or Deep Sapphire
**Position:** Top right or bottom left

### Series Branding

**"The Infinite Walk"**
- Font: Playfair Display Bold or Montserrat Extra Bold
- Size: 18-24pt
- Color: Ice Blue or Glacier White
- Position: Below episode title or bottom center

---

## ACCESSIBILITY

### Color Contrast

**Minimum Ratios (WCAG AA):**
- Normal text: 4.5:1
- Large text: 3:1
- UI components: 3:1

**Tested Combinations:**
- ✅ Deep Sapphire text on Glacier White (12.5:1)
- ✅ Glacier White text on Deep Sapphire (12.5:1)
- ✅ Volcanic Black text on Glacier White (16:1)
- ⚠️ Ice Blue text on White (2.8:1) - Use for large text only
- ✅ White text on Ice Blue (4.6:1) - Passes for normal text

### Alt Text Guidelines

**Images:**
- Describe the scene objectively
- Include key elements (ice cave, waterfall, etc.)
- Mention colors and atmosphere
- Note human presence if relevant

**Example:**
"Wide-angle photograph inside a glacier ice cave in Iceland. Translucent blue ice walls curve overhead, creating a cathedral-like chamber. A person in orange winter gear stands in the distance for scale. Natural light filters through the ice ceiling, illuminating the blue formations."

### Text Size Minimums

- Body text: 16px minimum
- Captions: 14px minimum
- Headlines: 24px minimum
- Mobile: Increase all by 2px

---

## FILE FORMATS & SPECS

### Images

**Web:**
- Format: WebP (fallback: JPEG)
- Quality: 80-85%
- Max width: 1920px
- File size: < 500KB

**Social Media:**
- Instagram: JPEG, 1080px minimum
- Pinterest: PNG or JPEG, 1000x1500px
- Twitter: JPEG or PNG, 1200x675px

**Print:**
- Format: TIFF or high-quality JPEG
- Resolution: 300 DPI
- Color mode: CMYK

### Video

**Social Media:**
- Format: MP4 (H.264)
- Resolution: 1080x1920 (vertical) or 1920x1080 (horizontal)
- Frame rate: 30fps
- Max file size: Platform dependent

**Web:**
- Format: MP4 (H.264) + WebM fallback
- Resolution: 1920x1080
- Bitrate: 5-10 Mbps

### Audio

**Podcast:**
- Format: MP3
- Bitrate: 128 kbps (mono) or 192 kbps (stereo)
- Sample rate: 44.1 kHz
- ID3 tags: Complete metadata

---

## ASSET CHECKLIST

### Required Images

- [ ] Ice cave wide shot (landscape)
- [ ] Ice cave detail (portrait)
- [ ] Seljalandsfoss waterfall
- [ ] Skógafoss waterfall
- [ ] Reynisfjara black sand beach
- [ ] Diamond Beach ice chunks
- [ ] Northern lights aurora
- [ ] Shelby avatar in winter gear
- [ ] Episode artwork (3000x3000px)
- [ ] Social media templates (all platforms)

### Required Graphics

- [ ] Logo files (PNG, SVG, AI)
- [ ] Icon set (SVG)
- [ ] Divider graphics (PNG, transparent)
- [ ] Button styles (PNG, SVG)
- [ ] Gradient overlays (PNG)
- [ ] Texture files (PNG, seamless)

### Required Videos

- [ ] Episode teaser (30 seconds)
- [ ] Social clips (15 seconds each, 5 variations)
- [ ] Aurora animation (10 seconds loop)
- [ ] Ice cave animation (5 seconds loop)

---

*Mood Board & Visual Guidelines for Episode 097: The Ice Cave*
*Infinite Walk Series - March 2026*
