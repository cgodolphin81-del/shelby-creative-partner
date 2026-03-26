# Visual Identity Guidelines

## Shelby's Look & Feel

This document defines the visual elements that make Shelby recognizable across platforms while maintaining consistency and professionalism.

---

## 🎨 Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Shelby Blue** | `#2563EB` | 37, 99, 235 | Primary actions, links, key elements |
| **Deep Navy** | `#1E3A5F` | 30, 58, 95 | Headlines, emphasis, dark backgrounds |
| **Electric Teal** | `#14B8A6` | 20, 184, 166 | Highlights, success states, accents |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Pure White** | `#FFFFFF` | 255, 255, 255 | Primary backgrounds |
| **Light Gray** | `#F3F4F6` | 243, 244, 246 | Secondary backgrounds, cards |
| **Medium Gray** | `#6B7280` | 107, 114, 128 | Secondary text, borders |
| **Dark Gray** | `#374151` | 55, 65, 81 | Body text, UI elements |
| **Pure Black** | `#000000` | 0, 0, 0 | Rarely used (too harsh) |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Completed tasks, positive states |
| **Warning** | `#F59E0B` | Caution, attention needed |
| **Error** | `#EF4444` | Errors, problems, destructive actions |
| **Info** | `#3B82F6` | Informational messages |

### Color Usage Guidelines

**Do:**
- ✅ Use Shelby Blue as the primary brand color
- ✅ Maintain sufficient contrast for accessibility (WCAG AA minimum)
- ✅ Use semantic colors consistently (success = green, error = red)
- ✅ Test colors across different screens and lighting

**Don't:**
- ❌ Use pure black for text (too harsh against white)
- ❌ Mix too many colors in one composition
- ❌ Use colors that clash with the palette
- ❌ Ignore accessibility requirements

---

## 🔤 Typography

### Primary Font Family

**Inter** (or system sans-serif fallback)

- Clean, modern, highly readable
- Works well at all sizes
- Excellent screen rendering
- Free and widely available

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, general content |
| Medium | 500 | Subheadings, emphasis |
| Semi-bold | 600 | Section headings |
| Bold | 700 | Main headings, CTAs |

### Font Sizes

| Element | Size | Line Height |
|---------|------|-------------|
| H1 | 2.5rem (40px) | 1.2 |
| H2 | 2rem (32px) | 1.25 |
| H3 | 1.5rem (24px) | 1.3 |
| H4 | 1.25rem (20px) | 1.4 |
| Body | 1rem (16px) | 1.6 |
| Small | 0.875rem (14px) | 1.5 |
| Tiny | 0.75rem (12px) | 1.4 |

### Typography Guidelines

**Do:**
- ✅ Maintain clear hierarchy (H1 > H2 > H3 > body)
- ✅ Use generous line height for readability
- ✅ Keep line length under 75 characters for body text
- ✅ Use font weight (not just size) to create hierarchy

**Don't:**
- ❌ Use more than 2-3 font families in one design
- ❌ Set body text smaller than 16px for web
- ❌ Use all caps for long passages
- ❌ Ignore responsive typography (scale for mobile)

---

## 🤖 Logo & Emoji

### Primary Logo

**Text + Emoji Lockup:**

```
Shelby 🤖
```

- "Shelby" in Inter Semi-bold
- Robot emoji (🤖) as visual identifier
- Consistent spacing between text and emoji

### Logo Variations

| Variation | Usage |
|-----------|-------|
| **Full color** | Primary use, light backgrounds |
| **White on dark** | Dark backgrounds, overlays |
| **Text only** | When emoji isn't appropriate |
| **Icon only** | Favicons, app icons, small spaces |

### Logo Clear Space

Maintain clear space around the logo:

```
Minimum clear space = height of the "S" in Shelby

  [clear]  Shelby 🤖  [clear]
  [clear]             [clear]
  [clear]             [clear]
```

### Logo Don'ts

❌ Don't stretch or distort  
❌ Don't change colors arbitrarily  
❌ Don't add effects (shadows, gradients, etc.)  
❌ Don't rotate or flip  
❌ Don't place on busy backgrounds without contrast  

---

## 📐 Layout & Spacing

### Grid System

**Base Unit:** 8px

All spacing should be multiples of 8px:
- 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| XS | 8px | Tight spacing, inline elements |
| SM | 16px | Standard spacing, form elements |
| MD | 24px | Section spacing, card padding |
| LG | 32px | Large section gaps |
| XL | 48px | Major section divisions |
| XXL | 64px+ | Hero sections, major breaks |

### Layout Principles

1. **Consistency** — Use the spacing scale, don't invent new values
2. **Hierarchy** — More space = more separation/importance
3. **Breathing room** — Don't crowd elements
4. **Responsive** — Adjust spacing for different screen sizes

---

## 🖼️ Imagery

### Photography Style

**When using photos:**

- Clean, modern aesthetic
- Natural lighting when possible
- Diverse representation
- Authentic moments, not stock-photo stiffness
- Technology shown in context (not isolated on white)

### AI-Generated Images

**For AI-generated visuals:**

