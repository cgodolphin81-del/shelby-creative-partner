# Lifecycle Email Flows Framework

**Client:** [Client Name]  
**Version:** 1.0  
**Created:** [Date]  
**Last Updated:** [Date]

---

## 1. Flow Overview

### 1.1 Lifecycle Stages

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  ONBOARDING  │ → │  ENGAGEMENT  │ → │   RENEWAL    │ → │   UPSELL     │
│  (Day 0-30)  │   │  (Day 31-90) │   │  (Day 60+)   │   │  (Ongoing)   │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
       ↓                  ↓                  ↓                  ↓
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│   WIN-BACK   │ ← │    CHURN     │ ← │  AT-RISK     │ ← │  EXPANSION   │
│  (Churned)   │   │  (Cancelled) │   │  (Signals)   │   │  (Ready)     │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

### 1.2 Flow Inventory

| Flow | Stage | Trigger | Emails | Goal | Owner |
|------|-------|---------|--------|------|-------|
| Welcome Series | Onboarding | Signup | 5-7 | Activation | Marketing |
| Onboarding Checklist | Onboarding | Signup | 3-5 | Complete setup | CS |
| First Value | Onboarding | Key action | 2-3 | Aha moment | Product |
| Engagement Nurture | Engagement | Inactivity | 3-5 | Re-engage | Marketing |
| Feature Adoption | Engagement | Usage pattern | 2-4 | Deepen usage | Product |
| Renewal Reminder | Renewal | 90/60/30 days | 3-4 | Retain | Sales/CS |
| Upsell/Cross-sell | Upsell | Readiness signal | 2-3 | Expand | Sales |
| At-Risk Intervention | At-Risk | Risk signals | 2-4 | Prevent churn | CS |
| Win-Back | Win-Back | Churned | 5 | Reactivate | Marketing |
| Post-Churn Survey | Churn | Cancelled | 1-2 | Learn | CS |

---

## 2. Onboarding Flows

### 2.1 Welcome Series (7 Emails)

**Goal:** Activate new users, establish value, build habit

#### Email 1: Welcome + Getting Started (Day 0)

```
Subject: Welcome to {{company_name}}, {{first_name}}! 🎉

Hi {{first_name}},

Welcome aboard! We're thrilled to have you with us.

You've just taken the first step toward {{primary_benefit}}. 
Over the next few days, we'll help you get set up and show you 
how to get the most out of {{product_name}}.

Here's what to do first:

1. {{action_1}} → {{link_1}}
2. {{action_2}} → {{link_2}}
3. {{action_3}} → {{link_3}}

Need help? Just reply to this email or check out our 
Getting Started Guide: {{guide_link}}

Let's get started!

The {{company_name}} Team

P.S. Want a personal walkthrough? Book a 1:1 onboarding call: {{calendar_link}}
```

#### Email 2: Your First Win (Day 1)

```
Subject: Let's get your first win, {{first_name}}

Hey {{first_name}},

The fastest way to see value from {{product_name}}? 
{{first_key_action}}.

Customers who do this in their first 24 hours are 3x more 
likely to achieve {{desired_outcome}}.

Here's how:

[Get Started] button → {{action_link}}

Need a hand? Here's a 2-minute video walkthrough: {{video_link}}

You've got this!

The {{company_name}} Team
```

#### Email 3: Feature Spotlight (Day 3)

```
Subject: {{first_name}}, don't miss this feature

Hi {{first_name}},

Now that you're settled in, let me show you one of our 
most-loved features: {{feature_name}}.

{{feature_description}}

{{customer_quote_about_feature}}

[Try {{feature_name}}] button → {{feature_link}}

Questions? Hit reply anytime.

Cheers,
The {{company_name}} Team
```

#### Email 4: Social Proof (Day 5)

