# Analytics Dashboard Guide
## Open Rates, CTR, Churn & LTV Tracking

---

## Executive Summary

| Metric | What It Measures | Target | Frequency |
|--------|------------------|--------|-----------|
| **Open Rate** | Email engagement | 35-50% | Per issue |
| **Click Rate** | Content engagement | 3-8% | Per issue |
| **Unsubscribe Rate** | Content fit | <0.5% | Per issue |
| **Growth Rate** | List health | 5-20%/mo | Monthly |
| **Conversion Rate** | Monetization | 3-8% | Monthly |
| **Churn Rate** | Retention | <5%/mo | Monthly |
| **LTV** | Subscriber value | $100+ | Quarterly |
| **Revenue/Sub** | Monetization efficiency | $10+/yr | Monthly |

**Dashboard Tools:**
- Beehiiv (built-in analytics)
- Substack (basic analytics)
- Google Sheets (custom tracking)
- Looker Studio (visualization)

---

## 1. KEY METRICS DEFINED

### Open Rate

**Formula:** (Opens / Delivered) × 100

**What It Measures:**
- Subject line effectiveness
- Sender reputation
- List quality
- Send time optimization

**Benchmarks:**
| Category | Poor | Average | Good | Excellent |
|----------|------|---------|------|-----------|
| All Industries | <20% | 20-30% | 30-40% | 40%+ |
| B2B Newsletters | <25% | 25-35% | 35-45% | 45%+ |
| B2C Newsletters | <18% | 18-25% | 25-35% | 35%+ |

**How to Improve:**
1. A/B test subject lines
2. Optimize send times
3. Clean inactive subscribers
4. Improve sender reputation
5. Segment your list

---

### Click-Through Rate (CTR)

**Formula:** (Unique Clicks / Delivered) × 100

**What It Measures:**
- Content relevance
- CTA effectiveness
- Reader engagement depth

**Benchmarks:**
| Category | Poor | Average | Good | Excellent |
|----------|------|---------|------|-----------|
| All Industries | <1% | 1-2% | 2-4% | 4%+ |
| Newsletters | <2% | 2-4% | 4-6% | 6%+ |

**How to Improve:**
1. Clear, compelling CTAs
2. Relevant content
3. Strategic link placement
4. Reduce link clutter (3-5 max)
5. Use buttons for primary CTA

---

### Click-to-Open Rate (CTOR)

**Formula:** (Unique Clicks / Unique Opens) × 100

**What It Measures:**
- Content quality (among those who opened)
- CTA relevance

**Benchmark:** 15-25% is good

**Why It Matters:**
- Isolates content quality from subject line performance
- High open + low CTOR = misleading subject line
- Low open + high CTOR = great content, weak subject

---

### Unsubscribe Rate

**Formula:** (Unsubscribes / Delivered) × 100

**What It Measures:**
- Content-market fit
- List quality
- Expectation alignment

**Benchmarks:**
| Rate | Status | Action |
|------|--------|--------|
| <0.2% | Excellent | Keep going |
| 0.2-0.5% | Normal | Monitor |
| 0.5-1% | Concerning | Investigate |
| 1%+ | Problem | Immediate action needed |

**How to Reduce:**
1. Set clear expectations upfront
2. Consistent content quality
3. Don't over-send
4. Segment by interest
5. Re-engagement campaigns

---

### Bounce Rate

**Formula:** (Bounces / Sent) × 100

**Types:**
- **Hard Bounce:** Invalid email (remove immediately)
- **Soft Bounce:** Temporary issue (monitor)

**Benchmark:** <2% is healthy

**How to Reduce:**
1. Email validation at signup
2. Regular list cleaning
3. Remove hard bounces immediately
4. Re-engage soft bounces

---

### List Growth Rate

**Formula:** ((New Subscribers - Unsubscribes) / Total List) × 100

**What It Measures:**
- Overall list health
- Acquisition effectiveness

**Benchmarks:**
| Stage | Target Growth |
|-------|---------------|
| 0-1K subs | 20-50%/mo |
| 1K-10K subs | 10-20%/mo |
| 10K-50K subs | 5-10%/mo |
| 50K+ subs | 3-5%/mo |

---

### Conversion Rate (Free → Paid)

**Formula:** (Paid Conversions / Free Subscribers) × 100

**What It Measures:**
- Value proposition clarity
- Pricing appropriateness
- Audience quality

