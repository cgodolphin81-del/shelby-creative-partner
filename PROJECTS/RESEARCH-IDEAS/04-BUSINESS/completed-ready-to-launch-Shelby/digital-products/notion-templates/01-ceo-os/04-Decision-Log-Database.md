# 🧠 Decision Log Database

> **Purpose:** Track important decisions with context, rationale, and review dates

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Decision** | Title | Clear statement of what was decided |
| **Date** | Date | When decision was made |
| **Type** | Select | Strategic, Hiring, Financial, Product, Operational, Legal, Investment, Partnership |
| **Impact** | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| **Urgency** | Select | 🔥 Urgent, ⏰ Normal, 📅 Can Wait |
| **Status** | Select | 📝 Proposed, 🤔 In Discussion, ✅ Decided, 🔄 In Progress, ✔️ Implemented, ↩️ Reversed |
| **Context** | Text | Background and situation |
| **Options Considered** | Text | Alternatives that were evaluated |
| **Rationale** | Text | Why this option was chosen |
| **Decision Maker** | Person | Who made the final call |
| **Stakeholders** | Person | Who was consulted |
| **Owner** | Person | Who owns implementation |
| **Review Date** | Date | When to revisit this decision |
| **Related OKRs** | Relation | Links to Goals database |
| **Related Meetings** | Relation | Links to Meetings database |
| **Documents** | Files & media | Supporting docs |
| **Confidence** | Select | 🔴 Low, 🟡 Medium, 🟢 High |
| **Reversible?** | Select | Yes (Two-way door), No (One-way door) |

---

## 🧮 Formulas

### Decision Status Badge
```notion
if(
  prop("Status") == "Implemented", "✔️ Implemented",
  if(prop("Status") == "Decided", "✅ Decided",
    if(prop("Status") == "In Progress", "🔄 In Progress",
      if(prop("Status") == "Reversed", "↩️ Reversed",
        if(prop("Status") == "In Discussion", "🤔 Discussing", "📝 Proposed")
      )
    )
  )
)
```

### Days Until Review
```notion
if(
  empty(prop("Review Date")),
  null,
  dateBetween(prop("Review Date"), now(), "days")
)
```

### Review Due
```notion
if(
  and(
    prop("Review Date") < now(),
    prop("Status") != "Reversed",
    prop("Status") != "Implemented"
  ),
  "🚨 Review overdue",
  ""
)
```

### Decision Type Icon
```notion
if(
  prop("Type") == "Strategic", "🎯",
  if(prop("Type") == "Hiring", "👥",
    if(prop("Type") == "Financial", "💰",
      if(prop("Type") == "Product", "📦",
        if(prop("Type") == "Operational", "⚙️",
          if(prop("Type") == "Legal", "⚖️",
            if(prop("Type") == "Investment", "📈", "🤝")
          )
        )
      )
    )
  )
)
```

---

## 📊 Database Views

### View 1: Recent Decisions (List)
**Filter:** None
**Sort:** Date (descending)
**Properties shown:** Decision, Type, Status, Decision Maker, Date

### View 2: Pending Decisions (Table)
**Filter:** Status = Proposed OR Status = In Discussion
**Sort:** Urgency, then Date
**Properties shown:** Decision, Type, Impact, Urgency, Decision Maker

### View 3: Awaiting Implementation (Table)
**Filter:** Status = Decided OR Status = In Progress
**Sort:** Date
**Properties shown:** Decision, Owner, Status, Review Date

### View 4: Decisions to Review (Table)
**Filter:** Review Date < Today + 14 days
**Sort:** Review Date (ascending)
**Properties shown:** Decision, Status, Review Date, Owner

### View 5: By Type (Board)
**Group by:** Type
**Filter:** None
**Sort:** Date (descending)

### View 6: High Impact Decisions (Table)
**Filter:** Impact = High
**Sort:** Date (descending)
**Properties shown:** Decision, Status, Decision Maker, Rationale

