# Shelby Animation Studio — Technical Architecture

**System design for scalable AI-powered animation production**

---

## 🏗️ System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT FACING                            │
├─────────────────────────────────────────────────────────────────┤
│  Web Portal  │  Client Dashboard  │  API  │  Mobile App (v2)   │
└──────┬────────────────┬─────────────────┬──────────────────────┘
       │                │                 │
       ▼                ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                          │
│         (Authentication, Rate Limiting, Request Routing)        │
└──────────────────────────┬──────────────────────────────────────┘
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
┌─────────────┐   ┌─────────────────┐   ┌─────────────┐
│  Project    │   │   Production    │   │   Billing   │
│  Service    │   │    Service      │   │   Service   │
└──────┬──────┘   └────────┬────────┘   └──────┬──────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                     CORE SERVICES LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│  Asset Mgmt  │  Render Queue  │  AI Pipeline  │  Notification  │
└──────┬──────────────┬────────────────┬──────────────┬──────────┘
       │              │                │              │
       ▼              ▼                ▼              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│    S3 Storage   │   Render Farm   │  AI APIs   │  Database     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Architecture Principles

1. **Microservices-first:** Independent, scalable services
2. **Event-driven:** Async processing for long-running jobs
3. **Cloud-native:** AWS/GCP/Azure agnostic design
4. **AI-integrated:** AI tools as first-class citizens
5. **Human-in-the-loop:** Quality checkpoints at critical stages

---

## 🖥️ Frontend Architecture

### Client Portal (Web)

**Tech Stack:**
- **Framework:** React 18 + TypeScript
- **State Management:** Zustand + React Query
- **UI Library:** Tailwind CSS + Radix UI
- **Video Player:** Video.js + custom controls
- **Real-time:** Socket.io for live updates

**Key Features:**
- Project dashboard with status tracking
- Video review interface with timestamped comments
- Asset library with search and filtering
- Billing and subscription management
- Team collaboration (comments, approvals)
- Analytics dashboard (views, engagement)

**Pages:**
```
/dashboard          → Project overview
/projects/:id       → Project detail + review
/assets             → Asset library
/billing            → Subscription + invoices
/analytics          → Performance metrics
/settings           → Account + team settings
```

---

### Admin/Production Dashboard

**Tech Stack:** Same as client portal + additional admin components

**Key Features:**
- Production queue management
- Resource allocation (animators, AI credits)
- Quality control workflows
- Client communication hub
- Financial reporting
- System health monitoring

---

## 🔧 Backend Architecture

### Service Breakdown

#### 1. Project Service
**Purpose:** Manage project lifecycle, milestones, deliverables

```typescript
interface Project {
  id: string;
  clientId: string;
  type: ProjectType;
  status: ProjectStatus;
  brief: ProjectBrief;
  timeline: Timeline;
  budget: Budget;
  team: TeamMember[];
  assets: Asset[];
  revisions: Revision[];
  createdAt: Date;
  updatedAt: Date;
}
```

**API Endpoints:**
- `POST /api/projects` — Create project
- `GET /api/projects/:id` — Get project details
- `PATCH /api/projects/:id` — Update project
- `POST /api/projects/:id/approve` — Approve milestone
- `POST /api/projects/:id/revision` — Request revision

---

#### 2. Production Service
**Purpose:** Orchestrate animation production workflow

```typescript
interface ProductionJob {
  id: string;
  projectId: string;
  phase: ProductionPhase;
  assignedTo: string[];
  aiTasks: AITask[];
  humanTasks: HumanTask[];
  status: JobStatus;
  progress: number;
  estimatedCompletion: Date;
}
```

**Workflow States:**
```
Brief → Script → Storyboard → Animatic → Style → Animation → Post → Delivery
         ↑          ↑            ↑          ↑         ↑          ↑
      Approval   Approval    Approval   Approval  Approval   Approval
```

---

#### 3. AI Pipeline Service
**Purpose:** Manage AI generation tasks across multiple providers

```typescript
interface AITask {
  id: string;
  type: AIType; // 'text-to-video' | 'image-gen' | 'upscale' | 'style-transfer'
  provider: AIProvider; // 'runway' | 'pika' | 'midjourney' | 'stability'
  input: AIInput;
  output: AIOutput[];
  status: 'pending' | 'processing' | 'completed' | 'failed';
  cost: number;
  createdAt: Date;
}
```

