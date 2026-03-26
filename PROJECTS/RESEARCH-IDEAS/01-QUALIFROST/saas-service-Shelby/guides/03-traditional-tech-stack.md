# Traditional SaaS Tech Stack Guide

Recommended technology stacks for building scalable SaaS products with code.

---

## Stack Recommendations by Use Case

### 🏆 Recommended Full Stack: T3 Stack
**Best for:** Most SaaS startups, rapid development, type safety

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | Next.js 14+ | React framework, SSR, App Router |
| Language | TypeScript | Type safety, better DX |
| Backend | Next.js API Routes / tRPC | Type-safe APIs |
| Database | PostgreSQL | Reliable, scalable |
| ORM | Prisma | Type-safe database access |
| Auth | NextAuth.js / Clerk | Easy integration |
| Hosting | Vercel | Zero config, edge functions |
| Payments | Stripe | Industry standard |

**Getting Started:**
```bash
npx create-t3-app@latest
```

---

### 🚀 High Performance Stack
**Best for:** Real-time apps, high traffic, complex backend logic

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | React + Vite | Fast builds, great DX |
| Backend | Go / Rust | Performance, concurrency |
| API | GraphQL / REST | Flexible data fetching |
| Database | PostgreSQL + Redis | Primary + caching |
| Real-time | WebSocket / Socket.io | Live updates |
| Message Queue | Redis Streams / Kafka | Async processing |
| Hosting | AWS / GCP | Full control |
| Container | Docker + Kubernetes | Scalability |

---

### 💰 Budget-Friendly Stack
**Best for:** Solo founders, MVPs, bootstrapped startups

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | Next.js | Free hosting on Vercel |
| Backend | Next.js API | Same codebase |
| Database | Supabase | Free tier, PostgreSQL |
| Auth | Supabase Auth | Included free |
| Storage | Supabase Storage | Included free |
| Email | Resend | Free 100/day |
| Hosting | Vercel + Supabase | Generous free tiers |
| **Monthly Cost** | **$0-50** | **To start** |

---

### 🏢 Enterprise Stack
**Best for:** Large teams, compliance needs, complex requirements

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | React / Angular | Enterprise support |
| Backend | Java Spring / .NET | Enterprise patterns |
| Database | PostgreSQL / Oracle | Enterprise features |
| Cache | Redis Enterprise | High availability |
| Search | Elasticsearch | Advanced search |
| Message Queue | Kafka | High throughput |
| Monitoring | Datadog / New Relic | Enterprise observability |
| Hosting | AWS / Azure / GCP | Enterprise SLAs |
| CI/CD | GitHub Enterprise | Security, compliance |

---

## Frontend Options

### React Ecosystem
| Framework | Best For | Learning Curve |
|-----------|----------|----------------|
| **Next.js** | Most SaaS apps | Medium |
| **Remix** | Dynamic apps, forms | Medium |
| **Vite + React** | SPAs, dashboards | Easy |
| **Gatsby** | Content-heavy sites | Medium |

### Alternative Frameworks
| Framework | Best For | Notes |
|-----------|----------|-------|
| **Vue.js + Nuxt** | Teams preferring Vue | Great DX |
| **Svelte + SvelteKit** | Performance-focused | Smaller ecosystem |
| **Solid.js** | Maximum performance | Growing community |
| **Astro** | Content sites | Partial hydration |

### UI Component Libraries
| Library | Style | Best For |
|---------|-------|----------|
| **shadcn/ui** | Customizable | Modern SaaS |
| **Tailwind UI** | Professional | Quick setup |
| **Chakra UI** | Accessible | Rapid prototyping |
| **Mantine** | Feature-rich | Complex apps |
| **Ant Design** | Enterprise | Admin dashboards |

---

## Backend Options

### Node.js/TypeScript
**Best for:** Full-stack TypeScript, rapid development

```typescript
// Express.js example
import express from 'express';
const app = express();

app.post('/api/users', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body
  });
  res.json(user);
});
```

**Frameworks:**
- Express.js (minimal, flexible)
- Fastify (performance-focused)
- NestJS (enterprise, Angular-like)
- Hono (edge-ready, lightweight)

### Python
**Best for:** Data-heavy apps, AI/ML integration

**Frameworks:**
- FastAPI (modern, fast, async)
- Django (batteries included)
- Flask (minimal, flexible)

