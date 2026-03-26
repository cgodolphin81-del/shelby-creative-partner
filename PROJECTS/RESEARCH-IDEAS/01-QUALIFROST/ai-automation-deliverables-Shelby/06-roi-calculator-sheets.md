# ROI Calculator - Google Sheets Template

**Purpose:** Quantify automation value before client purchases
**Format:** Copy to Google Sheets
**Use:** Sales proposals, discovery calls

---

## SHEET 1: ROI SUMMARY

Create a new Google Sheet and name the first tab "ROI Summary"

### Cell Layout:

```
A1: AI AUTOMATION ROI ANALYSIS
A3: Client:          B3: [Client Name]
A4: Prepared By:     B4: [Your Name]
A5: Date:            B5: =TODAY()

A7: ═══════════════════════════════════════
A8: EXECUTIVE SUMMARY
A10: Total Investment (Year 1):    C10: =Summary!B50
A11: Total Benefits (Year 1):      C11: =Summary!B51
A12: Net Benefit (Year 1):         C12: =C11-C10

A14: ROI (Year 1):                 C14: =(C11-C10)/C10
A15: Payback Period (months):      C15: =C10/(C11/12)
A16: 3-Year Net Benefit:           C16: =(C11*3)-(C10*3)

A18: RECOMMENDATION:   B18: ☐ PROCEED  ☐ MODIFY  ☐ DO NOT PROCEED
```

---

## SHEET 2: CURRENT STATE

Name the second tab "Current State"

### Section A: Manual Tasks

```
A1: CURRENT STATE ANALYSIS
A3: ═══════════════════════════════════════
A5: MANUAL TASKS - TIME TRACKING

A7: Task Description
B7: Hours/Week
C7: Employees
D7: Hourly Rate
E7: Weekly Cost
F7: Monthly Cost
G7: Annual Cost

A8: Lead Data Entry
B8: [INPUT]
C8: [INPUT]
D8: [INPUT]
E8: =B8*C8*D8
F8: =E8*4.33
G8: =F8*12

A9: Customer Support Emails
B9: [INPUT]
C9: [INPUT]
D9: [INPUT]
E9: =B9*C9*D9
F9: =E9*4.33
G9: =F9*12

A10: Social Media Posting
B10: [INPUT]
C10: [INPUT]
D10: [INPUT]
E10: =B10*C10*D10
F10: =E10*4.33
G10: =F10*12

A11: Report Generation
B11: [INPUT]
C11: [INPUT]
D11: [INPUT]
E11: =B11*C11*D11
F11: =E11*4.33
G11: =F11*12

A12: Meeting Scheduling
B12: [INPUT]
C12: [INPUT]
D12: [INPUT]
E12: =B12*C12*D12
F12: =E12*4.33
G12: =F12*12

A13: Order Processing
B13: [INPUT]
C13: [INPUT]
D13: [INPUT]
E13: =B13*C13*D13
F13: =E13*4.33
G13: =F13*12

A15: TOTALS
B15: =SUM(B8:B13)
E15: =SUM(E8:E13)
F15: =SUM(F8:F13)
G15: =SUM(G8:G13)
```

### Section B: Error Costs

```
A18: ═══════════════════════════════════════
A19: ERROR COSTS

A21: Error Type
B21: Occurrences/Mo
C21: Cost Each
D21: Monthly Cost
E21: Annual Cost

A22: Data Entry Mistakes
B22: [INPUT]
C22: [INPUT]
D22: =B22*C22
E22: =D22*12

A23: Missed Follow-ups
B23: [INPUT]
C23: [INPUT]
D23: =B23*C23
E23: =D23*12

A24: Delayed Responses
B24: [INPUT]
C24: [INPUT]
D24: =B24*C24
E24: =D24*12

A25: Duplicate Work
B25: [INPUT]
C25: [INPUT]
D25: =B25*C25
E25: =D25*12

A27: TOTAL ERROR COSTS
D27: =SUM(D22:D25)
E27: =SUM(E22:E25)
```

### Section C: Opportunity Costs

