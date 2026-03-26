# 💸 Expense Tracker Database

> **Purpose:** Track and categorize all business expenses

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Transaction** | Title | Expense description |
| **Amount** | Number | Expense amount (USD) |
| **Date** | Date | Transaction date |
| **Vendor** | Select | Vendor/supplier name |
| **Category** | Select | See categories below |
| **Department** | Select | Department owning expense |
| **Project** | Relation | Linked project (optional) |
| **Payment Method** | Select | Credit Card, Bank Transfer, PayPal, Cash, Check, Other |
| **Card Used** | Select | Which credit card (if applicable) |
| **Status** | Select | 📝 Pending, ✅ Paid, 💰 Reimbursed, ❌ Rejected |
| **Receipt** | Files & media | Receipt image/PDF |
| **Billable?** | Checkbox | Can this be billed to client? |
| **Client** | Relation | Which client (if billable) |
| **Tax Deductible?** | Checkbox | Is this tax deductible? |
| **Tax Category** | Select | IRS tax categories |
| **Notes** | Text | Additional details |
| **Month** | Formula | Extract month for grouping |
| **Year** | Formula | Extract year for grouping |
| **Quarter** | Formula | Extract quarter for grouping |

---

## 🧮 Formulas

### Month
```notion
formatDate(prop("Date"), "MMMM YYYY")
```

### Year
```notion
formatDate(prop("Date"), "YYYY")
```

### Quarter
```notion
"Q" + format(floor((month(prop("Date")) - 1) / 3) + 1) + " " + format(year(prop("Date")))
```

### Week
```notion
"Week " + format(floor((dayOfYear(prop("Date")) - 1) / 7) + 1)
```

### Status Badge
```notion
if(
  prop("Status") == "Paid", "✅ Paid",
  if(prop("Status") == "Reimbursed", "💰 Reimbursed",
    if(prop("Status") == "Rejected", "❌ Rejected", "📝 Pending")
  )
)
```

### Billable Badge
```notion
if(prop("Billable?"), "✅ Billable", "")
```

### Days Since Transaction
```notion
dateBetween(now(), prop("Date"), "days")
```

---

## 📊 Database Views

### View 1: All Expenses (Table)
**Filter:** None
**Sort:** Date (descending)
**Sum:** Amount
**Properties shown:** Transaction, Amount, Date, Vendor, Category, Status

### View 2: This Month (Table)
**Filter:** Month = Current Month
**Sort:** Date (descending)
**Group by:** Category
**Sum:** Amount
**Properties shown:** Transaction, Amount, Vendor, Category, Status

### View 3: By Category (Board)
**Group by:** Category
**Filter:** Year = Current Year
**Sum:** Amount
**Sort:** Amount (descending)

### View 4: By Department (Board)
**Group by:** Department
**Filter:** Year = Current Year
**Sum:** Amount

### View 5: Pending Expenses (Table)
**Filter:** Status = Pending
**Sort:** Date (ascending)
**Properties shown:** Transaction, Amount, Vendor, Date, Notes

### View 6: Billable Expenses (Table)
**Filter:** Billable? = Yes
**Sort:** Date (descending)
**Sum:** Amount
**Properties shown:** Transaction, Amount, Client, Project, Status

### View 7: By Vendor (Table)
**Group by:** Vendor
**Filter:** Year = Current Year
**Sum:** Amount
**Sort:** Amount (descending)

### View 8: Missing Receipts (Table)
**Filter:** Receipt is empty, Status = Paid
**Sort:** Date (ascending)
**Properties shown:** Transaction, Amount, Vendor, Date

### View 9: This Quarter (Table)
**Filter:** Quarter = Current Quarter
**Group by:** Month
**Sum:** Amount
**Properties shown:** Transaction, Amount, Category, Department

### View 10: Tax Deductible (Table)
**Filter:** Tax Deductible? = Yes
**Sort:** Date (descending)
**Sum:** Amount
**Properties shown:** Transaction, Amount, Tax Category, Date

---

## 📝 Expense Categories

### Recommended Categories

**Operating Expenses:**
- Rent/Office
- Utilities
- Insurance
- Office Supplies
- Software/Subscriptions
- Equipment
- Maintenance

**Personnel:**
- Salaries
- Contractor Fees
- Benefits
- Payroll Taxes
- Training

**Marketing:**
- Advertising
- Content Creation
- Events
- PR
- Website

**Sales:**
- Commissions
- Travel
- Entertainment
- Samples

**Professional Services:**
- Legal
- Accounting
- Consulting
- Banking Fees

**Technology:**
- Hosting
- SaaS Tools
- Development
- IT Support

**Travel:**
- Flights
- Hotels
- Meals
- Ground Transport

**Other:**
- Bank Fees
- Taxes
- Depreciation
- Miscellaneous

