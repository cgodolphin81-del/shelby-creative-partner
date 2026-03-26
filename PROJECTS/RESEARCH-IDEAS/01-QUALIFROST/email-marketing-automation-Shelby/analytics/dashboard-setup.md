# Email Analytics Dashboard - Google Sheets Setup

Complete instructions for building a comprehensive email marketing analytics dashboard in Google Sheets.

---

## Dashboard Overview

This dashboard tracks:
- Campaign performance (opens, clicks, conversions)
- List growth and health
- Revenue attribution
- Subscriber engagement trends
- A/B test results

---

## Step 1: Create New Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create new spreadsheet
3. Name it: `Email Marketing Dashboard - [Client/Company Name]`
4. Create the following tabs (sheets):

```
Tabs to Create:
├── 📊 Dashboard (main view)
├── 📧 Campaigns (raw data)
├── 👥 Subscribers (list health)
├── 💰 Revenue (conversions)
├── 🧪 A/B Tests (test results)
├── 📅 Monthly Summary (aggregated)
└── ⚙️ Settings (configurations)
```

---

## Step 2: Set Up Each Tab

### Tab 1: 📧 Campaigns (Raw Data)

**Columns:**

| Column | Header | Formula/Notes |
|--------|--------|---------------|
| A | Campaign ID | Unique identifier |
| B | Campaign Name | From ESP |
| C | Send Date | Date sent |
| D | Send Time | Time sent |
| E | List/Segment | Target audience |
| F | Sent Count | Total emails sent |
| G | Delivered Count | =F2 - H2 - I2 |
| H | Bounce Count | Hard + soft bounces |
| I | Unsubscribe Count | From ESP |
| J | Open Count | Unique opens |
| K | Open Rate % | =J2/G2 |
| L | Click Count | Unique clicks |
| M | Click Rate % | =L2/G2 |
| N | Click-to-Open % | =L2/J2 |
| O | Conversion Count | Purchases/signups |
| P | Conversion Rate % | =O2/G2 |
| Q | Revenue | Total attributed revenue |
| R | Revenue per Email | =Q2/G2 |
| S | Notes | Campaign notes |

**Format:**
- Format columns K, M, N, P as Percentage (1 decimal)
- Format columns Q, R as Currency
- Add conditional formatting: Green for above average, red for below

---

### Tab 2: 👥 Subscribers (List Health)

**Columns:**

| Column | Header | Formula/Notes |
|--------|--------|---------------|
| A | Date | End of day date |
| B | Total Subscribers | From ESP |
| C | New Subscribers | Daily additions |
| D | Unsubscribes | Daily removals |
| E | Bounces | Daily bounces |
| F | Net Growth | =C2 - D2 - E2 |
| G | Growth Rate % | =F2/B1 (previous day total) |
| H | Active (30-day) | Opened in last 30 days |
| I | Active % | =H2/B2 |
| J | Inactive (90-day) | No opens in 90 days |
| K | Inactive % | =J2/B2 |

**Weekly Summary Section (below data):**

| Metric | Formula |
|--------|---------|
| Week Start Total | =B2 (first day of week) |
| Week End Total | =B8 (last day of week) |
| Net Growth | =Week End - Week Start |
| Avg Daily Growth | =Net Growth / 7 |
| Total Unsubscribes | =SUM(D2:D8) |
| Unsubscribe Rate | =Total Unsubscribes / Week Start |

---

### Tab 3: 📊 Dashboard (Main View)

**Section 1: Key Metrics (Current Month)**

Create a summary table at the top:

| Metric | This Month | Last Month | Change % |
|--------|------------|------------|----------|
| Emails Sent | =SUMIFS(Campaigns!F:F, Campaigns!C:C, ">="&EOMONTH(TODAY(),-1)+1, Campaigns!C:C, "<="&EOMONTH(TODAY(),0)) | =SUMIFS(...) previous month | =(This-Last)/Last |
| Avg Open Rate | =AVERAGEIFS(Campaigns!K:K, ...) | ... | ... |
| Avg Click Rate | =AVERAGEIFS(Campaigns!M:M, ...) | ... | ... |
| Total Revenue | =SUMIFS(Campaigns!Q:Q, ...) | ... | ... |
| New Subscribers | =SUM(Subscribers!C:C) for month | ... | ... |
| Unsubscribe Rate | =SUM(Subscribers!D:D) / Total | ... | ... |