```
A30: ═══════════════════════════════════════
A31: OPPORTUNITY COSTS

A33: Missed Opportunity
B33: Value Each
C33: Occurrences/Mo
D33: Monthly Loss
E33: Annual Loss

A34: Unqualified Leads
B34: [INPUT]
C34: [INPUT]
D34: =B34*C34
E34: =D34*12

A35: Slow Response Deals
B35: [INPUT]
C35: [INPUT]
D35: =B35*C35
E35: =D35*12

A36: Capacity Limits
B36: [INPUT]
C36: [INPUT]
D36: =B36*C36
E36: =D36*12

A38: TOTAL OPPORTUNITY LOSS
D38: =SUM(D34:D36)
E38: =SUM(E34:E36)

A41: ═══════════════════════════════════════
A42: CURRENT STATE TOTALS
A43: Annual Labor Cost:        C43: =G15
A44: Annual Error Cost:        C44: =E27
A45: Annual Opportunity Loss:  C45: =E38
A47: TOTAL ANNUAL COST:        C47: =C43+C44+C45
```

---

## SHEET 3: SOLUTION

Name the third tab "Solution"

### Section A: Proposed Automations

```
A1: AUTOMATION SOLUTION
A3: ═══════════════════════════════════════
A5: PROPOSED AUTOMATIONS

A7: Automation
B7: Implementation Cost
C7: Monthly Cost
D7: Time Saved/Wk (hrs)
E7: Error Reduction (%)

A8: Lead Qualification Bot
B8: 3500
C8: 50
D8: 15
E8: 95%

A9: Email Response Automation
B9: 2500
C9: 30
D9: 10
E9: 90%

A10: CRM Data Sync
B10: 2000
C10: 40
D10: 8
E10: 99%

A11: Social Media Scheduler
B11: 1500
C11: 35
D11: 8
E11: 80%

A12: Report Auto-Generation
B12: 2000
C12: 25
D12: 4
E12: 95%

A14: TOTALS
B14: =SUM(B8:B12)
C14: =SUM(C8:C12)
D14: =SUM(D8:D12)
E14: =AVERAGE(E8:E12)
```

### Section B: Implementation Costs

```
A17: ═══════════════════════════════════════
A18: IMPLEMENTATION COSTS

A20: Cost Type            B20: Amount      C20: Type
A21: Discovery & Strategy  B21: [INPUT]    C21: One-time
A22: Automation Build      B22: =B14       C22: One-time
A23: Testing & QA          B23: [INPUT]    C23: One-time
A24: Training              B24: [INPUT]    C24: One-time
A25: Software (Year 1)     B25: =C14*12    C25: Recurring
A26: Maintenance (10%)     B26: =B22*0.10  C26: Annual

A28: TOTAL YEAR 1 COST     B28: =SUM(B21:B26)
A29: TOTAL YEAR 2 COST     B29: =B25+B26
A30: TOTAL YEAR 3 COST     B30: =B25+B26
A32: 3-YEAR TOTAL COST     B32: =B28+B29+B30
```

---

## SHEET 4: SUMMARY CALCULATIONS

Name the fourth tab "Summary"

### Section A: Time Savings

```
A1: ROI CALCULATIONS
A3: ═══════════════════════════════════════
A5: TIME SAVINGS VALUATION

A7: Weekly Hours Saved         B7: ='Solution'!D14
A8: Monthly Hours Saved        B8: =B7*4.33
A9: Annual Hours Saved         B9: =B8*12
A10: Average Hourly Rate       B10: [INPUT - e.g., 30]

A12: ANNUAL LABOR SAVINGS      B12: =B9*B10
```

### Section B: Error Reduction

```
A15: ═══════════════════════════════════════
A16: ERROR REDUCTION SAVINGS

A18: Current Annual Error Cost    B18: ='Current State'!E27
A19: Expected Reduction (%)       B19: [INPUT - e.g., 85%]

A21: ANNUAL ERROR SAVINGS        B21: =B18*B19
```

### Section C: Revenue Impact

```
A24: ═══════════════════════════════════════
A25: REVENUE IMPACT

A27: Improvement Area        B27: Current Annual    C27: Improvement %    D27: Additional Rev
A28: Lead Conversion         B28: [INPUT]           C28: [INPUT]          D28: =B28*C28
A29: Customer Retention      B29: [INPUT]           C29: [INPUT]          D29: =B29*C29
A30: Capacity/Scale          B30: [INPUT]           C30: [INPUT]          D30: =B30*C30

A32: TOTAL REVENUE IMPACT    D32: =SUM(D28:D30)
```

### Section D: Total Benefits

```
A35: ═══════════════════════════════════════
A36: TOTAL BENEFITS SUMMARY

A38: Benefit Type          B38: Year 1      C38: Year 2      D38: Year 3      E38: 3-Year Total
A39: Labor Savings         B39: =B12        C39: =B12        D39: =B12        E39: =B39+C39+D39
A40: Error Reduction       B40: =B21        C40: =B21        D40: =B21        E40: =B40+C40+D40
A41: Revenue Impact        B41: =D32        C41: =D32        D41: =D32        E41: =B41+C41+D41

A43: TOTAL BENEFITS        B43: =SUM(B39:B41)  C43: =SUM(C39:C41)  D43: =SUM(D39:D41)  E43: =SUM(E39:E41)
```

