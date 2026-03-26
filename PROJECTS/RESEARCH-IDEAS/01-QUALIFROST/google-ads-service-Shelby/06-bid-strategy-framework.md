# Bid Strategy Framework
## Manual vs. Automated Bidding Guide

---

## 📊 BID STRATEGY OVERVIEW

### Bid Strategy Types

| Strategy | Type | Best For | Data Needed |
|----------|------|----------|-------------|
| Manual CPC | Manual | Control, learning | None |
| Enhanced CPC | Hybrid | Transition to automated | Some conversion data |
| Maximize Clicks | Automated | Traffic, awareness | None |
| Maximize Conversions | Automated | Lead gen, sales | 15+ conversions/month |
| Target CPA | Automated | Cost-per-lead goals | 30+ conversions/month |
| Target ROAS | Automated | E-commerce, revenue | 50+ conversions/month |
| Maximize Conversion Value | Automated | Revenue focus | 50+ conversions/month |
| Target Impression Share | Automated | Brand awareness | None |

---

## 🎯 MANUAL CPC

### What It Is
You set the maximum cost-per-click for each keyword manually.

### When to Use
✅ New campaigns (first 2-4 weeks)  
✅ Limited budgets (<$1,000/month)  
✅ Need maximum control  
✅ Testing new keywords/ads  
✅ Low conversion volume (<15/month)  
✅ Highly competitive niches  
✅ Specific keyword-level strategy needed  

### When NOT to Use
❌ Large campaigns (100+ keywords)  
❌ Limited time for management  
❌ Stable campaigns with good data  
❌ When scaling is the priority  

### How to Set Bids

**Method 1: Keyword Planner Suggested Bids**
```
Top of page bid (low range): $2.00
Top of page bid (high range): $5.00

Starting bid = (Low + High) ÷ 2 × 0.8
Starting bid = ($2.00 + $5.00) ÷ 2 × 0.8 = $2.80
```

**Method 2: Based on Target CPA**
```
Target CPA: $50
Expected Conversion Rate: 5%

Max CPC = Target CPA × Conversion Rate
Max CPC = $50 × 0.05 = $2.50
```

**Method 3: Based on ROAS**
```
Average Order Value: $200
Target ROAS: 400% (4:1)
Conversion Rate: 3%

Max CPC = (AOV ÷ ROAS) × Conversion Rate
Max CPC = ($200 ÷ 4) × 0.03 = $1.50
```

### Bid Adjustments

**Device Adjustments:**
```
Mobile: -10% to +20%
Tablet: -20% to +10%
Desktop: Baseline (0%)
```

**Location Adjustments:**
```
High-performing cities: +10% to +50%
Low-performing areas: -10% to -50%
Exclude poor performers: -100%
```

**Ad Schedule Adjustments:**
```
Business hours: +10% to +30%
After hours: -50% to -100%
Weekends: Varies by business
```

### Pros & Cons

| Pros | Cons |
|------|------|
| Full control over bids | Time-intensive |
| Keyword-level precision | Doesn't use machine learning |
| Good for learning | Can't react to real-time signals |
| Predictable costs | May miss opportunities |
| Works with any budget | Requires constant monitoring |

---

## 🤖 ENHANCED CPC (ECPC)

### What It Is
Manual CPC with Google automatically adjusting bids up or down based on likelihood of conversion.

### When to Use
✅ Transitioning from Manual CPC  
✅ Some conversion data (15-30/month)  
✅ Want control with some automation  
✅ Testing automated bidding  

### How It Works
- Google adjusts manual bids by up to +30% for likely converters
- Google reduces bids by up to -100% for unlikely converters
- You still set base bids

### Settings
- **Bid Limit:** Set maximum CPC (recommended)
- **Conversion Tracking:** Required

### Pros & Cons

| Pros | Cons |
|------|------|
| More control than full automation | Less control than Manual CPC |
| Uses conversion data | Still requires bid management |
| Good transition strategy | Limited optimization potential |
| Reduces wasted spend | Not as powerful as full Smart Bidding |

---

## 🖱️ MAXIMIZE CLICKS

### What It Is
Google automatically sets bids to get as many clicks as possible within your budget.

