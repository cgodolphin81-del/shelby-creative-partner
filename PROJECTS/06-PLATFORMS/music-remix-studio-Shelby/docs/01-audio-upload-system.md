# 📤 Audio Upload System Specification

## Overview

The Audio Upload System is the entry point for all user audio content. It provides a seamless, intuitive interface for uploading tracks of various formats and sizes, with automatic processing and validation.

---

## 1. Upload Interface

### 1.1 Drag-and-Drop Zone

**Component:** `AudioUploadZone`

```typescript
interface UploadZoneProps {
  maxSize: number;           // 500MB in bytes
  acceptedFormats: string[]; // ['audio/*', '.mp3', '.wav', '.flac', '.m4a', '.ogg', '.aiff']
  multiple: boolean;         // false (single track per remix)
  onUpload: (file: File) => Promise<UploadResult>;
  onProgress: (progress: number) => void;
  onError: (error: UploadError) => void;
}
```

**Visual Design:**
- Large, prominent drop zone (400x300px minimum)
- Animated border on drag hover
- Format icons display
- Progress indicator during upload
- Waveform preview after upload

### 1.2 File Browser Button

- Secondary upload method
- Native file picker integration
- Same validation as drag-drop

### 1.3 URL Import (Pro Feature)

```typescript
interface URLImportParams {
  url: string;              // YouTube, SoundCloud, direct MP3 link
  callback: string;         // Webhook for completion
}
```

**Supported Sources:**
- YouTube (via yt-dlp)
- SoundCloud (API)
- Direct audio URLs
- Dropbox/Google Drive links

---

## 2. Supported Formats

### 2.1 Input Formats

| Format | Extension | Max Sample Rate | Max Bit Depth | Notes |
|--------|-----------|-----------------|---------------|-------|
| MP3 | .mp3 | 48 kHz | N/A | Most common |
| WAV | .wav | 192 kHz | 32-bit | Uncompressed |
| FLAC | .flac | 192 kHz | 32-bit | Lossless |
| M4A/AAC | .m4a, .aac | 48 kHz | N/A | Apple format |
| OGG Vorbis | .ogg | 48 kHz | N/A | Open source |
| AIFF | .aiff, .aif | 192 kHz | 32-bit | Apple uncompressed |
| WMA | .wma | 48 kHz | N/A | Windows (converted) |

### 2.2 Automatic Conversion

All uploads are converted to internal standard:
- **Format:** WAV (uncompressed)
- **Sample Rate:** 44.1 kHz (or source if higher)
- **Bit Depth:** 16-bit
- **Channels:** Stereo (mono tracks duplicated)

---

## 3. File Validation

### 3.1 Pre-Upload Validation (Client-Side)

```typescript
interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  metadata?: AudioMetadata;
}

interface AudioMetadata {
  duration: number;        // seconds
  sampleRate: number;      // Hz
  channels: number;        // 1 or 2
  bitDepth?: number;       // bits
  format: string;          // detected format
  fileSize: number;        // bytes
}
```

**Validation Rules:**
- File size ≤ 500MB (Free/Pro), ≤ 2GB (Commercial)
- Duration ≤ 30 minutes (Free), ≤ 60 minutes (Pro/Commercial)
- Valid audio format (magic bytes check)
- Not corrupted (can be decoded)

### 3.2 Post-Upload Validation (Server-Side)

```typescript
POST /api/v1/upload/validate
{
  "uploadId": "uuid",
  "runDeepScan": true
}

Response:
{
  "status": "valid" | "invalid" | "warning",
  "issues": [
    {
      "type": "error" | "warning",
      "code": "CORRUPTED_FRAME" | "CLIPPING_DETECTED" | "LOW_QUALITY",
      "message": "Human readable description",
      "timestamp": 1234567890
    }
  ],
  "metadata": { ... }
}
```

---

## 4. Upload Process Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Client     │     │   Gateway    │     │   Storage    │
│              │     │              │     │              │
│  1. Select   │────▶│  2. Request  │────▶│  3. Generate │
│     File     │     │     Upload   │     │  Signed URL  │
│              │     │              │     │              │
│              │◀────│              │◀────│              │
│              │     │  4. Return   │     │              │
│              │     │  Signed URL  │     │              │
│              │     │              │     │              │
│  5. Direct   │─────────────────────────────────────────▶│
│     Upload   │     │              │     │  6. Store    │
│     (S3)     │     │              │     │              │
│              │     │              │     │              │
│  7. Notify   │────▶│  8. Queue    │────▶│  9. Process  │
│     Complete │     │  Processing  │     │              │
│              │     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
```

### 4.1 API Endpoints

```typescript
// Initialize upload
POST /api/v1/upload/initiate
{
  "filename": string,
  "fileSize": number,
  "contentType": string,
  "metadata": {
    "originalFormat": string,
    "duration": number
  }
}

