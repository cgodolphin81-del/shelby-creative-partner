# 08. Project Management

Tools, timelines, communication frameworks, and scope creep prevention.

---

## PM Overview

```
PROJECT MANAGEMENT LIFECYCLE

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  INITIATION │ →  │  PLANNING   │ →  │  EXECUTION  │
│  - Kickoff  │    │  - Schedule │    │  - Sprints  │
│  - Team     │    │  - Resources│    │  - Delivery │
│  - Goals    │    │  - Budget   │    │  - Monitor  │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
                                              ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   CLOSEOUT  │ ←  │   REVIEW    │ ←  │   CONTROL   │
│  - Handoff  │    │  - Lessons  │    │  - Changes  │
│  - Archive  │    │  - Metrics  │    │  - Quality  │
│  - Celebrate│    │  - Feedback │    │  - Risks    │
└─────────────┘    └─────────────┘    └─────────────┘
```

---

## Project Management Tools

### Recommended Stack

| Tool | Purpose | Cost | Best For |
|------|---------|------|----------|
| **Linear** | Issue tracking | $12-20/user/mo | Startups, fast-moving teams |
| **Jira** | Issue tracking | $8-15/user/mo | Enterprise, complex workflows |
| **Asana** | Project management | $11-25/user/mo | General PM, non-technical |
| **ClickUp** | All-in-one | $7-19/user/mo | Budget-conscious, feature-rich |
| **Notion** | Documentation | $8-15/user/mo | Wiki, docs, light PM |
| **Slack** | Communication | $8-15/user/mo | Team chat |
| **Zoom** | Video calls | $15/mo | Client meetings |
| **Figma** | Design collaboration | $12-45/user/mo | Design handoff |
| **GitHub** | Code + project board | Free-$21/user/mo | Dev-centric teams |

### Our Recommendation: Linear + Slack + Figma

**Why Linear:**
- Fast, intuitive interface
- Built for software teams
- Great keyboard shortcuts
- Cycles (sprints) built-in
- GitHub integration
- Clean, minimal design

---

## Project Setup Checklist

### Pre-Kickoff (Before Day 1)

- [ ] Contract signed
- [ ] Deposit received
- [ ] Project created in PM tool
- [ ] Team assigned
- [ ] Client contacts confirmed
- [ ] Communication channels set up
- [ ] Access requests sent (repos, design, etc.)
- [ ] Kickoff meeting scheduled

### Kickoff Meeting (Day 1)

**Attendees:**
- Client: Decision maker, technical contact, end users (optional)
- Agency: PM, Tech Lead, Designer (if applicable)

**Agenda (60-90 minutes):**

| Time | Topic | Owner |
|------|-------|-------|
| 0-10 min | Introductions | PM |
| 10-20 min | Project overview & goals | Client |
| 20-30 min | Success metrics | Both |
| 30-45 min | Timeline & milestones | PM |
| 45-55 min | Communication plan | PM |
| 55-65 min | Tools & access | PM |
| 65-75 min | Risks & concerns | Both |
| 75-90 min | Q&A | Both |

**Kickoff Deck Template:**
1. Welcome & introductions
2. Project overview
3. Goals & success metrics
4. Timeline & milestones
5. Team introductions
6. Communication plan
7. Tools & processes
8. Next steps
9. Q&A

### Post-Kickoff

- [ ] Kickoff notes sent within 24 hours
- [ ] Project board shared with client
- [ ] Access granted to all tools
- [ ] Sprint 1 planning scheduled
- [ ] Client added to communication channels

---

## Timeline Templates

### MVP Timeline (8 weeks)

```
Week 1-2: Discovery & Design
├─ Requirements finalization
├─ Wireframes
├─ Visual design (key screens)
└─ Technical architecture

Week 3-6: Development Sprint 1-2
├─ Core features
├─ Authentication
├─ Main user flows
└─ Basic testing

Week 7: Development Sprint 3 + QA
├─ Remaining features
├─ Bug fixes
├─ Performance optimization
└─ QA testing

Week 8: Launch Prep
├─ Final testing
├─ App Store submission
├─ Client training
└── Launch!
```

### Standard Build Timeline (14 weeks)

