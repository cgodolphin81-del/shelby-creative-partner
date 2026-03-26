# 🎯 CEO Operating System

**Complete Notion Template for Executive Leadership**

---

## 📦 What's Included

- **Executive Dashboard** - Real-time company overview
- **Goals & OKRs Database** - Track quarterly objectives
- **Meeting Management System** - Agendas, notes, action items
- **Decision Log** - Track key decisions with context
- **Team Directory** - Org chart and 1:1s
- **Strategic Planning** - Vision, mission, initiatives

---

## 🚀 Quick Start

1. **Duplicate** this template to your Notion workspace
2. **Customize** company name and branding in Dashboard
3. **Invite** your executive team (optional)
4. **Start using** - Begin with Goals & OKRs for current quarter

---

## 📁 Page Structure

```
CEO Operating System
├── 📊 Executive Dashboard
├── 🎯 Goals & OKRs
│   ├── Company OKRs (Q1-Q4)
│   ├── Department OKRs
│   └── Individual OKRs
├── 📅 Meetings
│   ├── Leadership Team Meetings
│   ├── 1:1s
│   ├── Board Meetings
│   └── All Hands
├── 🧠 Decision Log
│   ├── Strategic Decisions
│   ├── Hiring Decisions
│   └── Investment Decisions
├── 👥 Team
│   ├── Org Chart
│   ├── Direct Reports
│   └── Key Hires Pipeline
└── 📈 Strategic Planning
    ├── Vision & Mission
    ├── Annual Plan
    └── Quarterly Reviews
```

---

## 🗄️ Database Schemas

### Goals & OKRs Database

| Property | Type | Description |
|----------|------|-------------|
| Name | Title | Objective name |
| Status | Select | On Track, At Risk, Off Track, Complete |
| Quarter | Select | Q1 2024, Q2 2024, etc. |
| Owner | Person | Who owns this objective |
| Department | Select | Executive, Engineering, Sales, etc. |
| Key Results | Relation | Linked KR database |
| Progress | Rollup | % complete from KRs |
| Priority | Select | P0, P1, P2 |
| Start Date | Date | When work begins |
| Due Date | Date | Target completion |

### Key Results Database

| Property | Type | Formula/Description |
|----------|------|---------------------|
| Name | Title | KR description |
| Objective | Relation | Link to parent objective |
| Metric | Text | What we're measuring |
| Target | Number | Target value |
| Current | Number | Current value |
| Progress % | Formula | `prop("Current") / prop("Target") * 100` |
| Unit | Select | %, $, users, etc. |

### Meetings Database

| Property | Type | Description |
|----------|------|-------------|
| Title | Title | Meeting name |
| Date | Date | Meeting date/time |
| Type | Select | Leadership, 1:1, Board, All Hands |
| Attendees | Person | Who's invited |
| Agenda | Text | Meeting agenda |
| Notes | Text | Meeting notes |
| Action Items | Relation | Linked tasks |
| Recording | URL | Link to recording |
| Status | Select | Scheduled, Complete, Cancelled |

### Decision Log Database

| Property | Type | Description |
|----------|------|-------------|
| Decision | Title | What was decided |
| Date | Date | When decided |
| Context | Text | Background and situation |
| Options | Text | Alternatives considered |
| Rationale | Text | Why this option was chosen |
| Impact | Select | High, Medium, Low |
| Owner | Person | Who owns implementation |
| Review Date | Date | When to revisit |
| Status | Select | Implemented, In Progress, Reversed |

---

## 🔧 Key Formulas

### Objective Progress (Goals Database)
```
if(empty(prop("Key Results")), 0, 
  round(prop("Progress") * 100)) + "%"
```

### Days Until Due
```
dateBetween(prop("Due Date"), now(), "days")
```

### Status Color (for visual boards)
```
if(prop("Status") == "Complete", "✅",
  if(prop("Status") == "On Track", "🟢",
    if(prop("Status") == "At Risk", "🟡", "🔴")))
```

---

## 📋 Templates Included

### Meeting Template
```
## 📋 Agenda
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## 📝 Notes
_Take notes here_

## ✅ Action Items
- [ ] Task (Owner: @Name, Due: Date)

## 🔗 Related
- Links to relevant docs
```

### Decision Log Template
```
## 🎯 Decision
_Clear statement of what was decided_

## 📖 Context
_What situation led to this decision?_

## 💭 Options Considered
1. Option A - pros/cons
2. Option B - pros/cons
3. Option C - pros/cons

## ✅ Decision & Rationale
_Why we chose this path_

## 📅 Review
_When will we revisit this decision?_
```

### 1:1 Template
```
## 👤 {{Person}}
## 📅 {{Date}}

### 🎉 Wins
- What went well this week?

### 🚧 Blockers
- What's in the way?

### 💬 Topics
- Discussion items

### 📝 Action Items
- [ ] Manager action
- [ ] Report action
```

---

## 💡 Pro Tips

1. **Weekly Review** - Every Friday, review all OKRs and update progress
2. **Meeting Hygiene** - Never schedule a meeting without an agenda
3. **Decision Velocity** - Log every significant decision within 24 hours
4. **Dashboard First** - Start each day on the Executive Dashboard

---

## 🎨 Customization

- Replace company name throughout
- Add your brand colors to database views
- Customize department names
- Add custom properties as needed
- Integrate with Slack for notifications (via Notion integrations)

---

## 📞 Support

Questions? Check the included setup guide or reach out for template support.
