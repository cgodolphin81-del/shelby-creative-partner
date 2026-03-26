# Coverage Tracking System

## Overview

This system tracks media mentions, analyzes sentiment, measures reach, and calculates PR ROI to demonstrate the value of media relations efforts.

---

## Section 1: Tracking Framework

### What to Track

| Metric | Description | Why It Matters |
|--------|-------------|----------------|
| **Mentions** | Number of times company/product is mentioned | Volume of coverage |
| **Sentiment** | Positive, neutral, or negative tone | Reputation health |
| **Reach** | Potential audience size | Scale of impact |
| **Engagement** | Shares, comments, likes | Audience interaction |
| **Share of Voice** | % of conversation vs. competitors | Market position |
| **Message Pull-Through** | Key messages in coverage | Communication effectiveness |
| **Backlinks** | Links to your website | SEO value |
| **Referral Traffic** | Visitors from media sites | Direct impact |
| **Lead Generation** | Inquiries from coverage | Business impact |
| **Advertising Value Equivalent (AVE)** | Cost to buy equivalent ad space | Traditional PR metric |

### Coverage Categories

```
COVERAGE TYPES

Tier 1: Top-Tier National/International
• Wall Street Journal, New York Times, Forbes, Bloomberg
• TechCrunch, Wired, The Verge (tech)
• Reach: 1M+ audience

Tier 2: Industry Trade & Regional
• Industry-specific publications
• Major regional newspapers
• Reach: 100K-1M audience

Tier 3: Blogs, Podcasts, Local
• Industry blogs
• Podcasts
• Local media
• Reach: 10K-100K audience

Tier 4: Social & Community
• Reddit, Hacker News
• LinkedIn posts
• Community forums
• Reach: Variable
```

---

## Section 2: Monitoring Tools

### Recommended Tools by Budget

| Budget | Tools | Monthly Cost |
|--------|-------|--------------|
| **Free** | Google Alerts, Talkwalker Alerts, Mention (free tier) | $0 |
| **Startup** ($100-500/mo) | Meltwater Start, Cision Communicate, CoverageBook | $100-500 |
| **Growth** ($500-2K/mo) | Meltwater, Cision, Muck Rack, Brandwatch | $500-2K |
| **Enterprise** ($2K+/mo) | Critical Mention, Talkwalker, Sprinklr | $2K+ |

### Free Tools Setup

**Google Alerts:**
```
Alert 1: "[Company Name]"
Alert 2: "[Product Name]"
Alert 3: "[Founder/CEO Name]"
Alert 4: "[Company Name] OR [Product] -site:yourcompany.com
Alert 5: "[Competitor Name]" (for competitive intel)

Settings:
• As-it-happens
• All results
• Email delivery
```

**Talkwalker Alerts:**
- Similar to Google Alerts
- Often catches social mentions Google misses
- Set up same search terms

**Manual Searches (Weekly):**
- Google News: `"[Company Name]"`
- Twitter/X: `"[Company Name]"` (Latest tab)
- Reddit: `site:reddit.com "[Company Name]"`
- Product Hunt: Company/product page
- LinkedIn: Company name search

### Paid Tools Comparison

| Feature | Meltwater | Cision | Muck Rack | Brandwatch |
|---------|-----------|--------|-----------|------------|
| Media Database | ✓ | ✓ | ✓ | ✗ |
| Media Monitoring | ✓ | ✓ | ✓ | ✓ |
| Sentiment Analysis | ✓ | ✓ | ✓ | ✓ |
| Social Listening | ✓ | Limited | Limited | ✓ |
| Reporting | ✓ | ✓ | ✓ | ✓ |
| Pitching | ✗ | ✓ | ✓ | ✗ |
| Starting Price | $500/mo | $500/mo | $300/mo | $800/mo |

---

## Section 3: Coverage Log Template

### Google Sheets Template

```
Column A: Date
Column B: Outlet
Column C: Article Title
Column D: URL
Column E: Author
F: Tier (1-4)
G: Sentiment (Positive/Neutral/Negative)
H: Reach (estimated audience)
I: Key Messages Mentioned (Y/N/Which)
J: Backlink (Y/N)
K: Social Shares (if available)
L: Notes
M: Follow-up Required (Y/N)
```

