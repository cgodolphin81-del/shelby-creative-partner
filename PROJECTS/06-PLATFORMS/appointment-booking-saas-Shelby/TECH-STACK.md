# BookFlow - Technology Stack

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   Web App       │   Mobile Apps   │   Embedded Widgets          │
│   (React)       │   (React Nat.)  │   (React/Vanilla JS)        │
└────────┬────────┴────────┬────────┴──────────────┬──────────────┘
         │                 │                       │
         ▼                 ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API Gateway                              │
│                    (Kong / AWS API Gateway)                      │
└─────────────────────────────┬───────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌───────────────────────┐
│  Booking API    │  │  Webhook API    │  │  Public API           │
│  (Node.js)      │  │  (Node.js)      │  │  (GraphQL/REST)       │
└────────┬────────┘  └────────┬────────┘  └──────────┬────────────┘
         │                    │                       │
         ▼                    ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Message Queue                               │
│                    (Redis / Bull / SQS)                          │
└─────────────────────────────┬───────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌───────────────────────┐
│  Calendar Sync  │  │  Notification   │  │  Payment Processing   │
│  Worker         │  │  Worker         │  │  Worker               │
└────────┬────────┘  └────────┬────────┘  └──────────┬────────────┘
         │                    │                       │
         ▼                    ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Data Layer                                  │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   PostgreSQL    │   Redis Cache   │   S3 (Assets)               │
│   (Primary DB)  │   (Session/Cache)│                             │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

---

## Frontend Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI framework |
| Next.js | 14.x | SSR, routing, API routes |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| shadcn/ui | Latest | Component library |

### State Management

| Library | Use Case |
|---------|----------|
| Zustand | Global state |
| React Query | Server state, caching |
| React Hook Form | Form handling |
| Zod | Schema validation |

