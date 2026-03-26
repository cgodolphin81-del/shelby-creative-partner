# Excel Budget Template - Complete Spreadsheet Structure

**Build this exact structure in Excel or Google Sheets.**

---

## 📊 TAB 1: DASHBOARD

### Layout (Row by Row):

**Row 1-2: Header**
```
A1: "💰 Personal Budget Dashboard"
A2: "Month: [Dropdown: Jan, Feb, Mar...]" | C2: "Year: [Dropdown: 2026, 2027...]"
```

**Row 4-8: Summary Cards**
```
A4: "Total Income"          | B4: =SUMIFS(Income!$C:$C, Income!$A:$A, Dashboard!$E$2)
                            | Format: Currency, Green background

A6: "Total Expenses"        | B6: =SUMIFS(Expenses!$D:$D, Expenses!$A:$A, Dashboard!$E$2)
                            | Format: Currency, Red background

A8: "Net Savings"           | B8: =B4-B6
                            | Format: Currency
                            | Conditional: Green if >0, Red if <0

C4: "Budget Remaining"      | D4: =B10-B6
                            | Format: Currency

C6: "Budget Utilization"    | D6: =B6/B10*100
                            | Format: Percentage
                            | Conditional Formatting: Red if >100%

C8: "Savings Rate"          | D8: =B8/B4*100
                            | Format: Percentage
```

**Row 10: Total Budget**
```
A10: "Total Monthly Budget" | B10: =SUM(Budget!$B:$B)
```

**Row 13-25: Expense Breakdown by Category (Bar Chart Data)**
```
A13: "Category"             | B13: "Budgeted"     | C13: "Actual"       | D13: "Difference"
A14: "Housing"              | B14: =SUMIFS(Budget!$B:$B, Budget!$A:$A, "Housing")
                            | C14: =SUMIFS(Expenses!$D:$D, Expenses!$B:$B, "Housing", Expenses!$A:$A, Dashboard!$E$2)
                            | D14: =B14-C14

A15: "Transportation"       | [Same formula pattern]
A16: "Food & Dining"        | [Same formula pattern]
A17: "Utilities"            | [Same formula pattern]
A18: "Insurance"            | [Same formula pattern]
A19: "Healthcare"           | [Same formula pattern]
A20: "Entertainment"        | [Same formula pattern]
A21: "Personal Care"        | [Same formula pattern]
A22: "Shopping"             | [Same formula pattern]
A23: "Debt Payments"        | [Same formula pattern]
A24: "Savings"              | [Same formula pattern]
A25: "Other"                | [Same formula pattern]
```

**Row 28-32: Quick Stats**
```
A28: "Average Daily Spend"  | B28: =B6/DAY(TODAY())
A30: "Top Spending Category" | B30: =INDEX(A14:A25, MATCH(MAX(C14:C25), C14:C25, 0))
A32: "Days Remaining"        | B32: =DAY(EOMONTH(TODAY(),0))-DAY(TODAY())
```

**Charts to Insert:**
1. **Pie Chart** (C13:D25) - Expense breakdown by category
2. **Bar Chart** (A13:D25) - Budget vs Actual comparison
3. **Gauge Chart** (D6) - Budget utilization percentage
4. **Line Chart** - Monthly trend (from Annual Summary tab)

---

## 💰 TAB 2: INCOME

### Column Headers (Row 1):
```
A1: "Date"
B1: "Source"
C1: "Amount"
D1: "Type"
E1: "Frequency"
F1: "Notes"
```

### Data Validation:

**Column D (Type):**
```
Data → Data Validation → List:
- Salary/Wages
- Freelance
- Business Income
- Investment Income
- Rental Income
- Side Hustle
- Gift
- Refund
- Other
```

**Column E (Frequency):**
```
Data → Data Validation → List:
- One-time
- Weekly
- Bi-weekly
- Monthly
- Quarterly
- Annually
```

