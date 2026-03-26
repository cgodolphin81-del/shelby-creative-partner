# Churn Prediction Model Framework

**Client:** [Client Name]  
**Model Version:** 1.0  
**Created:** [Date]  
**Last Updated:** [Date]

---

## 1. Model Overview

### 1.1 Objectives

| Objective | Target | Measurement |
|-----------|--------|-------------|
| Churn Prediction Accuracy | 85%+ | True positive rate |
| Early Warning (30+ days) | 70%+ | Lead time accuracy |
| False Positive Rate | <15% | Precision |
| Intervention Success Rate | 40%+ | Saved customers / Targeted |
| Model Refresh Frequency | Monthly | Retraining schedule |

### 1.2 Churn Definitions

| Churn Type | Definition | Prediction Window |
|------------|------------|-------------------|
| Voluntary Churn | Customer cancels subscription | 30-60 days |
| Involuntary Churn | Payment failure, account closure | 7-14 days |
| Usage Churn | No activity for 30+ days | 14-30 days |
| Revenue Churn | Downgrade >50% | 30-60 days |
| Silent Churn | Paid but no engagement | 14-30 days |

### 1.3 Risk Segments

| Segment | Risk Score | Probability | Action |
|---------|------------|-------------|--------|
| Critical | 90-100 | 80-100% | Immediate intervention |
| High | 70-89 | 50-79% | Priority outreach |
| Medium | 40-69 | 20-49% | Automated nurture |
| Low | 10-39 | 5-19% | Monitor |
| Very Low | 0-9 | <5% | No action |

---

## 2. Churn Signals

### 2.1 Behavioral Signals

| Signal | Description | Weight | Data Source |
|--------|-------------|--------|-------------|
| Login Frequency Decline | >50% drop in 14 days | High | Product Analytics |
| Session Duration Drop | Average session <50% of baseline | Medium | Product Analytics |
| Feature Usage Drop | Key features unused for 14+ days | High | Product Analytics |
| No Key Action | Haven't completed core action in 7+ days | High | Product Analytics |
| Export Data Activity | Downloading/exporting data | Critical | Product Analytics |
| Account Settings Changes | Changing billing, reducing users | High | Product/Backend |
| Integration Disconnected | Removed key integrations | Medium | Product/Backend |
| Mobile App Uninstall | App removed from device | Medium | Mobile Analytics |

### 2.2 Engagement Signals

| Signal | Description | Weight | Data Source |
|--------|-------------|--------|-------------|
| Email Unsubscribe | Opted out of communications | Medium | ESP |
| Email Non-Opens | 5+ consecutive emails unopened | Medium | ESP |
| Support Ticket Spike | 3+ tickets in 7 days | High | Support System |
| Negative Survey Response | NPS <6, CSAT <3 | High | Survey Tool |
| Community Post (Negative) | Complaint in forum/community | Medium | Community Platform |
| Social Media Complaint | Public negative mention | High | Social Listening |
| Webinar No-Show | Registered but didn't attend | Low | Marketing Platform |
| Training Incompletion | Started but didn't finish onboarding | Medium | LMS/Platform |

### 2.3 Transactional Signals

| Signal | Description | Weight | Data Source |
|--------|-------------|--------|-------------|
| Payment Failure | Failed charge attempt | Critical | Billing System |
| Payment Method Expiring | Card expires in <30 days | Medium | Billing System |
| Invoice Overdue | Unpaid invoice >7 days | High | Billing System |
| Downgrade Request | Requested plan downgrade | High | Sales/CRM |
| Discount Request | Asking for price reduction | Medium | Sales/CRM |
| Contract End Approaching | <60 days to contract end | Medium | CRM |
| Usage Below Plan | Using <50% of plan allowance | Medium | Product Analytics |
| Seat Reduction | Removed users from account | High | Admin Activity |

### 2.4 Relationship Signals

| Signal | Description | Weight | Data Source |
|--------|-------------|--------|-------------|
| No Contact in 60+ Days | No CS interaction | Medium | CRM |
| Champion Left | Key contact changed roles | High | CRM/LinkedIn |
| Company News (Negative) | Layoffs, funding issues, etc. | High | External Data |
| Competitor Evaluation | Detected via intent data | High | Sales Intelligence |
| Renewal Conversation Avoided | Not responding to renewal outreach | High | CRM |
| Slow Response Time | Taking >1 week to respond | Medium | CRM/Email |
| Meeting Cancellations | Repeatedly canceling check-ins | Medium | Calendar |

### 2.5 Customer Profile Signals

