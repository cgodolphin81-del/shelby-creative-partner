# 🎯 Notion CRM - Complete Template

**Copy this structure directly into Notion to create your CRM.**

---

## 📋 SETUP INSTRUCTIONS

### Step 1: Create Main Page
1. In Notion, click "+ New Page"
2. Title it: "🎯 Client CRM"
3. Add an icon: 🎯
4. Add a cover image (professional office/CRM)

### Step 2: Create the Databases
Create each database below as a **Full Page Database** within your main CRM page.

---

## 🗄️ DATABASE 1: CONTACTS

**Create as:** Full Page Database → Table View
**Name:** 👥 Contacts

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Name | Title | Default |
| Company | Relation | Link to Companies database |
| Email | Email | Default |
| Phone | Phone Number | Default |
| Status | Select | Options: 🟢 Lead, 🟡 Prospect, 🔵 Active Client, ⚫ Past Client, ❌ Unqualified |
| Priority | Select | Options: 🔴 High, 🟡 Medium, 🟢 Low |
| Tags | Multi-select | Options: VIP, Referral, Cold Outreach, Inbound, Enterprise, SMB, Freelancer |
| Lead Source | Select | Options: Website, Referral, Social Media, Cold Email, LinkedIn, Google Ads, Event, Other |
| First Contact | Date | Default |
| Last Contact | Date | Default |
| Next Follow-up | Date | Default |
| Deal Value | Number | Format: Dollar |
| Lifetime Value | Rollup | Relation: Deals, Property: Value, Calculate: Sum |
| Owner | People | Default |
| Notes | Text | Default |
| LinkedIn | URL | Default |
| Location | Text | Default |

### Views to Create:

**1. All Contacts (Table)**
- Sort: Last Contact (descending)
- Filter: None

**2. Hot Leads (Table)**
- Filter: Status IS 🟡 Prospect AND Priority IS 🔴 High
- Sort: Next Follow-up (ascending)

**3. Active Clients (Table)**
- Filter: Status IS 🔵 Active Client
- Sort: Name (A → Z)

**4. Follow-ups This Week (List)**
- Filter: Next Follow-up IS THIS WEEK
- Sort: Next Follow-up (ascending)

**5. By Lead Source (Board)**
- Group by: Lead Source
- Sort: Deal Value (descending)

---

## 🗄️ DATABASE 2: COMPANIES

**Create as:** Full Page Database → Table View
**Name:** 🏢 Companies

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Company Name | Title | Default |
| Website | URL | Default |
| Industry | Select | Options: Technology, Healthcare, Finance, Retail, Manufacturing, Education, Real Estate, Marketing, Legal, Other |
| Size | Select | Options: 1-10, 11-50, 51-200, 201-500, 500+ |
| Annual Revenue | Number | Format: Dollar |
| Address | Text | Default |
| Main Contact | Relation | Link to Contacts database |
| Status | Select | Options: 🟢 Target, 🟡 In Progress, 🔵 Customer, ⚫ Churned |
| Created Time | Created Time | Auto |
| Notes | Text | Default |
| LinkedIn | URL | Default |

### Views to Create:

**1. All Companies (Table)**
- Sort: Created Time (descending)

**2. Customers Only (Table)**
- Filter: Status IS 🔵 Customer

**3. Target Accounts (Table)**
- Filter: Status IS 🟢 Target

---

## 🗄️ DATABASE 3: DEALS PIPELINE

**Create as:** Full Page Database → Board View
**Name:** 💰 Sales Pipeline

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Deal Name | Title | Default |
| Contact | Relation | Link to Contacts database |
| Company | Relation | Link to Companies database |
| Stage | Status | Options: 📥 New Lead, 📞 Contacted, 🤝 Proposal Sent, 💬 Negotiation, ✅ Closed Won, ❌ Closed Lost |
| Value | Number | Format: Dollar |
| Probability | Select | Options: 10%, 25%, 50%, 75%, 90%, 100% |
| Expected Close | Date | Default |
| Days Open | Formula | `dateBetween(now(), prop("Created time"), "days")` |
| Weighted Value | Formula | `prop("Value") * toNumber(replaceAll(prop("Probability"), "%", "")) / 100` |
| Source | Select | Options: Inbound, Outbound, Referral, Partner, Website, Social Media |
| Owner | People | Default |
| Last Activity | Date | Default |
| Next Step | Text | Default |
| Lost Reason | Select | Options: Price, Timing, Competitor, Not a Fit, No Budget, Ghosted, Other |

### Views to Create:

