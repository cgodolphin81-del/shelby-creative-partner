# 📅 Content Calendar Database

> **Purpose:** Plan, schedule, and track all content across every platform

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Title** | Title | Content title/hook |
| **Platform** | Multi-select | YouTube, TikTok, Instagram Reels, Instagram Posts, Instagram Stories, Twitter/X, LinkedIn, Blog, Podcast, Newsletter, Pinterest, Facebook |
| **Content Type** | Select | Long-form Video, Short-form Video, Reel, Post, Thread, Article, Episode, Email, Carousel, Story, Live Stream |
| **Status** | Select | 💡 Idea, 📝 Scripting, 🎬 Filming, ✂️ Editing, 📤 Scheduled, ✅ Published, 🗑️ Archived |
| **Publish Date** | Date | With time |
| **Due Date** | Date | When it needs to be ready |
| **Script** | Relation | Links to Script database |
| **Ideas** | Relation | Links to Idea Bank |
| **Thumbnail** | Files & media | Thumbnail image |
| **Video Link** | URL | Published content URL |
| **Views** | Number | View count |
| **Likes** | Number | Like count |
| **Comments** | Number | Comment count |
| **Shares** | Number | Share count |
| **Saves** | Number | Save count (Instagram, etc.) |
| **CTR** | Number | Click-through rate % |
| **Watch Time** | Number | Minutes/Avg view duration |
| **Revenue** | Number | Revenue from this piece |
| **Sponsor** | Relation | Links to Sponsor CRM |
| **Series** | Select | Ongoing series name |
| **Tags** | Multi-select | Topics, themes, campaigns |
| **Priority** | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| **Effort** | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| **ROI Score** | Formula | See below |
| **Days to Publish** | Formula | See below |

---

## 🧮 Formulas

### ROI Score (Prioritization)
```notion
if(
  and(prop("Views") > 0, prop("Effort") != ""),
  if(prop("Effort") == "Low", prop("Views") * 3,
    if(prop("Effort") == "Medium", prop("Views") * 2,
      prop("Views")
    )
  ),
  0
)
```

### Days Until Publish
```notion
if(
  empty(prop("Publish Date")),
  null,
  dateBetween(prop("Publish Date"), now(), "days")
)
```

### Engagement Rate
```notion
if(
  prop("Views") > 0,
  round(((prop("Likes") + prop("Comments") + prop("Shares")) / prop("Views")) * 100, 2),
  0
)
```

### Status Badge
```notion
if(
  prop("Status") == "Published", "✅ Published",
  if(prop("Status") == "Scheduled", "📤 Scheduled",
    if(prop("Status") == "Editing", "✂️ Editing",
      if(prop("Status") == "Filming", "🎬 Filming",
        if(prop("Status") == "Scripting", "📝 Scripting",
          if(prop("Status") == "Archived", "🗑️ Archived", "💡 Idea")
        )
      )
    )
  )
)
```

### Overdue Indicator
```notion
if(
  and(
    prop("Status") != "Published",
    prop("Status") != "Archived",
    prop("Due Date") < now()
  ),
  "🚨 OVERDUE",
  ""
)
```

### Platform Icons
```notion
if(
  contains(prop("Platform"), "YouTube"), "📺",
  if(contains(prop("Platform"), "TikTok"), "🎵",
    if(contains(prop("Platform"), "Instagram"), "📸",
      if(contains(prop("Platform"), "Twitter"), "🐦",
        if(contains(prop("Platform"), "LinkedIn"), "💼",
          if(contains(prop("Platform"), "Blog"), "📝",
            if(contains(prop("Platform"), "Podcast"), "🎙️",
              if(contains(prop("Platform"), "Newsletter"), "📧", "📱")
            )
          )
        )
      )
    )
  )
)
```

---

## 📊 Database Views

### View 1: Calendar (Calendar)
**Filter:** Publish Date is not empty
**Sort:** Publish Date (ascending)
**Layout:** Calendar
**Calendar by:** Publish Date

### View 2: This Week (Board)
**Filter:** Publish Date is within next 7 days
**Group by:** Status
**Sort:** Publish Date (ascending)

### View 3: Content Pipeline (Board)
**Group by:** Status
**Filter:** Status != Published, Status != Archived
**Sort:** Priority, then Due Date

### View 4: By Platform (Board)
**Group by:** Platform
**Filter:** Publish Date >= Today
**Sort:** Publish Date

### View 5: High Priority (Table)
**Filter:** Priority = High, Status != Published
**Sort:** Due Date (ascending)
**Properties shown:** Title, Platform, Status, Due Date, Script

### View 6: Performance Leaders (Table)
**Filter:** Status = Published
**Sort:** Views (descending)
**Properties shown:** Title, Platform, Views, Engagement Rate, Revenue

### View 7: Ideas Backlog (List)
**Filter:** Status = Idea
**Sort:** Priority, then Created time
**Properties shown:** Title, Platform, Priority, Tags

### View 8: Overdue (Table)
**Filter:** Overdue Indicator contains "OVERDUE"
**Sort:** Due Date (ascending)

### View 9: By Series (Board)
**Group by:** Series
**Filter:** Series is not empty
**Sort:** Publish Date