**Benchmarks:**
| Category | Poor | Average | Good | Excellent |
|----------|------|---------|------|-----------|
| Free → Paid | <2% | 2-4% | 4-7% | 7%+ |

**How to Improve:**
1. Clear value differentiation
2. Strategic upgrade CTAs
3. Social proof
4. Limited-time offers
5. Free trials

---

### Churn Rate (Paid Subscribers)

**Formula:** (Cancelled Subscriptions / Total Paid) × 100

**What It Measures:**
- Product-market fit
- Retention effectiveness
- Value delivery

**Benchmarks:**
| Type | Monthly | Annual |
|------|---------|--------|
| Monthly Plans | 5-10% | N/A |
| Annual Plans | N/A | 20-30% |

**How to Reduce:**
1. Consistent value delivery
2. Engage with subscribers
3. Winback campaigns
4. Annual plans (lower churn)
5. Exit surveys

---

### Lifetime Value (LTV)

**Formula:** Average Revenue Per User × Average Lifespan (months)

**Example:**
- ARPU: $10/month
- Average lifespan: 12 months
- LTV: $120

**What It Measures:**
- Long-term subscriber value
- Business sustainability
- Acquisition budget ceiling

**Target:** LTV > 3× CAC (Customer Acquisition Cost)

---

### Revenue Per Subscriber (RPS)

**Formula:** Total Revenue / Total Subscribers

**What It Measures:**
- Monetization efficiency
- Overall business health

**Benchmarks:**
| List Type | Annual RPS Target |
|-----------|-------------------|
| Free (ads/affiliate) | $5-15 |
| Mixed (some paid) | $20-50 |
| Paid-heavy | $50-200+ |

---

## 2. DASHBOARD SETUP

### Beehiiv Analytics (Built-In)

**Available Metrics:**
- Opens, clicks, unsubscribes (per issue)
- Growth over time
- Referral sources
- Subscriber locations
- Device breakdown
- Revenue tracking

**Access:** Dashboard → Analytics

---

### Google Sheets Tracker Template

**Create tabs for:**

#### Tab 1: Issue Performance
```
| Issue # | Date | Subject | Sent | Opens | Open % | Clicks | Click % | Unsubs | Revenue |
|---------|------|---------|------|-------|--------|--------|---------|--------|---------|
| 1 | 1/1/26 | ... | 1000 | 420 | 42% | 35 | 3.5% | 2 | $0 |
```

#### Tab 2: Monthly Summary
```
| Month | Start Subs | New Subs | Unsubs | End Subs | Growth % | Open % (avg) | Click % (avg) | Revenue | Paid Subs |
|-------|------------|----------|--------|----------|----------|--------------|---------------|---------|-----------|
| Jan | 1000 | 250 | 30 | 1220 | 22% | 41% | 3.8% | $500 | 50 |
```

#### Tab 3: Revenue Tracking
```
| Month | Subscriptions | Sponsorships | Affiliates | Products | Total |
|-------|---------------|--------------|------------|----------|-------|
| Jan | $500 | $0 | $150 | $0 | $650 |
```

#### Tab 4: Cohort Analysis
```
| Signup Month | Initial Subs | Month 1 Retained | Month 2 | Month 3 | Month 6 | Month 12 |
|--------------|--------------|------------------|---------|---------|---------|----------|
| Jan 2026 | 250 | 220 | 200 | 185 | 160 | 140 |
```

---

### Looker Studio Dashboard

**Connect Data Sources:**
1. Beehiiv/Substack export (CSV)
2. Stripe (revenue data)
3. Google Sheets (manual tracking)

**Recommended Visualizations:**

1. **Overview Panel**
   - Total subscribers (current vs. last month)
   - MRR (Monthly Recurring Revenue)
   - Average open rate (30 days)
   - Average click rate (30 days)

2. **Growth Chart**
   - Line chart: Subscribers over time
   - Overlay: New vs. unsubscribed

3. **Engagement Trends**
   - Line chart: Open rate over time
   - Line chart: Click rate over time

4. **Revenue Breakdown**
   - Pie chart: Revenue by source
   - Bar chart: Monthly revenue

5. **Cohort Retention**
   - Heatmap: Retention by signup month

---

## 3. TRACKING SPREADSHEET

### Copy This Template

[Create in Google Sheets]

**METRICS DASHBOARD**