### View 7: Decision History (Timeline)
**Group by:** Type
**Sort:** Date
**Layout:** Timeline (Date property)

---

## 📝 Decision Log Template

```markdown
# 🧠 Decision: [Clear Decision Statement]

**Date:** {{Date}}
**Type:** {{Type}}
**Impact:** {{Impact}}
**Urgency:** {{Urgency}}
**Decision Maker:** {{Person}}
**Review Date:** {{Date}}

---

## 📖 Context & Background

_What situation led to this decision? What problem are we solving? What's the current state?_

### The Situation
[Describe the current situation]

### Why Now?
[Why is this decision needed now?]

### Constraints
- Time: 
- Budget: 
- Resources: 
- Other: 

---

## 💭 Options Considered

### Option 1: [Name]
**Description:** 
**Pros:**
- 
- 
**Cons:**
- 
- 
**Effort:** Low / Medium / High
**Risk:** Low / Medium / High

### Option 2: [Name]
**Description:** 
**Pros:**
- 
- 
**Cons:**
- 
- 
**Effort:** Low / Medium / High
**Risk:** Low / Medium / High

### Option 3: [Name]
**Description:** 
**Pros:**
- 
- 
**Cons:**
- 
- 
**Effort:** Low / Medium / High
**Risk:** Low / Medium / High

---

## ✅ Decision

**Chosen Option:** [Option Name]

### Rationale
_Why did we choose this option? What factors were most important?_

1. 
2. 
3. 

### Expected Outcomes
- Short-term: 
- Long-term: 

### Success Metrics
How will we know this was the right decision?
- Metric 1: 
- Metric 2: 

---

## 🔄 Implementation Plan

| Step | Owner | Due Date | Status |
|------|-------|----------|--------|
| | | | |
| | | | |

### Resources Needed
- Budget: $
- People: 
- Tools: 

### Risks & Mitigation
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| | | | |

---

## 📋 Stakeholders Consulted

| Name | Role | Input |
|------|------|-------|
| | | |

---

## 📅 Review Plan

**Review Date:** {{Date}}
**Review Owner:** {{Person}}
**Review Criteria:**
- [ ] Metric 1 achieved
- [ ] Metric 2 achieved
- [ ] No unexpected negative consequences

---

## 🔗 Related

- **Related OKRs:** [[Link]]
- **Related Meetings:** [[Link]]
- **Supporting Documents:** [Links]

---

## 📝 Decision Journal

### {{Date}} - Initial Decision
[Notes from decision meeting]

### {{Date}} - Check-in 1
[Progress update]

### {{Date}} - Review
[Was this the right decision? What did we learn?]
```

---

## 💡 Decision-Making Frameworks

### One-Way vs Two-Way Doors
- **One-way door (irreversible):** Take time, gather data, consult stakeholders
- **Two-way door (reversible):** Decide quickly, learn from outcomes

### DACI Framework
- **D**river - Who drives the decision forward
- **A**pprover - Who makes the final call
- **C**ontributor - Who provides input
- **I**nformed - Who needs to know the outcome

### Decision Quality Checklist
- [ ] Right people involved
- [ ] Right information gathered
- [ ] Alternatives considered
- [ ] Trade-offs understood
- [ ] Clear rationale documented
- [ ] Implementation plan defined
- [ ] Review date set

---

## 📈 Decision Metrics to Track

1. **Decision Velocity** - How many decisions per week
2. **Decision Reversal Rate** - % of decisions that get reversed
3. **Time to Decision** - Average time from proposal to decision
4. **Implementation Rate** - % of decisions that get implemented

---

## 💡 Pro Tips

1. **Document within 24 hours** - While it's fresh
2. **Include dissenting views** - Capture why other options weren't chosen
3. **Set review dates** - Especially for high-impact decisions
4. **Link to outcomes** - Connect decisions to OKRs and results
5. **Make it searchable** - Use consistent naming and tags
