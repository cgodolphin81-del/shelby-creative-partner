# Episode 046: The Imperial City
## Visual Mood Board

---

## Color Palette

### Primary Colors

#### Mosque Blues
The iconic blue tones of the Blue Mosque's İznik tiles.

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Bosphorus Blue** | `#0067A0` | 0, 103, 160 | Primary brand, headers, links |
| **İznik Turquoise** | `#40B5C7` | 64, 181, 199 | Accents, highlights, buttons |
| **Tile Blue** | `#1E5A8E` | 30, 90, 142 | Secondary backgrounds, overlays |
| **Dome Azure** | `#5B9BD5` | 91, 155, 213 | Light accents, gradients |

**Inspiration:** The 20,000+ hand-painted tiles of the Blue Mosque, the waters of the Bosphorus, the painted domes of Ottoman mosques.

---

#### Bazaar Golds
Warm, rich tones from the Grand Bazaar's lamps, textiles, and spices.

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Saffron Gold** | `#D4A017` | 212, 160, 23 | Primary accent, CTAs |
| **Brass Lantern** | `#B8860B` | 184, 134, 11 | Secondary accents, icons |
| **Amber Light** | `#FFBF00` | 255, 191, 0 | Highlights, glows, special elements |
| **Antique Gold** | `#996515` | 153, 101, 21 | Text (dark backgrounds), borders |

**Inspiration:** Turkish mosaic lamps, brass lanterns, saffron and turmeric in the Spice Bazaar, golden hour light on stone.

---

#### Bosphorus Waters
Cool, deep tones reflecting the strait that divides and connects.

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Deep Bosphorus** | `#003B5C` | 0, 59, 92 | Dark backgrounds, text |
| **Strait Teal** | `#006D77` | 0, 109, 119 | Secondary backgrounds |
| **Silver Water** | `#83C5BE` | 131, 197, 190 | Light backgrounds, cards |
| **Seafoam** | `#EDF6F9` | 237, 246, 249 | Lightest backgrounds, negative space |

**Inspiration:** The Bosphorus at different times of day, from deep navy at night to silvery-blue at dawn.

---

#### Sunset Oranges
Warm, dramatic tones from Istanbul's spectacular sunsets.

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Golden Horn** | `#E85D04` | 232, 93, 4 | Primary accent, urgency, special |
| **Sunset Coral** | `#FA8072` | 250, 128, 114 | Soft accents, gradients |
| **Terracotta** | `#C15B3E` | 193, 91, 62 | Secondary elements, cards |
| **Dusk Rose** | `#FFB7B2` | 255, 183, 178 | Light accents, backgrounds |

**Inspiration:** Sunset over the Marmara Sea, the warm glow on Hagia Sophia's dome, terracotta rooftops of Sultanahmet.

---

### Neutral Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Marble White** | `#F8F9FA` | 248, 249, 250 | Primary light background |
| **Stone Gray** | `#6C757D` | 108, 117, 125 | Secondary text, borders |
| **Minaret Gray** | `#343A40` | 52, 58, 64 | Primary text (light backgrounds) |
| **Night Black** | `#1A1A1A` | 26, 26, 26 | Primary text (dark backgrounds), deep backgrounds |

**Inspiration:** Marble columns of Hagia Sophia, limestone of Ottoman buildings, minaret silhouettes at dusk.

---

## Color Usage Guidelines

### Light Mode
- **Background:** Marble White `#F8F9FA`
- **Text:** Minaret Gray `#343A40`
- **Primary Accent:** Bosphorus Blue `#0067A0`
- **Secondary Accent:** Saffron Gold `#D4A017`
- **Links:** Bosphorus Blue `#0067A0`
- **Borders:** Stone Gray `#6C757D` (20% opacity)

### Dark Mode
- **Background:** Night Black `#1A1A1A` or Deep Bosphorus `#003B5C`
- **Text:** Marble White `#F8F9FA`
- **Primary Accent:** İznik Turquoise `#40B5C7`
- **Secondary Accent:** Amber Light `#FFBF00`
- **Links:** İznik Turquoise `#40B5C7`
- **Borders:** Stone Gray `#6C757D` (40% opacity)

### Gradient Suggestions

**Bosphorus Gradient (Horizontal):**
```
linear-gradient(90deg, #003B5C 0%, #0067A0 50%, #40B5C7 100%)
```

**Sunset Gradient (Vertical):**
```
linear-gradient(180deg, #E85D04 0%, #FA8072 50%, #FFB7B2 100%)
```

**Golden Hour Gradient (Diagonal):**
```
linear-gradient(135deg, #D4A017 0%, #FFBF00 50%, #F8F9FA 100%)
```

