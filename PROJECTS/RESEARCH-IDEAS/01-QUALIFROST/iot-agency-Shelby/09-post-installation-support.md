# Post-Installation Support

## Overview

Post-installation support is where customer relationships are solidified and recurring revenue is generated. This document outlines our support services, SLAs, and processes.

---

## Support Service Tiers

### Tier 1: Basic Support

**Included:** 30-90 days post-installation (based on project size)
**Cost:** Included in project

**Services:**
- Remote troubleshooting
- Bug fixes
- System stabilization
- Basic user questions
- Warranty claim assistance

**Response Times:**
- Critical: 4 hours
- High: 8 hours
- Medium: 24 hours
- Low: 48 hours

**Hours:** Business hours (8am-6pm local)

**Transition:** Handoff to paid support tier at end of included period

---

### Tier 2: Standard Support

**Price:** $500-$2,000/month (based on system size)
**Contract:** 12-month minimum

**Services:**
- Everything in Basic, plus:
- 24/7 monitoring
- Proactive alerts
- Monthly health reports
- Firmware update management
- Remote configuration changes
- Quarterly system reviews
- 10 hours support time included

**Response Times:**
- Critical: 2 hours
- High: 4 hours
- Medium: 8 hours
- Low: 24 hours

**Hours:** 24/7 for critical, business hours for standard

**Support Time:**
- 10 hours/month included
- Additional hours: $150/hour
- Rollover: Up to 5 hours

---

### Tier 3: Premium Support

**Price:** $2,000-$10,000/month (based on system size)
**Contract:** 12-month minimum

**Services:**
- Everything in Standard, plus:
- Dedicated support engineer
- Priority queue
- Monthly strategy calls
- Performance optimization
- Custom reporting
- Advanced analytics
- Change management support
- 40 hours support time included

**Response Times:**
- Critical: 1 hour
- High: 2 hours
- Medium: 4 hours
- Low: 8 hours

**Hours:** 24/7/365

**Support Time:**
- 40 hours/month included
- Additional hours: $125/hour (discounted)
- Rollover: Up to 20 hours

---

### Tier 4: Enterprise Support

**Price:** $10,000-$30,000+/month
**Contract:** 24-month preferred

**Services:**
- Everything in Premium, plus:
- Dedicated account team
- Account manager
- Technical account manager
- Executive sponsorship
- Quarterly business reviews
- Annual system audit
- Roadmap planning
- Unlimited support time
- On-site support (as needed)
- Training sessions (quarterly)

**Response Times:**
- Critical: 30 minutes
- High: 1 hour
- Medium: 2 hours
- Low: 4 hours

**Hours:** 24/7/365 with dedicated phone line

**Support Time:**
- Unlimited
- On-site visits: 2 per year included

---

## Service Level Agreements (SLAs)

### Severity Definitions

| Severity | Definition | Examples |
|----------|------------|----------|
| **Critical** | System down, major business impact | Complete system failure, security breach, data loss |
| **High** | Major functionality impaired | Multiple devices offline, key features not working |
| **Medium** | Minor functionality impaired | Single device issue, non-critical feature not working |
| **Low** | Minimal impact, cosmetic | Questions, enhancement requests, documentation |

### Response Time Commitments

| Tier | Critical | High | Medium | Low |
|------|----------|------|--------|-----|
| Basic | 4 hours | 8 hours | 24 hours | 48 hours |
| Standard | 2 hours | 4 hours | 8 hours | 24 hours |
| Premium | 1 hour | 2 hours | 4 hours | 8 hours |
| Enterprise | 30 min | 1 hour | 2 hours | 4 hours |

### Resolution Time Targets

| Severity | Target | Commitment |
|----------|--------|------------|
| Critical | 4 hours | Best effort, continuous work |
| High | 8 hours | Workaround within 4 hours |
| Medium | 24 hours | Resolution or workaround |
| Low | 5 business days | Best effort |

### SLA Credits

**If we miss SLA commitments:**

| Missed Metric | Credit |
|---------------|--------|
| Response time (single incident) | 5% of monthly fee |
| Response time (multiple incidents) | 10% of monthly fee |
| Resolution time (critical) | 10% of monthly fee |
| System uptime <99.5% | 25% of monthly fee |
| System uptime <99.0% | 50% of monthly fee |

**Maximum Credit:** 100% of monthly fee
**Claim Process:** Customer must request within 30 days

