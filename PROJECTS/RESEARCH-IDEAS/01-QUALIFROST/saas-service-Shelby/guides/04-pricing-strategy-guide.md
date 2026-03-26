# Pricing Strategy Guide

Complete guide to SaaS pricing models, strategies, and optimization.

---

## Pricing Model Comparison

| Model | Best For | Pros | Cons | Example |
|-------|----------|------|------|---------|
| **Freemium** | Consumer, viral growth | Low friction, large top of funnel | High support cost, low conversion | Slack, Dropbox |
| **Free Trial** | B2B, complex products | Qualified leads, full feature access | Higher friction, time-limited | Salesforce, HubSpot |
| **Tiered** | Most SaaS | Clear value progression, upsell paths | Decision paralysis, feature gating | Zoom, Notion |
| **Usage-Based** | Infrastructure, APIs | Fair pricing, scales with customer | Unpredictable revenue, complex | AWS, Stripe |
| **Per-Seat** | Collaboration tools | Predictable, scales with team size | Discourages adoption, easy to share | Figma, Linear |
| **Flat Rate** | Simple products | Easy to understand, predictable | Leaves money on table, limited growth | Basecamp |

---

## 1. Freemium Model

### When to Use
- ✅ Product has viral/network effects
- ✅ Low marginal cost per user
- ✅ Clear upgrade path exists
- ✅ Free users provide value (content, network)
- ✅ Self-serve model

### When to Avoid
- ❌ High support cost per user
- ❌ Enterprise-focused product
- ❌ No clear free vs. paid differentiation
- ❌ Limited server/resources

### Best Practices
1. **Generous free tier** - Users should get real value
2. **Clear upgrade triggers** - Hit limits at moment of value
3. **No time limits** - Forever free, not trial
4. **Natural upgrade path** - Limits that matter to growing users

### Conversion Benchmarks
| Metric | Target |
|--------|--------|
| Free → Paid conversion | 2-5% |
| Time to convert | 14-60 days |
| Free user cost | < $5/mo |
| LTV:CAC ratio | > 3:1 |

### Example Structure
```
FREE ($0)
├── 1 user
├── 3 projects
├── 1GB storage
├── Community support
└── Basic features

PRO ($12/user/mo)
├── Unlimited users
├── Unlimited projects
├── 100GB storage
├── Priority support
└── Advanced features

ENTERPRISE (Custom)
├── Everything in Pro
├── SSO/SAML
├── Dedicated support
├── Custom integrations
└── SLA guarantees
```

---

## 2. Free Trial Model

### When to Use
- ✅ High-touch sales process
- ✅ Complex product requiring onboarding
- ✅ B2B/Enterprise focus
- ✅ Clear ROI can be demonstrated
- ✅ Higher price point ($50+/mo)

### Trial Length Guidelines
| Product Type | Recommended Trial |
|--------------|-------------------|
| Simple SaaS | 7-14 days |
| Complex B2B | 14-30 days |
| Enterprise | 30-60 days |
| With onboarding | 14 days + extension |

### Trial Types

#### No Credit Card Required
**Pros:** More signups, lower friction
**Cons:** More tire-kickers, lower conversion
**Best for:** Top-of-funnel growth, product-led

#### Credit Card Required
**Pros:** Qualified leads, higher conversion, auto-billing
**Cons:** Fewer signups, higher friction
**Best for:** B2B, established products

### Conversion Optimization
1. **Onboarding sequence** - Daily emails for first week
2. **Milestone celebrations** - Congratulate key actions
3. **Usage reminders** - "You've used 80% of X"
4. **Social proof** - "Companies like yours use..."
5. **Human touch** - Offer demo call at day 7

### Benchmarks
| Metric | Target |
|--------|--------|
| Trial → Paid conversion | 15-25% |
| Trial signup → Activation | 40-60% |
| Time to first value | < 1 day |
| Demo request rate | 10-20% |

---

## 3. Tiered Pricing

### Psychology of Tiers

#### The Decoy Effect
Create a tier that makes another look better:
```
BASIC    PROFESSIONAL    ENTERPRISE
$19      $49 ← Target    $149
         (Best Value)
```

#### Anchoring
High enterprise price makes middle tier seem reasonable.

#### Goldilocks Principle
Three tiers: cheap, expensive, and "just right."

### Tier Structure Best Practices

#### Number of Tiers
- **3 tiers** is optimal (Good, Better, Best)
- **4 tiers** can work with clear differentiation
- **2 tiers** for simple products
- **5+ tiers** creates decision paralysis

