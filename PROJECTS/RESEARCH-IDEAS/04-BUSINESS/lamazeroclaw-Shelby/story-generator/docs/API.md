# API Reference

## Overview
StoryForge AI provides a comprehensive REST API for programmatic access to all platform features.

---

## Authentication

### API Keys

```typescript
// Get your API key from Settings > API
// Include in all requests:

Authorization: Bearer sf_live_xxxxxxxxxxxx
```

### Key Types

```
PERSONAL KEY
- For personal projects
- Rate limit: 100 requests/minute
- Access: All personal resources

COMMERCIAL KEY
- For commercial applications
- Rate limit: 1000 requests/minute
- Access: Team resources, higher limits

SERVICE KEY
- For server-to-server communication
- Rate limit: Custom
- Access: Configurable permissions
```

### OAuth 2.0

For applications that act on behalf of users:

```
Authorization Code Flow:

1. Redirect to:
   https://api.storyforge.ai/oauth/authorize
   ?client_id=YOUR_CLIENT_ID
   &redirect_uri=YOUR_REDIRECT_URI
   &response_type=code
   &scope=read+write

2. User authorizes

3. Receive code at redirect_uri

4. Exchange code for token:
   POST /oauth/token
   {
     "grant_type": "authorization_code",
     "code": "CODE_FROM_STEP_3",
     "redirect_uri": "YOUR_REDIRECT_URI",
     "client_id": "YOUR_CLIENT_ID",
     "client_secret": "YOUR_CLIENT_SECRET"
   }

5. Receive access_token and refresh_token
```

---

## Base URL

```
Production:  https://api.storyforge.ai/v1
Sandbox:     https://sandbox-api.storyforge.ai/v1
```

---

## Stories

### Create Story

```http
POST /stories
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "title": "The Dragon's Heir",
  "genre": "fantasy",
  "subgenre": "high-fantasy",
  "description": "An epic fantasy adventure...",
  "targetWordCount": 80000,
  "plotFramework": "three-act",
  "writingStyle": "martin",
  "characters": [
    {
      "name": "Kael",
      "role": "protagonist",
      "description": "A young blacksmith..."
    }
  ],
  "isInteractive": false,
  "visibility": "private"
}
```

**Response:**
```json
{
  "id": "story_abc123",
  "title": "The Dragon's Heir",
  "status": "draft",
  "createdAt": "2024-01-15T10:30:00Z",
  "url": "/stories/story_abc123"
}
```

### Get Story

```http
GET /stories/:id
```

**Response:**
```json
{
  "id": "story_abc123",
  "title": "The Dragon's Heir",
  "genre": "fantasy",
  "status": "draft",
  "wordCount": 45000,
  "chapters": [...],
  "characters": [...],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-20T14:22:00Z"
}
```

### Generate Story Content

```http
POST /stories/:id/generate
Content-Type: application/json

{
  "type": "chapter",
  "chapterNumber": 1,
  "outline": {
    "beats": [
      "Kael discovers his powers",
      "Village is attacked",
      "Kael escapes with mentor"
    ]
  },
  "style": "martin",
  "wordCount": 3000,
  "tone": "epic"
}
```

**Response:**
```json
{
  "jobId": "gen_xyz789",
  "status": "processing",
  "estimatedTime": 45,
  "pollUrl": "/generations/gen_xyz789"
}
```

### List Stories

```http
GET /stories?page=1&limit=20&status=draft&genre=fantasy
```

**Response:**
```json
{
  "stories": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### Update Story

```http
PUT /stories/:id
Content-Type: application/json

{
  "title": "The Dragon's Heir: Book One",
  "description": "Updated description...",
  "status": "complete"
}
```

### Delete Story

```http
DELETE /stories/:id
```

---

## Characters

### Create Character

```http
POST /stories/:storyId/characters
Content-Type: application/json

{
  "name": "Kael Ironforge",
  "role": "protagonist",
  "age": 19,
  "appearance": {
    "height": "5'10\"",
    "build": "athletic",
    "hairColor": "dark brown",
    "eyeColor": "green"
  },
  "personality": {
    "traits": ["determined", "loyal", "impulsive"],
    "fears": ["failure", "abandonment"],
    "desires": ["belonging", "purpose"]
  },
  "backstory": "Orphaned at young age...",
  "arc": {
    "type": "positive",
    "startingState": "Cynical loner",
    "endingState": "Trusted leader"
  }
}
```

### Get Character

```http
GET /stories/:storyId/characters/:characterId
```

### Update Character

```http
PUT /stories/:storyId/characters/:characterId
```

### Delete Character

```http
DELETE /stories/:storyId/characters/:characterId
```

### List Characters

```http
GET /stories/:storyId/characters
```

---

## Plot

### Generate Plot Outline

```http
POST /plots/generate
Content-Type: application/json

