# 🛠️ Technology Stack

## Overview

This document details the complete technology infrastructure required to build, deploy, and scale our real estate AI services platform.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
│  Web App │ Mobile App │ API │ White-Label Portals │ Integrations │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API Gateway Layer                           │
│         (Kong / AWS API Gateway / Custom)                        │
│        Rate Limiting │ Auth │ Routing │ Logging                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
┌────────────────────────┐  ┌────────────────────────┐
│   Application Layer    │  │    AI/ML Layer         │
│   (Microservices)      │  │   (Model Serving)      │
│                        │  │                        │
│ • User Service         │  │ • Valuation Model      │
│ • Lead Service         │  │ • Lead Scoring Model   │
│ • Property Service     │  │ • Chatbot NLP          │
│ • Tour Service         │  │ • Document AI          │
│ • Screening Service    │  │ • Recommendation Engine│
│ • PM Service           │  │                        │
│ • Notification Service │  │                        │
└────────────────────────┘  └────────────────────────┘
                    │                   │
                    └─────────┬─────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Data Layer                                 │
│  PostgreSQL │ MongoDB │ Redis │ Elasticsearch │ S3             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   External Integrations                          │
│  MLS │ Zillow │ CRM │ Email │ SMS │ Payment │ Property Data    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 💻 Frontend Stack

### Web Application

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | **React 18** | UI framework |
| Language | **TypeScript** | Type safety |
| State Management | **Zustand** or **Redux Toolkit** | Client state |
| Styling | **Tailwind CSS** + **Headless UI** | Styling + components |
| Forms | **React Hook Form** + **Zod** | Form handling + validation |
| Charts | **Recharts** or **Chart.js** | Data visualization |
| Maps | **Mapbox GL** or **Google Maps** | Property mapping |
| Virtual Tours | **Three.js** + **Photo Sphere Viewer** | 3D tour rendering |
| Build Tool | **Vite** | Fast builds |
| Testing | **Vitest** + **React Testing Library** | Unit + integration tests |
| E2E Testing | **Playwright** | End-to-end tests |

### Mobile Applications

| Platform | Technology | Notes |
|----------|------------|-------|
| iOS | **React Native** or **SwiftUI** | Cross-platform or native |
| Android | **React Native** or **Kotlin** | Cross-platform or native |
| Shared Logic | **TypeScript** + **tRPC** | Type-safe API calls |

### Recommended: React Native
- Single codebase for iOS + Android
- Faster development
- Good performance for our use case
- Team can share web/mobile developers

---

## 🔧 Backend Stack

### Core Services

| Service | Technology | Purpose |
|---------|------------|---------|
| Runtime | **Node.js 20 LTS** | JavaScript runtime |
| Framework | **NestJS** or **Fastify** | API framework |
| Language | **TypeScript** | Type safety |
| ORM | **Prisma** or **Drizzle** | Database ORM |
| Validation | **Zod** or **class-validator** | Input validation |
| Auth | **Auth0** or **Clerk** | Authentication |
| API Docs | **OpenAPI/Swagger** | API documentation |

### Microservices Architecture

```
services/
├── api-gateway/          # Main entry point, routing
├── user-service/         # User management, auth
├── lead-service/         # Lead scoring, nurturing
├── property-service/     # Property data, valuations
├── tour-service/         # Virtual tour generation
├── screening-service/    # Tenant screening
├── pm-service/           # Property management
├── notification-service/ # Email, SMS, push
└── integration-service/  # External API integrations
```

### Inter-Service Communication

| Method | Technology | Use Case |
|--------|------------|---------|
| Synchronous | **gRPC** or **REST** | Request/response |
| Asynchronous | **RabbitMQ** or **AWS SQS** | Event-driven |
| Real-time | **WebSockets** or **Socket.io** | Live updates |
| Event Bus | **Redis Pub/Sub** or **Kafka** | Event streaming |

---

## 🤖 AI/ML Stack

### Model Development