### Key Frontend Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "^0.300.0",
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.4.0",
    "react-hook-form": "^7.49.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "date-fns": "^3.0.0",
    "@calendar-tools/react": "latest",
    "stripe-js": "^3.0.0",
    "framer-motion": "^10.0.0"
  }
}
```

### Frontend Architecture

```
src/
├── app/                    # Next.js 14 app router
│   ├── (auth)/            # Auth routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── (marketing)/       # Marketing pages
│   ├── api/               # API routes
│   └── layout.tsx
├── components/
│   ├── ui/                # Base UI components
│   ├── booking/           # Booking-specific components
│   ├── calendar/          # Calendar components
│   ├── forms/             # Form components
│   └── layouts/           # Layout components
├── lib/
│   ├── api/               # API client
│   ├── utils/             # Utility functions
│   └── validations/       # Zod schemas
├── hooks/                 # Custom React hooks
├── stores/                # Zustand stores
└── types/                 # TypeScript types
```

---

## Backend Stack

### Core Runtime

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20.x LTS | Runtime |
| TypeScript | 5.x | Type safety |
| Express/Fastify | Latest | API framework |
| tRPC | 10.x | Type-safe APIs (optional) |

### Database

| Technology | Version | Purpose |
|------------|---------|---------|
| PostgreSQL | 15.x | Primary database |
| Prisma | 5.x | ORM |
| Redis | 7.x | Cache, sessions, queues |

### Key Backend Dependencies

```json
{
  "dependencies": {
    "fastify": "^4.0.0",
    "@fastify/cors": "^9.0.0",
    "@fastify/helmet": "^11.0.0",
    "@fastify/rate-limit": "^9.0.0",
    "@fastify/jwt": "^7.0.0",
    "@fastify/cookie": "^9.0.0",
    "@fastify/swagger": "^8.0.0",
    "prisma": "^5.0.0",
    "@prisma/client": "^5.0.0",
    "ioredis": "^5.0.0",
    "bullmq": "^5.0.0",
    "nodemailer": "^6.9.0",
    "stripe": "^14.0.0",
    "googleapis": "^128.0.0",
    "@microsoft/microsoft-graph-client": "^3.0.0",
    "bcryptjs": "^2.4.0",
    "uuid": "^9.0.0",
    "winston": "^3.11.0",
    "pino": "^8.0.0"
  }
}
```

### Backend Architecture

```
src/
├── api/
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── bookings.ts
│   │   ├── calendars.ts
│   │   ├── event-types.ts
│   │   ├── teams.ts
│   │   ├── payments.ts
│   │   └── webhooks.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── rate-limit.ts
│   │   └── validation.ts
│   └── validators/
├── services/
│   ├── calendar/
│   │   ├── google.ts
│   │   ├── outlook.ts
│   │   └── sync.ts
│   ├── booking/
│   │   ├── engine.ts
│   │   ├── availability.ts
│   │   └── conflicts.ts
│   ├── notification/
│   │   ├── email.ts
│   │   ├── sms.ts
│   │   └── push.ts
│   ├── payment/
│   │   ├── stripe.ts
│   │   └── paypal.ts
│   └── ai/
│       ├── scheduling.ts
│       └── predictions.ts
├── workers/
│   ├── calendar-sync.ts
│   ├── notification-queue.ts
│   ├── payment-webhooks.ts
│   └── cleanup.ts
├── db/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── seeds/
├── utils/
└── types/
```

---

## Database Schema (Prisma)

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                String    @id @default(uuid())
  email             String    @unique
  passwordHash      String
  firstName         String?
  lastName          String?
  avatarUrl         String?
  timezone          String    @default("UTC")
  locale            String    @default("en")
  plan              Plan      @default(FREE)
  stripeCustomerId  String?
  emailVerified     Boolean   @default(false)
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  calendars         Calendar[]
  eventTypes        EventType[]
  bookings          Booking[]
  teams             TeamMember[]
  apiKeys           ApiKey[]
  webhooks          Webhook[]
  
  @@index([email])
}

enum Plan {
  FREE
  STARTER
  PRO
  ENTERPRISE
}

model Calendar {
  id              String   @id @default(uuid())
  userId          String
  provider        CalendarProvider
  providerId      String
  accessToken     String   @db.Text
  refreshToken    String?  @db.Text
  tokenExpiry     DateTime?
  isActive        Boolean  @default(true)
  syncStatus      SyncStatus @default(PENDING)
  lastSyncedAt    DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  externalEvents  ExternalEvent[]
  
  @@unique([userId, provider, providerId])
  @@index([userId])
}

enum CalendarProvider {
  GOOGLE
  OUTLOOK
  ICLOUD
  EXCHANGE
  CALDAV
}

enum SyncStatus {
  PENDING
  SYNCING
  SYNCED
  ERROR
  DISCONNECTED
}

model EventType {
  id              String   @id @default(uuid())
  userId          String
  teamId          String?
  title           String
  slug            String
  description     String?  @db.Text
  duration        Int      // minutes
  price           Int?     // cents
  currency        String   @default("USD")
  isActive        Boolean  @default(true)
  position        Int      @default(0)
  locations       Json?    // [{ type: "zoom", url: "..." }]
  customFields    Json?    // [{ label, required, type }]
  minNotice       Int      @default(0)  // minutes
  maxAdvance      Int      @default(90) // days
  bufferBefore    Int      @default(0)  // minutes
  bufferAfter     Int     @default(0)   // minutes
  dailyLimit      Int?
  weeklyLimit     Int?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  user            User     @relation(fields: [userId], references: [id])
  team            Team?    @relation(fields: [teamId], references: [id])
  bookings        Booking[]
  
  @@unique([userId, slug])
  @@index([userId])
}

model Booking {
  id              String   @id @default(uuid())
  eventTypeId     String
  userId          String
  teamId          String?
  assignedTo      String?  // team member ID
  
  title           String
  startTime       DateTime
  endTime         DateTime
  timezone        String
  
  guestName       String
  guestEmail      String
  guestPhone      String?
  guestTimezone   String?
  
  status          BookingStatus @default(CONFIRMED)
  location        Json?
  customAnswers   Json?
  
  stripePaymentId String?
  paymentStatus   PaymentStatus @default(PENDING)
  amount          Int?       // cents
  
  cancellationReason String?
  cancelledAt     DateTime?
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  eventType       EventType @relation(fields: [eventTypeId], references: [id])
  user            User      @relation(fields: [userId], references: [id])
  team            Team?     @relation(fields: [teamId], references: [id])
  reminders       Reminder[]
  
  @@index([userId])
  @@index([eventTypeId])
  @@index([startTime])
  @@index([guestEmail])
}

enum BookingStatus {
  CONFIRMED
  PENDING
  CANCELLED
  RESCHEDULED
  COMPLETED
  NO_SHOW
}

enum PaymentStatus {
  PENDING
  PAID
  REFUNDED
  FAILED
}

model Reminder {
  id          String   @id @default(uuid())
  bookingId   String
  type        ReminderType
  channel     ReminderChannel
  scheduledAt DateTime
  sentAt      DateTime?
  status      ReminderStatus @default(PENDING)
  
  booking     Booking  @relation(fields: [bookingId], references: [id], onDelete: Cascade)
  
  @@index([bookingId])
  @@index([scheduledAt])
}

enum ReminderType {
  CONFIRMATION
  REMINDER_24H
  REMINDER_1H
  FOLLOW_UP
  RESCHEDULE_OFFER
}

enum ReminderChannel {
  EMAIL
  SMS
  WHATSAPP
  PUSH
  SLACK
}

enum ReminderStatus {
  PENDING
  SENT
  FAILED
  SKIPPED
}

model Team {
  id          String   @id @default(uuid())
  name        String
  slug        String   @unique
  ownerId     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  owner       User     @relation(fields: [ownerId], references: [id])
  members     TeamMember[]
  eventTypes  EventType[]
  bookings    Booking[]
}

model TeamMember {
  id         String   @id @default(uuid())
  teamId     String
  userId     String
  role       TeamRole @default(MEMBER)
  createdAt  DateTime @default(now())
  
  team       Team     @relation(fields: [teamId], references: [id], onDelete: Cascade)
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([teamId, userId])
}

enum TeamRole {
  OWNER
  ADMIN
  MANAGER
  MEMBER
}

model ApiKey {
  id          String   @id @default(uuid())
  userId      String
  name        String
  keyHash     String   @unique
  prefix      String   // For display (e.g., "bf_live_abc123")
  scopes      String[] // ["bookings:read", "bookings:write"]
  lastUsedAt  DateTime?
  expiresAt   DateTime?
  createdAt   DateTime @default(now())
  
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Webhook {
  id          String   @id @default(uuid())
  userId      String
  url         String
  events      String[] // ["booking.created", "booking.cancelled"]
  active      Boolean  @default(true)
  secret      String
  createdAt   DateTime @default(now())
  
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model ExternalEvent {
  id          String   @id @default(uuid())
  calendarId  String
  providerId  String   // External event ID
  title       String
  startTime   DateTime
  endTime     DateTime
  raw         Json     // Full event data from provider
  
  calendar    Calendar @relation(fields: [calendarId], references: [id], onDelete: Cascade)
  
  @@unique([calendarId, providerId])
  @@index([calendarId, startTime])
}
```

