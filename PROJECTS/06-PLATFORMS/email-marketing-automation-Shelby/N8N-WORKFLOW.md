# 🤖 N8N WORKFLOW: Email Marketing Automation

**Service:** Klaviyo/Mailchimp flow setup + campaign management for e-commerce  
**Automation Level:** 90% AI, 10% human oversight  
**Created:** March 25, 2026

---

## 1. WORKFLOW OVERVIEW

### What This Workflow Does
Automates the complete email marketing service delivery: client onboarding, e-commerce data sync, AI-powered campaign creation, automated flow optimization, A/B testing, performance analytics, and client reporting for e-commerce brands using Klaviyo, Mailchimp, or ActiveCampaign.

### Trigger
- **Primary:** New client payment received (Stripe webhook)
- **Secondary:** Scheduled campaign creation (weekly cron)
- **Tertiary:** E-commerce event triggers (abandoned cart, purchase, browse)

### Steps
1. **Client Onboarding** → Payment → Klaviyo/Mailchimp access
2. **E-commerce Sync** → Connect Shopify/WooCommerce → Import customer data
3. **Flow Audit** → AI analyzes existing flows, identifies gaps
4. **Campaign Creation** → AI writes emails based on product catalog + promotions
5. **A/B Testing** → AI generates subject line + content variations
6. **Scheduling** → Optimal send time calculation per segment
7. **Performance Tracking** → Real-time analytics dashboard
8. **Client Reporting** → Automated weekly/monthly reports

### Output (What Customer Receives)
- 4-12 email campaigns per month (depending on package)
- 3-5 automated flows (welcome, abandoned cart, post-purchase, win-back, browse)
- A/B tested subject lines and content
- Segmented audience targeting
- Weekly performance reports
- Monthly strategy recommendations

---

## 2. AI STACK

### AI Tools Required

| Tool | Purpose | Cost/Month | API Cost Per Campaign |
|------|---------|------------|----------------------|
| **Anthropic Claude** | Long-form email copy, strategy | $60 (Pro) | $0.30/email |
| **OpenAI GPT-4o** | Subject lines, short copy, variations | $200 (Team) | $0.10/email |
| **Jasper AI** (optional) | Brand voice training | $99 | Included |
| **Canva API** | Email graphics, GIFs | $15 (Pro) | $0.05/graphic |
| **Email on Acid** | Spam testing, preview | $74 | Included |
| **Klaviyo API** | Email platform | Client pays | Included |
| **Shopify API** | Product data sync | Client pays | Included |

**Total Monthly AI Stack Cost:** ~$448/month (shared across all clients)

**API Cost Per Client Per Month:**
- 8 campaigns × 2 emails each × $0.40 (avg) = **$6.40/client/month**
- Graphics (16) × $0.05 = **$0.80/client/month**
- **Total: ~$7.20/client/month**

### Setup Instructions

