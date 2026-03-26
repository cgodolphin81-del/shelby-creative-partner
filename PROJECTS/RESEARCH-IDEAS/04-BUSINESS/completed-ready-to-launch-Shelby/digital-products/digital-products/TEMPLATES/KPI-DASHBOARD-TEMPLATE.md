# KPI Dashboard - Google Sheets Build Instructions

**Create this executive KPI dashboard in Google Sheets.**

---

## 📊 TAB 1: EXECUTIVE DASHBOARD

### Header Section (Rows 1-3):

| Cell | Content | Formatting |
|------|---------|------------|
| A1 | 📊 Executive KPI Dashboard | Bold, 24pt, Dark Blue |
| A2 | Company Name: | [Input] |
| D2 | Period: | [Dropdown: This Month, Last Month, QTD, YTD] |
| A3 | Last Updated: | `=TEXT(NOW(),"mmmm dd, yyyy h:mm AM/PM")` |

### Scorecard Section (Rows 5-12):

| Cell | Metric | Value | Formula | Status |
|------|--------|-------|---------|--------|
| A5 | 💰 Total Revenue | | `=SUM(Revenue!B:B)` | `=IF(B5>=target,"✅","⚠️")` |
| A6 | 📈 Profit Margin | | `=Profit!B5/Revenue!B5` | `=IF(B6>=0.4,"✅",IF(B6>=0.25,"🟡","🔴"))` |
| A7 | 👥 Active Clients | | `=COUNTA(Clients!A:A)-1` | `=IF(B7>=50,"✅",IF(B7>=30,"🟡","🔴"))` |
| A8 | 🔄 Churn Rate | | `=Churn!B5/ActiveClients` | `=IF(B8<=0.05,"✅",IF(B8<=0.1,"🟡","🔴"))` |
| A9 | 📊 NPS Score | | [Input from survey] | `=IF(B9>=50,"✅",IF(B9>=30,"🟡","🔴"))` |
| A10 | ⏱️ Utilization | | `=Hours!B5/Capacity!B5` | `=IF(B10>=0.75,"✅",IF(B10>=0.6,"🟡","🔴"))` |
| A11 | 💵 Cash Flow | | `=Cash!B5-Cash!B6` | `=IF(B11>0,"✅","🔴")` |
| A12 | 🎯 Goal Progress | | `=AVERAGE(Status!B5:B11)` | [Calculated] |

### Charts Section (Rows 15-35):

**Chart 1: Revenue Trend (Line Chart)**
- Position: A15:F30
- Data: Revenue!A1:B13 (12 months)
- Title: "Revenue Trend (12 Months)"

**Chart 2: Revenue by Source (Pie Chart)**
- Position: H15:L30
- Data: Revenue!D1:E5 (Services breakdown)
- Title: "Revenue by Service"

**Chart 3: Client Growth (Column Chart)**
- Position: A32:F47
- Data: Clients!A1:B13
- Title: "Client Growth"

**Chart 4: KPI Status (Gauge Charts)**
- Position: H32:L47
- Multiple mini-gauges for each KPI
- Show current vs. target

---

## 💰 TAB 2: REVENUE METRICS

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Month |
| B1 | Total Revenue |
| C1 | New Business |
| D1 | Recurring |
| E1 | One-Time |
| F1 | vs. Target |
| G1 | % to Target |
| H1 | Status |

### Monthly Data (Rows 2-13):

| Cell | Formula |
|------|---------|
| A2 | January |
| B2 | `=C2+D2+E2` |
| C2 | [Input new business revenue] |
| D2 | [Input recurring revenue] |
| E2 | `=B2-C2-D2` |
| F2 | [Input monthly target] |
| G2 | `=B2/F2` |
| H2 | `=IF(G2>=1,"✅ On Track",IF(G2>=0.8,"⚠️ At Risk","🔴 Behind"))` |
| [Copy down for all months] | |

### Revenue by Service (Rows 16-25):

| Cell | Service | Revenue | % of Total | Trend |
|------|---------|---------|------------|-------|
| A16 | Service 1 | [Input] | `=B16/SUM($B$16:$B$20)` | [Arrow] |
| A17 | Service 2 | [Input] | `=B17/SUM($B$16:$B$20)` | [Arrow] |
| A18 | Service 3 | [Input] | `=B18/SUM($B$16:$B$20)` | [Arrow] |
| A19 | Service 4 | [Input] | `=B19/SUM($B$16:$B$20)` | [Arrow] |
| A20 | Service 5 | [Input] | `=B20/SUM($B$16:$B$20)` | [Arrow] |
| A21 | **TOTAL** | `=SUM(B16:B20)` | `=SUM(C16:C20)` | |