**Mosque Interior Gradient (Radial):**
```
radial-gradient(circle, #40B5C7 0%, #0067A0 70%, #003B5C 100%)
```

---

## Typography

### Primary Font (Headings)
**Playfair Display** (Google Fonts)
- Elegant, serif, evokes historical gravitas
- Weights: 400 (Regular), 700 (Bold)
- Usage: Episode titles, section headers, quote graphics

**Fallback:** Georgia, Times New Roman, serif

### Secondary Font (Body)
**Inter** (Google Fonts)
- Clean, modern, highly readable
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- Usage: Body text, captions, UI elements

**Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif

### Accent Font (Special Elements)
**Cinzel** (Google Fonts)
- Inspired by Roman inscriptions, evokes Byzantine heritage
- Weights: 400 (Regular), 700 (Bold)
- Usage: Pull quotes, special headers, episode numbers

**Fallback:** Trajan Pro, Garamond, serif

### Typography Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Episode Number | Cinzel | 14px | 400 | 1.2 |
| Episode Title | Playfair Display | 48px | 700 | 1.1 |
| Section Header | Playfair Display | 32px | 700 | 1.2 |
| Subheader | Playfair Display | 24px | 400 | 1.3 |
| Body Text | Inter | 16px | 400 | 1.6 |
| Caption | Inter | 14px | 400 | 1.5 |
| Quote | Playfair Display | 20px | 400 | 1.4 |
| Button | Inter | 16px | 600 | 1.2 |

### Mobile Adjustments
- Reduce all sizes by 20-25% on screens < 768px
- Episode Title: 36px on mobile
- Section Header: 26px on mobile
- Body Text: 15px on mobile (never go below 14px)

---

## Imagery Style

### Photography Guidelines

**Composition:**
- Wide-angle architectural shots for grandeur
- Close-up details for texture and intimacy
- Golden hour lighting preferred (warm, dramatic)
- Include human scale (small figures in large spaces)

**Subjects:**
- Hagia Sophia (exterior and interior)
- Blue Mosque (tiles, domes, minarets)
- Grand Bazaar (lamps, carpets, crowds)
- Bosphorus (ferries, bridges, waterfront)
- Street life (cats, tea, simit vendors)
- Shelby in context (exploring, observing)

**Avoid:**
- Overly touristy, cliché shots
- Heavy filters or oversaturation
- Generic stock photography feel
- Crowded scenes without clear focal point

### Illustration Style (if used)

**Approach:**
- Watercolor or ink wash aesthetic
- Soft edges, atmospheric
- Muted color palette matching brand
- Architectural line drawings for icons

**Subjects:**
- Skyline silhouettes
- Mosque dome profiles
- Minaret icons
- Bosphorus wave patterns
- Tile pattern motifs

### AI Image Generation Notes

**Use Prompts From:** `prompts/03-ai-image-prompts.md`

**Key Style Keywords:**
- Photorealistic, cinematic lighting
- Architectural photography
- Atmospheric, moody
- Golden hour, sunset, dawn
- Warm color grading
- Slight film grain for texture

**Aspect Ratios:**
- 16:9 for hero images, YouTube thumbnails
- 4:3 for blog posts, presentations
- 1:1 for Instagram feed
- 9:16 for Stories, Reels, TikTok
- 21:9 for panoramic vistas

---

## Iconography

### Style
- Line icons, 2px stroke weight
- Rounded caps and joins
- Minimal, clean design
- Match Bosphorus Blue or İznik Turquoise

### Core Icons Needed
- 🕌 Mosque / Dome
- ⛴️ Ferry / Boat
- 🏛️ Hagia Sophia (simplified dome + minarets)
- 🏮 Turkish Lamp
- ☕ Turkish Tea Glass
- 🗺️ Map / Location
- 🎧 Podcast / Audio
- 📍 Location Pin
- 🌅 Sunset
- 🕌 Minaret
- 🐈 Cat (Istanbul street cats)
- 🥙 Food / Kebab
- 🛍️ Bazaar / Shopping
- 🌊 Water / Bosphorus
- 🌍 Globe / Travel

**Icon Set Recommendations:**
- Heroicons (free, clean)
- Phosphor Icons (free, versatile)
- Custom SVG based on mood board

---

## Pattern & Texture Library

### Turkish Tile Patterns
- İznik tulip motifs
- Geometric Islamic patterns
- Arabesque designs
- Use as subtle backgrounds (5-10% opacity)

