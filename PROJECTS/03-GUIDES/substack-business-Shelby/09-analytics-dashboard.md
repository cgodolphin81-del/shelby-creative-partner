# 09 — Analytics Dashboard: Open Rates, CTR, Conversion, Churn, LTV

What gets measured gets managed. This guide covers the essential metrics for your Substack business and how to track them.

---

## 📊 Section 1: Essential Metrics

### The Big 5 Metrics

| Metric | What It Measures | Target | Frequency |
|--------|-----------------|--------|-----------|
| **Open Rate** | Subject line + sender trust | 40%+ | Per email |
| **Click Rate** | Content engagement | 5%+ | Per email |
| **Conversion Rate** | Value perception | 5-10% | Weekly |
| **Churn Rate** | Retention/satisfaction | <5%/month | Monthly |
| **LTV** | Lifetime subscriber value | $100+ | Quarterly |

---

## 📈 Section 2: Substack Native Analytics

### Where to Find Analytics

**Substack Dashboard → Analytics:**

1. **Overview** — Key metrics at a glance
2. **Posts** — Performance by post
3. **Subscriptions** — Growth and churn
4. **Revenue** — MRR, ARR, upgrades
5. **Recommendations** — Network performance

---

### Key Substack Metrics

#### Subscription Metrics
- **Total subscribers** — Free + paid
- **Free subscribers** — Non-paying
- **Paid subscribers** — Paying customers
- **Growth rate** — New subs per period
- **Churn rate** — Cancellations per period

#### Engagement Metrics
- **Open rate** — % who opened
- **Click rate** — % who clicked links
- **Reply rate** — % who replied
- **Forward rate** — % who forwarded

#### Revenue Metrics
- **MRR** — Monthly recurring revenue
- **ARR** — Annual recurring revenue
- **Average revenue per user (ARPU)** — MRR ÷ paid subs
- **Upgrade rate** — Free → paid conversions

---

## 📋 Section 3: Analytics Dashboard Template

### Weekly Dashboard (Google Sheets/Notion)

```
WEEK OF: [Date]

SUBSCRIPTIONS
├─ Total: [X] (+/- X from last week)
├─ Free: [X]
├─ Paid: [X] (+/- X)
├─ New this week: [X]
└─ Churn this week: [X]

ENGAGEMENT
├─ Emails sent: [X]
├─ Avg open rate: [X]% (target: 40%+)
├─ Avg click rate: [X]% (target: 5%+)
├─ Replies received: [X]
└─ Forwards: [X]

REVENUE
├─ MRR: $[X] (+/- $X)
├─ ARR: $[X]
├─ ARPU: $[X]/mo
└─ Upgrades this week: [X]

TOP POSTS
1. [Title] — [X]% opens, [X]% clicks
2. [Title] — [X]% opens, [X]% clicks
3. [Title] — [X]% opens, [X]% clicks

GOALS FOR NEXT WEEK
- [Goal 1]
- [Goal 2]
- [Goal 3]
```

---

### Monthly Dashboard

```
MONTH: [Month Year]

GROWTH
├─ Starting subs: [X]
├─ Ending subs: [X]
├─ Net growth: [+/- X]
├─ Growth rate: [X]%
├─ Best day: [Date] (+X subs)
└─ Worst day: [Date] (-X subs)

ENGAGEMENT
├─ Emails sent: [X]
├─ Avg open rate: [X]% (vs. [X]% last month)
├─ Avg click rate: [X]% (vs. [X]% last month)
├─ Best post: [Title] ([X]% opens)
└─ Worst post: [Title] ([X]% opens)

CONVERSION
├─ Free → Paid: [X] ([X]%)
├─ Paid → Free: [X] ([X]%)
├─ New paid: [X]
├─ Churned paid: [X]
└─ Net paid change: [+/- X]

REVENUE
├─ Starting MRR: $[X]
├─ Ending MRR: $[X]
├─ MRR growth: [+/- $X] ([X]%)
├─ New revenue: $[X]
├─ Churned revenue: $[X]
└─ Net revenue change: [+/- $X]

CHANNELS
├─ Direct: [X]%
├─ Substack network: [X]%
├─ Twitter: [X]%
├─ LinkedIn: [X]%
├─ Other social: [X]%
└─ Other: [X]%

INSIGHTS
- What worked:
- What didn't:
- Do more of:
- Do less of:

GOALS FOR NEXT MONTH
- Subscriber goal: [X]
- Revenue goal: $[X]
- Content goal: [X]
```

