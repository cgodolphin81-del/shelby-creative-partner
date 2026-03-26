# Excel Budget Template - Build Instructions

**Follow these exact steps to create the Excel Budget Template.**

---

## 📊 TAB 1: DASHBOARD

### Cell Layout:

| Cell | Content/Formula | Formatting |
|------|-----------------|------------|
| A1 | 💰 Personal Budget Dashboard | Bold, 24pt, Dark Blue |
| A2 | Month: | Regular, 14pt |
| B2 | [Data Validation: Jan, Feb, Mar... Dec] | Dropdown |
| D2 | Year: | Regular, 14pt |
| E2 | [Data Validation: 2026, 2027, 2028] | Dropdown |
| A4 | Total Income | Bold, 14pt |
| B4 | `=SUMIFS(Income!$C:$C,Income!$A:$A,">="&DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),Income!$A:$A,"<="&EOMONTH(DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),0))` | Currency, Green fill |
| A6 | Total Expenses | Bold, 14pt |
| B6 | `=SUMIFS(Expenses!$D:$D,Expenses!$A:$A,">="&DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),Expenses!$A:$A,"<="&EOMONTH(DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),0))` | Currency, Red fill |
| A8 | Net Savings | Bold, 14pt |
| B8 | `=B4-B6` | Currency, Green if >0, Red if <0 |
| D4 | Budget Remaining | Bold, 14pt |
| E4 | `=B10-B6` | Currency |
| D6 | Budget Utilization | Bold, 14pt |
| E6 | `=IF(B10>0,B6/B10,0)` | Percentage, Red if >100% |
| D8 | Savings Rate | Bold, 14pt |
| E8 | `=IF(B4>0,B8/B4,0)` | Percentage |
| A10 | Total Monthly Budget | Bold, 14pt |
| B10 | `=SUM(Budget!$B:$B)` | Currency |

### Expense Breakdown Table (Starting Row 13):

| Cell | Content/Formula |
|------|-----------------|
| A13 | Category |
| B13 | Budgeted |
| C13 | Actual |
| D13 | Difference |
| A14 | Housing |
| B14 | `=SUMIFS(Budget!$B:$B,Budget!$A:$A,"Housing*")` |
| C14 | `=SUMIFS(Expenses!$D:$D,Expenses!$B:$B,"Housing",Expenses!$A:$A,">="&DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),Expenses!$A:$A,"<="&EOMONTH(DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),0))` |
| D14 | `=B14-C14` |
| A15 | Transportation | [Same pattern] |
| A16 | Food & Dining | [Same pattern] |
| A17 | Utilities | [Same pattern] |
| A18 | Insurance | [Same pattern] |
| A19 | Healthcare | [Same pattern] |
| A20 | Entertainment | [Same pattern] |
| A21 | Personal Care | [Same pattern] |
| A22 | Shopping | [Same pattern] |
| A23 | Debt Payments | [Same pattern] |
| A24 | Savings | [Same pattern] |
| A25 | Other | [Same pattern] |

### Quick Stats (Starting Row 28):

| Cell | Content/Formula |
|------|-----------------|
| A28 | Average Daily Spend |
| B28 | `=IF(DAY(TODAY())>0,B6/DAY(TODAY()),0)` |
| A30 | Top Spending Category |
| B30 | `=INDEX(A14:A25,MATCH(MAX(C14:C25),C14:C25,0))` |
| A32 | Days Remaining |
| B32 | `=DAY(EOMONTH(DATE($E$2,MONTH(DATEVALUE($B$2&" 1")),1),0))-DAY(TODAY())` |

### Charts to Insert:
1. **Pie Chart** - Data: C14:C25, Labels: A14:A25
2. **Bar Chart** - Data: B13:D25 (Budget vs Actual)
3. **Gauge Chart** - Data: E6 (Budget Utilization)

---

## 💰 TAB 2: INCOME

### Column Headers (Row 1):

| Cell | Header | Data Validation |
|------|--------|-----------------|
| A1 | Date | Date format |
| B1 | Source | Text |
| C1 | Amount | Currency |
| D1 | Type | List: Salary/Wages, Freelance, Business Income, Investment Income, Rental Income, Side Hustle, Gift, Refund, Other |
| E1 | Frequency | List: One-time, Weekly, Bi-weekly, Monthly, Quarterly, Annually |
| F1 | Notes | Text |

