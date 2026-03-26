# Client Onboarding Framework

**Purpose:** Ensure smooth kickoff and set up for retention program success  
**Version:** 1.0  
**Last Updated:** [Date]

---

## 1. Onboarding Overview

### 1.1 Onboarding Timeline

```
Week 1: Discovery & Access
├─ Kickoff call
├─ Data access setup
├─ Stakeholder interviews scheduled
└─ Current state documentation

Week 2: Deep Dive
├─ Stakeholder interviews
├─ Data analysis begins
├─ Goal alignment
└─ Baseline metrics established

Week 3: Strategy Development
├─ Analysis synthesis
├─ Strategy formulation
├─ Initial recommendations
└─ Review preparation

Week 4: Alignment & Launch
├─ Strategy presentation
├─ Feedback incorporation
├─ Final plan approval
└─ Execution begins
```

### 1.2 Onboarding Checklist

| Phase | Task | Owner | Status | Due Date |
|-------|------|-------|--------|----------|
| Pre-Kickoff | Send welcome packet | Account Manager | □ | Day 1 |
| Pre-Kickoff | Schedule kickoff call | Account Manager | □ | Day 2 |
| Pre-Kickoff | Send data request list | Analyst | □ | Day 2 |
| Kickoff | Conduct kickoff meeting | Strategist | □ | Week 1 |
| Kickoff | Document goals & success metrics | Strategist | □ | Week 1 |
| Access | Obtain system access | Analyst | □ | Week 1 |
| Access | Verify data quality | Analyst | □ | Week 2 |
| Discovery | Conduct stakeholder interviews | Strategist | □ | Week 2 |
| Discovery | Document current processes | Analyst | □ | Week 2 |
| Analysis | Establish baseline metrics | Analyst | □ | Week 2 |
| Analysis | Identify quick wins | Strategist | □ | Week 3 |
| Planning | Develop retention strategy | Strategist | □ | Week 3 |
| Planning | Create implementation roadmap | Strategist | □ | Week 3 |
| Alignment | Present strategy & roadmap | Strategist | □ | Week 4 |
| Alignment | Incorporate feedback | Strategist | □ | Week 4 |
| Alignment | Get final approval | Account Manager | □ | Week 4 |
| Launch | Begin execution | Team | □ | Week 5 |

---

## 2. Data Access Requirements

### 2.1 Core Data Sources

| System | Data Needed | Access Type | Priority | Format |
|--------|-------------|-------------|----------|--------|
| CRM | Customer records, interactions, lifecycle stage | Read-only API or export | Critical | CSV/API |
| Billing/Payment | Subscription data, MRR, payment history, churn | Read-only API or export | Critical | CSV/API |
| Product Analytics | User behavior, feature usage, sessions | Read-only access | Critical | API/SQL |
| Email Platform | Email engagement, campaign history, lists | Read-only access | High | API/Export |
| Support System | Tickets, CSAT, resolution times | Read-only access | High | CSV/API |
| Survey Tool | NPS, CSAT, feedback responses | Read-only access | Medium | CSV/API |
| Website Analytics | Traffic, conversion, behavior flow | Read-only access | Medium | GA4 access |
| Data Warehouse | Unified customer data (if available) | Read-only SQL | Nice-to-have | SQL |

### 2.2 Data Request Template

```
Subject: Data Access Request - [Company Name] Retention Project

Hi [IT/Admin Contact],

As part of our retention optimization project, we need access to 
the following systems and data:

SYSTEM: [System Name]
ACCESS TYPE: [Read-only user / API credentials / Data export]
DATA NEEDED:
- [Specific data points]
- [Date range]
- [Update frequency]
CONTACT: [Your name/email]
DEADLINE: [Date]

Please let us know if you have any questions or concerns.

Thanks!
[Your Name]
```

### 2.3 Data Security Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| NDA signed | □ | Before any data access |
| Read-only access | □ | No write permissions |
| Encrypted transfer | □ | SFTP or secure API |
| Data retention policy | □ | 90 days post-project |
| PII handling | □ | Minimal PII, hashed where possible |
| Access logging | □ | Track who accesses what |
| Data deletion | □ | Certified deletion after project |

### 2.4 Data Quality Checklist

| Check | Status | Issues | Resolution |
|-------|--------|--------|------------|
| Completeness (no missing fields) | □ | | |
| Accuracy (spot-check verified) | □ | | |
| Consistency (standardized formats) | □ | | |
| Timeliness (recent data) | □ | | |
| Uniqueness (no duplicates) | □ | | |
| Validity (within expected ranges) | □ | | |

---

## 3. Goal Setting Framework

### 3.1 Goal Categories

