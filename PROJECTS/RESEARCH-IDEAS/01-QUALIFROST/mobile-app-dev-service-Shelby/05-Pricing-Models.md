# 05. Pricing Models

Pricing strategies, calculators, and engagement models for mobile app development.

---

## Pricing Strategy Overview

```
                    PRICING DECISION TREE
                    
                    ┌─────────────────┐
                    │  Project Scope  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
         Well-defined   Some unknowns   Highly uncertain
              │              │              │
              ▼              ▼              ▼
         ┌─────────┐   ┌──────────┐   ┌──────────┐
         │ Fixed   │   │ Hybrid   │   │ Time &   │
         │ Price   │   │ Model    │   │ Materials│
         └─────────┘   └──────────┘   └──────────┘
```

---

## Pricing Model Comparison

| Model | Best For | Pros | Cons | Margin Risk |
|-------|----------|------|------|-------------|
| Fixed Price | Well-defined scope | Predictable for client | Scope creep risk | High |
| Time & Materials | Evolving requirements | Flexible | Client budget anxiety | Low |
| Milestone-Based | Medium certainty | Balanced | Admin overhead | Medium |
| Retainer | Ongoing work | Stable revenue | Capacity planning | Low |
| Equity + Cash | Startups | Upside potential | Illiquid, risky | Variable |

---

## Fixed Price Model

### When to Use

✅ Requirements are clear and documented
✅ Client has fixed budget
✅ Similar projects completed before
✅ Low risk of scope changes
✅ Timeline is firm

### Pricing Formula

```
Fixed Price = (Estimated Hours × Hourly Rate) + Contingency + Profit Margin

Where:
- Estimated Hours: Sum of all task estimates
- Hourly Rate: Your blended rate ($100-200/hr)
- Contingency: 20-30% for unknowns
- Profit Margin: 20-30% target
```

### Example Calculation

```
Feature Estimates:
├─ User Authentication: 40 hours
├─ User Profiles: 32 hours
├─ Search/Filter: 48 hours
├─ Payment Integration: 56 hours
├─ Push Notifications: 24 hours
├─ Admin Dashboard: 64 hours
├─ Testing & QA: 80 hours
├─ Project Management: 60 hours
└─ Deployment: 16 hours

Total Estimated Hours: 420 hours

Blended Rate: $150/hour
Base Cost: 420 × $150 = $63,000

Contingency (25%): $15,750
Subtotal: $78,750

Profit Margin (25%): $19,688

FINAL FIXED PRICE: $98,438 → Round to $98,000 or $100,000
```

### Fixed Price Tiers

| Tier | Price Range | Timeline | Features |
|------|-------------|----------|----------|
| MVP | $25K - $50K | 6-10 weeks | 3-5 core features, 1 platform |
| Standard | $50K - $100K | 10-16 weeks | Full feature set, cross-platform |
| Enterprise | $100K - $250K | 16-26 weeks | Complex integrations, both platforms |
| Custom | $250K+ | 26+ weeks | Multi-product, enterprise scale |

### Change Order Process

**For scope changes:**

1. Client submits change request
2. Team estimates impact (hours + cost)
3. Present change order with:
   - Description of change
   - Impact on timeline
   - Additional cost
4. Client approves (written)
5. Work begins

**Change Order Template:**
```
CHANGE ORDER #[Number]
Project: [Project Name]
Date: [Date]

Description of Change:
[Detailed description]

Impact on Timeline:
[Additional weeks/days]

Additional Cost:
$[Amount]

New Project Total:
$[New Total]

Approved By: ___________________ Date: _________
```

---

## Time & Materials Model

### When to Use

✅ Requirements will evolve
✅ Startup environment (pivot likely)
✅ Complex/uncertain technical challenges
✅ Long-term partnership expected
✅ Client wants flexibility

### Hourly Rate Structure

| Role | Rate Range | Typical Rate |
|------|------------|--------------|
| Junior Developer | $75 - $100/hr | $85/hr |
| Mid-Level Developer | $100 - $150/hr | $125/hr |
| Senior Developer | $150 - $200/hr | $175/hr |
| Tech Lead | $175 - $250/hr | $200/hr |
| Designer | $100 - $175/hr | $135/hr |
| Project Manager | $125 - $200/hr | $150/hr |
| QA Engineer | $75 - $125/hr | $95/hr |

### Blended Rate Calculation

