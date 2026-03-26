# LinkFlow - Technical Specifications

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │  Landing     │  │  Creator     │  │  Public      │                  │
│  │  Pages       │  │  Dashboard   │  │  Link Pages  │                  │
│  │  (Next.js)   │  │  (Next.js)   │  │  (Next.js)   │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTPS / API
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          API LAYER                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                    Next.js API Routes                             │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐         │   │
│  │  │  Auth    │  │  Links   │  │ Products │  │Payments  │         │   │
│  │  │  /api/*  │  │  /api/*  │  │  /api/*  │  │  /api/*  │         │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘         │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Internal API Calls
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │   Supabase   │  │    Stripe    │  │   SendGrid   │  │    Vercel  │  │
│  │  PostgreSQL  │  │   Payments   │  │    Email     │  │   Storage  │  │
│  │  + Auth      │  │   + Billing  │  │  Marketing   │  │   (Files)  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Tech Stack Overview

### Frontend
| Technology | Purpose | Why |
|------------|---------|-----|
| **Next.js 14** | Framework | SSR, API routes, Vercel deployment |
| **React 18** | UI Library | Component-based, ecosystem |
| **TypeScript** | Language | Type safety, better DX |
| **Tailwind CSS** | Styling | Rapid development, consistent design |
| **shadcn/ui** | Components | Beautiful, accessible, customizable |
| **React Query** | Data Fetching | Caching, background updates |
| **Zustand** | State Management | Simple, lightweight |
| **React Hook Form** | Forms | Performance, validation |
| **Zod** | Validation | Schema validation, type inference |

### Backend
| Technology | Purpose | Why |
|------------|---------|-----|
| **Next.js API Routes** | API Layer | Co-located with frontend, serverless |
| **Supabase** | Database + Auth | PostgreSQL, real-time, built-in auth |
| **Stripe** | Payments | Industry standard, creator-friendly |
| **SendGrid** | Email | Reliable, good deliverability |
| **Vercel Blob** | File Storage | Simple, integrated with Vercel |
| **Upstash Redis** | Caching | Fast, serverless Redis |

### DevOps & Infrastructure
| Technology | Purpose | Why |
|------------|---------|-----|
| **Vercel** | Hosting | Optimized for Next.js, edge functions |
| **Supabase** | Database | Managed PostgreSQL, auto-scaling |
| **GitHub Actions** | CI/CD | Integrated, reliable |
| **Sentry** | Error Tracking | Real-time error monitoring |
| **Vercel Analytics** | Performance | Built-in, privacy-friendly |
| **PostHog** | Product Analytics | Open-source, self-hostable |

---

## 🗄️ Database Schema

### Core Tables

```sql
-- Users (managed by Supabase Auth, extended with profiles)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  tier TEXT DEFAULT 'free' CHECK (tier IN ('free', 'starter', 'pro', 'enterprise')),
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pages (link-in-bio pages)
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  cover_image_url TEXT,
  theme_id UUID REFERENCES themes(id),
  custom_domain TEXT UNIQUE,
  is_published BOOLEAN DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  seo_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Links
CREATE TABLE links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  icon TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  schedule_start TIMESTAMPTZ,
  schedule_end TIMESTAMPTZ,
  geo_target JSONB,
  device_target TEXT[],
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- cents
  currency TEXT DEFAULT 'USD',
  type TEXT CHECK (type IN ('digital', 'course', 'membership', 'consultation', 'physical')),
  file_urls TEXT[],
  file_size_bytes BIGINT,
  inventory_count INTEGER, -- for physical products
  stripe_product_id TEXT,
  stripe_price_id TEXT,
  is_active BOOLEAN DEFAULT true,
  sales_count INTEGER DEFAULT 0,
  revenue_cents BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  customer_email TEXT NOT NULL,
  customer_name TEXT,
  product_id UUID REFERENCES products(id),
  amount_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'USD',
  stripe_payment_intent_id TEXT UNIQUE,
  status TEXT CHECK (status IN ('pending', 'completed', 'refunded', 'failed')),
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tips
CREATE TABLE tips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  tipper_name TEXT,
  tipper_email TEXT,
  amount_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'USD',
  message TEXT,
  is_anonymous BOOLEAN DEFAULT false,
  stripe_payment_intent_id TEXT UNIQUE,
  status TEXT CHECK (status IN ('pending', 'completed', 'refunded', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Email Subscribers
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'unsubscribed', 'bounced')),
  confirm_token TEXT UNIQUE,
  confirmed_at TIMESTAMPTZ,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page_id, email)
);

-- Analytics Events
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- 'page_view', 'link_click', 'product_view', 'purchase', 'tip', 'email_signup'
  event_data JSONB,
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Themes
CREATE TABLE themes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  preview_image_url TEXT,
  config JSONB NOT NULL, -- colors, fonts, layout
  is_premium BOOLEAN DEFAULT false,
  creator_id UUID REFERENCES profiles(id),
  sales_count INTEGER DEFAULT 0,
  revenue_cents BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- API Keys (for Pro/Enterprise)
CREATE TABLE api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  key_hash TEXT UNIQUE NOT NULL,
  permissions TEXT[],
  rate_limit INTEGER DEFAULT 1000, -- requests per hour
  last_used_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Webhooks
CREATE TABLE webhooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  events TEXT[] NOT NULL,
  secret TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Indexes

```sql
-- Performance indexes
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_user_id ON pages(user_id);
CREATE INDEX idx_pages_custom_domain ON pages(custom_domain);
CREATE INDEX idx_links_page_id ON links(page_id);
CREATE INDEX idx_links_order ON links(page_id, order_index);
CREATE INDEX idx_products_user_id ON products(user_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_stripe_id ON orders(stripe_payment_intent_id);
CREATE INDEX idx_tips_page_id ON tips(page_id);
CREATE INDEX idx_subscribers_page_id ON subscribers(page_id);
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_analytics_page_id ON analytics_events(page_id);
CREATE INDEX idx_analytics_created_at ON analytics_events(created_at);
CREATE INDEX idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_created_at_page ON analytics_events(created_at, page_id);
```

### Row Level Security (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE links ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can only view/update their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Pages: Public pages are viewable by anyone, but only owners can modify
CREATE POLICY "Public pages are viewable" ON pages
  FOR SELECT USING (is_published = true OR auth.uid() = user_id);

CREATE POLICY "Users can manage own pages" ON pages
  FOR ALL USING (auth.uid() = user_id);

-- Links: Only page owners can manage, but links are readable for published pages
CREATE POLICY "Links readable for published pages" ON links
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM pages WHERE pages.id = links.page_id AND pages.is_published = true)
    OR auth.uid() IN (SELECT user_id FROM pages WHERE pages.id = links.page_id)
  );

CREATE POLICY "Users can manage own links" ON links
  FOR ALL USING (
    auth.uid() IN (SELECT user_id FROM pages WHERE pages.id = links.page_id)
  );

-- Products: Only owners can manage
CREATE POLICY "Users can manage own products" ON products
  FOR ALL USING (auth.uid() = user_id);

-- Analytics: Only page owners can view analytics
CREATE POLICY "Users can view own analytics" ON analytics_events
  FOR SELECT USING (
    auth.uid() IN (SELECT user_id FROM pages WHERE pages.id = analytics_events.page_id)
  );
```

---

## 🔌 API Specification

### Authentication

All API routes (except public page endpoints) require authentication via Supabase JWT.

```typescript
// Middleware for API routes
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  const supabase = createServerClient(...)
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  return NextResponse.next({
    headers: { 'x-user-id': session.user.id }
  })
}
```

### REST API Endpoints

#### Pages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages` | List user's pages |
| POST | `/api/pages` | Create new page |
| GET | `/api/pages/:id` | Get page details |
| PUT | `/api/pages/:id` | Update page |
| DELETE | `/api/pages/:id` | Delete page |
| GET | `/api/pages/:slug/public` | Get public page (no auth) |
| POST | `/api/pages/:id/publish` | Publish page |
| POST | `/api/pages/:id/unpublish` | Unpublish page |

#### Links

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages/:pageId/links` | List page links |
| POST | `/api/pages/:pageId/links` | Create link |
| PUT | `/api/links/:id` | Update link |
| DELETE | `/api/links/:id` | Delete link |
| PATCH | `/api/links/:id/reorder` | Reorder links |
| POST | `/api/links/:id/click` | Track click (public) |

#### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List user's products |
| POST | `/api/products` | Create product |
| GET | `/api/products/:id` | Get product details |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| POST | `/api/products/:id/checkout` | Create checkout session |

#### Tips

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages/:pageId/tips` | List tips (owner only) |
| POST | `/api/pages/:pageId/tips` | Create tip (public) |
| GET | `/api/tips/:id` | Get tip details |

#### Subscribers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages/:pageId/subscribers` | List subscribers |
| POST | `/api/pages/:pageId/subscribers` | Add subscriber (public) |
| POST | `/api/subscribers/:id/confirm` | Confirm subscription |
| DELETE | `/api/subscribers/:id` | Unsubscribe |

#### Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages/:pageId/analytics` | Get page analytics |
| GET | `/api/pages/:pageId/analytics/clicks` | Get click analytics |
| GET | `/api/pages/:pageId/analytics/revenue` | Get revenue analytics |
| GET | `/api/analytics/export` | Export analytics (CSV) |

#### Billing

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/billing/subscription` | Get subscription details |
| POST | `/api/billing/checkout` | Create checkout session |
| POST | `/api/billing/portal` | Create portal session |
| POST | `/api/billing/webhook` | Stripe webhook handler |

### API Response Format

```typescript
// Success response
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "perPage": 20,
    "total": 100
  }
}

// Error response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
```

### Rate Limiting

| Tier | Rate Limit | Burst |
|------|------------|-------|
| Free | 100 req/hour | 20 req/minute |
| Starter | 500 req/hour | 50 req/minute |
| Pro | 1000 req/hour | 100 req/minute |
| Enterprise | Custom | Custom |

Implemented using Upstash Redis with sliding window.

---

## 🔐 Security

### Authentication & Authorization

- **Supabase Auth:** JWT-based authentication
- **Session Management:** Secure HTTP-only cookies
- **2FA:** TOTP-based two-factor authentication
- **Password Requirements:** Min 8 chars, complexity rules
- **Session Timeout:** 30 days (configurable)

### Data Protection

- **Encryption at Rest:** Supabase default (AES-256)
- **Encryption in Transit:** TLS 1.3
- **PII Handling:** Minimal collection, encrypted storage
- **Data Retention:** User-controlled deletion

### Payment Security

- **PCI Compliance:** Stripe handles all card data (SAQ A)
- **Webhook Verification:** Stripe signature verification
- **Idempotency:** All payment operations idempotent
- **Fraud Detection:** Stripe Radar integration

### API Security

- **Rate Limiting:** Per-user, per-endpoint limits
- **CORS:** Strict origin policies
- **Input Validation:** Zod schemas on all inputs
- **SQL Injection:** Parameterized queries (Supabase)
- **XSS Prevention:** React default escaping, CSP headers

### Infrastructure Security

- **Vercel:** SOC 2 Type II certified
- **Supabase:** SOC 2 Type II certified
- **Stripe:** PCI DSS Level 1 certified
- **SendGrid:** SOC 2 certified

---

## 📊 Performance Targets

### Page Load Times

| Metric | Target | Budget |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 3.0s |
| FID (First Input Delay) | < 100ms | 150ms |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.15 |
| TTFB (Time to First Byte) | < 200ms | 400ms |
| TTI (Time to Interactive) | < 3.5s | 5.0s |

### API Response Times

| Endpoint Type | P50 | P95 | P99 |
|---------------|-----|-----|-----|
| Read (GET) | < 100ms | < 300ms | < 500ms |
| Write (POST/PUT) | < 200ms | < 500ms | < 1000ms |
| Complex Queries | < 500ms | < 1000ms | < 2000ms |

### Uptime SLA

| Tier | Uptime | Credits |
|------|--------|---------|
| Free | 99.0% | None |
| Starter | 99.5% | 10% credit |
| Pro | 99.9% | 25% credit |
| Enterprise | 99.99% | 50% credit |

---

## 🔄 Scalability

### Horizontal Scaling Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                     Vercel Edge Network                      │
│                    (Global CDN + Edge Functions)             │
└─────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
  │  US-East    │     │  EU-West    │     │  Asia-East  │
  │  Functions  │     │  Functions  │     │  Functions  │
  └─────────────┘     └─────────────┘     └─────────────┘
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Supabase      │
                    │   (Primary DB)  │
                    │   US-East       │
                    └─────────────────┘
```

### Caching Strategy

| Layer | Technology | TTL |
|-------|------------|-----|
| CDN | Vercel Edge | 1 hour (static) |
| Edge Cache | Vercel KV | 5 minutes (dynamic) |
| Application | Upstash Redis | 1 minute (hot data) |
| Database | Supabase | Query-level |

### Database Scaling

- **Read Replicas:** Supabase automatic (Pro+)
- **Connection Pooling:** Supabase built-in
- **Query Optimization:** Indexed queries, pagination
- **Archival:** Old analytics to cold storage (annual)

---

## 🧪 Testing Strategy

### Test Types

| Type | Coverage | Tools |
|------|----------|-------|
| Unit Tests | 80%+ | Vitest, React Testing Library |
| Integration Tests | Critical paths | Playwright |
| E2E Tests | Happy paths | Playwright |
| Visual Tests | Key pages | Chromatic |
| Load Tests | API endpoints | k6 |
| Security Tests | OWASP Top 10 | OWASP ZAP |

### CI/CD Pipeline

```yaml
# GitHub Actions
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run test:e2e
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📈 Monitoring & Observability

### Error Tracking

- **Sentry:** Real-time error monitoring
- **Alerts:** Slack notifications for critical errors
- **Source Maps:** Production debugging

### Performance Monitoring

- **Vercel Analytics:** Core Web Vitals
- **Custom Metrics:** API response times, error rates
- **Dashboards:** Grafana (self-hosted)

### Logging

- **Application Logs:** Vercel Functions logs
- **Database Logs:** Supabase logs
- **Access Logs:** Vercel edge logs
- **Retention:** 30 days (90 days Pro)

### Alerting

| Severity | Response Time | Channel |
|----------|---------------|---------|
| P0 (Critical) | 15 minutes | PagerDuty + Slack |
| P1 (High) | 1 hour | Slack |
| P2 (Medium) | 4 hours | Email |
| P3 (Low) | 24 hours | Email |

---

## 🚀 Deployment

### Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | localhost:3000 | Local development |
| Preview | *.vercel.app | PR previews |
| Staging | staging.linkflow.com | Pre-production testing |
| Production | linkflow.com | Live production |

### Deployment Process

1. **Development:** Feature branches, local testing
2. **Pull Request:** Auto-deploy to preview, run tests
3. **Merge to Develop:** Auto-deploy to staging
4. **Release:** Manual promotion to production
5. **Post-Deploy:** Smoke tests, monitoring

### Rollback Strategy

- **Vercel:** Instant rollback to previous deployment
- **Database:** Supabase point-in-time recovery
- **Feature Flags:** LaunchDarkly for gradual rollouts

---

*Last Updated: March 2026*
