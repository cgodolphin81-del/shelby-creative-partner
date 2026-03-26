# 💰 Commission Tracker

> **Purpose:** Auto-calculate and track sales commissions

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Commission ID** | Title | Auto-generated ID |
| **Deal** | Relation | Link to Deals database |
| **Sales Rep** | Person | Who earned commission |
| **Deal Amount** | Rollup | From Deal (Amount) |
| **Commission Rate** | Number | Percentage (e.g., 10 for 10%) |
| **Commission Earned** | Formula | Deal Amount × Rate |
| **Status** | Select | 📝 Pending, ✅ Approved, 💰 Paid, ❌ Clawback |
| **Close Date** | Rollup | From Deal (Expected Close) |
| **Payment Date** | Date | When commission paid |
| **Payment Method** | Select | Payroll, Wire, Check, Other |
| **Notes** | Text | Any adjustments or notes |
| **Quarter** | Formula | Extract quarter from close date |
| **Year** | Formula | Extract year from close date |

---

## 🧮 Formulas

### Commission Earned
```notion
prop("Deal Amount") * (prop("Commission Rate") / 100)
```

### Quarter
```notion
"Q" + format(floor((month(prop("Close Date")) - 1) / 3) + 1) + " " + format(year(prop("Close Date")))
```

### Year
```notion
format(year(prop("Close Date")))
```

### Status Badge
```notion
if(
  prop("Status") == "Paid", "💰 Paid",
  if(prop("Status") == "Approved", "✅ Approved",
    if(prop("Status") == "Clawback", "❌ Clawback", "📝 Pending")
  )
)
```

### Days Until Payment
```notion
if(
  and(
    prop("Status") != "Paid",
    prop("Payment Date") != null
  ),
  dateBetween(prop("Payment Date"), now(), "days"),
  null
)
```

---

## 📊 Database Views

### View 1: This Month (Table)
**Filter:** Close Date is within this month
**Sort:** Close Date (descending)
**Sum:** Commission Earned
**Properties shown:** Deal, Rep, Deal Amount, Rate, Commission, Status

### View 2: This Quarter (Table)
**Filter:** Quarter = Current Quarter
**Group by:** Sales Rep
**Sum:** Commission Earned
**Properties shown:** Deal, Rep, Deal Amount, Commission, Status

### View 3: Pending Payment (Table)
**Filter:** Status = Pending OR Status = Approved
**Sort:** Close Date (ascending)
**Properties shown:** Deal, Rep, Commission, Close Date, Payment Date

### View 4: Paid Commissions (Table)
**Filter:** Status = Paid
**Sort:** Payment Date (descending)
**Sum:** Commission Earned

### View 5: By Rep (Board)
**Group by:** Sales Rep
**Filter:** Year = Current Year
**Sum:** Commission Earned

### View 6: By Quarter (Board)
**Group by:** Quarter
**Sort:** Quarter (descending)
**Sum:** Commission Earned

### View 7: Year to Date (Table)
**Filter:** Year = Current Year
**Group by:** Sales Rep
**Sum:** Commission Earned

### View 8: Clawbacks (Table)
**Filter:** Status = Clawback
**Sort:** Payment Date (descending)
**Properties shown:** Deal, Rep, Commission, Reason (Notes)

---

## 📝 Commission Plan Templates

### Template: Standard Commission Plan
```markdown
# 💰 Commission Plan: {{Rep Name}}

**Effective Date:** {{Date}}
**Plan Type:** Standard

---

## 📊 Commission Structure

### Base Rate
- **Rate:** 10% of deal value
- **Applies to:** All closed won deals

### Accelerators
- **110% of quota:** 12% on excess
- **125% of quota:** 15% on excess
- **150% of quota:** 20% on excess

### Special Products
- **Product A:** 15% commission
- **Product B:** 20% commission
- **New Logo Bonus:** +5% for first-time customers

---

## 🎯 Quota

**Quarterly Quota:** $500,000
**Annual Quota:** $2,000,000

---

## 📋 Payment Terms

- **When:** Following payroll after close
- **Method:** Payroll deposit
- **Clawback:** If deal cancels within 90 days

---

## ✅ Commission Tracking

| Quarter | Quota | Achieved | % to Quota | Commission |
|---------|-------|----------|------------|------------|
| Q1 | $500K | | | |
| Q2 | $500K | | | |
| Q3 | $500K | | | |
| Q4 | $500K | | | |

---

## 📝 Notes

_Plan details and adjustments_
```

### Template: Tiered Commission Plan
```markdown
# 💰 Tiered Commission Plan

**Tier Structure:**

| Deal Size | Commission Rate |
|-----------|-----------------|
| $0 - $10K | 8% |
| $10K - $50K | 12% |
| $50K - $100K | 15% |
| $100K+ | 20% |

---

## 🧮 Calculation Example

**Deal Amount:** $75,000

**Calculation:**
- First $10K @ 8% = $800
- Next $40K @ 12% = $4,800
- Remaining $25K @ 15% = $3,750
- **Total Commission:** $9,350 (12.5% effective rate)

---

## 📋 Implementation

Use formula in Commission Tracker:
```
if(prop("Deal Amount") <= 10000, 
  prop("Deal Amount") * 0.08,
  if(prop("Deal Amount") <= 50000,
    800 + (prop("Deal Amount") - 10000) * 0.12,
    if(prop("Deal Amount") <= 100000,
      5600 + (prop("Deal Amount") - 50000) * 0.15,
      13100 + (prop("Deal Amount") - 100000) * 0.20
    )
  )
)
```
```

---

## 💡 Commission Best Practices

### For Sales Reps
1. **Track Your Own Numbers** - Don't rely solely on finance
2. **Understand Your Plan** - Know accelerators and special rates
3. **Time Deals Strategically** - End of quarter considerations
4. **Document Everything** - Keep records of all deals
5. **Follow Up on Payments** - Ensure timely payment

### For Managers
1. **Clear Communication** - Ensure reps understand their plan
2. **Transparent Tracking** - Make commission data visible
3. **Timely Payment** - Pay commissions on schedule
4. **Regular Reviews** - Monthly commission reviews
5. **Fair Clawbacks** - Clear policy on deal reversals

---

## 📊 Commission Reports

### Monthly Commission Report
```markdown
# Commission Report: {{Month}} {{Year}}

## Summary
- **Total Deals Closed:** X
- **Total Revenue:** $X
- **Total Commissions:** $X
- **Average Commission Rate:** X%

## By Rep
| Rep | Deals | Revenue | Commission |
|-----|-------|---------|------------|
| | | | |

## Top Performers
1. 
2. 
3. 

## Notes
_Any adjustments, clawbacks, or special cases_
```

---

## 🔗 Integration Tips

### With Deals Database
- Link each commission record to its deal
- Rollup deal amount automatically
- Use deal close date for payment timing

### With Payroll
- Export monthly commission totals
- Integrate with payroll system
- Track payment confirmations

### For Forecasting
- Calculate expected commissions from pipeline
- Budget for commission expenses
- Plan for accelerator payouts