Response:
{
  "uploadId": "uuid",
  "signedUrl": "https://s3...",
  "expiresAt": "ISO timestamp",
  "uploadHeaders": {
    "Content-Type": "audio/wav",
    "x-amz-acl": "private"
  }
}

// Complete upload
POST /api/v1/upload/complete
{
  "uploadId": "uuid",
  "checksum": "md5 hash"
}

Response:
{
  "status": "processing" | "ready",
  "jobId": "processing-job-uuid",
  "estimatedTime": 30 // seconds
}

// Check upload status
GET /api/v1/upload/:uploadId/status

Response:
{
  "status": "uploaded" | "processing" | "ready" | "failed",
  "progress": 0-100,
  "stemSeparation": {
    "status": "pending" | "processing" | "complete",
    "stems": ["vocals", "drums", "bass", "other"]
  },
  "waveformUrl": "https://cdn...",
  "metadata": { ... }
}
```

---

## 5. Stem Separation

### 5.1 Model Architecture

**Primary Model:** Demucs v4 Hybrid Transformer

```python
class DemucsV4(nn.Module):
    """
    State-of-the-art stem separation model
    4 stems: vocals, drums, bass, other
    """
    def __init__(self):
        self.encoder = HybridEncoder()
        self.transformer = TransformerEncoder(layers=8)
        self.decoder = HybridDecoder()
        self.stem_heads = nn.ModuleDict({
            'vocals': StemHead(),
            'drums': StemHead(),
            'bass': StemHead(),
            'other': StemHead()
        })
```

### 5.2 Separation Pipeline

```typescript
interface StemSeparationJob {
  jobId: string;
  uploadId: string;
  status: 'queued' | 'processing' | 'complete' | 'failed';
  progress: number;
  stems: {
    vocals?: StemInfo;
    drums?: StemInfo;
    bass?: StemInfo;
    other?: StemInfo;
  };
  startedAt?: Date;
  completedAt?: Date;
  error?: string;
}

interface StemInfo {
  url: string;
  duration: number;
  peakLevel: number;
  rmsLevel: number;
  waveformUrl: string;
}
```

### 5.3 Processing Queue

```typescript
// Redis queue configuration
{
  queueName: 'stem-separation',
  concurrency: 10,           // Parallel jobs
  maxRetries: 3,
  timeout: 300000,           // 5 minutes max
  priorityLevels: {
    commercial: 1,           // Highest
    pro: 2,
    free: 3                  // Lowest
  }
}
```

### 5.4 Stem Separation API

```typescript
// Get stem separation status
GET /api/v1/stems/:uploadId

Response:
{
  "uploadId": "uuid",
  "status": "complete",
  "stems": [
    {
      "name": "vocals",
      "url": "https://cdn.remixaistudio.com/stems/xxx/vocals.wav",
      "duration": 180.5,
      "waveform": "https://cdn.../vocals-waveform.json",
      "soloMute": true
    },
    {
      "name": "drums",
      "url": "https://cdn.remixaistudio.com/stems/xxx/drums.wav",
      "duration": 180.5,
      "waveform": "https://cdn.../drums-waveform.json",
      "soloMute": true
    },
    // ... bass, other
  ],
  "processingTime": 28.3
}
```

---

## 6. Technical Implementation

### 6.1 Frontend (React)

```typescript
// components/AudioUploader.tsx
import { useDropzone } from 'react-dropzone';
import { uploadToS3 } from '../utils/s3';

export const AudioUploader: React.FC<AudioUploaderProps> = ({
  onUploadComplete,
  onProgress
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac', '.m4a', '.ogg', '.aiff']
    },
    maxFiles: 1,
    maxSize: 500 * 1024 * 1024, // 500MB
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const { uploadId, signedUrl } = await initiateUpload(file);
      await uploadToS3(signedUrl, file, onProgress);
      await completeUpload(uploadId);
      onUploadComplete(uploadId);
    }
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your track here...</p>
      ) : (
        <>
          <IconAudioFile />
          <p>Drag & drop your track here</p>
          <p>or click to browse</p>
          <p className="formats">MP3, WAV, FLAC, M4A, OGG, AIFF</p>
          <p className="max-size">Max 500MB</p>
        </>
      )}
    </div>
  );
};
```

### 6.2 Backend (Node.js/Python)

```python
# services/upload_service.py
from fastapi import APIRouter, UploadFile, HTTPException
from boto3 import client as s3_client
from celery import Celery