| Component | Technology | Purpose |
|-----------|------------|---------|
| Language | **Python 3.11** | ML development |
| Framework | **PyTorch** or **TensorFlow** | Deep learning |
| Traditional ML | **scikit-learn** + **XGBoost** | Classical ML |
| NLP | **Hugging Face Transformers** | Language models |
| Computer Vision | **OpenCV** + **Detectron2** | Image processing |
| Experiment Tracking | **MLflow** or **Weights & Biases** | Model experiments |
| Feature Store | **Feast** | Feature management |

### Model Serving

| Component | Technology | Purpose |
|-----------|------------|---------|
| Serving | **TorchServe** or **Triton** | Model inference |
| API | **FastAPI** | Python API layer |
| Orchestration | **Kubernetes** | Container orchestration |
| Scaling | **KEDA** | Event-driven autoscaling |

### Pre-Built AI Services

| Service | Provider | Use Case |
|---------|----------|---------|
| LLM API | **OpenAI** or **Anthropic** | Chatbot, content generation |
| Embeddings | **OpenAI** or **Cohere** | Semantic search |
| Speech-to-Text | **Whisper API** or **Google Speech** | Voice features |
| Text-to-Speech | **ElevenLabs** or **Amazon Polly** | Voice output |
| Document AI | **AWS Textract** or **Google Document AI** | Document parsing |
| Moderation | **Hive** or **Sightengine** | Content moderation |

### ML Infrastructure

```
ml-platform/
├── data-pipeline/        # ETL, data preprocessing
├── feature-engineering/  # Feature computation
├── model-training/       # Training jobs
├── model-registry/       # Model versioning
├── model-serving/        # Inference endpoints
└── monitoring/           # Model performance tracking
```

---

## 🗄️ Data Stack

### Databases

| Database | Technology | Use Case |
|----------|------------|---------|
| Primary | **PostgreSQL 15** | Transactional data |
| Document | **MongoDB** or **PostgreSQL JSONB** | Flexible schemas |
| Cache | **Redis** | Sessions, caching, queues |
| Search | **Elasticsearch** or **Typesense** | Full-text search |
| Analytics | **ClickHouse** or **BigQuery** | Analytics, reporting |
| Time Series | **TimescaleDB** | Metrics, events |

### Data Infrastructure

| Component | Technology | Purpose |
|-----------|------------|---------|
| Data Warehouse | **Snowflake** or **BigQuery** | Centralized data |
| ETL/ELT | **Airbyte** or **Fivetran** | Data ingestion |
| Transformation | **dbt** | Data transformation |
| Orchestration | **Airflow** or **Dagster** | Pipeline orchestration |
| BI | **Metabase** or **Looker** | Business intelligence |
| Data Quality | **Great Expectations** | Data validation |

### Database Schema (Core Tables)

```sql
-- Users & Authentication
users (id, email, name, role, organization_id, created_at)
organizations (id, name, plan, settings, created_at)
api_keys (id, user_id, key_hash, permissions, created_at)

-- Properties
properties (id, address, city, state, zip, lat, lng, property_type, 
            bedrooms, bathrooms, sqft, lot_size, year_built, 
            last_sale_price, last_sale_date, created_at)
valuations (id, property_id, estimated_value, confidence_score, 
            comparable_ids, model_version, created_at)

-- Leads
leads (id, organization_id, name, email, phone, source, 
       score, status, assigned_agent_id, created_at)
lead_events (id, lead_id, event_type, metadata, created_at)
lead_assignments (id, lead_id, agent_id, assigned_at)

-- Virtual Tours
tours (id, property_id, status, tour_url, thumbnail_url, 
       photo_count, created_at, processed_at)
tour_photos (id, tour_id, url, order, metadata)

-- Tenant Screening
applications (id, property_id, applicant_id, status, 
              risk_score, decision, created_at)
screening_reports (id, application_id, credit_score, 
                    criminal_check, eviction_check, income_verified)

-- Property Management
units (id, property_id, unit_number, rent, status, tenant_id)
tenants (id, name, contact, lease_start, lease_end)
maintenance_requests (id, unit_id, description, priority, 
                       status, vendor_id, created_at)
```

---

## ☁️ Infrastructure

### Cloud Provider: AWS (Recommended)