```
Team Composition:
├─ 1 Senior Developer (40 hrs/wk × $175)
├─ 1 Mid Developer (40 hrs/wk × $125)
├─ 1 Designer (20 hrs/wk × $135)
└─ 0.5 PM (10 hrs/wk × $150)

Weekly Cost:
= (40 × 175) + (40 × 125) + (20 × 135) + (10 × 150)
= 7,000 + 5,000 + 2,700 + 1,500
= $16,200/week

Total Hours: 110 hours/week
Blended Rate: $16,200 / 110 = $147/hr

Add 20% agency margin: $147 × 1.20 = $176/hr

BILLABLE BLENDED RATE: $175-180/hr
```

### Weekly Billing Example

```
WEEK OF [Date]

Team Hours:
├─ John (Senior Dev): 40 hrs × $175 = $7,000
├─ Sarah (Mid Dev): 40 hrs × $125 = $5,000
├─ Mike (Designer): 18 hrs × $135 = $2,430
└─ Lisa (PM): 10 hrs × $150 = $1,500

Subtotal: $15,930
Expenses: $0
Total: $15,930

Hours Logged: 108 hours
Effective Rate: $147.50/hr
```

### Budget Caps & Notifications

**Protect both parties:**

- Set initial budget cap (e.g., $80K)
- Notify at 50%, 75%, 90% of budget
- Require approval to exceed cap
- Weekly hour estimates for next week

**Budget Notification Template:**
```
Subject: Budget Update - [Project Name]

Hi [Client],

Current budget status:
- Total Budget: $80,000
- Spent to Date: $60,000 (75%)
- Remaining: $20,000

Estimated completion: $75,000 (within budget)

Next week's estimated hours: $8,000

We'll notify you if this changes. Let us know if you have questions!
```

---

## Milestone-Based Model

### When to Use

✅ Medium scope certainty
✅ Clear deliverable phases
✅ Client wants payment tied to progress
✅ Balanced risk sharing

### Milestone Structure Example

| Milestone | Deliverable | % of Total | Amount |
|-----------|-------------|------------|--------|
| M1: Discovery | Requirements, wireframes, tech spec | 10% | $10,000 |
| M2: Design | Complete UI designs, prototype | 15% | $15,000 |
| M3: Development Phase 1 | Core features, alpha build | 25% | $25,000 |
| M4: Development Phase 2 | All features, beta build | 25% | $25,000 |
| M5: Testing & QA | QA complete, bug fixes | 15% | $15,000 |
| M6: Launch | App Store submission, handoff | 10% | $10,000 |
| **Total** | | **100%** | **$100,000** |

### Milestone Payment Terms

- Payment due within 7 days of milestone delivery
- Work on next milestone begins upon payment
- Late payment = project pause
- Milestone acceptance within 5 business days (or auto-approved)

---

## Equity Deals

### When to Consider

✅ Exceptional founding team
✅ Large market opportunity
✅ Cash-constrained but funded soon
✅ Strategic partnership potential
✅ You believe in the product

### Equity Structure Options

#### Option 1: Reduced Cash + Equity
```
Standard Price: $100,000
Cash Component: $50,000 (50%)
Equity Component: $50,000 value

At pre-money valuation of $5M:
Equity = $50,000 / $5,000,000 = 1%

Deal: $50K cash + 1% equity (vested over 2 years)
```

#### Option 2: Deferred Payment + Equity
```
Total Price: $100,000
Cash Now: $25,000
Deferred: $50,000 (due at Series A)
Equity: $25,000 value = 0.5%

Deal: $25K cash + $50K deferred + 0.5% equity
```

#### Option 3: Full Equity (Rare)
```
Total Price: $100,000
Cash: $0
Equity: $100,000 value

At $4M pre-money:
Equity = $100,000 / $4,000,000 = 2.5%

Deal: 2.5% equity (vested, with cliff)
```

### Equity Deal Terms

**Essential Terms:**
- Vesting schedule (typically 2-4 years)
- Cliff period (typically 1 year)
- Valuation cap or fixed percentage
- Anti-dilution protection (negotiable)
- Exit rights (tag-along)
- Information rights

**Red Flags:**
- No vesting (you leave, keep all equity)
- No defined valuation
- Idea-stage only (no traction)
- Founder unwilling to put in cash
- No clear path to funding

### Equity Deal Evaluation Framework

**Score each 1-5:**

| Factor | Weight | Score | Weighted |
|--------|--------|-------|----------|
| Team quality | 25% | | |
| Market size | 20% | | |
| Traction | 20% | | |
| Funding likelihood | 20% | | |
| Strategic fit | 15% | | |
| **Total** | **100%** | | |

**Only proceed if:**
- Total score > 3.5/5
- Cash component covers hard costs
- Equity has realistic exit potential

---

## Retainer Model

### For Ongoing Work