---

## 🧮 Section 4: Key Calculations

### Growth Rate

```
Growth Rate = ((Ending Subs - Starting Subs) ÷ Starting Subs) × 100

Example:
Starting: 1,000
Ending: 1,150
Growth Rate = ((1,150 - 1,000) ÷ 1,000) × 100 = 15%
```

---

### Churn Rate

```
Churn Rate = (Churned Subs ÷ Starting Subs) × 100

Example:
Starting paid subs: 100
Churned this month: 5
Churn Rate = (5 ÷ 100) × 100 = 5%

Target: <5% monthly for healthy business
```

---

### Conversion Rate

```
Conversion Rate = (Paid Subs ÷ Total Subs) × 100

Example:
Total subs: 5,000
Paid subs: 350
Conversion Rate = (350 ÷ 5,000) × 100 = 7%

Target: 5-10% (varies by niche and paywall strategy)
```

---

### Monthly Recurring Revenue (MRR)

```
MRR = Sum of all active paid subscriptions

Example:
- 50 subs @ $5/mo = $250
- 30 subs @ $10/mo = $300
- 20 subs @ $50/yr = $83 (50×12÷12)
Total MRR = $633
```

---

### Annual Recurring Revenue (ARR)

```
ARR = MRR × 12

Example:
MRR: $633
ARR = $633 × 12 = $7,596
```

---

### Average Revenue Per User (ARPU)

```
ARPU = MRR ÷ Paid Subscribers

Example:
MRR: $633
Paid subs: 100
ARPU = $633 ÷ 100 = $6.33/month
```

---

### Lifetime Value (LTV)

```
LTV = ARPU × Average Subscription Length (months)

Example:
ARPU: $8/month
Average subscription: 14 months
LTV = $8 × 14 = $112

Target: $100+ LTV for healthy business
```

**Alternative LTV formula:**
```
LTV = ARPU ÷ Churn Rate

Example:
ARPU: $8/month
Monthly churn: 5% (0.05)
LTV = $8 ÷ 0.05 = $160
```

---

### Customer Acquisition Cost (CAC)

```
CAC = Total Marketing Spend ÷ New Customers Acquired

Example:
Spent $500 on ads
Acquired 50 paid subs
CAC = $500 ÷ 50 = $10

Rule: LTV should be 3x CAC minimum
```

---

### LTV:CAC Ratio

```
LTV:CAC = LTV ÷ CAC

Example:
LTV: $120
CAC: $30
LTV:CAC = 120 ÷ 30 = 4:1

Target: 3:1 or higher
Below 3:1: Not sustainable
Above 5:1: Could invest more in growth
```

---

## 📉 Section 5: Metric Benchmarks by Stage

### 0-1,000 Subscribers

| Metric | Target | Notes |
|--------|--------|-------|
| Open rate | 45%+ | Personal connection = higher opens |
| Click rate | 6%+ | Highly engaged early adopters |
| Conversion | 5-8% | Building value perception |
| Churn | <5%/month | Normal while finding fit |
| MRR | $100-500 | Early stage |

---

### 1,000-5,000 Subscribers

| Metric | Target | Notes |
|--------|--------|-------|
| Open rate | 40%+ | Normalizing as you grow |
| Click rate | 5%+ | Content quality matters more |
| Conversion | 6-10% | Social proof improving |
| Churn | <4%/month | Better retention systems |
| MRR | $500-3,000 | Growing steadily |

---

### 5,000-20,000 Subscribers