### Summary Section (Starting H1):

| Cell | Content/Formula |
|------|-----------------|
| H1 | Monthly Income Summary |
| H2 | This Month: |
| I2 | `=SUMIFS(C:C,A:A,">="&EOMONTH(TODAY(),-1)+1,A:A,"<="&EOMONTH(TODAY(),0))` |
| H3 | Last Month: |
| I3 | `=SUMIFS(C:C,A:A,">="&EOMONTH(TODAY(),-2)+1,A:A,"<="&EOMONTH(TODAY(),-1))` |
| H4 | Year to Date: |
| I4 | `=SUMIFS(C:C,A:A,">="&DATE(YEAR(TODAY()),1,1))` |
| H5 | Average Monthly: |
| I5 | `=AVERAGEIFS(C:C,A:A,">="&EOMONTH(TODAY(),-12)+1)` |

---

## 💸 TAB 3: EXPENSES

### Column Headers (Row 1):

| Cell | Header | Data Validation |
|------|--------|-----------------|
| A1 | Date | Date format |
| B1 | Category | List: Housing, Transportation, Food & Dining, Utilities, Insurance, Healthcare, Entertainment, Personal Care, Shopping, Debt Payments, Savings, Other |
| C1 | Subcategory | List based on Category (see below) |
| D1 | Amount | Currency |
| E1 | Payment Method | List: Checking Account, Savings Account, Credit Card 1, Credit Card 2, Cash, Venmo/PayPal, Other |
| F1 | Vendor/Merchant | Text |
| G1 | Tags | Text |
| H1 | Recurring? | List: Yes - Monthly, Yes - Weekly, Yes - Bi-weekly, Yes - Quarterly, Yes - Annually, No |
| I1 | Notes | Text |

### Subcategory Options (Column C Validation):
Create named ranges for dynamic subcategories:

**Housing:** Rent/Mortgage, Property Tax, HOA, Maintenance, Repairs, Home Insurance
**Transportation:** Gas, Public Transit, Uber/Lyft, Parking, Car Payment, Car Insurance, Maintenance
**Food & Dining:** Groceries, Restaurants, Coffee Shops, Delivery
**Utilities:** Electricity, Water, Gas, Internet, Phone, Trash, Cable
**Insurance:** Health, Life, Disability, Home, Auto
**Healthcare:** Doctor, Dental, Vision, Pharmacy, Therapy, Gym
**Entertainment:** Streaming, Movies, Games, Hobbies, Events
**Personal Care:** Haircut, Skincare, Clothing, Cosmetics
**Shopping:** Electronics, Home Goods, Gifts, Online Shopping
**Debt Payments:** Credit Card, Student Loan, Personal Loan
**Savings:** Emergency Fund, Retirement, Investment, Vacation Fund
**Other:** Miscellaneous, Fees, Subscriptions

### Summary Section (Starting K1):

| Cell | Content/Formula |
|------|-----------------|
| K1 | Expense Summary |
| K2 | This Month: |
| L2 | `=SUMIFS(D:D,A:A,">="&EOMONTH(TODAY(),-1)+1,A:A,"<="&EOMONTH(TODAY(),0))` |
| K3 | Last Month: |
| L3 | `=SUMIFS(D:D,A:A,">="&EOMONTH(TODAY(),-2)+1,A:A,"<="&EOMONTH(TODAY(),-1))` |
| K4 | This Week: |
| L4 | `=SUMIFS(D:D,A:A,">="&TODAY()-WEEKDAY(TODAY(),2)+1)` |
| K5 | Today: |
| L5 | `=SUMIFS(D:D,A:A,TODAY())` |
| K7 | By Category: |
| K8 | Housing |
| L8 | `=SUMIFS(D:D,B:B,"Housing",A:A,">="&EOMONTH(TODAY(),-1)+1,A:A,"<="&EOMONTH(TODAY(),0))` |
| K9 | Food & Dining |
| L9 | `=SUMIFS(D:D,B:B,"Food & Dining",A:A,">="&EOMONTH(TODAY(),-1)+1,A:A,"<="&EOMONTH(TODAY(),0))` |
| [Continue for all categories] | |

