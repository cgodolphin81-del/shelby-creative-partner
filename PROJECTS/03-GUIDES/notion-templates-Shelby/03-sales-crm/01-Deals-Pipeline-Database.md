# 🎯 Deals Pipeline Database

> **Purpose:** Track every deal from first contact to closed won

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Deal Name** | Title | Opportunity name |
| **Amount** | Number | Deal value (USD) |
| **Stage** | Select | 🔍 Lead, 📞 Qualified, 📋 Proposal, 💬 Negotiation, ✅ Closed Won, ❌ Closed Lost |
| **Probability** | Select | 10%, 25%, 50%, 75%, 90%, 100% |
| **Expected Close** | Date | Expected close date |
| **Contact** | Relation | Primary contact (Contacts DB) |
| **Company** | Relation | Company account (Companies DB) |
| **Owner** | Person | Deal owner |
| **Source** | Select | Inbound, Outbound, Referral, Event, Website, Partner, Social, Other |
| **Type** | Select | New Business, Upsell, Renewal, Referral |
| **Weighted Value** | Formula | Amount × Probability |
| **Days in Stage** | Formula | Days since last stage change |
| **Last Contact** | Date | Last interaction date |
| **Next Follow-up** | Date | Next action date |
| **Products** | Multi-select | Products/services |
| **Competitors** | Multi-select | Competing solutions |
| **Pain Points** | Text | Customer pain points |
| **Solution** | Text | How you solve it |
| **Decision Criteria** | Text | How they'll decide |
| **Decision Process** | Text | Their buying process |
| **Budget** | Select | Confirmed, Estimated, Unknown, No Budget |
| **Timeline** | Select | Immediate, This Quarter, Next Quarter, Next Year, Unknown |
| **Authority** | Select | Confirmed, Likely, Unknown, No Authority |
| **Need** | Select | Confirmed, Likely, Unknown, No Need |
| **Notes** | Text | Deal notes & updates |
| **Commission %** | Number | Commission percentage |
| **Commission $** | Formula | Amount × Commission % |

---

## 🧮 Formulas

### Weighted Value
```notion
prop("Amount") * (toNumber(slice(prop("Probability"), 0, 2)) / 100)
```

### Days in Stage
```notion
dateBetween(now(), prop("Last Updated"), "days")
```

### Commission Amount
```notion
prop("Amount") * (prop("Commission %") / 100)
```

### Stage Badge
```notion
if(
  prop("Stage") == "Closed Won", "✅ Won",
  if(prop("Stage") == "Closed Lost", "❌ Lost",
    if(prop("Stage") == "Negotiation", "💬 Negotiation",
      if(prop("Stage") == "Proposal", "📋 Proposal",
        if(prop("Stage") == "Qualified", "📞 Qualified", "🔍 Lead")
      )
    )
  )
)
```

### At Risk Indicator
```notion
if(
  and(
    prop("Stage") != "Closed Won",
    prop("Stage") != "Closed Lost",
    dateBetween(now(), prop("Expected Close"), "days") < 0
  ),
  "🚨 Past Close Date",
  ""
)
```

### Stuck Deal Indicator
```notion
if(
  and(
    prop("Days in Stage") > 14,
    prop("Stage") != "Closed Won",
    prop("Stage") != "Closed Lost"
  ),
  "⚠️ Stuck",
  ""
)
```

### Deal Score (BANT)
```notion
if(prop("Budget") == "Confirmed", 25, 0) +
if(prop("Authority") == "Confirmed", 25, 0) +
if(prop("Need") == "Confirmed", 25, 0) +
if(prop("Timeline") == "Immediate" or prop("Timeline") == "This Quarter", 25, 0)
```

---

## 📊 Database Views

### View 1: Pipeline Board (Board)
**Group by:** Stage
**Filter:** Stage != Closed Won, Stage != Closed Lost
**Sort:** Expected Close (ascending)
**Card preview:** Show Amount, Close Date, Company
**Sum:** Amount, Weighted Value

### View 2: All Deals (Table)
**Filter:** None
**Sort:** Expected Close (ascending)
**Properties shown:** Deal, Stage, Amount, Weighted, Company, Contact, Close Date

