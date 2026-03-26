# Notion Content Calendar - Complete Template Structure

**Copy this entire structure into Notion to create your Content Calendar.**

---

## 🏠 CONTENT DASHBOARD (Main Page)

### Page Title: `📅 Content Calendar Dashboard`

**Cover Image:** Colorful content planning/creative workspace
**Icon:** 📅

---

## 📝 DATABASE 1: CONTENT CALENDAR (Master)

**Database Name:** `📝 Content Calendar`
**Database Type:** Table with Calendar & Board views

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Content Title | Title | (text) |
| Content Type | Select | 📱 Instagram Post, 📱 Instagram Story, 📱 Instagram Reel, 📘 Facebook Post, 💼 LinkedIn Post, 🐦 Twitter/X, 📌 Pinterest Pin, 📧 Newsletter, 📝 Blog Post, 🎬 YouTube Video, 🎙️ Podcast, 📄 TikTok |
| Status | Status | 💡 Idea, 📝 Draft, 🎨 In Design, ✅ Ready, 📅 Scheduled, ✓ Published |
| Platform | Multi-select | Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, Blog, Email, Podcast |
| Publish Date | Date | (with time) |
| Campaign | Relation | → Campaigns database |
| Topic/Category | Select | Educational, Promotional, Behind-the-Scenes, User-Generated, Testimonial, Tips, News/Updates, Entertainment, Inspirational, Product Feature |
| Priority | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| Assigned To | Person | (team member) |
| Caption/Copy | Text | (full post copy) |
| Hashtags | Text | (hashtag list) |
| Media Assets | Files | (images/videos) |
| Design Status | Select | Not Started, In Progress, Review, Approved |
| Link | URL | (published post link) |
| Views | Number | (analytics) |
| Likes | Number | (analytics) |
| Comments | Number | (analytics) |
| Shares | Number | (analytics) |
| Clicks | Number | (analytics) |
| Engagement Rate | Formula | `if(prop("Views") > 0, (prop("Likes") + prop("Comments") + prop("Shares")) / prop("Views") * 100, 0)` |
| Content Pillar | Select | Awareness, Consideration, Conversion, Retention, Advocacy |
| Repurpose From | Relation | → Content Calendar (self-relation) |
| Notes | Text | (internal notes) |

### Views to Create:

**1. Calendar View (Monthly)**
- Layout: Calendar
- Date Property: Publish Date
- Show: Content Type icon

**2. This Week (List)**
- Filter: Publish Date → This week
- Sort: Publish Date (ascending)

**3. Content Pipeline (Board)**
- Group: Status
- Sort: Publish Date (ascending)
- Card Preview: Platform

**4. By Platform (Board)**
- Group: Platform (first item)
- Sort: Publish Date

**5. Content Backlog (Table)**
- Filter: Status = "💡 Idea" OR Status = "📝 Draft"
- Sort: Priority (descending)

**6. Published This Month (Table)**
- Filter: Publish Date → This month AND Status = "✓ Published"
- Sort: Publish Date (descending)

**7. Needs Design (Table)**
- Filter: Design Status = "Not Started" OR Design Status = "In Progress"
- Sort: Publish Date (ascending)

**8. Overdue (Table)**
- Filter: Publish Date < Today AND Status ≠ "✓ Published"
- Sort: Publish Date (ascending)

---

## 💡 DATABASE 2: CONTENT IDEAS

**Database Name:** `💡 Content Ideas Bank`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Idea Title | Title | (text) |
| Description | Text | (detailed idea) |
| Type | Select | Post, Story, Reel, Blog, Video, Podcast, Newsletter, Other |
| Platform | Multi-select | Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, Blog |
| Category | Select | Educational, Promotional, BTS, UGC, Testimonial, Tips, News, Entertainment, Inspirational |
| Priority | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| Status | Select | 💭 Raw Idea, 📝 fleshed Out, ✅ Ready to Schedule, ❌ Rejected, ✓ Used |
| Inspiration Source | URL | (link to inspiration) |
| Date Captured | Created Time | (auto) |
| Related Campaign | Relation | → Campaigns database |
| Notes | Text | (additional context) |

### Views:
- All Ideas (Table)
- Ready to Schedule (Filter: Status = "✅ Ready to Schedule")
- By Category (Group: Category)
- High Priority (Filter: Priority = "🔴 High")

---

## 🎯 DATABASE 3: CAMPAIGNS

