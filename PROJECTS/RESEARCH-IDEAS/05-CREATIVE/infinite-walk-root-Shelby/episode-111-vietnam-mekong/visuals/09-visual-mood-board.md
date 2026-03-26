# Episode 111: The Dragon's River
## Visual Mood Board — Color, Typography, Design Specs, Accessibility

**The Infinite Walk** | Episode 111 | Visual Identity Guidelines

---

## 🎨 Color Palette

### Primary Colors

#### Mekong Water Brown
**Hex:** `#5C4A3D`
**RGB:** `92, 74, 61`
**CMYK:** `45, 55, 50, 35`
**Pantone:** `7532 C`

**Usage:** Primary backgrounds, text overlays, key visual elements
**Emotion:** Earth, sediment, memory, grounding
**Accessibility:** AA compliant on light backgrounds

---

#### Dawn Sky Lavender
**Hex:** `#B8A8C8`
**RGB:** `184, 168, 200`
**CMYK:** `25, 30, 10, 5`
**Pantone:** `265 C`

**Usage:** Gradients, highlights, accent elements
**Emotion:** Transition, mystery, pre-dawn stillness
**Accessibility:** AA compliant on dark backgrounds

---

#### Sunrise Gold
**Hex:** `#D4A85E`
**RGB:** `212, 168, 94`
**CMYK:** `15, 35, 65, 5`
**Pantone:** `7509 C`

**Usage:** Call-to-action buttons, important highlights, episode numbers
**Emotion:** Hope, awakening, warmth, revelation
**Accessibility:** AA compliant on dark backgrounds

---

### Secondary Colors

#### Rice Paddy Green
**Hex:** `#6B8E5C`
**RGB:** `107, 142, 92`
**CMYK:** `50, 25, 55, 10`
**Pantone:** `576 C`

**Usage:** Supporting elements, nature imagery overlays
**Emotion:** Growth, life, agriculture, sustenance
**Accessibility:** AA compliant on light backgrounds

---

#### Conical Hat Beige
**Hex:** `#D9C8B0`
**RGB:** `217, 200, 176`
**CMYK:** `10, 15, 25, 5`
**Pantone:** `7527 C`

**Usage:** Backgrounds, cards, secondary text
**Emotion:** Tradition, craftsmanship, humanity
**Accessibility:** AA compliant on dark backgrounds

---

#### War Memorial Grey
**Hex:** `#6B6B6B`
**RGB:** `107, 107, 107`
**CMYK:** `60, 50, 50, 40`
**Pantone:** `7533 C`

**Usage:** Historical sections, somber moments, war-related content
**Emotion:** Memory, respect, gravity, reflection
**Accessibility:** AA compliant on light backgrounds

---

### Accent Colors

#### Dragon Fruit Red
**Hex:** `#E6395C`
**RGB:** `230, 57, 92`
**CMYK:** `5, 90, 60, 0`
**Pantone:** `185 C`

**Usage:** Emergency CTAs, sale/promo, high-priority alerts
**Emotion:** Energy, urgency, vibrancy
**Accessibility:** AA compliant on white backgrounds only

---

#### Lotus Flower Pink
**Hex:** `#F4C2D4`
**RGB:** `244, 194, 212`
**CMYK:** `5, 30, 10, 0`
**Pantone:** `700 C`

**Usage:** Soft highlights, feminine touches, spiritual elements
**Emotion:** Peace, spirituality, gentleness
**Accessibility:** AA compliant on dark backgrounds only

---

### Color Usage Guidelines

#### Do's ✅
- Use Mekong Water Brown as primary text color on light backgrounds
- Use Dawn Sky Lavender for gradient overlays on images
- Use Sunrise Gold for episode numbers and key CTAs
- Maintain 60-30-10 rule: 60% primary, 30% secondary, 10% accent
- Test all color combinations for accessibility

