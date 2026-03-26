# 🤖 N8N WORKFLOW: Local Lead Generation Automation

**Service:** AI-powered lead generation for local service businesses  
**Automation Level:** 90% AI, 10% human oversight  
**Created:** March 25, 2026

---

## 1. WORKFLOW OVERVIEW

### What This Workflow Does
Automates the complete local lead generation pipeline: prospect research, multi-channel outreach (email, SMS, LinkedIn, calls), lead qualification, appointment booking, and CRM management for local service businesses (HVAC, dentists, lawyers, med spas, home services).

### Trigger
- **Primary:** New client onboarding completed (Typeform submission)
- **Secondary:** Daily prospect scraping (scheduled cron)
- **Tertiary:** Lead response trigger (when prospect replies)

### Steps
1. **Client Onboarding** → Service area, ideal customer profile, budget
2. **Prospect Research** → AI scrapes Google Maps, Yelp, industry directories
3. **Lead Enrichment** → AI finds contact info, social profiles, company data
4. **Outreach Sequence** → Multi-channel campaign (email → SMS → LinkedIn → Call)
5. **Response Handling** → AI qualifies responses, books appointments
6. **CRM Sync** → All leads logged in GoHighLevel/HubSpot
7. **Reporting** → Weekly performance dashboard

### Output (What Customer Receives)
- 50-200 qualified leads per month
- Automated outreach across 4 channels
- AI-qualified appointments booked on calendar
- Real-time CRM dashboard
- Weekly performance report (response rates, bookings, ROI)

---

## 2. AI STACK

### AI Tools Required

| Tool | Purpose | Cost/Month | API Cost Per Lead |
|------|---------|------------|-------------------|
| **Clay.com** | Data enrichment, scraping | $300 (Pro) | $0.50/lead |
| **OpenAI GPT-4o** | Email copy, response handling | $200 (Team) | $0.08/lead |
| **Anthropic Claude** | Long-form proposals, qualification | $60 (Pro) | $0.15/lead |
| **Retell AI / Bland AI** | AI voice calls | $99 + usage | $0.10/min |
| **Twilio** | SMS + phone numbers | $50 + usage | $0.0075/SMS |
| **Apollo.io API** | B2B contact data | $99 (Essential) | Included |
| **Google Maps API** | Local business scraping | $200 (credits) | $0.032/search |

**Total Monthly AI Stack Cost:** ~$1,008/month (shared across all clients)

**API Cost Per Client Per Month:**
- 100 leads × $0.86 (avg) = **$86/client/month**
- 20 appointments × $0.50 (voice calls) = **$10/client/month**
- SMS (200 messages) × $0.0075 = **$1.50/client/month**
- **Total: ~$97.50/client/month**

### Setup Instructions

