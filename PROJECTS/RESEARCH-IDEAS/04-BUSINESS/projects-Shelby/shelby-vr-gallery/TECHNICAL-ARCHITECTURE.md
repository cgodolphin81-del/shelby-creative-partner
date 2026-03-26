# Shelby VR Art Gallery - Technical Architecture

**Version:** 1.0  
**Date:** March 2026  
**Audience:** Development Team, Technical Stakeholders  

---

## SYSTEM OVERVIEW

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                                     │
├─────────────────┬─────────────────┬─────────────────┬──────────────────┤
│   WebXR Client  │  Quest Native   │   SteamVR       │   Mobile App     │
│   (Unity WebGL) │  (Android)      │   (PC)          │   (React Native) │
└────────┬────────┴────────┬────────┴────────┬────────┴─────────┬────────┘
         │                 │                 │                   │
         └─────────────────┴─────────────────┴───────────────────┘
                                   │
                          HTTPS / WebRTC / WebSocket
                                   │
┌──────────────────────────────────▼──────────────────────────────────────┐
│                         API GATEWAY                                      │
│                    (Cloudflare / AWS ALB)                                │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
┌────────▼────────┐     ┌──────────▼──────────┐   ┌─────────▼────────┐
│   Auth Service  │     │   Application API   │   │   Realtime       │
│   (Firebase)    │     │   (Node.js/FastAPI) │   │   (Photon/WS)    │
└─────────────────┘     └──────────┬──────────┘   └──────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
┌────────▼────────┐     ┌──────────▼──────────┐   ┌─────────▼────────┐
│   PostgreSQL    │     │   Redis Cache       │   │   S3 / R2        │
│   (User Data)   │     │   (Sessions)        │   │   (Assets)       │
└─────────────────┘     └─────────────────────┘   └─────────┬────────┘
                                                            │
                                                   ┌────────▼────────┐
                                                   │   CDN           │
                                                   │   (Cloudflare)  │
                                                   └─────────────────┘
```

---

## CLIENT ARCHITECTURE

### Unity Client (WebXR + Native)

**Unity Version:** 2024.2 LTS  
**Render Pipeline:** Universal Render Pipeline (URP)  
**XR Plugin:** OpenXR  

#### Core Modules

```
Unity Project Structure:
├── Assets/
│   ├── _Project/
│   │   ├── Scripts/
│   │   │   ├── Core/           # GameManager, SceneManager
│   │   │   ├── XR/             # XR interaction, locomotion
│   │   │   ├── Avatar/         # Avatar system, customization
│   │   │   ├── Networking/     # Multiplayer, voice chat
│   │   │   ├── Artwork/        # Display, loading, interaction
│   │   │   ├── UI/             # Canvas UI, VR UI
│   │   │   ├── Audio/          # Spatial audio, narration
│   │   │   └── Analytics/      # Event tracking
│   │   ├── Prefabs/
│   │   │   ├── Avatars/
│   │   │   ├── Artwork/
│   │   │   ├── UI/
│   │   │   └── Environment/
│   │   ├── Scenes/
│   │   │   ├── Atrium.unity
│   │   │   ├── Gallery_*.unity
│   │   │   └── Loading.unity
│   │   ├── Artwork/            # Uploaded art assets
│   │   ├── Materials/
│   │   ├── Shaders/
│   │   └── Audio/
│   └── ThirdParty/
│       ├── XR Interaction Toolkit/
│       ├── Photon Fusion/
│       └── DOTween/
```

#### Key Systems

**1. Scene Management**
```csharp
// Async scene loading with progress
public class SceneManager : MonoBehaviour {
    public async Task LoadGalleryLevel(int levelId);
    public void UnloadUnusedLevels();
    public float GetLoadProgress();
}
```

**2. Artwork Loading**
```csharp
// Progressive loading with LOD
public class ArtworkLoader : MonoBehaviour {
    public async Task<GameObject> LoadArtwork(ArtworkMetadata meta);
    public void SetLOD(int level); // 0=high, 1=med, 2=low
    public void OptimizeForPlatform(VRPlatform platform);
}
```

**3. Multiplayer Sync**
```csharp
// Photon Fusion integration
public class AvatarSync : NetworkBehaviour {
    [Networked] public Vector3 Position { get; set; }
    [Networked] public Quaternion Rotation { get; set; }
    [Networked] public int AvatarId { get; set; }
    
