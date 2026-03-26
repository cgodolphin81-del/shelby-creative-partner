# Zapier Blueprint #4: Post-Purchase Follow-Up Automation

**Use Case:** Automatically send follow-up emails after a purchase (receipt, onboarding, review request, upsell)  
**Complexity:** Intermediate  
**Setup Time:** 25-35 minutes  

---

## Overview

This automation creates a complete post-purchase customer journey: order confirmation, onboarding/support, review request, and strategic upsell. Increases customer satisfaction, reduces support tickets, and drives repeat purchases.

---

## What You'll Need

- Zapier account (Professional plan recommended for multi-step)
- E-commerce platform (Shopify, WooCommerce, ThriveCart, Gumroad, etc.)
- Email marketing platform
- Review platform (optional: Trustpilot, Judge.me, etc.)

---

## The Complete Post-Purchase Flow

```
Purchase → Order Confirmation (Immediate)
       → Onboarding Email (Day 1)
       → Check-in Email (Day 7)
       → Review Request (Day 14)
       → Upsell/Cross-sell (Day 21)
```

---

## Step-by-Step Setup

### Step 1: Create New Zap

1. Log into Zapier
2. Click **"Create Zap"**
3. Name: `Post-Purchase Follow-Up - [Product/Store]`

---

### Step 2: Set Up Trigger

**App:** Your e-commerce platform

**Trigger Event:** `New Order` or `Successful Purchase`

**Popular Platforms:**
- Shopify: `New Paid Order`
- WooCommerce: `New Order` (via WordPress trigger)
- ThriveCart: `Successful Purchase`
- Gumroad: `New Sale`
- Stripe: `Successful Charge`

**Set Up Trigger:**
1. Connect your store/payment platform
2. Select trigger event
3. Test trigger to pull sample order data
4. Confirm you see: Customer Name, Email, Product(s), Order Total, Order ID

---

### Step 3: Add Action - Send Order Confirmation

**App:** Your email marketing platform OR Gmail

**Action Event:** `Send Email`

**Set Up Action:**

**To:** Map from order (Customer Email)  
**From:** Your business email  
**From Name:** [Company Name] Team  
**Subject:** `Order Confirmed! #[Order ID]`  

**Body (HTML):**

```html
Hi [Customer First Name],

Great news – your order is confirmed! 🎉

ORDER DETAILS
━━━━━━━━━━━━
Order Number: #[Order ID]
Date: [Order Date]
Total: $[Order Total]

ITEMS:
[Product Name] - Qty: [Quantity] - $[Price]
[Additional items if applicable]

SHIPPING TO:
[Customer Name]
[Shipping Address]

WHAT'S NEXT?
━━━━━━━━━━━━
✓ You'll receive a shipping confirmation email when your order ships
✓ Estimated delivery: [X-X] business days
✓ Track your order: [Tracking Link]

NEED HELP?
━━━━━━━━━━━━
Questions? Reply to this email or contact us at [Support Email]

Thanks for your order!

The [Company Name] Team

[Company Logo]
[Website URL]
[Social Links]

---
Order #[Order ID] | [Company Name] | [Address]
```

---

### Step 4: Add Subscriber to Customer List

**Add Another Action:**

**App:** Your email marketing platform

**Action Event:** `Add/Update Subscriber`

**Set Up Action:**
1. **Email:** Map from order
2. **First Name:** Map from order
3. **Tags:** Add `Customer`, `Purchased: [Product Name]`
4. **List:** Add to `Customers` list (separate from leads)

---

### Step 5: Add Delay for Onboarding Email

**Add Another Action:**

**App:** Delay by Zapier

**Action Event:** `Delay For`

**Set Up Action:**
1. **Delay Amount:** `1`
2. **Unit of Time:** `Day`

---

### Step 6: Send Onboarding Email

**Add Another Action:**

**App:** Your email marketing platform

**Action Event:** `Send Email`

**Set Up Action:**

**To:** Map from order (Customer Email)  
**Subject:** `Getting started with [Product Name]`  

**Body:**

```html
Hi [Customer First Name],

Your order is on the way! While you wait, let's get you set up for success.

GETTING STARTED WITH [PRODUCT NAME]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: [First action they should take]
[Link: Detailed instructions]

Step 2: [Second action]
[Link: Video tutorial / Guide]

Step 3: [Third action]
[Link: Resource / Template]

RESOURCES
━━━━━━━━━━━━
📖 User Guide: [Link]
🎥 Video Tutorials: [Link]
❓ FAQ: [Link]
💬 Community: [Link]

NEED HELP?
━━━━━━━━━━━━
Our support team is here for you!
📧 [Support Email]
💬 Live Chat: [Link]
📞 [Phone Number]

We're excited for you to get started!

Cheers,
[Sender Name]
[Title] | [Company Name]

P.S. Bookmark this email – it has all the links you'll need to get started.
```

