# Campaign Tracking Sheet Guide
## How to Track ROI, Engagement & Conversions

---

## Overview

This tracking system helps you measure the success of every influencer campaign and calculate true ROI. Use the CSV file with Google Sheets, Excel, or Airtable.

---

## Column Definitions

### Campaign Information
| Column | Description |
|--------|-------------|
| Campaign ID | Unique identifier (e.g., CMP-001) |
| Campaign Name | Internal campaign name |
| Contract Date | Date agreement was signed |
| Post Date | Date content went live |
| Status | Prospect/Negotiating/Contract Signed/Scheduled/In Progress/Completed |

### Influencer Information
| Column | Description |
|--------|-------------|
| Influencer Name | Full name |
| Handle | @username |
| Platform | Instagram/TikTok/YouTube/Twitter/etc. |
| Follower Count | At time of campaign |

### Content Information
| Column | Description |
|--------|-------------|
| Content Type | Feed Post/Story/Reel/TikTok/YouTube Video/Integration/etc. |
| Content URL | Direct link to the post |

### Performance Metrics
| Column | Description | Formula |
|--------|-------------|---------|
| Impressions | Total times content was displayed | From platform analytics |
| Reach | Unique accounts who saw content | From platform analytics |
| Engagement | Likes + Comments + Saves + Shares | Sum of all interactions |
| Engagement Rate | Engagement as % of reach | (Engagement ÷ Reach) × 100 |
| Clicks | Link clicks (bio, swipe-up, etc.) | From tracking links |
| CTR | Click-through rate | (Clicks ÷ Reach) × 100 |
| Conversions | Purchases/sign-ups attributed | From tracking codes |
| Conversion Rate | Conversions as % of clicks | (Conversions ÷ Clicks) × 100 |

### Financial Metrics
| Column | Description |
|--------|-------------|
| Revenue | Total revenue attributed to campaign |
| ROAS | Return on Ad Spend |
| Commission Paid | Affiliate commission (if applicable) |
| Flat Fee Paid | Base compensation |
| Total Cost | Commission + Flat Fee + Product costs |
| Profit/Loss | Revenue - Total Cost |

---

## Key Formulas

### Engagement Rate
```
Engagement Rate = (Likes + Comments + Saves + Shares) ÷ Reach × 100

Example: (2,500 + 180 + 320 + 45) ÷ 38,000 × 100 = 8.0%
```

### Click-Through Rate (CTR)
```
CTR = Clicks ÷ Reach × 100

Example: 450 ÷ 38,000 × 100 = 1.18%
```

### Conversion Rate
```
Conversion Rate = Conversions ÷ Clicks × 100

Example: 35 ÷ 450 × 100 = 7.8%
```

### Return on Ad Spend (ROAS)
```
ROAS = Revenue ÷ Total Cost

Example: $5,000 ÷ $1,000 = 5.0 (or 5:1)

ROAS as Percentage: (Revenue - Cost) ÷ Cost × 100
Example: ($5,000 - $1,000) ÷ $1,000 × 100 = 400%
```

### Profit/Loss
```
Profit = Revenue - Total Cost

Example: $5,000 - $1,000 = $4,000 profit
```

### Cost Per Engagement (CPE)
```
CPE = Total Cost ÷ Total Engagements

Example: $1,000 ÷ 3,045 = $0.33 per engagement
```

### Cost Per Click (CPC)
```
CPC = Total Cost ÷ Total Clicks

Example: $1,000 ÷ 450 = $2.22 per click
```

### Cost Per Acquisition (CPA)
```
CPA = Total Cost ÷ Total Conversions

Example: $1,000 ÷ 35 = $28.57 per acquisition
```

---

## Google Sheets Setup

### Step 1: Import the CSV
1. Open Google Sheets
2. File → Import → Upload
3. Select the CSV file
4. Choose "Replace spreadsheet" or "Insert new sheet"

### Step 2: Add Formulas

**Engagement Rate (Column N):**
```
=IF(L2>0, (M2/L2)*100, 0)
```

**CTR (Column P):**
```
=IF(L2>0, (O2/L2)*100, 0)
```

**Conversion Rate (Column R):**
```
=IF(O2>0, (Q2/O2)*100, 0)
```

**Total Cost (Column V):**
```
=T2+U2
```

**Profit/Loss (Column W):**
```
=S2-V2
```

**ROAS (Column T):**
```
=IF(V2>0, S2/V2, 0)
```

### Step 3: Create Summary Dashboard

Create a new sheet called "Dashboard" with these formulas:

**Total Campaigns:**
```
=COUNTA(A:A)-1
```

**Total Spend:**
```
=SUM(V:V)
```

**Total Revenue:**
```
=SUM(S:S)
```

**Average ROAS:**
```
=AVERAGE(T:T)
```

**Total Profit:**
```
=SUM(W:W)
```

