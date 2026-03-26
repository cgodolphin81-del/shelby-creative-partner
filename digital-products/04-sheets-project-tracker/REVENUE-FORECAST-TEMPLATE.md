# Google Sheets Revenue Forecast - Build Instructions

**Create this 12-month revenue forecasting template in Google Sheets.**

---

## 📊 TAB 1: REVENUE FORECAST

### Column Headers (Row 1):

| Cell | Header | Format |
|------|--------|--------|
| A1 | Month | Text |
| B1 | Week | Text |
| C1 | Leads | Number |
| D1 | Conversion Rate | Percentage |
| E1 | New Clients | Number |
| F1 | Avg Deal Size | Currency |
| G1 | New Revenue | Currency |
| H1 | Recurring Revenue | Currency |
| I1 | Total Revenue | Currency |
| J1 | Expenses | Currency |
| K1 | Net Profit | Currency |
| L1 | Profit Margin | Percentage |

### Month Structure (Rows 2-50):

**Month 1 (Rows 2-5):**
| Cell | Content |
|------|---------|
| A2 | January |
| B2 | Week 1 |
| C2 | [Input: 20] |
| D2 | [Input: 25%] |
| E2 | `=C2*D2` |
| F2 | [Input: 5000] |
| G2 | `=E2*F2` |
| H2 | [Input: 10000] |
| I2 | `=G2+H2` |
| J2 | [Input: 8000] |
| K2 | `=I2-J2` |
| L2 | `=IF(I2>0,K2/I2,0)` |
| B3 | Week 2 |
| [Copy row 2 formulas for rows 3-5] | |

**Month Totals (Row 6):**
| Cell | Formula |
|------|---------|
| A6 | January Total |
| C6 | `=SUM(C2:C5)` |
| E6 | `=SUM(E2:E5)` |
| G6 | `=SUM(G2:G5)` |
| H6 | `=SUM(H2:H5)` |
| I6 | `=SUM(I2:I5)` |
| J6 | `=SUM(J2:J5)` |
| K6 | `=SUM(K2:K5)` |
| L6 | `=IF(I6>0,K6/I6,0)` |

[Repeat pattern for all 12 months]

### Annual Summary (After Month 12):

| Cell | Content | Formula |
|------|---------|---------|
| A55 | ANNUAL TOTAL | |
| C55 | Total Leads | `=SUM(C2:C53)` |
| E55 | Total New Clients | `=SUM(E2:E53)` |
| G55 | Total New Revenue | `=SUM(G2:G53)` |
| H55 | Total Recurring | `=SUM(H2:H53)` |
| I55 | TOTAL REVENUE | `=SUM(I2:I53)` |
| J55 | Total Expenses | `=SUM(J2:J53)` |
| K55 | TOTAL PROFIT | `=SUM(K2:K53)` |
| L55 | Avg Profit Margin | `=AVERAGE(L2:L53)` |

---

## 📈 TAB 2: SCENARIOS

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Metric |
| B1 | Conservative |
| C1 | Moderate |
| D1 | Optimistic |
| E1 | Stretch |

### Scenario Inputs (Rows 2-15):

| Cell | Metric | Conservative | Moderate | Optimistic | Stretch |
|------|--------|--------------|----------|------------|---------|
| A2 | Monthly Leads | 60 | 100 | 150 | 200 |
| A3 | Conversion Rate | 15% | 25% | 35% | 45% |
| A4 | Avg Deal Size | $3,000 | $5,000 | $7,500 | $10,000 |
| A5 | Client Retention | 70% | 85% | 92% | 97% |
| A6 | Upsell Rate | 10% | 20% | 35% | 50% |
| A7 | Monthly Expenses | $15,000 | $20,000 | $30,000 | $40,000 |

### Revenue Projections (Rows 10-25):

| Cell | Metric | Conservative | Moderate | Optimistic | Stretch |
|------|--------|--------------|----------|------------|---------|
| A10 | Monthly New Clients | `=B2*B3` | `=C2*C3` | `=D2*D3` | `=E2*E3` |
| A11 | Monthly New Revenue | `=B10*B4` | `=C10*C4` | `=D10*D4` | `=E10*E4` |
| A12 | Monthly Recurring | `=B11*B5` | `=C11*C5` | `=D11*D5` | `=E11*E5` |
| A13 | Total Monthly Revenue | `=B11+B12` | `=C11+C12` | `=D11+D12` | `=E11+E12` |
| A14 | Monthly Expenses | `=B6` | `=C6` | `=D6` | `=E6` |
| A15 | Monthly Profit | `=B13-B14` | `=C13-C14` | `=D13-D14` | `=E13-E14` |
| A16 | Profit Margin | `=B15/B13` | `=C15/C13` | `=D15/D13` | `=E15/E13` |

### Annual Projections (Rows 20-25):

