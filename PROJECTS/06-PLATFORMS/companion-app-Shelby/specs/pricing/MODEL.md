# Pricing Model Specification

## Overview

SoulSpace uses a freemium model: robust free tier for accessibility, premium features for sustainable revenue.

---

## Pricing Tiers

### Free Tier

**Price:** $0/month

**Target:** Users testing the app, those with financial constraints, casual users

**Includes:**
```
✓ 50 text messages per day
✓ 3 companion personalities (Maya, Sam, River)
✓ Basic memory (last 7 days)
✓ Standard response quality
✓ 10 voice minutes per month
✓ Mood tracking (basic)
✓ Crisis support & resources
✓ Standard support
```

**Limitations:**
```
✗ No advanced companions (Alex, Luna)
✗ No conversation insights
✗ No voice transcripts
✗ No custom companion preferences
✗ Standard queue (may wait during peak)
✗ Ads: None (we don't do ads)
✗ Data retention: 30 days
```

---

### Premium Tier

**Price:** $14.99/month or $119.99/year (33% savings)

**Target:** Regular users seeking deeper support, voice users, data-driven users

**Includes:**
```
✓ Unlimited text messages
✓ All 5 companion personalities
✓ Unlimited memory & conversation history
✓ Priority response (faster, higher quality)
✓ 300 voice minutes per month
✓ Advanced insights & mood trends
✓ Weekly email reports
✓ Voice transcripts & downloads
✓ Custom companion preferences
✓ Priority support
✓ Early access to new features
✓ Data retention: Indefinite
```

**Bonus:**
```
🎁 7-day free trial
🎁 Bring-a-friend: 1 month free per referral (up to 3)
🎁 Student discount: 50% off with .edu email ($7.49/mo)
🎁 Financial hardship: Contact support for assistance
```

---

### Enterprise/Therapist Tier (Future)

**Price:** Custom pricing

**Target:** Therapy practices, employee wellness programs, universities

**Includes:**
```
✓ Everything in Premium
✓ Admin dashboard
✓ Usage analytics
✓ Custom branding
✓ HIPAA-compliant option
✓ Dedicated support
✓ Custom integrations
✓ Bulk licensing
```

---

## Feature Comparison Matrix

| Feature | Free | Premium | Notes |
|---------|------|---------|-------|
| **Text Messages** | 50/day | Unlimited | Resets at midnight UTC |
| **Companions** | 3 | 5 | Free: Maya, Sam, River |
| **Voice Minutes** | 10/mo | 300/mo | ~10 min/day |
| **Voice Quality** | Standard (128kbps) | HD (192kbps) | |
| **Memory Duration** | 7 days | Indefinite | |
| **Mood Tracking** | Basic | Advanced + Trends | |
| **Insights Dashboard** | ❌ | ✅ | Premium only |
| **Weekly Reports** | ❌ | ✅ | Email summary |
| **Voice Transcripts** | ❌ | ✅ | Downloadable |
| **Custom Preferences** | ❌ | ✅ | Fine-tune companion |
| **Response Priority** | Standard | Priority | Faster during peak |
| **Support** | Email (48h) | Priority (12h) | |
| **Data Retention** | 30 days | Indefinite | User can delete anytime |
| **Price** | $0 | $14.99/mo | Annual: $119.99 |

---

## Pricing Psychology

### Anchoring Strategy
```
Monthly: $14.99/mo
Annual: $119.99/yr (shown as "$9.99/mo billed annually")

Visual presentation:
┌─────────────────────────────────────┐
│  MONTHLY                            │
│  $14.99/month                       │
│  Billed monthly                     │
│  [Select Monthly]                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ANNUAL          ⭐ BEST VALUE       │
│  $9.99/month                        │
│  ($119.99 billed annually)          │
│  Save $60/year (33%)                │
│  [Select Annual]                    │
└─────────────────────────────────────┘
```

### Free Trial Strategy
```
- 7-day free trial (no credit card required)
- Trial includes ALL premium features
- Day 3: "How's it going?" email with tips
- Day 6: "Trial ending tomorrow" reminder
- Day 7: Convert or downgrade to free

Conversion goal: 40% trial → paid
```

### Price Justification

**Frame against alternatives:**
```
Therapy session: $100-200/hour
SoulSpace Premium: $0.50/day

BetterHelp: $60-90/week
SoulSpace Premium: $14.99/month

Coffee: $5
SoulSpace Premium: Less than 3 coffees/month
```

**Value messaging:**
```
"Professional-grade emotional support, 
available 24/7, for less than $0.50/day."

"Your mental health companion. 
Always there. Always listening."

"Cheaper than one therapy session. 
Available every day."
```

---

## Revenue Model

### Revenue Streams

```
1. SUBSCRIPTIONS (Primary - 85% of revenue)
   - Monthly recurring
   - Annual recurring (discounted)

2. Overage Charges (5% of revenue)
   - Voice minutes overage: $0.10/minute
   - Capped at $20/month extra

3. Partnerships (5% of revenue)
   - Therapy platform referrals
   - Wellness app integrations
   - Corporate wellness programs

4. Data Insights (5% of revenue - ANONYMIZED)
   - Aggregate mental health trends
   - Research partnerships (with consent)
   - NEVER sell individual data
```

