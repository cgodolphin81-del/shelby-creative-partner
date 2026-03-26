# Win-Back Campaign Framework

**Client:** [Client Name]  
**Campaign Version:** 1.0  
**Created:** [Date]  
**Last Updated:** [Date]

---

## 1. Campaign Overview

### 1.1 Objectives

| Objective | Current Baseline | Target (90 days) | Measurement |
|-----------|-----------------|------------------|-------------|
| Win-back rate | ___% | ___% | Reactivated/Targeted |
| Revenue from win-backs | $___/mo | $___/mo | Revenue tracking |
| LTV of won-back customers | $___ | $___ | Cohort analysis |
| Cost per win-back | $___ | $___ | Campaign cost/wins |

### 1.2 Win-Back Definitions

| Status | Definition | Action |
|--------|------------|--------|
| At-Risk | Declining engagement, no churn yet | Prevention campaign |
| Lapsed | No activity 30-60 days | Re-engagement campaign |
| Churned | Cancelled 60-180 days ago | Win-back campaign |
| Lost | Churned 180+ days ago | Long-shot campaign |
| Unrecoverable | Blacklisted, fraud, abuse | No contact |

---

## 2. Segmentation Strategy

### 2.1 Churn Reason Segments

| Segment | Definition | Size | Win Probability | Recommended Approach |
|---------|------------|------|-----------------|---------------------|
| Price Sensitive | Left due to cost concerns | ___% | High | Discount/Plan change |
| Feature Gap | Missing needed features | ___% | Medium | Product updates |
| Poor Experience | Bad support/onboarding | ___% | Low-Medium | Service recovery |
| Competitor | Switched to competitor | ___% | Medium | Differentiation |
| No Longer Needed | Business changed/closed | ___% | Low | Timing-based |
| Technical Issues | Unresolved bugs/problems | ___% | Medium | Fix + outreach |
| Inactive/Forgetful | Simply stopped using | ___% | High | Re-engagement |

### 2.2 Value-Based Segments

| Segment | Criteria | Size | Avg LTV | Win-Back Priority |
|---------|----------|------|---------|-------------------|
| Whale | Top 1% by revenue | ___ | $___ | Highest |
| High-Value | Top 10% by revenue | ___ | $___ | High |
| Medium-Value | Middle 40% | ___ | $___ | Medium |
| Low-Value | Bottom 50% | ___ | $___ | Low (automated) |

### 2.3 Behavioral Segments

| Segment | Behavior Pattern | Size | Recommended Tactic |
|---------|-----------------|------|-------------------|
| Power Users | High usage before churn | ___% | Feature updates, "we improved X" |
| One-Hit Wonders | Single purchase, no repeat | ___% | New product intro |
| Trial Abandoners | Started trial, never converted | ___% | Extended trial, demo |
| Serial Churners | Multiple churn/reactivate cycles | ___% | Root cause analysis |
| Seasonal Users | Predictable usage patterns | ___% | Timing-based outreach |

### 2.4 Tenure Segments

| Segment | Tenure at Churn | Size | Win Strategy |
|---------|-----------------|------|--------------|
| Early Churn | 0-30 days | ___% | Fix onboarding, offer fresh start |
| Short-Term | 1-6 months | ___% | Understand failure point, address |
| Medium-Term | 6-18 months | ___% | Relationship-based appeal |
| Long-Term | 18+ months | ___% | Nostalgia, loyalty recognition |

---

## 3. Win-Back Offers

### 3.1 Offer Matrix by Segment

| Segment | Offer Type | Specific Offer | Expected Acceptance | Cost |
|---------|------------|----------------|---------------------|------|
| Price Sensitive | Discount | 50% off 3 months | 15-25% | Medium |
| Price Sensitive | Plan Change | Downgrade option | 20-30% | Low |
| Price Sensitive | Payment Terms | Annual discount | 10-15% | Low |
| Feature Gap | Product Update | "We built what you asked for" | 10-20% | Low |
| Feature Gap | Extended Trial | 30-day full access | 15-25% | Low |
| Poor Experience | Service Recovery | Dedicated success manager | 20-30% | Medium |
| Poor Experience | Guarantee | 90-day money-back | 15-20% | Low |
| Competitor | Differentiation | Side-by-side comparison | 5-10% | Low |
| Competitor | Switching Bonus | Migration assistance + credit | 10-15% | Medium |
| Inactive | Re-engagement | "What's new" + incentive | 10-20% | Low |
| Inactive | Curiosity | Teaser of new features | 5-10% | Low |