```
Week 1-2: Discovery
├─ Requirements workshops
├─ User research
├─ Wireframes
└─ Technical specification

Week 3-4: Design
├─ Visual design system
├─ All screens designed
├─ Prototype
└─ Design approval

Week 5-12: Development (4 sprints)
├─ Sprint 1: Foundation + auth
├─ Sprint 2: Core features
├─ Sprint 3: Advanced features
├─ Sprint 4: Polish + integrations
└─ Ongoing QA

Week 13: QA & UAT
├─ Comprehensive testing
├─ Bug fixes
├─ Client UAT
└─ Performance optimization

Week 14: Launch
├─ App Store submission
├─ Marketing assets
├─ Handoff documentation
└── Launch!
```

### Enterprise Build Timeline (20 weeks)

```
Week 1-3: Discovery
├─ Stakeholder interviews
├─ Requirements documentation
├─ Technical architecture
├─ Security review
└─ Project plan

Week 4-6: Design
├─ Design system
├─ All user flows
├─ Interactive prototype
├─ Accessibility review
└─ Design sign-off

Week 7-18: Development (6 sprints)
├─ Sprint 1-2: Foundation
├─ Sprint 3-4: Core features
├─ Sprint 5-6: Advanced features
└─ Continuous QA

Week 19: Testing & UAT
├─ System integration testing
├─ Security testing
├─ Performance testing
├─ Client UAT
└─ Bug fixes

Week 20: Launch
├─ Staged rollout
├─ Monitoring
├─ Training
└── Full launch
```

---

## Communication Plan

### Communication Matrix

| Audience | Channel | Frequency | Owner | Content |
|----------|---------|-----------|-------|---------|
| Client stakeholders | Email + Zoom | Weekly | PM | Status report, blockers |
| Client technical | Slack | Daily/As needed | Tech Lead | Technical questions |
| Internal team | Slack + Standup | Daily | PM/TL | Progress, blockers |
| Executive sponsor | Email | Bi-weekly | Account Director | High-level status |
| All hands | Zoom | Sprint boundaries | PM | Demo, retrospective |

### Status Report Template

**Send every Friday**

```markdown
# Weekly Status Report - [Project Name]
**Week of:** [Date]
**Report #:** [X]

## 🟢 Status Summary
Overall: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

## ✅ Completed This Week
- [Item 1]
- [Item 2]
- [Item 3]

## 📋 Planned for Next Week
- [Item 1]
- [Item 2]
- [Item 3]

## 🚧 Blockers/Risks
| Issue | Impact | Owner | Resolution Plan |
|-------|--------|-------|-----------------|
| [Blocker] | [High/Med/Low] | [Name] | [Plan] |

## 📊 Timeline Status
- Original completion: [Date]
- Current forecast: [Date]
- Variance: [+/- X days]

## 💰 Budget Status
- Total budget: $[X]
- Spent to date: $[X] ([X]%)
- Forecast at completion: $[X]
- Variance: [+/- $X]

## 📝 Notes/Decisions Needed
- [Decision 1] - Need by [date]
- [Decision 2] - Need by [date]

## 📎 Attachments
- [Link to sprint board]
- [Link to designs]
- [Link to build]
```

### Meeting Cadence

| Meeting | Frequency | Duration | Attendees |
|---------|-----------|----------|-----------|
| Daily Standup | Daily | 15 min | Dev team |
| Sprint Planning | Every 2 weeks | 2 hours | Team + client (optional) |
| Sprint Review | Every 2 weeks | 1 hour | Team + client |
| Sprint Retro | Every 2 weeks | 45 min | Team only |
| Client Check-in | Weekly | 30 min | PM + client |
| Steering Committee | Monthly | 1 hour | Executives + PM |

---

## Scope Creep Prevention

### Common Scope Creep Scenarios

| Scenario | Prevention | Response |
|----------|------------|----------|
| "Can we just add one small feature?" | Clear requirements doc | "Let's assess impact and create a change order" |
| "The design looks different than I imagined" | Design approval before dev | "We can revise in next phase, here's the estimate" |
| "Our competitor just launched X" | Focus on MVP goals | "Great insight! Let's add to phase 2 backlog" |
| "Can you also build the admin panel?" | Detailed SOW | "That's out of scope, but here's a proposal" |
| "We need it 2 weeks earlier" | Realistic timeline | "We can cut scope or add resources, here are options" |

### Change Order Process

**Step 1: Change Request**
Client submits request (email, Slack, PM tool)

**Step 2: Impact Assessment**
Team estimates:
- Additional hours by role
- Timeline impact
- Dependencies affected
- Risks