**AI Provider Integrations:**
| Provider | API Type | Rate Limit | Cost Model |
|----------|----------|------------|------------|
| Runway | REST + WebSocket | 100 req/min | Credits |
| Pika | REST | 50 req/min | Subscription |
| Midjourney | Discord API | 35 jobs/min | Subscription |
| Stability AI | REST | 100 req/min | Credits |
| ElevenLabs | REST | 50 req/min | Characters |

**Queue System:**
- Redis-based job queue (Bull/BullMQ)
- Priority queues (Express > Standard > Background)
- Retry logic with exponential backoff
- Webhook callbacks for completion

---

#### 4. Asset Management Service
**Purpose:** Store, organize, and deliver media assets

**Storage Architecture:**
```
S3 Buckets:
├── shelby-assets-raw/       # Original uploads
├── shelby-assets-work/      # Working files
├── shelby-assets-final/     # Approved deliverables
├── shelby-assets-ai/        # AI-generated intermediates
└── shelby-assets-archive/   # Completed projects (>90 days)
```

**CDN:** CloudFront for global delivery

**Features:**
- Automatic transcoding (FFmpeg)
- Thumbnail generation
- Video streaming (HLS/DASH)
- Access control (signed URLs)
- Version history

---

#### 5. Billing Service
**Purpose:** Handle subscriptions, invoices, payments

**Integration:** Stripe

**Models:**
```typescript
interface Subscription {
  id: string;
  customerId: string;
  plan: PlanType;
  status: 'active' | 'canceled' | 'past_due';
  credits: number;
  creditsUsed: number;
  renewalDate: Date;
}

interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  lineItems: LineItem[];
  dueDate: Date;
}
```

---

#### 6. Notification Service
**Purpose:** Real-time and asynchronous notifications

**Channels:**
- Email (SendGrid)
- SMS (Twilio)
- In-app (Socket.io)
- Slack (for team)

**Events:**
- Project status changes
- Review requests
- Approval needed
- Delivery ready
- Payment reminders
- System alerts

---

## 🗄️ Database Schema

### Primary Database: PostgreSQL

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  role USER_ROLE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Clients
CREATE TABLE clients (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  company_name VARCHAR(255),
  industry VARCHAR(100),
  created_at TIMESTAMP
);

-- Projects
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  client_id UUID REFERENCES clients(id),
  type PROJECT_TYPE,
  status PROJECT_STATUS,
  brief JSONB,
  budget_cents INTEGER,
  deadline DATE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Project Milestones
CREATE TABLE milestones (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  phase PHASE_TYPE,
  status MILESTONE_STATUS,
  due_date DATE,
  completed_at TIMESTAMP,
  feedback TEXT
);

-- Assets
CREATE TABLE assets (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  type ASSET_TYPE,
  s3_key VARCHAR(500),
  metadata JSONB,
  version INTEGER,
  created_at TIMESTAMP
);

-- AI Tasks
CREATE TABLE ai_tasks (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  provider AI_PROVIDER,
  task_type TASK_TYPE,
  input_data JSONB,
  output_data JSONB,
  status TASK_STATUS,
  cost_cents INTEGER,
  created_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  client_id UUID REFERENCES clients(id),
  plan PLAN_TYPE,
  stripe_subscription_id VARCHAR(255),
  status SUBSCRIPTION_STATUS,
  credits_total INTEGER,
  credits_used INTEGER,
  current_period_start DATE,
  current_period_end DATE
);

-- Revisions
CREATE TABLE revisions (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  milestone_id UUID REFERENCES milestones(id),
  feedback TEXT,
  status REVISION_STATUS,
  created_at TIMESTAMP,
  resolved_at TIMESTAMP
);
```

### Cache Layer: Redis

**Use Cases:**
- Session storage
- Job queues (BullMQ)
- Rate limiting
- Real-time presence
- Frequently accessed data

---

## 🤖 AI Integration Layer

### AI Orchestration Engine

```typescript
class AIOrchestrator {
  async generateVideo(prompt: string, options: VideoOptions): Promise<VideoResult> {
    // Select best provider based on style, cost, speed
    const provider = this.selectProvider(options);
    
    // Submit job
    const job = await provider.submit(prompt, options);
    
    // Monitor progress
    const result = await this.monitorJob(job);
    
    // Quality check
    const quality = await this.qualityCheck(result);
    
    if (quality.score < options.minQuality) {
      // Regenerate with adjusted parameters
      return this.regenerate(job, quality.feedback);
    }
    
    return result;
  }
  
