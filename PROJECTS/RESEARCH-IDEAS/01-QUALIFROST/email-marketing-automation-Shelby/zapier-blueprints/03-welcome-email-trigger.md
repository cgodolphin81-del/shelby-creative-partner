# Zapier Blueprint #3: Welcome Email Sequence Trigger

**Use Case:** Automatically enroll new subscribers into a welcome email sequence  
**Complexity:** Beginner  
**Setup Time:** 10-15 minutes  

---

## Overview

This automation triggers a welcome email sequence when someone subscribes to your list. Ensures every new subscriber receives your onboarding emails consistently, without manual intervention.

---

## What You'll Need

- Zapier account (Free or Starter plan)
- Email marketing platform with sequences/automations (ConvertKit, ActiveCampaign, Mailchimp, etc.)
- Signup form or integration source

---

## Step-by-Step Setup

### Step 1: Create New Zap

1. Log into Zapier
2. Click **"Create Zap"**
3. Name: `Welcome Sequence Trigger - [List Name]`

---

### Step 2: Set Up Trigger

**Option A: New Subscriber in Email Platform**

**App:** Your email marketing platform

**Trigger Event:** `New Subscriber` or `Subscriber Added`

**Set Up Trigger:**
1. Connect your ESP account
2. Select specific list/form (if applicable)
3. Test trigger to pull sample subscriber

---

**Option B: New Form Submission (External Form)**

**App:** Typeform, Google Forms, WordPress, etc.

**Trigger Event:** `New Form Submission`

**Set Up Trigger:**
1. Connect form platform
2. Select your signup form
3. Test trigger

---

### Step 3: Add Filter (Optional)

**Only trigger for specific lists or sources:**

1. Add **"Filter by Zapier"**
2. Set condition:
   - `List Name` → `(Text exactly matches)` → `[Main List]`
   - OR: `Tag` → `(Text does not contain)` → `Existing Customer`

---

### Step 4: Add Action - Enroll in Sequence

**App:** Your email marketing platform

**Action Event:** `Add Subscriber to Sequence` or `Start Automation`

**Set Up Action:**
1. **Email:** Map from trigger (subscriber email)
2. **First Name:** Map from trigger (if available)
3. **Sequence:** Select your welcome sequence
4. **Start Immediately:** Yes (or schedule for specific time)

---

### Step 5: Add Welcome Tag (Optional)

**Add Another Action:**

**App:** Your email marketing platform

**Action Event:** `Add Tag to Subscriber`

**Set Up Action:**
1. **Email:** Map from trigger
2. **Tag:** `Welcome Sequence Started` or `New Subscriber`

---

### Step 6: Test Your Zap

1. Submit a test signup through your form
2. Verify:
   - ✅ Subscriber added to list
   - ✅ Sequence enrollment confirmed
   - ✅ First welcome email received (check inbox/spam)
   - ✅ Tag applied correctly

---

### Step 7: Turn On Zap

1. Click **"Turn On Zap"**
2. Zap is now live!

---

## Setting Up the Welcome Sequence (In Your ESP)

**Before the Zap works, you need to create the sequence in your email platform:**

### ConvertKit

1. Go to **Automations** → **Sequences**
2. Click **Create Sequence**
3. Name: `Welcome Series`
4. Add emails with delays:
   - Email 1: Day 0 (immediate)
   - Email 2: Day 1
   - Email 3: Day 3
   - Email 4: Day 7
   - Email 5: Day 14
5. Save and publish

### ActiveCampaign

1. Go to **Automations** → **Create Automation**
2. Choose **Start from Scratch**
3. Add trigger: `Subscribes to List`
4. Add action: `Send Email` (Email 1)
5. Add **Wait** condition (1 day)
6. Add action: `Send Email` (Email 2)
7. Continue for all emails
8. Save and activate

### Mailchimp

1. Go to **Automations** → **Email** → **Welcome Series**
2. Choose trigger (signup, purchase, etc.)
3. Add emails with delays
4. Design each email
5. Turn on automation

---

## Advanced Enhancements

### Personalize Sequence Based on Source

**Different signup sources → Different welcome sequences:**

1. Add **"Paths by Zapier"** after trigger
2. **Path A:** If `Source = Lead Magnet` → Enroll in `Welcome - Lead Magnet`
3. **Path B:** If `Source = Webinar` → Enroll in `Welcome - Webinar`
4. **Path C:** If `Source = Purchase` → Enroll in `Welcome - Customer`

### Add SMS Welcome (Multi-Channel)

**Want to send SMS too?**

1. After sequence enrollment, add action
2. **App:** Twilio, SMS by Zapier, or your SMS platform
3. **Event:** `Send SMS`
4. **Message:** `Hi [Name], welcome to [Company]! Check your email for your free [Resource]. Questions? Reply here!`

### Add to CRM

**Sync new subscribers to CRM:**

1. Add action after sequence enrollment
2. **App:** HubSpot, Salesforce, Pipedrive
3. **Event:** `Create Contact`
4. Map fields: Name, Email, Source, Date

### Notify Your Team

**Want your team to know about new subscribers?**

1. Add action after sequence enrollment
2. **App:** Slack, Microsoft Teams
3. **Event:** `Send Channel Message`
4. **Message:** `🎉 New subscriber: [Name] ([Email]) from [Source]`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Sequence not starting | Check sequence is published/active in ESP |
| Duplicate enrollments | Enable deduplication; check trigger conditions |
| Wrong sequence | Verify correct sequence selected in action |
| Delayed emails | Check ESP sending limits; verify sequence timing |
| Subscriber not found | Ensure subscriber exists before sequence enrollment |

---

## Best Practices

✅ **Test the full sequence** before going live (sign up yourself)  
✅ **Use a dedicated "from" name** for welcome emails (founder/team)  
✅ **Include clear next steps** in Email 1 (what should they do?)  
✅ **Mobile-optimize all emails** (50%+ opens on mobile)  
✅ **Monitor sequence performance** (open rates, click rates, conversions)  
✅ **A/B test subject lines** in welcome emails (highest engagement opportunity)  

---

## Welcome Sequence Best Practices

### Email 1 (Day 0 - Immediate)
- Deliver promised lead magnet
- Set expectations (what/when they'll receive emails)
- Invite reply (build connection)

### Email 2 (Day 1)
- Provide immediate value (tip, insight, resource)
- Establish credibility
- Soft CTA to content

### Email 3 (Day 3)
- Share story (founder journey, mission)
- Build emotional connection
- Multiple CTAs based on readiness

### Email 4 (Day 7)
- Social proof (testimonials, case studies)
- Address objections
- Introduce paid offer (soft sell)

### Email 5 (Day 14)
- Clear offer presentation
- Urgency/scarcity (if applicable)
- Risk reversal (guarantee)

---

## Metrics to Track

| Metric | Benchmark | Goal |
|--------|-----------|------|
| Welcome Email 1 Open Rate | 50-70% | 60%+ |
| Welcome Email 1 Click Rate | 20-40% | 30%+ |
| Sequence Completion Rate | 40-60% | 50%+ |
| Conversion to Customer | 2-5% | 3%+ |
| Unsubscribe Rate (Sequence) | <2% | <1% |

---

## Compliance Notes

✅ **Include unsubscribe link** in every email (required by law)  
✅ **Honor opt-in preferences** (don't add to sequences without consent)  
✅ **Include physical address** in email footer (CAN-SPAM requirement)  
✅ **Process unsubscribe requests** within 10 business days  
✅ **Document consent source** (which form, when, IP address if possible)

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply to this document with questions
