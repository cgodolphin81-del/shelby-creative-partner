# 📤 Export Options Specification

## Overview

The Export System provides multiple output formats for finished remixes, including consumer formats (MP3, AAC), professional formats (WAV, FLAC), stems for further editing, and project files for collaboration.

---

## 1. Export Formats

### 1.1 Audio Formats

```typescript
interface ExportFormat {
  id: string;
  name: string;
  extension: string;
  mimeType: string;
  category: 'consumer' | 'professional' | 'archival';
  
  // Quality settings
  quality: {
    sampleRate: number[];    // [44100, 48000, 96000]
    bitDepth?: number[];     // [16, 24, 32] (for uncompressed)
    bitrate?: number[];      // [128, 192, 256, 320] (for compressed)
  };
  
  // Features
  features: {
    lossless: boolean;
    metadata: boolean;
    chapters: boolean;
    artwork: boolean;
  };
  
  // Use cases
  useCases: string[];
  
  // Tier availability
  tier: 'free' | 'pro' | 'commercial';
}

const exportFormats: ExportFormat[] = [
  {
    id: 'mp3',
    name: 'MP3',
    extension: '.mp3',
    mimeType: 'audio/mpeg',
    category: 'consumer',
    quality: {
      sampleRate: [44100, 48000],
      bitrate: [128, 192, 256, 320]
    },
    features: {
      lossless: false,
      metadata: true,
      chapters: false,
      artwork: true
    },
    useCases: ['Streaming', 'Social media', 'Email sharing'],
    tier: 'free'
  },
  {
    id: 'wav',
    name: 'WAV',
    extension: '.wav',
    mimeType: 'audio/wav',
    category: 'professional',
    quality: {
      sampleRate: [44100, 48000, 96000],
      bitDepth: [16, 24, 32]
    },
    features: {
      lossless: true,
      metadata: true,
      chapters: false,
      artwork: false
    },
    useCases: ['Mastering', 'DJ sets', 'Further production'],
    tier: 'pro'
  },
  {
    id: 'flac',
    name: 'FLAC',
    extension: '.flac',
    mimeType: 'audio/flac',
    category: 'archival',
    quality: {
      sampleRate: [44100, 48000, 96000, 192000],
      bitDepth: [16, 24, 32]
    },
    features: {
      lossless: true,
      metadata: true,
      chapters: true,
      artwork: true
    },
    useCases: ['Archival', 'Audiophile', 'Distribution'],
    tier: 'pro'
  },
  {
    id: 'aac',
    name: 'AAC',
    extension: '.m4a',
    mimeType: 'audio/mp4',
    category: 'consumer',
    quality: {
      sampleRate: [44100, 48000],
      bitrate: [128, 192, 256]
    },
    features: {
      lossless: false,
      metadata: true,
      chapters: true,
      artwork: true
    },
    useCases: ['Apple devices', 'Streaming', 'Podcasts'],
    tier: 'free'
  },
  {
    id: 'ogg',
    name: 'OGG Vorbis',
    extension: '.ogg',
    mimeType: 'audio/ogg',
    category: 'consumer',
    quality: {
      sampleRate: [44100, 48000],
      bitrate: [128, 192, 256, 320]
    },
    features: {
      lossless: false,
      metadata: true,
      chapters: false,
      artwork: true
    },
    useCases: ['Gaming', 'Open source', 'Streaming'],
    tier: 'free'
  }
];
```

### 1.2 Stem Export