| Signal | Description | Weight | Data Source |
|--------|-------------|--------|-------------|
| Short Tenure | <90 days as customer | Medium | CRM |
| Small Account | <5 users, low ARR | Medium | CRM |
| Price Sensitive | Always on discount, complained about price | Medium | CRM |
| Low Fit Score | Poor ICP match | Medium | Scoring System |
| Single Product User | Only using 1 product/module | Low | Product Analytics |
| No Training Completed | Didn't attend onboarding | Medium | LMS |
| Self-Serve Only | Never engaged with CS/sales | Low | CRM |

---

## 3. Scoring Model

### 3.1 Risk Score Calculation

```
Churn Risk Score (0-100) = Σ(Signal Weight × Signal Value)

Signal Values:
- Not Present: 0
- Present: 1
- Severity Multiplier: 0.5x, 1x, 1.5x, 2x

Weight Categories:
- Critical: 25 points
- High: 15 points
- Medium: 8 points
- Low: 3 points

Maximum Possible Score: 100+
Capped at: 100
```

### 3.2 Scoring Matrix

| Signal Category | Specific Signal | Weight | Max Points |
|-----------------|-----------------|--------|------------|
| Behavioral | Export data activity | Critical | 25 |
| Behavioral | Login decline >75% | High | 15 |
| Behavioral | No key action 14+ days | High | 15 |
| Behavioral | Session duration <25% | Medium | 8 |
| Engagement | Negative survey (NPS 0-3) | High | 15 |
| Engagement | Support ticket spike | High | 15 |
| Engagement | Email unsubscribe | Medium | 8 |
| Transactional | Payment failure | Critical | 25 |
| Transactional | Downgrade request | High | 15 |
| Transactional | Invoice overdue 14+ days | High | 15 |
| Relationship | Champion departed | High | 15 |
| Relationship | Competitor evaluation | High | 15 |
| Relationship | No contact 90+ days | Medium | 8 |
| Profile | Tenure <30 days | Medium | 8 |
| Profile | Low fit score | Medium | 8 |

### 3.3 Score Calculation Example

```
Customer: Acme Corp

Signals Detected:
✓ Login frequency down 60% (High) = 15 points
✓ No key action in 10 days (High) = 15 points
✓ Negative NPS survey, score 4 (High) = 15 points
✓ Payment failed once (Critical) = 25 points
✓ Champion left company (High) = 15 points

Total Score: 85/100
Risk Segment: HIGH (70-89)
Recommended Action: Priority outreach within 24 hours
```

### 3.4 Score Decay

```
Signal Decay Schedule:
- Critical signals: No decay (until resolved)
- High signals: 50% weight after 14 days
- Medium signals: 50% weight after 7 days
- Low signals: 50% weight after 3 days

Resolution Credit:
- Signal resolved: -100% of signal points immediately
- Positive counter-signal: -25% of risk score
```

---

## 4. Intervention Tactics

### 4.1 Intervention Matrix by Risk Level

| Risk Level | Response Time | Primary Tactic | Secondary Tactic | Escalation |
|------------|---------------|----------------|------------------|------------|
| Critical (90-100) | <4 hours | Executive call | Custom retention offer | CEO/Founder |
| High (70-89) | <24 hours | CSM call + meeting | Targeted offer | VP Customer |
| Medium (40-69) | <72 hours | Personalized email | Automated nurture | CSM |
| Low (10-39) | <7 days | Automated email | Monitor | None |

### 4.2 Intervention Playbook

#### Critical Risk (90-100)

**Day 0 (Same Day):**
- [ ] Executive outreach (CEO/VP level)
- [ ] Schedule emergency call within 24 hours
- [ ] Prepare custom retention package
- [ ] Review account history and issues

**Day 1:**
- [ ] Hold retention call
- [ ] Identify root cause
- [ ] Present custom solution
- [ ] Document commitment

**Day 2-7:**
- [ ] Implement agreed solutions
- [ ] Daily check-ins
- [ ] Escalate any blockers
- [ ] Confirm satisfaction

**Day 14:**
- [ ] Follow-up call
- [ ] Verify risk signals resolved
- [ ] Update risk score

#### High Risk (70-89)

**Day 0-1:**
- [ ] CSM personal outreach (call + email)
- [ ] Schedule check-in meeting
- [ ] Review account health

**Day 2-5:**
- [ ] Hold check-in meeting
- [ ] Address concerns
- [ ] Offer targeted incentive if appropriate

**Day 7:**
- [ ] Follow-up email
- [ ] Confirm action items completed
- [ ] Update risk score

**Day 14:**
- [ ] Check-in on progress
- [ ] Verify engagement improving

#### Medium Risk (40-69)

**Day 0-2:**
- [ ] Personalized email from CSM
- [ ] Offer help/resources

**Day 3-7:**
- [ ] Automated nurture sequence
- [ ] Feature adoption emails
- [ ] Success story sharing

