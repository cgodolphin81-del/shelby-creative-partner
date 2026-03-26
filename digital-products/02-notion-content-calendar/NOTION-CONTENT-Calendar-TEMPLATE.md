# 📅 Notion Content Calendar - Complete Template

**Copy this structure directly into Notion to create your Content Calendar.**

---

## 📋 SETUP INSTRUCTIONS

### Step 1: Create Main Page
1. In Notion, click "+ New Page"
2. Title it: "📅 Content Calendar"
3. Add an icon: 📅
4. Add a cover image (creative/workspace themed)

### Step 2: Create the Databases
Create each database below as a **Full Page Database** within your main Content Calendar page.

---

## 🗄️ DATABASE 1: CONTENT CALENDAR (Master)

**Create as:** Full Page Database → Calendar View
**Name:** 📝 Content Calendar

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Content Title | Title | Default |
| Content Type | Select | Options: 📱 Instagram Post, 📱 Instagram Story, 📱 Instagram Reel, 📘 Facebook Post, 💼 LinkedIn Post, 🐦 Twitter/X, 📌 Pinterest Pin, 📧 Newsletter, 📝 Blog Post, 🎬 YouTube Video, 🎙️ Podcast, 📄 TikTok |
| Status | Status | Options: 💡 Idea, 📝 Draft, 🎨 In Design, ✅ Ready, 📅 Scheduled, ✓ Published |
| Platform | Multi-select | Options: Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, Blog, Email, Podcast |
| Publish Date | Date | Include time |
| Campaign | Relation | Link to Campaigns database |
| Topic/Category | Select | Options: Educational, Promotional, Behind-the-Scenes, User-Generated, Testimonial, Tips, News/Updates, Entertainment, Inspirational, Product Feature |
| Priority | Select | Options: 🔴 High, 🟡 Medium, 🟢 Low |
| Assigned To | People | Default |
| Caption/Copy | Text | Default |
| Hashtags | Text | Default |
| Media Assets | Files & Media | Default |
| Design Status | Select | Options: Not Started, In Progress, Review, Approved |
| Link | URL | Published post link |
| Views | Number | Default |
| Likes | Number | Default |
| Comments | Number | Default |
| Shares | Number | Default |
| Clicks | Number | Default |
| Engagement Rate | Formula | `if(prop("Views") > 0, (prop("Likes") + prop("Comments") + prop("Shares")) / prop("Views") * 100, 0)` |
| Content Pillar | Select | Options: Awareness, Consideration, Conversion, Retention, Advocacy |
| Notes | Text | Default |

### Views to Create:

**1. Calendar (Calendar)**
- Date Property: Publish Date
- Show: Content Type icon

**2. This Week (List)**
- Filter: Publish Date IS THIS WEEK
- Sort: Publish Date (ascending)

**3. Content Pipeline (Board)**
- Group by: Status
- Sort: Publish Date (ascending)
- Card Preview: Platform

**4. By Platform (Board)**
- Group by: Platform (first item)
- Sort: Publish Date

**5. Content Backlog (Table)**
- Filter: Status IS 💡 Idea OR Status IS 📝 Draft
- Sort: Priority (descending)

**6. Published This Month (Table)**
- Filter: Publish Date IS THIS MONTH AND Status IS ✓ Published
- Sort: Publish Date (descending)

**7. Needs Design (Table)**
- Filter: Design Status IS "Not Started" OR Design Status IS "In Progress"
- Sort: Publish Date (ascending)

**8. Overdue (Table)**
- Filter: Publish Date IS BEFORE TODAY AND Status IS NOT ✓ Published
- Sort: Publish Date (ascending)

---

## 🗄️ DATABASE 2: CONTENT IDEAS

**Create as:** Full Page Database → Table View
**Name:** 💡 Content Ideas Bank

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Idea Title | Title | Default |
| Description | Text | Default |
| Type | Select | Options: Post, Story, Reel, Blog, Video, Podcast, Newsletter, Other |
| Platform | Multi-select | Options: Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, Blog |
| Category | Select | Options: Educational, Promotional, BTS, UGC, Testimonial, Tips, News, Entertainment, Inspirational |
| Priority | Select | Options: 🔴 High, 🟡 Medium, 🟢 Low |
| Status | Select | Options: 💭 Raw Idea, 📝 Fleshed Out, ✅ Ready to Schedule, ❌ Rejected, ✓ Used |
| Inspiration Source | URL | Default |
| Date Captured | Created Time | Auto |
| Related Campaign | Relation | Link to Campaigns database |
| Notes | Text | Default |

### Views to Create:

**1. All Ideas (Table)**
- Sort: Date Captured (descending)

**2. Ready to Schedule (Table)**
- Filter: Status IS ✅ Ready to Schedule
- Sort: Priority (descending)

