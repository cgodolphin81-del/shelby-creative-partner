# Project Management Framework

**Comprehensive project management methodology for cloud infrastructure and DevOps engagements**

---

## Executive Summary

This document outlines the project management framework used for all client engagements, including agile methodologies, incident response, and change management processes.

### Project Types & Methodologies

| Project Type | Methodology | Duration | Team Size |
|--------------|-------------|----------|-----------|
| Assessment | Waterfall | 2-6 weeks | 2-4 |
| Migration | Hybrid | 8-24 weeks | 4-10 |
| Infrastructure Setup | Agile | 4-12 weeks | 3-6 |
| CI/CD Implementation | Agile | 6-16 weeks | 2-5 |
| Managed Services | Continuous | Ongoing | 2-20 |

---

## 1. Project Lifecycle

### Phase 1: Initiation (Week 1)

```markdown
## Initiation Checklist

### Pre-Kickoff
- [ ] Contract signed
- [ ] Deposit received
- [ ] Project code created
- [ ] Team assigned
- [ ] Tools access provisioned

### Kickoff Meeting
**Attendees:**
- Client: Project Sponsor, Technical Lead, Key Stakeholders
- Our Team: Delivery Manager, Solutions Architect, Project Team

**Agenda:**
1. Introductions (10 min)
2. Project overview and goals (15 min)
3. Scope review (15 min)
4. Timeline and milestones (10 min)
5. Communication plan (10 min)
6. Q&A (15 min)

### Kickoff Deliverables
- Project charter
- RACI matrix
- Communication plan
- Initial project plan
- Risk register (initial)
```

### Phase 2: Planning (Weeks 2-3)

```markdown
## Planning Deliverables

### Project Plan
- Detailed work breakdown structure (WBS)
- Task dependencies
- Resource allocation
- Timeline with milestones
- Critical path identification

### Technical Plan
- Architecture diagrams
- Technical specifications
- Security requirements
- Compliance requirements
- Testing strategy

### Communication Plan
| Audience | Frequency | Format | Owner |
|----------|-----------|--------|-------|
| Executive Sponsor | Weekly | Email summary | Delivery Manager |
| Project Team | Daily | Standup | Tech Lead |
| Technical Stakeholders | Bi-weekly | Working session | Solutions Architect |
| All Stakeholders | Weekly | Status report | Delivery Manager |
| Steering Committee | Monthly | Presentation | Delivery Manager |

### Risk Management Plan
| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| [Risk 1] | High/Med/Low | High/Med/Low | [Mitigation] | [Name] |
| [Risk 2] | High/Med/Low | High/Med/Low | [Mitigation] | [Name] |
```

### Phase 3: Execution (Weeks 4-N)

```markdown
## Execution Framework

### Sprint Structure (2-week sprints for Agile projects)

#### Sprint Planning (Day 1)
- Review backlog
- Estimate stories
- Commit to sprint goals
- Assign tasks

#### Daily Standup (15 min)
- What did I do yesterday?
- What will I do today?
- Any blockers?

#### Sprint Review (Last day)
- Demo completed work
- Gather feedback
- Update backlog

#### Sprint Retrospective (Last day)
- What went well?
- What could be improved?
- Action items for next sprint

### Waterfall Milestones
| Milestone | Description | Exit Criteria |
|-----------|-------------|---------------|
| M1: Environment Ready | Target environment provisioned | All resources deployed, connectivity tested |
| M2: Migration Complete | All workloads migrated | Data validated, applications running |
| M3: Testing Complete | All tests passed | UAT sign-off, performance tests passed |
| M4: Go-Live | Production cutover | DNS switched, monitoring active |
| M5: Project Close | Documentation complete | All deliverables accepted |
```

### Phase 4: Monitoring & Control (Ongoing)