### 3.2 Offer Hierarchy (Escalation)

```
Attempt 1: Soft touch (no offer)
    ↓ (No response in 7 days)
Attempt 2: Light incentive (10-20% off, free month)
    ↓ (No response in 7 days)
Attempt 3: Strong incentive (30-50% off, extended trial)
    ↓ (No response in 7 days)
Attempt 4: Maximum incentive (best offer, personal outreach)
    ↓ (No response)
Attempt 5: Final touch (breakup email, leave door open)
    ↓
Pause for 90 days, re-segment
```

### 3.3 Offer Economics

| Offer Type | Discount Value | Expected Lift | Break-Even LTV | Recommended For |
|------------|---------------|---------------|----------------|-----------------|
| 10% off 1 month | $___ | 5-10% | $___ | Low-value, price-sensitive |
| 25% off 3 months | $___ | 15-25% | $___ | Medium-value |
| 50% off 3 months | $___ | 25-40% | $___ | High-value, price-sensitive |
| Free month | $___ | 10-20% | $___ | All segments |
| Extended trial (30d) | $___ | 15-25% | $___ | Trial abandoners |
| Upgrade at same price | $___ | 10-15% | $___ | Feature gap |
| Dedicated support | $___/mo | 20-30% | $___ | Poor experience |
| Migration assistance | $___ | 10-15% | $___ | Competitor switchers |

---

## 4. Email Sequences

### 4.1 Sequence Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    WIN-BACK EMAIL SEQUENCE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Email 1: "We Miss You" (Day 0)                                  │
│  ├─ Subject: We miss you, [Name]                                 │
│  ├─ Tone: Warm, nostalgic                                        │
│  ├─ CTA: Simple return                                           │
│  └─ Offer: None (soft touch)                                     │
│                                                                  │
│  ↓ (No open/click in 3 days)                                     │
│                                                                  │
│  Email 2: "What's New" (Day 3)                                   │
│  ├─ Subject: You won't believe what we've built                  │
│  ├─ Tone: Exciting, feature-focused                              │
│  ├─ CTA: See what's new                                          │
│  └─ Offer: Free month on return                                  │
│                                                                  │
│  ↓ (No open/click in 4 days)                                     │
│                                                                  │
│  Email 3: "Special Offer" (Day 7)                                │
│  ├─ Subject: A special offer just for you                        │
│  ├─ Tone: Exclusive, limited-time                                │
│  ├─ CTA: Claim offer                                             │
│  └─ Offer: 50% off 3 months                                      │
│                                                                  │
│  ↓ (No open/click in 5 days)                                     │
│                                                                  │
│  Email 4: "Personal Outreach" (Day 12)                           │
│  ├─ Subject: [CEO/Founder name] here...                          │
│  ├─ Tone: Personal, sincere                                      │
│  ├─ CTA: Reply to this email                                     │
│  └─ Offer: Custom solution                                       │
│                                                                  │
│  ↓ (No response in 7 days)                                       │
│                                                                  │
│  Email 5: "Breakup Email" (Day 19)                               │
│  ├─ Subject: Should we close your account?                       │
│  ├─ Tone: Direct, respectful                                     │
│  ├─ CTA: Confirm or stay                                         │
│  └─ Offer: Final chance                                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Email Templates

#### Email 1: "We Miss You"

```
Subject: We miss you, {{first_name}}

Hi {{first_name}},

It's been {{days_since_last_login}} days since we last saw you at {{company_name}}. 
We hope everything's going well on your end!

We noticed you haven't been using {{product_name}} lately, and we wanted to check in. 
Is everything okay? Did you find what you were looking for?

If there's anything we can do to make your experience better, we'd love to hear about it. 
Just hit reply and let us know.

In the meantime, here's what's been happening:
• {{recent_update_1}}
• {{recent_update_2}}
• {{recent_update_3}}

We'd love to welcome you back whenever you're ready.

Best,
The {{company_name}} Team

[Come Back] button → {{return_url}}
```

