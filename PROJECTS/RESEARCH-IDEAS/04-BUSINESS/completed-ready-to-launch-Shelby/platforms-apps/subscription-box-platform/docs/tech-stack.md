# Technology Stack

## Architecture Overview

BoxFlow is built on a modern, scalable microservices architecture designed for high availability, security, and performance.

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Web    │  │  iOS App │  │ Android  │  │   API    │    │
│  │  Portal  │  │          │  │   App    │  │ Partners │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway                             │
│         (Kong / AWS API Gateway / Cloudflare)                │
│         Rate Limiting • Auth • Routing • Logging             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Microservices Layer                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Users   │  │ Subs     │  │  Orders  │  │ Inventory│    │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Billing  │  │ Ship     │  │ Analytics│  │  Notify  │    │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │PostgreSQL│  │  Redis   │  │Elastic   │  │   S3     │    │
│  │  (RDS)   │  │ (Cache)  │  │  Search  │  │ (Files)  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Backend Technologies

### Core Stack

**Runtime & Language**
- Node.js 20+ (TypeScript)
- Python 3.11+ (ML/Data services)
- Go (High-performance services)

**Frameworks**
- NestJS (API services)
- FastAPI (Python services)
- Gin (Go services)

**Database**
- PostgreSQL 15+ (Primary datastore)
- Redis 7+ (Caching, sessions, queues)
- Elasticsearch 8+ (Search, analytics)
- TimescaleDB (Time-series metrics)

**Message Queue**
- Apache Kafka (Event streaming)
- RabbitMQ (Task queues)
- AWS SQS (Backup queue)

### Infrastructure

**Cloud Provider**
- Primary: AWS (us-east-1, us-west-2, eu-west-1)
- Multi-region failover
- CloudFront CDN

**Container & Orchestration**
- Docker
- Kubernetes (EKS)
- Helm charts
- Istio service mesh

**Infrastructure as Code**
- Terraform
- Pulumi
- GitHub Actions

**Monitoring & Observability**
- Datadog (APM, logs, metrics)
- Grafana (Dashboards)
- Prometheus (Metrics)
- Sentry (Error tracking)
- PagerDuty (Alerting)

---

## Frontend Technologies

### Web Portal

**Framework**
- Next.js 14+ (React)
- TypeScript
- Tailwind CSS

**State Management**
- Zustand
- React Query
- Redux Toolkit (complex state)

**UI Components**
- Radix UI (Primitives)
- shadcn/ui
- Recharts (Data visualization)
- React Table

**Testing**
- Jest
- React Testing Library
- Playwright (E2E)
- Storybook

### Mobile Apps

**Framework**
- React Native
- Expo (Development workflow)
- TypeScript

**Native Modules**
- React Native Maps
- React Native Payments
- React Native Biometrics
- React Native Push Notifications

**State Management**
- Zustand
- React Query

**Testing**
- Jest
- Detox (E2E)

---

## Third-Party Integrations

### Payment Processing

**Primary: Stripe**
```typescript
// Stripe Integration Example
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create subscription
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: priceId }],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent'],
});

// Handle webhook events
app.post('/webhooks/stripe', (req, res) => {
  const event = req.body;
  
  switch (event.type) {
    case 'invoice.payment_succeeded':
      handlePaymentSuccess(event.data.object);
      break;
    case 'customer.subscription.updated':
      handleSubscriptionUpdate(event.data.object);
      break;
    case 'invoice.payment_failed':
      handlePaymentFailure(event.data.object);
      break;
  }
  
  res.json({ received: true });
});
```

**Alternative Gateways**
- PayPal
- Braintree
- Adyen (Enterprise)
- Authorize.net

### E-commerce Platforms

**Shopify Integration**
```typescript
// Shopify GraphQL API
const SHOPIFY_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          variants {
            edges {
              node {
                id
                price
                inventoryQuantity
              }
            }
          }
        }
      }
    }
  }
`;