```
Subject: How {{similar_customer}} achieved {{result}}

Hi {{first_name}},

Thought you might find this inspiring...

{{similar_customer}}, a {{customer_type}} like you, was 
struggling with {{problem}}.

After using {{product_name}}, they:
• {{result_1}}
• {{result_2}}
• {{result_3}}

"Their team was amazing, and the results spoke for themselves."
- {{customer_name}}, {{customer_title}}

[Read Full Story] button → {{case_study_link}}

You're on the right track. Keep going!

The {{company_name}} Team
```

#### Email 5: Tips & Best Practices (Day 7)

```
Subject: 5 tips to get more from {{product_name}}

Hi {{first_name}},

You've been using {{product_name}} for a week now. Here are 
5 tips from our power users:

1. {{tip_1}}
2. {{tip_2}}
3. {{tip_3}}
4. {{tip_4}}
5. {{tip_5}}

Want to dive deeper? Check out our Resource Library: {{library_link}}

Happy {{verb_related_to_product}}!

The {{company_name}} Team
```

#### Email 6: Check-In (Day 14)

```
Subject: How's it going, {{first_name}}?

Hi {{first_name}},

Just checking in—how are things going with {{product_name}}?

Have you been able to {{achieve_primary_goal}} yet?

If you're stuck on anything, I'm here to help. Just reply 
and let me know what's blocking you.

Alternatively, book a quick 15-minute call: {{calendar_link}}

Rooting for you!

{{csm_name}}
Customer Success
{{company_name}}
```

#### Email 7: Onboarding Complete (Day 30)

```
Subject: You did it, {{first_name}}! 🎊

Hi {{first_name}},

Congratulations! You've completed your first 30 days with 
{{product_name}}.

Here's what you've accomplished:
✓ {{achievement_1}}
✓ {{achievement_2}}
✓ {{achievement_3}}

What's next?
• {{next_step_1}}
• {{next_step_2}}
• {{next_step_3}}

You're now part of our community of {{number}}+ customers 
achieving {{outcome}} every day.

Keep up the great work!

The {{company_name}} Team

P.S. Love {{product_name}}? Leave us a review: {{review_link}}
```

### 2.2 Onboarding Checklist Flow

**Goal:** Guide users through critical setup steps

#### Email 1: Your Setup Checklist (Day 0)

```
Subject: {{first_name}}, here's your setup checklist ✓

Hi {{first_name}},

To get the most out of {{product_name}}, complete these 
5 quick steps:

□ {{step_1}} {{link_1}}
□ {{step_2}} {{link_2}}
□ {{step_3}} {{link_3}}
□ {{step_4}} {{link_4}}
□ {{step_5}} {{link_5}}

[View Your Progress] button → {{dashboard_link}}

Each step takes just a few minutes. You'll get the most 
value when all 5 are complete.

Let's do this!

The {{company_name}} Team
```

#### Email 2: Nudge (Day 2 - If Incomplete)

```
Subject: {{steps_completed}} of 5 steps complete, {{first_name}}

Hi {{first_name}},

Nice work on completing {{steps_completed}} steps!

You're {{steps_remaining}} steps away from full setup:

□ {{remaining_step_1}} {{link_1}}
□ {{remaining_step_2}} {{link_2}}

[Complete Setup] button → {{dashboard_link}}

Customers who complete all steps see {{benefit}} within 
their first week.

You're almost there!

The {{company_name}} Team
```

#### Email 3: Final Push (Day 5 - If Incomplete)

```
Subject: Last step, {{first_name}}!

Hi {{first_name}},

You're so close! Just {{steps_remaining}} step(s) left:

□ {{remaining_step}} {{link}}

[Finish Now] button → {{link}}

This last step unlocks {{specific_benefit}}.

Need help? Reply to this email or book a call: {{calendar_link}}

The {{company_name}} Team
```

### 2.3 First Value / "Aha Moment" Flow

**Goal:** Ensure users experience core value quickly

#### Email 1: Path to Value (Day 1)

```
Subject: The fastest way to {{desired_outcome}}, {{first_name}}

Hi {{first_name}},

Want to know the secret to getting results fast with 
{{product_name}}?

It's {{key_action}}.

Customers who do this within 48 hours are 5x more likely 
to achieve {{outcome}} in their first month.

[Do This Now] button → {{action_link}}

Here's a quick guide: {{guide_link}}

You've got this!

The {{company_name}} Team
```

