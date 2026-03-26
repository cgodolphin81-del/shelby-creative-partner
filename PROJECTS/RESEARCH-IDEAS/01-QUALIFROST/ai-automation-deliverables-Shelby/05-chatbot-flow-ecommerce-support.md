# Chatbot Flow #2: E-commerce Customer Support Bot

**Platform:** ManyChat / Botpress compatible
**Purpose:** Handle order tracking, returns, FAQs, reduce support tickets
**Build Time:** 3-4 hours

---

## FLOW OVERVIEW

```
START
  │
  ▼
┌─────────────────┐
│  WELCOME + MENU │
└────────┬────────┘
         │
    ┌────┴────┬──────────┬─────────┬────────┐
    ▼         ▼          ▼         ▼        ▼
┌───────┐ ┌───────┐ ┌────────┐ ┌─────┐ ┌────────┐
│ TRACK │ │RETURN │ │SHIPPING│ │ FAQ │ │ HUMAN  │
│ ORDER │ │REQUEST│ │  INFO  │ │MENU │ │ SUPPORT│
└───┬───┘ └───┬───┘ └────────┘ └──┬──┘ └───┬────┘
    │         │                    │       │
    ▼         ▼                    ▼       ▼
┌───────┐ ┌───────┐          ┌─────────┐ ┌────────┐
│ORDER  │ │RETURN │          │ FAQ     │ │ESCALATE│
│FOUND  │ │PROCESS│          │ANSWERS  │ │TO HUMAN│
└───┬───┘ └───┬───┘          └────┬────┘ └───┬────┘
    │         │                   │         │
    └─────────┴───────────────────┴─────────┘
                                │
                                ▼
                           ┌─────────┐
                           │  THANK  │
                           │  YOU +  │
                           │  CLOSE  │
                           └─────────┘
```

---

## BLOCK 1: Welcome + Menu

**Type:** Message with Quick Replies

**Message:**
```
👋 Hi! Welcome to [Store Name] Support!

I'm here to help you with:

📦 Order tracking
🔄 Returns & exchanges
💰 Refunds
🚚 Shipping info
❓ General questions

What can I help you with today?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 📦 Track Order | TRACK_ORDER | Block 2 |
| 🔄 Return/Exchange | RETURN_REQUEST | Block 4 |
| 🚚 Shipping Info | SHIPPING_INFO | Block 6 |
| ❓ FAQ | FAQ_MENU | Block 7 |
| 💬 Talk to Human | HUMAN_SUPPORT | Block 10 |

---

## BLOCK 2: Order Tracking - Get Order Number

**Type:** Text Input

**Message:**
```
📦 Let's track your order!

I'll need your order number. You can find it in:
• Your confirmation email
• Your account dashboard
• Your shipping confirmation

It looks like: #12345

What's your order number?
```

**Input:**
- **Variable:** `order_number`
- **Validation:** Pattern `#[0-9]+` or `[0-9]+`
- **Error Message:** Hmm, that doesn't look like an order number. It should be something like #12345. Can you try again?
- **Next:** Block 3

---

## BLOCK 3: Order Lookup

**Type:** API Call + Conditional

**API Call:**
```
GET https://api.yourstore.com/orders/{{order_number}}
Headers: Authorization: Bearer {{api_key}}
```

**Response Mapping:**
| API Field | Variable |
|-----------|----------|
| `order.status` | `order_status` |
| `order.tracking_number` | `tracking_number` |
| `order.carrier` | `carrier` |
| `order.estimated_delivery` | `estimated_delivery` |
| `order.current_location` | `current_location` |
| `order.tracking_url` | `tracking_url` |

### Path A: Order Found
**Condition:** API returns 200 OK

**Go to:** Block 3a

### Path B: Order Not Found
**Condition:** API returns 404

**Go to:** Block 3b

---

## BLOCK 3a: Order Found - Display Status

**Type:** Message with URL Button

**Message:**
```
✅ Found your order #{{order_number}}!

Status: {{order_status}}
Estimated Delivery: {{estimated_delivery}}
Tracking: {{tracking_number}}

📍 Current Location: {{current_location}}

You can track it here:
{{tracking_url}}

Anything else I can help with?
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 🔗 Track on Carrier Site | URL | {{tracking_url}} |
| 📦 Another Order | Quick Reply | TRACK_ORDER |
| ✅ All Set | Quick Reply | END_CHAT |

---

## BLOCK 3b: Order Not Found

**Type:** Message with Quick Replies

**Message:**
```
❌ Hmm, I couldn't find order #{{order_number}}.

