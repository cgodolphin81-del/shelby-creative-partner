# LinkedIn Analytics Dashboard
## Google Sheets Template with Formulas

**Purpose:** Track client performance across all key LinkedIn metrics with automated calculations and visual reporting.

---

## SHEET STRUCTURE

Create a Google Sheet with these tabs:

1. **DASHBOARD** (Main view with charts)
2. **POSTS** (Individual post tracking)
3. **MONTHLY SUMMARY** (Aggregated monthly metrics)
4. **LEADS** (Inbound lead tracking)
5. **SETTINGS** (Client info, goals, benchmarks)

---

## SHEET 1: DASHBOARD

### Cell Layout:

| Cell | Content | Formula/Value |
|------|---------|---------------|
| A1 | **Client Name:** | `=SETTINGS!B2` |
| A2 | **Reporting Period:** | Manual entry (e.g., "March 2026") |
| A3 | **Start Date:** | `=DATE(2026,3,1)` |
| A4 | **End Date:** | `=DATE(2026,3,31)` |
| | | |
| A6 | **📊 KEY METRICS** | Header |
| A7 | Total Followers (End) | `=SUMIFS(MONTHLY_SUMMARY!B:B,MONTHLY_SUMMARY!A:A,A2)` |
| B7 | Total Followers (Start) | Manual entry or from previous month |
| C7 | **Follower Growth** | `=(A7-B7)/B7` (format as %) |
| | | |
| A9 | Total Impressions | `=SUMIFS(POSTS!E:E,POSTS!D:D,">="&A3,POSTS!D:D,"<="&A4)` |
| A10 | Total Reactions | `=SUMIFS(POSTS!F:F,POSTS!D:D,">="&A3,POSTS!D:D,"<="&A4)` |
| A11 | Total Comments | `=SUMIFS(POSTS!G:G,POSTS!D:D,">="&A3,POSTS!D:D,"<="&A4)` |
| A12 | Total Shares | `=SUMIFS(POSTS!H:H,POSTS!D:D,">="&A3,POSTS!D:D,"<="&A4)` |
| | | |
| A14 | **Avg Engagement Rate** | `=(A10+A11+A12)/A9` (format as %) |
| A15 | **Avg Impressions/Post** | `=A9/COUNTIFS(POSTS!D:D,">="&A3,POSTS!D:D,"<="&A4)` |
| | | |
| A17 | Profile Views (from LinkedIn) | Manual entry |
| A18 | Search Appearances | Manual entry |
| A19 | Inbound Messages | `=COUNTIFS(LEADS!A:A,">="&A3,LEADS!A:A,"<="&A4)` |
| | | |
| A21 | **🎯 GOAL TRACKING** | Header |
| A22 | Follower Goal | `=SETTINGS!B10` |
| B22 | **Goal Achievement** | `=IF(A7>=A22,"✅ Exceeded","⚠️ In Progress")` |
| A23 | Engagement Rate Goal | `=SETTINGS!B11` |
| B23 | **Goal Achievement** | `=IF(A14>=A23,"✅ Exceeded","⚠️ In Progress")` |

---

## SHEET 2: POSTS (Individual Post Tracking)

### Column Headers (Row 1):

| Column | Header | Data Type | Notes |
|--------|--------|-----------|-------|
| A | Post ID | Text | Unique identifier (e.g., P001) |
| B | Post Date | Date | When published |
| C | Post Text (First 50 chars) | Text | For reference |
| D | Content Pillar | Dropdown | Leadership, Industry, Tactical, Personal |
| E | Impressions (24h) | Number | From LinkedIn analytics |
| F | Impressions (7d) | Number | From LinkedIn analytics |
| G | Impressions (30d) | Number | From LinkedIn analytics |
| H | Reactions | Number | Total reactions |
| I | Comments | Number | Total comments |
| J | Shares | Number | Total shares |
| K | **Engagement Rate** | Formula | `=(H2+I2+J2)/F2` |
| L | CTR (if link) | % | Manual entry |
| M | Profile Views from Post | Number | From LinkedIn analytics |
| N | Inbound Messages | Number | Count of DMs referencing post |
| O | Post URL | Hyperlink | Live post link |
| P | Status | Dropdown | Drafted, Scheduled, Published |
| Q | Notes | Text | Any observations |

