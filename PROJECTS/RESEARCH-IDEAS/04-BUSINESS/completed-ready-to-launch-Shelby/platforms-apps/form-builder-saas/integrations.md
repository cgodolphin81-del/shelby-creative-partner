# FormFlow Integrations

## Overview

FormFlow integrates with 5000+ apps through native integrations and Zapier. Connect your forms to your entire workflow.

---

## Native Integrations

### 📊 Spreadsheets & Databases

#### Google Sheets
- **Type:** Two-way sync
- **Setup Time:** 2 minutes
- **Features:**
  - Auto-create sheets from form fields
  - Real-time submission sync
  - Custom column mapping
  - Formula support
  - Multiple sheet destinations
  - Update existing rows (match by email/ID)
- **Configuration:**
```json
{
  "integration": "google_sheets",
  "spreadsheet_id": "abc123",
  "sheet_name": "Submissions",
  "mapping": {
    "field_1": "Column A",
    "field_2": "Column B"
  },
  "options": {
    "create_header_row": true,
    "timestamp_column": "Submitted At",
    "update_mode": "append"
  }
}
```

#### Airtable
- Auto-create bases/tables
- Link records
- Attachment support
- Formula fields

#### Microsoft Excel Online
- OneDrive/SharePoint integration
- Real-time sync
- Excel formula support

#### Notion
- Create database entries
- Update existing pages
- Rich text support
- Relation properties

---

### 💬 Communication & Collaboration

#### Slack
- **Triggers:** New submission, form completed, payment received
- **Actions:** Post to channel, send DM, update message
- **Features:**
  - Custom message templates
  - Mention team members
  - Attach submission data
  - Interactive buttons (approve/reject)
- **Setup:**
```json
{
  "integration": "slack",
  "webhook_url": "https://hooks.slack.com/...",
  "channel": "#form-submissions",
  "template": "📝 New submission from {{form_name}}\nRespondent: {{email}}\nView: {{submission_url}}"
}
```

#### Microsoft Teams
- Channel notifications
- Adaptive cards
- Approval workflows

#### Discord
- Webhook notifications
- Embed formatting
- Role mentions

#### Email Marketing

##### Mailchimp
- Add to audience/lists
- Update subscriber info
- Tag based on responses
- Trigger automations
- Merge field mapping

##### ConvertKit
- Add to sequences
- Tag subscribers
- Custom fields

##### ActiveCampaign
- Add to lists
- Trigger automations
- Update contact fields
- Score leads

##### HubSpot
- Create/update contacts
- Add to lists
- Create deals
- Log activities
- Custom property mapping

##### Klaviyo
- Add to flows
- Update profiles
- E-commerce tracking

---

### 🛠️ Automation Platforms

#### Zapier
- **Trigger:** New FormFlow submission
- **Actions:** 5000+ app actions
- **Multi-step Zaps supported**
- **Popular Zaps:**
  - Form → Google Sheets → Slack notification
  - Form → HubSpot → Send email
  - Form → Trello → Create card
  - Form → Stripe → Create customer

#### Make (Integromat)
- Visual automation builder
- Complex workflows
- Data transformation
- Error handling

#### n8n
- Self-hosted option
- Custom nodes
- Webhook triggers

#### Pabbly Connect
- Unlimited tasks
- One-time payment option

---

### 📈 CRM Systems

#### Salesforce
- Create/update leads
- Create opportunities
- Log activities
- Custom object support
- Field mapping wizard
- OAuth 2.0 authentication

#### HubSpot CRM
- Contact creation
- Deal creation
- Company association
- Custom properties
- Pipeline automation

#### Pipedrive
- Add persons/organizations
- Create deals
- Add activities
- Custom fields

#### Zoho CRM
- Lead/contact management
- Deal tracking
- Module support

#### Freshsales
- Lead scoring
- Deal management
- Activity logging

---

### 💳 Payment & E-commerce

#### Stripe
- Payment processing
- Customer creation
- Subscription management
- Invoice generation
- Refund processing
- Webhook events

#### PayPal
- Payment collection
- Order creation
- Subscription billing

#### Shopify
- Create draft orders
- Add customers
- Inventory updates
- Discount creation

#### WooCommerce
- Order creation
- Customer registration
- Product management

---

### 📅 Calendar & Scheduling

#### Google Calendar
- Create events from submissions
- Check availability
- Send invitations
- Multiple calendars

#### Calendly
- Auto-schedule meetings
- Update event details
- Reschedule/cancel

#### Microsoft Outlook
- Calendar events
- Meeting invitations

#### Acuity Scheduling
- Appointment booking
- Client management

---

### ☁️ Cloud Storage

#### Google Drive
- File upload destination
- Folder organization
- Permission management
- Share links

#### Dropbox
- File storage
- Folder creation
- Share links

#### OneDrive
- Microsoft ecosystem
- SharePoint integration

#### Amazon S3
- Direct upload
- Custom bucket
- IAM roles
- Lifecycle policies

