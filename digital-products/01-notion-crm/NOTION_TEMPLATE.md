# Notion CRM - Complete Template Structure

**Copy this entire structure into Notion to create your CRM.**

---

## 🏠 CRM DASHBOARD (Main Page)

### Page Title: `🎯 Client CRM Dashboard`

**Cover Image:** Professional office/CRM dashboard
**Icon:** 🎯

---

## 📊 DATABASE 1: CONTACTS

**Database Name:** `👥 Contacts`
**Database Type:** Table (with multiple views)

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Name | Title | (text) |
| Company | Relation | → Companies database |
| Email | Email | (email format) |
| Phone | Phone | (phone format) |
| Status | Select | 🟢 Lead, 🟡 Prospect, 🔵 Active Client, ⚫ Past Client, ❌ Unqualified |
| Priority | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| Tags | Multi-select | VIP, Referral, Cold Outreach, Inbound, Enterprise, SMB, Freelancer |
| Lead Source | Select | Website, Referral, Social Media, Cold Email, LinkedIn, Google Ads, Event, Other |
| First Contact | Date | (date picker) |
| Last Contact | Date | (date picker) |
| Next Follow-up | Date | (date picker) |
| Deal Value | Number | $ format |
| Lifetime Value | Rollup | From Deals → Sum |
| Owner | Person | (team member assignment) |
| Notes | Text | (multi-line) |
| LinkedIn | URL | (profile link) |
| Location | Text | (city, country) |

### Views to Create:

**1. All Contacts (Table)**
- Sort: Last Contact (descending)
- Filter: None

**2. Hot Leads (Table)**
- Filter: Status = "🟡 Prospect" AND Priority = "🔴 High"
- Sort: Next Follow-up (ascending)

**3. Active Clients (Table)**
- Filter: Status = "🔵 Active Client"
- Sort: Name (A→Z)

**4. Follow-ups This Week (List)**
- Filter: Next Follow-up → This week
- Sort: Next Follow-up (ascending)

**5. By Lead Source (Board)**
- Group by: Lead Source
- Sort: Deal Value (descending)

---

## 🏢 DATABASE 2: COMPANIES

**Database Name:** `🏢 Companies`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Company Name | Title | (text) |
| Website | URL | (website link) |
| Industry | Select | Technology, Healthcare, Finance, Retail, Manufacturing, Education, Real Estate, Marketing, Legal, Other |
| Size | Select | 1-10, 11-50, 51-200, 201-500, 500+ |
| Annual Revenue | Number | $ format |
| Address | Text | (full address) |
| Main Contact | Relation | → Contacts database |
| Status | Select | 🟢 Target, 🟡 In Progress, 🔵 Customer, ⚫ Churned |
| Created Date | Created Time | (auto) |
| Notes | Text | (multi-line) |
| LinkedIn | URL | (company page) |
| Employees on LinkedIn | Number | (count) |

### Views:
- All Companies (Table)
- Customers Only (Filter: Status = "🔵 Customer")
- Target Accounts (Filter: Status = "🟢 Target")

---

## 💰 DATABASE 3: DEALS/PIPELINE

**Database Name:** `💰 Sales Pipeline`
**Database Type:** Board (Kanban)

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Deal Name | Title | (text) |
| Contact | Relation | → Contacts database |
| Company | Relation | → Companies database |
| Stage | Status | 📥 New Lead, 📞 Contacted, 🤝 Proposal Sent, 💬 Negotiation, ✅ Closed Won, ❌ Closed Lost |
| Value | Number | $ format |
| Probability | Select | 10%, 25%, 50%, 75%, 90%, 100% |
| Expected Close | Date | (date picker) |
| Days Open | Formula | `dateBetween(now(), prop("Created Time"), "days")` |
| Weighted Value | Formula | `prop("Value") * toNumber(replaceAll(prop("Probability"), "%", "")) / 100` |
| Source | Select | Inbound, Outbound, Referral, Partner, Website, Social Media |
| Owner | Person | (assignment) |
| Last Activity | Date | (manual update) |
| Next Step | Text | (action item) |
| Lost Reason | Select | Price, Timing, Competitor, Not a Fit, No Budget, Ghosted, Other |