### Sample Data (Rows 2-10):
```
A2: 01/15/2026    | B2: "ABC Company"      | C2: 5000  | D2: "Salary/Wages"    | E2: "Monthly"     | F2: "Regular paycheck"
A3: 01/20/2026    | B3: "Freelance Project"| C3: 1500  | D3: "Freelance"       | E3: "One-time"    | F2: "Website design"
A4: 01/25/2026    | B4: "Dividend Payment" | C4: 250   | D4: "Investment Income"| E4: "Quarterly"   | F4: "Q4 Dividends"
```

### Summary Section (Top of sheet):
```
H1: "Monthly Income Summary"
H2: "This Month:"           | I2: =SUMIFS(C:C, A:A, ">="&EOMONTH(TODAY(),-1)+1, A:A, "<="&EOMONTH(TODAY(),0))
H3: "Last Month:"           | I3: =SUMIFS(C:C, A:A, ">="&EOMONTH(TODAY(),-2)+1, A:A, "<="&EOMONTH(TODAY(),-1))
H4: "Year to Date:"         | I4: =SUMIFS(C:C, A:A, ">="&DATE(YEAR(TODAY()),1,1))
H5: "Average Monthly:"      | I5: =AVERAGEIFS(C:C, A:A, ">="&EOMONTH(TODAY(),-12)+1)
```

---

## 💸 TAB 3: EXPENSES

### Column Headers (Row 1):
```
A1: "Date"
B1: "Category"
C1: "Subcategory"
D1: "Amount"
E1: "Payment Method"
F1: "Vendor/Merchant"
G1: "Tags"
H1: "Recurring?"
I1: "Notes"
```

### Data Validation:

**Column B (Category):**
```
List:
- Housing
- Transportation
- Food & Dining
- Utilities
- Insurance
- Healthcare
- Entertainment
- Personal Care
- Shopping
- Debt Payments
- Savings
- Other
```

**Column C (Subcategory) - Dynamic based on Category:**
```
Housing → Rent/Mortgage, Property Tax, HOA, Maintenance, Repairs
Transportation → Gas, Public Transit, Uber/Lyft, Parking, Car Payment, Car Insurance, Maintenance
Food & Dining → Groceries, Restaurants, Coffee Shops, Delivery
Utilities → Electricity, Water, Gas, Internet, Phone, Trash, Cable
Insurance → Health, Life, Disability, Home, Auto
Healthcare → Doctor, Dental, Vision, Pharmacy, Therapy, Gym
Entertainment → Streaming, Movies, Games, Hobbies, Events
Personal Care → Haircut, Skincare, Clothing, Cosmetics
Shopping → Electronics, Home Goods, Gifts, Online Shopping
Debt Payments → Credit Card, Student Loan, Personal Loan
Savings → Emergency Fund, Retirement, Investment, Vacation Fund
Other → Miscellaneous, Fees, Subscriptions
```

**Column E (Payment Method):**
```
List:
- Checking Account
- Savings Account
- Credit Card 1
- Credit Card 2
- Cash
- Venmo/PayPal
- Other
```

**Column H (Recurring?):**
```
List:
- Yes - Monthly
- Yes - Weekly
- Yes - Bi-weekly
- Yes - Quarterly
- Yes - Annually
- No
```

### Sample Data:
```
A2: 01/01/2026  | B2: "Housing"      | C2: "Rent/Mortgage"   | D2: 2000  | E2: "Checking Account" | F2: "Property Management Co" | G2: "Fixed" | H2: "Yes - Monthly"
A3: 01/03/2026  | B3: "Food & Dining"| C3: "Groceries"       | D3: 150   | E3: "Credit Card 1"    | F3: "Whole Foods"             | G2: "Weekly" | H3: "No"
A4: 01/05/2026  | B4: "Utilities"    | C4: "Electricity"     | D4: 120   | E4: "Checking Account" | F4: "Electric Company"        | G4: "Variable" | H4: "Yes - Monthly"
```

### Formulas for Analysis:

**At top of sheet (Summary):**
```
K1: "Expense Summary"
K2: "This Month:"          | L2: =SUMIFS(D:D, A:A, ">="&EOMONTH(TODAY(),-1)+1, A:A, "<="&EOMONTH(TODAY(),0))
K3: "Last Month:"          | L3: =SUMIFS(D:D, A:A, ">="&EOMONTH(TODAY(),-2)+1, A:A, "<="&EOMONTH(TODAY(),-1))
K4: "This Week:"           | L4: =SUMIFS(D:D, A:A, ">="&TODAY()-WEEKDAY(TODAY(),2)+1)
K5: "Today:"               | L5: =SUMIFS(D:D, A:A, TODAY())
K7: "By Category:"         | 
K8: "Housing"              | L8: =SUMIFS(D:D, B:B, "Housing", A:A, ">="&EOMONTH(TODAY(),-1)+1)
K9: "Food & Dining"        | L9: =SUMIFS(D:D, B:B, "Food & Dining", A:A, ">="&EOMONTH(TODAY(),-1)+1)
[Continue for all categories]
```

---

## 📋 TAB 4: BUDGET

### Column Headers (Row 1):
```
A1: "Category"
B1: "Monthly Budget"
C1: "Actual (This Month)"
D1: "Difference"
E1: "% Used"
F1: "Status"
```

### Categories and Sample Budgets:
```
A2: "HOUSING"              | B2: (Section header, no budget)
A3: "  Rent/Mortgage"      | B3: 2000
A4: "  Property Tax"       | B4: 400
A5: "  HOA Fees"           | B5: 100
A6: "  Maintenance"        | B6: 200
A7: "  Home Insurance"     | B7: 150

A9: "TRANSPORTATION"       | B9: (Section header)
A10: "  Car Payment"       | B10: 350
A11: "  Gas"               | B11: 200
A12: "  Car Insurance"     | B12: 120
A13: "  Maintenance"       | B13: 100
A14: "  Public Transit"    | B14: 50

A16: "FOOD & DINING"       | B16: (Section header)
A17: "  Groceries"         | B17: 600
A18: "  Restaurants"       | B18: 200
A19: "  Coffee/Delivery"   | B19: 100

A21: "UTILITIES"           | B21: (Section header)
A22: "  Electricity"       | B22: 120
A23: "  Water"             | B23: 50
A24: "  Gas"               | B24: 60
A25: "  Internet"          | B25: 80
A26: "  Phone"             | B26: 100
A27: "  Streaming"         | B27: 50

A29: "INSURANCE"           | B29: (Section header)
A30: "  Health Insurance"  | B30: 300
A31: "  Life Insurance"    | B31: 50
A32: "  Disability"        | B32: 40

A34: "HEALTHCARE"          | B34: (Section header)
A35: "  Doctor Visits"     | B35: 100
A36: "  Pharmacy"          | B36: 50
A37: "  Gym/Fitness"       | B37: 60

A39: "ENTERTAINMENT"       | B39: (Section header)
A40: "  Streaming Services"| B40: 50
A41: "  Movies/Events"     | B41: 100
A42: "  Hobbies"           | B42: 150

A44: "PERSONAL CARE"       | B44: (Section header)
A45: "  Haircut/Beauty"    | B45: 80
A46: "  Clothing"          | B46: 150
A47: "  Personal Items"    | B47: 50

A49: "DEBT PAYMENTS"       | B49: (Section header)
A50: "  Credit Card"       | B50: 500
A51: "  Student Loan"      | B51: 400
A52: "  Other Loans"       | B52: 200

A54: "SAVINGS"             | B54: (Section header)
A55: "  Emergency Fund"    | B55: 500
A56: "  Retirement"        | B56: 600
A57: "  Vacation Fund"     | B57: 200
A58: "  Other Goals"       | B58: 100

A60: "OTHER"               | B60: (Section header)
A61: "  Gifts"             | B61: 100
A62: "  Subscriptions"     | B62: 50
A63: "  Miscellaneous"     | B63: 200
```

### Formulas (Column C - Actual):
```
C3: =SUMIFS(Expenses!$D:$D, Expenses!$B:$B, "Housing", Expenses!$C:$C, "Rent/Mortgage", Expenses!$A:$A, ">="&EOMONTH(TODAY(),-1)+1, Expenses!$A:$A, "<="&EOMONTH(TODAY(),0))
[Copy pattern for each subcategory]
```

