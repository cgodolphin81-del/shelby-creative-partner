# ChatFlow AI - Technical Architecture

## System Overview

ChatFlow AI is built on a modern, scalable cloud-native architecture designed for high availability, low latency, and seamless scaling.

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │   Web    │ │  Mobile  │ │   API    │ │   Third-Party    │   │
│  │  Widget  │ │   SDKs   │ │ Clients  │ │   Integrations   │   │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────────┬─────────┘   │
└───────┼────────────┼────────────┼─────────────────┼─────────────┘
        │            │            │                 │
        └────────────┴─────┬──────┴─────────────────┘
                           │
                    ┌──────▼──────┐
                    │   CDN       │
                    │ (Cloudflare)│
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
┌───────▼────────┐ ┌───────▼────────┐ ┌───────▼────────┐
│   API Gateway  │ │   WebSocket    │ │   Webhook      │
│   (Kong)       │ │   Gateway      │ │   Ingestion    │
└───────┬────────┘ └───────┬────────┘ └───────┬────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
              ┌────────────▼────────────┐
              │   Load Balancer (ALB)   │
              └────────────┬────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
┌───────▼────────┐ ┌───────▼────────┐ ┌───────▼────────┐
│  Frontend      │ │  Backend       │ │  AI/ML         │
│  Services      │ │  Services      │ │  Services      │
│  (React)       │ │  (Python)      │ │  (Python)      │
└────────────────┘ └────────────────┘ └────────────────┘
```

---

## Tech Stack

### Frontend

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | React 18 | UI framework |
| Language | TypeScript 5 | Type safety |
| State Management | Zustand | Lightweight state |
| Styling | Tailwind CSS | Utility-first CSS |
| Build Tool | Vite | Fast builds |
| Testing | Vitest + React Testing Library | Unit/integration tests |
| Chat Widget | React (custom) | Embeddable widget |
| Flow Builder | React Flow | Visual node editor |
| Charts | Recharts | Analytics visualization |

### Backend

| Component | Technology | Purpose |
|-----------|------------|---------|
| Runtime | Python 3.11 | Backend services |
| Framework | FastAPI | REST API |
| Async | asyncio + aiohttp | Async operations |
| Task Queue | Celery + Redis | Background jobs |
| Real-time | WebSockets | Live chat |
| Auth | Auth0 / JWT | Authentication |
| ORM | SQLAlchemy | Database access |
| Validation | Pydantic | Data validation |

### AI/ML

| Component | Technology | Purpose |
|-----------|------------|---------|
| LLM Orchestration | LangChain | LLM abstraction |
| Embeddings | OpenAI Ada-002 / HuggingFace | Vector embeddings |
| Vector DB | Pinecone / Weaviate | Semantic search |
| RAG Pipeline | Custom | Retrieval-augmented generation |
| Model Providers | OpenAI, Anthropic, Cohere | LLM access |
| Fine-tuning | OpenAI Fine-tuning | Custom models |

### Infrastructure

| Component | Technology | Purpose |
|-----------|------------|---------|
| Cloud | AWS | Primary infrastructure |
| Container | Docker | Containerization |
| Orchestration | Kubernetes (EKS) | Container management |
| Database | PostgreSQL 15 | Primary database |
| Cache | Redis 7 | Caching, sessions |
| Search | Elasticsearch 8 | Full-text search |
| Object Storage | S3 | Files, media |
| CDN | Cloudflare | Edge caching |
| Monitoring | Datadog | Observability |
| Logging | ELK Stack | Log aggregation |
| CI/CD | GitHub Actions | Deployment |

---

## Service Architecture

### 1. API Gateway Service

**Purpose**: Single entry point for all client requests

**Responsibilities**:
- Request routing
- Rate limiting
- Authentication validation
- Request/response transformation
- API versioning

**Tech**: Kong Gateway + Custom Lua plugins

**Endpoints**:
```
/api/v1/*        → API Service
/ws/v1/*         → WebSocket Gateway
/webhooks/v1/*   → Webhook Service
```

---

### 2. Frontend Services

#### a) Dashboard App
**URL**: app.chatflow.ai  
**Purpose**: Main user interface

**Features**:
- Bot configuration
- Flow builder
- Analytics dashboard
- Integration settings
- Team management

**Deployment**: S3 + CloudFront (SPA)

#### b) Chat Widget
**Purpose**: Embeddable chat interface

**Features**:
- Lightweight (<50KB gzipped)
- Customizable branding
- Mobile responsive
- Accessibility (WCAG 2.1 AA)
- Multi-language

**Deployment**: CDN-hosted JavaScript

**Embed Code**:
```html
<script>
  window.chatflowConfig = { botId: 'abc123' };
</script>
<script src="https://cdn.chatflow.ai/widget/v1.js" async></script>
```

---

### 3. Backend Services

#### a) API Service (FastAPI)
**Purpose**: Core business logic

**Responsibilities**:
- User management
- Bot CRUD operations
- Flow management
- Analytics queries
- Integration management

**Key Endpoints**:
```
POST   /api/v1/bots              # Create bot
GET    /api/v1/bots/:id          # Get bot
PUT    /api/v1/bots/:id          # Update bot
DELETE /api/v1/bots/:id          # Delete bot
POST   /api/v1/bots/:id/train    # Train bot
GET    /api/v1/bots/:id/analytics # Get analytics
POST   /api/v1/conversations     # Start conversation
```

**Scaling**: Horizontal (10+ instances)

---

#### b) Conversation Service
**Purpose**: Handle live conversations

**Responsibilities**:
- Message routing
- Context management
- Response generation
- Handoff logic
- Session state

**Flow**:
```
1. Receive message (WebSocket/HTTP)
2. Load conversation context
3. Determine intent (NLU)
4. Retrieve relevant knowledge (RAG)
5. Generate response (LLM)
6. Apply flow logic
7. Send response
8. Log conversation
```

**Scaling**: Auto-scale based on active conversations

---

#### c) AI Service
**Purpose**: AI/ML operations

**Responsibilities**:
- LLM inference
- Embedding generation
- RAG retrieval
- Intent classification
- Sentiment analysis
- Response ranking

**Components**:
```
┌─────────────────┐
│  AI Service     │
├─────────────────┤
│  LLM Router     │ → Routes to OpenAI/Anthropic/Cohere
│  Embedding      │ → Generates vector embeddings
│  RAG Engine     │ → Retrieves relevant context
│  Intent Model   │ → Classifies user intent
│  Sentiment      │ → Analyzes sentiment
│  Safety Filter  │ → Content moderation
└─────────────────┘
```

**LLM Routing Logic**:
```python
def select_llm(bot_config, message_complexity):
    if bot_config.custom_model:
        return bot_config.custom_model
    elif message_complexity > 0.8:
        return "gpt-4"  # Complex queries
    elif bot_config.provider == "anthropic":
        return "claude-3"
    else:
        return "gpt-3.5-turbo"  # Default
```

---

#### d) Training Service
**Purpose**: Bot training pipeline

**Responsibilities**:
- URL scraping
- Document processing
- Q&A generation
- Embedding creation
- Knowledge indexing

**Pipeline**:
```
1. Ingest content (URL/doc/Q&A)
2. Clean & chunk text
3. Generate embeddings
4. Store in vector DB
5. Create search index
6. Update bot knowledge
```

**Document Processing**:
```python
def process_document(file):
    # Extract text
    text = extract_text(file)  # PDF/DOCX/TXT
    
    # Chunk into segments
    chunks = chunk_text(text, chunk_size=500, overlap=50)
    
    # Generate embeddings
    embeddings = []
    for chunk in chunks:
        embedding = openai.Embedding.create(
            model="text-embedding-ada-002",
            input=chunk
        )
        embeddings.append({
            "text": chunk,
            "embedding": embedding,
            "metadata": {"source": file.name}
        })
    
    # Store in vector DB
    pinecone.upsert(embeddings, namespace=bot_id)
```

---

#### e) Integration Service
**Purpose**: Third-party integrations

**Responsibilities**:
- OAuth management
- API synchronization
- Webhook handling
- Data transformation

**Supported Integrations**: 50+ (see integrations.md)

**Pattern**: Adapter pattern for each integration

```python
class ShopifyIntegration(IntegrationAdapter):
    def sync_orders(self):
        orders = shopify_api.get_orders()
        return transform_orders(orders)
    
    def lookup_order(self, order_id):
        return shopify_api.get_order(order_id)
```

---

#### f) Analytics Service
**Purpose**: Data aggregation & reporting

**Responsibilities**:
- Event collection
- Metric calculation
- Report generation
- Data export

**Data Pipeline**:
```
Events → Kafka → Flink (stream processing) → 
PostgreSQL (aggregates) → Elasticsearch (search) → 
Dashboard
```

**Key Metrics**:
- Conversations per hour
- Response time (p50, p95, p99)
- Resolution rate
- Handoff rate
- Satisfaction score
- Cost per conversation

---

### 4. Data Layer

#### PostgreSQL Schema

```sql
-- Core Tables
users (id, email, name, created_at, plan_id)
bots (id, user_id, name, config, created_at)
conversations (id, bot_id, user_id, status, started_at, ended_at)
messages (id, conversation_id, sender, content, timestamp)
flows (id, bot_id, name, definition, version)

-- Training
knowledge_sources (id, bot_id, type, url, status)
knowledge_chunks (id, source_id, text, embedding, metadata)

-- Analytics
events (id, bot_id, event_type, data, timestamp)
metrics_daily (bot_id, date, conversations, resolutions, handoffs)

-- Integrations
integrations (id, bot_id, provider, credentials, config)
webhooks (id, bot_id, url, events, active)
```

#### Vector Database (Pinecone)

```
Namespace: bot_{id}
Index: chatflow-knowledge
Dimensions: 1536 (OpenAI Ada-002)
Metric: cosine

Metadata:
- source_type: url|document|qa
- source_id: reference to knowledge_sources
- chunk_index: position in document
- last_updated: timestamp
```

#### Redis Usage

```
Sessions: session:{id} → conversation state (TTL: 30min)
Cache: cache:bot:{id}:config → bot configuration (TTL: 5min)
Rate Limit: ratelimit:{user_id}:{endpoint} → request count (TTL: 1min)
Queue: celery:* → task queues
Pub/Sub: notifications:{user_id} → real-time notifications
```

---

## Infrastructure

### AWS Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        AWS Cloud                            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    EKS Cluster                       │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │   │
│  │  │  API    │ │Conversation│ │  AI     │ │Training │   │   │
│  │  │ Service │ │  Service │ │ Service │ │ Service │   │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   RDS        │  │  ElastiCache │  │  OpenSearch  │     │
│  │  PostgreSQL  │  │    Redis     │  │  Elasticsearch│    │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │     S3       │  │   CloudFront │  │  Pinecone    │     │
│  │  (Storage)   │  │    (CDN)     │  │  (Vector DB) │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  CloudWatch  │  │    Datadog   │  │  Secrets     │     │
│  │  (Logs)      │  │  (Monitoring)│  │  Manager     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Kubernetes Deployment

```yaml
# Example: API Service Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
spec:
  replicas: 5
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
      - name: api
        image: chatflow/api:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: redis-secret
              key: url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api-service
  ports:
  - port: 80
    targetPort: 8000
  type: ClusterIP
```

### Auto-Scaling

```yaml
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

---

## Security Architecture

### Authentication Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│  Auth0   │────▶│   API    │────▶│  Service │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                │                │                │
     │  1. Login      │                │                │
     │───────────────▶│                │                │
     │                │                │                │
     │  2. JWT Token  │                │                │
     │◀───────────────│                │                │
     │                │                │                │
     │  3. Request + JWT               │                │
     │───────────────────────────────▶│                │
     │                │                │                │
     │                │  4. Validate   │                │
     │                │───────────────▶│                │
     │                │                │                │
     │                │  5. Forward    │                │
     │                │───────────────────────────────▶│
     │                │                │                │
```

### Security Measures

**Network**:
- VPC with private subnets
- Security groups (least privilege)
- WAF (Web Application Firewall)
- DDoS protection (Cloudflare)

**Application**:
- Input validation (Pydantic)
- SQL injection prevention (ORM)
- XSS prevention (React auto-escape)
- CSRF tokens
- Rate limiting (Redis)

**Data**:
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- Secrets management (AWS Secrets Manager)
- PII masking in logs

**Compliance**:
- SOC 2 Type II
- GDPR (data residency, right to deletion)
- CCPA
- HIPAA (Enterprise, BAA available)

---

## Performance & Scaling

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| API Response Time (p95) | <200ms | 145ms |
| WebSocket Latency | <100ms | 67ms |
| Bot Response Time | <2s | 1.3s |
| Uptime | 99.9% | 99.95% |
| Concurrent Conversations | 10,000 | 8,500 |

### Scaling Strategy

**Horizontal Scaling**:
- Stateless services (API, Conversation, AI)
- Auto-scaling based on CPU/memory
- Database read replicas for analytics

**Vertical Scaling**:
- Database (RDS) - scale up as needed
- Redis cluster for high availability

**Caching Strategy**:
- L1: In-memory cache (frequently accessed data)
- L2: Redis (session data, bot configs)
- L3: CDN (static assets, widget)

### Capacity Planning

```
Current Capacity (per region):
- API Service: 20 instances × 1000 req/s = 20,000 req/s
- Conversation Service: 15 instances × 500 concurrent = 7,500 concurrent
- AI Service: 10 instances × 100 req/s = 1,000 req/s

Growth Plan:
- Q2 2026: Add EU region (Frankfurt)
- Q3 2026: Add APAC region (Singapore)
- Q4 2026: Multi-region active-active
```

---

## Monitoring & Observability

### Metrics (Datadog)

**Infrastructure**:
- CPU/Memory usage per service
- Network I/O
- Disk usage
- Pod restarts

**Application**:
- Request rate
- Error rate
- Response time (p50, p95, p99)
- Active conversations
- Queue depth

**Business**:
- Conversations per hour
- Handoff rate
- Satisfaction score
- Revenue metrics

### Logging (ELK Stack)

**Log Levels**:
- ERROR: Actionable errors
- WARN: Potential issues
- INFO: Business events
- DEBUG: Development only

**Log Aggregation**:
```
Services → Fluentd → Elasticsearch → Kibana
                          ↓
                    Datadog (metrics)
```

### Alerting

**Critical (Page on-call)**:
- Error rate > 5%
- API latency p95 > 1s
- Service down > 2min
- Database connection pool exhausted

**Warning (Slack notification)**:
- Error rate > 1%
- API latency p95 > 500ms
- Queue depth > 1000
- Memory usage > 80%

---

## Disaster Recovery

### Backup Strategy

**Database**:
- Automated daily backups (RDS)
- Point-in-time recovery (7 days)
- Cross-region replication

**Object Storage**:
- S3 versioning enabled
- Cross-region replication

**Configuration**:
- Git-based (infrastructure as code)
- Terraform state in S3 + DynamoDB

### Recovery Objectives

| Metric | Target |
|--------|--------|
| RTO (Recovery Time Objective) | 1 hour |
| RPO (Recovery Point Objective) | 5 minutes |

### Failover Plan

1. Detect failure (CloudWatch alarms)
2. Route traffic to healthy region (Route53)
3. Promote read replica (if primary DB down)
4. Scale up remaining services
5. Post-mortem and fix

---

## API Rate Limits

| Plan | Requests/min | Concurrent connections |
|------|--------------|----------------------|
| Starter | 100 | 10 |
| Pro | 500 | 50 |
| Business | 2,000 | 200 |
| Enterprise | 10,000 | 1,000 |

---

*Last Updated: March 2026*
