# NPS/CSAT System Framework

**Client:** [Client Name]  
**System Version:** 1.0  
**Created:** [Date]  
**Last Updated:** [Date]

---

## 1. Program Overview

### 1.1 Objectives

| Objective | Current Baseline | Target (12mo) | Measurement |
|-----------|-----------------|---------------|-------------|
| Net Promoter Score (NPS) | ___ | ___ | Quarterly survey |
| Customer Satisfaction (CSAT) | ___% | ___% | Post-interaction |
| Customer Effort Score (CES) | ___ | ___ | Post-interaction |
| Response Rate | ___% | ___% | Survey completions |
| Close-the-Loop Rate | ___% | ___% | Detractor follow-ups |

### 1.2 Survey Types & Cadence

| Survey Type | Trigger | Frequency | Audience | Owner |
|-------------|---------|-----------|----------|-------|
| NPS (Relationship) | Time-based | Quarterly | All active customers | Marketing/CS |
| NPS (Transaction) | Post-purchase | Per transaction | New customers | Product |
| CSAT | Post-support | Per ticket | Support contacts | Support |
| CSAT | Post-onboarding | After onboarding | New customers | CS |
| CES | Post-support | Per ticket | Support contacts | Support |
| Product Satisfaction | Feature release | Per release | Active users | Product |
| Churn Survey | Cancellation | One-time | Churning customers | CS |

---

## 2. NPS System

### 2.1 NPS Survey Design

**Primary Question:**
```
On a scale of 0-10, how likely are you to recommend 
[Company/Product] to a friend or colleague?

0  1  2  3  4  5  6  7  8  9  10
Not at all likely                              Extremely likely
```

**Follow-Up Questions:**

For Promoters (9-10):
```
What's the primary reason for your score?
[Open text]

What do you value most about [Company/Product]?
[Multiple choice + Other]
□ Product quality
□ Customer service
□ Value for money
□ Ease of use
□ Features
□ Brand reputation
□ Other: _______
```

For Passives (7-8):
```
What's the primary reason for your score?
[Open text]

What would it take to make you a 10?
[Open text]

Which area needs the most improvement?
[Multiple choice]
□ Product features
□ Pricing
□ Customer support
□ Ease of use
□ Documentation
□ Integration capabilities
□ Other: _______
```

For Detractors (0-6):
```
What's the primary reason for your score?
[Open text]

What went wrong or disappointed you?
[Open text]

How can we make this right?
[Open text]

May we contact you to discuss your feedback?
□ Yes, email me: [email field]
□ Yes, call me: [phone field]
□ No, thank you
```

### 2.2 NPS Survey Templates

#### Email Template

```
Subject: Quick question about your experience with [Company]

Hi {{first_name}},

We're always working to improve {{company_name}}, and your opinion matters.

On a scale of 0-10, how likely are you to recommend us to a friend or colleague?

[0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]

This will only take 30 seconds.

Thanks for helping us get better!

The {{company_name}} Team

---
P.S. All responses are anonymous unless you choose to share your contact info.
```

#### In-App Modal

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  How are we doing?                                  │
│                                                     │
│  On a scale of 0-10, how likely are you to          │
│  recommend {{product_name}} to a friend?            │
│                                                     │
│  [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]      │
│                                                     │
│  [Submit]  [Maybe Later]                            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### SMS Template

```
[Company]: Hi {{first_name}}! Quick Q: How likely are you to 
recommend us to a friend? Reply 0-10 (10=extremely likely). 
Msg&data rates may apply. Reply STOP to opt out.
```

### 2.3 NPS Calculation

```
NPS Formula:
NPS = % Promoters - % Detractors

Promoters: 9-10 (Loyal enthusiasts)
Passives: 7-8 (Satisfied but unenthusiastic)
Detractors: 0-6 (Unhappy customers)

Example:
- 100 responses
- 60 Promoters (60%)
- 25 Passives (25%)
- 15 Detractors (15%)
- NPS = 60 - 15 = 45
```

### 2.4 NPS Benchmarks

| Industry | Excellent | Good | Average | Below Average |
|----------|-----------|------|---------|---------------|
| SaaS | 70+ | 50-69 | 30-49 | <30 |
| E-commerce | 60+ | 40-59 | 20-39 | <20 |
| B2B Services | 65+ | 45-64 | 25-44 | <25 |
| Financial Services | 50+ | 30-49 | 10-29 | <10 |
| Healthcare | 55+ | 35-54 | 15-34 | <15 |
| Retail | 50+ | 30-49 | 10-29 | <10 |
| Technology | 60+ | 40-59 | 20-39 | <20 |