---

## 📋 TAB 4: BUDGET

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Category |
| B1 | Monthly Budget |
| C1 | Actual (This Month) |
| D1 | Difference |
| E1 | % Used |
| F1 | Status |

### Categories and Sample Budgets:

| Cell | Category | Sample Budget |
|------|----------|---------------|
| A2 | HOUSING | (Header, no budget) |
| A3 | Rent/Mortgage | 2000 |
| A4 | Property Tax | 400 |
| A5 | HOA Fees | 100 |
| A6 | Maintenance | 200 |
| A7 | Home Insurance | 150 |
| A9 | TRANSPORTATION | (Header) |
| A10 | Car Payment | 350 |
| A11 | Gas | 200 |
| A12 | Car Insurance | 120 |
| A13 | Maintenance | 100 |
| A14 | Public Transit | 50 |
| A16 | FOOD & DINING | (Header) |
| A17 | Groceries | 600 |
| A18 | Restaurants | 200 |
| A19 | Coffee/Delivery | 100 |
| A21 | UTILITIES | (Header) |
| A22 | Electricity | 120 |
| A23 | Water | 50 |
| A24 | Gas | 60 |
| A25 | Internet | 80 |
| A26 | Phone | 100 |
| A27 | Streaming | 50 |
| A29 | INSURANCE | (Header) |
| A30 | Health Insurance | 300 |
| A31 | Life Insurance | 50 |
| A32 | Disability | 40 |
| A34 | HEALTHCARE | (Header) |
| A35 | Doctor Visits | 100 |
| A36 | Pharmacy | 50 |
| A37 | Gym/Fitness | 60 |
| A39 | ENTERTAINMENT | (Header) |
| A40 | Streaming Services | 50 |
| A41 | Movies/Events | 100 |
| A42 | Hobbies | 150 |
| A44 | PERSONAL CARE | (Header) |
| A45 | Haircut/Beauty | 80 |
| A46 | Clothing | 150 |
| A47 | Personal Items | 50 |
| A49 | DEBT PAYMENTS | (Header) |
| A50 | Credit Card | 500 |
| A51 | Student Loan | 400 |
| A52 | Other Loans | 200 |
| A54 | SAVINGS | (Header) |
| A55 | Emergency Fund | 500 |
| A56 | Retirement | 600 |
| A57 | Vacation Fund | 200 |
| A58 | Other Goals | 100 |
| A60 | OTHER | (Header) |
| A61 | Gifts | 100 |
| A62 | Subscriptions | 50 |
| A63 | Miscellaneous | 200 |

### Formulas (Column C - Actual):
```
C3: =SUMIFS(Expenses!$D:$D,Expenses!$B:$B,"Housing",Expenses!$C:$C,"Rent/Mortgage",Expenses!$A:$A,">="&EOMONTH(TODAY(),-1)+1,Expenses!$A:$A,"<="&EOMONTH(TODAY(),0))
```
[Copy pattern for each subcategory]

### Formulas (Column D - Difference):
```
D3: =B3-C3
```
[Copy down]

### Formulas (Column E - % Used):
```
E3: =IF(B3>0,C3/B3,0)
```
Format as percentage, copy down

### Formulas (Column F - Status):
```
F3: =IF(E3>1,"⚠️ Over Budget",IF(E3>0.9,"⚡ Near Limit","✅ On Track"))
```
Copy down

### Conditional Formatting (Column F):
- "⚠️ Over Budget" = Red fill
- "⚡ Near Limit" = Yellow fill
- "✅ On Track" = Green fill

### Totals Row:
| Cell | Formula |
|------|---------|
| A65 | TOTAL |
| B65 | `=SUM(B3:B63)` |
| C65 | `=SUM(C3:C63)` |
| D65 | `=B65-C65` |
| E65 | `=C65/B65` |

---

## 📈 TAB 5: ANNUAL SUMMARY

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Month |
| B1 | Total Income |
| C1 | Total Expenses |
| D1 | Net Savings |
| E1 | Savings Rate |
| F1 | Budget Variance |

### Month Rows (2-13):