---

## Monitoring Services

### Monitoring Capabilities

#### System Health Monitoring
- Device online/offline status
- Network connectivity
- CPU/memory utilization (gateways/servers)
- Storage capacity
- Service status

#### Performance Monitoring
- Response times
- Message throughput
- Error rates
- Latency measurements
- Bandwidth utilization

#### Security Monitoring
- Failed login attempts
- Unauthorized access attempts
- Configuration changes
- Certificate expiration
- Vulnerability alerts

#### Business Metrics
- Data quality
- Integration status
- Alert frequency
- User activity
- System usage patterns

### Monitoring Platform

**Recommended Stack:**
- **Infrastructure:** Nagios, Zabbix, or Datadog
- **Logs:** ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk
- **APM:** New Relic, AppDynamics, or Dynatrace
- **Custom Dashboards:** Grafana

### Alert Configuration

**Alert Channels:**
- Email
- SMS
- Slack/Teams
- PagerDuty (for critical)
- Phone call (for critical, after hours)

**Alert Escalation:**
```
Alert Triggered
     │
     ▼
┌─────────────────┐
│  On-Call        │ ◄── 15 minutes no ack
│  Engineer       │
└────────┬────────┘
         │ ack
         ▼
┌─────────────────┐
│  Resolution     │
│  or             │ ◄── 1 hour no resolution
│  Escalation     │
└────────┬────────┘
         │ escalate
         ▼
┌─────────────────┐
│  Senior         │ ◄── 2 hours no resolution
│  Engineer       │
└────────┬────────┘
         │ escalate
         ▼
┌─────────────────┐
│  Management     │
│  + Customer     │
│  Notification   │
└─────────────────┘
```

### Monitoring Reports

**Daily Report:**
- System availability
- Critical alerts
- Top issues

**Weekly Report:**
- Availability trends
- Alert summary
- Ticket summary
- Performance metrics

**Monthly Report:**
- Executive summary
- SLA compliance
- Trend analysis
- Recommendations
- Upcoming maintenance

---

## Maintenance Services

### Preventive Maintenance

#### Monthly Tasks
- [ ] Review system logs
- [ ] Check backup status
- [ ] Review alert trends
- [ ] Verify monitoring coverage
- [ ] Update documentation

#### Quarterly Tasks
- [ ] Firmware updates (non-critical)
- [ ] Security patches
- [ ] Performance optimization
- [ ] Configuration review
- [ ] User access review
- [ ] Backup restoration test
- [ ] Site visit (if applicable)

#### Annual Tasks
- [ ] Comprehensive system audit
- [ ] Security assessment
- [ ] Performance baseline update
- [ ] Disaster recovery test
- [ ] Documentation update
- [ ] Training refresh
- [ ] Upgrade planning

### Corrective Maintenance

**Process:**
1. Issue identified (monitoring or reported)
2. Ticket created
3. Triage and prioritization
4. Diagnosis
5. Resolution or workaround
6. Testing
7. Documentation
8. Customer communication

**Root Cause Analysis (for major issues):**
- What happened?
- When did it happen?
- Impact assessment
- Root cause identification
- Corrective actions
- Preventive measures
- Timeline of events
- Lessons learned

### Upgrade Management

**Upgrade Process:**
1. **Planning**
   - Review release notes
   - Assess impact
   - Plan rollback
   - Schedule maintenance window

2. **Testing**
   - Test in non-production
   - Verify functionality
   - Document any issues
   - Get customer approval

3. **Implementation**
   - Execute during maintenance window
   - Monitor closely
   - Verify functionality
   - Document changes

4. **Post-Upgrade**
   - Monitor for issues
   - Update documentation
   - Customer communication
   - Lessons learned

**Upgrade Schedule:**
- **Security patches:** Within 7 days of availability
- **Minor updates:** Monthly maintenance window
- **Major updates:** Quarterly, with extensive testing

---

## Support Processes

### Ticket Management

**Ticket Categories:**
- Incident (something broken)
- Service Request (new feature, access, etc.)
- Question (how-to, information)
- Change Request (configuration change)

**Ticket Priority Matrix:**

| Impact →<br>Urgency ↓ | High | Medium | Low |
|----------------------|------|--------|-----|
| **High** | P1 - Critical | P2 - High | P3 - Medium |
| **Medium** | P2 - High | P3 - Medium | P4 - Low |
| **Low** | P3 - Medium | P4 - Low | P4 - Low |

