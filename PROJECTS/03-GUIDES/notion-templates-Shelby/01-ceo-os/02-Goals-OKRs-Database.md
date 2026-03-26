# 🎯 Goals & OKRs Database

> **Purpose:** Track company, department, and individual objectives with measurable key results

---

## 📋 Database Properties

### Main Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Name** | Title | Text |
| **Status** | Select | 🟢 On Track, 🟡 At Risk, 🔴 Off Track, ✅ Complete |
| **Quarter** | Select | Q1 2024, Q2 2024, Q3 2024, Q4 2024 |
| **Owner** | Person | Team member |
| **Department** | Select | Executive, Engineering, Product, Sales, Marketing, Operations, Finance, HR |
| **Priority** | Select | 🔴 P0 (Critical), 🟠 P1 (High), 🟡 P2 (Medium), ⚪ P3 (Low) |
| **Start Date** | Date | Calendar |
| **Due Date** | Date | Calendar |
| **Progress %** | Formula | See formula below |
| **Days Left** | Formula | See formula below |
| **Key Results** | Relation | Links to Key Results database |
| **Parent Objective** | Relation | For nested OKRs |
| **Tags** | Multi-select | Growth, Revenue, Product, Culture, etc. |

---

## 🧮 Formulas

### Progress Percentage
```notion
if(
  empty(prop("Key Results")),
  0,
  round(
    (prop("Key Results").map(current.prop("Progress %")).sum() / 
     prop("Key Results").length()) * 100
  )
)
```

### Days Until Due
```notion
if(
  empty(prop("Due Date")),
  null,
  dateBetween(prop("Due Date"), now(), "days")
)
```

### Status Badge
```notion
if(
  prop("Status") == "Complete", "✅ Complete",
  if(prop("Status") == "On Track", "🟢 On Track",
    if(prop("Status") == "At Risk", "🟡 At Risk",
      if(prop("Status") == "Off Track", "🔴 Off Track", "⚪ Not Started")
    )
  )
)
```

### Overdue Indicator
```notion
if(
  and(
    prop("Status") != "Complete",
    prop("Due Date") < now()
  ),
  "🚨 OVERDUE",
  ""
)
```

---

## 📊 Database Views

### View 1: Current Quarter OKRs (Table)
**Filter:** Quarter = Current Quarter
**Sort:** Priority (P0 first), then Progress % (low to high)
**Properties shown:** Name, Status, Owner, Progress %, Due Date, Days Left

### View 2: OKR Board (Board)
**Group by:** Status
**Filter:** Quarter = Current Quarter
**Sort:** Priority
**Card preview:** Show Owner and Due Date

### View 3: By Department (Board)
**Group by:** Department
**Filter:** Quarter = Current Quarter
**Sort:** Progress %

### View 4: My OKRs (Table)
**Filter:** Owner = Me, Quarter = Current Quarter
**Sort:** Priority

### View 5: At Risk Objectives (Table)
**Filter:** Status = At Risk OR Status = Off Track
**Sort:** Due Date (ascending)

### View 6: All History (Table)
**Filter:** None
**Group by:** Quarter
**Sort:** Quarter (descending)

---

## 📝 Database Templates

### Template: Company Objective
```
## 🎯 Objective
[Clear, inspiring statement of what we want to achieve]

## 📖 Why This Matters
[Context on why this objective is important]

## 📏 Success Criteria
[How will we know we've achieved this?]

## 🔗 Key Results
[Link to 3-5 measurable key results]

## 📋 Initiatives
- [ ] Initiative 1
- [ ] Initiative 2
- [ ] Initiative 3

## 📊 Weekly Check-ins
### Week 1
- Progress: 
- Blockers:
- Next steps:

### Week 2
- Progress:
- Blockers:
- Next steps:
```

### Template: Department Objective
```
## 🎯 Objective
[Department-specific objective]

## 📖 Alignment
Links to company OKR: [[Company OKR Name]]

## 📏 Key Results
[3-5 measurable outcomes]

## 👥 Team Members
- [ ] @Person - Role
- [ ] @Person - Role

## 📋 Projects
- Project 1
- Project 2

## 🚧 Dependencies
- What we need from other teams
```

---

## 🔗 Related Databases

- **Key Results Database** - Individual metrics that roll up to objectives
- **Projects Database** - Work streams that support OKRs
- **Meetings Database** - Where OKRs are reviewed

---

## 💡 Best Practices

1. **Limit Objectives** - Max 3-5 per quarter per team
2. **Make KRs Measurable** - Every key result needs a number
3. **Weekly Updates** - Update progress every Friday
4. **Ambitious but Realistic** - 70% achievement is success
5. **Connect to Daily Work** - Every project should link to an OKR
