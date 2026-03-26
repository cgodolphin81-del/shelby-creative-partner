# Database Schema

## GEO SEO Crawler Platform - PostgreSQL + Weaviate

---

## Entity Relationship Diagram

```
┌─────────────────────┐       ┌─────────────────────┐
│       users         │       │     organizations   │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ id (PK)             │
│ email               │       │ name                │
│ password_hash       │       │ plan                │
│ name                │       │ created_at          │
│ organization_id (FK)│◄──────│ updated_at          │
│ role                │       └─────────────────────┘
│ created_at          │                 ▲
│ updated_at          │                 │
└─────────────────────┘                 │
          │                             │
          │ 1:N                         │ 1:N
          ▼                             │
┌─────────────────────┐                 │
│   tracked_sites     │                 │
├─────────────────────┤                 │
│ id (PK)             │                 │
│ organization_id (FK)│─────────────────┘
│ domain              │
│ name                │
│ status              │
│ created_at          │
│ updated_at          │
└─────────────────────┘
          │
          │ 1:N
          ▼
┌─────────────────────┐       ┌─────────────────────┐
│     keywords        │       │    crawl_jobs       │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ id (PK)             │
│ site_id (FK)        │       │ organization_id (FK)│
│ keyword             │       │ status              │
│ category            │       │ platform            │
│ search_volume       │       │ keywords (JSONB)    │
│ difficulty          │       │ created_at          │
│ created_at          │       │ started_at          │
│ updated_at          │       │ completed_at        │
└─────────────────────┘       │ error_message       │
          │                   └─────────────────────┘
          │                              │
          │ N:M                          │ 1:N
          ▼                              ▼
┌─────────────────────┐       ┌─────────────────────┐
│  crawl_results      │◄──────│   job_results       │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ job_id (FK)         │
│ job_id (FK)         │       │ result_id (FK)      │
│ keyword_id (FK)     │       │ created_at          │
│ platform            │       └─────────────────────┘
│ query               │
│ ai_answer (TEXT)    │
│ citations (JSONB)   │
│ our_site_cited      │
│ our_site_position   │
│ geo_score           │
│ embedding_id (FK)   │
│ created_at          │
│ updated_at          │
└─────────────────────┘
          │
          │ 1:1
          ▼
┌─────────────────────┐
│   embeddings        │ (Weaviate - separate)
├─────────────────────┤
│ id (PK)             │
│ vector (FLOAT[])    │
│ result_id (FK)      │
│ created_at          │
└─────────────────────┘

┌─────────────────────┐
│    geo_scores       │ (Daily aggregates)
├─────────────────────┤
│ id (PK)             │
│ site_id (FK)        │
│ keyword_id (FK)     │
│ date                │
│ platform            │
│ citation_count      │
│ avg_position        │
│ geo_score           │
│ created_at          │
└─────────────────────┘
```

---

## PostgreSQL Schema

### Users Table

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    organization_id UUID REFERENCES organizations(id),
    role VARCHAR(50) DEFAULT 'member', -- 'admin', 'member', 'viewer'
    email_verified BOOLEAN DEFAULT FALSE,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_organization ON users(organization_id);
```

### Organizations Table

```sql
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan VARCHAR(50) DEFAULT 'free', -- 'free', 'pro', 'enterprise'
    crawl_quota_monthly INTEGER DEFAULT 100,
    crawl_count_current INTEGER DEFAULT 0,
    quota_reset_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_orgs_slug ON organizations(slug);
```

### Tracked Sites Table

```sql
CREATE TABLE tracked_sites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    domain VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    description TEXT,
    status VARCHAR(50) DEFAULT 'active', -- 'active', 'paused', 'archived'
    base_url VARCHAR(500),
    favicon_url VARCHAR(500),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(organization_id, domain)
);

