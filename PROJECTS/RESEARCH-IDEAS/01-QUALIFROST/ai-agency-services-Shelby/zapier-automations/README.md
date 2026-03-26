# Advanced Zapier Automations Library

**10 Complex Multi-Step Zaps for Enterprise AI Automation**

Each Zap includes:
- Trigger configuration
- Multi-step actions with filters and paths
- Error handling strategies
- Integration points
- Use case documentation

---

## Table of Contents

1. [Lead-to-Onboarding Automation](#1-lead-to-onboarding-automation)
2. [Content Distribution Pipeline](#2-content-distribution-pipeline)
3. [Customer Support Triage](#3-customer-support-triage)
4. [Sales Pipeline Enrichment](#4-sales-pipeline-enrichment)
5. [Employee Onboarding Workflow](#5-employee-onboarding-workflow)
6. [Social Media Intelligence](#6-social-media-intelligence)
7. [Invoice-to-Payment Tracking](#7-invoice-to-payment-tracking)
8. [Event Registration Management](#8-event-registration-management)
9. [Product Feedback Loop](#9-product-feedback-loop)
10. [Compliance Documentation Auto-Generator](#10-compliance-documentation-auto-generator)

---

## 1. Lead-to-Onboarding Automation

**Purpose:** Automatically move leads from capture through complete onboarding

### Trigger
- **App:** Facebook Lead Ads / Typeform / Webhooks
- **Event:** New Lead Submitted

### Actions (12 steps)

| Step | App | Action | Conditions |
|------|-----|--------|------------|
| 1 | Zapier Storage | Store Lead ID | Always |
| 2 | Filter | Qualify Lead | Score > 50 |
| 3 | CRM (HubSpot/Salesforce) | Create Contact | Path A: Qualified |
| 4 | CRM | Create Deal | Path A: Qualified |
| 5 | Email (Gmail/Outlook) | Send Welcome Email | Path A: Qualified |
| 6 | Calendar | Schedule Onboarding Call | Path A: Qualified |
| 7 | Slack | Notify Sales Team | Path A: Qualified |
| 8 | DocuSign | Send Contract | Path A: Qualified |
| 9 | Email | Send Nurture Sequence | Path B: Not Qualified |
| 10 | CRM | Add to Nurture List | Path B: Not Qualified |
| 11 | Google Sheets | Log All Leads | Always |
| 12 | Webhook | Notify Analytics | Always |

### Filter Logic
```
Path A (Qualified):
- Company Size > 10 employees
- Budget > $5000
- Timeline < 90 days

Path B (Nurture):
- All other leads
```

### Error Handling
- Retry failed CRM creates (3 attempts, 5min intervals)
- Fallback email notification on calendar failures
- Dead letter queue for webhook failures

---

## 2. Content Distribution Pipeline

**Purpose:** Multi-channel content distribution from single source

### Trigger
- **App:** Google Docs / Notion / Airtable
- **Event:** New Content Approved

### Actions (15 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | Formatter | Extract Title, Body, Tags |
| 2 | AI (OpenAI) | Generate Social Variations |
| 3 | Filter | Route by Content Type |
| 4 | WordPress | Publish Blog Post |
| 5 | Medium | Cross-post Article |
| 6 | LinkedIn | Create Company Post |
| 7 | Twitter/X | Create Thread (multi-tweet) |
| 8 | Facebook | Publish to Page |
| 9 | Instagram | Create Post (via Later) |
| 10 | Pinterest | Create Pin |
| 11 | Email (ConvertKit) | Add to Newsletter |
| 12 | Slack | Notify Content Team |
| 13 | Google Sheets | Update Content Calendar |
| 14 | Analytics | Track Distribution |
| 15 | Storage | Archive Published Content |

### AI Prompt Template
```
Generate 5 social media variations for the following content:
- Twitter thread (5 tweets max)
- LinkedIn post (professional tone)
- Instagram caption (engaging, emoji-friendly)
- Facebook post (community-focused)
- Pinterest description (SEO-optimized)

Content: {{content_body}}
Target Audience: {{audience}}
Key Message: {{key_message}}
```

---

## 3. Customer Support Triage

**Purpose:** Intelligent support ticket routing and resolution

### Trigger
- **App:** Email / Zendesk / Intercom
- **Event:** New Support Request

### Actions (10 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | AI (OpenAI) | Analyze Sentiment & Intent |
| 2 | Filter | Route by Priority |
| 3 | Filter | Route by Category |
| 4 | CRM | Lookup Customer History |
| 5 | Zendesk | Create/Update Ticket |
| 6 | Slack | Notify Assigned Team |
| 7 | Knowledge Base | Suggest Articles |
| 8 | Email | Auto-respond with ETA |
| 9 | Google Sheets | Log Metrics |
| 10 | Escalation | Alert Manager if VIP |

### Priority Matrix
```
URGENT (Path A):
- Sentiment: Negative/Angry
- Keywords: "broken", "urgent", "asap", "down"
- Customer Tier: Enterprise
→ Route to Senior Support + Slack Alert

NORMAL (Path B):
- Standard inquiries
- Feature requests
→ Route to General Queue

LOW (Path C):
- General questions
- Documentation requests
→ Auto-respond + KB Articles
```

---

## 4. Sales Pipeline Enrichment

**Purpose:** Automatically enrich and score sales leads

### Trigger
- **App:** CRM (HubSpot/Salesforce/Pipedrive)
- **Event:** New Deal Created

### Actions (11 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | Clearbit | Enrich Company Data |
| 2 | LinkedIn | Fetch Company Info |
| 3 | AI | Generate Lead Score |
| 4 | Filter | Score > 70 |
| 5 | CRM | Update Deal Fields |
| 6 | Email | Send Personalized Outreach |
| 7 | Calendar | Create Follow-up Task |
| 8 | Slack | Notify Account Executive |
| 9 | Google Sheets | Update Pipeline Report |
| 10 | Outreach | Add to Sequence |
| 11 | Storage | Log Enrichment Data |

### Lead Scoring Formula
```
Base Score: 50
+ Company Size (>100 employees): +20
+ Industry Match: +15
+ Budget Indicated: +10
+ Timeline < 60 days: +15
- No Decision Maker: -10
```

---

## 5. Employee Onboarding Workflow

**Purpose:** Complete new hire onboarding automation

### Trigger
- **App:** HR System (BambooHR/Gusto)
- **Event:** New Employee Added

### Actions (14 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | Google Workspace | Create Account |
| 2 | Slack | Create User + Add to Channels |
| 3 | Notion | Create Employee Page |
| 4 | Asana | Create Onboarding Project |
| 5 | Email | Send Welcome Package |
| 6 | DocuSign | Send HR Documents |
| 7 | Calendar | Schedule Orientation |
| 8 | Calendar | Schedule 1:1s |
| 9 | LMS | Enroll in Training |
| 10 | IT | Request Equipment |
| 11 | Slack | Notify Team |
| 12 | Google Sheets | Update Org Chart |
| 13 | Bonusly | Send Welcome Points |
| 14 | Survey | Send Day 7 Check-in |

---

## 6. Social Media Intelligence

**Purpose:** Monitor brand mentions and engage automatically

### Trigger
- **App:** Brand24 / Mention / Twitter API
- **Event:** New Brand Mention

### Actions (9 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | AI | Analyze Sentiment |
| 2 | Filter | Positive/Negative/Neutral |
| 3 | CRM | Lookup Mentioner |
| 4 | Google Sheets | Log Mention |
| 5 | Slack | Notify Marketing |
| 6 | Path A: Positive | Thank + Engage |
| 7 | Path B: Negative | Alert + Create Ticket |
| 8 | Path C: Neutral | Log Only |
| 9 | Analytics | Update Dashboard |

---

## 7. Invoice-to-Payment Tracking

**Purpose:** End-to-end invoice and payment management

### Trigger
- **App:** QuickBooks / Xero / FreshBooks
- **Event:** Invoice Sent

### Actions (10 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | Google Sheets | Log Invoice |
| 2 | Email | Send to Client |
| 3 | Calendar | Create Follow-up (7 days) |
| 4 | Filter | Payment Received? |
| 5 | Path A: Paid | Mark Complete + Thank You |
| 6 | Path B: Overdue (7d) | Send Reminder 1 |
| 7 | Path B: Overdue (14d) | Send Reminder 2 |
| 8 | Path B: Overdue (30d) | Escalate to Manager |
| 9 | CRM | Update Client Record |
| 10 | Slack | Notify Finance Team |

---

## 8. Event Registration Management

**Purpose:** Complete event registration and follow-up workflow

### Trigger
- **App:** Eventbrite / Meetup / Zoom Webinars
- **Event:** New Registration

### Actions (12 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | CRM | Create/Update Contact |
| 2 | Email | Send Confirmation |
| 3 | Calendar | Add to Event |
| 4 | Slack | Notify Event Team |
| 5 | Google Sheets | Update Attendee List |
| 6 | Filter | 24 Hours Before Event |
| 7 | Email | Send Reminder |
| 8 | SMS | Send Reminder (VIP) |
| 9 | Filter | Event Complete |
| 10 | Email | Send Recording + Resources |
| 11 | Email | Send Survey |
| 12 | CRM | Add to Nurture Sequence |

---

## 9. Product Feedback Loop

**Purpose:** Collect, categorize, and route product feedback

### Trigger
- **App:** Typeform / Canny / UserVoice
- **Event:** New Feedback Submitted

### Actions (10 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | AI | Categorize Feedback |
| 2 | AI | Extract Feature Requests |
| 3 | Filter | Bug vs Feature vs Other |
| 4 | Jira | Create Bug Ticket (Path A) |
| 5 | Productboard | Add Feature Request (Path B) |
| 6 | Slack | Notify Product Team |
| 7 | Email | Acknowledge Submission |
| 8 | CRM | Link to Customer Record |
| 9 | Google Sheets | Update Feedback Tracker |
| 10 | Notion | Update Public Roadmap |

---

## 10. Compliance Documentation Auto-Generator

**Purpose:** Generate and maintain compliance documentation

### Trigger
- **App:** Schedule (Monthly) / Airtable (New Policy)
- **Event:** Scheduled / New Policy Added

### Actions (11 steps)

| Step | App | Action |
|------|-----|--------|
| 1 | Airtable | Fetch All Policies |
| 2 | AI | Generate Summary Docs |
| 3 | Google Docs | Create Compliance Report |
| 4 | DocuSign | Route for Approval |
| 5 | Filter | All Approved? |
| 6 | Google Drive | Archive Previous Version |
| 7 | Google Drive | Store New Version |
| 8 | Email | Notify Stakeholders |
| 9 | Slack | Post to Compliance Channel |
| 10 | Google Sheets | Update Compliance Tracker |
| 11 | Calendar | Schedule Next Review |

---

## Implementation Notes

### Best Practices

1. **Error Handling:** Always include error paths and notifications
2. **Rate Limiting:** Use delays between actions when hitting API limits
3. **Data Storage:** Use Zapier Storage for intermediate data
4. **Testing:** Test each path independently before going live
5. **Documentation:** Maintain runbooks for each Zap

### Monitoring

- Set up Zap history monitoring
- Create alerts for failed tasks
- Review weekly for optimization opportunities

### Security

- Use encrypted storage for sensitive data
- Implement proper access controls
- Regular credential rotation
- Audit logs for compliance

---

*Last Updated: March 2026*
*Version: 2.0*
