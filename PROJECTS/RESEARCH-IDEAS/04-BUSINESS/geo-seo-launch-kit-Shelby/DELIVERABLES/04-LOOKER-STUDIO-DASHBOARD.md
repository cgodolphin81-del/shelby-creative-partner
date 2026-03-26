# LOOKER STUDIO DASHBOARD TEMPLATE
## GEO SEO Client Dashboard

---

## DATA SOURCE SETUP

### Step 1: Connect Google Sheets
1. Go to lookerstudio.google.com
2. Click **Create** → **Data Source**
3. Select **Google Sheets** connector
4. Choose your GEO Score Tracker spreadsheet
5. Select the "Tracker" tab
6. Click **Connect**

### Step 2: Configure Fields
| Field Name | Type | Format |
|------------|------|--------|
| Date | Date | YYYY-MM-DD |
| Client Name | Text | Default |
| AI Visibility Score | Number | 0-100 |
| Technical Score | Number | 0-100 |
| Content Score | Number | 0-100 |
| Structured Data Score | Number | 0-100 |
| Citations Score | Number | 0-100 |
| Competitive Score | Number | 0-100 |
| GEO Score | Number | 0-100 |
| AI Visibility % | Percent | 0-100% |
| Total Citations | Number | Default |
| AI Leads | Number | Default |
| Notes | Text | Default |

---

## DASHBOARD LAYOUT

### Page 1: Executive Overview

**Header Section (Top)**
- Client logo (top left)
- Dashboard title: "[Client Name] — GEO Dashboard"
- Date range control (top right)
- Last updated: Today's date

**Score Cards Row (Below Header)**
| Card | Metric | Format |
|------|--------|--------|
| Card 1 | Current GEO Score | Big number + /100 |
| Card 2 | GEO Score Change | Scorecard with comparison (vs. previous period) |
| Card 3 | Total Citations | Big number |
| Card 4 | AI Leads (Period) | Big number |

**Chart Row 1 (Middle)**
- **Chart 1:** GEO Score Trend (Time series)
  - Dimension: Date
  - Metric: GEO Score (AVG)
  - Chart type: Line chart
  - Y-axis: 0-100
  - Add reference line at 65 (target threshold)

- **Chart 2:** Component Scores (Bar chart)
  - Dimension: Component (create calculated field)
  - Metric: Score (AVG)
  - Chart type: Horizontal bar
  - Sort: Descending

**Chart Row 2 (Bottom)**
- **Chart 3:** Citations Over Time (Area chart)
  - Dimension: Date
  - Metric: Total Citations (SUM)
  - Chart type: Area

- **Chart 4:** AI Leads Over Time (Column chart)
  - Dimension: Date
  - Metric: AI Leads (SUM)
  - Chart type: Column

---

### Page 2: Detailed Analysis

**Section 1: Component Score Trends**
- **Chart:** Multi-line chart
- **Dimensions:** Date
- **Metrics:** All 6 component scores
- **Purpose:** See which areas are improving

**Section 2: Score Distribution**
- **Chart:** Gauge chart
- **Metric:** Current GEO Score
- **Ranges:** 0-34 (Red), 35-49 (Orange), 50-64 (Yellow), 65-79 (Light Green), 80-100 (Green)

**Section 3: Citation Details**
- **Table:** Citation log (from separate sheet tab)
- **Columns:** Source, Type, DA, Date Added, Status
- **Filter:** Status = "Live"

**Section 4: Lead Details**
- **Table:** AI Lead log
- **Columns:** Date, Source, Platform, Company, Value, Status
- **Filter:** Date range (from control)

---

### Page 3: Competitive Analysis

**Section 1: Competitor Score Comparison**
- **Chart:** Bar chart
- **Dimension:** Competitor Name
- **Metric:** GEO Score
- **Include:** Client + 5 competitors

**Section 2: Market Position**
- **Chart:** Scatter plot
- **X-axis:** Citations
- **Y-axis:** GEO Score
- **Dimension:** Company (Client + Competitors)

**Section 3: Visibility Gap**
- **Chart:** Table
- **Columns:** Competitor, Their Score, Your Score, Gap
- **Calculation:** Gap = Their Score - Your Score

---

## CALCULATED FIELDS

### GEO Score Status
```
CASE 
  WHEN GEO Score >= 80 THEN "Excellent"
  WHEN GEO Score >= 65 THEN "Good"
  WHEN GEO Score >= 50 THEN "Average"
  WHEN GEO Score >= 35 THEN "Below Average"
  ELSE "Poor"
END
```

### Score Change (vs. Previous)
```
GEO Score - PREV(GEO Score, 1)
```

### Months as Client
```
DATETIME_DIFF(TODAY(), MIN(Date), MONTH)
```

### Citation Growth Rate
```
(Total Citations - PREV(Total Citations, 1)) / PREV(Total Citations, 1) * 100
```

---

## FILTERS & CONTROLS

### Add These Controls:
1. **Date Range Control** (top of dashboard)
   - Default: Last 90 days
   - Options: Custom range

2. **Client Name Filter** (if multi-client sheet)
   - Type: Drop-down
   - Default: Current client

3. **Score Status Filter** (optional)
   - Type: Drop-down
   - Values: Excellent, Good, Average, Below Average, Poor

---

## STYLING

### Theme
- **Primary color:** Your brand color
- **Background:** White or light gray
- **Font:** Roboto, Open Sans, or brand font
- **Grid:** Show light gridlines

### Score Card Styling
- **Background:** White with subtle shadow
- **Metric name:** Gray, 14px
- **Value:** Bold, 36px, brand color
- **Change indicator:** Green (+) or Red (-)

### Chart Styling
- **Colors:** Sequential brand color palette
- **Gridlines:** Light gray, 1px
- **Legend:** Bottom or right
- **Data labels:** Show on hover (not always)

---

## SHARING SETTINGS

### Client Access
1. Click **Share** (top right)
2. Add client email
3. Permission: **Can view**
4. Uncheck "Allow viewers to download"
5. Uncheck "Allow viewers to change data"

### Internal Access
- Your team: **Can edit**
- Stakeholders: **Can view**

### Embed Options (for client portal)
1. File → Embed report
2. Copy embed code
3. Paste into Notion/website

---

## AUTOMATION

### Email Schedule
1. Click **Schedule email delivery**
2. Recipients: Client email + your team
3. Frequency: Weekly (Monday 9am)
4. Format: PDF attachment
5. Subject: "[Client] GEO Dashboard — Week of [Date]"

### Refresh Settings
- Data source: Auto-refresh every 4 hours
- Dashboard: Auto-refresh on open

---

## CLIENT ONBOARDING EMAIL

**Subject:** Your GEO Dashboard is Ready!

**Body:**

Hi [Client Name],

Your GEO SEO dashboard is live! This is where you can track your AI visibility progress in real-time.

**Access your dashboard:** [Looker Studio Link]

**What you'll see:**
- Current GEO Score (0-100)
- Score trends over time
- Citation growth
- AI-driven leads
- Competitive comparison

**Tips:**
- Use the date range selector to view different periods
- Hover over charts for detailed data
- Check back weekly for updates (auto-refreshes every 4 hours)

Questions? Just reply to this email.

Best,
[Your Name]

---

*Dashboard Template v1.0 | March 21, 2026*