### View 3: My Deals (Table)
**Filter:** Owner = Me
**Sort:** Stage, then Expected Close
**Properties shown:** Deal, Stage, Amount, Close Date, Next Follow-up

### View 4: Closing This Month (List)
**Filter:** Expected Close is within this month, Stage != Closed Won, Stage != Closed Lost
**Sort:** Expected Close (ascending)
**Properties shown:** Deal, Amount, Stage, Company, Contact

### View 5: At Risk (Table)
**Filter:** At Risk Indicator contains "Past Close Date" OR Stuck Deal Indicator contains "Stuck"
**Sort:** Expected Close (ascending)
**Properties shown:** Deal, Amount, Stage, Days in Stage, Owner

### View 6: High Value Deals (Table)
**Filter:** Amount >= 10000
**Sort:** Amount (descending)
**Properties shown:** Deal, Amount, Stage, Company, Expected Close

### View 7: By Source (Board)
**Group by:** Source
**Filter:** None
**Sort:** Amount

### View 8: Closed Won (Table)
**Filter:** Stage = Closed Won
**Sort:** Expected Close (descending)
**Properties shown:** Deal, Amount, Commission, Company, Close Date

### View 9: Closed Lost (Table)
**Filter:** Stage = Closed Lost
**Sort:** Expected Close (descending)
**Properties shown:** Deal, Amount, Company, Loss Reason

### View 10: Pipeline by Owner (Board)
**Group by:** Owner
**Filter:** Stage != Closed Won, Stage != Closed Lost
**Sum:** Amount, Weighted Value

---

## 📝 Deal Templates

### Template: New Opportunity
```markdown
# 🎯 {{Deal Name}}

**Amount:** ${{Amount}}
**Stage:** 🔍 Lead
**Expected Close:** {{Date}}
**Company:** [[Company Name]]
**Contact:** [[Contact Name]]

---

## 📖 Deal Overview

### Summary
_Brief description of the opportunity_

### Pain Points
- What problem are they trying to solve?
- What's the impact of not solving it?
- Why now?

### Our Solution
- How do we solve their problem?
- What makes us different?
- Expected outcomes

---

## 🔍 Qualification (BANT)

### Budget
- **Status:** {{Confirmed/Estimated/Unknown/No Budget}}
- **Amount:** $
- **Notes:** 

### Authority
- **Status:** {{Confirmed/Likely/Unknown/No Authority}}
- **Decision Maker:** 
- **Decision Process:** 

### Need
- **Status:** {{Confirmed/Likely/Unknown/No Need}}
- **Use Case:** 
- **Requirements:** 

### Timeline
- **Status:** {{Immediate/This Quarter/Next Quarter/Next Year}}
- **Target Start:** 
- **Key Dates:** 

---

## 👥 Stakeholders

| Name | Title | Role | Influence | Status |
|------|-------|------|-----------|--------|
| | | | | |
| | | | | |

### Champion
_Who is advocating for us internally?_

### Economic Buyer
_Who controls the budget?_

### Technical Evaluator
_Who evaluates the solution?_

### End Users
_Who will use the product?_

---

## 📋 Competition

### Known Competitors
- Competitor 1: 
- Competitor 2: 

### Our Advantages
1. 
2. 
3. 

### Their Advantages
1. 
2. 
3. 

---

## 📅 Activity Timeline

| Date | Type | Notes | Next Step |
|------|------|-------|-----------|
| | | | |

---

## 📝 Notes & Updates

### {{Date}}
_Update notes here_

---

## ✅ Next Steps

- [ ] Task 1 (Due: Date)
- [ ] Task 2 (Due: Date)
- [ ] Task 3 (Due: Date)

**Next Follow-up:** {{Date}}
```

