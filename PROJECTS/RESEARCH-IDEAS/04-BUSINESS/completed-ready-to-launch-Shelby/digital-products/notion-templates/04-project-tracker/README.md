# 📋 Project Tracker

**Complete Notion Template for Project Management & Team Collaboration**

---

## 📦 What's Included

- **Project Dashboard** - Overview of all projects
- **Task Database** - Tasks with subtasks, dependencies, assignments
- **Timeline View** - Gantt-style project timelines
- **Team Workload** - See who's working on what
- **Sprint Planning** - Agile sprint management
- **Resource Library** - Documents, files, references

---

## 🚀 Quick Start

1. **Duplicate** this template to your Notion workspace
2. **Create** your first project
3. **Add** tasks and assign to team members
4. **Set** due dates and priorities
5. **Track** progress in real-time

---

## 📁 Page Structure

```
Project Tracker
├── 📊 Dashboard
│   ├── All Projects
│   ├── My Tasks
│   └── Team Workload
├── 📁 Projects
│   ├── Active Projects
│   ├── On Hold
│   ├── Completed
│   └── Archived
├── ✅ Tasks
│   ├── All Tasks
│   ├── By Status
│   ├── By Assignee
│   └── Overdue
├── 📅 Timeline
│   ├── Gantt View
│   └── Calendar View
├── 🏃 Sprints
│   ├── Current Sprint
│   ├── Backlog
│   └── Past Sprints
├── 👥 Team
│   ├── Team Directory
│   └── Workload View
└── 📚 Resources
    ├── Documents
    ├── Templates
    └── References
```

---

## 🗄️ Database Schemas

### Projects Database

| Property | Type | Description |
|----------|------|-------------|
| Project Name | Title | Project name |
| Status | Select | Not Started, In Progress, On Hold, Completed, Archived |
| Priority | Select | Critical, High, Medium, Low |
| Start Date | Date | Project start |
| End Date | Date | Project deadline |
| Owner | Person | Project owner |
| Team | Person | Team members |
| Tasks | Relation | Linked tasks |
| Progress | Rollup | % complete from tasks |
| Budget | Number | Project budget |
| Spent | Number | Amount spent |
| Client | Relation | Linked client (optional) |
| Tags | Multi-select | Categories, departments |
| Description | Text | Project description |

### Tasks Database

| Property | Type | Description |
|----------|------|-------------|
| Task | Title | Task name |
| Status | Select | Todo, In Progress, In Review, Done, Blocked |
| Priority | Select | 🔴 Urgent, 🔵 High, 🟡 Medium, ⚪ Low |
| Assignee | Person | Who's doing it |
| Project | Relation | Parent project |
| Due Date | Date | Task deadline |
| Estimated Hours | Number | Time estimate |
| Actual Hours | Number | Time logged |
| Subtasks | Relation | Child tasks |
| Dependencies | Relation | Blocking tasks |
| Sprint | Relation | Linked sprint |
| Tags | Multi-select | Task categories |
| Effort | Select | XS, S, M, L, XL |
| Completed Date | Date | When finished |

### Sprints Database

| Property | Type | Description |
|----------|------|-------------|
| Sprint Name | Title | Sprint identifier |
| Start Date | Date | Sprint start |
| End Date | Date | Sprint end |
| Status | Select | Planned, Active, Completed |
| Goals | Text | Sprint goals |
| Tasks | Relation | Sprint tasks |
| Velocity | Rollup | Points completed |
| Capacity | Number | Team capacity |
| Team | Person | Sprint team |

---

## 🔧 Key Formulas

### Project Progress
```
if(empty(prop("Tasks")), 0, 
  round(prop("Tasks").map(current.prop("Status") == "Done").filter(current == true).length() / 
  prop("Tasks").length() * 100)) + "%"
```

### Days Remaining
```
dateBetween(prop("End Date"), now(), "days")
```

### Task Overdue
```
if(and(prop("Status") != "Done", prop("Due Date") < now()), "🚨 OVERDUE", "")
```

---

## 📋 Templates Included

See individual template files for complete structures.

---

## 💡 Pro Tips

1. **Daily Standups** - Review tasks every morning
2. **Weekly Planning** - Plan next week every Friday
3. **Update Progress** - Keep task status current
4. **Block Time** - Schedule deep work for important tasks
5. **Review Completed** - Celebrate wins, learn from blockers

---

## 🎨 Customization

- Adjust statuses to your workflow
- Add custom fields for your needs
- Integrate with Slack for notifications
- Add time tracking if needed
- Customize views per team/role
