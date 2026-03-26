# Video Assembly Pipeline - FFmpeg + Remotion

## Overview
The video assembly pipeline combines uploaded photos, AI-generated voiceover, and background music into a polished movie trailer. This document covers both the FFmpeg-based approach (simpler) and Remotion approach (more flexible).

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIDEO ASSEMBLY PIPELINE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  PHOTOS  │───▶│  FILTER  │───▶│ TRANSITION│───▶│  SCENE   │  │
│  │  (5-10)  │    │  & CROP  │    │  EFFECTS  │    │  BUILDER │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│       │                                              │          │
│       │                                              ▼          │
│  ┌──────────┐                              ┌──────────────────┐ │
│  │ METADATA │                              │   TIMELINE       │ │
│  │ (EXIF)   │                              │   CONSTRUCTION   │ │
│  └──────────┘                              └──────────────────┘ │
│                                                      │          │
│  ┌──────────┐                                        │          │
│  │ VOICEOVER│────────────────────────────────────────┤          │
│  │  (TTS)   │                                        │          │
│  └──────────┘                                        ▼          │
│                                          ┌──────────────────┐  │
│  ┌──────────┐                            │     FFMPEG       │  │
│  │  MUSIC   │───────────────────────────▶│    COMPOSITOR    │  │
│  │ (SUNO)   │                            │                  │  │
│  └──────────┘                            └──────────────────┘  │
│                                                      │          │
│                                                      ▼          │
│                                          ┌──────────────────┐  │
│                                          │   ENCODE +       │  │
│                                          │   WATERMARK      │  │
│                                          └──────────────────┘  │
│                                                      │          │
│                                                      ▼          │
│                                          ┌──────────────────┐  │
│                                          │  OUTPUT MP4      │  │
│                                          │  (720p/1080p/4K) │  │
│                                          └──────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Option 1: FFmpeg Pipeline (Recommended for MVP)

### Installation
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt update && sudo apt install ffmpeg

# Verify
ffmpeg -version
```

### Node.js Integration (fluent-ffmpeg)
```javascript
const ffmpeg = require('fluent-ffmpeg');

