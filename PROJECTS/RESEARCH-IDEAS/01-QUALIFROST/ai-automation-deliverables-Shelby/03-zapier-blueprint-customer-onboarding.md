# Zapier Blueprint #3: Customer Onboarding Automation

**Client Value:** 5-8 hours saved per customer, 100% onboarding completion, faster time-to-value
**Build Time:** 90-120 minutes
**Zapier Plan:** Professional ($50/mo)

---

## ZAP 1: Payment Received → Onboarding Kickoff

### TRIGGER
| Setting | Value |
|---------|-------|
| App | Stripe (or PayPal, Square) |
| Event | New Subscription (or New Payment) |
| Product | Select relevant product/service |
| Trigger | Test with recent payment |

### ACTION 1: Create CRM Deal
| App | HubSpot (or Pipedrive, Airtable) |
|-----|----------------------------------|
| Event | Create Deal |
| **Deal Properties:** | |
| Deal Name | Onboarding - {{Customer Name}} |
| Amount | {{Subscription Amount}} |
| Stage | New Customer |
| Close Date | Today + 30 days |
| Owner | Assigned CSM |
| Customer Email | {{Customer Email}} |
| Customer Phone | {{Customer Phone}} |
| Product | {{Product Name}} |
| Start Date | {{Subscription Start Date}} |

### ACTION 2: Send Welcome Email
| App | Gmail (or ActiveCampaign) |
|-----|--------------------------|
| To | {{Customer Email}} |
| Subject | Welcome to [Product]! Here's what's next 🎉 |
| Body | *Template below* |
| Attachments | Welcome packet PDF |

**Welcome Email Template:**
```
Hi {{First Name}},

Welcome aboard! We're thrilled to have you as a customer.

What happens next:

1. 📅 Schedule Your Kickoff Call
   Book your 30-minute onboarding call: [Calendly Link]
   
2. 📚 Access Your Resources
   Your personalized folder: [Google Drive Link]
   
3. ✅ Complete Your Profile
   Help us customize your experience: [Survey Link]

Your Customer Success Manager:
{{CSM Name}} - {{CSM Email}}

Quick Links:
- Knowledge Base: [Link]
- Video Tutorials: [Link]
- Support Portal: [Link]

We're here to help you succeed!

Best,
The [Company] Team
```

### ACTION 3: Create Onboarding Project
| App | Asana (or Trello, ClickUp) |
|-----|---------------------------|
| Event | Create Project |
| Project Name | Onboarding - {{Customer Name}} |
| Team | Customer Success |
| Due Date | Today + 30 days |
| Template | Standard Onboarding |
| Notes | Customer: {{Customer Name}}\nEmail: {{Customer Email}}\nPlan: {{Product Name}} |

### ACTION 4: Create Drive Folder
| App | Google Drive |
|-----|-------------|
| Event | Create Folder |
| Folder Name | {{Customer Name}} - [Year] |
| Parent Folder | Clients/[Year] |
| Share With | {{Customer Email}} (viewer) |

### ACTION 5: Internal Team Alert
| App | Slack |
|-----|-------|
| Channel | #customer-success |
| Message | *Template below* |

**Team Alert Template:**
```
🎉 NEW CUSTOMER ONBOARDING!

Customer: {{Customer Name}}
Company: {{Customer Company}}
Plan: {{Product Name}}
MRR: ${{Monthly Amount}}

CSM: {{Owner Name}}

Onboarding Project: [Asana Link]
CRM: [HubSpot Link]

Kickoff call to be scheduled!
```

### ACTION 6: Send Onboarding Survey
| App | Typeform (or Google Forms) |
|-----|---------------------------|
| Event | Send Email with Survey Link |
| To | {{Customer Email}} |
| Subject | Help us customize your experience |
| Body | Hi {{First Name}}, please complete this 3-min survey: [Survey Link] |

---

## ZAP 2: Onboarding Milestone → Check-in

### TRIGGER
| App | Asana |
|-----|-------|
| Event | Task Completed |
| Project | Filter: "Onboarding" projects |

### PATH A: Kickoff Call Completed
**Filter:** Task Name CONTAINS "Kickoff Call"

| ACTION 1: Send Follow-up Email |
|--------------------------------|
| App: Gmail |
| To: {{Customer Email}} |
| Subject: Great meeting! Here's what's next |
| Body: Meeting notes + next steps + timeline |

| ACTION 2: Update CRM |
|---------------------|
| App: HubSpot |
| Stage: Kickoff Complete |

