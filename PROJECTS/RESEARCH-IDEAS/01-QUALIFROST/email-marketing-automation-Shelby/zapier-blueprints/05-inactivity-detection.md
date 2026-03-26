# Zapier Blueprint #5: Inactivity Detection & Re-engagement

**Use Case:** Automatically identify and re-engage inactive subscribers before they churn  
**Complexity:** Intermediate  
**Setup Time:** 20-30 minutes  

---

## Overview

This automation monitors subscriber engagement and triggers re-engagement campaigns when subscribers become inactive. Helps recover at-risk subscribers and maintain list health.

---

## What You'll Need

- Zapier account (Professional plan for scheduled triggers)
- Email marketing platform with engagement tracking
- Re-engagement email sequence prepared

---

## Inactivity Thresholds (Recommended)

| Status | No Activity For | Action |
|--------|-----------------|--------|
| **Warm** | 0-30 days | Normal nurturing |
| **Cooling** | 30-60 days | Monitor closely |
| **Cold** | 60-90 days | Trigger re-engagement |
| **At Risk** | 90-120 days | Final re-engagement |
| **Churned** | 120+ days | Remove or suppress |

---

## Step-by-Step Setup

### Method 1: Using ESP Native Automation (Recommended)

**Most email platforms have built-in engagement tracking. Use this when available.**

#### ConvertKit

1. Go to **Automations** → **Rules**
2. Create Rule: `Subscriber hasn't opened email in 60 days`
3. Action: `Add Tag` → `Inactive: 60 days`
4. Create second Rule: `Subscriber has tag: Inactive: 60 days`
5. Action: `Add to Sequence` → `Re-engagement Series`

#### ActiveCampaign

1. Go to **Automations** → **Create Automation**
2. Trigger: `Subscriber hasn't opened email in X days`
3. Add condition: `Tag does not contain` → `Re-engagement`
4. Action: `Add Tag` → `Inactive`
5. Action: `Add to Automation` → `Re-engagement`

#### Mailchimp

1. Go to **Automations** → **Email** → **Re-engagement**
2. Select audience
3. Set inactivity period (60-90 days)
4. Design re-engagement emails
5. Activate automation

---

### Method 2: Using Zapier Scheduled Trigger

**If your ESP doesn't have native engagement triggers:**

---

### Step 1: Create New Zap

1. Log into Zapier
2. Click **"Create Zap"**
3. Name: `Inactivity Detection - [List Name]`

---

### Step 2: Set Up Trigger (Schedule)

**App:** Schedule by Zapier

**Trigger Event:** `Every Week` or `Every Month`

**Set Up Trigger:**
1. **Frequency:** Weekly (recommended)
2. **Day of Week:** Monday (or your choice)
3. **Time of Day:** 9:00 AM

---

### Step 3: Get Subscribers from ESP

**Add Action:**

**App:** Your email marketing platform

**Action Event:** `Find Subscribers` or `Search Subscribers`