**1. Full Pipeline (Board)**
- Group by: Stage
- Sort: Expected Close (ascending)
- Card Preview: Contact

**2. My Deals (Board)**
- Filter: Owner CONTAINS [Me]
- Group by: Stage

**3. Closing This Month (Board)**
- Filter: Expected Close IS THIS MONTH
- Group by: Stage

**4. At Risk (Table)**
- Filter: Days Open IS GREATER THAN 30 AND Stage IS NOT ✅ Closed Won
- Sort: Days Open (descending)

---

## 🗄️ DATABASE 4: TASKS

**Create as:** Full Page Database → Table View
**Name:** ✅ Tasks & Actions

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Task | Title | Default |
| Status | Status | Options: 📝 To Do, 🔄 In Progress, ✅ Complete, ⏸️ On Hold |
| Priority | Select | Options: 🔴 Urgent, 🟡 High, 🟢 Normal, ⚪ Low |
| Due Date | Date | Default |
| Related Contact | Relation | Link to Contacts database |
| Related Deal | Relation | Link to Deals database |
| Task Type | Select | Options: 📞 Call, 📧 Email, 📝 Proposal, 🤝 Meeting, 💰 Follow-up, 📊 Research, Other |
| Duration | Select | Options: 15 min, 30 min, 1 hour, 2 hours, 4 hours, Full day |
| Completed | Checkbox | Default |
| Assigned To | People | Default |
| Recurring | Checkbox | Default |
| Recurrence | Select | Options: Daily, Weekly, Monthly, Quarterly |

### Views to Create:

**1. Today's Tasks (List)**
- Filter: Due Date IS TODAY AND Completed IS UNCHECKED
- Sort: Priority (descending)

**2. Overdue (Table)**
- Filter: Due Date IS BEFORE TODAY AND Completed IS UNCHECKED
- Sort: Due Date (ascending)

**3. By Contact (Board)**
- Group by: Related Contact

**4. Completed This Week (Table)**
- Filter: Completed IS CHECKED AND Completed Date IS THIS WEEK

---

## 🗄️ DATABASE 5: MEETINGS

**Create as:** Full Page Database → Calendar View
**Name:** 📅 Meetings & Calls

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Meeting Title | Title | Default |
| Contact | Relation | Link to Contacts database |
| Company | Relation | Link to Companies database |
| Related Deal | Relation | Link to Deals database |
| Type | Select | Options: 📞 Discovery, 🎯 Demo, 💼 Proposal, 🤝 Negotiation, 👋 Kickoff, 📊 Check-in, Other |
| Date/Time | Date | Include time |
| Duration | Select | Options: 15 min, 30 min, 45 min, 1 hour, 1.5 hours, 2 hours |
| Location | Select | Options: Zoom, Google Meet, Phone, In-Person, Other |
| Meeting Link | URL | Default |
| Status | Select | Options: 📅 Scheduled, ✅ Completed, ❌ Cancelled, 🔄 Rescheduled |
| Agenda | Text | Default |
| Notes | Text | Default |
| Action Items | Text | Default |
| Next Meeting | Date | Default |
| Recording | URL | Default |

### Views to Create:

**1. Calendar (Calendar)**
- Date Property: Date/Time

**2. Upcoming Meetings (List)**
- Filter: Date/Time IS AFTER TODAY
- Sort: Date/Time (ascending)

**3. This Week (List)**
- Filter: Date/Time IS THIS WEEK
- Sort: Date/Time (ascending)

**4. Meeting History (Table)**
- Filter: Status IS ✅ Completed
- Sort: Date/Time (descending)

---

## 📊 CRM DASHBOARD

**Create as:** Page content with Linked Database Views

### Add These Sections:

```
## 🎯 CRM Dashboard

### 📈 Pipeline Summary
```

**Insert Linked View of Deals database:**
- View Type: Board
- Filter: Stage IS NOT ✅ Closed Won AND IS NOT ❌ Closed Lost
- Calculate: Sum of Value

```
### 📋 Today's Focus
```

**Insert Linked View of Tasks database:**
- View Type: List
- Filter: Due Date IS TODAY AND Completed IS UNCHECKED

**Insert Linked View of Meetings database:**
- View Type: List
- Filter: Date/Time IS TODAY

```
### 🔥 Hot Leads
```

**Insert Linked View of Contacts database:**
- View Type: Table
- Filter: Status IS 🟡 Prospect AND Priority IS 🔴 High
- Sort: Next Follow-up (ascending)
- Limit: 10

```
### 📊 Recent Activity
```

