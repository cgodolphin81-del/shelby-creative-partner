# Operations & Fulfillment

## Overview

BoxFlow provides end-to-end operations management for subscription box businesses, from inventory procurement to final delivery. Our platform integrates with leading fulfillment partners while providing the tools to manage operations in-house if preferred.

---

## Fulfillment Models

### 1. BoxFlow Fulfillment Network

**Overview:**
BoxFlow's integrated network of vetted 3PL (Third-Party Logistics) partners provides turnkey fulfillment for subscription boxes.

**Benefits:**
- No upfront warehouse investment
- Scalable capacity
- Volume-based pricing
- Quality assurance
- Integrated technology

**How It Works:**
1. Brand ships inventory to BoxFlow 3PL partner
2. BoxFlow manages receiving and storage
3. Platform syncs subscriber data
4. 3PL picks, packs, and ships boxes
5. Tracking automatically synced to subscribers

**Pricing:**
| Service | Cost |
|---------|------|
| Receiving | $25/hour or $0.50/unit |
| Storage | $15/pallet/month |
| Pick & Pack | $2.50 + $0.50/item |
| Shipping | Actual carrier cost + 10% |
| Returns | $3.00/unit |
| Kitting | $1.00/unit |

**Partner Locations:**
- Los Angeles, CA (West Coast)
- Dallas, TX (Central)
- Philadelphia, PA (East Coast)
- Toronto, ON (Canada)
- London, UK (Europe)
- Sydney, AU (Australia)

---

### 2. Integrated 3PL Partners

**ShipBob**
- Best for: Growing brands
- Locations: 40+ fulfillment centers globally
- Integration: Native API integration
- Pricing: Competitive, volume-based

**ShipStation**
- Best for: Multi-channel sellers
- Features: Label printing, rate shopping
- Integration: Webhook-based
- Pricing: $9.99-$79.99/month

**Deliverr (Shopify)**
- Best for: Fast shipping (2-day)
- Locations: US-wide network
- Integration: API + Shopify
- Pricing: Storage + fulfillment fees

**Red Stag Fulfillment**
- Best for: Heavy/bulky items
- Features: Zero shrinkage guarantee
- Integration: API integration
- Pricing: Custom quotes

**Amazon FBA**
- Best for: Prime eligibility
- Features: Customer service included
- Integration: MCF (Multi-Channel Fulfillment)
- Pricing: FBA fee structure

---

### 3. In-House Fulfillment

**For brands that prefer to manage their own operations:**

**BoxFlow Provides:**
- Pick list generation
- Packing slip printing
- Shipping label integration
- Inventory tracking
- Quality control workflows

**Requirements:**
- Warehouse space
- Staff (pickers, packers, managers)
- Packing equipment
- Shipping software integration
- Quality control processes

**Recommended For:**
- 5,000+ monthly boxes
- Complex kitting requirements
- Proprietary packaging
- Cost optimization at scale

---

## Inventory Management

### Procurement Workflow

```
1. Demand Forecast
   ↓
2. Purchase Order Creation
   ↓
3. Supplier Communication
   ↓
4. Receiving & QC
   ↓
5. Inventory Allocation
   ↓
6. Production Scheduling
```

### Demand Forecasting

**BoxFlow Forecasting Engine:**
- Historical sales data analysis
- Seasonal trend detection
- Growth rate projection
- Subscriber churn modeling
- New subscriber pipeline

**Forecast Accuracy:**
- 30-day forecast: 95%+ accuracy
- 60-day forecast: 90%+ accuracy
- 90-day forecast: 85%+ accuracy

**Reorder Point Calculation:**
```
Reorder Point = (Average Daily Sales × Lead Time) + Safety Stock

Safety Stock = (Max Daily Sales × Max Lead Time) - (Average Daily Sales × Average Lead Time)
```

### Inventory Tracking

**Real-Time Visibility:**
- Current stock levels
- Allocated inventory
- In-transit inventory
- On-order quantities
- Reorder alerts

**Batch & Lot Tracking:**
- Expiry date management
- Batch traceability
- Recall management
- FIFO/FEFO support

**Inventory Valuation:**
- FIFO (First-In, First-Out)
- LIFO (Last-In, First-Out)
- Weighted Average Cost
- Real-time COGS calculation

---

## Packaging

### Box Sourcing

**BoxFlow Packaging Partners:**
- noissue (custom branded packaging)
- Packlane (custom boxes)
- Uline (standard boxes)
- Salazar Packaging (custom)
- Packaging Price (wholesale)

