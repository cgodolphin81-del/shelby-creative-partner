# Email Deliverability Guide
## SPF, DKIM, DMARC & List Hygiene Best Practices

---

## Executive Summary

Email deliverability is the foundation of successful email marketing. Even the best campaigns fail if they don't reach the inbox. This guide covers technical authentication (SPF, DKIM, DMARC), reputation management, list hygiene, and ongoing monitoring to ensure maximum inbox placement.

**Key Metric Goal:** 95%+ inbox placement rate

---

## Table of Contents

1. Understanding Deliverability
2. Email Authentication (SPF, DKIM, DMARC)
3. Sender Reputation
4. List Hygiene Best Practices
5. Content Best Practices
6. Infrastructure & Technical Setup
7. Monitoring & Troubleshooting
8. ISP-Specific Guidelines
9. Compliance (CAN-SPAM, GDPR, CASL)
10. Deliverability Checklist

---

## 1. UNDERSTANDING DELIVERABILITY

### 1.1 The Email Journey

```
Sender → ESP → Internet → Receiving Server → Inbox/Spam
              ↓
         Authentication Checks
         Reputation Checks
         Content Filters
```

### 1.2 Key Deliverability Metrics

| Metric | Good | Warning | Critical |
|--------|------|---------|----------|
| Inbox Placement Rate | 95%+ | 85-94% | <85% |
| Bounce Rate | <2% | 2-5% | >5% |
| Spam Complaint Rate | <0.1% | 0.1-0.3% | >0.3% |
| Unsubscribe Rate | <0.5% | 0.5-1% | >1% |
| Open Rate | 20%+ | 15-20% | <15% |

### 1.3 Where Emails Can Go

1. **Primary Inbox** - Ideal destination
2. **Promotions Tab** (Gmail) - Acceptable for marketing
3. **Spam/Junk Folder** - Must avoid
4. **Blocked** - Never delivered

### 1.4 Factors Affecting Deliverability

**Technical (40% weight):**
- Authentication (SPF, DKIM, DMARC)
- IP reputation
- Domain reputation
- Infrastructure setup

**Reputation (35% weight):**
- Sender history
- Complaint rates
- Engagement rates
- List quality

**Content (25% weight):**
- Subject line quality
- Body content
- Link quality
- Image-to-text ratio

---

## 2. EMAIL AUTHENTICATION

### 2.1 SPF (Sender Policy Framework)

**What it is:** DNS record that lists authorized sending servers for your domain

**Why it matters:** Prevents spammers from sending emails that appear to be from your domain

#### SPF Record Setup

**Step 1: Identify Your Sending Sources**
- Email Service Provider (Klaviyo, Mailchimp, etc.)
- Corporate email (Google Workspace, Microsoft 365)
- Transactional email (SendGrid, Postmark)
- Any other services sending on your behalf

**Step 2: Create SPF Record**

**Example for Klaviyo + Google Workspace:**
```
v=spf1 include:sendgrid.net include:_spf.google.com ~all
```

**Klaviyo-specific:**
```
v=spf1 include:spf.klaviyo.com ~all
```

**Common Includes:**
| Provider | SPF Include |
|----------|-------------|
| Klaviyo | `include:spf.klaviyo.com` |
| Mailchimp | `include:servers.mcsv.net` |
| SendGrid | `include:sendgrid.net` |
| Google Workspace | `include:_spf.google.com` |
| Microsoft 365 | `include:spf.protection.outlook.com` |
| Amazon SES | `include:amazonses.com` |

**Step 3: Add to DNS**
1. Log into your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.)
2. Add TXT record
3. Host: `@` or your domain
4. Value: Your SPF record
5. TTL: 3600 (1 hour)

**SPF Modifiers:**
- `+all` - Allow all (NEVER use - defeats purpose)
- `~all` - Soft fail (recommended for testing)
- `-all` - Hard fail (recommended for production)
- `?all` - Neutral (not recommended)