**Maintenance Retainer:**
```
Basic: $2,000/month
├─ 10 hours development
├─ Bug fixes
├─ OS updates
└─ Monthly report

Standard: $5,000/month
├─ 20 hours development
├─ Minor features
├─ Priority support
└─ Bi-weekly calls

Premium: $10,000/month
├─ 40 hours development (1 FTE)
├─ Feature development
├─ Weekly calls
└─ SLA included
```

**Development Retainer:**
```
Monthly commitment: $15,000-50,000
├─ Dedicated team members
├─ Priority scheduling
├─ Flexible scope
└─ Monthly planning
```

### Retainer Terms

- Unused hours: Roll over 1 month or expire
- Overages: Billed at standard rates
- Team changes: 2-week notice
- Termination: 30-day notice
- Rate increases: 10% annually or upon major scope change

---

## Pricing Calculator

### Quick Estimate Tool

```
PROJECT ESTIMATOR

1. Platform Selection:
   □ iOS only                    × $40,000 base
   □ Android only                × $40,000 base
   □ Both (native)               × $80,000 base
   □ Cross-platform              × $55,000 base

2. Feature Complexity:
   □ Simple (CRUD, basic UI)     × 1.0
   □ Medium (integrations)       × 1.5
   □ Complex (real-time, AI)     × 2.0
   □ Enterprise (scale, security)× 2.5

3. Design Requirements:
   □ Template-based              + $5,000
   □ Custom UI/UX                + $20,000
   □ Design system               + $35,000

4. Backend:
   □ Firebase/BaaS               + $10,000
   □ Custom API (simple)         + $30,000
   □ Custom backend (complex)    + $60,000
   □ Enterprise integration      + $100,000

5. Timeline Rush:
   □ Standard                    × 1.0
   □ Expedited (25% faster)      × 1.25
   □ Rush (50% faster)           × 1.5

EXAMPLE CALCULATION:
Cross-platform app ($55K)
× Medium complexity (1.5)       = $82,500
+ Custom UI/UX                  = $102,500
+ Firebase backend              = $112,500
× Standard timeline             = $112,500

ESTIMATED PRICE: $110,000 - $115,000
```

---

## Payment Terms

### Standard Terms

```
Fixed Price Projects:
├─ 30% - Upon contract signing
├─ 30% - Upon design approval
├─ 25% - Upon beta delivery
└─ 15% - Upon App Store submission

Time & Materials:
└─ Weekly or bi-weekly invoicing, net 7

Milestone-Based:
└─ Per milestone, net 7

Retainer:
└─ Monthly, upfront or net 7
```

### Late Payment Policy

- Invoice due: Net 7 days
- Late notice: Day 8
- Late fee: 1.5% per month (18% APR)
- Work pause: Day 15
- Contract review: Day 30

### Discounts

| Condition | Discount |
|-----------|----------|
| Upfront payment (full) | 5% |
| Non-profit | 10% |
| Referral from past client | 5% |
| Multi-project commitment | 10-15% |
| Case study rights | 5% |

---

## Competitive Positioning

### Market Rate Analysis (2025)

| Provider Type | Hourly Rate | Project Range |
|---------------|-------------|---------------|
| Freelancer (offshore) | $25-50/hr | $10K-50K |
| Freelancer (US/EU) | $75-150/hr | $25K-100K |
| Small Agency | $100-175/hr | $50K-200K |
| Mid-Size Agency | $150-225/hr | $100K-500K |
| Large Agency | $200-350/hr | $250K-1M+ |
| Big 4 Consulting | $300-500/hr | $500K-5M+ |

### Our Positioning

**Target: Premium Small/Mid-Size Agency**

- Rates: $100-200/hr (blended $150-175/hr)
- Projects: $50K-250K
- Value prop: Enterprise quality, startup agility
- Differentiators:
  - Transparent process
  - Direct developer access
  - Post-launch support included
  - Technology-agnostic recommendations

---

## Proposal Pricing Psychology

### Anchoring Strategy

Present 3 options (most choose middle):

```
OPTION 1: MVP - $55,000
Core features, single platform, 8 weeks

OPTION 2: STANDARD - $95,000 ← TARGET
Full features, both platforms, 14 weeks

OPTION 3: PREMIUM - $145,000
Everything + admin dashboard + analytics, 18 weeks
```

### Framing Techniques

**Good:**
- "Investment" not "cost"
- "Starting at" for minimum
- Value-focused language
- ROI examples

**Avoid:**
- "Expensive" or "cheap"
- Hourly breakdown in proposal (use phases)
- Apologetic pricing
- Discounts without reason

---

## Next Steps

1. Use calculator for initial estimates
2. Choose pricing model based on project certainty
3. Create proposal using [templates/proposal-template.md](./templates/proposal-template.md)
4. Negotiate within approved ranges
5. Document agreed terms in contract