#### Clay.com Setup
1. Go to [clay.com](https://www.clay.com)
2. Sign up for Pro plan ($300/month)
3. Navigate to Settings → API Keys
4. Generate new API key
5. Store in n8n credentials as `clay_api_key`

#### Retell AI Setup (Voice Calls)
1. Go to [retellai.com](https://www.retellai.com)
2. Create account → Billing → Add $100 credit
3. API Keys → Create new key
4. Create your first AI agent (use template: "Appointment Setter")
5. Store credentials in n8n as `retell_api_key`, `retell_agent_id`

#### Twilio Setup (SMS)
1. Go to [twilio.com](https://www.twilio.com)
2. Sign up → Get free $15 credit
3. Buy local phone number ($1/month)
4. Navigate to Settings → API Keys
5. Create API key + get Account SID
6. Store in n8n as `twilio_account_sid`, `twilio_auth_token`, `twilio_phone_number`

#### Apollo.io Setup
1. Go to [apollo.io](https://www.apollo.io)
2. Subscribe to Essential plan ($99/month)
3. Settings → API Keys
4. Generate API key
5. Store in n8n as `apollo_api_key`

#### Google Maps API Setup
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project → Enable "Places API" and "Maps JavaScript API"
3. Billing → Add payment method
4. Credentials → Create API Key
5. Restrict key to Places API only
6. Store in n8n as `google_maps_api_key`

---

## 3. N8N WORKFLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    LOCAL LEAD GENERATION WORKFLOW                            │
└─────────────────────────────────────────────────────────────────────────────┘

[Client Onboarding Form Submitted]
         │
         ▼
┌─────────────────┐
│ 1. CREATE CLIENT│
│    PROFILE      │
│    (Airtable)   │
└─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│              DAILY PROSPECT RESEARCH LOOP                    │
│  (Triggered daily at 8 AM for each active client)            │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ 2. SCRAPE       │
│    GOOGLE MAPS  │
│    (Places API) │
│    - 50 businesses/day
│    - Service area filter
│    - Rating > 3.5
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 3. ENRICH DATA  │
│    (Clay.com)   │
│    - Find emails
│    - Phone numbers
│    - LinkedIn URLs
│    - Company size
└─────────────────┘
         │
         ▼
┌─────────────────┐
│ 4. QUALIFY      │
│    LEADS        │
│    (AI Score)   │
│    - Budget fit
│    - Decision maker
│    - Pain points
│    - Score 1-100
└─────────────────┘
         │
         ├──────────────────────────────┐
         │ Score >= 70                  │ Score < 70
         ▼                              ▼
┌─────────────────┐            ┌─────────────────┐
│ 5A. HIGH-TIER   │            │ 5B. LOW-TIER    │
│     OUTREACH    │            │     Nurture     │
│     (4-channel) │            │     (Email only)│
└─────────────────┘            └─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    OUTREACH SEQUENCE                         │
│  Day 0: Email 1 (Personalized value prop)                    │
│  Day 2: LinkedIn connection + note                            │
│  Day 4: SMS follow-up                                         │
│  Day 7: Email 2 (Case study)                                  │
│  Day 10: AI Voice Call (Retell AI)                            │
│  Day 14: Email 3 (Breakup)                                    │
└─────────────────────────────────────────────────────────────┘
         │
         ├──────────────────┬──────────────────┬──────────────┐
         │                  │                  │              │
         ▼                  ▼                  ▼              ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐  ┌─────────────┐
│ 6A. EMAIL   │    │ 6B. LINKEDIN│    │ 6C. SMS     │  │ 6D. VOICE   │
│     SEND    │    │     CONNECT │    │     SEND    │  │     CALL    │
│  (SendGrid) │    │  (LinkedIn) │    │  (Twilio)   │  │  (Retell)   │
└─────────────┘    └─────────────┘    └─────────────┘  └─────────────┘
         │                  │                  │              │
         └──────────────────┴──────────────────┴──────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 7. MONITOR      │
                    │    RESPONSES    │
                    │    (Inbox API)  │
                    └─────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
              [POSITIVE]          [NEGATIVE/NO REPLY]
                    │                   │
                    ▼                   ▼
          ┌─────────────────┐   ┌─────────────────┐
          │ 8A. QUALIFY +   │   │ 8B. CONTINUE    │
          │     BOOK CALL   │   │     SEQUENCE    │
          │     (Calendly)  │   │     (Next step) │
          └─────────────────┘   └─────────────────┘
                    │
                    ▼
          ┌─────────────────┐
          │ 9. CRM SYNC     │
          │    (GoHighLevel)│
          │    - Lead status
          │    - Call notes
          │    - Appt booked
          └─────────────────┘
                    │
                    ▼
          ┌─────────────────┐
          │ 10. CLIENT      │
          │     NOTIFICATION│
          │     (Slack/SMS) │
          └─────────────────┘
```

### Node Explanations

| Node # | Node Type | Purpose | API/Integration |
|--------|-----------|---------|-----------------|
| 1 | Form Trigger | Client onboarding | Typeform/Airtable |
| 2 | HTTP Request | Google Maps scraping | Google Places API |
| 3 | HTTP Request | Data enrichment | Clay.com API |
| 4 | AI Agent | Lead scoring | GPT-4o API |
| 5A | Code Node | High-tier sequence logic | n8n native |
| 5B | Code Node | Low-tier nurture logic | n8n native |
| 6A | Email | Send personalized emails | SendGrid/Mailgun |
| 6B | HTTP Request | LinkedIn connection | LinkedIn API |
| 6C | HTTP Request | Send SMS | Twilio API |
| 6D | HTTP Request | AI voice call | Retell AI API |
| 7 | Email Trigger | Monitor replies | Gmail/Outlook IMAP |
| 8A | AI Agent | Qualify + book | Claude API + Calendly |
| 8B | Wait Node | Delay before next step | n8n native |
| 9 | HTTP Request | CRM sync | GoHighLevel API |
| 10 | Slack/SMS | Notify client | Slack/Twilio API |

---

## 4. STEP-BY-STEP SETUP

### Installing the Workflow in n8n

#### Prerequisites
- Self-hosted n8n or n8n.cloud Pro account ($50/month)
- PostgreSQL database (required for high-volume workflows)
- Redis (recommended for queue management)

#### Import Workflow
1. Open n8n dashboard
2. Go to **Workflows** → **Import from File**
3. Download the JSON from Section 7 (Export Workflow)
4. Import the JSON file
5. Review all nodes and connections

#### Configure Credentials
For each node, click the credential dropdown → **Add New**:

1. **Google Maps:** API key from Google Cloud Console
2. **Clay.com:** API key from Clay settings
3. **OpenAI:** API key from platform.openai.com
4. **Anthropic:** API key from console.anthropic.com
5. **Retell AI:** API key + Agent ID from Retell dashboard
6. **Twilio:** Account SID + Auth Token from Twilio console
7. **Apollo.io:** API key from Apollo settings
8. **SendGrid:** API key from sendgrid.com
9. **LinkedIn:** OAuth2 credentials from LinkedIn developers
10. **Calendly:** API key from calendly.com
11. **GoHighLevel:** API key from GHL settings
12. **Slack:** Bot token from Slack API

#### Activate Workflow
1. Toggle workflow to **Active** (top right)
2. Set up daily cron trigger (8 AM local time)
3. Test with sample client data
4. Verify each node executes correctly

### API Key Setup Checklist

```
□ Google Maps API Key (AIzaSy...)
□ Clay.com API Key
□ OpenAI API Key (sk-proj-...)
□ Anthropic API Key (sk-ant-...)
□ Retell AI API Key + Agent ID
□ Twilio Account SID + Auth Token + Phone Number
□ Apollo.io API Key
□ SendGrid API Key (SG....)
□ LinkedIn OAuth2 Credentials
□ Calendly API Key
□ GoHighLevel API Key
□ Slack Bot Token (xoxb-...)
```

### Testing Instructions

#### Test 1: Prospect Research
1. Manually trigger "Daily Prospect Research"
2. Verify Google Maps returns 50 businesses
3. Check Clay.com enrichment finds emails for 60%+
4. Confirm AI scoring assigns 1-100 score

#### Test 2: Outreach Sequence
1. Add test lead with score >= 70
2. Verify Email 1 sends immediately
3. Wait 2 days → Check LinkedIn connection sent
4. Wait 2 days → Check SMS sent
5. Verify all steps logged in execution history

#### Test 3: Response Handling
1. Reply to test email with "Interested, tell me more"
2. Verify AI qualifies as positive response
3. Check Calendly link sent
4. Confirm CRM updated with status

#### Test 4: Voice Call
1. Trigger AI voice call node with test number
2. Verify call connects
3. Listen to AI agent script
4. Check call recording saved

---

## 5. DELIVERY PROCESS

### Customer Pays → What Happens

```
PAYMENT RECEIVED (Stripe)
        │
        ├─► Instant: Welcome email sent
        │    └─► Includes onboarding form link
        │
        ├─► Auto: Client profile created in Airtable
        │    └─► Service area, ICP, budget, goals
        │
        ├─► Auto: Google Maps scraping starts
        │    └─► 50 prospects/day for 5 days = 250 total
        │
        ├─► Auto: Outreach sequence begins
        │    └─► Day 0: Email 1 sent to first 50
        │
        └─► Auto: Slack notification to team
             └─► Channel: #new-client-onboard
```

### AI Generates → What Gets Delivered

**Week 1 (Setup):**
- 250 prospects researched and enriched
- Personalized email templates created
- LinkedIn connection requests sent (50/day)
- First appointments booked

**Week 2-4 (Ongoing):**
- 50 new prospects added weekly
- Multi-channel outreach continues
- AI handles all responses
- 5-20 appointments booked per week
- Real-time CRM dashboard updated

**Monthly:**
- 200-500 total prospects contacted
- 20-50 qualified appointments
- Performance report (response rates, bookings, ROI)
- Strategy optimization recommendations

### Human Touchpoints (10% Oversight)

| Touchpoint | Frequency | Time Required | Who |
|------------|-----------|---------------|-----|
| Client Onboarding Call | One-time | 45 min | Account Manager |
| Weekly Check-in | Weekly | 15 min | Account Manager |
| AI Response Review | Daily | 10 min | VA (spot check) |
| Call Quality Review | Weekly | 30 min | VA (listen to 5 calls) |
| Monthly Strategy | Monthly | 60 min | Account Manager |

**Total Human Time Per Client Per Month:** ~4 hours

---

## 6. PRICING CALCULATOR

### API Costs Per Delivery

| Item | API Cost | Frequency | Monthly Cost/Client |
|------|----------|-----------|---------------------|
| Google Maps Searches | $0.032/search | 250/month | $8.00 |
| Clay.com Enrichment | $0.50/lead | 200/month | $100.00 |
| OpenAI (Emails + Scoring) | $0.08/lead | 200/month | $16.00 |
| Claude (Qualification) | $0.15/response | 30/month | $4.50 |
| Retell AI (Voice Calls) | $0.10/min | 100 min/month | $10.00 |
| Twilio SMS | $0.0075/SMS | 400/month | $3.00 |
| SendGrid Emails | $0.0008/email | 1000/month | $0.80 |
| **Total API Cost** | | | **$142.30/client/month** |

### Time Savings

| Task | Manual Time | Automated Time | Savings |
|------|-------------|----------------|---------|
| Prospect Research | 5 hrs/week | 30 min/week | 90% |
| Data Enrichment | 3 hrs/week | 0 min | 100% |
| Email Writing | 4 hrs/week | 30 min/week | 87% |
| Follow-ups | 5 hrs/week | 0 min | 100% |
| Lead Qualification | 6 hrs/week | 1 hr/week | 83% |
| Appointment Booking | 3 hrs/week | 0 min | 100% |
| Reporting | 2 hrs/week | 10 min/week | 92% |
| **Total Per Month** | **112 hours** | **10 hours** | **91%** |

**Value of Time Saved:** 102 hours × $50/hr = **$5,100/month value**

### Recommended Pricing

Based on service arbitrage blueprint margins (60%+ target):

| Package | Market Rate | API Cost | Labor Cost | Total Cost | Profit | Margin |
|---------|-------------|----------|------------|------------|--------|--------|
| **Starter** (100 leads/mo, 5-10 appts) | $2,500/mo | $71/mo | $400/mo | $471/mo | $2,029/mo | **81%** |
| **Growth** (200 leads/mo, 10-20 appts) | $4,500/mo | $142/mo | $800/mo | $942/mo | $3,558/mo | **79%** |
| **Scale** (500 leads/mo, 25-50 appts) | $8,000/mo | $356/mo | $1,500/mo | $1,856/mo | $6,144/mo | **77%** |
| **Setup Fee** (one-time) | $3,000 | $200 | $500 | $700 | $2,300 | **77%** |

### ROI for Client

```
Client Investment: $4,500/month + $3,000 setup
Average Local Business Metrics:
  - Customer LTV: $2,000-$10,000 (depends on industry)
  - Close Rate: 30-50% from booked appointments
  - 15 appointments/month × 40% close = 6 new customers
  - 6 customers × $5,000 LTV = $30,000 revenue

ROI: 6-10x in first 90 days
```

---

## 7. EXPORT WORKFLOW

### n8n Workflow JSON

Save this as `local-lead-gen-workflow.json` and import to n8n:

```json
{
  "name": "Local Lead Generation Automation",
  "nodes": [
    {
      "parameters": {
        "formTitle": "Lead Gen Client Onboarding",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Business Name",
              "requiredField": true
            },
            {
              "fieldLabel": "Service Area (Cities/Zip Codes)",
              "requiredField": true
            },
            {
              "fieldLabel": "Ideal Customer Profile",
              "requiredField": true
            },
            {
              "fieldLabel": "Monthly Budget for Ads",
              "requiredField": false
            }
          ]
        }
      },
      "id": "onboarding-form",
      "name": "Client Onboarding Form",
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "method": "GET",
        "url": "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        "query": {
          "location": "={{$json.service_area}}",
          "radius": "5000",
          "type": "business",
          "key": "={{env.GOOGLE_MAPS_API_KEY}}"
        }
      },
      "id": "google-maps-scrape",
      "name": "Scrape Google Maps",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [450, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.clay.com/v1/enrich",
        "headers": {
          "Authorization": "Bearer {{env.CLAY_API_KEY}}"
        },
        "body": {
          "business_name": "={{$json.name}}",
          "location": "={{$json.vicinity}}"
        }
      },
      "id": "clay-enrich",
      "name": "Enrich Lead Data",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [650, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o",
        "messages": [
          {
            "role": "system",
            "content": "Score this lead 1-100 based on: budget fit, decision maker access, pain points, urgency. Return JSON: {score: number, reasoning: string}"
          },
          {
            "role": "user",
            "content": "Lead: {{$json.company_name}}, Industry: {{$json.industry}}, Size: {{$json.employees}}, Budget: {{$json.budget}}"
          }
        ]
      },
      "id": "ai-lead-scoring",
      "name": "AI Lead Scoring",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1,
      "position": [850, 300]
    },
    {
      "parameters": {
        "conditions": {
          "number": [
            {
              "value1": "={{$json.score}}",
              "operation": "largerEqual",
              "value2": 70
            }
          ]
        }
      },
      "id": "score-filter",
      "name": "Filter by Score",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [1050, 300]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.sendgrid.com/v3/mail/send",
        "headers": {
          "Authorization": "Bearer {{env.SENDGRID_API_KEY}}",
          "Content-Type": "application/json"
        },
        "body": {
          "personalizations": [
            {
              "to": [
                {
                  "email": "={{$json.email}}"
                }
              ]
            }
          ],
          "from": {
            "email": "leads@youragency.com"
          },
          "subject": "Quick question about {{company_name}}",
          "content": [
            {
              "type": "text/plain",
              "value": "Hi {{first_name}},\n\nNoticed {{company_name}} serves {{location}}. We help businesses like yours add 20-30 qualified appointments/month.\n\nWorth a 15-min chat?\n\nBest,\nYour Name"
            }
          ]
        }
      },
      "id": "send-email-1",
      "name": "Send Email 1",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1250, 200]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.twilio.com/2010-04-01/Accounts/{{env.TWILIO_ACCOUNT_SID}}/Messages.json",
        "auth": {
          "user": "{{env.TWILIO_ACCOUNT_SID}}",
          "pass": "{{env.TWILIO_AUTH_TOKEN}}"
        },
        "body": {
          "To": "={{$json.phone}}",
          "From": "{{env.TWILIO_PHONE_NUMBER}}",
          "Body": "Hi {{first_name}}, following up on my email. We help {{industry}} businesses book 20+ appointments/month. Worth a quick chat?"
        }
      },
      "id": "send-sms",
      "name": "Send SMS Follow-up",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1450, 200]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.retellai.com/v1/create-call",
        "headers": {
          "Authorization": "Bearer {{env.RETELL_API_KEY}}"
        },
        "body": {
          "agent_id": "{{env.RETELL_AGENT_ID}}",
          "phone_number": "={{$json.phone}}",
          "metadata": {
            "lead_id": "={{$json.id}}",
            "company": "={{$json.company_name}}"
          }
        }
      },
      "id": "ai-voice-call",
      "name": "AI Voice Call",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1650, 200]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.gohighlevel.com/v1/contacts",
        "headers": {
          "Authorization": "Bearer {{env.GHL_API_KEY}}"
        },
        "body": {
          "email": "={{$json.email}}",
          "phone": "={{$json.phone}}",
          "firstName": "={{$json.first_name}}",
          "lastName": "={{$json.last_name}}",
          "company": "={{$json.company_name}}",
          "tags": ["lead-gen", "qualified"]
        }
      },
      "id": "crm-sync",
      "name": "Sync to GoHighLevel",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [1850, 200]
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours",
              "hoursInterval": 24
            }
          ]
        }
      },
      "id": "daily-cron",
      "name": "Daily Prospect Research",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1,
      "position": [250, 500]
    }
  ],
  "connections": {
    "Client Onboarding Form": {
      "main": [
        [
          {
            "node": "Scrape Google Maps",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Scrape Google Maps": {
      "main": [
        [
          {
            "node": "Enrich Lead Data",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Enrich Lead Data": {
      "main": [
        [
          {
            "node": "AI Lead Scoring",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Lead Scoring": {
      "main": [
        [
          {
            "node": "Filter by Score",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Filter by Score": {
      "main": [
        [
          {
            "node": "Send Email 1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send Email 1": {
      "main": [
        [
          {
            "node": "Send SMS Follow-up",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Send SMS Follow-up": {
      "main": [
        [
          {
            "node": "AI Voice Call",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Voice Call": {
      "main": [
        [
          {
            "node": "Sync to GoHighLevel",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Daily Prospect Research": {
      "main": [
        [
          {
            "node": "Scrape Google Maps",
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
    "lead-generation",
    "local-business",
    "outreach-automation"
  ],
  "triggerCount": 2,
  "updatedAt": "2026-03-25T00:00:00.000Z",
  "versionId": "1"
}
```

### Manual Node-by-Node Instructions (If JSON Import Fails)

1. **Create New Workflow** → Name: "Local Lead Generation"
2. **Add Form Trigger Node:**
   - Fields: Business Name, Service Area, ICP, Budget
   - This triggers on client onboarding

3. **Add HTTP Request Node (Google Maps):**
   - Method: GET
   - URL: `https://maps.googleapis.com/maps/api/place/nearbysearch/json`
   - Query: location, radius, type, API key

4. **Add HTTP Request Node (Clay.com):**
   - Method: POST
   - URL: `https://api.clay.com/v1/enrich`
   - Body: business_name, location

5. **Add AI Agent Node (GPT-4o):**
   - Model: GPT-4o
   - System: Lead scoring prompt
   - Input: Company data from Clay

6. **Add IF Node:**
   - Condition: score >= 70
   - True → High-tier sequence
   - False → Nurture sequence

7. **Add HTTP Request Node (SendGrid):**
   - Method: POST
   - URL: SendGrid mail send endpoint
   - Body: Personalized email template

8. **Add Wait Node:**
   - Wait: 2 days
   - Connect to next outreach step

9. **Add HTTP Request Node (Twilio SMS):**
   - Method: POST
   - URL: Twilio Messages API
   - Body: To, From, Message

10. **Add HTTP Request Node (Retell AI):**
    - Method: POST
    - URL: `https://api.retellai.com/v1/create-call`
    - Body: agent_id, phone_number

11. **Add HTTP Request Node (GoHighLevel):**
    - Method: POST
    - URL: GHL Contacts API
    - Body: Contact data + tags

12. **Add Schedule Trigger:**
    - Interval: 24 hours
    - Time: 8:00 AM

13. **Connect All Nodes** as shown in diagram
14. **Activate Workflow**

---

## 8. TROUBLESHOOTING

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Google Maps API quota exceeded | Too many requests | Upgrade to higher tier, add caching |
| Clay.com enrichment fails | Business not in database | Fall back to Apollo.io API |
| Twilio SMS not sending | Phone number not verified | Verify number in Twilio console |
| Retell AI call drops | Network issue | Add retry logic, max 3 attempts |
| LinkedIn API rate limited | Too many connection requests | Limit to 50/day, add random delays |
| Gmail marks emails as spam | Domain not authenticated | Set up SPF, DKIM, DMARC records |

### Compliance Notes

⚠️ **TCPA Compliance (US):**
- Only call/text businesses (B2B exempt from most TCPA rules)
- Include opt-out in all SMS: "Reply STOP to unsubscribe"
- Honor opt-outs immediately (automate this)

⚠️ **GDPR Compliance (EU):**
- Only contact businesses with legitimate interest
- Include privacy policy link in emails
- Honor deletion requests within 30 days

⚠️ **LinkedIn Terms of Service:**
- Don't automate connection requests at scale (>50/day risks ban)
- Use LinkedIn Sales Navigator for compliant outreach
- Consider manual VA for LinkedIn step

### Support Resources

- **n8n Community:** [community.n8n.io](https://community.n8n.io)
- **Clay.com Docs:** [docs.clay.com](https://docs.clay.com)
- **Retell AI Docs:** [docs.retellai.com](https://docs.retellai.com)
- **Twilio Docs:** [twilio.com/docs](https://www.twilio.com/docs)
- **Google Maps API:** [developers.google.com/maps](https://developers.google.com/maps)

---

## 9. SCALING BEYOND 10 CLIENTS

### Infrastructure Upgrades

| Clients | n8n Plan | Database | API Budget | Monthly Cost |
|---------|----------|----------|------------|--------------|
| 1-5 | n8n.cloud Pro | PostgreSQL | $500 | $150 |
| 6-20 | Self-hosted (AWS) | PostgreSQL | $2,000 | $500 |
| 21-50 | Self-hosted (K8s) | PostgreSQL Cluster | $5,000 | $1,500 |
| 50+ | Multi-region K8s | PostgreSQL + Redis | $15,000+ | $5,000+ |

### Team Scaling

- **1-10 clients:** Solo operator + VA (10 hrs/week)
- **11-30 clients:** Add account manager + VA (full-time)
- **31-50 clients:** Add sales development rep (SDR)
- **50+ clients:** Build full growth team (5-10 people)

### White-Label Option

Offer this workflow as a white-label solution to marketing agencies:
- Setup fee: $5,000 (workflow + training)
- Monthly license: $500/month per agency
- Includes: Workflow JSON, API setup guide, 2-hour training call

---

## 10. AI VOICE AGENT SCRIPT

### Retell AI Agent Configuration

**Agent Name:** Appointment Setter  
**Voice:** Female, warm, professional (Rachel from ElevenLabs)  
**Goal:** Book 15-minute discovery call

```
SYSTEM PROMPT:

You are an appointment setter for a lead generation agency.
Your goal is to book a 15-minute discovery call with qualified prospects.

PERSONALITY:
- Friendly, professional, not pushy
- Speak naturally, use contractions
- Handle objections gracefully

CONVERSATION FLOW:
1. Introduction: "Hi, is this {{first_name}}? This is {{agent_name}} calling from {{agency_name}}. Did I catch you at a good time?"
2. Value prop: "We help {{industry}} businesses in {{location}} add 20-30 qualified appointments per month through automated outreach. Quick question: how are you currently getting new customers?"
3. Qualify: Listen to their answer. If they mention challenges → "That's exactly what we solve. Would you be open to a quick 15-minute chat to see if we're a fit?"
4. Book: "Great! I can send you a calendar link. What's the best email for that?"
5. Confirm: "Perfect, you'll get an email shortly. Looking forward to chatting {{day}}!"

OBJECTION HANDLING:
- "Not interested" → "No worries at all. Just curious, what's your main focus right now?"
- "Send info" → "Happy to! Can I ask, what specifically would you want to see?"
- "We're all set" → "That's great! When did you start your current solution? Maybe we can reconnect in 6 months?"
- "What's the cost?" → "It depends on your goals. That's actually what we'd cover in the 15-min call. Fair enough?"

COMPLIANCE:
- Always identify yourself as calling from a business
- If they say "don't call again", immediately add to do-not-call list
- Keep calls under 5 minutes

CALL TO ACTION:
Book the call → Send Calendly link via SMS immediately after call
```

---

*Workflow Version 1.0 | Last Updated: March 25, 2026*