#### Price Anchors
- Middle tier should be 2-3x the lowest
- Top tier should be 3-5x the middle
- Clear value jump between each tier

#### Feature Gating Strategy
```
Feature Type          │ Gating Approach
──────────────────────┼─────────────────────
Core functionality    │ All tiers (table stakes)
Usage limits          │ Scale by tier
Advanced features     │ Mid+ tiers
Enterprise features   │ Top tier only
Support level         │ Scale by tier
Integrations          │ Mid+ tiers
Customization         │ Top tier
```

### Example Tier Structure
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   STARTER   │  GROWTH     │  PROFESSIONAL│  ENTERPRISE │
│    $0       │   $29/mo    │    $79/mo   │   Custom    │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 1 user      │ 5 users     │ 20 users    │ Unlimited   │
│ 10 projects │ 50 projects │ Unlimited   │ Unlimited   │
│ 1GB storage │ 50GB        │ 500GB       │ Unlimited   │
│ Email       │ Email+Chat  │ Priority    │ Dedicated   │
│ Basic       │ Advanced    │ All + API   │ Custom      │
└─────────────┴─────────────┴─────────────┴─────────────┘
                    ↑
            Most Popular (highlight)
```

### Pricing Page Best Practices
- [ ] Monthly AND annual pricing (annual = 2 months free)
- [ ] Clear feature comparison table
- [ ] Highlight recommended tier
- [ ] FAQ section addressing objections
- [ ] Money-back guarantee visible
- [ ] Easy plan changes (upgrade/downgrade)
- [ ] Contact sales for enterprise

---

## 4. Usage-Based Pricing

### When to Use
- ✅ Customer usage varies widely
- ✅ Value correlates directly with usage
- ✅ Infrastructure/API product
- ✅ Want to align with customer success
- ✅ Can track usage metrics accurately

### Common Usage Metrics
| Product Type | Metric | Example |
|--------------|--------|---------|
| API | Requests | 1M calls/mo |
| Storage | GB stored | 100GB |
| Email | Emails sent | 10K emails |
| Video | Minutes processed | 500 min |
| Compute | CPU hours | 100 hours |
| Database | Rows/queries | 1M rows |
| Messaging | Messages | 10K messages |

### Pricing Models

#### Pure Usage-Based
```
$0.001 per API call
No minimum, no maximum
Pay only for what you use
```

#### Tiered Usage
```
First 10,000 calls: Free
10,001 - 100,000: $0.001/call
100,001 - 1M: $0.0008/call
1M+: $0.0005/call
```

#### Hybrid (Base + Usage)
```
$29/mo base
Includes 10,000 API calls
Additional calls: $0.001 each
```

### Pros & Cons
| Pros | Cons |
|------|------|
| Fair pricing | Revenue unpredictability |
| Scales with customer | Harder to forecast |
| Low barrier to entry | Complex billing |
| Aligns incentives | Usage anxiety for customers |
| Natural upsell | Need robust metering |

### Implementation Checklist
- [ ] Accurate usage tracking
- [ ] Real-time usage dashboard
- [ ] Usage alerts/thresholds
- [ ] Clear pricing calculator
- [ ] Overage protection
- [ ] Detailed usage reports
- [ ] Grace period for overages

---

## Pricing Psychology

### Price Anchoring
Show higher price first to make actual price seem lower:
```
Was: $99/mo
Now: $49/mo
```

### Charm Pricing
- $49 vs $50 (left-digit effect)
- $47 vs $50 (odd pricing)
- Works better for lower prices

### Framing
```
❌ "Costs $588/year"
✅ "Less than $2/day"