```typescript
interface StemExport {
  format: ExportFormat;
  stems: Array<{
    name: string;
    url: string;
    duration: number;
  }>;
  includeProcessed: boolean;
  includeOriginal: boolean;
}

// Export all stems
POST /api/v1/exports/stems
{
  "projectId": "project-uuid",
  "format": "wav",
  "quality": {
    "sampleRate": 44100,
    "bitDepth": 24
  },
  "stems": ["vocals", "drums", "bass", "other"],
  "includeProcessed": true,
  "includeOriginal": false,
  "naming": "{project_name}_{stem_name}"
}

Response:
{
  "exportId": "export-uuid",
  "status": "processing",
  "estimatedTime": 30,
  "downloadUrl": null,
  "expiresAt": null
}

// When complete
{
  "exportId": "export-uuid",
  "status": "complete",
  "downloadUrl": "https://cdn.../stems-export.zip",
  "expiresAt": "2026-03-29T08:00:00Z",
  "files": [
    { "name": "MyRemix_vocals.wav", "size": 52428800, "url": "https://cdn.../vocals.wav" },
    { "name": "MyRemix_drums.wav", "size": 52428800, "url": "https://cdn.../drums.wav" },
    { "name": "MyRemix_bass.wav", "size": 52428800, "url": "https://cdn.../bass.wav" },
    { "name": "MyRemix_other.wav", "size": 52428800, "url": "https://cdn.../other.wav" }
  ],
  "totalSize": 209715200
}
```

### 1.3 Project File Export

```typescript
interface ProjectFile {
  version: string;        // Project format version
  schema: string;         // JSON schema URL
  
  // Project data
  project: {
    id: string;
    name: string;
    createdAt: Date;
    modifiedAt: Date;
  };
  
  // Audio references
  audio: {
    original: AudioReference;
    remix: AudioReference;
    stems: StemReference[];
  };
  
  // Edit data
  edits: {
    tempo: number;
    key: KeyInfo;
    arrangement: Section[];
    mixer: MixerState;
    effects: EffectChain[];
    automation: AutomationTrack[];
  };
  
  // Style info
  style: {
    sourceStyle: string;
    targetStyle: string;
    parameters: StyleParameters;
  };
  
  // Metadata
  metadata: {
    title: string;
    artist: string;
    album?: string;
    genre: string;
    year: number;
    artwork?: string;
  };
}

// Export project file
POST /api/v1/exports/project
{
  "projectId": "project-uuid",
  "format": "remixai-project",
  "includeAudio": false,
  "includeStems": false
}

Response:
{
  "exportId": "export-uuid",
  "downloadUrl": "https://cdn.../project.remixai",
  "format": "remixai-project",
  "size": 524288
}
```

---

## 2. Export Quality Settings

### 2.1 Quality Presets

```typescript
interface QualityPreset {
  id: string;
  name: string;
  description: string;
  settings: ExportSettings;
  tier: 'free' | 'pro' | 'commercial';
}

const qualityPresets: QualityPreset[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Good quality for everyday listening',
    settings: {
      mp3: { bitrate: 192, sampleRate: 44100 },
      wav: { bitDepth: 16, sampleRate: 44100 },
      flac: { bitDepth: 16, sampleRate: 44100 }
    },
    tier: 'free'
  },
  {
    id: 'high',
    name: 'High Quality',
    description: 'Better quality for serious listening',
    settings: {
      mp3: { bitrate: 320, sampleRate: 44100 },
      wav: { bitDepth: 24, sampleRate: 44100 },
      flac: { bitDepth: 24, sampleRate: 44100 }
    },
    tier: 'pro'
  },
  {
    id: 'studio',
    name: 'Studio Quality',
    description: 'Maximum quality for professional use',
    settings: {
      wav: { bitDepth: 32, sampleRate: 96000 },
      flac: { bitDepth: 32, sampleRate: 96000 }
    },
    tier: 'commercial'
  }
];
```

### 2.2 Loudness Normalization

```typescript
interface LoudnessNormalization {
  enabled: boolean;
  target: number;         // LUFS
  method: 'EBU R128' | 'ITU BS.1770' | 'ReplayGain';
  truePeakLimit: number;  // dBTP
}

const loudnessPresets = {
  streaming: {
    target: -14,          // Spotify, Apple Music
    truePeakLimit: -1
  },
  club: {
    target: -8,
    truePeakLimit: -0.5
  },
  broadcast: {
    target: -23,          // EBU R128 standard
    truePeakLimit: -1
  },
  cd: {
    target: -9,
    truePeakLimit: -0.3
  }
};
```