### Unit Economics

```
ASSUMPTIONS:
- CAC (Customer Acquisition Cost): $25
- LTV (Lifetime Value): $180 (12-month avg retention)
- LTV:CAC Ratio: 7.2:1 (healthy)
- Gross Margin: 75% (after API costs, infrastructure)

COST PER USER (Monthly):
- API costs (LLM): $2.50 (free), $8.00 (premium avg)
- Voice (ElevenLabs): $0.50 (free), $3.00 (premium avg)
- Infrastructure: $0.50 (free), $1.00 (premium)
- Support: $0.20 (free), $0.50 (premium)
- Total: $3.70 (free), $12.50 (premium)

REVENUE PER USER (Monthly):
- Free: $0
- Premium: $14.99 (monthly), $10.00 (annual amortized)

PROFIT PER USER (Monthly):
- Free: -$3.70 (loss leader)
- Premium: $2.49 (monthly), -$2.50 (annual first year)

BREAK-EVEN:
- Need ~20% free → premium conversion
- Annual subscribers profitable in year 2
```

---

## Conversion Funnel

```
┌─────────────────────────────────────────────────────────────┐
│                    CONVERSION FUNNEL                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  App Store Visit                                             │
│       │                                                      │
│       │ 100%                                                 │
│       ▼                                                      │
│  Download                                                    │
│       │                                                      │
│       │ 60% (60 users)                                       │
│       ▼                                                      │
│  Sign Up                                                     │
│       │                                                      │
│       │ 80% (48 users)                                       │
│       ▼                                                      │
│  Complete Onboarding                                         │
│       │                                                      │
│       │ 70% (34 users)                                       │
│       ▼                                                      │
│  Day 1 Active                                                │
│       │                                                      │
│       │ 60% (20 users)                                       │
│       ▼                                                      │
│  Day 7 Active                                                │
│       │                                                      │
│       │ 40% (8 users)                                        │
│       ▼                                                      │
│  Start Free Trial                                            │
│       │                                                      │
│       │ 50% (4 users)                                        │
│       ▼                                                      │
│  Convert to Paid                                             │
│                                                              │
│  TARGET: 12% overall conversion (download → paid)           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Retention Strategy

### Churn Reduction

**Problem:** 60% of subscribers churn within 3 months

**Solutions:**
```
1. ONBOARDING OPTIMIZATION
   - Day 1: Welcome + quick win (first meaningful conversation)
   - Day 3: Check-in email with conversation tips
   - Day 7: "You've had X conversations" milestone
   - Day 14: Introduce voice mode
   - Day 30: Share insights report

2. ENGAGEMENT DRIVERS
   - Streak tracking: "7-day conversation streak! 🔥"
   - Companion birthdays (celebrate with user)
   - Seasonal check-ins: "How's January treating you?"
   - Milestone celebrations: "100 conversations! Here's a badge."

3. VALUE DEMONSTRATION
   - Weekly email: "Here's what we noticed this week..."
   - Monthly report: "Your emotional wellness summary"
   - Feature education: "Did you know you can...?"

4. WIN-BACK CAMPAIGNS
   - Day 1 post-churn: "We miss you" + 50% off month 1
   - Day 7: "Your companions are thinking of you"
   - Day 30: "New features you might like..."
   - Day 60: Final offer - 3 months for price of 2
```

### Retention Targets

```
MONTH 1: 80% retention (goal)
MONTH 3: 60% retention (goal)
MONTH 6: 45% retention (goal)
MONTH 12: 35% retention (goal)

Industry benchmark (mental health apps): 25-30% at 12 months
SoulSpace target: 35% (differentiated by voice + personality)
```

---

## Pricing Experiments (A/B Tests)

### Test 1: Monthly Price Point
```
Variant A: $12.99/month (control)
Variant B: $14.99/month (test)
Variant C: $16.99/month (test)

Hypothesis: $14.99 maximizes revenue without hurting conversion
Success metric: Revenue per user (not just conversion rate)
Duration: 4 weeks
Sample size: 10,000 users per variant
```

### Test 2: Annual Discount
```
Variant A: 25% off annual (control)
Variant B: 33% off annual (test)
Variant C: 40% off annual (test)

Hypothesis: 33% off drives annual signups without leaving money on table
Success metric: Annual subscription rate
Duration: 6 weeks
```

### Test 3: Free Trial Length
```
Variant A: 7-day trial (control)
Variant B: 14-day trial (test)
Variant C: 3-day trial (test)

Hypothesis: 14-day trial increases conversion but may increase free users
Success metric: Trial → paid conversion rate
Duration: 4 weeks
```

### Test 4: Student Discount Visibility
```
Variant A: Student discount hidden (control)
Variant B: Student discount on pricing page (test)
Variant C: Student discount in onboarding (test)

