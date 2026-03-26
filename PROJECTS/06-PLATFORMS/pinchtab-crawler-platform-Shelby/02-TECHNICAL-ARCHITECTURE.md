# Technical Architecture Document

## GEO SEO Crawler Platform

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         GEO SEO CRAWLER PLATFORM                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────────┐  │
│  │   Google    │     │    Bing     │     │  Perplexity │     │  Claude  │  │
│  │ AI Overviews│     │   Copilot   │     │    AI       │     │   AI     │  │
│  │             │     │             │     │             │     │          │  │
│  └──────┬──────┘     └──────┬──────┘     └──────┬──────┘     └────┬─────┘  │
│         │                   │                   │                 │        │
│         └───────────────────┼───────────────────┼─────────────────┘        │
│                             │                   │                          │
│              ┌──────────────▼───────────────────▼──────────────┐           │
│              │           PINCHTAB BROWSER LAYER                 │           │
│              │  (Go HTTP Server :9867 - Chrome DevTools CDP)   │           │
│              │  - Headless Chrome instances                     │           │
│              │  - Stealth mode (anti-bot bypass)               │           │
│              │  - Session persistence                          │           │
│              │  - Accessibility tree snapshots                 │           │
│              └───────────────────────┬─────────────────────────┘           │
│                                      │                                     │
│              ┌───────────────────────▼─────────────────────────┐           │
│              │           CRAWLER ORCHESTRATOR                   │           │
│              │         (Python FastAPI Backend)                 │           │
│              │  - Job scheduling & queue management             │           │
│              │  - Rate limiting & politeness                    │           │
│              │  - Data extraction & normalization               │           │
│              │  - Error handling & retries                      │           │
│              └───────────────────────┬─────────────────────────┘           │
│                                      │                                     │
│         ┌────────────────────────────┼────────────────────────────┐        │
│         │                            │                            │        │
│         ▼                            ▼                            ▼        │
│  ┌─────────────┐            ┌─────────────┐             ┌─────────────┐   │
│  │  PostgreSQL │            │   Weaviate  │             │    Redis    │   │
│  │  (Primary)  │            │  (Vectors)  │             │   (Cache)   │   │
│  │             │            │             │             │             │   │
│  │ - Crawls    │            │ - Embeddings│             │ - Sessions  │   │
│  │ - Rankings  │            │ - Semantic  │             │ - Rate      │   │
│  │ - Sites     │            │   Search    │             │   Limits    │   │
│  │ - Users     │            │ - Similarity│             │ - Queues    │   │
│  └─────────────┘            └─────────────┘             └─────────────┘   │
│                                                                             │
│              ┌─────────────────────────────────────────┐                   │
│              │          REST API (FastAPI)             │                   │
│              │         /api/v1/* endpoints             │                   │
│              └────────────────────┬────────────────────┘                   │
│                                   │                                        │
│              ┌────────────────────▼────────────────────┐                   │
│              │      NEXT.JS 14 DASHBOARD (Frontend)    │                   │
│              │  - Real-time visualizations (Recharts)  │                   │
│              │  - Crawler status & job management      │                   │
│              │  - GEO score reports                    │                   │
│              │  - Citation tracking                    │                   │
│              └─────────────────────────────────────────┘                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack Recommendation

### Backend

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **API Framework** | Python FastAPI 0.115+ | Async support, auto-docs, Pydantic validation, excellent for ML/AI workloads |
| **Task Queue** | Celery + Redis | Distributed task processing, retry logic, scheduling |
| **Primary DB** | PostgreSQL 16+ | Relational data, ACID compliance, JSONB for flexible schemas |
| **Vector DB** | Weaviate (self-hosted) | Open-source, hybrid search, no vendor lock-in, scales to millions |
| **Cache** | Redis 7+ | Session storage, rate limiting, job queues |

### Frontend

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR/SSG, API routes, excellent DX, Vercel deploy |
| **UI Library** | shadcn/ui + Tailwind CSS | Modern, customizable, accessible components |
| **Charts** | Recharts | React-native, composable, good for time-series |
| **State** | Zustand | Lightweight, no boilerplate, TypeScript-friendly |
| **Data Fetching** | TanStack Query | Caching, retries, background updates |

### Infrastructure

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Browser Layer** | PinchTab (MIT) | Lightweight, purpose-built for AI agents, token-efficient |
| **Container** | Docker + Docker Compose | Local dev, easy deployment |
| **Orchestration** | Kubernetes (production) | Scaling, self-healing, rolling updates |
| **Hosting** | AWS ECS Fargate or Railway | Serverless containers, auto-scaling |
| **CDN** | CloudFront | Global distribution, caching |

---

## Architecture Decisions

### Why FastAPI over Node.js/Express?

| Factor | FastAPI | Node.js/Express | Winner |
|--------|---------|-----------------|--------|
| **Performance** | ~90% of Node (async) | Native async | Node (slight) |
| **Type Safety** | Pydantic (runtime + static) | TypeScript (compile only) | FastAPI |
| **ML/AI Libraries** | Native (PyTorch, TF) | Limited | FastAPI |
| **Auto Documentation** | OpenAPI auto-generated | Manual/Swagger | FastAPI |
| **Developer Pool** | Smaller | Larger | Node |
| **GEO Use Case** | Vector ops, embeddings | General web | **FastAPI** |

### Why Weaviate over Pinecone?

| Factor | Weaviate | Pinecone | Winner |
|--------|----------|----------|--------|
| **License** | BSD-3 (open source) | Proprietary | Weaviate |
| **Self-hosted** | Yes | No | Weaviate |
| **Hybrid Search** | Built-in | Limited | Weaviate |
| **GraphQL API** | Native | REST only | Weaviate |
| **Pricing** | Free (self-hosted) | $70+/mo starter | Weaviate |
| **Vendor Lock-in** | None | High | Weaviate |
| **Scale** | Millions of vectors | Billions | Pinecone |
| **MVP Fit** | ✅ Perfect | Overkill | **Weaviate** |

### Why REST over GraphQL?

| Factor | REST | GraphQL | Winner |
|--------|------|---------|--------|
| **Complexity** | Simple | Moderate | REST |
| **Caching** | HTTP native | Custom layer | REST |
| **Real-time** | WebSockets | Subscriptions | Tie |
| **Frontend Flexibility** | Fixed | Client-defined | GraphQL |
| **Dashboard Needs** | Simple CRUD + charts | Complex nested data | REST |
| **Team Experience** | Universal | Specialized | REST |
| **MVP Speed** | Faster setup | More config | **REST** |

---

## Data Flow

### Crawl Job Execution

```
1. User creates crawl job via Dashboard
           │
           ▼
2. POST /api/v1/crawl-jobs
   { "target_urls": [...], "platform": "google_ai_overviews" }
           │
           ▼
3. FastAPI validates → creates job record in PostgreSQL
           │
           ▼
4. Celery task queued in Redis
           │
           ▼
5. Worker picks up job → calls PinchTab API
           │
           ▼
6. PinchTab navigates Chrome → captures accessibility tree
           │
           ▼
7. Extract AI Overview content → normalize schema
           │
           ▼
8. Generate embeddings (OpenAI/text-embedding-3-small)
           │
           ▼
9. Store in Weaviate + metadata in PostgreSQL
           │
           ▼
10. Update job status → notify via WebSocket
```

### GEO Score Calculation

```
1. Daily scheduled job (cron)
           │
           ▼
2. Query all tracked keywords for site
           │
           ▼
3. For each keyword → crawl AI platforms
           │
           ▼
4. Check if site appears in citations/sources
           │
           ▼
5. Calculate metrics:
   - Citation Rate: citations / total_crawls
   - Position Score: avg_rank_inverse
   - Platform Coverage: platforms_present / total_platforms
           │
           ▼
6. Store GEO Score (0-100) in PostgreSQL
           │
           ▼
7. Update dashboard → alert if score drops
```

---

## Security Considerations

| Layer | Measure | Implementation |
|-------|---------|----------------|
| **API** | Authentication | JWT tokens, refresh rotation |
| **API** | Rate Limiting | Redis-based sliding window |
| **Browser** | Isolation | Docker containers per instance |
| **Browser** | Stealth | PinchTab stealth mode enabled |
| **Database** | Encryption | TLS in transit, at-rest encryption |
| **Secrets** | Management | AWS Secrets Manager or Doppler |
| **Crawler** | Politeness | robots.txt respect, delay between requests |
| **Frontend** | CSP | Content Security Policy headers |

---

## Scalability Plan

### Phase 1: MVP (0-1000 crawls/day)

- Single FastAPI instance
- 2 PinchTab instances
- Weaviate single-node
- PostgreSQL managed (RDS/Neon)

### Phase 2: Growth (1000-10000 crawls/day)

- FastAPI horizontal scaling (3-5 instances)
- PinchTab auto-scaling (5-10 instances)
- Weaviate cluster (3 nodes)
- Redis cluster for queues

### Phase 3: Enterprise (10000+ crawls/day)

- Kubernetes orchestration
- Geographic distribution (US, EU, APAC)
- CDN for dashboard assets
- Dedicated embedding workers

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
