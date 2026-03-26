# Email Deliverability Checklist

Complete guide to setting up and maintaining excellent email deliverability.

---

## Table of Contents

1. [Pre-Launch Setup](#pre-launch-setup)
2. [Authentication Records](#authentication-records)
3. [List Hygiene](#list-hygiene)
4. [Content Best Practices](#content-best-practices)
5. [Sending Practices](#sending-practices)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)

---

## Pre-Launch Setup

### Domain Preparation

**☐ Dedicated Sending Domain**

- [ ] Purchase separate domain for email (e.g., get.company.com)
- [ ] OR use subdomain of main domain (e.g., mail.company.com)
- [ ] Why: Protects main domain reputation if issues arise

**☐ Domain Age**

- [ ] Domain registered at least 30 days before sending
- [ ] Why: New domains are viewed with suspicion

**☐ Domain History Check**

- [ ] Check domain wasn't previously used for spam
- [ ] Tools: [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx)
- [ ] Tools: [Google Postmaster Tools](https://postmaster.google.com/)

**☐ Warm-up Plan**

- [ ] Week 1: 50-100 emails/day to most engaged subscribers
- [ ] Week 2: 200-500 emails/day
- [ ] Week 3: 500-1,000 emails/day
- [ ] Week 4: Gradually increase to full volume
- [ ] Why: Builds sender reputation gradually

---

## Authentication Records

### SPF (Sender Policy Framework)

**What it does:** Specifies which servers can send email for your domain

**☐ Create SPF Record**

1. Log into your DNS provider (GoDaddy, Cloudflare, etc.)
2. Add TXT record with following format:

```
v=spf1 include:_spf.youresp.com ~all
```

**Common ESP Includes:**

| ESP | SPF Include |
|-----|-------------|
| Mailchimp | `include:_spf.mailchimp.com` |
| SendGrid | `include:sendgrid.net` |
| Amazon SES | `include:amazonses.com` |
| Google Workspace | `include:_spf.google.com` |
| Microsoft 365 | `include:spf.protection.outlook.com` |
| ConvertKit | `include:spf.convertkit.com` |
| ActiveCampaign | `include:spf.activecampaign.com` |
| Klaviyo | `include:spf.klaviyo.com` |

**Multiple Includes (if using multiple services):**

```
v=spf1 include:_spf.google.com include:sendgrid.net include:_spf.mailchimp.com ~all
```

**⚠️ Important:** Maximum 10 DNS lookups. Count each `include:` as one lookup.

**☐ Verify SPF Record**

- [ ] Use: [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx)
- [ ] Result should show: "Pass"
- [ ] Propagation time: 24-48 hours

---

### DKIM (DomainKeys Identified Mail)

**What it does:** Adds digital signature to verify email wasn't tampered with

**☐ Generate DKIM Keys**

1. In your ESP, go to Domain Authentication/Sender Authentication
2. Enter your sending domain
3. ESP generates DKIM keys (selector + private key)

**☐ Add DKIM Record to DNS**

1. Log into DNS provider
2. Add TXT record:
   - **Host/Name:** `selector._domainkey` (e.g., `s1._domainkey`)
   - **Value:** `v=DKIM1; k=rsa; p=MIIBIjANBgkq...` (long key from ESP)

**Example:**
```
Host: s1._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQE...
```

**☐ Verify DKIM**

- [ ] Use: [DKIM Core Tools](http://dkimcore.org/tools/)
- [ ] Send test email, check headers for DKIM signature
- [ ] Propagation time: 24-48 hours

---

### DMARC (Domain-based Message Authentication)

**What it does:** Tells receivers what to do if SPF/DKIM fail; provides reporting

**☐ Start with Monitoring Mode**

Add TXT record:
```
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com; ruf=mailto:dmarc-forensics@yourdomain.com; fo=1
```

**DMARC Tags Explained:**

| Tag | Meaning | Recommended Value |
|-----|---------|-------------------|
| `v` | Version | `DMARC1` |
| `p` | Policy | `none` → `quarantine` → `reject` |
| `rua` | Aggregate reports email | Your email |
| `ruf` | Forensic reports email | Your email |
| `fo` | Failure reporting | `1` (report on any failure) |
| `pct` | Percentage of emails to apply | `100` |
| `sp` | Subdomain policy | `none` or same as p |

**☐ DMARC Policy Progression**

**Phase 1 (Weeks 1-4): Monitor**
```
v=DMARC1; p=none; rua=mailto:reports@yourdomain.com
```

**Phase 2 (Weeks 5-8): Quarantine**
```
v=DMARC1; p=quarantine; pct=50; rua=mailto:reports@yourdomain.com
```

**Phase 3 (Weeks 9+): Reject**
```
v=DMARC1; p=reject; pct=100; rua=mailto:reports@yourdomain.com
```

**☐ Review DMARC Reports**

- [ ] Set up automated report parsing (tools below)
- [ ] Review weekly for first month
- [ ] Look for: Unauthorized senders, authentication failures
- [ ] Tools: [DMARCian](https://dmarcian.com/), [Postmark DMARC](https://dmarc.postmarkapp.com/)

---

### BIMI (Brand Indicators for Message Identification) - Optional

**What it does:** Displays your logo in supporting email clients

**☐ Requirements**

- [ ] DMARC policy set to `quarantine` or `reject`
- [ ] SVG logo file (square, centered)
- [ ] VMC (Verified Mark Certificate) - paid

**☐ Add BIMI Record**

```
Host: default._bimi
Value: v=BIMI1; l=https://yourdomain.com/logo.svg; a=https://yourdomain.com/vmc.pem
```

---

## List Hygiene

### List Acquisition

**☐ Permission-Based Only**

- [ ] No purchased lists (ever)
- [ ] No scraped lists
- [ ] No business card collections
- [ ] Only: Opt-in subscribers who explicitly requested emails

**☐ Double Opt-In Recommended**

- [ ] Subscriber confirms via email after signup
- [ ] Reduces fake/bad emails
- [ ] Improves engagement rates
- [ ] Required for GDPR compliance in EU

**☐ Clear Opt-In Language**

- [ ] Checkbox not pre-checked
- [ ] Clear what they're signing up for
- [ ] Frequency disclosed
- [ ] Link to privacy policy

---

### List Maintenance

**☐ Regular Cleaning Schedule**

| Frequency | Action |
|-----------|--------|
| Weekly | Remove hard bounces immediately |
| Weekly | Process unsubscribe requests |
| Monthly | Review spam complaints |
| Quarterly | Re-engage inactive subscribers |
| Quarterly | Remove chronic non-openers (120+ days) |

**☐ Bounce Management**

**Hard Bounces (Remove Immediately):**
- Invalid email address
- Domain doesn't exist
- User unknown

**Soft Bounces (Monitor):**
- Mailbox full
- Server temporarily unavailable
- Message too large

**Action:** Remove after 3 consecutive soft bounces

**☐ Unsubscribe Processing**

- [ ] Process within 10 business days (CAN-SPAM requirement)
- [ ] Make it easy (one-click preferred)
- [ ] Honor immediately (no delays)
- [ ] Don't re-add unsubscribed emails

**☐ Spam Complaint Management**

- [ ] Monitor complaint rate (<0.1% target)
- [ ] Investigate sources of complaints
- [ ] Remove complainers immediately
- [ ] Never re-add complainers

**Thresholds:**

| Complaint Rate | Status |
|----------------|--------|
| < 0.1% | Excellent |
| 0.1% - 0.3% | Acceptable |
| 0.3% - 0.5% | Warning |
| > 0.5% | Critical - investigate immediately |

---

### Engagement Segmentation

**☐ Segment by Activity**

| Segment | Definition | Action |
|---------|------------|--------|
| Highly Engaged | Opened in last 30 days | Send all campaigns |
| Engaged | Opened in last 60 days | Send most campaigns |
| At Risk | Opened in last 90 days | Send selectively |
| Inactive | No opens in 90+ days | Re-engagement campaign |
| Cold | No opens in 120+ days | Remove or suppress |

**☐ Re-engagement Campaign**

Before removing inactive subscribers:
1. Send 2-3 re-engagement emails
2. Offer value/incentive
3. Ask if they want to stay subscribed
4. Make unsubscribing easy
5. Remove non-responders

---

## Content Best Practices

### Avoid Spam Triggers

**☐ Subject Line Red Flags**

Avoid excessive use of:
- ❌ ALL CAPS
- ❌ Multiple exclamation points!!!
- ❌ $$$ or currency symbols
- ❌ "FREE" (use sparingly)
- ❌ "Guaranteed"
- ❌ "No risk"
- ❌ "Act now"
- ❌ "Limited time"

**Note:** These aren't banned, but overuse triggers filters.

**☐ Content Red Flags**

- [ ] Avoid image-only emails (include text)
- [ ] Don't use URL shorteners (bit.ly, tinyurl)
- [ ] Balance text-to-image ratio (60/40 minimum)
- [ ] Include physical mailing address (CAN-SPAM requirement)
- [ ] Include clear unsubscribe link

**☐ Link Best Practices**

- [ ] Use your own domain for links (not ESP default)
- [ ] Avoid linking to blacklisted domains
- [ ] Check links before sending (no 404s)
- [ ] Don't use too many links (focus on primary CTA)

---

### Technical Content Checks

**☐ HTML Quality**

- [ ] Valid HTML (no broken tags)
- [ ] Inline CSS (not all ESPs support <style> blocks)
- [ ] Mobile-responsive design
- [ ] Alt text on all images
- [ ] Web-safe fonts (or font fallbacks)

**☐ Pre-Send Testing**

- [ ] Send test to multiple email clients:
  - [ ] Gmail (web + app)
  - [ ] Outlook (desktop + web)
  - [ ] Apple Mail
  - [ ] Yahoo Mail
- [ ] Check spam folder placement
- [ ] Verify links work
- [ ] Check rendering on mobile
- [ ] Tools: [Litmus](https://litmus.com/), [Email on Acid](https://www.emailonacid.com/)

---

## Sending Practices

### Volume & Frequency

**☐ Consistent Sending**

- [ ] Send on regular schedule (subscribers expect consistency)
- [ ] Avoid long gaps followed by bursts
- [ ] Gradually increase volume (warm-up for new domains)

**☐ Frequency Best Practices**

| Audience Type | Recommended Frequency |
|---------------|----------------------|
| New subscribers | 1-2x/week (welcome series) |
| Engaged subscribers | 1-4x/week |
| Occasional buyers | 1-2x/month |
| Inactive subscribers | Reduce or re-engage |

**☐ Time Zone Optimization**

- [ ] Send based on recipient timezone (if ESP supports)
- [ ] Or send based on where majority of list is located
- [ ] Test different send times

---

### Reputation Monitoring

**☐ Monitor Sender Reputation**

| Tool | What It Checks | URL |
|------|----------------|-----|
| Google Postmaster Tools | Gmail deliverability | [postmaster.google.com](https://postmaster.google.com/) |
| Microsoft SNDS | Outlook/Hotmail reputation | [sendersupport.olc.protection.outlook.com](https://sendersupport.olc.protection.outlook.com/snds/) |
| Talos Intelligence | Cisco reputation | [talosintelligence.com](https://talosintelligence.com/) |
| Barracuda Central | Barracuda blacklist | [barracudacentral.org](https://www.barracudacentral.org/) |
| MXToolbox | Multiple blacklists | [mxtoolbox.com](https://mxtoolbox.com/) |

**☐ Check Frequency**

- [ ] New domains: Daily for first month
- [ ] Established domains: Weekly
- [ ] After any deliverability issue: Immediately

**☐ Key Metrics to Watch**

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Delivery Rate | >98% | 95-98% | <95% |
| Open Rate | Industry avg | -20% vs avg | -40% vs avg |
| Complaint Rate | <0.1% | 0.1-0.3% | >0.5% |
| Bounce Rate | <2% | 2-5% | >5% |
| Spam Folder Rate | <5% | 5-15% | >15% |

---

## Monitoring & Maintenance

### Daily Checks

- [ ] Review previous day's sends (delivery, opens, clicks)
- [ ] Check for bounce notifications
- [ ] Process unsubscribe requests
- [ ] Monitor spam complaints

### Weekly Checks

- [ ] Review campaign performance trends
- [ ] Check sender reputation scores
- [ ] Review blacklist status
- [ ] Analyze engagement by segment

### Monthly Checks

- [ ] Full list hygiene audit
- [ ] Review inactive subscribers
- [ ] Check authentication records (SPF, DKIM, DMARC)
- [ ] Review DMARC reports
- [ ] Update suppression list

### Quarterly Checks

- [ ] Re-engagement campaigns for inactive
- [ ] Remove chronic non-responders
- [ ] Review and update content strategy
- [ ] Test across email clients
- [ ] Audit sending practices

---

## Troubleshooting

### Common Issues & Solutions

**Issue: Emails Going to Spam**

**Diagnosis:**
1. Check spam folder placement (send test to Gmail, Yahoo, etc.)
2. Review Google Postmaster Tools reputation
3. Check blacklist status

**Solutions:**
- [ ] Verify SPF, DKIM, DMARC all pass
- [ ] Review content for spam triggers
- [ ] Check complaint rate (<0.1%)
- [ ] Reduce sending volume temporarily
- [ ] Focus on engaged segments only
- [ ] Warm up IP/domain if new

---

**Issue: High Bounce Rate**

**Diagnosis:**
1. Review bounce reports from ESP
2. Identify hard vs. soft bounces
3. Check list source

**Solutions:**
- [ ] Remove hard bounces immediately
- [ ] Remove emails with 3+ soft bounces
- [ ] Implement double opt-in
- [ ] Clean list with verification service
- [ ] Tools: [ZeroBounce](https://www.zerobounce.net/), [NeverBounce](https://neverbounce.com/)

---

**Issue: Sudden Drop in Open Rates**

**Diagnosis:**
1. Check if drop is across all campaigns or specific ones
2. Review subject line changes
3. Check send time/frequency changes
4. Verify authentication still working

**Solutions:**
- [ ] A/B test subject lines
- [ ] Review list segments (added inactive subscribers?)
- [ ] Check for deliverability issues (spam folder placement)
- [ ] Verify authentication records haven't expired
- [ ] Review ESP account status

---

**Issue: Domain/IP Blacklisted**

**Diagnosis:**
1. Use MXToolbox to identify which blacklist(s)
2. Review blacklist reason
3. Check for security breaches

**Solutions:**
- [ ] Address root cause (spam, compromised account, etc.)
- [ ] Follow blacklist removal process
- [ ] Most have online delisting forms
- [ ] Wait for propagation (24-48 hours)
- [ ] Implement preventive measures

---

### When to Contact ESP Support

**Contact support immediately if:**

- [ ] Sudden delivery rate drop (>10%)
- [ ] Account suspended or paused
- [ ] Authentication issues you can't resolve
- [ ] Blacklist removal assistance needed
- [ ] Suspected account compromise

---

## Deliverability Checklist Summary

### Pre-Launch (Before First Send)

- [ ] Domain registered 30+ days ago
- [ ] SPF record configured and verified
- [ ] DKIM record configured and verified
- [ ] DMARC record configured (monitoring mode)
- [ ] List is permission-based only
- [ ] Unsubscribe link in all emails
- [ ] Physical address in footer
- [ ] Warm-up plan in place

### Ongoing (Every Send)

- [ ] Content reviewed for spam triggers
- [ ] Links tested and working
- [ ] Sent to engaged segments first
- [ ] Authentication passing (check headers)
- [ ] Bounces and complaints processed

### Weekly Maintenance

- [ ] Review campaign performance
- [ ] Check sender reputation
- [ ] Process bounces and unsubscribes
- [ ] Monitor spam complaints

### Monthly Maintenance

- [ ] Full list hygiene audit
- [ ] Review DMARC reports
- [ ] Check blacklist status
- [ ] Update suppression list

### Quarterly Maintenance

- [ ] Re-engagement campaigns
- [ ] Remove inactive subscribers
- [ ] Review and update authentication
- [ ] Test across email clients

---

## Quick Reference: Authentication Record Templates

### SPF Record
```
v=spf1 include:_spf.youresp.com ~all
```

### DKIM Record
```
Host: selector._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkq...
```

### DMARC Record (Monitor)
```
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:reports@yourdomain.com
```

### DMARC Record (Enforce)
```
Host: _dmarc
Value: v=DMARC1; p=reject; rua=mailto:reports@yourdomain.com; pct=100
```

---

**Template Version:** 1.0  
**Last Updated:** March 2026  
**Support:** Reply with deliverability questions
