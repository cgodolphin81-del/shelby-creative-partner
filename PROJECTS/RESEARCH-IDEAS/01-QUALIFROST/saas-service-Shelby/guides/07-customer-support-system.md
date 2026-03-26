# Customer Support System Guide

Build a world-class support organization that scales with your SaaS.

---

## Support Philosophy

### Core Principles
1. **Speed matters** - Response time is the #1 satisfaction driver
2. **Self-serve first** - Help users help themselves
3. **Empower your team** - Give agents tools and authority
4. **Measure everything** - Data drives improvement
5. **Support = Product feedback** - Every ticket is an insight

### Support Level Tiers

| Tier | Response Time | Channel | Team |
|------|---------------|---------|------|
| **Self-Service** | Instant | Docs, FAQ, AI | Automated |
| **Community** | 1-24 hours | Forum, Discord | Power users |
| **Standard** | 2-24 hours | Email, chat | Support team |
| **Priority** | 1-4 hours | Priority chat/phone | Senior agents |
| **Enterprise** | 15-60 min | Dedicated, phone | TAM/CSM |

---

## 1. Help Desk Setup

### Platform Comparison

| Platform | Best For | Starting Price | Key Features |
|----------|----------|----------------|--------------|
| **Intercom** | PLG, chat-first | $74/mo | Chat, bots, articles |
| **Zendesk** | Enterprise | $55/agent/mo | Full suite, customizable |
| **Help Scout** | SMB, email-focused | $20/agent/mo | Simple, affordable |
| **Freshdesk** | Growing teams | $15/agent/mo | Good value, features |
| **Front** | Team inbox | $19/agent/mo | Shared inbox, collaboration |
| **Crisp** | Startups | Free-$25/mo | Chat, affordable |

### Help Desk Selection Criteria

```
Team Size < 5: Help Scout, Crisp, Front
Team Size 5-20: Intercom, Freshdesk, Zendesk
Team Size 20+: Zendesk, Salesforce Service Cloud

B2C Focus: Intercom, Zendesk
B2B Focus: Help Scout, Front
Enterprise: Zendesk, Salesforce

Budget < $100/mo: Crisp, Help Scout
Budget $100-500/mo: Freshdesk, Front, Intercom
Budget $500+/mo: Zendesk, Salesforce
```

### Essential Integrations
- [ ] **Slack** - Notifications, internal collaboration
- [ ] **Jira/Linear** - Bug tracking, engineering handoff
- [ ] **Salesforce/HubSpot** - Customer context
- [ ] **Stripe** - Billing issues, account info
- [ ] **Segment/Mixpanel** - User behavior context
- [ ] **Status page** - Incident communication

### Ticket Workflow

```
New Ticket → Triage → Assign → Work → Resolve → Follow-up

Triage Categories:
├── Bug Report → Engineering
├── Feature Request → Product
├── Billing → Finance/Success
├── How-to → Support
├── Sales Inquiry → Sales
└── Urgent/Escalation → Manager
```

### SLA Definitions

| Priority | Response Time | Resolution Time | Example |
|----------|---------------|-----------------|---------|
| **Critical** | 1 hour | 4 hours | System down, data loss |
| **High** | 4 hours | 24 hours | Major feature broken |
| **Medium** | 24 hours | 3 days | Minor bug, how-to |
| **Low** | 48 hours | 1 week | Feature request, general |

---

## 2. Documentation & Knowledge Base

### Documentation Structure

```
Documentation/
├── Getting Started/
│   ├── Quick Start Guide
│   ├── Account Setup
│   └── First Steps Checklist
├── User Guide/
│   ├── Feature A
│   ├── Feature B
│   └── Feature C
├── Admin Guide/
│   ├── User Management
│   ├── Settings
│   └── Billing
├── API Reference/
│   ├── Authentication
│   ├── Endpoints
│   └── SDKs
├── Troubleshooting/
│   ├── Common Issues
│   ├── Error Codes
│   └── FAQs
└── Release Notes/
    ├── Latest
    └── Archive
```

### Article Template

```markdown
# [Article Title]

**Last Updated:** [Date]
**Applies to:** [Product version/plan]

## Overview
[Brief description of what this article covers]

## Prerequisites
- [What users need before starting]

## Steps
1. [First step with screenshot if helpful]
2. [Second step]
3. [Continue...]

## Troubleshooting
### Issue: [Common problem]
**Solution:** [How to fix]

### Issue: [Another problem]
**Solution:** [How to fix]

## Related Articles
- [Link to related article 1]
- [Link to related article 2]

## Still Need Help?
[Contact support link/button]
```