### 2.3 Metadata (ID3 Tags)

```typescript
interface AudioMetadata {
  // Core tags
  title: string;
  artist: string;
  album?: string;
  trackNumber?: number;
  totalTracks?: number;
  year?: number;
  genre?: string;
  
  // Extended tags
  composer?: string;
  producer?: string;
  remixer?: string;
  label?: string;
  copyright?: string;
  isrc?: string;        // International Standard Recording Code
  
  // Technical
  bpm?: number;
  key?: string;
  comment?: string;
  
  // Artwork
  artwork?: {
    url: string;
    mimeType: string;
    width: number;
    height: number;
  };
}

// Embed metadata
function embedMetadata(
  audioBuffer: Buffer,
  format: string,
  metadata: AudioMetadata
): Buffer {
  switch (format) {
    case 'mp3':
      return embedID3v2(audioBuffer, metadata);
    case 'wav':
      return embedLIST(audioBuffer, metadata);
    case 'flac':
      return embedVorbisComments(audioBuffer, metadata);
    case 'm4a':
      return embedMP4Tags(audioBuffer, metadata);
    default:
      return audioBuffer;
  }
}
```

---

## 3. Export API

### 3.1 Create Export Job

```typescript
interface ExportRequest {
  projectId: string;
  versionId?: string;     // Specific version to export
  
  // Format
  format: string;
  quality: {
    preset?: string;      // 'standard' | 'high' | 'studio'
    sampleRate?: number;
    bitDepth?: number;
    bitrate?: number;
  };
  
  // Content
  exportType: 'full' | 'stems' | 'project';
  stems?: string[];       // If exportType is 'stems'
  
  // Processing
  normalize: LoudnessNormalization;
  dither: boolean;
  fadeOut?: number;       // seconds
  
  // Metadata
  metadata?: AudioMetadata;
  
  // Delivery
  delivery: {
    method: 'download' | 'email' | 'cloud';
    email?: string;
    cloudStorage?: 'dropbox' | 'gdrive' | 's3';
  };
  
  // Notification
  notifyOnComplete: boolean;
  callbackUrl?: string;   // Webhook
}

// API Endpoint
POST /api/v1/exports
{
  "projectId": "project-uuid",
  "format": "wav",
  "quality": {
    "preset": "high"
  },
  "exportType": "full",
  "normalize": {
    "enabled": true,
    "target": -14,
    "method": "EBU R128",
    "truePeakLimit": -1
  },
  "dither": true,
  "metadata": {
    "title": "My Awesome Remix",
    "artist": "DJ Producer",
    "genre": "Electronic",
    "year": 2026
  },
  "delivery": {
    "method": "download"
  },
  "notifyOnComplete": true
}

Response:
{
  "exportId": "export-uuid",
  "status": "queued",
  "queuePosition": 3,
  "estimatedTime": 45,
  "createdAt": "2026-03-22T08:00:00Z"
}
```

### 3.2 Export Status

```typescript
GET /api/v1/exports/:exportId

Response:
{
  "exportId": "export-uuid",
  "status": "processing",
  "progress": 65,
  "currentStage": "encoding",
  "stages": [
    { "name": "preparing", "status": "complete", "duration": 2 },
    { "name": "rendering", "status": "complete", "duration": 30 },
    { "name": "encoding", "status": "processing", "progress": 60 },
    { "name": "metadata", "status": "pending" },
    { "name": "uploading", "status": "pending" }
  ],
  "estimatedCompletion": "2026-03-22T08:01:30Z"
}

// When complete
{
  "exportId": "export-uuid",
  "status": "complete",
  "downloadUrl": "https://cdn.remixaistudio.com/exports/xxx/file.wav",
  "expiresAt": "2026-03-29T08:00:00Z",
  "fileSize": 52428800,
  "format": "wav",
  "quality": {
    "sampleRate": 44100,
    "bitDepth": 24
  },
  "duration": 185.5,
  "metadata": { ... }
}
```

### 3.3 Batch Export