| Category | Example Goals | Measurement |
|----------|---------------|-------------|
| Retention Rate | Reduce churn from 5% to 3% | Monthly churn rate |
| Revenue Retention | Increase NRR from 95% to 110% | Net Revenue Retention |
| Customer Lifetime | Extend LTV from 18 to 24 months | Customer lifetime calculation |
| Engagement | Increase DAU/MAU from 20% to 35% | Product analytics |
| Satisfaction | Improve NPS from 30 to 50 | Quarterly NPS survey |
| Expansion | Increase expansion revenue by 25% | Expansion MRR |
| Win-Back | Reactivate 15% of churned customers | Win-back rate |

### 3.2 Goal Setting Template

```
GOAL: [Specific, measurable objective]

CURRENT STATE:
- Baseline metric: ___
- Measurement method: ___
- Data source: ___

TARGET STATE:
- Target metric: ___
- Target date: ___
- Success criteria: ___

BUSINESS IMPACT:
- Revenue impact: $___
- Customer impact: ___ customers
- Strategic importance: High/Medium/Low

KEY DRIVERS:
1. [Driver 1]
2. [Driver 2]
3. [Driver 3]

LEADING INDICATORS:
1. [Indicator 1] - Target: ___
2. [Indicator 2] - Target: ___
3. [Indicator 3] - Target: ___

OWNERSHIP:
- Executive sponsor: ___
- Project owner: ___
- Team members: ___

RISKS & DEPENDENCIES:
- [Risk 1]: Mitigation: ___
- [Risk 2]: Mitigation: ___
- [Dependency 1]: Owner: ___
```

### 3.3 SMART Goals Worksheet

| Goal Element | Your Answer |
|--------------|-------------|
| Specific: What exactly do you want to achieve? | |
| Measurable: How will you measure success? | |
| Achievable: Is this realistic given resources? | |
| Relevant: Does this align with business objectives? | |
| Time-bound: What is the deadline? | |

### 3.4 Goal Prioritization Matrix

```
                    HIGH IMPACT
                        │
            ┌───────────┼───────────┐
            │   DO      │  PLAN     │
            │   FIRST   │           │
            │   (P1)    │  (P2)     │
            │           │           │
LOW EFFORT ─┼───────────┼───────────┼─ HIGH EFFORT
            │           │           │
            │  QUICK    │   AVOID   │
            │  WINS     │   (P4)    │
            │  (P3)     │           │
            │           │           │
            └───────────┼───────────┘
                        │
                    LOW IMPACT

Place each goal in the appropriate quadrant.
Focus on P1 (High Impact, Low Effort) first.
```

---

## 4. Current Metrics Assessment

### 4.1 Retention Metrics Baseline

| Metric | Current Value | Calculation | Data Source | Trend |
|--------|---------------|-------------|-------------|-------|
| Customer Count | ___ | Total active customers | CRM | ↑ → ↓ |
| Monthly Churn Rate | ___% | Churned / Start of month | Billing | ↑ → ↓ |
| Annual Churn Rate | ___% | 1 - (1 - monthly)^12 | Calculated | ↑ → ↓ |
| Customer Lifetime | ___ mo | 1 / Monthly churn rate | Calculated | ↑ → ↓ |
| Monthly Revenue Retention | ___% | (MRR_end - MRR_churn) / MRR_start | Billing | ↑ → ↓ |
| Net Revenue Retention | ___% | (MRR_end + MRR_expand - MRR_churn) / MRR_start | Billing | ↑ → ↓ |
| Average Revenue Per User | $___ | MRR / Customers | Billing | ↑ → ↓ |
| Customer Lifetime Value | $___ | ARPU × Lifetime | Calculated | ↑ → ↓ |
| Logo Retention Rate | ___% | Customers retained / Start customers | CRM | ↑ → ↓ |

### 4.2 Engagement Metrics Baseline

| Metric | Current Value | Target | Data Source |
|--------|---------------|--------|-------------|
| Daily Active Users (DAU) | ___ | ___ | Product Analytics |
| Monthly Active Users (MAU) | ___ | ___ | Product Analytics |
| DAU/MAU Ratio | ___% | ___% | Product Analytics |
| Session Duration (avg) | ___ min | ___ min | Product Analytics |
| Sessions Per User (weekly) | ___ | ___ | Product Analytics |
| Feature Adoption Rate | ___% | ___% | Product Analytics |
| Time to First Value | ___ days | ___ days | Product Analytics |
| Onboarding Completion | ___% | ___% | Product Analytics |

### 4.3 Satisfaction Metrics Baseline