```python
# FastAPI example
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

@app.post("/users")
async def create_user(user: User):
    return {"message": f"Created {user.name}"}
```

### Go
**Best for:** High performance, microservices

```go
// Gin framework example
func createUser(c *gin.Context) {
    var user User
    c.BindJSON(&user)
    db.Create(&user)
    c.JSON(201, user)
}
```

### Rust
**Best for:** Maximum performance, safety-critical

**Frameworks:**
- Actix-web (performance)
- Axum (ergonomic, Tokio)
- Rocket (developer experience)

---

## Database Options

### PostgreSQL (Recommended Default)
**Why:** Reliable, scalable, great ecosystem

**Managed Options:**
| Provider | Free Tier | Starting Paid |
|----------|-----------|---------------|
| Supabase | 500MB | $25/mo |
| Neon | 500MB | $19/mo |
| Railway | 512MB | $5/mo |
| AWS RDS | None | $15/mo |
| Google Cloud SQL | None | $10/mo |

### MySQL
**When to use:** Legacy compatibility, specific tool requirements

### MongoDB
**When to use:** Flexible schema, document-based data, rapid prototyping

**Managed Options:**
- MongoDB Atlas (official)
- PlanetScale (MySQL-compatible, serverless)

### SQLite
**When to use:** Simple apps, edge computing, local-first

**Options:**
- SQLite (standard)
- LibSQL (HTTP API)
- Turso (edge-optimized)

### Specialized Databases
| Type | Use Case | Options |
|------|----------|---------|
| Time-series | Metrics, IoT | TimescaleDB, InfluxDB |
| Graph | Relationships | Neo4j |
| Search | Full-text | Elasticsearch, Meilisearch |
| Cache | Sessions, speed | Redis, Memcached |
| Vector | AI embeddings | Pinecone, Weaviate, pgvector |

---

## Authentication

### Quick Start Options
| Service | Free Tier | Pricing | Best For |
|---------|-----------|---------|----------|
| **Clerk** | 10K MAU | $25/mo after | Most SaaS |
| **Auth0** | 7K MAU | Custom | Enterprise |
| **Supabase Auth** | 50K MAU | $25/mo after | Budget |
| **NextAuth.js** | Free | Free | Next.js apps |
| **Lucia** | Free | Free | Custom control |

### Implementation Example (Clerk + Next.js)
```typescript
// Middleware for protected routes
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/pricing"]
});

// Access user in API
import { auth } from "@clerk/nextjs";
const { userId } = auth();
```

---

## Hosting & Deployment

### Frontend Hosting
| Provider | Best For | Starting Price |
|----------|----------|----------------|
| **Vercel** | Next.js | Free |
| **Netlify** | Static sites | Free |
| **Cloudflare Pages** | Edge functions | Free |
| **AWS Amplify** | AWS ecosystem | Free tier |

### Backend Hosting
| Provider | Best For | Starting Price |
|----------|----------|----------------|
| **Railway** | Simple deployment | $5/mo |
| **Render** | Full-stack apps | Free tier |
| **Fly.io** | Edge deployment | Free tier |
| **AWS ECS** | Scale, control | Variable |
| **Google Cloud Run** | Serverless containers | Pay per use |

### Full-Stack Platforms
| Provider | Best For | Notes |
|----------|----------|-------|
| **Vercel** | Next.js apps | Edge functions |
| **Netlify** | JAMstack | Functions included |
| **Railway** | Any stack | Simple UI |
| **Render** | Full-stack | PostgreSQL included |

---

## Essential Services

### Payments
| Service | Fees | Best For |
|---------|------|----------|
| **Stripe** | 2.9% + 30¢ | Most SaaS |
| **Paddle** | 5% + 50¢ | Global, tax handling |
| **Lemon Squeezy** | 5% + 50¢ | Digital products |
| **Chargebee** | Custom | Subscription management |

### Email
| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Resend** | 100/day | Developer experience |
| **Postmark** | 100/mo trial | Transactional |
| **SendGrid** | 100/day | Scale |
| **SES** | 62K/mo free | AWS users, cost |

### File Storage
| Service | Free Tier | Pricing |
|---------|-----------|---------|
| **Supabase Storage** | 1GB | $0.021/GB |
| **AWS S3** | None | $0.023/GB |
| **Cloudflare R2** | 10GB | $0.015/GB |
| **UploadThing** | 2GB | $24/mo after |