### When to Use
✅ Driving traffic (not conversions)  
✅ New campaigns learning phase  
✅ Brand awareness campaigns  
✅ Limited conversion tracking  
✅ Testing new markets  

### When NOT to Use
❌ Conversion-focused campaigns  
❌ Limited budgets (can burn fast)  
❌ Quality over quantity needed  
❌ Specific CPA goals  

### How to Set Up
1. Select "Maximize Clicks" bid strategy
2. **Set maximum CPC bid limit** (recommended)
   - Prevents expensive clicks
   - Start with 50-75% of suggested top-of-page bid
3. Set daily budget

### Bid Limit Formula
```
Suggested Top of Page Bid: $4.00
Bid Limit = $4.00 × 0.60 = $2.40

This prevents clicks above $2.40
```

### Pros & Cons

| Pros | Cons |
|------|------|
| Maximizes traffic | No conversion optimization |
| Simple to manage | Can attract low-quality clicks |
| Good for learning | Budget can be spent quickly |
| No manual bidding needed | May not align with business goals |

---

## 🎯 MAXIMIZE CONVERSIONS

### What It Is
Google automatically sets bids to get as many conversions as possible within your budget.

### When to Use
✅ Conversion-focused campaigns  
✅ 15+ conversions per month  
✅ No specific CPA target  
✅ Want to scale conversions  
✅ Budget is the constraint  

### When NOT to Use
❌ <15 conversions/month (not enough data)  
❌ Specific CPA requirements  
❌ Need cost predictability  
❌ New campaigns without data  

### Data Requirements
- Minimum: 15 conversions in last 30 days
- Recommended: 30+ conversions in last 30 days
- Conversion tracking must be accurate

### How to Set Up
1. Select "Maximize Conversions"
2. Optionally set **Target CPA** (becomes tCPA)
3. Set daily budget
4. Allow 2-4 weeks learning period

### Learning Period
- Duration: 2-4 weeks
- Avoid changes during this period
- Performance may fluctuate
- Let algorithm gather data

### Pros & Cons

| Pros | Cons |
|------|------|
| Optimizes for conversions | Less control over CPC |
| Uses machine learning | Requires conversion data |
| Reacts to real-time signals | CPA can vary |
| Saves time on bidding | Learning period required |
| Scales well | Budget-dependent |

---

## 💰 TARGET CPA (tCPA)

### What It Is
Google automatically sets bids to get as many conversions as possible at your target cost-per-acquisition.

### When to Use
✅ Specific CPA goals  
✅ 30+ conversions per month  
✅ Stable conversion volume  
✅ Want predictable costs  
✅ Scaling with efficiency  

### When NOT to Use
❌ <30 conversions/month  
❌ New campaigns  
❌ CPA goals unrealistic  
❌ Conversion tracking unreliable  

### Setting Your Target CPA

**Method 1: Historical CPA**
```
Current Average CPA: $45
Target CPA = Current CPA × 0.90 (10% improvement)
Target CPA = $45 × 0.90 = $40.50
```

**Method 2: Based on Profit Margins**
```
Average Customer Value: $500
Profit Margin: 40%
Max CPA = $500 × 0.40 = $200

Target CPA = Max CPA × 0.75 (buffer)
Target CPA = $200 × 0.75 = $150
```

**Method 3: Based on Close Rate**
```
Lead-to-Customer Rate: 25%
Customer Lifetime Value: $1,000
Max CPA per Lead = ($1,000 × 0.25) = $250

Target CPA = $250 × 0.80 = $200
```

### CPA Adjustment Guidelines

| Situation | Action |
|-----------|--------|
| Getting <50% of target volume | Increase CPA by 10-20% |
| CPA 20%+ above target | Decrease by 10-15% |
| CPA within 10% of target | No change |
| Getting 150%+ of target volume | Decrease CPA by 10-20% |

### Pros & Cons

| Pros | Cons |
|------|------|
| Predictable cost per conversion | Requires significant data |
| Automated optimization | May limit volume if CPA too low |
| Scales efficiently | Learning period required |
| Aligns with business goals | Less control over individual keywords |

---

## 📈 TARGET ROAS (tROAS)

