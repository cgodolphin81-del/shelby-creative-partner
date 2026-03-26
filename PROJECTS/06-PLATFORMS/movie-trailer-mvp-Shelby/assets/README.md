# Watermark Asset

This is a placeholder for the MovieTrailer watermark logo.

## Specifications

**Format:** PNG with transparency
**Size:** 200x50 pixels (scales proportionally)
**Placement:** Bottom-right corner, 20px from edges
**Opacity:** 70%

## Design Guidelines

- Use MovieTrailer logo mark (🎬) + text
- White or light color for visibility on dark videos
- Semi-transparent to not overwhelm content
- Consistent across all free tier outputs

## Creation

To create the actual watermark:
1. Open design tool (Figma, Canva, Photoshop)
2. Create 200x50 canvas
3. Add 🎬 emoji + "MovieTrailer" text
4. Export as PNG with transparency
5. Save as `public/assets/watermark.png`

## FFmpeg Usage

```bash
ffmpeg -i input.mp4 -i watermark.png \
  -filter_complex "overlay=W-w-20:H-h-20" \
  output_watermarked.mp4
```