    public override void FixedUpdateNetwork() {
        // Sync position/rotation at 30Hz
    }
}
```

**4. Performance Manager**
```csharp
// Dynamic quality adjustment
public class PerformanceManager : MonoBehaviour {
    public void AutoAdjustQuality();
    public void SetTargetFramerate(int fps);
    public float GetCurrentFramerate();
    public PerformanceMetrics GetMetrics();
}
```

#### Performance Budgets

| Platform | Draw Calls | Tris | Texture Mem | Target FPS |
|----------|-----------|------|-------------|------------|
| Quest 2 | <200 | <100K | <500MB | 72 |
| Quest 3 | <300 | <150K | <750MB | 90 |
| PC VR | <500 | <500K | <2GB | 90 |
| WebXR | <150 | <80K | <400MB | 72 |

---

### React Native Mobile App

**Framework:** React Native 0.74+  
**State Management:** Zustand  
**Navigation:** React Navigation 6  

#### App Structure

```
mobile-app/
├── src/
│   ├── components/
│   │   ├── ArtworkCard.tsx
│   │   ├── ExhibitionList.tsx
│   │   ├── TicketPurchase.tsx
│   │   └── AvatarPreview.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── GalleryScreen.tsx
│   │   ├── ExhibitionScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── TicketScreen.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── payments.ts
│   ├── store/
│   │   ├── userStore.ts
│   │   └── exhibitionStore.ts
│   └── utils/
│       ├── formatting.ts
│       └── validation.ts
├── ios/
├── android/
└── package.json
```

---

## BACKEND ARCHITECTURE

### API Service

**Runtime:** Node.js 20 LTS  
**Framework:** Fastify (or Express)  
**Language:** TypeScript  

#### Service Structure

```
backend-api/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── artwork.controller.ts
│   │   ├── exhibition.controller.ts
│   │   ├── ticket.controller.ts
│   │   ├── membership.controller.ts
│   │   └── payment.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── artwork.service.ts
│   │   ├── exhibition.service.ts
│   │   ├── ticket.service.ts
│   │   ├── membership.service.ts
│   │   ├── payment.service.ts
│   │   └── notification.service.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Artwork.ts
│   │   ├── Exhibition.ts
│   │   ├── Ticket.ts
│   │   ├── Membership.ts
│   │   └── Transaction.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── validation.middleware.ts
│   │   ├── rateLimit.middleware.ts
│   │   └── error.middleware.ts
│   ├── routes/
│   │   └── index.ts
│   ├── config/
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   ├── storage.ts
│   │   └── env.ts
│   └── app.ts
├── tests/
├── Dockerfile
└── package.json
```

#### API Endpoints

**Authentication**
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
POST   /api/v1/auth/password-reset
```

**Users**
```
GET    /api/v1/users/me
PUT    /api/v1/users/me
GET    /api/v1/users/me/profile
PUT    /api/v1/users/me/profile
GET    /api/v1/users/me/membership
```

**Artworks**
```
GET    /api/v1/artworks
GET    /api/v1/artworks/:id
POST   /api/v1/artworks              # Artist only
PUT    /api/v1/artworks/:id          # Artist only
DELETE /api/v1/artworks/:id          # Artist only
GET    /api/v1/artworks/:id/download # Signed URL
```

