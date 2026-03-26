# Content Calendar Template

## Overview
Comprehensive content planning and scheduling calendar for social media, blog, email, and video content with performance tracking.

## Structure

### Sheet 1: Monthly Content Calendar

| Date | Day | Platform | Content Type | Topic/Title | Status | Copy | Visual | Hashtags | Scheduled Time | Published Link | Performance |
|------|-----|----------|--------------|-------------|--------|------|--------|----------|----------------|----------------|-------------|
| Mar 24 | Mon | Instagram | Reel | Product Demo | Scheduled | [Link] | [Link] | #tech #demo | 10:00 AM | | |
| Mar 24 | Mon | LinkedIn | Article | Industry Trends | Draft | [Link] | | #business #trends | 8:00 AM | | |
| Mar 25 | Tue | Twitter | Thread | Tips & Tricks | Scheduled | [Link] | | #tips #howto | 2:00 PM | | |
| Mar 25 | Tue | YouTube | Video | Tutorial #15 | In Progress | [Link] | [Link] | #tutorial | 12:00 PM | | |
| Mar 26 | Wed | Instagram | Post | Customer Story | Scheduled | [Link] | [Link] | #testimonial | 11:00 AM | | |
| Mar 26 | Wed | Blog | Article | Ultimate Guide | Draft | [Link] | [Link] | SEO keywords | 9:00 AM | | |
| Mar 27 | Thu | Facebook | Post | Behind Scenes | Scheduled | [Link] | [Link] | #bts #culture | 3:00 PM | | |
| Mar 27 | Thu | Email | Newsletter | Weekly Roundup | Draft | [Link] | [Link] | | 7:00 AM | | |
| Mar 28 | Fri | Instagram | Story | Q&A Session | Scheduled | [Link] | [Link] | #askmeanything | 4:00 PM | | |
| Mar 29 | Sat | Twitter | Poll | Audience Question | Scheduled | [Link] | | #poll | 1:00 PM | | |
| Mar 30 | Sun | LinkedIn | Post | Weekly Reflection | Scheduled | [Link] | | #reflection | 6:00 PM | | |

### Content Status
- Idea
- Draft
- In Progress
- Scheduled
- Published
- Evergreen

### Key Formulas

```excel
// Content Count by Platform
=COUNTIF(Platform_Column,"Instagram")

// Content Count by Status
=COUNTIF(Status_Column,"Scheduled")

// Posts This Week
=COUNTIFS(Date_Column,">="&WEEKDAY(TODAY()),Date_Column,"<="&WEEKDAY(TODAY())+7)

// Engagement Rate (when published)
=(Likes+Comments+Shares)/Impressions

// Best Performing Day
=INDEX(Day_Column,MATCH(MAX(Performance_Column),Performance_Column,0))
```

### Sheet 2: Content Ideas Bank

| ID | Topic | Platform | Content Type | Target Audience | Keywords | Priority | Date Added | Used | Notes |
|----|-------|----------|--------------|-----------------|----------|----------|------------|------|-------|
| 001 | How to optimize spreadsheets | YouTube | Tutorial | Beginners | excel, tips, productivity | High | 2026-01-15 | No | Q1 priority |
| 002 | Customer success story | LinkedIn | Case Study | B2B | testimonial, results | Medium | 2026-01-20 | No | Need approval |
| 003 | Quick formula tips | Instagram | Reel | All | formulas, quicktips | High | 2026-02-01 | No | Series idea |
| 004 | Industry report summary | Blog | Article | Professionals | trends, analysis | Medium | 2026-02-10 | No | Research needed |
| 005 | Team introduction | Facebook | Post | Community | team, culture | Low | 2026-02-15 | Yes | Published Feb 20 |

### Idea Priority Matrix

| Priority | Criteria | Action |
|----------|----------|--------|
| High | High impact, trending, timely | Schedule within 2 weeks |
| Medium | Good value, evergreen | Schedule within month |
| Low | Nice to have, filler | Use when needed |

### Sheet 3: Platform Specifications

| Platform | Image Size | Video Length | Character Limit | Best Times | Frequency |
|----------|------------|--------------|-----------------|------------|-----------|
| Instagram Post | 1080x1080 | 60 sec (Reel: 90 sec) | 2,200 | 11 AM, 7 PM | 1-2/day |
| Instagram Story | 1080x1920 | 15 sec per slide | 500 | 9 AM, 12 PM, 6 PM | 5-10/day |
| Facebook | 1200x630 | 240 min | 63,206 | 1 PM, 3 PM | 1-2/day |
| Twitter/X | 1200x675 | 2 min 20 sec | 280 | 8 AM, 12 PM, 5 PM | 3-5/day |
| LinkedIn | 1200x627 | 10 min | 3,000 | 8 AM, 12 PM, 5 PM | 1/day |
| YouTube | 1280x720 | 12 min (optimal) | 5,000 | 2 PM, 6 PM | 2-3/week |
| TikTok | 1080x1920 | 60 sec | 2,200 | 6 AM, 10 AM, 10 PM | 1-3/day |
| Blog | 1200x630 | N/A | Unlimited | 6 AM, 10 AM | 2-4/week |
| Email | 600px width | N/A | N/A | 10 AM Tue-Thu | 1-2/week |