**Best Performing Influencer:**
```
=INDEX(B:B, MATCH(MAX(W:W), W:W, 0))
```

**Average Engagement Rate:**
```
=AVERAGE(N:N)
```

**Average Conversion Rate:**
```
=AVERAGE(R:R)
```

### Step 4: Add Conditional Formatting

**Profit/Loss Column:**
- Green if > 0
- Red if < 0

**ROAS Column:**
- Green if > 3
- Yellow if 1-3
- Red if < 1

**Engagement Rate Column:**
- Green if > 5%
- Yellow if 2-5%
- Red if < 2%

---

## Tracking Methods

### 1. UTM Parameters

Create unique tracking links for each influencer:

```
https://yourwebsite.com/product?utm_source=instagram&utm_medium=influencer&utm_campaign=spring_launch&utm_content=@influencerhandle
```

**UTM Builder Tools:**
- Google Campaign URL Builder (free)
- Bitly (link shortening + tracking)
- Rebrandly (custom domains)

### 2. Discount Codes

Assign unique codes to each influencer:
- Format: INFLUENCER20, JANE15, MIKEFIT25
- Track in your e-commerce platform
- Attribute sales to specific influencers

### 3. Affiliate Links

Use affiliate platforms:
- ShareASale
- Commission Junction
- Impact
- Refersion
- Creator.co

### 4. Landing Pages

Create dedicated landing pages:
- yourwebsite.com/jane
- yourwebsite.com/partner/mikefit
- Track traffic and conversions separately

### 5. Pixel Tracking

Install tracking pixels:
- Facebook Pixel
- TikTok Pixel
- Google Ads Tag
- Track influencer traffic through retargeting audiences

---

## Platform-Specific Metrics

### Instagram

| Metric | Where to Find |
|--------|---------------|
| Impressions | Professional Dashboard → Insights |
| Reach | Professional Dashboard → Insights |
| Engagement | Likes + Comments + Saves (visible on post) |
| Profile Visits | Insights → Accounts Reached |
| Website Clicks | Insights → Interactions |

**Note:** Influencer must share insights screenshot or use Instagram's Branded Content tool.

### TikTok

| Metric | Where to Find |
|--------|---------------|
| Views | Video analytics |
| Likes | Video analytics |
| Comments | Video analytics |
| Shares | Video analytics |
| Profile Visits | Video analytics |
| Link Clicks | If using TikTok Shopping or bio link |

**Note:** Request analytics screenshot 48-72 hours after posting.

### YouTube

| Metric | Where to Find |
|--------|---------------|
| Views | YouTube Studio |
| Watch Time | YouTube Studio |
| Likes/Dislikes | YouTube Studio |
| Comments | YouTube Studio |
| Clicks on Links | Description link tracking (UTM) |
| Subscribers Gained | YouTube Studio |

**Note:** YouTube analytics are public for view counts; request detailed analytics for more.

### Facebook

| Metric | Where to Find |
|--------|---------------|
| Reach | Post Insights |
| Impressions | Post Insights |
| Engagement | Post Insights (reactions + comments + shares) |
| Link Clicks | Post Insights |

### Pinterest

| Metric | Where to Find |
|--------|---------------|
| Impressions | Pinterest Analytics |
| Saves | Pinterest Analytics |
| Clicks | Pinterest Analytics |
| Outbound Clicks | Pinterest Analytics |

---

## Reporting Templates

### Weekly Campaign Report

```
WEEKLY INFLUENCER CAMPAIGN REPORT
Week of: [Date]

NEW POSTS THIS WEEK:
- [Influencer] - [Platform] - [Campaign]
- [Influencer] - [Platform] - [Campaign]

TOP PERFORMERS:
1. [Influencer] - [Metric] - [Result]
2. [Influencer] - [Metric] - [Result]
3. [Influencer] - [Metric] - [Result]

TOTALS:
- Posts: [X]
- Total Reach: [X]
- Total Engagements: [X]
- Total Clicks: [X]
- Total Conversions: [X]
- Total Revenue: $[X]
- Total Spend: $[X]
- ROAS: [X]:1

ACTION ITEMS:
- [Item 1]
- [Item 2]
```

### Monthly Campaign Summary

```
MONTHLY INFLUENCER MARKETING REPORT
Month: [Month Year]

CAMPAIGN OVERVIEW:
- Active Campaigns: [X]
- Influencers Activated: [X]
- Total Content Pieces: [X]

PERFORMANCE HIGHLIGHTS:
- Best ROAS: [Influencer] at [X]:1
- Highest Engagement: [Influencer] at [X]%
- Most Conversions: [Influencer] with [X]
- Total Revenue Generated: $[X]
- Total Investment: $[X]
- Overall ROAS: [X]:1
- Total Profit: $[X]

PLATFORM BREAKDOWN:
Instagram:
- Posts: [X]
- Avg Engagement Rate: [X]%
- Revenue: $[X]

TikTok:
- Posts: [X]
- Avg Engagement Rate: [X]%
- Revenue: $[X]

YouTube:
- Videos: [X]
- Views: [X]
- Revenue: $[X]

INFLUENCER TIER PERFORMANCE:
Nano (1-10K): [X] campaigns, Avg ROAS [X]:1
Micro (10-100K): [X] campaigns, Avg ROAS [X]:1
Mid (100-500K): [X] campaigns, Avg ROAS [X]:1
Macro (500K+): [X] campaigns, Avg ROAS [X]:1

NEXT MONTH PRIORITIES:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

### Campaign Post-Mortem

```
CAMPAIGN POST-MORTEM
Campaign: [Name]
Dates: [Start] - [End]