### What It Is
Google automatically sets bids to maximize conversion value while achieving your target return on ad spend.

### When to Use
✅ E-commerce with varying order values  
✅ 50+ conversions per month  
✅ Revenue/conversion value tracked  
✅ Specific ROAS goals  
✅ Profit-focused campaigns  

### When NOT to Use
❌ <50 conversions/month  
❌ No conversion value tracking  
❌ Lead gen without value data  
❌ New campaigns  

### Setting Your Target ROAS

**Method 1: Based on Profit Margins**
```
Profit Margin: 25%
Minimum ROAS = 1 ÷ Profit Margin
Minimum ROAS = 1 ÷ 0.25 = 4.00 (400%)

Target ROAS = Minimum ROAS × 1.25 (buffer)
Target ROAS = 4.00 × 1.25 = 5.00 (500%)
```

**Method 2: Based on Historical ROAS**
```
Current ROAS: 350%
Target ROAS = Current ROAS × 1.15 (15% improvement)
Target ROAS = 350% × 1.15 = 402.5%
```

**Method 3: Based on Goals**
```
Revenue Goal: $100,000
Ad Spend Budget: $25,000
Target ROAS = Revenue ÷ Spend
Target ROAS = $100,000 ÷ $25,000 = 4.00 (400%)
```

### ROAS Benchmarks by Industry

| Industry | Average ROAS | Good ROAS | Excellent ROAS |
|----------|--------------|-----------|----------------|
| E-commerce (General) | 300% | 400% | 500%+ |
| Fashion/Apparel | 350% | 450% | 600%+ |
| Electronics | 250% | 350% | 450%+ |
| Home & Garden | 300% | 400% | 550%+ |
| Beauty/Health | 400% | 500% | 700%+ |
| B2B Services | 200% | 300% | 400%+ |

### ROAS Adjustment Guidelines

| Situation | Action |
|-----------|--------|
| ROAS below target by 20%+ | Decrease ROAS target by 10-15% |
| ROAS above target by 20%+ | Increase ROAS target by 10-15% |
| ROAS within 10% of target | No change |
| Volume dropped significantly | Decrease ROAS target |

### Pros & Cons

| Pros | Cons |
|------|------|
| Maximizes revenue | Requires most data |
| Accounts for order value | Complex to set up correctly |
| Aligns with profit goals | Learning period longer |
| Automated optimization | May reduce volume for efficiency |

---

## 🎯 TARGET IMPRESSION SHARE

### What It Is
Google automatically sets bids to show your ads at the top of the page or absolute top of the page.

### When to Use
✅ Brand awareness campaigns  
✅ Competitive brand terms  
✅ Market dominance goals  
✅ Specific visibility targets  

### When NOT to Use
❌ Conversion-focused campaigns  
❌ Limited budgets  
❌ ROI is primary concern  

### Settings
- **Target:** Absolute top, Top of page, or Anywhere
- **Target Impression Share:** 40-90%
- **Maximum CPC Bid Limit:** Set to control costs

### Pros & Cons

| Pros | Cons |
|------|------|
| Guarantees visibility | Can be expensive |
| Good for brand protection | Not optimized for conversions |
| Simple goal | May waste budget on unqualified clicks |

---

## 📊 BID STRATEGY DECISION TREE

```
START: New Campaign
│
├─ Is conversion tracking set up?
│  │
│  ├─ NO → Maximize Clicks (with bid limit) OR Manual CPC
│  │
│  └─ YES → Continue
│
├─ How many conversions per month?
│  │
│  ├─ <15 → Manual CPC or Enhanced CPC
│  │
│  ├─ 15-30 → Maximize Conversions
│  │
│  ├─ 30-50 → Target CPA OR Maximize Conversions
│  │
│  └─ 50+ → Continue
│
├─ Do you track conversion value?
│  │
│  ├─ NO → Target CPA
│  │
│  └─ YES → Continue
│
└─ What's the primary goal?
   │
   ├─ Specific CPA → Target CPA
   │
   ├─ Maximize Revenue → Target ROAS
   │
   └─ Maximize Conversions → Maximize Conversion Value
```

---

## 🔄 BID STRATEGY TRANSITION GUIDE

