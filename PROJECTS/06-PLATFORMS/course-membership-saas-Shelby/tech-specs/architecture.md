# Technical Architecture & Stack

## System Overview

CourseFlow Pro is built as a cloud-native, microservices-based SaaS platform designed for scalability, reliability, and security.

---

## 1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           COURSEFLOW PRO                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                 │
│  │   Web App   │    │  Mobile App │    │   Admin     │                 │
│  │  (React)    │    │ (React Nat) │    │   Portal    │                 │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘                 │
│         │                  │                  │                         │
│         └──────────────────┼──────────────────┘                         │
│                            │                                            │
│                   ┌────────▼────────┐                                   │
│                   │   API Gateway   │                                   │
│                   │   (Kong/AWS)    │                                   │
│                   └────────┬────────┘                                   │
│                            │                                            │
│         ┌──────────────────┼──────────────────┐                         │
│         │                  │                  │                         │
│    ┌────▼────┐      ┌─────▼─────┐     ┌──────▼──────┐                  │
│    │ Course  │      │   User    │     │   Payment   │                  │
│    │ Service │      │  Service  │     │   Service   │                  │
│    └────┬────┘      └─────┬─────┘     └──────┬──────┘                  │
│         │                 │                  │                          │
│    ┌────▼────┐      ┌─────▼─────┐     ┌──────▼──────┐                  │
│    │ Video   │      │Community  │     │  Email      │                  │
│    │ Service │      │ Service   │     │  Service    │                  │
│    └────┬────┘      └─────┬─────┘     └──────┬──────┘                  │
│         │                 │                  │                          │
│         └──────────────────┼──────────────────┘                         │
│                            │                                            │
│              ┌─────────────▼─────────────┐                              │
│              │      Data Layer           │                              │
│              │  (PostgreSQL, Redis, S3)  │                              │
│              └───────────────────────────┘                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

### Frontend

| Component | Technology | Purpose |
|-----------|------------|---------|
| Web Application | React 18 + TypeScript | Main course platform |
| State Management | Zustand + React Query | Client state & server cache |
| UI Components | Tailwind CSS + Headless UI | Styling and components |
| Video Player | Video.js + Custom | Branded video experience |
| Rich Text Editor | TipTap (ProseMirror) | Course content editor |
| Drag & Drop | dnd-kit | Course builder interface |
| Charts | Recharts | Analytics dashboards |
| Forms | React Hook Form + Zod | Form handling & validation |

### Backend

| Component | Technology | Purpose |
|-----------|------------|---------|
| API Framework | Node.js + Fastify | High-performance API |
| Language | TypeScript | Type safety across stack |
| Authentication | Auth0 / Supabase Auth | User authentication |
| ORM | Prisma | Database ORM |
| Database | PostgreSQL 15 | Primary data store |
| Cache | Redis 7 | Session cache, rate limiting |
| Queue | BullMQ (Redis) | Background jobs |
| Search | Meilisearch / Elasticsearch | Course & content search |
| Real-time | Socket.io / Pusher | Live notifications, chat |

### Infrastructure

| Component | Technology | Purpose |
|-----------|------------|---------|
| Cloud Provider | AWS (primary), GCP (optional) | Hosting infrastructure |
| Container Orchestration | Kubernetes (EKS) | Container management |
| CDN | CloudFront + Cloudflare | Global content delivery |
| Video Hosting | Cloudflare Stream / Mux | Video transcoding & streaming |
| Object Storage | S3 | File storage (videos, PDFs, images) |
| Database Hosting | AWS RDS / Supabase | Managed PostgreSQL |
| Monitoring | Datadog + Sentry | Application monitoring |
| Logging | ELK Stack (Elasticsearch, Logstash, Kibana) | Log aggregation |
| CI/CD | GitHub Actions + ArgoCD | Deployment automation |

---

## 3. Database Schema (Core Tables)

### Users & Authentication
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  avatar_url TEXT,
  timezone VARCHAR(50),
  locale VARCHAR(10) DEFAULT 'en',
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User roles (creator, student, admin)
CREATE TABLE user_roles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  role VARCHAR(50) NOT NULL, -- 'creator', 'student', 'admin'
  workspace_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Courses & Content
