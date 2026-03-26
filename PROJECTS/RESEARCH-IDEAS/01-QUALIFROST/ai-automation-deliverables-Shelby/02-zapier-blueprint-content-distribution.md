# Zapier Blueprint #2: Content Distribution → Social Media

**Client Value:** 1-click publishing to all platforms, 8-12 hours/week saved, consistent posting
**Build Time:** 60-90 minutes
**Zapier Plan:** Professional ($50/mo)

---

## ZAP 1: Blog Published → Multi-Platform Posts

### TRIGGER
| Setting | Value |
|---------|-------|
| App | WordPress (or Webflow, Medium, Substack) |
| Event | New Post |
| Post Type | Post |
| Status | Published |
| Trigger | Test with latest post |

### ACTION 1: LinkedIn Company Post
| App | LinkedIn |
|-----|----------|
| Event | Share Update |
| Company Page | Select page |
| Content | *Template below* |
| Image URL | WordPress → Featured Image |

**LinkedIn Template:**
```
{{Post Title}}

{{Post Excerpt - first 150 characters}}

Key takeaways:
• Point 1 from post
• Point 2 from post
• Point 3 from post

Read more: {{Post URL}}

#IndustryHashtag #TopicHashtag #CompanyHashtag
```

### ACTION 2: Twitter Thread
| App | Twitter |
|-----|---------|
| Event | Create Thread |
| **Tweet 1:** | |
| Text | 🆕 NEW: {{Post Title}}\n\n{{Hook question or stat}}\n\nHere's what you need to know 👇 |
| **Tweet 2:** | |
| Text | {{Key point 1 - expand with detail}} |
| **Tweet 3:** | |
| Text | {{Key point 2 - expand with detail}} |
| **Tweet 4:** | |
| Text | Want the full breakdown?\n\nRead here: {{Post URL}}\n\n#Hashtag1 #Hashtag2 |

### ACTION 3: Facebook Page Post
| App | Facebook Pages |
|-----|---------------|
| Event | Create Page Post |
| Page | Select page |
| Message | Same as LinkedIn template |
| Link | {{Post URL}} |
| Photo | {{Featured Image URL}} |

### ACTION 4: Add to Content Calendar
| App | Google Sheets |
|-----|--------------|
| Event | Create Spreadsheet Row |
| Spreadsheet | "Content Calendar [Year]" |
| Worksheet | "Published Posts" |
| **Columns:** | |
| Publish Date | Zapier → Trigger Time |
| Title | WordPress → Post Title |
| URL | WordPress → Post URL |
| Author | WordPress → Post Author |
| Category | WordPress → Post Category |
| LinkedIn Posted | Static: Yes |
| Twitter Posted | Static: Yes |
| Facebook Posted | Static: Yes |

### ACTION 5: Team Notification
| App | Slack |
|-----|-------|
| Channel | #marketing |
| Message | *Template below* |

**Slack Template:**
```
📝 NEW BLOG POST LIVE!

Title: {{Post Title}}
Author: {{Post Author}}

Read: {{Post URL}}

Platforms: LinkedIn ✓ | Twitter ✓ | Facebook ✓
```

### ACTION 6: Create Email Draft
| App | Gmail |
|-----|-------|
| Event | Create Draft |
| To | marketing@company.com |
| Subject | Newsletter Draft: {{Post Title}} |
| Body | *Template below* |

**Email Draft Template:**
```
Hi Team,

New post published: {{Post Title}}

Draft newsletter content:
-----
Subject: {{Post Title}}

Hi [First Name],

This week on the blog: {{Post Excerpt}}

[Read More →]({{Post URL}})

Best,
The [Company] Team
-----

Ready to send? Reply with approval.
```

---

## ZAP 2: Social Engagement → Lead Capture

### TRIGGER
| App | Facebook Pages (or LinkedIn) |
|-----|-----------------------------|
| Event | New Comment |
| Page | Select page |
| Filter | Comment contains: "interested", "price", "demo", "how", "more info" |

### ACTION 1: Create CRM Contact
| App | HubSpot |
|-----|---------|
| Event | Create Contact |
| **Field Mapping:** | |
| Name | Facebook → User Name |
| Email | Static: "Social Lead - {{User Name}}" |
| Source | Static: "Facebook Organic" |
| Post URL | Facebook → Post Permalink |
| Comment | Facebook → Comment Text |

### ACTION 2: High-Intent Alert
| App | Slack |
|-----|-------|
| Channel | #sales-alerts |
| Message | *Template below* |

**Alert Template:**
```
🔥 HOT SOCIAL LEAD

Platform: Facebook
User: {{User Name}}
Comment: "{{Comment Text}}"

Profile: {{User Profile URL}}
Post: {{Post URL}}

Action: Reach out within 1 hour!
```

### ACTION 3: Auto-Response Comment
| App | Facebook Pages |
|-----|---------------|
| Event | Create Comment Reply |
| Parent Comment | {{Comment ID}} |
| Message | *Template below* |

**Response Template:**
```
Thanks for your interest, {{User Name}}! 
We'd love to tell you more. Can you DM us 
or visit [link] to connect with our team? 🚀
```

---

## ZAP 3: Weekly Performance Report

### TRIGGER
| App | Schedule by Zapier |
|-----|-------------------|
| Event | Every Week |
| Day | Monday |
| Time | 9:00 AM |

### ACTION 1: Lookup Published Posts
| App | Google Sheets |
|-----|--------------|
| Event | Lookup Spreadsheet Row(s) |
| Spreadsheet | "Content Calendar" |
| Worksheet | "Published Posts" |
| Filter | Publish Date = Last 7 days |

### ACTION 2: Send Weekly Report Email
| App | Gmail |
|-----|-------|
| To | marketing@company.com |
| Subject | 📊 Weekly Content Report - {{Date}} |
| Body | *Template below* |

**Report Template:**
```
Weekly Content Performance
{{Date Range}}

POSTS PUBLISHED: {{Count}}

TOP PERFORMER:
Title: {{Best Post Title}}
URL: {{Best Post URL}}
Engagement: {{Engagement Count}}

PLATFORM BREAKDOWN:
LinkedIn: {{LI Metrics}}
Twitter: {{Twitter Metrics}}
Facebook: {{FB Metrics}}

TOTAL REACH: {{Total Reach}}
TOTAL CLICKS: {{Total Clicks}}

View full report: [Google Sheets Link]
```

---

## CONTENT FORMATTING RULES

| Platform | Character Limit | Image Size | Hashtags |
|----------|-----------------|------------|----------|
| LinkedIn | 3,000 (optimal: 150-200) | 1200x627px | 3-5 |
| Twitter | 280 per tweet | 1200x675px | 2-3 |
| Facebook | 63,206 (optimal: 40-80) | 1200x630px | 1-2 |

---

## TESTING CHECKLIST

- [ ] Publish test blog post
- [ ] Verify all social posts created
- [ ] Check image rendering on each platform
- [ ] Confirm Google Sheets row created
- [ ] Test Slack notification
- [ ] Verify email draft created
- [ ] Test engagement trigger with comment
- [ ] Check CRM contact creation
- [ ] Run weekly report manually

---

## MONITORING

| Task | Frequency | Owner |
|------|-----------|-------|
| Check failed Zaps | Daily | Marketing |
| Review post delivery | Daily | Marketing |
| Update templates | Monthly | Marketing |
| Audit connected accounts | Monthly | Ops |

---

*Blueprint v1.0 | [Your Agency] | Client: [Name]*
