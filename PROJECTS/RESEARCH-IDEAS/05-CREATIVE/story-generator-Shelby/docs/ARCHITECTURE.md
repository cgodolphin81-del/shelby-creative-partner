# StoryForge AI - System Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
├─────────────────┬─────────────────┬─────────────────┬───────────────────┤
│   Web App       │   Mobile App    │   CLI Tool      │   API Clients     │
│   (React/Next)  │   (React Native)│   (Node.js)     │   (REST/GraphQL)  │
└────────┬────────┴────────┬────────┴────────┬────────┴─────────┬─────────┘
         │                 │                 │                   │
         └─────────────────┴─────────────────┴───────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           API GATEWAY                                    │
│                    (Kong / AWS API Gateway)                              │
│         Rate Limiting │ Auth │ Routing │ Load Balancing                 │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         MICROSERVICES                                    │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────────┤
│   Story     │  Character  │    Plot     │   Style     │    Export       │
│   Engine    │   Service   │  Generator  │   Engine    │    Service      │
│             │             │             │             │                 │
│  - Genre    │  - Builder  │  - 3-Act    │  - Voice    │  - PDF          │
│  - Session  │  - Archive  │  - Hero's   │  - Tone     │  - ePub         │
│  - State    │  - Relations│  - Save Cat │  - Mimic    │  - Web          │
│             │             │             │             │  - Audio        │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────────┘
       │             │             │           │             │
       └─────────────┴─────────────┴───────────┴─────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         AI/ML LAYER                                      │
├─────────────────────┬─────────────────────┬─────────────────────────────┤
│   LLM Orchestrator  │   Fine-tuned Models │   Embedding Service         │
│                     │                     │                             │
│  - Model routing    │  - Genre classifiers│  - Story embeddings         │
│  - Prompt mgmt      │  - Style adapters   │  - Similarity search        │
│  - Caching          │  - Quality scorers  │  - Recommendations          │
│  - Fallbacks        │                     │                             │
└──────────┬──────────┴──────────┬──────────┴──────────────┬──────────────┘
           │                     │                         │
           └─────────────────────┴─────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                                       │
├─────────────────┬─────────────────┬─────────────────┬───────────────────┤
│   PostgreSQL    │   Redis         │   S3/Cloud      │   Elasticsearch   │
│   (Primary DB)  │   (Cache)       │   Storage       │   (Search)        │
│                 │                 │                 │                   │
│  - Users        │  - Sessions     │  - Exports      │  - Stories        │
│  - Stories      │  - Rate limits  │  - Assets       │  - Genres         │
│  - Characters   │  - Queues       │  - Backups      │  - Users          │
│  - Community    │                 │                 │                   │
└─────────────────┴─────────────────┴─────────────────┴───────────────────┘
```

## Technology Stack

### Backend
- **Runtime**: Node.js 20+ / Python 3.11+
- **Framework**: FastAPI (Python) + Express (Node.js)
- **Database**: PostgreSQL 15+
- **Cache**: Redis 7+
- **Message Queue**: RabbitMQ / AWS SQS
- **Search**: Elasticsearch 8+

### AI/ML
- **Primary LLM**: Gensee/Qwen3.5-397B (self-hosted)
- **Fallback**: Anthropic Claude, OpenAI GPT-4
- **Embeddings**: sentence-transformers/all-mpnet-base-v2
- **Fine-tuning**: LoRA adapters for style mimicry

### Frontend
- **Web**: Next.js 14+ (React 18)
- **Mobile**: React Native 0.73+
- **State**: Zustand / TanStack Query
- **Styling**: Tailwind CSS + Radix UI

### Infrastructure
- **Container**: Docker + Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack
- **CDN**: CloudFront / Cloudflare

## Service Specifications

### 1. Story Engine Service
**Port**: 3001
**Responsibilities**:
- Story session management
- Genre selection and validation
- Story state persistence
- Generation orchestration

**Key Endpoints**:
```
POST   /api/v1/stories/create
GET    /api/v1/stories/:id
PUT    /api/v1/stories/:id
POST   /api/v1/stories/:id/generate
DELETE /api/v1/stories/:id
GET    /api/v1/stories/:id/export
```

### 2. Character Service
**Port**: 3002
**Responsibilities**:
- Character creation and management
- Relationship mapping
- Character arc tracking
- Consistency validation

**Key Endpoints**:
```
POST   /api/v1/characters
GET    /api/v1/characters/:id
PUT    /api/v1/characters/:id
POST   /api/v1/characters/:id/arc
GET    /api/v1/characters/relations/:id
```

### 3. Plot Generator Service
**Port**: 3003
**Responsibilities**:
- Plot framework selection
- Beat sheet generation
- Pacing optimization
- Conflict escalation

**Key Endpoints**:
```
POST   /api/v1/plots/generate
GET    /api/v1/plots/frameworks
POST   /api/v1/plots/beats
GET    /api/v1/plots/:id/structure
```

### 4. Style Engine Service
**Port**: 3004
**Responsibilities**:
- Author style analysis
- Voice adaptation
- Tone consistency
- Readability scoring

**Key Endpoints**:
```
POST   /api/v1/styles/analyze
GET    /api/v1/styles/authors
POST   /api/v1/styles/apply
GET    /api/v1/styles/:id/score
```

### 5. Export Service
**Port**: 3005
**Responsibilities**:
- Format conversion
- Layout rendering
- Audio narration
- Distribution prep

**Key Endpoints**:
```
POST   /api/v1/exports
GET    /api/v1/exports/:id
GET    /api/v1/exports/:id/download
POST   /api/v1/exports/:id/audio
```

## Database Schema (Core Tables)

```sql
-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(255),
    subscription_tier VARCHAR(20) DEFAULT 'free',
    subscription_expires TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Stories
CREATE TABLE stories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    genre_id UUID REFERENCES genres(id),
    status VARCHAR(20) DEFAULT 'draft',
    word_count INTEGER DEFAULT 0,
    current_act INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Characters
CREATE TABLE characters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    story_id UUID REFERENCES stories(id),
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50), -- protagonist, antagonist, supporting
    appearance JSONB,
    personality JSONB,
    backstory TEXT,
    arc JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Story Versions
CREATE TABLE story_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    story_id UUID REFERENCES stories(id),
    version_number INTEGER NOT NULL,
    content TEXT NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Genres
CREATE TABLE genres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    tropes JSONB,
    conventions JSONB,
    parent_id UUID REFERENCES genres(id)
);
```

## Security

### Authentication
- JWT-based authentication
- Refresh token rotation
- OAuth 2.0 for social login

### Authorization
- Role-based access control (RBAC)
- Resource-level permissions
- API key management for commercial tier

### Data Protection
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- PII masking in logs
- GDPR compliance

## Scalability

### Horizontal Scaling
- Stateless microservices
- Database read replicas
- Redis cluster for caching
- CDN for static assets

### Rate Limiting
```
Free Tier:     100 requests/hour
Pro Tier:      1,000 requests/hour
Commercial:    10,000 requests/hour
```

### Caching Strategy
- Story drafts: 5 minutes
- Generated content: 1 hour
- Genre templates: 24 hours
- User profiles: 15 minutes

## Monitoring & Observability

### Metrics
- Request latency (p50, p95, p99)
- Error rates by service
- AI generation success rate
- Export completion time

### Alerts
- Service downtime > 1 minute
- Error rate > 5%
- Queue depth > 1000
- Database connections > 80%

### Logging
- Structured JSON logging
- Correlation IDs across services
- Log retention: 30 days (90 days for commercial)