| Service | AWS Equivalent | Purpose |
|---------|---------------|---------|
| Compute | **EC2** / **ECS** / **Lambda** | Application hosting |
| Containers | **ECS** or **EKS** | Container orchestration |
| Serverless | **Lambda** | Event-driven functions |
| Storage | **S3** | File storage |
| CDN | **CloudFront** | Content delivery |
| Database | **RDS** (PostgreSQL) | Managed database |
| Cache | **ElastiCache** (Redis) | Managed cache |
| Queue | **SQS** | Message queue |
| Search | **OpenSearch** | Search engine |
| ML | **SageMaker** | ML platform (optional) |

### Infrastructure as Code

| Tool | Purpose |
|------|---------|
| **Terraform** | Infrastructure provisioning |
| **Pulumi** | Alternative (TypeScript) |
| **Ansible** | Configuration management |
| **Helm** | Kubernetes package management |

### CI/CD

| Tool | Purpose |
|------|---------|
| **GitHub Actions** | CI/CD pipelines |
| **Docker** | Containerization |
| **ArgoCD** | GitOps deployment |
| **Jest** / **Pytest** | Testing |

### Monitoring & Observability

| Tool | Purpose |
|------|---------|
| **Datadog** or **New Relic** | APM, infrastructure monitoring |
| **Sentry** | Error tracking |
| **LogRocket** | Session replay |
| **Prometheus** + **Grafana** | Metrics + dashboards |
| **ELK Stack** | Log aggregation |
| **Pingdom** or **UptimeRobot** | Uptime monitoring |

---

## 🔐 Security Stack

### Authentication & Authorization

| Component | Technology | Notes |
|-----------|------------|-------|
| Auth Provider | **Auth0** or **Clerk** | Managed auth |
| SSO | **SAML 2.0** + **OIDC** | Enterprise SSO |
| API Auth | **JWT** + **API Keys** | API authentication |
| RBAC | Custom implementation | Role-based access |

### Security Tools

| Tool | Purpose |
|------|---------|
| **Cloudflare** | DDoS protection, WAF |
| **Vault** | Secrets management |
| **Snyk** | Dependency scanning |
| **TruffleHog** | Secret detection in code |
| **OWASP ZAP** | Security testing |

### Compliance

| Standard | Status | Notes |
|----------|--------|-------|
| **SOC 2 Type II** | Target: Month 18 | Security controls |
| **GDPR** | Compliant | EU data privacy |
| **CCPA** | Compliant | California privacy |
| **FCRA** | Compliant | Tenant screening |
| **Fair Housing** | Compliant | Anti-discrimination |

---

## 🔌 Integration Stack

### API Management

| Component | Technology | Purpose |
|-----------|------------|---------|
| API Gateway | **Kong** or **AWS API Gateway** | API management |
| Rate Limiting | **Redis** + **Kong** | Request throttling |
| API Docs | **Swagger UI** / **Redoc** | Documentation |
| Testing | **Postman** + **Newman** | API testing |

### Webhook System

```
Webhook Flow:
1. Event occurs in system
2. Event published to message queue
3. Webhook service picks up event
4. Retry logic with exponential backoff
5. Delivery status tracked
6. User can view delivery logs
```

### Integration Connectors

| Integration | Method | Notes |
|-------------|--------|-------|
| MLS | **RESO Web API** / **RETS** | Standardized |
| Zillow | **Zillow API** | Listing data |
| Realtor.com | **Move API** | Listing data |
| Salesforce | **Salesforce API** | CRM sync |
| HubSpot | **HubSpot API** | CRM sync |
| Twilio | **Twilio API** | SMS/Voice |
| SendGrid | **SendGrid API** | Email |
| DocuSign | **DocuSign API** | E-signature |
| Plaid | **Plaid API** | Income verification |
| Stripe | **Stripe API** | Payments |

---

## 📊 Analytics Stack

### Product Analytics

| Tool | Purpose |
|------|---------|
| **PostHog** or **Mixpanel** | User behavior tracking |
| **Amplitude** | Product analytics |
| **Hotjar** | Session recordings, heatmaps |

### Business Intelligence

| Tool | Purpose |
|------|---------|
| **Metabase** | Self-service BI |
| **Looker** | Enterprise BI |
| **Tableau** | Advanced visualization |

### Data Pipeline