❌ "$50 per month"
✅ "$1.67 per day"
```

### Decoy Pricing
```
Small  $3  (decoy)
Medium $6  (target)
Large  $7  (makes medium seem bad)
```

### Loss Aversion
```
"Join 10,000+ marketers"
"Don't miss out"
"Limited time offer"
```

---

## Pricing Research Methods

### 1. Van Westendorp Price Sensitivity Meter
Ask 4 questions:
1. At what price is this too expensive?
2. At what price is it expensive but you'd consider?
3. At what price is it a good value?
4. At what price is it so cheap you'd question quality?

**Analysis:**
- Optimal price point: Where "too expensive" = "too cheap"
- Acceptable range: Between "expensive" and "good value"

### 2. Conjoint Analysis
Present feature bundles at different prices:
```
Option A: Basic features @ $29
Option B: Pro features @ $49
Option C: All features @ $79
```

### 3. Customer Interviews
Ask:
- "What would you expect to pay?"
- "What's the most you'd pay?"
- "At what price would you definitely not buy?"
- "How do you currently solve this? How much does it cost?"

### 4. Competitor Analysis
| Competitor | Price | Features | Positioning |
|------------|-------|----------|-------------|
| | | | |

### 5. A/B Testing
Test different:
- Price points
- Tier structures
- Feature bundles
- Annual discounts

---

## Pricing Optimization Framework

### Step 1: Establish Baseline
- Current conversion rates
- Current MRR/ARR
- Churn rates by tier
- Customer feedback

### Step 2: Identify Opportunities
- Underutilized features
- Willingness to pay signals
- Competitive gaps
- Customer segment differences

### Step 3: Design Experiments
- Price changes (5-20% increments)
- New tier introduction
- Feature re-bundling
- Discount strategies

### Step 4: Measure Impact
- Conversion rate changes
- MRR impact
- Churn impact
- Customer satisfaction

### Step 5: Iterate
- Double down on what works
- Revert what doesn't
- Document learnings
- Plan next experiment

---

## Common Pricing Mistakes

### ❌ Pricing Too Low
- Leaves money on table
- Attracts price-sensitive customers
- Hard to raise later
- Signals low quality

### ❌ Too Many Tiers
- Decision paralysis
- Operational complexity
- Confusing messaging

### ❌ Feature Confusion
- Can't explain differences
- Overlapping features
- Unclear value progression

### ❌ Ignoring Costs
- Not accounting for support
- Infrastructure costs at scale
- Payment processing fees

### ❌ Set and Forget
- Not testing regularly
- Ignoring market changes
- Missing expansion revenue

### ❌ No Annual Option
- Leaving cash on table
- Higher churn monthly
- Missing commitment signal

---

## Pricing Benchmarks by Category

### B2B SaaS
| Metric | Benchmark |
|--------|-----------|
| Average ACV | $5K-50K |
| Sales cycle | 1-6 months |
| Gross margin | 70-85% |
| Net retention | 100-130% |

### SMB SaaS
| Metric | Benchmark |
|--------|-----------|
| Monthly price | $29-299 |
| Conversion rate | 2-5% |
| Churn (monthly) | 3-7% |
| LTV:CAC | 3:1 |

### PLG (Product-Led Growth)
| Metric | Benchmark |
|--------|-----------|
| Free → Paid | 2-5% |
| Trial → Paid | 15-25% |
| Time to value | < 1 day |
| Viral coefficient | > 0.5 |

---

## Pricing Page Checklist

### Must Have
- [ ] Clear value proposition
- [ ] 3-4 pricing tiers
- [ ] Monthly/annual toggle
- [ ] Feature comparison
- [ ] FAQ section
- [ ] Money-back guarantee
- [ ] Contact sales option
- [ ] Trust signals (logos, reviews)

### Nice to Have
- [ ] Pricing calculator
- [ ] ROI calculator
- [ ] Customer testimonials
- [ ] Comparison vs. competitors
- [ ] Migration assistance info
- [ ] Case studies

### Avoid
- [ ] Hidden fees
- [ ] Confusing terminology
- [ ] Too many options
- [ ] No clear CTA
- [ ] Outdated pricing
- [ ] Missing contact info

---

## Price Increase Strategy

### When to Raise Prices
- Significant value added
- Costs increased substantially
- Below market rate
- Inflation adjustment
- New tier/features launched

### How to Communicate
1. **Give notice** - 30-60 days minimum
2. **Explain why** - Value added, costs, etc.
3. **Grandfather existing** - Honor old price for X months
4. **Offer help** - Migration, plan optimization
5. **Provide value** - New features, improvements

### Communication Template
```
Subject: Updates to [Product] Pricing

Hi [Name],

We're writing to let you know about upcoming changes to our pricing.

On [Date], our pricing will be updated to reflect [reason: new features, 
increased costs, market changes].

What's changing:
- [Specific changes]

What's not changing:
- Your current plan is locked in until [date]
- All existing features remain
- [Other guarantees]

We've added [new value] to make this transition worthwhile.

Questions? Reply to this email or contact support.

Thanks for being a valued customer.
```

---

*Guide Version: 1.0 | Last Updated: 2026*