### Analytics
| Service | Free Tier | Best For |
|---------|-----------|----------|
| **PostHog** | 1M events | Product analytics |
| **Plausible** | 10K pageviews | Privacy-focused |
| **Google Analytics** | Unlimited | Standard web |
| **Mixpanel** | 100K events | User analytics |

### Monitoring
| Service | Free Tier | Purpose |
|---------|-----------|---------|
| **Sentry** | 5K errors | Error tracking |
| **Better Uptime** | 3 monitors | Uptime monitoring |
| **Logtail** | 200MB | Log management |
| **Prometheus + Grafana** | Self-hosted | Metrics |

---

## Recommended Stack Combinations

### 🥇 Best Overall (T3 Stack)
```
Next.js 14 + TypeScript + Prisma + PostgreSQL + NextAuth + Tailwind
Hosting: Vercel + Supabase/Neon
Cost: $0-50/mo to start
```

### 🥈 Best for Performance
```
React + Vite + Go + PostgreSQL + Redis
Hosting: AWS/GCP with Docker
Cost: $50-200/mo to start
```

### 🥉 Best for Bootstrappers
```
Next.js + Supabase (Auth, DB, Storage) + Resend
Hosting: Vercel + Supabase
Cost: $0/mo to start
```

### 🏢 Best for Enterprise
```
React + NestJS + PostgreSQL + Redis + Kafka
Hosting: AWS EKS + RDS
Cost: $500+/mo
```

---

## Architecture Patterns

### Monolith (Start Here)
```
┌─────────────────────────────────┐
│         Next.js App             │
│  ┌─────────┐  ┌──────────────┐  │
│  │  Pages  │  │  API Routes  │  │
│  └─────────┘  └──────────────┘  │
│              │                   │
│         ┌────┴────┐             │
│         │ Prisma  │             │
│         └────┬────┘             │
└──────────────┼──────────────────┘
               │
        ┌──────┴──────┐
        │  PostgreSQL │
        └─────────────┘
```

### Microservices (Scale Later)
```
┌─────────┐  ┌─────────┐  ┌─────────┐
│   API   │  │  Auth   │  │Payments │
│ Gateway │  │ Service │  │ Service │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┼────────────┘
                  │
        ┌─────────┴─────────┐
        │   Message Queue   │
        └─────────┬─────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───┴───┐   ┌─────┴─────┐ ┌────┴────┐
│ Users │   │ Orders    │ │ Notifs  │
│  DB   │   │    DB     │ │    DB   │
└───────┘   └───────────┘ └─────────┘
```

---

## Security Checklist

- [ ] HTTPS everywhere
- [ ] Environment variables for secrets
- [ ] Input validation (Zod, Yup)
- [ ] SQL injection prevention (ORM)
- [ ] XSS protection (framework default)
- [ ] CSRF protection
- [ ] Rate limiting on APIs
- [ ] Authentication on protected routes
- [ ] Authorization checks
- [ ] Regular dependency updates
- [ ] Security headers (CSP, HSTS)
- [ ] Backup strategy

---

## Development Tools

### Essential
- **VS Code** + extensions
- **Git** + GitHub/GitLab
- **Docker** (local development)
- **Postman** / **Insomnia** (API testing)

### Nice to Have
- **Linear** / **Jira** (project management)
- **Figma** (design)
- **Storybook** (component development)
- **Playwright** / **Cypress** (E2E testing)
- **GitHub Actions** (CI/CD)

---

## Cost Estimation

### MVP Stage (< 1K users)
| Service | Cost |
|---------|------|
| Hosting | $0-20 |
| Database | $0-25 |
| Auth | $0-25 |
| Email | $0-20 |
| Analytics | $0 |
| **Total** | **$0-90/mo** |

### Growth Stage (1K-10K users)
| Service | Cost |
|---------|------|
| Hosting | $50-100 |
| Database | $50-100 |
| Auth | $25-50 |
| Email | $20-50 |
| Analytics | $0-50 |
| Monitoring | $25-50 |
| **Total** | **$170-400/mo** |

### Scale Stage (10K+ users)
| Service | Cost |
|---------|------|
| Infrastructure | $500-2000 |
| Database | $200-500 |
| CDN | $100-300 |
| Monitoring | $100-300 |
| Support tools | $100-300 |
| **Total** | **$1000-3400/mo** |

---

*Guide Version: 1.0 | Last Updated: 2026*