#### Email 2: Value Reinforcement (Day 3 - After Action)

```
Subject: You did it! Here's what's next, {{first_name}}

Hi {{first_name}},

Awesome job completing {{action}}! 🎉

You're now on your way to {{outcome}}. Here's what to 
expect next:

• {{expectation_1}}
• {{expectation_2}}
• {{expectation_3}}

Want to accelerate your results? Try {{next_action}}: {{link}}

Questions? Just reply!

The {{company_name}} Team
```

---

## 3. Engagement Flows

### 3.1 Re-Engagement Flow (Inactive Users)

**Goal:** Bring inactive users back to product

#### Email 1: We Miss You (Day 7 Inactive)

```
Subject: We miss you, {{first_name}}

Hi {{first_name}},

It's been a week since we last saw you in {{product_name}}. 
Hope everything's okay!

Just wanted to remind you that you've got {{unfinished_item}} 
waiting for you.

[Jump Back In] button → {{login_link}}

If something's not working or you have questions, just 
hit reply. We're here to help!

The {{company_name}} Team
```

#### Email 2: What's New (Day 14 Inactive)

```
Subject: {{first_name}}, here's what you missed

Hi {{first_name}},

A lot has happened since you last logged in!

🚀 {{new_feature_1}} - {{benefit_1}}
🚀 {{new_feature_2}} - {{benefit_2}}
🚀 {{new_feature_3}} - {{benefit_3}}

Plus, we've made {{improvement}} based on customer feedback.

[See What's New] button → {{whats_new_link}}

We'd love to have you back!

The {{company_name}} Team
```

#### Email 3: Incentive (Day 21 Inactive)

```
Subject: A little something to welcome you back, {{first_name}}

Hi {{first_name}},

We'd love to see you back in {{product_name}}.

As a welcome-back gift, here's {{incentive}}:

{{incentive_details}}

[Claim & Return] button → {{offer_link}}

This expires in 7 days. Hope to see you soon!

The {{company_name}} Team
```

#### Email 4: Last Attempt (Day 30 Inactive)

```
Subject: Should we close your account, {{first_name}}?

Hi {{first_name}},

It's been a month since you last used {{product_name}}, 
and we haven't heard back.

If you're not planning to use it, we can close your account 
and you won't hear from us again.

[Close My Account] button → {{close_link}}

But if you DO want to come back, now's the time. 
Your {{incentive}} is still waiting: {{offer_link}}

Either way, no hard feelings.

Best,
The {{company_name}} Team
```

### 3.2 Feature Adoption Flow

**Goal:** Drive adoption of underutilized features

#### Email 1: Feature Introduction

```
Subject: {{first_name}}, are you using this feature?

Hi {{first_name}},

We noticed you haven't tried {{feature_name}} yet.

Here's why you might love it:

{{feature_benefit}}

{{use_case_example}}

[Try {{feature_name}}] button → {{feature_link}}

Takes just 2 minutes to set up!

The {{company_name}} Team
```

#### Email 2: Social Proof (Day 3)

```
Subject: How {{customer}} uses {{feature_name}}

Hi {{first_name}},

{{customer}}, a {{customer_type}}, uses {{feature_name}} to 
{{achieve_outcome}}.

"{{testimonial}}"

[See How It Works] button → {{demo_link}}

Give it a try!

The {{company_name}} Team
```

### 3.3 Power User Engagement

**Goal:** Deepen engagement with highly active users

#### Email 1: Recognition

```
Subject: You're crushing it, {{first_name}}! 🏆

Hi {{first_name}},

We noticed you've been really active in {{product_name}} 
lately. Awesome work!

You've:
• {{achievement_1}}
• {{achievement_2}}
• {{achievement_3}}

You're in the top {{percentile}}% of users. Keep it up!

The {{company_name}} Team
```

#### Email 2: Advanced Tips