```
=== CURRENT STATUS (Auto-calculated) ===
Total Subscribers: [formula]
Paid Subscribers: [formula]
Free Subscribers: [formula]
Monthly Recurring Revenue: [formula]
Avg Open Rate (30d): [formula]
Avg Click Rate (30d): [formula]

=== MONTHLY GOALS ===
Subscriber Growth Target: [manual]
Revenue Target: [manual]
Open Rate Target: [manual]

=== ACTUAL VS. GOAL ===
Growth: [actual] / [goal] = [%]
Revenue: [actual] / [goal] = [%]
```

**WEEKLY TRACKING**

```
| Week | New Subs | Unsubs | Net Growth | Issues Sent | Avg Open % | Avg Click % | Revenue |
|------|----------|--------|------------|-------------|------------|-------------|---------|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
```

**ISSUE LOG**

```
| # | Date | Subject | Sent | Opens | Open % | Clicks | Click % | Unsubs | Notes |
|---|------|---------|------|-------|--------|--------|---------|--------|-------|
| | | | | | | | | | |
```

**REVENUE LOG**

```
| Date | Type | Source | Amount | Notes |
|------|------|--------|--------|-------|
| | Subscription | Stripe | | |
| | Sponsorship | [Company] | | |
| | Affiliate | [Product] | | |
| | Product | [Name] | | |
```

---

## 4. REPORTING CADENCE

### Daily (5 minutes)
- Check yesterday's issue performance
- Respond to replies
- Monitor for any issues

### Weekly (30 minutes)
- Review week's metrics
- Update tracking sheet
- Identify top/bottom performers
- Plan next week's content

### Monthly (2 hours)
- Full monthly report
- Revenue reconciliation
- Goal review
- Strategy adjustments
- Sponsor reporting (if applicable)

### Quarterly (4 hours)
- Deep dive analysis
- Cohort review
- LTV calculation
- Pricing review
- Strategic planning

### Annually (1 day)
- Year in review
- Major strategy decisions
- Goal setting
- Tool/platform evaluation

---

## 5. MONTHLY REPORT TEMPLATE

```
[NEWSLETTER NAME] - MONTHLY REPORT
Month: [Month Year]
Date: [Date]

=== KEY METRICS ===

Subscribers
- Start of Month: [X,XXX]
- New Subscribers: [+XXX]
- Unsubscribes: [-XX]
- End of Month: [X,XXX]
- Growth Rate: [X]%

Engagement
- Issues Sent: [X]
- Average Open Rate: [X]% (vs. [X]% last month)
- Average Click Rate: [X]% (vs. [X]% last month)
- Best Issue: [Subject] ([X]% open)
- Worst Issue: [Subject] ([X]% open)

Revenue
- Total Revenue: $[X,XXX]
- Subscriptions: $[X,XXX]
- Sponsorships: $[X,XXX]
- Affiliates: $[X,XXX]
- Products: $[X,XXX]
- Revenue Per Subscriber: $[X.XX]

Paid Tier
- Paid Subscribers: [XXX] ([X]% of total)
- New Paid: [+XX]
- Churned Paid: [-XX]
- MRR: $[X,XXX]
- Churn Rate: [X]%

=== HIGHLIGHTS ===

✓ [Accomplishment 1]
✓ [Accomplishment 2]
✓ [Accomplishment 3]

=== CHALLENGES ===

⚠ [Challenge 1]
⚠ [Challenge 2]

=== LESSONS LEARNED ===

💡 [Lesson 1]
💡 [Lesson 2]

=== NEXT MONTH GOALS ===

→ [Goal 1]
→ [Goal 2]
→ [Goal 3]

=== ACTION ITEMS ===

□ [Task 1]
□ [Task 2]
□ [Task 3]
```

---

## 6. A/B TESTING FRAMEWORK

### What to Test

**High Impact:**
1. Subject lines
2. Send times
3. Send days
4. CTA placement
5. CTA copy

**Medium Impact:**
1. Email length
2. Image vs. text
3. Personalization
4. Preview text

**Low Impact:**
1. Font choices
2. Color schemes
3. Signature style

### Testing Process

**Step 1: Hypothesis**
```
"If we [change], then [metric] will [increase/decrease] 
because [reason]."

Example: "If we send at 6 AM instead of 9 AM, then open 
rate will increase because readers check email first 
thing in the morning."
```

**Step 2: Test Design**
- Sample size: Minimum 1,000 per variant
- Duration: 1-2 weeks minimum
- One variable at a time
- Statistical significance: 95%+ confidence