| Cell | Metric | Conservative | Moderate | Optimistic | Stretch |
|------|--------|--------------|----------|------------|---------|
| A20 | Annual Revenue | `=B13*12` | `=C13*12` | `=D13*12` | `=E13*12` |
| A21 | Annual Expenses | `=B14*12` | `=C14*12` | `=D14*12` | `=E14*12` |
| A22 | Annual Profit | `=B15*12` | `=C15*12` | `=D15*12` | `=E15*12` |
| A23 | Break-even Month | `=IF(B15>0,CEILING(B14/B13,1),"N/A")` | [Copy] | [Copy] | [Copy] |
| A24 | Clients Needed/Year | `=B10*12` | `=C10*12` | `=D10*12` | `=E10*12` |
| A25 | Revenue/Client | `=B20/B24` | `=C20/C24` | `=D20/D24` | `=E20/E24` |

---

## 📊 TAB 3: KPI DASHBOARD

### Key Metrics Display:

| Cell | Content | Formula/Value |
|------|---------|---------------|
| A1 | 📊 Revenue Dashboard | Header, 24pt |
| A3 | Current Month Revenue | Label |
| B3 | `=SUMIFS('Revenue Forecast'!I:I,'Revenue Forecast'!A:A,TEXT(TODAY(),"mmmm"))` |
| A4 | vs. Target | Label |
| B4 | `=IF(B3>=50000,"✅ Above Target","⚠️ Below Target")` |
| D3 | YTD Revenue | Label |
| E3 | `=SUMIFS('Revenue Forecast'!I:I,'Revenue Forecast'!A:A,"<="&TEXT(TODAY(),"mmmm"))` |
| D4 | vs. Last Year | Label |
| E4 | `=(E3-last_year)/last_year` (adjust reference) |

### Monthly Trend Table:

| Cell | Header | Formula |
|------|--------|---------|
| A7 | Month | |
| B7 | Revenue | |
| C7 | Expenses | |
| D7 | Profit | |
| D7 | Margin | |
| A8 | January | `=SUMIFS('Revenue Forecast'!I:I,'Revenue Forecast'!A:A,"January")` |
| B8 | `=SUMIFS('Revenue Forecast'!J:J,'Revenue Forecast'!A:A,"January")` |
| C8 | `=SUMIFS('Revenue Forecast'!K:K,'Revenue Forecast'!A:A,"January")` |
| D8 | `=IF(B8>0,C8/B8,0)` |
| [Continue for all months] | | |

### Charts to Create:
1. **Revenue Trend Line** - Monthly revenue over 12 months
2. **Profit Margin Gauge** - Current profit margin
3. **Scenario Comparison Bar** - Conservative vs Moderate vs Optimistic
4. **Revenue Mix Pie** - New vs Recurring revenue

---

## 💰 TAB 4: CLIENT LIFETIME VALUE

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Metric |
| B1 | Value |
| C1 | Formula |

### CLV Calculations:

| Cell | Metric | Value | Formula |
|------|--------|-------|---------|
| A3 | Average Purchase Value | $5,000 | [Input] |
| A4 | Purchase Frequency/Year | 2.5 | [Input] |
| A5 | Customer Lifespan (Years) | 3 | [Input] |
| A6 | Customer Acquisition Cost | $1,500 | [Input] |
| A8 | Annual Customer Value | | `=B3*B4` |
| A9 | Lifetime Value | | `=B8*B5` |
| A10 | Profit per Customer | | `=B9-B6` |
| A11 | CLV:CAC Ratio | | `=B9/B6` |
| A12 | Payback Period (Months) | | `=B6/(B8/12)` |

### Cohort Analysis Table:

| Cell | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 |
|------|---------|---------|---------|---------|
| Customers Acquired | 25 | 32 | 28 | 35 |
| Revenue Month 1 | $125,000 | $160,000 | $140,000 | $175,000 |
| Revenue Month 3 | $180,000 | $220,000 | $195,000 | - |
| Revenue Month 6 | $250,000 | $300,000 | - | - |
| Revenue Month 12 | $375,000 | - | - | - |
| Retention Rate M3 | 85% | 88% | 82% | - |
| Retention Rate M6 | 72% | 75% | - | - |
| Retention Rate M12 | 65% | - | - | - |

---

## 📋 TAB 5: ASSUMPTIONS

### Business Assumptions:

| Cell | Assumption | Value | Notes |
|------|------------|-------|-------|
| A2 | Working Days/Month | 22 | |
| A3 | Billable Hours/Week | 30 | |
| A4 | Hourly Rate | $150 | |
| A5 | Team Size | 5 | |
| A6 | Utilization Rate | 75% | |
| A8 | Monthly Capacity | `=B5*B4*B3*4` | |
| A9 | Effective Capacity | `=B8*B6` | |

### Growth Assumptions:

| Cell | Assumption | Value |
|------|------------|-------|
| A12 | MoM Lead Growth | 5% |
| A13 | MoM Conversion Improvement | 0.5% |
| A14 | Annual Price Increase | 10% |
| A15 | Churn Rate (Monthly) | 3% |
| A16 | Upsell Success Rate | 25% |

### Expense Assumptions:

| Cell | Category | Monthly | Annual |
|------|----------|---------|--------|
| A20 | Salaries | $25,000 | `=B20*12` |
| A21 | Software/Tools | $2,000 | `=B21*12` |
| A22 | Marketing | $5,000 | `=B22*12` |
| A23 | Office/Remote | $3,000 | `=B23*12` |
| A24 | Professional Services | $2,000 | `=B24*12` |
| A25 | Contingency (10%) | `=SUM(B20:B24)*0.1` | `=B25*12` |
| A26 | TOTAL | `=SUM(B20:B25)` | `=SUM(C20:C25)` |

---

## 🎯 TAB 6: GOALS TRACKER

### Annual Goals:

| Cell | Goal | Target | Current | Progress | Status |
|------|------|--------|---------|----------|--------|
| A2 | Annual Revenue | $500,000 | `='Revenue Forecast'!I55` | `=C2/B2` | `=IF(D2>=1,"✅",IF(D2>=0.75,"🟡","🔴"))` |
| A3 | New Clients | 100 | `='Revenue Forecast'!E55` | `=C3/B3` | [Same formula] |
| A4 | Profit Margin | 40% | `='Revenue Forecast'!L55` | `=C4/B4` | [Same formula] |
| A5 | Avg Deal Size | $7,500 | [Input] | `=C5/B5` | [Same formula] |
| A6 | Client Retention | 90% | [Input] | `=C6/B6` | [Same formula] |

### Quarterly Milestones:

| Cell | Quarter | Revenue Goal | Client Goal | Status |
|------|---------|--------------|-------------|--------|
| A10 | Q1 | $100,000 | 20 | `=IF(actual>=goal,"✅","⏳")` |
| A11 | Q2 | $120,000 | 25 | [Same pattern] |
| A12 | Q3 | $130,000 | 28 | [Same pattern] |
| A13 | Q4 | $150,000 | 32 | [Same pattern] |

---

## 📤 TAB 7: EXPORT SUMMARY

### One-Page Summary for Stakeholders:

```
═══════════════════════════════════════════
        REVENUE FORECAST SUMMARY
              [Year]
═══════════════════════════════════════════

ANNUAL PROJECTIONS
─────────────────────────────────────────
Total Revenue:      $[I55 from Forecast]
Total Expenses:     $[J55 from Forecast]
Net Profit:         $[K55 from Forecast]
Profit Margin:      [L55 from Forecast]%

SCENARIO ANALYSIS
─────────────────────────────────────────
Conservative:       $[Scenario!B20]
Moderate:           $[Scenario!C20]
Optimistic:         $[Scenario!D20]
Stretch:            $[Scenario!E20]

KEY METRICS
─────────────────────────────────────────
Avg Monthly Revenue: $[I55/12]
Break-even Month:    [Scenario!B23]
CLV:CAC Ratio:       [CLV!B11]
Payback Period:      [CLV!B12] months

TEAM CAPACITY
─────────────────────────────────────────
Team Size:           [Assumptions!B5]
Utilization:         [Assumptions!B6]%
Monthly Capacity:    $[Assumptions!B9]

TOP 3 PRIORITIES
─────────────────────────────────────────
1. [Input]
2. [Input]
3. [Input]

═══════════════════════════════════════════
Generated: [TODAY()]
═══════════════════════════════════════════
```

---

## ⚙️ GOOGLE SHEETS AUTOMATION

### Apps Script for Monthly Reports:

```javascript
function generateMonthlyReport() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var forecastSheet = sheet.getSheetByName("Revenue Forecast");
  var dashboardSheet = sheet.getSheetByName("KPI Dashboard");
  
  // Get current month data
  var currentMonth = Utilities.formatDate(new Date(), "GMT", "MMMM");
  
  // Send email report (configure email)
  var recipient = "your@email.com";
  var subject = "Monthly Revenue Report - " + currentMonth;
  var body = "Please find attached the monthly revenue summary.";
  
  MailApp.sendEmail(recipient, subject, body);
}

// Set up monthly trigger
function createMonthlyTrigger() {
  ScriptApp.newTrigger('generateMonthlyReport')
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();
}
```

---

## 🎨 FORMATTING SPECIFICATIONS

### Colors:
- **Headers:** Dark blue (#1E3A8A), white text
- **Positive Numbers:** Green (#16A34A)
- **Negative Numbers:** Red (#DC2626)
- **Input Cells:** Light yellow fill (#FEF9C3)
- **Calculated Cells:** Light gray fill (#F3F4F6)

### Conditional Formatting:
- **Revenue > Target:** Green fill
- **Revenue < Target:** Yellow fill
- **Profit Margin > 40%:** Green text
- **Profit Margin < 20%:** Red text

### Number Formats:
- **Currency:** $#,##0
- **Percentages:** 0.0%
- **Dates:** MMM YYYY

---

## ✅ BUILD CHECKLIST

- [ ] Create all 7 tabs with exact names
- [ ] Enter all formulas correctly
- [ ] Set up data validation for inputs
- [ ] Apply conditional formatting
- [ ] Create all charts
- [ ] Test with sample data
- [ ] Protect formula cells
- [ ] Set up email automation (optional)
- [ ] Share with appropriate permissions
- [ ] Create backup copy

---

**Template Version:** 1.0
**Compatible:** Google Sheets (all versions)
**Created:** March 2026