**Exhibitions**
```
GET    /api/v1/exhibitions
GET    /api/v1/exhibitions/:id
GET    /api/v1/exhibitions/:id/artworks
POST   /api/v1/exhibitions           # Admin only
PUT    /api/v1/exhibitions/:id       # Admin only
```

**Tickets**
```
POST   /api/v1/tickets
GET    /api/v1/tickets/me
GET    /api/v1/tickets/:id/validate
POST   /api/v1/tickets/:id/refund
```

**Memberships**
```
GET    /api/v1/memberships
POST   /api/v1/memberships/subscribe
POST   /api/v1/memberships/cancel
GET    /api/v1/memberships/me
PUT    /api/v1/memberships/me/tier
```

**Payments**
```
POST   /api/v1/payments/intent       # Create Stripe PaymentIntent
POST   /api/v1/payments/webhook      # Stripe webhook handler
GET    /api/v1/payments/me/history
```

---

### Database Schema

**Database:** PostgreSQL 15+  

#### Core Tables

```sql
-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    display_name VARCHAR(100),
    avatar_url TEXT,
    avatar_config JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    is_banned BOOLEAN DEFAULT FALSE
);

-- Artworks
CREATE TABLE artworks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    artist_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    medium VARCHAR(100),
    year INTEGER,
    dimensions JSONB, -- {width, height, depth, unit}
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    file_type VARCHAR(50),
    file_size_bytes BIGINT,
    resolution JSONB, -- {width, height}
    is_nft BOOLEAN DEFAULT FALSE,
    nft_contract_address VARCHAR(100),
    nft_token_id VARCHAR(100),
    price_cents INTEGER,
    is_for_sale BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Exhibitions
CREATE TABLE exhibitions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    curator_id UUID REFERENCES users(id),
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    gallery_level INTEGER,
    gallery_room_ids INTEGER[],
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT FALSE,
    banner_image_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Exhibition Artworks (junction table)
CREATE TABLE exhibition_artworks (
    exhibition_id UUID REFERENCES exhibitions(id) ON DELETE CASCADE,
    artwork_id UUID REFERENCES artworks(id) ON DELETE CASCADE,
    position INTEGER,
    room_id INTEGER,
    wall_position JSONB,
    PRIMARY KEY (exhibition_id, artwork_id)
);

-- Tickets
CREATE TABLE tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    ticket_type VARCHAR(50) NOT NULL, -- single, day_pass, pack_5, pack_10
    exhibition_id UUID REFERENCES exhibitions(id),
    status VARCHAR(50) DEFAULT 'valid', -- valid, used, expired, refunded
    purchased_at TIMESTAMP DEFAULT NOW(),
    valid_from TIMESTAMP,
    valid_until TIMESTAMP,
    price_cents INTEGER NOT NULL,
    payment_intent_id VARCHAR(255)
);

-- Memberships
CREATE TABLE memberships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) UNIQUE,
    tier VARCHAR(50) NOT NULL, -- free, supporter, patron, collector, institutional
    status VARCHAR(50) DEFAULT 'active', -- active, cancelled, expired
    stripe_subscription_id VARCHAR(255),
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancelled_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    type VARCHAR(50) NOT NULL, -- ticket, membership, artwork, nft, merchandise, event
    amount_cents INTEGER NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, refunded
    payment_intent_id VARCHAR(255),
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Events
CREATE TABLE analytics_events (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB,
    session_id VARCHAR(255),
    platform VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_artworks_artist_id ON artworks(artist_id);
CREATE INDEX idx_artworks_status ON artworks(status);
CREATE INDEX idx_exhibitions_dates ON exhibitions(start_date, end_date);
CREATE INDEX idx_tickets_user_id ON tickets(user_id);
CREATE INDEX idx_tickets_status ON tickets(status);
CREATE INDEX idx_memberships_user_id ON memberships(user_id);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created ON analytics_events(created_at);
```

---

### Redis Cache

**Use Cases:**
- Session storage
- Rate limiting
- Real-time counters
- Frequently accessed data

