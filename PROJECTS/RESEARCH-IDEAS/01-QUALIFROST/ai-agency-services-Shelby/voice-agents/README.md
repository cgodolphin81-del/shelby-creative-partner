# AI Voice Agent Setup

**Vapi & Retell AI Integration Guide**

Complete setup for production-ready AI voice agents including:
- Call flow design
- Voice configuration
- Integration patterns
- Call routing logic
- Analytics and monitoring

---

## Table of Contents

1. [Platform Overview](#platform-overview)
2. [Vapi Setup Guide](#vapi-setup-guide)
3. [Retell AI Setup Guide](#retell-ai-setup-guide)
4. [Call Flow Templates](#call-flow-templates)
5. [Integration Patterns](#integration-patterns)
6. [Voice Configuration](#voice-configuration)
7. [Testing & Quality](#testing--quality)
8. [Analytics & Monitoring](#analytics--monitoring)

---

## Platform Overview

### Vapi.ai
- **Best For:** Custom voice agent development
- **Features:** Real-time voice, custom models, webhook integrations
- **Pricing:** Usage-based (per minute)
- **Latency:** ~500ms response time

### Retell AI
- **Best For:** Production call center deployments
- **Features:** Pre-built templates, CRM integrations, analytics
- **Pricing:** Per-minute + platform fee
- **Latency:** ~300ms response time

### Comparison Matrix

| Feature | Vapi | Retell |
|---------|------|--------|
| Setup Time | 1-2 days | 2-4 hours |
| Customization | High | Medium |
| CRM Integrations | Custom | Pre-built |
| Voice Options | 20+ | 10+ |
| Analytics | Basic | Advanced |
| Call Recording | Yes | Yes |
| Transfer to Human | Yes | Yes |
| Multi-language | Yes | Limited |

---

## Vapi Setup Guide

### Step 1: Account & API Setup

```bash
# Install Vapi CLI
npm install -g @vapi-ai/cli

# Authenticate
vapi login

# Create project
vapi project create ai-agency-voice
```

### Step 2: Create Assistant Configuration

**File: `assistants/inbound-sales.json`**
```json
{
  "name": "Inbound Sales Agent",
  "firstMessage": "Thank you for calling! My name is Sarah. How can I help you today?",
  "voice": {
    "provider": "11labs",
    "voiceId": "EXAVITQu4vr4xnSDxMaL",
    "stability": 0.4,
    "similarityBoost": 0.8
  },
  "model": {
    "provider": "openai",
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are Sarah, a friendly and knowledgeable sales representative. Your goal is to understand the caller's needs and schedule a demo with our team.\n\nGUIDELINES:\n- Be warm and conversational\n- Ask open-ended questions\n- Take detailed notes\n- Always confirm before transferring\n- If unsure, offer to have a human call back\n\nKEY INFORMATION TO COLLECT:\n1. Company name\n2. Use case/needs\n3. Timeline\n4. Budget range\n5. Decision makers involved\n6. Best contact method\n\nCALL FLOW:\n1. Greet and build rapport\n2. Qualify the lead\n3. Explain our solution briefly\n4. Schedule demo if qualified\n5. Thank them and confirm next steps"
      }
    ],
    "temperature": 0.7,
    "maxTokens": 300
  },
  "server": {
    "url": "https://your-server.com/vapi/webhook",
    "secret": "your-webhook-secret"
  },
  "analysisPlan": {
    "successCriteria": [
      "Collected company name",
      "Understood use case",
      "Scheduled demo or follow-up"
    ]
  }
}
```

### Step 3: Webhook Handler

**File: `webhooks/vapi-handler.js`**
```javascript
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Verify webhook signature
function verifySignature(req, res, buf) {
  const signature = req.headers['x-vapi-signature'];
  const secret = process.env.VAPI_WEBHOOK_SECRET;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(buf)
    .digest('hex');
  
  if (signature !== expected) {
    throw new Error('Invalid signature');
  }
}

// Handle function calls from AI
app.post('/vapi/webhook', express.json({ verify: verifySignature }), async (req, res) => {
  const { type, message } = req.body;
  
  switch (type) {
    case 'function-call':
      await handleFunctionCall(message);
      break;
    case 'call-ended':
      await handleCallEnded(message);
      break;
    case 'transcript':
      await handleTranscript(message);
      break;
  }
  
  res.json({ success: true });
});

async function handleFunctionCall(message) {
  const { functionCall, call } = message;
  
  switch (functionCall.name) {
    case 'scheduleDemo':
      const { date, time, email } = JSON.parse(functionCall.parameters);
      await createCalendarEvent({ date, time, email, callId: call.id });
      return { scheduled: true, confirmation: 'Demo scheduled!' };
      
    case 'checkAvailability':
      const slots = await getAvailableSlots();
      return { available: slots };
      
    case 'lookupCustomer':
      const customer = await findCustomer(call.phoneNumber);
      return customer || { found: false };
      
    case 'transferToHuman':
      await transferCall(call.id, functionCall.parameters.team);
      return { transferred: true };
  }
}

async function handleCallEnded(message) {
  const { call, analysis } = message;
  
  // Save call record
  await db.calls.create({
    callId: call.id,
    phoneNumber: call.phoneNumber,
    duration: call.duration,
    transcript: call.transcript,
    analysis: analysis,
    outcome: determineOutcome(analysis),
    createdAt: new Date()
  });
  
  // Send to CRM
  if (analysis?.leadQualified) {
    await crm.createLead({
      phone: call.phoneNumber,
      source: 'voice_call',
      notes: analysis.summary,
      score: analysis.leadScore
    });
  }
  
  // Notify team
  if (analysis?.requiresFollowUp) {
    await slack.notify({
      channel: '#sales-leads',
      text: `📞 New qualified lead: ${call.phoneNumber}\nScore: ${analysis.leadScore}/100`
    });
  }
}

async function handleTranscript(message) {
  const { call, transcript } = message;
  
  // Real-time sentiment analysis
  const sentiment = await analyzeSentiment(transcript);
  
  // Alert if negative sentiment detected
  if (sentiment.score < -0.5) {
    await slack.notify({
      channel: '#support-alerts',
      text: `⚠️ Negative sentiment detected in call ${call.id}`
    });
  }
}

function determineOutcome(analysis) {
  if (analysis?.demoScheduled) return 'demo_scheduled';
  if (analysis?.leadQualified) return 'qualified';
  if (analysis?.notInterested) return 'not_interested';
  return 'other';
}

module.exports = app;
```

### Step 4: Function Definitions

**File: `functions/sales-functions.json`**
```json
{
  "functions": [
    {
      "name": "scheduleDemo",
      "description": "Schedule a product demo with the sales team",
      "parameters": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Preferred date (YYYY-MM-DD)"
          },
          "time": {
            "type": "string",
            "description": "Preferred time (HH:MM)"
          },
          "email": {
            "type": "string",
            "description": "Email address for calendar invite"
          },
          "timezone": {
            "type": "string",
            "description": "Timezone (e.g., America/New_York)"
          }
        },
        "required": ["date", "time", "email"]
      }
    },
    {
      "name": "checkAvailability",
      "description": "Check available demo slots",
      "parameters": {
        "type": "object",
        "properties": {
          "dateRange": {
            "type": "string",
            "description": "Date range (e.g., 'next_week')"
          }
        }
      }
    },
    {
      "name": "lookupCustomer",
      "description": "Look up existing customer by phone number",
      "parameters": {
        "type": "object",
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Phone number to lookup"
          }
        },
        "required": ["phoneNumber"]
      }
    },
    {
      "name": "transferToHuman",
      "description": "Transfer call to human team member",
      "parameters": {
        "type": "object",
        "properties": {
          "team": {
            "type": "string",
            "enum": ["sales", "support", "billing", "technical"],
            "description": "Team to transfer to"
          },
          "reason": {
            "type": "string",
            "description": "Reason for transfer"
          },
          "priority": {
            "type": "string",
            "enum": ["normal", "urgent", "vip"],
            "description": "Call priority"
          }
        },
        "required": ["team", "reason"]
      }
    },
    {
      "name": "sendFollowUpEmail",
      "description": "Send follow-up email after call",
      "parameters": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "description": "Recipient email"
          },
          "template": {
            "type": "string",
            "enum": ["demo_confirmation", "pricing_info", "general_followup"],
            "description": "Email template to use"
          },
          "customNotes": {
            "type": "string",
            "description": "Custom notes to include"
          }
        },
        "required": ["email", "template"]
      }
    }
  ]
}
```

---

## Retell AI Setup Guide

### Step 1: Create LLM Agent

**File: `retell/agents/customer-support.json`**
```json
{
  "agent_id": "customer-support-v1",
  "general_prompt": "You are Alex, a helpful customer support representative. You assist customers with account issues, billing questions, and technical support.\n\nPERSONALITY:\n- Patient and empathetic\n- Clear and concise\n- Solution-oriented\n- Knows when to escalate\n\nRESPONSIBILITIES:\n1. Verify customer identity\n2. Understand the issue\n3. Attempt resolution\n4. Escalate if needed\n5. Document interaction\n\nESCALATION TRIGGERS:\n- Refund requests > $500\n- Technical issues requiring engineer\n- Angry/frustrated customers\n- Legal/compliance mentions",
  "llm_websocket_url": "wss://your-server.com/retell/ws",
  "voice_id": "retell-aria",
  "first_message": "Thank you for calling support. My name is Alex. Can I get your account number or email to pull up your information?",
  "response_delay_threshold": 1500,
  "max_duration_seconds": 1800
}
```

### Step 2: WebSocket Server

**File: `servers/retell-ws-server.js`**
```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Retell agent connected');
  
  ws.on('message', async (message) => {
    const data = JSON.parse(message);
    
    switch (data.type) {
      case 'update_only':
        // Agent is thinking, can send filler if needed
        break;
        
      case 'function_call':
        const result = await executeFunction(data.function_call);
        ws.send(JSON.stringify({
          type: 'function_call_result',
          function_call_id: data.function_call_id,
          content: JSON.stringify(result)
        }));
        break;
        
      case 'request_interrupt':
        // Handle user interruption
        break;
    }
  });
});

async function executeFunction(functionCall) {
  const { name, parameters } = functionCall;
  
  switch (name) {
    case 'verifyCustomer':
      return await verifyCustomer(parameters.email || parameters.accountNumber);
      
    case 'getAccountDetails':
      return await getAccountDetails(parameters.accountId);
      
    case 'processRefund':
      return await processRefund(parameters.accountId, parameters.amount, parameters.reason);
      
    case 'createTicket':
      return await createTicket(parameters.issue, parameters.priority);
      
    case 'transferCall':
      return await transferCall(parameters.department);
      
    default:
      return { error: 'Unknown function' };
  }
}

async function verifyCustomer(identifier) {
  const customer = await db.customers.findOne({
    where: {
      or: [{ email: identifier }, { accountNumber: identifier }]
    }
  });
  
  if (!customer) {
    return { verified: false, message: 'Account not found' };
  }
  
  // Additional verification questions
  return {
    verified: true,
    customerId: customer.id,
    name: customer.name,
    accountType: customer.type,
    memberSince: customer.createdAt
  };
}

async function processRefund(accountId, amount, reason) {
  // Business logic for refunds
  if (amount > 500) {
    return { 
      approved: false, 
      requiresManager: true,
      message: 'Refunds over $500 require manager approval'
    };
  }
  
  const refund = await db.refunds.create({
    accountId,
    amount,
    reason,
    status: 'pending',
    createdAt: new Date()
  });
  
  return {
    approved: true,
    refundId: refund.id,
    estimatedDays: '5-7 business days'
  };
}

console.log('Retell WebSocket server running on port 8080');
```

### Step 3: Phone Number Setup

```bash
# Using Retell CLI
retell phone-numbers buy --area-code 415

# Configure routing
retell phone-numbers update <PHONE_NUMBER> \
  --agent-id customer-support-v1 \
  --business-hours "Mon-Fri 9:00-18:00 America/Los_Angeles" \
  --after-hours-voicemail "Thank you for calling. Our hours are 9 AM to 6 PM Pacific. Please leave a message or visit our website."
```

---

## Call Flow Templates

### Template 1: Inbound Sales Qualification

**File: `call-flows/inbound-sales.yaml`**
```yaml
name: Inbound Sales Qualification
trigger: inbound_call
phone_numbers:
  - "+1-555-SALES-1"
  
flow:
  - step: greeting
    message: "Thank you for calling [Company]! My name is {{agent_name}}. How can I help you today?"
    
  - step: identify_intent
    functions:
      - categorizeInquiry
    transitions:
      - condition: intent == 'sales'
        next: qualify_lead
      - condition: intent == 'support'
        next: transfer_support
      - condition: intent == 'billing'
        next: transfer_billing
      - condition: intent == 'other'
        next: general_inquiry
        
  - step: qualify_lead
    functions:
      - collectCompanyInfo
      - collectNeeds
      - collectTimeline
      - collectBudget
    scoring:
      - field: company_size
        weights:
          "1-10": 10
          "11-50": 20
          "51-200": 30
          "200+": 40
      - field: budget
        weights:
          "<5k": 10
          "5k-25k": 25
          "25k-100k": 35
          "100k+": 40
      - field: timeline
        weights:
          "6+ months": 10
          "3-6 months": 20
          "1-3 months": 35
          "<1 month": 35
    transitions:
      - condition: score >= 70
        next: schedule_demo
      - condition: score >= 40
        next: nurture_followup
      - condition: score < 40
        next: polite_close
        
  - step: schedule_demo
    functions:
      - checkAvailability
      - scheduleDemo
      - sendConfirmation
    message: "Perfect! I've scheduled your demo for {{demo_date}} at {{demo_time}}. You'll receive a calendar invite at {{email}}. Is there anything else I can help with?"
    actions:
      - create_crm_record: qualified_lead
      - notify_team: slack_sales_channel
      
  - step: nurture_followup
    message: "I'd love to send you some helpful resources while you're evaluating options. What's the best email to reach you?"
    actions:
      - create_crm_record: nurture_lead
      - send_email: nurture_sequence
      
  - step: transfer_support
    message: "Let me transfer you to our support team. One moment please."
    actions:
      - transfer_call: support_queue
      - create_ticket: call_summary
      
  - step: transfer_billing
    message: "I'll connect you with our billing department. Please hold."
    actions:
      - transfer_call: billing_queue
      
  - step: general_inquiry
    message: "I'd be happy to help with that. Can you tell me more about what you're looking for?"
    
  - step: polite_close
    message: "Thank you for calling! If your needs change, please don't hesitate to reach out. Have a great day!"
    actions:
      - create_crm_record: not_qualified
```

### Template 2: Customer Support Triage

**File: `call-flows/support-triage.yaml`**
```yaml
name: Customer Support Triage
trigger: inbound_call
phone_numbers:
  - "+1-555-HELP-1"
  
flow:
  - step: greeting
    message: "Thank you for calling [Company] Support. My name is {{agent_name}}. To better assist you, can I get your account email or phone number?"
    
  - step: verify_account
    functions:
      - lookupCustomer
    transitions:
      - condition: customer.found == true
        next: understand_issue
      - condition: customer.found == false
        next: create_new_ticket
        
  - step: understand_issue
    message: "Thanks {{customer.name}}. I see you're a {{customer.plan}} customer. What can I help you with today?"
    functions:
      - categorizeIssue
      - getAccountDetails
    transitions:
      - condition: category == 'technical'
        next: technical_support
      - condition: category == 'billing'
        next: billing_support
      - condition: category == 'account'
        next: account_support
      - condition: category == 'other'
        next: general_support
        
  - step: technical_support
    functions:
      - getRecentTickets
      - checkSystemStatus
    message: "I understand you're experiencing {{issue}}. Let me check a few things."
    transitions:
      - condition: known_issue == true
        next: provide_solution
      - condition: requires_engineer == true
        next: escalate_technical
      - condition: else
        next: troubleshoot
        
  - step: billing_support
    functions:
      - getBillingHistory
      - checkSubscription
    transitions:
      - condition: refund_requested == true && amount > 500
        next: escalate_billing
      - condition: refund_requested == true
        next: process_refund
      - condition: else
        next: billing_inquiry
        
  - step: provide_solution
    message: "Good news! This is a known issue and here's how to fix it: {{solution}}. Would you like me to stay on the line while you try this?"
    
  - step: escalate_technical
    message: "This requires our technical team. I'm creating a priority ticket and having an engineer call you back within {{sla_hours}} hours. Is {{customer.phone}} the best number?"
    actions:
      - create_ticket: priority_technical
      - notify_team: engineering_oncall
      
  - step: escalate_billing
    message: "For refund requests of this amount, I need to have a manager review. Someone will call you back within 24 hours. Is that okay?"
    actions:
      - create_ticket: manager_review
      - notify_team: billing_manager
```

### Template 3: Appointment Reminders (Outbound)

**File: `call-flows/appointment-reminder.yaml`**
```yaml
name: Appointment Reminder
trigger: scheduled_outbound
schedule:
  - 24_hours_before
  - 2_hours_before
  
recipients:
  source: database
  query: "SELECT * FROM appointments WHERE reminder_sent = false"
  
flow:
  - step: greeting
    message: "Hi {{customer.first_name}}, this is {{agent_name}} calling from [Company] with a reminder about your appointment."
    
  - step: confirm_appointment
    message: "You have an appointment scheduled for {{appointment_date}} at {{appointment_time}} with {{provider_name}}. Are you still able to make it?"
    functions:
      - confirmAppointment
    transitions:
      - condition: confirmed == true
        next: provide_details
      - condition: confirmed == false
        next: reschedule
      - condition: no_answer
        next: leave_voicemail
        
  - step: provide_details
    message: "Great! A few quick reminders: {{appointment_notes}}. If you need to reschedule, just call us at {{phone_number}}. See you soon!"
    actions:
      - mark_reminder_sent: true
      - send_sms: confirmation_details
      
  - step: reschedule
    message: "No problem! Let me help you reschedule. What day works better for you?"
    functions:
      - checkAvailability
      - rescheduleAppointment
    actions:
      - update_appointment: new_time
      - send_confirmation: new_appointment
      
  - step: leave_voicemail
    message: "Hi, this is a reminder that you have an appointment on {{appointment_date}} at {{appointment_time}}. Please call us at {{phone_number}} to confirm or reschedule. Thank you!"
    actions:
      - mark_reminder_sent: true
      - create_task: follow_up_call
```

---

## Integration Patterns

### CRM Integration (Salesforce)

**File: `integrations/salesforce.js`**
```javascript
const jsforce = require('jsforce');

class SalesforceIntegration {
  constructor() {
    this.conn = new jsforce.Connection({
      oauth2: {
        loginUrl: process.env.SFDC_LOGIN_URL,
        clientId: process.env.SFDC_CLIENT_ID,
        clientSecret: process.env.SFDC_CLIENT_SECRET,
        redirectUri: process.env.SFDC_REDIRECT_URI
      }
    });
  }
  
  async authenticate() {
    await this.conn.authenticate({
      refreshToken: process.env.SFDC_REFRESH_TOKEN
    });
  }
  
  async createLead(callData) {
    const lead = {
      FirstName: callData.firstName || 'Unknown',
      LastName: callData.lastName || 'Caller',
      Company: callData.company,
      Phone: callData.phoneNumber,
      Email: callData.email,
      Lead_Source: 'Voice_Call',
      Description: callData.transcript,
      Status: 'New',
      Voice_Call_Score__c: callData.analysis?.leadScore,
      Voice_Call_Recording__c: callData.recordingUrl
    };
    
    const result = await this.conn.sobject('Lead').create(lead);
    return result;
  }
  
  async updateContact(phoneNumber, updates) {
    const contact = await this.conn.sobject('Contact').find({ Phone: phoneNumber });
    if (contact) {
      await this.conn.sobject('Contact').update({
        Id: contact.Id,
        ...updates
      });
    }
  }
  
  async logCall(activity) {
    const task = {
      Subject: `Voice Call - ${activity.outcome}`,
      Description: activity.transcript,
      ActivityDate: new Date().toISOString(),
      WhoId: activity.contactId,
      WhatId: activity.opportunityId,
      Call_Disposition__c: activity.outcome,
      Call_Duration__c: activity.duration,
      Call_Recording_URL__c: activity.recordingUrl
    };
    
    return await this.conn.sobject('Task').create(task);
  }
}

module.exports = SalesforceIntegration;
```

### Calendar Integration (Google Calendar)

**File: `integrations/google-calendar.js`**
```javascript
const { google } = require('googleapis');

class CalendarIntegration {
  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
      scopes: ['https://www.googleapis.com/auth/calendar']
    });
    this.calendar = google.calendar({ version: 'v3', auth: this.auth });
  }
  
  async createEvent(eventData) {
    const event = {
      summary: eventData.title || 'Scheduled Call',
      description: eventData.description,
      start: {
        dateTime: eventData.startTime,
        timeZone: eventData.timezone || 'America/New_York'
      },
      end: {
        dateTime: eventData.endTime,
        timeZone: eventData.timezone || 'America/New_York'
      },
      attendees: eventData.attendees?.map(email => ({ email })),
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 }
        ]
      },
      conferenceData: eventData.videoCall ? {
        createRequest: {
          requestId: `${eventData.callId}-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      } : undefined
    };
    
    const response = await this.calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1
    });
    
    return response.data;
  }
  
  async getAvailability(dateRange) {
    const response = await this.calendar.freebusy.query({
      requestBody: {
        timeMin: dateRange.start,
        timeMax: dateRange.end,
        items: [{ id: 'primary' }]
      }
    });
    
    return this.parseAvailability(response.data.calendars.primary.busy);
  }
  
  parseAvailability(busySlots) {
    // Convert busy slots to available slots
    const availableSlots = [];
    const workHours = { start: 9, end: 17 }; // 9 AM - 5 PM
    
    // Implementation for finding available slots
    return availableSlots;
  }
}

module.exports = CalendarIntegration;
```

---

## Voice Configuration

### Voice Selection Guide

| Use Case | Recommended Voice | Provider |
|----------|------------------|----------|
| Sales (Friendly) | Sarah | ElevenLabs |
| Sales (Professional) | Michael | ElevenLabs |
| Support (Warm) | Emma | Retell |
| Support (Technical) | James | Retell |
| Appointment Reminders | Lisa | ElevenLabs |
| Outbound Marketing | David | PlayHT |

### Voice Tuning Parameters

```json
{
  "elevenlabs": {
    "stability": 0.4,
    "similarityBoost": 0.8,
    "style": 0.2,
    "useSpeakerBoost": true
  },
  "playht": {
    "temperature": 0.7,
    "topP": 0.95,
    "speed": 1.0
  },
  "retell": {
    "voiceId": "retell-aria",
    "speed": 1.0,
    "pitch": 0
  }
}
```

### Custom Voice Cloning

```bash
# ElevenLabs Voice Cloning
curl -X POST "https://api.elevenlabs.io/v1/voices/add" \
  -H "xi-api-key: $ELEVENLABS_API_KEY" \
  -F "name=Custom Brand Voice" \
  -F "description=Our company's official voice" \
  -F "files=@sample1.wav" \
  -F "files=@sample2.wav" \
  -F "files=@sample3.wav"
```

---

## Testing & Quality

### Test Call Script

**File: `testing/test-calls.md`**
```markdown
## Test Scenarios

### Scenario 1: Happy Path
- Caller is qualified lead
- All information provided
- Demo scheduled successfully
- Expected: Smooth flow, demo confirmed

### Scenario 2: Objection Handling
- Caller expresses price concerns
- Agent should handle objections
- Expected: Empathetic response, value proposition

### Scenario 3: Transfer Required
- Caller needs technical support
- Agent recognizes and transfers
- Expected: Smooth handoff, ticket created

### Scenario 4: Unclear Intent
- Caller is vague about needs
- Agent asks clarifying questions
- Expected: Proper qualification

### Scenario 5: Angry Customer
- Caller is frustrated
- Agent de-escalates
- Expected: Empathy, escalation if needed

## Quality Metrics

- Response latency: < 1000ms
- Interruption handling: Natural
- Function call accuracy: > 95%
- Sentiment appropriateness: Contextual
- Goal completion rate: > 80%
```

### Automated Testing

**File: `testing/automated-tests.js`**
```javascript
const { VapiClient } = require('@vapi-ai/sdk');

async function runTestSuite() {
  const client = new VapiClient(process.env.VAPI_API_KEY);
  const tests = [
    { name: 'Greeting', input: 'Hello', expectedContains: ['help' ] },
    { name: 'Pricing Question', input: 'How much does this cost?', expectedContains: ['pricing', 'plan'] },
    { name: 'Demo Request', input: 'Can I see a demo?', expectedContains: ['schedule', 'demo'] },
    { name: 'Objection', input: "That's too expensive", expectedContains: ['understand', 'value'] }
  ];
  
  for (const test of tests) {
    const response = await client.testAssistant({
      assistantId: process.env.ASSISTANT_ID,
      userInput: test.input
    });
    
    const passed = test.expectedContains.some(
      expected => response.output.toLowerCase().includes(expected.toLowerCase())
    );
    
    console.log(`${test.name}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
  }
}

runTestSuite();
```

---

## Analytics & Monitoring

### Key Metrics Dashboard

```sql
-- Call Volume by Day
SELECT DATE(created_at) as day, COUNT(*) as call_count
FROM calls
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY day;

-- Outcome Distribution
SELECT outcome, COUNT(*) as count, 
       COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() as percentage
FROM calls
GROUP BY outcome;

-- Average Call Duration by Outcome
SELECT outcome, AVG(duration) as avg_duration
FROM calls
GROUP BY outcome;

-- Lead Score Distribution
SELECT 
  CASE 
    WHEN analysis->>'leadScore'::int >= 80 THEN '80-100'
    WHEN analysis->>'leadScore'::int >= 60 THEN '60-79'
    WHEN analysis->>'leadScore'::int >= 40 THEN '40-59'
    ELSE '0-39'
  END as score_range,
  COUNT(*) as count
FROM calls
WHERE analysis IS NOT NULL
GROUP BY score_range;

-- Conversion Funnel
SELECT 
  COUNT(*) as total_calls,
  COUNT(CASE WHEN outcome = 'qualified' THEN 1 END) as qualified,
  COUNT(CASE WHEN outcome = 'demo_scheduled' THEN 1 END) as demos_scheduled,
  COUNT(CASE WHEN outcome = 'demo_scheduled' THEN 1 END) * 100.0 / COUNT(*) as conversion_rate
FROM calls;
```

### Real-Time Monitoring

**File: `monitoring/dashboard.js`**
```javascript
// WebSocket-based real-time dashboard
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  // Send current active calls
  socket.emit('active-calls', getActiveCalls());
  
  // Stream live call events
  callEventEmitter.on('call-started', (call) => {
    socket.emit('call-started', call);
  });
  
  callEventEmitter.on('call-ended', (call) => {
    socket.emit('call-ended', call);
    // Update dashboard metrics
    updateMetrics(call);
  });
  
  callEventEmitter.on('transcript', (data) => {
    socket.emit('live-transcript', data);
  });
});

function updateMetrics(call) {
  // Update real-time counters
  metrics.totalCalls++;
  metrics.totalDuration += call.duration;
  
  if (call.outcome === 'demo_scheduled') {
    metrics.demosScheduled++;
  }
  
  // Emit updated metrics
  io.emit('metrics-update', metrics);
}
```

---

## Deployment Checklist

### Pre-Launch
- [ ] All call flows tested
- [ ] Webhook endpoints secured
- [ ] CRM integration verified
- [ ] Voice quality reviewed
- [ ] Error handling tested
- [ ] Escalation paths defined
- [ ] Analytics dashboard configured

### Post-Launch
- [ ] Monitor first 100 calls
- [ ] Review sentiment analysis
- [ ] Adjust prompts based on feedback
- [ ] Optimize response times
- [ ] Update knowledge base
- [ ] Train human team on handoffs

---

*Last Updated: March 2026*
*Version: 2.0*
