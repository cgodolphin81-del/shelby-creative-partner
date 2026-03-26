# 🤖 N8N WORKFLOW: LinkedIn Ghostwriting Automation

**Service:** Done-for-you LinkedIn personal branding for executives  
**Automation Level:** 90% AI, 10% human oversight  
**Created:** March 25, 2026

---

## 1. WORKFLOW OVERVIEW

### What This Workflow Does
Automates the entire LinkedIn ghostwriting service delivery pipeline from client onboarding through content creation, approval, scheduling, and performance tracking.

### Trigger
- **Primary:** New client payment received (Stripe webhook)
- **Secondary:** Manual trigger for content generation batches
- **Tertiary:** Scheduled daily posts (LinkedIn scheduler integration)

### Steps
1. **Client Onboarding** → Payment received → Create client folder & profile
2. **Content Research** → AI analyzes client's niche, competitors, trending topics
3. **Post Generation** → AI creates 20 post drafts based on content pillars
4. **Carousel Creation** → AI generates carousel outlines → Canva API for design
5. **Client Review** → Sends draft batch for approval (email/Slack)
6. **Scheduling** → Approved posts scheduled via LinkedIn API
7. **Engagement** → Monitors comments, drafts responses
8. **Analytics** → Weekly performance report auto-generated

### Output (What Customer Receives)
- 12-20 LinkedIn posts per month (text + carousels)
- Profile optimization recommendations
- Daily posting at optimal times
- Comment response drafts
- Weekly analytics report
- Monthly strategy recommendations

---

## 2. AI STACK

### AI Tools Required

| Tool | Purpose | Cost/Month | API Cost Per Delivery |
|------|---------|------------|----------------------|
| **Anthropic Claude API** | Long-form post writing, strategy | $60 (Pro) | $0.50/post |
| **OpenAI GPT-4o** | Quick drafts, variations, hooks | $200 (Team) | $0.15/post |
| **Jasper AI** (optional) | Brand voice training | $99 | Included |
| **Canva API** | Carousel/image generation | $15 (Pro) | $0.10/carousel |
| **Grammarly API** | Grammar/style check | $12 | Included |
| **Taplio API** | Analytics, trending topics | $79 | Included |

**Total Monthly AI Stack Cost:** ~$465/month (shared across all clients)

**API Cost Per Client Per Month:**
- 16 posts × $0.65 (avg) = **$10.40/client/month**
- 2 carousels × $0.10 = **$0.20/client/month**
- **Total: ~$11/client/month**

### Setup Instructions

#### Claude API Setup
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create account → Billing → Add payment method
3. Navigate to API Keys → Create new key
4. Copy key (starts with `sk-ant-`)
5. Store in n8n credentials as `claude_api_key`

#### OpenAI API Setup
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up → Settings → Billing → Add $50 credit
3. API Keys → Create new secret key
4. Copy key (starts with `sk-proj-`)
5. Store in n8n credentials as `openai_api_key`