#### Key Structure

```
# Sessions
session:{sessionId} → JSON(user data, expires)

# Rate Limiting
ratelimit:{userId}:{endpoint}:{window} → count

# Counters
counter:visitors:daily:{date} → integer
counter:visitors:concurrent → integer
counter:artwork:views:{artworkId} → integer

# Cache
cache:artwork:{artworkId} → JSON(artwork data)
cache:exhibition:{exhibitionId} → JSON(exhibition data)
cache:user:{userId} → JSON(user profile)

# Locks
lock:exhibition:{exhibitionId}:install → (distributed lock)
```

---

### File Storage

**Primary:** AWS S3 or Cloudflare R2  
**CDN:** Cloudflare  

#### Bucket Structure

```
s3://shelby-vr-gallery-assets/
├── artworks/
│   ├── {artistId}/
│   │   ├── {artworkId}/
│   │   │   ├── original.png
│   │   │   ├── large.jpg      # 4K
│   │   │   ├── medium.jpg     # 2K
│   │   │   ├── small.jpg      # 1K
│   │   │   └── thumbnail.jpg  # 512px
│   │   └── ...
│   └── ...
├── avatars/
│   ├── presets/
│   │   ├── avatar_001.glb
│   │   └── ...
│   └── user-generated/
│       └── {userId}/
│           └── {avatarId}.glb
├── exhibitions/
│   ├── {exhibitionId}/
│   │   ├── banner.jpg
│   │   ├── catalog.pdf
│   │   └── promo-video.mp4
│   └── ...
├── audio/
│   ├── narrations/
│   │   ├── {artworkId}_en.mp3
│   │   ├── {artworkId}_es.mp3
│   │   └── ...
│   └── ambient/
│       ├── atrium.mp3
│       └── ...
└── environments/
    ├── atrium/
    │   ├── scene.glb
    │   └── lightmap.exr
    └── ...
```

#### Image Processing Pipeline

