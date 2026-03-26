# ReviewFlow Pro - Integration Documentation

## Table of Contents
1. [Overview](#overview)
2. [Review Platform Integrations](#review-platform-integrations)
3. [CRM Integrations](#crm-integrations)
4. [Help Desk Integrations](#help-desk-integrations)
5. [Communication Integrations](#communication-integrations)
6. [E-Commerce Integrations](#e-commerce-integrations)
7. [Marketing Integrations](#marketing-integrations)
8. [Custom Integrations](#custom-integrations)

---

## Overview

ReviewFlow Pro integrates with 50+ platforms to create a seamless review management ecosystem. Integrations are categorized by function and connection method.

### Integration Methods

| Method | Description | Latency | Reliability |
|--------|-------------|---------|-------------|
| Native API | Direct API connection | Real-time | 99.9% |
| OAuth | User-authorized connection | Real-time | 99.9% |
| Webhook | Event-driven updates | < 1 minute | 99.5% |
| Zapier | No-code automation | 1-15 minutes | 99% |
| CSV Import | Manual batch upload | Manual | 100% |

### Integration Status Indicators

- 🟢 **Connected** - Active and syncing
- 🟡 **Warning** - Partial connectivity or rate limited
- 🔴 **Disconnected** - Requires re-authentication
- ⚪ **Not Connected** - Available but not set up

---

## Review Platform Integrations

### Google Business Profile

**Connection Type:** OAuth 2.0  
**Data Sync:** Real-time  
**Two-Way:** Yes (read + respond)

**Features:**
- Pull all reviews automatically
- Post responses directly
- Request reviews via Google link
- View review insights
- Photo management

**Setup:**
1. Navigate to Settings → Integrations → Google
2. Click "Connect Google Business"
3. Select your business location(s)
4. Grant ReviewFlow Pro permissions
5. Configure sync preferences

**Rate Limits:** 100 requests/100 seconds per user

**API Reference:** [Google My Business API](https://developers.google.com/my-business)

---

### Yelp

**Connection Type:** API Key + OAuth  
**Data Sync:** Every 15 minutes  
**Two-Way:** Read-only (responses via Yelp app)

**Features:**
- Pull all reviews
- Sentiment analysis
- Reviewer profile data
- Photo attachments
- Review highlights

**Setup:**
1. Create Yelp Fusion API account
2. Generate API key
3. Enter key in ReviewFlow Pro
4. Search and claim business
5. Enable automatic sync

**Rate Limits:** 5,000 calls/day

**Note:** Yelp does not allow third-party response posting. Responses must be posted directly on Yelp.

---

### Facebook Recommendations

**Connection Type:** OAuth 2.0 (Facebook Login)  
**Data Sync:** Real-time  
**Two-Way:** Yes

**Features:**
- Page recommendations
- Review posts
- Star ratings
- Comment threads
- Response posting

**Setup:**
1. Connect Facebook account
2. Select business page(s)
3. Grant pages_manage_reviews permission
4. Configure notification settings

**Required Permissions:**
- pages_read_engagement
- pages_manage_posts
- pages_read_user_content

---

### TripAdvisor

**Connection Type:** API Partnership  
**Data Sync:** Hourly  
**Two-Way:** Read-only

**Features:**
- Hotel/restaurant reviews
- Attraction reviews
- Rating breakdowns
- Traveler photos
- Management responses (via TripAdvisor)

**Setup:**
1. Apply for TripAdvisor API access
2. Submit business verification
3. Connect via ReviewFlow Pro
4. Configure property mapping

**Note:** TripAdvisor requires business verification and API approval (3-5 business days).

---

### Trustpilot

**Connection Type:** OAuth 2.0  
**Data Sync:** Real-time  
**Two-Way:** Yes

**Features:**
- Import all reviews
- Invite customers via Trustpilot
- Post responses
- TrustScore tracking
- Video reviews

**Setup:**
1. Connect Trustpilot Business account
2. Authorize ReviewFlow Pro
3. Map business units
4. Enable bidirectional sync

---

### Industry-Specific Platforms

#### Healthcare

| Platform | Connection | Two-Way | Notes |
|----------|------------|---------|-------|
| Healthgrades | API | Read | Provider verification required |
| Zocdoc | API | Read | Practice account needed |
| Vitals | API | Read | Claimed profile required |
| RateMDs | API | Read | Free integration |
| WebMD Care | API | Read | Enterprise only |

#### Legal

| Platform | Connection | Two-Way | Notes |
|----------|------------|---------|-------|
| Avvo | API | Read | Attorney verification |
| FindLaw | API | Read | Paid listing required |
| Justia | API | Read | Profile claim needed |
| Lawyers.com | API | Read | Verification required |

#### Home Services

| Platform | Connection | Two-Way | Notes |
|----------|------------|---------|-------|
| Houzz | API | Read | Pro account needed |
| Angie's List | API | Read | Accredited business |
| Thumbtack | API | Read | Active profile required |
| HomeAdvisor | API | Read | Lead account needed |

#### Hospitality

| Platform | Connection | Two-Way | Notes |
|----------|------------|---------|-------|
| Booking.com | API | Read | Property account |
| Expedia | API | Read | Partner Central |
| Airbnb | API | Read | Host account |
| OpenTable | API | Read | Restaurant account |

#### Software/Tech

| Platform | Connection | Two-Way | Notes |
|----------|------------|---------|-------|
| G2 | API | Yes | Vendor account |
| Capterra | API | Yes | Verified vendor |
| Software Advice | API | Yes | Listing required |
| Product Hunt | API | Read | Maker account |

---

## CRM Integrations

### Salesforce

**Connection Type:** OAuth 2.0 + REST API  
**Sync Direction:** Bidirectional  
**Setup Time:** 30 minutes

**Features:**
- Sync contacts to ReviewFlow
- Log review activity to contact records
- Create tasks for negative reviews
- Custom field mapping
- Flow/Process Builder triggers

**Objects Synced:**
- Contacts → Review Recipients
- Accounts → Business Locations
- Cases → Review Responses
- Custom Objects → Custom mapping

**Setup:**
1. Install ReviewFlow Pro package from AppExchange
2. Authenticate with Salesforce credentials
3. Configure field mappings
4. Set up automation rules
5. Test sync with sample records

**Webhook Events:**
- Review received → Create Task
- Rating < 3 → Create Case
- Review responded → Update Contact
- Campaign sent → Log Activity

---

### HubSpot

**Connection Type:** OAuth 2.0 + API  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- Contact sync
- Company sync
- Deal pipeline integration
- Custom property mapping
- Workflow triggers

**Setup:**
1. Go to HubSpot App Marketplace
2. Search "ReviewFlow Pro"
3. Install and authenticate
4. Map properties
5. Configure workflows

**Workflow Examples:**
```
IF Review Rating <= 2 stars
THEN Create Task for Customer Success
AND Add to "At-Risk Customers" List
AND Send Email to Account Owner

IF Review Rating = 5 stars
THEN Add to "Advocates" List
AND Enroll in Referral Campaign
```

---

### Pipedrive

**Connection Type:** OAuth 2.0  
**Sync Direction:** One-way (Pipedrive → ReviewFlow)  
**Setup Time:** 15 minutes

**Features:**
- Contact import
- Deal-based review requests
- Activity logging
- Custom field sync

---

### Zoho CRM

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 25 minutes

**Features:**
- Module mapping
- Blueprint integration
- Deluge script support
- Custom function triggers

---

## Help Desk Integrations

### Zendesk

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- Create tickets from negative reviews
- Link reviews to existing tickets
- Add internal notes from review responses
- Trigger satisfaction surveys
- SLA tracking

**Setup:**
1. Install ReviewFlow Pro app from Zendesk Marketplace
2. Authenticate both accounts
3. Configure trigger rules
4. Map fields
5. Test with sample review

**Trigger Rules:**
```
Condition: Review rating <= 2 stars
Action: Create ticket
Priority: High
Assignee: Customer Success Team
Tags: review, urgent, negative
```

---

### Intercom

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 15 minutes

**Features:**
- User identification
- Conversation linking
- Custom bot responses
- Event tracking

---

### Freshdesk

**Connection Type:** API Key  
**Sync Direction:** One-way (ReviewFlow → Freshdesk)  
**Setup Time:** 15 minutes

**Features:**
- Ticket creation
- Contact sync
- Custom field mapping
- Automation rules

---

### Help Scout

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 15 minutes

**Features:**
- Mailbox integration
- Customer sync
- Conversation creation
- Workflow automation

---

## Communication Integrations

### Slack

**Connection Type:** OAuth 2.0 (Slack App)  
**Sync Direction:** One-way (ReviewFlow → Slack)  
**Setup Time:** 10 minutes

**Features:**
- New review notifications
- Daily/weekly digests
- Alert channels for negative reviews
- Response reminders
- Team mentions

**Setup:**
1. Add ReviewFlow Pro app to Slack workspace
2. Authorize permissions
3. Select notification channels
4. Configure alert rules
5. Test notification

**Slash Commands:**
- `/reviewflow stats` - Show today's review stats
- `/reviewflow respond [id]` - Quick response interface
- `/reviewflow assign [id] @[user]` - Assign review

---

### Microsoft Teams

**Connection Type:** OAuth 2.0 (Teams App)  
**Sync Direction:** One-way  
**Setup Time:** 15 minutes

**Features:**
- Channel notifications
- Adaptive cards for reviews
- Response approval workflows
- Tab integration

---

### Twilio

**Connection Type:** API Key + Account SID  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- SMS review requests
- Two-way SMS responses
- Phone number provisioning
- Delivery tracking
- Opt-out management

**Setup:**
1. Create Twilio account
2. Purchase phone number(s)
3. Generate API credentials
4. Configure in ReviewFlow Pro
5. Set up compliance (TCPA)

---

### SendGrid

**Connection Type:** API Key  
**Sync Direction:** One-way (ReviewFlow → SendGrid)  
**Setup Time:** 10 minutes

**Features:**
- Email review requests
- Custom templates
- Delivery tracking
- Bounce handling
- Unsubscribe management

---

## E-Commerce Integrations

### Shopify

**Connection Type:** OAuth 2.0 (Shopify App)  
**Sync Direction:** Bidirectional  
**Setup Time:** 15 minutes

**Features:**
- Automatic order-based review requests
- Product review collection
- Customer sync
- Discount code generation for reviewers
- Review widget embed (automatic)

**Setup:**
1. Install from Shopify App Store
2. Connect store
3. Configure review request timing
4. Customize email templates
5. Enable widget on storefront

**Automation Rules:**
```
Trigger: Order fulfilled
Delay: 7 days
Condition: Order value > $50
Action: Send review request email
```

---

### WooCommerce

**Connection Type:** WordPress Plugin  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- Plugin installation
- Order sync
- Product reviews
- Customer email capture
- Widget shortcode

**Installation:**
```bash
# Via WordPress admin
Plugins → Add New → Search "ReviewFlow Pro" → Install

# Or manual
Upload to /wp-content/plugins/
Activate plugin
Configure API key
```

---

### Amazon Seller Central

**Connection Type:** SP-API (Selling Partner API)  
**Sync Direction:** Read-only  
**Setup Time:** 45 minutes (requires approval)

**Features:**
- Product reviews
- Seller feedback
- Order verification
- Review request limits (Amazon TOS compliant)

**Note:** Amazon has strict review solicitation policies. ReviewFlow Pro ensures compliance with Amazon TOS.

---

### BigCommerce

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- Order sync
- Customer sync
- Automated review requests
- Product review widgets

---

### Magento/Adobe Commerce

**Connection Type:** REST API + Extension  
**Sync Direction:** Bidirectional  
**Setup Time:** 30 minutes

**Features:**
- Extension installation
- Order integration
- Customer segmentation
- Multi-store support

---

## Marketing Integrations

### Mailchimp

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 15 minutes

**Features:**
- Audience sync
- Review-based segmentation
- Campaign triggers
- E-commerce data

---

### Klaviyo

**Connection Type:** API Key  
**Sync Direction:** Bidirectional  
**Setup Time:** 15 minutes

**Features:**
- Profile sync
- Flow triggers
- Event tracking
- Custom properties

**Flow Example:**
```
Trigger: Placed Review (5 stars)
Wait: 3 days
Condition: Has not purchased in 30 days
Action: Send "Thank You" discount email
```

---

### ActiveCampaign

**Connection Type:** OAuth 2.0  
**Sync Direction:** Bidirectional  
**Setup Time:** 20 minutes

**Features:**
- Contact sync
- Automation triggers
- Tag management
- Goal tracking

---

### Google Analytics

**Connection Type:** OAuth 2.0 (GA4)  
**Sync Direction:** One-way (ReviewFlow → GA)  
**Setup Time:** 15 minutes

**Features:**
- Review widget interaction tracking
- Conversion events
- Custom dimensions
- Audience building

**Events Tracked:**
- review_widget_view
- review_widget_click
- review_submission_start
- review_submission_complete
- review_request_sent
- review_request_clicked

---

## Integration Setup Guide

### General Setup Process

1. **Navigate to Integrations**
   - Settings → Integrations
   - Browse available integrations

2. **Select Integration**
   - Search or browse category
   - Click "Connect"

3. **Authenticate**
   - OAuth redirect OR
   - API key entry OR
   - Credential configuration

4. **Configure**
   - Select accounts/resources
   - Map fields
   - Set sync preferences

5. **Test**
   - Run test sync
   - Verify data flow
   - Check error logs

6. **Activate**
   - Enable automation rules
   - Set up notifications
   - Go live

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Authentication failed | Re-authorize, check credentials |
| Sync not running | Check integration status, review logs |
| Rate limited | Wait for limit reset, upgrade plan |
| Data mismatch | Verify field mappings |
| Webhook not firing | Check webhook URL, SSL certificate |

### Support

- Documentation: [integrations.reviewflowpro.com](https://integrations.reviewflowpro.com)
- Support: integrations@reviewflowpro.com
- Status: [status.reviewflowpro.com](https://status.reviewflowpro.com)

---

*Integration documentation last updated: March 2026*
*For API details, see [api/README.md](../api/README.md)*
