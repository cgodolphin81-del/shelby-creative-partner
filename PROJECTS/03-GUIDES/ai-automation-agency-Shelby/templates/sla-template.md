# Service Level Agreement (SLA) Template

## AI Automation Services - Service Level Agreement

---

**This Service Level Agreement ("SLA") is entered into as of [Date] ("Effective Date") by and between:**

**[Your Company Name]**, a [State] [Entity Type], with principal place of business at [Address] ("Service Provider")

**AND**

**[Client Company Name]**, a [State] [Entity Type], with principal place of business at [Address] ("Client")

(Collectively, the "Parties")

---

## 1. Purpose

This SLA defines the service levels, responsibilities, and expectations for the AI automation services provided by Service Provider to Client. This SLA is incorporated into and subject to the Master Services Agreement dated [Date] ("MSA").

---

## 2. Services Covered

This SLA applies to the following services:

### 2.1 Automated Workflows
- [List specific workflows covered]
- [Workflow 1: Description]
- [Workflow 2: Description]
- [Workflow 3: Description]

### 2.2 AI Integrations
- [List specific AI integrations covered]
- [Integration 1: Description]
- [Integration 2: Description]

### 2.3 Support Services
- Technical support
- Bug fixes
- Performance monitoring
- Emergency response

### 2.4 Exclusions
The following are NOT covered by this SLA:
- New feature development (covered under separate SOW)
- Third-party service outages
- Issues caused by Client modifications
- Issues caused by force majeure events
- Training and onboarding (covered separately)

---

## 3. Service Availability

### 3.1 Uptime Commitment

Service Provider commits to the following uptime levels:

| Service Tier | Uptime Guarantee | Monthly Downtime Allowance |
|--------------|------------------|---------------------------|
| Standard | 99.5% | 3.6 hours |
| Premium | 99.9% | 43.8 minutes |
| Enterprise | 99.95% | 21.9 minutes |

**Client's Service Tier:** [Tier]

### 3.2 Uptime Calculation

```
Uptime % = (Total Minutes in Month - Downtime Minutes) / Total Minutes in Month × 100
```

**Exclusions from Downtime:**
- Scheduled maintenance (with 48-hour notice)
- Client-caused outages
- Third-party service outages
- Force majeure events
- Client network or infrastructure issues

### 3.3 Scheduled Maintenance

- **Notice:** Minimum 48 hours advance notice
- **Timing:** Outside business hours when possible
- **Duration:** Typically 2-4 hours
- **Frequency:** As needed, typically quarterly
- **Communication:** Email and status page updates

---

## 4. Support Services

### 4.1 Support Hours

| Support Tier | Hours | Coverage |
|--------------|-------|----------|
| Standard | Mon-Fri, 9 AM - 6 PM [Timezone] | Business hours |
| Premium | Mon-Sat, 8 AM - 8 PM [Timezone] | Extended hours |
| Enterprise | 24/7/365 | Full coverage |

**Client's Support Tier:** [Tier]

### 4.2 Support Channels

| Channel | Availability | Response Time |
|---------|--------------|---------------|
| Email (support@company.com) | 24/7 | Per priority level |
| Slack (dedicated channel) | Support hours | Per priority level |
| Phone (emergency only) | Per support tier | 1 hour (P1 only) |
| Status Page | 24/7 | Real-time |

### 4.3 Issue Priority Levels

#### Priority 1 - Critical
**Definition:**
- Complete system outage
- Critical business function unavailable
- Data loss or security breach
- Affecting all users

**Response Time:** 1 hour
**Resolution Time:** 4 hours
**Updates:** Every 30 minutes

---

#### Priority 2 - High
**Definition:**
- Major feature broken
- Significant business impact
- No workaround available
- Affecting multiple users

**Response Time:** 4 hours
**Resolution Time:** 24 hours
**Updates:** Every 2 hours

---

#### Priority 3 - Medium
**Definition:**
- Feature impaired but functional
- Moderate business impact
- Workaround available
- Affecting some users

**Response Time:** 24 hours
**Resolution Time:** 3-5 business days
**Updates:** Daily

---

#### Priority 4 - Low
**Definition:**
- Minor issue or cosmetic
- Minimal business impact
- Enhancement request
- Affecting few users

**Response Time:** 48 hours
**Resolution Time:** Next release cycle
**Updates:** Weekly

---

### 4.4 Issue Severity Adjustment

Service Provider reserves the right to adjust issue priority based on:
- Actual business impact
- Number of users affected
- Availability of workarounds
- Client input

---

## 5. Performance Standards

### 5.1 Workflow Performance

| Metric | Standard | Premium | Enterprise |
|--------|----------|---------|------------|
| Execution Success Rate | 95%+ | 98%+ | 99.5%+ |
| Average Execution Time | < 30 seconds | < 20 seconds | < 10 seconds |
| Error Rate | < 5% | < 2% | < 0.5% |