#### Email 2: "What's New"

```
Subject: {{first_name}}, you won't believe what we've built

Hey {{first_name}},

A lot has changed since you last used {{product_name}}!

We've been busy building exactly what customers like you asked for:

🚀 {{feature_1}} - {{benefit_1}}
🚀 {{feature_2}} - {{benefit_2}}
🚀 {{feature_3}} - {{benefit_3}}

Plus, we've completely redesigned {{key_area}} to make it faster and easier to use.

We'd love for you to take another look. As a welcome back gift, 
we're giving you a FREE month when you return this week.

[See What's New] button → {{whats_new_url}}

Cheers,
The {{company_name}} Team

P.S. Your data and settings are all still here, waiting for you.
```

#### Email 3: "Special Offer"

```
Subject: A special offer just for you, {{first_name}}

Hi {{first_name}},

We understand that sometimes the timing just wasn't right, 
or maybe {{product_name}} wasn't quite what you needed.

We've been working hard to change that.

And because we value you as a former customer, we'd like to offer you:

✨ 50% OFF for 3 months ✨

That's {{discounted_price}}/month instead of {{original_price}}.

This offer is exclusive to select former customers and expires in 7 days.

[Claim Your Offer] button → {{offer_url}}

Why come back?
✓ {{key_benefit_1}}
✓ {{key_benefit_2}}
✓ {{key_benefit_3}}
✓ 30-day money-back guarantee

We're confident you'll love the new {{product_name}}.

Best,
The {{company_name}} Team
```

#### Email 4: "Personal Outreach"

```
Subject: {{first_name}}, [CEO name] here...

Hi {{first_name}},

This is {{ceo_name}}, CEO of {{company_name}}.

I'm reaching out personally because I noticed you were a customer who 
churned {{time_period}} ago, and I want to make things right.

If you're open to it, I'd love to:
1. Hear what went wrong (no sales pitch, I promise)
2. Understand what you're using now
3. See if there's any way we can earn you back

If you're up for a quick 15-minute call, just reply with a time that works. 
Or if you prefer, just tell me what happened via email.

Either way, I appreciate you giving us a try in the past.

Best,
{{ceo_name}}
CEO, {{company_name}}
{{direct_email}} | {{phone}}
```

#### Email 5: "Breakup Email"

```
Subject: Should we close your account, {{first_name}}?

Hi {{first_name}},

I don't want to be that ex who keeps calling.

It's been {{days_since_churn}} days since you left {{company_name}}, 
and we haven't heard back despite our attempts to reach out.

So here's the deal:

If we don't hear from you by {{date_7_days}}, we'll assume you're 
not interested in returning and will close your account.

Your data will be exported and available for download for 30 days 
after that, then it will be permanently deleted.

BUT—if you DO want to come back, now's the time. 
Your 50% discount offer is still valid until {{offer_expiry}}.

[Yes, I Want to Return] button → {{offer_url}}
[No, Close My Account] button → {{confirmation_url}}

Either way, I wish you the best.

Thanks for giving us a try.

{{ceo_name}}
CEO, {{company_name}}
```

### 4.3 Channel Mix

| Channel | Use Case | Timing | Expected Response |
|---------|----------|--------|-------------------|
| Email | Primary channel | Sequence above | 2-5% |
| SMS | High-value customers | After email 2 & 4 | 5-10% |
| Phone Call | Whale customers | After email 3 | 15-25% |
| Direct Mail | Enterprise churns | After email 4 | 10-20% |
| Social Retargeting | All segments | Ongoing during campaign | 1-3% |
| In-App (if logged in) | Lapsed but not churned | Immediate | 10-20% |

### 4.4 Send Time Optimization

