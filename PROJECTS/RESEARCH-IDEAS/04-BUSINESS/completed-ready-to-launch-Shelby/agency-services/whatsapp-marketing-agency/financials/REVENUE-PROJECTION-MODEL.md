# Revenue Projections - Spreadsheet Model

## 📊 How to Use This Model

This document outlines the structure for building your financial projection spreadsheet. Create this in Excel, Google Sheets, or similar.

---

## 📁 Sheet 1: Assumptions

### Input Variables (Blue cells - change these)

**PRICING:**
| Variable | Cell | Value |
|----------|------|-------|
| Average Contract Value (ACV) | B2 | $6,500 |
| Price Increase % (annual) | B3 | 5% |
| Message Cost per Contact | B4 | $0.04 |
| BSP Cost per User | B5 | $100 |

**ACQUISITION:**
| Variable | Cell | Value |
|----------|------|-------|
| CAC (Customer Acquisition Cost) | B8 | $1,200 |
| Sales Cycle (days) | B9 | 45 |
| Close Rate (%) | B10 | 30% |
| Monthly Leads | B11 | 100 |

**RETENTION:**
| Variable | Cell | Value |
|----------|------|-------|
| Monthly Churn Rate | B14 | 2.5% |
| Customer Lifespan (months) | B15 | 48 |
| Expansion Revenue Rate | B16 | 10% |

**OPERATING:**
| Variable | Cell | Value |
|----------|------|-------|
| Gross Margin % | B19 | 65% |
| Fixed Costs (monthly) | B20 | $15,000 |
| Team Size (Year 1) | B21 | 3 |
| Team Cost per Person | B22 | $5,000 |

---

## 📁 Sheet 2: Monthly Projections (36 Months)

### Columns:
A: Month Number
B: Month Name
C: Starting Clients
D: New Clients Acquired
E: Clients Lost to Churn
F: Ending Clients
G: Monthly Revenue
H: Cost of Goods Sold
I: Gross Profit
J: Operating Expenses
K: Net Income
L: Cumulative Cash Flow

### Formulas:

```excel
D2 (New Clients) = Monthly Leads * Close Rate / 100
E2 (Churned) = C2 * Monthly Churn Rate / 100
F2 (Ending) = C2 + D2 - E2
G2 (Revenue) = F2 * ACV
H2 (COGS) = G2 * (1 - Gross Margin / 100)
I2 (Gross Profit) = G2 - H2
J2 (OpEx) = Fixed Costs + (Team Size * Team Cost)
K2 (Net Income) = I2 - J2
L2 (Cumulative) = Previous Cumulative + K2
```

### Copy down for 36 months

---

## 📁 Sheet 3: Quarterly Summary

### Structure:
| Quarter | Clients (Start) | Clients (End) | Revenue | Expenses | Net Income | Margin |
|---------|-----------------|---------------|---------|----------|------------|--------|
| Q1 Y1 | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] |
| Q2 Y1 | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] |
| ... | ... | ... | ... | ... | ... | ... |

### Formulas:
```excel
Clients (Start) = Previous Quarter's Clients (End)
Revenue = SUM of 3 monthly revenues in quarter
Expenses = SUM of 3 monthly expenses in quarter
Net Income = SUM of 3 monthly net income in quarter
Margin = Net Income / Revenue
```

---

## 📁 Sheet 4: Key Metrics Dashboard

### Metrics to Track:

| Metric | Formula | Year 1 | Year 2 | Year 3 |
|--------|---------|--------|--------|--------|
| **MRR (End of Period)** | Last month's revenue | [Formula] | [Formula] | [Formula] |
| **ARR** | MRR * 12 | [Formula] | [Formula] | [Formula] |
| **Total Clients** | End of period count | [Formula] | [Formula] | [Formula] |
| **Gross Margin %** | Gross Profit / Revenue | [Formula] | [Formula] | [Formula] |
| **Net Margin %** | Net Income / Revenue | [Formula] | [Formula] | [Formula] |
| **CAC** | Total Sales Expenses / New Clients | [Formula] | [Formula] | [Formula] |
| **LTV** | Avg. Revenue per Client * Lifespan | [Formula] | [Formula] | [Formula] |
| **LTV:CAC Ratio** | LTV / CAC | [Formula] | [Formula] | [Formula] |
| **Payback Period (months)** | CAC / Monthly Profit per Client | [Formula] | [Formula] | [Formula] |
| **Churn Rate** | Clients Lost / Starting Clients | [Formula] | [Formula] | [Formula] |
| **Revenue Growth (YoY)** | (This Year - Last Year) / Last Year | [Formula] | [Formula] | [Formula] |

