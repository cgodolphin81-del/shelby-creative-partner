# AI Automation ROI Calculator

**Purpose:** Demonstrate quantifiable value before client purchases
**Format:** Google Sheets compatible (import CSV or recreate)
**Version:** 1.0

---

## How to Use This Calculator

1. **Open Google Sheets** and create a new spreadsheet
2. **Copy the structure below** into your sheet
3. **Enter client data** in YELLOW cells
4. **Review calculated results** in GREEN cells
5. **Present to client** as part of proposal

---

## Sheet 1: ROI Summary

```
│ A                          │ B              │ C              │ D              │ E              │
├────────────────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
│ AI AUTOMATION ROI ANALYSIS │                │                │                │                │
│                            │                │                │                │                │
│ Client:                    │ [Client Name]  │                │ Date:          │ =TODAY()       │
│ Prepared By:               │ [Your Name]    │                │                │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ EXECUTIVE SUMMARY          │                │                │                │                │
│                            │                │                │                │                │
│ Total Investment (Year 1)  │                │ $[CALCULATED]  │                │                │
│ Total Benefits (Year 1)    │                │ $[CALCULATED]  │                │                │
│ Net Benefit (Year 1)       │                │ $[CALCULATED]  │                │                │
│                            │                │                │                │                │
│ ROI (Year 1)               │                │ [CALCULATED]%  │                │                │
│ Payback Period             │                │ [CALCULATED] mo│                │                │
│ 3-Year Net Benefit         │                │ $[CALCULATED]  │                │                │
│                            │                │                │                │                │
│ RECOMMENDATION             │ ☐ PROCEED      │ ☐ MODIFY       │ ☐ DO NOT PROCEED               │
```

---

## Sheet 2: Current State Analysis

### Tab Name: "Current State"

```
│ A                          │ B              │ C              │ D              │ E              │ F              │ G              │
├────────────────────────────┼────────────────┼────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
│ CURRENT STATE ANALYSIS     │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │                │
│ MANUAL TASK ANALYSIS       │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ Task Description           │ Hours/Week     │ Employees      │ Hourly Rate    │ Weekly Cost    │ Monthly Cost   │ Annual Cost    │
│ Lead Data Entry            │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B7*C7*D7      │ =E7*4.33       │ =F7*12         │
│ Customer Support           │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B8*C8*D8      │ =E8*4.33       │ =F8*12         │
│ Social Media Posting       │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B9*C9*D9      │ =E9*4.33       │ =F9*12         │
│ Report Generation          │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B10*C10*D10   │ =E10*4.33      │ =F10*12        │
│ Meeting Scheduling         │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B11*C11*D11   │ =E11*4.33      │ =F11*12        │
│ Order Processing           │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B12*C12*D12   │ =E12*4.33      │ =F12*12        │
│ Invoice Creation           │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B13*C13*D13   │ =E13*4.33      │ =F13*12        │
│ Data Sync Between Apps     │ [INPUT]        │ [INPUT]        │ [INPUT]        │ =B14*C14*D14   │ =E14*4.33      │ =F14*12        │
│ [Add More Rows]            │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ TOTALS                     │ =SUM(B7:B20)   │                │                │ =SUM(E7:E20)   │ =SUM(F7:F20)   │ =SUM(G7:G20)   │
│                            │                │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │                │
│ ERROR COSTS                │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ Error Type                 │ Occurrences/Mo │ Cost Each      │ Monthly Cost   │ Annual Cost    │ Notes          │                │
│ Data Entry Mistakes        │ [INPUT]        │ [INPUT]        │ =B25*C25       │ =D25*12        │                │                │
│ Missed Follow-ups          │ [INPUT]        │ [INPUT]        │ =B26*C26       │ =D26*12        │ Lost deals     │                │
│ Delayed Responses          │ [INPUT]        │ [INPUT]        │ =B27*C27       │ =D27*12        │ Customer churn │                │
│ Duplicate Work             │ [INPUT]        │ [INPUT]        │ =B28*C28       │ =D28*12        │                │                │
│ Overtime Hours             │ [INPUT]        │ [INPUT]        │ =B29*C29       │ =D29*12        │                │                │
│                            │                │                │                │                │                │                │
│ TOTAL ERROR COSTS          │                │                │ =SUM(D25:D29)  │ =SUM(E25:E29)  │                │                │
│                            │                │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │                │
│ OPPORTUNITY COSTS          │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ Missed Opportunity         │ Value Each     │ Occurrences/Mo │ Monthly Loss   │ Annual Loss    │ Notes          │                │
│ Unqualified Leads          │ [INPUT]        │ [INPUT]        │ =B34*C34       │ =D34*12        │ Not followed up│                │
│ Slow Response Deals        │ [INPUT]        │ [INPUT]        │ =B35*C35       │ =D35*12        │ Lost to comps  │                │
│ Capacity Limits            │ [INPUT]        │ [INPUT]        │ =B36*C36       │ =D36*12        │ Turned away    │                │
│ [Add More]                 │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ TOTAL OPPORTUNITY LOSS     │                │                │ =SUM(D34:D40)  │ =SUM(E34:E40)  │                │                │
│                            │                │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │                │
│ CURRENT STATE TOTALS       │                │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ Annual Labor Cost          │ =G21           │                │                │                │                │                │
│ Annual Error Cost          │ =E31           │                │                │                │                │                │
│ Annual Opportunity Loss    │ =E42           │                │                │                │                │                │
│                            │                │                │                │                │                │                │
│ TOTAL ANNUAL COST          │ =B45+B46+B47   │                │                │                │                │                │
```

