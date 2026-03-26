# 💰 Finance Dashboard

**Complete Notion Template for Business Finance & Profit Tracking**

---

## 📦 What's Included

- **Financial Dashboard** - Revenue, expenses, profit at a glance
- **Income Tracker** - All revenue sources logged
- **Expense Tracker** - Categorize and track all spending
- **Profit Calculator** - Auto-calculating margins
- **Budget Planner** - Plan and track budgets
- **Financial Reports** - P&L, cash flow, forecasts

---

## 🚀 Quick Start

1. **Duplicate** this template to your Notion workspace
2. **Enter** your opening balances
3. **Connect** your bank accounts (manual entry or import)
4. **Categorize** transactions
5. **Review** your dashboard weekly

---

## 📁 Page Structure

```
Finance Dashboard
├── 📊 Dashboard
│   ├── Monthly Overview
│   ├── YTD Summary
│   └── Cash Position
├── 💵 Income
│   ├── All Income
│   ├── By Source
│   └── By Customer
├── 💸 Expenses
│   ├── All Expenses
│   ├── By Category
│   └── By Vendor
├── 📈 Profit & Loss
│   ├── Monthly P&L
│   ├── Quarterly P&L
│   └── Annual P&L
├── 💳 Budgets
│   ├── Department Budgets
│   ├── Project Budgets
│   └── Budget vs Actual
├── 🏦 Cash Flow
│   ├── Cash Flow Statement
│   ├── Forecast
│   └── Runway Calculator
└── 📋 Reports
    ├── Financial Reports
    ├── Tax Prep
    └── Investor Updates
```

---

## 🗄️ Database Schemas

### Income Database

| Property | Type | Description |
|----------|------|-------------|
| Transaction | Title | Description |
| Amount | Number | Income amount |
| Date | Date | Transaction date |
| Source | Select | Sales, Subscription, Service, Investment, Other |
| Customer | Relation | Linked customer |
| Project | Relation | Linked project |
| Category | Select | Revenue categories |
| Payment Method | Select | Bank, Stripe, PayPal, Check, Cash |
| Status | Select | Pending, Received, Refunded |
| Notes | Text | Transaction notes |

### Expense Database

| Property | Type | Description |
|----------|------|-------------|
| Transaction | Title | Description |
| Amount | Number | Expense amount |
| Date | Date | Transaction date |
| Vendor | Select | Vendor name |
| Category | Select | Expense categories |
| Department | Select | Department owning expense |
| Project | Relation | Linked project |
| Payment Method | Select | Credit Card, Bank, Cash, Other |
| Status | Select | Pending, Paid, Reimbursed |
| Receipt | Files & media | Receipt image |
| Billable? | Checkbox | Can this be billed to client? |
| Notes | Text | Transaction notes |

### Budget Database

| Property | Type | Description |
|----------|------|-------------|
| Budget Name | Title | Budget name |
| Category | Select | Expense category |
| Amount | Number | Budgeted amount |
| Period | Select | Monthly, Quarterly, Annual |
| Start Date | Date | Budget period start |
| End Date | Date | Budget period end |
| Spent | Rollup | Actual spending |
| Remaining | Formula | Budget - Spent |
| Usage % | Formula | Spent / Budget * 100 |
| Department | Select | Department |
| Owner | Person | Budget owner |

---

## 🔧 Key Formulas

### Profit
```
prop("Total Income") - prop("Total Expenses")
```

### Profit Margin
```
if(prop("Total Income") > 0, 
  (prop("Profit") / prop("Total Income")) * 100, 
  0)
```

### Budget Remaining
```
prop("Amount") - prop("Spent")
```

### Budget Usage %
```
if(prop("Amount") > 0,
  (prop("Spent") / prop("Amount")) * 100,
  0)
```

### Runway (Months)
```
prop("Cash Balance") / prop("Monthly Burn Rate")
```

---

## 📋 Templates Included

See individual template files for complete structures.

---

## 💡 Pro Tips

1. **Review Weekly** - Check dashboard every Monday
2. **Categorize Everything** - Every transaction needs a category
3. **Track Receipts** - Upload receipts immediately
4. **Budget Monthly** - Set budgets before month starts
5. **Forecast Quarterly** - Plan 90 days ahead

---

## 🎨 Customization

- Add your expense categories
- Customize income sources
- Add department tracking
- Integrate with accounting software
- Add custom reports as needed