async function createTrailer({ photos, voiceover, music, output, style }) {
    return new Promise((resolve, reject) => {
        // Create photo sequence with transitions
        const command = ffmpeg();
        
        // Add all photos
        photos.forEach((photo, index) => {
            const duration = 3; // 3 seconds per photo
            command.input(photo.path)
                   .inputOptions([`-loop 1`, `-t ${duration}`]);
        });
        
        // Add voiceover
        command.input(voiceover.path);
        
        // Add music
        command.input(music.path)
               .inputOptions(['-stream_loop -1']); // Loop music
        
        // Complex filter for transitions and mixing
        const filterComplex = buildFilterChain(photos.length, style);
        
        command
            .complexFilter(filterComplex)
            .outputOptions([
                '-c:v libx264',           // H.264 video codec
                '-preset medium',          // Encoding speed
                '-crf 23',                 // Quality (18-28, lower=better)
                '-c:a aac',                // AAC audio codec
                '-b:a 192k',               // Audio bitrate
                '-movflags +faststart',    // Web optimization
                '-pix_fmt yuv420p'         // Compatibility
            ])
            .on('start', (cmd) => {
                console.log('FFmpeg started:', cmd);
            })
            .on('progress', (progress) => {
                console.log(`Progress: ${progress.percent || 0}%`);
            })
            .on('end', () => {
                console.log('Trailer completed:', output);
                resolve(output);
            })
            .on('error', (err) => {
                console.error('FFmpeg error:', err);
                reject(err);
            })
            .save(output);
    });
}
```

### Transition Effects by Style

```javascript
function buildFilterChain(photoCount, style) {
    const transitions = {
        epic: 'fade',           // Smooth cinematic fades
        romantic: 'crossfade',  // Gentle cross dissolves
        funny: 'slide',         // Quick slides for comedy
        nostalgic: 'fadeblack', // Vintage fade to black
        action: 'zoom'          // Dynamic zoom transitions
    };
    
    const transition = transitions[style] || 'fade';
    const filters = [];
    
    // Build video filter chain
    for (let i = 0; i < photoCount - 1; i++) {
        filters.push(
            `[${i}:v][${i+1}:v]${transition}=d=0.5:offset=2.5[v${i}]`
        );
    }
    
    // Concatenate all video segments
    const concatInputs = photos.map((_, i) => `[v${i}]`).join('');
    filters.push(`${concatInputs}concat=n=${photoCount}:v=1:a=0[outv]`);
    
    // Audio mixing (voiceover + music with ducking)
    filters.push(
        `[${photoCount}:a][${photoCount+1}:a]amix=inputs=2:duration=first[outa]`
    );
    
    return filters.join(';');
}
```

### Photo Pre-processing
```javascript
async function preparePhoto(inputPath, outputPath, style) {
    const filters = {
        epic: 'eq=contrast=1.2:saturation=1.1:unsharp=5:5:1.0',
        romantic: 'eq=brightness=0.05:saturation=1.2:curves=vintage',
        funny: 'eq=saturation=1.3:unsharp=3:3:0.8',
        nostalgic: 'eq=sepia=0.3:contrast=0.9:brightness=0.05',
        action: 'eq=contrast=1.4:saturation=1.2:unsharp=7:7:1.2'
    };
    
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .outputOptions([
                '-vf', `${filters[style]},scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2`,
                '-frames:v 1'
            ])
            .save(outputPath)
            .on('end', () => resolve(outputPath))
            .on('error', reject);
    });
}
```

### Adding Watermark (Free Tier)
```javascript
async function addWatermark(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .input('assets/watermark.png')
            .complexFilter([
                '[1:v]scale=200:-1[wm]',
                '[0:v][wm]overlay=W-w-20:H-h-20:format=auto[outv]'
            ])
            .map('[outv]')
            .map('0:a')
            .outputOptions(['-c:v libx264', '-c:a copy'])
            .save(outputPath)
            .on('end', () => resolve(outputPath))
            .on('error', reject);
    });
}
```

---

## Option 2: Remotion (React-Based, More Flexible)

### Installation
```bash
npx create-remotion@latest movie-trailer
cd movie-trailer
npm install
```

### Composition Structure
```javascript
// src/Trailer.tsx
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';
import { PhotoSlide } from './PhotoSlide';
import { TitleCard } from './TitleCard';

export const Trailer = ({ photos, style, voiceover }) => {
    const frame = useCurrentFrame();
    const fps = 30;
    
    return (
        <AbsoluteFill>
            {/* Opening Title */}
            <Sequence from={0} durationInFrames={60}>
                <TitleCard style={style} />
            </Sequence>
            
            {/* Photo Slideshow */}
            {photos.map((photo, index) => (
                <Sequence 
                    key={photo.id}
                    from={60 + index * 90} 
                    durationInFrames={90}
                >
                    <PhotoSlide 
                        photo={photo} 
                        style={style}
                        transition={index < photos.length - 1 ? 'next' : 'none'}
                    />
                </Sequence>
            ))}
            
            {/* Closing Credits */}
            <Sequence from={60 + photos.length * 90} durationInFrames={60}>
                <TitleCard style={style} text="The End" />
            </Sequence>
        </AbsoluteFill>
    );
};
```

### Rendering
```javascript
// render.js
const { renderVideo } = require('@remotion/renderer');