- Consistent style across assets
- Avoid uncanny valley (don't try to look human)
- Embrace the AI nature (can be stylized, abstract)
- High quality, no obvious artifacts

### Iconography

**Style:**

- Simple, clean lines
- Consistent stroke weight
- Filled or outlined (not mixed)
- Recognizable at small sizes

**Recommended Sets:**

- Heroicons (free, clean, matches Inter)
- Phosphor Icons (comprehensive, consistent)
- Lucide (fork of Feather, well-maintained)

---

## 🎭 Tone & Voice (Visual)

### Visual Personality

Shelby's visual identity should feel:

| Trait | Visual Expression |
|-------|-------------------|
| **Warm** | Friendly colors, approachable imagery, not cold/corporate |
| **Competent** | Clean layouts, clear hierarchy, professional polish |
| **Straightforward** | No decorative fluff, form follows function |
| **Modern** | Current design trends, not dated aesthetics |
| **Accessible** | High contrast, readable fonts, inclusive imagery |

### What to Avoid

❌ Overly corporate/sterile (too cold)  
❌ Playful/cartoonish (undermines competence)  
❌ Dark/gothic (wrong vibe entirely)  
❌ Cluttered/busy (undermines clarity)  
❌ Outdated design trends (feels stale)  

---

## 📱 Platform-Specific Guidelines

### Website

- Full color palette available
- Interactive elements (hover states, animations)
- Responsive across all screen sizes
- Fast loading (optimize images)

### Social Media

| Platform | Image Sizes | Notes |
|----------|-------------|-------|
| **Twitter** | 1200x675 (16:9) | Text overlay works well |
| **Instagram Feed** | 1080x1080 (1:1) or 1080x1350 (4:5) | Vertical performs better |
| **Instagram Stories** | 1080x1920 (9:16) | Full vertical |
| **LinkedIn** | 1200x627 (1.91:1) | Professional context |
| **GitHub** | 400x400 (1:1) | Profile, repo thumbnails |

### Presentations

- Use brand colors consistently
- Large, readable fonts (24px minimum for body)
- High contrast for projection
- Minimal text per slide
- Include logo on title slide

### Print

- CMYK color conversion (test before mass printing)
- High resolution (300 DPI minimum)
- Bleed margins for professional printing
- Vector logos when possible

---

## ♿ Accessibility

### Color Contrast

All text must meet WCAG AA standards:

- **Normal text:** 4.5:1 contrast ratio minimum
- **Large text (18px+):** 3:1 contrast ratio minimum
- **UI elements:** 3:1 contrast ratio minimum

**Tested combinations:**

| Foreground | Background | Ratio | Pass? |
|------------|------------|-------|-------|
| Deep Navy | White | 12.5:1 | ✅ |
| Shelby Blue | White | 4.5:1 | ✅ |
| Medium Gray | White | 5.0:1 | ✅ |
| White | Deep Navy | 12.5:1 | ✅ |

### Alt Text

All images need descriptive alt text:

**Good:** "Shelby dashboard showing project status with three active tasks"  
**Bad:** "dashboard.png" or "image of dashboard"

### Keyboard Navigation

All interactive elements must be:
- Reachable via keyboard (Tab key)
- Clearly focused when selected
- Usable without a mouse

### Screen Readers

- Semantic HTML (headings, lists, landmarks)
- ARIA labels where needed
- Logical reading order
- No information conveyed by color alone

---

## 📦 Asset Organization

### File Naming

```
shelby-[asset-type]-[variation]-[size].[format]

Examples:
shelby-logo-fullcolor-primary.svg
shelby-logo-white-reverse.svg
shelby-avatar-square-400.png
shelby-icon-favicon-32.png
```

### File Formats

| Use Case | Format | Notes |
|----------|--------|-------|
| **Logos** | SVG (primary), PNG (fallback) | Vector when possible |
| **Photos** | JPG (photos), PNG (graphics) | Compressed for web |
| **Icons** | SVG | Scalable, crisp |
| **Documents** | PDF | Print-ready |
| **Social** | PNG | Best quality/size ratio |

### Version Control

- Keep source files (Figma, Sketch, etc.)
- Export production-ready assets separately
- Version major updates (v1, v2, etc.)
- Document changes in changelog

---

## 🔄 Evolution

### When to Update

Visual identity should evolve when:

- ✅ Brand positioning shifts significantly
- ✅ Accessibility improvements are identified
- ✅ New platforms require adaptation
- ✅ Design trends meaningfully improve communication

### When NOT to Update

- ❌ Boredom ("let's refresh for no reason")
- ❌ Following every trend
- ❌ Personal preference without data
- ❌ Minor tweaks that confuse recognition

### Change Management

When updating visual identity:

1. Document the rationale
2. Update all assets systematically
3. Communicate changes to stakeholders
4. Maintain backward compatibility during transition
5. Update this document

---

## 📋 Quick Reference

### Colors (Hex)

```
Primary:    #2563EB (Shelby Blue)
Dark:       #1E3A5F (Deep Navy)
Accent:     #14B8A6 (Electric Teal)
Background: #FFFFFF (White)
Text:       #374151 (Dark Gray)
```

### Fonts

```
Family: Inter, system-sans-serif
Weights: 400 (body), 600 (headings), 700 (emphasis)
```

### Logo

```
Shelby 🤖
```

### Spacing

```
Base unit: 8px
Scale: 8, 16, 24, 32, 48, 64, 96, 128
```

---

*Visual identity guidelines last updated: March 2026. For asset downloads, contact [design contact].*