---

## Infrastructure

### Cloud Provider: AWS

| Service | Purpose |
|---------|---------|
| ECS Fargate | Container orchestration |
| RDS PostgreSQL | Managed database |
| ElastiCache Redis | Managed Redis |
| S3 | File storage, assets |
| CloudFront | CDN |
| API Gateway | API management |
| Lambda | Serverless functions |
| SQS | Message queue |
| SES | Email sending |
| SNS | Notifications |
| CloudWatch | Monitoring, logging |

### Alternative: Vercel + Supabase

For faster launch and lower initial costs:

| Service | Alternative |
|---------|-------------|
| Hosting | Vercel (Next.js) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth / Clerk |
| Storage | Supabase Storage |
| Edge Functions | Vercel Functions |
| Queues | Upstash Redis |

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start
CMD ["node", "dist/server.js"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/bookflow
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  worker:
    build: .
    command: npm run worker
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/bookflow
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=bookflow
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

---

## Third-Party APIs

### Google Calendar API

```javascript
// OAuth2 setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  access_token: accessToken,
  refresh_token: refreshToken
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Fetch events
const events = await calendar.events.list({
  calendarId: 'primary',
  timeMin: startTime.toISOString(),
  timeMax: endTime.toISOString(),
  singleEvents: true
});
```

### Microsoft Graph API (Outlook)

```javascript
import { Client } from "@microsoft/microsoft-graph-client";

const client = Client.init({
  authProvider: (done) => {
    done(null, accessToken);
  }
});

// Fetch events
const events = await client
  .api('/me/calendarview')
  .query({
    startDateTime: startTime.toISOString(),
    endDateTime: endTime.toISOString()
  })
  .get();
```

### Stripe Integration

```javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
const paymentIntent = await stripe.paymentIntents.create({
  amount: priceInCents,
  currency: 'usd',
  metadata: {
    bookingId: booking.id,
    userId: user.id
  }
});

// Webhook handling
app.post('/webhooks/stripe', async (req, res) => {
  const event = stripe.webhooks.constructEvent(
    req.body,
    req.headers['stripe-signature'],
    process.env.STRIPE_WEBHOOK_SECRET
  );
  
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object);
      break;
  }
  
  res.json({ received: true });
});
```

---

## Security

### Authentication

| Method | Implementation |
|--------|---------------|
| Email/Password | bcryptjs, JWT tokens |
| OAuth | Google, Microsoft, Apple |
| SSO/SAML | Enterprise (Auth0, Okta) |
| API Keys | Hashed keys with scopes |

### Rate Limiting

```typescript
// Using @fastify/rate-limit
app.register(require('@fastify/rate-limit'), {
  max: 100,
  timeWindow: '1 minute',
  allowList: ['127.0.0.1'],
  keyGenerator: (req) => req.headers['x-forwarded-for'] || req.ip
});
```

### Input Validation

```typescript
import { z } from 'zod';

const bookingSchema = z.object({
  eventTypeId: z.string().uuid(),
  guestName: z.string().min(1).max(100),
  guestEmail: z.string().email(),
  guestPhone: z.string().optional(),
  startTime: z.string().datetime(),
  timezone: z.string(),
  customAnswers: z.record(z.string()).optional()
});
```

---

## Monitoring & Observability

### Logging Stack

| Tool | Purpose |
|------|---------|
| Pino | Structured logging |
| CloudWatch Logs | Log aggregation |
| Sentry | Error tracking |

### Metrics

| Tool | Purpose |
|------|---------|
| CloudWatch Metrics | Infrastructure metrics |
| Custom Metrics | Business metrics (bookings, revenue) |

### Alerting

- PagerDuty integration for critical alerts
- Slack notifications for warnings
- Email digests for daily summaries

---

## Development Workflow

### Local Development

```bash
# Clone and install
git clone https://github.com/bookflow/bookflow.git
cd bookflow
npm install

# Set up environment
cp .env.example .env
# Edit .env with your credentials

# Start services
docker-compose up -d db redis

# Run migrations
npm run db:migrate

# Start development server
npm run dev
```

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 2s |
| Time to Interactive | < 3s |
| Calendar Sync Latency | < 30s |
| Email Delivery | < 60s |
| Uptime SLA | 99.9% |

---

*Technology choices reviewed quarterly. Last updated: March 2026*