### Board Views (Group by Stage):

**1. Full Pipeline**
- Group: Stage
- Sort: Expected Close (ascending)
- Card Preview: Contact

**2. My Deals**
- Filter: Owner = [Me]
- Group: Stage

**3. Closing This Month**
- Filter: Expected Close → This month
- Group: Stage

**4. At Risk**
- Filter: Days Open > 30 AND Stage ≠ "✅ Closed Won"
- Sort: Days Open (descending)

---

## ✅ DATABASE 4: TASKS

**Database Name:** `✅ Tasks & Actions`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Task | Title | (text) |
| Status | Status | 📝 To Do, 🔄 In Progress, ✅ Complete, ⏸️ On Hold |
| Priority | Select | 🔴 Urgent, 🟡 High, 🟢 Normal, ⚪ Low |
| Due Date | Date | (date picker) |
| Related Contact | Relation | → Contacts database |
| Related Deal | Relation | → Deals database |
| Task Type | Select | 📞 Call, 📧 Email, 📝 Proposal, 🤝 Meeting, 💰 Follow-up, 📊 Research, Other |
| Duration | Select | 15 min, 30 min, 1 hour, 2 hours, 4 hours, Full day |
| Completed | Checkbox | (checkbox) |
| Completed Date | Date | (auto on complete) |
| Assigned To | Person | (team member) |
| Recurring | Checkbox | (checkbox) |
| Recurrence | Select | Daily, Weekly, Monthly, Quarterly |

### Views:
- Today's Tasks (Filter: Due Date = Today)
- Overdue (Filter: Due Date < Today AND Completed = false)
- By Contact (Group: Related Contact)
- Completed This Week (Filter: Completed = true)

---

## 📅 DATABASE 5: MEETINGS

**Database Name:** `📅 Meetings & Calls`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Meeting Title | Title | (text) |
| Contact | Relation | → Contacts database |
| Company | Relation | → Companies database |
| Related Deal | Relation | → Deals database |
| Type | Select | 📞 Discovery, 🎯 Demo, 💼 Proposal, 🤝 Negotiation, 👋 Kickoff, 📊 Check-in, Other |
| Date/Time | Date | (with time) |
| Duration | Select | 15 min, 30 min, 45 min, 1 hour, 1.5 hours, 2 hours |
| Location | Select | Zoom, Google Meet, Phone, In-Person, Other |
| Meeting Link | URL | (video conferencing link) |
| Status | Select | 📅 Scheduled, ✅ Completed, ❌ Cancelled, 🔄 Rescheduled |
| Agenda | Text | (bullet points) |
| Notes | Text | (meeting notes) |
| Action Items | Text | (follow-up tasks) |
| Next Meeting | Date | (follow-up date) |
| Recording | URL | (recording link) |

### Views:
- Upcoming Meetings (Filter: Date ≥ Today)
- This Week (Filter: Date → This week)
- Meeting History (Sort: Date descending)
- By Type (Group: Type)

---

## 📧 DATABASE 6: EMAIL LOG

**Database Name:** `📧 Email Communications`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Subject | Title | (text) |
| Contact | Relation | → Contacts database |
| Direction | Select | 📤 Sent, 📥 Received |
| Type | Select | Cold Outreach, Follow-up, Proposal, Check-in, Newsletter, Other |
| Date Sent | Date | (date picker) |
| Opened | Checkbox | (tracking) |
| Replied | Checkbox | (tracking) |
| Template Used | Select | Cold Email #1, Cold Email #2, Follow-up #1, Proposal, Thank You, Other |
| Content | Text | (email body or summary) |

---

## 📈 DASHBOARD WIDGETS

### Create these linked database views on the main dashboard:

**1. Pipeline Summary**
```
💰 Pipeline Overview
- Total Pipeline Value: (Sum of Deal Value where Stage ≠ Closed)
- Deals This Month: (Count where Expected Close = This month)
- Win Rate: (Closed Won / Total Closed) × 100
```

**2. Today's Focus**
```
📋 Today's Priorities
- Tasks Due Today (linked view, filtered)
- Meetings Today (linked view, filtered)
- Follow-ups Due (linked view, filtered)
```