---

## Sheet 3: Automation Solution

### Tab Name: "Solution"

```
│ A                          │ B              │ C              │ D              │ E              │ F              │
├────────────────────────────┼────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
│ AUTOMATION SOLUTION        │                │                │                │                │                │
│                            │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │
│ PROPOSED AUTOMATIONS       │                │                │                │                │                │
│                            │                │                │                │                │                │
│ Automation                 │ Implementation │ Monthly Cost   │ Time Saved/Wk  │ Error Reduction│ Priority       │
│                            │ Cost           │                │ (Hours)        │ (%)            │                │
│ Lead Qualification Bot     │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ High           │
│ Email Response Automation  │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ High           │
│ CRM Data Sync              │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ High           │
│ Social Media Scheduler     │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ Medium         │
│ Report Auto-Generation     │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ Medium         │
│ Meeting Booking System     │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ High           │
│ Invoice Automation         │ [INPUT]        │ [INPUT]        │ [INPUT]        │ [INPUT]        │ Medium         │
│ [Add More]                 │                │                │                │                │                │
│                            │                │                │                │                │                │
│ TOTALS                     │ =SUM(B7:B20)   │ =SUM(C7:C20)   │ =SUM(D7:D20)   │ =AVERAGE(E7:E20)│               │
│                            │                │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │                │
│ IMPLEMENTATION COSTS       │                │                │                │                │                │
│                            │                │                │                │                │                │
│ Cost Type                  │ Amount         │ Type           │ When Due       │ Notes          │                │
│ Discovery & Strategy       │ [INPUT]        │ One-time       │ Upfront        │                │                │
│ Automation Build           │ [INPUT]        │ One-time       │ Upfront        │                │                │
│ Testing & QA               │ [INPUT]        │ One-time       │ Mid-project    │                │                │
│ Training                   │ [INPUT]        │ One-time       │ End of project │                │                │
│ Software Subscriptions     │ =C21*12        │ Recurring      │ Monthly        │ Year 1         │                │
│ Maintenance (10% of build) │ =B22*0.10      │ Recurring      │ Annual         │                │                │
│                            │                │                │                │                │                │
│ TOTAL YEAR 1 COST          │ =SUM(B25:B30)  │                │                │                │                │
│ TOTAL YEAR 2 COST          │ =C30+B31       │                │                │                │                │
│ TOTAL YEAR 3 COST          │ =C30+B31       │                │                │                │                │
│                            │                │                │                │                │                │
│ 3-YEAR TOTAL COST          │ =B32+B33+B34   │                │                │                │                │
```

---

## Sheet 4: ROI Calculations

### Tab Name: "ROI Calculations"