| Metric | Target | Notes |
|--------|--------|-------|
| Open rate | 35%+ | List diversity affects rate |
| Click rate | 4%+ | Segment for better rates |
| Conversion | 8-12% | Optimized paywall |
| Churn | <3%/month | Strong retention |
| MRR | $3,000-15,000 | Sustainable income |

---

### 20,000+ Subscribers

| Metric | Target | Notes |
|--------|--------|-------|
| Open rate | 30%+ | Large list = lower average |
| Click rate | 3%+ | Focus on engaged segment |
| Conversion | 10-15% | Premium positioning |
| Churn | <2%/month | Mature retention |
| MRR | $15,000+ | Full-time business |

---

## 🎯 Section 6: Goal Setting Framework

### SMART Goals for Substack

| Component | Example |
|-----------|---------|
| **Specific** | "Grow to 5,000 subscribers" |
| **Measurable** | "Achieve 8% paid conversion" |
| **Achievable** | Based on current growth rate |
| **Relevant** | Aligns with business goals |
| **Time-bound** | "By December 31, 2026" |

---

### Goal Templates

#### Subscriber Growth Goal
```
GOAL: Grow from [X] to [Y] subscribers by [date]

Current: [X]
Target: [Y]
Gap: [Y - X]
Timeframe: [X] months
Required monthly growth: [Gap ÷ months]
Required weekly growth: [Monthly ÷ 4]

Strategies:
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]
```

---

#### Revenue Goal
```
GOAL: Reach $[X] MRR by [date]

Current MRR: $[X]
Target MRR: $[Y]
Gap: $[Y - X]
Timeframe: [X] months

Paths to goal:
- New paid subs needed: [Gap ÷ ARPU]
- Price increase impact: $[X]
- Annual upgrades: $[X]

Strategies:
1. [Strategy 1]
2. [Strategy 2]
3. [Strategy 3]
```

---

#### Engagement Goal
```
GOAL: Improve open rate from [X]% to [Y]% by [date]

Current: [X]%
Target: [Y]%
Gap: [Y - X] percentage points

Tactics:
1. A/B test subject lines (weekly)
2. Clean inactive subscribers (monthly)
3. Optimize send time (test 2x/month)
4. Improve sender reputation (ongoing)
```

---

## 📱 Section 7: Tools & Tracking

### Native Substack Analytics

**Built-in:**
- Subscriber counts (free/paid)
- Open and click rates
- Growth charts
- Revenue tracking
- Post performance

**Limitations:**
- Can't export all data easily
- Limited custom reports
- No cohort analysis
- Basic churn tracking

---

### Spreadsheet Tracking (Recommended)

**Google Sheets Template:**
- Weekly metrics tab
- Monthly summary tab
- Goal tracking tab
- Post performance log
- Revenue projections

**Benefits:**
- Custom calculations
- Historical trends
- Goal tracking
- Easy to share

---

### Advanced Tools

| Tool | Purpose | Cost |
|------|---------|------|
| **Substack Analytics** | Native metrics | Free |
| **Google Sheets** | Custom tracking | Free |
| **Notion** | Dashboard + notes | Free-10/mo |
| **Airtable** | Advanced tracking | Free-20/mo |
| **ChartMogul** | SaaS metrics | $100+/mo |
| **Baremetrics** | Revenue analytics | $50+/mo |

**Recommendation:** Start with Substack + Google Sheets. Upgrade when you hit $5K+ MRR.

---

## 📊 Section 8: Weekly Review Process

### 30-Minute Weekly Review

**Step 1: Review Numbers (10 min)**
- Update dashboard
- Check vs. goals
- Note significant changes

**Step 2: Analyze Posts (10 min)**
- Best performing post (why?)
- Worst performing post (why?)
- Patterns to note

**Step 3: Plan Actions (10 min)**
- What to do more of
- What to stop doing
- Tests to run next week

---

### Weekly Review Template