**Database Name:** `🎯 Marketing Campaigns`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Campaign Name | Title | (text) |
| Description | Text | (campaign overview) |
| Status | Select | 📋 Planning, 🚀 Active, ⏸️ Paused, ✅ Completed |
| Start Date | Date | (date picker) |
| End Date | Date | (date picker) |
| Goal | Select | Brand Awareness, Lead Generation, Sales, Engagement, Product Launch, Event Promotion |
| Target Audience | Text | (audience description) |
| Budget | Number | $ format |
| Content Count | Rollup | From Content Calendar → Count all |
| Published Count | Rollup | From Content Calendar → Count where Status = Published |
| Total Reach | Number | (sum of views) |
| Total Engagement | Number | (sum of likes + comments + shares) |
| ROI | Formula | `(Revenue - prop("Budget")) / prop("Budget") * 100` |
| Owner | Person | (team member) |
| Notes | Text | (campaign notes) |

### Views:
- Active Campaigns (Filter: Status = "🚀 Active")
- Campaign Calendar (Calendar view by Start Date)
- By Goal (Group: Goal)

---

## 📊 DATABASE 4: PLATFORMS

**Database Name:** `📱 Social Platforms`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Platform Name | Title | Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, Blog |
| Handle/URL | URL | (profile link) |
| Followers | Number | (follower count) |
| Posting Frequency | Select | Daily, 3x/week, 2x/week, Weekly, Bi-weekly |
| Best Time to Post | Text | (e.g., "9 AM, 1 PM, 7 PM") |
| Content Types | Multi-select | Posts, Stories, Reels, Live, etc. |
| Brand Guidelines | Text | (tone, style notes) |
| Hashtag Strategy | Text | (hashtag approach) |
| Monthly Goal | Number | (follower/post goal) |
| Manager | Person | (team member responsible) |

---

## 📁 DATABASE 5: CONTENT ASSETS

**Database Name:** `📁 Media Library`

### Properties:

| Property Name | Type | Options/Formula |
|--------------|------|-----------------|
| Asset Name | Title | (text) |
| Type | Select | 📷 Photo, 🎬 Video, 🎨 Graphic, 📄 Document, 🔗 Link |
| File | Files | (upload file) |
| Used In | Relation | → Content Calendar |
| Tags | Multi-select | Product, Team, Office, Customer, Event, Template, Other |
| Date Created | Date | (date picker) |
| Photographer/Creator | Text | (credit) |
| Usage Rights | Select | Owned, Licensed, Stock, UGC |
| Size | Text | (dimensions) |
| Format | Select | JPG, PNG, MP4, MOV, GIF, PDF |

---

## 📈 DASHBOARD WIDGETS

### Create these on the main dashboard:

**1. Content Overview**
```
📊 This Week's Content
- Posts Scheduled: [Count this week]
- Posts Published: [Count published this week]
- Posts Pending Design: [Count needs design]
```

**2. Platform Activity**
```
📱 Posts by Platform (This Month)
- Instagram: [count]
- LinkedIn: [count]
- Twitter/X: [count]
- Blog: [count]
```

**3. Content Pipeline**
```
🔄 Content Status
- 💡 Ideas: [count]
- 📝 Draft: [count]
- 🎨 In Design: [count]
- 📅 Scheduled: [count]
- ✓ Published: [count]
```

**4. Upcoming Deadlines**
```
⏰ Due Soon
[List view: Content due in next 3 days]
```

**5. Quick Actions**
```
⚡ Quick Create
- [ ] New Content Idea
- [ ] Schedule Post
- [ ] Add to Backlog
- [ ] New Campaign
```

---

## 🎯 CONTENT TEMPLATES (Page Templates)

### Blog Post Template:
```
# {{Blog Post Title}}

## 📋 Meta Information
- **Status:** {{Status}}
- **Target Publish:** {{Date}}
- **Author:** {{Author}}
- **Category:** {{Category}}
- **Word Count Target:** 1,500

---

## 🎯 SEO
**Primary Keyword:** 
**Secondary Keywords:** 
**Meta Title:** 
**Meta Description:** 
**URL Slug:** 

---

## 📝 Outline

### Introduction
- Hook:
- Problem:
- Promise:

### Main Points
1. 
2. 
3. 

### Conclusion
- Summary:
- CTA:

---

## ✍️ Draft Content



---

## 📎 Assets Needed
- [ ] Featured image
- [ ] In-post graphics
- [ ] Screenshots

---

## 🔗 Promotion Plan
- [ ] Social media posts (which platforms?)
- [ ] Email newsletter
- [ ] LinkedIn article
- [ ] Pinterest pin
```