| Metric | Current Value | Target | Frequency |
|--------|---------------|--------|-----------|
| Net Promoter Score (NPS) | ___ | ___ | Quarterly |
| Customer Satisfaction (CSAT) | ___% | ___% | Per interaction |
| Customer Effort Score (CES) | ___ | ___ | Per interaction |
| Support Ticket Volume | ___/mo | ___/mo | Ongoing |
| First Response Time | ___ hrs | ___ hrs | Ongoing |
| Resolution Time (avg) | ___ hrs | ___ hrs | Ongoing |
| Churn Reason - Top 1 | ___% | — | Exit survey |
| Churn Reason - Top 2 | ___% | — | Exit survey |
| Churn Reason - Top 3 | ___% | — | Exit survey |

### 4.4 Financial Metrics Baseline

| Metric | Current Value | Target | Notes |
|--------|---------------|--------|-------|
| Monthly Recurring Revenue (MRR) | $___ | $___ | |
| Annual Recurring Revenue (ARR) | $___ | $___ | |
| Customer Acquisition Cost (CAC) | $___ | $___ | |
| LTV:CAC Ratio | ___:1 | 3:1 | |
| Payback Period | ___ months | <12 | |
| Gross Margin | ___% | ___% | |
| Expansion Revenue | $___/mo | $___/mo | |
| Contraction Revenue | $___/mo | $___/mo | |

---

## 5. Stakeholder Interview Guide

### 5.1 Executive Interview (CEO/Founder)

**Duration:** 45-60 minutes

**Questions:**
1. What does success look like for this retention initiative?
2. What are the top 3 business priorities for the next 12 months?
3. How does retention fit into the overall company strategy?
4. What's your biggest concern about customer retention today?
5. What resources are available for this initiative?
6. What would make this project a home run for you?
7. Are there any constraints we should be aware of?
8. How do you prefer to receive updates?

### 5.2 Customer Success Interview

**Duration:** 45 minutes

**Questions:**
1. Walk me through the typical customer journey.
2. What are the most common reasons customers churn?
3. What signals tell you a customer is at risk?
4. What's working well in retention today?
5. What's not working?
6. What tools and systems do you use?
7. What would make your job easier?
8. What customer feedback do you hear most often?
9. How do you currently handle at-risk customers?
10. What's the one thing we should focus on first?

### 5.3 Product Interview

**Duration:** 45 minutes

**Questions:**
1. What are the key "aha moment" features?
2. What usage patterns correlate with retention?
3. What features do power users use most?
4. What's the product roadmap for the next 6 months?
5. What analytics tools do you use?
6. What customer feedback influences the roadmap?
7. Are there any planned features that could impact retention?
8. What's the biggest product-related churn driver?

### 5.4 Marketing Interview

**Duration:** 45 minutes

**Questions:**
1. What lifecycle emails are currently running?
2. What's the email engagement like (open/click rates)?
3. What segments do you market to?
4. What win-back campaigns exist today?
5. What marketing automation tools do you use?
6. How do you currently handle re-engagement?
7. What's worked best for retention marketing?
8. What hasn't worked?

### 5.5 Sales Interview

**Duration:** 30 minutes

**Questions:**
1. What's the typical sales cycle?
2. What does an ideal customer look like?
3. What objections do you hear about pricing/value?
4. How do you set expectations during the sale?
5. What's the handoff process to CS?
6. Do you hear about churn from prospects?
7. What expansion opportunities exist?

### 5.6 Support Interview

**Duration:** 30 minutes

**Questions:**
1. What are the most common support issues?
2. What's the average resolution time?
3. How do you measure support satisfaction?
4. What issues escalate most often?
5. Do you see patterns in churned customers' tickets?
6. What tools do you use?
7. What would improve the support experience?

---

## 6. Current State Documentation

### 6.1 Process Mapping

| Process | Owner | Documentation Status | Gaps Identified |
|---------|-------|---------------------|-----------------|
| Onboarding | | □ Documented □ Not documented | |
| Renewal | | □ Documented □ Not documented | |
| Escalation | | □ Documented □ Not documented | |
| Win-back | | □ Documented □ Not documented | |
| Expansion | | □ Documented □ Not documented | |
| Churn analysis | | □ Documented □ Not documented | |

### 6.2 Technology Stack

| Category | Tool | Usage | Satisfaction (1-10) | Replacement Planned? |
|----------|------|-------|---------------------|---------------------|
| CRM | | | | |
| Email Marketing | | | | |
| Product Analytics | | | | |
| Support | | | | |
| Survey | | | | |
| Billing | | | | |
| Data Warehouse | | | | |
| Marketing Automation | | | | |

### 6.3 Team Structure

| Role | Name | Time on Retention | Key Responsibilities |
|------|------|-------------------|---------------------|
| | | | |
| | | | |
| | | | |

### 6.4 Current Initiatives