{
  "framework": "three-act",
  "genre": "fantasy",
  "logline": "A young blacksmith discovers he's the last heir of dragon riders.",
  "characters": [...],
  "targetWordCount": 80000
}
```

**Response:**
```json
{
  "outline": {
    "title": "The Dragon's Heir",
    "framework": "three-act",
    "acts": [
      {
        "number": 1,
        "name": "Setup",
        "beats": [
          {
            "name": "Opening Image",
            "description": "Kael works in the forge...",
            "estimatedWords": 3000
          },
          ...
        ]
      },
      ...
    ]
  }
}
```

### Get Plot Frameworks

```http
GET /plots/frameworks
```

**Response:**
```json
{
  "frameworks": [
    {
      "id": "three-act",
      "name": "Three-Act Structure",
      "description": "Classic dramatic structure...",
      "beats": 15
    },
    {
      "id": "heros-journey",
      "name": "Hero's Journey",
      "description": "Joseph Campbell's monomyth...",
      "beats": 12
    },
    ...
  ]
}
```

---

## Styles

### List Available Styles

```http
GET /styles
```

**Response:**
```json
{
  "styles": [
    {
      "id": "hemingway",
      "name": "Ernest Hemingway",
      "era": "1920s-1960s",
      "characteristics": {
        "sentenceLength": "short",
        "vocabulary": "simple"
      }
    },
    ...
  ]
}
```

### Analyze Text Style

```http
POST /styles/analyze
Content-Type: application/json

{
  "text": "It was late and the waiters knew..."
}
```

**Response:**
```json
{
  "detectedStyles": [
    {
      "author": "Hemingway",
      "confidence": 0.89,
      "matchingElements": ["Short sentences", "Concrete vocabulary"]
    }
  ],
  "metrics": {
    "averageSentenceLength": 12.4,
    "vocabularyComplexity": 0.45
  }
}
```

### Apply Style

```http
POST /styles/apply
Content-Type: application/json

{
  "text": "The magnificent castle stood majestically...",
  "targetStyle": "hemingway",
  "intensity": 0.8
}
```

---

## Interactive Stories

### Create Interactive Story

```http
POST /interactive
Content-Type: application/json

{
  "title": "The Dragon's Choice",
  "genre": "fantasy",
  "type": "choose-your-own-adventure"
}
```

### Add Node

```http
POST /interactive/:storyId/nodes
Content-Type: application/json

{
  "title": "The Mysterious Door",
  "content": "You stand before an ancient door...",
  "type": "choice",
  "choices": [
    {
      "text": "Open the door",
      "targetNodeId": "node_room"
    },
    {
      "text": "Leave it alone",
      "targetNodeId": "node_corridor"
    }
  ]
}
```

### Start Play Session

```http
POST /interactive/:storyId/play
```

**Response:**
```json
{
  "sessionId": "session_xyz123",
  "startNodeId": "node_start",
  "initialState": {
    "health": 100,
    "inventory": []
  }
}
```

### Make Choice

```http
POST /interactive/:storyId/play/:sessionId/choose
Content-Type: application/json

{
  "nodeId": "node_door",
  "choiceId": "choice_open"
}
```

**Response:**
```json
{
  "nextNodeId": "node_room",
  "content": "You open the door and step inside...",
  "stateChanges": {
    "curiosity": "+5"
  }
}
```

---

## Exports

### Create Export

```http
POST /exports
Content-Type: application/json

{
  "storyId": "story_abc123",
  "format": "pdf",
  "options": {
    "pageSize": "A4",
    "includeTitlePage": true,
    "includeTableOfContents": true,
    "theme": "classic"
  }
}
```

**Response:**
```json
{
  "exportId": "export_def456",
  "status": "processing",
  "estimatedTime": 30,
  "progressUrl": "/exports/export_def456"
}
```

### Check Export Status

```http
GET /exports/:exportId
```

**Response:**
```json
{
  "exportId": "export_def456",
  "status": "completed",
  "downloadUrl": "https://cdn.storyforge.ai/exports/def456.pdf",
  "expiresAt": "2024-01-22T10:30:00Z",
  "fileSize": 2456789
}
```

### Download Export

```http
GET /exports/:exportId/download
```

---

## Community

### Publish Story

```http
POST /community/stories
Content-Type: application/json

