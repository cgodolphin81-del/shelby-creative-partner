# FormFlow Webhook System

## Overview

FormFlow webhooks enable real-time integration with external systems. When events occur in your forms, FormFlow sends HTTP POST requests to your configured endpoints.

---

## Supported Events

### Form Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `form.created` | New form created | Form object |
| `form.updated` | Form settings/elements changed | Form object + changes |
| `form.published` | Form status changed to published | Form object |
| `form.unpublished` | Form status changed to draft | Form object |
| `form.deleted` | Form deleted | Form ID, deleted_at |

### Submission Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `submission.created` | New submission received | Full submission object |
| `submission.updated` | Submission modified | Submission + changes |
| `submission.completed` | Submission marked complete | Submission object |
| `submission.abandoned` | Submission abandoned | Submission + last_field |
| `submission.deleted` | Submission deleted | Submission ID |

### Payment Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `payment.initiated` | Payment started | Payment + submission |
| `payment.completed` | Payment successful | Payment + submission |
| `payment.failed` | Payment failed | Payment + error |
| `payment.refunded` | Payment refunded | Payment + refund |

### Integration Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `integration.connected` | New integration connected | Integration object |
| `integration.disconnected` | Integration removed | Integration ID |
| `integration.error` | Integration sync failed | Integration + error |

---

## Webhook Payload Structure

### Submission Created Event

```json
{
  "id": "evt_abc123xyz789",
  "type": "submission.created",
  "created_at": "2024-01-21T10:30:00Z",
  "data": {
    "submission": {
      "id": "sub_xyz789",
      "form_id": "form_abc123",
      "form_name": "Contact Form",
      "data": {
        "field_email": {
          "type": "email",
          "label": "Email Address",
          "value": "user@example.com"
        },
        "field_message": {
          "type": "long_text",
          "label": "Message",
          "value": "Hello, I need help with..."
        },
        "field_rating": {
          "type": "rating",
          "label": "Satisfaction",
          "value": 5
        }
      },
      "metadata": {
        "ip": "192.168.1.100",
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
        "referrer": "https://example.com/contact",
        "device": "desktop",
        "browser": "Chrome",
        "os": "Windows",
        "location": {
          "country": "US",
          "country_name": "United States",
          "region": "CA",
          "city": "San Francisco",
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "utm": {
          "source": "google",
          "medium": "cpc",
          "campaign": "spring_sale",
          "term": "contact+form",
          "content": "ad_variant_a"
        }
      },
      "status": "complete",
      "submitted_at": "2024-01-21T10:30:00Z",
      "time_to_complete": 145
    },
    "form": {
      "id": "form_abc123",
      "name": "Contact Form",
      "url": "https://formflow.io/f/abc123"
    }
  }
}
```

### Payment Completed Event

```json
{
  "id": "evt_payment123",
  "type": "payment.completed",
  "created_at": "2024-01-21T11:00:00Z",
  "data": {
    "payment": {
      "id": "pay_abc123",
      "submission_id": "sub_xyz789",
      "amount": 9900,
      "currency": "USD",
      "status": "succeeded",
      "processor": "stripe",
      "processor_id": "pi_1abc2def3ghi",
      "receipt_url": "https://pay.stripe.com/receipts/...",
      "completed_at": "2024-01-21T11:00:00Z"
    },
    "submission": {
      "id": "sub_xyz789",
      "form_id": "form_abc123",
      "data": {...}
    }
  }
}
```

---

## Setting Up Webhooks

### Via Dashboard

1. Go to Settings → Webhooks
2. Click "Add Webhook"
3. Enter your endpoint URL
4. Select events to subscribe to
5. (Optional) Add a signing secret
6. Click "Save"

### Via API

```bash
curl -X POST "https://api.formflow.io/v1/webhooks" \
  -H "Authorization: Bearer ffk_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/webhooks/formflow",
    "events": ["submission.created", "payment.completed"],
    "secret": "whsec_your_signing_secret"
  }'
```

---

## Webhook Security

### Signature Verification

FormFlow signs all webhook requests using HMAC-SHA256. Verify signatures to ensure requests are authentic.

**Headers:**
```
X-FormFlow-Signature: t=1640000000,v1=abc123def456...
X-FormFlow-Signature: t=timestamp,v1=signature
```

