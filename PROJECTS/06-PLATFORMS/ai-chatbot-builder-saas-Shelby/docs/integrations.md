# ChatFlow AI - Integrations Guide

## Overview

ChatFlow AI integrates with 100+ tools and platforms. Connect your existing stack to create seamless workflows and unlock the full potential of your AI chatbot.

---

## 🛒 E-commerce Integrations

### Shopify
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Capabilities**:
- Order lookup by order number or email
- Product recommendations based on browsing
- Cart abandonment recovery messages
- Shipping status updates
- Return/exchange initiation
- Discount code generation

**Installation**:
1. Install ChatFlow app from Shopify App Store
2. Connect your store (OAuth)
3. Select which data to sync (orders, products, customers)
4. Customize bot responses

**Example Flow**:
```
Customer: "Where's my order?"
Bot: [Queries Shopify API]
Bot: "Your order #12345 shipped yesterday via FedEx. 
      Tracking: 1Z999AA10123456784. Expected: March 25."
```

---

### WooCommerce
**Setup Time**: 15 minutes  
**Plan**: Pro+

**Capabilities**:
- Same as Shopify
- WordPress plugin available
- Custom webhook support

**Installation**:
1. Download WordPress plugin
2. Enter API keys from ChatFlow dashboard
3. Configure data sync settings

---

### BigCommerce
**Setup Time**: 15 minutes  
**Plan**: Pro+

**Capabilities**:
- Order management
- Product catalog sync
- Customer data access

---

## 🌐 Website & CMS Integrations

### WordPress
**Setup Time**: 5 minutes  
**Plan**: All plans

**Features**:
- One-click plugin installation
- Automatic page detection
- Custom trigger rules per page
- Elementor compatibility
- WPML support (multi-language)

**Installation**:
1. Install "ChatFlow AI" plugin from WordPress repo
2. Enter your bot ID
3. Configure display settings
4. Publish

---

### Webflow
**Setup Time**: 5 minutes  
**Plan**: All plans

**Features**:
- Embed code snippet
- Custom positioning
- Mobile-responsive

**Installation**:
1. Copy embed code from ChatFlow
2. Paste in Webflow site settings (before </body>)
3. Publish site

---

### Squarespace
**Setup Time**: 5 minutes  
**Plan**: All plans

**Installation**:
1. Settings → Advanced → Code Injection
2. Paste ChatFlow embed code in Footer
3. Save & publish

---

### Wix
**Setup Time**: 5 minutes  
**Plan**: All plans

**Installation**:
1. Add Custom Element
2. Paste embed code
3. Position on page

---

## 💬 Communication Platforms

### Slack
**Setup Time**: 5 minutes  
**Plan**: Pro+

**Features**:
- Slash commands (/chatflow search, /chatflow handoff)
- Channel mentions (@chatflow)
- Direct messages
- Thread support
- Notification alerts for handoffs

**Installation**:
1. Add ChatFlow app from Slack App Directory
2. Authorize workspace
3. Select channels for bot access
4. Configure handoff notifications

**Slash Commands**:
- `/chatflow search <query>` - Search knowledge base
- `/chatflow handoff @user` - Escalate to teammate
- `/chatflow stats` - Show bot performance

---

### Microsoft Teams
**Setup Time**: 5 minutes  
**Plan**: Pro+

**Features**:
- Adaptive cards
- Channel conversations
- Personal chat
- Mention support
- Handoff notifications

**Installation**:
1. Add app from Teams App Store
2. Configure for team/org
3. Set up messaging extension

---

### Discord
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Server integration
- Channel-specific bots
- Role-based access
- Auto-moderation assistance

---

## 📱 Social Media Integrations

### Facebook Messenger
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Page inbox integration
- Persistent menu
- Greeting templates
- Quick replies
- Rich media (images, videos, carousels)

**Installation**:
1. Connect Facebook account (OAuth)
2. Select Pages to connect
3. Configure greeting & menu
4. Enable messaging handoff

**Note**: Requires Facebook Page admin access

---

### Instagram
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- DM auto-responses
- Story reply handling
- Comment monitoring (optional)
- Handoff to human

**Installation**:
1. Connect Instagram Business account
2. Link to Facebook Page
3. Configure auto-responses
4. Set business hours

---

### WhatsApp Business
**Setup Time**: 15 minutes  
**Plan**: Business+

