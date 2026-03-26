# ComicForge AI - API Specification

## Base URL
```
Production: https://api.comicforge.ai/v1
Staging: https://api-staging.comicforge.ai/v1
```

## Authentication

All API requests require authentication using Bearer tokens:

```bash
Authorization: Bearer <jwt_token>
```

## Rate Limits

| Tier | Requests/min | AI Generations/hour |
|------|--------------|---------------------|
| Free | 60 | 10 |
| Pro | 300 | 100 |
| Commercial | 1000 | Unlimited |

---

## Authentication Endpoints

### POST /auth/register

Register a new user account.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "display_name": "ComicCreator",
  "invite_code": "optional"
}
```

**Response (201):**
```json
{
  "user": {
    "id": "usr_abc123",
    "email": "user@example.com",
    "display_name": "ComicCreator",
    "subscription_tier": "free",
    "created_at": "2026-03-22T10:00:00Z"
  },
  "tokens": {
    "access_token": "eyJhbGc...",
    "refresh_token": "eyJhbGc...",
    "expires_in": 3600
  }
}
```

### POST /auth/login

Authenticate user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response (200):**
```json
{
  "user": { ... },
  "tokens": { ... }
}
```

### POST /auth/refresh

Refresh access token.

**Request:**
```json
{
  "refresh_token": "eyJhbGc..."
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGc...",
  "expires_in": 3600
}
```

---

## User Endpoints

### GET /users/me

Get current user profile.

**Response (200):**
```json
{
  "id": "usr_abc123",
  "email": "user@example.com",
  "display_name": "ComicCreator",
  "avatar_url": "https://cdn.comicforge.ai/avatars/usr_abc123.jpg",
  "bio": "Independent comic creator",
  "subscription": {
    "tier": "pro",
    "status": "active",
    "current_period_end": "2026-04-22T10:00:00Z",
    "storage_used": 2147483648,
    "storage_limit": 10737418240
  },
  "stats": {
    "projects_count": 5,
    "pages_created": 127,
    "characters_created": 23
  },
  "created_at": "2026-01-15T08:30:00Z"
}
```

### PUT /users/me

Update user profile.

**Request:**
```json
{
  "display_name": "NewName",
  "bio": "Updated bio",
  "avatar": "data:image/jpeg;base64,..."
}
```

### DELETE /users/me

Delete user account (soft delete, 30-day recovery).

**Response (204):** No content

---

## Projects Endpoints

### GET /projects

List user's projects.

**Query Parameters:**
- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20, max: 100)
- `status` (string): Filter by status (draft, in_progress, published, archived)
- `sort` (string): Sort field (created_at, updated_at, title)
- `order` (string): Sort order (asc, desc)

**Response (200):**
```json
{
  "projects": [
    {
      "id": "prj_xyz789",
      "title": "My Awesome Comic",
      "description": "A superhero adventure",
      "genre": "superhero",
      "art_style": "modern_american",
      "status": "in_progress",
      "visibility": "private",
      "page_count": 12,
      "cover_image_url": "https://cdn.comicforge.ai/covers/prj_xyz789.jpg",
      "created_at": "2026-02-01T10:00:00Z",
      "updated_at": "2026-03-20T15:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "total_pages": 1
  }
}
```

### POST /projects

Create a new project.

**Request:**
```json
{
  "title": "My Awesome Comic",
  "description": "A superhero adventure",
  "genre": "superhero",
  "art_style": "modern_american",
  "template": "superhero_origin"
}
```

**Response (201):**
```json
{
  "id": "prj_xyz789",
  "title": "My Awesome Comic",
  "owner_id": "usr_abc123",
  "created_at": "2026-03-22T10:00:00Z"
}
```

### GET /projects/:id

Get project details.

**Response (200):**
```json
{
  "id": "prj_xyz789",
  "title": "My Awesome Comic",
  "description": "A superhero adventure",
  "genre": "superhero",
  "art_style": "modern_american",
  "status": "in_progress",
  "visibility": "private",
  "owner": {
    "id": "usr_abc123",
    "display_name": "ComicCreator"
  },
  "collaborators": [
    {
      "user_id": "usr_def456",
      "display_name": "ArtistPro",
      "role": "artist",
      "status": "active"
    }
  ],
  "stats": {
    "page_count": 12,
    "character_count": 8,
    "last_activity": "2026-03-20T15:30:00Z"
  },
  "created_at": "2026-02-01T10:00:00Z",
  "updated_at": "2026-03-20T15:30:00Z"
}
```

### PUT /projects/:id

Update project.

**Request:**
```json
{
  "title": "Updated Title",
  "description": "New description",
  "status": "published"
}
```

### DELETE /projects/:id

Delete project (moves to trash, 30-day recovery).

**Response (204):** No content

---

## Pages Endpoints

### GET /projects/:id/pages

List project pages.

**Response (200):**
```json
{
  "pages": [
    {
      "id": "pg_001",
      "page_number": 1,
      "title": "Cover Page",
      "thumbnail_url": "https://cdn.comicforge.ai/thumbs/pg_001.jpg",
      "status": "approved",
      "version": 3,
      "created_at": "2026-02-01T10:00:00Z",
      "updated_at": "2026-02-05T14:20:00Z"
    }
  ]
}
```

### POST /projects/:id/pages

Create a new page.

**Request:**
```json
{
  "page_number": 13,
  "title": "The Battle Begins",
  "template": "action_sequence"
}
```

**Response (201):**
```json
{
  "id": "pg_013",
  "page_number": 13,
  "project_id": "prj_xyz789",
  "canvas_data": {},
  "created_at": "2026-03-22T10:00:00Z"
}
```

### GET /projects/:id/pages/:pageId

Get page details with full canvas data.

**Response (200):**
```json
{
  "id": "pg_013",
  "page_number": 13,
  "title": "The Battle Begins",
  "canvas_data": {
    "width": 2048,
    "height": 3072,
    "layers": [
      {
        "id": "layer_1",
        "type": "panel",
        "x": 100,
        "y": 100,
        "width": 900,
        "height": 1200,
        "content": { ... }
      }
    ],
    "panels": [ ... ],
    "speech_bubbles": [ ... ],
    "sfx": [ ... ]
  },
  "status": "draft",
  "version": 1,
  "created_at": "2026-03-22T10:00:00Z"
}
```

### PUT /projects/:id/pages/:pageId

Update page canvas data.

**Request:**
```json
{
  "canvas_data": { ... },
  "status": "in_review"
}
```

---

## Characters Endpoints

### GET /characters

List characters (optionally filtered by project).

**Query Parameters:**
- `project_id` (UUID): Filter by project
- `search` (string): Search by name

**Response (200):**
```json
{
  "characters": [
    {
      "id": "chr_001",
      "project_id": "prj_xyz789",
      "name": "Captain Stellar",
      "description": "A cosmic-powered hero",
      "thumbnail_url": "https://cdn.comicforge.ai/characters/chr_001.jpg",
      "created_at": "2026-02-01T10:00:00Z"
    }
  ]
}
```

### POST /characters

Create a new character.

**Request:**
```json
{
  "project_id": "prj_xyz789",
  "name": "Captain Stellar",
  "appearance": {
    "age": 30,
    "gender": "male",
    "ethnicity": "caucasian",
    "body_type": "athletic",
    "height": "6'2\"",
    "hair": {
      "style": "short_spiky",
      "color": "#FFD700"
    },
    "eyes": {
      "color": "#00BFFF",
      "shape": "almond"
    }
  },
  "costume": {
    "style": "superhero",
    "colors": ["#0000FF", "#FFD700", "#FFFFFF"],
    "elements": ["cape", "chest_emblem", "gauntlets"]
  },
  "powers": [
    {
      "name": "Stellar Energy Manipulation",
      "type": "energy",
      "description": "Can absorb and project stellar energy"
    }
  ],
  "personality": {
    "archetype": "hero",
    "traits": ["brave", "selfless", "optimistic"],
    "voice_tone": "inspiring"
  },
  "backstory": "Born from a dying star..."
}
```

**Response (201):**
```json
{
  "id": "chr_001",
  "name": "Captain Stellar",
  "reference_images": [
    "https://cdn.comicforge.ai/characters/chr_001_front.jpg",
    "https://cdn.comicforge.ai/characters/chr_001_side.jpg"
  ],
  "embedding_generated": true,
  "created_at": "2026-03-22T10:00:00Z"
}
```

### POST /characters/:id/generate-variant

Generate a new pose or variation of a character.

**Request:**
```json
{
  "pose_description": "flying forward with arms outstretched",
  "expression": "determined",
  "camera_angle": "low_angle",
  "lighting": "dramatic_backlight"
}
```

**Response (202):**
```json
{
  "job_id": "job_gen_123",
  "status": "processing",
  "estimated_time_seconds": 30
}
```

### GET /characters/:id/poses

List character poses.

**Response (200):**
```json
{
  "poses": [
    {
      "id": "pose_001",
      "character_id": "chr_001",
      "pose_name": "Hero Landing",
      "image_url": "https://cdn.comicforge.ai/poses/pose_001.jpg",
      "is_default": true,
      "created_at": "2026-02-01T10:00:00Z"
    }
  ]
}
```

---

## Story Endpoints

### POST /stories/generate-outline

Generate story outline using AI.

**Request:**
```json
{
  "project_id": "prj_xyz789",
  "genre": "superhero",
  "logline": "A cosmic-powered hero must save Earth from an ancient threat.",
  "structure": "three_act",
  "target_page_count": 24,
  "tone": "epic",
  "influences": ["Jack Kirby", "Modern Avengers"]
}
```

**Response (202):**
```json
{
  "job_id": "job_story_456",
  "status": "processing",
  "estimated_time_seconds": 60
}
```

### GET /stories/:id

Get story with outline.

**Response (200):**
```json
{
  "id": "str_001",
  "project_id": "prj_xyz789",
  "title": "Stellar Origins",
  "logline": "A cosmic-powered hero must save Earth from an ancient threat.",
  "synopsis": "When ancient cosmic entities awaken...",
  "structure": {
    "type": "three_act",
    "acts": [
      {
        "act": 1,
        "title": "The Awakening",
        "pages": "1-6",
        "beats": [
          {
            "beat_number": 1,
            "name": "Opening Image",
            "description": "Captain Stellar patrols the cosmos",
            "page_estimate": 1
          },
          {
            "beat_number": 2,
            "name": "Catalyst",
            "description": "Distress signal from Earth",
            "page_estimate": 2
          }
        ]
      }
    ]
  },
  "created_at": "2026-03-22T10:00:00Z"
}
```

### POST /stories/:id/generate-script

Generate full script from outline.

**Request:**
```json
{
  "act": 1,
  "beats": [1, 2, 3],
  "style": "full_script"
}
```

**Response (202):**
```json
{
  "job_id": "job_script_789",
  "status": "processing",
  "estimated_time_seconds": 120
}
```

### POST /stories/:id/dialogue/suggest

Get dialogue suggestions for a scene.

**Request:**
```json
{
  "character_id": "chr_001",
  "context": "Captain Stellar confronts the villain for the first time",
  "emotion": "determined",
  "variations": 3
}
```

**Response (200):**
```json
{
  "suggestions": [
    {
      "text": "Your reign of terror ends today. I won't let you harm anyone else.",
      "subtext": "Confident, righteous anger",
      "tone_score": 0.92
    },
    {
      "text": "I've seen what you're capable of. But you're not facing ordinary people anymore.",
      "subtext": "Warning with underlying threat",
      "tone_score": 0.88
    },
    {
      "text": "This stops. Now. Whatever you're planning, whatever you hope to achieve--it ends here.",
      "subtext": "Absolute conviction",
      "tone_score": 0.85
    }
  ]
}
```

---

## Export Endpoints

### POST /projects/:id/export

Request an export job.

**Request:**
```json
{
  "format": "pdf",
  "options": {
    "pages": "all",
    "quality": "print",
    "color_mode": "cmyk",
    "bleed": true,
    "crop_marks": true
  }
}
```

**Response (202):**
```json
{
  "job_id": "job_export_001",
  "format": "pdf",
  "status": "queued",
  "created_at": "2026-03-22T10:00:00Z",
  "estimated_completion": "2026-03-22T10:05:00Z"
}
```

### GET /exports/:jobId

Get export job status.

**Response (200):**
```json
{
  "job_id": "job_export_001",
  "status": "completed",
  "progress": 100,
  "download_url": "https://cdn.comicforge.ai/exports/job_export_001.pdf",
  "expires_at": "2026-03-29T10:00:00Z",
  "file_size": 52428800,
  "completed_at": "2026-03-22T10:04:32Z"
}
```

**Status Values:**
- `queued`: Waiting to be processed
- `processing`: Currently being exported
- `completed`: Ready for download
- `failed`: Export failed (check error message)

---

## Collaboration Endpoints

### POST /projects/:id/collaborators

Invite a collaborator.

**Request:**
```json
{
  "email": "artist@example.com",
  "role": "artist",
  "message": "Want to work on this project together?"
}
```

**Response (201):**
```json
{
  "invitation_id": "inv_001",
  "email": "artist@example.com",
  "role": "artist",
  "status": "pending",
  "expires_at": "2026-03-29T10:00:00Z"
}
```

### GET /projects/:id/comments

Get comments on a project.

**Query Parameters:**
- `page_id` (UUID): Filter by page
- `status` (string): Filter by status (open, resolved)

**Response (200):**
```json
{
  "comments": [
    {
      "id": "cmt_001",
      "project_id": "prj_xyz789",
      "page_id": "pg_013",
      "author": {
        "id": "usr_def456",
        "display_name": "ArtistPro"
      },
      "content": "Love the composition on panel 3!",
      "position": {
        "panel": 3,
        "x": 450,
        "y": 600
      },
      "status": "open",
      "replies": [
        {
          "id": "cmt_002",
          "author": {
            "id": "usr_abc123",
            "display_name": "ComicCreator"
          },
          "content": "Thanks! Took me a while to get right.",
          "created_at": "2026-03-21T16:00:00Z"
        }
      ],
      "created_at": "2026-03-21T14:30:00Z"
    }
  ]
}
```

### POST /projects/:id/comments

Create a comment.

**Request:**
```json
{
  "page_id": "pg_013",
  "content": "Can we make the explosion bigger?",
  "position": {
    "panel": 5,
    "x": 800,
    "y": 400
  }
}
```

---

## Publishing Endpoints

### POST /projects/:id/publish/webtoon

Publish to Webtoon Canvas.

**Request:**
```json
{
  "title": "Stellar Origins - Episode 1",
  "description": "The beginning of Captain Stellar's journey",
  "genre": "superhero",
  "rating": "teen",
  "tags": ["superhero", "action", "sci-fi"],
  "schedule": {
    "publish_date": "2026-04-01T00:00:00Z",
    "auto_publish": true
  }
}
```

**Response (202):**
```json
{
  "submission_id": "sub_001",
  "platform": "webtoon",
  "status": "processing",
  "estimated_review_time": "2-3 business days"
}
```

---

## Billing Endpoints

### GET /billing/subscription

Get current subscription.

**Response (200):**
```json
{
  "subscription": {
    "id": "sub_billing_001",
    "plan": "pro",
    "status": "active",
    "billing_cycle": "monthly",
    "current_period_start": "2026-03-01T00:00:00Z",
    "current_period_end": "2026-04-01T00:00:00Z",
    "amount": 1499,
    "currency": "usd",
    "cancel_at_period_end": false
  }
}
```

### POST /billing/subscription/upgrade

Upgrade subscription.

**Request:**
```json
{
  "plan": "commercial",
  "billing_cycle": "monthly"
}
```

**Response (200):**
```json
{
  "subscription": { ... },
  "proration_amount": 2500,
  "next_charge_date": "2026-04-01T00:00:00Z"
}
```

### POST /billing/portal

Create billing portal session.

**Response (200):**
```json
{
  "portal_url": "https://billing.stripe.com/session/..."
}
```

---

## WebSocket API

### Real-time Collaboration

Connect to WebSocket endpoint:
```
wss://ws.comicforge.ai/v1/collaboration
```

**Connection Message:**
```json
{
  "type": "connect",
  "project_id": "prj_xyz789",
  "token": "jwt_token"
}
```

**Operation Messages:**

User joins:
```json
{
  "type": "user_joined",
  "user_id": "usr_def456",
  "display_name": "ArtistPro",
  "timestamp": "2026-03-22T10:00:00Z"
}
```

Canvas operation:
```json
{
  "type": "canvas_op",
  "operation": {
    "type": "add_layer",
    "layer": { ... }
  },
  "user_id": "usr_def456",
  "timestamp": "2026-03-22T10:00:00Z",
  "sequence_number": 12345
}
```

Cursor position:
```json
{
  "type": "cursor",
  "user_id": "usr_def456",
  "x": 450,
  "y": 600,
  "timestamp": "2026-03-22T10:00:00Z"
}
```

---

## Error Responses

### Standard Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ],
    "request_id": "req_abc123"
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `AUTHENTICATION_REQUIRED` | 401 | Missing or invalid token |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Invalid input data |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INSUFFICIENT_QUOTA` | 403 | Storage or generation quota exceeded |
| `INTERNAL_ERROR` | 500 | Server error |

---

## Webhooks

### Event Types

- `project.created`
- `project.updated`
- `project.published`
- `page.created`
- `page.updated`
- `comment.created`
- `export.completed`
- `export.failed`
- `subscription.updated`
- `subscription.canceled`

### Webhook Payload

```json
{
  "id": "evt_001",
  "type": "page.updated",
  "created_at": "2026-03-22T10:00:00Z",
  "data": {
    "project_id": "prj_xyz789",
    "page_id": "pg_013",
    "user_id": "usr_abc123"
  }
}
```

### Webhook Signature

All webhooks include a signature header:
```
X-ComicForge-Signature: sha256=abc123...
```

Verify using:
```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature)
```

---

*Document Version: 1.0*  
*Created: March 2026*  
*Status: API Specification Complete*
