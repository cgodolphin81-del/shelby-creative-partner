# 🛠️ Technical Implementation Guide

Build instructions for Mystic AI tarot platform.

---

## Tech Stack Recommendations

### Frontend
```
Mobile App: React Native (iOS + Android from one codebase)
Web App: Next.js 14 (SSR, SEO-optimized landing page)
UI Library: React Native Paper or NativeBase
Animations: React Native Reanimated
State: Zustand or Redux Toolkit
```

### Backend
```
Runtime: Node.js 20+
Framework: Express.js or Fastify
Database: PostgreSQL (Supabase or self-hosted)
ORM: Prisma or Drizzle
Cache: Redis (for sessions, rate limiting)
Queue: Bull (for email, notifications)
```

### AI & ML
```
Primary: Gensee API (readings, interpretations)
Fallback: OpenAI GPT-4 (if needed)
Embeddings: For journal search/similarity
Rate Limiting: Per-user, per-tier
```

### Infrastructure
```
Hosting: Vercel (web) + AWS/Render (backend)
Database: Supabase (PostgreSQL + Auth + Realtime)
Storage: AWS S3 or Cloudflare R2 (card images)
CDN: Cloudflare (global distribution)
Monitoring: Sentry (errors) + PostHog (analytics)
```

### Payments
```
Primary: Stripe (subscriptions, one-time purchases)
Alternative: RevenueCat (handles iOS + Android subscriptions)
Webhooks: Payment success, failures, cancellations
```

---

## Database Schema

### Core Tables
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  premium_status VARCHAR(50) DEFAULT 'free',
  premium_expires_at TIMESTAMP,
  timezone VARCHAR(50) DEFAULT 'UTC',
  notification_preferences JSONB DEFAULT '{}'
);

-- Readings
CREATE TABLE readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  spread_type VARCHAR(50) NOT NULL,
  question TEXT,
  cards JSONB NOT NULL, -- [{position, card, orientation}]
  interpretation TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  is_premium BOOLEAN DEFAULT false
);

-- Journal Entries
CREATE TABLE journal_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  reading_id UUID REFERENCES readings(id),
  prompt TEXT,
  content TEXT NOT NULL,
  mood VARCHAR(50)[],
  tags VARCHAR(50)[],
  created_at TIMESTAMP DEFAULT NOW(),
  is_private BOOLEAN DEFAULT true
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  stripe_subscription_id VARCHAR(255),
  status VARCHAR(50), -- active, trialing, canceled, past_due
  plan_type VARCHAR(50), -- monthly, annual
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false
);

-- Daily Readings (Community)
CREATE TABLE daily_readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE UNIQUE NOT NULL,
  cards JSONB NOT NULL,
  interpretation TEXT,
  theme VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Moon Phases