```javascript
// Using Sharp for image processing
async function processArtworkUpload(file, artworkId) {
    const original = await sharp(file.buffer);
    const metadata = await original.metadata();
    
    // Generate thumbnails
    await original.resize(512, 512, { fit: 'inside' }).toFile(`small.jpg`);
    await original.resize(1024, 1024, { fit: 'inside' }).toFile(`medium.jpg`);
    await original.resize(2048, 2048, { fit: 'inside' }).toFile(`large.jpg`);
    
    // Upload all versions to S3
    await uploadToS3([/* files */]);
    
    // Invalidate CDN cache
    await purgeCDNCache(`artworks/${artworkId}/*`);
    
    return {
        original: metadata,
        versions: ['small', 'medium', 'large', 'original']
    };
}
```

---

## REALTIME INFRASTRUCTURE

### Multiplayer System

**Technology:** Photon Fusion (or Normcore for advanced features)

#### Room Architecture

```
Region: us-east-1
├── Room Server 1 (20 users)
│   ├── Atrium Instance #1
│   └── Gallery Level 2 Instance #1
├── Room Server 2 (20 users)
│   ├── Atrium Instance #2
│   └── Gallery Level 2 Instance #2
└── Room Server N...

# Auto-scaling based on concurrent users
# Users in same "instance" can see/interact with each other
# Instances shard when >20 users
```

#### Network State Sync

```csharp
// What gets synced (30Hz)
- Avatar position (Vector3)
- Avatar rotation (Quaternion)
- Avatar animation state (enum)
- Voice chat (WebRTC, peer-to-peer when possible)
- Interaction events (click, grab, etc.)

// What does NOT get synced (local only)
- Head/hand tracking (too frequent)
- Local UI interactions
- Audio listener position (each client handles)
```

#### Voice Chat

**Technology:** Photon Voice or WebRTC  

**Configuration:**
- Codec: Opus
- Bitrate: 32 kbps
- Sample rate: 48 kHz
- Spatial audio: Enabled (distance-based attenuation)
- Max voice channels per room: 20

---

## SECURITY ARCHITECTURE

### Authentication Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│   API    │────▶│ Firebase │────▶│   DB     │
│          │     │          │     │   Auth   │     │          │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                │                  │
     │  1. Login      │                  │
     │───────────────▶│                  │
     │                │  2. Verify       │
     │                │─────────────────▶│
     │                │  3. Token        │
     │                │◀─────────────────│
     │  4. JWT        │                  │
     │◀───────────────│                  │
     │                │                  │
     │  5. API Call + JWT                │
     │───────────────▶│                  │
     │                │  6. Verify JWT   │
     │                │─────────────────▶│
     │                │  7. Valid        │
     │                │◀─────────────────│
     │  8. Response   │                  │
     │◀───────────────│                  │
```

### Security Measures

**API Security:**
- HTTPS everywhere (TLS 1.3)
- JWT authentication (RS256)
- Rate limiting (100 req/min per user)
- Input validation (Zod schemas)
- SQL injection prevention (parameterized queries)
- CORS configuration (strict origins)

**Data Security:**
- Passwords: bcrypt (cost 12)
- PII encryption at rest (AES-256)
- Secrets management (AWS Secrets Manager)
- Database backups (daily, encrypted)
- Audit logging (all admin actions)

**Content Security:**
- User content moderation (AI + human review)
- File type validation
- Malware scanning (ClamAV)
- Age verification for certain content
- Reporting system for inappropriate content

---

## MONITORING & OBSERVABILITY

### Metrics Collection

**Tools:** Prometheus + Grafana  

**Key Metrics:**
```
# Application
http_requests_total{method, endpoint, status}
http_request_duration_seconds{endpoint}
active_users_concurrent
artwork_load_time_seconds{artworkId}

# Infrastructure
cpu_usage_percent
memory_usage_bytes
disk_usage_bytes
network_bytes_total

# Business
tickets_sold_total{type}
membership_subscriptions_total{tier}
revenue_total_cents{stream}
artwork_views_total{artworkId}
```

### Logging

**Tool:** Winston + ELK Stack (or Datadog)

**Log Levels:**
- ERROR: System failures, payment failures
- WARN: Degraded performance, retryable errors
- INFO: User actions, API calls
- DEBUG: Detailed flow (dev only)

**Log Structure:**
```json
{
  "timestamp": "2026-03-22T23:56:00Z",
  "level": "INFO",
  "service": "api-gateway",
  "traceId": "abc123",
  "userId": "user-uuid",
  "action": "ticket.purchase",
  "data": {
    "ticketType": "single",
    "amount": 1200,
    "currency": "USD"
  }
}
```

### Alerting

**Tool:** PagerDuty or Opsgenie  

**Critical Alerts (Page immediately):**
- API error rate > 5%
- Payment failures > 10%
- Database connection failures
- Server down

**Warning Alerts (Notify during business hours):**
- Response time p95 > 2s
- Error rate > 1%
- Disk usage > 80%
- Unusual traffic patterns

---

## DEPLOYMENT ARCHITECTURE

### Infrastructure

**Cloud Provider:** AWS (or Cloudflare for cost optimization)

```
┌─────────────────────────────────────────────────────────────┐
│                      Cloudflare CDN                          │
│                 (Edge caching, DDoS protection)              │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    Application Load Balancer                 │
│                     (AWS ALB / Cloudflare)                   │
└──────────┬──────────────────────────────────────┬───────────┘
           │                                      │
┌──────────▼──────────┐              ┌───────────▼──────────┐
│   API Service       │              │   Unity WebGL        │
│   (ECS Fargate)     │              │   (S3 + CloudFront)  │
│   - 3 instances     │              │                      │
│   - Auto-scale      │              │                      │
└──────────┬──────────┘              └──────────────────────┘
           │
┌──────────▼──────────┐
│   Database          │
│   (RDS PostgreSQL)  │
│   - Multi-AZ        │
│   - Read replicas   │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│   Cache             │
│   (ElastiCache)     │
│   - Redis cluster   │
└─────────────────────┘
```

### CI/CD Pipeline

**Tool:** GitHub Actions  

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v4
      - run: aws ecs update-service ...

  deploy-unity:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: game-ci/unity-builder@v4
      - run: aws s3 sync build/ s3://shelby-vr-gallery-webxr/
      - run: aws cloudfront create-invalidation ...
```

### Environment Strategy

| Environment | Purpose | Auto-deploy | Data |
|-------------|---------|-------------|------|
| Development | Local dev | Manual | Mock data |
| Staging | Pre-prod testing | On PR merge | Anonymized prod copy |
| Production | Live service | On main merge | Real user data |

---

## SCALING STRATEGY

### Horizontal Scaling

**API Service:**
- Start: 3 instances (Fargate)
- Scale trigger: CPU > 60% or request queue > 100
- Max: 20 instances
- Scale-down: CPU < 30% for 10 minutes

**Database:**
- Start: db.r6g.large (2 vCPU, 16GB RAM)
- Read replicas: Add at 1000 concurrent users
- Vertical scale: Upgrade instance type as needed

**CDN:**
- Cloudflare auto-scales
- Cache hit ratio target: >90%

### Vertical Scaling Triggers

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| Concurrent Users | 500 | 1000 | Add instances |
| API Latency p95 | 500ms | 1000ms | Optimize queries |
| Error Rate | 1% | 5% | Investigate immediately |
| Database CPU | 60% | 80% | Add read replicas |

---

## DISASTER RECOVERY

### Backup Strategy

**Database:**
- Automated daily backups (retained 30 days)
- Point-in-time recovery enabled
- Cross-region backup copy (weekly)

**File Storage:**
- S3 versioning enabled
- Cross-region replication (optional)
- Lifecycle policies (archive old versions)

**Code:**
- GitHub repository (private)
- Protected branches
- Required reviews

### Recovery Time Objectives

| System | RTO | RPO |
|--------|-----|-----|
| API Service | 15 min | 0 (stateless) |
| Database | 1 hour | 5 min |
| File Storage | 4 hours | 24 hours |
| Full Platform | 4 hours | 24 hours |

### Failover Plan

1. **API Failure:** Auto-scale group replaces unhealthy instances
2. **Database Failure:** Promote read replica, update connection strings
3. **Region Failure:** DNS failover to secondary region (if configured)
4. **CDN Failure:** Direct S3 access (degraded performance)

---

## COST OPTIMIZATION

### Estimated Monthly Costs (Year 1)

| Service | Month 1-3 | Month 4-6 | Month 7-12 |
|---------|-----------|-----------|------------|
| Compute (ECS) | $300 | $500 | $800 |
| Database (RDS) | $200 | $200 | $400 |
| Cache (Redis) | $50 | $50 | $100 |
| Storage (S3) | $50 | $100 | $200 |
| CDN (Cloudflare) | $100 | $200 | $400 |
| Photon (Multiplayer) | $100 | $300 | $600 |
| Firebase Auth | $0 | $25 | $50 |
| Monitoring | $50 | $50 | $100 |
| **Total** | **$850** | **$1,425** | **$2,650** |

### Cost Optimization Strategies

1. **Use Cloudflare R2** instead of S3 (no egress fees)
2. **Spot instances** for non-critical workloads
3. **Reserved instances** for database (1-year commitment)
4. **Image optimization** to reduce storage/CDN costs
5. **Cache aggressively** to reduce database load
6. **Auto-scale down** during low-traffic periods

---

**DOCUMENT END**

*Last updated: March 2026*
*Review cycle: Quarterly or after major architectural changes*