```sql
-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  price DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Course sections
CREATE TABLE sections (
  id UUID PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  position INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Lessons
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content_type VARCHAR(50), -- video, text, quiz, assignment
  video_url TEXT,
  video_duration INTEGER, -- seconds
  content_html TEXT,
  position INTEGER NOT NULL,
  is_free_preview BOOLEAN DEFAULT FALSE,
  drip_delay_days INTEGER, -- days after enrollment
  created_at TIMESTAMP DEFAULT NOW()
);

-- Course enrollments
CREATE TABLE enrollments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  enrollment_date TIMESTAMP DEFAULT NOW(),
  completion_percentage DECIMAL(5,2) DEFAULT 0,
  completed_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active', -- active, completed, refunded
  UNIQUE(user_id, course_id)
);

-- Lesson progress
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY,
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id),
  status VARCHAR(20) DEFAULT 'not_started',
  completed_at TIMESTAMP,
  time_spent_seconds INTEGER DEFAULT 0,
  UNIQUE(enrollment_id, lesson_id)
);
```

### Memberships & Subscriptions
```sql
-- Membership tiers
CREATE TABLE membership_tiers (
  id UUID PRIMARY KEY,
  creator_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  billing_interval VARCHAR(20), -- monthly, quarterly, yearly
  trial_days INTEGER DEFAULT 0,
  features JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  membership_tier_id UUID REFERENCES membership_tiers(id),
  stripe_subscription_id VARCHAR(255),
  status VARCHAR(20), -- active, paused, cancelled, past_due
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancelled_at TIMESTAMP,
  cancel_reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Payments & Transactions
```sql
-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total_amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(20) DEFAULT 'pending',
  stripe_payment_intent_id VARCHAR(255),
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Order items
CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  item_type VARCHAR(50), -- course, membership, bundle
  item_id UUID,
  quantity INTEGER DEFAULT 1,
  unit_price DECIMAL(10,2),
  total_price DECIMAL(10,2)
);

-- Transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  amount DECIMAL(10,2) NOT NULL,
  type VARCHAR(20), -- charge, refund, payout
  status VARCHAR(20),
  stripe_charge_id VARCHAR(255),
  platform_fee DECIMAL(10,2),
  creator_payout DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Payouts to creators