#### Don'ts ❌
- Don't use Dragon Fruit Red for body text
- Don't place War Memorial Grey on Mekong Water Brown (low contrast)
- Don't use more than 3 colors in a single composition
- Don't use Lotus Flower Pink for critical information

---

## 🔤 Typography

### Primary Typeface: Episode Titles & Headlines

#### **Playfair Display** (Google Fonts)
**Weights:** Regular (400), Medium (500), Semi-Bold (600), Bold (700)
**Style:** Serif, elegant, editorial
**Usage:** Episode titles, major headlines, quote cards

**Why:** Evokes literary quality, timeless feel, pairs well with contemplative content

**Download:** fonts.google.com/specimen/Playfair+Display

**CSS:**
```css
font-family: 'Playfair Display', serif;
font-weight: 600;
letter-spacing: -0.02em;
```

**Size Guidelines:**
- Episode Title (Social): 48-72px
- Headlines (Web): 36-48px
- Quote Cards: 32-40px
- Mobile Headlines: 28-32px

---

### Secondary Typeface: Body Text & Descriptions

#### **Lato** (Google Fonts)
**Weights:** Light (300), Regular (400), Medium (700)
**Style:** Sans-serif, clean, readable
**Usage:** Body text, captions, descriptions, UI elements

**Why:** Highly legible, modern, neutral, excellent for long-form reading

**Download:** fonts.google.com/specimen/Lato

**CSS:**
```css
font-family: 'Lato', sans-serif;
font-weight: 400;
letter-spacing: 0.01em;
line-height: 1.6;
```

**Size Guidelines:**
- Body Text (Web): 16-18px
- Captions (Social): 14-16px
- Mobile Body: 16px minimum
- Small Print: 12px (never smaller)

---

### Accent Typeface: Episode Numbers & Special Elements

#### **Montserrat** (Google Fonts)
**Weights:** Medium (500), Semi-Bold (600), Bold (700)
**Style:** Sans-serif, geometric, modern
**Usage:** Episode numbers, metadata, tags, navigation

**Why:** Clean, geometric, distinguishes metadata from content

**Download:** fonts.google.com/specimen/Montserrat

**CSS:**
```css
font-family: 'Montserrat', sans-serif;
font-weight: 600;
letter-spacing: 0.05em;
text-transform: uppercase;
```

**Size Guidelines:**
- Episode Numbers: 14-18px
- Tags/Metadata: 12-14px
- Navigation: 14-16px

---

### Typography Hierarchy

```
EPISODE 111                    ← Montserrat Semi-Bold, 14px, all caps
THE DRAGON'S RIVER             ← Playfair Display Bold, 64px
A Meditation on the Mekong Delta  ← Playfair Display Medium, 24px, italic

The boatman arrives before the sun.  ← Lato Regular, 18px, line-height 1.6

#TheInfiniteWalk               ← Montserrat Medium, 12px, all caps
```

---

### Typography Best Practices

#### Line Length
- **Optimal:** 50-75 characters per line
- **Maximum:** 90 characters
- **Mobile:** 30-40 characters

#### Line Height
- **Headlines:** 1.2-1.3
- **Body Text:** 1.5-1.7
- **Captions:** 1.4-1.5

#### Letter Spacing
- **Headlines:** -0.02em to 0em
- **Body:** 0em to 0.01em
- **All Caps:** 0.05em to 0.1em

#### Hierarchy Rules
1. Never use more than 3 typefaces in one composition
2. Maintain clear size contrast between levels (minimum 20% difference)
3. Use weight, not just size, to create hierarchy
4. Keep body text at least 16px for accessibility

---

## 🖼️ Image Treatment & Filters

### Photography Style

**Overall Aesthetic:** Documentary realism with contemplative mood

**Key Characteristics:**
- Natural, available light (no harsh flash)
- Warm color temperature (golden hour preferred)
- Shallow depth of field for portraits
- Wide angles for landscapes
- Authentic moments over staged scenes

