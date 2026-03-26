# Revenue Projections Specification

## Overview

12-month revenue forecast with user acquisition, retention, and monetization assumptions for SoulSpace AI.

---

## Executive Summary

| Metric | Month 1 | Month 6 | Month 12 | Year 1 Total |
|--------|---------|---------|----------|--------------|
| Downloads | 5,000 | 50,000 | 100,000 | 400,000 |
| Registered Users | 3,000 | 30,000 | 60,000 | 240,000 |
| Premium Users | 150 | 2,400 | 6,000 | - |
| MRR | $2,250 | $36,000 | $90,000 | - |
| ARR (annualized) | $27,000 | $432,000 | $1,080,000 | - |
| Total Revenue | $2,250 | $195,000 | $615,000 | $1,850,000 |

---

## Key Assumptions

### Acquisition
```
- Launch month: 5,000 downloads (PR push, early adopters)
- Growth rate: 25% month-over-month (months 2-6)
- Mature growth: 15% month-over-month (months 7-12)
- Conversion funnel:
  - Download → Register: 60%
  - Register → Day 1 Active: 70%
  - Day 1 → Day 7 Active: 60%
  - Day 7 → Trial Start: 25%
  - Trial → Paid: 40%
```

### Monetization
```
- Free tier: $0 (50 messages/day, 3 companions, 10 voice min)
- Premium monthly: $14.99/month
- Premium annual: $119.99/year ($10/month effective)
- Trial: 7 days free (no credit card required)
- Overage: $0.10/voice minute (avg $0.50/user/month)
- Student discount: 50% off (5% of premium users)
- Hardship discount: Variable (2% of premium users)
```

### Retention
```
- Monthly churn (months 1-3): 20%
- Monthly churn (months 4-6): 15%
- Monthly churn (months 7-12): 12%
- Annual plan churn: 50% lower than monthly
- Reactivation rate: 10% of churned users within 60 days
```

### Costs
```
- CAC (Customer Acquisition Cost): $25 (blended)
- API costs per user:
  - Free: $3.70/month
  - Premium: $12.50/month
- Infrastructure: $0.50-1.00/user/month
- Support: $0.20-0.50/user/month
- Team (12 months): $1.2M (12 person team)
- Total Year 1 OpEx: ~$2.5M
```

---

## Month-by-Month Projections

### Months 1-3: Launch & Early Growth

```
┌─────────────────────────────────────────────────────────────┐
│ MONTH 1 - LAUNCH                                            │
├─────────────────────────────────────────────────────────────┤
│ Downloads: 5,000                                            │
│ Registered: 3,000 (60%)                                     │
│ Active (D7): 1,260 (42% of registered)                      │
│ Trial Starts: 315 (25% of active)                           │
│ Premium Conversions: 126 (40% of trial)                     │
│                                                             │
│ Revenue:                                                    │
│ - Subscriptions: $1,890 (126 × $15 avg)                     │
│ - Overage: $63 (126 × $0.50)                                │
│ - Partnerships: $0                                          │
│ - Total: $1,953                                             │
│                                                             │
│ Costs:                                                      │
│ - API (free users): $10,087 (2,744 × $3.70)                 │
│ - API (premium): $1,575 (126 × $12.50)                      │
│ - CAC: $7,875 (315 × $25)                                   │
│ - Total: $19,537                                            │
│                                                             │
│ Net: -$17,584 (expected loss - launch phase)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ MONTH 2 - EARLY GROWTH                                      │
├─────────────────────────────────────────────────────────────┤
│ Downloads: 6,250 (+25%)                                     │
│ Registered: 3,750                                           │
│ Active (D7): 1,575                                          │
│ Trial Starts: 394                                           │
│ Premium Conversions: 158 (plus 101 from Month 1 retained)   │
│ Total Premium: 259                                          │
│                                                             │
│ Revenue:                                                    │
│ - Subscriptions: $3,885                                     │
│ - Overage: $130                                             │
│ - Total: $4,015                                             │
│                                                             │
│ Cumulative Revenue: $5,968                                  │
│ Cumulative Premium Users: 259                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ MONTH 3 - MOMENTUM                                          │
├─────────────────────────────────────────────────────────────┤
│ Downloads: 7,813 (+25%)                                     │
│ Registered: 4,688                                           │
│ Active (D7): 1,969                                          │
│ Trial Starts: 492                                           │
│ Premium Conversions: 197                                    │
│ Total Premium: 415 (after churn)                            │
│                                                             │
│ Revenue:                                                    │
│ - Subscriptions: $6,225                                     │
│ - Overage: $208                                             │
│ - Total: $6,433                                             │
│                                                             │
│ Cumulative Revenue: $12,401                                 │
│ Cumulative Premium Users: 415                               │
└─────────────────────────────────────────────────────────────┘
```