**Box Types:**
| Type | Dimensions | Use Case | Cost/Unit |
|------|------------|----------|-----------|
| Small | 6×4×2" | Samples, cosmetics | $0.50-1.50 |
| Medium | 10×8×3" | Standard boxes | $1.00-3.00 |
| Large | 14×10×4" | Premium boxes | $2.00-5.00 |
| Extra Large | 18×14×6" | Multiple items | $3.00-7.00 |

### Custom Packaging

**Branding Options:**
- Custom printed boxes
- Branded tissue paper
- Custom inserts
- Stickers and seals
- Thank you cards
- QR codes

**Minimum Order Quantities:**
- Custom printed boxes: 500-1,000 units
- Branded tissue: 500 units
- Custom inserts: 1,000 units
- Stickers: 250 units

**Lead Times:**
- Standard packaging: 3-5 days
- Custom printed: 2-4 weeks
- Overseas production: 6-8 weeks

### Sustainable Packaging

**Eco-Friendly Options:**
- Recycled cardboard
- Biodegradable mailers
- Compostable void fill
- Soy-based inks
- Minimal packaging design

**Certifications:**
- FSC Certified
- Recyclable materials
- Carbon-neutral shipping options

---

## Shipping Operations

### Carrier Selection

**Decision Framework:**
```
Package Weight + Destination + Speed = Best Carrier

< 1 lb, domestic → USPS First Class
1-5 lbs, domestic → USPS Priority / UPS Ground
5+ lbs, domestic → UPS Ground / FedEx Ground
International → DHL Express / USPS Priority Intl
Time-sensitive → FedEx 2-Day / UPS 2nd Day Air
```

### Rate Shopping

**BoxFlow automatically selects the best carrier based on:**
- Cost
- Delivery speed
- Reliability (on-time performance)
- Customer preferences
- Carbon footprint (optional)

**Average Savings:** 15-25% vs. single carrier

### Shipping Zones

**US Domestic Zones:**
| Zone | States | Avg. Transit | Avg. Cost (2 lb) |
|------|--------|--------------|------------------|
| 1-2 | Local/Regional | 1-2 days | $6-8 |
| 3-4 | 2-3 states away | 2-3 days | $8-12 |
| 5-6 | Cross-country | 3-4 days | $12-18 |
| 7-8 | Farthest (AK, HI) | 4-6 days | $18-30 |

### International Shipping

**Supported Countries:** 150+

**Key Considerations:**
- Customs forms (CN22/CN23)
- HS codes for products
- Duties and taxes (DDP vs. DDU)
- Restricted items by country
- Delivery time expectations

**DDP (Delivered Duty Paid):**
- Customer pays no additional fees
- Better customer experience
- Higher upfront cost

**DDU (Delivered Duty Unpaid):**
- Customer pays duties on delivery
- Lower upfront cost
- Risk of refused packages

---

## Quality Control

### Receiving QC

**Process:**
1. Count units received
2. Inspect for damage
3. Verify SKU accuracy
4. Check expiry dates (if applicable)
5. Document discrepancies
6. Update inventory system

**Acceptance Criteria:**
- Quantity variance: < 2%
- Damage rate: < 1%
- SKU accuracy: 100%

### Pre-Shipment QC

**Checklist:**
- [ ] All items present
- [ ] Correct items for box type
- [ ] No damaged products
- [ ] Packaging intact
- [ ] Insert cards included
- [ ] Personalization correct (if applicable)
- [ ] Weight within tolerance

**Audit Rate:**
- New suppliers: 100% inspection
- Established suppliers: 10% random audit
- High-value boxes: 25% inspection

### Customer Feedback Loop

**Post-Delivery Survey:**
- Product quality rating
- Packaging condition
- Accuracy of contents
- Overall satisfaction
- Photo upload (damaged items)

**Issue Resolution:**
- Damaged items: Replacement or credit
- Missing items: Reship or credit
- Wrong items: Exchange or credit
- Response time: < 24 hours

---

## Returns & Exchanges

### Return Policy Framework

**Standard Policy:**
- 30-day return window
- Unused products only
- Customer pays return shipping (unless defect)
- Refund or exchange options

**Subscription-Specific:**
- Skip instead of return (future boxes)
- Swap items (if before cut-off date)
- Credit for future boxes
- Partial refunds for damaged items

### Return Workflow

```
1. Customer initiates return (portal)
   ↓
2. Return authorization generated
   ↓
3. Return label provided
   ↓
4. Package received at warehouse
   ↓
5. QC inspection
   ↓
6. Refund/exchange processed
   ↓
7. Inventory updated (if restockable)
```