**Features**:
- Verified business profile
- Rich media messages
- Quick reply buttons
- List messages
- Template messages (for notifications)
- End-to-end encryption

**Installation**:
1. Apply for WhatsApp Business API (via ChatFlow)
2. Verify business
3. Set up phone number
4. Create message templates
5. Configure chatbot flows

**Pricing**: WhatsApp conversation charges apply (passed through at cost)

---

### Telegram
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Bot creation
- Group support
- Channel broadcasting
- Inline queries

**Installation**:
1. Create bot via @BotFather
2. Enter token in ChatFlow
3. Configure commands

---

## 📧 Email & Helpdesk

### Gmail
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Auto-reply to common queries
- Ticket creation from chat
- Email-to-chat handoff
- Label management

**Installation**:
1. Connect Google account
2. Grant Gmail permissions
3. Configure auto-reply rules

---

### Outlook/Office 365
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Same as Gmail
- Exchange integration
- Calendar scheduling

---

### Zendesk
**Setup Time**: 20 minutes  
**Plan**: Business+

**Features**:
- Ticket creation from chat
- Knowledge base sync
- Customer data sync
- Handoff to Zendesk agents
- Conversation history in Zendesk

**Installation**:
1. Install ChatFlow app from Zendesk Marketplace
2. Enter API credentials
3. Map fields
4. Configure handoff rules

---

### Intercom
**Setup Time**: 20 minutes  
**Plan**: Business+

**Features**:
- Migration from Intercom
- Parallel running
- Data sync

**Use Case**: Companies moving from Intercom to ChatFlow for cost savings

---

### Freshdesk
**Setup Time**: 20 minutes  
**Plan**: Business+

**Features**:
- Ticket sync
- Contact sync
- Handoff integration

---

### Help Scout
**Setup Time**: 20 minutes  
**Plan**: Business+

**Features**:
- Conversation sync
- Customer profiles
- Handoff workflows

---

## 📊 CRM Integrations

### Salesforce
**Setup Time**: 30 minutes  
**Plan**: Business+

**Features**:
- Lead creation from chat
- Contact lookup
- Opportunity updates
- Case creation
- Activity logging
- Einstein AI integration (optional)

**Installation**:
1. Install ChatFlow package from AppExchange
2. OAuth connection
3. Field mapping
4. Workflow configuration

**Example**:
```
Chat qualifies lead → Creates Salesforce Lead → 
Assigns to sales rep → Schedules follow-up task
```

---

### HubSpot
**Setup Time**: 20 minutes  
**Plan**: Business+

**Features**:
- Contact creation/update
- Deal creation
- Company association
- Timeline logging
- List enrollment

**Installation**:
1. Install from HubSpot Marketplace
2. Connect account
3. Configure mappings

---

### Pipedrive
**Setup Time**: 15 minutes  
**Plan**: Pro+

**Features**:
- Lead creation
- Deal updates
- Activity logging
- Person/company sync

---

### Zoho CRM
**Setup Time**: 20 minutes  
**Plan**: Pro+

**Features**:
- Lead/contact management
- Deal tracking
- Module sync

---

## 📅 Scheduling & Calendar

### Calendly
**Setup Time**: 5 minutes  
**Plan**: Pro+

**Features**:
- Meeting booking in chat
- Event type selection
- Timezone detection
- Confirmation messages
- Reminder automation

**Installation**:
1. Connect Calendly account
2. Select event types
3. Configure booking flow

**Example Flow**:
```
User: "Can I talk to sales?"
Bot: "Absolutely! Here are available times this week:
      [Calendly widget with 3 time slots]"
User: [Selects time]
Bot: "Booked! Calendar invite sent to your email."
```

---

### Google Calendar
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Direct calendar access
- Meeting scheduling
- Availability checking
- Event creation

---

### Microsoft Calendar
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Outlook calendar integration
- Teams meeting creation
- Availability sync

---

## 📈 Marketing & Analytics

### Google Analytics
**Setup Time**: 5 minutes  
**Plan**: Pro+

**Features**:
- Event tracking
- Conversation goals
- Revenue attribution
- User journey analysis

**Installation**:
1. Enter GA4 Measurement ID
2. Enable event tracking
3. Configure conversions

---

### Segment
**Setup Time**: 10 minutes  
**Plan**: Business+

