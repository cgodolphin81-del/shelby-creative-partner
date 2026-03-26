# ROI Calculator Framework

**Purpose:** Quantify the financial impact of retention initiatives  
**Version:** 1.0  
**Last Updated:** [Date]

---

## 1. Calculator Overview

### 1.1 Key Metrics Calculated

| Metric | Description | Formula |
|--------|-------------|---------|
| Customer Lifetime Value (LTV) | Total revenue from average customer | ARPU × Lifetime |
| Customer Acquisition Cost (CAC) | Cost to acquire one customer | Total Sales & Marketing / New Customers |
| LTV:CAC Ratio | Efficiency of acquisition | LTV / CAC |
| Payback Period | Time to recover CAC | CAC / Monthly Margin |
| Retention Impact | Revenue from churn reduction | See Section 4 |
| Retention ROI | Return on retention investment | (Benefit - Cost) / Cost |

### 1.2 Input Requirements

| Category | Required Inputs |
|----------|-----------------|
| Revenue | MRR, ARPU, Growth rate |
| Customers | Total customers, New customers/mo, Churned customers/mo |
| Costs | Sales & Marketing spend, Retention program cost |
| Churn | Current churn rate, Target churn rate |
| Expansion | Expansion revenue rate, Contraction rate |

---

## 2. LTV Calculator

### 2.1 Simple LTV Model

```
LTV = ARPU × Gross Margin % × Average Customer Lifetime

Where:
- ARPU = Average Revenue Per User (monthly)
- Gross Margin % = Revenue margin after COGS
- Average Customer Lifetime = 1 / Monthly Churn Rate
```

**Example Calculation:**

| Input | Value |
|-------|-------|
| Average Monthly Revenue per Customer (ARPU) | $100 |
| Gross Margin | 80% |
| Monthly Churn Rate | 5% |
| Average Customer Lifetime | 1 / 0.05 = 20 months |

**LTV = $100 × 80% × 20 = $1,600**

---

### 2.2 Advanced LTV Model (with Expansion)

```
LTV = Σ [Monthly Revenue × Gross Margin % × Survival Probability]

Where:
- Monthly Revenue includes expansion over time
- Survival Probability = (1 - Churn Rate)^Month
```

**Example Calculation:**

| Month | Revenue | Survival Rate | Margin | Contribution |
|-------|---------|---------------|--------|--------------|
| 1 | $100 | 100% | 80% | $80 |
| 2 | $100 | 95% | 80% | $76 |
| 3 | $102 | 90% | 80% | $73 |
| 4 | $102 | 86% | 80% | $70 |
| 5 | $104 | 82% | 80% | $68 |
| ... | ... | ... | ... | ... |
| 24 | $130 | 30% | 80% | $31 |

**Total LTV (24 months) = $1,456**

---

### 2.3 LTV by Cohort

| Cohort | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | LTV |
|--------|---------|---------|----------|----------|----------|-----|
| Q1 2024 | $100 | $105 | $108 | $110 | $112 | $___ |
| Q2 2024 | $100 | $103 | $106 | $108 | $110 | $___ |
| Q3 2024 | $100 | $104 | $107 | $109 | $111 | $___ |
| Q4 2024 | $100 | $106 | $110 | $113 | $115 | $___ |
| **Average** | $100 | $104.50 | $107.75 | $110 | $112 | $___ |

---

### 2.4 LTV Input Worksheet

| Input | Value | Source |
|-------|-------|--------|
| Average Monthly Revenue (ARPU) | $___ | Billing system |
| Gross Margin % | ___% | Finance |
| Monthly Churn Rate | ___% | Cohort analysis |
| Expansion Rate (monthly) | ___% | Revenue analysis |
| Discount Rate (annual) | ___% | Finance (for NPV) |
| Calculation Period | ___ months | Typically 24-36 |

**Calculated LTV: $___**

---

## 3. CAC Calculator

### 3.1 CAC Formula

```
CAC = Total Sales & Marketing Costs / New Customers Acquired

Period: Typically monthly or quarterly
```

### 3.2 CAC Components

| Cost Category | Monthly Cost | Included in CAC? |
|---------------|--------------|------------------|
| Advertising spend | $___ | ✓ |
| Marketing salaries | $___ | ✓ |
| Sales salaries | $___ | ✓ |
| Sales commissions | $___ | ✓ |
| Marketing tools/software | $___ | ✓ |
| Events & sponsorships | $___ | ✓ |
| Content production | $___ | ✓ |
| PR & communications | $___ | ✓ |
| Brand marketing | $___ | Partial* |
| Customer marketing | $___ | ✗ (retention) |