### 2.5 NPS Segmentation

| Segment | Typical NPS | Notes |
|---------|-------------|-------|
| By Tenure (0-30 days) | Lower | Still learning product |
| By Tenure (30-90 days) | Variable | Making/breaking period |
| By Tenure (90+ days) | Higher | Established users |
| By Plan (Free) | Lower | Less invested |
| By Plan (Paid) | Higher | More committed |
| By Plan (Enterprise) | Variable | Depends on success |
| By Usage (Low) | Lower | Not getting value |
| By Usage (High) | Higher | Getting value |
| By Support Contact | Lower | Had issues |
| By No Support Contact | Higher | Smooth experience |

---

## 3. CSAT System

### 3.1 CSAT Survey Design

**Primary Question:**
```
How satisfied were you with your experience?

□ Very Satisfied
□ Satisfied
□ Neutral
□ Dissatisfied
□ Very Dissatisfied
```

**Alternative Scale:**
```
How satisfied were you with your experience?

1  2  3  4  5
Very Dissatisfied    Very Satisfied
```

**Follow-Up Questions:**

```
What did you like most about your experience?
[Open text]

What could we have done better?
[Open text]

Is there anything else you'd like to share?
[Open text]
```

### 3.2 CSAT Survey Templates

#### Post-Support Email

```
Subject: How did we do, {{first_name}}?

Hi {{first_name}},

Your support ticket #{{ticket_id}} was recently resolved. 
We'd love to know how we did.

How satisfied were you with the support you received?

⭐⭐⭐⭐⭐ Very Satisfied
⭐⭐⭐⭐ Satisfied
⭐⭐⭐ Neutral
⭐⭐ Dissatisfied
⭐ Very Dissatisfied

[Submit Feedback]

What did you like most?
[Text field]

What could we improve?
[Text field]

Thanks for helping us improve!

The {{company_name}} Support Team
```

#### Post-Onboarding Survey

```
Subject: How was your onboarding experience?

Hi {{first_name}},

Now that you've completed onboarding, we'd love your feedback.

How satisfied were you with the onboarding process?

[1] [2] [3] [4] [5]
Very Dissatisfied → Very Satisfied

What was most helpful?
□ Getting started guide
□ Video tutorials
□ Onboarding call
□ Documentation
□ Other: _______

What could we improve?
[Open text]

Thanks for your feedback!

The {{company_name}} Team
```

#### In-App Micro-Survey

```
┌────────────────────────────────────────┐
│                                        │
│  How's it going?                      │
│                                        │
│  How satisfied are you with           │
│  {{feature_name}}?                    │
│                                        │
│  😞  😐  🙂  😊  😍                   │
│                                        │
│  [Submit]                             │
│                                        │
└────────────────────────────────────────┘
```

### 3.3 CSAT Calculation

```
CSAT Formula:
CSAT = (Number of Satisfied Responses / Total Responses) × 100

"Satisfied" typically includes:
- 4-5 on 5-point scale
- "Satisfied" and "Very Satisfied" on label scale

Example:
- 100 responses
- 45 Very Satisfied
- 30 Satisfied
- 15 Neutral
- 7 Dissatisfied
- 3 Very Dissatisfied
- CSAT = (45 + 30) / 100 × 100 = 75%
```

### 3.4 CSAT Benchmarks

| Industry | Excellent | Good | Average | Below Average |
|----------|-----------|------|---------|---------------|
| SaaS | 85%+ | 75-84% | 65-74% | <65% |
| E-commerce | 80%+ | 70-79% | 60-69% | <60% |
| B2B Services | 85%+ | 75-84% | 65-74% | <65% |
| Support (All) | 90%+ | 80-89% | 70-79% | <70% |
| Onboarding | 85%+ | 75-84% | 65-74% | <65% |

---

## 4. CES (Customer Effort Score) System

### 4.1 CES Survey Design

**Primary Question:**
```
How easy was it to solve your problem today?

1  2  3  4  5  6  7
Very Difficult                          Very Easy
```

**Alternative:**
```
To what extent do you agree: "[Company] made it easy 
for me to handle my issue."

□ Strongly Disagree
□ Disagree
□ Somewhat Disagree
□ Neutral
□ Somewhat Agree
□ Agree
□ Strongly Agree
```