| Cell | Month | Income Formula | Expense Formula |
|------|-------|----------------|-----------------|
| A2 | January | `=SUMIFS(Income!$C:$C,Income!$A:$A,">="&DATE($E$2,1,1),Income!$A:$A,"<="&DATE($E$2,1,31))` | `=SUMIFS(Expenses!$D:$D,Expenses!$A:$A,">="&DATE($E$2,1,1),Expenses!$A:$A,"<="&DATE($E$2,1,31))` |
| A3 | February | [Same with month 2] | [Same pattern] |
| A4 | March | [Same with month 3] | [Same pattern] |
| [Continue for all 12 months] | | | |

### Calculated Columns:
| Cell | Formula |
|------|---------|
| D2 | `=B2-C2` |
| E2 | `=IF(B2>0,D2/B2,0)` |
| F2 | `=Budget!$B$65-C2` |
| [Copy down for all months] | |

### Annual Totals (Row 15):
| Cell | Formula |
|------|---------|
| A15 | ANNUAL TOTAL |
| B15 | `=SUM(B2:B13)` |
| C15 | `=SUM(C2:C13)` |
| D15 | `=SUM(D2:D13)` |
| E15 | `=AVERAGE(E2:E13)` |
| F15 | `=SUM(F2:F13)` |

### Monthly Averages (Row 16):
| Cell | Formula |
|------|---------|
| A16 | MONTHLY AVERAGE |
| B16 | `=B15/12` |
| C16 | `=C15/12` |
| D16 | `=D15/12` |

### Charts to Create:
1. **Line Chart** - Data: A1:D13 (Income vs Expenses trend)
2. **Column Chart** - Data: A1:A13, D1:D13 (Monthly savings)
3. **Combo Chart** - Income (columns) + Savings Rate (line)

---

## 🎯 TAB 6: SAVINGS GOALS

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Goal Name |
| B1 | Target Amount |
| C1 | Current Saved |
| D1 | Remaining |
| E1 | Target Date |
| F1 | Monthly Needed |
| G1 | % Complete |
| H1 | Status |
| I1 | Priority |

### Sample Goals with Formulas:

| Cell | Content |
|------|---------|
| A2 | Emergency Fund |
| B2 | 15000 |
| C2 | 8500 |
| D2 | `=B2-C2` |
| E2 | 12/31/2026 |
| F2 | `=D2/12` |
| G2 | `=C2/B2` |
| H2 | `=IF(G2>=1,"✅ Complete",IF(G2>=0.5,"🔄 On Track","📍 In Progress"))` |
| I2 | High |

[Continue pattern for additional goals]

### Summary Section:
| Cell | Formula |
|------|---------|
| K1 | Savings Summary |
| K2 | Total Goals: |
| L2 | `=COUNTA(A2:A100)` |
| K3 | Completed: |
| L3 | `=COUNTIF(H2:H100,"✅ Complete")` |
| K4 | Total Target: |
| L4 | `=SUM(B2:B100)` |
| K5 | Total Saved: |
| L5 | `=SUM(C2:C100)` |
| K6 | Total Remaining: |
| L6 | `=SUM(D2:D100)` |
| K7 | Overall Progress: |
| L7 | `=L5/L4` |
| K8 | Monthly Commitment: |
| L8 | `=SUM(F2:F100)` |

---

## 💳 TAB 7: DEBT PAYOFF

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Debt Name |
| B1 | Creditor |
| C1 | Balance |
| D1 | Interest Rate |
| E1 | Minimum Payment |
| F1 | Extra Payment |
| G1 | Total Payment |
| H1 | Payoff Method |
| I1 | Months to Payoff |
| J1 | Target Payoff Date |
| K1 | Status |

### Sample Debts with Formulas:

| Cell | Content |
|------|---------|
| A2 | Credit Card 1 |
| B2 | Chase |
| C2 | 5000 |
| D2 | 18.99% |
| E2 | 150 |
| F2 | 200 |
| G2 | `=E2+F2` |
| H2 | Avalanche |
| I2 | `=NPER(D2/12,-G2,C2)` |
| J2 | `=EDATE(TODAY(),I2)` |
| K2 | `=IF(C2<=0,"✅ Paid","🔄 Active")` |