*Brand marketing: allocate 50% to CAC, 50% to retention

### 3.3 CAC by Channel

| Channel | Monthly Spend | New Customers | CAC |
|---------|---------------|---------------|-----|
| Paid Search | $___ | ___ | $___ |
| Paid Social | $___ | ___ | $___ |
| Organic Search | $___ | ___ | $___ |
| Content Marketing | $___ | ___ | $___ |
| Referrals | $___ | ___ | $___ |
| Events | $___ | ___ | $___ |
| Sales (Outbound) | $___ | ___ | $___ |
| **Total** | $___ | ___ | $___ |

**Blended CAC: $___**

---

### 3.4 CAC Payback Period

```
Payback Period (months) = CAC / (ARPU × Gross Margin %)

Example:
- CAC: $500
- ARPU: $100
- Gross Margin: 80%
- Monthly Margin: $80
- Payback Period: $500 / $80 = 6.25 months
```

**Target:** <12 months for SaaS, <6 months for SMB

---

## 4. Retention Impact Calculator

### 4.1 Churn Reduction Impact

```
Revenue Retained = Current MRR × Churn Reduction % × Months

Example:
- Current MRR: $100,000
- Current Monthly Churn: 5%
- Target Monthly Churn: 4%
- Churn Reduction: 1% (20% relative reduction)
- Monthly Revenue Retained: $100,000 × 1% = $1,000
- Annual Revenue Retained: $1,000 × 12 = $12,000
```

### 4.2 Customer Lifetime Impact

```
Current Lifetime = 1 / Current Churn Rate
New Lifetime = 1 / New Churn Rate
Lifetime Increase = New Lifetime - Current Lifetime

Example:
- Current Churn: 5% → Current Lifetime: 20 months
- New Churn: 4% → New Lifetime: 25 months
- Lifetime Increase: 5 months (25% increase)
```

### 4.3 LTV Impact

```
Current LTV = ARPU × Margin % × Current Lifetime
New LTV = ARPU × Margin % × New Lifetime
LTV Increase = New LTV - Current LTV
LTV Increase % = LTV Increase / Current LTV

Example:
- ARPU: $100
- Margin: 80%
- Current Lifetime: 20 months → Current LTV: $1,600
- New Lifetime: 25 months → New LTV: $2,000
- LTV Increase: $400 (25% increase)
```

### 4.4 Full Retention Impact Model

| Metric | Current | With Improvement | Impact |
|--------|---------|-----------------|--------|
| Monthly Churn Rate | 5.0% | 4.0% | -1.0% pts |
| Customer Lifetime | 20 mo | 25 mo | +5 mo |
| Annual Churned Customers | 600 | 480 | -120 |
| Annual Churned Revenue | $720K | $576K | -$144K |
| Average LTV | $1,600 | $2,000 | +$400 |
| Customers (steady state) | 1,000 | 1,000 | — |
| Annual Revenue (steady state) | $1.2M | $1.2M | — |
| Revenue Retained | — | — | $144K |

---

### 4.5 Expansion Revenue Impact

```
Current Expansion Rate: ___% of MRR/month
Target Expansion Rate: ___% of MRR/month
Expansion Increase: (Target - Current) × MRR × 12

Example:
- Current Expansion: 2% of MRR/month
- Target Expansion: 3% of MRR/month
- MRR: $100,000
- Monthly Expansion Increase: 1% × $100,000 = $1,000
- Annual Expansion Increase: $12,000
```

### 4.6 Win-Back Revenue Impact

```
Win-Back Revenue = Churned Customers × Win-Back Rate × ARPU × Lifetime

Example:
- Monthly Churned Customers: 50
- Win-Back Rate: 15%
- Won-Back Customers: 7.5/month
- ARPU: $100
- Average Lifetime (won-back): 12 months
- Monthly Win-Back Revenue: 7.5 × $100 = $750
- Annual Win-Back Revenue: $9,000
```

---

## 5. Retention ROI Calculator

### 5.1 ROI Formula

```
Retention ROI = (Total Benefits - Total Costs) / Total Costs × 100%

Payback Period = Total Costs / Monthly Benefits
```

### 5.2 Benefits Calculation

| Benefit Category | Calculation | Annual Value |
|-----------------|-------------|--------------|
| Revenue Retained | Churn reduction × MRR × 12 | $___ |
| Expansion Revenue | Expansion lift × MRR × 12 | $___ |
| Win-Back Revenue | Won-back customers × ARPU × Lifetime | $___ |
| Referral Value | Additional referrals × LTV | $___ |
| Support Cost Savings | Reduced tickets × Cost per ticket | $___ |
| **Total Benefits** | | **$___** |