### Key Revenue Metrics (Rows 25-35):

| Cell | Metric | Value | Formula |
|------|--------|-------|---------|
| A25 | MRR (Monthly Recurring Revenue) | | `=SUM(D2:D13)/12` |
| A26 | ARR (Annual Recurring Revenue) | | `=B25*12` |
| A27 | Avg Revenue/Client | | `=B21/Clients!B14` |
| A28 | Revenue/Employee | | `=B21/Team!B14` |
| A29 | YoY Growth | | `=(B21-last_year)/last_year` |
| A30 | QoQ Growth | | `=(this_quarter-last_quarter)/last_quarter` |

---

## 👥 TAB 3: CLIENT METRICS

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Month |
| B1 | Starting Clients |
| C1 | New Clients |
| D1 | Lost Clients |
| E1 | Ending Clients |
| F1 | Churn Rate |
| G1 | Retention Rate |
| H1 | NPS |

### Monthly Data (Rows 2-13):

| Cell | Formula |
|------|---------|
| A2 | January |
| B2 | [Input or =E1 from previous] |
| C2 | [Input new clients] |
| D2 | [Input lost clients] |
| E2 | `=B2+C2-D2` |
| F2 | `=IF(B2>0,D2/B2,0)` |
| G2 | `=1-F2` |
| H2 | [Input NPS score] |
| [Copy down for all months] | |

### Client Segments (Rows 16-25):

| Cell | Segment | Count | Revenue | % of Revenue |
|------|---------|-------|---------|--------------|
| A16 | Enterprise ($10k+) | [Input] | [Input] | `=C16/SUM($C$16:$C$20)` |
| A17 | Mid-Market ($5-10k) | [Input] | [Input] | `=C17/SUM($C$16:$C$20)` |
| A18 | Small Business ($1-5k) | [Input] | [Input] | `=C18/SUM($C$16:$C$20)` |
| A19 | Starter (Under $1k) | [Input] | [Input] | `=C19/SUM($C$16:$C$20)` |
| A20 | **TOTAL** | `=SUM(B16:B19)` | `=SUM(C16:C19)` | `=SUM(D16:D19)` |

### Client Health Score (Rows 28-40):

| Cell | Client | Health Score | Last Contact | Next Action | Owner |
|------|--------|--------------|--------------|-------------|-------|
| A28 | Client 1 | `=HEALTH_FORMULA` | [Date] | [Action] | [Name] |
| A29 | Client 2 | [Same pattern] | | | |
| [Continue for all clients] | | | | | |

**Health Score Formula:**
```
=IF(engagement>0.8,IF(revenue_growth>0,"🟢 Healthy","🟡 At Risk"),IF(engagement>0.5,"🟡 At Risk","🔴 Critical"))
```

---

## 📈 TAB 4: PERFORMANCE METRICS

### Project Performance (Rows 1-20):

| Cell | Metric | Target | Actual | Variance | Status |
|------|--------|--------|--------|----------|--------|
| A2 | On-Time Delivery | 95% | [Input] | `=C2-B2` | `=IF(C2>=B2,"✅","🔴")` |
| A3 | On-Budget Delivery | 90% | [Input] | `=C3-B3` | [Same] |
| A4 | Client Satisfaction | 4.5/5 | [Input] | `=C4-B4` | [Same] |
| A5 | Revision Rounds | <2 | [Input] | `=C5-B5` | `=IF(C5<=B5,"✅","🔴")` |
| A6 | Response Time | <4hrs | [Input] | `=C6-B6` | [Same] |

### Team Performance (Rows 23-40):

| Cell | Team Member | Utilization | Billable Hrs | Revenue Generated | Rating |
|------|-------------|-------------|--------------|-------------------|--------|
| A24 | Name 1 | [Input] | [Input] | [Input] | [1-5] |
| A25 | Name 2 | [Input] | [Input] | [Input] | [1-5] |
| [Continue for all team] | | | | | |
| A35 | **AVERAGE** | `=AVERAGE(C24:C34)` | `=SUM(D24:D34)` | `=SUM(E24:E34)` | `=AVERAGE(F24:F34)` |

### Marketing Performance (Rows 43-55):