#### Canva API Setup
1. Go to [canva.com/developers](https://www.canva.com/developers)
2. Create developer account
3. Register new app → Get Client ID & Secret
4. Enable "Design export" permissions
5. Store credentials in n8n as `canva_client_id`, `canva_client_secret`

#### Taplio API Setup
1. Go to [taplio.com](https://taplio.com)
2. Subscribe to Pro plan ($79/month)
3. Settings → API → Generate API key
4. Store in n8n as `taplio_api_key`

---

## 3. N8N WORKFLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        LINKEDIN GHOSTWRITING WORKFLOW                        │
└─────────────────────────────────────────────────────────────────────────────┘

[Stripe Webhook: Payment Received]
         │
         ▼
┌─────────────────┐
│ 1. CREATE CLIENT│
│    FOLDER       │───────────────┐
│    (Google      │               │
│     Drive)      │               ▼
└─────────────────┘      ┌─────────────────┐
         │               │ 2. CLIENT       │
         ▼               │    ONBOARDING   │
┌─────────────────┐      │    FORM         │
│ 3. RESEARCH     │◄─────│    (Typeform)   │
│    CLIENT       │      └─────────────────┘
│    NICHE        │
│    (Perplexity  │
│     API)        │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 4. GENERATE     │
│    CONTENT      │
│    PILLARS      │
│    (Claude API) │
└─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│              WEEKLY CONTENT GENERATION LOOP                  │
│  (Triggered every Monday 9 AM for the week ahead)            │
└─────────────────────────────────────────────────────────────┘
         │
         ├──────────────────┬──────────────────┬──────────────┐
         ▼                  ▼                  ▼              ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐  ┌─────────────┐
│ 5A. TEXT    │    │ 5B. CAROUSEL│    │ 5C. ARTICLE │  │ 5D. ENGAGE  │
│     POSTS   │    │     OUTLINES│    │     DRAFTS  │  │     MENTS   │
│  (GPT-4o)   │    │  (Canva API)│    │  (Claude)   │  │  (Taplio)   │
└─────────────┘    └─────────────┘    └─────────────┘  └─────────────┘
         │                  │                  │              │
         └──────────────────┴──────────────────┴──────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 6. COMPILE      │
                    │    BATCH        │
                    │    (Google Doc) │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 7. SEND FOR     │
                    │    APPROVAL     │
                    │    (Email/Slack)│
                    └─────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
              [APPROVED]          [REVISIONS]
                    │                   │
                    ▼                   ▼
          ┌─────────────────┐   ┌─────────────────┐
          │ 8. SCHEDULE     │   │ 9. APPLY        │
          │    POSTS        │   │    FEEDBACK     │
          │    (LinkedIn)   │   │    (AI Rewrite) │
          └─────────────────┘   └─────────────────┘
                    │                   │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 10. DAILY       │
                    │     MONITORING  │
                    │     (Comments,  │
                    │      Analytics) │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 11. WEEKLY      │
                    │     REPORT      │
                    │     (Auto-Gen)  │
                    └─────────────────┘
```

### Node Explanations

| Node # | Node Type | Purpose | API/Integration |
|--------|-----------|---------|-----------------|
| 1 | Webhook | Trigger on Stripe payment | Stripe |
| 2 | Form Trigger | Collect client info | Typeform/Google Forms |
| 3 | HTTP Request | Research client niche | Perplexity API |
| 4 | AI Agent | Generate content pillars | Claude API |
| 5A | AI Agent | Write text posts | GPT-4o API |
| 5B | HTTP Request | Generate carousel images | Canva API |
| 5C | AI Agent | Write long-form articles | Claude API |
| 5D | HTTP Request | Monitor engagement | Taplio API |
| 6 | Google Drive | Compile content batch | Google Drive API |
| 7 | Email/Slack | Send for approval | Gmail/Slack API |
| 8 | HTTP Request | Schedule posts | LinkedIn API |
| 9 | AI Agent | Apply revisions | Claude API |
| 10 | Cron + HTTP | Daily monitoring | Taplio API |
| 11 | Google Docs | Generate report | Google Docs API |

---

## 4. STEP-BY-STEP SETUP

### Installing the Workflow in n8n

#### Prerequisites
- Self-hosted n8n or n8n.cloud account ($20/month)
- Node.js 18+ (if self-hosting)
- PostgreSQL database (recommended for production)

#### Import Workflow
1. Open n8n dashboard
2. Go to **Workflows** → **Import from File**
3. Download the JSON from Section 7 (Export Workflow)
4. Import the JSON file
5. Review all nodes and connections

#### Configure Credentials
For each node, click the credential dropdown → **Add New**:

1. **Stripe:** API key from Stripe Dashboard → Developers → API Keys
2. **Google Drive:** OAuth2 → Follow Google's OAuth flow
3. **Claude API:** Enter API key from Anthropic console
4. **OpenAI API:** Enter API key from OpenAI platform
5. **Canva:** Client ID + Secret from Canva developers
6. **LinkedIn:** OAuth2 → Create LinkedIn app → Enable "Share on LinkedIn"
7. **Typeform:** API key from Typeform dashboard
8. **Slack:** Bot token from Slack API dashboard
9. **Taplio:** API key from Taplio settings

#### Activate Workflow
1. Toggle workflow to **Active** (top right)
2. Test with a sample payment (Stripe test mode)
3. Verify each node executes correctly

### API Key Setup Checklist

```
□ Stripe API Key (sk_test_... or sk_live_...)
□ Google OAuth2 Credentials (Client ID + Secret)
□ Anthropic API Key (sk-ant-...)
□ OpenAI API Key (sk-proj-...)
□ Canva API Credentials (Client ID + Secret)
□ LinkedIn App Credentials (Client ID + Secret)
□ Typeform API Key
□ Slack Bot Token (xoxb-...)
□ Taplio API Key
```

### Testing Instructions

#### Test 1: Client Onboarding Flow
1. Create a test payment in Stripe ($1)
2. Webhook should trigger workflow
3. Verify Google Drive folder created
4. Check Typeform sent to client email
5. Confirm all steps logged in n8n execution log

#### Test 2: Content Generation
1. Manually trigger "Weekly Content Generation"
2. Verify AI generates 5 posts in 10 minutes
3. Check Google Doc compiled correctly
4. Confirm email sent with draft batch

#### Test 3: Post Scheduling
1. Approve a test post in the workflow
2. Verify post scheduled in LinkedIn
3. Check post appears in LinkedIn scheduler

#### Test 4: Analytics Report
1. Wait for weekly cron trigger
2. Verify report generated in Google Docs
3. Check email sent to client with report

---

## 5. DELIVERY PROCESS

### Customer Pays → What Happens

```
PAYMENT RECEIVED (Stripe)
        │
        ├─► Instant: Welcome email sent
        │    └─► Includes onboarding form link
        │
        ├─► Auto: Google Drive folder created
        │    └─► Structure: /Clients/[Name]/[Year]/[Month]/
        │
        ├─► Auto: Client added to Airtable CRM
        │    └─► Status: "Onboarding"
        │
        └─► Auto: Slack notification to team
             └─► Channel: #client-wins
```

### AI Generates → What Gets Delivered

**Week 1 (Onboarding):**
- Profile optimization audit (PDF)
- Content pillar strategy document
- Competitor analysis report
- First week's 5 posts ready for review

**Ongoing (Weekly):**
- 4-5 LinkedIn posts (text + hashtags)
- 1 carousel outline (if in package)
- 1 article draft (if in package)
- Engagement report (comments, impressions)

**Monthly:**
- Performance analytics report
- Strategy recommendations
- Content calendar for next month

### Human Touchpoints (10% Oversight)

| Touchpoint | Frequency | Time Required | Who |
|------------|-----------|---------------|-----|
| Strategy Call | Monthly | 30 min | Account Manager |
| Content Review | Weekly | 15 min | Client (approves posts) |
| Quality Check | Weekly | 20 min | VA (reviews AI output) |
| Crisis Management | As needed | Variable | Account Manager |
| Testimonial Request | Month 3 | 10 min | VA |

**Total Human Time Per Client Per Month:** ~2.5 hours

---

## 6. PRICING CALCULATOR

### API Costs Per Delivery

| Item | API Cost | Frequency | Monthly Cost/Client |
|------|----------|-----------|---------------------|
| Text Posts (16) | $0.50 each | Weekly | $8.00 |
| Carousel (2) | $0.10 each | Monthly | $0.20 |
| Article (2) | $1.00 each | Monthly | $2.00 |
| Research/Analysis | $0.30 | Weekly | $1.20 |
| **Total API Cost** | | | **$11.40/client/month** |

### Time Savings

| Task | Manual Time | Automated Time | Savings |
|------|-------------|----------------|---------|
| Research | 2 hrs/post | 5 min/post | 96% |
| Writing | 1 hr/post | 5 min/post | 92% |
| Carousel Design | 1 hr/carousel | 10 min/carousel | 83% |
| Scheduling | 30 min/week | 0 min | 100% |
| Analytics Report | 2 hrs/week | 5 min/week | 96% |
| **Total Per Month** | **40 hours** | **3 hours** | **92.5%** |

**Value of Time Saved:** 37 hours × $100/hr = **$3,700/month value**

### Recommended Pricing

Based on service arbitrage blueprint margins (60%+ target):

| Package | Market Rate | API Cost | Labor Cost | Total Cost | Profit | Margin |
|---------|-------------|----------|------------|------------|--------|--------|
| **Starter Authority** (12 posts/mo) | $2,500/mo | $9/mo | $700/mo | $709/mo | $1,791/mo | **72%** |
| **Executive Presence** (16 posts + 2 carousels) | $4,500/mo | $11/mo | $1,100/mo | $1,111/mo | $3,389/mo | **75%** |
| **Industry Leader** (20 posts + 4 carousels + 4 articles) | $8,000/mo | $18/mo | $1,800/mo | $1,818/mo | $6,182/mo | **77%** |
| **Profile Optimization** (one-time) | $1,000 | $2 | $150 | $152 | $848 | **85%** |

### ROI for Client

```
Client Investment: $4,500/month
Average Executive LinkedIn Impact:
  - 1 new deal closed per quarter = $50K+ revenue
  - Speaking opportunities = $10K-$50K per gig
  - Book deals, partnerships, media = Priceless

ROI: 10x-50x in first 6 months
```

---

## 7. EXPORT WORKFLOW

### n8n Workflow JSON

Save this as `linkedin-ghostwriting-workflow.json` and import to n8n:

```json
{
  "name": "LinkedIn Ghostwriting Automation",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "stripe-payment-received",
        "responseMode": "lastNode"
      },
      "id": "stripe-webhook",
      "name": "Stripe Payment Received",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "operation": "create",
        "name": "={{$('Stripe Payment Received').item.json.client_name}}",
        "parent": "1a2b3c4d5e6f7g8h"
      },
      "id": "google-drive-folder",
      "name": "Create Client Folder",
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 2,
      "position": [450, 300],
      "credentials": {
        "googleDriveOAuth2Api": {
          "id": "google-drive-creds",
          "name": "Google Drive OAuth2"
        }
      }
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.perplexity.ai/chat/completions",
        "headers": {
          "Authorization": "Bearer {{env.PERPLEXITY_API_KEY}}"
        },
        "body": {
          "model": "sonar-pro",
          "messages": [
            {
              "role": "system",
              "content": "Research the client's industry and identify trending LinkedIn topics."
            },
            {
              "role": "user",
              "content": "Research trending topics in {{$('Stripe Payment Received').item.json.industry}} for LinkedIn content. Return top 10 topics with engagement data."
            }
          ]
        }
      },
      "id": "research-niche",
      "name": "Research Client Niche",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [650, 300]
    },
    {
      "parameters": {
        "model": "claude-sonnet-4-5-20250929",
        "messages": [
          {
            "role": "system",
            "content": "You are a LinkedIn content strategist. Create 5 content pillars based on the client's expertise and industry trends."
          },
          {
            "role": "user",
            "content": "Client: {{$('Stripe Payment Received').item.json.client_name}}\nIndustry: {{$('Stripe Payment Received').item.json.industry}}\nExpertise: {{$('Stripe Payment Received').item.json.expertise}}\n\nTrending Topics: {{$('Research Client Niche').item.json.topics}}\n\nCreate 5 content pillars with 3 post ideas each."
          }
        ]
      },
      "id": "generate-pillars",
      "name": "Generate Content Pillars",
      "type": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
      "typeVersion": 1,
      "position": [850, 300],
      "credentials": {
        "anthropicApi": {
          "id": "anthropic-creds",
          "name": "Anthropic API"
        }
      }
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 168
            }
          ]
        }
      },
      "id": "weekly-schedule",
      "name": "Weekly Content Generation",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1,
      "position": [250, 500]
    },
    {
      "parameters": {
        "model": "gpt-4o",
        "messages": [
          {
            "role": "system",
            "content": "Write a LinkedIn post in the client's voice. Hook in first line, value in middle, CTA at end. 150-200 words."
          },
          {
            "role": "user",
            "content": "Write a LinkedIn post about: {{pillar.topic}}\nClient Voice: {{client.voice}}\nInclude 3 relevant hashtags."
          }
        ]
      },
      "id": "write-posts",
      "name": "Write Text Posts",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [450, 500]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.canva.com/v1/designs",
        "headers": {
          "Authorization": "Bearer {{env.CANVA_API_KEY}}"
        },
        "body": {
          "template": "carousel-template-001",
          "text": "{{post.content}}"
        }
      },
      "id": "create-carousel",
      "name": "Generate Carousel",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [650, 500]
    },
    {
      "parameters": {
        "operation": "create",
        "documentId": "1a2b3c4d5e6f7g8h",
        "content": "={{$json.posts}}"
      },
      "id": "compile-batch",
      "name": "Compile Content Batch",
      "type": "n8n-nodes-base.googleDocs",
      "typeVersion": 1,
      "position": [850, 500]
    },
    {
      "parameters": {
        "to": "{{client.email}}",
        "subject": "Your LinkedIn Content Batch - Week {{week_number}}",
        "content": "Hi {{client.name}},\n\nYour content batch is ready for review:\n{{google_docs_link}}\n\nPlease approve by EOD Thursday.\n\nBest,\nYour Ghostwriting Team"
      },
      "id": "send-approval-email",
      "name": "Send for Approval",
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2,
      "position": [1050, 500]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.linkedin.com/v2/shares",
        "headers": {
          "Authorization": "Bearer {{env.LINKEDIN_ACCESS_TOKEN}}"
        },
        "body": {
          "text": "{{approved_post.content}}",
          "postOptions": {
            "shareMediaCategory": "NONE",
            "scheduledAt": "{{approved_post.scheduled_time}}"
          }
        }
      },
      "id": "schedule-post",
      "name": "Schedule LinkedIn Post",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1250, 500]
    }
  ],
  "connections": {
    "Stripe Payment Received": {
      "main": [
        [
          {
            "node": "Create Client Folder",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Create Client Folder": {
      "main": [
        [
          {
            "node": "Research Client Niche",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Research Client Niche": {
      "main": [
        [
          {
            "node": "Generate Content Pillars",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Weekly Content Generation": {
      "main": [
        [
          {
            "node": "Write Text Posts",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Write Text Posts": {
      "main": [
        [
          {
            "node": "Generate Carousel",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Generate Carousel": {
      "main": [
        [
          {
            "node": "Compile Content Batch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Compile Content Batch": {
      "main": [
        [
          {
            "node": "Send for Approval",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send for Approval": {
      "main": [
        [
          {
            "node": "Schedule LinkedIn Post",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  },
  "staticData": null,
  "tags": [
    "linkedin",
    "ghostwriting",
    "content-automation"
  ],
  "triggerCount": 2,
  "updatedAt": "2026-03-25T00:00:00.000Z",
  "versionId": "1"
}
```

### Manual Node-by-Node Instructions (If JSON Import Fails)

1. **Create New Workflow** → Name: "LinkedIn Ghostwriting"
2. **Add Webhook Node:**
   - HTTP Method: POST
   - Path: `stripe-payment-received`
   - Response: Last Node

3. **Add Google Drive Node:**
   - Operation: Create Folder
   - Name: `={{$json.client_name}}`
   - Connect to Webhook

4. **Add HTTP Request Node (Perplexity):**
   - Method: POST
   - URL: `https://api.perplexity.ai/chat/completions`
   - Add Authorization header with API key

5. **Add AI Agent Node (Claude):**
   - Model: Claude Sonnet
   - System prompt: Content strategist
   - Connect to Perplexity output

6. **Add Schedule Trigger:**
   - Interval: 168 hours (weekly)
   - Day: Monday
   - Time: 9:00 AM

7. **Add AI Agent Node (GPT-4o):**
   - Model: GPT-4o
   - Prompt: Write LinkedIn post
   - Connect to Schedule Trigger

8. **Add HTTP Request Node (Canva):**
   - Method: POST
   - URL: Canva API endpoint
   - Body: Carousel template + content

9. **Add Google Docs Node:**
   - Operation: Create Document
   - Content: Compile all posts

10. **Add Gmail Node:**
    - To: Client email
    - Subject: Content batch ready
    - Body: Include Google Docs link

11. **Add HTTP Request Node (LinkedIn):**
    - Method: POST
    - URL: LinkedIn Shares API
    - Headers: Authorization with OAuth token

12. **Connect All Nodes** as shown in diagram
13. **Activate Workflow**

---

## 8. TROUBLESHOOTING

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| LinkedIn API returns 401 | Token expired | Refresh OAuth token in n8n credentials |
| Claude API timeout | Large batch size | Reduce batch to 5 posts, add delay between requests |
| Canva export fails | Template not found | Verify template ID in Canva dashboard |
| Stripe webhook not triggering | Wrong endpoint URL | Verify webhook URL in Stripe Dashboard matches n8n |
| Posts not scheduling | LinkedIn API rate limit | Add 5-minute delay between posts |

### Support Resources

- **n8n Community Forum:** [community.n8n.io](https://community.n8n.io)
- **LinkedIn API Docs:** [developer.linkedin.com](https://developer.linkedin.com)
- **Anthropic API Docs:** [docs.anthropic.com](https://docs.anthropic.com)
- **Stripe Webhooks:** [stripe.com/docs/webhooks](https://stripe.com/docs/webhooks)

---

## 9. SCALING BEYOND 10 CLIENTS

### Infrastructure Upgrades

| Clients | n8n Plan | Database | AI API Budget | Monthly Cost |
|---------|----------|----------|---------------|--------------|
| 1-5 | n8n.cloud Starter | SQLite | $200 | $50 |
| 6-20 | n8n.cloud Pro | PostgreSQL | $500 | $150 |
| 21-50 | Self-hosted (AWS) | PostgreSQL | $1,500 | $400 |
| 50+ | Self-hosted (K8s) | PostgreSQL Cluster | $5,000+ | $1,500+ |

### Team Scaling

- **1-10 clients:** Solo operator + VA (5 hrs/week)
- **11-30 clients:** Add account manager (full-time)
- **31-50 clients:** Add content strategist (full-time)
- **50+ clients:** Build full agency team

---

*Workflow Version 1.0 | Last Updated: March 25, 2026*