**Day 14:**
- [ ] Automated check-in
- [ ] Update risk score

#### Low Risk (10-39)

**Ongoing:**
- [ ] Monitor for signal changes
- [ ] Include in regular communications
- [ ] No direct intervention needed

### 4.3 Retention Offers by Risk Level

| Risk Level | Offer Type | Discount Range | Approval Required |
|------------|------------|----------------|-------------------|
| Critical | Custom package | 30-50% + extras | VP+ |
| Critical | Extended contract | 20-30% discount | VP+ |
| High | Retention discount | 20-30% | Director+ |
| High | Free months | 2-3 months | Director+ |
| Medium | Targeted discount | 10-20% | Manager+ |
| Medium | Free upgrade | 1-2 months | Manager+ |
| Low | Standard offer | 5-10% | Automated |

### 4.4 Intervention Scripts

#### Critical Risk Call Opening

```
"Hi {{first_name}}, this is {{exec_name}}, {{title}} at {{company}}.

I'll be direct—I saw some concerning activity on your account, 
and I wanted to reach out personally.

Your satisfaction is our top priority, and it seems like we might 
not be meeting your expectations.

Do you have 15 minutes to talk about what's going on and how we 
can make this right?

I'm not here to sell you anything. I just want to listen and 
figure out if there's a way to earn back your trust."
```

#### High Risk Email Template

```
Subject: {{first_name}}, I want to help

Hi {{first_name}},

This is {{csm_name}} from {{company_name}}. I've been reviewing 
your account, and I noticed a few things that concern me.

It looks like {{specific_observation}}, and I want to make sure 
you're getting the value you deserve from {{product_name}}.

Would you be open to a quick 20-minute call this week? I'd love to:
1. Hear how things are going
2. Understand any challenges you're facing
3. See if there's anything we can do to help

[Book a Time] button → {{calendar_link}}

Or just reply to this email. Either way, I'm here for you.

Best,
{{csm_name}}
Customer Success Manager
```

---

## 5. Model Implementation

### 5.1 Data Requirements

| Data Source | Required Fields | Update Frequency |
|-------------|-----------------|------------------|
| Product Analytics | User ID, login timestamp, feature usage, session duration | Real-time |
| Billing System | Payment status, plan, MRR, payment failures | Real-time |
| CRM | Contact info, tenure, interactions, notes | Daily |
| Support System | Ticket count, CSAT, resolution time | Daily |
| Survey Tool | NPS, CSAT, feedback text | Real-time |
| Email Platform | Open rate, click rate, unsubscribe | Daily |
| External Data | Company news, intent signals | Weekly |

### 5.2 Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CHURN PREDICTION PIPELINE                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐        │
│  │   Data       │ → │   Feature    │ → │   Model      │        │
│  │   Sources    │   │   Engine     │   │   Scoring    │        │
│  └──────────────┘   └──────────────┘   └──────────────┘        │
│         ↓                   ↓                   ↓                │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐        │
│  │   Real-time  │   │   Signal     │   │   Risk       │        │
│  │   Events     │   │   Detection  │   │   Scores     │        │
│  └──────────────┘   └──────────────┘   └──────────────┘        │
│                                                  ↓               │
│                                          ┌──────────────┐       │
│                                          │   Alert      │       │
│                                          │   System     │       │
│                                          └──────────────┘       │
│                                                  ↓               │
│                                          ┌──────────────┐       │
│                                          │   Intervention│       │
│                                          │   Workflow   │       │
│                                          └──────────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Model Training

| Phase | Activities | Duration |
|-------|------------|----------|
| Data Collection | Historical churn data, signal extraction | 2-4 weeks |
| Feature Engineering | Signal weighting, normalization | 1-2 weeks |
| Model Training | Logistic regression, random forest, XGBoost | 1-2 weeks |
| Validation | Cross-validation, holdout testing | 1 week |
| Calibration | Score calibration, threshold tuning | 1 week |
| Deployment | Integration, alert setup | 1-2 weeks |

### 5.4 Model Evaluation Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Accuracy | (TP + TN) / Total | 85%+ |
| Precision | TP / (TP + FP) | 80%+ |
| Recall | TP / (TP + FN) | 75%+ |
| F1 Score | 2 × (Precision × Recall) / (Precision + Recall) | 77%+ |
| AUC-ROC | Area under ROC curve | 0.85+ |
| Lead Time | Days between prediction and churn | 30+ days |

---

## 6. Monitoring & Optimization

### 6.1 Model Performance Dashboard

