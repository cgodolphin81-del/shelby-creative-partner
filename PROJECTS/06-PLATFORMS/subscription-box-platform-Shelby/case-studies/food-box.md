# Case Study: SnackPath International

## Company Overview

**Company:** SnackPath International
**Founded:** 2022
**Location:** Austin, TX
**Vertical:** Food & Beverage (International Snacks)
**BoxFlow Customer Since:** June 2024

---

## The Challenge

SnackPath delivers curated snacks from different countries each month. After rapid initial growth, they faced critical scaling challenges:

**Problems:**
- Complex inventory management (100+ SKUs from 20+ countries)
- Expiry date tracking was manual and error-prone
- International shipping compliance issues
- No customer preference management (allergies, dietary restrictions)
- High customer support volume (dietary questions)
- Inability to forecast demand accurately

**Impact:**
- 8% of boxes shipped with expired or near-expiry products
- 15% of orders had customs delays
- Customer complaints: 25% of shipments
- Churn rate: 6.5% monthly
- Inventory waste: 12% of product value

---

## The Solution

SnackPath implemented BoxFlow with a focus on food-specific requirements:

### 1. Advanced Inventory Management
- Batch and expiry date tracking
- FEFO (First-Expired, First-Out) fulfillment
- Automated expiry alerts (90, 60, 30 days)
- Country of origin tracking

### 2. Dietary Preference System
- Customer allergy/dietary profile
- Automatic product filtering
- Vegan, vegetarian, gluten-free, halal, kosher options
- Nut allergy safe boxes

### 3. International Compliance
- HS code management
- Automated customs forms
- Restricted items database by country
- Ingredient declaration templates

### 4. Demand Forecasting
- ML-based demand prediction
- Seasonal trend analysis
- Country rotation planning
- Supplier lead time optimization

### 5. Customer Portal
- Dietary preference management
- Country preferences
- Skip/pause functionality
- Allergy-safe box guarantee

---

## Implementation Timeline

| Week | Milestone |
|------|-----------|
| 1-2 | Platform setup, team onboarding |
| 3-5 | Inventory migration with batch/expiry data |
| 6-8 | Dietary preference system configuration |
| 9-10 | Customs compliance setup |
| 11-12 | 3PL integration (multiple warehouses) |
| 13-14 | Customer portal beta |
| 15-16 | Full launch |

**Total Implementation:** 16 weeks (complex inventory requirements)
**Dedicated Resources:** 1 PM, 2 Developers, 1 Ops Manager, 1 QA

---

## Results (10 Months Post-Implementation)

### Business Metrics

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Active Subscribers | 2,200 | 15,000 | 582% growth |
| Monthly Churn | 6.5% | 2.8% | 57% reduction |
| MRR | $88,000 | $675,000 | 667% growth |
| Customer LTV | $280 | $1,150 | 311% increase |
| Countries Served | 12 | 45 | 275% increase |

### Operational Metrics

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Expired Product Shipments | 8% | 0.2% | 97.5% reduction |
| Customs Delays | 15% | 3% | 80% reduction |
| Inventory Waste | 12% | 2% | 83% reduction |
| Dietary Complaint Rate | 5% | 0.3% | 94% reduction |
| Forecast Accuracy | 55% | 91% | 65% improvement |

### Customer Satisfaction

| Metric | Before | After |
|--------|--------|-------|
| NPS Score | 28 | 72 |
| CSAT Score | 3.2/5 | 4.7/5 |
| Dietary Issue Reports | 25%/month | 3/month |
| Repeat Purchase Rate | 52% | 88% |

---

## Financial Impact

### Revenue Growth

```
Pre-BoxFlow (2023):
- Annual Revenue: $1,056,000
- Growth Rate: 15%

Post-BoxFlow (2024):
- Annual Revenue: $6,750,000
- Growth Rate: 539%
```

### Cost Savings

| Category | Annual Savings |
|----------|---------------|
| Reduced inventory waste | $285,000 |
| Lower customs issues | $125,000 |
| Reduced customer complaints | $95,000 |
| Improved forecasting | $180,000 |
| Reduced churn | $420,000 |
| **Total Annual Savings** | **$1,105,000** |

### BoxFlow Investment

| Cost | Amount |
|------|--------|
| Subscription (Professional Plan) | $7,188/year |
| GMV Fees (1%) | $67,500/year |
| Implementation Services | $12,000 (one-time) |
| Custom Development (dietary system) | $8,000 (one-time) |
| **Total Year 1 Cost** | **$94,688** |