This could be because:
• The order number is incorrect
• It was placed less than 24 hours ago
• It was placed as a guest without an account

Can you double-check the order number? Or I can connect you with a human who can help.
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 🔄 Try Again | TRACK_ORDER | Block 2 |
| 💬 Talk to Human | HUMAN_SUPPORT | Block 10 |

---

## BLOCK 4: Return/Exchange - Reason

**Type:** Message with Quick Replies

**Message:**
```
🔄 I can help with that!

First, what's the reason for your return/exchange?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 📏 Wrong Size | RETURN_SIZE | Block 5 |
| 🎨 Wrong Color/Style | RETURN_STYLE | Block 5 |
| ⚠️ Damaged/Defective | RETURN_DAMAGED | Block 5_urgent |
| 💭 Changed My Mind | RETURN_MIND | Block 5 |
| ⬅️ Back | WELCOME | Block 1 |

**Action:** Set variable `return_reason` based on selection

---

## BLOCK 5: Return - Order Verification

**Type:** Text Input

**Message:**
```
Got it. To process your return, I'll need:

1️⃣ Your order number
2️⃣ The item(s) you want to return

What's your order number?
```

**Input:**
- **Variable:** `return_order_number`
- **Next:** Block 5a

---

## BLOCK 5a: Return - Item Selection

**Type:** API Call + Message

**API Call:**
```
GET https://api.yourstore.com/orders/{{return_order_number}}
```

**Message:**
```
Thanks! Here are the items in order #{{return_order_number}}:

{{order_items_list}}

Which item(s) would you like to return? (Reply with the item number or name)
```

**Input:**
- **Variable:** `return_items`
- **Next:** Block 5b

---

## BLOCK 5b: Return - Confirmation & Label

**Type:** Message with Actions

**Message:**
```
✅ Return request initiated!

Return Details:
Order: #{{return_order_number}}
Item(s): {{return_items}}
Reason: {{return_reason}}

Next Steps:
1. A prepaid return label has been emailed to {{customer_email}}
2. Pack the item(s) securely
3. Drop off at any {{carrier}} location
4. Refund processed within 5-7 business days after we receive it

Return Window: You have until {{return_deadline}} to send it back.

Questions about the return process?
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 📧 Resend Label | URL | {{resend_label_link}} |
| ❓ Return FAQ | Quick Reply | RETURN_FAQ |
| ✅ All Set | Quick Reply | END_CHAT |

**Actions:**
1. **Webhook:** POST to returns API
   ```json
   {
     "order_number": "{{return_order_number}}",
     "items": "{{return_items}}",
     "reason": "{{return_reason}}",
     "customer_email": "{{customer_email}}"
   }
   ```
2. **Email:** Send return label to customer

---

## BLOCK 5_urgent: Damaged Item - Urgent

**Type:** Image Input + Message

**Message:**
```
⚠️ Oh no! I'm so sorry your item arrived damaged.

We'll make this right ASAP. Let me connect you with a specialist who can process an expedited replacement or refund.

Can you share a quick photo of the damage? This helps us improve our packaging.
```

**Input:**
- **Type:** Image
- **Variable:** `damage_photo`
- **Next:** Block 5c

---

## BLOCK 5c: Damaged Item - Escalation

**Type:** Message

**Message:**
```
Thank you for the photo. I've flagged this as urgent.

What happens next:
• A specialist will email you within 2 hours
• Replacement ships same-day (or full refund)
• No need to return the damaged item

Your reference: #DAMAGED-{{order_number}}

Is there anything else I can help with right now?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| ❓ More Help | WELCOME | Block 1 |
| ✅ That's All | END_CHAT | Block End |

**Actions:**
1. **Slack Alert:** #support-urgent
   ```
   🚨 DAMAGED ITEM REPORT
   Order: {{order_number}}
   Customer: {{customer_email}}
   Photo: {{damage_photo}}
   Action: Expedite replacement/refund
   ```

---

## BLOCK 6: Shipping Information

**Type:** Message with Quick Replies

**Message:**
```
🚚 Shipping Info

Processing Time: 1-2 business days

Shipping Options:
• Standard (5-7 days) - FREE over $50
• Express (2-3 days) - $9.99
• Overnight (1 day) - $24.99

We ship to: US, Canada, UK, EU

Tracking: You'll receive a tracking email once your order ships.

International? Duties & taxes may apply.