---

### Step 7: Add More Delays and Emails

**Repeat the pattern for remaining emails:**

**Day 7 Check-in:**
- Delay: 6 days
- Email: "How's it going?" + offer support

**Day 14 Review Request:**
- Delay: 7 days
- Email: Request review/testimonial

**Day 21 Upsell:**
- Delay: 7 days
- Email: Related product/upgrade offer

---

## Review Request Email Template

```html
Hi [Customer First Name],

You've had [Product Name] for a couple weeks now. How's it going?

We'd love to hear your honest feedback!

[⭐⭐⭐⭐⭐ Click here to leave a review]

It takes less than 2 minutes, and your review helps:
✓ Other customers make informed decisions
✓ Us improve our products
✓ You get entered for [Monthly Giveaway - optional]

Not happy with your purchase?

Reply to this email and we'll make it right. Your satisfaction is our priority.

Thanks for being a customer!

[Sender Name]
[Company Name]
```

---

## Upsell Email Template

```html
Hi [Customer First Name],

Hope you're loving [Product Name]!

Customers who bought [Product Name] also love:

[Related Product #1]
[Image]
[Brief description]
[Price]
[CTA: Learn More]

[Related Product #2]
[Image]
[Brief description]
[Price]
[CTA: Learn More]

As a valued customer, enjoy 15% off:
**Code: LOYAL15**

[Shop Now]

Questions about which product is right for you? Hit reply!

Cheers,
[Sender Name]
[Company Name]
```

---

## Advanced Enhancements

### Segment by Product Type

**Different products → Different follow-up sequences:**

1. Add **"Paths by Zapier"** after trigger
2. **Path A:** If `Product = Product A` → Send Product A onboarding
3. **Path B:** If `Product = Product B` → Send Product B onboarding
4. Each path has customized emails and resources

### Add to VIP Segment for High-Value Orders

**Orders over $X get VIP treatment:**

1. Add **"Filter by Zapier"**
2. Condition: `Order Total` → `(Number is greater than)` → `500`
3. If true: Add tag `VIP Customer`, send personalized thank you

### Sync to CRM

**Add customer to CRM with purchase data:**

1. Add action after subscriber step
2. **App:** HubSpot, Salesforce, Pipedrive
3. **Event:** `Create/Update Deal` or `Add to Pipeline`
4. Map: Customer info, Product, Amount, Date

### Create Support Ticket (Optional)

**Proactive support for complex products:**

1. Add action after onboarding email
2. **App:** Help Scout, Zendesk, Intercom
3. **Event:** `Create Ticket` or `Start Conversation`
4. Message: "New customer [Name] purchased [Product]. Proactive check-in scheduled for Day 7."

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Duplicate emails | Check for multiple Zaps triggering on same event |
| Wrong customer name | Verify field mapping from e-commerce platform |
| Emails going to spam | Authenticate sending domain; avoid spam trigger words |
| Delay not working | Check Zapier task history for delays |
| Review link not working | Use direct review page URL (not dynamic) |

---

## Best Practices

✅ **Personalize with product name** (not generic "your order")  
✅ **Include order details** in confirmation (reduces support tickets)  
✅ **Set clear expectations** (shipping timelines, what's next)  
✅ **Make support easy to find** (multiple contact options)  
✅ **Time review requests appropriately** (after they've used product)  
✅ **Make upsell relevant** (related products, not random)  
✅ **Include unsubscribe** in all marketing emails (not transactional)  

---

## Metrics to Track

| Metric | Benchmark | Goal |
|--------|-----------|------|
| Order Confirmation Open Rate | 60-80% | 70%+ |
| Onboarding Email Click Rate | 15-30% | 25%+ |
| Review Request Response Rate | 5-15% | 10%+ |
| Upsell Conversion Rate | 3-10% | 5%+ |
| Customer Support Tickets | Baseline | Reduce 20% |
| Repeat Purchase Rate (90 days) | 20-40% | 30%+ |

---

## Compliance Notes

✅ **Transactional vs. Marketing:** Order confirmations are transactional (no unsubscribe required). Follow-ups with promotions are marketing (unsubscribe required).  
✅ **GDPR:** Ensure customers consented to marketing emails before adding to sequences.  
✅ **CAN-SPAM:** Include physical address in all marketing emails.  
✅ **Review Incentives:** If offering incentives for reviews, disclose clearly and follow platform rules.

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply to this document with questions
