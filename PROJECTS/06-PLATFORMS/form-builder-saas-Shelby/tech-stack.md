# FormFlow Tech Stack

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CDN (Cloudflare)                         │
│                    Static Assets + Edge Cache                    │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Load Balancer (NGINX)                       │
└─────────────────────────────────────────────────────────────────┘
                                │
                ┌───────────────┼───────────────┐
                ▼               ▼               ▼
        ┌───────────┐   ┌───────────┐   ┌───────────┐
        │  App Srv  │   │  App Srv  │   │  App Srv  │
        │   (Node)  │   │   (Node)  │   │   (Node)  │
        └───────────┘   └───────────┘   └───────────┘
                │               │               │
                └───────────────┼───────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│   MongoDB     │       │    Redis      │       │  Elasticsearch│
│   (Atlas)     │       │   (Cluster)   │       │   (Search)    │
└───────────────┘       └───────────────┘       └───────────────┘
```

---

## Frontend

### Core Framework
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Next.js 14** - SSR, routing, API routes
- **React Server Components** - Performance optimization

### State Management
- **Zustand** - Client state (lightweight)
- **TanStack Query** - Server state, caching
- **React Context** - Theme, auth, user preferences

### UI Components
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Radix UI** - Accessible primitives
- **Framer Motion** - Animations
- **React DnD** - Drag and drop builder
- **React Flow** - Logic flow visualization

### Form Builder Specific
```javascript
// Custom drag-drop system
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

// Real-time preview
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';