| Segment | Best Day | Best Time | Reason |
|---------|----------|-----------|--------|
| B2B Decision Makers | Tuesday-Thursday | 10am-2pm | Work hours |
| SMB Owners | Monday, Wednesday | 8-10am, 5-7pm | Before/after rush |
| Consumers | Sunday, Wednesday | 7-9pm | Evening leisure |
| International | Local Tuesday | Local 10am | Timezone adjusted |

---

## 5. Campaign Execution

### 5.1 Campaign Timeline

| Phase | Duration | Activities | Target Volume |
|-------|----------|------------|---------------|
| Preparation | 1-2 weeks | Segmentation, creative, testing | — |
| Soft Launch | 1 week | 10% of list, optimize | ___ customers |
| Full Launch | 4 weeks | All segments, all channels | ___ customers |
| Analysis | 1 week | Results, learnings, iterate | — |
| Follow-up | Ongoing | Won-back nurturing | ___ customers |

### 5.2 A/B Testing Plan

| Test Element | Variant A | Variant B | Metric | Sample Size |
|--------------|-----------|-----------|--------|-------------|
| Subject Line | "We miss you" | "Come back for 50% off" | Open rate | 1,000 each |
| Offer | 50% off 3 months | 2 months free | Conversion | 1,000 each |
| Sender | Company name | CEO name | Open rate | 1,000 each |
| CTA Button | "Come Back" | "Claim Offer" | Click rate | 1,000 each |
| Email Length | Short (100 words) | Long (300 words) | Conversion | 1,000 each |
| Urgency | "7 days left" | No urgency | Conversion | 1,000 each |

### 5.3 Suppression Rules

| Rule | Condition | Action |
|------|-----------|--------|
| Recent Purchase | Purchased in last 30 days | Exclude from win-back |
| Active Subscription | Currently active | Exclude |
| Unsubscribed | Email opt-out | Respect, exclude |
| Bounced | Hard bounce on record | Exclude, clean list |
| Spam Complaint | Complained in last 6 months | Exclude |
| Recently Won-Back | Won back in last 90 days | Exclude from new campaign |
| Blacklisted | Fraud, abuse, chargebacks | Permanent exclusion |

---

## 6. Post Win-Back Nurturing

### 6.1 Welcome Back Sequence

```
Day 0: Welcome back! + Offer confirmation
Day 3: Getting started guide
Day 7: Check-in + offer help
Day 14: Feature spotlight
Day 30: Success check-in + upsell (if appropriate)
Day 60: Loyalty milestone recognition
Day 90: "You're back on track" + referral ask
```

### 6.2 Won-Back Customer Monitoring

| Metric | Monitoring Frequency | Alert Threshold | Action |
|--------|---------------------|-----------------|--------|
| Login frequency | Daily | No login in 7 days | Re-engagement email |
| Feature usage | Weekly | Declining vs. baseline | Success outreach |
| Support tickets | Real-time | Any ticket | Priority handling |
| Payment status | Daily | Failed payment | Immediate contact |
| Satisfaction | 30/60/90 days | Score < 7 | Intervention |

### 6.3 Second-Churn Prevention

| Risk Signal | Intervention | Owner |
|-------------|--------------|-------|
| No login in 14 days | Personal check-in email | CS |
| Usage down 50%+ | Success manager outreach | CS |
| Support ticket unresolved > 48hr | Escalate to manager | Support |
| Negative survey response | Personal call | CS/Leadership |
| Competitor inquiry detected | Retention offer | Sales |

---

## 7. Campaign Analytics

### 7.1 Performance Dashboard

| Metric | Formula | Target | Actual |
|--------|---------|--------|--------|
| Win-Back Rate | Won Back / Targeted | ___% | ___% |
| Email Open Rate | Opens / Delivered | ___% | ___% |
| Email Click Rate | Clicks / Delivered | ___% | ___% |
| Offer Redemption | Redeemed / Clicked | ___% | ___% |
| Revenue per Win | Revenue / Won Back | $___ | $___ |
| Cost per Win | Campaign Cost / Won Back | $___ | $___ |
| ROI | (Revenue - Cost) / Cost | ___% | ___% |
| 90-Day Retention | Retained 90d / Won Back | ___% | ___% |