```
Subject: Pro tips for power users like you, {{first_name}}

Hi {{first_name}},

Since you're already a {{product_name}} pro, here are some 
advanced tips:

{{advanced_tip_1}}
{{advanced_tip_2}}
{{advanced_tip_3}}

Want to go even deeper? Join our Power User Community: {{link}}

The {{company_name}} Team
```

---

## 4. Renewal Flows

### 4.1 Renewal Reminder Sequence

**Goal:** Ensure timely renewal, prevent involuntary churn

#### Email 1: 90-Day Notice

```
Subject: Your {{plan_name}} plan renews in 90 days

Hi {{first_name}},

This is a friendly reminder that your {{plan_name}} plan 
renews on {{renewal_date}}.

Here's what's included:
• {{feature_1}}
• {{feature_2}}
• {{feature_3}}

Current investment: {{price}}/{{billing_cycle}}

[View Account] button → {{account_link}}

Questions about your plan? Reply to this email or book a 
call with your account manager: {{calendar_link}}

The {{company_name}} Team
```

#### Email 2: 60-Day Notice

```
Subject: 60 days until renewal, {{first_name}}

Hi {{first_name}},

Your {{plan_name}} plan renews in 60 days ({{renewal_date}}).

Since you've been with us, we've added:
• {{new_feature_1}}
• {{new_feature_2}}
• {{new_feature_3}}

Want to explore if a different plan might fit better? 
Let's chat: {{calendar_link}}

[Review Your Plan] button → {{plans_link}}

The {{company_name}} Team
```

#### Email 3: 30-Day Notice

```
Subject: {{first_name}}, your plan renews in 30 days

Hi {{first_name}},

Just 30 days until your {{plan_name}} plan renews 
({{renewal_date}}).

Your current investment: {{price}}/{{billing_cycle}}

If you need to make any changes (upgrade, downgrade, or 
cancel), now's the time.

[Manage Subscription] button → {{account_link}}

Questions? We're here to help.

The {{company_name}} Team
```

#### Email 4: 7-Day Notice

```
Subject: Final reminder: Renewal in 7 days

Hi {{first_name}},

Your {{plan_name}} plan will automatically renew in 7 days 
on {{renewal_date}}.

Amount: {{price}}
Payment method: {{payment_method}}

[Update Payment Method] button → {{billing_link}}

Need to make changes? Contact us within 48 hours: 
{{support_link}}

The {{company_name}} Team
```

### 4.2 Renewal Conversation Starter

```
Subject: Let's plan for your renewal, {{first_name}}

Hi {{first_name}},

With your renewal coming up on {{renewal_date}}, I'd love 
to schedule a quick check-in to:

1. Review your results so far
2. Discuss your goals for the next period
3. Ensure you're on the right plan

Are you available for a 30-minute call next week?

[Book a Time] button → {{calendar_link}}

Looking forward to it!

{{csm_name}}
Customer Success Manager
{{company_name}}
```

---

## 5. Upsell/Cross-sell Flows

### 5.1 Upsell Readiness Signals

| Signal | Description | Recommended Action |
|--------|-------------|-------------------|
| Usage Limit | Approaching plan limits | Upgrade prompt |
| Feature Requests | Asking for premium features | Feature-gated upgrade |
| Team Growth | Adding users frequently | Team/Enterprise pitch |
| High Engagement | Power user behavior | Premium tier offer |
| Success Milestone | Achieved key outcome | Expansion conversation |
| Competitor Mention | Evaluating alternatives | Retention + upsell |

### 5.2 Upsell Email Sequence

#### Email 1: Value-Based (Soft)

```
Subject: {{first_name}}, you're ready for more

Hi {{first_name}},

Based on your usage, it looks like {{product_name}} has 
been really valuable for you.

You've:
• {{usage_stat_1}}
• {{usage_stat_2}}
• {{usage_stat_3}}

Customers at your level often upgrade to {{plan_name}} to 
unlock:
• {{premium_feature_1}}
• {{premium_feature_2}}
• {{premium_feature_3}}

Want to learn more? [View Plans] button → {{plans_link}}

The {{company_name}} Team
```