### Sample Entry

| Date | Outlet | Title | URL | Author | Tier | Sentiment | Reach | Messages | Link | Shares | Notes |
|------|--------|-------|-----|--------|------|-----------|-------|----------|------|--------|-------|
| 3/15/26 | TechCrunch | "Startup X launches AI product" | techcrunch.com/... | Sarah Perez | 1 | Positive | 2.5M | 2/3 | Y | 1.2K | Exclusive, CEO interview |
| 3/16/26 | VentureBeat | "AI tool promises to..." | venturebeat.com/... | Dean Takahashi | 1 | Neutral | 800K | 1/3 | Y | 450 | Included competitor mention |

---

## Section 4: Sentiment Analysis

### Manual Sentiment Scoring

**Positive Indicators:**
- Praises product/company
- Highlights innovation
- Quotes leadership favorably
- Compares favorably to competitors
- Includes customer testimonials
- Forward-looking/optimistic tone

**Neutral Indicators:**
- Factual reporting only
- No clear opinion expressed
- Balanced pros/cons
- Announcement without analysis

**Negative Indicators:**
- Criticizes product/company
- Highlights problems/failures
- Quotes critics negatively
- Unfavorable competitor comparison
- Mentions controversies
- Skeptical tone

### Sentiment Scoring System

```
SCALE: -3 to +3

+3 = Extremely Positive (rave review, feature story)
+2 = Positive (favorable mention, good quote)
+1 = Slightly Positive (neutral with positive element)
0 = Neutral (factual, no opinion)
-1 = Slightly Negative (minor criticism)
-2 = Negative (significant criticism)
-3 = Extremely Negative (scandal, major criticism)
```

### Sentiment Calculation

```
Monthly Sentiment Score = (Sum of all sentiment scores) / (Number of mentions)

Example:
• 5 positive mentions (+2 average) = +10
• 3 neutral mentions (0) = 0
• 1 negative mention (-2) = -2
• Total: +8 / 9 mentions = +0.89 sentiment score

Target: Maintain +0.5 or higher
```

---

## Section 5: Reach & Impact Measurement

### Reach Calculation

**Traditional Reach:**
```
Total Reach = Sum of (Outlet Audience × Article Placement)

Placement Multipliers:
• Front page / Homepage feature: 100%
• Section front: 50%
• Standard article: 25%
• Brief mention: 10%
```

**Example:**
| Outlet | Audience | Placement | Multiplier | Impression |
|--------|----------|-----------|------------|------------|
| TechCrunch | 2.5M | Homepage | 100% | 2.5M |
| VentureBeat | 800K | Section | 50% | 400K |
| Industry Blog | 50K | Article | 25% | 12.5K |
| **Total** | | | | **2.91M** |

### Engagement Metrics

**Social Engagement:**
- Shares/Retweets
- Likes/Reactions
- Comments
- Clicks (if trackable)

**Engagement Rate:**
```
Engagement Rate = (Total Engagements / Reach) × 100

Industry Benchmarks:
• Facebook: 0.5-1%
• Twitter/X: 0.5-2%
• LinkedIn: 1-3%
• Instagram: 1-5%
```

### Website Impact

**Google Analytics Tracking:**
```
Acquisition → All Traffic → Referrals

Filter by:
• Media outlet domains
• Campaign parameters (if using UTM tags)

Metrics to track:
• Sessions from media
• Page views
• Time on site
• Conversion rate
• Goal completions
```

**UTM Parameter Template:**
```
?utm_source=[outlet]
&utm_medium=referral
&utm_campaign=[campaign_name]
&utm_content=[article_title]
```

---

## Section 6: Share of Voice

### Share of Voice Calculation

```
Your SOV = (Your Mentions / Total Category Mentions) × 100

Example:
• Your company: 45 mentions
• Competitor A: 30 mentions
• Competitor B: 25 mentions
• Total: 100 mentions

Your SOV = (45 / 100) × 100 = 45%
```

