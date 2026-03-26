# 💎 Pricing Model - Freemium Strategy

Monetization approach balancing accessibility with sustainable revenue.

---

## Tier Structure

### FREE Tier
**Price**: $0/month
**Target**: Casual users, skeptics, trial users

**Includes**:
- ✅ 3 tarot readings per month
- ✅ Single card & 3-card spreads only
- ✅ Basic AI interpretations
- ✅ 7-day reading history
- ✅ 5 journal entries
- ✅ Daily card draw
- ❌ No Celtic Cross spread
- ❌ No moon phase tracking
- ❌ Ads between readings
- ❌ No export options

**Psychology**: Enough value to experience the magic, limited enough to encourage upgrade.

---

### PREMIUM Tier
**Price**: $7.99/month or $59.99/year (save 37%)
**Target**: Dedicated practitioners, spirituality enthusiasts

**Includes**:
- ✅ Unlimited tarot readings
- ✅ All spread types (Celtic Cross, custom)
- ✅ Enhanced AI interpretations (deeper, longer)
- ✅ Unlimited reading history
- ✅ Unlimited journal entries
- ✅ Moon phase tracking & alerts
- ✅ No advertisements
- ✅ Export readings (PDF, Markdown)
- ✅ Priority AI processing
- ✅ Early access to new features
- ✅ Premium card decks (Oracle, Angel)
- ✅ Reading accuracy tracking
- ✅ Share beautiful reading cards

**Psychology**: Positioned as less than 2 coffees/month for unlimited spiritual guidance.

---

## Pricing Psychology

### Anchoring Strategy
```
Monthly:     $7.99/month
Annual:      $59.99/year (display as "$4.99/month billed annually")
Savings:     "Save 37% with annual"
```

### Comparison Table
```
┌─────────────────────┬──────────┬──────────┐
│ Feature             │ Free     │ Premium  │
├─────────────────────┼──────────┼──────────┤
│ Readings/month      │ 3        │ Unlimited│
│ Spread types        │ 2        │ All      │
│ AI depth            │ Basic    │ Enhanced │
│ Journal entries     │ 5        │ Unlimited│
│ Reading history     │ 7 days   │ Forever  │
│ Moon tracking       │ ❌       │ ✅       │
│ Ads                 │ Yes      │ None     │
│ Export              │ ❌       │ ✅       │
│ Premium decks       │ ❌       │ ✅       │
│ Price               │ $0       │ $7.99/mo │
└─────────────────────┴──────────┴──────────┘
```

---

## Conversion Funnel

### Free User Journey
```
Day 1:    Sign up → 3 free readings available
Day 3:    Used 2 readings, gets daily notification
Day 7:    Used all 3, hits paywall on 4th attempt
Day 7:    Sees premium benefits, offered 7-day trial
Day 14:   Trial ends, charged if not cancelled
```

### Conversion Triggers
1. **Hard Paywall**: 4th reading attempt blocked
2. **Soft Paywall**: "Upgrade for Celtic Cross" (premium feature)
3. **Time-based**: "Your 3 readings reset in 23 days" (urgency)
4. **Value-based**: "Premium users get 3x deeper insights"

---

## Revenue Projections (Conservative)

### Assumptions
- Month 1: 1,000 downloads
- Month 6: 10,000 downloads (cumulative: 35,000)
- Month 12: 25,000 downloads (cumulative: 150,000)
- Free-to-paid conversion: 5% (industry standard for spirituality apps)
- Churn rate: 8% monthly
- Average revenue per paying user (ARPPU): $7.50/month

### 12-Month Forecast
```
Month  | Downloads | Total Users | Paid (5%) | MRR
-------|-----------|-------------|-----------|--------
1      | 1,000     | 1,000       | 50        | $375
2      | 1,500     | 2,500       | 125       | $938
3      | 2,000     | 4,500       | 225       | $1,688
4      | 2,500     | 7,000       | 350       | $2,625
5      | 3,000     | 10,000      | 500       | $3,750
6      | 4,000     | 14,000      | 700       | $5,250
7      | 5,000     | 19,000      | 950       | $7,125
8      | 6,000     | 25,000      | 1,250     | $9,375
9      | 7,000     | 32,000      | 1,600     | $12,000
10     | 8,000     | 40,000      | 2,000     | $15,000
11     | 10,000    | 50,000      | 2,500     | $18,750
12     | 12,000    | 62,000      | 3,100     | $23,250
```

**Year 1 Total Revenue**: ~$100,000 (conservative)
**Year 2 Projection**: $300,000+ (with growth compounding)

---

## Payment Processing

### Recommended: Stripe
- **Fees**: 2.9% + $0.30 per transaction
- **Features**: Subscriptions, trials, dunning management
- **Integration**: React Native Stripe SDK

### Alternative: RevenueCat
- **Fees**: Free up to $10k MRR, then 1%
- **Features**: Cross-platform (iOS + Android) subscriptions
- **Benefit**: Handles App Store + Play Store complexity

---

## Promotional Strategies

### Launch Promo (First 1000 Users)
- Lifetime 50% off: $3.99/month forever
- Creates early adopter loyalty
- Generates initial revenue + reviews

### Seasonal Promotions
- **New Year**: "New beginnings" - 50% off annual
- **Valentine's**: "Love readings" - BOGO premium
- **Halloween**: "Spiritual awakening" - free week
- **New Moon**: Monthly flash sales

### Referral Program
- "Give a month, get a month"
- Both parties get 1 month free premium
- Viral growth mechanism

### Bundle Opportunities
- Couple's readings bundle (+$3/month)
- Family plan (up to 5 users, $14.99/month)

---

## Competitive Analysis

| App | Price | Readings | Key Differentiator |
|-----|-------|----------|-------------------|
| Co-Star | Free + IAP | Limited | AI astrology focus |
| Sanctuary | $9.99/mo | Unlimited | Live reader chats |
| Labyrinthos | Free + IAP | Unlimited | Learning focus |
| **Mystic AI** | **$7.99/mo** | **Unlimited** | **AI depth + journal** |

**Positioning**: Premium AI interpretations at mid-tier price with best-in-class journaling.

---

## Metrics to Track

1. **Conversion Rate**: Free → Paid (target: 5%+)
2. **Churn Rate**: Monthly cancellations (target: <8%)
3. **LTV**: Lifetime value per user (target: $50+)
4. **CAC**: Customer acquisition cost (target: <$15)
5. **ARPPU**: Average revenue per paying user
6. **Trial Conversion**: Trial → Paid (target: 40%+)
7. **Retention**: Day 7, Day 30, Day 90

---

## Upsell Opportunities

### In-App Purchases (One-Time)
- **Premium Deck Pack**: $4.99 (Angel, Oracle, Love decks)
- **Reading Export Bundle**: $2.99 (Beautiful PDFs)
- **Spread Templates**: $1.99 (Custom spreads)

### Premium+ Tier (Future)
- **Price**: $14.99/month
- **Features**: Live reader sessions, group readings, advanced analytics
- **Target**: Power users, professional readers
