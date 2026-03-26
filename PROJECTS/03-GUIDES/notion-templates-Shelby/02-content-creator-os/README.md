# 🎬 Content Creator OS

**Complete Notion Template for Content Creators, Influencers & Media Brands**

---

## 📦 What's Included

- **Content Calendar** - Plan, schedule, and track all content
- **Script Database** - Write and manage video/article scripts
- **Analytics Tracker** - Monitor performance across platforms
- **Sponsor CRM** - Manage brand deals and partnerships
- **Idea Bank** - Never run out of content ideas
- **Asset Library** - Organize thumbnails, B-roll, resources

---

## 🚀 Quick Start

1. **Duplicate** this template to your Notion workspace
2. **Connect** your social accounts (manual tracking or via automation)
3. **Brain dump** all content ideas into the Idea Bank
4. **Plan** your next 30 days of content
5. **Start creating!**

---

## 📁 Page Structure

```
Content Creator OS
├── 📅 Content Calendar
│   ├── Calendar View
│   ├── Platform Views (YouTube, TikTok, Instagram, etc.)
│   └── Status Views (Ideas, Scripting, Filming, Editing, Published)
├── ✍️ Script Database
│   ├── Video Scripts
│   ├── Blog Posts
│   ├── Social Captions
│   └── Email Newsletters
├── 📊 Analytics Dashboard
│   ├── Platform Performance
│   ├── Growth Tracking
│   └── Revenue Reports
├── 🤝 Sponsor CRM
│   ├── Brand Pipeline
│   ├── Active Deals
│   └── Past Partnerships
├── 💡 Idea Bank
│   ├── Content Ideas
│   ├── Series Ideas
│   └── Trending Topics
├── 📁 Asset Library
│   ├── Thumbnails
│   ├── B-Roll
│   ├── Templates
│   └── Resources
└── ⚙️ Settings
    ├── Platform Settings
    ├── Brand Guidelines
    └── Goals & Targets
```

---

## 🗄️ Database Schemas

### Content Calendar Database

| Property | Type | Description |
|----------|------|-------------|
| Title | Title | Content title/hook |
| Platform | Multi-select | YouTube, TikTok, Instagram, Twitter, LinkedIn, Blog, Podcast, Newsletter |
| Content Type | Select | Video, Reel, Post, Thread, Article, Episode, Email |
| Status | Select | 💡 Idea, 📝 Scripting, 🎬 Filming, ✂️ Editing, 📤 Scheduled, ✅ Published |
| Publish Date | Date | When it goes live |
| Due Date | Date | When it needs to be ready |
| Script | Relation | Link to Script database |
| Ideas | Relation | Link to Idea Bank |
| Thumbnail | Files | Thumbnail image |
| Video Link | URL | Published content URL |
| Views | Number | View count |
| Likes | Number | Like count |
| Comments | Number | Comment count |
| Shares | Number | Share count |
| Revenue | Number | Revenue from this piece |
| Sponsor | Relation | Link to Sponsor CRM |
| Tags | Multi-select | Topics, series, campaigns |
| Priority | Select | High, Medium, Low |

### Script Database

| Property | Type | Description |
|----------|------|-------------|
| Title | Title | Script title |
| Type | Select | Video, Blog, Social, Email, Podcast |
| Status | Select | Outline, Draft, Review, Final |
| Word Count | Formula | Count words in script |
| Est. Duration | Formula | Based on word count |
| Content | Relation | Link to Content Calendar |
| Hook | Text | Opening hook |
| CTA | Text | Call to action |
| Keywords | Multi-select | SEO keywords |
| Outline | Text | Script outline |
| Full Script | Text | Complete script |
| Notes | Text | Production notes |

### Analytics Database

| Property | Type | Description |
|----------|------|-------------|
| Date | Date | Date of metrics |
| Platform | Select | YouTube, TikTok, Instagram, Twitter, LinkedIn, Blog, Podcast |
| Followers | Number | Total followers |
| Followers Change | Number | Change from previous |
| Views | Number | Total/views |
| Engagement Rate | Formula | (Likes + Comments + Shares) / Followers * 100 |
| Revenue | Number | Platform revenue |
| Top Content | Relation | Link to Content Calendar |

### Sponsor CRM Database

| Property | Type | Description |
|----------|------|-------------|
| Brand | Title | Company/brand name |
| Contact | Text | Contact person |
| Email | Email | Contact email |
| Status | Select | 🎯 Prospect, 📧 Contacted, 💬 Negotiating, ✅ Signed, 📹 Active, 💰 Paid, ⭐ Past |
| Deal Value | Number | Total deal value |
| Deliverables | Text | What's included |
| Start Date | Date | Campaign start |
| End Date | Date | Campaign end |
| Payment Terms | Select | 50/50, Net 30, Net 60, Upfront |
| Payment Status | Select | Unpaid, Partial, Paid |
| Content | Relation | Linked content pieces |
| Notes | Text | Communication history |

---

## 🔧 Key Formulas

### Engagement Rate
```
if(prop("Followers") > 0, 
  ((prop("Likes") + prop("Comments") + prop("Shares")) / prop("Followers")) * 100, 
  0)
```

### Script Read Time (minutes)
```
round(prop("Word Count") / 150)
```

### Days Until Publish
```
dateBetween(prop("Publish Date"), now(), "days")
```

### Content Status Badge
```
if(prop("Status") == "Published", "✅",
  if(prop("Status") == "Scheduled", "📤",
    if(prop("Status") == "Editing", "✂️",
      if(prop("Status") == "Filming", "🎬",
        if(prop("Status") == "Scripting", "📝", "💡")))))
```

### Deal Value Formatter
```
"$" + format(prop("Deal Value"))
```

---

## 📋 Templates Included

See individual template files for complete structures.

---

## 💡 Pro Tips

1. **Batch Create** - Script and film multiple pieces in one session
2. **Repurpose Everything** - One video = 10+ social posts
3. **Track Religiously** - Update analytics weekly
4. **Idea Capture** - Always be collecting ideas
5. **Sponsor Pipeline** - Always have 5-10 brands in negotiation

---

## 🎨 Customization

- Add your brand colors
- Customize platform names
- Add custom content types
- Integrate with Zapier for auto-tracking
- Connect to Google Analytics for blog stats