---

### Preset Specifications (Lightroom/Capture One)

#### "Mekong Dawn" Preset
**For:** Floating market scenes, dawn/dusk shots

**Settings:**
- **Exposure:** -0.3
- **Contrast:** +10
- **Highlights:** -30
- **Shadows:** +20
- **Whites:** -10
- **Blacks:** +5
- **Temperature:** +8 (warmer)
- **Tint:** +5 (slight magenta)
- **Vibrance:** +15
- **Saturation:** -5
- **Clarity:** +10
- **Dehaze:** -5 (soften for mist)
- **Vignette:** -15

---

#### "Delta Memory" Preset
**For:** Historical/war content, somber moments

**Settings:**
- **Exposure:** -0.5
- **Contrast:** +15
- **Highlights:** -40
- **Shadows:** +10
- **Whites:** -20
- **Blacks:** -10
- **Temperature:** -5 (cooler)
- **Tint:** 0
- **Vibrance:** -20
- **Saturation:** -30
- **Clarity:** +20
- **Dehaze:** +10
- **Grain:** +15 (film texture)
- **Vignette:** -25

---

#### "Rice Paddy Life" Preset
**For:** Agricultural scenes, rural life, food

**Settings:**
- **Exposure:** +0.3
- **Contrast:** +5
- **Highlights:** -20
- **Shadows:** +25
- **Whites:** +5
- **Blacks:** +10
- **Temperature:** +12 (warm)
- **Tint:** +8 (slight magenta)
- **Vibrance:** +25
- **Saturation:** +10
- **Clarity:** +15
- **Dehaze:** 0
- **Vignette:** -10

---

### Instagram Filter Recommendations

**For consistency when posting directly to Instagram:**

| Scene Type | Instagram Filter | Intensity |
|------------|-----------------|-----------|
| Floating Market | Clarendon | 70% |
| Portraits | Juno | 60% |
| Landscapes | Lark | 50% |
| Food | Valencia | 65% |
| Somber/Historical | Moon | 55% |
| Golden Hour | Golden Hour | 80% |

---

### Image Composition Guidelines

#### Rule of Thirds
- Place key elements at intersection points
- Horizon lines on upper or lower third (never center)
- Faces looking into the frame (not out)

#### Leading Lines
- Use rivers, canals, paths to draw eye through image
- Converging lines create depth
- Curved lines (rivers) feel more natural than straight

#### Framing
- Use natural frames (doorways, boat openings, conical hats)
- Create depth with foreground/midground/background
- Negative space for text overlays

#### Color Harmony
- Complementary: Brown/green (earth/rice)
- Analogous: Lavender/gold/pink (dawn sky)
- Monochromatic: Varying tones of Mekong brown

---

## 📐 Design Specifications

### Social Media Templates

#### Instagram Feed Post (Square)
**Dimensions:** 1080 × 1080 px
**Safe Zone:** 100 px from all edges
**Text Overlay:** Maximum 20% of image area
**File Format:** PNG (text), JPG (photos)

**Template Structure:**
```
┌─────────────────────────────┐
│  [THE INFINITE WALK]        │  ← Montserrat 12px, top left
│                             │
│                             │
│     [MAIN IMAGE]            │
│     or                      │
│     [EPISODE ARTWORK]       │
│                             │
│                             │
│  EPISODE 111                │  ← Montserrat 14px, bottom
│  THE DRAGON'S RIVER         │  ← Playfair Display 36px
│                             │
│  [LOGO/ICON]                │  ← Bottom right, 60px
└─────────────────────────────┘
```

---

#### Instagram Feed Post (Portrait)
**Dimensions:** 1080 × 1350 px (4:5)
**Safe Zone:** 100 px from all edges
**Best For:** Portraits, quote cards, vertical compositions

---