**Verification Code (Node.js):**
```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const { t, v1 } = Object.fromEntries(
    signature.split(',').map(pair => pair.split('='))
  );
  
  // Check timestamp (prevent replay attacks)
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(t)) > 300) {
    throw new Error('Webhook timestamp too old');
  }
  
  // Verify signature
  const signedPayload = `${t}.${payload}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');
  
  if (v1 !== expectedSignature) {
    throw new Error('Invalid signature');
  }
  
  return true;
}

// Express middleware example
app.post('/webhooks/formflow', (req, res) => {
  const signature = req.headers['x-formflow-signature'];
  const payload = JSON.stringify(req.body);
  const secret = process.env.FORMFLOW_WEBHOOK_SECRET;
  
  try {
    verifyWebhookSignature(payload, signature, secret);
    
    // Process webhook
    const event = req.body;
    console.log('Webhook received:', event.type);
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook verification failed:', error);
    res.status(400).send('Invalid signature');
  }
});
```

**Verification Code (Python):**
```python
import hmac
import hashlib
import time
from flask import Flask, request, abort

app = Flask(__name__)

def verify_webhook_signature(payload, signature, secret):
    # Parse signature
    parts = dict(part.split('=') for part in signature.split(','))
    timestamp = int(parts['t'])
    signature_hash = parts['v1']
    
    # Check timestamp
    now = int(time.time())
    if abs(now - timestamp) > 300:
        raise ValueError('Webhook timestamp too old')
    
    # Verify signature
    signed_payload = f"{timestamp}.{payload}"
    expected_signature = hmac.new(
        secret.encode(),
        signed_payload.encode(),
        hashlib.sha256
    ).hexdigest()
    
    if not hmac.compare_digest(signature_hash, expected_signature):
        raise ValueError('Invalid signature')
    
    return True

@app.route('/webhooks/formflow', methods=['POST'])
def webhook():
    signature = request.headers.get('X-FormFlow-Signature')
    payload = request.get_data(as_text=True)
    secret = os.environ['FORMFLOW_WEBHOOK_SECRET']
    
    try:
        verify_webhook_signature(payload, signature, secret)
        event = request.json
        print(f"Webhook received: {event['type']}")
        return 'OK', 200
    except Exception as e:
        print(f"Webhook verification failed: {e}")
        abort(400)
```

---

## Retry Logic

FormFlow automatically retries failed webhook deliveries.

### Retry Schedule

| Attempt | Delay |
|---------|-------|
| 1 | Immediate |
| 2 | 1 minute |
| 3 | 5 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |
| 6 | 6 hours |
| 7 | 24 hours |

After 7 failed attempts, the webhook is marked as inactive and you'll receive an email notification.

### Success Criteria

- HTTP 2xx status code = Success
- HTTP 3xx status code = Follow redirect (max 2)
- HTTP 4xx/5xx status code = Failure, will retry
- Timeout (10 seconds) = Failure, will retry

---

## Testing Webhooks

### Local Testing with ngrok

```bash
# Install ngrok
npm install -g ngrok

# Expose local server
ngrok http 3000

# Use the ngrok URL in webhook settings
https://abc123.ngrok.io/webhooks/formflow
```

### Test Events

Send test events from the dashboard:
1. Go to Settings → Webhooks
2. Click on your webhook
3. Click "Send Test Event"
4. Choose event type
5. Check your endpoint logs

### Test Event Payload

```json
{
  "id": "evt_test_123",
  "type": "test.event",
  "created_at": "2024-01-21T10:00:00Z",
  "data": {
    "message": "This is a test webhook event",
    "test": true
  }
}
```

---

## Webhook Best Practices

### 1. Respond Quickly

Return a 2xx status code within 10 seconds. Process events asynchronously if needed.

```javascript
// Good: Quick response, async processing
app.post('/webhooks/formflow', async (req, res) => {
  // Acknowledge immediately
  res.status(200).send('OK');
  
  // Process asynchronously
  await queue.add('process-webhook', req.body);
});

// Bad: Slow response
app.post('/webhooks/formflow', async (req, res) => {
  await slowProcessing();  // Might timeout
  await sendEmail();       // Might timeout
  res.status(200).send('OK');
});
```

### 2. Handle Duplicates

Webhooks may be delivered multiple times. Use event IDs to deduplicate.

```javascript
const processedEvents = new Set();