### 5.2 API Performance

| Metric | Target |
|--------|--------|
| API Response Time (95th percentile) | < 2 seconds |
| API Availability | 99.5%+ |
| Rate Limit Headroom | 20%+ available |

### 5.3 Data Accuracy

| Metric | Target |
|--------|--------|
| Data Transfer Accuracy | 99.9%+ |
| Data Completeness | 100% |
| Data Latency | < 5 minutes |

---

## 6. Monitoring & Reporting

### 6.1 Monitoring

Service Provider will monitor:
- Workflow execution success/failure
- API availability and response times
- System resource utilization
- Error rates and patterns
- Security events

### 6.2 Client Access to Monitoring

Client will have access to:
- Real-time status dashboard
- Historical performance data
- Execution logs (90-day retention)
- Error reports

**Dashboard URL:** [URL]
**Login Credentials:** [Provided separately]

### 6.3 Reporting

| Report | Frequency | Delivery |
|--------|-----------|----------|
| Service Performance | Monthly | Email + Dashboard |
| SLA Compliance | Monthly | Email |
| Incident Summary | Monthly | Email |
| Executive Summary | Quarterly | Video Call + Document |

---

## 7. Incident Management

### 7.1 Incident Response Process

```
1. Detection
   - Automated monitoring
   - Client reporting
   - Third-party notification

2. Triage
   - Assess severity
   - Assign priority
   - Notify stakeholders

3. Response
   - Acknowledge issue
   - Begin investigation
   - Provide initial update

4. Resolution
   - Implement fix
   - Test resolution
   - Confirm with client

5. Follow-Up
   - Document incident
   - Root cause analysis (for P1/P2)
   - Preventive measures
```

### 7.2 Communication During Incidents

| Priority | Initial Update | Ongoing Updates | Resolution Update |
|----------|---------------|-----------------|-------------------|
| P1 | 30 minutes | Every 30 minutes | Immediate |
| P2 | 1 hour | Every 2 hours | Immediate |
| P3 | 4 hours | Daily | Within 4 hours |
| P4 | 24 hours | Weekly | Within 24 hours |

### 7.3 Escalation Path

| Level | Contact | Response Time |
|-------|---------|---------------|
| Level 1 | Support Team | Per priority SLA |
| Level 2 | Technical Lead | 2 hours |
| Level 3 | Delivery Director | 1 hour |
| Level 4 | CTO/CEO | 30 minutes (P1 only) |

**Escalation Contacts:**
- Level 1: support@company.com
- Level 2: [Name, Email, Phone]
- Level 3: [Name, Email, Phone]
- Level 4: [Name, Email, Phone]

---

## 8. Service Credits

### 8.1 Uptime Service Credits

If uptime falls below the guaranteed level, Client will receive service credits:

| Uptime Achieved | Service Credit |
|-----------------|----------------|
| 99.0% - 99.4% | 5% of monthly fee |
| 98.0% - 98.9% | 10% of monthly fee |
| 95.0% - 97.9% | 20% of monthly fee |
| Below 95.0% | 50% of monthly fee |

### 8.2 Response Time Service Credits

If response time SLA is missed 3+ times in a month:

| Missed Responses | Service Credit |
|------------------|----------------|
| 3-5 times | 5% of monthly fee |
| 6-10 times | 10% of monthly fee |
| 11+ times | 20% of monthly fee |

### 8.3 Service Credit Process

1. Client must request credit within 30 days of incident
2. Service Provider will validate claim within 10 business days
3. Approved credits applied to next invoice
4. Credits cannot be redeemed for cash
5. Credits are Client's sole remedy for SLA failures

### 8.4 Service Credit Exclusions

Service credits do not apply when downtime is caused by:
- Client actions or omissions
- Third-party service outages
- Scheduled maintenance
- Force majeure events
- Client network or infrastructure issues

---

## 9. Client Responsibilities

### 9.1 Access & Cooperation

Client agrees to:
- Provide necessary system access
- Designate authorized contacts
- Respond to information requests promptly
- Test and approve changes in timely manner

### 9.2 Issue Reporting

Client agrees to:
- Report issues through designated channels
- Provide complete information about issues
- Prioritize issues appropriately
- Test and confirm resolutions

### 9.3 Changes & Modifications

Client agrees to:
- Not modify automated workflows without approval
- Notify Service Provider of system changes
- Allow reasonable time for change implementation
- Test changes before production deployment

---

## 10. Change Management

### 10.1 Change Types

**Standard Changes:**
- Pre-approved, low-risk changes
- No downtime expected
- Examples: Bug fixes, minor updates
- **Notice:** 24 hours

**Normal Changes:**
- Requires review and approval
- May have minor impact
- Examples: Feature updates, integrations
- **Notice:** 5 business days