**Features**:
- Customer data sync
- Event streaming
- Identity resolution

---

### Mixpanel
**Setup Time**: 10 minutes  
**Plan**: Business+

**Features**:
- Event tracking
- Funnel analysis
- User profiles

---

### Hotjar
**Setup Time**: 5 minutes  
**Plan**: Pro+

**Features**:
- Session recording integration
- Heatmap correlation
- Feedback collection

---

## 💳 Payment Integrations

### Stripe
**Setup Time**: 15 minutes  
**Plan**: Business+

**Features**:
- Payment collection in chat
- Invoice generation
- Subscription management
- Refund processing
- Payment link generation

**Use Cases**:
- Collect payment for services
- Upgrade subscriptions
- Process refunds
- Send payment reminders

**Security**: PCI DSS compliant (Stripe handles card data)

---

### PayPal
**Setup Time**: 15 minutes  
**Plan**: Business+

**Features**:
- PayPal checkout
- Invoice sending
- Payment tracking

---

## 🔧 Developer Tools

### Zapier
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- 5,000+ app connections
- Custom workflows
- No-code automation

**Popular Zaps**:
- New lead → Add to Google Sheets
- Handoff → Send Slack notification
- Booking → Create Zoom meeting
- Purchase → Send thank you email

**Installation**:
1. Connect ChatFlow account in Zapier
2. Choose trigger (e.g., "New Conversation")
3. Choose action (e.g., "Create Row in Sheets")
4. Test & activate

---

### Make (Integromat)
**Setup Time**: 15 minutes  
**Plan**: Pro+

**Features**:
- Visual workflow builder
- Advanced logic
- Data transformation

---

### Webhooks
**Setup Time**: 5 minutes  
**Plan**: Business+

**Features**:
- Outgoing webhooks (send data to your systems)
- Incoming webhooks (receive data from your systems)
- Custom headers
- Retry logic
- Signature verification

**Webhook Events**:
- conversation.started
- conversation.ended
- handoff.requested
- lead.captured
- payment.completed
- message.received

**Example Payload**:
```json
{
  "event": "lead.captured",
  "timestamp": "2026-03-23T18:00:00Z",
  "data": {
    "conversationId": "conv_12345",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "interest": "Enterprise plan",
    "budget": "$5000"
  }
}
```

---

### REST API
**Plan**: Business+

Full API access for custom integrations. See [API Documentation](../technical/api.md)

---

## 📚 Knowledge Base Integrations

### Notion
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Sync Notion pages as knowledge
- Auto-update on page changes
- Database support
- Permission respect

**Installation**:
1. Connect Notion account
2. Select pages/databases
3. Configure sync frequency

---

### Confluence
**Setup Time**: 15 minutes  
**Plan**: Business+

**Features**:
- Space sync
- Page hierarchy
- Attachment support
- Permission sync

---

### Guru
**Setup Time**: 15 minutes  
**Plan**: Business+

**Features**:
- Card sync
- Collections
- Verification status

---

### GitBook
**Setup Time**: 10 minutes  
**Plan**: Pro+

**Features**:
- Documentation sync
- Version tracking
- Multi-space support

---

## 🎯 Integration Roadmap

**Q2 2026**:
- TikTok messaging
- LINE (Japan/Thailand)
- WeChat (China)

**Q3 2026**:
- Amazon Connect
- Twilio Flex
- ServiceNow

**Q4 2026**:
- Native mobile SDKs (iOS/Android)
- React Native SDK
- Flutter SDK

---

## Integration Support Matrix

| Integration | Starter | Pro | Business | Enterprise |
|-------------|---------|-----|----------|------------|
| Website Widget | ✅ | ✅ | ✅ | ✅ |
| WordPress | ✅ | ✅ | ✅ | ✅ |
| Shopify | ❌ | ✅ | ✅ | ✅ |
| Slack | ❌ | ✅ | ✅ | ✅ |
| Facebook | ❌ | ✅ | ✅ | ✅ |
| WhatsApp | ❌ | ❌ | ✅ | ✅ |
| Salesforce | ❌ | ❌ | ✅ | ✅ |
| Zendesk | ❌ | ❌ | ✅ | ✅ |
| Custom API | ❌ | ❌ | ✅ | ✅ |
| White Label | ❌ | ❌ | ❌ | ✅ |

---

*Last Updated: March 2026*
