# ✅ Tasks Database

> **Purpose:** Track all work items from backlog to completion

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Task** | Title | Task name |
| **Status** | Select | ⚪ Todo, 🔵 In Progress, 🟡 In Review, ✅ Done, 🛑 Blocked |
| **Priority** | Select | 🔴 Urgent, 🔵 High, 🟡 Medium, ⚪ Low |
| **Assignee** | Person | Who's responsible |
| **Project** | Relation | Parent project (Projects DB) |
| **Due Date** | Date | Task deadline |
| **Start Date** | Date | When to begin |
| **Estimated Hours** | Number | Time estimate |
| **Actual Hours** | Number | Time logged |
| **Remaining Hours** | Formula | Estimated - Actual |
| **Subtasks** | Relation | Child tasks (self-relation) |
| **Dependencies** | Relation | Blocking tasks (self-relation) |
| **Sprint** | Relation | Linked sprint (Sprints DB) |
| **Tags** | Multi-select | Categories, types |
| **Effort** | Select | XS (1), S (2), M (4), L (8), XL (13) |
| **Story Points** | Formula | Based on effort |
| **Completed Date** | Date | When finished |
| **Days Overdue** | Formula | Days past due |
| **Description** | Text | Task details |
| **Checklist** | Text | Subtask checklist |
| **Attachments** | Files & media | Related files |
| **URL** | URL | Related links |

---

## 🧮 Formulas

### Story Points (from Effort)
```notion
if(
  prop("Effort") == "XS", 1,
  if(prop("Effort") == "S", 2,
    if(prop("Effort") == "M", 4,
      if(prop("Effort") == "L", 8,
        if(prop("Effort") == "XL", 13, 0)
      )
    )
  )
)
```

### Remaining Hours
```notion
prop("Estimated Hours") - prop("Actual Hours")
```

### Days Overdue
```notion
if(
  and(
    prop("Status") != "Done",
    prop("Due Date") < now()
  ),
  dateBetween(now(), prop("Due Date"), "days"),
  null
)
```

### Days Until Due
```notion
if(
  prop("Due Date") != null,
  dateBetween(prop("Due Date"), now(), "days"),
  null
)
```

### Status Badge
```notion
if(
  prop("Status") == "Done", "✅ Done",
  if(prop("Status") == "Blocked", "🛑 Blocked",
    if(prop("Status") == "In Review", "🟡 Review",
      if(prop("Status") == "In Progress", "🔵 In Progress", "⚪ Todo")
    )
  )
)
```

### Overdue Indicator
```notion
if(
  and(
    prop("Status") != "Done",
    prop("Due Date") < now()
  ),
  "🚨 " + format(dateBetween(now(), prop("Due Date"), "days")) + " days overdue",
  if(
    and(
      prop("Status") != "Done",
      prop("Due Date") <= now() + 3 * 24 * 60 * 60 * 1000
    ),
    "⚠️ Due soon",
    ""
  )
)
```

### Task Progress (for parent tasks with subtasks)
```notion
if(
  empty(prop("Subtasks")),
  if(prop("Status") == "Done", 100, 0),
  round(
    prop("Subtasks").map(current.prop("Status") == "Done").filter(current == true).length() / 
    prop("Subtasks").length() * 100
  )
) + "%"
```

---

## 📊 Database Views

### View 1: My Tasks (List)
**Filter:** Assignee = Me, Status != Done
**Sort:** Priority (Urgent first), then Due Date
**Properties shown:** Task, Status, Priority, Due Date, Project

### View 2: All Active Tasks (Board)
**Group by:** Status
**Filter:** Status != Done
**Sort:** Priority, then Due Date
**Card preview:** Show Assignee, Due Date

### View 3: By Project (Board)
**Group by:** Project
**Filter:** Status != Done
**Sort:** Due Date

### View 4: By Assignee (Board)
**Group by:** Assignee
**Filter:** Status != Done
**Sort:** Priority

### View 5: Overdue Tasks (Table)
**Filter:** Days Overdue > 0
**Sort:** Days Overdue (descending)
**Properties shown:** Task, Assignee, Due Date, Days Overdue, Project

### View 6: Due This Week (List)
**Filter:** Due Date is within next 7 days, Status != Done
**Sort:** Due Date (ascending)
**Properties shown:** Task, Assignee, Due Date, Priority

### View 7: Backlog (List)
**Filter:** Status = Todo, No Due Date
**Sort:** Priority, then Created time
**Properties shown:** Task, Priority, Project, Effort

### View 8: Completed (Table)
**Filter:** Status = Done
**Sort:** Completed Date (descending)
**Properties shown:** Task, Assignee, Completed Date, Project