```typescript
interface BatchExport {
  id: string;
  exports: ExportRequest[];
  status: 'pending' | 'processing' | 'complete' | 'failed';
  progress: number;
  createdAt: Date;
  completedAt?: Date;
}

// Create batch export
POST /api/v1/exports/batch
{
  "exports": [
    {
      "projectId": "project-uuid",
      "format": "mp3",
      "quality": { "preset": "standard" }
    },
    {
      "projectId": "project-uuid",
      "format": "wav",
      "quality": { "preset": "high" }
    },
    {
      "projectId": "project-uuid",
      "format": "stems",
      "stems": ["vocals", "drums", "bass", "other"]
    }
  ]
}

Response:
{
  "batchId": "batch-uuid",
  "exports": [
    { "exportId": "export-uuid-1", "status": "queued" },
    { "exportId": "export-uuid-2", "status": "queued" },
    { "exportId": "export-uuid-3", "status": "queued" }
  ],
  "estimatedTotalTime": 120
}
```

---

## 4. Export Processing Pipeline

### 4.1 Processing Stages

```python
class ExportPipeline:
    """Multi-stage export processing"""
    
    def __init__(self, export_request: ExportRequest):
        self.request = export_request
        self.stages = [
            self.prepare_audio,
            self.apply_processing,
            self.encode,
            self.embed_metadata,
            self.upload,
            self.notify
        ]
    
    async def run(self) -> ExportResult:
        for stage in self.stages:
            await stage()
        
        return ExportResult(
            download_url=self.download_url,
            expires_at=self.expires_at,
            file_size=self.file_size
        )
    
    async def prepare_audio(self):
        """Load and prepare audio for export"""
        # Load rendered audio from S3
        self.audio = await self.load_audio(self.request.project_id)
        
        # Apply fade out if requested
        if self.request.fadeOut:
            self.audio = self.apply_fade_out(
                self.audio, 
                self.request.fadeOut
            )
    
    async def apply_processing(self):
        """Apply final processing"""
        # Loudness normalization
        if self.request.normalize.enabled:
            self.audio = self.normalize_loudness(
                self.audio,
                self.request.normalize.target
            )
        
        # Dithering for bit depth reduction
        if self.request.dither:
            self.audio = self.apply_dither(self.audio)
    
    async def encode(self):
        """Encode to target format"""
        format_handlers = {
            'mp3': self.encode_mp3,
            'wav': self.encode_wav,
            'flac': self.encode_flac,
            'aac': self.encode_aac,
            'ogg': self.encode_ogg
        }
        
        handler = format_handlers[self.request.format]
        self.encoded = await handler(self.audio, self.request.quality)
    
    async def embed_metadata(self):
        """Embed ID3/metadata tags"""
        if self.request.metadata:
            self.encoded = embed_metadata(
                self.encoded,
                self.request.format,
                self.request.metadata
            )
    
    async def upload(self):
        """Upload to CDN"""
        self.download_url = await upload_to_cdn(
            self.encoded,
            f"exports/{self.request.project_id}/{uuid4()}.{self.request.format}"
        )
        
        # Set expiration
        self.expires_at = datetime.utcnow() + timedelta(days=7)
    
    async def notify(self):
        """Send completion notification"""
        if self.request.notifyOnComplete:
            await send_notification(
                user_id=self.request.user_id,
                type='export_complete',
                data={
                    'exportId': self.request.export_id,
                    'downloadUrl': self.download_url
                }
            )
        
        # Webhook callback
        if self.request.callbackUrl:
            await post_webhook(
                self.request.callbackUrl,
                {
                    'exportId': self.request.export_id,
                    'status': 'complete',
                    'downloadUrl': self.download_url
                }
            )
```

### 4.2 FFmpeg Integration

