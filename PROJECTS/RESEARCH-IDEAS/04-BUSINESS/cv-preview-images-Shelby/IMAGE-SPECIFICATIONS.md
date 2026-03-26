# Image Specifications - CV Preview Images

## Overview
Complete specifications for all CV template preview images and mockups.

---

## Image Types & Specifications

### 1. Thumbnail Previews
**Purpose:** Etsy listing grid display, search results

| Specification | Value |
|---------------|-------|
| Dimensions | 400 x 600 pixels |
| Aspect Ratio | 2:3 |
| Format | JPG (optimized) |
| Quality | 85% |
| File Size | < 100 KB |
| Color Space | sRGB |
| DPI | 72 (web) |

**Usage:**
- Etsy listing thumbnails
- Category browse views
- Search result previews

---

### 2. Standard Previews
**Purpose:** Product detail pages, main listing images

| Specification | Value |
|---------------|-------|
| Dimensions | 800 x 1200 pixels |
| Aspect Ratio | 2:3 |
| Format | PNG (lossless) |
| Quality | N/A (lossless) |
| File Size | < 500 KB |
| Color Space | sRGB |
| DPI | 72 (web) |

**Usage:**
- Primary listing image
- Product detail galleries
- Website product pages

---

### 3. Full Mockups
**Purpose:** Detailed product visualization, lifestyle context

| Specification | Value |
|---------------|-------|
| Dimensions | 1200 x 1600 pixels |
| Aspect Ratio | 3:4 |
| Format | PNG |
| Quality | High |
| File Size | < 1 MB |
| Color Space | sRGB |
| DPI | 150 (print-ready option) |

**Usage:**
- Secondary listing images
- Social media posts
- Marketing materials

---

### 4. Lifestyle Mockups
**Purpose:** Social media, Pinterest, Instagram

| Specification | Value |
|---------------|-------|
| Dimensions | 1500 x 1500 pixels |
| Aspect Ratio | 1:1 (square) |
| Format | JPG |
| Quality | 90% |
| File Size | < 800 KB |
| Color Space | sRGB |
| DPI | 72 |

**Usage:**
- Instagram posts
- Facebook ads
- Pinterest pins (also create 1000x1500 variant)

---

### 5. Etsy Listing Images (Special)
**Purpose:** Etsy-specific requirements

| Image # | Purpose | Dimensions | Notes |
|---------|---------|------------|-------|
| 1 | Primary thumbnail | 2000 x 2000px (min) | Must be largest, square recommended |
| 2-5 | Additional views | 2000 x 2000px (min) | Show different angles, details |
| 6-10 | Lifestyle/Context | 2000 x 2000px | Mockups, use cases |

**Etsy Requirements:**
- Minimum 2000 pixels on shortest side
- Maximum 20 MB file size
- JPG or PNG format
- sRGB color space
- First image is thumbnail (make it count!)

---

## Image Content Guidelines

### What to Show:
✅ Full CV template (complete page)
✅ Clear, readable text (zoomed if needed)
✅ Professional presentation
✅ Consistent styling across templates
✅ White or neutral background
✅ Subtle shadows for depth

### What to Avoid:
❌ Personal information (use placeholder text)
❌ Low resolution or pixelated images
❌ Cluttered backgrounds
❌ Inconsistent styling
❌ Watermarks (except subtle branding)

---

## Naming Convention

### File Naming Structure:
```
{category}_{template-name}_{image-type}_{size}.{format}

Examples:
- general_professional-cv-01_thumbnail_400x600.jpg
- executive_modern-resume_preview_800x1200.png
- technical_developer-cv_mockup_1200x1600.png
- academic_research-cv_lifestyle_1500x1500.jpg
```

### Category Codes:
- `general` - General CV templates
- `executive` - Executive/C-level templates
- `entry` - Entry-level templates
- `technical` - Technical/IT templates
- `academic` - Academic CVs
- `creative` - Creative industry templates
- `healthcare` - Medical/healthcare templates
- `trades` - Trade/skilled labor templates

---

## Batch Processing

### Image Optimization Settings:

#### For JPG:
```bash
convert input.png -quality 85 -strip -interlace Plane output.jpg
```

#### For PNG:
```bash
pngquant --quality=65-80 --speed=1 input.png --output output.png
```

#### For WebP (modern format):
```bash
cwebp -q 80 input.png -o output.webp
```

### Resize Command:
```bash
convert input.png -resize 800x1200 -gravity center -extent 800x1200 output.png
```

---

## Quality Control Checklist

For each image batch:
- [ ] Correct dimensions
- [ ] File size within limits
- [ ] Colors accurate (sRGB)
- [ ] Text readable
- [ ] No artifacts or compression issues
- [ ] Consistent styling
- [ ] Proper naming
- [ ] Organized in correct folders

---

## Storage Organization

```
previews/
├── general/
│   ├── thumbnails/
│   ├── previews/
│   └── mockups/
├── executive/
│   ├── thumbnails/
│   ├── previews/
│   └── mockups/
├── entry-level/
├── technical/
├── academic/
├── creative/
├── healthcare/
└── trades/

mockups/
├── laptop-display/
├── tablet-display/
├── printed-cv/
└── social-media/

marketing/
├── etsy-banners/
├── social-posts/
└── email-graphics/
```

---

## Tools & Software

### Required:
- **Python 3.8+** with Pillow library
- **ImageMagick** for batch processing
- **Canva** for mockup templates (free or Pro)

### Optional:
- **Photoshop** for advanced editing
- **Figma** for vector mockups
- **pngquant** for PNG optimization
- **cwebp** for WebP conversion

---

## Performance Targets

### Generation Speed:
- Thumbnail: < 1 second per image
- Standard preview: < 2 seconds per image
- Full mockup: < 5 seconds per image

### Batch Processing:
- 100 images: < 2 minutes
- 500 images: < 10 minutes

---

## Updates & Maintenance

### When Adding New Templates:
1. Generate all image types using scripts
2. Optimize for web
3. Upload to appropriate folders
4. Update Etsy listings
5. Update catalog/index

### Quarterly Review:
- Check for broken images
- Update mockup styles if needed
- Optimize file sizes
- A/B test new image styles

---

**Last Updated:** March 24, 2026  
**Version:** 1.0  
**Status:** ✅ Active