router = APIRouter()
s3 = s3_client('s3')
celery_app = Celery('tasks', broker='redis://localhost:6379')

@router.post('/api/v1/upload/initiate')
async def initiate_upload(file_info: UploadInitRequest):
    upload_id = str(uuid.uuid4())
    
    # Generate presigned URL
    signed_url = s3.generate_presigned_url(
        'put_object',
        Params={
            'Bucket': 'remixai-uploads',
            'Key': f'uploads/{upload_id}/{file_info.filename}',
            'ContentType': file_info.contentType
        },
        ExpiresIn=3600
    )
    
    # Store upload metadata
    await db.uploads.insert_one({
        '_id': upload_id,
        'filename': file_info.filename,
        'size': file_info.fileSize,
        'status': 'pending',
        'created_at': datetime.utcnow()
    })
    
    return {
        'uploadId': upload_id,
        'signedUrl': signed_url,
        'expiresAt': datetime.utcnow() + timedelta(hours=1)
    }

@router.post('/api/v1/upload/complete')
async def complete_upload(complete_req: UploadCompleteRequest):
    # Verify upload
    upload = await db.uploads.find_one({'_id': complete_req.uploadId})
    if not upload:
        raise HTTPException(404, 'Upload not found')
    
    # Queue stem separation
    task = stem_separation_task.delay(complete_req.uploadId)
    
    # Update status
    await db.uploads.update_one(
        {'_id': complete_req.uploadId},
        {'$set': {'status': 'processing', 'job_id': task.id}}
    )
    
    return {'status': 'processing', 'jobId': task.id}

@celery_app.task
def stem_separation_task(upload_id: str):
    """Process stem separation using Demucs"""
    from demucs import pretrained
    
    # Download file from S3
    upload_path = download_from_s3(upload_id)
    
    # Load model
    model = pretrained.get_model('htdemucs')
    
    # Separate stems
    stems = model.separate(audio_path=upload_path)
    
    # Upload stems to S3
    stem_urls = upload_stems_to_s3(upload_id, stems)
    
    # Update database
    db.uploads.update_one(
        {'_id': upload_id},
        {'$set': {
            'status': 'ready',
            'stems': stem_urls,
            'completed_at': datetime.utcnow()
        }}
    )
    
    return stem_urls
```

---

## 7. Performance Optimization

### 7.1 Chunked Upload

```typescript
// For files > 100MB, use multipart upload
interface MultipartUpload {
  uploadId: string;
  parts: Array<{
    partNumber: number;
    etag: string;
    size: number;
  }>;
}

// Chunk size: 10MB
const CHUNK_SIZE = 10 * 1024 * 1024;
```

### 7.2 CDN Distribution

- Processed stems served via CloudFront
- Waveform data cached at edge
- Upload URLs region-specific

### 7.3 Processing Time Targets

| File Duration | Target Processing Time |
|---------------|------------------------|
| < 3 minutes | < 20 seconds |
| 3-5 minutes | < 30 seconds |
| 5-10 minutes | < 60 seconds |
| 10+ minutes | < 2 minutes |

---

## 8. Error Handling

### 8.1 Error Codes

| Code | Message | Resolution |
|------|---------|------------|
| UPLOAD_001 | File too large | Upgrade to Pro/Commercial |
| UPLOAD_002 | Invalid format | Convert to supported format |
| UPLOAD_003 | Corrupted file | Re-export from source |
| UPLOAD_004 | Upload timeout | Retry or check connection |
| UPLOAD_005 | Stem separation failed | Manual review, reprocess |

### 8.2 Retry Logic

```typescript
const retryConfig = {
  maxRetries: 3,
  backoff: 'exponential',
  initialDelay: 1000,
  maxDelay: 30000
};
```

---

## 9. Security

### 9.1 Upload Security

- Signed URLs (1-hour expiration)
- Server-side encryption (AES-256)
- Virus scanning (ClamAV)
- Content validation (magic bytes)

### 9.2 Access Control

```typescript
interface AccessPolicy {
  owner: 'user';
  collaborators?: string[];
  public: boolean;
  downloadAllowed: boolean;
  remixAllowed: boolean;
}
```

---

## 10. Analytics & Monitoring

### 10.1 Metrics to Track

- Upload success rate
- Average upload time
- Stem separation processing time
- Error rates by type
- Format distribution
- File size distribution

### 10.2 Logging

```typescript
interface UploadLog {
  uploadId: string;
  userId: string;
  fileSize: number;
  format: string;
  duration: number;
  uploadTime: number;
  processingTime: number;
  status: string;
  error?: string;
  timestamp: Date;
}
```

---

*Version: 1.0.0*
*Last Updated: March 2026*
