# Advanced Make.com Scenarios

**5 Advanced Scenarios with Routers, Iterators, and Complex Logic**

Make.com (formerly Integromat) offers more complex automation capabilities than Zapier, including:
- Visual scenario builder
- Advanced routers with multiple paths
- Iterators for processing arrays
- Aggregators for combining data
- Custom code modules

---

## Table of Contents

1. [Multi-Channel Lead Distribution](#1-multi-channel-lead-distribution)
2. [E-commerce Order Fulfillment](#2-e-commerce-order-fulfillment)
3. [Content Repurposing Engine](#3-content-repurposing-engine)
4. [Customer Data Platform Sync](#4-customer-data-platform-sync)
5. [Automated Reporting Dashboard](#5-automated-reporting-dashboard)

---

## 1. Multi-Channel Lead Distribution

**Purpose:** Distribute leads across multiple sales channels with intelligent routing

### Scenario Structure

```
[Webhook: New Lead] 
    ↓
[Router: Lead Type]
    ├── Path 1: Enterprise Lead
    │   ├── [Enrich: Clearbit]
    │   ├── [Score: Custom Formula]
    │   ├── [CRM: Salesforce - Create Enterprise Record]
    │   ├── [Slack: #enterprise-sales]
    │   └── [Email: Personalized Outreach]
    │
    ├── Path 2: SMB Lead
    │   ├── [CRM: HubSpot - Create Contact]
    │   ├── [Email: Automated Sequence]
    │   └── [Calendar: Schedule Demo]
    │
    ├── Path 3: Partner Referral
    │   ├── [CRM: Partner Portal Update]
    │   ├── [Email: Partner Notification]
    │   └── [Commission: Calculate + Log]
    │
    └── Path 4: Invalid/Spam
        ├── [Google Sheets: Spam Log]
        └── [Email: Polite Decline]
```

### Module Configuration

#### Webhook Module
```json
{
  "hookType": "CUSTOM",
  "httpMethod": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "responseCode": 200,
  "responseHeaders": {},
  "responseBody": "{\"status\": \"received\", \"id\": \"{{lead_id}}\"}"
}
```

#### Router Filters

**Path 1: Enterprise**
```
{{if(and(
  greater(number(company_size); 100);
  greater(number(annual_revenue); 1000000);
  not(contains(email_domain; "gmail.com"))
))}}
```

**Path 2: SMB**
```
{{if(and(
  lessOrEqual(number(company_size); 100);
  not(contains(email_domain; "gmail.com"))
))}}
```

**Path 3: Partner**
```
{{if(contains(source; "partner"))}}
```

**Path 4: Invalid**
```
{{if(or(
  contains(email_domain; "tempmail");
  empty(company_name);
  contains(message; "test")
))}}
```

#### Iterator Example (Process Multiple Contacts)
```
[Array Aggregator: Collect All Contacts from Company]
    ↓
[Iterator: Process Each Contact]
    ↓
[CRM: Create Contact Record]
    ↓
[Email: Send Individual Outreach]
```

---

## 2. E-commerce Order Fulfillment

**Purpose:** End-to-end order processing with inventory and shipping

### Scenario Structure

```
[Webhook: Shopify New Order]
    ↓
[Filter: Payment Confirmed]
    ↓
[Router: Order Type]
    ├── Path 1: Digital Product
    │   ├── [Google Drive: Generate License Key]
    │   ├── [Email: Send Download Link]
    │   ├── [CRM: Update Customer]
    │   └── [Slack: Notify Success]
    │
    ├── Path 2: Physical Product
    │   ├── [Inventory: Check Stock]
    │   ├── [Router: Stock Available?]
    │   │   ├── Yes: [3PL: Create Shipment]
    │   │   │   ├── [Email: Shipping Confirmation]
    │   │   │   └── [CRM: Update Order Status]
    │   │   └── No: [Email: Backorder Notice]
    │   │       └── [Slack: Notify Procurement]
    │   │
    │   └── [Accounting: Create Invoice]
    │
    └── Path 3: Subscription
        ├── [Recurring: Create Subscription]
        ├── [Payment: Process First Charge]
        └── [Email: Welcome Sequence]
```

### Complex Formula Examples

#### Stock Check Formula
```
{{if(greater(
  first(get(warehouse_stock; "quantity"));
  first(get(order_items; "quantity"))
); "available"; "backorder")}}
```

#### Shipping Cost Calculator
```
{{add(
  multiply(first(get(order; "weight")); 2.5);
  if(greater(first(get(order; "total")); 100); 0; 9.99);
  if(contains(shipping_zone; "international"); 15; 0)
)}}
```

#### Iterator for Multi-Item Orders
```
[Order Items Array]
    ↓
[Iterator: Each Item]
    ↓
[Inventory: Reserve Stock]
    ↓
[Warehouse: Pick Location]
    ↓
[Aggregator: Collect All Items]
    ↓
[3PL: Create Consolidated Shipment]
```

---

## 3. Content Repurposing Engine

**Purpose:** Transform single content piece into multiple formats

### Scenario Structure

```
[Trigger: New Blog Post Published]
    ↓
[HTTP: Fetch Full Content]
    ↓
[OpenAI: Generate Variations]
    ↓
[Router: Content Type]
    ├── Path 1: Social Media
    │   ├── [Iterator: Each Platform]
    │   │   ├── Twitter: Create Thread
    │   │   ├── LinkedIn: Long-form Post
    │   │   ├── Instagram: Caption + Hashtags
    │   │   └── Facebook: Community Post
    │   │
    │   └── [Buffer: Schedule Posts]
    │
    ├── Path 2: Email
    │   ├── [OpenAI: Summarize for Email]
    │   ├── [ConvertKit: Create Campaign]
    │   └── [Mailchimp: Add to Newsletter]
    │
    ├── Path 3: Video
    │   ├── [OpenAI: Generate Script]
    │   ├── [Synthesia: Create Video]
    │   └── [YouTube: Upload + Optimize]
    │
    ├── Path 4: Podcast
    │   ├── [OpenAI: Generate Audio Script]
    │   ├── [ElevenLabs: Generate Audio]
    │   └── [Spotify: Upload Episode]
    │
    └── Path 5: Documentation
        ├── [Notion: Create Knowledge Base]
        ├── [GitBook: Update Docs]
        └── [Confluence: Internal Wiki]
```

### OpenAI Module Configuration

#### Generate Social Variations
```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "system",
      "content": "You are a social media expert. Generate platform-specific content."
    },
    {
      "role": "user",
      "content": "Create social media posts from this blog post:\n\nTitle: {{title}}\nContent: {{content}}\n\nGenerate:\n1. Twitter thread (5 tweets, 280 chars each)\n2. LinkedIn post (professional, 1300 chars)\n3. Instagram caption (engaging, with 10 hashtags)\n4. Facebook post (community-focused)\n\nReturn as JSON array."
    }
  ],
  "response_format": {"type": "json_object"}
}
```

#### Iterator Configuration
```json
{
  "sourceModule": "openai",
  "arrayField": "posts",
  "maxIterations": 10
}
```

---

## 4. Customer Data Platform Sync

**Purpose:** Bi-directional sync across multiple customer data sources

### Scenario Structure

```
[Trigger: Scheduled - Every 15 Minutes]
    ↓
[Router: Sync Direction]
    ├── Path 1: CRM → CDP
    │   ├── [Salesforce: Fetch Updated Records]
    │   ├── [Iterator: Each Contact]
    │   │   ├── [Transform: Map Fields]
    │   │   ├── [Filter: Valid Data?]
    │   │   └── [Segment: Push to CDP]
    │   │
    │   └── [Google Sheets: Log Sync]
    │
    ├── Path 2: CDP → Marketing
    │   ├── [Segment: Fetch Audiences]
    │   ├── [Iterator: Each Audience]
    │   │   ├── [Mailchimp: Update List]
    │   │   ├── [Klaviyo: Sync Segment]
    │   │   └── [HubSpot: Update List]
    │   │
    │   └── [Slack: Sync Summary]
    │
    ├── Path 3: Support → CRM
    │   ├── [Zendesk: Fetch Tickets]
    │   ├── [Aggregator: Group by Customer]
    │   ├── [Iterator: Each Customer]
    │   │   ├── [Calculate: Support Score]
    │   │   └── [Salesforce: Update Contact]
    │   │
    │   └── [Email: Alert on High Volume]
    │
    └── Path 4: Error Handling
        ├── [Google Sheets: Error Log]
        ├── [Slack: Alert Team]
        └── [Email: Admin Notification]
```

### Data Transformation Formula

#### Field Mapping
```
{{map(
  sourceRecord;
  "first_name"; "firstName";
  "last_name"; "lastName";
  "email_address"; "email";
  "phone_number"; "phone";
  "company_name"; "company.name";
  "annual_revenue"; "company.revenue";
  "employee_count"; "company.size";
  "created_date"; "metadata.createdAt";
  "last_modified"; "metadata.updatedAt"
)}}
```

#### Aggregator for Support Tickets
```
[Zendesk: Search Tickets (Last 24h)]
    ↓
[Aggregator: Group by Requester Email]
    ↓
[Function: Calculate Metrics]
    - Ticket Count
    - Average Resolution Time
    - Satisfaction Score
    ↓
[Salesforce: Update Contact Fields]
```

---

## 5. Automated Reporting Dashboard

**Purpose:** Generate and distribute comprehensive business reports

### Scenario Structure

```
[Trigger: Schedule - Weekly/Monthly]
    ↓
[Router: Report Type]
    ├── Path 1: Sales Report
    │   ├── [Salesforce: Query Opportunities]
    │   ├── [Stripe: Fetch Revenue]
    │   ├── [Google Sheets: Historical Data]
    │   ├── [Aggregator: Combine Data]
    │   ├── [OpenAI: Generate Insights]
    │   ├── [Google Data Studio: Refresh Dataset]
    │   └── [Email: Send to Leadership]
    │
    ├── Path 2: Marketing Report
    │   ├── [Google Analytics: Fetch Metrics]
    │   ├── [Facebook Ads: Campaign Data]
    │   ├── [LinkedIn Ads: Campaign Data]
    │   ├── [HubSpot: Lead Metrics]
    │   ├── [Aggregator: Combine Data]
    │   ├── [OpenAI: Generate Insights]
    │   ├── [Google Slides: Create Deck]
    │   └── [Slack: Post Summary]
    │
    ├── Path 3: Customer Success
    │   ├── [Intercom: Support Metrics]
    │   ├── [Stripe: MRR/Churn]
    │   ├── [NPS Tool: Survey Results]
    │   ├── [Aggregator: Combine Data]
    │   ├── [OpenAI: Generate Insights]
    │   └── [Email: Send to CS Team]
    │
    └── Path 4: Executive Summary
        ├── [Iterator: Collect All Reports]
        ├── [OpenAI: Executive Summary]
        ├── [Google Docs: Create Report]
        ├── [DocuSign: Route for Review]
        ├── [PDF: Generate Final]
        └── [Email: Board Distribution]
```

### Google Sheets Data Aggregation

#### Query Formula
```
=QUERY(
  IMPORTRANGE("spreadsheet_id"; "Sales!A:Z");
  "SELECT A, B, C, SUM(D) 
   WHERE A >= date '"&TEXT(TODAY()-30;"yyyy-mm-dd")&"' 
   GROUP BY A, B, C 
   LABEL SUM(D) 'Total Revenue'"
)
```

### OpenAI Insights Generation

```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "system",
      "content": "You are a business intelligence analyst. Generate actionable insights from data."
    },
    {
      "role": "user",
      "content": "Analyze this data and provide:\n1. Key highlights (3-5 bullet points)\n2. Concerns/risks (2-3 items)\n3. Recommendations (3-5 actions)\n4. Month-over-month comparison\n\nData: {{aggregated_data}}\n\nFormat as markdown."
    }
  ]
}
```

### Google Slides Automation

#### Create Slide Deck Structure
```
[Module: Google Slides - Create Presentation]
    ↓
[Iterator: Each Section]
    ├── [Add Title Slide]
    ├── [Add Content Slide]
    ├── [Add Chart Slide]
    └── [Add Summary Slide]
    ↓
[Module: Export as PDF]
    ↓
[Module: Email with Attachment]
```

---

## Implementation Best Practices

### Error Handling

1. **Break Directive:** Use `ignore` directive for non-critical modules
2. **Error Routes:** Always configure error handlers on routers
3. **Retry Logic:** Implement exponential backoff for API calls
4. **Notifications:** Alert on critical failures

### Performance Optimization

1. **Batch Operations:** Use aggregators to minimize API calls
2. **Filters Early:** Filter data as early as possible
3. **Caching:** Store frequently accessed data in Google Sheets
4. **Scheduling:** Run heavy scenarios during off-peak hours

### Data Management

1. **Field Mapping:** Document all field transformations
2. **Data Validation:** Validate data before processing
3. **Audit Logs:** Maintain sync logs for debugging
4. **Version Control:** Track scenario versions

### Security

1. **API Keys:** Use Make.com vault for sensitive data
2. **Webhook Verification:** Validate incoming webhooks
3. **Access Controls:** Limit scenario access by role
4. **Data Retention:** Implement data purge policies

---

## Monitoring & Maintenance

### Key Metrics to Track

- Scenario execution count
- Success/failure rate
- Average execution time
- Data volume processed
- API call consumption

### Weekly Review Checklist

- [ ] Review error logs
- [ ] Check API usage limits
- [ ] Validate data accuracy
- [ ] Update field mappings if needed
- [ ] Test critical paths

---

*Last Updated: March 2026*
*Version: 2.0*