```markdown
## Monitoring Activities

### Weekly Status Report Template

**Project:** [Project Name]  
**Week Ending:** [Date]  
**Report #:** [X]

#### Executive Summary
[Brief 2-3 sentence summary of week's progress]

#### Progress This Week
| Workstream | Planned | Actual | Status |
|------------|---------|--------|--------|
| [Stream 1] | [Task] | [Task] | 🟢/🟡/🔴 |
| [Stream 2] | [Task] | [Task] | 🟢/🟡/🔴 |

#### Key Accomplishments
- [Accomplishment 1]
- [Accomplishment 2]
- [Accomplishment 3]

#### Upcoming Milestones
| Milestone | Target Date | Confidence |
|-----------|-------------|------------|
| [Milestone 1] | [Date] | High/Med/Low |
| [Milestone 2] | [Date] | High/Med/Low |

#### Risks & Issues
| ID | Description | Impact | Mitigation | Owner |
|----|-------------|--------|------------|-------|
| [X] | [Risk] | High/Med/Low | [Action] | [Name] |

#### Budget Status
| Category | Budget | Spent | Remaining | % Used |
|----------|--------|-------|-----------|--------|
| Labor | $XXX,XXX | $XX,XXX | $XX,XXX | XX% |
| Cloud Costs | $XX,XXX | $X,XXX | $X,XXX | XX% |
| **Total** | **$XXX,XXX** | **$XX,XXX** | **$XX,XXX** | **XX%** |

#### Requests/Decisions Needed
- [Decision 1] - Needed by [Date]
- [Decision 2] - Needed by [Date]
```

### Phase 5: Closure (Final Week)

```markdown
## Project Closure Checklist

### Technical Closure
- [ ] All deliverables completed
- [ ] All tests passed
- [ ] Documentation complete
- [ ] Access credentials transferred
- [ ] Monitoring configured
- [ ] Backup procedures verified
- [ ] Runbooks delivered

### Administrative Closure
- [ ] Final invoice submitted
- [ ] Contract obligations met
- [ ] Lessons learned documented
- [ ] Team released
- [ ] Resources decommissioned
- [ ] Archives created

### Client Handoff
- [ ] Training completed
- [ ] Support transitioned
- [ ] Contact information exchanged
- [ ] SLA confirmed (if applicable)
- [ ] Follow-up scheduled

### Closure Meeting
**Attendees:**
- Client: Project Sponsor, Technical Lead
- Our Team: Delivery Manager, Solutions Architect

**Agenda:**
1. Project summary and outcomes
2. Lessons learned
3. Next steps and recommendations
4. Formal acceptance
5. Celebration!
```

---

## 2. Agile Methodology

### Scrum Framework

```markdown
## Scrum Roles

### Product Owner (Client-side)
- Defines and prioritizes backlog
- Accepts or rejects work
- Available for questions
- Makes decisions on scope changes

### Scrum Master (Our Team)
- Facilitates scrum events
- Removes blockers
- Ensures process adherence
- Protects team from interruptions

### Development Team (Our Team)
- Self-organizing
- Cross-functional
- 5-9 members ideal
- Delivers working increments
```

### Sprint Cadence

```markdown
## 2-Week Sprint Calendar

### Week 1
| Day | Activity | Duration |
|-----|----------|----------|
| Monday | Sprint Planning | 2 hours |
| Monday-Friday | Daily Standup | 15 min |
| Wednesday | Backlog Refinement | 1 hour |
| Friday | Sprint Review | 1 hour |
| Friday | Retrospective | 1 hour |

### Week 2
| Day | Activity | Duration |
|-----|----------|----------|
| Monday-Friday | Daily Standup | 15 min |
| Wednesday | Backlog Refinement | 1 hour |
| Friday | Sprint Review | 1 hour |
| Friday | Retrospective | 1 hour |
| Friday | Next Sprint Planning | 2 hours |
```

### User Story Format

```markdown
## User Story Template

### Story
As a [type of user],
I want [goal/desire],
So that [benefit/value].

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### Technical Notes
[Implementation details, dependencies, etc.]

### Estimation
- Story Points: [X]
- Complexity: Low/Medium/High
- Risk: Low/Medium/High

### Definition of Done
- [ ] Code complete
- [ ] Tests written and passing
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] Product Owner approved
```

### Burndown Chart

```markdown
## Sprint Burndown Example

```
Story Points
  50 │*
     │ *
  40 │  *
     │   *
  30 │    *  *
     │       *
  20 │        *  *
     │           *
  10 │            *  *
     │               *
   0 └─────────────────*──
     1  3  5  7  9  11 14  Days
```

### Velocity Tracking

```markdown
## Velocity Chart

