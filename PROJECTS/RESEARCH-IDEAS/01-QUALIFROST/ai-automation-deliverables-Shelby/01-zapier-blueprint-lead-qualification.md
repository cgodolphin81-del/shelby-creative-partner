# Zapier Automation Blueprint #1: Lead Qualification & CRM Sync

## 🎯 Business Outcome
Automatically capture, qualify, and route leads from multiple sources into CRM with instant follow-up sequences.

## 💰 Client Value
- **Time Saved:** 10-15 hours/week manual data entry
- **Response Time:** Instant vs. 2-4 hour average
- **Conversion Lift:** 40-60% faster follow-up = 35% more conversions
- **Error Reduction:** Eliminates manual entry mistakes

---

## 📋 Prerequisites

### Accounts Needed:
- [ ] Zapier (Starter plan minimum - $20/month)
- [ ] CRM (HubSpot, Pipedrive, or Salesforce)
- [ ] Email (Gmail, Outlook, or SMTP)
- [ ] Google Sheets (for backup logging)
- [ ] Slack (optional - for team notifications)

### Access Required:
- [ ] Form platform admin access (Typeform, Gravity Forms, etc.)
- [ ] CRM admin access
- [ ] Email account with send permissions
- [ ] Slack workspace (if using notifications)

---

## 🔧 Build Instructions

### ZAP 1: Form Submission → CRM + Follow-up

**Trigger: New Form Submission**

1. **Trigger App:** Typeform (or your form platform)
   - Event: "New Entry"
   - Form: Select your lead capture form
   - Test: Pull in a sample submission

2. **Action 1: Create/Update Contact in CRM**
   - App: HubSpot (or Pipedrive/Salesforce)
   - Event: "Create Contact"
   - Field Mapping:
     ```
     Email → Typeform: Email
     First Name → Typeform: First Name
     Last Name → Typeform: Last Name
     Phone → Typeform: Phone
     Company → Typeform: Company Name
     Lead Source → "Website Form"
     Budget Range → Typeform: Budget Question
     Timeline → Typeform: Timeline Question
     ```
   - Enable: "Update if exists" (match on email)

3. **Action 2: Add to Email Sequence**
   - App: Gmail (or ActiveCampaign/ConvertKit)
   - Event: "Send Email"
   - To: Typeform: Email
   - Subject: "Thanks for your interest, {{First Name}}!"
   - Body: Use template (see below)
   - Send Delay: 0 minutes (instant)

4. **Action 3: Log to Google Sheets**
   - App: Google Sheets
   - Event: "Create Spreadsheet Row"
   - Spreadsheet: "Lead Log [Year]"
   - Worksheet: "All Leads"
   - Columns:
     ```
     A: Timestamp → Zapier Built-in: Trigger Time
     B: Name → Typeform: Full Name
     C: Email → Typeform: Email
     D: Phone → Typeform: Phone
     E: Company → Typeform: Company
     F: Budget → Typeform: Budget
     G: Status → "New - Contacted"
     H: Assigned To → "Unassigned"
     ```

5. **Action 4: Slack Notification** (Optional)
   - App: Slack
   - Event: "Send Channel Message"
   - Channel: #sales-leads
   - Message:
     ```
     🎯 NEW LEAD ALERT
     
     Name: {{First Name}} {{Last Name}}
     Company: {{Company}}
     Budget: {{Budget Range}}
     Timeline: {{Timeline}}
     
     View in CRM: {{HubSpot Contact URL}}
     ```

---

### ZAP 2: Lead Scoring & Routing

**Trigger: New Contact in CRM**

1. **Trigger App:** HubSpot
   - Event: "New Contact"
   - Filter: Only continue if Lead Source = "Website Form"

2. **Filter: Qualification Logic**
   - Set up filter conditions (ALL must match):
     ```
     Budget Range CONTAINS "$5000" OR "$10000" OR "10k+"
     Timeline DOES NOT CONTAIN "someday" OR "not sure"
     Email IS NOT EMPTY
     ```

3. **Path A: Qualified Lead**
   - Action: Update Contact Property
     - Property: "Lead Score" → Set to 80
     - Property: "Status" → Set to "Qualified"
   - Action: Send Internal Email
     - To: sales@company.com
     - Subject: "🔥 HOT LEAD: {{First Name}} from {{Company}}"
     - Body: Include all lead details + CRM link
   - Action: Create Task in CRM
     - Type: "Call"
     - Due Date: Today + 1 business day
     - Assigned To: Sales team member

