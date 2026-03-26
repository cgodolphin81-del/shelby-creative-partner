# Monthly Reporting Dashboard
## Looker Studio Template & Reporting Guide

**Client:** ________________________  
**Location(s):** ________________________  
**Reporting Period:** ________________________  
**Prepared By:** ________________________

---

## 📊 REPORT OVERVIEW

### What This Dashboard Tracks:
- Google Business Profile performance
- Local keyword rankings
- Website traffic (local)
- Review metrics
- Citation health
- Competitor comparison
- Action items & recommendations

### Reporting Frequency:
- **Weekly:** Quick check-in (rankings, reviews)
- **Monthly:** Full dashboard review
- **Quarterly:** Strategic review + recommendations

---

## 🔗 LOOKER STUDIO SETUP

### Step 1: Connect Data Sources

**Required Connectors:**

| Data Source | Connector | Setup Notes |
|-------------|-----------|-------------|
| Google Analytics 4 | Native GA4 | Property ID required |
| Google Business Profile | Native GBP | Business account access |
| Google Search Console | Native GSC | Property verification |
| Rank Tracking | Supermetrics/Power My Analytics | API connection |
| Review Data | ReviewTrackers API / Manual | Or use Looker Studio templates |
| Call Tracking | CallRail/WhatConverts | API integration |

---

### Step 2: Create Dashboard Structure

**Page 1: Executive Summary**
- Key metrics at a glance
- Month-over-month comparison
- Top wins
- Areas for improvement
- Next month priorities

**Page 2: Google Business Profile**
- Profile views
- Search queries
- Actions (calls, directions, website)
- Photo views
- Posts performance
- Review metrics

**Page 3: Rankings & Visibility**
- Keyword ranking trends
- Map pack appearances
- Local pack position
- Competitor comparison
- Ranking distribution

**Page 4: Website Performance**
- Organic traffic (local)
- Landing page performance
- Location page traffic
- Conversions (calls, forms)
- User behavior metrics

**Page 5: Reviews & Reputation**
- Review count by platform
- Rating trends
- Review velocity
- Response metrics
- Sentiment analysis

**Page 6: Citations & Listings**
- Citation health score
- NAP consistency
- New citations acquired
- Issues identified
- Cleanup progress

**Page 7: Competitor Analysis**
- Share of voice
- Ranking comparison
- Review comparison
- Content comparison
- Opportunity gaps

**Page 8: Recommendations**
- Priority action items
- Strategic recommendations
- Investment opportunities
- Expected outcomes

---

## 📈 KEY METRICS DEFINITIONS

### Google Business Profile Metrics

| Metric | Definition | Why It Matters |
|--------|------------|----------------|
| **Search Views** | Times profile appeared in search | Visibility indicator |
| **Map Views** | Times profile appeared on Maps | Local discovery |
| **Website Clicks** | Clicks to website from GBP | Direct traffic driver |
| **Direction Requests** | Users requesting directions | High intent signal |
| **Phone Calls** | Calls from GBP | Direct conversions |
| **Photo Views** | Times photos were viewed | Engagement metric |
| **Booking Requests** | Appointments from GBP | Direct conversions |

---

### Ranking Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **Avg. Position** | Average ranking across keywords | Top 3 |
| **Map Pack Appearances** | % of keywords in map pack | 80%+ |
| **Top 3 Rankings** | Keywords in positions 1-3 | 50%+ |
| **Top 10 Rankings** | Keywords in positions 1-10 | 90%+ |
| **Ranking Change** | Position change vs. last month | Improving |

---

### Review Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **Total Reviews** | Cumulative review count | Growing |
| **Average Rating** | Mean star rating | 4.5+ |
| **Review Velocity** | New reviews per month | 10+ |
| **Response Rate** | % of reviews responded to | 100% |
| **Response Time** | Avg. time to respond | <24 hours |

---

## 📋 MONTHLY REPORT TEMPLATE

### Page 1: Executive Summary

```
╔═══════════════════════════════════════════════════════════════╗
║                    [BUSINESS NAME]                            ║
║              Local SEO Performance Report                     ║
║                   [Month Year]                                ║
╚═══════════════════════════════════════════════════════════════╝

📊 KEY METRICS AT A GLANCE
═══════════════════════════════════════════════════════════════

┌─────────────────┬─────────────┬─────────────┬──────────────┐
│     Metric      │   This Mo   │   Last Mo   │   Change     │
├─────────────────┼─────────────┼─────────────┼──────────────┤
│ GBP Views       │             │             │              │
│ Website Clicks  │             │             │              │
│ Phone Calls     │             │             │              │
│ New Reviews     │             │             │              │
│ Average Rating  │             │             │              │
│ Avg. Rank Pos.  │             │             │              │
│ Organic Traffic │             │             │              │
│ Conversions     │             │             │              │
└─────────────────┴─────────────┴─────────────┴──────────────┘

🏆 TOP WINS THIS MONTH
═══════════════════════════════════════════════════════════════

1. 
2. 
3. 

⚠️ AREAS FOR IMPROVEMENT
═══════════════════════════════════════════════════════════════

1. 
2. 
3. 

📋 NEXT MONTH PRIORITIES
═══════════════════════════════════════════════════════════════

1. 
2. 
3. 
```