**3. Recent Activity**
```
📊 Recent Activity
- Last 5 Contacts Added
- Last 5 Deals Updated
- Last 5 Meetings Completed
```

**4. Quick Actions**
```
⚡ Quick Actions
- [ ] Add New Contact
- [ ] Log New Deal
- [ ] Schedule Meeting
- [ ] Create Task
```

---

## 🎯 CRM TEMPLATES (Page Templates)

### Contact Template:
```
# {{Contact Name}}

## 📋 Quick Info
- **Company:** [Link]
- **Role:** 
- **Email:** 
- **Phone:** 
- **Location:** 
- **LinkedIn:** [Link]

## 📝 Background
[Notes about the contact]

## 🤝 Relationship History
| Date | Interaction | Notes |
|------|-------------|-------|
| | | |

## 📌 Action Items
- [ ] 
- [ ] 
```

### Meeting Template:
```
# Meeting: {{Title}}

**Date:** {{Date}}
**With:** {{Contact}}
**Type:** {{Meeting Type}}

---

## 📋 Agenda
1. 
2. 
3. 

---

## 📝 Notes



---

## ✅ Action Items
- [ ] 
- [ ] 

**Owner:** 
**Due Date:** 

---

## 🔄 Next Steps
- Next meeting: 
- Follow-up needed: 
```

### Deal Template:
```
# Deal: {{Deal Name}}

**Value:** ${{Amount}}
**Stage:** {{Stage}}
**Expected Close:** {{Date}}
**Probability:** {{Probability}}

---

## 🏢 Company
{{Company Relation}}

## 👤 Contact
{{Contact Relation}}

---

## 📊 Deal Details
**Source:** 
**Product/Service:** 
**Key Requirements:** 
**Decision Makers:** 
**Budget Confirmed:** Yes/No
**Timeline:** 

---

## 📝 Notes



---

## 🔄 Next Steps
1. 
2. 
3. 
```

---

## 🔗 RELATIONSHIPS TO SET UP

1. **Contacts ↔ Companies** (Many-to-One)
   - Each contact belongs to one company
   - Each company has many contacts

2. **Contacts ↔ Deals** (One-to-Many)
   - Each deal has one primary contact
   - Each contact can have multiple deals

3. **Deals ↔ Companies** (Many-to-One)
   - Each deal belongs to one company

4. **Tasks ↔ Contacts** (Many-to-One)
   - Tasks can be related to contacts

5. **Tasks ↔ Deals** (Many-to-One)
   - Tasks can be related to deals

6. **Meetings ↔ Contacts** (Many-to-One)
   - Meetings are with contacts

7. **Meetings ↔ Deals** (Many-to-One)
   - Meetings can be about deals

8. **Emails ↔ Contacts** (Many-to-One)
   - Emails are to/from contacts

---

## ⚙️ AUTOMATIONS TO SET UP

### Notion Automations (if on paid plan):

**1. Task Reminder**
- Trigger: Due Date = Tomorrow
- Action: Send notification

**2. Follow-up Reminder**
- Trigger: Next Follow-up = Today
- Action: Send notification

**3. Deal Stage Change**
- Trigger: Stage = "✅ Closed Won"
- Action: Create welcome task, notify team

**4. New Lead Alert**
- Trigger: New row in Contacts (Status = Lead)
- Action: Notify owner

---

## 📥 IMPORT/EXPORT

### To Import Contacts from CSV:
1. Prepare CSV with columns matching properties
2. Click "Import" in Contacts database
3. Map CSV columns to Notion properties
4. Import

### CSV Column Headers:
```
Name,Email,Phone,Company,Status,Priority,Lead Source,First Contact,Last Contact,Next Follow-up,Deal Value,Tags,LinkedIn,Location
```

---

## 🎨 CUSTOMIZATION TIPS

1. **Add your logo** to the dashboard cover
2. **Customize pipeline stages** to match your sales process
3. **Add custom properties** for your industry
4. **Create views** specific to your workflow
5. **Set up team permissions** if collaborating

---

**Template Version:** 1.0  
**Compatible:** Notion (Free & Paid plans)  
**Last Updated:** March 2026