**Best Practices:**
- Keep SPF record under 255 characters
- Maximum 10 DNS lookups
- Regularly audit included services
- Remove unused services

---

### 2.2 DKIM (DomainKeys Identified Mail)

**What it is:** Cryptographic signature that verifies email wasn't altered in transit

**Why it matters:** Proves email authenticity and integrity

#### DKIM Setup

**Step 1: Generate DKIM Keys (via ESP)**

**Klaviyo DKIM Setup:**
1. Go to Account → Sending
2. Click "Add Domain" or manage existing
3. Klaviyo generates DKIM keys
4. Copy the CNAME records provided

**Step 2: Add DKIM Records to DNS**

**Example DKIM CNAME Records:**
```
Type: CNAME
Host: klaviyo._domainkey
Value: klaviyo._domainkey.yourdomain.com.klaviyo.com

Type: CNAME
Host: klaviyo2._domainkey
Value: klaviyo2._domainkey.yourdomain.com.klaviyo.com
```

**Step 3: Verify in ESP**
- Return to Klaviyo and click "Verify"
- DNS propagation can take 24-48 hours

**DKIM Best Practices:**
- Use 2048-bit keys (not 1024-bit)
- Rotate keys annually
- Monitor for DKIM failures
- Ensure all sending sources have DKIM

---

### 2.3 DMARC (Domain-based Message Authentication)

**What it is:** Policy that tells receiving servers what to do if SPF or DKIM fails

**Why it matters:** Protects your domain from unauthorized use and provides reporting

#### DMARC Record Setup

**Step 1: Create DMARC Record**

**Basic DMARC Record (Monitoring Mode):**
```
v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; ruf=mailto:dmarc@yourdomain.com; fo=1
```