4. **Path B: Unqualified Lead**
   - Action: Update Contact Property
     - Property: "Lead Score" → Set to 30
     - Property: "Status" → Set to "Nurture"
   - Action: Add to Nurture Sequence
     - App: Email platform
     - List: "Monthly Newsletter"
   - Action: Send Thank You Email
     - Template: General info packet

---

### ZAP 3: Meeting Booked → Calendar + Reminders

**Trigger: Meeting Scheduled**

1. **Trigger App:** Calendly (or Cal.com)
   - Event: "Invitee Created"
   - Event Type: "Discovery Call"

2. **Action 1: Create Calendar Event**
   - App: Google Calendar
   - Event: "Create Detailed Event"
   - Details:
     ```
     Title: "Discovery Call - {{Invitee Name}}"
     Start: {{Invitee Start Time}}
     End: {{Invitee End Time}}
     Description: 
       Name: {{Invitee Name}}
       Email: {{Invitee Email}}
       Phone: {{Invitee Phone}}
       Company: {{Invitee Company}}
       Notes: {{Invitee Answers}}
     ```
   - Add Guests: sales@company.com

3. **Action 2: Update CRM Contact**
   - App: HubSpot
   - Event: "Update Contact"
   - Find Contact By: Email
   - Update Properties:
     ```
     Status: "Meeting Scheduled"
     Meeting Date: {{Invitee Start Time}}
     Lead Score: 90
     ```

4. **Action 3: Send Confirmation Email**
   - App: Gmail
   - To: {{Invitee Email}}
   - Subject: "Confirmed: Your Discovery Call on {{Date}}"
   - Body: Use confirmation template (see below)

5. **Action 4: Reminder Sequence**
   - App: Delay by Zapier
   - Delay: 23 hours (for 24hr reminder)
   - Action: Send Email Reminder
   - App: Gmail
   - Subject: "Reminder: Call Tomorrow at {{Time}}"

---

## 📧 Email Templates

### Immediate Follow-Up Template
```
Subject: Thanks for your interest, {{First Name}}!

Hi {{First Name}},

Thanks for reaching out to [Company Name]! I saw you're interested in 
[BUDGET_RANGE] and looking to [TIMELINE].

I'd love to learn more about what you're trying to accomplish. 

Can we schedule a quick 15-minute call to discuss? Here's my calendar:
[CALENDAR_LINK]

In the meantime, here are a few resources that might help:
- [Case Study Link]
- [Service Overview]

Talk soon!
[Your Name]
[Title]
[Phone]
```

### Meeting Confirmation Template
```
Subject: Confirmed: Your Discovery Call on {{Date}}

Hi {{First Name}},

Looking forward to our call on {{Date}} at {{Time}}!

**Call Details:**
📅 Date: {{Date}}
🕐 Time: {{Time}} {{Timezone}}
📍 Location: [Zoom/Phone Link]

**What We'll Cover:**
- Your current challenges with [pain point]
- What success looks like for you
- Whether we're a good fit to help
- Next steps (if it makes sense)

**Add to Calendar:** [Google Calendar Link]

If you need to reschedule, no problem! Just use this link:
[Reschedule Link]

See you soon!
[Your Name]
```

---

## 🧪 Testing Checklist

- [ ] Submit test form with known data
- [ ] Verify contact created in CRM with all fields
- [ ] Confirm email sent and received
- [ ] Check Google Sheets row created
- [ ] Verify Slack notification (if enabled)
- [ ] Test filter paths (qualified vs. unqualified)
- [ ] Test meeting booking flow
- [ ] Verify calendar event created
- [ ] Test reminder email timing
- [ ] Check all links work correctly

---

## 📊 Monitoring & Maintenance

### Weekly Checks:
- [ ] Review Zapier task usage
- [ ] Check for failed Zaps in Zapier dashboard
- [ ] Verify lead count matches form submissions
- [ ] Spot-check email delivery

### Monthly Optimization:
- [ ] Review conversion rates at each stage
- [ ] A/B test email templates
- [ ] Update lead scoring criteria based on results
- [ ] Clean up old test data

---

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Zap not triggering | Check form webhook, re-authenticate app |
| Duplicate contacts | Enable "Update if exists" in CRM action |
| Email not sending | Check email authentication, spam folder |
| Data mismatch | Review field mapping, check form field IDs |
| Delay not working | Upgrade Zapier plan for multi-step delays |

---

## 📈 Expected Results

**Week 1-2:** Setup and testing
**Week 3-4:** 100% of leads captured automatically
**Month 2:** Response time <5 minutes average
**Month 3:** 35% increase in lead-to-meeting conversion

---

*Blueprint Version: 1.0 | Last Updated: [Date] | Client: [Client Name]*