### Writing Best Practices

#### Do's
- ✅ Use simple language (8th grade reading level)
- ✅ Include screenshots and videos
- ✅ Use step-by-step format
- ✅ Add search keywords
- ✅ Keep articles focused (one topic each)
- ✅ Update regularly

#### Don'ts
- ❌ Use jargon without explanation
- ❌ Write walls of text
- ❌ Assume prior knowledge
- ❌ Hide important warnings
- ❌ Let articles go stale

### Documentation Metrics
| Metric | Target |
|--------|--------|
| Article views/mo | Track trend |
| Search success rate | 70%+ |
| Article helpfulness | 80%+ positive |
| Ticket deflection | 20-40% |
| Time on page | 2+ minutes |

### Documentation Tools
| Tool | Best For | Price |
|------|----------|-------|
| **GitBook** | Technical docs | Free-$40/mo |
| **Notion** | Internal + external | Free-$10/mo |
| **Zendesk Guide** | Integrated with Zendesk | Included |
| **HelpJuice** | Dedicated KB | $120+/mo |
| **Document360** | SaaS-focused | $149+/mo |

---

## 3. Video Tutorials

### Video Types

#### Quick Tips (30-60 seconds)
- Single feature highlight
- Social media friendly
- High volume production

**Example:** "How to export your data in 30 seconds"

#### How-To Guides (2-5 minutes)
- Step-by-step tutorials
- Specific use cases
- Most common format

**Example:** "Setting up your first project"

#### Deep Dives (10-20 minutes)
- Comprehensive feature walkthroughs
- Advanced use cases
- Webinar-style content

**Example:** "Complete guide to automation workflows"

#### Onboarding Series (5-10 videos)
- New user orientation
- Sequential learning path
- Required viewing

**Example:** "Getting Started with [Product]"

### Video Production Workflow

```
1. Script (30-60 min per video)
   ├── Outline key points
   ├── Write word-for-word script
   └── Review for clarity

2. Record (15-30 min per video)
   ├── Screen capture (Loom, ScreenFlow)
   ├── Voiceover
   └── Multiple takes if needed

3. Edit (30-60 min per video)
   ├── Cut mistakes/pauses
   ├── Add annotations
   ├── Add intro/outro
   └── Export

4. Publish (15 min)
   ├── Upload to platform
   ├── Add title/description/tags
   ├── Embed in docs
   └── Share on social
```

### Equipment Recommendations

#### Budget Setup (< $200)
- **Microphone:** Blue Yeti Nano ($100)
- **Screen Recording:** Loom (free) or OBS (free)
- **Editing:** DaVinci Resolve (free)
- **Lighting:** Natural light + desk lamp

#### Pro Setup ($500-1000)
- **Microphone:** Shure MV7 ($250)
- **Camera:** Logitech Brio ($200)
- **Screen Recording:** ScreenFlow ($150)
- **Lighting:** Elgato Key Light ($200)
- **Editing:** Final Cut Pro or Premiere ($200-300)

### Video Hosting Platforms
| Platform | Best For | Price |
|----------|----------|-------|
| **YouTube** | Public tutorials | Free |
| **Vimeo** | Professional, no ads | $12+/mo |
| **Wistia** | Marketing, analytics | $19+/mo |
| **Loom** | Quick internal/external | Free-$15/mo |
| **Self-hosted** | Full control | Hosting cost |

### Video Metrics
| Metric | Target |
|--------|--------|
| View count | Track trend |
| Watch time | 50%+ completion |
| Engagement | Likes, comments |
| Ticket deflection | Track reduction |
| Search traffic | Organic views |

---

## 4. Support Team Structure

### Team Roles

#### Support Agent (Individual Contributor)
- Handle incoming tickets
- Document solutions
- Escalate when needed
- Contribute to knowledge base

**Skills:** Communication, problem-solving, product knowledge

#### Senior Support Agent
- Handle escalations
- Mentor junior agents
- Create documentation
- Analyze support trends

**Skills:** All agent skills + leadership, analysis