```
Points
  60 │
     │     ███
  50 │  ███ ███ ███
     │  ███ ███ ███ ███
  40 │  ███ ███ ███ ███ ███
     │  ███ ███ ███ ███ ███ ███
  30 │  ███ ███ ███ ███ ███ ███
     └─────────────────────────
        S1  S2  S3  S4  S5  S6  Sprints

Average Velocity: 45 points/sprint
```
```

---

## 3. Incident Response

### Incident Severity Levels

```markdown
## Severity Definitions

### SEV-1: Critical
**Definition:** Complete service outage, data loss, or security breach
**Response Time:** 15 minutes
**Examples:**
- Production system completely down
- Data breach or security incident
- Data loss confirmed
- Multiple customers affected

### SEV-2: High
**Definition:** Major functionality impaired, workaround available
**Response Time:** 1 hour
**Examples:**
- Major feature not working
- Performance severely degraded
- Single customer critical impact
- Security vulnerability identified

### SEV-3: Medium
**Definition:** Minor functionality impaired, workaround exists
**Response Time:** 4 hours
**Examples:**
- Non-critical feature not working
- Performance slightly degraded
- Minor bug affecting some users

### SEV-4: Low
**Definition:** Minimal impact, cosmetic issues
**Response Time:** 24 hours
**Examples:**
- UI cosmetic issues
- Documentation errors
- Feature requests
```

### Incident Response Process

```markdown
## Incident Response Workflow

### Detection
- Monitoring alerts
- Customer reports
- Internal discovery
- Automated detection

### Triage (Within 15 min for SEV-1/2)
1. Confirm incident
2. Assign severity level
3. Assign incident commander
4. Open incident channel
5. Notify stakeholders

### Response
1. Assemble response team
2. Diagnose root cause
3. Implement fix or workaround
4. Verify resolution
5. Monitor for recurrence

### Communication
| Time | Action | Audience |
|------|--------|----------|
| T+15 min | Initial acknowledgment | Affected customer |
| T+30 min | First update | Internal team |
| T+1 hour | Status update | Customer + stakeholders |
| T+2 hours | Status update | Customer + stakeholders |
| Resolution | Resolution notice | All parties |
| T+24 hours | Post-mortem scheduled | Internal team |

### Resolution
1. Confirm service restored
2. Verify no data loss
3. Document resolution
4. Close incident
5. Schedule post-mortem (for SEV-1/2)
```

### Incident Communication Templates

```markdown
## Initial Acknowledgment Template

Subject: [INCIDENT] Service Disruption - [Service Name]

Hi [Customer Name],

We're aware of an issue affecting [service/functionality]. 

**Impact:** [Brief description of impact]
**Status:** Investigating
**Next Update:** [Time]

Our team is actively working to resolve this. We'll provide 
updates every [X] hours or as new information becomes available.

Incident Reference: [INC-XXXX]

Best regards,
[Your Name]
[On-Call Engineer]
```

```markdown
## Resolution Template

Subject: [RESOLVED] Service Disruption - [Service Name]

Hi [Customer Name],

The issue affecting [service/functionality] has been resolved.

**Root Cause:** [Brief explanation]
**Resolution:** [What was done]
**Duration:** [Start time] - [End time] ([X] hours)
**Impact:** [Summary of impact]

**Next Steps:**
- We're conducting a post-mortem to prevent recurrence
- A detailed report will be shared within 5 business days
- [Any customer action required]

We apologize for the disruption and appreciate your patience.

Best regards,
[Your Name]
[Incident Commander]
```

### Post-Mortem Process

```markdown
## Post-Mortem Template

### Incident Summary
- **Incident ID:** [INC-XXXX]
- **Date:** [Date]
- **Duration:** [X hours Y minutes]
- **Severity:** SEV-[X]
- **Services Affected:** [List]

### Timeline
| Time | Event |
|------|-------|
| HH:MM | Incident began |
| HH:MM | Alert triggered |
| HH:MM | Team engaged |
| HH:MM | Root cause identified |
| HH:MM | Fix implemented |
| HH:MM | Service restored |

### Root Cause Analysis (5 Whys)
1. Why did the incident occur? [Answer]
2. Why did [answer to 1] happen? [Answer]
3. Why did [answer to 2] happen? [Answer]
4. Why did [answer to 3] happen? [Answer]
5. Why did [answer to 4] happen? [Root cause]

