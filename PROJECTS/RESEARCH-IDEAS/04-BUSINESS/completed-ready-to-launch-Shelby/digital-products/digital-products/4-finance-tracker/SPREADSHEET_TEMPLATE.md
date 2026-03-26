# 💰 Finance Tracker Spreadsheet - Google Sheets Template

## Complete Personal & Business Finance Tracking System

---

## 📋 SPREADSHEET STRUCTURE

### Sheet Tabs Overview

1. **Dashboard** - Financial overview and key metrics
2. **Transactions** - All income and expenses
3. **Budget** - Monthly budget tracking
4. **Accounts** - Account balances and net worth
5. **Categories** - Category management
6. **Reports** - Monthly and annual reports
7. **Goals** - Financial goals tracking
8. **Debts** - Debt payoff tracker
9. **Investments** - Investment portfolio tracker
10. **Business** - Business income/expenses (if applicable)
11. **Tax** - Tax-deductible expenses
12. **Settings** - Configuration and customization

---

## 📊 DASHBOARD (Sheet 1)

### Key Metrics (Top Row)

| Metric | Formula | Format |
|--------|---------|--------|
| Total Income (MTD) | `=SUMIFS(Transactions!C:C, Transactions!A:A, ">="&EOMONTH(TODAY(),-1)+1, Transactions!A:A, "<="&TODAY())` | Currency |
| Total Expenses (MTD) | `=SUMIFS(Transactions!D:D, Transactions!A:A, ">="&EOMONTH(TODAY(),-1)+1, Transactions!A:A, "<="&TODAY())` | Currency |
| Net Cash Flow (MTD) | `=Income_MTD - Expenses_MTD` | Currency |
| Savings Rate | `=(Income_MTD - Expenses_MTD) / Income_MTD` | Percentage |
| Current Balance | `=SUM(Accounts!C:C)` | Currency |
| Net Worth | `=SUM(Accounts!D:D) - SUM(Accounts!E:E)` | Currency |

### Monthly Cash Flow Chart
- **Type:** Column chart
- **Data:** Last 12 months income vs expenses
- **X-axis:** Month
- **Y-axis:** Amount
- **Series:** Income (green), Expenses (red)

### Category Breakdown
- **Type:** Pie chart
- **Data:** Current month expenses by category
- **Show:** Category name, amount, percentage

### Budget vs Actual
- **Type:** Bar chart (horizontal)
- **Data:** Budget vs Actual for top 10 categories
- **Show:** Variance (over/under budget)

### Net Worth Trend
- **Type:** Line chart
- **Data:** Net worth over time (last 12 months)
- **X-axis:** Month
- **Y-axis:** Net worth amount

### Quick Stats Box
```
┌─────────────────────────────────────┐
│  THIS MONTH                         │
├─────────────────────────────────────┤
│  Income:          $XX,XXX          │
│  Expenses:        $XX,XXX          │
│  Saved:           $X,XXX   (XX%)   │
│  Biggest Category: XXXX ($X,XXX)   │
│  Transactions:    XX               │
└─────────────────────────────────────┘
```

---

## 💳 TRANSACTIONS (Sheet 2)

### Columns

| Column | Header | Type | Validation/Notes |
|--------|--------|------|------------------|
| A | Date | Date | Date picker |
| B | Description | Text | Transaction description |
| C | Income | Number | Currency format |
| D | Expense | Number | Currency format |
| E | Category | Text | Dropdown from Categories sheet |
| F | Subcategory | Text | Dropdown (dependent on Category) |
| G | Account | Text | Dropdown from Accounts sheet |
| H | Payment Method | Text | Dropdown: Credit Card, Debit, Cash, Transfer |
| I | Tags | Text | Comma-separated tags |
| J | Notes | Text | Additional details |
| K | Receipt | Text | Link to receipt image |
| L | Reconciled | Checkbox | TRUE/FALSE |
| M | Month | Formula | `=TEXT(A2, "YYYY-MM")` |
| N | Year | Formula | `=YEAR(A2)` |
| O | Quarter | Formula | `="Q"&ROUNDUP(MONTH(A2)/3,0)` |

### Sample Data (First 5 Rows)