#### Klaviyo Partner Setup
1. Go to [klaviyo.com/partners](https://www.klaviyo.com/partners)
2. Click "Become a Partner" → Fill application
3. Complete Klaviyo Academy certifications (free):
   - Klaviyo Platform Basics
   - Email Marketing Best Practices
   - E-commerce Automation
4. Wait for approval (24-48 hours)
5. Benefits: Client account access, 20% recurring commission

#### OpenAI API Setup
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up → Settings → Billing → Add $50 credit
3. API Keys → Create new secret key
4. Copy key (starts with `sk-proj-`)
5. Store in n8n credentials as `openai_api_key`

#### Anthropic API Setup
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create account → Billing → Add payment method
3. Navigate to API Keys → Create new key
4. Copy key (starts with `sk-ant-`)
5. Store in n8n credentials as `anthropic_api_key`

#### Canva API Setup
1. Go to [canva.com/developers](https://www.canva.com/developers)
2. Create developer account
3. Register new app → Get Client ID & Secret
4. Enable "Design export" permissions
5. Store credentials in n8n as `canva_client_id`, `canva_client_secret`

#### Shopify API Setup (Client-Side)
1. Client goes to their Shopify Admin
2. Apps → Develop apps → Create app
3. Configure Admin API integration:
   - Products (read)
   - Orders (read)
   - Customers (read)
4. Install app → Copy API key + password
5. Store in n8n credentials per client

---

## 3. N8N WORKFLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EMAIL MARKETING AUTOMATION WORKFLOW                       │
└─────────────────────────────────────────────────────────────────────────────┘

[Stripe Webhook: Payment Received]
         │
         ▼
┌─────────────────┐
│ 1. CREATE CLIENT│
│    PROFILE      │
│    (Airtable)   │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 2. KLAVIYO      │
│    CONNECTION   │
│    (OAuth2)     │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 3. SHOPIFY      │
│    SYNC         │
│    (Products,   │
│     Customers,  │
│     Orders)     │
└─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│              WEEKLY CAMPAIGN CREATION LOOP                   │
│  (Triggered every Tuesday 10 AM for the week ahead)          │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ 4. AI ANALYZES  │
│    DATA         │
│    - Top products
│    - Customer segments
│    - Past performance
│    - Upcoming promotions
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 5. GENERATE     │
│    CAMPAIGN     │
│    IDEAS        │
│    (Claude API) │
│    - 5 campaign concepts
│    - Target segments
│    - Product picks
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 6. CLIENT       │
│    APPROVAL     │
│    (Email/Slack)│
└─────────────────┘
         │
    [APPROVED]
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    EMAIL CREATION                            │
└─────────────────────────────────────────────────────────────┘
         │
         ├──────────────────┬──────────────────┬──────────────┐
         ▼                  ▼                  ▼              ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐  ┌─────────────┐
│ 7A. SUBJECT │    │ 7B. EMAIL   │    │ 7C. GRAPHIC │  │ 7D. A/B     │
│     LINES   │    │     BODY    │    │     DESIGN  │  │     VARIANTS│
│  (GPT-4o)   │    │  (Claude)   │    │  (Canva)    │  │  (GPT-4o)   │
│  - 10 options│    │  - HTML copy│    │  - Hero img │  │  - 2 versions│
│  - Score 1-10│    │  - CTA buttons│   │  - Product  │  │  - Content  │
└─────────────┘    └─────────────┘    └─────────────┘  └─────────────┘
         │                  │                  │              │
         └──────────────────┴──────────────────┴──────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 8. SPAM TEST    │
                    │    (Email on    │
                    │     Acid API)   │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 9. SCHEDULE     │
                    │    CAMPAIGN     │
                    │    (Klaviyo)    │
                    │    - Optimal time
                    │    - Segments
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────────────────────┐
                    │         AUTOMATED FLOWS          │
                    │  (Triggered by e-commerce events)│
                    └─────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ ABANDONED   │    │ WELCOME     │    │ POST-       │
│ CART        │    │ SERIES      │    │ PURCHASE    │
│ (1hr delay) │    │ (3 emails)  │    │ (3 emails)  │
└─────────────┘    └─────────────┘    └─────────────┘
         │                    │                    │
         └────────────────────┴────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 10. PERFORMANCE │
                    │     TRACKING    │
                    │     (Klaviyo    │
                    │      Analytics) │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 11. WEEKLY      │
                    │     REPORT      │
                    │     (Auto-Gen)  │
                    │     (Google     │
                    │      Docs)      │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 12. CLIENT      │
                    │     EMAIL       │
                    │     (Gmail)     │
                    └─────────────────┘
```

### Node Explanations

| Node # | Node Type | Purpose | API/Integration |
|--------|-----------|---------|-----------------|
| 1 | Webhook | Trigger on Stripe payment | Stripe |
| 2 | OAuth2 | Connect Klaviyo account | Klaviyo OAuth2 |
| 3 | HTTP Request | Sync e-commerce data | Shopify API |
| 4 | AI Agent | Analyze performance data | GPT-4o API |
| 5 | AI Agent | Generate campaign ideas | Claude API |
| 6 | Email/Slack | Send for approval | Gmail/Slack API |
| 7A | AI Agent | Write subject lines | GPT-4o API |
| 7B | AI Agent | Write email body | Claude API |
| 7C | HTTP Request | Generate graphics | Canva API |
| 7D | AI Agent | Create A/B variants | GPT-4o API |
| 8 | HTTP Request | Spam test | Email on Acid API |
| 9 | HTTP Request | Schedule campaign | Klaviyo API |
| 10 | HTTP Request | Fetch analytics | Klaviyo API |
| 11 | Google Docs | Generate report | Google Docs API |
| 12 | Gmail | Send report | Gmail API |

---

## 4. STEP-BY-STEP SETUP

### Installing the Workflow in n8n

#### Prerequisites
- Self-hosted n8n or n8n.cloud Pro account ($50/month)
- PostgreSQL database (recommended for production)
- Klaviyo Partner account (approved)

#### Import Workflow
1. Open n8n dashboard
2. Go to **Workflows** → **Import from File**
3. Download the JSON from Section 7 (Export Workflow)
4. Import the JSON file
5. Review all nodes and connections

#### Configure Credentials
For each node, click the credential dropdown → **Add New**:

1. **Stripe:** API key from Stripe Dashboard → Developers
2. **Klaviyo:** OAuth2 → Follow Klaviyo OAuth flow
3. **Shopify:** API key + password from client's Shopify admin
4. **OpenAI:** API key from platform.openai.com
5. **Anthropic:** API key from console.anthropic.com
6. **Canva:** Client ID + Secret from Canva developers
7. **Email on Acid:** API key from emailonacid.com
8. **Google Drive:** OAuth2 → Follow Google OAuth flow
9. **Gmail:** OAuth2 → Follow Google OAuth flow
10. **Slack:** Bot token from Slack API dashboard
11. **Airtable:** API key from airtable.com

#### Activate Workflow
1. Toggle workflow to **Active** (top right)
2. Set up weekly cron trigger (Tuesday 10 AM)
3. Test with sample client data
4. Verify each node executes correctly

### API Key Setup Checklist

```
□ Stripe API Key (sk_test_... or sk_live_...)
□ Klaviyo OAuth2 Credentials (Client ID + Secret)
□ Shopify API Key + Password (per client)
□ OpenAI API Key (sk-proj-...)
□ Anthropic API Key (sk-ant-...)
□ Canva API Credentials (Client ID + Secret)
□ Email on Acid API Key
□ Google OAuth2 Credentials (Drive + Gmail)
□ Slack Bot Token (xoxb-...)
□ Airtable API Key
```

### Testing Instructions

#### Test 1: Client Onboarding
1. Create a test payment in Stripe ($1)
2. Webhook should trigger workflow
3. Verify Airtable record created
4. Check Klaviyo OAuth flow initiates
5. Confirm Shopify sync starts

#### Test 2: Campaign Creation
1. Manually trigger "Weekly Campaign Creation"
2. Verify AI generates 5 campaign ideas
3. Check email copy created for approved campaign
4. Confirm graphics generated in Canva
5. Verify spam test passes

#### Test 3: Flow Automation
1. Create test abandoned cart event in Shopify
2. Verify Klaviyo flow triggers
3. Check email sent after 1-hour delay
4. Confirm analytics tracked

#### Test 4: Reporting
1. Wait for weekly cron trigger
2. Verify report generated in Google Docs
3. Check email sent to client with report
4. Confirm metrics match Klaviyo dashboard

---

## 5. DELIVERY PROCESS

### Customer Pays → What Happens

```
PAYMENT RECEIVED (Stripe)
        │
        ├─► Instant: Welcome email sent
        │    └─► Includes onboarding checklist
        │
        ├─► Auto: Client profile created in Airtable
        │    └─► Status: "Onboarding"
        │
        ├─► Auto: Klaviyo access request sent
        │    └─► Client approves partner access
        │
        ├─► Auto: Shopify integration initiated
        │    └─► Products, customers, orders sync
        │
        ├─► Auto: Flow audit begins
        │    └─► AI analyzes existing flows
        │
        └─► Auto: Slack notification to team
             └─► Channel: #email-clients
```

### AI Generates → What Gets Delivered

**Week 1 (Onboarding):**
- Complete email audit (PDF report)
- Flow gap analysis
- 3 essential flows built (welcome, abandoned cart, post-purchase)
- First campaign created and scheduled

**Ongoing (Weekly):**
- 2-3 email campaigns written and designed
- A/B tests running on subject lines
- Flow optimization based on performance
- Segment refinement

**Monthly:**
- Performance analytics report
- Strategy recommendations
- Content calendar for next month
- Competitive analysis

### Human Touchpoints (10% Oversight)

| Touchpoint | Frequency | Time Required | Who |
|------------|-----------|---------------|-----|
| Client Onboarding Call | One-time | 60 min | Account Manager |
| Campaign Approval | Weekly | 15 min | Client (reviews drafts) |
| Quality Check | Weekly | 20 min | VA (reviews AI output) |
| Strategy Call | Monthly | 45 min | Account Manager |
| Crisis Management | As needed | Variable | Account Manager |

**Total Human Time Per Client Per Month:** ~3 hours

---

## 6. PRICING CALCULATOR

### API Costs Per Delivery

| Item | API Cost | Frequency | Monthly Cost/Client |
|------|----------|-----------|---------------------|
| Subject Lines (8 campaigns × 10 each) | $0.01 each | 80/month | $0.80 |
| Email Body Copy (8 campaigns × 2) | $0.30 each | 16/month | $4.80 |
| Graphics (8 campaigns × 2) | $0.05 each | 16/month | $0.80 |
| A/B Variants (8 campaigns) | $0.15 each | 8/month | $1.20 |
| Flow Optimization | $0.50 | 4/month | $2.00 |
| **Total API Cost** | | | **$9.60/client/month** |

### Time Savings

| Task | Manual Time | Automated Time | Savings |
|------|-------------|----------------|---------|
| Campaign Strategy | 2 hrs/campaign | 15 min/campaign | 87% |
| Email Writing | 1.5 hrs/email | 10 min/email | 89% |
| Graphic Design | 1 hr/graphic | 5 min/graphic | 92% |
| A/B Test Creation | 30 min/test | 2 min/test | 93% |
| Analytics Report | 3 hrs/report | 10 min/report | 94% |
| Flow Optimization | 2 hrs/flow | 15 min/flow | 87% |
| **Total Per Month** | **48 hours** | **4 hours** | **92%** |

**Value of Time Saved:** 44 hours × $75/hr (email specialist rate) = **$3,300/month value**

### Recommended Pricing

Based on service arbitrage blueprint margins (65-75% target):

| Package | Market Rate | API Cost | Labor Cost | Total Cost | Profit | Margin |
|---------|-------------|----------|------------|------------|--------|--------|
| **Starter** (4 campaigns/mo, 3 flows) | $2,500/mo | $10/mo | $600/mo | $610/mo | $1,890/mo | **76%** |
| **Growth** (8 campaigns/mo, 5 flows, A/B tests) | $4,500/mo | $10/mo | $1,000/mo | $1,010/mo | $3,490/mo | **78%** |
| **Scale** (12 campaigns/mo, unlimited flows, SMS) | $7,500/mo | $15/mo | $1,800/mo | $1,815/mo | $5,685/mo | **76%** |
| **Flow Setup** (one-time) | $2,000 | $5 | $300 | $305 | $1,695 | **85%** |

### ROI for Client

```
Client Investment: $4,500/month
Average E-commerce Email Benchmarks:
  - Email revenue: 25-35% of total revenue
  - Flow revenue: 40-50% of email revenue
  - Average store revenue: $100K/month
  - Email revenue (30%): $30K/month
  - Our optimization lifts by 30%: +$9K/month

ROI: 2x-3x in first 90 days
```

---

## 7. EXPORT WORKFLOW

### n8n Workflow JSON

Save this as `email-marketing-workflow.json` and import to n8n:

```json
{
  "name": "Email Marketing Automation",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "stripe-email-payment",
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
        "tableId": "emailClients",
        "fields": {
          "name": "={{$json.client_name}}",
          "email": "={{$json.client_email}}",
          "shopify_url": "={{$json.shopify_url}}",
          "package": "={{$json.package}}"
        }
      },
      "id": "airtable-client",
      "name": "Create Client Profile",
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 2,
      "position": [450, 300]
    },
    {
      "parameters": {
        "method": "GET",
        "url": "https://api.klaviyo.com/api/accounts",
        "authentication": "klaviyoOAuth2Api"
      },
      "id": "klaviyo-connect",
      "name": "Connect Klaviyo",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [650, 300]
    },
    {
      "parameters": {
        "method": "GET",
        "url": "https://{{$json.shopify_url}}/admin/api/2024-01/products.json",
        "authentication": "shopifyApi",
        "options": {}
      },
      "id": "shopify-sync",
      "name": "Sync Shopify Products",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [850, 300]
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
      "id": "weekly-campaign-trigger",
      "name": "Weekly Campaign Creation",
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
            "content": "Analyze e-commerce performance data and recommend email campaign ideas."
          },
          {
            "role": "user",
            "content": "Top products: {{$json.top_products}}\nPast campaigns: {{$json.past_campaigns}}\nUpcoming promotions: {{$json.promotions}}\n\nRecommend 5 email campaign ideas with target segments."
          }
        ]
      },
      "id": "ai-analyze-data",
      "name": "AI Analyze Data",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [450, 500]
    },
    {
      "parameters": {
        "model": "claude-sonnet-4-5-20250929",
        "messages": [
          {
            "role": "system",
            "content": "Generate email campaign concepts for e-commerce brand."
          },
          {
            "role": "user",
            "content": "Brand: {{$json.brand_name}}\nProducts: {{$json.products}}\nCampaign type: {{$json.campaign_type}}\n\nCreate 5 campaign concepts with subject lines, hero message, and CTA."
          }
        ]
      },
      "id": "generate-campaigns",
      "name": "Generate Campaign Ideas",
      "type": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
      "typeVersion": 1,
      "position": [650, 500]
    },
    {
      "parameters": {
        "to": "{{client.email}}",
        "subject": "Email Campaign Ideas - Week {{week_number}}",
        "content": "Hi {{client.name}},\n\nHere are 5 campaign ideas for this week:\n{{campaign_ideas}}\n\nReply with your top 2 picks and we'll create the emails.\n\nBest,\nYour Email Team"
      },
      "id": "send-for-approval",
      "name": "Send for Approval",
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2,
      "position": [850, 500]
    },
    {
      "parameters": {
        "model": "gpt-4o",
        "messages": [
          {
            "role": "system",
            "content": "Write 10 compelling email subject lines. Score each 1-10 for open rate potential."
          },
          {
            "role": "user",
            "content": "Campaign: {{$json.campaign_topic}}\nProducts: {{$json.products}}\nAudience: {{$json.segment}}\n\nWrite 10 subject lines with scores."
          }
        ]
      },
      "id": "write-subject-lines",
      "name": "Write Subject Lines",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [1050, 500]
    },
    {
      "parameters": {
        "model": "claude-sonnet-4-5-20250929",
        "messages": [
          {
            "role": "system",
            "content": "Write a high-converting e-commerce email. Include: hero section, body copy, CTA buttons, product recommendations."
          },
          {
            "role": "user",
            "content": "Campaign: {{$json.campaign}}\nSubject: {{$json.subject}}\nProducts: {{$json.products}}\nBrand voice: {{$json.brand_voice}}\n\nWrite complete email HTML."
          }
        ]
      },
      "id": "write-email-body",
      "name": "Write Email Body",
      "type": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
      "typeVersion": 1,
      "position": [1250, 500]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.canva.com/v1/designs",
        "headers": {
          "Authorization": "Bearer {{env.CANVA_API_KEY}}"
        },
        "body": {
          "template": "email-hero-template",
          "text": "={{$json.campaign_headline}}",
          "brand_colors": "={{$json.brand_colors}}"
        }
      },
      "id": "create-graphic",
      "name": "Create Email Graphic",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1450, 500]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.emailonacid.com/v6/campaigns",
        "headers": {
          "Authorization": "Bearer {{env.EMAIL_ON_ACID_API_KEY}}"
        },
        "body": {
          "html": "={{$json.email_html}}",
          "subject": "={{$json.subject}}",
          "from_email": "={{$json.from_email}}"
        }
      },
      "id": "spam-test",
      "name": "Spam Test Email",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1650, 500]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.klaviyo.com/api/campaigns",
        "authentication": "klaviyoOAuth2Api",
        "body": {
          "data": {
            "type": "campaign",
            "attributes": {
              "name": "={{$json.campaign_name}}",
              "scheduled_at": "={{$json.send_time}}",
              "recipient_filter": "={{$json.segment}}"
            }
          }
        }
      },
      "id": "schedule-kampaign",
      "name": "Schedule Klaviyo Campaign",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1850, 500]
    },
    {
      "parameters": {
        "method": "GET",
        "url": "https://api.klaviyo.com/api/metrics",
        "authentication": "klaviyoOAuth2Api",
        "query": {
          "filter": "metrics.name equals 'Opened Email'",
          "page[size]": "100"
        }
      },
      "id": "fetch-analytics",
      "name": "Fetch Klaviyo Analytics",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [2050, 500]
    },
    {
      "parameters": {
        "operation": "create",
        "documentId": "1a2b3c4d5e6f7g8h",
        "content": "={{$json.report_content}}"
      },
      "id": "generate-report",
      "name": "Generate Weekly Report",
      "type": "n8n-nodes-base.googleDocs",
      "typeVersion": 1,
      "position": [2250, 500]
    },
    {
      "parameters": {
        "to": "{{client.email}}",
        "subject": "Your Email Marketing Report - Week {{week_number}}",
        "content": "Hi {{client.name}},\n\nYour weekly email report is ready:\n{{google_docs_link}}\n\nHighlights:\n- Open Rate: {{open_rate}}%\n- CTR: {{ctr}}%\n- Revenue: ${{revenue}}\n\nBest,\nYour Email Team"
      },
      "id": "send-report",
      "name": "Send Report to Client",
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2,
      "position": [2450, 500]
    }
  ],
  "connections": {
    "Stripe Payment Received": {
      "main": [
        [
          {
            "node": "Create Client Profile",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Create Client Profile": {
      "main": [
        [
          {
            "node": "Connect Klaviyo",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Connect Klaviyo": {
      "main": [
        [
          {
            "node": "Sync Shopify Products",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Weekly Campaign Creation": {
      "main": [
        [
          {
            "node": "AI Analyze Data",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Analyze Data": {
      "main": [
        [
          {
            "node": "Generate Campaign Ideas",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Generate Campaign Ideas": {
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
            "node": "Write Subject Lines",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Write Subject Lines": {
      "main": [
        [
          {
            "node": "Write Email Body",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Write Email Body": {
      "main": [
        [
          {
            "node": "Create Email Graphic",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Create Email Graphic": {
      "main": [
        [
          {
            "node": "Spam Test Email",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Spam Test Email": {
      "main": [
        [
          {
            "node": "Schedule Klaviyo Campaign",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Schedule Klaviyo Campaign": {
      "main": [
        [
          {
            "node": "Fetch Klaviyo Analytics",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Fetch Klaviyo Analytics": {
      "main": [
        [
          {
            "node": "Generate Weekly Report",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Generate Weekly Report": {
      "main": [
        [
          {
            "node": "Send Report to Client",
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
    "email-marketing",
    "klaviyo",
    "e-commerce"
  ],
  "triggerCount": 2,
  "updatedAt": "2026-03-25T00:00:00.000Z",
  "versionId": "1"
}
```

### Manual Node-by-Node Instructions (If JSON Import Fails)

1. **Create New Workflow** → Name: "Email Marketing Automation"
2. **Add Webhook Node:**
   - HTTP Method: POST
   - Path: `stripe-email-payment`
   - Response: Last Node

3. **Add Airtable Node:**
   - Operation: Create Record
   - Table: emailClients
   - Fields: client_name, client_email, shopify_url, package

4. **Add HTTP Request Node (Klaviyo):**
   - Method: GET
   - URL: `https://api.klaviyo.com/api/accounts`
   - Auth: Klaviyo OAuth2

5. **Add HTTP Request Node (Shopify):**
   - Method: GET
   - URL: `https://{shopify_url}/admin/api/2024-01/products.json`
   - Auth: Shopify API

6. **Add Schedule Trigger:**
   - Interval: 168 hours (weekly)
   - Day: Tuesday
   - Time: 10:00 AM

7. **Add AI Agent Node (GPT-4o):**
   - Model: GPT-4o
   - Prompt: Analyze e-commerce data, recommend campaigns

8. **Add AI Agent Node (Claude):**
   - Model: Claude Sonnet
   - Prompt: Generate 5 campaign concepts

9. **Add Gmail Node:**
   - To: Client email
   - Subject: Campaign ideas for approval
   - Body: Include campaign concepts

10. **Add AI Agent Node (GPT-4o):**
    - Model: GPT-4o
    - Prompt: Write 10 subject lines, score 1-10

11. **Add AI Agent Node (Claude):**
    - Model: Claude Sonnet
    - Prompt: Write complete email HTML

12. **Add HTTP Request Node (Canva):**
    - Method: POST
    - URL: Canva API endpoint
    - Body: Template + brand colors

13. **Add HTTP Request Node (Email on Acid):**
    - Method: POST
    - URL: Spam test endpoint
    - Body: HTML + subject

14. **Add HTTP Request Node (Klaviyo):**
    - Method: POST
    - URL: Klaviyo Campaigns API
    - Body: Campaign data + schedule

15. **Add HTTP Request Node (Klaviyo Analytics):**
    - Method: GET
    - URL: Klaviyo Metrics API
    - Query: Date range, metrics

16. **Add Google Docs Node:**
    - Operation: Create Document
    - Content: Formatted report

17. **Add Gmail Node:**
    - To: Client email
    - Subject: Weekly report
    - Body: Include Google Docs link

18. **Connect All Nodes** as shown in diagram
19. **Activate Workflow**

---

## 8. TROUBLESHOOTING

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Klaviyo OAuth token expired | Token refresh failed | Re-authenticate in n8n credentials |
| Shopify API rate limited | Too many requests | Add delay between requests, use bulk API |
| Canva export fails | Template not found | Verify template ID, check permissions |
| Spam test fails | Domain not authenticated | Set up SPF, DKIM, DMARC records |
| Email goes to spam | Content triggers | Avoid spam words, improve text/image ratio |
| Low open rates | Poor subject lines | A/B test more variations, personalize |
| Low CTR | Weak CTA | Make CTA prominent, add urgency |

### Email Deliverability Best Practices

```
✅ DO:
- Authenticate domain (SPF, DKIM, DMARC)
- Warm up new domains gradually (50 → 500 → 5K/day)
- Segment by engagement (send engaged subscribers first)
- Remove inactive subscribers (90+ days no open)
- Use consistent "From" name and email
- Include physical mailing address (CAN-SPAM law)
- Add one-click unsubscribe link

❌ DON'T:
- Use spam trigger words: "FREE", "BUY NOW", "LIMITED TIME"
- Send from no-reply@ addresses
- Use all caps in subject lines
- Send to purchased lists
- Ignore bounce rates (>2% = problem)
- Send too frequently (>1/day for most audiences)
```

### Klaviyo Flow Benchmarks

| Flow | Good Open Rate | Good CTR | Good Conversion |
|------|----------------|----------|-----------------|
| Welcome Series | 45-55% | 8-12% | 3-5% |
| Abandoned Cart | 40-50% | 10-15% | 10-15% |
| Browse Abandonment | 35-45% | 6-10% | 5-8% |
| Post-Purchase | 40-50% | 8-12% | 15-25% |
| Win-Back | 25-35% | 5-8% | 3-5% |

### Support Resources

- **n8n Community:** [community.n8n.io](https://community.n8n.io)
- **Klaviyo Academy:** [academy.klaviyo.com](https://academy.klaviyo.com)
- **Klaviyo API Docs:** [developers.klaviyo.com](https://developers.klaviyo.com)
- **Shopify API Docs:** [shopify.dev/api](https://shopify.dev/api)
- **Email on Acid:** [emailonacid.com](https://www.emailonacid.com)
- **Really Good Emails:** [reallygoodemails.com](https://reallygoodemails.com)

---

## 9. SCALING BEYOND 10 CLIENTS

### Infrastructure Upgrades

| Clients | n8n Plan | Database | API Budget | Monthly Cost |
|---------|----------|----------|------------|--------------|
| 1-5 | n8n.cloud Pro | PostgreSQL | $300 | $150 |
| 6-20 | Self-hosted (AWS) | PostgreSQL | $800 | $400 |
| 21-50 | Self-hosted (K8s) | PostgreSQL Cluster | $2,000 | $1,000 |
| 50+ | Multi-region K8s | PostgreSQL + Redis | $5,000+ | $3,000+ |

### Team Scaling

- **1-10 clients:** Solo operator + VA (8 hrs/week)
- **11-30 clients:** Add email specialist (full-time)
- **31-50 clients:** Add account manager + designer
- **50+ clients:** Build full email agency team (10-20 people)

### White-Label Option

Offer this workflow as a white-label solution to e-commerce agencies:
- Setup fee: $7,500 (workflow + training + Klaviyo partner onboarding)
- Monthly license: $750/month per agency
- Includes: Workflow JSON, API setup guide, 4-hour training, monthly updates

---

## 10. EMAIL COPYWRITING PROMPTS

### Subject Line Generator (GPT-4o)

```
SYSTEM PROMPT:

You are an expert email copywriter specializing in e-commerce.
Your task: Write 10 compelling subject lines for the campaign below.

GUIDELINES:
- Keep under 50 characters (mobile-friendly)
- Use curiosity, urgency, or benefit
- Personalize when possible (use first name, location, past purchase)
- Avoid spam trigger words
- Score each 1-10 for open rate potential

CAMPAIGN DETAILS:
- Brand: {{brand_name}}
- Product: {{product_name}}
- Offer: {{discount_or_benefit}}
- Audience: {{segment}}
- Occasion: {{seasonal_or_event}}

OUTPUT FORMAT:
1. [Subject line] - Score: X/10 - Why: [brief reasoning]
2. [Subject line] - Score: X/10 - Why: [brief reasoning]
...
10. [Subject line] - Score: X/10 - Why: [brief reasoning]
```

### Email Body Generator (Claude)

```
SYSTEM PROMPT:

You are a conversion-focused email copywriter for e-commerce.
Write a complete HTML email that drives clicks and purchases.

STRUCTURE:
1. Preheader text (50-100 characters)
2. Hero section with headline + subheadline + CTA button
3. Body copy (150-250 words, benefit-focused)
4. Product showcase (3 products with images + prices)
5. Social proof (testimonial or review)
6. Final CTA with urgency
7. Footer with unsubscribe + address

BRAND VOICE: {{brand_voice}}
CAMPAIGN GOAL: {{goal}}
KEY MESSAGE: {{message}}
OFFER: {{discount_or_benefit}}
URGENCY: {{deadline_or_scarcity}}

HTML REQUIREMENTS:
- Mobile-responsive (single column, large buttons)
- Inline CSS (no external stylesheets)
- Alt text on all images
- Plain text fallback
- Unsubscribe link in footer

Write the complete HTML email now.
```

---

*Workflow Version 1.0 | Last Updated: March 25, 2026*