```
User Actions → Segment → Data Warehouse (Snowflake) → dbt → Metabase
                                          ↓
                                    Reverse ETL (Hightouch)
                                            ↓
                                    CRM, Marketing Tools
```

---

## 💳 Payments & Billing

| Component | Technology | Notes |
|-----------|------------|-------|
| Payment Processing | **Stripe** | Cards, ACH, subscriptions |
| Invoicing | **Stripe Billing** | Subscription management |
| Tax Compliance | **Stripe Tax** or **Avalara** | Sales tax |
| Revenue Recognition | **SaaSOptics** or **Chargebee** | Complex billing |

---

## 📧 Communication Stack

| Channel | Provider | Purpose |
|---------|----------|---------|
| Email | **SendGrid** or **Postmark** | Transactional email |
| Marketing Email | **Customer.io** or **Braze** | Campaigns |
| SMS | **Twilio** | Text messaging |
| WhatsApp | **Twilio WhatsApp API** | International messaging |
| Push Notifications | **OneSignal** or **Firebase** | Mobile push |
| In-App Chat | **Intercom** or **Crisp** | Customer support |
| Internal Chat | **Slack** | Team communication |

---

## 🧪 Development Tools

### Developer Experience

| Tool | Purpose |
|------|---------|
| **GitHub** | Version control |
| **VS Code** | Code editor |
| **Linear** or **Jira** | Issue tracking |
| **Notion** | Documentation |
| **Figma** | Design |
| **Storybook** | Component documentation |

### Local Development

```yaml
# docker-compose.yml
services:
  postgres:
    image: postgres:15
  redis:
    image: redis:7
  mongodb:
    image: mongo:6
  elasticsearch:
    image: elasticsearch:8
  localstack:
    image: localstack/localstack  # AWS emulator
```

### Environment Management

| Environment | Purpose | Access |
|-------------|---------|--------|
| **Local** | Development | All developers |
| **Dev** | Integration testing | Dev team |
| **Staging** | Pre-production QA | Dev + QA + PM |
| **Production** | Live system | Restricted |

---

## 📈 Scaling Considerations

### Horizontal Scaling

- **Stateless services** → Easy to scale horizontally
- **Database** → Read replicas, connection pooling
- **Cache** → Redis Cluster
- **Queue** → Multiple consumers

### Performance Targets

| Metric | Target |
|--------|--------|
| API Response Time (p95) | <500ms |
| Page Load Time | <3s |
| Model Inference Time | <200ms |
| Database Query Time (p95) | <100ms |
| Uptime | 99.9% |

### Cost Optimization

- Use **Spot Instances** for non-critical workloads
- **Reserved Instances** for predictable workloads
- **CloudFront** for content delivery (cheaper than S3 direct)
- **S3 Intelligent Tiering** for storage
- Monitor with **AWS Cost Explorer** + **CloudHealth**

---

## 🚀 Deployment Strategy

### Blue-Green Deployment

```
1. Deploy new version to green environment
2. Run smoke tests
3. Switch traffic (load balancer)
4. Monitor for issues
5. Keep blue as rollback option
6. Decommission blue after stability confirmed
```

### Feature Flags

| Tool | Purpose |
|------|---------|
| **LaunchDarkly** | Feature flag management |
| **Flagsmith** | Open-source alternative |

### Rollback Strategy

- Automated rollback on error rate threshold
- Database migrations must be backward compatible
- Keep previous 2 versions deployed

---

## 📋 Tech Stack Summary

### MVP Stack (Months 1-6)

- **Frontend:** React + TypeScript + Tailwind
- **Backend:** Node.js + NestJS + PostgreSQL
- **AI:** Python + FastAPI + scikit-learn
- **Infra:** AWS (EC2, RDS, S3)
- **Auth:** Auth0
- **Payments:** Stripe

### Growth Stack (Months 6-18)

- Add: Kubernetes, Redis, Elasticsearch
- Migrate: To microservices
- Add: ML platform (SageMaker or self-hosted)
- Add: Data warehouse + BI

### Scale Stack (Months 18+)

- Multi-region deployment
- Advanced ML ops
- Enterprise security (SOC 2)
- Dedicated data platform

---

*Tech stack documentation v3.1 | Last updated: March 2026 | Internal*
