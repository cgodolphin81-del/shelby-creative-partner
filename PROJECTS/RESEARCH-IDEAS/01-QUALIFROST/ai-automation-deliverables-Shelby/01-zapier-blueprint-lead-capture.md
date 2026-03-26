# Zapier Blueprint #1: Lead Capture → CRM → Follow-up

**Client Value:** Eliminate manual data entry, respond to leads in <2 minutes, 100% lead tracking
**Build Time:** 45-60 minutes
**Zapier Plan:** Starter ($20/mo)

---

## ZAP 1: Form Submission → CRM Contact + Email

### TRIGGER
| Setting | Value |
|---------|-------|
| App | Typeform (or Gravity Forms, JotForm, Google Forms) |
| Event | New Entry |
| Form | Select your lead capture form |
| Trigger | Test trigger with sample submission |

### ACTION 1: Create Contact in CRM
| App | HubSpot (or Pipedrive, Salesforce, Airtable) |
|-----|---------------------------------------------|
| Event | Create Contact |
| **Field Mapping:** | |
| Email | Typeform → Email field |
| First Name | Typeform → First Name field |
| Last Name | Typeform → Last Name field |
| Phone | Typeform → Phone field |
| Company | Typeform → Company field |
| Lead Source | Static value: "Website Form" |
| Budget | Typeform → Budget field |
| Timeline | Typeform → Timeline field |
| **Settings:** | |
| Update if exists | YES (match on Email) |
| Create new if not found | YES |

### ACTION 2: Send Immediate Email
| App | Gmail (or Outlook, SMTP) |
|-----|-------------------------|
| Event | Send Email |
| To | Typeform → Email field |
| Subject | Thanks for your interest, {{First Name}}! |
| Body | *Use template below* |
| Send Options | Standard |

**Email Template:**
```
Hi {{First Name}},

Thanks for reaching out to [Company Name]! I saw you're interested in 
[BUDGET_RANGE] and looking to [TIMELINE].

I'd love to learn more about what you're trying to accomplish. 

Can we schedule a quick 15-minute call? Here's my calendar:
[CALENDAR_LINK]

Talk soon!
[Your Name]
[Phone]
```

### ACTION 3: Log to Google Sheets
| App | Google Sheets |
|-----|--------------|
| Event | Create Spreadsheet Row |
| Spreadsheet | "Lead Log [Year]" |
| Worksheet | "All Leads" |
| **Columns:** | |
| Timestamp | Zapier → Trigger Time |
| Name | Typeform → Full Name |
| Email | Typeform → Email |
| Phone | Typeform → Phone |
| Company | Typeform → Company |
| Budget | Typeform → Budget |
| Status | Static: "New - Contacted" |

### ACTION 4: Slack Notification (Optional)
| App | Slack |
|-----|-------|
| Event | Send Channel Message |
| Channel | #sales-leads |
| Message | See below |

**Slack Message:**
```
🎯 NEW LEAD

Name: {{First Name}} {{Last Name}}
Company: {{Company}}
Budget: {{Budget}}
Timeline: {{Timeline}}

View in CRM: {{HubSpot Contact URL}}
```

---

## ZAP 2: Lead Scoring + Sales Alert

### TRIGGER
| App | HubSpot |
|-----|---------|
| Event | New Contact |
| Filter | Lead Source = "Website Form" |

### FILTER: Qualified Lead
| Condition | Logic |
|-----------|-------|
| Budget Range | Contains "$5000" OR "$10000" OR "10k+" |
| Timeline | Does NOT contain "someday" OR "not sure" |
| Email | Is not empty |

**All conditions must match → Continue to Actions**

### ACTION 1: Update Lead Score
| App | HubSpot |
|-----|---------|
| Event | Update Contact |
| Contact | Use contact from trigger |
| Properties | |
| Lead Score | 80 |
| Status | Qualified |

### ACTION 2: Send Sales Alert Email
| App | Gmail |
|-----|-------|
| To | sales@company.com |
| Subject | 🔥 HOT LEAD: {{First Name}} from {{Company}} |
| Body | *Template below* |

**Sales Alert Template:**
```
HOT LEAD ALERT

Name: {{First Name}} {{Last Name}}
Company: {{Company}}
Budget: {{Budget}}
Timeline: {{Timeline}}
Email: {{Email}}
Phone: {{Phone}}

CRM Link: {{HubSpot Contact URL}}

Action required: Call within 1 hour!
```

### ACTION 3: Create Call Task
| App | HubSpot |
|-----|---------|
| Event | Create Task |
| Task Type | Call |
| Title | Call hot lead: {{First Name}} - {{Company}} |
| Due Date | Today + 1 business day |
| Assigned To | Sales team member |
| Related To | Contact from trigger |

---

## ZAP 3: Meeting Booked → Calendar + CRM Update

### TRIGGER
| App | Calendly (or Cal.com) |
|-----|----------------------|
| Event | Invitee Created |
| Event Type | Discovery Call (30 min) |

### ACTION 1: Create Calendar Event
| App | Google Calendar |
|-----|----------------|
| Event | Create Detailed Event |
| Title | Discovery Call - {{Invitee Name}} |
| Start Time | {{Invitee Start Time}} |
| End Time | {{Invitee End Time}} |
| Description | Name: {{Invitee Name}}\nEmail: {{Invitee Email}}\nPhone: {{Invitee Phone}}\nCompany: {{Invitee Company}}\nNotes: {{Invitee Answers}} |
| Guests | sales@company.com |

### ACTION 2: Update CRM Contact
| App | HubSpot |
|-----|---------|
| Event | Update Contact |
| Find By | Email = {{Invitee Email}} |
| Properties | |
| Status | Meeting Scheduled |
| Meeting Date | {{Invitee Start Time}} |
| Lead Score | 90 |

### ACTION 3: Send Confirmation Email
| App | Gmail |
|-----|-------|
| To | {{Invitee Email}} |
| Subject | Confirmed: Your Discovery Call on {{Date}} |
| Body | *Template below* |

**Confirmation Template:**
```
Hi {{Invitee Name}},

Looking forward to our call!

📅 Date: {{Date}}
🕐 Time: {{Time}} {{Timezone}}
📍 Location: [Zoom Link]

What we'll cover:
- Your current challenges
- How we can help
- Timeline & investment
- Next steps

Add to calendar: [Google Calendar Link]

Need to reschedule? [Reschedule Link]

See you soon!
[Your Name]
```

### ACTION 4: 24-Hour Reminder
| App | Delay by Zapier |
|-----|----------------|
| Delay | 23 hours |

| App | Gmail |
|-----|-------|
| Event | Send Email |
| To | {{Invitee Email}} |
| Subject | Reminder: Call Tomorrow at {{Time}} |
| Body | Quick reminder about our call tomorrow! [Zoom Link] |

---

## TESTING CHECKLIST

- [ ] Submit test form with known data
- [ ] Verify contact created in CRM
- [ ] Confirm email sent and received
- [ ] Check Google Sheets row created
- [ ] Verify Slack notification
- [ ] Test filter (qualified vs unqualified)
- [ ] Book test meeting
- [ ] Verify calendar event created
- [ ] Test reminder email timing

---

## MONITORING

| Task | Frequency | Owner |
|------|-----------|-------|
| Check failed Zaps | Daily | Ops |
| Review lead count | Weekly | Sales |
| Update email templates | Monthly | Marketing |

---

*Blueprint v1.0 | [Your Agency] | Client: [Name]*
