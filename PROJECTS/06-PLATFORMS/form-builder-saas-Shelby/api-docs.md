# FormFlow API Documentation

## Overview

FormFlow provides a RESTful API for programmatic access to forms, submissions, and integrations. All API calls require authentication.

**Base URL:** `https://api.formflow.io/v1`

---

## Authentication

### API Keys

Generate API keys from your dashboard settings.

**Key Types:**
- **Full Access:** Read/write all resources
- **Read-Only:** Read access only
- **Submissions Only:** Create submissions only (for public forms)

### Using API Keys

Include your API key in the `Authorization` header:

```bash
curl -X GET "https://api.formflow.io/v1/forms" \
  -H "Authorization: Bearer ffk_live_abc123xyz789"
```

### OAuth 2.0

For third-party applications, use OAuth 2.0:

```
Authorization URL: https://formflow.io/oauth/authorize
Token URL: https://api.formflow.io/oauth/token
Scopes: forms:read forms:write submissions:read submissions:write
```

---

## Rate Limiting

| Plan | Requests/Minute | Requests/Day |
|------|-----------------|--------------|
| Free | 60 | 1,000 |
| Starter | 300 | 10,000 |
| Professional | 600 | 50,000 |
| Enterprise | 1,000 | Unlimited |

**Rate Limit Headers:**
```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 299
X-RateLimit-Reset: 1640000000
```

---

## Forms API

### List Forms