**Recommended DMARC Record (Enforcement Mode):**
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@yourdomain.com; ruf=mailto:dmarc@yourdomain.com; fo=1; adkim=s; aspf=s
```

**Strict DMARC Record (Maximum Protection):**
```
v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@yourdomain.com; ruf=mailto:dmarc@yourdomain.com; fo=1; adkim=s; aspf=s
```

**DMARC Tag Explanation:**

| Tag | Meaning | Values |
|-----|---------|--------|
| `v` | Version | DMARC1 (required) |
| `p` | Policy | none, quarantine, reject |
| `pct` | Percentage | 1-100 (apply policy to % of emails) |
| `rua` | Aggregate reports | Email for reports |
| `ruf` | Forensic reports | Email for failure reports |
| `fo` | Failure options | 0, 1, d, s |
| `adkim` | DKIM alignment | r (relaxed), s (strict) |
| `aspf` | SPF alignment | r (relaxed), s (strict) |

**Step 2: Add to DNS**
```
Type: TXT
Host: _dmarc
Value: Your DMARC record
TTL: 3600
```

**DMARC Implementation Phases:**

**Phase 1: Monitor (2-4 weeks)**
```
p=none
```
- Collect data without affecting delivery
- Review reports for issues
- Identify all legitimate sending sources

**Phase 2: Quarantine (4-8 weeks)**
```
p=quarantine; pct=50
```
- Start with 50% of emails
- Monitor spam folder placement
- Increase to 100% when confident

**Phase 3: Reject (Ongoing)**
```
p=reject
```
- Full protection
- Unauthorized emails rejected
- Maximum domain protection

**DMARC Reporting:**

**Aggregate Reports (rua):**
- Sent daily by receiving ISPs
- XML format with authentication results
- Use tools to parse: Dmarcian, Postmark DMARC, Google Postmaster

**Forensic Reports (ruf):**
- Sent per-email when authentication fails
- More detailed than aggregate
- Can be high volume

**Free DMARC Report Tools:**
- Google Postmaster Tools
- Microsoft SNDS
- Dmarcian (free tier)
- Postmark DMARC (free)

---

### 2.4 BIMI (Brand Indicators for Message Identification)

**What it is:** Displays your logo in supporting inboxes

**Why it matters:** Brand recognition, trust, higher engagement

#### BIMI Setup

**Requirements:**
1. DMARC policy of `p=quarantine` or `p=reject`
2. SVG logo (specific format)
3. VMC (Verified Mark Certificate) - optional but recommended

**BIMI Record:**
```
Type: TXT
Host: default._bimi
Value: v=BIMI1; l=https://yourdomain.com/logo.svg; a=https://yourdomain.com/vmc.pem
```

**Logo Requirements:**
- SVG Tiny PS format
- Square aspect ratio
- Minimum 96x96 pixels
- Solid background (no transparency)
- No text (logo only)

---

## 3. SENDER REPUTATION

### 3.1 IP Reputation

**What affects IP reputation:**
- Spam complaint rates
- Bounce rates
- Engagement rates
- Sending volume consistency
- Blacklist status

**IP Warm-up Schedule (New IP):**

| Day | Volume | Notes |
|-----|--------|-------|
| 1 | 50 emails | Highly engaged users only |
| 2 | 100 emails | Engaged segment |
| 3 | 200 emails | Add more engaged |
| 4 | 400 emails | Continue expansion |
| 5 | 800 emails | Monitor closely |
| 6 | 1,500 emails | If metrics good |
| 7 | 3,000 emails | Continue pattern |
| 14 | 10,000 emails | Half volume |
| 21 | 20,000 emails | Near full |
| 28 | Full volume | If all metrics good |

**IP Warm-up Best Practices:**
- Send to most engaged subscribers first
- Monitor bounce and complaint rates daily
- Pause if complaints exceed 0.1%
- Maintain consistent sending patterns
- Avoid sudden volume spikes

---

### 3.2 Domain Reputation

**What affects domain reputation:**
- Authentication setup (SPF, DKIM, DMARC)
- Historical sending patterns
- Complaint rates
- Engagement rates
- Content quality

**Domain Reputation Tools:**
- Google Postmaster Tools
- Microsoft SNDS (Sender Network Data System)
- Talos Intelligence (Cisco)
- Sender Score (Validated)

---

### 3.3 Google Postmaster Tools

**Setup:**
1. Go to postmaster.google.com
2. Verify domain ownership (DNS record)
3. Wait 7 days for data
4. Monitor dashboard

**Metrics to Watch:**
- **Spam Rate:** Keep below 0.1%
- **IP Reputation:** Aim for "High"
- **Domain Reputation:** Aim for "High"
- **Encryption:** Should be 100% TLS
- **Authentication:** Should pass SPF, DKIM, DMARC

---

### 3.4 Blacklist Monitoring

**Common Blacklists:**
- Spamhaus (SBL, XBL, PBL)
- Barracuda
- SpamCop
- SURBL
- URIBL

**Blacklist Removal Process:**
1. Identify cause (spam complaints, honeypots, etc.)
2. Fix underlying issue
3. Request removal via blacklist website
4. Wait for processing (24-72 hours)
5. Monitor to ensure not re-listed

**Blacklist Monitoring Tools:**
- MXToolbox (free)
- MultiRBL (free)
- Sender Score
- Google Postmaster Tools

---

## 4. LIST HYGIENE BEST PRACTICES

### 4.1 List Acquisition

**DO:**
- ✅ Use double opt-in (confirmed opt-in)
- ✅ Clear consent language
- ✅ Single checkbox (not pre-checked)
- ✅ Separate consent for different types of emails
- ✅ Document consent (timestamp, IP, source)

**DON'T:**
- ❌ Buy email lists (NEVER)
- ❌ Scrape emails from websites
- ❌ Add emails without consent
- ❌ Use pre-checked boxes
- ❌ Hide consent in terms of service

**Double Opt-in Process:**
1. User submits email
2. Send confirmation email
3. User clicks confirmation link
4. Email added to active list
5. Send welcome email

**Benefits of Double Opt-in:**
- Higher quality subscribers
- Lower bounce rates
- Better engagement
- Legal compliance (GDPR)
- Reduced spam complaints

---

### 4.2 List Cleaning

**Regular Cleaning Schedule:**

| Action | Frequency |
|--------|-----------|
| Remove hard bounces | Immediately |
| Remove soft bounces (3+) | After 3 bounces |
| Process unsubscribes | Immediately |
| Process spam complaints | Immediately |
| Re-engagement campaign | Every 90 days |
| Sunset inactive subscribers | 180+ days inactive |

**Types of Bounces:**

**Hard Bounces (Permanent):**
- Invalid email address
- Domain doesn't exist
- User unknown
- **Action:** Remove immediately

**Soft Bounces (Temporary):**
- Mailbox full
- Server down
- Message too large
- **Action:** Retry 2-3 times, then remove

**Bounce Rate Thresholds:**
- Good: <2%
- Warning: 2-5%
- Critical: >5% (ESP may suspend)

---

### 4.3 Re-engagement Campaigns

**Purpose:** Win back inactive subscribers or remove them

**Target Segment:**
- No opens in 90+ days
- OR no clicks in 180+ days

**Re-engagement Flow (3 emails):**

**Email 1: "We Miss You" (Day 0)**
```
Subject: We miss you, {{ first_name }}!