```
WEEKLY REVIEW — [Week of Date]

NUMBERS
├─ Subs: [X] → [Y] ([+/- Z])
├─ Paid: [X] → [Y] ([+/- Z])
├─ MRR: $[X] → $[Y] ([+/- $Z])
├─ Open rate: [X]% (avg)
└─ Click rate: [X]% (avg)

BEST POST
Title: [Title]
Opens: [X]%
Clicks: [X]%
Why it worked: [Reason]

WORST POST
Title: [Title]
Opens: [X]%
Clicks: [X]%
Why it underperformed: [Reason]

DO MORE OF
- [Thing 1]
- [Thing 2]

DO LESS OF
- [Thing 1]
- [Thing 2]

TESTS FOR NEXT WEEK
- [Test 1]
- [Test 2]

GOALS FOR NEXT WEEK
- [Goal 1]
- [Goal 2]
- [Goal 3]
```

---

## 📈 Section 9: Monthly Review Process

### 2-Hour Monthly Review

**Step 1: Full Metrics Review (30 min)**
- All KPIs vs. goals
- Month-over-month trends
- Year-over-year (if applicable)

**Step 2: Deep Dive Analysis (30 min)**
- Cohort analysis (by signup month)
- Channel performance
- Content type performance
- Paywall conversion analysis

**Step 3: Strategy Planning (30 min)**
- What's working (double down)
- What's not (pivot or kill)
- New tests to run
- Resource allocation

**Step 4: Goal Setting (30 min)**
- Next month's goals
- Key initiatives
- Success metrics
- Accountability plan

---

### Monthly Review Template

```
MONTHLY REVIEW — [Month Year]

EXECUTIVE SUMMARY
[2-3 sentences on overall performance]

KEY METRICS
├─ Subscribers: [X] → [Y] ([X]% growth)
├─ Paid: [X] → [Y] ([X]% conversion)
├─ MRR: $[X] → $[Y] ([X]% growth)
├─ Open rate: [X]% (vs. [Y]% last month)
├─ Click rate: [X]% (vs. [Y]% last month)
└─ Churn: [X]% (vs. [Y]% last month)

CHANNEL PERFORMANCE
├─ Direct: [X]%
├─ Substack network: [X]%
├─ Twitter: [X]%
├─ LinkedIn: [X]%
└─ Other: [X]%

CONTENT ANALYSIS
Best performing types:
1. [Type] — [X]% avg opens
2. [Type] — [X]% avg opens

Worst performing types:
1. [Type] — [X]% avg opens
2. [Type] — [X]% avg opens

WINNERS (Do More)
- [Winner 1]
- [Winner 2]
- [Winner 3]

LOSERS (Do Less)
- [Loser 1]
- [Loser 2]

NEW INSIGHTS
- [Insight 1]
- [Insight 2]
- [Insight 3]

NEXT MONTH GOALS
├─ Subscribers: [X]
├─ Paid: [X]
├─ MRR: $[X]
└─ Key initiatives:
    1. [Initiative 1]
    2. [Initiative 2]
    3. [Initiative 3]
```

---

## ✅ Analytics Checklist

```
DAILY
☐ Check new subscriber count
☐ Respond to replies
☐ Note any issues

WEEKLY
☐ Update metrics dashboard
☐ Review post performance
☐ Compare to goals
☐ Plan tests for next week
☐ Send weekly review to yourself

MONTHLY
☐ Full metrics review
☐ Cohort analysis
☐ Channel performance review
☐ Strategy adjustment
☐ Set next month goals
☐ Update revenue projections

QUARTERLY
☐ LTV calculation
☐ CAC analysis (if spending on growth)
☐ LTV:CAC ratio
☐ Annual goal progress
☐ Strategic planning
```

---

## 🚀 Action Steps

1. **Create your dashboard** — Use the template above (Google Sheets or Notion)
2. **Set up weekly review** — 30 minutes, same time each week
3. **Define your goals** — 30/60/90 day targets
4. **Establish baselines** — Document current metrics
5. **Schedule monthly reviews** — 2 hours, end of each month
6. **Move to `10-revenue-projections.md`**

---

**Next:** [`10-revenue-projections.md`](./10-revenue-projections.md) — 3-year revenue model from 100 to 50K subscribers