---

## 📁 Sheet 5: Break-Even Analysis

### Fixed Costs:
| Cost Type | Monthly Amount |
|-----------|----------------|
| Software/Tools | [Amount] |
| Marketing | [Amount] |
| Office/Remote | [Amount] |
| Admin/Overhead | [Amount] |
| **Total Fixed** | [SUM] |

### Contribution Margin:
| Metric | Value |
|--------|-------|
| Avg. Revenue per Client | [ACV] |
| Variable Cost per Client | [COGS] |
| Contribution Margin per Client | [Revenue - Variable Cost] |

### Break-Even Point:
```excel
Break-Even Clients = Total Fixed Costs / Contribution Margin per Client
```

### Visual Chart:
Create a chart showing:
- X-axis: Number of Clients
- Y-axis: Dollars
- Line 1: Total Revenue (sloped line)
- Line 2: Total Costs (fixed + variable)
- Intersection point = Break-Even

---

## 📁 Sheet 6: Scenario Analysis

### Three Scenarios:

| Metric | Conservative | Realistic | Optimistic |
|--------|--------------|-----------|------------|
| Monthly Leads | [50% of base] | [Base] | [150% of base] |
| Close Rate | [20%] | [30%] | [40%] |
| ACV | [$5,000] | [$6,500] | [$8,000] |
| Churn Rate | [5%] | [2.5%] | [1.5%] |
| CAC | [$2,000] | [$1,200] | [$800] |
| **Year 1 Revenue** | [Formula] | [Formula] | [Formula] |
| **Year 2 Revenue** | [Formula] | [Formula] | [Formula] |
| **Year 3 Revenue** | [Formula] | [Formula] | [Formula] |
| **Year 1 Net Income** | [Formula] | [Formula] | [Formula] |
| **Year 3 Net Income** | [Formula] | [Formula] | [Formula] |

### Sensitivity Analysis:
Create data tables showing how changes in key assumptions affect:
- Year 3 Revenue
- Year 3 Net Income
- Break-Even Point

---

## 📁 Sheet 7: Cash Flow Projection

### Monthly Cash Flow:
| Month | Cash In | Cash Out | Net Cash Flow | Cumulative Cash | Cash Balance |
|-------|---------|----------|---------------|-----------------|--------------|
| Month 1 | [Revenue] | [Expenses] | [In - Out] | [Cumulative] | [Balance] |
| Month 2 | [Revenue] | [Expenses] | [In - Out] | [Cumulative] | [Balance] |
| ... | ... | ... | ... | ... | ... |

### Funding Requirements:
| Period | Cash Needed | Funding Source | Amount |
|--------|-------------|----------------|--------|
| Months 1-3 | [Amount] | Personal Savings | [Amount] |
| Months 4-6 | [Amount] | Business Loan | [Amount] |
| Months 7-12 | [Amount] | Revenue | [Amount] |

---

## 📁 Sheet 8: Unit Economics

### Customer Economics:
| Metric | Value |
|--------|-------|
| Average Revenue per User (ARPU) | [ACV] |
| Average Cost to Acquire (CAC) | [CAC] |
| Average Lifespan (months) | [Lifespan] |
| Lifetime Revenue | [ARPU * Lifespan] |
| Lifetime Cost (COGS) | [COGS per month * Lifespan] |
| Lifetime Profit | [Lifetime Revenue - Lifetime Cost - CAC] |
| LTV | [Lifetime Profit + CAC] |
| LTV:CAC Ratio | [LTV / CAC] |

### Payback Analysis:
| Metric | Value |
|--------|-------|
| CAC | [CAC] |
| Monthly Profit per Client | [Revenue - COGS - Allocated OpEx] |
| Payback Period (months) | [CAC / Monthly Profit] |
| Payback Period (days) | [Months * 30] |

---

## 📁 Sheet 9: Revenue by Service Type

### Service Mix Assumptions:
| Service | % of Revenue | ACV Contribution |
|---------|--------------|------------------|
| Broadcast Campaigns | 40% | [Calc] |
| Chatbot Automation | 30% | [Calc] |
| Customer Support | 20% | [Calc] |
| Other Services | 10% | [Calc] |