### Data Validation (Dropdowns):

**Column D (Content Pillar):**
```
Leadership
Industry Insights
Tactical Advice
Personal Story
Client Win
Announcement
Other
```

**Column P (Status):**
```
Idea
Drafting
Ready for Review
In Revision
Approved
Scheduled
Published
```

### Conditional Formatting:

**Engagement Rate (Column K):**
- Green: `>3%` (excellent)
- Yellow: `1.5%-3%` (good)
- Red: `<1.5%` (needs improvement)

**Impressions (Column G):**
- Green: `>5000` (viral potential)
- Yellow: `1000-5000` (solid)
- Red: `<1000` (underperforming)

---

## SHEET 3: MONTHLY SUMMARY

### Column Headers:

| Column | Header | Formula Example |
|--------|--------|-----------------|
| A | Month | `=DATE(2026,1,1)` (format as "MMM YYYY") |
| B | Followers (Start) | Manual entry |
| C | Followers (End) | Manual entry |
| D | **Net Follower Growth** | `=C2-B2` |
| E | **Growth Rate %** | `=D2/B2` |
| F | Total Posts | `=COUNTIFS(POSTS!B:B,">="&A2,POSTS!B:B,"<"&EDATE(A2,1))` |
| G | Total Impressions | `=SUMIFS(POSTS!G:G,POSTS!B:B,">="&A2,POSTS!B:B,"<"&EDATE(A2,1))` |
| H | Total Reactions | `=SUMIFS(POSTS!H:H,POSTS!B:B,">="&A2,POSTS!B:B,"<"&EDATE(A2,1))` |
| I | Total Comments | `=SUMIFS(POSTS!I:I,POSTS!B:B,">="&A2,POSTS!B:B,"<"&EDATE(A2,1))` |
| J | Total Shares | `=SUMIFS(POSTS!J:J,POSTS!B:B,">="&A2,POSTS!B:B,"<"&EDATE(A2,1))` |
| K | **Avg Engagement Rate** | `=(H2+I2+J2)/G2` |
| L | Avg Impressions/Post | `=G2/F2` |
| M | Profile Views | Manual entry (from LinkedIn) |
| N | Search Appearances | Manual entry (from LinkedIn) |
| O | Inbound Leads | `=COUNTIFS(LEADS!A:A,">="&A2,LEADS!A:A,"<"&EDATE(A2,1))` |
| P | Top Performing Post | Manual entry (Post ID or text) |

---

## SHEET 4: LEADS (Inbound Lead Tracking)

### Column Headers:

| Column | Header | Data Type |
|--------|--------|-----------|
| A | Date Received | Date |
| B | Lead Name | Text |
| C | Lead Company | Text |
| D | Lead Title | Text |
| E | Source Post | Text/Link |
| F | Message Summary | Text |
| G | Lead Quality | Dropdown |
| H | Status | Dropdown |
| I | Estimated Value | Currency |
| J | Converted? | Yes/No |
| K | Conversion Date | Date |
| L | Notes | Text |

### Dropdowns:

**Lead Quality (Column G):**
```
🔥 Hot (ready to buy)
🟡 Warm (interested)
🟢 Cold (just exploring)
```

**Status (Column H):**
```
New
Contacted
Discovery Call
Proposal Sent
Negotiation
Won
Lost
Nurture
```

### Key Formulas for Lead Tracking:

**Total Leads This Month:**
```excel
=COUNTIFS(A:A,">="&DATE(2026,3,1),A:A,"<="&DATE(2026,3,31))
```

**Conversion Rate:**
```excel
=COUNTIF(J:J,"Yes")/COUNTA(A:A)
```

**Pipeline Value:**
```excel
=SUMIFS(I:I,H:H,"Proposal Sent")+SUMIFS(I:I,H:H,"Negotiation")
```

---

## SHEET 5: SETTINGS

### Client Information:

| Cell | Label | Value |
|------|-------|-------|
| A1 | **Client Settings** | Header |
| A2 | Client Name: | [Client Name] |
| A3 | Company: | [Company Name] |
| A4 | Industry: | [Industry] |
| A5 | Start Date: | [Date] |
| A6 | Package: | [Starter/Pro/Enterprise] |
| | | |
| A8 | **Monthly Goals** | Header |
| A9 | Target Followers: | [Number] |
| A10 | Target Engagement Rate: | [%] |
| A11 | Target Impressions: | [Number] |
| A12 | Target Leads: | [Number] |
| | | |
| A14 | **Benchmarks** | Header |
| A15 | Industry Avg Engagement: | [%] |
| A16 | Client Baseline (Start): | [Followers, Impressions, etc.] |
| | | |
| A18 | **Posting Schedule** | Header |
| A19 | Posts Per Week: | [Number] |
| A20 | Best Posting Times: | [Times] |

---

## CHARTS TO CREATE (Dashboard Tab)

### Chart 1: Follower Growth Over Time
- **Type:** Line chart
- **Data:** MONTHLY_SUMMARY!A:A (Month) vs MONTHLY_SUMMARY!C:C (Followers End)
- **Title:** "Follower Growth Trajectory"

### Chart 2: Engagement Rate Trend
- **Type:** Line chart with target line
- **Data:** MONTHLY_SUMMARY!A:A vs MONTHLY_SUMMARY!K:K
- **Add:** Horizontal line for goal (SETTINGS!B11)
- **Title:** "Engagement Rate vs Goal"

### Chart 3: Impressions by Content Pillar
- **Type:** Bar chart
- **Data:** `=SUMIFS(POSTS!G:G,POSTS!D:D,"Leadership")` etc.
- **Title:** "Performance by Content Type"

### Chart 4: Top 10 Posts by Engagement
- **Type:** Horizontal bar chart
- **Data:** Top 10 from POSTS sheet sorted by Column K
- **Title:** "Best Performing Posts"

### Chart 5: Lead Pipeline
- **Type:** Funnel chart
- **Data:** LEADS sheet counts by Status
- **Title:** "Inbound Lead Pipeline"

---

## AUTOMATION IDEAS

### Google Apps Script (Auto-Update Reminders):

```javascript
function sendMonthlyReminder() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DASHBOARD");
  var clientName = sheet.getRange("B2").getValue();
  var email = "your-email@example.com";
  
  MailApp.sendEmail({
    to: email,
    subject: "Monthly LinkedIn Report Due - " + clientName,
    body: "Time to update the LinkedIn analytics dashboard for " + clientName + ". Please update profile views and search appearances from LinkedIn Analytics."
  });
}

// Set trigger to run on 1st of each month
```

### Conditional Formatting Rules:

1. **Goal Achievement Cells:**
   - Green fill if `=B22="✅ Exceeded"`
   - Yellow fill if `=B22="⚠️ In Progress"`

2. **Engagement Rate Alerts:**
   - Red fill if engagement rate < 1%
   - Add comment: "Review content strategy"

---

## HOW TO USE THIS DASHBOARD

### Weekly Tasks (Ghostwriter):
1. Update POSTS sheet with new post metrics (every Monday)
2. Check LEADS sheet for new inbound messages
3. Note any viral posts (>10k impressions) in Q column

### Monthly Tasks (Account Manager):
1. Update MONTHLY_SUMMARY with aggregated data
2. Pull profile views/search appearances from LinkedIn
3. Update DASHBOARD charts
4. Export for client report

### Quarterly Tasks:
1. Review goal achievement
2. Adjust targets if needed
3. Identify top-performing content patterns
4. Share insights with client on strategy call

---

## GOOGLE SHEETS TEMPLATE LINK

**To create your own copy:**
1. Go to sheets.new
2. Copy the structure above
3. Share with client as "View Only"
4. Keep editing access for your team

**Pro Tip:** Create a master template, then use `File > Make a Copy` for each new client.

---

**File Location:** `linkedin-service-system/03-analytics/01-analytics-dashboard-template.md`
