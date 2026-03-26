# Revenue Dashboard - Google Sheets Template

## 📊 Complete Revenue Tracking System

**Create this comprehensive dashboard in Google Sheets:**

---

## Sheet Structure

### Tab 1: "Dashboard" (Main View)

```
A1: REVENUE DASHBOARD 2026
A3: Last Updated: =TODAY()

A5: 📈 MONTHLY OVERVIEW
A6: Month | Revenue | Expenses | Profit | Margin | vs Last Month
A7: January | =SUMIFS(Transactions!B:B,Transactions!A:A,">="&DATE(2026,1,1),Transactions!A:A,"<="&DATE(2026,1,31)) | =SUMIFS(Transactions!C:C,Transactions!A:A,">="&DATE(2026,1,1),Transactions!A:A,"<="&DATE(2026,1,31)) | =B7-C7 | =IF(B7>0,D7/B7,"") | =B7-B6
[Continue for each month]

A19: 📊 YEAR-TO-DATE
A20: Total Revenue: =SUM(B7:B18)
A21: Total Expenses: =SUM(C7:C18)
A22: Total Profit: =B20-B21
A23: Average Margin: =AVERAGE(D7:D18)
A24: Best Month: =INDEX(A7:A18,MATCH(MAX(D7:D18),D7:D18,0))
A25: Worst Month: =INDEX(A7:A18,MATCH(MIN(D7:D18),D7:D18,0))

A27: 💰 REVENUE BY STREAM
A28: Stream | YTD Revenue | % of Total | Monthly Avg | Trend
A29: GEO SEO Services | =SUMIFS(Transactions!B:B,Transactions!D:D,"GEO SEO") | =B29/$B$20 | =B29/3 | [Sparkline]
A30: Consulting | =SUMIFS(Transactions!B:B,Transactions!D:D,"Consulting") | =B30/$B$20 | =B30/3 | [Sparkline]
A31: Content Services | =SUMIFS(Transactions!B:B,Transactions!D:D,"Content") | =B31/$B$20 | =B31/3 | [Sparkline]
A32: Tools/Products | =SUMIFS(Transactions!B:B,Transactions!D:D,"Products") | =B32/$B$20 | =B32/3 | [Sparkline]
A33: Other | =SUMIFS(Transactions!B:B,Transactions!D:D,"Other") | =B33/$B$20 | =B33/3 | [Sparkline]

A35: 🎯 GOALS TRACKING
A36: Monthly Goal: [Input: e.g., 10000]
A37: Current Month Revenue: [Link to current month]
A38: Progress: =B37/B36
A39: Days Remaining: =EOMONTH(TODAY(),0)-TODAY()
A40: Daily Target: =(B36-B37)/B39

A42: 📉 EXPENSE BREAKDOWN
A43: Category | Amount | % of Revenue
A44: Software/Tools | =SUMIFS(Transactions!C:C,Transactions!E:E,"Software") | =B44/$B$20
A45: Contractors | =SUMIFS(Transactions!C:C,Transactions!E:E,"Contractors") | =B45/$B$20
A46: Marketing | =SUMIFS(Transactions!C:C,Transactions!E:E,"Marketing") | =B46/$B$20
A47: Operations | =SUMIFS(Transactions!C:C,Transactions!E:E,"Operations") | =B47/$B$20
A48: Taxes | =SUMIFS(Transactions!C:C,Transactions!E:E,"Taxes") | =B48/$B$20

A50: 🔮 FORECAST (Next 3 Months)
A51: Month | Projected Revenue | Confidence
A52: April | =AVERAGE(B7:B9)*1.1 | Medium
A53: May | =AVERAGE(B7:B9)*1.15 | Medium
A54: June | =AVERAGE(B7:B9)*1.2 | Low
```

### Tab 2: "Transactions" (Data Entry)

```
A1: DATE | B1: AMOUNT | C1: EXPENSE | D1: REVENUE STREAM | E1: EXPENSE CATEGORY | F1: CLIENT/PROJECT | G1: PAYMENT METHOD | H1: STATUS | I1: NOTES

Row 2+: [Data entry rows]
Example:
A2: 2026-03-15 | B2: 2500 | C2: [blank] | D2: GEO SEO | E2: [blank] | F2: ABC Corp | G2: Stripe | H2: Paid | I2: Monthly retainer
A3: 2026-03-16 | B3: [blank] | C3: 99 | D3: [blank] | E3: Software | F3: Ahrefs | G3: Credit Card | H3: Paid | I3: Monthly subscription
```

