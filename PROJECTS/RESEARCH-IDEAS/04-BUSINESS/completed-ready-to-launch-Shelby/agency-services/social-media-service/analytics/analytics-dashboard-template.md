# Analytics Dashboard Template - Google Sheets Structure

## Overview
This document outlines the complete structure for a Google Sheets Analytics Dashboard to track social media performance across platforms.

---

## Sheet 1: DASHBOARD (Main Overview)

### A. Header Section (Rows 1-5)
```
A1: [Client/Brand Name] - Social Media Analytics Dashboard
A2: Reporting Period: [Start Date] to [End Date]
A3: Last Updated: [Auto-update formula]
A4: 
A5: Prepared by: [Agency/Team Name]
```

### B. Key Metrics Summary (Rows 7-15)

| Metric | This Period | Last Period | Change | % Change |
|--------|-------------|-------------|--------|----------|
| Total Followers | [Formula] | [Formula] | [Formula] | [Formula] |
| Total Reach | [Formula] | [Formula] | [Formula] | [Formula] |
| Total Impressions | [Formula] | [Formula] | [Formula] | [Formula] |
| Total Engagement | [Formula] | [Formula] | [Formula] | [Formula] |
| Engagement Rate | [Formula] | [Formula] | [Formula] | [Formula] |
| Total Clicks | [Formula] | [Formula] | [Formula] | [Formula] |
| Total Conversions | [Formula] | [Formula] | [Formula] | [Formula] |

**Formulas:**
- Change: `=B8-C8`
- % Change: `=IF(C8=0,"N/A",(B8-C8)/C8)`
- Engagement Rate: `=Total Engagement / Total Reach * 100`

### C. Platform Breakdown (Rows 18-25)

| Platform | Followers | Reach | Engagement | Engagement Rate | Top Post |
|----------|-----------|-------|------------|-----------------|----------|
| Instagram | [Data] | [Data] | [Data] | [Formula] | [Link] |
| LinkedIn | [Data] | [Data] | [Data] | [Formula] | [Link] |
| Twitter/X | [Data] | [Data] | [Data] | [Formula] | [Link] |
| **TOTAL** | [Sum] | [Sum] | [Sum] | [Average] | - |

### D. Visual Charts (Rows 28-45)

**Chart 1: Follower Growth Over Time**
- Type: Line chart
- Data: Daily/weekly follower counts
- X-axis: Date
- Y-axis: Follower count
- Series: Each platform

**Chart 2: Engagement by Platform**
- Type: Bar chart
- Data: Total engagements per platform
- X-axis: Platforms
- Y-axis: Engagement count

**Chart 3: Engagement Rate Trend**
- Type: Line chart
- Data: Weekly engagement rates
- X-axis: Week number
- Y-axis: Engagement rate %

**Chart 4: Content Type Performance**
- Type: Pie chart
- Data: Engagement by content type
- Slices: Educational, Inspirational, Promotional, Engagement

### E. Top Performing Content (Rows 48-60)

| Rank | Platform | Post Type | Content Preview | Reach | Engagement | Engagement Rate | Link |
|------|----------|-----------|-----------------|-------|------------|-----------------|------|
| 1 | [Platform] | [Type] | [First 50 chars] | [Num] | [Num] | [%] | [URL] |
| 2 | [Platform] | [Type] | [First 50 chars] | [Num] | [Num] | [%] | [URL] |
| 3 | [Platform] | [Type] | [First 50 chars] | [Num] | [Num] | [%] | [URL] |
| 4 | [Platform] | [Type] | [First 50 chars] | [Num] | [Num] | [%] | [URL] |
| 5 | [Platform] | [Type] | [First 50 chars] | [Num] | [Num] | [%] | [URL] |

### F. Goals vs. Actuals (Rows 63-70)

| Goal | Target | Actual | % Achieved | Status |
|------|--------|--------|------------|--------|
| Follower Growth | [Num] | [Num] | [Formula] | [Formula] |
| Engagement Rate | [%] | [%] | [Formula] | [Formula] |
| Reach | [Num] | [Num] | [Formula] | [Formula] |
| Clicks | [Num] | [Num] | [Formula] | [Formula] |
| Conversions | [Num] | [Num] | [Formula] | [Formula] |

**Status Formula:** `=IF(E63>=1,"✅ On Track","⚠️ Needs Attention")`

---

## Sheet 2: INSTAGRAM METRICS

### A. Daily Tracking (Columns A-H)