**Section 2: Charts**

1. **Open Rate Trend (Line Chart)**
   - Data: Campaigns tab, Send Date vs Open Rate %
   - Time period: Last 90 days
   
2. **Click Rate Trend (Line Chart)**
   - Data: Campaigns tab, Send Date vs Click Rate %
   
3. **List Growth (Area Chart)**
   - Data: Subscribers tab, Date vs Total Subscribers
   
4. **Revenue by Campaign (Bar Chart)**
   - Data: Campaigns tab, Campaign Name vs Revenue
   - Sort: Descending

**Section 3: Top Performing Campaigns**

Create a table showing top 5 campaigns by:
- Open Rate
- Click Rate
- Revenue

Use formula: `=SORT(FILTER(Campaigns!B:R, Campaigns!K:K>0), 11, FALSE)`

---

### Tab 4: 💰 Revenue (Conversions)

**Columns:**

| Column | Header | Notes |
|--------|--------|-------|
| A | Date | Conversion date |
| B | Campaign ID | Link to campaign |
| C | Campaign Name | VLOOKUP from Campaigns |
| D | Customer Email | From conversion |
| E | Product/Service | What was purchased |
| F | Order Value | $ amount |
| G | Attribution Model | First-click, last-click, etc. |
| H | Notes | Additional context |

**Summary Metrics:**

| Metric | Formula |
|--------|---------|
| Total Revenue (MTD) | =SUMIFS(F:F, A:A, ">="&EOMONTH(TODAY(),-1)+1) |
| Avg Order Value | =AVERAGE(F:F) |
| Conversions (MTD) | =COUNTIFS(A:A, ">="&EOMONTH(TODAY(),-1)+1) |
| Revenue per Email | =Total Revenue / Emails Sent |
| ROI | =(Revenue - Cost) / Cost |

---

### Tab 5: 🧪 A/B Tests

**Columns:**

| Column | Header | Notes |
|--------|--------|-------|
| A | Test ID | Unique identifier |
| B | Test Name | Description |
| C | Test Date | When test ran |
| D | Variable Tested | Subject, CTA, send time, etc. |
| E | Variant A Name | Description of A |
| F | Variant A Sent | Count |
| G | Variant A Opens | Count |
| H | Variant A Open Rate | =G/F |
| I | Variant A Clicks | Count |
| J | Variant A Click Rate | =I/F |
| K | Variant B Name | Description of B |
| L | Variant B Sent | Count |
| M | Variant B Opens | Count |
| N | Variant B Open Rate | =M/L |
| O | Variant B Clicks | Count |
| P | Variant B Click Rate | =O/L |
| Q | Winner | A or B |
| R | Confidence Level | Statistical significance |
| S | Lift % | Improvement of winner |
| T | Notes | Learnings |

---

### Tab 6: 📅 Monthly Summary

**Auto-generated summary for each month:**

| Metric | Jan | Feb | Mar | ... | YTD |
|--------|-----|-----|-----|-----|-----|
| Emails Sent | | | | | =SUM |
| Avg Open Rate | | | | | =AVERAGE |
| Avg Click Rate | | | | | =AVERAGE |
| Total Revenue | | | | | =SUM |
| New Subscribers | | | | | =SUM |
| Unsubscribes | | | | | =SUM |
| Net Growth | | | | | =SUM |

**Formulas to pull from other tabs:**
- Use SUMIFS and AVERAGEIFS with date ranges
- Update automatically as new data is added

---

### Tab 7: ⚙️ Settings

**Configuration:**