#### Support Manager
- Team management
- Hiring and training
- Process improvement
- Reporting to leadership

**Skills:** Management, strategy, data analysis

#### Director of Support/VP
- Department strategy
- Budget management
- Cross-functional leadership
- Executive reporting

**Skills:** Leadership, strategy, business acumen

### Staffing Guidelines

```
Tickets per Agent per Day: 20-40 (email), 40-60 (chat)

Agents Needed = (Daily Tickets × 5 days) / (Tickets per Agent × 5 days)

Example:
200 tickets/week ÷ 150 tickets/agent/week = 1.33 agents
→ Hire 2 agents for coverage
```

### Coverage Models

#### Follow-the-Sun
- Team in multiple time zones
- 24/7 coverage without night shifts
- More expensive, better coverage

#### Extended Hours
- Coverage during business hours + buffer
- Example: 6 AM - 10 PM local time
- Good balance of cost/coverage

#### Business Hours Only
- Standard 9-5 or 8-6 coverage
- After-hours: on-call or next-day
- Most cost-effective

### Hiring Profile

#### Must-Have Qualities
- Excellent written communication
- Empathy and patience
- Problem-solving mindset
- Willingness to learn
- Team player

#### Nice-to-Have
- Previous support experience
- Technical background
- Industry knowledge
- Multiple languages

#### Interview Questions
1. "Tell me about a time you dealt with a difficult customer."
2. "How would you explain [technical concept] to a non-technical user?"
3. "What does great customer service mean to you?"
4. "How do you prioritize when you have multiple urgent tickets?"
5. "Write a response to this sample customer inquiry."

---

## 5. Support Metrics & KPIs

### Response Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| **First Response Time** | Time to first reply | < 2 hours |
| **Average Response Time** | Avg. time between replies | < 4 hours |
| **Resolution Time** | Time to close ticket | < 24 hours |
| **SLA Breach Rate** | % tickets missing SLA | < 5% |

### Quality Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| **CSAT** | Positive responses / Total | 85%+ |
| **NPS** | Promoters - Detractors | 50+ |
| **Quality Score** | Internal QA rating | 90%+ |
| **First Contact Resolution** | Resolved on first reply | 60%+ |

### Efficiency Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| **Tickets per Agent** | Total tickets / Agents | 20-40/day |
| **Backlog** | Open tickets | < 2x daily volume |
| **Reopen Rate** | Reopened / Resolved | < 10% |
| **Ticket Deflection** | KB views / Potential tickets | 20-40% |

### Business Metrics
| Metric | Formula | Target |
|--------|---------|--------|
| **Cost per Ticket** | Support cost / Total tickets | Track trend |
| **Retention Impact** | Churn of supported vs. unsupported | Measure delta |
| **Expansion Impact** | Upsell from supported accounts | Track $ |
| **Product Insights** | Bugs/features from support | Count/month |

---

## 6. Automation & AI

### Automation Opportunities

#### Auto-Responses
```
Trigger: Ticket created
Action: Send acknowledgment email
Template: "We've received your request (#{{ticket.id}}) and will respond within {{sla.response_time}}"
```

#### Auto-Categorization
```
Trigger: Ticket created
Action: Analyze content, assign category
Logic: Keywords → Category mapping
```

#### Auto-Close
```
Trigger: No response for 7 days + resolved
Action: Close ticket with note
Template: "Closing as resolved. Reply to reopen."
```

#### Auto-Escalation
```
Trigger: VIP customer OR Critical issue
Action: Notify manager, prioritize
Logic: Customer tier + Issue severity
```

### AI/Chatbot Use Cases

#### Tier 1 Support (Automate 30-50%)
- Password resets
- Account questions
- Basic how-to
- Status checks
- Billing inquiries

#### Handoff Triggers (Human Takeover)
- Customer requests human
- Sentiment turns negative
- Multiple failed bot responses
- Complex technical issue
- Escalation keywords

### AI Implementation Checklist
- [ ] Identify high-volume, low-complexity queries
- [ ] Build knowledge base for bot training
- [ ] Set clear escalation paths
- [ ] Monitor bot performance
- [ ] Regular training updates
- [ ] Customer feedback loop

### Support AI Tools
| Tool | Purpose | Price |
|------|---------|-------|
| **Intercom Fin** | AI chatbot | Included in plans |
| **Zendesk AI** | AI responses | $50/agent/mo |
| **Forethought** | AI for support | Custom |
| **Ada** | AI automation | Custom |
| **Klaviyo AI** | Email responses | Included |