### Textures
- **Marble:** For backgrounds, evokes Hagia Sophia columns
- **Watercolor wash:** For soft, atmospheric backgrounds
- **Paper texture:** For blog posts, documents
- **Subtle grain:** For photography, adds warmth

### Pattern Usage
- Section dividers
- Card backgrounds (low opacity)
- Email newsletter backgrounds
- Social media post backgrounds
- Website hero sections

---

## Visual Hierarchy Examples

### Podcast Episode Page

```
┌─────────────────────────────────────────┐
│  [Hero Image: Hagia Sophia at sunset]   │
│                                         │
│  EPISODE 046                            │  ← Cinzel 14px, Gold
│                                         │
│  The Imperial City                      │  ← Playfair 48px, Bold
│                                         │
│  Istanbul, Turkey                       │  ← Inter 18px, Medium
│                                         │
│  [▶ PLAY BUTTON - Saffron Gold]         │
│                                         │
│  20 min • March 2024                    │  ← Inter 14px, Gray
└─────────────────────────────────────────┘
```

### Social Media Post (Instagram)

```
┌─────────────────────────┐
│                         │
│  [Image: Blue Mosque    │
│   interior tiles]       │
│                         │
│  ─────────────────────  │  ← Tile pattern divider
│                         │
│  20,000 hand-painted    │  ← Inter 16px, White
│  tiles. All in shades   │
│  of blue. 💙            │
│                         │
│  [Link in Bio]          │  ← Inter 14px, Turquoise
│                         │
└─────────────────────────┘
```

### Email Header

```
┌─────────────────────────────────────────┐
│  [Gradient: Bosphorus Blue → Turquoise] │
│                                         │
│  🇹🇷  EPISODE 046  🇹🇷                  │
│                                         │
│  The Imperial City                      │
│                                         │
│  Istanbul awaits.                       │
│  ─────────────────────────────          │
│                                         │
│  [LISTEN NOW - Gold Button]             │
└─────────────────────────────────────────┘
```

---

## Accessibility

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Passing combinations:**
  - Minaret Gray on Marble White: ✅ 10.5:1
  - Marble White on Night Black: ✅ 16:1
  - Bosphorus Blue on Marble White: ✅ 5.8:1
  - Saffron Gold on Night Black: ✅ 8.2:1

### Don't Use:
- İznik Turquoise on Marble White (fails contrast)
- Sunset Coral on Marble White (fails contrast)
- Any light color on light background

### Alt Text Guidelines
- Describe the image content and context
- Include location name if relevant
- Mention mood/atmosphere
- Keep under 125 characters when possible

**Examples:**
- "Hagia Sophia at golden hour, dome and minarets silhouetted against amber sky"
- "Close-up of Blue Mosque interior showing 20,000 hand-painted İznik tiles in shades of blue"
- "Ferry crossing the Bosphorus Strait with seagulls flying overhead, European skyline in distance"

---

## Mood Board Summary

### In One Sentence:
**"Byzantine grandeur meets Ottoman elegance, warmed by bazaar golds and cooled by Bosphorus waters, all bathed in the golden light of an Istanbul sunset."**

### Three Words:
**Layered. Luminous. Timeless.**

### Emotional Goals:
- **Awe:** Capture the grandeur of imperial architecture
- **Warmth:** Evoke Turkish hospitality and golden hour light
- **Mystery:** Hint at the city's layered, complex history
- **Connection:** Bridge between cultures, continents, eras

### Visual Don'ts:
- ❌ Overly modern, tech-heavy aesthetics (unless showing Shelby)
- ❌ Cold, sterile minimalism
- ❌ Oversaturated, HDR photography
- ❌ Generic travel brochure clichés
- ❌ Ignoring the human scale (always include people for context)

---

## Assets Checklist

### To Create:
- [ ] Hero image (Hagia Sophia at sunset)
- [ ] Logo lockup (Episode 046 + title)
- [ ] Social media templates (Instagram, Twitter, Facebook, LinkedIn)
- [ ] Email header template
- [ ] YouTube thumbnail
- [ ] Podcast cover art (if updating per episode)
- [ ] Quote graphics (6 quotes from episode)
- [ ] Icon set (15 core icons)
- [ ] Pattern library (3-5 Turkish tile patterns)
- [ ] Shelby in Istanbul images (8 prompts from image list)

### Tools:
- **Canva:** Social media templates, quote graphics
- **Figma:** Web layouts, UI components
- **Midjourney/DALL-E:** AI-generated imagery
- **Adobe Lightroom:** Photo editing, color grading
- **Google Fonts:** Typography

---

*Mood board created for Episode 046: The Imperial City. Use as reference for all visual assets across platforms.*