  private selectProvider(options: VideoOptions): AIProvider {
    // Decision tree based on:
    // - Style requirements
    // - Budget constraints
    // - Speed requirements
    // - Provider availability
  }
  
  private async qualityCheck(video: VideoResult): Promise<QualityReport> {
    // Automated quality checks:
    // - Resolution verification
    // - Artifact detection
    // - Style consistency
    // - Content safety
  }
}
```

### AI Workflow Patterns

#### Pattern 1: Text-to-Video Pipeline
```
User Prompt → Prompt Enhancement (LLM) → Provider Selection → 
Generation → Quality Check → Human Review → Refinement → Final
```

#### Pattern 2: Image Animation Pipeline
```
Upload Image → Segmentation (AI) → Motion Planning → 
Frame Generation (AI) → Interpolation → Composite → Final
```

#### Pattern 3: Style Transfer Pipeline
```
Source Video + Style Reference → Style Analysis (AI) → 
Frame-by-Frame Transfer → Temporal Consistency Check → 
Blend with Original → Final
```

---

## 🎬 Render Infrastructure

### Render Farm Architecture

**On-Demand Rendering:**
- AWS Thinkbox Deadline
- Auto-scaling EC2 instances (GPU-optimized)
- Spot instances for cost optimization

**Instance Types:**
| Use Case | Instance Type | GPU | Cost/hr |
|----------|--------------|-----|---------|
| 2D Rendering | c5.4xlarge | None | $0.68 |
| 3D Rendering | g5.2xlarge | A10G | $1.01 |
| Heavy 3D | p4d.24xlarge | 8x A100 | $32.77 |
| AI Generation | g5.4xlarge | A10G | $1.62 |

**Render Queue:**
```typescript
interface RenderJob {
  id: string;
  projectId: string;
  scene: string;
  frames: number;
  resolution: Resolution;
  priority: 'low' | 'normal' | 'high' | 'express';
  estimatedTime: number; // minutes
  status: 'queued' | 'rendering' | 'completed' | 'failed';
}
```

---

## 🔐 Security Architecture

### Authentication & Authorization

**Auth Provider:** Auth0 or AWS Cognito

**RBAC Model:**
```
Roles:
├── super_admin      → Full system access
├── admin            → Admin dashboard, user management
├── producer         → Project management, client access
├── animator         → Production tools, assigned projects
├── reviewer         → QC, approval workflows
├── client           → Own projects, billing
└── viewer           → Read-only access
```

**API Security:**
- JWT-based authentication
- API key authentication for integrations
- Rate limiting per user/API key
- Request signing for sensitive operations

### Data Protection

- **Encryption at Rest:** AES-256 (S3, RDS)
- **Encryption in Transit:** TLS 1.3
- **PII Handling:** Minimal collection, encrypted storage
- **Access Logging:** All data access logged
- **Backup:** Daily automated backups, 30-day retention

---

## 📊 Monitoring & Observability

### Metrics Collection

**Tool:** Datadog / Prometheus + Grafana

**Key Metrics:**
| Category | Metrics |
|----------|---------|
| **API** | Request rate, latency, error rate |
| **AI** | Generation time, success rate, cost per job |
| **Render** | Queue depth, render time, failure rate |
| **Business** | Active projects, revenue, churn |
| **System** | CPU, memory, disk, network |

### Alerting

**PagerDuty Integration:**

| Severity | Condition | Response Time |
|----------|-----------|---------------|
| **Critical** | API down, data loss | 5 minutes |
| **High** | AI pipeline failing, render queue backed up | 15 minutes |
| **Medium** | Elevated error rates, slow responses | 1 hour |
| **Low** | Non-urgent issues, optimization opportunities | Next business day |

### Logging

**Stack:** Winston + ELK (Elasticsearch, Logstash, Kibana)

**Log Levels:**
- ERROR: System failures, failed transactions
- WARN: Recoverable errors, degraded performance
- INFO: Key business events, user actions
- DEBUG: Detailed operational info (dev/staging)

---

## 🚀 Deployment Architecture

### Environment Strategy

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ Development │ → │   Staging   │ → │ Production  │
│   (Local)   │   │   (AWS)     │   │   (AWS)     │
└─────────────┘   └─────────────┘   └─────────────┘
```