---

### Page 2: Google Business Profile Performance

```
╔═══════════════════════════════════════════════════════════════╗
║              GOOGLE BUSINESS PROFILE                          ║
╚═══════════════════════════════════════════════════════════════╝

📈 PROFILE VIEWS (Last 6 Months)
═══════════════════════════════════════════════════════════════

[Line chart: Search views + Map views by month]

📍 HOW CUSTOMERS SEARCHED FOR YOUR BUSINESS
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│         Search Type             │   Views     │   Change     │
├─────────────────────────────────┼─────────────┼──────────────┤
│ Direct (business name/address)  │             │              │
│ Discovery (category/product)    │             │              │
│ Branded (business + keyword)    │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

🎯 CUSTOMER ACTIONS
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│           Action                │   Count     │   Change     │
├─────────────────────────────────┼─────────────┼──────────────┤
│ Website visits                  │             │              │
│ Direction requests              │             │              │
│ Phone calls                     │             │              │
│ Booking requests                │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

📸 PHOTO PERFORMANCE
═══════════════════════════════════════════════════════════════

Total Photos: _____
Photo Views: _____
Photos Added This Month: _____

TOP PERFORMING PHOTOS:
1. 
2. 
3. 

📝 POSTS PERFORMANCE
═══════════════════════════════════════════════════════════════

Posts Published: _____
Total Post Views: _____
Avg. Views Per Post: _____

TOP POST THIS MONTH:
[Post content preview]
Views: _____
```

---

### Page 3: Rankings & Visibility

```
╔═══════════════════════════════════════════════════════════════╗
║                  KEYWORD RANKINGS                             ║
╚═══════════════════════════════════════════════════════════════╝

📊 RANKING DISTRIBUTION
═══════════════════════════════════════════════════════════════

┌─────────────────┬─────────────┬─────────────┬──────────────┐
│    Position     │   Keywords  │   Last Mo   │   Change     │
├─────────────────┼─────────────┼─────────────┼──────────────┤
│ Position 1      │             │             │              │
│ Positions 2-3   │             │             │              │
│ Positions 4-10  │             │             │              │
│ Positions 11-20 │             │             │              │
│ Positions 21+   │             │             │              │
│ Not Ranking     │             │             │              │
└─────────────────┴─────────────┴─────────────┴──────────────┘

🗺️ MAP PACK APPEARANCES
═══════════════════════════════════════════════════════════════

Keywords in Map Pack: _____ / _____ (___%)

┌─────────────────────────────────┬────────────────────────────┐
│         Keyword                 │       Map Position         │
├─────────────────────────────────┼────────────────────────────┤
│                                 │                            │
│                                 │                            │
│                                 │                            │
└─────────────────────────────────┴────────────────────────────┘

📈 TOP KEYWORD MOVEMENTS
═══════════════════════════════════════════════════════════════

BIGGEST GAINERS:
┌─────────────────────────────────┬─────────────┬──────────────┐
│           Keyword               │   Old Pos   │   New Pos    │
├─────────────────────────────────┼─────────────┼──────────────┤
│                                 │             │              │
│                                 │             │              │
│                                 │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

BIGGEST DECLINES:
┌─────────────────────────────────┬─────────────┬──────────────┐
│           Keyword               │   Old Pos   │   New Pos    │
├─────────────────────────────────┼─────────────┼──────────────┤
│                                 │             │              │
│                                 │             │              │
│                                 │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘
```

---

### Page 4: Website Performance