#### Box
- Enterprise storage
- Compliance features

---

### 🎫 Support & Helpdesk

#### Zendesk
- Create tickets
- Update ticket fields
- Add comments
- Assign agents
- Custom fields

#### Intercom
- Create conversations
- Update user profiles
- Send messages
- Tag users

#### Freshdesk
- Ticket creation
- Contact management
- Custom fields

#### Help Scout
- Create conversations
- Add customers
- Assign mailbox

#### Jira Service Management
- Create issues
- Update fields
- Add comments
- Workflow transitions

---

### 📊 Project Management

#### Trello
- Create cards
- Add to lists
- Assign members
- Add labels/checklists

#### Asana
- Create tasks
- Add to projects
- Set due dates
- Assign to team members

#### Monday.com
- Create items
- Update boards
- Custom columns

#### ClickUp
- Task creation
- Custom fields
- Status updates

#### Linear
- Issue creation
- Team assignment
- Priority setting

---

### 📧 Email & Transactional

#### SendGrid
- Send emails
- Template usage
- Dynamic data

#### Mailgun
- Email sending
- Route handling
- Tracking

#### Postmark
- Transactional email
- High deliverability

#### Amazon SES
- Cost-effective sending
- High volume

---

### 📱 SMS & Messaging

#### Twilio
- Send SMS
- Voice calls
- WhatsApp messages
- Two-way messaging

#### WhatsApp Business
- Message templates
- Customer conversations
- Media sharing

#### Telegram
- Bot notifications
- Channel posts

---

### 🔍 Analytics & Tracking

#### Google Analytics
- Event tracking
- Conversion tracking
- Custom dimensions

#### Facebook Pixel
- Conversion events
- Custom audiences
- Retargeting

#### Segment
- Customer data platform
- Multiple destinations
- Identity resolution

#### Mixpanel
- Event tracking
- User profiles
- Funnels

#### Hotjar
- Session recording
- Heatmaps
- Feedback polls

---

### 🗄️ Developer Tools

#### Webhooks
- Custom endpoints
- Retry logic
- Signature verification
- Custom headers

#### API
- RESTful API
- GraphQL (Enterprise)
- SDKs (JavaScript, Python, PHP, Ruby)

#### GitHub
- Create issues
- Webhook triggers
- Status updates

#### GitLab
- Issue tracking
- Pipeline triggers

---

## Integration Features

### Universal Features

1. **Field Mapping**
   - Drag-drop interface
   - Auto-suggest matches
   - Custom transformations
   - Conditional mapping

2. **Authentication**
   - OAuth 2.0
   - API key
   - Webhook signature
   - Token refresh

3. **Error Handling**
   - Automatic retries (3 attempts)
   - Exponential backoff
   - Error notifications
   - Failed submission queue

4. **Testing**
   - Test connection button
   - Sample data preview
   - Validation before save

5. **Logging**
   - Integration activity log
   - Success/failure tracking
   - Data payload inspection

---

## Integration Tiers

| Plan | Native Integrations | Zapier | Custom Webhooks | API Access |
|------|--------------------|--------|-----------------|------------|
| Free | 5 | ✗ | ✗ | Read-only |
| Starter | 20 | ✓ (100 tasks/mo) | ✓ | Full |
| Professional | Unlimited | ✓ (1000 tasks/mo) | ✓ | Full + Premium |
| Enterprise | All + Custom | ✓ (Unlimited) | ✓ | Full + GraphQL |

---

## Building Custom Integrations

### Webhook Integration

```javascript
// Example webhook receiver
app.post('/webhook/formflow', (req, res) => {
  const signature = req.headers['x-formflow-signature'];
  const payload = req.body;
  
  // Verify signature
  if (!verifySignature(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Process submission
  const { form_id, submission_id, data } = payload;
  
  // Your custom logic here
  await processSubmission(data);
  
  res.status(200).send('OK');
});
```

### API Integration

```javascript
// Using FormFlow SDK
const FormFlow = require('@formflow/sdk');

const client = new FormFlow({
  apiKey: process.env.FORMFLOW_API_KEY
});

// Get form submissions
const submissions = await client.submissions.list({
  formId: 'form_123',
  limit: 100,
  after: '2024-01-01'
});

// Create submission
const submission = await client.submissions.create({
  formId: 'form_123',
  data: {
    email: 'user@example.com',
    name: 'John Doe'
  }
});
```

---

## Integration Roadmap

### Q2 2024
- [ ] HubSpot native integration
- [ ] Salesforce native integration
- [ ] Notion integration
- [ ] Discord notifications

### Q3 2024
- [ ] Shopify integration
- [ ] WooCommerce integration
- [ ] Slack workflow builder
- [ ] Microsoft Power Automate

### Q4 2024
- [ ] Custom integration marketplace
- [ ] Integration templates
- [ ] Bi-directional sync
- [ ] Integration analytics

---

*Integration catalog updated: March 2024*
