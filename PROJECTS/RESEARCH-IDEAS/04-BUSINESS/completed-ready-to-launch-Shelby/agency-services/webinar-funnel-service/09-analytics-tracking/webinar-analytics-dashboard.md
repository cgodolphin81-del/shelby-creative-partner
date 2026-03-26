# Analytics Tracking: Registrations, Attendance, Conversions

## Overview

Track every metric that matters for your webinar funnel. This guide covers what to measure, how to track it, and how to optimize based on data.

---

## 📊 KEY METRICS OVERVIEW

### The Webinar Funnel

```
IMPRESSIONS (ads, emails, social)
      ↓
CLICKS (to registration page)
      ↓
REGISTRATIONS (opt-ins)
      ↓
ATTENDEES (show up live)
      ↓
ENGAGED (stay to offer)
      ↓
BUYERS (purchase)
      ↓
REVENUE (total sales)
```

---

## 🎯 METRIC DEFINITIONS & BENCHMARKS

### 1. Registration Rate

**Definition**: Percentage of landing page visitors who register

**Formula**: `(Registrations ÷ Landing Page Visitors) × 100`

**Benchmarks**:
- Poor: <20%
- Average: 25-35%
- Good: 35-45%
- Excellent: 45%+

**What Affects This**:
- Headline clarity
- Value proposition
- Form length
- Social proof
- Urgency elements
- Page load speed

**How to Improve**:
- A/B test headlines
- Reduce form fields
- Add testimonials
- Create urgency
- Improve page design

---

### 2. Attendance Rate (Show Rate)

**Definition**: Percentage of registrants who attend live

**Formula**: `(Live Attendees ÷ Registrations) × 100`

**Benchmarks**:
- Poor: <25%
- Average: 30-40%
- Good: 40-50%
- Excellent: 50%+

**What Affects This**:
- Reminder email sequence
- Time of day/day of week
- Topic urgency
- Calendar invites
- SMS reminders
- Pre-webinar engagement

**How to Improve**:
- Send more reminders (4-6 emails)
- Add SMS reminders
- Include calendar invites
- Create pre-webinar engagement
- Choose optimal timing
- Build anticipation

---

### 3. Retention Rate (Stay Rate)

**Definition**: Percentage of attendees who stay until the offer

**Formula**: `(Attendees at Offer ÷ Live Attendees) × 100`

**Benchmarks**:
- Poor: <50%
- Average: 60-70%
- Good: 70-80%
- Excellent: 80%+

**What Affects This**:
- Content quality
- Engagement level
- Length of webinar
- When offer is presented
- Host delivery
- Value delivered before offer

**How to Improve**:
- Deliver value early
- Engage audience (polls, chat)
- Present offer at 75% mark
- Tease offer throughout
- Keep energy high
- Respect time commitments

---

### 4. Conversion Rate (Sales Rate)

**Definition**: Percentage of attendees who purchase

**Formula**: `(Buyers ÷ Attendees at Offer) × 100`

**Benchmarks**:
- Poor: <3%
- Average: 5-8%
- Good: 8-12%
- Excellent: 12%+
- High-Ticket ($5K+): 2-5%

**What Affects This**:
- Offer relevance
- Price point
- Urgency/scarcity
- Guarantee
- Payment options
- Trust/credibility
- Objection handling

**How to Improve**:
- Strengthen offer
- Add bonuses
- Improve guarantee
- Add payment plans
- Better objection handling
- More social proof
- Clearer CTA

---

### 5. Revenue Per Registrant (RPR)

**Definition**: Average revenue generated per person who registered

**Formula**: `Total Revenue ÷ Total Registrations`

**Benchmarks**:
- Poor: <$10
- Average: $15-30
- Good: $30-50
- Excellent: $50+

**Why It Matters**:
- Tells you how much you can spend to acquire registrants
- Compares webinar performance across topics
- Helps forecast revenue

**How to Improve**:
- Improve any metric above
- Increase average order value
- Add upsells
- Improve follow-up sequence

---

### 6. Revenue Per Attendee (RPA)

**Definition**: Average revenue generated per person who attended

**Formula**: `Total Revenue ÷ Total Attendees`

**Benchmarks**:
- Poor: <$30
- Average: $50-100
- Good: $100-200
- Excellent: $200+

**Why It Matters**:
- Measures actual webinar effectiveness
- More actionable than RPR
- Helps optimize presentation

---

### 7. Cost Per Registration (CPR)

**Definition**: How much you spend to get each registration

**Formula**: `Total Ad Spend ÷ Total Registrations`

**Benchmarks** (varies by niche):
- B2C: $5-20
- B2B: $20-100
- High-Ticket: $50-200