| Initiative | Owner | Status | Expected Impact | Timeline |
|------------|-------|--------|-----------------|----------|
| | | Not Started / In Progress / Complete | | |
| | | Not Started / In Progress / Complete | | |
| | | Not Started / In Progress / Complete | | |

---

## 7. Communication Plan

### 7.1 Meeting Cadence

| Meeting | Frequency | Duration | Attendees | Agenda |
|---------|-----------|----------|-----------|--------|
| Kickoff | One-time | 60 min | All stakeholders | Goals, timeline, roles |
| Weekly Check-in | Weekly | 30 min | Core team | Progress, blockers |
| Executive Update | Bi-weekly | 30 min | Executives | High-level progress |
| Working Session | As needed | 60 min | Relevant team | Deep dives |
| Monthly Review | Monthly | 60 min | All stakeholders | Results, adjustments |
| Quarterly Business Review | Quarterly | 90 min | All stakeholders | Strategic review |

### 7.2 Communication Channels

| Channel | Purpose | Frequency | Owner |
|---------|---------|-----------|-------|
| Email | Formal updates, decisions | As needed | Account Manager |
| Slack | Day-to-day communication | Daily | Project Manager |
| Shared Drive | Document storage | Ongoing | Analyst |
| Dashboard | Metrics tracking | Real-time | Analyst |
| Project Tool | Task management | Ongoing | Project Manager |

### 7.3 Reporting Schedule

| Report | Frequency | Recipients | Format |
|--------|-----------|------------|--------|
| Progress Update | Weekly | Core team | Email/Slack |
| Metrics Dashboard | Weekly | All stakeholders | Dashboard link |
| Executive Summary | Bi-weekly | Executives | 1-page doc |
| Monthly Performance | Monthly | All stakeholders | Deck + call |
| Quarterly Review | Quarterly | All stakeholders | Deck + workshop |

---

## 8. Success Criteria & KPIs

### 8.1 Project Success Metrics

| Metric | Baseline | Target | Measurement Method |
|--------|----------|--------|-------------------|
| Project on-time delivery | — | 100% | Timeline tracking |
| Stakeholder satisfaction | — | 8/10 | Post-project survey |
| Budget adherence | — | ±10% | Budget tracking |
| Adoption of recommendations | — | 80%+ | Implementation tracking |

### 8.2 Business Success Metrics

| Metric | Baseline | 90-Day Target | 180-Day Target |
|--------|----------|---------------|----------------|
| Churn rate | ___% | ___% | ___% |
| NRR | ___% | ___% | ___% |
| NPS | ___ | ___ | ___ |
| Engagement rate | ___% | ___% | ___% |
| Win-back rate | ___% | ___% | ___% |

---

## 9. Risk Management

### 9.1 Common Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Data access delays | Medium | High | Request early, escalate quickly |
| Stakeholder availability | Medium | Medium | Schedule early, record sessions |
| Data quality issues | High | High | Audit early, plan for cleanup |
| Scope creep | Medium | Medium | Clear scope doc, change process |
| Resource constraints | Medium | High | Prioritize, phase approach |
| Tool limitations | Low | Medium | Workarounds, recommend upgrades |

### 9.2 Escalation Path

| Issue Level | Contact | Response Time |
|-------------|---------|---------------|
| Routine | Project Manager | 24 hours |
| Urgent | Account Manager | 4 hours |
| Critical | Engagement Lead | 1 hour |
| Executive | VP/Partner | Immediate |

---

## 10. Onboarding Completion Checklist

### 10.1 Phase 1: Discovery (Week 1-2)

- [ ] Kickoff meeting completed
- [ ] All stakeholder interviews scheduled
- [ ] Data access requests submitted
- [ ] Welcome packet sent
- [ ] Communication channels established
- [ ] Project management tool set up

### 10.2 Phase 2: Analysis (Week 2-3)

- [ ] All data received and validated
- [ ] Stakeholder interviews completed
- [ ] Baseline metrics established
- [ ] Current state documented
- [ ] Quick wins identified
- [ ] Initial hypotheses formed

### 10.3 Phase 3: Strategy (Week 3-4)

- [ ] Retention strategy developed
- [ ] Implementation roadmap created
- [ ] Resource requirements defined
- [ ] Success metrics finalized
- [ ] Presentation prepared
- [ ] Feedback incorporated

### 10.4 Phase 4: Launch (Week 4)

- [ ] Strategy presentation delivered
- [ ] Final approval received
- [ ] Team roles confirmed
- [ ] Execution plan finalized
- [ ] First initiatives launched
- [ ] Onboarding complete!

---

**Onboarding Manager:** ________________  
**Client Onboarding Date:** ________________  
**Onboarding Complete Date:** ________________