**Follow-Up:**
```
What made it [easy/difficult]?
[Open text]
```

### 4.2 CES Calculation

```
CES Formula:
Average of all responses (1-7 scale)

Target: 5.5+ (higher is better)

Example:
- 100 responses
- Sum of all scores: 580
- CES = 580 / 100 = 5.8
```

---

## 5. Follow-Up Workflows

### 5.1 Close-the-Loop Process

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLOSE-THE-LOOP WORKFLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DETRACTOR RECEIVED (Score 0-6)                                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Alert Created (within 1 hour)              │                 │
│  │ - Customer Success Manager notified        │                 │
│  │ - Ticket created in CRM                    │                 │
│  │ - Priority: High                           │                 │
│  └────────────────────────────────────────────┘                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Personal Outreach (within 24 hours)        │                 │
│  │ - Email from CSM or Manager                │                 │
│  │ - Acknowledge feedback                     │                 │
│  │ - Request conversation                     │                 │
│  └────────────────────────────────────────────┘                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Conversation Held                          │                 │
│  │ - Understand root cause                    │                 │
│  │ - Offer resolution                         │                 │
│  │ - Document in CRM                          │                 │
│  └────────────────────────────────────────────┘                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Resolution Implemented                     │                 │
│  │ - Fix the issue                            │                 │
│  │ - Follow up to confirm satisfaction        │                 │
│  │ - Request updated feedback (optional)      │                 │
│  └────────────────────────────────────────────┘                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Learn & Improve                            │                 │
│  │ - Tag root cause                           │                 │
│  │ - Share with product/team                  │                 │
│  │ - Track for patterns                       │                 │
│  └────────────────────────────────────────────┘                 │
│                                                                  │
│  PASSIVE RECEIVED (Score 7-8)                                   │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Automated Thank You + Improvement Ask      │                 │
│  │ - Thank for feedback                       │                 │
│  │ - Ask what would make them a 10            │                 │
│  │ - Flag for product team review             │                 │
│  └────────────────────────────────────────────┘                 │
│                                                                  │
│  PROMOTER RECEIVED (Score 9-10)                                 │
│         ↓                                                        │
│  ┌────────────────────────────────────────────┐                 │
│  │ Thank You + Advocacy Ask                   │                 │
│  │ - Thank for feedback                       │                 │
│  │ - Ask for review/referral (optional)       │                 │
│  │ - Invite to advocate program               │                 │
│  └────────────────────────────────────────────┘                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Detractor Outreach Templates

#### Email Template (CSM)

```
Subject: I saw your feedback, {{first_name}}

Hi {{first_name}},

This is {{csm_name}} from {{company_name}}. I saw your recent feedback 
score of {{score}}/10, and I wanted to reach out personally.

First, I'm sorry we didn't meet your expectations. That's on us, and 
I'd like to make it right.

Would you be open to a brief 15-minute call this week? I'd love to:
1. Hear more about what went wrong
2. Understand what you were hoping for
3. See if there's anything we can do to fix this

If you're up for it, just reply with a time that works, or book 
directly here: {{calendar_link}}

If you'd prefer to share via email, that's totally fine too.

Either way, I appreciate your honesty. It's how we get better.

Best,
{{csm_name}}
Customer Success Manager
{{company_name}}
{{direct_contact}}
```

#### Phone Script

```
Opening:
"Hi {{first_name}}, this is {{name}} from {{company}}. 
Do you have a few minutes to talk?

I saw the feedback you left us, and I wanted to reach out personally. 
First, I want to apologize that we didn't meet your expectations.

Would you be willing to share a bit more about what happened? 
I'm not here to sell or defend—just to listen and understand."

Listening Phase:
- Let them talk (don't interrupt)
- Take notes
- Acknowledge their frustration
- Ask clarifying questions

Resolution Phase:
"Thank you for sharing that. I can understand why that was frustrating.

Here's what I'd like to do to make this right:
{{specific_resolution}}

Does that sound reasonable? Is there anything else I can help with?"

Closing:
"Again, I appreciate you giving us a chance to fix this. 
I'll follow up via email with what we discussed.

If you need anything else, here's my direct contact: {{contact}}

Thanks again, {{first_name}}."
```

### 5.3 Passives Engagement