```
╔═══════════════════════════════════════════════════════════════╗
║                 WEBSITE PERFORMANCE                           ║
╚═══════════════════════════════════════════════════════════════╝

📊 ORGANIC TRAFFIC (Local)
═══════════════════════════════════════════════════════════════

[Line chart: Organic sessions by month]

┌─────────────────┬─────────────┬─────────────┬──────────────┐
│     Metric      │   This Mo   │   Last Mo   │   Change     │
├─────────────────┼─────────────┼─────────────┼──────────────┤
│ Organic Sessions│             │             │              │
│ Organic Users   │             │             │              │
│ Pageviews       │             │             │              │
│ Bounce Rate     │             │             │              │
│ Avg. Session    │             │             │              │
│ Conversions     │             │             │              │
└─────────────────┴─────────────┴─────────────┴──────────────┘

📍 LOCATION PAGE PERFORMANCE
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│         Location Page           │  Sessions   │  Conversions │
├─────────────────────────────────┼─────────────┼──────────────┤
│ /locations/[city-1]             │             │              │
│ /locations/[city-2]             │             │              │
│ /locations/[city-3]             │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

🔝 TOP LANDING PAGES (Organic)
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│            Page                 │  Sessions   │  Conv. Rate  │
├─────────────────────────────────┼─────────────┼──────────────┤
│                                 │             │              │
│                                 │             │              │
│                                 │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

📱 DEVICE BREAKDOWN
═══════════════════════════════════════════════════════════════

┌─────────────────┬─────────────┬─────────────┬──────────────┐
│     Device      │  Sessions   │   % Total   │  Conv. Rate  │
├─────────────────┼─────────────┼─────────────┼──────────────┤
│ Mobile          │             │             │              │
│ Desktop         │             │             │              │
│ Tablet          │             │             │              │
└─────────────────┴─────────────┴─────────────┴──────────────┘
```

---

### Page 5: Reviews & Reputation

```
╔═══════════════════════════════════════════════════════════════╗
║               REVIEWS & REPUTATION                            ║
╚═══════════════════════════════════════════════════════════════╝

⭐ REVIEW COUNT BY PLATFORM
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│          Platform               │   Total     │   This Mo    │
├─────────────────────────────────┼─────────────┼──────────────┤
│ Google                          │             │              │
│ Yelp                            │             │              │
│ Facebook                        │             │              │
│ Industry Site 1                 │             │              │
│ Industry Site 2                 │             │              │
│ **TOTAL**                       │             │              │
└─────────────────────────────────┴─────────────┴──────────────┘

⭐ RATING TRENDS
═══════════════════════════════════════════════════════════════

[Line chart: Average rating by month]

Current Average Rating: _____
Target: 4.5+

📝 REVIEW VELOCITY
═══════════════════════════════════════════════════════════════

[Bar chart: New reviews per month]

This Month: _____
Last Month: _____
Goal: _____

💬 RESPONSE METRICS
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────┬─────────────┬──────────────┐
│          Metric                 │   Value     │   Target     │
├─────────────────────────────────┼─────────────┼──────────────┤
│ Response Rate                   │             │ 100%         │
│ Avg. Response Time              │             │ <24 hours    │
│ Reviews Unanswered              │             │ 0            │
└─────────────────────────────────┴─────────────┴──────────────┘

🆕 RECENT REVIEWS (This Month)
═══════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────┐
│ ★★★★★ [Date] - [Platform]                                  │
│ "[Review excerpt]"                                           │
│ Response: [Yes/No]                                           │
├──────────────────────────────────────────────────────────────┤
│ ★★★★★ [Date] - [Platform]                                  │
│ "[Review excerpt]"                                           │
│ Response: [Yes/No]                                           │
├──────────────────────────────────────────────────────────────┤
│ (Continue for notable reviews)                               │
└──────────────────────────────────────────────────────────────┘
```

---

### Page 6: Recommendations & Action Items

```
╔═══════════════════════════════════════════════════════════════╗
║              RECOMMENDATIONS & ACTION ITEMS                   ║
╚═══════════════════════════════════════════════════════════════╝

🔥 PRIORITY ACTIONS (This Month)
═══════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────┐
│ PRIORITY 1: [Action item]                                    │
│                                                              │
│ Why: [Reason]                                                │
│ Expected Impact: [Outcome]                                   │
│ Effort: [Low/Medium/High]                                    │
│ Timeline: [When]                                             │
│ Owner: [Who]                                                 │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PRIORITY 2: [Action item]                                    │
│                                                              │
│ Why: [Reason]                                                │
│ Expected Impact: [Outcome]                                   │
│ Effort: [Low/Medium/High]                                    │
│ Timeline: [When]                                             │
│ Owner: [Who]                                                 │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PRIORITY 3: [Action item]                                    │
│                                                              │
│ Why: [Reason]                                                │
│ Expected Impact: [Outcome]                                   │
│ Effort: [Low/Medium/High]                                    │
│ Timeline: [When]                                             │
│ Owner: [Who]                                                 │
└──────────────────────────────────────────────────────────────┘

📋 ONGOING TASKS
═══════════════════════════════════════════════════════════════

- [ ] Post 2-3 GBP posts per week
- [ ] Respond to all reviews within 24 hours
- [ ] Monitor rankings weekly
- [ ] Track competitor activity
- [ ] Update citations as needed

💡 STRATEGIC RECOMMENDATIONS
═══════════════════════════════════════════════════════════════

1. [Strategic recommendation with rationale]

2. [Strategic recommendation with rationale]

3. [Strategic recommendation with rationale]

📊 NEXT MONTH FOCUS
═══════════════════════════════════════════════════════════════

Primary Goal: ________________________
Secondary Goal: ________________________
Metric to Watch: ________________________
```