Content:
- Acknowledge absence
- Highlight what's new
- Offer incentive (15-20% off)
- Clear CTA
```

**Email 2: "Last Chance" (Day 7)**
```
Subject: Your exclusive offer expires soon

Content:
- Remind of offer
- Create urgency
- Social proof
- Clear CTA
```

**Email 3: "Goodbye" (Day 14)**
```
Subject: Is this goodbye?

Content:
- Final message
- Preference center link
- Unsubscribe option
- Alternative channels (social)
```

**Post-Campaign Actions:**
- Move engagers to active segment
- Remove non-responders from main list
- Archive non-responders (don't delete - for suppression)

---

### 4.4 Suppression Lists

**Maintain These Suppression Lists:**

1. **Global Suppression**
   - Hard bounces
   - Unsubscribes
   - Spam complaints
   - Never send to these addresses again

2. **Campaign Suppression**
   - Recent purchasers (for acquisition campaigns)
   - Email fatigue (received 3+ emails in 7 days)

3. **Segment Suppression**
   - Exclude certain segments from specific campaigns
   - Example: Exclude VIPs from discount campaigns

---

### 4.5 List Segmentation for Hygiene

**Engagement-Based Segments:**

| Segment | Definition | Action |
|---------|------------|--------|
| Highly Engaged | Opened last 3 emails | Send all campaigns |
| Moderately Engaged | Opened 1-2 of last 5 | Send important campaigns |
| Low Engagement | Opened 1 of last 10 | Re-engagement campaign |
| Inactive | No opens in 90 days | Sunset flow |

**Send Frequency by Segment:**

| Segment | Frequency |
|---------|-----------|
| Highly Engaged | 3-5 emails/week |
| Moderately Engaged | 2-3 emails/week |
| Low Engagement | 1 email/week |
| Inactive | Re-engagement only |

---

## 5. CONTENT BEST PRACTICES

### 5.1 Subject Line Guidelines

**DO:**
- ✅ Keep under 50 characters (mobile)
- ✅ Personalize when relevant
- ✅ Create genuine urgency (not fake)
- ✅ Test emojis (use sparingly)
- ✅ Avoid spam trigger words

**DON'T:**
- ❌ ALL CAPS
- ❌ Excessive punctuation (!!!)
- ❌ "Free" in subject (use sparingly)
- ❌ "Act Now!" or "Buy Now!"
- ❌ Misleading claims

**Spam Trigger Words to Avoid:**
- Free
- Cash
- Bonus
- Earn money
- Risk-free
- Guaranteed
- No cost
- Act now
- Limited time
- Urgent

**Subject Line Best Practices:**
- Front-load important words
- Use numbers (specific > vague)
- Ask questions
- Create curiosity
- Match email content

---

### 5.2 Email Body Content

**Text-to-Image Ratio:**
- Aim for 60% text, 40% images
- Never send image-only emails
- Include alt text for all images

**Link Best Practices:**
- Use reputable domains
- Avoid URL shorteners (bit.ly, tinyurl)
- Don't use too many links (3-5 ideal)
- Ensure all links work

**Content Quality:**
- Valuable, relevant content
- Clear hierarchy
- Scannable (headers, bullets)
- Mobile-optimized
- Plain text version included

---

### 5.3 Technical Content Elements

**Required Elements:**
- ✅ Physical mailing address (CAN-SPAM)
- ✅ Unsubscribe link (one-click preferred)
- ✅ "Why you're receiving this" explanation
- ✅ Preference center link

**HTML Best Practices:**
- Use inline CSS
- Keep HTML under 100KB
- Use web-safe fonts
- Test across email clients
- Include plain text version

**Mobile Optimization:**
- Single column layout
- Font size 14px+ for body
- Touch-friendly buttons (44px+ height)
- Images scaled for mobile
- Subject line under 50 characters

---

## 6. INFRASTRUCTURE & TECHNICAL SETUP

### 6.1 Dedicated vs. Shared IP

**Shared IP (ESP manages):**
- Pros: No warm-up, ESP manages reputation
- Cons: Affected by other senders, less control
- Best for: <100k emails/month, new senders

**Dedicated IP (You control):**
- Pros: Full control, reputation is yours
- Cons: Requires warm-up, your reputation only
- Best for: >100k emails/month, consistent volume

---

### 6.2 Sending Domain Strategy

**Option 1: Root Domain (not recommended)**
```
From: newsletter@yourdomain.com
```
- Risk: Deliverability issues affect all email

**Option 2: Subdomain (recommended)**
```
From: newsletter@news.yourdomain.com
From: orders@shop.yourdomain.com
```
- Benefit: Isolates marketing from transactional
- Best practice: Separate subdomains by email type

**Recommended Subdomain Structure:**
- `news.yourdomain.com` - Marketing emails
- `shop.yourdomain.com` - Transactional/ecommerce
- `support.yourdomain.com` - Customer support
- `alerts.yourdomain.com` - Notifications

---

### 6.3 Feedback Loops (FBL)

**What they are:** ISPs notify you when users mark as spam

**Major FBL Programs:**
- AOL
- Yahoo
- Microsoft (Hotmail, Outlook)
- Gmail (via Postmaster Tools)

**Setup:**
1. Register with each ISP
2. Provide abuse email address
3. Monitor reports
4. Remove complainers immediately

**Best Practice:** Automate complaint processing
- Remove complainers within 24 hours
- Add to suppression list
- Investigate patterns

---

### 6.4 List-Unsubscribe Header

**What it is:** Email header that enables one-click unsubscribe

**Format:**
```
List-Unsubscribe: <mailto:unsubscribe@yourdomain.com>, <https://yourdomain.com/unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

