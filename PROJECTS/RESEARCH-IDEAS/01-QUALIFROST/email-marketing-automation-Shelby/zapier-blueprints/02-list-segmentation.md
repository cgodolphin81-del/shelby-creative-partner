# Zapier Blueprint #2: Automatic List Segmentation

**Use Case:** Automatically tag and segment subscribers based on behavior, purchase history, or form responses  
**Complexity:** Intermediate  
**Setup Time:** 20-30 minutes  

---

## Overview

This automation segments your email list automatically based on subscriber actions, purchases, interests, or engagement. Enables targeted messaging and higher conversion rates through personalization.

---

## Common Segmentation Scenarios

| Scenario | Trigger | Action |
|----------|---------|--------|
| **By Interest** | Form selects topic | Tag with interest |
| **By Purchase** | E-commerce purchase | Tag as customer + product category |
| **By Engagement** | Opens/clicks email | Tag as "Engaged" |
| **By Inactivity** | No opens in 60 days | Tag as "Cold" |
| **By Location** | Form captures country | Tag with location |
| **By Lead Source** | Signup from specific page | Tag with source |

---

## What You'll Need

- Zapier account (Starter plan or higher for multi-step Zaps)
- Email marketing platform with tagging (ConvertKit, ActiveCampaign, etc.)
- Trigger source (e-commerce platform, form, website analytics, etc.)

---

## Step-by-Step Setup

### Scenario 1: Segment by Form Response (Interest-Based)

**Use Case:** Subscriber chooses their interest on signup form

---

### Step 1: Create New Zap

1. Log into Zapier
2. Click **"Create Zap"**
3. Name: `Segment by Interest - [Form Name]`

---

### Step 2: Set Up Trigger

**App:** Your form platform (Typeform, WordPress, etc.)

**Trigger Event:** `New Form Submission`

**Set Up Trigger:**
1. Select your form
2. Test trigger
3. Confirm you see interest/topic field in sample data

---

### Step 3: Add Filter (Optional)

**Want to segment only if they chose a specific interest?**

1. Add **"Filter by Zapier"**
2. Set condition: `Interest Field` → `(Text exactly matches)` → `[Specific Interest]`
3. Only subscribers who match will continue

---

### Step 4: Add Action - Tag Subscriber

**App:** Your email marketing platform

**Action Event:** `Add Tag to Subscriber` or `Update Subscriber`

**Set Up Action:**
1. **Email:** Map from form submission
2. **Tag:** Create/select tag (e.g., `Interest: Marketing`, `Interest: Sales`)
3. **Test action**

---

### Step 5: Add to Specific List/Sequence (Optional)

**Add Another Action:**

**App:** Your email marketing platform

**Action Event:** `Add Subscriber to Sequence` or `Subscribe to List`

**Set Up Action:**
1. **Email:** Map from form submission
2. **Sequence/List:** Choose appropriate nurture track
3. **Test action**

---

### Step 6: Turn On Zap

1. Review all steps
2. Click **"Turn On Zap"**

---

## Scenario 2: Segment by Purchase (E-commerce)

**Use Case:** Tag customers based on what they buy

---

### Step 1: Create New Zap

**Name:** `Segment by Purchase - [Platform]`

---

### Step 2: Set Up Trigger

**App:** E-commerce platform (Shopify, WooCommerce, ThriveCart, etc.)

**Trigger Event:** `New Order` or `Successful Purchase`

**Set Up Trigger:**
1. Connect your store
2. Select trigger event
3. Test to pull sample order data

---

### Step 3: Add Filter by Product

**Want to segment by specific product or category?**

1. Add **"Filter by Zapier"**
2. Set condition:
   - `Product Name` → `(Text contains)` → `[Product/Category Name]`
   - OR: `Product ID` → `(Text exactly matches)` → `[ID]`

---

### Step 4: Add Actions

**Action 1: Tag as Customer**

**App:** Email marketing platform  
**Event:** `Add Tag to Subscriber`  
**Tag:** `Customer`

**Action 2: Tag by Product**

