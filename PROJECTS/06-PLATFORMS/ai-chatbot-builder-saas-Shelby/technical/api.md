# ChatFlow AI - API Documentation

**Base URL**: `https://api.chatflow.ai/v1`  
**Authentication**: Bearer Token (API Key)  
**Rate Limits**: See plan details in architecture.md  
**Format**: JSON

---

## Authentication

All API requests require authentication via API key.

### Getting Your API Key

1. Log into ChatFlow Dashboard
2. Go to Settings → API
3. Click "Generate API Key"
4. Copy and securely store your key

### Using Your API Key

Include in the `Authorization` header:

```bash
curl -X GET https://api.chatflow.ai/v1/bots \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Errors

API uses standard HTTP status codes:

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

### Error Response Format

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The bot_id parameter is required",
    "param": "bot_id",
    "type": "invalid_request_error"
  }
}
```

---

## Bots

### List Bots

```http
GET /bots
```

**Response**:
```json
{
  "data": [
    {
      "id": "bot_abc123",
      "name": "Support Bot",
      "status": "active",
      "created_at": "2026-03-01T10:00:00Z",
      "updated_at": "2026-03-20T15:30:00Z"
    }
  ],
  "has_more": false
}
```

---

### Create Bot

```http
POST /bots
```

**Request**:
```json
{
  "name": "Sales Bot",
  "description": "Handles sales inquiries",
  "config": {
    "model": "gpt-4",
    "temperature": 0.7,
    "max_tokens": 500,
    "system_prompt": "You are a helpful sales assistant."
  }
}
```

**Response**:
```json
{
  "id": "bot_xyz789",
  "name": "Sales Bot",
  "status": "active",
  "created_at": "2026-03-23T18:00:00Z"
}
```

---

### Get Bot

```http
GET /bots/:id
```

**Response**:
```json
{
  "id": "bot_abc123",
  "name": "Support Bot",
  "description": "Customer support chatbot",
  "status": "active",
  "config": {
    "model": "gpt-4",
    "temperature": 0.7,
    "max_tokens": 500
  },
  "channels": ["web", "whatsapp", "slack"],
  "created_at": "2026-03-01T10:00:00Z",
  "updated_at": "2026-03-20T15:30:00Z"
}
```

---

### Update Bot

```http
PUT /bots/:id
```

**Request**:
```json
{
  "name": "Updated Support Bot",
  "config": {
    "temperature": 0.5
  }
}
```

---

### Delete Bot

```http
DELETE /bots/:id
```

**Response**: `204 No Content`

---

## Training

### Add URL Source

```http
POST /bots/:id/training/sources
```

**Request**:
```json
{
  "type": "url",
  "url": "https://example.com/docs",
  "crawl_depth": 3
}
```

**Response**:
```json
{
  "id": "source_123",
  "type": "url",
  "url": "https://example.com/docs",
  "status": "processing",
  "pages_found": 0,
  "created_at": "2026-03-23T18:00:00Z"
}
```

---

### Upload Document

```http
POST /bots/:id/training/documents
Content-Type: multipart/form-data
```

**Request**:
```
file: [binary PDF/DOCX/TXT]
```

**Response**:
```json
{
  "id": "doc_456",
  "filename": "product-guide.pdf",
  "status": "processing",
  "chunks_created": 0,
  "created_at": "2026-03-23T18:00:00Z"
}
```

---

### Add Q&A Pair

```http
POST /bots/:id/training/qa
```

**Request**:
```json
{
  "question": "What is your refund policy?",
  "answer": "We offer a 30-day money-back guarantee.",
  "variations": [
    "Can I get a refund?",
    "Do you have a money-back guarantee?"
  ]
}
```

---

### Get Training Status

```http
GET /bots/:id/training/status
```

**Response**:
```json
{
  "status": "completed",
  "sources": {
    "urls": 5,
    "documents": 3,
    "qa_pairs": 25
  },
  "knowledge_chunks": 487,
  "last_trained": "2026-03-23T17:00:00Z",
  "next_training": null
}
```

---

## Conversations

### Start Conversation

```http
POST /conversations
```

**Request**:
```json
{
  "bot_id": "bot_abc123",
  "user_id": "user_456",
  "metadata": {
    "source": "website",
    "page": "/pricing"
  }
}
```

**Response**:
```json
{
  "id": "conv_789",
  "bot_id": "bot_abc123",
  "user_id": "user_456",
  "status": "active",
  "started_at": "2026-03-23T18:00:00Z"
}
```

---

### Send Message

```http
POST /conversations/:id/messages
```

**Request**:
```json
{
  "content": "What are your pricing plans?",
  "sender": "user"
}
```

**Response**:
```json
{
  "id": "msg_001",
  "conversation_id": "conv_789",
  "content": "We offer three plans: Starter ($29/mo), Pro ($99/mo), and Business ($199/mo). Which would you like to know more about?",
  "sender": "bot",
  "timestamp": "2026-03-23T18:00:05Z",
  "metadata": {
    "model": "gpt-4",
    "confidence": 0.94,
    "sources": ["pricing-page", "faq-doc"]
  }
}
```