| Date | Followers | Reach | Impressions | Profile Visits | Website Clicks | Engagement | Stories Views |
|------|-----------|-------|-------------|----------------|----------------|------------|---------------|
| [Date] | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |

### B. Engagement Breakdown (Columns J-N)

| Date | Likes | Comments | Saves | Shares | Total Engagement |
|------|-------|----------|-------|--------|------------------|
| [Date] | [Num] | [Num] | [Num] | [Num] | [SUM Formula] |

### C. Content Performance (Columns A-G, Row 50+)

| Post Date | Post Type | Caption Preview | Reach | Likes | Comments | Saves | Shares | Engagement Rate | Link |
|-----------|-----------|-----------------|-------|-------|----------|-------|--------|-----------------|------|
| [Date] | [Feed/Reel/Story] | [Text] | [Num] | [Num] | [Num] | [Num] | [Num] | [Formula] | [URL] |

### D. Hashtag Performance (Columns A-D, Row 100+)

| Hashtag | Times Used | Avg Reach | Avg Engagement | Performance Score |
|---------|------------|-----------|----------------|-------------------|
| #[tag] | [Count] | [Average] | [Average] | [Rating] |

---

## Sheet 3: LINKEDIN METRICS

### A. Daily/Weekly Tracking

| Date | Followers | Impressions | Clicks | Reactions | Comments | Shares | Engagement Rate |
|------|-----------|-------------|-------|-----------|----------|--------|-----------------|
| [Date] | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] | [Formula] |

### B. Post Performance

| Post Date | Post Type | Content Preview | Impressions | Clicks | Reactions | Comments | Shares | CTR | Engagement Rate | Link |
|-----------|-----------|-----------------|-------------|-------|-----------|----------|--------|-----|-----------------|------|
| [Date] | [Post/Article] | [Text] | [Num] | [Num] | [Num] | [Num] | [Num] | [Formula] | [Formula] | [URL] |

### C. Follower Demographics (Summary)

| Metric | Value |
|--------|-------|
| Top Industry | [Industry] |
| Top Job Function | [Function] |
| Top Seniority | [Level] |
| Top Location | [Location] |
| Company Size (avg) | [Size] |

---

## Sheet 4: TWITTER/X METRICS

### A. Daily Tracking

| Date | Followers | Impressions | Engagements | Profile Visits | Mentions | Link Clicks | Engagement Rate |
|------|-----------|-------------|-------------|----------------|----------|-------------|-----------------|
| [Date] | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] | [Formula] |

### B. Tweet Performance

| Tweet Date | Tweet Type | Content Preview | Impressions | Likes | Retweets | Replies | Link Clicks | Engagement Rate | Link |
|------------|------------|-----------------|-------------|-------|----------|---------|-------------|-----------------|------|
| [Date] | [Tweet/Thread] | [Text] | [Num] | [Num] | [Num] | [Num] | [Num] | [Formula] | [URL] |

### C. Best Posting Times Analysis

| Day | Best Time | Avg Engagement | Tweet Count |
|-----|-----------|----------------|-------------|
| Monday | [Time] | [Num] | [Num] |
| Tuesday | [Time] | [Num] | [Num] |
| Wednesday | [Time] | [Num] | [Num] |
| Thursday | [Time] | [Num] | [Num] |
| Friday | [Time] | [Num] | [Num] |
| Saturday | [Time] | [Num] | [Num] |
| Sunday | [Time] | [Num] | [Num] |

---

## Sheet 5: CONVERSION TRACKING

### A. Conversion Funnel

| Stage | Instagram | LinkedIn | Twitter | Total |
|-------|-----------|----------|---------|-------|
| Impressions | [Num] | [Num] | [Num] | [Sum] |
| Link Clicks | [Num] | [Num] | [Num] | [Sum] |
| Landing Page Views | [Num] | [Num] | [Num] | [Sum] |
| Leads/Signups | [Num] | [Num] | [Num] | [Sum] |
| Conversions/Sales | [Num] | [Num] | [Num] | [Sum] |

### B. Conversion Rates

| Metric | Formula | Result |
|--------|---------|--------|
| Click-Through Rate | Clicks / Impressions | [%] |
| Landing Page Rate | Views / Clicks | [%] |
| Lead Rate | Leads / Views | [%] |
| Conversion Rate | Sales / Clicks | [%] |
| Overall Rate | Sales / Impressions | [%] |

### C. Revenue Attribution (If Applicable)