---

## 7. Escalation Management

### Escalation Levels

```
Level 1: Support Agent
├── Standard issues
├── First response
└── Resolution or escalate

Level 2: Senior Agent/Manager
├── Complex technical issues
├── Unhappy customers
├── SLA at risk
└── Resolution or escalate

Level 3: Engineering/Product
├── Bugs
├── Feature requests
├── Technical deep-dives
└── Resolution

Level 4: Executive
├── Enterprise escalations
├── Legal/compliance
├── PR risk
└── Resolution
```

### Escalation Triggers
- Customer explicitly requests escalation
- SLA breach imminent
- Multiple contacts about same issue
- High-value customer issue
- Potential legal/compliance issue
- Negative sentiment detected
- Social media mention

### Escalation Template
```
ESCALATION NOTICE

Ticket: #{{id}}
Customer: {{name}} ({{tier}})
Issue: {{summary}}
Escalated by: {{agent}}
Escalated to: {{recipient}}
Reason: {{reason}}
SLA Status: {{status}}
Previous Actions: {{history}}
Requested Action: {{request}}
```

---

## 8. Customer Feedback Loop

### Feedback Collection

#### Post-Ticket Survey
```
Subject: How did we do?

Hi {{name}},

Your ticket #{{id}} has been resolved. How would you rate your support experience?

[😞] [😐] [😊] [😍]

Optional: Any additional feedback?
[text box]

Thank you!
```

#### NPS Survey (Quarterly)
```
Subject: How likely are you to recommend [Product]?

On a scale of 0-10, how likely are you to recommend [Product] to a friend or colleague?

[0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]

What's the primary reason for your score?
[text box]
```

### Feedback Analysis

#### Weekly Review
- Top ticket categories
- Emerging issues
- Product bugs identified
- Feature requests
- Customer sentiment trends

#### Monthly Report
```
SUPPORT MONTHLY REPORT - [Month Year]

METRICS
- Total tickets: [number] ([%] vs. last month)
- Avg. response time: [time]
- CSAT: [%]
- Top 3 ticket categories: [list]

INSIGHTS
- New issues identified: [list]
- Product bugs found: [list]
- Feature requests: [list]

ACTIONS
- Process improvements: [list]
- Documentation updates: [list]
- Engineering handoffs: [list]
```

### Closing the Loop
1. **Acknowledge** - Thank customers for feedback
2. **Categorize** - Sort into bugs, features, improvements
3. **Prioritize** - Work with product on roadmap
4. **Update** - Inform customers when issues are resolved
5. **Measure** - Track impact of changes

---

## Support Budget Template

### Annual Budget (Example: 5-person team)

| Category | Amount | % |
|----------|--------|---|
| **Salaries** | $400,000 | 65% |
| - 4 Agents @ $60K | $240,000 | |
| - 1 Manager @ $100K | $100,000 | |
| - Benefits (25%) | $60,000 | |
| **Tools** | $60,000 | 10% |
| - Help desk | $20,000 | |
| - Phone system | $5,000 | |
| - Screen recording | $2,000 | |
| - Survey tools | $3,000 | |
| - Other | $30,000 | |
| **Training** | $30,000 | 5% |
| - Courses | $10,000 | |
| - Conferences | $15,000 | |
| - Books/resources | $5,000 | |
| **Contingency** | $120,000 | 20% |
| **TOTAL** | **$610,000** | **100%** |

---

## Support Playbook Quick Reference

### Daily
- [ ] Review overnight tickets
- [ ] Check SLA dashboard
- [ ] Team standup (15 min)
- [ ] Monitor chat queue
- [ ] End-of-day handoff

### Weekly
- [ ] Team 1:1s
- [ ] Review metrics
- [ ] Knowledge base updates
- [ ] Product sync
- [ ] Training session

### Monthly
- [ ] CSAT/NPS analysis
- [ ] Hiring needs review
- [ ] Tool evaluation
- [ ] Process improvements
- [ ] Executive report

### Quarterly
- [ ] Team offsite/training
- [ ] Major process review
- [ ] Budget review
- [ ] Goal setting
- [ ] Customer advisory board

---

*Guide Version: 1.0 | Last Updated: 2026*