| Date | Description | Income | Expense | Category | Subcategory | Account | Payment Method |
|------|-------------|--------|---------|----------|-------------|---------|----------------|
| 2024-01-01 | Starting Balance | | | Transfer | | Checking | Transfer |
| 2024-01-02 | Salary - ABC Corp | 5000.00 | | Income | Salary | Checking | Direct Deposit |
| 2024-01-03 | Grocery Store | | 150.00 | Food | Groceries | Credit Card | Credit Card |
| 2024-01-04 | Electric Bill | | 120.00 | Utilities | Electricity | Checking | Auto-pay |
| 2024-01-05 | Freelance Project | 800.00 | | Income | Freelance | Checking | Transfer |

### Features
- **Data Validation:** Dropdowns for Category, Account, Payment Method
- **Conditional Formatting:** 
  - Expenses over budget: Red background
  - Large transactions (> $500): Bold
  - Unreconciled transactions older than 30 days: Yellow
- **Filter Views:** 
  - This Month
  - This Year
  - By Category
  - By Account
  - Unreconciled Only

### Formulas

**Running Balance:**
```
=SUMIF($C$2:C2, "<>", $C$2:C2) - SUMIF($D$2:D2, "<>", $D$2:D2)
```

**Monthly Total (in summary row):**
```
=SUMIFS(D:D, M:M, "2024-01")
```

---

## 📅 BUDGET (Sheet 3)

### Monthly Budget Table

| Category | Jan Budget | Jan Actual | Variance | % Used | Feb Budget | Feb Actual | Variance | % Used |
|----------|------------|-----------|----------|--------|------------|-----------|----------|--------|
| Housing | 1500 | =SUMIFS(...) | =B2-C2 | =C2/B2 | 1500 | | | |
| Food | 600 | | | | 600 | | | |
| Transportation | 400 | | | | 400 | | | |
| Utilities | 200 | | | | 200 | | | |
| Insurance | 300 | | | | 300 | | | |
| Healthcare | 150 | | | | 150 | | | |
| Entertainment | 200 | | | | 200 | | | |
| Shopping | 300 | | | | 300 | | | |
| Personal Care | 100 | | | | 100 | | | |
| Gifts | 100 | | | | 100 | | | |
| Savings | 1000 | | | | 1000 | | | |
| **TOTAL** | **=SUM()** | **=SUM()** | | | **=SUM()** | | | |

### Budget Formulas

**Actual (pulls from Transactions):**
```
=SUMIFS(Transactions!$D:$D, Transactions!$E:$E, $A2, Transactions!$M:$M, "2024-01")
```

**Variance:**
```
=B2-C2
```
(Positive = under budget, Negative = over budget)

**% Used:**
```
=IF(B2=0, 0, C2/B2)
```

### Conditional Formatting
- **% Used < 80%:** Green
- **% Used 80-100%:** Yellow
- **% Used > 100%:** Red
- **Variance < 0:** Red text

### Annual Budget Summary

| Category | Annual Budget | YTD Actual | Remaining | % Used |
|----------|--------------|------------|-----------|--------|
| Housing | 18000 | | | |
| Food | 7200 | | | |
| ... | | | | |
| **TOTAL** | **=SUM()** | **=SUM()** | | |

---

## 🏦 ACCOUNTS (Sheet 4)

### Account Register

| Account Name | Type | Institution | Account # | Balance | Credit Limit | Available | Last Updated | Reconcile Date |
|--------------|------|-------------|-----------|---------|--------------|-----------|--------------|----------------|
| Checking | Asset | Chase | ****1234 | 5000.00 | | | =TODAY() | |
| Savings | Asset | Chase | ****5678 | 15000.00 | | | =TODAY() | |
| Credit Card | Liability | Amex | ****9012 | -2500.00 | 10000 | 7500 | =TODAY() | |
| 401(k) | Investment | Fidelity | ****3456 | 85000.00 | | | =TODAY() | |
| Car Loan | Liability | Toyota FCU | ****7890 | -15000.00 | | | =TODAY() | |
| Mortgage | Liability | Wells Fargo | ****2345 | -250000.00 | | | =TODAY() | |

### Formulas

**Available Credit (for credit cards):**
```
=IF(D2<0, E2+D2, E2)
```

**Net Worth Calculation:**
```
=SUMIF(B:B, "Asset", D:D) + SUMIF(B:B, "Liability", D:D)
```
(Liabilities are negative, so this subtracts them)

