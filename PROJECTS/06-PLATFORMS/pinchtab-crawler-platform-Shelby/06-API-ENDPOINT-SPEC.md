# API Endpoint Specification

## GEO SEO Crawler Platform - REST API v1

---

## Base URL

```
Production: https://api.geoseoplatform.com/api/v1
Staging:    https://staging-api.geoseoplatform.com/api/v1
Local:      http://localhost:8000/api/v1
```

## Authentication

All endpoints require JWT authentication via `Authorization` header:

```
Authorization: Bearer <jwt_token>
```

### Token Acquisition

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer",
  "expires_in": 3600
}
```

### Token Refresh

```http
POST /api/v1/auth/refresh
Content-Type: application/json

{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}

Response: 200 OK
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 3600
}
```

---

## Authentication Endpoints

### POST /auth/register

Create a new user account.

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "John Doe",
  "organization_name": "Acme Corp"
}

Response: 201 Created
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "name": "John Doe",
  "organization_id": "660e8400-e29b-41d4-a716-446655440001",
  "created_at": "2026-03-21T14:30:00Z"
}
```

### POST /auth/login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "admin"
  }
}
```

### POST /auth/logout

```http
POST /api/v1/auth/logout
Authorization: Bearer <token>

Response: 204 No Content
```

### GET /auth/me

Get current user profile.

```http
GET /api/v1/auth/me
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "name": "John Doe",
  "organization_id": "660e8400-e29b-41d4-a716-446655440001",
  "role": "admin",
  "created_at": "2026-03-01T10:00:00Z"
}
```

---

## Tracked Sites Endpoints

### GET /sites

List all tracked sites for organization.

```http
GET /api/v1/sites
Authorization: Bearer <token>

Query Parameters:
  - page (integer, default: 1)
  - limit (integer, default: 20, max: 100)
  - status (string, optional: 'active', 'paused', 'archived')

Response: 200 OK
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "domain": "example.com",
      "name": "Example Corp",
      "status": "active",
      "base_url": "https://example.com",
      "favicon_url": "https://example.com/favicon.ico",
      "keyword_count": 45,
      "avg_geo_score": 72.5,
      "created_at": "2026-03-01T10:00:00Z",
      "updated_at": "2026-03-20T15:30:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "total_pages": 1
  }
}
```

### POST /sites

Add a new tracked site.

```http
POST /api/v1/sites
Authorization: Bearer <token>
Content-Type: application/json

{
  "domain": "example.com",
  "name": "Example Corp",
  "description": "Our main company website",
  "base_url": "https://example.com"
}

Response: 201 Created
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "domain": "example.com",
  "name": "Example Corp",
  "status": "active",
  "created_at": "2026-03-21T14:30:00Z"
}
```

### GET /sites/:id

Get site details with stats.

```http
GET /api/v1/sites/550e8400-e29b-41d4-a716-446655440000
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "domain": "example.com",
  "name": "Example Corp",
  "status": "active",
  "base_url": "https://example.com",
  "favicon_url": "https://example.com/favicon.ico",
  "keyword_count": 45,
  "active_crawl_jobs": 2,
  "total_crawls": 1250,
  "avg_geo_score": 72.5,
  "geo_score_trend": [
    {"date": "2026-03-15", "score": 68.2},
    {"date": "2026-03-16", "score": 69.5},
    {"date": "2026-03-17", "score": 70.1},
    {"date": "2026-03-18", "score": 71.8},
    {"date": "2026-03-19", "score": 72.0},
    {"date": "2026-03-20", "score": 72.3},
    {"date": "2026-03-21", "score": 72.5}
  ],
  "platform_breakdown": {
    "google": {"score": 75.2, "citations": 120},
    "bing": {"score": 68.5, "citations": 85},
    "perplexity": {"score": 73.8, "citations": 95}
  },
  "created_at": "2026-03-01T10:00:00Z",
  "updated_at": "2026-03-20T15:30:00Z"
}
```

### PUT /sites/:id

Update site details.

```http
PUT /api/v1/sites/550e8400-e29b-41d4-a716-446655440000
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Example Corp - Updated",
  "status": "paused"
}