**3. By Category (Board)**
- Group by: Category

**4. High Priority (Table)**
- Filter: Priority IS 🔴 High
- Sort: Date Captured (ascending)

---

## 🗄️ DATABASE 3: CAMPAIGNS

**Create as:** Full Page Database → Board View
**Name:** 🎯 Marketing Campaigns

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Campaign Name | Title | Default |
| Description | Text | Default |
| Status | Select | Options: 📋 Planning, 🚀 Active, ⏸️ Paused, ✅ Completed |
| Start Date | Date | Default |
| End Date | Date | Default |
| Goal | Select | Options: Brand Awareness, Lead Generation, Sales, Engagement, Product Launch, Event Promotion |
| Target Audience | Text | Default |
| Budget | Number | Format: Dollar |
| Content Count | Rollup | Relation: Content Calendar, Calculate: Count all |
| Published Count | Rollup | Relation: Content Calendar, Calculate: Count where Status = Published |
| Total Reach | Number | Default |
| Total Engagement | Number | Default |
| ROI | Formula | `(prop("Total Engagement") - prop("Budget")) / prop("Budget") * 100` |
| Owner | People | Default |
| Notes | Text | Default |

### Views to Create:

**1. Active Campaigns (Board)**
- Filter: Status IS 🚀 Active
- Group by: Goal

**2. Campaign Calendar (Calendar)**
- Date Property: Start Date

**3. By Goal (Board)**
- Group by: Goal

**4. Completed (Table)**
- Filter: Status IS ✅ Completed
- Sort: End Date (descending)

---

## 🗄️ DATABASE 4: PLATFORMS

**Create as:** Full Page Database → Gallery View
**Name:** 📱 Social Platforms

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Platform Name | Title | Default |
| Handle/URL | URL | Default |
| Followers | Number | Default |
| Posting Frequency | Select | Options: Daily, 3x/week, 2x/week, Weekly, Bi-weekly |
| Best Time to Post | Text | Default |
| Content Types | Multi-select | Options: Posts, Stories, Reels, Live, Shorts, Pins, Articles |
| Brand Guidelines | Text | Default |
| Hashtag Strategy | Text | Default |
| Monthly Goal | Number | Default |
| Manager | People | Default |

### Platform Entries to Create:

**Instagram**
- Posting Frequency: Daily
- Best Time to Post: 9 AM, 1 PM, 7 PM
- Content Types: Posts, Stories, Reels
- Brand Guidelines: Visual-first, on-brand colors, authentic voice
- Hashtag Strategy: 10-15 mix of broad and niche

**LinkedIn**
- Posting Frequency: 3x/week
- Best Time to Post: 8 AM, 12 PM, 5 PM (weekdays)
- Content Types: Posts, Articles
- Brand Guidelines: Professional, value-driven, thought leadership
- Hashtag Strategy: 3-5 industry-specific

**Twitter/X**
- Posting Frequency: Daily
- Best Time to Post: 9 AM, 1 PM, 5 PM
- Content Types: Posts, Threads
- Brand Guidelines: Conversational, timely, engaging
- Hashtag Strategy: 1-3 trending + branded

**Facebook**
- Posting Frequency: 3x/week
- Best Time to Post: 1 PM, 3 PM (weekdays)
- Content Types: Posts, Stories, Live
- Brand Guidelines: Community-focused, engaging
- Hashtag Strategy: 2-5 relevant

**Pinterest**
- Posting Frequency: Daily
- Best Time to Post: 8 PM, 2 AM, 4 PM
- Content Types: Pins, Idea Pins
- Brand Guidelines: Inspirational, high-quality visuals
- Hashtag Strategy: 5-10 keyword-rich

**TikTok**
- Posting Frequency: Daily
- Best Time to Post: 6 AM, 10 AM, 10 PM
- Content Types: Videos, Live
- Brand Guidelines: Authentic, entertaining, trending
- Hashtag Strategy: 3-5 trending + niche

**YouTube**
- Posting Frequency: Weekly
- Best Time to Post: 2 PM, 4 PM (weekdays)
- Content Types: Videos, Shorts, Live
- Brand Guidelines: Educational, entertaining, high production
- Hashtag Strategy: 5-10 SEO-focused

---

## 🗄️ DATABASE 5: CONTENT ASSETS

**Create as:** Full Page Database → Gallery View
**Name:** 📁 Media Library

### Properties to Add:

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Asset Name | Title | Default |
| Type | Select | Options: 📷 Photo, 🎬 Video, 🎨 Graphic, 📄 Document, 🔗 Link |
| File | Files & Media | Default |
| Used In | Relation | Link to Content Calendar database |
| Tags | Multi-select | Options: Product, Team, Office, Customer, Event, Template, Other |
| Date Created | Date | Default |
| Photographer/Creator | Text | Default |
| Usage Rights | Select | Options: Owned, Licensed, Stock, UGC |
| Size | Text | Default |
| Format | Select | Options: JPG, PNG, MP4, MOV, GIF, PDF |