| Cell | Channel | Leads | Cost | CPL | Conversion | Revenue |
|------|---------|-------|------|-----|------------|---------|
| A44 | Google Ads | [Input] | [Input] | `=D44/C44` | [Input] | [Input] |
| A45 | LinkedIn | [Input] | [Input] | `=D45/C45` | [Input] | [Input] |
| A46 | Content/SEO | [Input] | [Input] | `=D46/C46` | [Input] | [Input] |
| A47 | Referrals | [Input] | [Input] | `=D47/C47` | [Input] | [Input] |
| A48 | Social Media | [Input] | [Input] | `=D48/C48` | [Input] | [Input] |
| A49 | **TOTAL** | `=SUM(C44:C48)` | `=SUM(D44:D48)` | `=D49/C49` | [Weighted] | `=SUM(G44:G48)` |

---

## 💵 TAB 5: FINANCIAL METRICS

### Profit & Loss Summary (Rows 1-20):

| Cell | Category | This Month | Last Month | Variance | YTD |
|------|----------|------------|------------|----------|-----|
| A2 | REVENUE | | | | |
| A3 | Service Revenue | [Input] | [Input] | `=C3-B3` | [Sum] |
| A4 | Product Revenue | [Input] | [Input] | `=C4-B4` | [Sum] |
| A5 | Other Income | [Input] | [Input] | `=C5-B5` | [Sum] |
| A6 | **Total Revenue** | `=SUM(B3:B5)` | `=SUM(C3:C5)` | `=C6-B6` | `=SUM(D3:D5)` |
| A8 | EXPENSES | | | | |
| A9 | Salaries & Benefits | [Input] | [Input] | `=C9-B9` | [Sum] |
| A10 | Software & Tools | [Input] | [Input] | `=C10-B10` | [Sum] |
| A11 | Marketing | [Input] | [Input] | `=C11-B11` | [Sum] |
| A12 | Office & Admin | [Input] | [Input] | `=C12-B12` | [Sum] |
| A13 | Professional Services | [Input] | [Input] | `=C13-B13` | [Sum] |
| A14 | Other Expenses | [Input] | [Input] | `=C14-B14` | [Sum] |
| A15 | **Total Expenses** | `=SUM(B9:B14)` | `=SUM(C9:C14)` | `=C15-B15` | `=SUM(D9:D14)` |
| A17 | **NET PROFIT** | `=B6-B15` | `=C6-C15` | `=C17-B17` | `=D6-D15` |
| A18 | **Profit Margin** | `=B17/B6` | `=C17/C6` | `=C18-B18` | `=D17/D6` |

### Cash Flow Metrics (Rows 23-35):

| Cell | Metric | Value | Formula |
|------|--------|-------|---------|
| A23 | Cash on Hand | [Input] | |
| A24 | Accounts Receivable | [Input] | |
| A25 | Accounts Payable | [Input] | |
| A26 | Working Capital | `=B23+B24-B25` | |
| A27 | Days Cash on Hand | `=B23/(B15/30)` | |
| A28 | Burn Rate | [Input] | |
| A29 | Runway (Months) | `=IF(B28>0,B23/B28,"N/A")` | |

### Financial Ratios (Rows 38-48):

| Cell | Ratio | Value | Benchmark | Status |
|------|-------|-------|-----------|--------|
| A38 | Current Ratio | `=B23/B25` | >1.5 | `=IF(B38>=1.5,"✅","🔴")` |
| A39 | Quick Ratio | `=(B23+B24)/B25` | >1.0 | [Same] |
| A40 | Debt-to-Equity | [Input] | <0.5 | [Same] |
| A41 | Gross Margin | `=B17/B6` | >40% | [Same] |
| A42 | Net Margin | `=B17/B6` | >20% | [Same] |
| A43 | ROE | [Input] | >15% | [Same] |

---

## 🎯 TAB 6: GOALS & TARGETS

### Annual Goals:

| Cell | Goal | Target | YTD Actual | Progress | On Track? |
|------|------|--------|------------|----------|-----------|
| A2 | Revenue | $500,000 | [Input] | `=C2/B2` | `=IF(D2>=0.75,"✅","⚠️")` |
| A3 | Profit | $150,000 | [Input] | `=C3/B3` | [Same] |
| A4 | New Clients | 100 | [Input] | `=C4/B4` | [Same] |
| A5 | Retention Rate | 90% | [Input] | `=C5/B5` | [Same] |
| A6 | NPS Score | 50 | [Input] | `=C6/B6` | [Same] |
| A7 | Team Size | 15 | [Input] | `=C7/B7` | [Same] |