```python
def encode_mp3(audio: np.ndarray, quality: dict) -> bytes:
    """Encode to MP3 using FFmpeg"""
    
    # Write audio to temp file
    input_path = write_temp_wav(audio)
    output_path = f"/tmp/{uuid4()}.mp3"
    
    # Build FFmpeg command
    cmd = [
        'ffmpeg',
        '-i', input_path,
        '-codec:a', 'libmp3lame',
        '-b:a', f"{quality['bitrate']}k",
        '-ar', str(quality['sampleRate']),
        '-y',  # Overwrite
        output_path
    ]
    
    # Run FFmpeg
    subprocess.run(cmd, check=True)
    
    # Read encoded file
    with open(output_path, 'rb') as f:
        encoded = f.read()
    
    # Cleanup
    os.remove(input_path)
    os.remove(output_path)
    
    return encoded


def encode_wav(audio: np.ndarray, quality: dict) -> bytes:
    """Export to WAV"""
    
    # Convert to appropriate bit depth
    if quality['bitDepth'] == 16:
        audio_int16 = (audio * 32767).astype(np.int16)
    elif quality['bitDepth'] == 24:
        audio_int24 = (audio * 8388607).astype(np.int32)
        # Pack as 24-bit
        audio_bytes = audio_int24.tobytes()
        # Write WAV header for 24-bit
        return write_wav_24bit(audio_bytes, quality['sampleRate'], audio.shape[0])
    
    # Standard 16-bit WAV
    import wave
    import io
    
    buffer = io.BytesIO()
    with wave.open(buffer, 'wb') as wav_file:
        wav_file.setnchannels(2)
        wav_file.setsampwidth(2)  # 16-bit
        wav_file.setframerate(quality['sampleRate'])
        wav_file.writeframes(audio_int16.tobytes())
    
    return buffer.getvalue()
```

---

## 5. Download Management

### 5.1 Download Links

```typescript
interface DownloadLink {
  url: string;
  expiresAt: Date;
  maxDownloads?: number;
  downloadCount: number;
  format: string;
  fileSize: number;
}

// Generate signed download URL
function generateSignedUrl(
  key: string,
  expiresInSeconds: number = 604800  // 7 days
): string {
  const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
  
  const params = new URLSearchParams({
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': AWS_CREDENTIAL,
    'X-Amz-Date': new Date().toISOString(),
    'X-Amz-Expires': expiresInSeconds.toString(),
    'X-Amz-SignedHeaders': 'host',
    'X-Amz-Signature': calculateSignature(key, expires)
  });
  
  return `https://cdn.remixaistudio.com/${key}?${params}`;
}
```

### 5.2 Download Tracking

```typescript
interface DownloadEvent {
  exportId: string;
  userId: string;
  format: string;
  fileSize: number;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  country?: string;
}

// Track download
POST /api/v1/exports/:exportId/download
{
  "exportId": "export-uuid",
  "userId": "user-uuid"
}

// Download analytics
GET /api/v1/exports/:exportId/analytics

Response:
{
  "exportId": "export-uuid",
  "totalDownloads": 15,
  "uniqueDownloaders": 12,
  "downloadsByFormat": {
    "mp3": 8,
    "wav": 5,
    "flac": 2
  },
  "downloadsByDay": [
    { "date": "2026-03-22", "count": 10 },
    { "date": "2026-03-23", "count": 5 }
  ],
  "topCountries": [
    { "country": "US", "count": 8 },
    { "country": "UK", "count": 4 }
  ]
}
```

---

## 6. Cloud Storage Integration

### 6.1 Direct to Cloud

```typescript
interface CloudStorageIntegration {
  provider: 'dropbox' | 'gdrive' | 'onedrive' | 's3';
  connected: boolean;
  accountId?: string;
}

// Connect cloud storage
POST /api/v1/integrations/:provider/connect

// Export directly to cloud
POST /api/v1/exports/cloud
{
  "projectId": "project-uuid",
  "format": "wav",
  "provider": "dropbox",
  "path": "/Music/Remixes/",
  "notifyOnComplete": true
}

Response:
{
  "exportId": "export-uuid",
  "status": "processing",
  "destination": "dropbox:/Music/Remixes/MyRemix.wav"
}
```

### 6.2 Auto-Sync

```typescript
interface AutoSyncConfig {
  enabled: boolean;
  provider: string;
  path: string;
  formats: string[];
  trigger: 'on_export' | 'on_version' | 'scheduled';
  schedule?: string;  // Cron expression
}