### CI/CD Pipeline

**Tool:** GitHub Actions

**Pipeline Stages:**
1. **Lint & Test** — Code quality gates
2. **Build** — Docker images, frontend bundle
3. **Security Scan** — Snyk, Dependabot
4. **Deploy Staging** — Auto-deploy on merge
5. **Integration Tests** — E2E tests
6. **Deploy Production** — Manual approval required

### Infrastructure as Code

**Tool:** Terraform

**Modules:**
- VPC and networking
- ECS/EKS cluster
- RDS PostgreSQL
- ElastiCache Redis
- S3 buckets
- CloudFront distributions
- IAM roles and policies

---

## 📈 Scalability Strategy

### Horizontal Scaling

| Component | Scaling Strategy | Trigger |
|-----------|-----------------|---------|
| **API Servers** | Auto-scaling ECS tasks | CPU > 70% |
| **AI Workers** | Queue-based scaling | Queue depth > 10 |
| **Render Nodes** | Spot fleet scaling | Queue depth > 5 |
| **Database** | Read replicas | Read latency > 100ms |
| **Cache** | Cluster mode | Memory > 80% |

### Performance Targets

| Metric | Target |
|--------|--------|
| API p95 latency | < 200ms |
| AI job start time | < 30 seconds |
| Video upload | < 10 seconds (100MB) |
| Page load time | < 2 seconds |
| System uptime | 99.9% |

---

## 💰 Cost Optimization

### AI Cost Management

- **Provider Selection:** Route to cheapest capable provider
- **Batch Processing:** Group similar jobs
- **Caching:** Reuse similar generations
- **Quality Tiers:** Lower quality for internal review

### Infrastructure Cost

- **Spot Instances:** 70% of render capacity
- **Reserved Instances:** Baseline capacity
- **S3 Lifecycle:** Auto-archive old assets
- **CDN Optimization:** Cache aggressively

### Estimated Monthly Costs (Year 1)

| Category | Estimated Cost |
|----------|---------------|
| AWS Infrastructure | $5,000-10,000 |
| AI API Credits | $3,000-8,000 |
| Third-party Services | $2,000-4,000 |
| **Total** | **$10,000-22,000/mo** |

---

## 🔄 Disaster Recovery

### Backup Strategy

| Data Type | Frequency | Retention | Location |
|-----------|-----------|-----------|----------|
| Database | Continuous + Daily | 30 days | Cross-region |
| S3 Assets | Versioning enabled | Indefinite | Cross-region |
| Config/Code | Git (continuous) | Indefinite | GitHub |

### Recovery Objectives

- **RTO (Recovery Time Objective):** 4 hours
- **RPO (Recovery Point Objective):** 1 hour

### Failover Strategy

- Multi-AZ deployment (primary)
- Cross-region backup (secondary)
- Manual failover procedure documented
- Quarterly DR drills

---

## 📋 Tech Stack Summary

### Frontend
- React 18 + TypeScript
- Tailwind CSS + Radix UI
- React Query + Zustand
- Video.js
- Socket.io client

### Backend
- Node.js 20 + TypeScript
- Express / Fastify
- PostgreSQL (RDS)
- Redis (ElastiCache)
- BullMQ (queues)

### AI/ML
- Python 3.11
- PyTorch / TensorFlow
- Custom model fine-tuning
- Multiple AI provider SDKs

### Infrastructure
- AWS (ECS, RDS, S3, CloudFront)
- Terraform (IaC)
- GitHub Actions (CI/CD)
- Datadog (monitoring)
- Auth0 (authentication)

### DevOps
- Docker + Docker Compose
- Kubernetes (EKS) for production
- Helm charts
- ArgoCD (GitOps)

---

**Architecture Version:** 1.0  
**Last Updated:** March 2026  
**Status:** Ready for Implementation