### Template: Proposal Sent
```markdown
# 📋 Proposal: {{Deal Name}}

**Sent:** {{Date}}
**Valid Until:** {{Date}}
**Amount:** ${{Amount}}

---

## 📦 Proposal Details

### Solution Overview
_What's included in the proposal_

### Pricing
- Package: $X
- Add-ons: $X
- Total: $X

### Terms
- Contract length: 
- Payment terms: 
- Start date: 

---

## 📊 Proposal Status

- [ ] Proposal sent
- [ ] Received by decision maker
- [ ] Questions addressed
- [ ] Negotiation started
- [ ] Verbal commitment
- [ ] Contract sent
- [ ] Signed

---

## 💬 Objections & Concerns

| Objection | Response | Status |
|-----------|----------|--------|
| | | |

---

## 📅 Follow-up Plan

| Date | Action | Owner |
|------|--------|-------|
| | | |

---

## 🔗 Documents

- **Proposal:** [Link]
- **Case Studies:** [Links]
- **References:** [Links]
- **Contract:** [Link]
```

### Template: Closed Won
```markdown
# ✅ WON: {{Deal Name}}

**Closed:** {{Date}}
**Amount:** ${{Amount}}
**Commission:** ${{Commission}}

---

## 🎉 Deal Summary

**Company:** [[Company Name]]
**Contact:** [[Contact Name]]
**Products:** 
**Sales Cycle:** X days

---

## 📋 Handoff Checklist

- [ ] Introduction email to customer success
- [ ] Contract filed
- [ ] Invoice sent
- [ ] Kickoff meeting scheduled
- [ ] Internal handoff complete

---

## 🏆 Win Analysis

### Why We Won
1. 
2. 
3. 

### Key Differentiators
- 
- 

### What Worked Well
- 
- 

---

## 💰 Commission Details

**Commission Rate:** %
**Commission Amount:** $
**Payment Date:** {{Date}}
**Paid:** [ ] Yes [ ] No

---

## 📝 Lessons Learned

_What can we replicate in future deals?_

---

## 🔗 Related

- **Contact:** [[Link]]
- **Company:** [[Link]]
- **Proposal:** [Link]
- **Contract:** [Link]
```

### Template: Closed Lost
```markdown
# ❌ LOST: {{Deal Name}}

**Closed:** {{Date}}
**Amount:** ${{Amount}}
**Reason:** 

---

## 📖 Loss Analysis

### Primary Reason
- Price
- Features
- Timing
- Competitor
- No decision
- Other: 

### Detailed Reason
_Why did we lose this deal?_

---

## 🏆 Competitor Analysis

**Who won?**
_Which competitor won?_

**Why them?**
- 
- 

### What We Could Have Done Better
1. 
2. 
3. 

---

## 📚 Learnings

### What Went Well
- 
- 

### What to Improve
- 
- 

### Follow-up Opportunities
- [ ] Check in in 3 months
- [ ] Share relevant content
- [ ] Invite to events

---

## 💡 Future Potential

**Re-engage Date:** {{Date}}
**Trigger Events to Watch:**
- 
- 

---

## 🔗 Related

- **Contact:** [[Link]]
- **Company:** [[Link]]
```

---

## 💡 Pipeline Management Best Practices

### Daily
- Update deal stages
- Log all activities
- Complete next follow-ups

### Weekly
- Review pipeline health
- Identify at-risk deals
- Update forecasts
- Team pipeline review

### Monthly
- Analyze conversion rates
- Review sales cycle length
- Update ICP (Ideal Customer Profile)
- Clean up stale deals

---

## 📊 Key Metrics to Track

1. **Pipeline Value** - Total value of open deals
2. **Weighted Pipeline** - Sum of weighted values
3. **Average Deal Size** - Total value / Number of deals
4. **Sales Cycle** - Average days to close
5. **Conversion Rate** - Won / Total opportunities
6. **Win Rate** - Won / (Won + Lost)
7. **Activity Metrics** - Calls, emails, meetings per rep

---

## 🎯 Sales Stage Definitions

### 🔍 Lead
Initial contact made. Basic qualification needed.

### 📞 Qualified
BANT confirmed. Clear need and fit.

### 📋 Proposal
Proposal/demo sent. Awaiting feedback.

### 💬 Negotiation
Terms being discussed. Closing in sight.

### ✅ Closed Won
Contract signed. Deal complete.

### ❌ Closed Lost
Deal lost. Document reason.
