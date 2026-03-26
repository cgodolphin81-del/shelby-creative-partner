# Support Ticket System Template

**Platform:** Notion / Trello / Airtable compatible
**Purpose:** Track client support requests, issues, and resolutions
**Version:** 1.0

---

## NOTION TEMPLATE STRUCTURE

### Database: Support Tickets

**Properties:**
| Property | Type | Options |
|----------|------|---------|
| Ticket ID | Title | Auto: SUP-001 |
| Client | Relation | Clients database |
| Status | Select | Open, In Progress, Waiting on Client, Resolved, Closed |
| Priority | Select | 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low |
| Category | Select | Bug, Feature Request, Question, Training, Other |
| Automation | Relation | Automations database |
| Submitted | Date | |
| Due Date | Date | |
| Assigned To | People | |
| Time Spent | Number | Hours |
| Resolution | Text | |

---

## TICKET FORMS

### New Ticket Form (Client-Facing)

```
═══════════════════════════════════════
SUPPORT REQUEST FORM
═══════════════════════════════════════

Contact Information:
- Name: ________________
- Email: ________________
- Company: ________________

Issue Details:
- What's happening? ________________
- When did it start? ________________
- How often does it occur? ________________
- What were you trying to do? ________________

Impact:
- ☐ Business critical (everything stopped)
- ☐ Major impact (can't complete key tasks)
- ☐ Minor impact (workaround available)
- ☐ Question (need guidance)

Automation Affected:
- ☐ Lead Capture
- ☐ Email Follow-up
- ☐ CRM Sync
- ☐ Social Media
- ☐ Reporting
- ☐ Other: ________________

Screenshots/Errors:
[Attach files]

Additional Notes:
________________
```

---

## TICKET WORKFLOW

### Status Definitions

| Status | Meaning | SLA |
|--------|---------|-----|
| **Open** | New ticket, not yet reviewed | Respond within 4 hours |
| **In Progress** | Actively being worked on | Update every 24 hours |
| **Waiting on Client** | Need more info from client | Follow up in 48 hours |
| **Resolved** | Fix implemented, verifying | Close in 7 days if no issues |
| **Closed** | Issue fully resolved | Reopen if needed |

### Priority Definitions

| Priority | Response Time | Resolution Time | Examples |
|----------|---------------|-----------------|----------|
| **🔴 Critical** | 1 hour | 4 hours | All automations down, data loss |
| **🟠 High** | 4 hours | 24 hours | Key automation broken, major impact |
| **🟡 Medium** | 24 hours | 3 days | Partial functionality, workaround exists |
| **🟢 Low** | 48 hours | 1 week | Questions, minor issues, feature requests |

---

## TICKET TEMPLATES

### Template: Bug Report

```
🐛 BUG REPORT

Ticket ID: SUP-___
Client: [Client Name]
Priority: [Priority]
Automation: [Which Zap]

DESCRIPTION:
[What's broken]

STEPS TO REPRODUCE:
1. 
2. 
3. 

EXPECTED BEHAVIOR:
[What should happen]

ACTUAL BEHAVIOR:
[What's actually happening]

ERROR MESSAGES:
[Copy exact error text]

SCREENSHOTS:
[Attach]

INVESTIGATION:
[Notes from troubleshooting]

FIX:
[What was done to resolve]

PREVENTION:
[How to prevent recurrence]
```

### Template: Feature Request

```
✨ FEATURE REQUEST

Ticket ID: SUP-___
Client: [Client Name]
Priority: [Priority]

REQUEST:
[What they want]

BUSINESS VALUE:
[Why they need it]

COMPLEXITY:
☐ Simple (1-2 hours)
☐ Medium (3-5 hours)
☐ Complex (6+ hours)

QUOTE REQUIRED:
☐ Yes ☐ No

ESTIMATED COST:
$_____

STATUS:
☐ Under Review ☐ Approved ☐ Declined ☐ In Progress ☐ Complete

NOTES:
[Additional context]
```

### Template: Question/Training

```
❓ QUESTION / TRAINING

Ticket ID: SUP-___
Client: [Client Name]
Priority: 🟢 Low

QUESTION:
[What they're asking]

ANSWER:
[Response provided]

RESOURCES SHARED:
- [Link 1]
- [Link 2]

FOLLOW-UP NEEDED:
☐ Yes ☐ No

TRAINING GAP IDENTIFIED:
☐ Yes ☐ No
If yes, update training docs: [Link]
```

---

## SLA TRACKING

### Response Time SLA