### Months 4-6: Scaling

```
┌─────────────────────────────────────────────────────────────┐
│ MONTH 6 - SCALE PHASE                                       │
├─────────────────────────────────────────────────────────────┤
│ Downloads: 15,259 (month 6 only)                            │
│ Cumulative Downloads: 50,000                                │
│ Cumulative Registered: 30,000                               │
│ Active (D7): 12,600                                         │
│ Total Premium Users: 2,400                                  │
│                                                             │
│ Monthly Revenue (Month 6):                                  │
│ - Subscriptions: $36,000                                    │
│ - Overage: $1,200                                           │
│ - Partnerships: $500                                        │
│ - Total: $37,700                                            │
│                                                             │
│ Cumulative Revenue (Months 1-6): $195,000                   │
│ MRR: $36,000                                                │
│ ARR (annualized): $432,000                                  │
└─────────────────────────────────────────────────────────────┘
```

### Months 7-12: Maturity

```
┌─────────────────────────────────────────────────────────────┐
│ MONTH 12 - MATURITY                                         │
├─────────────────────────────────────────────────────────────┤
│ Downloads: 31,384 (month 12 only)                           │
│ Cumulative Downloads: 100,000                               │
│ Cumulative Registered: 60,000                               │
│ Active (D7): 25,200                                         │
│ Total Premium Users: 6,000                                  │
│                                                             │
│ Monthly Revenue (Month 12):                                 │
│ - Subscriptions: $90,000                                    │
│ - Overage: $3,000                                           │
│ - Partnerships: $2,000                                      │
│ - Total: $95,000                                            │
│                                                             │
│ Year 1 Total Revenue: $615,000                              │
│ MRR: $90,000                                                │
│ ARR (annualized): $1,080,000                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Revenue Breakdown by Stream

### Year 1 Revenue Mix

```
┌─────────────────────────────────────────────────────────────┐
│ REVENUE STREAMS - YEAR 1                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ SUBSCRIPTIONS: $1,757,500 (95%)                             │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ Monthly Plans: $1,225,000 (70% of subscription)     │    │
│ │ Annual Plans: $525,000 (30% of subscription)        │    │
│ │ Student/Hardship: $7,500 (discount impact)          │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ OVERAGE: $55,250 (3%)                                       │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ Voice minute overages                               │    │
│ │ Avg: $0.50/user/month × premium users               │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ PARTNERSHIPS: $37,250 (2%)                                  │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ Therapy platform referrals: $20,000                 │    │
│ │ Wellness app integrations: $10,000                  │    │
│ │ Corporate pilots: $7,250                            │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ TOTAL YEAR 1 REVENUE: $1,850,000                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Retention Analysis

### Cohort Retention Model

