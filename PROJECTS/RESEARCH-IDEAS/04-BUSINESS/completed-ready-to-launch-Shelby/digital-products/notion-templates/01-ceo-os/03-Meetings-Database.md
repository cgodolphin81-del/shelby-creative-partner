# 📅 Meetings Database

> **Purpose:** Centralize all meeting management with agendas, notes, and action items

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Title** | Title | Meeting name |
| **Date** | Date | With time |
| **Type** | Select | Leadership Team, 1:1, Board, All Hands, Strategy, Investor, Customer, Other |
| **Attendees** | Person | Multiple people |
| **Organizer** | Person | Who scheduled |
| **Status** | Select | 📅 Scheduled, ✅ Complete, ❌ Cancelled, 📝 Notes Needed |
| **Agenda** | Text | Meeting agenda (or link to doc) |
| **Notes** | Text | Meeting notes (or link to doc) |
| **Action Items** | Relation | Links to Tasks database |
| **Decisions Made** | Relation | Links to Decision Log |
| **Recording** | URL | Link to video recording |
| **Duration** | Number | Minutes |
| **Recurring?** | Checkbox | Yes/No |
| **Series** | Relation | Link to other meetings in series |
| **Prep Required** | Text | What to prepare before |
| **Follow-up Date** | Date | When to follow up |

---

## 🧮 Formulas

### Meeting Status Badge
```notion
if(
  prop("Status") == "Complete", "✅",
  if(prop("Status") == "Cancelled", "❌",
    if(prop("Status") == "Notes Needed", "📝", "📅")
  )
)
```

### Days Until Meeting
```notion
if(
  prop("Status") == "Scheduled",
  dateBetween(prop("Date"), now(), "days"),
  null
)
```

### Overdue Notes
```notion
if(
  and(
    prop("Status") == "Complete",
    empty(prop("Notes"))
  ),
  "⚠️ Notes needed",
  ""
)
```

---

## 📊 Database Views

### View 1: Upcoming Meetings (Calendar)
**Filter:** Status = Scheduled, Date >= Today
**Sort:** Date (ascending)
**Layout:** Calendar

### View 2: This Week (List)
**Filter:** Date is within next 7 days
**Sort:** Date (ascending)
**Properties shown:** Title, Type, Attendees, Time, Prep Required

### View 3: Leadership Team Meetings (Table)
**Filter:** Type = Leadership Team
**Sort:** Date (descending)
**Group by:** Month

### View 4: My 1:1s (List)
**Filter:** Type = 1:1, Attendees contains Me
**Sort:** Date (descending)

### View 5: Board Meetings (Table)
**Filter:** Type = Board
**Sort:** Date (descending)
**Properties shown:** Title, Date, Attendees, Recording, Notes

### View 6: Action Items Pending (Table)
**Filter:** Status = Complete
**Sort:** Date (descending)
**Show linked action items that are incomplete**

---

## 📝 Meeting Templates

### Template: Leadership Team Meeting
```
# 📋 Leadership Team Meeting
**Date:** {{Date}}
**Attendees:** {{Attendees}}
**Facilitator:** {{Organizer}}

---

## 📖 Agenda

### 1. Check-in (10 min)
- Personal/professional highlights
- Current energy level (1-10)

### 2. Review Action Items (10 min)
- [ ] Previous action item 1
- [ ] Previous action item 2

### 3. Key Metrics Review (15 min)
- Revenue: $X (vs plan: X%)
- Users: X (vs plan: X%)
- Team: X people

### 4. Strategic Topics (40 min)
- Topic 1: [Owner]
- Topic 2: [Owner]

### 5. Decisions Needed (15 min)
- Decision 1
- Decision 2

### 6. Roundtable & Closing (10 min)
- Any other business
- Commitments for the week

---

## 📝 Notes

_Take notes here during the meeting_

---

## ✅ Action Items

| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| | | | |

---

## 🧠 Decisions Made

1. **Decision:** 
   - **Context:** 
   - **Rationale:** 
   - **Next steps:** 

---

## 🔗 Related
- [[Previous Meeting]]
- [[Next Meeting]]
- Relevant documents
```

### Template: 1:1 Meeting
```
# 👤 1:1: {{Manager}} ↔ {{Report}}
**Date:** {{Date}}

---

## 🎉 Wins & Celebrations
_What went well this week?_

- 

---

## 🚧 Challenges & Blockers
_What's getting in the way?_

- 

---

## 💬 Topics to Discuss

### From {{Report}}
- 

### From {{Manager}}
- 

---

## 📈 Goals & OKRs Check-in
_Current focus and progress_

- OKR 1: 
- OKR 2: 

---

## 💡 Feedback

### Manager → Report
- 

### Report → Manager
- 

---

## ✅ Action Items

| Task | Owner | Due Date |
|------|-------|----------|
| | | |

---

## 📝 Private Notes (Manager Only)
_Observations, follow-ups, concerns_

- 

---

## 🔗 Previous 1:1s
- [[Previous 1:1 Date]]
```

### Template: Board Meeting
```
# 🏛️ Board Meeting
**Date:** {{Date}}
**Location:** {{Location/Video Link}}
**Attendees:** {{Board Members + Executives}}

---

## 📋 Pre-Read Materials
- [ ] Financials (CFO)
- [ ] Metrics Dashboard (CEO)
- [ ] Strategic Update (CEO)
- [ ] Department Updates

---

## 📖 Agenda

### 1. Welcome & Introductions (5 min)

### 2. Approval of Previous Minutes (5 min)

### 3. CEO Update (30 min)
- Company performance
- Key wins
- Key challenges
- Strategic initiatives

### 4. Financial Review (20 min)
- P&L review
- Cash flow
- Runway
- Budget vs actual

### 5. Deep Dive Topic (30 min)
- [Topic] presented by [Owner]

### 6. Approval Items (15 min)
- [Item 1]
- [Item 2]

### 7. Executive Session (15 min)
- Board only

---

## 📝 Meeting Notes

---

## 🧠 Decisions & Votes

| Decision | Outcome | Votes |
|----------|---------|-------|
| | | |

---

## ✅ Action Items

| Task | Owner | Due Date |
|------|-------|----------|
| | | |

---

## 📅 Next Meeting
**Date:** {{Next Date}}
**Focus:** {{Next Topics}}
```

---

## 💡 Meeting Best Practices

1. **No Agenda, No Meeting** - Every meeting needs clear purpose
2. **Start on Time** - Respect everyone's time
3. **Assign Note-Taker** - Rotate this responsibility
4. **End with Action Items** - Clear owners and due dates
5. **Send Notes Within 24 Hours** - While it's fresh
6. **Review Previous Actions** - Start with accountability
7. **Time-Box Discussions** - Keep things moving
8. **Record When Appropriate** - For those who can't attend

---

## 🔗 Integration Tips

- Link meetings to **Decision Log** for traceability
- Connect action items to **Tasks/Projects database**
- Use **Calendar view** for weekly planning
- Create **recurring meetings** for regular check-ins