| Priority | Target | Current Avg | Compliance |
|----------|--------|-------------|------------|
| Critical | 1 hour | | % |
| High | 4 hours | | % |
| Medium | 24 hours | | % |
| Low | 48 hours | | % |

### Resolution Time SLA

| Priority | Target | Current Avg | Compliance |
|----------|--------|-------------|------------|
| Critical | 4 hours | | % |
| High | 24 hours | | % |
| Medium | 3 days | | % |
| Low | 1 week | | % |

---

## ESCALATION PATH

### Level 1: Support Technician
- Handle routine questions
- Fix common errors
- Document solutions
- **Escalate if:** Can't resolve in 2 hours

### Level 2: Technical Lead
- Complex troubleshooting
- Code-level fixes
- Architecture changes
- **Escalate if:** Requires client decision or major change

### Level 3: Agency Owner
- Scope changes
- Contract disputes
- Major incidents
- Strategic decisions

---

## WEEKLY SUPPORT REPORT

```
═══════════════════════════════════════
WEEKLY SUPPORT REPORT
Week of: [Date]
═══════════════════════════════════════

SUMMARY:
- Total Tickets: ___
- Opened: ___
- Closed: ___
- Avg Response Time: ___
- Avg Resolution Time: ___

BY PRIORITY:
- 🔴 Critical: ___ (___% resolved in SLA)
- 🟠 High: ___ (___% resolved in SLA)
- 🟡 Medium: ___ (___% resolved in SLA)
- 🟢 Low: ___ (___% resolved in SLA)

BY CATEGORY:
- Bugs: ___
- Feature Requests: ___
- Questions: ___
- Training: ___

TOP ISSUES THIS WEEK:
1. 
2. 
3. 

CLIENT SATISFACTION:
- Average Rating: ___/5
- Responses: ___

ACTION ITEMS:
- [ ] 
- [ ] 
- [ ] 
```

---

## CLIENT PORTAL VIEW

### My Tickets (Client sees)

| Ticket ID | Subject | Status | Priority | Submitted | Last Update |
|-----------|---------|--------|----------|-----------|-------------|
| SUP-001 | | | | | |
| SUP-002 | | | | | |
| SUP-003 | | | | | |

### Submit New Ticket Button
[Links to ticket form]

### Knowledge Base Links
- [How to Monitor Your Automations]
- [Common Errors & Fixes]
- [Video Tutorials]
- [FAQ]

---

## AUTOMATION RULES

### Auto-Assign Rules
```
IF Category = "Bug" AND Priority = "Critical"
THEN Assign to: Technical Lead
     Notify: Agency Owner

IF Category = "Question"
THEN Assign to: Support Technician

IF Client = "VIP"
THEN Priority = High (minimum)
```

### Auto-Status Rules
```
IF Status = "Waiting on Client" for 7 days
THEN Status = "Closed"
     Notify: Client

IF Status = "Resolved" for 7 days
THEN Status = "Closed"
     Notify: Client

IF Priority = "Critical" AND Status != "Resolved" for 4 hours
THEN Notify: Agency Owner
```

### Auto-Tagging Rules
```
IF Subject contains "not working" OR "broken"
THEN Tag: "bug"

IF Subject contains "how to" OR "question"
THEN Tag: "training"

IF Subject contains "add" OR "change" OR "new"
THEN Tag: "feature-request"
```

---

## METRICS DASHBOARD

### Key Metrics to Track

| Metric | Formula | Target |
|--------|---------|--------|
| First Response Time | Avg time to first reply | <4 hours |
| Resolution Time | Avg time to close | <24 hours |
| Tickets/Client/Month | Total tickets ÷ clients | <3 |
| Reopen Rate | Reopened ÷ Closed | <5% |
| CSAT | Avg satisfaction rating | >4.5/5 |
| SLA Compliance | On-time ÷ Total | >95% |

---

## INTEGRATIONS

### Slack Notifications
```
Channel: #support-tickets

New Critical Ticket:
🚨 CRITICAL TICKET

Client: [Client]
Issue: [Subject]
Ticket: [Link]

Respond within 1 hour!
```

### Email Notifications
```
To: Client
Subject: Support Ticket Created - SUP-___

Hi [Name],

We've received your support request:

Ticket: SUP-___
Subject: [Subject]
Priority: [Priority]

We'll respond within [SLA time].

Track your ticket: [Link]

Thanks,
[Agency] Support Team
```

---

*Support System v1.0 | [Your Agency] | Internal Use*