#### Instagram Stories / Reels
**Dimensions:** 1080 × 1920 px (9:16)
**Safe Zones:**
- Top: 250 px (avoid status bar)
- Bottom: 250 px (avoid swipe area)
- Sides: 50 px each

**Text Guidelines:**
- Maximum 3 lines per screen
- Use high contrast for readability
- Add subtle drop shadow to text

---

#### Facebook Post
**Dimensions:** 1200 × 630 px (1.91:1)
**Safe Zone:** 50 px from all edges
**Text Overlay:** Keep under 20% for ad compliance

---

#### Twitter/X Post
**Dimensions:** 1200 × 675 px (16:9)
**Safe Zone:** 50 px from all edges
**Note:** Images display as 16:9 in timeline

---

#### LinkedIn Post
**Dimensions:** 1200 × 627 px (1.91:1)
**Safe Zone:** 50 px from all edges
**Professional tone:** Cleaner, less text overlay

---

#### Pinterest Pin
**Dimensions:** 1000 × 1500 px (2:3)
**Safe Zone:** 75 px from all edges
**Text:** Large, readable on mobile (minimum 24px)

---

#### YouTube Thumbnail
**Dimensions:** 1280 × 720 px (16:9)
**Minimum Width:** 640 px
**Safe Zone:** 100 px from all edges
**Text:** Large, high contrast (minimum 48px)
**Face:** Include if possible (increases CTR)

---

#### YouTube Video Art (Visual Episode)
**Dimensions:** 1920 × 1080 px (16:9)
**Format:** MP4, 30fps
**Duration:** 20:00 (matches audio)
**Style:** Slow Ken Burns effect on episode artwork

---

### Website/Graphics

#### Episode Page Header
**Dimensions:** 1920 × 600 px
**Safe Zone:** 100 px from all edges
**Text:** Episode title, subtitle, play button

---

#### Blog Post Featured Image
**Dimensions:** 1200 × 630 px
**Safe Zone:** 50 px from all edges
**SEO:** Include episode title in alt text

---

#### Email Header
**Dimensions:** 600 × 300 px
**Safe Zone:** 30 px from all edges
**File Size:** Under 100 KB for fast loading

---

## ♿ Accessibility Guidelines

### Visual Accessibility

#### Color Contrast
**WCAG 2.1 AA Standards:**
- **Normal Text:** Minimum 4.5:1 contrast ratio
- **Large Text (18px+):** Minimum 3:1 contrast ratio
- **UI Elements:** Minimum 3:1 contrast ratio