### Impact
- **Customers Affected:** [Number/Percentage]
- **Revenue Impact:** $[X,XXX]
- **Data Loss:** [Yes/No, details]
- **SLA Impact:** [Details]

### What Went Well
- [Item 1]
- [Item 2]
- [Item 3]

### What Could Be Improved
- [Item 1]
- [Item 2]
- [Item 3]

### Action Items
| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Action 1] | [Name] | [Date] | Open |
| [Action 2] | [Name] | [Date] | Open |
| [Action 3] | [Name] | [Date] | Open |

### Lessons Learned
- [Lesson 1]
- [Lesson 2]
- [Lesson 3]
```

---

## 4. Change Management

### Change Types

```markdown
## Change Classification

### Standard Changes (Pre-approved)
- Routine maintenance
- Security patches
- Non-production deployments
- Monitoring configuration

**Approval:** Automated or team lead

### Normal Changes (Requires approval)
- Production deployments
- Infrastructure changes
- Database schema changes
- Security configuration changes

**Approval:** Change Advisory Board (CAB)

### Emergency Changes (Expedited)
- Critical security fixes
- Incident resolution
- Regulatory compliance

**Approval:** Emergency CAB (verbal, documented after)
```

### Change Request Process

```markdown
## Change Request Template

### Change Request: [CR-XXXX]

#### Basic Information
- **Requestor:** [Name]
- **Date:** [Date]
- **Priority:** Low/Medium/High/Emergency
- **Type:** Standard/Normal/Emergency

#### Change Details
- **Description:** [What is changing]
- **Reason:** [Why this change is needed]
- **Benefit:** [Expected outcome]

#### Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk 1] | Low/Med/High | Low/Med/High | [Mitigation] |
| [Risk 2] | Low/Med/High | Low/Med/High | [Mitigation] |

#### Implementation Plan
1. [Step 1]
2. [Step 2]
3. [Step 3]

#### Rollback Plan
1. [Rollback step 1]
2. [Rollback step 2]
3. [Rollback step 3]

#### Testing Plan
- [ ] Pre-change tests
- [ ] Post-change tests
- [ ] Validation criteria

#### Schedule
- **Proposed Date:** [Date]
- **Start Time:** [Time]
- **End Time:** [Time]
- **Downtime Expected:** [X hours/minutes]

#### Stakeholders
- **Implementer:** [Name]
- **Verifier:** [Name]
- **Backup:** [Name]

#### Approvals
| Role | Name | Approval | Date |
|------|------|----------|------|
| Requestor | | | |
| Technical Lead | | | |
| Change Manager | | | |
| CAB (if required) | | | |
```

### Change Advisory Board (CAB)

```markdown
## CAB Structure

### Members
- Change Manager (Chair)
- Technical Lead
- Operations Representative
- Security Representative
- Business Representative (as needed)

### Meeting Cadence
- **Standard CAB:** Weekly
- **Emergency CAB:** As needed (within 2 hours)

### CAB Responsibilities
- Review change requests
- Assess risk and impact
- Approve or reject changes
- Prioritize change schedule
- Review failed changes
```

### Change Success Metrics

```markdown
## Change Metrics

| Metric | Target | Formula |
|--------|--------|---------|
| Change Success Rate | >95% | (Successful Changes / Total Changes) × 100 |
| Emergency Change Rate | <10% | (Emergency Changes / Total Changes) × 100 |
| Change Rollback Rate | <5% | (Rolled Back Changes / Total Changes) × 100 |
| Mean Time to Implement | <2 hours | Total Implementation Time / Number of Changes |
| Change-Related Incidents | <2% | (Incidents from Changes / Total Changes) × 100 |
```

---

## 5. Quality Assurance

### QA Process

```markdown
## QA Checklist by Phase

### Design Phase
- [ ] Architecture review completed
- [ ] Security review completed
- [ ] Compliance requirements addressed
- [ ] Performance requirements defined
- [ ] Disaster recovery considered

### Implementation Phase
- [ ] Code reviews completed
- [ ] Unit tests written
- [ ] Integration tests written
- [ ] Security scanning completed
- [ ] Documentation updated

### Testing Phase
- [ ] Functional testing complete
- [ ] Performance testing complete
- [ ] Security testing complete
- [ ] User acceptance testing complete
- [ ] Rollback tested