### 5.3 Costs Calculation

| Cost Category | One-Time | Monthly | Annual |
|---------------|----------|---------|--------|
| Audit/Consulting | $___ | — | $___ |
| Program Design | $___ | — | $___ |
| Technology/Tools | $___ | $___ | $___ |
| Management (internal) | — | $___ | $___ |
| Management (external) | — | $___ | $___ |
| Campaign Budget | — | $___ | $___ |
| Incentives/Rewards | — | $___ | $___ |
| **Total Costs** | **$___** | **$___** | **$___** |

### 5.4 ROI Calculation

| Metric | Value |
|--------|-------|
| Total Annual Benefits | $___ |
| Total Annual Costs | $___ |
| Net Benefit | $___ |
| ROI | ___% |
| Payback Period | ___ months |

**Example:**

| Metric | Value |
|--------|-------|
| Total Annual Benefits | $200,000 |
| Total Annual Costs | $60,000 |
| Net Benefit | $140,000 |
| ROI | 233% |
| Payback Period | 3.6 months |

---

## 6. Scenario Analysis

### 6.1 Scenario Planning

| Scenario | Churn Reduction | Expansion Lift | Investment | ROI | Payback |
|----------|-----------------|----------------|------------|-----|---------|
| Conservative | 10% | 5% | $___ | ___% | ___ mo |
| Base Case | 20% | 10% | $___ | ___% | ___ mo |
| Optimistic | 30% | 20% | $___ | ___% | ___ mo |

### 6.2 Sensitivity Analysis

**Impact of Churn Reduction on LTV:**

| Churn Reduction | New Churn Rate | New Lifetime | LTV Increase |
|-----------------|----------------|--------------|--------------|
| 0% (baseline) | 5.0% | 20 mo | $0 |
| 10% | 4.5% | 22 mo | +$200 |
| 20% | 4.0% | 25 mo | +$400 |
| 30% | 3.5% | 29 mo | +$600 |
| 40% | 3.0% | 33 mo | +$800 |
| 50% | 2.5% | 40 mo | +$1,200 |

**Impact on Annual Revenue (at $100K MRR):**

| Churn Reduction | Monthly Saved | Annual Saved |
|-----------------|---------------|--------------|
| 10% | $500 | $6,000 |
| 20% | $1,000 | $12,000 |
| 30% | $1,500 | $18,000 |
| 40% | $2,000 | $24,000 |
| 50% | $2,500 | $30,000 |

---

## 7. Benchmarks

### 7.1 Industry LTV:CAC Benchmarks

| Industry | Good LTV:CAC | Excellent LTV:CAC |
|----------|--------------|-------------------|
| SaaS (SMB) | 3:1 | 5:1+ |
| SaaS (Enterprise) | 3:1 | 5:1+ |
| E-commerce | 3:1 | 4:1+ |
| Subscription Box | 3:1 | 4:1+ |
| Marketplace | 3:1 | 5:1+ |
| Mobile App | 2:1 | 3:1+ |

### 7.2 Retention Rate Benchmarks

| Industry | Good Retention (Annual) | Excellent Retention |
|----------|------------------------|---------------------|
| SaaS (SMB) | 80-85% | 90%+ |
| SaaS (Enterprise) | 90-95% | 95%+ |
| E-commerce | 20-30% | 40%+ |
| Subscription Box | 50-60% | 70%+ |
| Media/Content | 60-70% | 80%+ |
| Financial Services | 85-90% | 95%+ |

### 7.3 NRR Benchmarks

| Company Stage | Good NRR | Excellent NRR |
|---------------|----------|---------------|
| Early-stage | 100% | 110%+ |
| Growth-stage | 110% | 120%+ |
| Public SaaS | 115% | 130%+ |
| Enterprise | 120% | 140%+ |

---

## 8. Interactive Calculator Template

### 8.1 Input Section

```
═══════════════════════════════════════════════════════════
              RETENTION ROI CALCULATOR - INPUTS
═══════════════════════════════════════════════════════════

CURRENT STATE:
├─ Monthly Recurring Revenue (MRR): $__________
├─ Total Customers: __________
├─ Average Revenue Per User (ARPU): $__________
├─ Monthly Churn Rate: __________%
├─ Monthly Expansion Rate: __________%
├─ Gross Margin: __________%
└─ Current NPS Score: __________

ACQUISITION:
├─ Monthly Sales & Marketing Spend: $__________
├─ New Customers per Month: __________
└─ Current CAC: $__________ (auto-calculated)

RETENTION INITIATIVE:
├─ Target Churn Reduction: __________%
├─ Target Expansion Increase: __________%
├─ Win-Back Target Rate: __________%
├─ One-Time Investment: $__________
├─ Monthly Investment: $__________
└─ Implementation Timeline: __________ months

═══════════════════════════════════════════════════════════
```