OBJECTIVES:
☐ Brand Awareness
☐ Drive Sales
☐ Product Launch
☐ User Generated Content
☐ Other: [Specify]

RESULTS:
Budget: $[X]
Actual Spend: $[X]
Expected ROAS: [X]:1
Actual ROAS: [X]:1
Expected Conversions: [X]
Actual Conversions: [X]

WHAT WORKED:
- [Success 1]
- [Success 2]
- [Success 3]

WHAT DIDN'T WORK:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

LEARNINGS:
- [Learning 1]
- [Learning 2]
- [Learning 3]

RECOMMENDATIONS FOR NEXT TIME:
- [Recommendation 1]
- [Recommendation 2]
- [Recommendation 3]

INFLUENCER FEEDBACK:
- [Influencer 1]: [Feedback]
- [Influencer 2]: [Feedback]

WILL WE RUN AGAIN?
☐ Yes - [Why]
☐ No - [Why]
☐ Maybe - [Conditions]
```

---

## Benchmarks by Industry

### Average Engagement Rates by Platform

| Platform | Nano | Micro | Mid | Macro |
|----------|------|-------|-----|-------|
| Instagram | 5-8% | 3-6% | 2-4% | 1-3% |
| TikTok | 8-15% | 6-12% | 4-8% | 2-5% |
| YouTube | 4-8% | 3-6% | 2-4% | 1-3% |
| Facebook | 3-6% | 2-4% | 1-3% | 0.5-2% |
| Twitter | 1-3% | 0.8-2% | 0.5-1.5% | 0.3-1% |

### Average ROAS by Industry

| Industry | Avg ROAS | Good ROAS | Excellent ROAS |
|----------|----------|-----------|----------------|
| E-commerce (Fashion) | 3:1 | 4:1 | 6:1+ |
| E-commerce (Beauty) | 4:1 | 5:1 | 8:1+ |
| E-commerce (Home) | 3:1 | 4:1 | 6:1+ |
| SaaS | 2:1 | 3:1 | 5:1+ |
| Fitness | 3:1 | 4:1 | 7:1+ |
| Food & Beverage | 4:1 | 5:1 | 8:1+ |
| Travel | 2:1 | 3:1 | 5:1+ |
| Tech | 2:1 | 3:1 | 5:1+ |

### Average Conversion Rates

| Traffic Source | Avg Conversion Rate |
|----------------|---------------------|
| Influencer (Instagram) | 3-8% |
| Influencer (TikTok) | 2-6% |
| Influencer (YouTube) | 4-10% |
| Paid Social Ads | 1-3% |
| Email Marketing | 2-5% |
| Organic Search | 2-4% |

---

## Tips for Accurate Tracking

### ✅ Do's:
- Use UTM parameters on ALL links
- Create unique discount codes per influencer
- Request analytics screenshots within 72 hours
- Track metrics at consistent intervals (24h, 48h, 7 days, 30 days)
- Account for attribution window (typically 7-30 days)
- Include product/gifting costs in total spend
- Track long-tail performance (especially YouTube)

### ❌ Don'ts:
- Don't rely on a single metric
- Don't forget to track story views (they expire!)
- Don't ignore view-through conversions
- Don't count fake engagement (buy the data)
- Don't forget to factor in your time/labor costs

### 📊 Attribution Windows:

| Platform | Recommended Window |
|----------|-------------------|
| Instagram | 7 days click, 1 day view |
| TikTok | 7 days click, 1 day view |
| YouTube | 30 days click, 1 day view |
| Facebook | 7 days click, 1 day view |

---

## Automation Options

### Zapier Integrations:
- Google Sheets → Slack notifications
- Shopify → Google Sheets (new orders)
- Form submissions → Google Sheets
- Email → Google Sheets

### Native Integrations:
- Shopify + Influencer platforms
- WooCommerce + Affiliate plugins
- Google Analytics + Data Studio

### Tools to Consider:
- **Google Data Studio** - Free dashboards
- **Supermetrics** - Data automation ($$)
- **Influencity** - All-in-one tracking
- **Traackr** - Enterprise solution

---

*Last Updated: March 2026*
*Use this guide alongside the campaign-tracking-sheet.csv file*