**Emergency Changes:**
- Urgent, unplanned changes
- To resolve critical issues
- **Notice:** As soon as possible

### 10.2 Change Request Process

```
1. Change Request Submitted
   ↓
2. Impact Assessment
   ↓
3. Client Approval (if required)
   ↓
4. Scheduling
   ↓
5. Implementation
   ↓
6. Testing & Verification
   ↓
7. Closure
```

---

## 11. Security & Compliance

### 11.1 Data Security

Service Provider will:
- Encrypt data in transit (TLS 1.2+)
- Encrypt data at rest (AES-256)
- Implement access controls
- Maintain audit logs
- Conduct regular security assessments

### 11.2 Compliance

Service Provider complies with:
- [GDPR / CCPA / Other applicable regulations]
- [Industry-specific requirements if applicable]
- SOC 2 Type II (if applicable)

### 11.3 Data Breach Notification

In event of data breach:
- **Notification:** Within 48 hours of discovery
- **Content:** Nature of breach, data affected, remediation
- **Support:** Assistance with regulatory requirements
- **Remediation:** Immediate action to contain and fix

---

## 12. Business Continuity

### 12.1 Backup & Recovery

| Item | Frequency | Retention |
|------|-----------|-----------|
| Workflow Configurations | Daily | 90 days |
| Client Data | Daily | 90 days |
| Logs | Daily | 30 days |

### 12.2 Recovery Objectives

| Metric | Target |
|--------|--------|
| Recovery Time Objective (RTO) | 4 hours |
| Recovery Point Objective (RPO) | 1 hour |

### 12.3 Disaster Recovery

Service Provider maintains:
- Redundant infrastructure
- Geographic redundancy (if enterprise tier)
- Documented disaster recovery plan
- Regular DR testing (annual)

---

## 13. Term & Termination

### 13.1 Term

This SLA is effective as of [Date] and continues until:
- Terminated per MSA terms, or
- Replaced by new SLA

### 13.2 Termination for Cause

Either party may terminate this SLA with 30 days written notice if:
- Other party materially breaches SLA
- Breach is not cured within 30 days

### 13.3 Effect of Termination

Upon termination:
- Service Provider will provide 30 days transition support
- Client data will be returned in standard format
- Outstanding service credits will be applied to final invoice

---

## 14. General Provisions

### 14.1 SLA Review

This SLA will be reviewed:
- Annually, or
- Upon significant service changes, or
- Upon Client request (once per year)

### 14.2 SLA Modifications

Modifications require:
- Written agreement from both parties
- 30 days notice (unless emergency)
- Updated signature

### 14.3 Governing Law

This SLA is governed by the laws of [State/Country].

### 14.4 Entire Agreement

This SLA, together with the MSA, constitutes the entire agreement between the Parties regarding the services.

---

## 15. Definitions

| Term | Definition |
|------|------------|
| **Downtime** | Period when service is unavailable to Client |
| **Response Time** | Time from issue report to first response |
| **Resolution Time** | Time from issue report to resolution |
| **Business Hours** | 9 AM - 6 PM [Timezone], Mon-Fri, excluding holidays |
| **Service Credit** | Credit applied to future invoices for SLA failures |

---

## 16. Signatures

**SERVICE PROVIDER:**

[Your Company Name]

By: _________________________________

Name: [Name]

Title: [Title]

Date: _______________

---

**CLIENT:**

[Client Company Name]

By: _________________________________

Name: [Name]

Title: [Title]

Date: _______________

---

## Appendix A: Service Description

[Detailed description of services covered]

---

## Appendix B: Technical Specifications

[Technical details, API documentation, integration specs]

---

## Appendix C: Contact Information

| Role | Name | Email | Phone |
|------|------|-------|-------|
| Primary Contact (Client) | | | |
| Technical Contact (Client) | | | |
| Account Manager (Provider) | | | |
| Support (Provider) | support@company.com | [Phone] |
| Emergency (Provider) | | [Phone] |

---

## Appendix D: Service Credit Request Form

```
SERVICE CREDIT REQUEST
======================

Client: [Name]
Date: [Date]
Incident Reference: [ID]

SLA METRIC VIOLATED:
[ ] Uptime
[ ] Response Time
[ ] Resolution Time
[ ] Other: _________

INCIDENT DETAILS:
Description:
Start Time:
End Time:
Impact:

CREDIT REQUESTED: $_________ (or _____% of monthly fee)

SUPPORTING DOCUMENTATION:
[Attach relevant logs, screenshots, etc.]

SUBMITTED BY:
Name: _________________
Title: _________________
Date: _________________

FOR SERVICE PROVIDER USE:
Status: [ ] Approved [ ] Denied [ ] Pending
Approved Amount: $_________
Approved By: _________________
Date: _________________
```

---

*This SLA is a living document. Both parties commit to working together to ensure service excellence.*