await renderVideo({
    composition: {
        id: 'Trailer',
        component: Trailer,
        durationInFrames: 180,
        fps: 30,
        width: 1920,
        height: 1080,
        props: {
            photos: uploadedPhotos,
            style: 'epic',
            voiceover: voiceoverPath
        }
    },
    outputLocation: `outputs/trailer_${Date.now()}.mp4`,
    codec: 'h264',
    crf: 23,
    onProgress: (progress) => {
        console.log(`Rendering: ${progress.fatalError ? 'Failed' : progress.percent}%`);
    }
});
```

**Pros:** React-based, highly customizable, preview in browser
**Cons:** More complex setup, heavier dependencies

---

## Encoding Presets

### Quality Tiers
| Tier | Resolution | Bitrate | CRF | Use Case |
|------|------------|---------|-----|----------|
| Free | 1280x720 | 5 Mbps | 25 | Watermarked preview |
| HD | 1920x1080 | 10 Mbps | 23 | Standard download |
| 4K | 3840x2160 | 40 Mbps | 20 | Premium download |

### FFmpeg Commands by Tier
```bash
# Free (720p)
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -c:a aac -b:a 128k output_720p.mp4

# HD (1080p)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 192k output_1080p.mp4

# 4K (2160p)
ffmpeg -i input.mp4 -c:v libx264 -crf 20 -preset slow -c:a aac -b:a 320k output_4k.mp4
```

---

## Performance Optimization

### Parallel Processing
```javascript
const { worker } = require('worker_threads');

// Process photos in parallel
async function processPhotosParallel(photos, style) {
    const chunks = chunkArray(photos, 3); // Process 3 at a time
    const results = [];
    
    for (const chunk of chunks) {
        const processed = await Promise.all(
            chunk.map(photo => preparePhoto(photo.path, photo.output, style))
        );
        results.push(...processed);
    }
    
    return results;
}
```

### Caching
```javascript
// Cache processed photos by hash
const photoCache = new Map();

async function getCachedPhoto(photo, style) {
    const hash = await hashFile(photo.path);
    const cacheKey = `${hash}_${style}`;
    
    if (photoCache.has(cacheKey)) {
        return photoCache.get(cacheKey);
    }
    
    const processed = await preparePhoto(photo.path, `/tmp/${cacheKey}.jpg`, style);
    photoCache.set(cacheKey, processed);
    return processed;
}
```

---

## Error Handling

```javascript
async function safeTrailerGeneration(params) {
    try {
        // Validate inputs
        if (!params.photos || params.photos.length < 5) {
            throw new Error('Minimum 5 photos required');
        }
        
        // Check disk space
        const availableSpace = await checkDiskSpace();
        if (availableSpace < 1024 * 1024 * 500) { // 500MB
            throw new Error('Insufficient disk space');
        }
        
        // Generate trailer
        return await createTrailer(params);
        
    } catch (error) {
        console.error('Generation failed:', error);
        
        // Cleanup temp files
        await cleanupTempFiles(params.trailerId);
        
        throw error;
    }
}
```

---

## File Structure
```
movie-trailer-mvp/
├── src/
│   └── server/
│       ├── services/
│       │   ├── videoAssembly.js      # Main pipeline
│       │   ├── photoProcessor.js     # Image preprocessing
│       │   ├── audioMixer.js         # Voice + music mixing
│       │   └── watermark.js          # Watermark overlay
│       └── utils/
│           ├── ffmpegHelpers.js      # FFmpeg utilities
│           └── fileUtils.js          # File operations
├── assets/
│   ├── watermark.png                 # Transparent PNG logo
│   └── fonts/                        # Custom fonts for titles
├── temp/                             # Temporary processing files
└── outputs/                          # Final trailers
```

---

## Testing

### Sample Command
```bash
# Test with sample files
ffmpeg -i photo1.jpg -i photo2.jpg -i photo3.jpg \
  -i voiceover.mp3 -i music.mp3 \
  -filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[v];[3:a][4:a]amix=inputs=2[a]" \
  -map "[v]" -map "[a]" \
  -c:v libx264 -preset fast -crf 23 \
  -c:a aac -b:a 192k \
  -y test_output.mp4
```

---

## Production Considerations

1. **Queue System:** Use Bull/Redis for job queuing
2. **Scaling:** Horizontal scaling with worker nodes
3. **Storage:** S3 for input/output, EFS for temp files
4. **CDN:** CloudFront for video delivery
5. **Monitoring:** Track processing time, failure rates, queue depth