### Summary Section:
| Cell | Formula |
|------|---------|
| M1 | Debt Summary |
| M2 | Total Debt: |
| N2 | `=SUM(C2:C100)` |
| M3 | Total Minimum: |
| N3 | `=SUM(E2:E100)` |
| M4 | Total Extra: |
| N4 | `=SUM(F2:F100)` |
| M5 | Total Monthly: |
| N5 | `=SUM(G2:G100)` |
| M6 | Weighted Avg Rate: |
| N6 | `=SUMPRODUCT(C2:C100,D2:D100)/SUM(C2:C100)` |
| M7 | Debt Free Date: |
| N7 | `=MAX(J2:J100)` |
| M8 | Total Interest Paid: |
| N8 | `=SUMPRODUCT(G2:G100,I2:I100)-N2` |

---

## 📊 TAB 8: NET WORTH

### Assets Section:

| Cell | Content | Formula/Value |
|------|---------|---------------|
| A1 | ASSETS | Header |
| A3 | Liquid Assets | Header |
| A4 | Checking Account | [Current Balance] |
| A5 | Savings Account | [Current Balance] |
| A6 | Money Market | [Current Balance] |
| A7 | Cash | [Current Balance] |
| A8 | Total Liquid | `=SUM(B4:B7)` |
| A10 | Investment Assets | Header |
| A11 | 401(k) | [Current Balance] |
| A12 | IRA | [Current Balance] |
| A13 | Brokerage | [Current Balance] |
| A14 | Crypto | [Current Balance] |
| A15 | Total Investments | `=SUM(B11:B14)` |
| A17 | Personal Property | Header |
| A18 | Home Value | [Estimated Value] |
| A19 | Vehicle(s) | [KBB Value] |
| A20 | Other Valuables | [Estimated Value] |
| A21 | Total Property | `=SUM(B18:B20)` |
| A23 | TOTAL ASSETS | `=B8+B15+B21` |

### Liabilities Section:

| Cell | Content | Formula/Value |
|------|---------|---------------|
| A25 | LIABILITIES | Header |
| A27 | Mortgage | [Remaining Balance] |
| A28 | Home Equity Loan | [Balance] |
| A29 | Car Loan | [Balance] |
| A30 | Student Loans | [Balance] |
| A31 | Credit Cards | [Total Balance] |
| A32 | Personal Loans | [Balance] |
| A33 | Other Debt | [Balance] |
| A35 | TOTAL LIABILITIES | `=SUM(B27:B33)` |

### Net Worth Calculation:

| Cell | Content | Formula |
|------|---------|---------|
| A37 | NET WORTH | `=B23-B35` |
| A38 | Previous Month | [Link to previous month] |
| A39 | Change | `=B37-B38` |
| A40 | % Change | `=IF(B38<>0,B39/B38,0)` |

---

## 📝 TAB 9: NOTES & REFLECTIONS

### Monthly Reflection Template:

```
## [Month] [Year] Budget Review

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

## 🎨 FORMATTING SPECIFICATIONS

### Colors:
- **Headers:** Dark blue background (#1E3A8A), white text, bold
- **Section Headers:** Light blue background (#DBEAFE), dark text
- **Positive Numbers:** Green (#16A34A)
- **Negative Numbers:** Red (#DC2626)
- **Alternating Rows:** Light gray (#F9FAFB)

### Fonts:
- **Headers:** Arial Bold, 12pt
- **Body:** Arial Regular, 11pt
- **Numbers:** Consistent decimal places (2 for currency, 1 for percentages)

### Column Widths:
- **A (Date/Category):** 15
- **B (Description/Name):** 25
- **C-F (Data):** 15
- **G-I (Notes):** 30

---

## ✅ BUILD CHECKLIST

- [ ] Create all 9 tabs with exact names
- [ ] Set up all data validation lists
- [ ] Enter all formulas correctly
- [ ] Apply conditional formatting
- [ ] Format all numbers (currency, percentages)
- [ ] Create all charts
- [ ] Test all formulas with sample data
- [ ] Protect formula cells
- [ ] Add instructions tab if needed
- [ ] Save as template (.xltx)

---

**Template Version:** 1.0
**Compatible:** Excel 2016+, Google Sheets
**Created:** March 2026