#### Email 2: ROI-Focused

```
Subject: The ROI of upgrading, {{first_name}}

Hi {{first_name}},

Let's talk numbers.

Based on your current usage, upgrading to {{plan_name}} 
could help you:
• {{roi_benefit_1}} (worth ~${{value}})
• {{roi_benefit_2}} (worth ~${{value}})
• {{roi_benefit_3}} (worth ~${{value}})

Total potential value: ~${{total_value}}/{{period}}

Investment: {{upgrade_price}}/{{period}}

[Calculate Your ROI] button → {{roi_calculator_link}}

Want to discuss? Book a call: {{calendar_link}}

The {{company_name}} Team
```

#### Email 3: Limited Offer

```
Subject: Special upgrade offer for you, {{first_name}}

Hi {{first_name}},

Because you've been a great customer, we'd like to offer 
you:

✨ {{offer_details}} ✨

This includes:
• {{benefit_1}}
• {{benefit_2}}
• {{benefit_3}}

Valid until {{expiry_date}}.

[Claim Offer] button → {{upgrade_link}}

Questions? Reply anytime!

The {{company_name}} Team
```

### 5.3 Cross-sell Flow

```
Subject: {{first_name}}, you might also like...

Hi {{first_name}},

Since you're getting great results with {{current_product}}, 
you might be interested in {{related_product}}.

{{related_product}} helps you {{benefit}}.

{{customer_quote}}

[Learn More] button → {{product_link}}

Want to bundle and save? {{bundle_offer}}

The {{company_name}} Team
```

---

## 6. At-Risk Intervention Flows

### 6.1 Risk Signal Triggers

| Signal | Threshold | Flow Triggered |
|--------|-----------|----------------|
| Usage Drop | >50% decline in 14 days | At-risk nurture |
| Support Tickets | 3+ tickets in 7 days | CSM outreach |
| Login Gap | No login in 14 days | Re-engagement |
| Negative Feedback | NPS < 6 or CSAT < 3 | Recovery flow |
| Payment Failure | Failed charge | Dunning + outreach |
| Competitor Inquiry | Detected via sales/intent | Retention offer |

### 6.2 At-Risk Nurture Sequence

#### Email 1: Check-In

```
Subject: How's it going, {{first_name}}?

Hi {{first_name}},

I noticed you haven't been as active in {{product_name}} 
lately. Just wanted to check in and see if everything's okay.

Is there anything blocking you from getting the results 
you want?

If there's something we can help with, just hit reply. 
I'm here for you.

Best,
{{csm_name}}
Customer Success Manager
{{company_name}}
```

#### Email 2: Offer Help (Day 3)

```
Subject: Can I help, {{first_name}}?

Hi {{first_name}},

Following up on my last email. I'd really like to help 
you succeed with {{product_name}}.

Common challenges I can help with:
• Getting started / setup
• Finding the right features for your goals
• Troubleshooting issues
• Training for you or your team

What would be most helpful? Just reply and let me know.

Alternatively, we can hop on a quick call: {{calendar_link}}

Rooting for you!

{{csm_name}}
```

#### Email 3: Escalation (Day 7)

```
Subject: {{first_name}}, I want to make this right

Hi {{first_name}},

I've reached out a couple times because I'm genuinely 
concerned that {{product_name}} isn't meeting your needs.

That's on us, and I'd like to fix it.

Would you be open to a 15-minute call this week? No agenda 
other than:
1. Hearing what's not working
2. Understanding what you need
3. Seeing if we can make it right

[Book a Call] button → {{calendar_link}}

Or just reply to this email. Either way, I'm committed 
to helping you succeed.

Best,
{{csm_name}}
```

---

## 7. Win-Back Flows

*(See dedicated Win-Back Campaigns document for full sequences)*

### 7.1 Quick Reference

