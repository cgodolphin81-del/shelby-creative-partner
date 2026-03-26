# Chatbot Flow #1: Lead Qualification Bot

**Platform:** ManyChat / Botpress compatible
**Purpose:** Qualify inbound leads, book meetings, capture contact info
**Build Time:** 2-3 hours

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
    ┌────┴────┬────────────┬──────────┐
    ▼         ▼            ▼          ▼
┌───────┐ ┌───────┐ ┌──────────┐ ┌────────┐
│PRICING│ │ DEMO │ │LEARN MORE│ │ SUPPORT│
└───┬───┘ └───┬───┘ └────┬─────┘ └───┬────┘
    │         │          │           │
    ▼         ▼          ▼           ▼
┌───────┐ ┌───────┐ ┌──────────┐ ┌────────┐
│QUALIFY│ │BOOKING│ │USE CASES │ │ HUMAN  │
└───┬───┘ └───┬───┘ └────┬─────┘ └───┬────┘
    │         │          │           │
    └─────────┴──────────┴───────────┘
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
👋 Hi there! Thanks for your interest in [Company Name].

I'm here to help you learn more about our AI automation solutions.

What brings you here today?
```

**Quick Replies (Buttons):**
| Title | Payload | Next Block |
|-------|---------|------------|
| 💰 See Pricing | PRICING_INFO | Block 2 |
| 📅 Book a Demo | BOOK_DEMO | Block 5 |
| ❓ Learn More | LEARN_MORE | Block 3 |
| 💬 Talk to Human | HUMAN_SUPPORT | Block 8 |

---

## BLOCK 2: Pricing Overview

**Type:** Message with Quick Replies

**Message:**
```
Great question! Here's our pricing:

🤖 Chatbot Development: $2,500 - $8,000
⚙️ Workflow Automation: $3,000 - $10,000
📚 AI Training: $1,500 - $5,000

Every project includes:
✅ Custom solution design
✅ Implementation & training
✅ 30 days support

Want a custom quote for your needs?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| ✅ Yes, Get Quote | GET_QUOTE | Block 4 |
| 📅 Book Call | BOOK_DEMO | Block 5 |
| 📄 View Full Pricing | URL | https://yoursite.com/pricing |

---

## BLOCK 3: Learn More - Use Cases

**Type:** Message with Quick Replies

**Message:**
```
We help businesses automate:

📩 Customer Service - 24/7 AI chatbots
📊 Lead Qualification - Auto-capture & route leads
📧 Email Automation - Smart sequences
📈 Sales Processes - CRM + follow-up automation
📝 Content Distribution - Multi-platform posting

Which area interests you most?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 📩 Customer Service | USE_CASE_SERVICE | Block 3a |
| 📊 Lead Gen | USE_CASE_LEADS | Block 3b |
| 📈 Sales Automation | USE_CASE_SALES | Block 3c |
| 📅 Book Demo | BOOK_DEMO | Block 5 |

---

## BLOCK 3a: Customer Service Detail

**Type:** Message with Quick Replies

**Message:**
```
📩 Customer Service Automation

Our AI chatbots handle:
• 80% of common questions instantly
• 24/7 availability (no waiting)
• Seamless handoff to humans when needed
• Multi-language support

Results: Clients see 40% reduction in support tickets and 3x faster response times.

Want to see a demo?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| 🎯 Yes, Show Me | BOOK_DEMO | Block 5 |
| 📊 See Case Study | CASE_STUDY | Show case study link |
| ⬅️ Back | LEARN_MORE | Block 3 |

---

## BLOCK 4: Qualification Questions

**Type:** Question Sequence

**Intro Message:**
```
Perfect! Let me ask a few quick questions to give you an accurate quote.
```

### Question 1
**Type:** Text Input
**Question:** First, what's your name?
**Variable:** `user_name`
**Validation:** Required
**Next:** Question 2

### Question 2
**Type:** Email Input
**Question:** Nice to meet you, {{user_name}}! What's your email address?
**Variable:** `user_email`
**Validation:** Email format required
**Next:** Question 3

### Question 3
**Type:** Text Input
**Question:** And your company name?
**Variable:** `company_name`
**Validation:** Required
**Next:** Question 4

### Question 4
**Type:** Quick Replies
**Question:** What's your team size?
**Variable:** `team_size`
**Options:**
- Just me (1)
- 2-10 people
- 11-50 people
- 50+ people
**Next:** Question 5

### Question 5
**Type:** Quick Replies
**Question:** What's your monthly budget range for automation?
**Variable:** `budget_range`
**Options:**
- $500-1,500
- $1,500-3,000
- $3,000-7,000
- $7,000+
**Next:** Question 6