**Ticket Lifecycle:**
```
New → In Progress → Waiting on Customer → Resolved → Closed
              ↓                              ↓
         Waiting on Vendor            Customer Confirms
```

### Knowledge Base

**Article Types:**
- How-to guides
- Troubleshooting procedures
- FAQ
- Configuration guides
- Best practices
- Known issues

**Article Structure:**
- Title (clear, searchable)
- Summary
- Prerequisites
- Steps/Procedure
- Screenshots (where helpful)
- Related articles
- Last updated date
- Author

**Maintenance:**
- Review articles quarterly
- Update after major changes
- Archive outdated content
- Track article usefulness

### Customer Communication

**Status Updates:**
- **Critical:** Every 30 minutes until resolved
- **High:** Every 2 hours until resolved
- **Medium:** Daily until resolved
- **Low:** As needed

**Communication Channels:**
- Email (standard)
- Phone (critical/urgent)
- Portal/ticket system
- Slack/Teams (for enterprise customers)

**Escalation Communication:**
- Notify customer of escalation
- Provide new point of contact
- Set expectations
- Follow through on commitments

---

## Support Team Structure

### Support Roles

#### Support Manager
**Responsibilities:**
- Team management
- SLA compliance
- Customer satisfaction
- Process improvement
- Reporting

**Qualifications:**
- 5+ years support experience
- 2+ years management
- ITIL certification preferred
- Strong communication skills

**Compensation:** $90K-$130K

---

#### Senior Support Engineer
**Responsibilities:**
- Complex troubleshooting
- Escalation handling
- Knowledge base creation
- Mentoring junior staff
- Customer communication

**Qualifications:**
- 5+ years technical support
- IoT/technology expertise
- Strong problem-solving
- Customer service skills

**Compensation:** $75K-$105K

---

#### Support Engineer
**Responsibilities:**
- Ticket resolution
- Remote troubleshooting
- Documentation
- Customer communication
- Monitoring response

**Qualifications:**
- 2+ years technical support
- Technical aptitude
- Communication skills
- Customer service orientation

**Compensation:** $55K-$80K

---

#### Support Specialist (Tier 1)
**Responsibilities:**
- Initial triage
- Basic troubleshooting
- Ticket routing
- Customer communication
- Documentation

**Qualifications:**
- 1+ years support experience
- Good communication
- Problem-solving skills
- Customer service focus

**Compensation:** $45K-$60K

---

### Staffing Model

**Coverage Requirements:**
- **Business Hours:** 1 engineer per 500 devices
- **24/7 Coverage:** 4-5 FTE per rotation
- **Enterprise:** Dedicated engineer per major account

**Scheduling:**
- **Business Hours:** 8am-6pm local
- **Extended Hours:** 6am-10pm (coverage rotation)
- **24/7:** 4 shifts (6am-2pm, 2pm-10pm, 10pm-6am, weekend)

**On-Call Rotation:**
- Weekly rotation
- Compensated (stipend or overtime)
- Backup on-call
- Response time requirements

---

## Tools & Technology

### Support Stack

| Function | Tool | Purpose |
|----------|------|---------|
| Ticketing | Zendesk, Jira Service Desk | Ticket management |
| Remote Access | TeamViewer, AnyDesk | Remote troubleshooting |
| Monitoring | Datadog, Nagios | System monitoring |
| Knowledge Base | Confluence, Zendesk Guide | Documentation |
| Communication | Slack, Teams | Internal comms |
| Phone System | Twilio, RingCentral | Customer calls |
| Screen Sharing | Zoom, Teams | Customer sessions |
| Customer Portal | Custom or Zendesk | Self-service |

### Integration

**Ticketing System Integration:**
- Email → Ticket creation
- Monitoring alerts → Auto-ticket
- SLA tracking → Automated alerts
- Customer portal → Ticket status

**Monitoring Integration:**
- Alert → Ticket creation
- Auto-acknowledge on ticket creation
- Auto-close on alert resolution
- Enrichment with monitoring data

---

## Metrics & KPIs

### Operational Metrics

| Metric | Target | Purpose |
|--------|--------|---------|
| First Response Time | <1 hour (critical) | SLA compliance |
| Resolution Time | Per SLA targets | Efficiency |
| First Contact Resolution | >60% | Effectiveness |
| Ticket Backlog | <50 per engineer | Workload management |
| SLA Compliance | >95% | Contract compliance |