### Formulas (Column D - Difference):
```
D3: =B3-C3
[Copy down for all rows]
```

### Formulas (Column E - % Used):
```
E3: =IF(B3>0, C3/B3, 0)
Format as percentage
[Copy down for all rows]
```

### Formulas (Column F - Status):
```
F3: =IF(E3>1, "⚠️ Over Budget", IF(E3>0.9, "⚡ Near Limit", "✅ On Track"))
[Copy down for all rows]

Conditional Formatting:
- "⚠️ Over Budget" = Red background
- "⚡ Near Limit" = Yellow background
- "✅ On Track" = Green background
```

### Totals Row:
```
A65: "TOTAL"               | B65: =SUM(B3:B63)
                           | C65: =SUM(C3:C63)
                           | D65: =B65-C65
                           | E65: =C65/B65
```

---

## 📈 TAB 5: ANNUAL SUMMARY

### Column Headers (Row 1):
```
A1: "Month"
B1: "Total Income"
C1: "Total Expenses"
D1: "Net Savings"
E1: "Savings Rate"
F1: "Budget Variance"
```

### Month Rows (2-13):
```
A2: "January"              | B2: =SUMIFS(Income!$C:$C, Income!$A:$A, ">="&DATE(2026,1,1), Income!$A:$A, "<="&DATE(2026,1,31))
                           | C2: =SUMIFS(Expenses!$D:$D, Expenses!$A:$A, ">="&DATE(2026,1,1), Expenses!$A:$A, "<="&DATE(2026,1,31))
                           | D2: =B2-C2
                           | E2: =IF(B2>0, D2/B2, 0)
                           | F2: =Budget!$B$65-C2

A3: "February"             | [Same pattern with DATE(2026,2,1) and DATE(2026,2,28)]
[Continue for all 12 months]
```

### Annual Totals (Row 15):
```
A15: "ANNUAL TOTAL"        | B15: =SUM(B2:B13)
                           | C15: =SUM(C2:C13)
                           | D15: =SUM(D2:D13)
                           | E15: =AVERAGE(E2:E13)
                           | F15: =SUM(F2:F13)
```

### Monthly Averages (Row 16):
```
A16: "MONTHLY AVERAGE"     | B16: =B15/12
                           | C16: =C15/12
                           | D16: =D15/12
```

### Charts to Create:
1. **Line Chart** - Income vs Expenses trend (A1:D13)
2. **Column Chart** - Monthly savings (A1:A13, D1:D13)
3. **Combo Chart** - Income (columns) + Savings Rate (line)

---

## 🎯 TAB 6: SAVINGS GOALS

### Column Headers (Row 1):
```
A1: "Goal Name"
B1: "Target Amount"
C1: "Current Saved"
D1: "Remaining"
E1: "Target Date"
F1: "Monthly Needed"
G1: "% Complete"
H1: "Status"
I1: "Priority"
```

### Sample Goals:
```
A2: "Emergency Fund"       | B2: 15000  | C2: 8500  | D2: =B2-C2  | E2: 12/31/2026  | F2: =D2/12  | G2: =C2/B2  | H2: =IF(G2>=1, "✅ Complete", IF(G2>=0.5, "🔄 On Track", "📍 In Progress"))  | I2: "High"
A3: "Vacation - Europe"    | B3: 5000   | C3: 1200  | D3: =B3-C3  | E3: 06/30/2026  | F3: =D3/4   | G3: =C3/B3  | [Same formula]  | I3: "Medium"
A4: "New Laptop"           | B4: 2500   | C4: 500   | D4: =B4-C4  | E4: 04/30/2026  | F4: =D4/2   | G4: =C4/B4  | [Same formula]  | I4: "Low"
A5: "House Down Payment"   | B5: 50000  | C5: 12000 | D5: =B5-C5  | E5: 12/31/2027  | F5: =D5/22  | G5: =C5/B5  | [Same formula]  | I5: "High"
A6: "New Car"              | B6: 25000  | C6: 5000  | D6: =B6-C6  | E6: 12/31/2026  | F6: =D6/10  | G6: =C6/B6  | [Same formula]  | I6: "Medium"
```