CREATE TABLE moon_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE UNIQUE NOT NULL,
  phase VARCHAR(50), -- new, waxing_crescent, first_quarter, etc.
  illumination DECIMAL(5,2),
  next_full_moon DATE,
  next_new_moon DATE
);
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/signup          - Create account
POST   /api/auth/login           - Login
POST   /api/auth/logout          - Logout
POST   /api/auth/forgot-password - Password reset
POST   /api/auth/verify-email    - Email verification
```

### Readings
```
POST   /api/readings             - Create new reading
GET    /api/readings             - List user's readings
GET    /api/readings/:id         - Get specific reading
DELETE /api/readings/:id         - Delete reading
POST   /api/readings/daily       - Get daily card (free)
GET    /api/readings/spreads     - List available spreads
```

### Journal
```
POST   /api/journal              - Create entry
GET    /api/journal              - List entries
GET    /api/journal/:id          - Get entry
PUT    /api/journal/:id          - Update entry
DELETE /api/journal/:id          - Delete entry
GET    /api/journal/prompts      - Get prompt library
```

### Subscription
```
POST   /api/subscription/create  - Create Stripe checkout session
POST   /api/subscription/webhook - Stripe webhook handler
GET    /api/subscription/status  - Get current status
POST   /api/subscription/cancel  - Cancel subscription
POST   /api/subscription/restore - Restore purchase
```

### Community
```
GET    /api/community/daily      - Get today's community reading
POST   /api/community/reactions  - React to daily reading
GET    /api/community/moon       - Get current moon phase
POST   /api/community/challenges - Join challenge
GET    /api/community/challenges - List active challenges
```

---

## AI Integration

### Reading Generation Endpoint
```javascript
// POST /api/readings
async function generateReading(req, res) {
  const { spread_type, cards, question, user_tier } = req.body;
  
  // Build prompt based on spread type
  const prompt = buildPrompt(spread_type, cards, question);
  
  // Call AI API
  const response = await fetch('https://api.gensee.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GENSEE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: user_tier === 'premium' ? 'gensee-pro' : 'gensee-lite',
      prompt: prompt,
      max_tokens: user_tier === 'premium' ? 800 : 400,
      temperature: 0.7
    })
  });
  
  const interpretation = await response.json();
  
  // Save to database
  const reading = await db.readings.create({
    user_id: req.user.id,
    spread_type,
    cards,
    question,
    interpretation: interpretation.text,
    is_premium: user_tier === 'premium'
  });
  
  res.json(reading);
}
```

### Prompt Templates
```javascript
const PROMPT_TEMPLATES = {
  single: `You are a compassionate tarot reader. The user drew: {card} ({orientation}). Provide a 2-3 paragraph reading. Tone: warm, mystical, empowering. Length: 150-200 words.`,
  
  three_card: `You are a compassionate tarot reader. Three cards: Position 1 ({pos1_name}): {card1} ({orient1}), Position 2 ({pos2_name}): {card2} ({orient2}), Position 3 ({pos3_name}): {card3} ({orient3}). Question: {question}. Provide reading with intro, each position (2-3 sentences), synthesis, closing. Length: 250-350 words.`,
  
  celtic_cross: `You are an experienced tarot reader. Celtic Cross: 1.Present:{c1}, 2.Challenge:{c2}, 3.Foundation:{c3}, 4.Past:{c4}, 5.Crown:{c5}, 6.Future:{c6}, 7.Attitude:{c7}, 8.External:{c8}, 9.Hopes/Fears:{c9}, 10.Outcome:{c10}. Question: {question}. Provide comprehensive reading (500-700 words) covering core cross, foundation, crown/future, personal factors, outcome, guidance.`
};
```

---

## Rate Limiting

### Free Tier
```javascript
const FREE_LIMITS = {
  readings_per_month: 3,
  journal_entries: 5,
  api_calls_per_minute: 10,
  daily_cards: 1
};
```

### Premium Tier
```javascript
const PREMIUM_LIMITS = {
  readings_per_month: -1, // unlimited
  journal_entries: -1,
  api_calls_per_minute: 60,
  daily_cards: -1,
  celtic_cross: true,
  export_readings: true,
  moon_tracking: true
};
```

### Implementation
```javascript
async function checkRateLimit(userId, tier) {
  const limits = tier === 'premium' ? PREMIUM_LIMITS : FREE_LIMITS;
  
  const usage = await db.usage.find({
    user_id: userId,
    period: 'current_month'
  });
  
  if (limits.readings_per_month !== -1 && 
      usage.readings >= limits.readings_per_month) {
    throw new RateLimitError('Monthly reading limit reached');
  }
  
  // Similar checks for other limits...
}
```

---

## Payment Integration

### Stripe Checkout
```javascript
POST /api/subscription/create

async function createCheckoutSession(req, res) {
  const session = await stripe.checkout.sessions.create({
    customer_email: req.user.email,
    payment_method_types: ['card'],
    line_items: [{
      price: req.body.plan === 'annual' 
        ? 'price_annual_premium' 
        : 'price_monthly_premium',
      quantity: 1
    }],
    mode: 'subscription',
    success_url: `${process.env.APP_URL}/premium?success=true`,
    cancel_url: `${process.env.APP_URL}/premium?canceled=true`,
    metadata: {
      user_id: req.user.id
    }
  });
  
  res.json({ url: session.url });
}
```

### Webhook Handler
```javascript
POST /api/subscription/webhook