// Canvas rendering
const FormCanvas = ({ elements, onElementUpdate }) => {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={elements}>
        {elements.map(el => (
          <FormElement 
            key={el.id} 
            element={el}
            onUpdate={onElementUpdate}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};
```

### Performance Optimization
- **Code splitting** - Route-based chunks
- **Image optimization** - Next.js Image component
- **Lazy loading** - Heavy components
- **Virtual scrolling** - Large form lists
- **Service Worker** - Offline support (PWA)

---

## Backend

### Runtime
- **Node.js 20 LTS**
- **Express.js** - Web framework
- **TypeScript** - Type safety

### API Architecture
```
/api
├── /v1
│   ├── /forms
│   │   ├── GET /           - List forms
│   │   ├── POST /          - Create form
│   │   ├── GET /:id        - Get form
│   │   ├── PUT /:id        - Update form
│   │   ├── DELETE /:id     - Delete form
│   │   └── /:id/submissions
│   ├── /submissions
│   ├── /integrations
│   ├── /webhooks
│   └── /analytics
└── /public
    └── /f/:formId          - Public form endpoint
```

### Authentication
- **JWT** - Access tokens
- **Refresh tokens** - Long-lived sessions
- **OAuth 2.0** - Social login (Google, GitHub)
- **SAML** - Enterprise SSO
- **API Keys** - Developer access

### Middleware Stack
```javascript
app.use(helmet());                    // Security headers
app.use(cors(corsOptions));           // CORS
app.use(rateLimiter);                 // Rate limiting
app.use(compression());               // Gzip compression
app.use(express.json({ limit: '10mb' }));
app.use(requestLogger);               // Custom logging
app.use(authMiddleware);              // JWT verification
```

---

## Database

### Primary: MongoDB Atlas

#### Collections Schema

**forms**
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  title: String,
  description: String,
  status: 'draft' | 'published' | 'archived',
  elements: [{
    id: String,
    type: String,
    properties: Object,
    logic: Object,
    validation: Object
  }],
  settings: {
    theme: Object,
    notifications: Object,
    limits: Object
  },
  analytics: {
    views: Number,
    submissions: Number,
    completionRate: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

**submissions**
```javascript
{
  _id: ObjectId,
  formId: ObjectId,
  data: Map,  // Field ID → Value
  metadata: {
    ip: String,
    userAgent: String,
    referrer: String,
    device: String,
    location: Object
  },
  status: 'complete' | 'partial' | 'abandoned',
  paymentStatus: 'pending' | 'paid' | 'failed',
  submittedAt: Date
}
```

**users**
```javascript
{
  _id: ObjectId,
  email: String,
  passwordHash: String,
  name: String,
  avatar: String,
  plan: 'free' | 'starter' | 'professional' | 'enterprise',
  usage: {
    forms: Number,
    submissions: Number,
    storage: Number
  },
  settings: Object,
  createdAt: Date,
  lastLoginAt: Date
}
```

#### Indexes
```javascript
// Forms
db.forms.createIndex({ userId: 1, createdAt: -1 });
db.forms.createIndex({ status: 1 });
db.forms.createIndex({ 'settings.domain': 1 });

// Submissions
db.submissions.createIndex({ formId: 1, submittedAt: -1 });
db.submissions.createIndex({ 'metadata.email': 1 });
db.submissions.createIndex({ submittedAt: -1 });

// Users
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ 'apiKeys.key': 1 }, { unique: true });
```

### Caching: Redis

**Use Cases:**
- Session storage
- Rate limiting counters
- Form configuration cache
- Analytics aggregation
- Webhook retry queues
- Real-time collaboration locks

**Key Patterns:**
```
form:{id}              → Form config (TTL: 5min)
user:{id}:session      → Session data
rate:{ip}:{endpoint}   → Rate limit counter
analytics:{form}:{day} → Daily stats
webhook:{id}:retry     → Retry queue
```

### Search: Elasticsearch

**Indexed Data:**
- Form titles and descriptions
- Submission data (searchable fields)
- User activity logs
- Template library

---

## Infrastructure

### Cloud Provider
- **Primary:** AWS
- **CDN:** Cloudflare
- **DNS:** Cloudflare

### Compute
- **ECS Fargate** - Container orchestration
- **Lambda** - Serverless functions (webhooks, integrations)
- **EC2** - Bastion hosts, jump boxes

### Storage
- **S3** - File uploads, backups
- **CloudFront** - Asset delivery
- **EFS** - Shared storage (if needed)

### Database Services
- **MongoDB Atlas** - Primary database (M30 cluster)
- **ElastiCache** - Redis cluster
- **OpenSearch** - Search and analytics

### Monitoring & Observability
- **Datadog** - APM, logs, metrics
- **Sentry** - Error tracking
- **PagerDuty** - Incident response
- **Statuspage** - Public status page

### CI/CD
- **GitHub Actions** - CI pipeline
- **Docker** - Containerization
- **Terraform** - Infrastructure as Code
- **ArgoCD** - GitOps deployment

---

## Security

### Data Protection
- **Encryption at Rest:** AES-256 (MongoDB, S3)
- **Encryption in Transit:** TLS 1.3
- **Secrets Management:** AWS Secrets Manager
- **Key Rotation:** Automated (90 days)

### Application Security
- **OWASP Top 10** mitigation
- **CSP headers** - Content Security Policy
- **Input validation** - Joi schemas
- **SQL/NoSQL injection** prevention
- **XSS protection** - Sanitization
- **CSRF tokens** - Form submissions

### Authentication Security
- **Password hashing:** bcrypt (12 rounds)
- **MFA support:** TOTP, SMS
- **Session management:** Secure cookies, httpOnly
- **Brute force protection:** Account lockout

### Compliance
- **GDPR** - Data privacy
- **CCPA** - California privacy
- **HIPAA** - Healthcare (Enterprise)
- **SOC 2 Type II** - Security controls
- **PCI-DSS** - Payment processing (via Stripe)

---

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Form Load Time | < 500ms | TBD |
| API Response Time | < 100ms (p95) | TBD |
| Submission Processing | < 200ms | TBD |
| Uptime | 99.9% | TBD |
| Time to First Byte | < 200ms | TBD |

### Optimization Strategies
1. **Edge caching** - Cloudflare for static assets
2. **Database indexing** - Query optimization
3. **Connection pooling** - MongoDB, Redis
4. **Async processing** - Bull queues for heavy tasks
5. **CDN distribution** - Global edge locations

---

## Development Environment

### Local Setup
```bash
# Clone repo
git clone https://github.com/formflow/formflow.git

# Install dependencies
cd formflow && npm install

# Environment setup
cp .env.example .env
# Edit .env with your keys

# Start services (Docker Compose)
docker-compose up -d mongo redis elasticsearch

# Start development server
npm run dev
```

### Docker Compose
```yaml
version: '3.8'
services:
  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
  
  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
  
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - MONGODB_URI=mongodb://mongo:27017/formflow
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis

volumes:
  mongo_data:
```

---

## Scalability Plan

### Phase 1 (0-10K users)
- Single region deployment
- Managed services (Atlas, ElastiCache)
- Auto-scaling app tier (2-10 instances)

### Phase 2 (10K-100K users)
- Multi-region read replicas
- CDN for form assets
- Queue-based processing
- Database sharding preparation

### Phase 3 (100K+ users)
- Multi-region active-active
- Database sharding by user
- Edge computing for forms
- Custom infrastructure optimization

---

*Architecture documented: March 2024*