### Competitive Tracking Template

| Company | Mentions | Positive % | Reach | SOV |
|---------|----------|------------|-------|-----|
| Your Co | 45 | 78% | 5.2M | 45% |
| Competitor A | 30 | 65% | 3.1M | 30% |
| Competitor B | 25 | 72% | 2.8M | 25% |

### Share of Voice by Outlet Tier

| Tier | Your Mentions | Competitor A | Competitor B |
|------|---------------|--------------|--------------|
| Tier 1 | 12 | 8 | 5 |
| Tier 2 | 18 | 12 | 10 |
| Tier 3 | 15 | 10 | 10 |

---

## Section 7: Message Pull-Through

### Tracking Key Messages

**Define Messages:**
```
Message 1: [Primary differentiator]
Message 2: [Customer benefit]
Message 3: [Market opportunity/vision]
```

**Tracking:**
For each article, note which messages were included:

| Article | Message 1 | Message 2 | Message 3 | Notes |
|---------|-----------|-----------|-----------|-------|
| TechCrunch | ✓ | ✓ | ✗ | Led with differentiation |
| Forbes | ✓ | ✗ | ✓ | Focused on market opportunity |
| VentureBeat | ✗ | ✓ | ✗ | Only customer benefit mentioned |

**Pull-Through Rate:**
```
Message 1 Pull-Through = (Articles with Message 1 / Total Articles) × 100

Target: 60%+ for primary messages
```

---

## Section 8: ROI Calculation

### Method 1: Advertising Value Equivalent (AVE)

**Note:** AVE is controversial and being phased out. Use with caution.

```
AVE = Column Inches × Advertising Rate

Digital Equivalent:
AVE = (Article Reach / CPM) × 1000

Example:
• Article reach: 500,000
• Industry CPM: $25
• AVE = (500,000 / 1,000) × $25 = $12,500
```

**Industry CPM Benchmarks:**
- Tech publications: $20-40
- Business publications: $30-50
- Consumer publications: $15-30
- Trade publications: $25-45

### Method 2: Cost Per Mention

```
CPM (Cost Per Mention) = Total PR Investment / Number of Mentions

Example:
• Monthly PR retainer: $10,000
• Mentions generated: 50
• Cost Per Mention: $200
```

### Method 3: Value Per Lead

```
If PR generates leads:
PR Value = (Leads from PR × Conversion Rate × Customer LTV)

Example:
• Leads from PR: 100
• Conversion rate: 5%
• Customers: 5
• Average LTV: $10,000
• PR Value: 5 × $10,000 = $50,000
```

### Method 4: Comprehensive ROI

```
Total PR Value = 
  (AVE of coverage) +
  (SEO value of backlinks) +
  (Website traffic value) +
  (Lead generation value) +
  (Social engagement value)

ROI = [(Total Value - PR Investment) / PR Investment] × 100

Example:
• Coverage AVE: $150,000
• Backlink SEO value: $20,000
• Traffic value: $10,000
• Lead value: $50,000
• Total Value: $230,000
• PR Investment: $50,000
• ROI: [($230K - $50K) / $50K] × 100 = 360%
```

---

## Section 9: Reporting Templates

### Weekly Coverage Report

```markdown
# PR Coverage Report - Week of [Date]

## Summary
• Total Mentions: [X]
• Sentiment: [X]% Positive, [X]% Neutral, [X]% Negative
• Estimated Reach: [X]M
• Tier 1 Placements: [X]

## Top Coverage This Week
1. [Outlet] - "[Title]" - [URL]
2. [Outlet] - "[Title]" - [URL]
3. [Outlet] - "[Title]" - [URL]

## Key Messages Pull-Through
• Message 1: [X]% of articles
• Message 2: [X]% of articles
• Message 3: [X]% of articles

## Social Engagement
• Total Shares: [X]
• Total Comments: [X]
• Top Performing: [Article + metrics]

## Website Impact
• Referral Sessions: [X]
• Top Referrer: [Outlet]
• Conversions: [X]

## Notes
[Any additional context, upcoming opportunities, etc.]
```