### Sheet 4: Performance Analytics

| Date | Platform | Content Type | Impressions | Reach | Likes | Comments | Shares | Clicks | Engagement Rate |
|------|----------|--------------|-------------|-------|-------|----------|--------|--------|-----------------|
| Mar 15 | Instagram | Reel | 15,420 | 12,350 | 892 | 45 | 123 | 234 | 6.8% |
| Mar 16 | LinkedIn | Article | 8,540 | 7,200 | 245 | 32 | 67 | 189 | 4.1% |
| Mar 17 | Twitter | Thread | 12,300 | 9,800 | 456 | 78 | 234 | 145 | 6.2% |
| Mar 18 | YouTube | Video | 25,000 | 22,000 | 1,250 | 89 | N/A | 450 | 5.4% |
| Mar 19 | Instagram | Post | 9,800 | 8,100 | 567 | 34 | 45 | 123 | 6.6% |

### Performance Formulas

```excel
// Engagement Rate
=(Likes+Comments+Shares)/Reach

// Click-Through Rate
=Clicks/Impressions

// Video Completion Rate
=Completions/Views

// Cost Per Engagement (if paid)
=Spend/(Likes+Comments+Shares)

// Follower Growth Rate
=(New_Followers-Unfollowers)/Total_Followers

// Viral Coefficient
=Shares/Reach
```

### Sheet 5: Campaign Tracker

| Campaign | Start Date | End Date | Platform | Goal | Budget | Spend | Results | ROI | Status |
|----------|------------|----------|----------|------|--------|-------|---------|-----|--------|
| Spring Sale | Mar 1 | Mar 31 | All | Sales | $5,000 | $3,200 | $18,500 | 478% | Active |
| Product Launch | Feb 15 | Mar 15 | IG, YT | Awareness | $3,000 | $2,850 | 125K reach | N/A | Complete |
| Lead Gen | Mar 10 | Apr 10 | LinkedIn, FB | Leads | $4,000 | $1,800 | 245 leads | $7.35/lead | Active |
| Brand Awareness | Jan 1 | Dec 31 | All | Followers | $24,000 | $6,000 | +12K followers | $0.50/follower | Active |

### Campaign ROI Formula

```excel
// ROI %
=(Revenue-Cost)/Cost*100

// Cost Per Result
=Spend/Results

// Return on Ad Spend (ROAS)
=Revenue/Spend
```

### Content Pillars

| Pillar | Description | % of Content | Examples |
|--------|-------------|--------------|----------|
| Educational | How-to, tips, tutorials | 40% | Formula guides, templates |
| Inspirational | Success stories, motivation | 20% | Customer wins, milestones |
| Promotional | Products, services, offers | 20% | New features, discounts |
| Engagement | Questions, polls, community | 20% | Q&A, behind scenes |

### Hashtag Strategy

```
Tier 1 (High Volume): #excel #productivity #business (1M+ posts)
Tier 2 (Medium): #spreadsheettips #dataanalysis #officehacks (100K-1M)
Tier 3 (Niche): #excelhacks #googlesheetstips #formulafri (10K-100K)
Branded: #YourBrand #YourCampaign
```

### Conditional Formatting

```excel
// Overdue Content
=AND(Status="Draft",Date<TODAY())

// High Performers (Top 10%)
=Performance_Column>=PERCENTILE(Performance_Column,0.9)

// Low Performers (Bottom 10%)
=Performance_Column<=PERCENTILE(Performance_Column,0.1)

// Posting Frequency Alert
=COUNTIFS(Platform_Column,"Instagram",Date_Column,">="&TODAY()-7)<5
```

### Weekly Planning Checklist

- [ ] Review last week's performance
- [ ] Brainstorm new content ideas
- [ ] Schedule posts for next week
- [ ] Create visual assets
- [ ] Write captions and copy
- [ ] Research trending topics
- [ ] Engage with audience comments
- [ ] Update content calendar

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Beginner-Intermediate
**Time to Set Up**: 30 minutes
**Best For**: Social Media Managers, Content Creators, Marketing Teams