**ROI:** 1,167% ($1.1M savings / $95K cost)
**Payback Period:** 1 month

---

## Key Success Factors

### 1. Expiry Date Management
- FEFO fulfillment eliminated expired shipments
- Automated alerts for near-expiry products
- Flash sales for products nearing expiry (reduced waste)
- Customer trust restored

### 2. Dietary Safety
- Comprehensive allergy profile system
- Automatic product filtering
- Zero allergy incidents post-implementation
- Marketing advantage: "Allergy-Safe Guaranteed"

### 3. International Compliance
- Automated customs documentation
- Restricted items database
- 80% reduction in customs delays
- Expanded to 45 countries safely

### 4. Demand Forecasting
- 91% forecast accuracy
- Reduced over-ordering from high-risk countries
- Better supplier negotiation with accurate forecasts
- 83% reduction in inventory waste

---

## Customer Quote

> "Food subscriptions have unique challenges—expiry dates, allergies, customs. BoxFlow solved all of these. We went from constant fires to smooth operations. Our customers trust us with their dietary safety, and that's priceless. The ROI was obvious within the first month."
>
> **— Marcus Rodriguez, Co-Founder & COO, SnackPath International**

---

## Technical Implementation Highlights

### Expiry Tracking System

```javascript
// BoxFlow batch tracking for food products
const batch = await boxflow.inventory.createBatch({
  sku: 'JPN-TAKIS-001',
  quantity: 500,
  manufactureDate: '2026-01-15',
  expiryDate: '2026-07-15',
  warehouse: 'aus-tx-01',
  supplier: 'Japan Snacks Co',
});

// Automatic FEFO allocation
const allocation = await boxflow.orders.allocate({
  orderId: 'ord_12345',
  strategy: 'FEFO', // First-Expired, First-Out
});
```

### Dietary Filtering

```javascript
// Customer dietary profile
const profile = await boxflow.customers.getDietaryProfile(customerId);
// Returns: { vegan: true, glutenFree: false, nutAllergy: true, ... }

// Filter products for box
const safeProducts = await boxflow.products.filter({
  compatibleWith: profile,
  country: 'Japan',
  category: 'snacks',
});
```

---

## Lessons Learned

### What Worked Well
- **Batch tracking from day one:** Clean data migration was critical
- **Dietary preference onboarding:** Quiz during signup increased completion
- **Multi-warehouse strategy:** Reduced shipping times and costs
- **Proactive expiry alerts:** Enabled flash sales before waste

### Challenges Overcome
- **Supplier data inconsistency:** Different expiry date formats → standardization script
- **Customs complexity:** Each country has different rules → built comprehensive database
- **Allergy cross-contamination:** Some products made in facilities with allergens → enhanced labeling

---

## Current State (14 Months Later)

**SnackPath International Today:**
- 18,500 active subscribers
- $850,000 MRR
- Team of 35 employees
- 4 fulfillment centers (US, UK, EU, AU)
- 60+ countries of origin
- 8 box types (by country/region)
- B2B corporate gifting program

**BoxFlow Plan:** Enterprise tier
**Why:** Multi-warehouse, white-label apps, dedicated support, SLA

---

## Future Roadmap

**SnackPath Plans with BoxFlow:**
1. AI-powered country recommendations
2. Virtual "tasting events" with live streams
3. Integration with nutrition tracking apps
4. Corporate gifting portal
5. Retail expansion (Amazon, specialty stores)

**Quote from COO:**
> "BoxFlow didn't just solve our problems—it enabled us to dream bigger. We're now the leading international snack subscription globally, and the platform scales with us."

---

## About SnackPath International

SnackPath delivers curated snacks from a different country each month, with full-size products, cultural information, and recipes. Subscribers can choose dietary-specific boxes (vegan, gluten-free, nut-free).

**Products:** Sweet and savory snacks, beverages, candies
**Price Points:** $39 (Classic), $59 (Premium), $89 (Family)
**Target Audience:** Foodies, travelers, expats, families
**Differentiation:** Authentic products, cultural education, dietary safety

**Website:** snackpath.io
**Social:** @snackpath (350K Instagram, 200K TikTok)

---

*Case study published: March 2026*
*Data verified by SnackPath International finance team*