```
│ A                          │ B              │ C              │ D              │ E              │
├────────────────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
│ ROI CALCULATIONS           │                │                │                │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ TIME SAVINGS VALUATION     │                │                │                │                │
│                            │                │                │                │                │
│ Weekly Hours Saved         │ ='Solution'!D21│                │                │                │
│ Monthly Hours Saved        │ =B7*4.33       │                │                │                │
│ Annual Hours Saved         │ =B8*12         │                │                │                │
│ Average Hourly Rate        │ [INPUT]        │ Client's loaded cost per hour  │                │
│                            │                │                │                │                │
│ ANNUAL LABOR SAVINGS       │ =B9*B10        │                │                │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ ERROR REDUCTION SAVINGS    │                │                │                │                │
│                            │                │                │                │                │
│ Current Annual Error Cost  │ ='Current State'!E31            │                │                │
│ Expected Reduction (%)     │ [INPUT]        │ Typically 80-95%               │                │
│                            │                │                │                │                │
│ ANNUAL ERROR SAVINGS       │ =B15*B16       │                │                │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ REVENUE IMPACT             │                │                │                │                │
│                            │                │                │                │                │
│ Improvement Area           │ Current Annual │ Improvement %  │ Additional Rev │                │
│ Lead Conversion (faster)   │ [INPUT]        │ [INPUT]        │ =B22*C22       │                │
│ Customer Retention         │ [INPUT]        │ [INPUT]        │ =B23*C23       │                │
│ Capacity/Scale             │ [INPUT]        │ [INPUT]        │ =B24*C24       │                │
│ [Add More]                 │                │                │                │                │
│                            │                │                │                │                │
│ TOTAL REVENUE IMPACT       │                │                │ =SUM(D22:D30)  │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ TOTAL BENEFITS SUMMARY     │                │                │                │                │
│                            │                │                │                │                │
│ Benefit Type               │ Year 1         │ Year 2         │ Year 3         │ 3-Year Total   │
│ Labor Savings              │ =B11           │ =B11           │ =B11           │ =B35+C35+D35   │
│ Error Reduction            │ =B17           │ =B17           │ =B17           │ =B36+C36+D36   │
│ Revenue Impact             │ =D25           │ =D25           │ =D25           │ =B37+C37+D37   │
│                            │                │                │                │                │
│ TOTAL BENEFITS             │ =SUM(B35:B37)  │ =SUM(C35:C37)  │ =SUM(D35:D37)  │ =SUM(E35:E37)  │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ NET BENEFIT CALCULATION    │                │                │                │                │
│                            │                │                │                │                │
│ Total 3-Year Benefits      │ =E38           │ From above                    │                │
│ Total 3-Year Costs         │ ='Solution'!B36│ From Solution tab             │                │
│                            │                │                │                │                │
│ NET 3-YEAR BENEFIT         │ =B41-B42       │                │                │                │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ KEY ROI METRICS            │                │                │                │                │
│                            │                │                │                │                │
│ Metric                     │ Value          │ Formula        │ Benchmark      │                │
│ Total Investment           │ ='Solution'!B32│                │                │                │
│ Total 3-Year Return        │ =B43           │                │                │                │
│                            │                │                │                │                │
│ ROI (%)                    │ =(B43-B46)/B46 │ (Return-Cost)/Cost             │ 200-400%       │
│ Payback Period (Months)    │ =B46/(B38/12)  │ Cost/(Annual Benefit/12)       │ 3-9 months     │
│ Annual ROI                 │ =B38/B46       │ Year 1 Benefit / Cost          │ 150%+          │
│ Benefit-Cost Ratio         │ =B43/B46       │ Total Return / Total Cost      │ 3.0+ excellent │
│                            │                │                │                │                │
│══════════════════════════════════════════════════════════════════════════════════════════════│
│                            │                │                │                │                │
│ MONTHLY CASH FLOW          │                │                │                │                │
│                            │                │                │                │                │
│ Month                      │ Investment     │ Benefits       │ Net            │ Cumulative     │
│ 1                          │ =B46           │ =B38/12        │ =C53-B53       │ =D53           │
│ 2                          │ 0              │ =B38/12        │ =C54-B54       │ =E53+D54       │
│ 3                          │ 0              │ =B38/12        │ =C55-B55       │ =E54+D55       │
│ [Continue to Month 12]     │                │                │                │                │
│                            │                │                │                │                │
│ BREAK-EVEN MONTH           │ =IF(E64<0,"12+",MATCH(TRUE,E53:E64>=0,0))       │                │
```