### Phase 1: Manual CPC (Weeks 1-4)
**Goal:** Gather data, learn what works

- Set manual bids based on research
- Monitor search terms daily
- Add negative keywords
- Identify winning keywords/ads
- Track conversion rate by keyword

**Success Metrics:**
- Quality Score 6+
- CTR 2%+
- Conversion data gathering

### Phase 2: Enhanced CPC (Weeks 5-8)
**Goal:** Test automation with control

- Switch to ECPC
- Keep manual bid limits
- Monitor CPA changes
- Continue optimization

**Success Metrics:**
- CPA stable or improving
- Conversion volume increasing
- No major CPC spikes

### Phase 3: Maximize Conversions (Weeks 9-12)
**Goal:** Scale with automation

- Switch to Maximize Conversions
- Set budget based on goals
- Allow learning period
- Monitor performance

**Success Metrics:**
- Conversion volume increasing
- CPA within acceptable range
- Budget fully utilized

### Phase 4: Target CPA (Week 13+)
**Goal:** Efficient scaling

- Switch to Target CPA
- Set CPA based on data
- Fine-tune over time
- Scale budget with confidence

**Success Metrics:**
- CPA at or below target
- Volume meeting goals
- ROAS acceptable

---

## ⚠️ COMMON BIDDING MISTAKES

### 1. Switching Strategies Too Soon
**Problem:** Changing before learning period completes  
**Solution:** Wait 2-4 weeks minimum between changes

### 2. Setting Unrealistic Targets
**Problem:** Target CPA/ROAS too aggressive  
**Solution:** Base targets on historical data, adjust gradually

### 3. No Conversion Tracking
**Problem:** Using Smart Bidding without accurate tracking  
**Solution:** Verify tracking before switching strategies

### 4. Too Many Changes During Learning
**Problem:** Resetting learning period constantly  
**Solution:** Freeze changes during learning (2-4 weeks)

### 5. Ignoring Budget Constraints
**Problem:** Smart Bidding can't optimize with limited budget  
**Solution:** Ensure budget allows for 10+ conversions/month

### 6. One Strategy for All Campaigns
**Problem:** Different campaigns need different strategies  
**Solution:** Match strategy to campaign goals and data

### 7. Not Using Bid Limits
**Problem:** Maximize Clicks spending too much per click  
**Solution:** Always set maximum CPC bid limits

### 8. Giving Up Too Soon
**Problem:** Abandoning Smart Bidding after bad week  
**Solution:** Allow 4 weeks minimum to judge performance

---

## 📈 BID STRATEGY PERFORMANCE TRACKING

### Weekly Review Template

| Metric | Current | Previous | Change | Notes |
|--------|---------|----------|--------|-------|
| Impressions | | | | |
| Clicks | | | | |
| CTR | | | | |
| Avg. CPC | | | | |
| Conversions | | | | |
| Conversion Rate | | | | |
| CPA | | | | |
| ROAS | | | | |
| Spend | | | | |
| Budget Used | | | | |

### Bid Strategy Audit Checklist (Monthly)

- [ ] Is current strategy meeting goals?
- [ ] Enough conversion data for current strategy?
- [ ] Should we move to more/less automated?
- [ ] Are targets (CPA/ROAS) still appropriate?
- [ ] Any campaigns ready for strategy change?
- [ ] Budget aligned with strategy?
- [ ] Any learning periods to account for?

---

## 🎓 BID STRATEGY QUICK REFERENCE

| Strategy | Min Conversions | Best For | Control Level |
|----------|-----------------|----------|---------------|
| Manual CPC | 0 | Learning, control | High |
| Enhanced CPC | 15 | Transition | Medium-High |
| Maximize Clicks | 0 | Traffic | Low |
| Maximize Conversions | 15 | Scale conversions | Low |
| Target CPA | 30 | Cost-per-lead | Low |
| Target ROAS | 50 | E-commerce revenue | Low |
| Max Conv. Value | 50 | Revenue focus | Low |
| Target IS | 0 | Brand visibility | Low |

---

**Framework Version:** 1.0  
**Last Updated:** 2026-03-21  
**Created by:** Google Ads Service Team
