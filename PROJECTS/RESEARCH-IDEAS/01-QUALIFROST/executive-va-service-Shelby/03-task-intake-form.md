# Task Intake Form Template

## For Notion, Trello, Asana, or Any Project Management Tool

---

## 📋 Template Structure

### Notion Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| Task Name | Title | Text |
| Status | Select | 🆕 New, 📋 In Progress, ⏳ Awaiting Info, ✅ Complete, ❌ Blocked |
| Priority | Select | 🔴 Urgent, 🟡 High, 🟢 Medium, ⚪ Low |
| Category | Select | Inbox, Calendar, Travel, Research, Personal, Meeting Prep, Expense, Other |
| Due Date | Date | Date picker |
| Estimated Time | Number | Hours |
| Actual Time | Number | Hours |
| Assigned To | Person | VA or Client |
| Requested By | Person | Client |
| Date Requested | Date | Auto-filled |
| Date Completed | Date | Auto-filled |
| Tags | Multi-select | See tag list below |
| Related To | Relation | Link to projects, people, or events |
| Notes | Text | Additional context |
| Attachments | Files | Supporting documents |

---

## 🏷️ Recommended Tags

### By Task Type
- `#email-response`
- `#schedule-meeting`
- `#book-travel`
- `#research-topic`
- `#prepare-brief`
- `#make-purchase`
- `#coordinate-event`
- `#follow-up`
- `#data-entry`
- `#document-creation`

### By Context
- `#waiting-on-client`
- `#waiting-on-third-party`
- `#recurring-task`
- `#one-time`
- `#time-sensitive`
- `#can-wait`

### By Effort
- `#quick-win` (< 15 min)
- `#small-task` (15-30 min)
- `#medium-task` (30-60 min)
- `#large-task` (1-3 hrs)
- `#project` (3+ hrs)

---

## 📝 Task Request Template

### Quick Request Format (Slack/Email)

```
TASK REQUEST
━━━━━━━━━━━━
📌 Task: [Brief description]
🎯 Priority: [Urgent/High/Medium/Low]
📅 Due: [Date and time]
⏱️ Estimated time: [If known]

📋 Details:
[Full description of what needs to be done]

📎 Attachments/Links:
[Any relevant files or URLs]

✅ Definition of Done:
[What does completed look like?]

❓ Questions/Concerns:
[Any clarifications needed]
```

---

## 🗂️ Trello Board Setup

### Lists (Left to Right)

1. **📥 Inbox** - New requests come here
2. **📋 Ready to Start** - Clarified and ready for work
3. **🏃 In Progress** - Currently being worked on
4. **⏳ Awaiting Client** - Need info/approval from client
5. **⏳ Awaiting Third Party** - Waiting on external party
6. **✅ Done This Week** - Completed (reviewed weekly)
7. **📁 Archive** - Moved monthly for record-keeping

### Card Template

```
## Task Details

**Requested:** [Date]
**Due:** [Date]
**Priority:** [Urgent/High/Medium/Low]
**Estimated Time:** [X hours]

---

## What Needs to Be Done

[Detailed description]

---

## Resources & Access

- [Link 1]
- [Link 2]
- [Attached files]

---

## Definition of Done

- [ ] [Specific criteria 1]
- [ ] [Specific criteria 2]
- [ ] [Specific criteria 3]

---

## Notes & Updates

[Date] - [Update]
[Date] - [Update]

---

## Time Tracking

- Estimated: __ hrs
- Actual: __ hrs
- Variance: __ hrs
```

### Power-Ups to Enable
- **Custom Fields** - For priority, due date, estimated time
- **Card Repeater** - For recurring tasks
- **Planyway** or **TeamGantt** - For timeline view
- **Time Tracking** - For billing and efficiency analysis

---

## 📊 Asana Setup

### Project Structure

**Project:** Executive Support

**Sections:**
1. 📥 Intake Queue
2. 📋 This Week's Priorities
3. 🏃 In Progress
4. ⏳ Waiting On
5. ✅ Completed

### Custom Fields

| Field Name | Type | Options |
|------------|------|---------|
| Priority | Dropdown | Urgent, High, Medium, Low |
| Category | Dropdown | Inbox, Calendar, Travel, Research, Personal, Meeting, Expense |
| Effort | Dropdown | <15min, 15-30min, 30-60min, 1-3hrs, 3+hrs |
| Status | Dropdown | New, In Progress, Blocked, Complete |
| Due Date | Date | — |
| Time Spent | Number | Hours |