---

### Get Conversation

```http
GET /conversations/:id
```

**Response**:
```json
{
  "id": "conv_789",
  "bot_id": "bot_abc123",
  "user_id": "user_456",
  "status": "active",
  "messages": [
    {
      "id": "msg_001",
      "content": "What are your pricing plans?",
      "sender": "user",
      "timestamp": "2026-03-23T18:00:00Z"
    },
    {
      "id": "msg_002",
      "content": "We offer three plans...",
      "sender": "bot",
      "timestamp": "2026-03-23T18:00:05Z"
    }
  ],
  "started_at": "2026-03-23T18:00:00Z",
  "updated_at": "2026-03-23T18:00:05Z"
}
```

---

### End Conversation

```http
POST /conversations/:id/end
```

**Request**:
```json
{
  "resolution": "resolved",
  "satisfaction": 5,
  "notes": "Customer interested in Pro plan"
}
```

---

## Flows

### List Flows

```http
GET /bots/:id/flows
```

**Response**:
```json
{
  "data": [
    {
      "id": "flow_123",
      "name": "Welcome Flow",
      "version": 2,
      "status": "active",
      "updated_at": "2026-03-20T10:00:00Z"
    }
  ]
}
```

---

### Create Flow

```http
POST /bots/:id/flows
```

**Request**:
```json
{
  "name": "Lead Qualification",
  "definition": {
    "nodes": [
      {
        "id": "start",
        "type": "message",
        "content": "Hi! I'd love to learn about your needs.",
        "next": "qualify"
      },
      {
        "id": "qualify",
        "type": "question",
        "question": "What's your company size?",
        "options": ["1-10", "11-50", "51-200", "200+"],
        "next": {
          "1-10": "starter",
          "11-50": "pro",
          "51-200": "business",
          "200+": "enterprise"
        }
      }
    ],
    "start_node": "start"
  }
}
```

---

### Update Flow

```http
PUT /flows/:id
```

**Request**:
```json
{
  "definition": {
    "nodes": [...]
  }
}
```

---

### Publish Flow

```http
POST /flows/:id/publish
```

**Response**:
```json
{
  "id": "flow_123",
  "version": 3,
  "status": "active",
  "published_at": "2026-03-23T18:00:00Z"
}
```

---

## Analytics

### Get Overview

```http
GET /bots/:id/analytics
```

**Query Parameters**:
- `start_date`: YYYY-MM-DD
- `end_date`: YYYY-MM-DD

**Response**:
```json
{
  "period": {
    "start": "2026-03-01",
    "end": "2026-03-23"
  },
  "summary": {
    "total_conversations": 1247,
    "bot_resolved": 987,
    "human_handoffs": 260,
    "resolution_rate": 0.79,
    "avg_response_time": 1.3,
    "satisfaction_score": 4.6
  },
  "trends": {
    "conversations": [
      {"date": "2026-03-01", "count": 45},
      {"date": "2026-03-02", "count": 52}
    ]
  }
}
```

---

### Get Conversations

```http
GET /bots/:id/analytics/conversations
```

**Query Parameters**:
- `start_date`, `end_date`
- `status`: active, resolved, handed_off
- `limit`: 1-100 (default: 20)
- `offset`: 0 (pagination)

**Response**:
```json
{
  "data": [
    {
      "id": "conv_789",
      "started_at": "2026-03-23T18:00:00Z",
      "duration": 300,
      "messages": 8,
      "resolution": "resolved",
      "satisfaction": 5
    }
  ],
  "total": 1247,
  "has_more": true
}
```

---

### Get Top Questions

```http
GET /bots/:id/analytics/questions
```

**Response**:
```json
{
  "questions": [
    {
      "question": "What are your pricing plans?",
      "count": 342,
      "resolution_rate": 0.95
    },
    {
      "question": "Do you offer refunds?",
      "count": 187,
      "resolution_rate": 0.89
    }
  ]
}
```

---

## Integrations

### List Integrations

```http
GET /bots/:id/integrations
```

**Response**:
```json
{
  "data": [
    {
      "id": "int_123",
      "provider": "shopify",
      "status": "connected",
      "connected_at": "2026-03-15T10:00:00Z"
    }
  ]
}
```

---

### Connect Integration

```http
POST /bots/:id/integrations
```

**Request**:
```json
{
  "provider": "shopify",
  "credentials": {
    "shop": "my-store.myshopify.com",
    "access_token": "shpat_xxx"
  }
}
```

---

### Disconnect Integration

```http
DELETE /integrations/:id
```

---

## Webhooks

### List Webhooks

```http
GET /bots/:id/webhooks
```