CREATE INDEX idx_sites_org ON tracked_sites(organization_id);
CREATE INDEX idx_sites_domain ON tracked_sites(domain);
```

### Keywords Table

```sql
CREATE TABLE keywords (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES tracked_sites(id) ON DELETE CASCADE,
    keyword VARCHAR(500) NOT NULL,
    category VARCHAR(100),
    search_volume INTEGER,
    difficulty INTEGER, -- 0-100
    intent VARCHAR(50), -- 'informational', 'commercial', 'navigational', 'transactional'
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(site_id, keyword)
);

CREATE INDEX idx_keywords_site ON keywords(site_id);
CREATE INDEX idx_keywords_category ON keywords(category);
CREATE INDEX idx_keywords_intent ON keywords(intent);
```

### Crawl Jobs Table

```sql
CREATE TABLE crawl_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed', 'cancelled'
    platform VARCHAR(50) NOT NULL, -- 'google', 'bing', 'perplexity', 'all'
    keywords JSONB NOT NULL, -- Array of keyword strings or IDs
    locations JSONB DEFAULT '["us"]',
    languages JSONB DEFAULT '["en"]',
    device VARCHAR(20) DEFAULT 'desktop',
    priority INTEGER DEFAULT 5, -- 1-10
    scheduled_at TIMESTAMPTZ,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    progress_percent INTEGER DEFAULT 0,
    total_crawls INTEGER,
    completed_crawls INTEGER DEFAULT 0,
    failed_crawls INTEGER DEFAULT 0,
    error_message TEXT,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_jobs_org ON crawl_jobs(organization_id);