**Step 3: Change Order Document**
```markdown
# CHANGE ORDER #[Number]

**Project:** [Name]
**Date:** [Date]
**Requested By:** [Name]

## Description
[Detailed description of change]

## Reason for Change
[Why this change is needed]

## Impact Assessment

### Timeline Impact
- Current completion: [Date]
- New completion: [Date]
- Delay: [X] days/weeks

### Cost Impact
- Additional hours: [X]
- Additional cost: $[X]
- New project total: $[X]

### Technical Impact
- [Any architectural changes]
- [Dependencies affected]
- [Risks introduced]

## Approval

Approved By: ___________________
Date: _________

Client Signature: _______________
Date: _________
```

**Step 4: Client Approval**
- Written approval required
- Work begins after approval
- Added to project budget/timeline

**Step 5: Implementation**
- Added to sprint backlog
- Tracked separately for reporting

### Change Order Log

| CO # | Date | Description | Cost Impact | Timeline Impact | Status |
|------|------|-------------|-------------|-----------------|--------|
| 001 | 2025-01-15 | Add social login | +$3,500 | +3 days | Approved |
| 002 | 2025-01-22 | Admin dashboard | +$15,000 | +2 weeks | Pending |

---

## Risk Management

### Risk Register Template

| Risk | Probability | Impact | Score | Mitigation | Owner |
|------|-------------|--------|-------|------------|-------|
| App Store rejection | Low | High | Medium | Follow guidelines, pre-review | PM |
| Key developer unavailable | Medium | High | High | Documentation, pair programming | Tech Lead |
| Third-party API changes | Medium | Medium | Medium | Abstraction layer, monitoring | Developer |
| Scope creep | High | High | High | Change order process | PM |
| Client delays feedback | Medium | Medium | Medium | Clear SLAs, escalate early | PM |
| Performance issues | Medium | High | High | Early profiling, budgets | Tech Lead |

**Risk Score:** Probability × Impact (1-5 scale)

**Review Cadence:**
- New risks: As identified
- Existing risks: Weekly in team meeting
- Client-facing risks: In weekly status

### Escalation Path

```
Issue identified
       │
       ▼
┌──────────────┐
│   Developer  │ → Resolve within 4 hours
│   or Team    │
└──────┬───────┘
       │
       ▼ (Not resolved)
┌──────────────┐
│  Tech Lead   │ → Resolve within 24 hours
│  or PM       │
└──────┬───────┘
       │
       ▼ (Not resolved)
┌──────────────┐
│  Account     │ → Client communication
│  Director    │
└──────┬───────┘
       │
       ▼ (Major issue)
┌──────────────┐
│   Founder    │ → Executive decision
└──────────────┘
```

**Escalation Triggers:**
- Blocker > 4 hours
- Timeline slip > 1 week
- Budget overrun > 10%
- Client complaint
- Critical bug in production

---

## Quality Gates

### Phase Gate Checklist

**Discovery → Design**
- [ ] Requirements signed off
- [ ] User stories complete
- [ ] Technical architecture approved
- [ ] Success metrics defined

**Design → Development**
- [ ] All screens designed
- [ ] Design system documented
- [ ] Prototype reviewed
- [ ] Client design approval
- [ ] Assets exported

**Development → QA**
- [ ] All features implemented
- [ ] Unit tests passing
- [ ] Code review complete
- [ ] No critical bugs open
- [ ] Performance benchmarks met

**QA → UAT**
- [ ] QA testing complete
- [ ] Critical/high bugs fixed
- [ ] Test report generated
- [ ] Release notes prepared
- [ ] Staging deployment verified

**UAT → Launch**
- [ ] Client UAT sign-off
- [ ] All critical bugs resolved
- [ ] App Store assets ready
- [ ] Backend production-ready
- [ ] Monitoring configured
- [ ] Rollback plan documented

---

## Resource Management

### Team Allocation

**Utilization Tracking:**

| Team Member | Week 1 | Week 2 | Week 3 | Week 4 |
|-------------|--------|--------|--------|--------|
| John (Dev) | Project A | Project A | Project A | Project B |
| Sarah (Dev) | Project A | Project A | Project B | Project B |
| Mike (Des) | Project A | Project C | Project C | Project C |

**Capacity Planning:**
```
Available capacity per person: 40 hrs/week
Target utilization: 85% (34 hrs billable)
Buffer: 6 hrs/week (meetings, admin, bench)

Team of 4 developers:
- Total capacity: 160 hrs/week
- Billable target: 136 hrs/week
- Current allocation: 120 hrs/week
- Available for new work: 16 hrs/week
```

### Workload Balancing

**Signs of overload:**
- Consistent overtime
- Declining code quality
- Missed deadlines
- Team member complaints
- Increased bugs