```
┌─────────────────────────────────────────────────────────────┐
│ COHORT RETENTION RATES                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Month 1 Cohort (126 premium users):                         │
│ M1: 100% (126)                                              │
│ M2: 80% (101)    ← 20% churn                               │
│ M3: 64% (81)     ← 20% churn                               │
│ M4: 55% (69)     ← 15% churn                               │
│ M5: 47% (59)     ← 15% churn                               │
│ M6: 41% (52)     ← 15% churn                               │
│ M12: 28% (35)    ← 12% monthly churn                       │
│                                                             │
│ Month 6 Cohort (500 premium users):                         │
│ M1: 100% (500)                                              │
│ M2: 85% (425)    ← 15% churn                               │
│ M3: 72% (361)    ← 15% churn                               │
│ M6: 52% (260)    ← 12% churn                               │
│ M12: 30% (150)   ← 12% churn                               │
│                                                             │
│ Target: 35% retention at 12 months (industry: 25-30%)       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Churn Reduction Impact

```
┌─────────────────────────────────────────────────────────────┐
│ CHURN REDUCTION SCENARIOS                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ BASE CASE (15% monthly churn):                              │
│ - 12-month retention: 35%                                   │
│ - Year 2 MRR: $150,000 (from Year 1 cohorts)                │
│                                                             │
│ IMPROVED CASE (12% monthly churn):                          │
│ - 12-month retention: 43%                                   │
│ - Year 2 MRR: $185,000 (from Year 1 cohorts)                │
│ - Revenue impact: +$420,000 Year 2                          │
│                                                             │
│ STRETCH CASE (10% monthly churn):                           │
│ - 12-month retention: 51%                                   │
│ - Year 2 MRR: $220,000 (from Year 1 cohorts)                │
│ - Revenue impact: +$840,000 Year 2                          │
│                                                             │
│ INVESTMENT NEEDED:                                          │
│ - Better onboarding: $50,000                                │
│ - Engagement features: $100,000                             │
│ - Win-back campaigns: $30,000                               │
│ - Total: $180,000                                           │
│ ROI: 2.3x in Year 2                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Unit Economics

### Lifetime Value (LTV) Calculation

```
┌─────────────────────────────────────────────────────────────┐
│ LTV MODEL                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ASSUMPTIONS:                                                │
│ - Avg revenue per user (ARPU): $13.50/month                 │
│ - Gross margin: 75%                                         │
│ - Monthly churn: 12% (mature)                               │
│ - Avg customer lifetime: 8.3 months (1/0.12)                │
│                                                             │
│ LTV CALCULATION:                                            │
│ LTV = (ARPU × Gross Margin) / Churn Rate                    │
│ LTV = ($13.50 × 0.75) / 0.12                                │
│ LTV = $10.13 / 0.12                                         │
│ LTV = $84.38                                                │
│                                                             │
│ ANNUAL PLAN ADJUSTMENT:                                     │
│ - Annual users have 50% lower churn (6%)                    │
│ - LTV (annual) = ($10.00 × 0.75) / 0.06 = $125              │
│                                                             │
│ BLENDED LTV:                                                │
│ - 70% monthly, 30% annual                                   │
│ - Blended LTV = (0.70 × $84.38) + (0.30 × $125)             │
│ - Blended LTV = $59.07 + $37.50 = $96.57                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ LTV:CAC RATIO                                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ LTV: $96.57                                                 │
│ CAC: $25.00                                                 │
│                                                             │
│ LTV:CAC = 3.86:1                                            │
│                                                             │
│ Industry benchmark: 3:1 is healthy                          │
│ SoulSpace: 3.86:1 ✓ (efficient growth)                      │
│                                                             │
│ PAYBACK PERIOD:                                             │
│ CAC / (ARPU × Margin) = $25 / ($13.50 × 0.75)               │
│ = $25 / $10.13 = 2.47 months                                │
│                                                             │
│ Target: < 6 months ✓                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Sensitivity Analysis

### Best Case / Base Case / Worst Case

```
┌─────────────────────────────────────────────────────────────┐
│ SCENARIO ANALYSIS - YEAR 1                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ METRIC              │ WORST    │ BASE     │ BEST            │
├─────────────────────────────────────────────────────────────┤
│ Downloads           │ 60,000   │ 100,000  │ 150,000         │
│ Conversion Rate     │ 8%       │ 10%      │ 12%             │
│ Premium Users       │ 4,800    │ 6,000    │ 9,000           │
│ Churn Rate          │ 18%      │ 12%      │ 8%              │
│                                                             │
│ Revenue:                                                    │
│ - Subscriptions     │ $850K    │ $1,758K  │ $2,800K         │
│ - Overage           │ $28K     │ $55K     │ $90K            │
│ - Partnerships      │ $15K     │ $37K     │ $75K            │
│ - Total             │ $893K    │ $1,850K  │ $2,965K         │
│                                                             │
│ Costs:                                                      │
│ - API               │ $450K    │ $620K    │ $850K           │
│ - CAC               │ $1,000K  │ $1,250K  │ $1,500K         │
│ - Team/Ops          │ $1,200K  │ $1,200K  │ $1,500K         │
│ - Total             │ $2,650K  │ $3,070K  │ $3,850K         │
│                                                             │
│ Net (Revenue - Cost)│ -$1,757K │ -$1,220K │ -$885K          │
│                                                             │
│ Path to Profitability: Month 18 (base), Month 14 (best)     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key Sensitivity Drivers