### 7.2 Segment Performance

| Segment | Targeted | Won Back | Rate | Revenue | LTV (projected) |
|---------|----------|----------|------|---------|-----------------|
| Price Sensitive | ___ | ___ | ___% | $___ | $___ |
| Feature Gap | ___ | ___ | ___% | $___ | $___ |
| Poor Experience | ___ | ___ | ___% | $___ | $___ |
| Competitor | ___ | ___ | ___% | $___ | $___ |
| Inactive | ___ | ___ | ___% | $___ | $___ |

### 7.3 Cohort Analysis (Won-Back Customers)

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 6 |
|--------|---------|---------|---------|---------|---------|
| Jan Win-Backs | 100% | ___% | ___% | ___% | ___% |
| Feb Win-Backs | 100% | ___% | ___% | ___% | ___% |
| Mar Win-Backs | 100% | ___% | ___% | ___% | ___% |

---

## 8. Technology & Tools

### 8.1 Required Capabilities

| Capability | Tool Options | Priority |
|------------|--------------|----------|
| Email automation | Klaviyo, HubSpot, Customer.io | High |
| Segmentation | CRM + ESP | High |
| A/B testing | Built into ESP | High |
| SMS | Twilio, Postscript | Medium |
| Direct mail | Lob, Postalytics | Low |
| Analytics | GA4, Mixpanel, Looker | High |
| Customer data platform | Segment, mParticle | Medium |

### 8.2 Integration Requirements

| System | Data Flow | Frequency |
|--------|-----------|-----------|
| CRM | Customer status, tenure, value | Real-time |
| Billing | Payment status, churn date | Real-time |
| Product | Usage data, last login | Daily |
| Support | Ticket history, satisfaction | Daily |
| ESP | Email engagement, campaign data | Real-time |

---

## 9. Compliance & Best Practices

### 9.1 Legal Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| CAN-SPAM compliance | ✅ | Unsubscribe in every email |
| GDPR compliance | ✅ | Legitimate interest basis |
| CCPA compliance | ✅ | Opt-out honored |
| Unsubscribe processing | ✅ | Within 10 days |
| Physical address | ✅ | In email footer |

### 9.2 Deliverability Best Practices

- [ ] Warm up new sending domains
- [ ] Maintain list hygiene (remove hard bounces)
- [ ] Monitor sender reputation
- [ ] Segment by engagement level
- [ ] Avoid spam trigger words
- [ ] Use authenticated sending (SPF, DKIM, DMARC)
- [ ] Maintain consistent sending volume
- [ ] Provide clear unsubscribe option

---

## 10. Campaign Playbook Summary

### 10.1 Quick Reference

| Scenario | Segment | Sequence | Offer | Channel |
|----------|---------|----------|-------|---------|
| Recent churn (<30d) | All | 5-email | 50% off 3mo | Email + SMS |
| Price-sensitive | Price | 5-email | 50% off 3mo | Email |
| Feature gap | Feature | 5-email | Extended trial | Email + In-app |
| High-value ($10K+) | Whale | 5-email + Call | Custom | Email + Phone |
| Enterprise | Enterprise | Custom | Custom | Multi-touch |
| Serial churner | Serial | 3-email | Root cause fix | Email |

### 10.2 Success Checklist

**Pre-Launch:**
- [ ] Segments defined and exported
- [ ] Email templates created and tested
- [ ] Offers configured in billing system
- [ ] Suppression lists applied
- [ ] A/B tests designed
- [ ] Tracking/analytics configured
- [ ] Team trained on process

**During Campaign:**
- [ ] Daily monitoring of metrics
- [ ] Quick iteration on underperformers
- [ ] Support team briefed
- [ ] Won-back customers flagged for nurturing

**Post-Campaign:**
- [ ] Full performance analysis
- [ ] Learnings documented
- [ ] Successful tactics added to playbook
- [ ] Won-back cohort monitoring established

---

**Campaign Owner:** ________________  
**Next Campaign Date:** ________________  
**Last Performance Review:** ________________
