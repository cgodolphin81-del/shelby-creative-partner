# WhatsApp Business API Setup Guide

## 🎯 Overview

The WhatsApp Business API is the foundation of any WhatsApp marketing agency. This guide covers everything from initial setup to green tick verification.

## 📋 Prerequisites

Before starting, ensure you have:

- [ ] Registered business entity (LLC, Corp, etc.)
- [ ] Business phone number (not previously used on WhatsApp)
- [ ] Business website
- [ ] Business email domain (not Gmail/Yahoo)
- [ ] Facebook Business Manager account
- [ ] Business verification documents

---

## 🔧 Setup Process

### Step 1: Choose Your API Provider

You cannot access the WhatsApp Business API directly. You need a Business Solution Provider (BSP).

#### Top BSP Recommendations

| Provider | Pricing | Best For | Setup Time |
|----------|---------|----------|------------|
| **Twilio** | $0.005-0.065/msg | Developers, custom builds | 1-3 days |
| **MessageBird** | $0.0045-0.06/msg | Enterprise, multi-channel | 2-5 days |
| **360dialog** | €0.0038-0.0072/msg | Cost-effective, EU-based | 1-2 days |
| **WATI** | $49-499/mo + msgs | SMBs, no-code | Same day |
| **Interakt** | ₹2,500-25,000/mo | India market | Same day |
| **AiSensy** | ₹3,000-30,000/mo | India, affordable | Same day |

#### Our Recommendation for Agencies

**Start with WATI or Interakt** for quick launch (same-day setup, user-friendly).

**Migrate to Twilio or 360dialog** at scale (better pricing, more control).

---

### Step 2: Create Facebook Business Manager