```
MOST SENSITIVE TO:
1. Conversion rate (±2% = ±$370K revenue)
2. Churn rate (±3% = ±$280K revenue)
3. CAC (±$5 = ±$250K cost)
4. Viral coefficient (word-of-mouth growth)

LEAST SENSITIVE TO:
1. Overage revenue (small portion)
2. Partnership revenue ( Year 1 only)
3. Price changes (inelastic demand)
```

---

## Funding Requirements

### Capital Needs

```
┌─────────────────────────────────────────────────────────────┐
│ FUNDING REQUIREMENTS - YEAR 1                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ OPERATING COSTS:                                            │
│ - Team (12 people): $1,200,000                              │
│ - API costs: $620,000                                       │
│ - Infrastructure: $180,000                                  │
│ - Marketing/CAC: $1,250,000                                 │
│ - Office/Admin: $120,000                                    │
│ - Legal/Compliance: $100,000                                │
│ - Total OpEx: $3,470,000                                    │
│                                                             │
│ REVENUE: $1,850,000                                         │
│                                                             │
│ NET BURN: $1,620,000                                        │
│                                                             │
│ RECOMMENDED RAISE: $2,500,000 (Seed)                        │
│ - Covers 18 months runway                                   │
│ - Buffer for slower growth                                  │
│ - Enables key hires                                         │
│                                                             │
│ EQUITY: 15-20% (typical seed)                               │
│ POST-MONEY VALUATION: $10-12M                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Use of Funds

```
┌─────────────────────────────────────────────────────────────┐
│ USE OF FUNDS                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ TEAM (50%): $1,250,000                                      │
│ ├── Engineering (5): $600,000                               │
│ ├── Product/Design (2): $250,000                            │
│ ├── Marketing (2): $200,000                                 │
│ ├── Safety/Clinical (2): $150,000                           │
│ └── Ops/Support (1): $50,000                                │
│                                                             │
│ PRODUCT (20%): $500,000                                     │
│ ├── API costs: $300,000                                     │
│ ├── Infrastructure: $100,000                                │
│ └── Tools/Software: $100,000                                │
│                                                             │
│ MARKETING (20%): $500,000                                   │
│ ├── Paid acquisition: $300,000                              │
│ ├── Content/SEO: $100,000                                   │
│ └── PR/Events: $100,000                                     │
│                                                             │
│ RESERVE (10%): $250,000                                     │
│ └── Contingency buffer                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Year 2 & 3 Projections (Summary)

### Year 2 Targets

```
┌─────────────────────────────────────────────────────────────┐
│ YEAR 2 PROJECTIONS                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Cumulative Downloads: 600,000                               │
│ Registered Users: 300,000                                   │
│ Premium Users: 45,000 (15% conversion)                      │
│                                                             │
│ MRR (Month 24): $675,000                                    │
│ ARR: $8,100,000                                             │
│ Total Revenue: $5,200,000                                   │
│                                                             │
│ Profitability: Q3 Year 2 (breakeven)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Year 3 Targets

```
┌─────────────────────────────────────────────────────────────┐
│ YEAR 3 PROJECTIONS                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Cumulative Downloads: 2,100,000                             │
│ Registered Users: 1,000,000                                 │
│ Premium Users: 200,000 (20% conversion)                     │
│                                                             │
│ MRR (Month 36): $3,000,000                                  │
│ ARR: $36,000,000                                            │
│ Total Revenue: $22,000,000                                  │
│                                                             │
│ Profitability: Profitable (20% margin)                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Metrics Dashboard

