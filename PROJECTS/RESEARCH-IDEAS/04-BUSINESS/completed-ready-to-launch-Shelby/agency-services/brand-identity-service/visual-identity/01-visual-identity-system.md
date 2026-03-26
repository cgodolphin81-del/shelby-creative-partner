# Visual Identity System

## Overview

This document defines the complete visual identity system for [Brand Name]. These elements work together to create a cohesive, recognizable brand across all touchpoints.

---

## 1. Logo System

### Primary Logo

**Description:** [Brief description of the primary logo]

**Usage:** Default logo for most applications

**File Formats:** `.AI`, `.EPS`, `.SVG`, `.PNG`, `.JPG`

**Minimum Size:** 
- Print: 1" width
- Digital: 120px width

![Primary Logo](placeholder-primary.png)

---

### Secondary Logo

**Description:** [When and why to use the secondary logo]

**Usage:** When primary logo doesn't fit the space

**File Formats:** `.AI`, `.EPS`, `.SVG`, `.PNG`

![Secondary Logo](placeholder-secondary.png)

---

### Logo Mark/Icon

**Description:** [The symbolic element of the logo]

**Usage:** 
- Social media profile images
- Favicons
- App icons
- Small applications (under 120px)
- Merchandise

**File Formats:** `.AI`, `.EPS`, `.SVG`, `.PNG`

![Logo Mark](placeholder-mark.png)

---

### Wordmark

**Description:** [Text-only version of the logo]

**Usage:** 
- When icon is already present
- Long-form applications
- Partner co-branding

**File Formats:** `.AI`, `.EPS`, `.SVG`, `.PNG`

![Wordmark](placeholder-wordmark.png)

---

### Layout Variations

**Horizontal:**
- For wide spaces
- Website headers
- Letterheads
- Business cards

**Vertical/Stacked:**
- For tall spaces
- Social media posts
- Signage
- Apparel

![Layout Variations](placeholder-layouts.png)

---

## 2. Color System

### Primary Palette

These colors define the brand and should be used prominently.

#### [Primary Color Name]

```
HEX: #000000
RGB: 0, 0, 0
CMYK: 0, 0, 0, 100
Pantone: [PMS Number]
```

**Usage:** Primary buttons, headlines, key brand elements

**Psychology:** [What this color communicates]

![Color Swatch](placeholder-color-1.png)

---

#### [Secondary Color Name]

```
HEX: #000000
RGB: 0, 0, 0
CMYK: 0, 0, 0, 100
Pantone: [PMS Number]
```

**Usage:** Secondary elements, CTAs, highlights

**Psychology:** [What this color communicates]

![Color Swatch](placeholder-color-2.png)

---

### Extended Palette

Additional colors for variety and flexibility.

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| [Color 1] | #000000 | 0,0,0 | [Usage] |
| [Color 2] | #000000 | 0,0,0 | [Usage] |
| [Color 3] | #000000 | 0,0,0 | [Usage] |
| [Color 4] | #000000 | 0,0,0 | [Usage] |
| [Color 5] | #000000 | 0,0,0 | [Usage] |

---

### Neutral Palette

For backgrounds, text, and supporting elements.

| Name | HEX | Usage |
|------|-----|-------|
| White | #FFFFFF | Backgrounds, text on dark |
| Light Gray | #F5F5F5 | Backgrounds, dividers |
| Medium Gray | #9CA3AF | Secondary text, borders |
| Dark Gray | #374151 | Body text |
| Black | #000000 | Headlines, primary text |

---

### Color Combinations

**Approved Pairings:**

| Background | Text | Accent | Use Case |
|------------|------|--------|----------|
| White | Black | [Primary] | Default UI |
| [Primary] | White | White | Buttons, CTAs |
| [Dark] | White | [Accent] | Hero sections |
| Light Gray | Dark Gray | [Primary] | Cards, panels |

---

### Gradient System

**Primary Gradient:**
```
Linear Gradient: [Color 1] → [Color 2]
Angle: 135°
```

**Usage:** Buttons, backgrounds, special features

**CSS:**
```css
background: linear-gradient(135deg, #000000 0%, #000000 100%);
```

---

### Accessibility

**WCAG 2.1 AA Compliance:**

All color combinations meet minimum contrast ratios:

- **Normal text:** 4.5:1 minimum
- **Large text (18px+):** 3:1 minimum
- **UI components:** 3:1 minimum

**Tools for Testing:**
- WebAIM Contrast Checker
- Stark (Figma/Sketch plugin)
- Color Oracle (color blindness simulator)

---

## 3. Typography System

### Primary Typeface

**[Font Name]**

**Designer:** [Designer name]
**Foundry:** [Foundry name]
**License:** [License type]

**Weights:**
- Light (300)
- Regular (400)
- Medium (500)
- Semibold (600)
- Bold (700)

**Usage:** Headlines, display text, prominent elements