| Platform | Conversions | Avg Order Value | Total Revenue | ROI |
|----------|-------------|-----------------|---------------|-----|
| Instagram | [Num] | [$] | [Formula] | [Formula] |
| LinkedIn | [Num] | [$] | [Formula] | [Formula] |
| Twitter | [Num] | [$] | [Formula] | [Formula] |
| **TOTAL** | [Sum] | [Average] | [Sum] | [Formula] |

**ROI Formula:** `=(Revenue - Cost) / Cost * 100`

---

## Sheet 6: CONTENT CALENDAR TRACKING

### A. Planned vs. Published

| Week | Planned Posts | Published Posts | % Complete | Missed | Notes |
|------|---------------|-----------------|------------|--------|-------|
| Week 1 | [Num] | [Num] | [Formula] | [Formula] | [Text] |
| Week 2 | [Num] | [Num] | [Formula] | [Formula] | [Text] |
| Week 3 | [Num] | [Num] | [Formula] | [Formula] | [Text] |
| Week 4 | [Num] | [Num] | [Formula] | [Formula] | [Text] |

### B. Content Mix Analysis

| Content Type | Planned % | Actual % | Variance | Performance |
|--------------|-----------|----------|----------|-------------|
| Educational | [40%] | [%] | [%] | [Rating] |
| Inspirational | [25%] | [%] | [%] | [Rating] |
| Promotional | [20%] | [%] | [%] | [Rating] |
| Engagement | [15%] | [%] | [%] | [Rating] |

---

## Sheet 7: MONTHLY SUMMARY

### A. Month-over-Month Comparison

| Metric | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 | Month 6 |
|--------|---------|---------|---------|---------|---------|---------|
| Followers (End) | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |
| Net New Followers | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |
| Total Reach | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |
| Total Engagement | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |
| Avg Engagement Rate | [%] | [%] | [%] | [%] | [%] | [%] |
| Total Clicks | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |
| Conversions | [Num] | [Num] | [Num] | [Num] | [Num] | [Num] |

### B. Quarterly Goals Tracking

| Quarter | Goal | Target | Actual | Status |
|---------|------|--------|--------|--------|
| Q1 | Follower Growth | [Num] | [Num] | [Status] |
| Q1 | Engagement Rate | [%] | [%] | [Status] |
| Q2 | Follower Growth | [Num] | [Num] | [Status] |
| Q2 | Engagement Rate | [%] | [%] | [Status] |

---

## Sheet 8: NOTES & INSIGHTS

### A. Key Wins
[List major successes and what drove them]

### B. Challenges
[List obstacles and proposed solutions]

### C. Learnings
[Document insights for future optimization]

### D. Action Items
| Item | Owner | Due Date | Status |
|------|-------|----------|--------|
| [Task] | [Name] | [Date] | [Status] |

---

## Automation & Formulas

### Key Formulas to Implement

**1. Auto-Date Update (Cell A3)**
```
="Last Updated: "&TEXT(NOW(),"mmmm dd, yyyy hh:mm AM/PM")
```

**2. Percentage Change**
```
=IF(OLD_VALUE=0,"N/A",(NEW_VALUE-OLD_VALUE)/OLD_VALUE)
```

**3. Conditional Formatting for Status**
- Green: >=100% of goal
- Yellow: 80-99% of goal
- Red: <80% of goal

**4. Average Engagement Rate**
```
=SUM(Engagement_Column)/SUM(Reach_Column)*100
```

**5. Top Post Finder**
```
=INDEX(Post_Link_Column,MATCH(MAX(Engagement_Rate_Column),Engagement_Rate_Column,0))
```

---

## Data Import Instructions

### Manual Entry
- Update daily metrics by 10 AM each morning
- Weekly summary every Monday
- Monthly report by 5th of following month

### API Integration (Optional)
- Use Google Apps Script for automatic data pulls
- Connect to platform APIs where available
- Set up automated daily refresh

### Third-Party Tools
- Hootsuite Analytics
- Sprout Social
- Buffer Analyze
- Native platform insights

---

## Access & Permissions

| Role | Name | Access Level |
|------|------|--------------|
| Owner | [Name] | Full access |
| Editor | [Name] | Edit access |
| Viewer | [Name] | View only |
| Client | [Name] | View dashboard only |

---

*Template Version: 1.0 | Last Updated: March 2026*
*To use: Copy this structure into Google Sheets and customize formulas for your specific needs*