### Monthly Breakdown:
| Month | Broadcast | Chatbot | Support | Other | Total |
|-------|-----------|---------|---------|-------|-------|
| Month 1 | [Formula] | [Formula] | [Formula] | [Formula] | [SUM] |
| Month 2 | [Formula] | [Formula] | [Formula] | [Formula] | [SUM] |
| ... | ... | ... | ... | ... | ... |

---

## 📁 Sheet 10: Client Churn Analysis

### Churn Tracking:
| Month | Starting Clients | New Clients | Churned Clients | Ending Clients | Churn Rate |
|-------|------------------|-------------|-----------------|----------------|------------|
| Month 1 | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] |
| Month 2 | [Formula] | [Formula] | [Formula] | [Formula] | [Formula] |
| ... | ... | ... | ... | ... | ... |

### Cohort Analysis:
| Cohort (Month Acquired) | Clients Acquired | Retained after 3mo | Retained after 6mo | Retained after 12mo | Retention Rate |
|-------------------------|------------------|-------------------|-------------------|-------------------|----------------|
| Month 1 | [Number] | [Number] | [Number] | [Number] | [Formula] |
| Month 2 | [Number] | [Number] | [Number] | [Number] | [Formula] |
| ... | ... | ... | ... | ... | ... |

---

## 📊 Charts to Create

### 1. Revenue Growth Chart
- Line chart showing monthly revenue over 36 months
- Show Year 1, Year 2, Year 3 separately

### 2. Client Growth Chart
- Line chart showing client count over time
- Overlay with churn rate

### 3. Profitability Chart
- Bar chart showing monthly net income
- Line overlay showing cumulative profit

### 4. Unit Economics Dashboard
- Pie chart showing revenue by service type
- Bar chart showing LTV:CAC ratio over time

### 5. Break-Even Visualization
- Chart showing when cumulative cash flow turns positive

---

## 🔧 Advanced Features

### Scenario Toggle:
Create dropdown menus to switch between scenarios (Conservative/Realistic/Optimistic) that automatically update all projections.

### Sensitivity Analysis:
Use data tables to show how changes in 2-3 key variables affect Year 3 revenue.

### Goal Seek:
Use Excel's Goal Seek to determine:
- How many clients needed to reach $X revenue?
- What CAC is required to achieve Y% margin?
- What churn rate keeps us profitable?

### Dashboard:
Create a one-page summary dashboard with:
- Key metrics at top
- Charts for trends
- Alerts for metrics out of range
- Links to detailed sheets

---

## 📋 Formulas Reference

```excel
# Client Calculations
Ending Clients = Starting Clients + New Clients - Churned Clients
Churned Clients = Starting Clients * Churn Rate
New Clients = Leads * Close Rate / 100

# Revenue Calculations
Monthly Revenue = Ending Clients * ACV
Quarterly Revenue = SUM(3 Monthly Revenues)
Annual Revenue = SUM(12 Monthly Revenues)

# Cost Calculations
COGS = Revenue * (1 - Gross Margin / 100)
Operating Expenses = Fixed Costs + (Team Size * Team Cost)
Net Income = Gross Profit - Operating Expenses

# Ratio Calculations
LTV = ARPU * Customer Lifespan
LTV:CAC = LTV / CAC
Payback Period = CAC / Monthly Profit per Client
Margin = Net Income / Revenue * 100

# Growth Calculations
MoM Growth = (This Month - Last Month) / Last Month * 100
YoY Growth = (This Year - Last Year) / Last Year * 100
```

---

## ✅ Checklist for Building

```
□ Create all 10 sheets
□ Input all assumptions
□ Build monthly projections (36 months)
□ Create quarterly summary
□ Build key metrics dashboard
□ Create break-even analysis
□ Set up scenario analysis
□ Build cash flow projection
□ Calculate unit economics
□ Create revenue by service breakdown
□ Build churn analysis
□ Create all charts
□ Add scenario toggle
□ Build dashboard summary
□ Test all formulas
□ Add data validation
□ Format for readability
□ Add comments/documentation
□ Save as template
```

---

## 📞 Support

For help building this model:
- Excel: File → New → Search "Financial Model"
- Google Sheets: File → New → From template → Business
- Or use the formulas above to build from scratch

---

*This model provides a framework. Adjust assumptions based on your specific market, pricing, and goals.*