**Benefits:**
- Better user experience
- Reduces spam complaints
- Required by Gmail for bulk senders

**Setup:** Configure in your ESP (most handle automatically)

---

## 7. MONITORING & TROUBLESHOOTING

### 7.1 Daily Monitoring Checklist

- [ ] Bounce rate (<2%)
- [ ] Spam complaint rate (<0.1%)
- [ ] Unsubscribe rate (<0.5%)
- [ ] Open rate trends
- [ ] Click rate trends
- [ ] Block rate (<1%)

### 7.2 Weekly Monitoring Checklist

- [ ] Google Postmaster Tools
- [ ] Microsoft SNDS
- [ ] Blacklist status
- [ ] Sender Score
- [ ] DMARC reports
- [ ] List growth rate

### 7.3 Troubleshooting Common Issues

**Problem: High Bounce Rate (>5%)**

**Causes:**
- Old/purchased list
- Typos in email capture
- Domain expiration

**Solutions:**
- Implement double opt-in
- Use email validation at signup
- Clean list immediately
- Remove hard bounces instantly

---

**Problem: High Spam Complaint Rate (>0.3%)**

**Causes:**
- Bought list
- Unclear consent
- Too frequent sending
- Irrelevant content
- Hard to unsubscribe

**Solutions:**
- Review acquisition sources
- Improve consent language
- Reduce send frequency
- Better segmentation
- Make unsubscribe obvious