**Step 3: Execute**
- Split list randomly
- Send variants simultaneously
- Track results

**Step 4: Analyze**
```
Variant A: 42% open rate (n=1,000)
Variant B: 45% open rate (n=1,000)

Difference: 3 percentage points
Statistical significance: [use calculator]
Winner: Variant B
```

**Step 5: Implement**
- Adopt winner
- Document learnings
- Plan next test

### A/B Test Log

```
| Date | Test | Variant A | Variant B | Winner | Lift | Notes |
|------|------|-----------|-----------|--------|------|-------|
| | Subject line | "Weekly Update" | "5 insights for you" | B | +12% | Specificity wins |
| | Send time | 6 AM | 9 AM | A | +8% | Early birds |
| | CTA | "Learn More" | "Get the Guide" | B | +23% | Action-oriented |
```

---

## 7. BENCHMARKS BY NICHE

### Open Rates by Industry

| Niche | Average Open Rate |
|-------|-------------------|
| Media/Entertainment | 22% |
| E-commerce | 18% |
| B2B/Professional | 25% |
| Education | 28% |
| Nonprofit | 25% |
| Health/Wellness | 23% |
| Finance | 21% |
| Technology | 24% |
| Newsletters (general) | 35-50% |

### Click Rates by Industry

| Niche | Average Click Rate |
|-------|-------------------|
| Media/Entertainment | 2.5% |
| E-commerce | 2.0% |
| B2B/Professional | 3.0% |
| Education | 3.5% |
| Nonprofit | 2.8% |
| Health/Wellness | 2.6% |
| Finance | 2.4% |
| Technology | 3.2% |
| Newsletters (general) | 3-6% |

### Conversion Rates (Free → Paid)

| Niche | Average Conversion |
|-------|-------------------|
| Business/Finance | 5-8% |
| Technology | 4-7% |
| Health/Wellness | 3-5% |
| Education | 4-6% |
| Lifestyle | 2-4% |
| News/Politics | 3-5% |
| Entertainment | 2-4% |

---

## 8. RED FLAGS & ALERTS

### Immediate Action Required

| Metric | Threshold | Action |
|--------|-----------|--------|
| Open Rate Drop | >20% decrease | Check deliverability, spam filters |
| Unsubscribe Spike | >1% per issue | Review content, survey leavers |
| Bounce Rate | >5% | Clean list immediately |
| Spam Complaints | >0.1% | Review content, sending practices |
| Revenue Drop | >30% MoM | Investigate cause, adjust strategy |

### Weekly Monitoring

- Growth rate trends
- Engagement trends
- Revenue trends
- Churn rate

### Monthly Review

- Cohort retention
- LTV trends
- CAC payback period
- Channel performance

---

## 9. TOOLS & RESOURCES

### Analytics Platforms

| Tool | Best For | Price |
|------|----------|-------|
| **Beehiiv Analytics** | Built-in, comprehensive | Included |
| **Substack Analytics** | Basic tracking | Included |
| **Google Analytics** | Website traffic | Free |
| **Looker Studio** | Custom dashboards | Free |
| **Mixpanel** | Advanced analytics | $25+/mo |

### Calculators

- **LTV Calculator:** [omnicalculator.com/finance/lifetime-value]
- **A/B Test Calculator:** [abtestguide.com]
- **Sample Size Calculator:** [surveymonkey.com/mp/sample-size-calculator]

### Templates

- Google Sheets tracker (see above)
- Monthly report template (see above)
- A/B test log (see above)

---

## FINAL ADVICE

### What Matters Most

**Focus on these 3 metrics:**
1. **Open Rate** - Are people interested?
2. **Click Rate** - Is content valuable?
3. **Growth Rate** - Is the business healthy?

**Don't obsess over:**
- Vanity metrics (total subs without engagement)
- Day-to-day fluctuations
- Comparing to outliers

### The Compound Effect

Small improvements compound:
- 1% better open rate × 52 issues = significant impact
- 0.5% lower churn = 6% more retained annually
- $1 more RPS × 10K subs = $10K/year

### Action Over Analysis

Don't get stuck in analysis paralysis:
- Track the basics consistently
- Review monthly
- Test quarterly
- Adjust strategy annually

**Data informs decisions. Action drives results.**

---

*Last Updated: March 2026*
*Part of the Newsletter Business Package*