### Question 6
**Type:** Quick Replies
**Question:** When are you looking to get started?
**Variable:** `timeline`
**Options:**
- ASAP (this week)
- Within 2 weeks
- Within a month
- Just exploring
**Next:** Block 6

---

## BLOCK 5: Booking Flow

**Type:** Message with URL Button

**Message:**
```
Awesome! Let's find a time that works for you.

I'll share our calendar - you can pick any available slot that fits your schedule.

The call will be 30 minutes, and we'll cover:
• Your current challenges
• How we can help
• Timeline & investment
• Next steps

Ready to pick a time?
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 📅 View Calendar | URL | https://calendly.com/your-link |
| 📞 Call Instead | Quick Reply | REQUEST_CALL |

**After Booking:** Go to Block 7

---

## BLOCK 6: Quote & Next Steps

**Type:** Message with Quick Replies

**Message:**
```
Thanks, {{user_name}}! Based on what you've shared:

📋 Company: {{company_name}}
👥 Team Size: {{team_size}}
💰 Budget: {{budget_range}}
⏰ Timeline: {{timeline}}

I'm sending your info to our team. You'll receive a custom proposal within 24 hours at {{user_email}}.

In the meantime, want to book a quick call to discuss?
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 📅 Book Call Now | URL | https://calendly.com/your-link |
| ✅ Wait for Email | Quick Reply | CONFIRM_WAIT |

**Actions:**
1. **Webhook:** POST to CRM
   ```json
   {
     "name": "{{user_name}}",
     "email": "{{user_email}}",
     "company": "{{company_name}}",
     "team_size": "{{team_size}}",
     "budget": "{{budget_range}}",
     "timeline": "{{timeline}}",
     "source": "chatbot",
     "timestamp": "{{now}}"
   }
   ```
2. **Tag Contact:** `qualified_lead`
3. **Add to Email Sequence:** `follow_up_leads`

---

## BLOCK 7: Booking Confirmation

**Type:** Message

**Message:**
```
🎉 Perfect! You're all set.

You'll receive a calendar invite shortly with all the details.

What to expect:
📅 30-minute discovery call
🎯 We'll discuss your goals
💡 You'll get actionable recommendations
📧 Follow-up proposal within 48 hours

Anything else I can help with before we talk?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| ❓ One More Question | BOOKING_QUESTION | Show FAQ |
| ✅ All Set, Thanks! | END_CHAT | Block End |

---

## BLOCK 8: Human Support Handoff

**Type:** Message with Quick Replies

**Message:**
```
No problem! Let me connect you with a human.

You can reach us:
📧 Email: hello@company.com
📞 Phone: (555) 123-4567
💬 Live Chat: [Click here]

Our team typically responds within 1 hour during business hours (9am-6pm EST).

Want me to have someone reach out to you directly?
```

**Quick Replies:**
| Title | Payload | Next Block |
|-------|---------|------------|
| ✅ Yes, Contact Me | REQUEST_CONTACT | Create task |
| ❌ I'll Reach Out | END_CHAT | Block End |

---

## BLOCK END: End Chat

**Type:** Message

**Message:**
```
Great chatting with you! 😊

Feel free to message us anytime if you have more questions.

Have an awesome day!

— The [Company Name] Team
```

**Buttons:**
| Title | Type | URL/Payload |
|-------|------|-------------|
| 🌐 Visit Website | URL | https://yoursite.com |
| 🔄 Start Over | Quick Reply | RESTART |

**Actions:**
1. **Tag Contact:** `chat_completed`

---

## FALLBACK RESPONSES

| Trigger | Response |
|---------|----------|
| Unrecognized input (1st time) | Hmm, I'm not sure I understood that. Could you rephrase or pick one of the options above? |
| Unrecognized input (2nd time) | Let me connect you with a human who can help better. Would you like that? |
| Off-topic | I'm here to help with questions about our AI automation services. Want to learn more about what we do? |

---

## VARIABLES TO CAPTURE

| Variable | Type | Purpose |
|----------|------|---------|
| `user_name` | Text | Personalization |
| `user_email` | Email | Follow-up |
| `company_name` | Text | Qualification |
| `team_size` | Text | Segmentation |
| `budget_range` | Text | Qualification |
| `timeline` | Text | Priority |
| `interest_area` | Text | Routing |
| `booking_status` | Text | Tracking |

---

## INTEGRATIONS REQUIRED

| Integration | Purpose | Setup |
|-------------|---------|-------|
| CRM Webhook | Send qualified leads | POST endpoint |
| Calendar | Booking | Calendly embed |
| Email Platform | Follow-up sequences | API key |

---

*Flow v1.0 | [Your Agency] | Platform: ManyChat/Botpress*