---

**Problem: Low Inbox Placement (<85%)**

**Causes:**
- Poor authentication
- Bad sender reputation
- Spam trigger content
- Low engagement

**Solutions:**
- Verify SPF, DKIM, DMARC
- Clean list aggressively
- Review content for spam triggers
- Re-engagement campaign
- Warm-up new IP if needed

---

**Problem: Emails Going to Promotions Tab**

**Note:** This is acceptable for marketing emails!

**If Primary Inbox is Critical:**
- Increase engagement (ask replies)
- Reduce promotional language
- Send from personal-sounding address
- Encourage subscribers to move to Primary

---

### 7.4 Deliverability Audit Schedule

| Audit Type | Frequency |
|------------|-----------|
| Authentication check | Monthly |
| List hygiene review | Weekly |
| Reputation monitoring | Daily |
| Content audit | Monthly |
| Full deliverability audit | Quarterly |

---

## 8. ISP-SPECIFIC GUIDELINES

### 8.1 Gmail

**Market Share:** ~30% of email users

**Requirements:**
- SPF, DKIM, DMARC required
- One-click unsubscribe (List-Unsubscribe header)
- Spam rate <0.3% (ideally <0.1%)
- TLS encryption required

**Best Practices:**
- Use Google Postmaster Tools
- Encourage replies (signals engagement)
- Avoid promotional language for transactional
- Consistent sending volume

---

### 8.2 Microsoft (Outlook, Hotmail, Live)

**Market Share:** ~25% of email users

**Requirements:**
- SNDS enrollment recommended
- Good sender reputation
- Proper authentication

**Best Practices:**
- Monitor SNDS dashboard
- Maintain low complaint rates
- Warm up IPs gradually
- Avoid sudden volume changes

---

### 8.3 Yahoo/AOL

**Market Share:** ~5% of email users

**Requirements:**
- Feedback loop enrollment
- Strict complaint thresholds
- Proper authentication

**Best Practices:**
- Enroll in Yahoo FBL
- Process complaints within 24 hours
- Maintain consistent sending

---

### 8.4 Apple Mail

**Market Share:** ~30%+ (iOS users)

**Considerations:**
- Privacy Protection (hides opens)
- Focus on clicks and conversions
- Dark mode optimization

**Best Practices:**
- Don't rely solely on open rates
- Test dark mode rendering
- Optimize for mobile

---

## 9. COMPLIANCE

### 9.1 CAN-SPAM Act (US)

**Requirements:**
- ✅ Accurate "From" and "Subject" lines
- ✅ Identify message as advertisement
- ✅ Include physical mailing address
- ✅ Clear unsubscribe mechanism
- ✅ Honor unsubscribes within 10 days
- ✅ Monitor what others do on your behalf

**Penalties:** Up to $50,120 per violation

---

### 9.2 GDPR (EU)

**Requirements:**
- ✅ Explicit consent (opt-in)
- ✅ Clear purpose for data collection
- ✅ Easy withdrawal of consent
- ✅ Data access rights
- ✅ Right to be forgotten
- ✅ Data protection measures

**Penalties:** Up to €20 million or 4% of global revenue

**Key Differences from CAN-SPAM:**
- Opt-in required (not opt-out)
- Must document consent
- Stricter on data retention
- Broader definition of personal data