CREATE TABLE payouts (
  id UUID PRIMARY KEY,
  creator_id UUID REFERENCES users(id),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(20), -- pending, processing, paid, failed
  stripe_transfer_id VARCHAR(255),
  period_start DATE,
  period_end DATE,
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Community & Engagement
```sql
-- Discussion threads
CREATE TABLE discussion_threads (
  id UUID PRIMARY KEY,
  course_id UUID REFERENCES courses(id),
  lesson_id UUID REFERENCES lessons(id),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content_html TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Discussion replies
CREATE TABLE discussion_replies (
  id UUID PRIMARY KEY,
  thread_id UUID REFERENCES discussion_threads(id) ON DELETE CASCADE,
  parent_reply_id UUID REFERENCES discussion_replies(id),
  user_id UUID REFERENCES users(id),
  content_html TEXT NOT NULL,
  is_solution BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz attempts
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  lesson_id UUID REFERENCES lessons(id),
  score DECIMAL(5,2),
  max_score DECIMAL(5,2),
  passed BOOLEAN,
  answers JSONB,
  time_spent_seconds INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Certificates
CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  certificate_number VARCHAR(50) UNIQUE,
  issued_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  verification_url TEXT,
  pdf_url TEXT
);
```

---

## 4. API Design

### RESTful API Structure

```
Base URL: https://api.courseflowpro.com/v1

Authentication: Bearer Token (JWT)

Endpoints:
├── /auth
│   ├── POST /register
│   ├── POST /login
│   ├── POST /logout
│   ├── POST /refresh
│   └── POST /forgot-password
│
├── /users
│   ├── GET /me
│   ├── PUT /me
│   ├── GET /me/courses
│   └── GET /me/enrollments
│
├── /courses
│   ├── GET / (list courses)
│   ├── POST / (create course)
│   ├── GET /:id
│   ├── PUT /:id
│   ├── DELETE /:id
│   ├── POST /:id/publish
│   └── GET /:id/students
│
├── /lessons
│   ├── POST / (create lesson)
│   ├── PUT /:id
│   ├── DELETE /:id
│   └── POST /:id/reorder
│
├── /enrollments
│   ├── POST / (enroll student)
│   ├── GET /:id
│   ├── DELETE /:id
│   └── GET /:id/progress
│
├── /payments
│   ├── POST /checkout
│   ├── POST /create-payment-intent
│   ├── GET /orders/:id
│   └── POST /webhooks/stripe
│
├── /memberships
│   ├── GET /tiers
│   ├── POST /tiers
│   ├── PUT /tiers/:id
│   └── POST /subscribe
│
├── /community
│   ├── GET /threads
│   ├── POST /threads
│   ├── GET /threads/:id
│   ├── POST /threads/:id/replies
│   └── POST /threads/:id/reactions
│
├── /analytics
│   ├── GET /dashboard
│   ├── GET /revenue
│   ├── GET /students
│   └── GET /courses/:id/performance
│
└── /integrations
    ├── GET / (list integrations)
    ├── POST /:provider/connect
    └── DELETE /:provider/disconnect
```

### GraphQL API (Optional)

For complex queries and real-time features:

```graphql
type Query {
  course(id: ID!): Course
  courses(creatorId: ID, status: CourseStatus): [Course!]!
  enrollment(courseId: ID!): Enrollment
  myProgress(courseId: ID!): CourseProgress
  communityThreads(courseId: ID!, limit: Int): [Thread!]!
}

type Mutation {
  createCourse(input: CourseInput!): Course!
  updateCourse(id: ID!, input: CourseInput!): Course!
  enrollInCourse(courseId: ID!, paymentMethodId: ID!): Enrollment!
  completeLesson(lessonId: ID!): LessonProgress!
  submitQuiz(lessonId: ID!, answers: [AnswerInput!]!): QuizResult!
  createThread(courseId: ID!, title: String!, content: String!): Thread!
}

type Subscription {
  lessonProgressUpdated(enrollmentId: ID!): LessonProgress!
  newReply(threadId: ID!): Reply!
  paymentReceived(creatorId: ID!): Payment!
}
```

---

## 5. Video Infrastructure

### Video Processing Pipeline

```
Upload → Transcoding → Storage → CDN → Playback
   │          │           │        │        │
   │          │           │        │        └─► Adaptive bitrate streaming
   │          │           │        └─► Global edge caching
   │          │           └─► S3 bucket (encrypted)
   │          └─► Multiple resolutions (360p, 480p, 720p, 1080p, 4K)
   └─► Original file (temporary)
```

### Video Specifications

| Specification | Details |
|---------------|---------|
| Supported Formats | MP4, MOV, AVI, MKV, WebM |
| Max File Size | 10 GB per video |
| Max Resolution | 4K (3840x2160) |
| Codec | H.264 (baseline), H.265 (optional) |
| Audio Codec | AAC, 128kbps minimum |
| Transcoding Profiles | 360p, 480p, 720p, 1080p, 1440p, 2160p |
| DRM | Optional (Widevine, FairPlay, PlayReady) |
| Captions | WebVTT, SRT auto-generation |

### Video Security

1. **Signed URLs**: Time-limited access tokens
2. **Domain Restrictions**: Embed only on allowed domains
3. **Geo-Blocking**: Restrict by country/region
4. **IP Restrictions**: Limit to specific IP ranges
5. **Token Authentication**: Require valid session token
6. **Download Prevention**: Disable download option (streaming only)

---

## 6. Payment Processing

### Stripe Integration

```javascript
// Payment Intent Creation
const paymentIntent = await stripe.paymentIntents.create({
  amount: coursePrice * 100, // cents
  currency: 'usd',
  payment_method_types: ['card', 'apple_pay', 'google_pay'],
  metadata: {
    courseId: course.id,
    userId: user.id,
    platformFee: platformFee.toString(),
  },
  application_fee_amount: platformFee * 100,
  transfer_data: {
    destination: creatorStripeAccountId,
  },
});
```

### Payout Schedule

| Plan | Payout Frequency | Minimum Threshold |
|------|------------------|-------------------|
| Starter | Weekly | $50 |
| Growth | Weekly | $25 |
| Pro | Twice weekly | $25 |
| Enterprise | Daily | $10 |

### Supported Payment Methods

- **Credit/Debit Cards**: Visa, Mastercard, Amex, Discover
- **Digital Wallets**: Apple Pay, Google Pay
- **Bank Transfer**: ACH (US), SEPA (EU)
- **Buy Now Pay Later**: Klarna, Afterpay (region-dependent)
- **Cryptocurrency**: USDC, BTC (via Coinbase Commerce integration)

---

## 7. Security & Compliance

### Security Measures

| Layer | Implementation |
|-------|----------------|
| Network | VPC, Security Groups, WAF, DDoS protection |
| Application | Input validation, SQL injection prevention, XSS protection |
| Authentication | JWT tokens, refresh tokens, MFA support |
| Authorization | RBAC (Role-Based Access Control) |
| Data Encryption | AES-256 at rest, TLS 1.3 in transit |
| Secrets Management | AWS Secrets Manager / HashiCorp Vault |
| Audit Logging | All sensitive actions logged |

### Compliance

- **GDPR**: Data subject rights, consent management, data portability
- **CCPA**: California consumer privacy compliance
- **SOC 2 Type II**: Annual audit for enterprise customers
- **PCI DSS**: Level 1 compliance via Stripe (no card data stored)
- **COPPA**: Age verification for under-13 users
- **Accessibility**: WCAG 2.1 AA compliance

### Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| User Accounts | Until deletion request |
| Course Content | Until creator deletion |
| Payment Records | 7 years (legal requirement) |
| Analytics Data | 2 years (aggregated) |
| Logs | 90 days (hot), 1 year (cold) |
| Backups | 30 days rolling |

---

## 8. Scalability & Performance

### Target Metrics

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 2 seconds |
| Video Start Time | < 2 seconds |
| Uptime SLA | 99.9% (Enterprise: 99.99%) |
| Concurrent Users | 100,000+ |
| Video Streams | 50,000+ concurrent |

### Scaling Strategy

```
Horizontal Scaling:
├── Stateless API servers (auto-scale based on CPU/memory)
├── Database read replicas for read-heavy operations
├── Redis cluster for session/cache scaling
├── CDN for static assets and video
└── Queue workers (auto-scale based on queue depth)

Database Scaling:
├── Read/Write splitting
├── Connection pooling (PgBouncer)
├── Query optimization and indexing
├── Partitioning for large tables (enrollments, progress)
└── Archive old data to cold storage

Caching Strategy:
├── L1: In-memory cache (node-local)
├── L2: Redis cluster (shared cache)
├── L3: CDN edge cache (static assets)
└── Cache invalidation via pub/sub
```

---

## 9. Monitoring & Observability

### Monitoring Stack

| Tool | Purpose |
|------|---------|
| Datadog | Infrastructure & APM monitoring |
| Sentry | Error tracking and alerting |
| LogDNA / ELK | Log aggregation and analysis |
| Statuspage | Public status page |
| Pingdom | Uptime monitoring |

### Key Metrics to Track

```
Business Metrics:
├── MRR / ARR
├── Active Creators
├── Active Students
├── Course Enrollment Rate
├── Conversion Rate (visitor → student)
├── Churn Rate (creator & student)
└── LTV / CAC

Technical Metrics:
├── API Response Times (p50, p95, p99)
├── Error Rates (4xx, 5xx)
├── Database Query Performance
├── Cache Hit Rates
├── Queue Processing Time
├── Video Transcoding Time
└── CDN Cache Hit Rate

Alerting Thresholds:
├── API Error Rate > 1% (5-minute window)
├── API p95 Latency > 500ms (5-minute window)
├── Database CPU > 80% (10-minute window)
├── Disk Usage > 85%
├── Queue Depth > 10,000 jobs
└── Uptime < 99.9% (rolling 30-day)
```

---

## 10. Disaster Recovery

### Backup Strategy

| Component | Frequency | Retention |
|-----------|-----------|-----------|
| PostgreSQL | Continuous (WAL) + Daily snapshot | 30 days |
| S3 (files) | Versioning enabled | Indefinite |
| Redis | Daily snapshot | 7 days |
| Config (K8s) | GitOps (version controlled) | Indefinite |

### Recovery Objectives

- **RTO (Recovery Time Objective)**: 4 hours
- **RPO (Recovery Point Objective)**: 1 hour

### Failover Strategy

1. **Multi-AZ Deployment**: Primary infrastructure across 3 availability zones
2. **Database Failover**: Automatic failover to standby replica
3. **DNS Failover**: Route53 health checks with failover routing
4. **Regional Redundancy**: Optional multi-region for Enterprise

---

*This architecture is designed to scale from 0 to 100K+ users while maintaining performance and security.*
