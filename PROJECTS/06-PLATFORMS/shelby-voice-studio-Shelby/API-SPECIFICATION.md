# Shelby Voice Studio — API Specification

**Version:** 1.0  
**Base URL:** `https://api.shelbyvoicestudio.com/v1`  
**Authentication:** Bearer Token  
**Last Updated:** March 23, 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Rate Limits](#rate-limits)
4. [Errors](#errors)
5. [Voices](#voices)
6. [Projects](#projects)
7. [Custom Voices](#custom-voices)
8. [Subscriptions](#subscriptions)
9. [Webhooks](#webhooks)
10. [SDKs & Libraries](#sdks--libraries)

---

## Overview

The Shelby Voice Studio API allows developers to integrate AI voice generation, manage projects, and access custom voice clones programmatically.

**Key Features:**
- Text-to-speech generation with 52+ voices
- Custom voice clone management
- Project tracking and delivery
- Subscription and billing management
- Real-time webhook notifications

**Base URLs:**
- Production: `https://api.shelbyvoicestudio.com/v1`
- Sandbox: `https://sandbox-api.shelbyvoicestudio.com/v1`

---

## Authentication

All API requests require authentication using a Bearer token in the Authorization header.

```bash
curl -X GET "https://api.shelbyvoicestudio.com/v1/voices" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

### Obtaining API Keys

1. Log into your dashboard at `dashboard.shelbyvoicestudio.com`
2. Navigate to Settings → API Keys
3. Click "Create New API Key"
4. Copy and securely store your key (shown only once)

### Key Types

| Key Type | Permissions | Use Case |
|----------|-------------|----------|
| **Full Access** | All endpoints | Server-side applications |
| **Read Only** | GET endpoints only | Analytics, monitoring |
| **Project Only** | Projects, Voices | Voice generation apps |
| **Webhook** | Webhook management | Integration platforms |

### Security Best Practices

- Never expose API keys in client-side code
- Rotate keys every 90 days
- Use environment variables for key storage
- Implement key scoping for limited access
- Monitor key usage in dashboard

---

## Rate Limits

| Plan | Requests/Minute | Requests/Day | Concurrent Jobs |
|------|-----------------|--------------|-----------------|
| **Creator** | 60 | 10,000 | 5 |
| **Professional** | 300 | 50,000 | 20 |
| **Business** | 1,000 | 200,000 | 100 |
| **Enterprise** | Custom | Custom | Custom |

### Rate Limit Headers

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1647382800
```

### Handling Rate Limits

When rate limited, you'll receive a `429 Too Many Requests` response:

```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please retry after 60 seconds.",
    "retry_after": 60
  }
}
```

**Recommendation:** Implement exponential backoff with jitter.

---

## Errors

The API uses standard HTTP status codes and returns errors in a consistent format.

### Error Response Format

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The voice_id provided does not exist.",
    "param": "voice_id",
    "type": "invalid_request_error"
  }
}
```

### HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid parameters |
| 401 | Unauthorized | Invalid or missing API key |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 422 | Unprocessable Entity | Validation error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 503 | Service Unavailable | Maintenance or overload |

### Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `invalid_request` | Invalid parameters | Check parameter values |
| `authentication_error` | Invalid API key | Verify API key |
| `permission_error` | Insufficient permissions | Upgrade plan or check scopes |
| `not_found` | Resource doesn't exist | Verify resource ID |
| `insufficient_credits` | Not enough credits | Add credits or upgrade |
| `rate_limit_exceeded` | Too many requests | Implement backoff |
| `voice_unavailable` | Voice temporarily unavailable | Retry or use different voice |
| `processing_error` | Audio generation failed | Check input, retry |

---

## Voices

### List All Voices

```http
GET /voices
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `gender` | string | Filter by gender: `male`, `female`, `other` |
| `accent` | string | Filter by accent: `american`, `british`, `australian`, etc. |
| `style` | string | Filter by style: `narration`, `conversational`, `commercial` |
| `limit` | integer | Number of results (default: 20, max: 100) |
| `offset` | integer | Pagination offset |

**Response:**

```json
{
  "data": [
    {
      "id": "voice_001",
      "name": "Emma",
      "gender": "female",
      "age_range": "28-35",
      "accent": "american",
      "accent_detail": "General American",
      "style": ["narration", "corporate"],
      "preview_url": "https://cdn.shelbyvoicestudio.com/previews/voice_001.mp3",
      "sample_rate": 48000,
      "languages": ["en-US", "es-US"],
      "tier": "standard",
      "cost_multiplier": 1.0,
      "available": true
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 52,
    "has_more": true
  }
}
```

---

### Get Voice Details

```http
GET /voices/{voice_id}
```

**Response:**

```json
{
  "id": "voice_001",
  "name": "Emma",
  "gender": "female",
  "age_range": "28-35",
  "accent": "american",
  "accent_detail": "General American",
  "style": ["narration", "corporate", "e-learning"],
  "description": "Warm, professional voice ideal for corporate narration and e-learning content.",
  "preview_url": "https://cdn.shelbyvoicestudio.com/previews/voice_001.mp3",
  "samples": [
    {
      "id": "sample_001",
      "text": "Welcome to our presentation today.",
      "url": "https://cdn.shelbyvoicestudio.com/samples/voice_001_sample1.mp3",
      "duration": 3.2
    }
  ],
  "technical": {
    "sample_rate": 48000,
    "bit_depth": 24,
    "formats": ["wav", "mp3", "aac", "flac"]
  },
  "languages": [
    {
      "code": "en-US",
      "name": "English (US)",
      "fluency": "native"
    },
    {
      "code": "es-US",
      "name": "Spanish (US)",
      "fluency": "conversational"
    }
  ],
  "tier": "standard",
  "cost_multiplier": 1.0,
  "available": true,
  "created_at": "2026-01-15T10:30:00Z",
  "updated_at": "2026-03-01T14:22:00Z"
}
```

---

## Projects

### Create Project (Generate Speech)

```http
POST /projects
```

**Request Body:**

```json
{
  "voice_id": "voice_001",
  "text": "Welcome to Shelby Voice Studio. This is a sample of our AI voice technology.",
  "format": "mp3",
  "sample_rate": 44100,
  "speed": 1.0,
  "pitch": 1.0,
  "volume": 1.0,
  "ssml": false,
  "emotion": "neutral",
  "metadata": {
    "project_name": "Welcome Video",
    "client_reference": "PROJ-2026-001"
  },
  "webhook_url": "https://yourapp.com/webhooks/voice-complete"
}
```

**Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `voice_id` | string | Yes | Voice to use for generation |
| `text` | string | Yes* | Text to convert to speech (or use `ssml`) |
| `ssml` | string | Yes* | SSML-formatted text (or use `text`) |
| `format` | string | No | Output format: `wav`, `mp3`, `aac`, `flac` (default: `mp3`) |
| `sample_rate` | integer | No | Sample rate in Hz (default: 44100) |
| `speed` | float | No | Speech speed 0.5-2.0 (default: 1.0) |
| `pitch` | float | No | Pitch adjustment 0.5-2.0 (default: 1.0) |
| `volume` | float | No | Volume 0.0-1.0 (default: 1.0) |
| `emotion` | string | No | Emotion: `neutral`, `happy`, `sad`, `angry`, `excited` |
| `metadata` | object | No | Custom metadata for tracking |
| `webhook_url` | string | No | URL for completion notification |

**Response:**

```json
{
  "id": "proj_abc123xyz",
  "status": "processing",
  "voice_id": "voice_001",
  "text": "Welcome to Shelby Voice Studio...",
  "format": "mp3",
  "sample_rate": 44100,
  "estimated_duration": 5.2,
  "estimated_completion": "2026-03-23T01:25:00Z",
  "credits_used": 15,
  "created_at": "2026-03-23T01:20:00Z",
  "audio_url": null,
  "metadata": {
    "project_name": "Welcome Video",
    "client_reference": "PROJ-2026-001"
  }
}
```

---

### Get Project Status

```http
GET /projects/{project_id}
```

**Response:**

```json
{
  "id": "proj_abc123xyz",
  "status": "completed",
  "voice_id": "voice_001",
  "text": "Welcome to Shelby Voice Studio...",
  "format": "mp3",
  "sample_rate": 44100,
  "duration": 5.2,
  "file_size": 83200,
  "credits_used": 15,
  "created_at": "2026-03-23T01:20:00Z",
  "completed_at": "2026-03-23T01:21:30Z",
  "audio_url": "https://cdn.shelbyvoicestudio.com/audio/proj_abc123xyz.mp3",
  "audio_url_expires": "2026-03-30T01:21:30Z",
  "download_url": "https://api.shelbyvoicestudio.com/v1/projects/proj_abc123xyz/download",
  "metadata": {
    "project_name": "Welcome Video",
    "client_reference": "PROJ-2026-001"
  }
}
```

**Status Values:**
- `queued` — Waiting to be processed
- `processing` — Currently generating
- `completed` — Ready for download
- `failed` — Error occurred (check `error` field)
- `cancelled` — Cancelled by user

---

### List Projects

```http
GET /projects
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | string | Filter by status |
| `voice_id` | string | Filter by voice |
| `from` | string | Start date (ISO 8601) |
| `to` | string | End date (ISO 8601) |
| `limit` | integer | Results per page (default: 20) |
| `offset` | integer | Pagination offset |

**Response:**

```json
{
  "data": [
    {
      "id": "proj_abc123xyz",
      "status": "completed",
      "voice_id": "voice_001",
      "text": "Welcome to Shelby Voice Studio...",
      "duration": 5.2,
      "credits_used": 15,
      "created_at": "2026-03-23T01:20:00Z",
      "completed_at": "2026-03-23T01:21:30Z"
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 156,
    "has_more": true
  }
}
```

---

### Download Audio

```http
GET /projects/{project_id}/download
```

**Response:** Binary audio file with appropriate Content-Type header.

**Headers:**
```
Content-Type: audio/mpeg
Content-Disposition: attachment; filename="proj_abc123xyz.mp3"
Content-Length: 83200
```

---

### Cancel Project

```http
POST /projects/{project_id}/cancel
```

**Response:**

```json
{
  "id": "proj_abc123xyz",
  "status": "cancelled",
  "cancelled_at": "2026-03-23T01:22:00Z",
  "refund_credits": true,
  "credits_refunded": 15
}
```

---

## Custom Voices

### List Custom Voices

```http
GET /voices/custom
```

**Response:**

```json
{
  "data": [
    {
      "id": "custom_voice_001",
      "name": "My Brand Voice",
      "status": "active",
      "quality": "professional",
      "license": "exclusive",
      "created_at": "2026-02-15T10:00:00Z",
      "audio_samples": 3,
      "training_hours": 2.5,
      "last_used": "2026-03-20T14:30:00Z"
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 1,
    "has_more": false
  }
}
```

---

### Create Custom Voice (Start Training)

```http
POST /voices/custom
```

**Request Body:**

```json
{
  "name": "My Brand Voice",
  "description": "Professional brand voice for corporate videos",
  "license_type": "exclusive",
  "audio_files": [
    "file_abc123",
    "file_def456"
  ],
  "metadata": {
    "company": "Acme Corp",
    "contact": "john@acme.com"
  },
  "webhook_url": "https://yourapp.com/webhooks/voice-trained"
}
```

**Response:**

```json
{
  "id": "custom_voice_001",
  "name": "My Brand Voice",
  "status": "training",
  "estimated_completion": "2026-03-28T10:00:00Z",
  "training_progress": 0,
  "created_at": "2026-03-23T01:30:00Z"
}
```

---

### Get Custom Voice Details

```http
GET /voices/custom/{voice_id}
```

**Response:**

```json
{
  "id": "custom_voice_001",
  "name": "My Brand Voice",
  "description": "Professional brand voice for corporate videos",
  "status": "active",
  "quality": "professional",
  "license_type": "exclusive",
  "training": {
    "started_at": "2026-03-23T01:30:00Z",
    "completed_at": "2026-03-28T09:45:00Z",
    "audio_hours": 2.5,
    "quality_score": 94,
    "iterations": 3
  },
  "audio_samples": [
    {
      "id": "sample_001",
      "text": "Welcome to Acme Corp.",
      "url": "https://cdn.shelbyvoicestudio.com/custom/sample_001.mp3",
      "duration": 2.1
    }
  ],
  "usage": {
    "total_generations": 45,
    "total_characters": 125000,
    "last_used": "2026-03-20T14:30:00Z"
  },
  "metadata": {
    "company": "Acme Corp",
    "contact": "john@acme.com"
  },
  "created_at": "2026-02-15T10:00:00Z",
  "updated_at": "2026-03-28T09:45:00Z"
}
```

---

### Update Custom Voice

```http
PATCH /voices/custom/{voice_id}
```

**Request Body:**

```json
{
  "name": "Updated Brand Voice",
  "description": "Updated description",
  "metadata": {
    "company": "Acme Corp",
    "contact": "newcontact@acme.com"
  }
}
```

---

### Delete Custom Voice

```http
DELETE /voices/custom/{voice_id}
```

**Response:**

```json
{
  "id": "custom_voice_001",
  "deleted": true,
  "deleted_at": "2026-03-23T01:35:00Z"
}
```

---

## Subscriptions

### Get Current Subscription

```http
GET /subscription
```

**Response:**

```json
{
  "id": "sub_abc123",
  "plan": "professional",
  "status": "active",
  "current_period": {
    "start": "2026-03-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "credits": {
    "included": 250000,
    "used": 87500,
    "remaining": 162500,
    "rollover": 25000,
    "total_available": 187500
  },
  "features": {
    "voices_available": 20,
    "custom_voices": 1,
    "api_access": true,
    "priority_support": true,
    "white_label": false
  },
  "billing": {
    "amount": 9900,
    "currency": "usd",
    "interval": "month",
    "next_billing_date": "2026-04-01T00:00:00Z"
  },
  "created_at": "2026-01-01T00:00:00Z",
  "updated_at": "2026-03-01T00:00:00Z"
}
```

---

### Get Usage History

```http
GET /subscription/usage
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | string | Start date (ISO 8601) |
| `to` | string | End date (ISO 8601) |
| `granularity` | string | `day`, `week`, `month` |

**Response:**

```json
{
  "data": [
    {
      "date": "2026-03-01",
      "characters": 5200,
      "projects": 12,
      "credits_used": 5200
    },
    {
      "date": "2026-03-02",
      "characters": 8400,
      "projects": 18,
      "credits_used": 8400
    }
  ],
  "summary": {
    "total_characters": 87500,
    "total_projects": 195,
    "total_credits": 87500,
    "average_per_day": 3500
  }
}
```

---

### Upgrade Subscription

```http
POST /subscription/upgrade
```

**Request Body:**

```json
{
  "plan": "business",
  "billing_cycle": "monthly"
}
```

**Response:**

```json
{
  "id": "sub_abc123",
  "plan": "business",
  "status": "active",
  "proration": {
    "amount": 15000,
    "currency": "usd",
    "description": "Prorated upgrade charge"
  },
  "effective_date": "2026-03-23T01:40:00Z",
  "next_billing_date": "2026-04-01T00:00:00Z"
}
```

---

### Cancel Subscription

```http
POST /subscription/cancel
```

**Request Body:**

```json
{
  "cancel_at_period_end": true,
  "reason": "switching_service"
}
```

**Response:**

```json
{
  "id": "sub_abc123",
  "status": "canceling",
  "cancel_at_period_end": true,
  "cancellation_date": "2026-04-01T00:00:00Z",
  "access_until": "2026-04-01T00:00:00Z"
}
```

---

## Webhooks

### Available Events

| Event | Description |
|-------|-------------|
| `project.completed` | Project finished processing |
| `project.failed` | Project processing failed |
| `voice.trained` | Custom voice training complete |
| `voice.failed` | Custom voice training failed |
| `subscription.updated` | Subscription changed |
| `subscription.canceled` | Subscription canceled |
| `credits.low` | Credits below threshold (10%) |
| `credits.exhausted` | Credits fully used |

### Webhook Payload

```json
{
  "id": "evt_abc123",
  "type": "project.completed",
  "created_at": "2026-03-23T01:21:30Z",
  "data": {
    "project": {
      "id": "proj_abc123xyz",
      "status": "completed",
      "voice_id": "voice_001",
      "audio_url": "https://cdn.shelbyvoicestudio.com/audio/proj_abc123xyz.mp3",
      "duration": 5.2,
      "completed_at": "2026-03-23T01:21:30Z"
    }
  }
}
```

### Webhook Signature

All webhooks include a signature header for verification:

```
X-Signature: sha256=abc123def456...
```

**Verification:**

```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)
```

### Register Webhook

```http
POST /webhooks
```

**Request Body:**

```json
{
  "url": "https://yourapp.com/webhooks/voice",
  "events": [
    "project.completed",
    "project.failed",
    "credits.low"
  ],
  "active": true,
  "secret": "your_webhook_secret"
}
```

**Response:**

```json
{
  "id": "webhook_abc123",
  "url": "https://yourapp.com/webhooks/voice",
  "events": ["project.completed", "project.failed", "credits.low"],
  "active": true,
  "created_at": "2026-03-23T01:45:00Z",
  "last_triggered": null,
  "success_rate": null
}
```

---

## SDKs & Libraries

### Official SDKs

| Language | Package | Status |
|----------|---------|--------|
| **JavaScript/Node.js** | `@shelby-voice/sdk` | ✅ Stable |
| **Python** | `shelby-voice` | ✅ Stable |
| **Ruby** | `shelby_voice` | ✅ Stable |
| **Go** | `github.com/shelby-voice/go` | ✅ Stable |
| **PHP** | `shelby-voice/php-sdk` | ✅ Stable |
| **Java** | `com.shelbyvoice:sdk` | 🔄 Beta |
| **C#** | `ShelbyVoice.SDK` | 🔄 Beta |

### JavaScript/Node.js Example

```javascript
const ShelbyVoice = require('@shelby-voice/sdk');

const client = new ShelbyVoice('YOUR_API_KEY');

// Generate speech
const project = await client.projects.create({
  voice_id: 'voice_001',
  text: 'Hello, welcome to Shelby Voice Studio!',
  format: 'mp3'
});

// Wait for completion
const completed = await client.projects.waitForCompletion(project.id);

// Download audio
const audioBuffer = await client.projects.download(project.id);

// Save to file
const fs = require('fs');
fs.writeFileSync('output.mp3', audioBuffer);
```

### Python Example

```python
from shelby_voice import Client

client = Client('YOUR_API_KEY')

# Generate speech
project = client.projects.create(
    voice_id='voice_001',
    text='Hello, welcome to Shelby Voice Studio!',
    format='mp3'
)

# Wait for completion
completed = client.projects.wait_for_completion(project.id)

# Download audio
audio = client.projects.download(project.id)

# Save to file
with open('output.mp3', 'wb') as f:
    f.write(audio)
```

---

## Code Examples

### Basic Text-to-Speech

```javascript
// Node.js
const response = await fetch('https://api.shelbyvoicestudio.com/v1/projects', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    voice_id: 'voice_001',
    text: 'Hello world!',
    format: 'mp3'
  })
});

const project = await response.json();
console.log('Project ID:', project.id);
```

### SSML Support

```javascript
const response = await fetch('https://api.shelbyvoicestudio.com/v1/projects', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    voice_id: 'voice_001',
    ssml: `
      <speak>
        <p>Welcome to <break time="200ms"/>our presentation.</p>
        <p>Today we'll discuss <emphasis level="strong">three key points</emphasis>:</p>
        <break time="500ms"/>
        <p>First, <prosody rate="slow">innovation</prosody>.</p>
        <p>Second, <prosody pitch="+10%">growth</prosody>.</p>
        <p>Third, <prosody volume="loud">success</prosody>.</p>
      </speak>
    `,
    format: 'mp3'
  })
});
```

### Batch Processing

```python
from shelby_voice import Client
import asyncio

client = Client('YOUR_API_KEY')

texts = [
    "Chapter 1: The Beginning",
    "Chapter 2: The Journey",
    "Chapter 3: The End"
]

async def generate_chapter(text, chapter_num):
    project = await client.projects.create_async(
        voice_id='voice_001',
        text=text,
        metadata={'chapter': chapter_num}
    )
    return await client.projects.wait_for_completion_async(project.id)

# Process all chapters concurrently
chapters = await asyncio.gather(*[
    generate_chapter(text, i) for i, text in enumerate(texts, 1)
])

print(f"Generated {len(chapters)} chapters")
```

---

## Support

**Documentation:** https://docs.shelbyvoicestudio.com  
**API Status:** https://status.shelbyvoicestudio.com  
**Support Email:** api-support@shelbyvoicestudio.com  
**Developer Discord:** https://discord.gg/shelbyvoice  

---

*API specification subject to change. Version changes announced with 90 days notice. Last updated: March 23, 2026.*