---

## 🛠️ LOOKER STUDIO TEMPLATE SETUP

### Creating Your Dashboard

**Step 1: Create New Report**
1. Go to lookerstudio.google.com
2. Click "Create" → "Report"
3. Choose blank template or start from gallery

**Step 2: Add Data Sources**
1. Click "Add Data" in toolbar
2. Select connector (GA4, GBP, GSC, etc.)
3. Authorize and select property
4. Add to report

**Step 3: Build Pages**
1. Add page for each section above
2. Use consistent styling
3. Add date range control (top of report)
4. Set default date range to "Last 28 days" or "Previous month"

**Step 4: Add Visualizations**

**Scorecards (Key Metrics):**
- Add scorecard for each KPI
- Show comparison to previous period
- Use conditional formatting (green/red)

**Time Series Charts:**
- Use for trends over time
- Show 6-12 months of data
- Add reference lines for goals

**Tables:**
- Use for detailed data
- Enable sorting
- Add conditional formatting

**Pie/Bar Charts:**
- Use for distributions
- Limit to 5-7 categories
- Use consistent colors

---

## 📧 CLIENT EMAIL TEMPLATE

```
Subject: [Business Name] - Local SEO Report - [Month Year]

Hi [Client Name],

Your [Month] Local SEO report is ready! Here are the highlights:

🎯 KEY WINS:
• [Win 1]
• [Win 2]
• [Win 3]

📊 KEY METRICS:
• GBP Views: [number] ([change]%)
• New Reviews: [number] (Avg. rating: [rating])
• Top Keyword: "[keyword]" now ranking #[position]
• Organic Traffic: [number] sessions ([change]%)

📋 VIEW FULL REPORT:
[Link to Looker Studio Dashboard]

🔍 TOP RECOMMENDATIONS:
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

📅 NEXT CHECK-IN:
Let's review this report on [date]. I'll send a calendar invite.

Questions? Just reply to this email!

Best,
[Your Name]
```

---

## 📊 AUTOMATION OPTIONS

### Scheduled Email Reports
1. In Looker Studio, click "Share"
2. Select "Schedule email delivery"
3. Set frequency (monthly)
4. Add recipient emails
5. Customize email message

### Slack/Teams Integration
- Use Supermetrics to push data to Google Sheets
- Connect Sheets to Slack/Teams
- Set up automated alerts for metric thresholds

### Client Access
- Share Looker Studio report with client email
- Set permissions to "Viewer"
- Client can access anytime
- Reduces back-and-forth emails

---

## 📈 REPORTING BEST PRACTICES

### DO:
- ✅ Lead with wins and positive news
- ✅ Explain what metrics mean in plain language
- ✅ Provide context (vs. last month, vs. goal)
- ✅ Include clear recommendations
- ✅ Make it visual and scannable
- ✅ Schedule consistent delivery
- ✅ Offer to walk through the report

### DON'T:
- ❌ Overwhelm with too many metrics
- ❌ Use jargon without explanation
- ❌ Hide negative trends
- ❌ Send without review
- ❌ Forget to include action items
- ❌ Make it about your work (make it about THEIR results)

---

## 🎯 CLIENT COMMUNICATION TIPS

### Monthly Report Call Agenda (30 min)
1. **Wins & Highlights** (5 min)
2. **Key Metrics Review** (10 min)
3. **Challenges & Solutions** (5 min)
4. **Next Month Plan** (5 min)
5. **Q&A** (5 min)

### Handling Difficult Conversations

**If Rankings Dropped:**
"Let me walk you through what we're seeing. Rankings naturally fluctuate, but here's what we're doing about it..."

**If No New Reviews:**
"We noticed review velocity slowed. Here's our plan to increase requests..."

**If Traffic Declined:**
"Traffic is down X% this month. We've identified [reason] and here's our action plan..."

---

**Dashboard Created:** ________________________  
**First Report Date:** ________________________  
**Client Review Scheduled:** ________________________

---

**Notes:**
_Client preferences, custom metrics, automation setup:_



---

**Prepared by:** ________________________  
**Date:** ________________________