More questions about shipping?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 🌍 International Orders | SHIPPING_INTERNATIONAL | Show intl details |
| 📦 Where's My Order? | TRACK_ORDER | Block 2 |
| ⬅️ Back to Menu | WELCOME | Block 1 |

---

## BLOCK 7: FAQ Menu

**Type:** Message with Quick Replies

**Message:**
```
❓ Frequently Asked Questions

What would you like to know about?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 💳 Payment Methods | FAQ_PAYMENT | Block 7a |
| 🔄 Return Policy | FAQ_RETURNS | Block 7b |
| 📏 Sizing Guide | FAQ_SIZING | Block 7c |
| 🎁 Gift Cards | FAQ_GIFTCARDS | Block 7d |
| ⬅️ Back | WELCOME | Block 1 |

---

## BLOCK 7a: FAQ - Payment

**Type:** Message with Quick Replies

**Message:**
```
💳 Payment Methods

We accept:
• Visa, Mastercard, Amex, Discover
• PayPal
• Apple Pay / Google Pay
• Shop Pay
• Afterpay/Klarna (Buy now, pay later)

Security: All payments are encrypted and secure.

Currency: Prices in USD. Your bank may charge conversion fees.

More questions?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| ❓ Another FAQ | FAQ_MENU | Block 7 |
| ✅ All Set | END_CHAT | Block End |

---

## BLOCK 7b: FAQ - Returns

**Type:** Message with Quick Replies

**Message:**
```
🔄 Return Policy

• 30-day return window
• Items must be unworn/unused with tags
• Free returns (prepaid label provided)
• Refund in 5-7 business days
• Exchanges available for size/color

Final Sale: Clearance items are final sale.

Want to start a return?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 🔄 Start Return | RETURN_REQUEST | Block 4 |
| ❓ Another FAQ | FAQ_MENU | Block 7 |

---

## BLOCK 10: Human Support Handoff

**Type:** Message with Quick Replies

**Message:**
```
💬 Let me connect you with a human!

Current wait time: ~5 minutes

Options:
📧 Email: support@store.com (24hr response)
📞 Phone: (555) 123-4567 (9am-6pm EST)
💬 Live Chat: Stay here and I'll transfer you

How would you like to proceed?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 💬 Wait for Chat | QUEUE_CHAT | Add to queue |
| 📧 Send Email | SEND_EMAIL | Open email client |
| 📞 Call Instead | END_CHAT | Block End |

**Actions:**
1. **Webhook:** POST to support queue
   ```json
   {
     "customer_id": "{{customer_id}}",
     "conversation_history": "{{conversation_log}}",
     "priority": "normal"
   }
   ```
2. **Slack Alert:** #support-queue

---

## BLOCK END: End Chat

**Type:** Message

**Message:**
```
Thanks for chatting with us! 😊

If you think of anything else, just message us again - we're here 24/7!

Quick Links:
🌐 Website: yourstore.com
📧 Support: support@store.com
📱 Instagram: @yourstore

Have a great day!

— The [Store Name] Team
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 🛍️ Continue Shopping | URL | https://yourstore.com |
| 🔄 Start Over | Quick Reply | WELCOME |

**Actions:**
1. **Tag Contact:** `support_chat_completed`

---

## FALLBACK RESPONSES

| Trigger | Response |
|---------|----------|
| Unrecognized input (1st) | Hmm, I'm not sure I understood. Can you pick from the options above or rephrase? |
| Unrecognized input (2nd) | Let me connect you with a human who can help better. One moment! |
| Angry language | I understand you're frustrated, and I want to help. Let me connect you with a specialist right away. |

---

## VARIABLES TO CAPTURE

| Variable | Type | Purpose |
|----------|------|---------|
| `customer_id` | Text | Identification |
| `customer_email` | Email | Contact |
| `order_number` | Text | Order lookup |
| `order_status` | Text | Display |
| `tracking_number` | Text | Tracking |
| `return_items` | Text | Return processing |
| `return_reason` | Text | Categorization |
| `damage_photo` | Image | Evidence |
| `chat_category` | Text | Analytics |

---

## INTEGRATIONS REQUIRED

| Integration | Purpose | Setup |
|-------------|---------|-------|
| E-commerce API | Order lookup, returns | API key |
| Shipping API | Tracking, labels | Shippo/EasyPost |
| Email Platform | Return labels | SendGrid/Mailgun |
| Slack | Urgent alerts | Webhook URL |

---

*Flow v1.0 | [Your Agency] | Platform: ManyChat/Botpress*