| Setting | Value | Notes |
|---------|-------|-------|
| Monthly Goal - Revenue | $[X] | Target for month |
| Monthly Goal - Subscribers | [X] | New subscriber goal |
| Target Open Rate | [X]% | Benchmark |
| Target Click Rate | [X]% | Benchmark |
| Email Cost per Send | $[X] | ESP cost / emails |
| Currency Symbol | $ | For formatting |
| Timezone | [Timezone] | For reporting |

---

## Step 3: Add Automation

### Option A: Manual Import (Weekly)

1. Export data from ESP as CSV
2. Copy/paste into appropriate tabs
3. Dashboard updates automatically via formulas

### Option B: Google Apps Script (Automated)

**For ESPs with API access:**

```javascript
function importEmailData() {
  // Example for connecting to ESP API
  var apiKey = 'YOUR_API_KEY';
  var url = 'https://api.youresp.com/campaigns';
  
  var response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + apiKey
    }
  });
  
  var data = JSON.parse(response.getContentText());
  
  // Write to sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Campaigns');
  // Add data processing logic here
}
```

### Option C: Zapier Integration

1. Create Zap: ESP → Google Sheets
2. Trigger: New campaign stats available
3. Action: Create/update row in Campaigns tab
4. Set to run daily

---

## Step 4: Create Visual Dashboard

### Using Google Data Studio (Looker Studio)

1. Go to [datastudio.google.com](https://datastudio.google.com)
2. Click **Create** → **Report**
3. Add **Google Sheets** as data source
4. Select your Email Analytics spreadsheet
5. Build visualizations:
   - Scorecards for key metrics
   - Time series for trends
   - Tables for detailed data
   - Gauges for goal tracking

### Recommended Visualizations:

1. **Executive Summary** (top of dashboard)
   - Total Revenue (MTD)
   - Emails Sent (MTD)
   - Avg Open Rate (MTD)
   - List Growth (MTD)

2. **Trend Charts**
   - Open & Click Rate over time (dual-axis line)
   - List growth over time (area chart)
   - Revenue by campaign (bar chart)

3. **Performance Tables**
   - Top 10 campaigns by revenue
   - Bottom 10 campaigns (for optimization)
   - A/B test results

---

## Step 5: Set Up Automated Reporting

### Email Dashboard Weekly

1. In Google Sheets: File → Email → Email as PDF
2. Schedule: Every Monday at 9 AM
3. Recipients: Marketing team, stakeholders
4. Include: Dashboard tab only

### Monthly Report Template

Create a separate sheet that pulls monthly data:
- Use QUERY function to aggregate by month
- Add commentary section for insights
- Include recommendations for next month

---

## Best Practices

✅ **Update data consistently** (same day/time each week)  
✅ **Document data sources** (which ESP, which export)  
✅ **Keep historical data** (don't delete old campaigns)  
✅ **Set realistic benchmarks** (based on your industry)  
✅ **Review and adjust** goals quarterly  
✅ **Share with stakeholders** regularly  
✅ **Add notes** for anomalies (holidays, outages, etc.)  

---

## Industry Benchmarks (for Goal Setting)

| Industry | Avg Open Rate | Avg Click Rate | Unsubscribe Rate |
|----------|---------------|----------------|------------------|
| E-commerce | 15-20% | 2-3% | 0.2-0.5% |
| SaaS | 20-25% | 3-5% | 0.1-0.3% |
| Media/Publishing | 18-22% | 2-4% | 0.3-0.6% |
| Professional Services | 20-25% | 2-4% | 0.1-0.4% |
| Health/Wellness | 18-23% | 2-3% | 0.2-0.5% |
| Education | 20-25% | 3-5% | 0.2-0.4% |

*Source: Campaign Monitor, Mailchimp industry benchmarks*

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Formulas not calculating | Check cell references; ensure correct tab names |
| Data not matching ESP | Verify export includes all campaigns; check date ranges |
| Dashboard slow to load | Limit date ranges; use filtered views |
| Charts not updating | Check data source ranges include new data |

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply with questions about setup