### Section E: Net Benefit

```
A46: ═══════════════════════════════════════
A47: NET BENEFIT CALCULATION

A49: Total 3-Year Benefits      B49: =E43
A50: Total 3-Year Costs         B50: ='Solution'!B32

A52: NET 3-YEAR BENEFIT         B52: =B49-B50
```

### Section F: Key ROI Metrics

```
A55: ═══════════════════════════════════════
A56: KEY ROI METRICS

A58: Metric                   B58: Value              C58: Formula
A59: Total Investment         B59: =B50
A60: Total 3-Year Return      B60: =B49

A62: ROI (%)                  B62: =(B49-B50)/B50     C62: (Return-Cost)/Cost
A63: Payback Period (months)  B63: =B50/(B43/12)      C63: Cost/(Annual Benefit/12)
A64: Annual ROI               B64: =B43/B50           C64: Year 1 Benefit / Cost
A65: Benefit-Cost Ratio       B65: =B49/B50           C65: Total Return / Total Cost
```

---

## HOW TO USE

### Step 1: Create the Sheet
1. Go to sheets.google.com
2. Click "+ Blank" to create new spreadsheet
3. Name it: "ROI Calculator - [Client Name]"
4. Create 4 tabs: "ROI Summary", "Current State", "Solution", "Summary"

### Step 2: Copy Formulas
1. Copy the cell layouts above into each tab
2. Replace [INPUT] cells with yellow background
3. Formula cells will auto-calculate (green background)

### Step 3: Enter Client Data
**In "Current State" tab:**
- Hours spent on each manual task
- Number of employees doing each task
- Average hourly rate
- Error frequency and costs
- Missed opportunity values

**In "Solution" tab:**
- Adjust implementation costs based on scope
- Update monthly software costs
- Modify time savings estimates

**In "Summary" tab:**
- Enter hourly rate (weighted average)
- Enter expected error reduction % (typically 80-95%)
- Enter revenue improvement estimates

### Step 4: Review Results
Key metrics to highlight:
- **ROI %:** Should be 200%+ for good projects
- **Payback Period:** Should be <6 months ideally
- **Benefit-Cost Ratio:** 3.0+ is excellent
- **3-Year Net Benefit:** Total value created

### Step 5: Present to Client
1. Share the Google Sheet (view-only)
2. Walk through Current State (their pain)
3. Show Solution (your fix)
4. Reveal ROI (the value)
5. Handle objections
6. Close the deal

---

## PRE-FILLED EXAMPLE

### Sample Inputs:
| Task | Hours/Wk | Employees | Rate | Annual |
|------|----------|-----------|------|--------|
| Lead Entry | 10 | 2 | $25 | $26,000 |
| Support | 15 | 1 | $22 | $17,160 |
| Reports | 8 | 2 | $30 | $24,960 |
| **TOTAL** | **33** | | | **$68,120** |

### Sample Results:
| Metric | Value |
|--------|-------|
| Total Investment | $9,260 |
| Year 1 Benefits | $85,000 |
| ROI | 818% |
| Payback | 1.3 months |
| 3-Year Net | $245,000+ |

---

## PRESENTATION SCRIPT

```
OPENING (2 min)
"Thanks for reviewing this analysis. I've quantified the impact of automation
on your specific business based on our discovery call."

CURRENT STATE (3 min)
"Right now, you're spending approximately $[X] per year on:
- $[X] in labor costs for manual tasks
- $[X] in errors and rework
- $[X] in missed opportunities

This totals $[X] annually."

SOLUTION (3 min)
"Our automation solution requires an investment of $[X] in year one, which includes:
- Complete discovery and strategy
- Build and implementation of [X] automations
- Team training and documentation
- 90 days of support"

ROI REVEAL (3 min)
"Here's the key number: Over 3 years, you'll see $[X] in benefits against $[X] in costs.

That's a net benefit of $[X], which translates to:
- ROI of [X]%
- Payback in just [X] months
- Every $1 invested returns $[X]"

CLOSE (2 min)
"Based on these numbers, does this make sense as an investment?

[Handle objections]

Great. The next step is [next step]. Does that work for you?"
```

---

*Calculator v1.0 | [Your Agency] | For Client Presentations*