| Metric | Current | Target | Trend |
|--------|---------|--------|-------|
| Prediction Accuracy | ___% | 85%+ | ↑ → ↓ |
| True Positive Rate | ___% | 75%+ | ↑ → ↓ |
| False Positive Rate | ___% | <15% | ↑ → ↓ |
| Average Lead Time | ___ days | 30+ | ↑ → ↓ |
| Intervention Success | ___% | 40%+ | ↑ → ↓ |
| Customers Saved | ___ | ___ | ↑ → ↓ |
| Revenue Saved | $___ | $___ | ↑ → ↓ |

### 6.2 Signal Performance Tracking

| Signal | Detection Rate | Precision | Action |
|--------|----------------|-----------|--------|
| Login decline | ___% | ___% | Keep/Adjust/Remove |
| Payment failure | ___% | ___% | Keep/Adjust/Remove |
| Negative survey | ___% | ___% | Keep/Adjust/Remove |
| Support spike | ___% | ___% | Keep/Adjust/Remove |
| Export activity | ___% | ___% | Keep/Adjust/Remove |

### 6.3 Model Refresh Schedule

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Signal weight review | Monthly | Data Science |
| Threshold calibration | Monthly | Data Science |
| Full retraining | Quarterly | Data Science |
| Feature engineering review | Quarterly | Data Science |
| Intervention effectiveness | Monthly | CS Operations |

### 6.4 Continuous Improvement

```
Feedback Loop:

1. PREDICT → Model generates risk scores
       ↓
2. INTERVENE → CS team takes action
       ↓
3. OUTCOME → Customer stays or churns
       ↓
4. LEARN → Outcome fed back into model
       ↓
5. IMPROVE → Model retrained with new data
       ↓
   (Repeat)
```

---

## 7. Alert System

### 7.1 Alert Channels

| Channel | Use Case | Recipients | SLA |
|---------|----------|------------|-----|
| Slack | Critical/High risk | CS team, managers | Immediate |
| Email | All risk levels | CSM, account owner | <4 hours |
| CRM Task | All risk levels | CSM | <24 hours |
| SMS | Critical only | CSM, manager | Immediate |
| Dashboard | All levels | Leadership | Real-time |

### 7.2 Alert Template

```
┌─────────────────────────────────────────────────────────────────┐
│  🚨 CHURN RISK ALERT                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Customer: {{company_name}}                                     │
│  Risk Score: {{score}}/100 ({{risk_level}})                     │
│  ARR at Risk: ${{arr}}                                          │
│  Primary Contact: {{contact_name}} ({{email}})                  │
│  CSM: {{csm_name}}                                              │
│                                                                  │
│  Top Risk Signals:                                              │
│  ⚠️ {{signal_1}}                                                │
│  ⚠️ {{signal_2}}                                                │
│  ⚠️ {{signal_3}}                                                │
│                                                                  │
│  Recommended Action: {{recommended_action}}                     │
│  Response SLA: {{sla}}                                          │
│                                                                  │
│  [View Account] → {{crm_link}}                                  │
│  [Log Intervention] → {{intervention_link}}                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Alert Routing Rules

| Condition | Route To | Escalate After |
|-----------|----------|----------------|
| Score 90-100 | CSM + Manager + VP | 4 hours |
| Score 70-89 | CSM + Manager | 24 hours |
| Score 40-69 | CSM | 72 hours |
| Score 10-39 | CSM | No escalation |
| Payment failure | CSM + Billing | 4 hours |
| Champion departed | CSM + Manager | 24 hours |
| Competitor evaluation | Sales + CS | 24 hours |

---

## 8. Governance

### 8.1 Roles & Responsibilities

| Role | Responsibilities | Owner |
|------|-----------------|-------|
| Model Owner | Model performance, retraining | Data Science Lead |
| Alert Manager | Alert configuration, routing | CS Operations |
| Intervention Lead | Playbook effectiveness | VP Customer Success |
| Data Engineer | Data pipeline, quality | Engineering |
| CSM | Intervention execution | Customer Success |

### 8.2 Review Cadence

| Meeting | Frequency | Attendees | Agenda |
|---------|-----------|-----------|--------|
| Model Performance | Weekly | Data Science, CS Ops | Accuracy, alerts, interventions |
| Intervention Review | Weekly | CS Team | Saved customers, learnings |
| Model Optimization | Monthly | Data Science, Leadership | Feature updates, threshold changes |
| Strategic Review | Quarterly | Leadership | ROI, program effectiveness |

### 8.3 Success Criteria

| Timeframe | Success Metrics |
|-----------|-----------------|
| 30 days | Model deployed, baseline accuracy established |
| 90 days | 70%+ prediction accuracy, intervention workflow operational |
| 6 months | 80%+ accuracy, 30%+ intervention success rate |
| 12 months | 85%+ accuracy, 40%+ intervention success, measurable churn reduction |

---

**Model Owner:** ________________  
**Last Retraining Date:** ________________  
**Next Review Date:** ________________