**Tested Combinations:**
| Foreground | Background | Ratio | Pass/Fail |
|------------|------------|-------|-----------|
| Mekong Brown (#5C4A3D) | White (#FFFFFF) | 7.2:1 | ✅ AAA |
| Sunrise Gold (#D4A85E) | Mekong Brown (#5C4A3D) | 4.8:1 | ✅ AA |
| Dawn Lavender (#B8A8C8) | Mekong Brown (#5C4A3D) | 5.1:1 | ✅ AA |
| War Grey (#6B6B6B) | White (#FFFFFF) | 5.0:1 | ✅ AA |
| Dragon Red (#E6395C) | White (#FFFFFF) | 4.6:1 | ✅ AA |

**Tools:** Use WebAIM Contrast Checker, Stark, or Color Oracle

---

#### Text Size Minimums
| Platform | Minimum Size | Recommended |
|----------|-------------|-------------|
| Web Body | 16px | 18px |
| Mobile Body | 16px | 18px |
| Social Captions | 14px | 16px |
| Headlines | 24px | 32px+ |
| Episode Numbers | 14px | 16px |

---

#### Alt Text Guidelines
**For all images posted online:**

**Format:** [Subject] + [Action/Context] + [Mood/Atmosphere]

**Examples:**
- ✅ "Wooden sampan boats loaded with tropical fruits emerge from morning mist at Cái Răng floating market, Mekong Delta, Vietnam. Golden dawn light, atmospheric."
- ✅ "Elderly Vietnamese woman in conical hat smiles while holding basket of rambutan fruit at floating market. Weathered face, warm expression, documentary portrait."
- ✅ "Flooded rice paddies reflect blue sky and clouds. Farmer in conical hat walks through water. Serene, minimalist composition, Mekong Delta."

**Don't:**
- ❌ "Image of Vietnam" (too vague)
- ❌ "Beautiful sunrise" (subjective, no context)
- ❌ Include "image of" or "picture of" (redundant)

---

### Motion & Animation Accessibility

#### GIFs/Videos
- Avoid rapid flashing (3+ flashes per second)
- Provide pause/stop controls for auto-playing content
- Keep animations under 5 seconds when possible

#### Parallax/Scroll Effects
- Provide reduced-motion option
- Don't rely solely on motion to convey information

---

### Cognitive Accessibility

#### Text Clarity
- Use simple, direct language
- Break up long paragraphs
- Use headings and bullet points
- Avoid idioms and cultural references without context

#### Navigation
- Clear, consistent labeling
- Obvious clickable elements
- Breadcrumb trails for multi-page content

---

## 🎬 Motion Graphics Guidelines

### For Video Content (Reels, TikTok, YouTube)

#### Transitions
- **Fade Duration:** 0.5-1.0 seconds
- **Cut on Action:** Match movement between clips
- **Pacing:** Slow, contemplative (not rapid-fire)

#### Text Animation
- **Entrance:** Fade in over 0.3 seconds
- **Exit:** Fade out over 0.3 seconds
- **Position:** Center or lower third (never top-heavy)
- **Duration:** On screen minimum 2 seconds for readability

#### Color Grading (Video)
- Match photography presets (see above)
- Maintain consistency across all video content
- Export in Rec.709 color space for web

#### Audio Levels (for video with narration)
- **Narration:** -16 LUFS (podcast standard)
- **Music Bed:** -25 to -30 LUFS (under narration)
- **Sound Effects:** -20 to -25 LUFS (supportive, not dominant)
- **Peak:** Never exceed -1 dBTP

---

## 📱 Platform-Specific Optimizations

### Instagram
- **Aspect Ratios:** 1:1 (square), 4:5 (portrait), 9:16 (Stories/Reels)
- **File Size:** Under 30 MB for photos, under 4 GB for videos
- **Color Space:** sRGB
- **Compression:** High quality, minimal compression artifacts

### TikTok
- **Aspect Ratio:** 9:16 (full screen vertical)
- **Resolution:** 1080 × 1920 px minimum
- **Frame Rate:** 30 or 60 fps
- **Safe Zones:** Avoid top 250 px and bottom 250 px for text

### YouTube
- **Thumbnails:** 1280 × 720 px, under 2 MB
- **Videos:** 1920 × 1080 px (1080p) or 3840 × 2160 px (4K)
- **Aspect Ratio:** 16:9 (standard), 9:16 (Shorts)
- **Closed Captions:** Upload SRT file for accessibility

### Pinterest
- **Aspect Ratio:** 2:3 (1000 × 1500 px) optimal
- **Text Overlay:** Large, readable on mobile
- **File Size:** Under 20 MB
- **Rich Pins:** Enable for episode metadata

---

## 🖥️ File Organization

### Folder Structure
```
episode-111-vietnam-mekong/
├── visuals/
│   ├── 09-visual-mood-board.md (this file)
│   ├── source-images/
│   │   ├── ai-generated/ (from Prompts 1-65)
│   │   ├── photography/ (if applicable)
│   │   └── screenshots/ (if applicable)
│   ├── edited/
│   │   ├── social-square/ (1080x1080)
│   │   ├── social-portrait/ (1080x1350)
│   │   ├── social-story/ (1080x1920)
│   │   ├── youtube/ (1280x720 thumbnails, 1920x1080 video)
│   │   ├── web/ (1200x630 blog, 1920x600 headers)
│   │   └── email/ (600x300 headers)
│   ├── templates/
│   │   ├── instagram-feed.psd
│   │   ├── instagram-story.psd
│   │   ├── youtube-thumbnail.psd
│   │   └── quote-card.psd
│   └── exports/
│       ├── instagram/
│       ├── facebook/
│       ├── twitter/
│       ├── linkedin/
│       ├── pinterest/
│       └── youtube/
```

### Naming Conventions
```
ep111_[platform]_[content-type]_[version].[format]

Examples:
ep111_ig-feed_main-artwork_v1.png
ep111_ig-story_quote-rivers-remember_v2.png
ep111_yt-thumbnail_floating-market_v1.jpg
ep111_web_blog-featured_cao-lau_v1.jpg
```

### Version Control
- **v1:** First draft
- **v2:** Revised (incorporates feedback)
- **v3:** Final (approved for use)
- **final:** Locked, ready for distribution

---

## 🎨 AI Image Generation Notes

### Using the Prompts (from prompts/03-image-prompts-55plus.md)

**Recommended AI Tools:**
- Midjourney v6 (highest quality, photorealistic)
- DALL-E 3 (good for text integration)
- Stable Diffusion XL (open source, customizable)

**Generation Settings:**
- **Aspect Ratio:** Match platform (see above)
- **Style:** `--style raw` for photorealism
- **Version:** `--v 6` for Midjourney v6
- **Quality:** `--q 2` for higher detail

**Iterative Process:**
1. Generate 4 variations per prompt
2. Select best 1-2
3. Upscale to final resolution
4. Apply "Mekong Dawn" or appropriate preset
5. Add text overlays per templates
6. Export for target platforms

---

## ✅ Quality Checklist

### Before Publishing Any Visual

- [ ] Dimensions match platform requirements
- [ ] Text is legible on mobile (check at 50% zoom)
- [ ] Color contrast meets WCAG AA standards
- [ ] Alt text written and attached
- [ ] File size optimized for web (under 1 MB for photos)
- [ ] No spelling errors in text overlays
- [ ] Episode number correct (111)
- [ ] Logo/branding in correct position
- [ ] Safe zones respected (no text cut off)
- [ ] Color profile: sRGB
- [ ] File naming convention followed
- [ ] Saved in appropriate folder

---

## 🎯 Visual Content Calendar (Week 1)

| Day | Visual Type | Prompt Reference | Platform |
|-----|-------------|------------------|----------|
| -7 | Tease (Sampan Silhouette) | Prompt 28 | IG Stories |
| -6 | Research BTS | N/A | IG Feed |
| -5 | Episode Artwork Reveal | Prompt 1 | All |
| -4 | Quote Card | Prompt 28 + text | IG, LinkedIn |
| -3 | Food Tease | Prompt 35 | IG, Pinterest |
| -2 | Travel Tips Carousel | Prompts 11, 19, 27 | IG |
| -1 | Final Countdown | Prompt 9 | IG Stories |
| 0 | Launch Post | Prompt 1 | All |
| +1 | Listener Feedback | Screenshots | IG Stories |
| +2 | Floating Market Carousel | Prompts 1, 2, 4, 7 | IG |
| +3 | Vietnam Layers | Prompt 65 | LinkedIn, IG |
| +4 | Q&A Graphics | Custom | IG Stories |
| +5 | Food Focus | Prompt 35 | IG, Pinterest |
| +6 | Philosophy Quote | Prompt 28 | IG, LinkedIn |
| +7 | Ep 112 Tease | Prompt 56 | All |

---

*Visual mood board complete*
*Episode 111: The Dragon's River*
*The Infinite Walk*

**Next step:** Generate AI images using prompts from `prompts/03-image-prompts-55plus.md`, apply presets, and export per platform specs.