async function handleWebhook(req, res) {
  const event = req.body;
  
  switch (event.type) {
    case 'checkout.session.completed':
      await activateSubscription(event.data.object);
      break;
    case 'customer.subscription.updated':
      await updateSubscription(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await cancelSubscription(event.data.object);
      break;
  }
  
  res.json({ received: true });
}
```

---

## Mobile App Structure

```
src/
├── components/
│   ├── Card.tsx           # Tarot card component
│   ├── SpreadLayout.tsx   # Celtic Cross, 3-card layouts
│   ├── ReadingResult.tsx  # Interpretation display
│   ├── JournalEntry.tsx   # Journal entry form
│   └── PremiumPaywall.tsx # Upgrade prompt
├── screens/
│   ├── HomeScreen.tsx
│   ├── ReadingScreen.tsx
│   ├── JournalScreen.tsx
│   ├── PremiumScreen.tsx
│   └── SettingsScreen.tsx
├── navigation/
│   └── AppNavigator.tsx   # React Navigation setup
├── store/
│   ├── userStore.ts       # User state
│   ├── readingsStore.ts   # Readings state
│   └── journalStore.ts    # Journal state
├── services/
│   ├── api.ts             # API client
│   ├── auth.ts            # Authentication
│   └── payments.ts        # Stripe/RevenueCat
├── utils/
│   ├── cardMeanings.ts    # Card database
│   ├── moonPhases.ts      # Moon calculations
│   └── formatters.ts      # Date, currency formatters
└── assets/
    ├── cards/             # 78 card images
    ├── fonts/             # Cinzel, Inter, Playfair
    └── images/            # Logos, icons
```

---

## Security Considerations

### Authentication
- JWT tokens with 7-day expiration
- Refresh tokens for seamless sessions
- Biometric auth option (FaceID, TouchID)
- Email verification required

### Data Protection
- All data encrypted at rest (AES-256)
- TLS 1.3 for all API calls
- No PII in logs
- GDPR compliance (right to delete, export)

### Payment Security
- PCI DSS compliant (Stripe handles card data)
- No card data stored on servers
- Webhook signature verification

### Rate Limiting & DDoS
- Cloudflare WAF protection
- API rate limiting per IP and user
- Slow down on suspicious activity

---

## Testing Strategy

### Unit Tests
```javascript
// __tests__/readings.test.ts
describe('Reading Generation', () => {
  test('creates single card reading', async () => {
    const reading = await createReading({
      spread_type: 'single',
      cards: [{ card: 'fool', orientation: 'upright' }]
    });
    expect(reading.interpretation).toBeDefined();
    expect(reading.interpretation.length).toBeGreaterThan(100);
  });
});
```

### Integration Tests
- API endpoint testing (Jest + Supertest)
- Payment flow testing (Stripe test mode)
- Email delivery testing (SendGrid sandbox)

### E2E Tests
- Detox for mobile app
- Playwright for web
- Critical user journeys (signup → reading → upgrade)

---

## Deployment Pipeline

### CI/CD (GitHub Actions)
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test
      
  deploy-web:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          
  deploy-mobile:
    needs: test
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: eas build --platform ios
      - run: eas submit --platform ios
```

### Environment Variables
```bash
# .env.example
DATABASE_URL=postgresql://...
GENSEE_API_KEY=sk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
JWT_SECRET=...
APP_URL=https://mysticai.app
NODE_ENV=production
```

---

## Launch Checklist

### Pre-Launch (Week -2)
- [ ] All 78 card images finalized
- [ ] AI prompts tested and refined
- [ ] Payment flow tested end-to-end
- [ ] Email sequences loaded in ESP
- [ ] Landing page live (coming soon)
- [ ] Social media accounts created
- [ ] App Store / Play Store submissions

### Launch Week (Week 0)
- [ ] App approved and live in stores
- [ ] Email sequence activated
- [ ] Social media content scheduled (Week 1)
- [ ] Monitoring dashboards active
- [ ] Support team ready
- [ ] Launch announcement sent

### Post-Launch (Week 1-4)
- [ ] Daily engagement in community
- [ ] Bug fixes as needed
- [ ] A/B tests initiated
- [ ] User feedback collected
- [ ] Iterate on onboarding flow

---

## Support & Maintenance

### Customer Support
- **Email**: support@mysticai.app (24h response)
- **In-App**: Help center with FAQ
- **Social**: Respond to DMs within 4h

### Monitoring
- **Uptime**: 99.9% target (UptimeRobot)
- **Errors**: Sentry alerts for critical issues
- **Performance**: API response < 500ms (p95)
- **Business**: Daily revenue, conversions dashboard

### Updates
- **Mobile**: Bi-weekly updates (features + fixes)
- **Backend**: Weekly deployments
- **AI Prompts**: Monthly optimization based on feedback

---

This implementation guide provides the technical foundation. All 10 deliverables are complete in their respective directories. Ready to build! 🚀