**Insert Linked View of Contacts database:**
- View Type: List
- Sort: Last Contact (descending)
- Limit: 5

```
### ⚡ Quick Actions
- [ ] Add New Contact
- [ ] Log New Deal
- [ ] Schedule Meeting
- [ ] Create Task
```

---

## 📝 PAGE TEMPLATES

### Contact Template

**Create as:** Database Template in Contacts

```
# {{Contact Name}}

## 📋 Quick Info
- **Company:** 
- **Role:** 
- **Email:** 
- **Phone:** 
- **Location:** 
- **LinkedIn:** 

## 📝 Background



## 🤝 Relationship History
| Date | Interaction | Notes |
|------|-------------|-------|
| | | |

## 📌 Action Items
- [ ] 
- [ ] 
```

### Meeting Template

**Create as:** Database Template in Meetings

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

### Deal Template

**Create as:** Database Template in Deals

```
# Deal: {{Deal Name}}

**Value:** ${{Amount}}
**Stage:** {{Stage}}
**Expected Close:** {{Date}}
**Probability:** {{Probability}}

---

## 🏢 Company


## 👤 Contact


---

## 📊 Deal Details
**Source:** 
**Product/Service:** 
**Key Requirements:** 
**Decision Makers:** 
**Budget Confirmed:** 
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

## 🔗 DATABASE RELATIONSHIPS

Set up these relations between databases:

1. **Contacts ↔ Companies** (Many-to-One)
   - In Contacts: Add Relation to Companies
   - In Companies: Add Relation to Contacts (auto-created)

2. **Contacts ↔ Deals** (One-to-Many)
   - In Deals: Add Relation to Contacts

3. **Deals ↔ Companies** (Many-to-One)
   - In Deals: Add Relation to Companies

4. **Tasks ↔ Contacts** (Many-to-One)
   - In Tasks: Add Relation to Contacts

5. **Tasks ↔ Deals** (Many-to-One)
   - In Tasks: Add Relation to Deals

6. **Meetings ↔ Contacts** (Many-to-One)
   - In Meetings: Add Relation to Contacts

7. **Meetings ↔ Deals** (Many-to-One)
   - In Meetings: Add Relation to Deals

---

## 🎨 CUSTOMIZATION

### To Add Your Branding:
1. Click the cover image → Change cover
2. Upload your logo or brand image
3. Click the icon → Change icon
4. Choose a color that matches your brand

### To Customize Pipeline Stages:
1. Go to Deals database
2. Click on the Stage property
3. Edit the status options to match your sales process

### To Add Custom Properties:
1. Click "+ Add property" in any database
2. Choose the property type
3. Name it and configure options

---

## 📥 IMPORT CONTACTS

### CSV Format for Import:
```
Name,Email,Phone,Company,Status,Priority,Lead Source,First Contact,Last Contact,Next Follow-up,Deal Value,Tags,LinkedIn,Location
John Doe,john@company.com,555-0100,Acme Inc,🟡 Prospect,🔴 High,Referral,2026-01-15,2026-03-01,2026-03-25,15000,VIP;Enterprise,linkedin.com/in/johndoe,New York
```

### To Import:
1. Prepare your CSV with the columns above
2. In Contacts database, click "Import"
3. Select your CSV file
4. Map columns to Notion properties
5. Click Import

---

## ✅ SETUP CHECKLIST

- [ ] Main CRM page created
- [ ] All 5 databases created
- [ ] All properties added to each database
- [ ] All views created
- [ ] Database relations connected
- [ ] Templates created
- [ ] Dashboard built with linked views
- [ ] Cover image and icon set
- [ ] Test data entered (at least 3 contacts, 2 deals, 2 tasks)
- [ ] Team members invited (if collaborating)

---

**Template Version:** 1.0
**Compatible:** Notion Free & Paid Plans
**Created:** March 2026
**Support:** [Your support email]

---

## 🎁 BONUS: CRM AUTOMATIONS

### Notion Automation Ideas (Paid Plans):

**1. Follow-up Reminder**
- Trigger: Next Follow-up date = Today
- Action: Send notification to Owner

**2. Deal Won Celebration**
- Trigger: Stage = ✅ Closed Won
- Action: Send notification to team

**3. Task Overdue Alert**
- Trigger: Due Date = Yesterday AND Completed = Unchecked
- Action: Send notification to Assigned To

**4. New Lead Alert**
- Trigger: New row in Contacts with Status = 🟢 Lead
- Action: Send notification to Owner

---

*For video tutorial and additional support, visit: [Your URL]*