### Return Metrics

**Target Benchmarks:**
- Return rate: < 5%
- Processing time: < 48 hours
- Restock rate: > 80%
- Customer satisfaction: > 90%

---

## Operations Metrics & KPIs

### Fulfillment Metrics

| Metric | Target | Calculation |
|--------|--------|-------------|
| Order Accuracy | 99.5% | (Correct Orders / Total Orders) × 100 |
| On-Time Shipping | 98% | (Orders Shipped On-Time / Total Orders) × 100 |
| Pick & Pack Time | < 24 hours | Order received to shipped |
| Inventory Accuracy | 99% | (System Count / Physical Count) × 100 |
| Return Rate | < 5% | (Returns / Total Orders) × 100 |

### Cost Metrics

| Metric | Target | Industry Benchmark |
|--------|--------|-------------------|
| Fulfillment Cost/Box | $4-8 | $5-10 |
| Shipping Cost/Box | $6-12 | $7-15 |
| Packaging Cost/Box | $1-3 | $1-4 |
| Total Ops Cost/Box | $11-23 | $13-29 |

### Efficiency Metrics

| Metric | Target | Formula |
|--------|--------|---------|
| Orders/Hour/Picker | 40-60 | Orders processed / labor hours |
| Cost as % of Revenue | 15-25% | Ops costs / revenue |
| Inventory Turnover | 6-12x | COGS / average inventory |
| Days Sales of Inventory | 30-60 | (Inventory / COGS) × 365 |

---

## Scaling Operations

### Growth Milestones

**0-500 Subscribers:**
- In-house or small 3PL
- Manual processes acceptable
- Focus on quality over efficiency

**500-2,000 Subscribers:**
- Professional 3PL partnership
- Automated workflows
- Basic forecasting

**2,000-10,000 Subscribers:**
- Multi-3PL strategy (redundancy)
- Advanced forecasting
- Dedicated ops team

**10,000+ Subscribers:**
- Consider in-house warehouse
- Multiple fulfillment centers
- Sophisticated WMS
- Dedicated operations leadership

### Geographic Expansion

**Phase 1:** Single country (domestic)
**Phase 2:** Add Canada/UK (English-speaking)
**Phase 3:** EU expansion (VAT compliance)
**Phase 4:** APAC (Australia, Japan)
**Phase 5:** Global (selective markets)

**Considerations:**
- Local fulfillment partners
- Currency and payment methods
- Tax compliance (VAT, GST)
- Product regulations
- Shipping costs and times
- Customer support (language, timezone)

---

## Risk Management

### Supply Chain Risks

**Mitigation Strategies:**
- Multiple suppliers per product
- Safety stock (30-60 days)
- Regular supplier audits
- Contractual SLAs
- Insurance coverage

### Business Continuity

**Disaster Recovery:**
- Multiple fulfillment centers
- Data backups (daily)
- Redundant systems
- Emergency contact protocols
- Communication templates

### Compliance

**Required Compliance:**
- Product safety regulations
- Labeling requirements
- Import/export regulations
- Data privacy (GDPR, CCPA)
- Tax collection and remittance

---

## Operations Team Structure

### Recommended Roles by Stage

**Startup (0-2,000 subscribers):**
- Operations Manager (1)
- Customer Support (1-2)
- Virtual assistants (as needed)

**Growth (2,000-10,000 subscribers):**
- Director of Operations (1)
- Inventory Manager (1)
- Fulfillment Coordinator (1)
- Customer Support (3-5)
- Data Analyst (1)

**Scale (10,000+ subscribers):**
- VP of Operations (1)
- Supply Chain Manager (1)
- Warehouse Manager(s) (per location)
- Inventory Planners (2-3)
- Logistics Coordinator (2)
- Customer Support (10+)
- Data/BI Team (3-5)
- Quality Assurance (2-3)

---

## Technology Stack

### Operations Software

**Integrated in BoxFlow:**
- Inventory management
- Order management
- Shipping integration
- Basic analytics

**Complementary Tools:**
- **WMS:** Fishbowl, Cin7, Skubana
- **ERP:** NetSuite, SAP, Microsoft Dynamics
- **Quality Control:** Tulip, SafetyCulture
- **Communication:** Slack, Microsoft Teams
- **Project Management:** Asana, Monday, Jira

### Integration Architecture

```
BoxFlow Platform
    ├── Inventory API
    ├── Order API
    ├── Shipping API
    └── Analytics API
          │
          ├── 3PL Systems
          ├── Carrier APIs
          ├── Supplier ERPs
          └── Internal Tools
```