**Characteristics:** [Describe the font's personality]

![Font Sample](placeholder-font-1.png)

**Web Font:**
```html
<link href="https://fonts.googleapis.com/css2?family=[FontName]:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
font-family: '[Font Name]', sans-serif;
```

---

### Secondary Typeface

**[Font Name]**

**Designer:** [Designer name]
**Foundry:** [Foundry name]
**License:** [License type]

**Weights:**
- Regular (400)
- Italic (400)
- Bold (700)

**Usage:** Body text, long-form content, UI text

**Characteristics:** [Describe the font's personality]

![Font Sample](placeholder-font-2.png)

---

### Typography Scale

**Desktop:**

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Display | 64px | Bold | 1.1 | -0.02em |
| H1 | 48px | Bold | 1.2 | -0.02em |
| H2 | 36px | Semibold | 1.3 | -0.01em |
| H3 | 28px | Semibold | 1.4 | 0 |
| H4 | 24px | Medium | 1.4 | 0 |
| H5 | 20px | Medium | 1.5 | 0 |
| Body Large | 18px | Regular | 1.6 | 0 |
| Body | 16px | Regular | 1.6 | 0 |
| Small | 14px | Regular | 1.5 | 0.01em |
| Caption | 12px | Regular | 1.4 | 0.02em |

**Mobile:**

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Display | 40px | Bold | 1.2 |
| H1 | 32px | Bold | 1.3 |
| H2 | 28px | Semibold | 1.3 |
| H3 | 24px | Semibold | 1.4 |
| H4 | 20px | Medium | 1.4 |
| Body | 16px | Regular | 1.6 |
| Small | 14px | Regular | 1.5 |

---

### Text Styles

**Heading:**
```css
font-family: '[Primary Font]', sans-serif;
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;
color: #000000;
```

**Body:**
```css
font-family: '[Secondary Font]', serif;
font-weight: 400;
line-height: 1.6;
color: #374151;
```

**Button:**
```css
font-family: '[Primary Font]', sans-serif;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Caption:**
```css
font-family: '[Secondary Font]', serif;
font-weight: 400;
font-size: 12px;
line-height: 1.4;
color: #9CA3AF;
```

---

## 4. Icon System

### Icon Style

**Style:** [Outlined / Filled / Duotone / Flat]

**Stroke Width:** 2px

**Corner Radius:** 2px (slightly rounded)

**Grid:** 24x24px base grid

![Icon Examples](placeholder-icons.png)

---

### Icon Sizes

| Size | Usage |
|------|-------|
| 16x16 | Small UI elements |
| 24x24 | Standard UI icons |
| 32x32 | Toolbar icons |
| 48x48 | Feature icons |
| 64x64 | Marketing icons |
| 96x96 | Hero icons |

---

### Icon Library

**Primary Icons:**
- Home
- Search
- User/Profile
- Settings
- Notifications
- Menu
- Close
- Check
- Error
- Warning
- Info
- Arrow Left
- Arrow Right
- Arrow Up
- Arrow Down
- Download
- Upload
- Share
- Edit
- Delete
- Add/Plus
- Minus
- Filter
- Sort

**File Formats:** `.SVG`, `.PNG` (various sizes)

**Icon Font:** [If applicable]

---

## 5. Pattern & Texture System

### Brand Patterns

**Pattern 1: [Name]**

**Description:** [Describe the pattern]

**Usage:** Backgrounds, dividers, accent elements

**File:** `.SVG`, `.PNG` (seamless tile)

![Pattern 1](placeholder-pattern-1.png)

---

**Pattern 2: [Name]**

**Description:** [Describe the pattern]

**Usage:** [Specific use cases]

**File:** `.SVG`, `.PNG` (seamless tile)

![Pattern 2](placeholder-pattern-2.png)

---

### Textures

**Texture 1: [Name]**

**Description:** [Subtle grain, paper, fabric, etc.]

**Usage:** Backgrounds, overlays

**Opacity:** 5-10%

![Texture 1](placeholder-texture-1.png)

---

## 6. Imagery System

### Photography Style

**Mood:** [Warm, cool, vibrant, muted, etc.]

**Lighting:** [Natural, studio, dramatic, soft]

**Composition:** [Rule of thirds, centered, environmental]

**Subjects:** [People, products, environments, abstract]

**Color Treatment:** [Describe any color grading]

---

### Photography Guidelines

**DO:**
✓ Use authentic, candid moments
✓ Show diverse people and settings
✓ Maintain consistent color treatment
✓ Use high-resolution images (300 DPI for print)
✓ Include negative space for text overlay

**DON'T:**
✗ Use generic stock photography
✗ Over-edit or apply heavy filters
✗ Show inconsistent lighting or quality
✗ Use low-resolution images
✗ Place text on busy areas

---

### Image Treatments

**Standard Treatment:**
- Brightness: +5%
- Contrast: +10%
- Saturation: 0%
- Temperature: [Warm/Cool]

**Preset:** [Link to Lightroom preset or filter]

---

### Illustration Style

**Style:** [Hand-drawn, geometric, flat, 3D, etc.]

**Line Weight:** [2px, 3px, variable]

**Colors:** [Brand colors only / Extended palette]

**Complexity:** [Simple, detailed, abstract]

**Usage:** Icons, features, onboarding, marketing

![Illustration Examples](placeholder-illustrations.png)

---

### Illustration Guidelines

**DO:**
✓ Use brand colors
✓ Maintain consistent line weight
✓ Keep proportions consistent
✓ Use for explaining concepts

**DON'T:**
✗ Mix illustration styles
✗ Use non-brand colors
✗ Overuse (balance with photography)
✗ Use for critical information

---

## 7. Data Visualization

### Charts & Graphs

**Colors:** Use brand palette in order

**Style:** Clean, minimal, readable

**Fonts:** Brand typefaces only

![Chart Examples](placeholder-charts.png)

---

### Chart Colors

**Sequential Palette:**
1. [Primary Color]
2. [Secondary Color]
3. [Extended Color 1]
4. [Extended Color 2]
5. [Extended Color 3]

**Categorical Palette:**
- Use distinct colors for different categories
- Ensure accessibility (color blind safe)
- Maintain brand feel

---

### Graph Styles

**Line Charts:** 2px stroke, rounded caps

**Bar Charts:** Rounded corners (4px)

**Pie Charts:** Use sparingly, max 5 segments

**Area Charts:** 20% opacity fill

---

## 8. Motion & Animation

### Animation Principles

**Timing:** Fast (200ms) for UI, slower (500ms) for marketing

**Easing:** Ease-in-out for most animations

**Style:** Subtle, purposeful, not distracting

---

### Standard Animations

**Fade In:**
```css
animation: fadeIn 0.3s ease-in-out;

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up:**
```css
animation: slideUp 0.4s ease-out;

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

**Scale:**
```css
animation: scale 0.2s ease-in-out;

@keyframes scale {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
```

---

### Loading States

**Spinner:** [Brand-colored, 2px stroke]

**Skeleton:** [Light gray pulse animation]

**Progress Bar:** [Brand color, rounded]

---

## 9. Layout & Grid System

### Grid System

**Columns:** 12-column grid

**Gutters:** 24px (desktop), 16px (mobile)

**Margins:** 80px (desktop), 24px (mobile)

**Max Width:** 1440px

---

### Spacing Scale

Based on 8px grid:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Standard spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large gaps |
| 2xl | 48px | Section margins |
| 3xl | 64px | Hero spacing |

---

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets |
| Desktop | 1024px - 1440px | Laptops |
| Large | > 1440px | Large screens |

---

## 10. Component Library

### Buttons

**Primary:**
- Background: [Primary Color]
- Text: White
- Border Radius: 8px
- Padding: 12px 24px

**Secondary:**
- Background: Transparent
- Border: 2px solid [Primary Color]
- Text: [Primary Color]
- Border Radius: 8px

**Sizes:** Small (32px), Medium (40px), Large (48px)

---

### Cards

**Background:** White or Light Gray

**Border Radius:** 12px

**Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)

**Padding:** 24px

---

### Forms

**Input Fields:**
- Height: 48px
- Border: 1px solid [Medium Gray]
- Border Radius: 8px
- Focus: 2px solid [Primary Color]

**Labels:**
- Font: [Secondary Font]
- Size: 14px
- Weight: Medium

---

## 11. File Organization

### Asset Structure

```
/visual-identity/
├── /logo/
│   ├── /primary/
│   ├── /secondary/
│   ├── /icon/
│   └── /wordmark/
├── /colors/
│   ├── palette.ase
│   ├── palette.aco
│   └── palette.pdf
├── /typography/
│   ├── [font-files]/
│   └── web-fonts.css
├── /icons/
│   ├── /svg/
│   ├── /png/
│   └── icon-font/
├── /patterns/
│   ├── pattern-1.svg
│   └── pattern-2.svg
├── /textures/
│   ├── texture-1.png
│   └── texture-2.png
├── /templates/
│   ├── social-media/
│   ├── presentations/
│   └── documents/
└── VISUAL_IDENTITY_GUIDE.pdf
```

---

## 12. Implementation

### For Designers

- Use Figma/Sketch component library
- Sync with brand assets regularly
- Follow spacing and grid system
- Use approved colors only

### For Developers

- Use design tokens for colors, spacing, typography
- Implement responsive breakpoints
- Ensure accessibility compliance
- Test across devices

### For Content Creators

- Use approved templates
- Follow imagery guidelines
- Maintain brand voice
- Get approval for deviations

---

## 13. Maintenance

### Updates

This system evolves with the brand. Updates will be:
- Documented with version numbers
- Communicated to all stakeholders
- Backwards compatible when possible

### Version History

| Version | Date | Changes | Approved By |
|---------|------|---------|-------------|
| 1.0 | [Date] | Initial release | [Name] |

---

**Questions?** Contact: [design@company.com]

**Last Updated:** [Date]