### Deployment Phase
- [ ] Pre-deployment checklist complete
- [ ] Rollback plan verified
- [ ] Monitoring configured
- [ ] Alerting configured
- [ ] Runbooks updated

### Post-Deployment
- [ ] Smoke tests passed
- [ ] Performance baseline captured
- [ ] Customer acceptance obtained
- [ ] Lessons learned documented
```

### Testing Strategy

```markdown
## Testing Pyramid

```
          ╱╲
         ╱  ╲
        ╱ E2E ╲       (10%)
       ╱────────╲
      ╱Integration╲    (30%)
     ╱──────────────╲
    ╱    Unit Tests   ╲  (60%)
   ╱────────────────────╲
```

### Test Types

#### Unit Tests
- Test individual components
- Fast execution (<1 second)
- High coverage target (>80%)
- Run on every commit

#### Integration Tests
- Test component interactions
- Medium execution (<1 minute)
- Critical path coverage
- Run on PR merge

#### End-to-End Tests
- Test complete user flows
- Slower execution (<10 minutes)
- Happy path + critical edge cases
- Run before production deployment

#### Performance Tests
- Load testing
- Stress testing
- Endurance testing
- Spike testing

#### Security Tests
- Vulnerability scanning
- Penetration testing
- Dependency scanning
- Configuration auditing
```

### Definition of Done

```markdown
## DoD by Work Type

### Infrastructure Changes
- [ ] IaC code committed and reviewed
- [ ] Applied to non-production environment
- [ ] Tests passing
- [ ] Security scan complete
- [ ] Documentation updated
- [ ] Runbook updated
- [ ] Approved for production

### Application Deployments
- [ ] Code reviewed
- [ ] Tests passing (unit, integration, E2E)
- [ ] Security scan complete
- [ ] Performance baseline met
- [ ] Feature flags configured (if applicable)
- [ ] Monitoring configured
- [ ] Rollback plan documented

### Configuration Changes
- [ ] Change request approved
- [ ] Tested in non-production
- [ ] Rollback plan documented
- [ ] Communication sent (if needed)
- [ ] Documentation updated
```

---

## 6. Communication Framework

### Stakeholder Matrix

```markdown
## Stakeholder Communication Plan

| Stakeholder | Interest | Influence | Communication Strategy |
|-------------|----------|-----------|----------------------|
| Executive Sponsor | High | High | Weekly updates, monthly reviews |
| Project Sponsor | High | High | Weekly updates, bi-weekly calls |
| Technical Lead | High | Medium | Daily standups, technical deep-dives |
| End Users | Medium | Low | Release notes, training sessions |
| Compliance Team | Medium | High | Regular compliance reviews |
| Security Team | High | High | Security reviews, incident reports |
```

### Meeting Cadence

```markdown
## Standard Meeting Schedule

### Daily
| Meeting | Duration | Attendees | Purpose |
|---------|----------|-----------|---------|
| Standup | 15 min | Project team | Progress, blockers |

### Weekly
| Meeting | Duration | Attendees | Purpose |
|---------|----------|-----------|---------|
| Status Review | 30 min | PM, Tech Lead | Progress review |
| Client Status | 30 min | Client PM, Our PM | Status update |
| Team Sync | 60 min | Project team | Coordination |

### Bi-Weekly
| Meeting | Duration | Attendees | Purpose |
|---------|----------|-----------|---------|
| Sprint Review | 60 min | Team + stakeholders | Demo |
| Retrospective | 60 min | Project team | Improvement |
| Technical Deep-Dive | 60 min | Technical team | Architecture |

### Monthly
| Meeting | Duration | Attendees | Purpose |
|---------|----------|-----------|---------|
| Steering Committee | 60 min | Executives | Strategic review |
| Budget Review | 30 min | PM, Finance | Budget status |
| Risk Review | 30 min | PM, stakeholders | Risk assessment |
```

### Escalation Path

```markdown
## Escalation Matrix

### Level 1: Project Team
- **Who:** Project team members
- **Response:** Immediate
- **Examples:** Technical questions, task coordination

### Level 2: Project Management
- **Who:** Delivery Manager, Tech Lead
- **Response:** Within 4 hours
- **Examples:** Blockers, scope questions, timeline concerns