### Quality Metrics

| Metric | Target | Purpose |
|--------|--------|---------|
| Customer Satisfaction | >4.5/5 | Customer happiness |
| Net Promoter Score | >50 | Loyalty indicator |
| Ticket Reopen Rate | <5% | Quality of resolution |
| Knowledge Base Usage | >30% deflection | Self-service adoption |

### Business Metrics

| Metric | Target | Purpose |
|--------|--------|---------|
| Support Revenue | Growing QoQ | Business growth |
| Renewal Rate | >90% | Customer retention |
| Expansion Revenue | 20% of base | Upsell success |
| Cost per Ticket | Declining | Efficiency |

---

## Customer Success

### Onboarding

**30-Day Onboarding Plan:**
- Week 1: System access, initial training
- Week 2: First check-in, address questions
- Week 3: Deep-dive session
- Week 4: 30-day review, optimization recommendations

**Onboarding Checklist:**
- [ ] Welcome email sent
- [ ] Portal access configured
- [ ] Contact information exchanged
- [ ] Initial training scheduled
- [ ] Monitoring verified
- [ ] Escalation path confirmed
- [ ] Documentation delivered
- [ ] 30-day check-in scheduled

### Quarterly Business Reviews (QBR)

**QBR Agenda:**
1. Executive summary (5 min)
2. System performance review (15 min)
3. SLA compliance (10 min)
4. Ticket analysis (10 min)
5. Optimization recommendations (15 min)
6. Roadmap discussion (15 min)
7. Q&A (10 min)

**QBR Deliverables:**
- Performance dashboard
- SLA report
- Ticket trends
- Recommendations document
- Action items

### Renewal Management

**Timeline:**
- **90 days before:** Initial renewal conversation
- **60 days before:** Proposal sent
- **30 days before:** Follow-up, negotiation
- **14 days before:** Final confirmation
- **Expiration:** Service continues (grace period)

**Renewal Package:**
- Usage summary
- Value delivered
- Proposed changes
- Pricing
- Terms

**Retention Strategies:**
- Early renewal discount (5%)
- Multi-year discount (10% for 2 years, 15% for 3 years)
- Added value (extra hours, features)
- Executive engagement for at-risk accounts

---

## Revenue Models

### Support Revenue Targets

| Year | Support Customers | Avg Monthly | Annual Revenue |
|------|-------------------|-------------|----------------|
| 1 | 20 | $1,500 | $360K |
| 2 | 50 | $2,000 | $1.2M |
| 3 | 100 | $2,500 | $3M |

### Revenue Mix Goal

| Revenue Type | Year 1 | Year 2 | Year 3 |
|--------------|--------|--------|--------|
| Project Revenue | 85% | 70% | 60% |
| Support Retainers | 10% | 20% | 25% |
| Managed Services | 5% | 10% | 15% |
| **Recurring Total** | **15%** | **30%** | **40%** |

### Pricing Optimization

**Annual Review:**
- Market rate analysis
- Cost analysis
- Customer feedback
- Competitive positioning
- Price adjustments (3-5% typical)

**Value-Based Pricing:**
- Tie pricing to customer value
- Tier based on system criticality
- Offer outcome-based pricing (advanced)

---

## Best Practices

### What Works Well

1. **Proactive Monitoring:** Catch issues before customers notice
2. **Clear Communication:** Regular updates, even if no progress
3. **Documentation:** KB articles for common issues
4. **Empowered Team:** Authority to make decisions
5. **Customer Training:** Reduce preventable tickets
6. **Continuous Improvement:** Regular process reviews
7. **Relationship Building:** Know your customers
8. **Work-Life Balance:** Prevent burnout with good on-call practices

### Common Pitfalls

1. **Understaffing:** Leads to burnout and poor service
2. **No Documentation:** Reinventing the wheel
3. **Poor Handoffs:** Lost information between shifts
4. **Ignoring Trends:** Missing systemic issues
5. **No Escalation Path:** Stuck on difficult issues
6. **Over-Promising:** Setting unrealistic expectations
7. **Reactive Only:** No proactive improvements
8. **Ignoring Feedback:** Not learning from customers

---

Post-installation support is where you build lasting customer relationships and create predictable recurring revenue. Invest in doing it well.
