# Zapier Blueprint #1: Lead Magnet Delivery Automation

**Use Case:** Automatically deliver lead magnets when someone signs up via any form  
**Complexity:** Beginner  
**Setup Time:** 15-20 minutes  

---

## Overview

This automation instantly delivers your lead magnet (PDF, video, checklist, etc.) when someone submits their email through any form platform. Eliminates manual delivery and ensures instant gratification for subscribers.

---

## What You'll Need

- Zapier account (Free or Starter plan)
- Email marketing platform (ConvertKit, ActiveCampaign, Mailchimp, etc.)
- Lead magnet file hosted online (Google Drive, Dropbox, your website)
- Form platform (Typeform, Google Forms, WordPress, etc.)

---

## Step-by-Step Setup

### Step 1: Create New Zap

1. Log into Zapier
2. Click **"Create Zap"**
3. Name your Zap: `Lead Magnet Delivery - [Lead Magnet Name]`

---

### Step 2: Set Up Trigger

**App:** Choose your form platform

**Popular Options:**
- Typeform
- Google Forms (via Google Sheets)
- WordPress (via WPForms, Gravity Forms, or native)
- Facebook Lead Ads
- Landing page builder (ClickFunnels, Leadpages, etc.)

**Trigger Event:** `New Form Submission` or `New Entry`

**Connect Account:** Follow prompts to authenticate

**Set Up Trigger:**
1. Select your form from dropdown
2. Test trigger to pull in sample data
3. Confirm you see: Name, Email, and any custom fields

---

### Step 3: Add Action - Send Email

**App:** Choose your email marketing platform OR Gmail/Outlook

**Option A: Email Marketing Platform (Recommended)**

**Action Event:** `Send Email` or `Add Subscriber + Send`

**Set Up Action:**
1. **To Email:** Map from form submission (Email field)
2. **From Email:** Your business email
3. **From Name:** Your name or company name
4. **Subject:** `Here's your [Lead Magnet Name]!`
5. **Body Type:** HTML

**Email Template:**

```html
Hi [First Name],

Thanks for downloading [Lead Magnet Name]!

📥 DOWNLOAD LINK:
[Insert Link to Lead Magnet]

What's Inside:
✓ [Benefit #1]
✓ [Benefit #2]
✓ [Benefit #3]

Quick Tips:
- [Tip #1 for using the resource]
- [Tip #2 for getting most value]

Questions? Just reply to this email!

Best,
[Your Name]
[Company Name]

P.S. Follow us on [Social Platform] for more tips: [Link]

---
You're receiving this because you requested [Lead Magnet Name].
[Unsubscribe Link]
```

6. **Map Fields:**
   - First Name → from form submission
   - Lead Magnet Link → your hosted file URL

---

**Option B: Gmail/Outlook (if not using ESP)**

**Action Event:** `Send Email`

**Set Up Action:**
1. Same as above, but send from personal/business Gmail
2. **Note:** Less scalable, no automatic list building

---

### Step 4: Add Subscriber to Email List (Optional but Recommended)

**Add Another Action** (Click "+" after email action)

**App:** Your email marketing platform

**Action Event:** `Add Subscriber` or `Create Subscriber`

**Set Up Action:**
1. **Email:** Map from form submission
2. **First Name:** Map from form submission
3. **Tags/Lists:** Add tag like `Lead Magnet: [Name]` or add to specific list
4. **Opt-in Status:** Set to `Subscribed` or `Confirmed` (per your compliance needs)

---

### Step 5: Test Your Zap

1. Click **"Test & Review"** or **"Test & Continue"**
2. Submit a test entry through your form
3. Verify:
   - ✅ Email was sent
   - ✅ Subscriber was added to list
   - ✅ Tags/lists applied correctly
   - ✅ Links work in email

---

### Step 6: Turn On Zap

1. Click **"Turn On Zap"**
2. Zap is now live!

---

## Advanced Enhancements

### Add Delay Before Follow-up

**Want to send a follow-up email 1 day later?**

1. After email action, add **"Delay by Zapier"**
2. Set delay: `1 day`
3. Add another email action with follow-up content

### Send Different Lead Magnets Based on Form

**Using one form for multiple lead magnets?**

1. Add **"Filter by Zapier"** after trigger
2. Set filter: `Form Field` → `Contains` → `[Keyword]`
3. Create separate paths for each lead magnet
4. Each path sends different email with different resource

### Add to CRM

**Want leads in your CRM too?**

1. Add action after subscriber step
2. Choose: HubSpot, Salesforce, Pipedrive, etc.
3. Map fields: Name, Email, Source, etc.

### Track in Google Sheets

**Want a record of all downloads?**

1. Add action: `Google Sheets` → `Create Spreadsheet Row`
2. Select your tracking sheet
3. Map: Timestamp, Name, Email, Lead Magnet, Source

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check spam folder; verify sender email is authenticated |
| Wrong name in email | Ensure form captures first name; check field mapping |
| Link not working | Use direct download link (not preview link) |
| Duplicate subscribers | Enable deduplication in ESP settings |
| Zap not triggering | Check form is connected; test with new submission |

---

## Best Practices

✅ **Host lead magnet on reliable platform** (Google Drive, Dropbox, your CDN)  
✅ **Use a dedicated "from" email** (e.g., resources@yourcompany.com)  
✅ **Include clear next step** in email (what should they do after downloading?)  
✅ **Tag subscribers by lead magnet** for better segmentation later  
✅ **Test on mobile** – ensure email renders well on phones  
✅ **Monitor delivery rates** in first 48 hours  

---

## Metrics to Track

- Delivery rate (should be 95%+)
- Open rate on delivery email (benchmark: 40-60%)
- Click rate on download link (benchmark: 30-50%)
- Time from submission to delivery (should be <2 minutes)

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply to this document with questions