### Social Post Template:
```
# {{Post Title}}

## 📋 Details
- **Platform:** {{Platform}}
- **Type:** {{Content Type}}
- **Publish Date:** {{Date}}
- **Status:** {{Status}}

---

## 📝 Caption

{{Write your full caption here}}



---

## #️⃣ Hashtags

{{Hashtag list}}



---

## 🎨 Visual

**Asset Type:** Image / Video / Carousel
**Dimensions:** 1080x1080 / 1080x1350 / 1080x1920
**Brief:** 

**Asset:** [Upload or link]

---

## 🔗 Links

**Link in Bio:** Yes / No
**URL:** 

---

## ✅ Checklist
- [ ] Caption written
- [ ] Hashtags researched
- [ ] Visual created
- [ ] Link prepared
- [ ] Scheduled in platform
- [ ] Added to analytics tracker
```

### Campaign Template:
```
# Campaign: {{Campaign Name}}

## 📋 Overview
- **Duration:** {{Start}} - {{End}}
- **Goal:** {{Goal}}
- **Budget:** ${{Budget}}
- **Owner:** {{Owner}}
- **Status:** {{Status}}

---

## 🎯 Objectives
1. 
2. 
3. 

---

## 👥 Target Audience



---

## 📝 Content Plan

| Date | Platform | Content Type | Topic | Status |
|------|----------|--------------|-------|--------|
| | | | | |

---

## 📊 Metrics to Track
- 
- 
- 

---

## 📈 Results

**Total Reach:** 
**Total Engagement:** 
**Conversions:** 
**ROI:** 

---

## 📝 Learnings



```

---

## 📅 CONTENT PILLARS

### Define your 4-5 content pillars:

**1. Educational (Teach)**
- How-to guides
- Tips & tricks
- Industry insights
- Tutorials

**2. Inspirational (Motivate)**
- Success stories
- Motivational quotes
- Behind-the-scenes
- Journey updates

**3. Promotional (Sell)**
- Product features
- Special offers
- Testimonials
- Case studies

**4. Engagement (Connect)**
- Questions
- Polls
- User-generated content
- Community highlights

**5. Entertainment (Delight)**
- Memes (if appropriate)
- Fun facts
- Trending topics
- Light-hearted content

---

## 🔄 CONTENT REPURPOSING WORKFLOW

### One piece of content → Multiple platforms:

**Example: Blog Post**
```
Blog Post (1,500 words)
├── LinkedIn Article (same content)
├── Twitter Thread (10 tweets)
├── Instagram Carousel (5-10 slides)
├── Instagram Reel (60 sec summary)
├── Pinterest Pin (graphic + link)
├── Email Newsletter (summary + link)
└── TikTok (quick tips from post)
```

### Repurposing Template:
```
Original Content: [Link]
Repurposed Into:
- [ ] LinkedIn post
- [ ] Twitter thread
- [ ] Instagram carousel
- [ ] Email snippet
- [ ] Short-form video
```

---

## 📊 ANALYTICS TRACKING

### Weekly Review Template:
```
## Week of {{Date}}

### Top Performing Content
1. [Post] - [Platform] - [Engagement]
2. [Post] - [Platform] - [Engagement]
3. [Post] - [Platform] - [Engagement]

### Lessons Learned
- What worked:
- What didn't:
- To try next week:

### Next Week's Focus
- 
- 
- 
```

---

## ⚙️ AUTOMATIONS

### Notion Automations:

**1. Content Due Tomorrow**
- Trigger: Publish Date = Tomorrow
- Action: Notify Assigned To

**2. Status Change to Published**
- Trigger: Status = "✓ Published"
- Action: Add to Analytics Tracker

**3. New Campaign Created**
- Trigger: New row in Campaigns
- Action: Create campaign planning template

---

## 🎨 CUSTOMIZATION TIPS

1. **Add your brand colors** to status options
2. **Customize content types** for your platforms
3. **Create platform-specific templates**
4. **Set up recurring content** (weekly tips, monthly roundups)
5. **Integrate with scheduling tools** (Buffer, Later, Hootsuite)

---

**Template Version:** 1.0  
**Compatible:** Notion (Free & Paid plans)  
**Last Updated:** March 2026