```http
GET /forms
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `limit` | integer | Items per page (default: 20, max: 100) |
| `status` | string | Filter by status (draft, published, archived) |
| `sort` | string | Sort field (created_at, updated_at, name) |
| `order` | string | Sort order (asc, desc) |

**Response:**
```json
{
  "data": [
    {
      "id": "form_abc123",
      "name": "Contact Form",
      "status": "published",
      "url": "https://formflow.io/f/abc123",
      "embed_code": "<script src=\"...\"></script>",
      "submissions_count": 150,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-20T14:45:00Z"
    }
  ],
  "meta": {
    "total": 45,
    "page": 1,
    "limit": 20,
    "pages": 3
  }
}
```

---

### Get Form

```http
GET /forms/:id
```

**Response:**
```json
{
  "id": "form_abc123",
  "name": "Contact Form",
  "description": "Get in touch with us",
  "status": "published",
  "url": "https://formflow.io/f/abc123",
  "elements": [
    {
      "id": "field_1",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com"
    },
    {
      "id": "field_2",
      "type": "long_text",
      "label": "Message",
      "required": true,
      "placeholder": "How can we help?"
    }
  ],
  "settings": {
    "theme": {
      "primary_color": "#3B82F6",
      "background_color": "#FFFFFF"
    },
    "notifications": {
      "email": "team@example.com",
      "slack_webhook": null
    },
    "limits": {
      "max_submissions": null,
      "one_per_user": false
    }
  },
  "analytics": {
    "views": 1250,
    "submissions": 150,
    "completion_rate": 0.72
  },
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:45:00Z"
}
```

---

### Create Form

```http
POST /forms
```

**Request Body:**
```json
{
  "name": "Customer Feedback",
  "description": "Collect customer feedback",
  "elements": [
    {
      "type": "rating",
      "label": "How satisfied are you?",
      "required": true,
      "scale": 5
    },
    {
      "type": "long_text",
      "label": "Additional comments",
      "required": false
    }
  ],
  "settings": {
    "theme": {
      "primary_color": "#3B82F6"
    },
    "notifications": {
      "email": "feedback@example.com"
    }
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "form_xyz789",
  "name": "Customer Feedback",
  "url": "https://formflow.io/f/xyz789",
  "status": "draft",
  "created_at": "2024-01-21T09:00:00Z"
}
```

---

### Update Form

```http
PUT /forms/:id
```

**Request Body:**
```json
{
  "name": "Updated Form Name",
  "elements": [...],
  "settings": {...}
}
```

**Response:** `200 OK`

---

### Delete Form

```http
DELETE /forms/:id
```

**Response:** `204 No Content`

---

### Publish Form

```http
POST /forms/:id/publish
```

**Response:**
```json
{
  "id": "form_abc123",
  "status": "published",
  "url": "https://formflow.io/f/abc123",
  "published_at": "2024-01-21T10:00:00Z"
}
```

---

## Submissions API

### List Submissions

```http
GET /forms/:form_id/submissions
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number |
| `limit` | integer | Items per page |
| `after` | datetime | Submissions after this date |
| `before` | datetime | Submissions before this date |
| `status` | string | Filter by status (complete, partial) |

**Response:**
```json
{
  "data": [
    {
      "id": "sub_123abc",
      "form_id": "form_abc123",
      "data": {
        "field_1": "user@example.com",
        "field_2": "Great service!"
      },
      "metadata": {
        "ip": "192.168.1.1",
        "user_agent": "Mozilla/5.0...",
        "referrer": "https://example.com",
        "device": "desktop",
        "location": {
          "country": "US",
          "city": "New York"
        }
      },
      "status": "complete",
      "submitted_at": "2024-01-20T14:30:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 20
  }
}
```

---

### Get Submission

```http
GET /forms/:form_id/submissions/:submission_id
```

**Response:**
```json
{
  "id": "sub_123abc",
  "form_id": "form_abc123",
  "data": {
    "field_1": "user@example.com",
    "field_2": "Great service!"
  },
  "metadata": {...},
  "status": "complete",
  "submitted_at": "2024-01-20T14:30:00Z"
}
```

---

### Create Submission

```http
POST /forms/:form_id/submissions
```

**Request Body:**
```json
{
  "data": {
    "field_1": "user@example.com",
    "field_2": "Message content"
  },
  "metadata": {
    "referrer": "https://example.com"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "sub_xyz789",
  "status": "complete",
  "submitted_at": "2024-01-21T10:00:00Z"
}
```

---

### Delete Submission

```http
DELETE /forms/:form_id/submissions/:submission_id
```

**Response:** `204 No Content`

---

## Analytics API

### Get Form Analytics

```http
GET /forms/:id/analytics
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `start_date` | date | Start of date range |
| `end_date` | date | End of date range |
| `group_by` | string | Group by (day, week, month) |

**Response:**
```json
{
  "form_id": "form_abc123",
  "period": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "summary": {
    "views": 5000,
    "submissions": 350,
    "completion_rate": 0.70,
    "avg_time_to_complete": 145
  },
  "timeseries": [
    {
      "date": "2024-01-01",
      "views": 150,
      "submissions": 10
    },
    {
      "date": "2024-01-02",
      "views": 175,
      "submissions": 12
    }
  ],
  "drop_off": [
    {
      "field_id": "field_1",
      "field_label": "Email",
      "drop_off_rate": 0.05
    },
    {
      "field_id": "field_2",
      "field_label": "Message",
      "drop_off_rate": 0.15
    }
  ],
  "devices": {
    "desktop": 0.60,
    "mobile": 0.35,
    "tablet": 0.05
  },
  "locations": [
    {"country": "US", "submissions": 200},
    {"country": "GB", "submissions": 50},
    {"country": "CA", "submissions": 30}
  ]
}
```

---

## Integrations API

### List Integrations

```http
GET /integrations
```

**Response:**
```json
{
  "data": [
    {
      "id": "int_123",
      "type": "google_sheets",
      "status": "active",
      "connected_at": "2024-01-15T10:00:00Z"
    },
    {
      "id": "int_456",
      "type": "slack",
      "status": "active",
      "connected_at": "2024-01-16T14:30:00Z"
    }
  ]
}
```

---

### Connect Integration

```http
POST /integrations
```

**Request Body:**
```json
{
  "type": "google_sheets",
  "config": {
    "spreadsheet_id": "abc123",
    "sheet_name": "Submissions"
  }
}
```

**Response:** `201 Created`

---

### Delete Integration

```http
DELETE /integrations/:id
```

**Response:** `204 No Content`

---

## Webhooks API

### List Webhooks

```http
GET /webhooks
```

**Response:**
```json
{
  "data": [
    {
      "id": "wh_123",
      "url": "https://example.com/webhook",
      "events": ["submission.created", "form.published"],
      "active": true,
      "created_at": "2024-01-15T10:00:00Z"
    }
  ]
}
```

---

### Create Webhook

```http
POST /webhooks
```

**Request Body:**
```json
{
  "url": "https://example.com/webhook",
  "events": [
    "submission.created",
    "submission.updated",
    "form.published"
  ],
  "secret": "whsec_your_secret_key"
}
```

**Response:** `201 Created`
```json
{
  "id": "wh_abc123",
  "url": "https://example.com/webhook",
  "events": ["submission.created", "submission.updated", "form.published"],
  "secret": "whsec_...",
  "active": true,
  "created_at": "2024-01-21T10:00:00Z"
}
```

---

### Delete Webhook

```http
DELETE /webhooks/:id
```

**Response:** `204 No Content`

---

## Users API

### Get Current User

```http
GET /user
```

**Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "plan": "professional",
  "usage": {
    "forms": 15,
    "submissions": 850,
    "storage_bytes": 5242880
  },
  "limits": {
    "forms": -1,
    "submissions": 10000,
    "storage_bytes": 107374182400
  },
  "created_at": "2024-01-01T00:00:00Z"
}
```

---

### Update User

```http
PUT /user
```

**Request Body:**
```json
{
  "name": "Updated Name",
  "settings": {
    "timezone": "America/New_York",
    "notifications": {
      "email": true,
      "slack": false
    }
  }
}
```

---

## SDKs

### JavaScript/Node.js

```bash
npm install @formflow/sdk
```

```javascript
const FormFlow = require('@formflow/sdk');

const client = new FormFlow({
  apiKey: 'ffk_live_abc123'
});

// List forms
const forms = await client.forms.list();

// Create form
const form = await client.forms.create({
  name: 'My Form',
  elements: [...]
});

// Get submissions
const submissions = await client.submissions.list('form_abc123');

// Create submission
const submission = await client.submissions.create('form_abc123', {
  data: { field_1: 'value' }
});
```

### Python

```bash
pip install formflow-sdk
```

```python
from formflow import FormFlow

client = FormFlow(api_key='ffk_live_abc123')

# List forms
forms = client.forms.list()

# Create form
form = client.forms.create(name='My Form', elements=[...])

# Get submissions
submissions = client.submissions.list('form_abc123')
```

### PHP

```bash
composer require formflow/sdk
```

```php
use FormFlow\Client;

$client = new Client('ffk_live_abc123');

// List forms
$forms = $client->forms()->list();

// Create form
$form = $client->forms()->create([
    'name' => 'My Form',
    'elements' => [...]
]);
```

### Ruby

```bash
gem install formflow-sdk
```

```ruby
require 'formflow'

client = FormFlow::Client.new(api_key: 'ffk_live_abc123')

# List forms
forms = client.forms.list

# Create form
form = client.forms.create(name: 'My Form', elements: [...])
```

---

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [
      {
        "field": "name",
        "message": "Name is required"
      }
    ]
  }
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

### Error Codes

| Code | Description |
|------|-------------|
| `invalid_request` | Request validation failed |
| `authentication_error` | Invalid or missing API key |
| `permission_error` | Insufficient permissions |
| `not_found` | Resource not found |
| `rate_limit_exceeded` | Too many requests |
| `internal_error` | Server error |

---

## Testing

### Test Mode

Use test API keys for development:
- Test keys start with `ffk_test_`
- Test data is isolated from production
- No actual emails/webhooks are sent

### Sandbox Environment

```
Base URL: https://api-sandbox.formflow.io/v1
```

---

*API documentation version: 1.0*
*Last updated: March 2024*