### Monthly Tracking

```
┌─────────────────────────────────────────────────────────────┐
│ KPI DASHBOARD                                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ACQUISITION:                                                │
│ □ Downloads (MoM growth %)                                  │
│ □ Registration rate (%)                                     │
│ □ CAC by channel                                            │
│ □ Viral coefficient                                         │
│                                                             │
│ ACTIVATION:                                                 │
│ □ Day 1 active (%)                                          │
│ □ Day 7 active (%)                                          │
│ □ First conversation completed (%)                          │
│ □ Trial start rate (%)                                      │
│                                                             │
│ MONETIZATION:                                               │
│ □ Trial → paid conversion (%)                               │
│ □ MRR / ARR                                                 │
│ □ ARPU (monthly)                                            │
│ □ Revenue per download                                      │
│                                                             │
│ RETENTION:                                                  │
│ □ D1/D7/D30 retention                                       │
│ □ Monthly churn (%)                                         │
│ □ LTV                                                       │
│ □ LTV:CAC ratio                                             │
│                                                             │
│ ENGAGEMENT:                                                 │
│ □ Messages per user per day                                 │
│ □ Session duration (avg)                                    │
│ □ Voice mode adoption (%)                                   │
│ □ Companion switching rate                                  │
│                                                             │
│ SAFETY:                                                     │
│ □ Crisis interventions                                      │
│ □ Safety flags (%)                                          │
│ □ Resource click-through rate                               │
│ □ User satisfaction (NPS)                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Risks & Mitigation

### Financial Risks

```
┌─────────────────────────────────────────────────────────────┐
│ RISK MATRIX                                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ RISK: Slower user growth                                    │
│ Probability: Medium | Impact: High                          │
│ Mitigation:                                                 │
│ - Diversify acquisition channels                            │
│ - Build referral program                                    │
│ - Invest in organic (SEO, content)                          │
│ - Partnership deals                                         │
│                                                             │
│ RISK: Higher churn than expected                            │
│ Probability: Medium | Impact: High                          │
│ Mitigation:                                                 │
│ - Invest in onboarding optimization                         │
│ - Build engagement features                                 │
│ - Win-back campaigns                                        │
│ - Annual plan incentives                                    │
│                                                             │
│ RISK: API cost increases                                    │
│ Probability: Medium | Impact: Medium                        │
│ Mitigation:                                                 │
│ - Negotiate volume discounts                                │
│ - Optimize model usage (caching, smaller models)            │
│ - Build moat (switching costs via memory)                   │
│                                                             │
│ RISK: Regulatory changes                                    │
│ Probability: Low | Impact: High                             │
│ Mitigation:                                                 │
│ - Legal counsel on retainer                                 │
│ - Proactive compliance                                      │
│ - Ethics board oversight                                    │
│ - Diversify geographies                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Success Milestones

### Year 1 Milestones

```
┌─────────────────────────────────────────────────────────────┐
│ MILESTONE TRACKER                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Q1:                                                         │
│ □ Launch iOS & Android apps                                 │
│ □ 10,000 downloads                                          │
│ □ 500 premium users                                         │
│ □ NPS > 40                                                  │
│                                                             │
│ Q2:                                                         │
│ □ Voice mode launch                                         │
│ □ 50,000 downloads                                          │
│ □ $25K MRR                                                  │
│ □ First partnership deal                                    │
│                                                             │
│ Q3:                                                         │
│ □ Insights dashboard (premium)                              │
│ □ 75,000 downloads                                          │
│ □ $50K MRR                                                  │
│ □ Break even on contribution margin                         │
│                                                             │
│ Q4:                                                         │
│ □ 100,000 downloads                                         │
│ □ $90K MRR                                                  │
│ □ 6,000 premium users                                       │
│ □ Begin Series A preparation                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*

**Note:** These projections are based on assumptions and market research. Actual results will vary. Review and update quarterly.