### Account Type Dropdown
- Asset (Checking, Savings, Investment, Cash, Property)
- Liability (Credit Card, Loan, Mortgage)
- Income (not used for balance)
- Expense (not used for balance)

---

## 🏷️ CATEGORIES (Sheet 5)

### Category List

| Category | Type | Subcategories | Budget (Monthly) | Color |
|----------|------|---------------|-----------------|-------|
| Income | Income | Salary, Freelance, Investments, Gifts, Other | | Green |
| Food | Expense | Groceries, Restaurants, Coffee, Delivery | 600 | Orange |
| Housing | Expense | Rent/Mortgage, Utilities, Maintenance, HOA | 1500 | Blue |
| Transportation | Expense | Gas, Public Transit, Uber, Maintenance, Parking | 400 | Purple |
| Utilities | Expense | Electricity, Water, Gas, Internet, Phone | 200 | Yellow |
| Insurance | Expense | Health, Auto, Home, Life, Disability | 300 | Gray |
| Healthcare | Expense | Doctor, Pharmacy, Dental, Vision, Therapy | 150 | Red |
| Entertainment | Expense | Movies, Games, Streaming, Hobbies | 200 | Pink |
| Shopping | Expense | Clothing, Electronics, Home, Amazon | 300 | Brown |
| Personal Care | Expense | Haircut, Gym, Skincare, Vitamins | 100 | Teal |
| Gifts | Expense | Birthday, Holiday, Charity, Donations | 100 | Gold |
| Savings | Expense | Emergency Fund, Retirement, Investments | 1000 | Green |
| Debt Payment | Expense | Credit Card, Student Loan, Car Loan | 500 | Red |
| Business | Expense | Software, Supplies, Marketing, Travel | 0 | Navy |

### Usage
- This sheet feeds dropdowns in Transactions sheet
- Use Data Validation → List from a range
- Range: `Categories!A2:A100`

---

## 📈 REPORTS (Sheet 6)

### Monthly Income Statement

**Month Selector:** Dropdown (data validation from unique months in Transactions)

| Category | Amount | % of Income |
|----------|--------|-------------|
| **INCOME** | | |
| Salary | | |
| Freelance | | |
| Investments | | |
| Other Income | | |
| **Total Income** | **=SUM()** | **100%** |
| | | |
| **EXPENSES** | | |
| Housing | | |
| Food | | |
| Transportation | | |
| Utilities | | |
| Insurance | | |
| Healthcare | | |
| Entertainment | | |
| Shopping | | |
| Personal Care | | |
| Gifts | | |
| Savings | | |
| Debt Payment | | |
| **Total Expenses** | **=SUM()** | |
| | | |
| **NET INCOME** | **=Income - Expenses** | |
| **SAVINGS RATE** | **=Net Income / Income** | |

### Expense Trends (Last 6 Months)

| Category | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 | Month 6 | Average |
|----------|---------|---------|---------|---------|---------|---------|---------|
| Housing | | | | | | | |
| Food | | | | | | | |
| Transportation | | | | | | | |
| ... | | | | | | | |

### Annual Summary

| Month | Income | Expenses | Net | Savings Rate |
|-------|--------|----------|-----|--------------|
| January | | | | |
| February | | | | |
| ... | | | | |
| **TOTAL** | | | | |

---

## 🎯 GOALS (Sheet 7)

### Financial Goals Tracker

| Goal | Type | Target Amount | Current Amount | % Complete | Target Date | Monthly Needed | Status |
|------|------|---------------|----------------|------------|-------------|----------------|--------|
| Emergency Fund | Savings | 15000 | 8000 | 53% | 2024-12-31 | 1000 | On Track |
| Vacation | Savings | 5000 | 1500 | 30% | 2024-06-30 | 583 | Behind |
| New Car | Savings | 30000 | 10000 | 33% | 2025-12-31 | 833 | On Track |
| Down Payment | Savings | 80000 | 25000 | 31% | 2026-06-30 | 2222 | Behind |
| Pay off CC | Debt | 5000 | 2500 | 50% | 2024-08-31 | 417 | On Track |

### Formulas

**% Complete:**
```
=Current Amount / Target Amount
```

**Monthly Needed:**
```
=(Target Amount - Current Amount) / DATEDIF(TODAY(), Target_Date, "M")
```

**Status:**
```
=IF(%_Complete >= 1, "Complete", IF(MONTH(TODAY()) >= MONTH(Target_Date), "Overdue", IF(%_Complete >= (MONTH(TODAY())/12), "On Track", "Behind")))
```