```
Subject: Thanks for your feedback, {{first_name}}

Hi {{first_name}},

Thanks for taking the time to share your feedback with us.

You rated us a {{score}}/10, and I'm curious—what would it take 
to make you a 10?

We're always working to improve, and honest feedback like yours 
is incredibly valuable.

If you have a moment, I'd love to hear your thoughts:
[Share Feedback] button → {{feedback_form}}

Either way, thanks for being a customer.

Best,
The {{company_name}} Team
```

### 5.4 Promoters Advocacy Ask

```
Subject: You just made our day, {{first_name}}! 🎉

Hi {{first_name}},

WOW—thank you! Seeing that you rated us a {{score}}/10 
absolutely made our day.

Customers like you are why we do what we do.

Since you're happy with {{product_name}}, I have a small favor to ask:

Would you be willing to share your experience with others? Here are 
a few ways you could help:

□ Leave us a review on {{review_platform}}: {{link}}
□ Refer a friend and both get {{referral_offer}}: {{link}}
□ Share on social media: {{link}}
□ Let us feature you as a case study: {{link}}

No pressure at all—just wanted to ask!

Thanks again for your support.

Cheers,
The {{company_name}} Team
```

---

## 6. Improvement Plans

### 6.1 Feedback Categorization

| Category | Subcategories | Example Tags |
|----------|---------------|--------------|
| Product | Features, Bugs, Performance, UX | missing-feature, bug-report, slow |
| Pricing | Too expensive, Value, Billing | pricing-complaint, billing-issue |
| Support | Response time, Quality, Knowledge | slow-response, unhelpful |
| Onboarding | Setup, Training, Documentation | setup-difficult, unclear-docs |
| Communication | Frequency, Clarity, Relevance | too-many-emails, unclear |
| Company | Trust, Values, Reputation | trust-issue, brand-concern |

### 6.2 Root Cause Analysis Template

```
Issue: ________________________________

NPS/CSAT Impact:
- Affected Customers: ___
- Average Score: ___
- Trend: ↑ → ↓

5 Whys Analysis:
1. Why did this happen? ________________
2. Why? ________________
3. Why? ________________
4. Why? ________________
5. Why? (Root Cause) ________________

Impact Assessment:
- Revenue at Risk: $___
- Customers at Risk: ___
- Brand Impact: Low / Medium / High

Recommended Actions:
1. ________________________________ (Owner: ___, Due: ___)
2. ________________________________ (Owner: ___, Due: ___)
3. ________________________________ (Owner: ___, Due: ___)

Success Metrics:
- Target NPS/CSAT improvement: ___ points
- Target resolution rate: ___%
- Target timeline: ___ days

Follow-Up Date: ___
```

### 6.3 Improvement Tracking Dashboard

| Issue | Category | Impact | Status | Owner | Target Date | Progress |
|-------|----------|--------|--------|-------|-------------|----------|
| | | High/Med/Low | Open/In Progress/Resolved | | | ___% |
| | | High/Med/Low | Open/In Progress/Resolved | | | ___% |
| | | High/Med/Low | Open/In Progress/Resolved | | | ___% |

### 6.4 Closed-Loop Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Detractor contact rate (24hr) | 100% | ___% | |
| Detractor conversation rate | 80% | ___% | |
| Resolution rate | 90% | ___% | |
| Detractor → Promoter conversion | 30% | ___% | |
| Time to resolution (avg) | <5 days | ___ days | |
| Passive engagement rate | 25% | ___% | |
| Promoter advocacy conversion | 20% | ___% | |

---

## 7. Survey Distribution Strategy

### 7.1 Channel Mix

| Channel | Use Case | Response Rate | Cost |
|---------|----------|---------------|------|
| Email | NPS, CSAT (all) | 10-30% | Low |
| In-App | NPS, Micro-CSAT | 15-40% | Low |
| SMS | NPS, Quick CSAT | 30-50% | Medium |
| Phone | High-value detractors | 60-80% | High |
| Post-Call IVR | CSAT (support) | 20-40% | Low |
| QR Code | In-person events | 10-25% | Low |

### 7.2 Timing Best Practices

| Survey Type | Optimal Timing | Avoid |
|-------------|----------------|-------|
| NPS (Relationship) | Tuesday-Thursday, 10am-2pm | Monday mornings, Fridays |
| NPS (Transaction) | Immediately after experience | Delayed (>24hr) |
| CSAT (Support) | Immediately after ticket close | Delayed (>2hr) |
| CSAT (Onboarding) | Within 24hr of completion | During onboarding |
| CES | Immediately after resolution | Delayed |