### Level 3: Leadership
- **Who:** VP Engineering, VP Delivery
- **Response:** Within 24 hours
- **Examples:** Resource conflicts, major scope changes, client issues

### Level 4: Executive
- **Who:** CTO, CEO
- **Response:** Within 48 hours
- **Examples:** Strategic decisions, major risks, contract issues

### Escalation Contact List
| Level | Name | Role | Contact |
|-------|------|------|---------|
| 1 | [Name] | Tech Lead | [Email/Phone] |
| 2 | [Name] | Delivery Manager | [Email/Phone] |
| 3 | [Name] | VP Engineering | [Email/Phone] |
| 4 | [Name] | CTO | [Email/Phone] |
```

---

## 7. Tools & Templates

### Project Management Tools

```markdown
## Tool Stack

### Project Management
- **Primary:** Jira, Asana, or Monday.com
- **Documentation:** Confluence, Notion
- **Diagrams:** Lucidchart, Draw.io

### Communication
- **Chat:** Slack or Microsoft Teams
- **Video:** Zoom or Google Meet
- **Email:** Google Workspace or Microsoft 365

### Version Control
- **Code:** GitHub, GitLab, or Bitbucket
- **IaC:** Terraform Cloud, Atlantis

### Monitoring
- **Infrastructure:** CloudWatch, Azure Monitor, Stackdriver
- **APM:** Datadog, New Relic, Dynatrace
- **Logging:** ELK Stack, Splunk, Cloud Logging

### Incident Management
- **Alerting:** PagerDuty, Opsgenie
- **Status:** Statuspage, Status.io
- **Post-mortems:** Jira, Confluence, Blameless
```

### Template Library

```markdown
## Available Templates

### Project Templates
- Project charter template
- Kickoff deck template
- Status report template
- Risk register template
- RAID log template

### Technical Templates
- Architecture decision record (ADR)
- Runbook template
- Incident response template
- Post-mortem template
- Change request template

### Client Templates
- Proposal template
- SOW template
- Executive summary template
- Case study template
- Reference letter template
```

---

## 8. Metrics & Reporting

### Project Health Metrics

```markdown
## Project Health Dashboard

### Schedule Health
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Schedule Variance | 0% | X% | 🟢/🟡/🔴 |
| Milestone On-Time Rate | >90% | X% | 🟢/🟡/🔴 |
| Critical Path Status | On track | [Status] | 🟢/🟡/🔴 |

### Budget Health
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Cost Variance | 0% | X% | 🟢/🟡/🔴 |
| Burn Rate | As planned | X%/week | 🟢/🟡/🔴 |
| Estimate at Completion | Within 10% | $XXX,XXX | 🟢/🟡/🔴 |

### Quality Metrics
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Defect Rate | <2% | X% | 🟢/🟡/🔴 |
| Test Coverage | >80% | X% | 🟢/🟡/🔴 |
| Rework Rate | <10% | X% | 🟢/🟡/🔴 |

### Client Satisfaction
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| NPS Score | >50 | X | 🟢/🟡/🔴 |
| CSAT Score | >4.5/5 | X.X | 🟢/🟡/🔴 |
| Response Time | <4 hours | X hours | 🟢/🟡/🔴 |
```

### Portfolio Reporting

```markdown
## Portfolio Dashboard (Monthly)

### Active Projects Summary
| Metric | Value |
|--------|-------|
| Active Projects | XX |
| On Track | XX (X%) |
| At Risk | XX (X%) |
| Off Track | XX (X%) |

### Resource Utilization
| Role | Available | Allocated | Utilization |
|------|-----------|-----------|-------------|
| Architects | XX | XX | X% |
| Engineers | XX | XX | X% |
| PMs | XX | XX | X% |

### Financial Summary
| Metric | This Month | YTD |
|--------|------------|-----|
| Revenue Recognized | $XXX,XXX | $X,XXX,XXX |
| Billable Utilization | X% | X% |
| Gross Margin | X% | X% |

### Pipeline Summary
| Stage | Count | Value |
|-------|-------|-------|
| Qualified | XX | $X.XM |
| Proposal | XX | $X.XM |
| Negotiation | XX | $X.XM |
| **Total Pipeline** | **XX** | **$X.XM** |
```

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-23