{
  "storyId": "story_abc123",
  "title": "The Dragon's Heir",
  "description": "An epic fantasy...",
  "genre": "fantasy",
  "tags": ["dragons", "epic", "coming-of-age"],
  "visibility": "public",
  "allowComments": true,
  "contentWarnings": ["violence"],
  "ageRating": "PG-13"
}
```

### Get Feedback

```http
GET /community/stories/:storyId/feedback
```

### Add Feedback

```http
POST /community/stories/:storyId/feedback
Content-Type: application/json

{
  "type": "review",
  "content": "Loved this story! The character development...",
  "rating": 5,
  "categories": {
    "plot": 5,
    "characters": 5,
    "pacing": 4
  }
}
```

---

## User

### Get Profile

```http
GET /user/profile
```

### Update Profile

```http
PUT /user/profile
Content-Type: application/json

{
  "displayName": "WriterName",
  "bio": "Fantasy author and storyteller...",
  "website": "https://mywebsite.com"
}
```

### Get Usage Stats

```http
GET /user/usage
```

**Response:**
```json
{
  "tier": "pro",
  "storiesGenerated": 12,
  "storiesLimit": "unlimited",
  "wordsGenerated": 145000,
  "wordsLimit": 100000,
  "audioWordsUsed": 25000,
  "audioWordsLimit": 50000,
  "resetDate": "2024-02-01T00:00:00Z"
}
```

---

## Webhooks

### Configure Webhooks

```http
POST /webhooks
Content-Type: application/json

{
  "url": "https://your-server.com/webhooks/storyforge",
  "events": [
    "story.created",
    "story.updated",
    "export.completed",
    "generation.completed"
  ],
  "secret": "your_webhook_secret"
}
```

### Webhook Payload

```json
{
  "id": "wh_event_123",
  "type": "export.completed",
  "createdAt": "2024-01-15T10:30:00Z",
  "data": {
    "exportId": "export_def456",
    "storyId": "story_abc123",
    "format": "pdf",
    "status": "completed",
    "downloadUrl": "https://..."
  }
}
```

### Webhook Events

```
story.created
story.updated
story.deleted
story.published

chapter.created
chapter.updated

character.created
character.updated
character.deleted

export.created
export.completed
export.failed

generation.started
generation.completed
generation.failed

feedback.created
feedback.updated

collaboration.invited
collaboration.joined
```

---

## Rate Limits

```
FREE TIER:
- 100 requests/hour
- 10 requests/minute burst

PRO TIER:
- 1,000 requests/hour
- 50 requests/minute burst

COMMERCIAL TIER:
- 10,000 requests/hour
- 200 requests/minute burst

Rate limit headers:
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1642234567
```

---

## Errors

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": [
      {
        "field": "title",
        "message": "Title is required"
      },
      {
        "field": "genre",
        "message": "Invalid genre. Must be one of: fantasy, sci-fi, romance..."
      }
    ]
  }
}
```

### Common Error Codes

```
AUTHENTICATION_ERROR (401)
- Invalid or missing API key
- Expired token

AUTHORIZATION_ERROR (403)
- Insufficient permissions
- Resource not owned by user

NOT_FOUND (404)
- Resource doesn't exist
- Invalid ID

VALIDATION_ERROR (400)
- Invalid input
- Missing required fields

RATE_LIMIT_EXCEEDED (429)
- Too many requests
- Retry after specified time

INTERNAL_ERROR (500)
- Server error
- Try again later

SERVICE_UNAVAILABLE (503)
- Maintenance
- Temporary outage
```

---

## SDKs

### Node.js

```bash
npm install @storyforge/sdk
```

```javascript
import { StoryForge } from '@storyforge/sdk';

const client = new StoryForge('YOUR_API_KEY');

// Create a story
const story = await client.stories.create({
  title: 'My Story',
  genre: 'fantasy'
});

// Generate content
const generation = await client.stories.generate(story.id, {
  chapterNumber: 1,
  wordCount: 3000
});

// Wait for completion
const result = await generation.waitForCompletion();

// Export
const export_job = await client.exports.create(story.id, {
  format: 'pdf'
});
```

### Python

```bash
pip install storyforge
```

```python
from storyforge import StoryForge

client = StoryForge('YOUR_API_KEY')

# Create a story
story = client.stories.create(
    title='My Story',
    genre='fantasy'
)

# Generate content
generation = client.stories.generate(
    story.id,
    chapter_number=1,
    word_count=3000
)

# Wait for completion
result = generation.wait()

# Export
export_job = client.exports.create(story.id, format='pdf')
```

---

## Changelog

### v1.2.0 (Current)
- Added interactive story API
- New export formats (screenplay, audio)
- Improved rate limits for Commercial tier
- Webhook support

### v1.1.0
- Character relationship API
- Style blending endpoint
- Community features
- Bulk operations

### v1.0.0
- Initial release
- Core story generation
- Basic exports
- User management