### Views to Create:

**1. All Assets (Gallery)**
- Sort: Date Created (descending)

**2. By Type (Board)**
- Group by: Type

**3. By Tag (Board)**
- Group by: Tags

---

## 📊 CONTENT DASHBOARD

**Create as:** Page content with Linked Database Views

### Add These Sections:

```
# 📅 Content Calendar Dashboard

### 📊 This Week's Content
```

**Insert Linked View of Content Calendar database:**
- View Type: List
- Filter: Publish Date IS THIS WEEK
- Sort: Publish Date (ascending)

```
### 📱 Posts by Platform (This Month)
```

**Insert Linked View of Content Calendar database:**
- View Type: Board
- Filter: Publish Date IS THIS MONTH
- Group by: Platform

```
### 🔄 Content Status
```

**Insert Linked View of Content Calendar database:**
- View Type: Board
- Group by: Status

```
### ⏰ Due Soon
```

**Insert Linked View of Content Calendar database:**
- View Type: List
- Filter: Publish Date IS WITHIN THE NEXT 3 DAYS AND Status IS NOT ✓ Published
- Sort: Publish Date (ascending)
- Limit: 10

```
### 💡 Ideas Ready to Schedule
```

**Insert Linked View of Content Ideas database:**
- View Type: Table
- Filter: Status IS ✅ Ready to Schedule
- Sort: Priority (descending)
- Limit: 10

```
### ⚡ Quick Actions
- [ ] New Content Idea
- [ ] Schedule Post
- [ ] Add to Backlog
- [ ] New Campaign
- [ ] Upload Asset
```

---

## 📝 PAGE TEMPLATES

### Blog Post Template

**Create as:** Database Template in Content Calendar (filter: Content Type = Blog Post)

```
# {{Blog Post Title}}

## 📋 Meta Information
- **Status:** {{Status}}
- **Target Publish:** {{Publish Date}}
- **Author:** {{Assigned To}}
- **Category:** {{Topic/Category}}
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

### Social Post Template

**Create as:** Database Template in Content Calendar (filter: Content Type = Instagram Post/LinkedIn Post/etc.)

```
# {{Post Title}}

## 📋 Details
- **Platform:** {{Platform}}
- **Type:** {{Content Type}}
- **Publish Date:** {{Publish Date}}
- **Status:** {{Status}}

---

## 📝 Caption



---

## #️⃣ Hashtags



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

### Campaign Template

**Create as:** Database Template in Campaigns database

```
# Campaign: {{Campaign Name}}

## 📋 Overview
- **Duration:** {{Start Date}} - {{End Date}}
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

### Define Your 4-5 Content Pillars:

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

### One Piece → Multiple Platforms:

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

**Create as:** Template in Content Calendar

```
## Original Content
**Source:** [Link]
**Type:** 

## Repurposed Into:
- [ ] LinkedIn post
- [ ] Twitter thread
- [ ] Instagram carousel
- [ ] Email snippet
- [ ] Short-form video

## Adaptation Notes:



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

## ⚙️ NOTION AUTOMATIONS

### Automation Ideas (Paid Plans):

**1. Content Due Tomorrow**
- Trigger: Publish Date = Tomorrow
- Action: Notify Assigned To

**2. Status Change to Published**
- Trigger: Status = ✓ Published
- Action: Add to Analytics Tracker

**3. New Campaign Created**
- Trigger: New row in Campaigns
- Action: Create campaign planning template

**4. Design Approval Needed**
- Trigger: Design Status = Review
- Action: Notify Designer

---

## 🎨 CUSTOMIZATION TIPS

1. **Add your brand colors** to status options
2. **Customize content types** for your platforms
3. **Create platform-specific templates**
4. **Set up recurring content** (weekly tips, monthly roundups)
5. **Integrate with scheduling tools** (Buffer, Later, Hootsuite)

---

## ✅ SETUP CHECKLIST

- [ ] Main Content Calendar page created
- [ ] All 5 databases created
- [ ] All properties added to each database
- [ ] All views created
- [ ] Database relations connected
- [ ] Templates created
- [ ] Dashboard built with linked views
- [ ] Cover image and icon set
- [ ] Platform entries created
- [ ] Test content entered (at least 5 posts, 3 ideas, 1 campaign)
- [ ] Team members invited (if collaborating)

---

**Template Version:** 1.0
**Compatible:** Notion Free & Paid Plans
**Created:** March 2026
**Support:** [Your support email]

---

*For video tutorial and additional support, visit: [Your URL]*