**How to Improve**:
- Better ad targeting
- Improved ad creative
- Optimize landing page
- Retargeting campaigns
- Organic promotion

---

### 8. Cost Per Acquisition (CPA)

**Definition**: How much you spend to get each customer

**Formula**: `Total Ad Spend ÷ Total Buyers`

**Benchmarks**:
- Should be <30% of product price
- Ideal: 10-20% of product price

**How to Improve**:
- Improve conversion rate
- Lower cost per registration
- Better qualification
- Improve follow-up

---

### 9. Return on Ad Spend (ROAS)

**Definition**: Revenue generated per dollar spent on ads

**Formula**: `Total Revenue ÷ Total Ad Spend`

**Benchmarks**:
- Poor: <2:1
- Average: 3:1
- Good: 4:1
- Excellent: 5:1+

**How to Improve**:
- All of the above
- Scale winning ads
- Cut losing ads
- Improve targeting

---

### 10. Replay View Rate

**Definition**: Percentage of registrants who watch the replay

**Formula**: `(Replay Views ÷ Registrations) × 100`

**Benchmarks**:
- Poor: <15%
- Average: 20-30%
- Good: 30-40%
- Excellent: 40%+

**Why It Matters**:
- Additional sales opportunity
- Content repurposing value
- Audience engagement indicator

---

## 📈 TRACKING TOOLS

### Google Analytics Setup

```
STEP 1: Create Goals
- Goal 1: Registration (thank you page view)
- Goal 2: Email click (click on registration link)
- Goal 3: Purchase (checkout confirmation)

STEP 2: UTM Parameters
Use on all promotional links:
- utm_source: facebook, email, google, etc.
- utm_medium: cpc, email, social, organic
- utm_campaign: webinar_[topic]_[date]
- utm_content: ad_variation_a

Example:
yoururl.com/webinar?utm_source=facebook&utm_medium=cpc&utm_campaign=webinar_launch_jan&utm_content=video_ad

STEP 3: Event Tracking
Track these events:
- Video plays (if using video on landing page)
- Button clicks
- Form submissions
- Email clicks
```

### Facebook Pixel Setup

```
EVENTS TO TRACK:
1. PageView (registration page)
2. Lead (registration complete)
3. ViewContent (thank you page)
4. Purchase (checkout complete)

IMPLEMENTATION:
- Install pixel on all pages
- Set up conversion API for accuracy
- Create custom audiences:
  * Page visitors (retargeting)
  * Registrants (exclude from ads)
  * Purchasers (create lookalike)
```

### Platform Analytics

#### Zoom Webinars
- Registrations
- Attendees
- Attendance duration
- Poll responses
- Q&A questions
- Chat activity

#### WebinarJam
- Registrations (real-time)
- Attendance rate
- Peak attendance
- Offer page views
- Sales (if integrated)
- Replay views

#### Google Analytics
- Traffic sources
- Bounce rate
- Time on page
- Conversion rate
- Goal completions
- User flow

#### Email Platform
- Open rates
- Click rates
- Unsubscribes
- Spam complaints
- Conversion from email

---

## 📊 ANALYTICS DASHBOARD TEMPLATE