### Monthly PR Dashboard

```markdown
# PR Performance Dashboard - [Month Year]

## Executive Summary
[2-3 sentence overview of performance]

## Key Metrics
| Metric | This Month | Last Month | Change |
|--------|------------|------------|--------|
| Total Mentions | | | |
| Positive Sentiment | | | |
| Estimated Reach | | | |
| Tier 1 Placements | | | |
| Backlinks | | | |
| Referral Traffic | | | |

## Coverage by Tier
| Tier | Count | % of Total |
|------|-------|------------|
| Tier 1 | | |
| Tier 2 | | |
| Tier 3 | | |
| Tier 4 | | |

## Sentiment Trend
[Chart: Sentiment over last 6 months]

## Share of Voice
| Company | SOV | Change |
|---------|-----|--------|
| Your Co | | |
| Competitor A | | |
| Competitor B | | |

## Top 10 Coverage
[List with outlet, title, URL, sentiment, reach]

## Message Pull-Through
| Message | % Coverage | Trend |
|---------|------------|-------|
| Message 1 | | |
| Message 2 | | |
| Message 3 | | |

## ROI Summary
| Metric | Value |
|--------|-------|
| PR Investment | $ |
| Coverage AVE | $ |
| Estimated Value | $ |
| ROI | % |

## Insights & Recommendations
[Key takeaways and action items]
```

### Quarterly Business Review (QBR) Template

```markdown
# PR QBR - Q[X] 2026

## Objectives Review
| Objective | Target | Actual | Status |
|-----------|--------|--------|--------|
| Tier 1 placements | 10 | 12 | ✓ Exceeded |
| Share of voice | 30% | 28% | △ Close |
| Sentiment score | +0.5 | +0.7 | ✓ Exceeded |

## Performance Highlights
• [Highlight 1]
• [Highlight 2]
• [Highlight 3]

## Coverage Analysis
[Deep dive into quality of coverage, key themes, etc.]

## Competitive Landscape
[Share of voice trends, competitor moves, opportunities]

## Channel Performance
| Channel | Mentions | Reach | Engagement |
|---------|----------|-------|------------|
| Print/Digital | | | |
| Broadcast | | | |
| Podcasts | | | |
| Social | | | |

## ROI Analysis
[Detailed ROI calculation, value delivered]

## Lessons Learned
• [Lesson 1]
• [Lesson 2]

## Next Quarter Priorities
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

## Budget & Resources
[Current spend, proposed changes, resource needs]
```

---

## Section 10: Automation & Integration

### Google Alerts + Sheets Integration

**Using Zapier/Make:**
```
Trigger: New Google Alert email
Action: Add row to Google Sheets

Fields to capture:
• Date
• Title
• Source
• URL
• Snippet
```

### Social Listening Automation

**Buffer/Hootsuite:**
- Set up streams for brand mentions
- Auto-capture engagement metrics
- Schedule regular reports

### Google Analytics Integration

**Custom Dashboard:**
```
Create GA4 dashboard with:
• Sessions from referral traffic
• Top referring media sites
• Conversion rate by referrer
• Goal completions from media
```

### CRM Integration

**Track PR-sourced leads:**
```
In Salesforce/HubSpot:
• Lead Source: "PR" or specific outlet
• Campaign: [PR campaign name]
• Track through to close
• Calculate pipeline influenced
```

---

## Section 11: Best Practices

### DO:
✓ Track consistently (same time daily/weekly)
✓ Verify reach numbers (don't trust inflated claims)
✓ Save all coverage (screenshots, PDFs)
✓ Thank journalists who cover you
✓ Share coverage internally
✓ Update tracker in real-time
✓ Calculate ROI multiple ways

### DON'T:
✗ Rely solely on AVE (it's outdated)
✗ Count irrelevant mentions
✗ Ignore negative coverage (address it)
✗ Over-report vanity metrics
✗ Forget to track competitors
✗ Skip sentiment analysis
✗ Fail to connect PR to business outcomes

---

*Part of PR & Media Relations Service Package*
*Last Updated: March 2026*