**App:** Email marketing platform  
**Event:** `Add Tag to Subscriber`  
**Tag:** `Purchased: [Product Name]` or `Category: [Category]`

**Action 3: Add to Customer Sequence**

**App:** Email marketing platform  
**Event:** `Add Subscriber to Sequence`  
**Sequence:** `Post-Purchase Nurture` or `Product Onboarding`

---

### Step 5: Add to CRM (Optional)

**App:** Your CRM (HubSpot, Salesforce, etc.)  
**Event:** `Create/Update Contact`  
**Map Fields:** Name, Email, Purchase Amount, Product, Date

---

### Step 6: Turn On Zap

---

## Scenario 3: Segment by Engagement

**Use Case:** Tag engaged vs. inactive subscribers

---

### Step 1: Create New Zap

**Name:** `Tag Engaged Subscribers`

---

### Step 2: Set Up Trigger

**App:** Your email marketing platform

**Trigger Event:** `Subscriber Opens Email` or `Subscriber Clicks Link`

**Set Up Trigger:**
1. Connect ESP account
2. Select trigger type
3. Test trigger

---

### Step 3: Add Filter

**Only tag if they haven't been tagged yet:**

1. Add **"Filter by Zapier"**
2. Set condition: `Tags` → `(Text does not contain)` → `Engaged`

---

### Step 4: Add Action - Tag Subscriber

**App:** Email marketing platform  
**Event:** `Add Tag to Subscriber`  
**Tag:** `Engaged`

---

### Step 5: Add to VIP List (Optional)

**Add Another Action:**

**App:** Email marketing platform  
**Event:** `Add Subscriber to List`  
**List:** `VIP Subscribers` or `Engaged Leads`

---

## Advanced: Multi-Path Segmentation

**Want to segment into multiple categories from one form?**

Use **"Paths by Zapier"** (available on Professional plan+):

1. After trigger, add **"Paths by Zapier"**
2. Create path for each segment:
   - **Path A:** If `Interest = Marketing` → Tag: `Interest: Marketing`
   - **Path B:** If `Interest = Sales` → Tag: `Interest: Sales`
   - **Path C:** If `Interest = Other` → Tag: `Interest: Other`
3. Each path can have different actions (different sequences, tags, etc.)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Tags not applying | Check subscriber exists in ESP first |
| Wrong segment | Verify filter conditions; test with sample data |
| Duplicate tags | ESP may auto-deduplicate; check settings |
| Zap not triggering | Ensure trigger platform is connected properly |
| Too many Zaps | Consolidate with Paths by Zapier |

---

## Best Practices

✅ **Use consistent tag naming** (e.g., `Interest: Topic`, `Customer: Product`)  
✅ **Document your tag taxonomy** for team reference  
✅ **Clean up old tags** quarterly (remove outdated segments)  
✅ **Test each path** before going live  
✅ **Monitor tag counts** in ESP to ensure segmentation is working  
✅ **Use tags for personalization** in email content (`Hey {{tag}}` subscriber)

---

## Sample Tag Taxonomy

```
INTEREST TAGS:
- Interest: Marketing
- Interest: Sales
- Interest: Productivity
- Interest: Leadership

CUSTOMER TAGS:
- Customer (general)
- Purchased: Product A
- Purchased: Product B
- VIP Customer
- Repeat Customer

ENGAGEMENT TAGS:
- Engaged (opened in 30 days)
- Warm (opened in 60 days)
- Cold (no opens in 90 days)

SOURCE TAGS:
- Source: Facebook
- Source: Google
- Source: Podcast
- Source: Referral

LIFECYCLE TAGS:
- Lead
- MQL (Marketing Qualified Lead)
- SQL (Sales Qualified Lead)
- Opportunity
- Closed Won
- Closed Lost
```

---

## Metrics to Track

- Segment growth rate (new tags per week)
- Conversion rate by segment (compare performance)
- Engagement rate by segment (opens, clicks)
- Revenue per segment (for customer tags)

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply to this document with questions