### Conditional Formatting (Column G - % Complete):
- 0-25%: Red
- 26-50%: Orange
- 51-75%: Yellow
- 76-99%: Light Green
- 100%: Dark Green

### Summary Section:
```
K1: "Savings Summary"
K2: "Total Goals:"          | L2: =COUNTA(A2:A100)
K3: "Completed:"            | L3: =COUNTIF(H2:H100, "✅ Complete")
K4: "Total Target:"         | L4: =SUM(B2:B100)
K5: "Total Saved:"          | L5: =SUM(C2:C100)
K6: "Total Remaining:"      | L6: =SUM(D2:D100)
K7: "Overall Progress:"     | L7: =L5/L4
K8: "Monthly Commitment:"   | L8: =SUM(F2:F100)
```

---

## 💳 TAB 7: DEBT PAYOFF

### Column Headers (Row 1):
```
A1: "Debt Name"
B1: "Creditor"
C1: "Balance"
D1: "Interest Rate"
E1: "Minimum Payment"
F1: "Extra Payment"
G1: "Total Payment"
H1: "Payoff Method"
I1: "Months to Payoff"
J1: "Target Payoff Date"
K1: "Status"
```

### Sample Debts:
```
A2: "Credit Card 1"        | B2: "Chase"      | C2: 5000  | D2: 18.99%  | E2: 150  | F2: 200  | G2: =E2+F2  | H2: "Avalanche"  | I2: =NPER(D2/12, -G2, C2)  | J2: =EDATE(TODAY(), I2)  | K2: =IF(C2<=0, "✅ Paid", "🔄 Active")
A3: "Student Loan"         | B3: "FedLoan"    | C3: 25000 | D3: 4.5%    | E3: 300  | F3: 100  | G3: =E3+F3  | H3: "Avalanche"  | I3: =NPER(D3/12, -G3, C3)  | J3: =EDATE(TODAY(), I3)  | K3: [Same formula]
A4: "Car Loan"             | B4: "Toyota Financial" | C4: 12000 | D4: 3.9% | E4: 350 | F4: 0 | G4: =E4+F4 | H4: "Snowball" | I4: =NPER(D4/12, -G4, C4) | J4: =EDATE(TODAY(), I4) | K4: [Same formula]
```

### Summary Section:
```
M1: "Debt Summary"
M2: "Total Debt:"           | N2: =SUM(C2:C100)
M3: "Total Minimum:"        | N3: =SUM(E2:E100)
M4: "Total Extra:"          | N4: =SUM(F2:F100)
M5: "Total Monthly:"        | N5: =SUM(G2:G100)
M6: "Weighted Avg Rate:"    | N6: =SUMPRODUCT(C2:C100, D2:D100)/SUM(C2:C100)
M7: "Debt Free Date:"       | N7: =MAX(J2:J100)
M8: "Total Interest Paid:"  | N8: =SUMPRODUCT(G2:G100, I2:I100) - N2
```

### Payoff Method Notes:
```
**Snowball Method:** Pay minimum on all, extra to smallest balance first
**Avalanche Method:** Pay minimum on all, extra to highest interest rate first
```

---

## 📊 TAB 8: NET WORTH

### Assets Section:
```
A1: "ASSETS"
A3: "Liquid Assets"
A4: "  Checking Account"    | B4: [Current Balance]
A5: "  Savings Account"     | B5: [Current Balance]
A6: "  Money Market"        | B6: [Current Balance]
A7: "  Cash"                | B7: [Current Balance]
A8: "  Total Liquid"        | B8: =SUM(B4:B7)

A10: "Investment Assets"
A11: "  401(k)"             | B11: [Current Balance]
A12: "  IRA"                | B12: [Current Balance]
A13: "  Brokerage"          | B13: [Current Balance]
A14: "  Crypto"             | B14: [Current Balance]
A15: "  Total Investments"  | B15: =SUM(B11:B14)

A17: "Personal Property"
A18: "  Home Value"         | B18: [Estimated Value]
A19: "  Vehicle(s)"         | B19: [KBB Value]
A20: "  Other Valuables"    | B20: [Estimated Value]
A21: "  Total Property"     | B21: =SUM(B18:B20)

A23: "TOTAL ASSETS"         | B23: =B8+B15+B21
```