---

## 📝 Expense Templates

### Template: Standard Expense
```markdown
# 💸 {{Transaction Name}}

**Amount:** ${{Amount}}
**Date:** {{Date}}
**Vendor:** {{Vendor}}
**Category:** {{Category}}
**Department:** {{Department}}

---

## 📖 Details

**Description:**
_What was this expense for?_

**Business Purpose:**
_Why was this necessary for the business?_

---

## 💳 Payment

**Payment Method:** {{Method}}
**Card Used:** {{Card}}
**Status:** {{Status}}

---

## 📎 Receipt

**Receipt Attached:** [ ] Yes [ ] No
**Receipt:** [Upload here]

---

## 💰 Billing

**Billable:** [ ] Yes [ ] No
**Client:** [[Client Name]]
**Project:** [[Project Name]]

---

## 📋 Tax

**Tax Deductible:** [ ] Yes [ ] No
**Tax Category:** {{Category}}

---

## 📝 Notes

_Any additional details, context, or follow-up needed_

---

## 🔗 Related

- **Project:** [[Link]]
- **Client:** [[Link]]
- **Budget:** [[Link]]
```

### Template: Travel Expense
```markdown
# ✈️ Travel: {{Trip Name}}

**Total Amount:** ${{Amount}}
**Date:** {{Date}}
**Vendor:** {{Vendor}}
**Category:** Travel

---

## 📖 Trip Details

**Purpose:**
_Why was this trip necessary?_

**Destination:** 

**Dates:** {{Start}} - {{End}}

**Attendees:**
- 

---

## 💰 Expense Breakdown

| Item | Amount | Category |
|------|--------|----------|
| Flights | $ | Travel |
| Hotel | $ | Travel |
| Meals | $ | Travel |
| Ground Transport | $ | Travel |
| Other | $ | Travel |

---

## 💳 Payment

**Payment Method:** 
**Card Used:** 
**Status:** {{Status}}

---

## 📎 Receipts

- [ ] Flight receipt
- [ ] Hotel receipt
- [ ] Meal receipts
- [ ] Transport receipts

**Upload:** [Attach all receipts]

---

## 💰 Billing

**Billable:** [ ] Yes [ ] No
**Client:** [[Client Name]]

**Reimbursable:** [ ] Yes [ ] No
**Employee:** {{Name}}

---

## 📋 Tax

**Tax Deductible:** [ ] Yes [ ] No
**Notes:** _Any special tax considerations_

---

## 📝 Notes

_Additional trip details or follow-up_
```

### Template: Recurring Expense
```markdown
# 🔄 Recurring: {{Expense Name}}

**Amount:** ${{Amount}}/month
**Category:** {{Category}}
**Vendor:** {{Vendor}}

---

## 📖 Subscription Details

**Service:** 
**Purpose:** 
**Users:** 

**Billing Cycle:** Monthly / Annual / Quarterly
**Next Billing:** {{Date}}

---

## 💳 Payment

**Payment Method:** 
**Card Used:** 
**Auto-pay:** [ ] Yes [ ] No

---

## 📊 Usage

**Last Review:** {{Date}}
**Utilization:** High / Medium / Low
**Renewal Decision:** Renew / Review / Cancel

---

## 📝 Review Notes

_Is this still necessary? Can we optimize?_

---

## 🔗 Related

- **Budget:** [[Budget Name]]
- **Department:** {{Department}}
- **Contract:** [Link]
```

---

## 💡 Expense Management Best Practices

### Daily
- Upload receipts immediately (use mobile app)
- Categorize transactions same day
- Flag billable expenses

### Weekly
- Review pending expenses
- Approve team expenses
- Check for missing receipts

### Monthly
- Reconcile with bank statements
- Review budget vs actual
- Export for accounting
- Review recurring subscriptions

### Quarterly
- Analyze spending trends
- Identify cost savings
- Update budgets
- Tax preparation review

---

## 📊 Expense Metrics to Track

1. **Total Expenses** - By period (week, month, quarter, year)
2. **By Category** - Where is money going?
3. **By Department** - Who's spending what?
4. **Budget Variance** - Over or under budget?
5. **Billable Ratio** - % of expenses that are billable
6. **Recurring Expenses** - Fixed costs monthly
7. **Expense per Employee** - Average spend per person

---

## 🔗 Integration Tips

### With Accounting Software
- Export monthly for QuickBooks/Xero
- Use consistent categories
- Keep receipt images for audits

### With Projects
- Link billable expenses to projects
- Track project profitability
- Invoice clients for billable expenses

### With Budgets
- Compare actual vs budgeted
- Set up alerts for over-budget
- Adjust budgets based on actuals

### With Tax Prep
- Mark all tax-deductible expenses
- Organize by tax category
- Export annual reports for accountant