---

### 9.3 CASL (Canada)

**Requirements:**
- ✅ Express or implied consent
- ✅ Clear identification of sender
- ✅ Unsubscribe mechanism
- ✅ Consent must be documented

**Penalties:** Up to CAD $10 million for businesses

**Key Points:**
- One of the strictest laws
- Implied consent expires after 2 years
- Express consent doesn't expire (until withdrawn)

---

### 9.4 Compliance Checklist

**Before Sending:**
- [ ] Consent obtained and documented
- [ ] Physical address included
- [ ] Unsubscribe link working
- [ ] "From" name is accurate
- [ ] Subject line is not misleading
- [ ] Content matches subject line

**Ongoing:**
- [ ] Process unsubscribes within 10 days
- [ ] Honor consent preferences
- [ ] Maintain consent records
- [ ] Review third-party senders
- [ ] Update privacy policy as needed

---

## 10. DELIVERABILITY CHECKLIST

### Pre-Launch Checklist

**Authentication:**
- [ ] SPF record configured and verified
- [ ] DKIM keys generated and DNS updated
- [ ] DMARC policy set (start with p=none)
- [ ] BIMI record (optional)

**Infrastructure:**
- [ ] Dedicated subdomain for marketing
- [ ] IP warm-up plan (if dedicated IP)
- [ ] Feedback loops enrolled
- [ ] List-Unsubscribe header configured

**List Quality:**
- [ ] Double opt-in implemented
- [ ] Old lists cleaned/validated
- [ ] Suppression lists configured
- [ ] Unsubscribe process tested

**Content:**
- [ ] Physical address included
- [ ] Unsubscribe link visible
- [ ] Spam trigger words minimized
- [ ] Mobile optimization tested
- [ ] Plain text version included
- [ ] Links tested and working

**Monitoring:**
- [ ] Google Postmaster Tools set up
- [ ] Microsoft SNDS enrolled
- [ ] Blacklist monitoring configured
- [ ] DMARC reporting set up

---

### Ongoing Maintenance

**Daily:**
- [ ] Check bounce rates
- [ ] Check complaint rates
- [ ] Monitor blocks

**Weekly:**
- [ ] Review Google Postmaster Tools
- [ ] Check blacklist status
- [ ] Process suppression list updates

**Monthly:**
- [ ] Full authentication audit
- [ ] Content review for spam triggers
- [ ] DMARC report analysis
- [ ] Sender Score check

**Quarterly:**
- [ ] Full deliverability audit
- [ ] List cleaning campaign
- [ ] Re-engagement campaign
- [ ] Compliance review

---

## QUICK REFERENCE: Authentication Records

### SPF Record Example
```
Type: TXT
Host: @
Value: v=spf1 include:spf.klaviyo.com include:_spf.google.com -all
```

### DKIM Record Example
```
Type: CNAME
Host: klaviyo._domainkey
Value: klaviyo._domainkey.yourdomain.com.klaviyo.com
```

### DMARC Record Example
```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com; fo=1
```

### BIMI Record Example
```
Type: TXT
Host: default._bimi
Value: v=BIMI1; l=https://yourdomain.com/logo.svg
```

---

## RESOURCES & TOOLS

### Free Tools
- **Google Postmaster Tools** - postmaster.google.com
- **Microsoft SNDS** - sendersupport.olc.protection.outlook.com
- **MXToolbox** - mxtoolbox.com (blacklist check)
- **Mail-Tester** - mail-tester.com (content scoring)
- **Sender Score** - senderscore.org

### Paid Tools
- **Dmarcian** - dmarcian.com (DMARC management)
- **250ok** - 250ok.com (deliverability monitoring)
- **Return Path** - returnpath.com (enterprise)
- **Litmus** - litmus.com (testing)

---

*This guide should be reviewed quarterly and updated based on industry changes and ISP requirement updates.*