// Set up auto-sync
PUT /api/v1/settings/auto-sync
{
  "enabled": true,
  "provider": "dropbox",
  "path": "/RemixAI/Exports",
  "formats": ["wav", "mp3"],
  "trigger": "on_export"
}
```

---

## 7. Export Limits by Tier

```typescript
interface ExportLimits {
  tier: 'free' | 'pro' | 'commercial';
  
  // Format restrictions
  availableFormats: string[];
  
  // Quality restrictions
  maxSampleRate: number;
  maxBitDepth: number;
  maxBitrate: number;
  
  // Quantity restrictions
  exportsPerDay: number;
  exportsPerMonth: number;
  concurrentExports: number;
  
  // Size restrictions
  maxFileSize: number;  // bytes
  maxDuration: number;  // seconds
  
  // Features
  stemExport: boolean;
  projectExport: boolean;
  batchExport: boolean;
  cloudIntegration: boolean;
  customMetadata: boolean;
  watermarkRemoval: boolean;
}

const tierLimits: Record<string, ExportLimits> = {
  free: {
    tier: 'free',
    availableFormats: ['mp3', 'aac', 'ogg'],
    maxSampleRate: 44100,
    maxBitDepth: 16,
    maxBitrate: 192,
    exportsPerDay: 5,
    exportsPerMonth: 50,
    concurrentExports: 1,
    maxFileSize: 50 * 1024 * 1024,  // 50MB
    maxDuration: 300,  // 5 minutes
    stemExport: false,
    projectExport: false,
    batchExport: false,
    cloudIntegration: false,
    customMetadata: false,
    watermarkRemoval: false
  },
  pro: {
    tier: 'pro',
    availableFormats: ['mp3', 'aac', 'ogg', 'wav', 'flac'],
    maxSampleRate: 96000,
    maxBitDepth: 24,
    maxBitrate: 320,
    exportsPerDay: 50,
    exportsPerMonth: 500,
    concurrentExports: 3,
    maxFileSize: 500 * 1024 * 1024,  // 500MB
    maxDuration: 1800,  // 30 minutes
    stemExport: true,
    projectExport: true,
    batchExport: true,
    cloudIntegration: true,
    customMetadata: true,
    watermarkRemoval: true
  },
  commercial: {
    tier: 'commercial',
    availableFormats: ['mp3', 'aac', 'ogg', 'wav', 'flac', 'aiff'],
    maxSampleRate: 192000,
    maxBitDepth: 32,
    maxBitrate: 320,
    exportsPerDay: 200,
    exportsPerMonth: 2000,
    concurrentExports: 10,
    maxFileSize: 2 * 1024 * 1024 * 1024,  // 2GB
    maxDuration: 7200,  // 2 hours
    stemExport: true,
    projectExport: true,
    batchExport: true,
    cloudIntegration: true,
    customMetadata: true,
    watermarkRemoval: true
  }
};
```

---

## 8. Watermarking (Free Tier)

```typescript
interface WatermarkConfig {
  enabled: boolean;
  type: 'audio' | 'metadata';
  
  // Audio watermark
  audioWatermark?: {
    text: string;
    position: 'intro' | 'outro' | 'periodic';
    interval?: number;  // seconds (for periodic)
    volume: number;     // 0-1
  };
  
  // Metadata watermark
  metadataWatermark?: {
    artist: string;
    comment: string;
  };
}

const freeTierWatermark: WatermarkConfig = {
  enabled: true,
  type: 'audio',
  audioWatermark: {
    text: "RemixAI Studio",
    position: 'outro',
    volume: 0.5
  },
  metadataWatermark: {
    artist: "Created with RemixAI Studio (Free)",
    comment: "Upgrade to Pro to remove watermarks"
  }
};
```

---

*Version: 1.0.0*
*Last Updated: March 2026*