**Data Validation:**

**Column D (Revenue Stream):**
- Data → Data Validation
- List: GEO SEO, Consulting, Content Services, Tools/Products, Affiliate, Other

**Column E (Expense Category):**
- Data → Data Validation
- List: Software, Contractors, Marketing, Operations, Taxes, Equipment, Other

**Column G (Payment Method):**
- Data → Data Validation
- List: Stripe, PayPal, Bank Transfer, Credit Card, Cash, Check, Wise

**Column H (Status):**
- Data → Data Validation
- List: Pending, Paid, Overdue, Refunded

---

### Tab 3: "Clients"

```
A1: CLIENT | B1: INDUSTRY | C1: MONTHLY VALUE | D1: START DATE | E1: STATUS | F1: LTV | G1: LAST PAYMENT | H1: NEXT PAYMENT | I1: NOTES

Example:
A2: ABC Corp | B2: Healthcare | C2: 2500 | D2: 2026-01-01 | E2: Active | F2: =C2*12 | G2: 2026-03-15 | H2: 2026-04-15 | I2: Great client, pays on time
```

**Formulas:**
- F2 (LTV): `=C2*12` (or customize based on avg contract length)
- Auto-sort by Monthly Value (descending)

---

### Tab 4: "Invoices"

```
A1: INVOICE # | B1: CLIENT | C1: AMOUNT | D1: DATE SENT | E1: DUE DATE | F1: STATUS | G1: DATE PAID | H1: DAYS OUTSTANDING | I1: NOTES

Example:
A2: INV-2026-001 | B2: ABC Corp | C2: 2500 | D2: 2026-03-01 | E2: 2026-03-15 | F2: Paid | G2: 2026-03-14 | H2: =IF(F2="Paid",G2-E2,TODAY()-E2) | I2: Paid early
```

**Conditional Formatting for Status:**
- Paid: Green background
- Pending: Yellow background
- Overdue: Red background (when TODAY() > E2 and F2 ≠ "Paid")

---

### Tab 5: "Analytics"

```
A1: KEY METRICS

A3: Revenue Metrics
A4: MRR (Monthly Recurring Revenue): =SUMIFS(Transactions!B:B,Transactions!H:H,"Paid",Transactions!D:D,"GEO SEO")
A5: ARR (Annual Run Rate): =B4*12
A6: Average Deal Size: =AVERAGEIF(Transactions!B:B,">0",Transactions!B:B)
A7: Revenue Growth Rate: =(B4-OFFSET(B4,-1,0))/OFFSET(B4,-1,0)

A9: Profit Metrics
A10: Gross Profit Margin: ='Dashboard'!B22/'Dashboard'!B20
A11: Net Profit Margin: [Calculate after all expenses]
A12: Profit Per Client: ='Dashboard'!B22/COUNTA(Clients!A:A)

A14: Client Metrics
A15: Total Active Clients: =COUNTIF(Clients!E:E,"Active")
A16: Client Churn Rate: [Manual entry or formula based on lost clients]
A17: Average Client Lifespan: =AVERAGE(Clients!F:F)/AVERAGE(Clients!C:C)
A18: Client Acquisition Cost: =SUMIFS(Transactions!C:C,Transactions!E:E,"Marketing")/NEW_CLIENTS_THIS_PERIOD

A20: Cash Flow
A21: Accounts Receivable: =SUMIFS(Invoices!C:C,Invoices!F:F,"Pending")
A22: Accounts Payable: [Manual entry or link to expense tracking]
A23: Cash on Hand: [Manual entry or integrate with bank]
A24: Runway (months): =B23/AVERAGE('Dashboard'!C7:C18)
```

---

### Tab 6: "Goals & Projections"