**Signs of underload:**
- Team members asking for more work
- Low utilization (<70%)
- Boredom/disengagement
- Looking for other opportunities

**Balancing actions:**
- Reallocate tasks between team members
- Adjust sprint commitments
- Hire contractors for peaks
- Bring forward backlog items
- Invest in training during slow periods

---

## Client Management

### Setting Expectations

**Early Conversations:**

**Timeline:**
> "Based on similar projects, a realistic timeline is 12-14 weeks. We'll move as fast as possible while maintaining quality. Here's where delays typically happen..."

**Budget:**
> "The estimated investment is $85K-95K depending on final scope. We'll track this weekly and alert you if we're trending over. Change orders will be required for any scope additions."

**Communication:**
> "We'll have weekly status calls every Friday at 10am. For day-to-day questions, Slack is best. We typically respond within 2 hours during business hours."

**Feedback:**
> "We need feedback within 48 hours on deliverables to keep the timeline on track. If we don't hear back, we'll assume approval and move forward."

### Difficult Conversations

**Timeline Slip:**
> "I need to make you aware of a timeline risk. [Issue] has taken longer than expected. Our new forecast is [date], which is [X] days beyond our original target. Here's our plan to minimize further delay..."

**Budget Overrun:**
> "We're tracking to exceed the budget by approximately [X]%. This is due to [reason]. We have a few options: 1) Reduce scope by [features], 2) Increase budget, or 3) Extend timeline to reduce resource intensity. What's your preference?"

**Quality Issue:**
> "We discovered [issue] during testing. This is our responsibility, and we're fixing it at no cost. The impact is [X days delay]. Here's our remediation plan..."

**Client Delay:**
> "We're waiting on [deliverable/feedback] to proceed with [next task]. This is starting to impact our timeline. Can we prioritize getting this by [date]? If not, we may need to adjust the project schedule."

---

## Project Closure

### Handoff Checklist

- [ ] All features complete and tested
- [ ] Client training completed
- [ ] Source code transferred
- [ ] Credentials handed over
- [ ] Documentation delivered
- [ ] Third-party accounts transferred
- [ ] App Store access transferred
- [ ] Maintenance agreement signed (if applicable)
- [ ] Final invoice sent
- [ ] Project archive created
- [ ] Team retrospective completed
- [ ] Client feedback collected
- [ ] Case study approval requested

### Handoff Documentation

**Deliverables:**
1. Source code repository access
2. Build instructions
3. Deployment guide
4. API documentation
5. Admin user guide
6. Third-party service list
7. Credentials document (secure transfer)
8. Known issues/technical debt log
9. Maintenance recommendations

### Post-Launch Support

**Immediate (Week 1-2):**
- Daily monitoring
- Quick bug fixes
- App Store review responses
- Analytics review

**Transition (Week 3-4):**
- Weekly check-ins
- Bug fix SLA begins
- Maintenance team handoff
- First monthly report

**Ongoing:**
- Per maintenance agreement
- Monthly reports
- Quarterly strategy calls
- Annual review

---

## Metrics & Reporting

### Project Health Dashboard

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Schedule variance | 0% | +5% | 🟡 |
| Budget variance | 0% | -2% | 🟢 |
| Sprint velocity | 25 pts | 27 pts | 🟢 |
| Bug count (critical) | 0 | 0 | 🟢 |
| Bug count (high) | <5 | 3 | 🟢 |
| Client satisfaction | 4.5+ | 4.7 | 🟢 |
| Team utilization | 85% | 82% | 🟡 |

### Earned Value Management (Optional for Large Projects)

```
PV (Planned Value): Budget planned to spend
EV (Earned Value): Budget value of work completed
AC (Actual Cost): Actual amount spent

Schedule Performance Index (SPI) = EV / PV
> 1 = Ahead of schedule
< 1 = Behind schedule

Cost Performance Index (CPI) = EV / AC
> 1 = Under budget
< 1 = Over budget

Estimate at Completion (EAC) = Total Budget / CPI
```

---

## Templates & Resources

- [Project Charter Template](./templates/project-charter.md)
- [Status Report Template](./templates/status-report.md)
- [Change Order Template](./templates/change-order.md)
- [Risk Register Template](./templates/risk-register.md)
- [Handoff Checklist](./templates/handoff-checklist.md)

---

## Next Steps

1. Set up project in chosen PM tool
2. Create project plan with milestones
3. Schedule kickoff meeting
4. Establish communication cadence
5. Begin sprint cycle per [Development Process](./04-Development-Process.md)