### Quarterly OKRs:

| Cell | Objective | Key Result | Target | Current | Status |
|------|-----------|------------|--------|---------|--------|
| A11 | O1: Grow Revenue | KR1: MRR to $50k | $50,000 | [Input] | [Formula] |
| A12 | | KR2: Close 10 enterprise | 10 | [Input] | [Formula] |
| A13 | O2: Improve Retention | KR1: Churn <5% | 5% | [Input] | [Formula] |
| A14 | | KR2: NPS >50 | 50 | [Input] | [Formula] |
| A15 | O3: Scale Team | KR1: Hire 3 AEs | 3 | [Input] | [Formula] |
| A16 | | KR2: 90% utilization | 90% | [Input] | [Formula] |

---

## 📤 TAB 7: REPORTS

### Weekly Report Template:

```
═══════════════════════════════════════════
        WEEKLY KPI REPORT
        Week of [DATE]
═══════════════════════════════════════════

KEY METRICS
─────────────────────────────────────────
Revenue (MTD):     $[Value]
vs. Target:        [Value]% ([✅/⚠️/🔴])
New Clients:       [Value]
Churn:             [Value]%
NPS:               [Value]

WINS THIS WEEK
─────────────────────────────────────────
• [Win 1]
• [Win 2]
• [Win 3]

BLOCKERS
─────────────────────────────────────────
• [Blocker 1]
• [Blocker 2]

FOCUS NEXT WEEK
─────────────────────────────────────────
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

═══════════════════════════════════════════
```

### Monthly Report Template:

```
═══════════════════════════════════════════
        MONTHLY KPI REPORT
        [MONTH] [YEAR]
═══════════════════════════════════════════

EXECUTIVE SUMMARY
─────────────────────────────────────────
Revenue:          $[Value] ([+/-]% vs. target)
Profit:           $[Value] ([+/-]% margin)
New Clients:      [Value] (Target: [Value])
Churn:            [Value]% (Target: [Value]%)
NPS:              [Value] (Target: [Value])

REVENUE BREAKDOWN
─────────────────────────────────────────
New Business:     $[Value] ([+/-]%)
Recurring:        $[Value] ([+/-]%)
One-Time:         $[Value] ([+/-]%)

CLIENT METRICS
─────────────────────────────────────────
Active Clients:   [Value]
Added:            [Value]
Lost:             [Value]
Retention:        [Value]%

TEAM METRICS
─────────────────────────────────────────
Utilization:      [Value]%
Billable Hours:   [Value]
Revenue/Head:     $[Value]

TOP 3 PRIORITIES - NEXT MONTH
─────────────────────────────────────────
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

═══════════════════════════════════════════
```

---

## ⚙️ AUTOMATION SETUP

### Google Apps Script for Auto-Email Reports:

```javascript
function sendWeeklyKPIReport() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var dashboardSheet = spreadsheet.getSheetByName("Executive Dashboard");
  
  // Get KPI values
  var revenue = dashboardSheet.getRange("B5").getValue();
  var margin = dashboardSheet.getRange("B6").getValue();
  var clients = dashboardSheet.getRange("B7").getValue();
  var churn = dashboardSheet.getRange("B8").getValue();
  
  // Create email body
  var subject = "Weekly KPI Report - " + Utilities.formatDate(new Date(), "GMT", "MMM dd, yyyy");
  var body = `
    Weekly KPI Summary
    
    Revenue: $${revenue}
    Profit Margin: ${(margin * 100).toFixed(1)}%
    Active Clients: ${clients}
    Churn Rate: ${(churn * 100).toFixed(1)}%
    
    View full dashboard: ${spreadsheet.getUrl()}
  `;
  
  // Send email
  MailApp.sendEmail({
    to: "team@company.com",
    subject: subject,
    body: body
  });
}

// Create weekly trigger
function createWeeklyTrigger() {
  ScriptApp.newTrigger('sendWeeklyKPIReport')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(9)
    .create();
}
```

---

## ✅ BUILD CHECKLIST

- [ ] Create all 7 tabs with exact names
- [ ] Enter all formulas correctly
- [ ] Set up data validation
- [ ] Apply conditional formatting
- [ ] Create all charts
- [ ] Test with sample data
- [ ] Set up email automation
- [ ] Share with team
- [ ] Create mobile-friendly view
- [ ] Document all metrics definitions

---

**Template Version:** 1.0
**Compatible:** Google Sheets (all versions)
**Created:** March 2026