### Liabilities Section:
```
A25: "LIABILITIES"
A27: "  Mortgage"           | B27: [Remaining Balance]
A28: "  Home Equity Loan"   | B28: [Balance]
A29: "  Car Loan"           | B29: [Balance]
A30: "  Student Loans"      | B30: [Balance]
A31: "  Credit Cards"       | B31: [Total Balance]
A32: "  Personal Loans"     | B32: [Balance]
A33: "  Other Debt"         | B33: [Balance]

A35: "TOTAL LIABILITIES"    | B35: =SUM(B27:B33)
```

### Net Worth Calculation:
```
A37: "NET WORTH"            | B37: =B23-B35
A38: "Previous Month"       | B38: [Link to previous month's B37]
A39: "Change"               | B39: =B37-B38
A40: "% Change"             | B40: =IF(B38<>0, B39/B38, 0)
```

### Net Worth Tracker (for historical tracking):
```
D1: "Date"                  | E1: "Assets"    | F1: "Liabilities"  | G1: "Net Worth"  | H1: "Change"
D2: 01/31/2026             | E2: =B23        | F2: =B35           | G2: =E2-F2       | H2: =G2-G1
D3: 02/28/2026             | [Copy formulas]
[Continue monthly]
```

---

## 📝 TAB 9: NOTES & REFLECTIONS

### Monthly Reflection Template:
```
## {{Month}} {{Year}} Budget Review

### What Went Well
- 
- 
- 

### Challenges Faced
- 
- 
- 

### Overspent Categories
| Category | Budget | Actual | Variance |
|----------|--------|--------|----------|
| | | | |

### Underspent Categories
| Category | Budget | Actual | Variance |
|----------|--------|--------|----------|
| | | | |

### Lessons Learned
- 
- 
- 

### Next Month's Focus
1. 
2. 
3. 

### Budget Adjustments for Next Month
- Increase: 
- Decrease: 
- New Category: 
```

---

## ⚙️ SETUP INSTRUCTIONS

### Step 1: Create All Tabs
Create 9 tabs with exact names:
1. Dashboard
2. Income
3. Expenses
4. Budget
5. Annual Summary
6. Savings Goals
7. Debt Payoff
8. Net Worth
9. Notes

### Step 2: Set Up Data Validation
For all dropdown columns, use Data → Data Validation with the lists provided above.

### Step 3: Apply Conditional Formatting
- **Over Budget:** Red fill when actual > budget
- **On Track:** Green fill when actual ≤ budget
- **Negative Numbers:** Red text
- **Positive Numbers:** Green text

### Step 4: Format Numbers
- **Currency:** All money columns ($#,##0.00)
- **Percentages:** All ratio columns (0.0%)
- **Dates:** Consistent date format (MM/DD/YYYY)

### Step 5: Create Charts
Insert the charts specified in Dashboard and Annual Summary tabs.

### Step 6: Protect Formulas
Lock cells with formulas to prevent accidental changes:
- Review → Protect Sheet
- Allow users to edit only data entry cells

---

## 🎨 FORMATTING SPECIFICATIONS

### Colors:
- **Headers:** Dark blue background (#1E3A8A), white text
- **Section Headers:** Light blue background (#DBEAFE), dark text
- **Positive Numbers:** Green (#16A34A)
- **Negative Numbers:** Red (#DC2626)
- **Alternating Rows:** Light gray (#F9FAFB)

### Fonts:
- **Headers:** Arial Bold, 12pt
- **Body:** Arial Regular, 11pt
- **Numbers:** Consistent decimal places

### Column Widths:
- **A (Date):** 12
- **B (Category/Description):** 25
- **C-F (Data):** 15
- **G-I (Notes):** 30

---

**Template Version:** 1.0  
**Compatible:** Excel 2016+, Google Sheets  
**Last Updated:** March 2026