### View 10: Monthly Archive (Gallery)
**Filter:** Publish Date is within this month, Status = Published
**Layout:** Gallery
**Card preview:** Thumbnail

---

## 📝 Content Templates

### Template: YouTube Video
```markdown
# 📺 {{Title}}

**Platform:** YouTube
**Type:** Long-form Video
**Status:** 💡 Idea
**Publish Date:** {{Date}}
**Due Date:** {{Date}}

---

## 🎯 Content Details

### Hook (First 15 seconds)
_Write your attention-grabbing opening_

### Main Topic
_What is this video about?_

### Key Points
1. 
2. 
3. 

### CTA (Call to Action)
_What should viewers do after watching?_

---

## 📝 Script

**Link to Script:** [[Script Name]]

---

## 🎬 Production

### Equipment Needed
- [ ] Camera
- [ ] Microphone
- [ ] Lighting
- [ ] Props

### Location
_Where will you film?_

### B-Roll Needed
- [ ] Shot 1
- [ ] Shot 2
- [ ] Shot 3

---

## ✂️ Editing Notes

### Thumbnail Idea
_Describe thumbnail concept_

### Title Options
1. 
2. 
3. 

### Description
_Video description with keywords_

### Tags
_keyword1, keyword2, keyword3_

### Chapters
0:00 - Intro
0:30 - Point 1
2:00 - Point 2
4:00 - Point 3
6:00 - Conclusion

---

## 📊 Performance (Post-Publish)

| Metric | Goal | Actual |
|--------|------|--------|
| Views | | |
| Likes | | |
| Comments | | |
| CTR | | |
| Watch Time | | |
| Revenue | | |

**Video Link:** 
**Published:** {{Date}}

---

## 💰 Monetization

**Sponsor:** 
**Deal Value:** $
**Ad Revenue:** $
**Affiliate Revenue:** $
```

### Template: Instagram Reel
```markdown
# 📸 {{Title}}

**Platform:** Instagram Reels
**Type:** Short-form Video
**Status:** 💡 Idea
**Publish Date:** {{Date}}

---

## 🎯 Content Details

### Hook (First 3 seconds)
_Grab attention immediately_

### Concept
_What's the video about?_

### Trend/Audio
_Is there a trending audio? Link it._

---

## 📝 Script/Shot List

| Time | Visual | Audio/Text |
|------|--------|------------|
| 0-3s | | |
| 3-6s | | |
| 6-15s | | |
| 15-30s | | |

---

## ✏️ Caption

**First Line (Hook):**

**Body:**

**CTA:**

**Hashtags:**
#hashtag1 #hashtag2 #hashtag3

---

## 🎬 Production

### Filming Notes
- Orientation: Vertical (9:16)
- Length: 30-90 seconds
- Format: MP4

### Editing Apps
- CapCut
- InShot
- Instagram native

---

## 📊 Performance

| Metric | Goal | Actual |
|--------|------|--------|
| Views | | |
| Likes | | |
| Comments | | |
| Shares | | |
| Saves | | |
| Reach | | |

**Post Link:** 
```

### Template: Blog Post
```markdown
# 📝 {{Title}}

**Platform:** Blog
**Type:** Article
**Status:** 💡 Idea
**Publish Date:** {{Date}}

---

## 🎯 SEO Details

### Target Keyword
_primary keyword_

### Secondary Keywords
- keyword 2
- keyword 3

### Search Intent
_Informational / Commercial / Transactional / Navigational_

### Meta Description
_150-160 character description_

---

## 📋 Outline

### H1: {{Title}}

### Introduction
- Hook
- Problem statement
- Promise

### H2: Section 1
- Key point
- Example
- Takeaway

### H2: Section 2
- Key point
- Example
- Takeaway

### H2: Section 3
- Key point
- Example
- Takeaway

### Conclusion
- Summary
- CTA

---

## ✍️ Draft

_Write your full article here_

---

## 🔗 Links

### Internal Links
- [[Related Post 1]]
- [[Related Post 2]]

### External Links
- Authority source 1
- Authority source 2

---

## 🖼️ Images

- Featured image: 
- In-post images: 

---

## 📊 Performance

| Metric | Goal | Actual (7d) | Actual (30d) |
|--------|------|-------------|--------------|
| Pageviews | | | |
| Unique Visitors | | | |
| Avg Time on Page | | | |
| Bounce Rate | | | |
| Social Shares | | | |

**Post URL:** 
```

---

## 💡 Content Planning Tips

1. **Plan 30 Days Ahead** - Always know what's coming
2. **Batch Similar Content** - Film multiple videos in one day
3. **Repurpose Core Content** - 1 YouTube = 10 social posts
4. **Evergreen + Trending Mix** - 70% evergreen, 30% trending
5. **Track What Works** - Double down on winning formats

---

## 📈 Content Cadence Recommendations

### Solo Creator
- YouTube: 1-2x/week
- TikTok/Reels: 3-5x/week
- Twitter/LinkedIn: Daily
- Newsletter: Weekly

### Small Team
- YouTube: 2-3x/week
- TikTok/Reels: Daily
- Blog: 2-3x/week
- Newsletter: Weekly

### Consistency > Frequency
Better to post 3x/week consistently than 7x/week sporadically.
