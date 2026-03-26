# ReviewFlow Pro - Technical Architecture

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture Diagram](#architecture-diagram)
3. [Technology Stack](#technology-stack)
4. [Infrastructure](#infrastructure)
5. [Security](#security)
6. [Scalability](#scalability)
7. [Monitoring & Observability](#monitoring--observability)

---

## System Overview

### High-Level Architecture

ReviewFlow Pro is built as a cloud-native, microservices-based SaaS platform designed for high availability, scalability, and security.

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │
│  │   Web    │  │  Mobile  │  │  Widgets │  │   Third-Party    │ │
│  │   App    │  │   SDKs   │  │  (Embed) │  │   Integrations   │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API Gateway Layer                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Kong API Gateway + Rate Limiting             │   │
│  │         Authentication │ Authorization │ Routing          │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Microservices Layer                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │  Review  │ │  Campaign│ │   AI/ML  │ │Analytics │ │ Widget ││
│  │  Service │ │  Service │ │  Service │ │ Service  │ │Service ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘│
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │   Auth   │ │Integration│ │Notification│ │  Billing │ │  AI  ││
│  │  Service │ │  Service  │ │  Service  │ │ Service  │ │Response││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Data Layer                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────────┐│
│  │PostgreSQL│ │  Redis   │ │Elastic   │ │   Object Storage     ││
│  │ (Primary)│ │ (Cache)  │ │  Search  │ │   (S3 Compatible)    ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────────────────┘│
│  ┌──────────┐ ┌──────────┐ ┌──────────────────────────────────┐│
│  │ Timescale │ │   Kafka  │ │      Data Warehouse             ││
│  │  (Time-   │ │ (Message │ │      (BigQuery/Snowflake)       ││
│  │   Series) │ │  Queue)  │ │                                 ││
│  └──────────┘ └──────────┘ └──────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## Architecture Diagram

### Component Interaction Flow

```
User Request Flow:
┌─────────┐     ┌─────────────┐     ┌──────────────┐     ┌──────────┐
│  User   │────▶│  CloudFlare │────▶│ API Gateway  │────▶│  Auth    │
│ Browser │     │   (CDN)     │     │   (Kong)     │     │  Service │
└─────────┘     └─────────────┘     └──────────────┘     └──────────┘
                                                              │
                                                              ▼
┌─────────┐     ┌─────────────┐     ┌──────────────┐     ┌──────────┐
│Response │◀────│   Service   │◀────│   Service    │◀────│  Review  │
│  JSON   │     │   (Node)    │     │  (PostgreSQL)│     │  Service │
└─────────┘     └─────────────┘     └──────────────┘     └──────────┘

Review Collection Flow:
┌──────────┐     ┌─────────────┐     ┌──────────────┐     ┌──────────┐
│ Platform │────▶│  Webhook/   │────▶│    Kafka     │────▶│ Integration│
│  (API)   │     │   Poller    │     │   (Queue)    │     │  Service │
└──────────┘     └─────────────┘     └──────────────┘     └──────────┘
                                                              │
                                                              ▼
┌──────────┐     ┌─────────────┐     ┌──────────────┐     ┌──────────┐
│Elastic   │◀────│   Review    │◀────│    AI/ML     │◀────│  Data    │
│  Search  │     │   Service   │     │   Service    │     │ Processor│
└──────────┘     └─────────────┘     └──────────────┘     └──────────┘
```

---

## Technology Stack

### Backend Services

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Runtime | Node.js | 20.x | Primary runtime |
| Framework | NestJS | 10.x | API framework |
| Language | TypeScript | 5.x | Type safety |
| ORM | Prisma | 5.x | Database ORM |
| Message Queue | Apache Kafka | 3.x | Event streaming |
| Cache | Redis | 7.x | Caching & sessions |
| Search | Elasticsearch | 8.x | Full-text search |

### Frontend

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Framework | React | 18.x | UI framework |
| Meta-Framework | Next.js | 14.x | SSR & routing |
| State | Zustand | 4.x | State management |
| UI Library | Tailwind CSS | 3.x | Styling |
| Components | Radix UI | Latest | Accessible components |
| Charts | Recharts | 2.x | Data visualization |
| Forms | React Hook Form | 7.x | Form handling |

### Data Stores

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Primary DB | PostgreSQL | 15.x | Transactional data |
| Time-Series | TimescaleDB | 2.x | Metrics & analytics |
| Cache | Redis | 7.x | Sessions & cache |
| Search | Elasticsearch | 8.x | Review search |
| Object Store | AWS S3 | - | Files & assets |
| Data Warehouse | BigQuery | - | Analytics |

### AI/ML Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| NLP Engine | Custom + Hugging Face | Sentiment analysis |
| Response Generation | Fine-tuned LLM | AI response suggestions |
| Fraud Detection | Custom ML models | Fake review detection |
| Topic Modeling | BERT-based | Review categorization |
| Embeddings | Sentence Transformers | Semantic search |

### Infrastructure

| Component | Technology | Purpose |
|-----------|------------|---------|
| Cloud Provider | AWS | Primary infrastructure |
| Container Orchestration | Kubernetes (EKS) | Container management |
| CI/CD | GitHub Actions | Deployment pipeline |
| IaC | Terraform | Infrastructure as code |
| CDN | CloudFlare | Global content delivery |
| Monitoring | Datadog | Observability |
| Logging | ELK Stack | Log aggregation |

---

## Infrastructure

### Cloud Architecture (AWS)

```
┌─────────────────────────────────────────────────────────────────┐
│                         AWS Global                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    CloudFront (CDN)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Application Load Balancer                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│              ┌───────────────┼───────────────┐                  │
│              ▼               ▼               ▼                  │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐│
│  │   EKS Cluster    │ │   EKS Cluster    │ │   EKS Cluster    ││
│  │   (us-east-1)    │ │   (us-west-2)    │ │   (eu-west-1)    ││
│  │   ┌──────────┐   │ │   ┌──────────┐   │ │   ┌──────────┐   ││
│  │   │  Pods    │   │ │   │  Pods    │   │ │   │  Pods    │   ││
│  │   │ (Micro-  │   │ │   │ (Micro-  │   │ │   │ (Micro-  │   ││
│  │   │services) │   │ │   │services) │   │ │   │services) │   ││
│  │   └──────────┘   │ │   └──────────┘   │ │   └──────────┘   ││
│  └──────────────────┘ └──────────────────┘ └──────────────────┘│
│              │               │               │                  │
│              └───────────────┼───────────────┘                  │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    RDS (PostgreSQL)                      │   │
│  │              Multi-AZ Deployment                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │  ElastiCache     │  │  OpenSearch      │  │     S3       │ │
│  │    (Redis)       │  │  (Elasticsearch) │  │  (Objects)   │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │     MSK          │  │   TimescaleDB    │  │   BigQuery   │ │
│  │    (Kafka)       │  │   (Analytics)    │  │   (DWH)      │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Kubernetes Configuration

**Cluster Setup:**
- 3 EKS clusters (us-east-1, us-west-2, eu-west-1)
- Multi-AZ deployment for high availability
- Auto-scaling node groups (2-50 nodes per cluster)
- Spot instances for non-critical workloads (70% cost savings)

**Namespace Structure:**
```
reviewflow-prod/
├── api-gateway/
├── auth-service/
├── review-service/
├── campaign-service/
├── ai-service/
├── analytics-service/
├── notification-service/
├── integration-service/
├── widget-service/
├── monitoring/
└── infrastructure/
```

**Resource Limits (per service):**
```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "100m"
  limits:
    memory: "1Gi"
    cpu: "500m"
```

### Database Architecture

**PostgreSQL (Primary)**
- Instance: db.r6g.2xlarge (Primary) + db.r6g.xlarge (Replica)
- Storage: 500GB GP3, auto-scaling to 16TB
- Multi-AZ deployment
- Point-in-time recovery (35 days)
- Read replicas for analytics queries

**Schema Overview:**
```
┌─────────────────────────────────────────────────────────┐
│                    Core Tables                           │
├─────────────────────────────────────────────────────────┤
│ users                  │ user authentication & profiles │
│ organizations          │ business accounts              │
│ locations              │ business locations             │
│ reviews                │ review data                    │
│ platforms              │ review platform definitions    │
│ campaigns              │ review request campaigns       │
│ templates              │ email/SMS templates            │
│ responses              │ review responses               │
│ integrations           │ connected third-party accounts │
│ webhooks               │ webhook configurations         │
│ audit_logs             │ activity tracking              │
└─────────────────────────────────────────────────────────┘
```

**Redis (Cache)**
- Cluster mode enabled
- 3 shards, 2 replicas each
- Use cases: Sessions, API rate limiting, cached queries
- TTL policies for automatic expiration

**Elasticsearch (Search)**
- 3-node cluster
- Index per organization (multi-tenant isolation)
- Replica shards for redundancy
- Index lifecycle management (ILM)

---

## Security

### Security Architecture

**Defense in Depth:**
```
┌─────────────────────────────────────────────────────────────┐
│ Layer 1: Network Security                                    │
│ - VPC isolation                                              │
│ - Security groups (least privilege)                          │
│ - Network ACLs                                               │
│ - WAF (Web Application Firewall)                             │
│ - DDoS protection (AWS Shield)                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ Layer 2: Application Security                                │
│ - API authentication (JWT)                                   │
│ - Rate limiting                                              │
│ - Input validation                                           │
│ - SQL injection prevention                                   │
│ - XSS protection                                             │
│ - CSRF tokens                                                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ Layer 3: Data Security                                       │
│ - Encryption at rest (AES-256)                               │
│ - Encryption in transit (TLS 1.3)                            │
│ - Field-level encryption (PII)                               │
│ - Key management (AWS KMS)                                   │
│ - Data masking                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ Layer 4: Access Control                                      │
│ - RBAC (Role-Based Access Control)                           │
│ - MFA enforcement                                            │
│ - SSO (SAML 2.0, OIDC)                                       │
│ - API key management                                         │
│ - Audit logging                                              │
└─────────────────────────────────────────────────────────────┘
```

### Authentication & Authorization

**Authentication Flow:**
```
User → Login → Verify Credentials → Generate JWT → Return Token
                    │
                    ▼
            ┌───────────────┐
            │  Auth Service │
            │  - bcrypt     │
            │  - JWT        │
            │  - MFA        │
            │  - SSO        │
            └───────────────┘
```

**JWT Structure:**
```json
{
  "sub": "user_123",
  "org": "org_456",
  "roles": ["admin"],
  "permissions": ["reviews:read", "reviews:write"],
  "iat": 1711234567,
  "exp": 1711320967
}
```

**RBAC Model:**
| Role | Permissions |
|------|-------------|
| Owner | All permissions + billing |
| Admin | All except billing |
| Manager | Read/write reviews, campaigns |
| Member | Read/write assigned reviews |
| Viewer | Read-only |

### Compliance

| Standard | Status | Notes |
|----------|--------|-------|
| SOC 2 Type II | In Progress | Target: Q3 2026 |
| GDPR | Compliant | Data processing agreements |
| CCPA | Compliant | Opt-out mechanisms |
| HIPAA | Available | Enterprise add-on |
| PCI DSS | Compliant | Stripe handles payments |

---

## Scalability

### Horizontal Scaling Strategy

**Auto-Scaling Policies:**
```yaml
# HPA Configuration
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: review-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: review-service
  minReplicas: 3
  maxReplicas: 50
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

**Database Scaling:**
- Read replicas for read-heavy workloads
- Connection pooling (PgBouncer)
- Query optimization and indexing
- Partitioning for large tables (by date)
- Sharding strategy for 10M+ reviews

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| API Latency (p95) | < 200ms | 145ms |
| API Latency (p99) | < 500ms | 380ms |
| Review Ingestion | 10K/min | 15K/min |
| Concurrent Users | 50K | 35K |
| Uptime | 99.95% | 99.97% |
| Cache Hit Rate | > 90% | 94% |

### Caching Strategy

**Multi-Layer Cache:**
```
┌─────────────────────────────────────────┐
│ Layer 1: CDN (CloudFlare)               │
│ - Static assets                         │
│ - Widget JS/CSS                         │
│ TTL: 24 hours                           │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│ Layer 2: Redis (Application Cache)      │
│ - API responses                         │
│ - Session data                          │
│ - Rate limiting                         │
│ TTL: 5 min - 1 hour                     │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│ Layer 3: Database (Query Cache)         │
│ - Frequently accessed queries           │
│ - Aggregated analytics                  │
│ TTL: 1 min - 15 min                     │
└─────────────────────────────────────────┘
```

---

## Monitoring & Observability

### Monitoring Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    Observability Stack                       │
├─────────────────────────────────────────────────────────────┤
│ Metrics: Datadog                                             │
│ - Infrastructure metrics                                     │
│ - Application metrics                                        │
│ - Custom business metrics                                    │
├─────────────────────────────────────────────────────────────┤
│ Logging: ELK Stack (Elasticsearch, Logstash, Kibana)        │
│ - Application logs                                           │
│ - Access logs                                                │
│ - Error logs                                                 │
├─────────────────────────────────────────────────────────────┤
│ Tracing: Jaeger                                              │
│ - Distributed tracing                                        │
│ - Performance profiling                                      │
│ - Dependency mapping                                         │
├─────────────────────────────────────────────────────────────┤
│ Alerting: PagerDuty                                          │
│ - On-call rotation                                           │
│ - Escalation policies                                        │
│ - Incident management                                        │
└─────────────────────────────────────────────────────────────┘
```

### Key Metrics

**Infrastructure:**
- CPU utilization
- Memory usage
- Disk I/O
- Network throughput
- Pod restarts

**Application:**
- Request rate
- Error rate
- Latency (p50, p95, p99)
- Cache hit rate
- Queue depth

**Business:**
- Reviews processed
- Campaigns sent
- Response rate
- API calls
- Active users

### Alerting Rules

| Alert | Condition | Severity | Action |
|-------|-----------|----------|--------|
| High Error Rate | > 5% errors (5 min) | P1 | Page on-call |
| High Latency | p95 > 500ms (10 min) | P2 | Notify Slack |
| Low Disk Space | < 20% available | P2 | Notify Slack |
| Pod Restarts | > 3 restarts/hour | P2 | Notify Slack |
| Database Connections | > 80% utilized | P1 | Page on-call |
| Queue Backlog | > 10K messages | P2 | Notify Slack |

### Incident Response

**Severity Levels:**
- **P1 (Critical):** Service down, data loss, security breach
- **P2 (High):** Degraded performance, feature unavailable
- **P3 (Medium):** Minor issues, workarounds available
- **P4 (Low):** Cosmetic, documentation

**Response Times:**
| Severity | Response Time | Resolution Time |
|----------|---------------|-----------------|
| P1 | 15 minutes | 4 hours |
| P2 | 1 hour | 24 hours |
| P3 | 4 hours | 72 hours |
| P4 | 24 hours | 1 week |

---

## Disaster Recovery

### Backup Strategy

| Component | Frequency | Retention | Location |
|-----------|-----------|-----------|----------|
| PostgreSQL | Continuous + Daily | 35 days | Cross-region |
| S3 Objects | Versioned | Indefinite | Cross-region |
| Redis | Daily snapshot | 7 days | Same region |
| Elasticsearch | Daily snapshot | 14 days | Same region |
| Config (Terraform) | On change | Indefinite | GitHub |

### Recovery Objectives

| Metric | Target |
|--------|--------|
| RTO (Recovery Time Objective) | 4 hours |
| RPO (Recovery Point Objective) | 15 minutes |

### Failover Strategy

**Active-Active (Multi-Region):**
- Traffic routed via CloudFlare
- Automatic failover on region failure
- Database replication (async cross-region)
- DNS failover (5 minute TTL)

---

*Technical documentation last updated: March 2026*
*For security details, see [security.md](security.md)*
*For infrastructure details, see [infrastructure.md](infrastructure.md)*