```
A1: 2026 REVENUE GOALS

A3: Monthly Targets
A4: Month | Target | Actual | Variance | % to Goal
A5: January | 8000 | [Actual] | =C5-B5 | =C5/B5
[Continue for each month]

A17: Quarterly Goals
A18: Q1 Target: =SUM(B5:B7)
A19: Q1 Actual: =SUM(C5:C7)
A20: Q1 Variance: =B19-A19

A22: Annual Goal: [Input: e.g., 120000]
A23: YTD Actual: ='Dashboard'!B20
A24: Remaining: =B22-B23
A25: % Complete: =B23/B22
A26: On Track? =IF(B25>=(MONTH(TODAY())/12),"✅ Yes","❌ No")

A28: Projections
A29: Conservative (0% growth): =B4*12
A30: Moderate (10% growth): =B4*12*1.1
A31: Aggressive (25% growth): =B4*12*1.25
```

---

## 🎨 Formatting & Styling

### Color Scheme:
```
Headers: #4285F4 (Blue)
Revenue: #34A853 (Green)
Expenses: #EA4335 (Red)
Profit: #1A73E8 (Blue)
Warnings: #FBBC04 (Yellow)
```

### Conditional Formatting Rules:

**Revenue Values (Positive):**
- Format → Conditional Formatting
- Custom formula: `=B2>0`
- Style: Green text, bold

**Expense Values:**
- Custom formula: `=C2>0`
- Style: Red text

**Profit Margin:**
- < 20%: Red background
- 20-40%: Yellow background
- > 40%: Green background

**Overdue Invoices:**
- Custom formula: `=AND($F2<>"Paid",TODAY()>$E2)`
- Style: Red background, white text

---

## 📊 Charts to Add

### Chart 1: Revenue Trend (Line Chart)
```
Data: A7:B18 (Month, Revenue)
Type: Line chart
Title: "Monthly Revenue Trend"
Show data labels: Yes
```

### Chart 2: Revenue by Stream (Pie Chart)
```
Data: A29:B33 (Stream, Amount)
Type: Pie chart
Title: "Revenue Breakdown by Stream"
Show percentages: Yes
```

### Chart 3: Profit Margin (Gauge)
```
Data: Dashboard!B23 (Average Margin)
Type: Gauge chart
Min: 0, Max: 100
Green zone: 40-100
Yellow zone: 20-40
Red zone: 0-20
```

### Chart 4: Expenses by Category (Bar Chart)
```
Data: A44:B48 (Category, Amount)
Type: Column chart
Title: "Expense Breakdown"
```

### Chart 5: Goal Progress (Bullet Chart)
```
Data: Current Month Revenue vs Target
Type: Column + Target line
Title: "Monthly Goal Progress"
```

---

## 🔗 Embed Codes

### For Website/Client Portal

```html
<!-- Revenue Dashboard Widget -->
<div class="revenue-widget" style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
  
  <h2 style="color: #333; text-align: center;">📊 Revenue Dashboard</h2>
  
  <!-- KPI Cards -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <h3 style="margin: 0; opacity: 0.9; font-size: 14px;">MRR</h3>
      <p id="mrr" style="margin: 10px 0 0 0; font-size: 32px; font-weight: bold;">$8,500</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <h3 style="margin: 0; opacity: 0.9; font-size: 14px;">Monthly Revenue</h3>
      <p id="revenue" style="margin: 10px 0 0 0; font-size: 32px; font-weight: bold;">$12,350</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <h3 style="margin: 0; opacity: 0.9; font-size: 14px;">Profit Margin</h3>
      <p id="margin" style="margin: 10px 0 0 0; font-size: 32px; font-weight: bold;">42%</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <h3 style="margin: 0; opacity: 0.9; font-size: 14px;">Active Clients</h3>
      <p id="clients" style="margin: 10px 0 0 0; font-size: 32px; font-weight: bold;">7</p>
    </div>
    
  </div>
  
  <!-- Google Sheets Embed -->
  <div style="margin-top: 30px;">
    <iframe 
      src="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml?widget=true&headers=false&range=Dashboard!A1:E50" 
      style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 8px;"
      frameborder="0">
    </iframe>
  </div>
  
  <script>
    // Optional: Fetch live data from Google Sheets API
    async function fetchRevenueData() {
      // Implementation depends on your backend
      // Update KPI cards with live data
    }
  </script>
  
</div>
```

---

## 📝 Customization Guide

### For Different Business Models:

**Freelancer/Solo:**
- Simplify to 3 tabs: Transactions, Dashboard, Invoices
- Track by project instead of client
- Focus on hourly rate and utilization

**Agency (5-20 clients):**
- Full template as designed
- Add team member tracking
- Track by service line
- Monitor client profitability

**Product + Service:**
- Add "Product Sales" revenue stream
- Track COGS (Cost of Goods Sold)
- Separate recurring vs one-time revenue
- Inventory tracking tab

**E-commerce:**
- Add daily sales tracking
- Track by product category
- Monitor AOV (Average Order Value)
- Add conversion rate metrics

### For Different Stages:

**Pre-Revenue:**
- Focus on projections and burn rate
- Track runway meticulously
- Monitor cash flow weekly

**Early Revenue ($1-10k/mo):**
- Focus on MRR growth
- Track client acquisition cost
- Monitor profit margins

**Growth Stage ($10-50k/mo):**
- Add department-level tracking
- Monitor unit economics
- Track LTV:CAC ratio

**Scale ($50k+/mo):**
- Add forecasting models
- Scenario planning
- Board-level reporting
- Integrate with accounting software

---

## 🎯 Usage Instructions

### Daily (5 minutes):
1. Enter new transactions
2. Update invoice statuses
3. Check accounts receivable

### Weekly (15 minutes):
1. Review cash flow
2. Follow up on overdue invoices
3. Update pipeline/projections

### Monthly (30 minutes):
1. Reconcile all transactions
2. Review vs. goals
3. Update forecasts
4. Send client invoices
5. Pay contractors/expenses

### Quarterly (1 hour):
1. Deep dive analytics
2. Adjust goals if needed
3. Review pricing
4. Plan next quarter
5. Tax preparation

---

## 💡 Pro Tips

1. **Automation:**
   - Use Zapier to auto-add Stripe transactions
   - Connect PayPal for automatic payment tracking
   - Set up email reminders for invoice due dates
   - Auto-categorize recurring expenses

2. **Best Practices:**
   - Enter transactions same-day
   - Reconcile weekly (don't let it pile up)
   - Keep personal and business separate
   - Back up monthly (File → Download → Excel)

3. **Tax Prep:**
   - Tag all tax-deductible expenses
   - Export quarterly for accountant
   - Track mileage separately
   - Save receipts in Google Drive folder

4. **Client Profitability:**
   - Track time spent per client
   - Calculate effective hourly rate
   - Identify your best/worst clients
   - Raise prices on underpaying clients

5. **Goal Setting:**
   - Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)
   - Review progress weekly
   - Adjust tactics monthly
   - Celebrate wins!

---

## 📋 Quick Start Formulas

**Calculate MRR:**
```
=SUMIFS(Transactions!B:B, Transactions!H:H, "Paid", Transactions!D:D, "GEO SEO")
```

**Calculate Growth Rate:**
```
=(Current_Month - Previous_Month) / Previous_Month
```

**Calculate Runway:**
```
=Cash_on_Hand / Average_Monthly_Burn
```

**Calculate LTV:**
```
=Average_Monthly_Value × Average_Client_Lifespan_Months
```

**Calculate Profit Margin:**
```
=(Revenue - Expenses) / Revenue
```

---

## 🚀 Template Links

**Option 1: Build from Scratch**
- Follow structure above
- Takes 2-3 hours
- Fully customized

**Option 2: Use Google Sheets Template Gallery**
- Search "Business Revenue"
- Customize for your needs
- Takes 30-60 minutes

**Option 3: Pre-Built Template**
- Create sheet with structure above
- Share as template with clients
- One-time setup, infinite use

---

## 📧 Integration Options

**Stripe:**
- Use Stripe Dashboard export
- Or Zapier: New Payment → Google Sheets row

**PayPal:**
- Download CSV monthly
- Import to Transactions tab
- Or use Zapier integration

**QuickBooks/Xero:**
- Export P&L monthly
- Reconcile with this dashboard
- Use this for forward-looking, QB for historical

**Bank Feeds:**
- Some banks offer Google Sheets integration
- Auto-import transactions
- Categorize manually

---

*Tool Version: 1.0 | Last Updated: 2026-03-21 | Compatible: Google Sheets (Free)*