---

## Sheet 5: Visual Dashboard

### Tab Name: "Dashboard"

Create visual summaries with these elements:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    ROI DASHBOARD                                            │
│                                    [Client Name]                                            │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  ┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐          │
│  │   TOTAL INVESTMENT   │    │   3-YEAR RETURN      │    │   NET BENEFIT        │          │
│  │                      │    │                      │    │                      │          │
│  │      $[VALUE]        │    │      $[VALUE]        │    │      $[VALUE]        │          │
│  │                      │    │                      │    │                      │          │
│  └──────────────────────┘    └──────────────────────┘    └──────────────────────┘          │
│                                                                                             │
│  ┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐          │
│  │   ROI                │    │   PAYBACK PERIOD     │    │   BENEFIT/COST       │          │
│  │                      │    │                      │    │                      │          │
│  │      [VALUE]%        │    │   [VALUE] months     │    │      [VALUE]x        │          │
│  │                      │    │                      │    │                      │          │
│  └──────────────────────┘    └──────────────────────┘    └──────────────────────┘          │
│                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  BENEFIT BREAKDOWN (3-Year)                                                                 │
│                                                                                             │
│  Labor Savings          ████████████████████████████████████  $[VALUE]  ([X]%)             │
│  Error Reduction        ████████████████                      $[VALUE]  ([X]%)             │
│  Revenue Impact         ████████████████████████              $[VALUE]  ([X]%)             │
│                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  CASH FLOW OVER TIME                                                                        │
│                                                                                             │
│  $50K │                                                                 ████               │
│       │                                                            ████                    │
│   0   │───────────────────────────────────────────────────────████──                       │
│       │                                                  ████                              │
│ -$50K │████████████████                                  │                                 │
│       │                                                                                     │
│       └───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬────────    │
│              M1      M3      M5      M7      M9     M11     Y2      Y3                     │
│                                                                                             │
│  ★ BREAK-EVEN: Month [X]                                                                    │
│                                                                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Sheet 6: Client Presentation

### Tab Name: "Presentation Notes"

```
ROI PRESENTATION SCRIPT
========================

OPENING (2 min)
"Thanks for taking the time to review this analysis. What I've done is quantify
the impact of automation on your specific business based on our discovery call."

CURRENT STATE (3 min)
"Right now, you're spending approximately $[X] per year on:
- $[X] in labor costs for manual tasks
- $[X] in errors and rework
- $[X] in missed opportunities

This totals $[X] annually in costs and lost revenue."

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
"Based on these numbers, does this make sense as an investment for your business?

[Handle objections]

Great. The next step is [next step]. Does that work for you?"
```

---

## Pre-Filled Example (For Reference)

### Current State Example:
| Task | Hours/Wk | Employees | Rate | Annual Cost |
|------|----------|-----------|------|-------------|
| Lead Entry | 10 | 2 | $25 | $26,000 |
| Support Emails | 15 | 1 | $22 | $17,160 |
| Reports | 8 | 2 | $30 | $24,960 |
| **TOTAL** | **33** | | | **$68,120** |

### Solution Example:
| Automation | Build Cost | Monthly | Time Saved |
|------------|------------|---------|------------|
| Lead Bot | $3,500 | $50 | 15 hrs/wk |
| Email Auto | $2,500 | $30 | 10 hrs/wk |
| Reports | $2,000 | $25 | 8 hrs/wk |
| **TOTAL** | **$8,000** | **$105/mo** | **33 hrs/wk** |

### ROI Example:
- **Year 1 Investment:** $9,260 (build + subscriptions)
- **Year 1 Benefits:** $85,000 (labor + errors + revenue)
- **ROI:** 818%
- **Payback:** 1.3 months
- **3-Year Net:** $245,000+

---

## Import Instructions for Google Sheets

1. Open Google Sheets
2. File → Import → Upload
3. Copy each section above into separate tabs
4. Replace [INPUT] cells with actual data
5. Formulas will auto-calculate

---

*Calculator Version: 1.0 | [Your Agency Name] | For Client Presentations*