app.post('/webhooks/formflow', (req, res) => {
  const eventId = req.body.id;
  
  if (processedEvents.has(eventId)) {
    return res.status(200).send('Already processed');
  }
  
  processedEvents.add(eventId);
  // Process event...
  
  res.status(200).send('OK');
});
```

### 3. Validate Payload

Always validate the webhook payload before processing.

```javascript
const schema = Joi.object({
  id: Joi.string().required(),
  type: Joi.string().required(),
  created_at: Joi.string().isoDate().required(),
  data: Joi.object().required()
});

app.post('/webhooks/formflow', (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send('Invalid payload');
  }
  // Process...
});
```

### 4. Log Everything

Log all webhook events for debugging and auditing.

```javascript
app.post('/webhooks/formflow', (req, res) => {
  logger.info('Webhook received', {
    eventId: req.body.id,
    type: req.body.type,
    timestamp: req.body.created_at
  });
  
  // Process...
});
```

### 5. Monitor Failures

Set up alerts for webhook failures.

```javascript
// Track consecutive failures
let failureCount = 0;

app.post('/webhooks/formflow', async (req, res) => {
  try {
    await processWebhook(req.body);
    failureCount = 0;
    res.status(200).send('OK');
  } catch (error) {
    failureCount++;
    logger.error('Webhook processing failed', { error, count: failureCount });
    
    if (failureCount >= 5) {
      await alertTeam('Webhook failures exceeding threshold');
    }
    
    res.status(500).send('Processing failed');
  }
});
```

---

## Common Use Cases

### 1. CRM Integration

```javascript
app.post('/webhooks/formflow', async (req, res) => {
  res.status(200).send('OK');
  
  if (req.body.type === 'submission.created') {
    const { submission } = req.body.data;
    
    // Create contact in HubSpot
    await hubspot.contacts.create({
      email: submission.data.field_email.value,
      firstname: submission.data.field_firstname.value,
      lastname: submission.data.field_lastname.value,
      properties: {
        form_submission: submission.form.name,
        submitted_at: submission.submitted_at
      }
    });
  }
});
```

### 2. Slack Notifications

```javascript
app.post('/webhooks/formflow', async (req, res) => {
  res.status(200).send('OK');
  
  if (req.body.type === 'submission.created') {
    const { submission } = req.body.data;
    
    await slack.chat.postMessage({
      channel: '#leads',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `📝 New submission: *${submission.form.name}*`
          }
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Email:*\n${submission.data.field_email.value}` },
            { type: 'mrkdwn', text: `*Submitted:*\n${submission.submitted_at}` }
          ]
        }
      ]
    });
  }
});
```

### 3. Google Sheets Sync

```javascript
app.post('/webhooks/formflow', async (req, res) => {
  res.status(200).send('OK');
  
  if (req.body.type === 'submission.created') {
    const { submission } = req.body.data;
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: 'your_spreadsheet_id',
      range: 'Submissions!A:E',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[
          submission.submitted_at,
          submission.data.field_email.value,
          submission.data.field_name.value,
          submission.data.field_message.value,
          submission.metadata.location.country
        ]]
      }
    });
  }
});
```

### 4. Email Automation

```javascript
app.post('/webhooks/formflow', async (req, res) => {
  res.status(200).send('OK');
  
  if (req.body.type === 'submission.created') {
    const { submission } = req.body.data;
    
    // Send confirmation email via SendGrid
    await sendgrid.send({
      to: submission.data.field_email.value,
      from: 'noreply@example.com',
      subject: 'Thank you for your submission',
      templateId: 'd-abc123',
      dynamicTemplateData: {
        name: submission.data.field_name.value,
        submission_id: submission.id
      }
    });
  }
});
```

---

## Webhook Limits

| Plan | Webhooks | Events/Month |
|------|----------|--------------|
| Free | 0 | 0 |
| Starter | 3 | 1,000 |
| Professional | 10 | 10,000 |
| Enterprise | Unlimited | Unlimited |

---

## Troubleshooting

### Common Issues

**1. Webhook not received**
- Check endpoint URL is correct and accessible
- Verify firewall allows FormFlow IPs
- Check SSL certificate is valid

**2. Signature verification failing**
- Ensure you're using the correct secret
- Verify you're signing the raw payload (not parsed JSON)
- Check timestamp is within 5 minutes

**3. Too many retries**
- Ensure endpoint returns 2xx quickly
- Check server logs for errors
- Verify endpoint can handle the load

### Debug Mode

Enable debug mode in dashboard to see all webhook attempts and responses.

---

*Webhook documentation version: 1.0*
*Last updated: March 2024*