### View 9: Blocked Tasks (Table)
**Filter:** Status = Blocked
**Sort:** Due Date
**Properties shown:** Task, Assignee, Dependencies, Notes

### View 10: Timeline (Timeline)
**Sort:** Start Date, then Due Date
**Layout:** Timeline
**Timeline start:** Start Date
**Timeline end:** Due Date

---

## 📝 Task Templates

### Template: Standard Task
```markdown
# ✅ {{Task Name}}

**Status:** ⚪ Todo
**Priority:** 🟡 Medium
**Assignee:** {{Person}}
**Due Date:** {{Date}}
**Project:** [[Project Name]]

---

## 📖 Description

_What needs to be done and why_

---

## ✅ Checklist

- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3

---

## 📋 Details

**Estimated Hours:** 
**Effort:** 

**Dependencies:**
- [[Blocking Task]]

**Tags:**
- 

---

## 📎 Attachments

- 

---

## 📝 Notes

_Any additional context, updates, or comments_

---

## 🕐 Time Tracking

| Date | Activity | Hours |
|------|----------|-------|
| | | |

**Total:** 0 hours
```

### Template: Bug/Issue
```markdown
# 🐛 Bug: {{Issue Title}}

**Status:** 🔵 In Progress
**Priority:** 🔴 Urgent
**Assignee:** {{Person}}
**Due Date:** {{Date}}
**Project:** [[Project Name]]

---

## 📖 Issue Description

_What's broken?_

---

## 🔍 Steps to Reproduce

1. 
2. 
3. 

---

## ✅ Expected Behavior

_What should happen_

---

## ❌ Actual Behavior

_What's actually happening_

---

## 🖼️ Screenshots/Logs

_Attach screenshots, error logs, etc._

---

## 🔧 Technical Details

**Environment:**
- OS: 
- Browser: 
- Version: 

**Affected Users:**
- 

**Frequency:**
- [ ] Always
- [ ] Sometimes
- [ ] Rare

---

## 📝 Resolution

**Root Cause:**
_Fix:_

**Testing:**
- [ ] Fix verified
- [ ] Tests added
- [ ] Documentation updated

---

## 🕐 Time Tracking

**Estimated:**  hours
**Actual:**  hours
```

### Template: Feature Request
```markdown
# 🚀 Feature: {{Feature Name}}

**Status:** ⚪ Todo
**Priority:** 🟡 Medium
**Assignee:** {{Person}}
**Due Date:** {{Date}}
**Project:** [[Project Name]]

---

## 📖 Problem Statement

_What problem does this solve?_

---

## 💡 Proposed Solution

_How should it work?_

---

## 🎯 Success Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## 👥 Stakeholders

**Requested by:** 
**Users affected:** 
**Dependencies:**

---

## 📋 Requirements

### Functional
- 

### Non-Functional
- Performance: 
- Security: 
- Accessibility: 

---

## 🎨 Design

_Wireframes, mockups, design links_

---

## 🧪 Acceptance Criteria

- [ ] AC 1
- [ ] AC 2
- [ ] AC 3

---

## 📝 Implementation Notes

_Technical approach, considerations_

---

## 🕐 Estimation

**Story Points:** 
**Estimated Hours:** 
```

---

## 💡 Task Management Best Practices

### For Individuals
1. **Start with Priority** - Do urgent/important first
2. **Break Down Large Tasks** - Nothing should take >8 hours
3. **Update Status Daily** - Keep it current
4. **Log Time Honestly** - Track as you go
5. **Block Dependencies Early** - Don't wait

### For Teams
1. **Daily Standup** - Review tasks and blockers
2. **Clear Assignments** - One owner per task
3. **Realistic Deadlines** - Account for interruptions
4. **Visible Progress** - Use board views
5. **Celebrate Completions** - Acknowledge done work

### For Managers
1. **Workload Balance** - Monitor team capacity
2. **Remove Blockers** - Clear the path
3. **Prioritize Ruthlessly** - Not everything is urgent
4. **Review Completed** - Quality check
5. **Retrospectives** - Learn and improve

---

## 📊 Task Metrics to Track

1. **Tasks Completed** - Per day/week/sprint
2. **Cycle Time** - Start to finish duration
3. **On-Time Completion** - % done by due date
4. **Blocked Time** - Time spent waiting
5. **Estimation Accuracy** - Estimated vs actual hours
6. **Carryover** - Tasks moved between sprints

---

## 🔗 Integration Tips

### With Projects
- Every task should belong to a project
- Rollup task progress to project level
- Use project tags for filtering

### With Sprints
- Assign tasks to sprints for agile workflow
- Track velocity (points per sprint)
- Review sprint completion rates

### With Calendar
- Sync due dates to calendar
- Block time for important tasks
- Set reminders for deadlines