| Email | Timing | Goal | Offer |
|-------|--------|------|-------|
| We Miss You | Day 0 | Reconnect | None |
| What's New | Day 3 | Show improvement | Free month |
| Special Offer | Day 7 | Incentivize return | 50% off 3mo |
| Personal Outreach | Day 12 | High-touch | Custom |
| Breakup | Day 19 | Final attempt | Last chance |

---

## 8. Post-Churn Flows

### 8.1 Exit Survey

```
Subject: One last question, {{first_name}}

Hi {{first_name}},

I saw that you cancelled your {{plan_name}} plan. 
I'm sorry to see you go.

If you have a moment, could you share the main reason?

□ Too expensive
□ Missing features
□ Switched to competitor
□ No longer needed
□ Technical issues
□ Poor support
□ Other: _______

[Submit] button → {{survey_link}}

Your feedback helps us improve. Thank you.

{{ceo_name}}
CEO, {{company_name}}
```

### 8.2 Farewell + Open Door

```
Subject: Thank you, {{first_name}}

Hi {{first_name}},

Thank you for being a {{product_name}} customer. 
We truly appreciate the time you spent with us.

Your account will remain active until {{end_date}}. 
After that, you can export your data here: {{export_link}}

If you ever decide to come back, we'd love to have you. 
Just reach out to {{reactivation_email}}.

Wishing you all the best!

The {{company_name}} Team
```

---

## 9. Email Best Practices

### 9.1 Deliverability

| Practice | Implementation |
|----------|----------------|
| Authentication | SPF, DKIM, DMARC configured |
| List Hygiene | Remove hard bounces, inactive subscribers |
| Sending Domain | Dedicated subdomain for lifecycle emails |
| Unsubscribe | One-click, honored within 24 hours |
| Physical Address | Included in footer (CAN-SPAM) |

### 9.2 Optimization

| Element | Best Practice |
|---------|---------------|
| Subject Line | 35-50 characters, personalization, urgency |
| Preheader | Complements subject, 85-100 characters |
| Sender Name | Human name or recognizable brand |
| Send Time | Test by segment, typically Tue-Thu 10am-2pm |
| CTA | Single primary CTA, clear action verb |
| Mobile | Responsive design, large tap targets |
| Length | Scannable, short paragraphs, bullet points |

### 9.3 A/B Testing Cadence

| Element | Test Frequency | Sample Size |
|---------|----------------|-------------|
| Subject Line | Every send | 1,000+ per variant |
| Send Time | Monthly | 5,000+ per variant |
| CTA Copy | Quarterly | 2,000+ per variant |
| Email Length | Quarterly | 2,000+ per variant |
| Personalization | Quarterly | 2,000+ per variant |

---

## 10. Analytics & Measurement

### 10.1 Flow Performance Dashboard

| Flow | Sends | Opens | Clicks | Conversions | Revenue |
|------|-------|-------|--------|-------------|---------|
| Welcome Series | ___ | ___% | ___% | ___% | $___ |
| Onboarding Checklist | ___ | ___% | ___% | ___% | $___ |
| Re-Engagement | ___ | ___% | ___% | ___% | $___ |
| Renewal Reminders | ___ | ___% | ___% | ___% | $___ |
| Upsell | ___ | ___% | ___% | ___% | $___ |
| At-Risk | ___ | ___% | ___% | ___% | $___ |

### 10.2 Success Metrics by Flow

| Flow | Primary Metric | Target | Secondary Metric | Target |
|------|----------------|--------|------------------|--------|
| Welcome | Activation rate | ___% | Time to first value | ___ days |
| Onboarding | Checklist completion | ___% | Day 7 retention | ___% |
| Re-Engagement | Return rate | ___% | 30-day retention | ___% |
| Renewal | Renewal rate | ___% | Days to renew | ___ |
| Upsell | Upgrade rate | ___% | Expansion MRR | $___ |
| At-Risk | Retention rate | ___% | Risk signal resolution | ___% |

---

**Flow Owner:** ________________  
**ESP/Platform:** ________________  
**Last Audit Date:** ________________