### Pre-Webinar Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│                    PRE-WEBINAR METRICS                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  REGISTRATION PAGE                                          │
│  ─────────────────                                          │
│  Visitors: [number]                                         │
│  Registrations: [number]                                    │
│  Registration Rate: [percentage]%                           │
│  Goal: [target]%                                            │
│                                                             │
│  TRAFFIC SOURCES                                            │
│  ───────────────                                            │
│  Facebook Ads: [number] ([percentage]%)                     │
│  Email: [number] ([percentage]%)                            │
│  Organic Social: [number] ([percentage]%)                   │
│  Direct: [number] ([percentage]%)                           │
│  Other: [number] ([percentage]%)                            │
│                                                             │
│  EMAIL METRICS                                              │
│  ────────────                                               │
│  Emails Sent: [number]                                      │
│  Average Open Rate: [percentage]%                           │
│  Average Click Rate: [percentage]%                          │
│                                                             │
│  ADS PERFORMANCE                                            │
│  ───────────────                                            │
│  Total Spend: $[amount]                                     │
│  Impressions: [number]                                      │
│  Clicks: [number]                                           │
│  CTR: [percentage]%                                         │
│  Cost Per Registration: $[amount]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Live Webinar Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│                    LIVE WEBINAR METRICS                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ATTENDANCE                                                 │
│  ──────────                                                 │
│  Registered: [number]                                       │
│  Live Attendees: [number]                                   │
│  Attendance Rate: [percentage]%                             │
│  Peak Concurrent: [number]                                  │
│                                                             │
│  ENGAGEMENT                                                 │
│  ──────────                                                 │
│  Chat Messages: [number]                                    │
│  Poll Responses: [number]                                   │
│  Q&A Questions: [number]                                    │
│  Average Watch Time: [minutes]                              │
│                                                             │
│  REAL-TIME CONVERSIONS                                      │
│  ────────────────────                                       │
│  Offer Page Views: [number]                                 │
│  Checkouts Started: [number]                                │
│  Purchases: [number]                                        │
│  Revenue: $[amount]                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Post-Webinar Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│                   POST-WEBINAR METRICS                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FUNNEL PERFORMANCE                                         │
│  ──────────────────                                         │
│  Landing Page Visitors: [number]                            │
│  Registrations: [number] ([percentage]%)                    │
│  Live Attendees: [number] ([percentage]%)                   │
│  Stayed to Offer: [number] ([percentage]%)                  │
│  Purchases: [number] ([percentage]%)                        │
│                                                             │
│  REVENUE                                                    │
│  ───────                                                    │
│  Total Revenue: $[amount]                                   │
│  Revenue Per Registrant: $[amount]                          │
│  Revenue Per Attendee: $[amount]                            │
│  Average Order Value: $[amount]                             │
│                                                             │
│  ADVERTISING                                                │
│  ───────────                                                │
│  Total Ad Spend: $[amount]                                  │
│  Cost Per Registration: $[amount]                           │
│  Cost Per Acquisition: $[amount]                            │
│  ROAS: [ratio]:1                                            │
│                                                             │
│  EMAIL FOLLOW-UP                                            │
│  ───────────────                                            │
│  Replay Views: [number] ([percentage]%)                     │
│  Follow-Up Purchases: [number]                              │
│  Follow-Up Revenue: $[amount]                               │
│                                                             │
│  TOTAL ROI                                                  │
│  ─────────                                                  │
│  Total Investment: $[amount]                                │
│  Total Return: $[amount]                                    │
│  ROI: [percentage]%                                         │
│  Profit: $[amount]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 TRACKING SPREADSHEET TEMPLATE

### Create a Google Sheet with these tabs:

#### Tab 1: Summary Dashboard
```
A1: Webinar Title
B1: [Title]
A2: Date
B2: [Date]
A3: Topic
B3: [Topic]

A5: METRIC | TARGET | ACTUAL | % TO GOAL
A6: Registrations | 500 | [formula] | [formula]
A7: Attendance Rate | 40% | [formula] | [formula]
A8: Conversion Rate | 10% | [formula] | [formula]
A9: Revenue | $5,000 | [formula] | [formula]
A10: ROAS | 4:1 | [formula] | [formula]
```

#### Tab 2: Daily Registration Tracking
```
Date | Visitors | Registrations | Rate | Source | Ad Spend
-----|----------|---------------|------|--------|----------
     |          |               |      |        |
```

#### Tab 3: Email Performance
```
Email # | Sent | Opens | Open % | Clicks | Click % | Purchases
--------|------|-------|--------|--------|---------|----------
```

#### Tab 4: Ad Performance
```
Platform | Campaign | Spend | Impressions | Clicks | Regs | CPR
---------|----------|-------|-------------|--------|------|-----
```

#### Tab 5: Sales Tracking
```
Customer | Email | Product | Price | Date | Source | Follow-Up
---------|-------|---------|-------|------|--------|----------
```

---

## 🔍 OPTIMIZATION FRAMEWORK

### Weekly Review Questions

1. **Registration Rate <30%?**
   - Test new headline
   - Simplify form
   - Add more social proof
   - Increase urgency

2. **Attendance Rate <35%?**
   - Add more reminder emails
   - Send SMS reminders
   - Improve email subject lines
   - Add calendar invites

3. **Retention Rate <65%?**
   - Deliver value earlier
   - Increase engagement
   - Shorten webinar
   - Move offer earlier

4. **Conversion Rate <7%?**
   - Strengthen offer
   - Add/improve bonuses
   - Better guarantee
   - More social proof
   - Improve CTA

5. **ROAS <3:1?**
   - Improve conversion rate
   - Lower ad costs
   - Better targeting
   - Increase average order value

---

## 🧪 A/B TESTING PLAN

### Test These Elements (One at a Time)

#### Registration Page
- [ ] Headline (outcome vs. curiosity)
- [ ] Form length (2 fields vs. 4 fields)
- [ ] Button color (red vs. green vs. orange)
- [ ] Button text ("Register" vs. "Save My Spot")
- [ ] Video (with vs. without)
- [ ] Social proof placement (above vs. below form)