### Rules to Automate

1. When priority = Urgent → Add to "This Week's Priorities" and notify VA
2. When status = Blocked → Move to "Waiting On" section
3. When status = Complete → Move to "Completed" and add completion date
4. When due date is today → Add ⚠️ emoji to task name

---

## 🎯 Monday.com Setup

### Board Columns

- Task Name (Text)
- Status (Labels: New, In Progress, Waiting, Done)
- Priority (Labels: Urgent, High, Medium, Low)
- Category (Labels: Inbox, Calendar, Travel, Research, Personal, Meeting, Expense)
- Due Date (Date)
- Timeline (Date range)
- Assigned Person (People)
- Time Estimate (Numbers)
- Time Actual (Numbers)
- Updates (Text/Updates column)

### Automations

```
When priority changes to Urgent → Send notification to VA
When status changes to Done → Move item to "Completed" group
When due date is today → Send reminder at 9 AM
When item is created → Assign to VA and set status to New
```

---

## 📱 ClickUp Setup

### Custom Statuses

1. 🆕 New Request
2. 📋 Clarifying
3. 🏃 In Progress
4. ⏳ Client Review
5. ⏳ External Wait
6. ✅ Complete
7. ❌ Cancelled

### Custom Fields

- Priority (Dropdown: P0-Urgent, P1-High, P2-Medium, P3-Low)
- Category (Dropdown)
- Estimated Hours (Number)
- Actual Hours (Number)
- Billable (Checkbox)
- Due Date (Date)
- Client (Dropdown)

### Views to Create

- **List View** - All tasks with full details
- **Board View** - Kanban by status
- **Calendar View** - Tasks by due date
- **Time Tracking View** - Hours by task
- **Workload View** - VA capacity planning

---

## 📧 Email-to-Task Setup

### For Tools That Support Email Creation

**Email Address:** tasks@[yourdomain].com

**Subject Line Format:**
```
[PRIORITY] Task Name - Due DATE
Example: [HIGH] Schedule Q2 Board Meeting - Due March 25
```

**Email Body Format:**
```
CATEGORY: [Calendar/Travel/Research/Personal/Other]
ESTIMATED TIME: [X hours]

DESCRIPTION:
[Full details here]

ATTACHMENTS:
[Include any files]

NOTIFY WHEN COMPLETE: [Yes/No]
```

---

## 🔄 Recurring Task Templates

### Weekly Tasks
- [ ] Review and prioritize inbox
- [ ] Send weekly status report
- [ ] Review upcoming week's calendar
- [ ] Process expense reports
- [ ] Update contact database

### Monthly Tasks
- [ ] Review and archive completed tasks
- [ ] Update SOPs as needed
- [ ] Review subscription services
- [ ] Prepare monthly summary report
- [ ] Plan next month's priorities

### Quarterly Tasks
- [ ] Review and update travel preferences
- [ ] Audit and update password manager
- [ ] Review and optimize recurring meetings
- [ ] Plan upcoming travel/quarterly goals

---

## 📊 Reporting & Metrics

### Weekly Report Metrics
- Tasks completed this week
- Total hours worked
- Tasks by category (pie chart)
- Average completion time
- Blocked tasks and reasons

### Monthly Report Metrics
- Total tasks completed
- Hours by category
- On-time completion rate
- Recurring task efficiency
- Client satisfaction score

---

## 💡 Best Practices

### For Clients Requesting Tasks

1. **Be specific** - The more detail, the better the outcome
2. **Set realistic deadlines** - Consider complexity and VA's other commitments
3. **Provide context** - Why does this matter? What's the end goal?
4. **Share access upfront** - Don't wait for the VA to ask
5. **Give feedback** - What worked, what didn't, what to adjust

### For VAs Managing Tasks

1. **Clarify before starting** - Ask questions early
2. **Update status regularly** - Don't let tasks go dark
3. **Flag blockers immediately** - Don't sit on problems
4. **Track time accurately** - For billing and improvement
5. **Suggest improvements** - If you see a better way, speak up

---

*Template Version: 1.0 | Compatible with: Notion, Trello, Asana, Monday.com, ClickUp*
*Last Updated: March 2026*