| ACTION 3: Create 7-Day Follow-up Task |
|--------------------------------------|
| App: Asana |
| Task: Check-in: {{Customer Name}} |
| Due: 7 days from now |
| Assignee: CSM |

### PATH B: Training Completed
**Filter:** Task Name CONTAINS "Training"

| ACTION 1: Send Certificate |
|---------------------------|
| App: Gmail |
| To: {{Customer Email}} |
| Subject: Certificate of Completion 🎓 |
| Attachments: PDF Certificate |

| ACTION 2: Request Testimonial |
|------------------------------|
| App: Gmail |
| To: {{Customer Email}} |
| Subject: Quick favor? |
| Body: Would you share your experience? [Testimonial Link] |

| ACTION 3: Update CRM |
|---------------------|
| App: HubSpot |
| Stage: Training Complete |
| Note: Ready for optimization phase |

---

## ZAP 3: Scheduled Success Check-ins

### TRIGGER
| App | Schedule by Zapier |
|-----|-------------------|
| Event | Every Week |
| Day | Monday |
| Time | 10:00 AM |

### ACTION 1: Find Customers Due for Check-in
| App | HubSpot |
|-----|---------|
| Event | Find Contacts |
| Filter 1 | Last Contact Date < 14 days ago |
| Filter 2 | Status = Active Customer |
| Filter 3 | Onboarding Complete = Yes |

### ACTION 2: Create Check-in Tasks
| App | Asana |
|-----|-------|
| Event | Create Task |
| For Each Customer | Loop through results |
| Task Name | Check-in: {{Customer Name}} |
| Project | Customer Success - [Month] |
| Due Date | Friday of this week |
| Assignee | {{Customer CSM}} |
| Notes | Last contact: {{Last Contact Date}} |

### ACTION 3: Send CSM Summary Email
| App | Gmail |
|-----|-------|
| To | {{CSM Email}} |
| Subject | Weekly Check-ins Due - {{Count}} Customers |
| Body | *Template below* |

**CSM Summary Template:**
```
Hi {{CSM Name}},

You have {{Count}} customer check-ins due this week:

{{Customer List with Links}}

Email template:
-----
Subject: How's it going? Quick check-in 🙌

Hi {{First Name}},

You've been with us for about a month now!

Quick questions:
1. How's everything going with [Product]?
2. Have you achieved [key outcome]?
3. Any challenges I can help with?

Want to hop on a quick call? [Calendar Link]

Best,
{{CSM Name}}
-----
```

---

## ZAP 4: Support Ticket → Escalation

### TRIGGER
| App | Help Scout (or Zendesk, Intercom) |
|-----|----------------------------------|
| Event | New Conversation |
| Mailbox | Support |

### FILTER: Urgent Keywords
| Condition | Logic |
|-----------|-------|
| Subject/Body | Contains: "urgent", "broken", "not working", "emergency" |

### ACTION 1: Create CRM Task
| App | HubSpot |
|-----|---------|
| Event | Create Task |
| Task | Follow up on ticket #{{Ticket ID}} |
| Due | 24 hours from now |
| Related To | Customer Contact |

### ACTION 2: Slack Urgent Alert
| App | Slack |
|-----|-------|
| Channel | #support-urgent |
| Message | *Template below* |

**Urgent Alert Template:**
```
🚨 URGENT SUPPORT TICKET

Customer: {{Customer Name}}
Issue: {{Ticket Subject}}
Priority: High

Ticket: {{Ticket Link}}

Respond within 1 hour!
```

### ACTION 3: Post-Resolution Survey
| Trigger | Ticket Status = Closed |
|---------|----------------------|
| Delay | 2 days |
| App | Gmail |
| To | {{Customer Email}} |
| Subject | How did we do? |
| Body | Quick 1-min survey: [CSAT Link] |

---

## TESTING CHECKLIST

- [ ] Process test payment
- [ ] Verify CRM deal created
- [ ] Confirm welcome email sent
- [ ] Check Asana project created
- [ ] Verify Drive folder structure
- [ ] Test Slack notification
- [ ] Complete test kickoff task
- [ ] Verify follow-up email triggered
- [ ] Test support ticket flow
- [ ] Run weekly check-in manually

---

## MONITORING

| Task | Frequency | Owner |
|------|-----------|-------|
| Check failed Zaps | Daily | CS |
| Review onboarding progress | Weekly | CS Manager |
| Update email templates | Monthly | Marketing |
| Analyze completion time | Monthly | Ops |

---

*Blueprint v1.0 | [Your Agency] | Client: [Name]*