#### Email Sequence
- [ ] Subject lines (question vs. statement)
- [ ] Send time (morning vs. afternoon)
- [ ] Email length (short vs. long)
- [ ] CTA placement (top vs. bottom)
- [ ] Images (with vs. without)

#### Webinar Content
- [ ] Offer timing (40 min vs. 50 min)
- [ ] Bonus structure (one big vs. multiple small)
- [ ] Price display (early vs. late)
- [ ] Guarantee length (30 vs. 60 vs. 90 days)

#### Follow-Up
- [ ] Email frequency (daily vs. every other day)
- [ ] Urgency type (time limit vs. quantity limit)
- [ ] Personal outreach (email vs. phone)

### Testing Schedule

```
WEBINAR 1-2: Test registration page headlines
WEBINAR 3-4: Implement winner, test email subject lines
WEBINAR 5-6: Implement winner, test offer timing
WEBINAR 7-8: Implement winner, test bonus structure
```

---

## 📊 REPORTING TEMPLATE

### Weekly Report to Stakeholders

```
WEBINAR PERFORMANCE REPORT
[Webinar Title]
[Date Range]

─────────────────────────────────────────────────

EXECUTIVE SUMMARY
[Brief overview of performance vs. goals]

KEY METRICS
───────────
Registrations: [number] (Goal: [number]) - [percentage]%
Attendance Rate: [percentage]% (Goal: [percentage]%)
Conversion Rate: [percentage]% (Goal: [percentage]%)
Revenue: $[amount] (Goal: $[amount])
ROAS: [ratio]:1 (Goal: [ratio]:1)

─────────────────────────────────────────────────

WHAT WORKED
───────────
• [Success #1]
• [Success #2]
• [Success #3]

WHAT DIDN'T WORK
────────────────
• [Challenge #1]
• [Challenge #2]

─────────────────────────────────────────────────

LEARNINGS
─────────
• [Insight #1]
• [Insight #2]
• [Insight #3]

─────────────────────────────────────────────────

NEXT STEPS
──────────
• [Action #1] - Owner: [Name] - Due: [Date]
• [Action #2] - Owner: [Name] - Due: [Date]
• [Action #3] - Owner: [Name] - Due: [Date]

─────────────────────────────────────────────────

BUDGET VS. ACTUAL
─────────────────
Ad Spend: $[budgeted] | $[actual] | [variance]%
Production: $[budgeted] | $[actual] | [variance]%
Total: $[budgeted] | $[actual] | [variance]%

Revenue: $[projected] | $[actual] | [variance]%
Profit: $[projected] | $[actual] | [variance]%
```

---

## 🎯 GOAL SETTING FRAMEWORK

### Set SMART Goals for Each Webinar

**Specific**: "Get 500 registrations" not "Get more registrations"

**Measurable**: Track with analytics tools

**Achievable**: Based on past performance + improvement

**Relevant**: Aligned with business goals

**Time-bound**: By [specific date]

### Goal Setting Worksheet

```
WEBINAR: [Title]
DATE: [Date]

REGISTRATION GOALS
──────────────────
Target Registrations: [number]
Current Conversion Rate: [percentage]%
Required Visitors: [number]
Ad Budget Needed: $[amount]

ATTENDANCE GOALS
────────────────
Target Attendance Rate: [percentage]%
Expected Attendees: [number]
Reminder Emails Planned: [number]

CONVERSION GOALS
────────────────
Target Conversion Rate: [percentage]%
Expected Buyers: [number]
Product Price: $[amount]
Expected Revenue: $[amount]

REVENUE GOALS
─────────────
Total Revenue Target: $[amount]
Ad Spend Budget: $[amount]
Target ROAS: [ratio]:1
Target Profit: $[amount]
```

---

## 🔄 CONTINUOUS IMPROVEMENT CYCLE

```
         ┌──────────────┐
         │   PLAN       │
         │   Goals      │
         └──────┬───────┘
                │
                ▼
         ┌──────────────┐
         │   EXECUTE    │
         │   Webinar    │
         └──────┬───────┘
                │
                ▼
         ┌──────────────┐
         │   MEASURE    │
         │   Analytics  │
         └──────┬───────┘
                │
                ▼
         ┌──────────────┐
         │   OPTIMIZE   │
         │   Improve    │
         └──────┬───────┘
                │
                └──────────┐
                           │
                           ▼
                    Next Webinar
```

### After Each Webinar

1. **Review all metrics** within 24 hours
2. **Identify top 3 wins** (what worked)
3. **Identify top 3 improvements** (what to test)
4. **Document learnings** in shared doc
5. **Implement changes** for next webinar
6. **Update benchmarks** based on new data

---

*Document Version: 1.0 | Last Updated: March 2026*
*What gets measured gets managed. Track everything.*