Response: 200 OK
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "domain": "example.com",
  "name": "Example Corp - Updated",
  "status": "paused",
  "updated_at": "2026-03-21T14:35:00Z"
}
```

### DELETE /sites/:id

Delete a tracked site (and associated data).

```http
DELETE /api/v1/sites/550e8400-e29b-41d4-a716-446655440000
Authorization: Bearer <token>

Response: 204 No Content
```

---

## Keywords Endpoints

### GET /sites/:siteId/keywords

List keywords for a site.

```http
GET /api/v1/sites/550e8400-e29b-41d4-a716-446655440000/keywords
Authorization: Bearer <token>

Query Parameters:
  - page (integer)
  - limit (integer)
  - category (string, optional)
  - intent (string, optional)

Response: 200 OK
{
  "data": [
    {
      "id": "770e8400-e29b-41d4-a716-446655440010",
      "keyword": "best seo tools",
      "category": "SEO Software",
      "intent": "commercial",
      "search_volume": 5400,
      "difficulty": 65,
      "avg_geo_score": 78.5,
      "citation_rate": 0.65,
      "last_crawled": "2026-03-21T10:00:00Z",
      "created_at": "2026-03-01T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}
```

### POST /sites/:siteId/keywords

Add keyword(s) to a site.

```http
POST /api/v1/sites/550e8400-e29b-41d4-a716-446655440000/keywords
Authorization: Bearer <token>
Content-Type: application/json

{
  "keywords": [
    {
      "keyword": "best seo tools",
      "category": "SEO Software",
      "intent": "commercial"
    },
    {
      "keyword": "free seo checker",
      "category": "SEO Tools",
      "intent": "informational"
    }
  ]
}

Response: 201 Created
{
  "created": 2,
  "skipped": 0,
  "keywords": [
    {"id": "...", "keyword": "best seo tools"},
    {"id": "...", "keyword": "free seo checker"}
  ]
}
```

### POST /sites/:siteId/keywords/import

Bulk import keywords from CSV.

```http
POST /api/v1/sites/550e8400-e29b-41d4-a716-446655440000/keywords/import
Authorization: Bearer <token>
Content-Type: multipart/form-data

FormData:
  - file: (CSV file)
  - category: (optional, default for all)
  - intent: (optional, default for all)

CSV Format:
  keyword,category,intent,search_volume
  "best seo tools","SEO Software","commercial",5400
  "free seo checker","SEO Tools","informational",3200

Response: 200 OK
{
  "total": 100,
  "created": 95,
  "skipped": 5,
  "errors": [
    {"row": 23, "error": "Duplicate keyword"}
  ]
}
```

---

## Crawl Jobs Endpoints

### GET /crawl-jobs

List crawl jobs.

```http
GET /api/v1/crawl-jobs
Authorization: Bearer <token>

Query Parameters:
  - page (integer)
  - limit (integer)
  - status (string: 'pending', 'running', 'completed', 'failed')
  - platform (string: 'google', 'bing', 'perplexity', 'all')

Response: 200 OK
{
  "data": [
    {
      "id": "880e8400-e29b-41d4-a716-446655440020",
      "name": "Daily Google Crawl",
      "status": "running",
      "platform": "google",
      "keyword_count": 45,
      "progress_percent": 67,
      "completed_crawls": 30,
      "total_crawls": 45,
      "started_at": "2026-03-21T09:00:00Z",
      "estimated_completion": "2026-03-21T10:30:00Z",
      "created_at": "2026-03-21T08:55:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 5
  }
}
```

### POST /crawl-jobs

Create a new crawl job.

```http
POST /api/v1/crawl-jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Weekly Full Platform Crawl",
  "platform": "all",
  "site_id": "550e8400-e29b-41d4-a716-446655440000",
  "keyword_ids": ["770e8400-...", "770e8400-..."],
  "locations": ["us", "uk", "ca"],
  "languages": ["en"],
  "device": "desktop",
  "scheduled_at": "2026-03-22T06:00:00Z"  // Optional, for scheduled jobs
}

Response: 201 Created
{
  "id": "880e8400-e29b-41d4-a716-446655440020",
  "name": "Weekly Full Platform Crawl",
  "status": "pending",
  "platform": "all",
  "total_crawls": 135,  // 45 keywords × 3 platforms
  "created_at": "2026-03-21T14:40:00Z"
}
```

### GET /crawl-jobs/:id

Get job details with results.

```http
GET /api/v1/crawl-jobs/880e8400-e29b-41d4-a716-446655440020
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "880e8400-e29b-41d4-a716-446655440020",
  "name": "Weekly Full Platform Crawl",
  "status": "completed",
  "platform": "all",
  "progress_percent": 100,
  "completed_crawls": 135,
  "total_crawls": 135,
  "failed_crawls": 2,
  "started_at": "2026-03-21T09:00:00Z",
  "completed_at": "2026-03-21T11:45:00Z",
  "results_summary": {
    "total_citations": 450,
    "our_site_citations": 89,
    "avg_geo_score": 72.5,
    "platforms": {
      "google": {"crawls": 45, "citations": 35, "avg_score": 75.2},
      "bing": {"crawls": 45, "citations": 28, "avg_score": 68.5},
      "perplexity": {"crawls": 45, "citations": 26, "avg_score": 73.8}
    }
  },
  "created_at": "2026-03-21T08:55:00Z"
}
```

### DELETE /crawl-jobs/:id

Cancel/delete a job.

```http
DELETE /api/v1/crawl-jobs/880e8400-e29b-41d4-a716-446655440020
Authorization: Bearer <token>

Response: 204 No Content
```

---

## Crawl Results Endpoints

### GET /crawl-results

Query crawl results with filters.

```http
GET /api/v1/crawl-results
Authorization: Bearer <token>

Query Parameters:
  - site_id (UUID, optional)
  - keyword_id (UUID, optional)
  - platform (string, optional)
  - our_site_cited (boolean, optional)
  - date_from (ISO date, optional)
  - date_to (ISO date, optional)
  - page (integer)
  - limit (integer)

Response: 200 OK
{
  "data": [
    {
      "id": "990e8400-e29b-41d4-a716-446655440030",
      "job_id": "880e8400-...",
      "keyword": "best seo tools",
      "platform": "google",
      "query": "best seo tools",
      "ai_answer": "The best SEO tools include...",
      "citations": [
        {
          "position": 1,
          "title": "Top 10 SEO Tools for 2026",
          "url": "https://example.com/blog/seo-tools",
          "domain": "example.com",
          "snippet": "Comprehensive guide to SEO tools..."
        },
        {
          "position": 2,
          "title": "SEO Software Comparison",
          "url": "https://competitor.com/seo-guide",
          "domain": "competitor.com",
          "snippet": "Compare leading SEO platforms..."
        }
      ],
      "our_site_cited": true,
      "our_site_position": 1,
      "our_site_domain": "example.com",
      "geo_score": 85.0,
      "crawled_at": "2026-03-21T10:15:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 1250
  }
}
```

### GET /crawl-results/:id

Get single result with full details.

```http
GET /api/v1/crawl-results/990e8400-e29b-41d4-a716-446655440030
Authorization: Bearer <token>

Response: 200 OK
{
  "id": "990e8400-e29b-41d4-a716-446655440030",
  "job_id": "880e8400-...",
  "keyword_id": "770e8400-...",
  "keyword": "best seo tools",
  "platform": "google",
  "query": "best seo tools",
  "ai_answer": "The best SEO tools for 2026 include comprehensive platforms that offer keyword research, site auditing, backlink analysis, and rank tracking. Industry leaders provide integrated solutions for businesses of all sizes...",
  "ai_answer_tokens": 245,
  "citations": [
    {
      "position": 1,
      "title": "Top 10 SEO Tools for 2026",
      "url": "https://example.com/blog/seo-tools",
      "domain": "example.com",
      "snippet": "Our comprehensive guide covers the best SEO tools available, from free options to enterprise platforms.",
      "favicon": "https://example.com/favicon.ico"
    }
  ],
  "citation_count": 8,
  "our_site_cited": true,
  "our_site_position": 1,
  "our_site_snippet": "Our comprehensive guide covers...",
  "our_site_domain": "example.com",
  "geo_score": 85.0,
  "position_score": 95.0,
  "citation_rate": 0.125,
  "status": "success",
  "location": "us",
  "language": "en",
  "device": "desktop",
  "screenshot_url": "https://storage.../screenshot.png",
  "crawled_at": "2026-03-21T10:15:00Z"
}
```

---

## GEO Scores Endpoints

### GET /geo-scores/trend

Get GEO score trend for a site.

```http
GET /api/v1/geo-scores/trend?site_id=550e8400-...&days=30
Authorization: Bearer <token>

Response: 200 OK
{
  "site_id": "550e8400-...",
  "site_name": "Example Corp",
  "period_days": 30,
  "data": [
    {
      "date": "2026-02-20",
      "overall_score": 65.2,
      "google_score": 68.5,
      "bing_score": 60.1,
      "perplexity_score": 67.0,
      "citation_count": 75,
      "avg_position": 4.2
    },
    {
      "date": "2026-02-21",
      "overall_score": 66.1,
      "google_score": 69.0,
      "bing_score": 61.5,
      "perplexity_score": 67.8,
      "citation_count": 78,
      "avg_position": 4.0
    }
    // ... daily data
  ],
  "summary": {
    "start_score": 65.2,
    "end_score": 72.5,
    "change": 7.3,
    "change_percent": 11.2,
    "trend": "up"
  }
}
```

### GET /geo-scores/by-keyword

Get scores broken down by keyword.

```http
GET /api/v1/geo-scores/by-keyword?site_id=550e8400-...&platform=google
Authorization: Bearer <token>

Response: 200 OK
{
  "data": [
    {
      "keyword_id": "770e8400-...",
      "keyword": "best seo tools",
      "category": "SEO Software",
      "geo_score": 85.0,
      "citation_count": 12,
      "avg_position": 1.5,
      "platforms_present": ["google", "perplexity"],
      "last_crawled": "2026-03-21T10:00:00Z"
    },
    {
      "keyword_id": "770e8400-...",
      "keyword": "free seo checker",
      "category": "SEO Tools",
      "geo_score": 72.0,
      "citation_count": 8,
      "avg_position": 3.2,
      "platforms_present": ["google", "bing", "perplexity"],
      "last_crawled": "2026-03-21T10:00:00Z"
    }
  ],
  "meta": {
    "avg_score": 72.5,
    "total_keywords": 45,
    "keywords_cited": 38
  }
}
```

---

## Alerts Endpoints

### GET /alerts

List alerts.

```http
GET /api/v1/alerts
Authorization: Bearer <token>

Query Parameters:
  - unread_only (boolean, default: false)
  - severity (string, optional)
  - type (string, optional)

Response: 200 OK
{
  "data": [
    {
      "id": "aa0e8400-e29b-41d4-a716-446655440040",
      "type": "score_drop",
      "severity": "high",
      "title": "GEO Score Dropped 15 Points",
      "message": "Your GEO score for 'best seo tools' dropped from 85 to 70 on Google AI Overviews.",
      "metadata": {
        "keyword": "best seo tools",
        "platform": "google",
        "previous_score": 85,
        "current_score": 70
      },
      "is_read": false,
      "created_at": "2026-03-21T11:00:00Z"
    }
  ],
  "unread_count": 3
}
```

### PUT /alerts/:id/read

Mark alert as read.

```http
PUT /api/v1/alerts/aa0e8400-e29b-41d4-a716-446655440040/read
Authorization: Bearer <token>

Response: 204 No Content
```

### PUT /alerts/read-all

Mark all alerts as read.

```http
PUT /api/v1/alerts/read-all
Authorization: Bearer <token>

Response: 204 No Content
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
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (invalid/missing token) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not Found |
| 409 | Conflict (duplicate resource) |
| 422 | Unprocessable Entity |
| 429 | Rate Limited |
| 500 | Internal Server Error |

### Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Request body validation failed |
| `AUTHENTICATION_REQUIRED` | No token provided |
| `INVALID_TOKEN` | Token expired or invalid |
| `RESOURCE_NOT_FOUND` | Requested resource doesn't exist |
| `DUPLICATE_RESOURCE` | Resource already exists |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `QUOTA_EXCEEDED` | Monthly crawl quota exceeded |
| `INTERNAL_ERROR` | Unexpected server error |

---

## Rate Limits

| Endpoint Category | Limit |
|------------------|-------|
| Authentication | 10 requests/minute |
| Read operations (GET) | 100 requests/minute |
| Write operations (POST/PUT/DELETE) | 30 requests/minute |
| Crawl job creation | 5 requests/hour |

Rate limit headers included in responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1711033200
```

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