**Response**:
```json
{
  "data": [
    {
      "id": "wh_123",
      "url": "https://example.com/webhook",
      "events": ["conversation.started", "handoff.requested"],
      "active": true,
      "created_at": "2026-03-10T10:00:00Z"
    }
  ]
}
```

---

### Create Webhook

```http
POST /bots/:id/webhooks
```

**Request**:
```json
{
  "url": "https://example.com/webhook",
  "events": [
    "conversation.started",
    "conversation.ended",
    "handoff.requested",
    "lead.captured"
  ],
  "secret": "whsec_your_secret_key"
}
```

**Events**:
- `conversation.started`
- `conversation.ended`
- `message.received`
- `handoff.requested`
- `lead.captured`
- `payment.completed`

---

### Test Webhook

```http
POST /webhooks/:id/test
```

**Response**:
```json
{
  "success": true,
  "response_code": 200,
  "response_time": 145,
  "delivered_at": "2026-03-23T18:00:00Z"
}
```

---

## Team

### List Team Members

```http
GET /team
```

**Response**:
```json
{
  "data": [
    {
      "id": "user_123",
      "email": "jane@example.com",
      "role": "admin",
      "status": "active",
      "joined_at": "2026-01-15T10:00:00Z"
    }
  ]
}
```

---

### Invite Team Member

```http
POST /team/invitations
```

**Request**:
```json
{
  "email": "newmember@example.com",
  "role": "member"
}
```

**Roles**: `admin`, `member`, `viewer`

---

## Usage

### Get Usage

```http
GET /usage
```

**Response**:
```json
{
  "period": {
    "start": "2026-03-01",
    "end": "2026-03-23"
  },
  "plan": "pro",
  "limits": {
    "conversations": 10000,
    "channels": 5,
    "team_members": 5
  },
  "used": {
    "conversations": 6543,
    "channels": 3,
    "team_members": 4
  },
  "remaining": {
    "conversations": 3457
  }
}
```

---

## WebSocket API

For real-time conversations, use WebSocket connections.

### Connection

```
wss://api.chatflow.ai/v1/ws
Authorization: Bearer YOUR_API_KEY
```

### Messages

**Client → Server**:
```json
{
  "type": "message",
  "conversation_id": "conv_789",
  "content": "Hello!"
}
```

**Server → Client**:
```json
{
  "type": "message",
  "message": {
    "id": "msg_001",
    "content": "Hi! How can I help?",
    "sender": "bot",
    "timestamp": "2026-03-23T18:00:00Z"
  }
}
```

**Server → Client (Typing)**:
```json
{
  "type": "typing",
  "conversation_id": "conv_789",
  "is_typing": true
}
```

**Server → Client (Handoff)**:
```json
{
  "type": "handoff",
  "conversation_id": "conv_789",
  "reason": "user_requested",
  "agent": {
    "id": "agent_123",
    "name": "Jane Doe"
  }
}
```

---

## SDKs

### JavaScript/TypeScript

```bash
npm install @chatflow/sdk
```

```typescript
import { ChatFlow } from '@chatflow/sdk';

const client = new ChatFlow('YOUR_API_KEY');

// Start conversation
const conversation = await client.conversations.create({
  botId: 'bot_abc123',
  userId: 'user_456'
});

// Send message
const response = await client.conversations.sendMessage(conversation.id, {
  content: 'What are your prices?'
});

console.log(response.content);
```

### Python

```bash
pip install chatflow
```

```python
from chatflow import ChatFlow

client = ChatFlow(api_key='YOUR_API_KEY')

# Start conversation
conversation = client.conversations.create(
    bot_id='bot_abc123',
    user_id='user_456'
)

# Send message
response = client.conversations.send_message(
    conversation_id=conversation.id,
    content='What are your prices?'
)

print(response.content)
```

### PHP

```bash
composer require chatflow/sdk
```

```php
use ChatFlow\Client;

$client = new Client('YOUR_API_KEY');

$conversation = $client->conversations()->create([
    'bot_id' => 'bot_abc123',
    'user_id' => 'user_456'
]);

$response = $client->conversations()->sendMessage($conversation->id, [
    'content' => 'What are your prices?'
]);

echo $response->content;
```

---

## Rate Limits

| Plan | Requests/min | Burst |
|------|--------------|-------|
| Starter | 100 | 200 |
| Pro | 500 | 1,000 |
| Business | 2,000 | 4,000 |
| Enterprise | 10,000 | 20,000 |

**Headers**:
```
X-RateLimit-Limit: 500
X-RateLimit-Remaining: 450
X-RateLimit-Reset: 1711216800
```

**429 Response**:
```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Try again in 30 seconds.",
    "retry_after": 30
  }
}
```

---

## Changelog

### v1.2.0 (March 2026)
- Added webhook secret signing
- Added conversation metadata
- Improved error messages

### v1.1.0 (February 2026)
- Added WebSocket support
- Added Q&A training endpoint
- Added usage endpoint

### v1.0.0 (January 2026)
- Initial release

---

*Last Updated: March 2026*