### 8.2 Output Section

```
═══════════════════════════════════════════════════════════
              RETENTION ROI CALCULATOR - RESULTS
═══════════════════════════════════════════════════════════

CURRENT METRICS:
├─ Current LTV: $__________
├─ Current CAC: $__________
├─ LTV:CAC Ratio: __________:1
├─ Payback Period: __________ months
├─ Current Customer Lifetime: __________ months
└─ Current Annual Churned Revenue: $__________

WITH RETENTION INITIATIVE:
├─ New LTV: $__________
├─ New Customer Lifetime: __________ months
├─ New Annual Churned Revenue: $__________
├─ Revenue Retained: $__________
├─ Expansion Revenue Increase: $__________
├─ Win-Back Revenue: $__________
└─ Total Annual Benefits: $__________

INVESTMENT:
├─ One-Time Cost: $__________
├─ Annual Recurring Cost: $__________
└─ Total Annual Cost: $__________

RETURN:
├─ Net Annual Benefit: $__________
├─ ROI: __________%
├─ Payback Period: __________ months
└─ 3-Year NPV (at 10%): $__________

═══════════════════════════════════════════════════════════
```

---

## 9. Reporting Templates

### 9.1 Executive Summary

```
RETENTION INITIATIVE - INVESTMENT SUMMARY
═══════════════════════════════════════════════════════════

OPPORTUNITY:
Current annual churned revenue: $__________
Target reduction: __________%
Revenue at stake: $__________

INVESTMENT REQUIRED:
One-time: $__________
Annual recurring: $__________

EXPECTED RETURN:
Annual benefit: $__________
ROI: __________%
Payback period: __________ months

RECOMMENDATION:
[ ] Proceed with investment
[ ] Proceed with modifications
[ ] Do not proceed

KEY ASSUMPTIONS:
• Churn reduction of __________% achievable within __________ months
• Expansion revenue increase of __________%
• Win-back rate of __________%
• No significant market changes

RISKS:
• ________________________________________________
• ________________________________________________

MITIGATION:
• ________________________________________________
• ________________________________________________
```

### 9.2 Board-Level Summary

```
┌─────────────────────────────────────────────────────────┐
│           RETENTION INVESTMENT - BOARD SUMMARY          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  THE ASK: $__________ investment in retention          │
│                                                         │
│  THE RETURN: $__________ annual benefit (____% ROI)    │
│                                                         │
│  THE PAYBACK: __________ months                         │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  CURRENT STATE:                                         │
│  • Annual churned revenue: $__________                 │
│  • Customer lifetime: __________ months                │
│  • LTV:CAC: __________:1                               │
│                                                         │
│  WITH INITIATIVE:                                       │
│  • Revenue retained: $__________                       │
│  • New customer lifetime: __________ months            │
│  • New LTV:CAC: __________:1                           │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  RECOMMENDATION: APPROVE                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Implementation Guide

### 10.1 Using the Calculator

1. **Gather Data** (Section 1)
   - Pull MRR, customer counts, churn from billing system
   - Calculate ARPU and current LTV
   - Get sales & marketing spend from finance

2. **Input Current State** (Section 2-3)
   - Enter all current metrics
   - Verify calculations match internal reports

3. **Set Targets** (Section 4)
   - Define realistic churn reduction goals
   - Set expansion revenue targets
   - Estimate win-back potential

4. **Estimate Costs** (Section 5)
   - Get quotes for tools/services
   - Estimate internal resource costs
   - Include campaign budgets

5. **Calculate ROI** (Section 5)
   - Review automated calculations
   - Run scenario analysis
   - Sensitivity test key assumptions

6. **Present & Decide** (Section 9)
   - Use executive summary template
   - Present to stakeholders
   - Get approval to proceed

### 10.2 Best Practices

| Practice | Why It Matters |
|----------|----------------|
| Use conservative estimates | Better to under-promise, over-deliver |
| Include all costs | Hidden costs kill ROI |
| Factor in implementation time | Benefits don't start Day 1 |
| Run multiple scenarios | Understand range of outcomes |
| Update with actuals | Track predicted vs. actual |
| Review quarterly | Adjust based on learnings |

---

**Calculator Owner:** ________________  
**Last Updated:** ________________  
**Next Review:** ________________