### Conditional Formatting
- **Status = Complete:** Green
- **Status = On Track:** Yellow
- **Status = Behind/Overdue:** Red

---

## 💳 DEBTS (Sheet 8)

### Debt Payoff Tracker

| Debt | Type | Balance | Interest Rate | Minimum Payment | Extra Payment | Payoff Date | Total Interest |
|------|------|---------|---------------|-----------------|---------------|-------------|----------------|
| Credit Card | Credit Card | 5000 | 19.99% | 150 | 200 | | |
| Student Loan | Student Loan | 25000 | 5.5% | 300 | 100 | | |
| Car Loan | Auto Loan | 15000 | 4.5% | 350 | 0 | | |
| Mortgage | Mortgage | 250000 | 3.75% | 1500 | 200 | | |

### Payoff Calculator

**Months to Payoff:**
```
=NPER(Interest_Rate/12, -Monthly_Payment, Balance)
```

**Total Interest:**
```
=(Months_to_Payoff * Monthly_Payment) - Balance
```

### Debt Snowball vs Avalanche

**Snowball Method:**
- List debts by balance (smallest to largest)
- Pay minimums on all
- Extra payment to smallest debt
- Roll over payment as debts are paid off

**Avalanche Method:**
- List debts by interest rate (highest to lowest)
- Pay minimums on all
- Extra payment to highest interest debt
- Mathematically optimal

### Payoff Progress Chart
- **Type:** Bar chart
- **Data:** Original balance vs Current balance for each debt
- **Visual:** Shows progress toward zero

---

## 📊 INVESTMENTS (Sheet 9)

### Portfolio Tracker

| Account | Institution | Asset Type | Ticker | Shares | Avg Cost | Current Price | Market Value | Gain/Loss | % Return |
|---------|-------------|------------|--------|--------|----------|---------------|--------------|-----------|----------|
| 401(k) | Fidelity | Stock | VTI | 100 | 150.00 | 200.00 | 20000 | 5000 | 33.3% |
| 401(k) | Fidelity | Bond | BND | 200 | 80.00 | 75.00 | 15000 | -1000 | -6.3% |
| IRA | Vanguard | Stock | VOO | 50 | 350.00 | 400.00 | 20000 | 2500 | 14.3% |
| Brokerage | Schwab | Stock | AAPL | 20 | 150.00 | 180.00 | 3600 | 600 | 20.0% |

### Formulas

**Market Value:**
```
=Shares * Current_Price
```

**Gain/Loss:**
```
=Market_Value - (Shares * Avg_Cost)
```

**% Return:**
```
=(Current_Price - Avg_Cost) / Avg_Cost
```

### Asset Allocation

| Asset Class | Target % | Current Value | Current % | Difference |
|-------------|----------|---------------|-----------|------------|
| US Stocks | 50% | | | |
| International | 20% | | | |
| Bonds | 25% | | | |
| Cash | 5% | | | |

### Net Worth Over Time
- Track total investment value monthly
- Line chart showing growth over time

---

## 💼 BUSINESS (Sheet 10) - Optional

### Business Income & Expenses

| Date | Client/Project | Description | Income | Expense | Category | Payment Status | Invoice # |
|------|---------------|-------------|--------|---------|----------|----------------|-----------|
| | | | | | | | |

### Profit & Loss Statement

| Category | This Month | MTD | QTD | YTD |
|----------|------------|-----|-----|-----|
| **Revenue** | | | | |
| Product Sales | | | | |
| Services | | | |
| Other Revenue | | | |
| **Total Revenue** | | | | |
| | | | | |
| **Expenses** | | | | |
| Software | | | | |
| Marketing | | | |
| Contractor | | | |
| Office | | | |
| **Total Expenses** | | | | |
| | | | | |
| **NET PROFIT** | | | | |
| **Profit Margin** | | | | |

### Tax Estimates

| Quarter | Revenue | Expenses | Net Profit | Est. Tax (25%) | Paid | Balance |
|---------|---------|----------|------------|----------------|------|---------|
| Q1 | | | | | | |
| Q2 | | | | | | |
| Q3 | | | | | |
| Q4 | | | | | |

---

## 📋 TAX (Sheet 11)

### Tax-Deductible Expenses