### 7.3 Frequency Capping

| Customer Segment | Max Surveys/Month | Cooldown Period |
|-----------------|-------------------|-----------------|
| All customers (NPS) | 1 per quarter | 90 days |
| Support contacts (CSAT) | Per ticket | None |
| New customers (Onboarding) | 1 per onboarding | None |
| High-value customers | 2x standard | 45 days |
| Recently surveyed | 0 | 30 days |

---

## 8. Technology Stack

### 8.1 Survey Tools Comparison

| Tool | Best For | Pricing | Key Features |
|------|----------|---------|--------------|
| Delighted | NPS focus | $49+/mo | Simple, integrations |
| SurveyMonkey | General surveys | $25+/mo | Templates, analysis |
| Typeform | Beautiful forms | $25+/mo | UX, logic jumps |
| Qualtrics | Enterprise | Custom | Advanced analytics |
| Hotjar | In-app feedback | $32+/mo | Heatmaps, recordings |
| Intercom | In-app + email | $74+/mo | Chat, automation |
| HubSpot | All-in-one | $50+/mo | CRM integration |

### 8.2 Integration Requirements

| System | Integration | Data Flow |
|--------|-------------|-----------|
| CRM | Bidirectional | Customer data, survey results |
| Support System | Bidirectional | Ticket data, CSAT |
| Email Platform | Outbound | Survey invitations |
| Product Analytics | Inbound | Usage data for segmentation |
| Slack/Teams | Inbound | Real-time alerts |
| Data Warehouse | Inbound | Historical analysis |

---

## 9. Reporting & Analytics

### 9.1 Executive Dashboard

| Metric | Current | Previous | Change | Target |
|--------|---------|----------|--------|--------|
| Overall NPS | ___ | ___ | ___ | ___ |
| Promoters % | ___% | ___% | ___% | ___% |
| Passives % | ___% | ___% | ___% | ___% |
| Detractors % | ___% | ___% | ___% | ___% |
| Overall CSAT | ___% | ___% | ___% | ___% |
| Response Rate | ___% | ___% | ___% | ___% |
| Close-the-Loop Rate | ___% | ___% | ___% | ___% |

### 9.2 Trend Analysis

```
NPS Trend (Last 12 Quarters):

Q1 2024: ___
Q2 2024: ___
Q3 2024: ___
Q4 2024: ___
Q1 2025: ___
Q2 2025: ___
Q3 2025: ___
Q4 2025: ___

Trend: ↑ Improving  → Stable  ↓ Declining
```

### 9.3 Driver Analysis

| Driver | Correlation with NPS | Impact | Action Required |
|--------|---------------------|--------|-----------------|
| Product quality | ___ | High/Med/Low | |
| Customer support | ___ | High/Med/Low | |
| Value for money | ___ | High/Med/Low | |
| Ease of use | ___ | High/Med/Low | |
| Features | ___ | High/Med/Low | |

---

## 10. Governance

### 10.1 Roles & Responsibilities

| Role | Responsibilities | Owner |
|------|-----------------|-------|
| Program Owner | Overall strategy, reporting | VP Customer/Marketing |
| Survey Manager | Survey design, deployment | Marketing/CS Manager |
| Close-the-Loop Lead | Detractor follow-ups | CS Manager |
| Data Analyst | Analysis, insights | Analytics |
| Action Owners | Implement improvements | Product/Support/Engineering |

### 10.2 Meeting Cadence

| Meeting | Frequency | Attendees | Agenda |
|---------|-----------|-----------|--------|
| Feedback Review | Weekly | CS, Support | Detractors, urgent issues |
| Insights Review | Monthly | Product, Marketing, CS | Trends, drivers, actions |
| Executive Review | Quarterly | Leadership | NPS/CSAT performance, strategy |

### 10.3 Success Criteria

| Timeframe | Success Metrics |
|-----------|-----------------|
| 30 days | Survey infrastructure live, baseline established |
| 90 days | Close-the-loop process operational, 80%+ detractor contact rate |
| 6 months | NPS improvement of 5+ points, action plans implemented |
| 12 months | NPS improvement of 10+ points, culture of feedback established |

---

**Program Owner:** ________________  
**Launch Date:** ________________  
**Next Review Date:** ________________