Hypothesis: Early visibility increases student conversions
Success metric: Student plan adoption rate
Duration: 8 weeks (semester cycle)
```

---

## Competitive Pricing Analysis

| App | Free Tier | Premium Price | Key Differentiator |
|-----|-----------|---------------|-------------------|
| **SoulSpace** | 50 msgs/day | $14.99/mo | Personality + Voice |
| Replika | Limited | $9.99/mo | AI friend, gamified |
| Woebot | Full | $0 (research) | CBT-based, clinical |
| Wysa | Limited | $9.99/mo | CBT tools, coaching |
| BetterHelp | None | $60-90/wk | Real therapists |
| Talkspace | None | $60-100/wk | Real therapists |

**SoulSpace Positioning:**
```
Premium to AI chatbots (more advanced, voice)
Affordable to therapy (1/10th the cost)
"Professional support without the therapy price tag"
```

---

## Payment Processing

### Platforms
```
iOS: Apple In-App Purchase (30% commission)
Android: Google Play Billing (15-30% commission)
Web: Stripe (2.9% + $0.30 per transaction)

Strategy: Steer users to web for initial signup (lower fees)
          Mobile for renewals (convenience)
```

### Subscription Management
```
Platform: RevenueCat (cross-platform subscription management)

Features:
- Unified subscription status across iOS/Android/Web
- Automatic receipt validation
- Grace periods for failed payments
- Dunning management (retry failed payments)
- Refund handling
- Promo code support
```

### Refund Policy
```
- Within 7 days: Full refund, no questions
- 7-30 days: Case-by-case (technical issues, dissatisfaction)
- 30+ days: No refund (but can cancel future billing)
- Process: In-app → Settings → Subscription → Request Refund
- Response time: 48 hours
```

---

## Financial Projections Summary

### Year 1 Targets
```
Downloads: 100,000
Registered Users: 60,000 (60%)
Free Users: 54,000 (90%)
Premium Users: 6,000 (10%)

MRR (Month 12): $90,000
ARR: $1,080,000

Revenue Breakdown:
- Subscriptions: $972,000 (90%)
- Overage: $54,000 (5%)
- Partnerships: $54,000 (5%)
- Total: $1,080,000
```

### Year 2 Targets
```
Downloads: 500,000 (cumulative: 600,000)
Registered Users: 300,000
Free Users: 255,000 (85%)
Premium Users: 45,000 (15%)

MRR (Month 24): $675,000
ARR: $8,100,000
```

### Year 3 Targets
```
Downloads: 1,500,000 (cumulative: 2,100,000)
Registered Users: 1,000,000
Free Users: 800,000 (80%)
Premium Users: 200,000 (20%)

MRR (Month 36): $3,000,000
ARR: $36,000,000
```

---

## Pricing Page Copy

```
┌─────────────────────────────────────────────────────────────┐
│                    CHOOSE YOUR PLAN                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Emotional support shouldn't break the bank.                 │
│  Start free, upgrade when you're ready.                      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────┐    ┌──────────────────┐               │
│  │     FREE         │    │    PREMIUM       │               │
│  │                  │    │                  │               │
│  │  $0 forever      │    │  $14.99/month    │               │
│  │                  │    │  or $119.99/year │               │
│  │  Perfect for     │    │  ⭐ BEST VALUE   │               │
│  │  trying it out   │    │                  │               │
│  │                  │    │  Everything in   │               │
│  │  • 50 messages   │    │  Free, plus:     │               │
│  │    per day       │    │                  │               │
│  │  • 3 companions  │    │  • Unlimited     │               │
│  │  • Basic memory  │    │    messages      │               │
│  │  • 10 voice min  │    │  • All 5         │               │
│  │    per month     │    │    companions    │               │
│  │                  │    │  • 300 voice min │               │
│  │                  │    │    per month     │               │
│  │                  │    │  • Insights &    │               │
│  │                  │    │    trends        │               │
│  │                  │    │  • Weekly reports│               │
│  │                  │    │                  │               │
│  │  [Get Started]   │    │  [Start 7-Day    │               │
│  │                  │    │   Free Trial]    │               │
│  └──────────────────┘    └──────────────────┘               │
│                                                              │
│  All plans include:                                          │
│  ✓ Crisis support & resources                                │
│  ✓ Secure, private conversations                             │
│  ✓ Cancel anytime                                            │
│                                                              │
│  Questions? Contact support@soulspace.ai                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Hardship Program

**Mission:** Ensure financial constraints don't block access to support.

**Program Details:**
```
ELIGIBILITY:
- Students (with .edu email): Automatic 50% discount
- Unemployed: Contact support, case-by-case
- Low income: Contact support, case-by-case
- Developing countries: Regional pricing (50-70% discount)

PROCESS:
1. User emails support@soulspace.ai
2. Subject: "Financial Assistance Request"
3. Brief explanation (no documentation required)
4. Response within 48 hours
5. Discount code issued (valid 6 months, renewable)

BUDGET:
- Allocate 5% of revenue to hardship discounts
- Target: 500 users on hardship program by Year 2
- No marketing (word of mouth only)
```

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*