1. Go to [business.facebook.com](https://business.facebook.com)
2. Click "Create Account"
3. Enter business name and details
4. Verify your business (required for API access)

#### Business Verification Requirements

**Documents Accepted:**
- Business license
- Tax registration certificate
- Articles of incorporation
- Utility bill (with business name)
- Bank statement (with business name)

**Tips:**
- Document name must exactly match business name
- Document must be recent (within 3 months)
- Color scans, not black & white
- All four corners visible

---

### Step 3: Set Up WhatsApp Business Account

#### Via WATI (Recommended for Beginners)

1. **Sign up at** [wati.io](https://wati.io)
2. **Connect Facebook Business Manager**
3. **Add phone number:**
   - Must be able to receive SMS/calls
   - Cannot be active on WhatsApp app
   - If active, delete WhatsApp account first
4. **Verify number** via SMS or call
5. **Complete business profile:**
   - Business name (as registered)
   - Category
   - Description
   - Email
   - Website
   - Address
   - Business hours

#### Via Twilio (For Advanced Users)

1. **Create Twilio account** at [twilio.com](https://twilio.com)
2. **Enable WhatsApp sandbox** for testing
3. **Request production access:**
   - Submit use case description
   - Provide business verification
   - Wait for approval (24-72 hours)
4. **Purchase/port phone number**
5. **Configure webhook URLs**

---

### Step 4: Create Message Templates

Message templates are required for outbound messages (you can't just send any message).

#### Template Categories

| Category | Use Case | Approval Difficulty |
|----------|----------|---------------------|
| **MARKETING** | Promotions, offers, newsletters | Medium |
| **UTILITY** | Order updates, appointments, alerts | Easy |
| **AUTHENTICATION** | OTP, verification codes | Easy |
| **SERVICE** | Customer support follow-ups | Easy |

#### Template Structure

```
Template Name: order_confirmation
Language: English (US)
Category: UTILITY

Header: (optional)
- Type: IMAGE, DOCUMENT, VIDEO, or TEXT
- Example: [image of order confirmation]

Body:
Hi {{1}}, your order #{{2}} has been confirmed!
Expected delivery: {{3}}
Track your order: {{4}}

Footer: (optional)
Reply STOP to opt out

Buttons: (optional)
- Type: QUICK_REPLY
  Text: Track Order
- Type: QUICK_REPLY
  Text: Contact Support
- Type: URL
  Text: View Order
  URL: https://yourstore.com/order/{{2}}
```

#### Template Best Practices

✅ **DO:**
- Keep messages concise (under 1024 characters)
- Use personalization variables ({{1}}, {{2}}, etc.)
- Include clear call-to-action
- Add opt-out option
- Match brand voice
- Test with small audience first

❌ **DON'T:**
- Use ALL CAPS (except acronyms)
- Include excessive emojis (1-2 max)
- Use misleading claims
- Send without opt-in
- Include attachments without context
- Use shortened URLs (bit.ly, etc.)

#### Template Approval Process

1. Submit template in BSP dashboard
2. Meta reviews (usually 24-48 hours)
3. Status: APPROVED, REJECTED, or PENDING
4. If rejected, review reason and resubmit

**Common Rejection Reasons:**
- Missing opt-out mechanism
- Misleading or false claims
- Poor grammar/spelling
- Inappropriate content
- Category mismatch

---

### Step 5: Configure Webhooks

Webhooks allow you to receive incoming messages and status updates.

#### Webhook Events to Handle

```javascript
// Example webhook payload
{
  "object": "whatsapp_business_account",
  "entry": [{
    "id": "ACCOUNT_ID",
    "changes": [{
      "value": {
        "messaging_product": "whatsapp",
        "metadata": {
          "display_phone_number": "+1234567890",
          "phone_number_id": "PHONE_ID"
        },
        "messages": [{
          "from": "CUSTOMER_NUMBER",
          "id": "MESSAGE_ID",
          "timestamp": "1234567890",
          "text": {
            "body": "Hello, I need help with my order"
          },
          "type": "text"
        }]
      },
      "field": "messages"
    }]
  }]
}
```

#### Webhook Security

- Validate signature on every request
- Use HTTPS only
- Implement rate limiting
- Log all webhook events
- Set up alerting for failures

---

### Step 6: Test Everything

#### Testing Checklist

- [ ] Send test template message
- [ ] Receive incoming message
- [ ] Test all button actions
- [ ] Verify webhook delivery
- [ ] Test opt-out (STOP keyword)
- [ ] Test media messages (images, documents)
- [ ] Test in different time zones
- [ ] Verify message status updates (sent, delivered, read)

#### Testing Tools

- **BSP Sandbox:** Most providers offer test environment
- **WhatsApp Business App:** Install on test phone
- **ngrok:** Expose local webhook for development
- **Postman:** Test API endpoints directly

---

## 🏆 Green Tick Verification

The green tick (verified badge) increases trust and deliverability.

### Eligibility Requirements

- ✅ Authentic: Real, established business
- ✅ Unique: One verified presence per business
- ✅ Complete: Full business profile
- ✅ Notable: Featured in multiple news sources
- ✅ Active: Regular messaging activity
- ✅ Compliant: No policy violations

### Application Process

1. **Build messaging history** (minimum 2-3 months active)
2. **Maintain high quality rating** (see below)
3. **Gather press coverage** (3+ reputable sources)
4. **Complete business verification** in Business Manager
5. **Submit verification request** through BSP
6. **Wait for review** (4-8 weeks typical)

### Phone Number Quality Rating

Meta assigns a quality rating to your phone number:

| Rating | Status | Impact |
|--------|--------|--------|
| **GREEN** | High quality | Full messaging limits |
| **YELLOW** | Medium quality | May face temporary limits |
| **RED** | Low quality | Severe limits, risk of ban |

#### How Quality Rating is Determined

- **User blocks:** High block rate = lower rating
- **User reports:** Spam reports hurt rating
- **Message quality:** Engaging content = higher rating
- **Opt-in quality:** Permission-based lists = higher rating

#### Improving Quality Rating

1. **Only message opted-in contacts**
2. **Provide clear value** in every message
3. **Make opt-out easy** (STOP keyword)
4. **Monitor feedback** and adjust quickly
5. **Warm up new numbers** gradually
6. **Avoid spam triggers** (excessive frequency, misleading content)

---

## 📊 Messaging Limits

WhatsApp enforces tiered messaging limits based on quality and history.

### Limit Tiers

| Tier | Daily Limit | Requirements |
|------|-------------|--------------|
| **Tier 1** | 1,000 messages | New account |
| **Tier 2** | 10,000 messages | Consistent quality, 7+ days |
| **Tier 3** | 100,000 messages | High quality, 30+ days |
| **Tier 4** | Unlimited | Exceptional quality, 60+ days |

### Tier Upgrade Process

Limits upgrade automatically based on:
- 7-day rolling message volume
- Quality rating (must be GREEN)
- No policy violations
- Consistent sending patterns

**To request tier upgrade:**
1. Contact your BSP
2. Provide use case details
3. Show quality metrics
4. Wait for Meta approval (24-72 hours)

---

## 🔒 Security Best Practices

### API Key Management

```bash
# Store secrets in environment variables, NOT in code
export WHATSAPP_API_KEY="your_secret_key"
export WHATSAPP_PHONE_ID="your_phone_id"
```

### Access Control

- Limit API access to necessary personnel
- Use role-based permissions
- Rotate API keys every 90 days
- Monitor API usage for anomalies

### Data Protection

- Encrypt customer data at rest and in transit
- Implement data retention policies
- Provide data deletion on request
- Comply with GDPR/CCPA requirements

---

## ⚠️ Common Setup Issues & Solutions

### Issue 1: Phone Number Already on WhatsApp

**Solution:**
```
1. Open WhatsApp on the phone
2. Go to Settings → Account → Delete My Account
3. Wait 24 hours
4. Try API setup again
```

### Issue 2: Business Verification Rejected

**Common Reasons:**
- Document doesn't match business name exactly
- Document is expired or old
- Document is unclear or cropped

**Solution:** Submit fresh, clear documents with exact name match.

### Issue 3: Templates Repeatedly Rejected

**Solution:**
- Review Meta's Commerce Policy
- Remove any promotional language from UTILITY templates
- Ensure opt-out is included
- Check grammar and spelling
- Contact BSP for specific feedback

### Issue 4: Webhook Not Receiving Messages

**Troubleshooting:**
```
1. Verify webhook URL is publicly accessible
2. Check SSL certificate is valid
3. Review webhook logs for errors
4. Test with webhook.site temporarily
5. Verify signature validation isn't blocking
```

### Issue 5: Low Quality Rating

**Recovery Plan:**
```
Week 1-2: Reduce send volume by 50%
Week 3-4: Focus only on highly engaged contacts
Ongoing: Improve message relevance and value
Monitor: Check rating weekly in BSP dashboard
```

---

## 📞 BSP Contact Information

| Provider | Support Email | Support Hours |
|----------|--------------|---------------|
| Twilio | help@twilio.com | 24/7 |
| MessageBird | support@messagebird.com | 24/7 |
| 360dialog | support@360dialog.com | Mon-Fri 9-18 CET |
| WATI | support@wati.io | 24/7 |
| Interakt | support@interakt.ai | 24/7 |

---

## ✅ Setup Completion Checklist

- [ ] Facebook Business Manager created & verified
- [ ] BSP account created
- [ ] Phone number registered & verified
- [ ] Business profile completed
- [ ] First message template approved
- [ ] Webhook configured & tested
- [ ] Test messages sent & received
- [ ] Opt-out mechanism working
- [ ] Analytics dashboard accessible
- [ ] Team training completed

---

**Setup Time:** 3-7 days typical  
**Cost:** $50-500 setup + monthly BSP fees  
**Next Step:** Move to Automation System setup (03-AUTOMATION-SYSTEM.md)