**Set Up Action:**
1. **Search Criteria:** `Last Opened Date` → `Before` → `[60 days ago]`
2. **Status:** `Subscribed`
3. **Limit:** 100 (or your ESP's max per call)
4. **Test action**

**Note:** You may need to use ESP's API directly via "Webhooks by Zapier" if native action doesn't support engagement filtering.

---

### Step 4: Add Filter

**Only process if subscribers found:**

1. Add **"Filter by Zapier"**
2. Condition: `Subscriber Email` → `(Text exists)`

---

### Step 5: Check if Already in Re-engagement

**Add Another Filter:**

1. Add **"Filter by Zapier"**
2. Condition: `Tags` → `(Text does not contain)` → `Re-engagement`

---

### Step 6: Tag as Inactive

**Add Action:**

**App:** Your email marketing platform

**Action Event:** `Add Tag to Subscriber`

**Set Up Action:**
1. **Email:** Map from search results
2. **Tag:** `Inactive: 60 days` or `Re-engagement Needed`

---

### Step 7: Add to Re-engagement Sequence

**Add Action:**

**App:** Your email marketing platform

**Action Event:** `Add Subscriber to Sequence`

**Set Up Action:**
1. **Email:** Map from search results
2. **Sequence:** `Re-engagement Campaign`

---

### Step 8: Loop Through All Subscribers

**If you have more than 100 inactive subscribers:**

1. Zapier will automatically loop through results (up to plan limits)
2. For large lists, consider running this Zap daily with smaller batches
3. Or use ESP's native bulk actions

---

## Re-engagement Sequence Structure

### Email 1: "We Miss You" (Day 0)

```
Subject: [First Name], we miss you!

- Acknowledge absence
- Ask if everything is okay
- Offer value (what they've missed)
- Include incentive to return
- Easy unsubscribe option
```

### Email 2: "Last Chance" (Day 7)

```
Subject: Final email from us

- Clear about list removal
- One final offer
- Social alternatives (follow on social)
- Gracious goodbye
- Automatic removal in 48 hours
```

---

## Advanced: Multi-Tier Inactivity Tracking

**Track multiple inactivity levels:**

### Zap 1: 60-Day Inactivity

- Trigger: No opens in 60 days
- Action: Tag `Inactive: 60`, add to re-engagement sequence

### Zap 2: 90-Day Inactivity

- Trigger: No opens in 90 days
- Action: Tag `Inactive: 90`, send final re-engagement email

### Zap 3: 120-Day Removal

- Trigger: No opens in 120 days AND has `Inactive: 90` tag
- Action: Unsubscribe or move to suppressed list

---

## Alternative: Using Google Sheets as Tracker

**If ESP doesn't support engagement queries:**

### Step 1: Export Subscriber Data

1. Export subscriber list from ESP (CSV)
2. Include: Email, Name, Signup Date, Last Open Date, Last Click Date
3. Upload to Google Sheets

### Step 2: Create Zap to Monitor Sheet

**Trigger:** Schedule by Zapier (weekly)

**Action 1:** Google Sheets → `Find Rows`
- Filter: `Last Open Date` → `Before` → `[60 days ago]`

**Action 2:** Loop through results

**Action 3:** ESP → `Add Tag to Subscriber`

**Action 4:** Google Sheets → `Update Row`
- Add tag: `Re-engagement Sent`
- Date: Today

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't filter by engagement | Use ESP native automation or export to Sheets |
| Too many API calls | Reduce frequency; increase batch size |
| Subscribers already in sequence | Add filter to check for existing tag |
| Re-engagement not working | Review email content; test with sample segment |
| High unsubscribe rate | Soften tone; reduce frequency; improve offer |

---

## Best Practices

✅ **Start with 60-90 day threshold** (not too aggressive)  
✅ **Use warm, empathetic tone** (not guilt-tripping)  
✅ **Offer genuine value** in re-engagement emails  
✅ **Make unsubscribing easy** (better than spam complaints)  
✅ **Track re-engagement success rate** (optimize based on data)  
✅ **Remove chronic non-responders** (protects sender reputation)  
✅ **Don't re-add removed subscribers** (respect their choice)  

---

## Re-engagement Email Best Practices

### DO:
✅ Acknowledge the gap in communication  
✅ Ask if they still want to hear from you  
✅ Offer value or incentive to return  
✅ Provide easy preference options  
✅ Accept gracefully if they leave  

### DON'T:
❌ Guilt-trip ("Why are you ignoring us?")  
❌ Send more than 2-3 re-engagement emails  
❌ Make it hard to unsubscribe  
❌ Re-add them after they unsubscribe  
❌ Continue emailing after removal  

---

## Metrics to Track

| Metric | Benchmark | Goal |
|--------|-----------|------|
| Re-engagement Open Rate | 20-40% | 30%+ |
| Re-engagement Click Rate | 5-15% | 10%+ |
| Re-subscribe/Stay Rate | 10-30% | 20%+ |
| Unsubscribe Rate (Re-engagement) | 20-50% | Accept (clean list) |
| List Health Score | 70%+ active | 80%+ active |

---

## List Hygiene Schedule

| Frequency | Action |
|-----------|--------|
| **Weekly** | Run inactivity detection Zap |
| **Monthly** | Review re-engagement performance |
| **Quarterly** | Remove chronic non-responders (120+ days) |
| **Annually** | Full list audit; update segmentation |

---

## Compliance Notes

✅ **Respect unsubscribe requests immediately** (required by law)  
✅ **Don't re-import removed emails** (violates trust and regulations)  
✅ **Document removal dates** (for compliance records)  
✅ **Honor preference center choices** (if they chose less frequent emails)  
✅ **GDPR:** Ensure lawful basis for processing; honor right to erasure  

---

## Sample Inactivity Tag Taxonomy

```
ENGAGEMENT TAGS:
- Active (opened in 30 days)
- Warm (opened in 60 days)
- Cooling (opened in 90 days)
- Inactive: 60 days
- Inactive: 90 days
- Inactive: 120 days

RE-ENGAGEMENT TAGS:
- Re-engagement: Sent Email 1
- Re-engagement: Sent Email 2
- Re-engagement: Responded
- Re-engagement: Unsubscribed
- Re-engagement: Removed

LIST STATUS:
- Active Subscriber
- Inactive Subscriber
- Suppressed (Do Not Email)
- Unsubscribed
- Bounced
- Spam Complaint
```

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply to this document with questions