| Date | Vendor | Description | Amount | Category | Deductible % | Deductible Amount | Receipt |
|------|--------|-------------|--------|----------|--------------|-------------------|---------|
| | | | | | 100% | | |

### Tax Categories

| Category | YTD Amount | Limit | Remaining | Notes |
|----------|------------|-------|-----------|-------|
| Home Office | | | | Sq ft calculation |
| Vehicle | | | | Mileage or actual |
| Travel | | | | Business trips only |
| Meals | | | | 50% deductible |
| Equipment | | | | Section 179 |
| Software | | | | Business use |
| Marketing | | | | |
| Professional Dev | | | | Courses, books |

### Quarterly Tax Worksheet

| | Q1 | Q2 | Q3 | Q4 | Total |
|---|----|----|----|----|-------|
| Gross Income | | | | | |
| Deductible Expenses | | | | | |
| Net Profit | | | | | |
| Self-Employment Tax | | | | | |
| Income Tax | | | | | |
| **Total Tax** | | | | | |
| Estimated Payments | | | | | |
| **Balance Due** | | | | | |

---

## ⚙️ SETTINGS (Sheet 12)

### Configuration

| Setting | Value | Notes |
|---------|-------|-------|
| Currency Symbol | $ | Change for your currency |
| First Day of Week | Sunday | For weekly reports |
| Fiscal Year Start | January | For business tracking |
| Tax Rate | 25% | Estimated tax rate |
| Default Account | Checking | For new transactions |

### User Preferences

| Preference | Setting |
|------------|---------|
| Show Cents | Yes |
| Negative in Parentheses | No |
| Conditional Formatting | Enabled |
| Auto-Categorize | Enabled |

### Data Validation Lists

**Payment Methods:**
```
Credit Card, Debit Card, Cash, Check, Bank Transfer, Venmo, PayPal, Other
```

**Transaction Types:**
```
Income, Expense, Transfer, Adjustment
```

**Reconciliation Status:**
```
Not Reconciled, Reconciled, Cleared
```

### Instructions

```
WELCOME TO YOUR FINANCE TRACKER!

Quick Start:
1. Set up your accounts in the Accounts sheet
2. Add your budget categories in the Budget sheet
3. Start logging transactions in the Transactions sheet
4. Check your Dashboard for an overview

Tips:
- Be consistent: Log transactions daily or weekly
- Reconcile monthly: Match your records to bank statements
- Review weekly: Check your budget vs actual
- Set goals: Use the Goals sheet to track progress

Need Help?
Check the instructions in each sheet tab.
```

---

## 🔧 ADVANCED FEATURES

### Google Apps Script Automations

**1. Auto-Categorize Transactions**
```javascript
function autoCategorize() {
  // Match descriptions to known categories
  // Based on historical data
}
```

**2. Monthly Budget Reset**
```javascript
function resetBudget() {
  // Copy budget template to new month
  // Clear actuals
}
```

**3. Email Alerts**
```javascript
function budgetAlert() {
  // Check if over budget
  // Send email if threshold exceeded
}
```

### Import Functions

**Google Finance:**
```
=GOOGLEFINANCE("AAPL", "price")
```

**Import from CSV:**
```
File → Import → Upload
```

**QUERY Function:**
```
=QUERY(Transactions!A:O, "SELECT A, B, D, E WHERE M = '2024-01' ORDER BY A DESC")
```

### Protected Ranges
- Protect formula cells from accidental edits
- Allow editing only in input cells
- Settings: Data → Protected sheets and ranges

---

## 📱 MOBILE ACCESS

### Google Sheets App
- Full functionality on mobile
- Add transactions on the go
- Check dashboard anywhere

### Offline Access
- Enable offline mode in Google Sheets settings
- Works without internet
- Syncs when back online

### Widgets (iOS/Android)
- Add Sheets widget to home screen
- Quick access to dashboard
- View key metrics at a glance

---

## 🎨 CUSTOMIZATION TIPS

### Branding
- Add your logo to Dashboard
- Use your preferred color scheme
- Customize category names

### Additional Features
- Add subscription tracker
- Create bill payment calendar
- Track mileage for business
- Monitor credit score over time

### Integrations
- Connect to bank feeds (via third-party tools)
- Export to TurboTax
- Sync with budgeting apps

---

**This spreadsheet is a complete financial management system!**

Ready to be delivered as a Google Sheets template link.