CREATE INDEX idx_jobs_status ON crawl_jobs(status);
CREATE INDEX idx_jobs_platform ON crawl_jobs(platform);
CREATE INDEX idx_jobs_scheduled ON crawl_jobs(scheduled_at);
```

### Crawl Results Table

```sql
CREATE TABLE crawl_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES crawl_jobs(id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES keywords(id),
    keyword_text VARCHAR(500) NOT NULL,
    platform VARCHAR(50) NOT NULL,
    query VARCHAR(1000) NOT NULL,
    
    -- AI Content
    ai_answer TEXT,
    ai_answer_tokens INTEGER,
    
    -- Citations (stored as JSONB for flexibility)
    citations JSONB DEFAULT '[]',
    citation_count INTEGER DEFAULT 0,
    
    -- Our Site Tracking
    our_site_cited BOOLEAN DEFAULT FALSE,
    our_site_position INTEGER,
    our_site_snippet TEXT,
    our_site_domain VARCHAR(255),
    
    -- GEO Metrics
    geo_score DECIMAL(5,2), -- 0-100
    position_score DECIMAL(5,2),
    citation_rate DECIMAL(5,2),
    
    -- Technical
    status VARCHAR(50) DEFAULT 'success', -- 'success', 'partial', 'failed'
    error_message TEXT,
    raw_html_hash VARCHAR(64), -- For deduplication
    screenshot_url VARCHAR(500),
    
    -- Location context
    location VARCHAR(10) DEFAULT 'us',
    language VARCHAR(10) DEFAULT 'en',
    device VARCHAR(20) DEFAULT 'desktop',
    
    -- Timestamps
    crawled_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_results_job ON crawl_results(job_id);
CREATE INDEX idx_results_keyword ON crawl_results(keyword_id);
CREATE INDEX idx_results_platform ON crawl_results(platform);
CREATE INDEX idx_results_cited ON crawl_results(our_site_cited) WHERE our_site_cited = TRUE;
CREATE INDEX idx_results_crawled ON crawl_results(crawled_at);
CREATE INDEX idx_results_geo_score ON crawl_results(geo_score);

-- Full-text search on query and answer
CREATE INDEX idx_results_query_fts ON crawl_results USING GIN(to_tsvector('english', query));
```

### Daily GEO Scores Table (Aggregates)

```sql
CREATE TABLE daily_geo_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES tracked_sites(id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES keywords(id),
    date DATE NOT NULL,
    
    -- Platform-specific scores
    google_score DECIMAL(5,2),
    bing_score DECIMAL(5,2),
    perplexity_score DECIMAL(5,2),
    
    -- Aggregate
    overall_geo_score DECIMAL(5,2),
    
    -- Metrics
    total_crawls INTEGER,
    citations_found INTEGER,
    avg_position DECIMAL(5,2),
    best_position INTEGER,
    platforms_present INTEGER, -- 0-3
    
    -- Change tracking
    score_change_daily DECIMAL(5,2),
    score_change_weekly DECIMAL(5,2),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(site_id, keyword_id, date)
);

CREATE INDEX idx_daily_scores_site ON daily_geo_scores(site_id);
CREATE INDEX idx_daily_scores_keyword ON daily_geo_scores(keyword_id);
CREATE INDEX idx_daily_scores_date ON daily_geo_scores(date);
CREATE INDEX idx_daily_scores_overall ON daily_geo_scores(overall_geo_score);
```

### Alerts Table

```sql
CREATE TABLE alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    site_id UUID REFERENCES tracked_sites(id),
    alert_type VARCHAR(50) NOT NULL, -- 'score_drop', 'citation_lost', 'competitor_gain'
    severity VARCHAR(20) DEFAULT 'medium', -- 'low', 'medium', 'high', 'critical'
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    is_read BOOLEAN DEFAULT FALSE,
    is_resolved BOOLEAN DEFAULT FALSE,
    acknowledged_by UUID REFERENCES users(id),
    acknowledged_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_alerts_org ON alerts(organization_id);
CREATE INDEX idx_alerts_unread ON alerts(organization_id) WHERE is_read = FALSE;
CREATE INDEX idx_alerts_type ON alerts(alert_type);
```

### API Keys Table

```sql
CREATE TABLE api_keys (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    key_hash VARCHAR(255) NOT NULL,
    key_prefix VARCHAR(20) NOT NULL, -- For display (e.g., "pk_live_abc123")
    permissions JSONB DEFAULT '["read"]',
    rate_limit_per_minute INTEGER DEFAULT 60,
    last_used_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ,
    revoked BOOLEAN DEFAULT FALSE,
    revoked_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_api_keys_org ON api_keys(organization_id);
CREATE INDEX idx_api_keys_prefix ON api_keys(key_prefix);
```

---

## Weaviate Schema

### Collection: CrawlResult

```python
# Weaviate Python client setup
import weaviate

client = weaviate.Client("http://localhost:8080")

# Create collection
client.collections.create(
    name="CrawlResult",
    vectorizer_config=weaviate.config.Configure.Vectorizer.none(),  # We provide embeddings
    vector_index_config=weaviate.config.Configure.VectorIndex.hnsw(
        distance_metric=weaviate.config.VectorDistance.COSINE
    ),
    properties=[
        weaviate.config.Property(
            name="result_id",
            data_type=weaviate.config.DataType.UUID,
            description="PostgreSQL result ID"
        ),
        weaviate.config.Property(
            name="query",
            data_type=weaviate.config.DataType.TEXT,
            description="Search query"
        ),
        weaviate.config.Property(
            name="platform",
            data_type=weaviate.config.DataType.TEXT,
            description="AI platform (google, bing, perplexity)"
        ),
        weaviate.config.Property(
            name="ai_answer",
            data_type=weaviate.config.DataType.TEXT,
            description="AI-generated answer text"
        ),
        weaviate.config.Property(
            name="keyword_text",
            data_type=weaviate.config.DataType.TEXT,
            description="Original keyword"
        ),
        weaviate.config.Property(
            name="citations_json",
            data_type=weaviate.config.DataType.TEXT,
            description="JSON string of citations"
        ),
        weaviate.config.Property(
            name="our_site_cited",
            data_type=weaviate.config.DataType.BOOLEAN,
            description="Whether our site was cited"
        ),
        weaviate.config.Property(
            name="crawled_at",
            data_type=weaviate.config.DataType.DATE,
            description="Crawl timestamp"
        ),
    ]
)
```

### Hybrid Search Example

```python
# Search for similar queries where our site was cited
response = client.collections.get("CrawlResult").query.hybrid(
    query="best SEO tools for small business",
    alpha=0.5,  # 50% semantic, 50% keyword
    filters=weaviate.filter.by_property("our_site_cited").equal(True),
    limit=10
)

for obj in response.objects:
    print(f"Query: {obj.properties['query']}")
    print(f"Platform: {obj.properties['platform']}")
    print(f"Score: {obj.metadata.score}")
```

---

## Redis Data Structures

### Rate Limiting (Sliding Window)

```
Key: ratelimit:{platform}:{ip_or_key}
Type: Sorted Set
TTL: 60 seconds

# Add request timestamp
ZADD ratelimit:google:192.168.1.1 <timestamp> <timestamp>

# Count requests in last minute
ZCOUNT ratelimit:google:192.168.1.1 <now-60000> <now>

# Clean old entries
ZREMRANGEBYSCORE ratelimit:google:192.168.1.1 -inf <now-60000>
```

### Job Queue (Celery)

```
Key: celery
Type: List (LPUSH/BRPOP)

# Task message format
{
    "id": "uuid",
    "task": "crawl_platform",
    "args": ["keyword_id", "platform"],
    "kwargs": {},
    "retries": 0,
    "eta": null
}
```

### Session Cache

```
Key: session:{user_id}
Type: Hash
TTL: 24 hours

HSET session:abc123 email "user@example.com" role "admin" org_id "uuid"
HGETALL session:abc123
```

### Crawl Result Cache

```
Key: result:{keyword_id}:{platform}:{date}
Type: String (JSON)
TTL: 24 hours

# Cache successful crawl results to avoid re-crawling
SET result:123:google:2026-03-21 '{"citations": [...], "score": 85}'
```

---

## Migrations

### Initial Migration (001_initial.sql)

```sql
-- Run all CREATE TABLE statements above
-- Add extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";  -- For fuzzy text matching

-- Add row-level security (if using RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracked_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE crawl_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE crawl_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY org_isolation_users ON users
    USING (organization_id = current_setting('app.current_org_id')::UUID);

CREATE POLICY org_isolation_sites ON tracked_sites
    USING (organization_id = current_setting('app.current_org_id')::UUID);
```

---

## Query Examples

### Get GEO Score Trend for Site

```sql
SELECT 
    date,
    overall_geo_score,
    google_score,
    bing_score,
    perplexity_score,
    score_change_daily
FROM daily_geo_scores
WHERE site_id = :site_id
  AND date >= NOW() - INTERVAL '30 days'
ORDER BY date ASC;
```

### Get Keywords Where Site Lost Citations

```sql
SELECT 
    k.keyword,
    k.category,
    prev.citation_count as prev_citations,
    curr.citation_count as curr_citations,
    (prev.citation_count - curr.citation_count) as lost_citations
FROM keywords k
JOIN crawl_results curr ON k.id = curr.keyword_id
JOIN crawl_results prev ON k.id = prev.keyword_id 
    AND prev.crawled_at = curr.crawled_at - INTERVAL '7 days'
WHERE curr.our_site_cited = FALSE
  AND prev.our_site_cited = TRUE
  AND curr.platform = 'google'
  AND curr.crawled_at >= NOW() - INTERVAL '1 day'
ORDER BY lost_citations DESC;
```

### Get Top Performing Keywords

```sql
SELECT 
    k.keyword,
    AVG(cr.geo_score) as avg_geo_score,
    COUNT(*) as crawl_count,
    AVG(cr.citation_count) as avg_citations
FROM keywords k
JOIN crawl_results cr ON k.id = cr.keyword_id
WHERE k.site_id = :site_id
  AND cr.crawled_at >= NOW() - INTERVAL '7 days'
GROUP BY k.id, k.keyword
ORDER BY avg_geo_score DESC
LIMIT 20;
```

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