// Sync products to BoxFlow catalog
async function syncShopifyProducts(shopDomain: string) {
  const response = await fetch(`https://${shopDomain}/admin/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query: SHOPIFY_QUERY }),
  });
  
  const data = await response.json();
  // Process and sync products...
}
```

**Other Platforms**
- WooCommerce (WordPress)
- BigCommerce
- Magento/Adobe Commerce
- Custom APIs

### Fulfillment APIs

**ShipBob Integration**
```typescript
// ShipBob API - Create Order
async function createShipBobOrder(order: Order) {
  const response = await fetch('https://api.shipbob.com/v1/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SHIPBOB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order: {
        external_id: order.id,
        shipping_address: {
          name: order.customer.name,
          address1: order.shipping.address1,
          city: order.shipping.city,
          state: order.shipping.state,
          zip: order.shipping.zip,
          country: order.shipping.country,
          email: order.customer.email,
          phone: order.customer.phone,
        },
        line_items: order.items.map(item => ({
          sku: item.sku,
          quantity: item.quantity,
        })),
        shipping_method: 'standard',
      },
    }),
  });
  
  return response.json();
}
```

**Other Fulfillment Partners**
- ShipStation
- Deliverr
- Amazon FBA
- Red Stag Fulfillment
- Custom 3PL APIs

### Shipping Carriers

**EasyPost Integration**
```typescript
import EasyPost from '@easypost/api';

const api = new EasyPost(process.env.EASYPOST_API_KEY);

// Create shipment
const shipment = await api.Shipment.create({
  to_address: {
    name: customer.name,
    street1: customer.address1,
    city: customer.city,
    state: customer.state,
    zip: customer.zip,
    country: customer.country,
    email: customer.email,
  },
  from_address: {
    name: warehouse.name,
    street1: warehouse.address1,
    city: warehouse.city,
    state: warehouse.state,
    zip: warehouse.zip,
    country: warehouse.country,
  },
  parcel: {
    length: box.length,
    width: box.width,
    height: box.height,
    weight: box.weight,
  },
  options: {
    label_format: 'PDF',
  },
});

// Buy label with best rate
const rate = shipment.lowestRate();
const boughtShipment = await shipment.buy({ rate });

// Get tracking info
const trackingInfo = await boughtShipment.tracking_status;
```

**Direct Carrier APIs**
- USPS Web Tools
- UPS API
- FedEx Web Services
- DHL Express API

---

## Security & Compliance

### Security Measures

**Data Protection**
- AES-256 encryption at rest
- TLS 1.3 in transit
- Key management (AWS KMS)
- Secrets management (HashiCorp Vault)

**Access Control**
- OAuth 2.0 / OpenID Connect
- JWT tokens with short expiry
- Role-based access control (RBAC)
- API key management
- IP whitelisting (Enterprise)

**Infrastructure Security**
- VPC isolation
- Security groups
- WAF (Web Application Firewall)
- DDoS protection (Cloudflare)
- Regular penetration testing

### Compliance

**Certifications**
- SOC 2 Type II
- PCI-DSS Level 1
- GDPR compliant
- CCPA compliant
- ISO 27001 (in progress)

**Data Privacy**
- Data processing agreements
- Right to deletion
- Data portability
- Consent management
- Privacy-by-design

---

## API Documentation

### REST API

**Base URL:** `https://api.boxflow.io/v1`

**Authentication:** Bearer token
```bash
curl -X GET "https://api.boxflow.io/v1/subscriptions" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Key Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /subscriptions | List subscriptions |
| POST | /subscriptions | Create subscription |
| GET | /subscriptions/:id | Get subscription |
| PATCH | /subscriptions/:id | Update subscription |
| DELETE | /subscriptions/:id | Cancel subscription |
| GET | /boxes | List boxes |
| POST | /boxes | Create box |
| GET | /customers | List customers |
| POST | /customers | Create customer |
| GET | /orders | List orders |
| POST | /orders/:id/ship | Ship order |
| GET | /inventory | Get inventory |
| PATCH | /inventory/:id | Update inventory |
| GET | /analytics/mrr | Get MRR data |
| GET | /analytics/churn | Get churn data |

### Webhooks

**Supported Events**
- `subscription.created`
- `subscription.updated`
- `subscription.cancelled`
- `payment.succeeded`
- `payment.failed`
- `order.created`
- `order.shipped`
- `order.delivered`
- `inventory.low`
- `customer.created`

**Webhook Payload Example**
```json
{
  "id": "evt_123456789",
  "type": "subscription.created",
  "created_at": "2026-03-23T18:00:00Z",
  "data": {
    "subscription": {
      "id": "sub_abc123",
      "customer_id": "cus_xyz789",
      "box_id": "box_def456",
      "status": "active",
      "next_billing_date": "2026-04-23",
      "amount": 4999,
      "currency": "usd"
    }
  }
}
```

### GraphQL API

**Endpoint:** `https://api.boxflow.io/graphql`

**Example Query**
```graphql
query GetSubscription($id: ID!) {
  subscription(id: $id) {
    id
    status
    customer {
      id
      name
      email
    }
    box {
      id
      name
      price
    }
    orders(first: 10) {
      edges {
        node {
          id
          status
          shippedAt
          trackingNumber
        }
      }
    }
  }
}
```

---

## Performance & Scalability

### Performance Targets

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 2s |
| Uptime | 99.9% |
| Error Rate | < 0.1% |

### Scalability

**Horizontal Scaling**
- Auto-scaling Kubernetes pods
- Database read replicas
- Redis clustering
- CDN for static assets

**Capacity Planning**
- 10,000 requests/second baseline
- 100,000 concurrent users
- 10M+ subscriptions supported
- Multi-region deployment

---

## Development Workflow

### CI/CD Pipeline

```yaml
# GitHub Actions Example
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./deploy.sh production
```

### Environments

| Environment | Purpose | URL |
|-------------|---------|-----|
| Development | Local dev | localhost:3000 |
| Staging | QA testing | staging.boxflow.io |
| Production | Live users | boxflow.io |

### Code Quality

- ESLint + Prettier
- TypeScript strict mode
- 80% test coverage minimum
- Code review required
- Automated security scanning
