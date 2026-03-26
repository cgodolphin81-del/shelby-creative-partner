# 04 - Lead Tracking System
## Call Tracking, Form Tracking & Analytics

You can't improve what you don't measure. This guide covers everything you need to track leads, attribute sources, and prove ROI to your rental clients.

---

## 🎯 Why Tracking Matters

| Without Tracking | With Tracking |
|------------------|---------------|
| "I think the site is working" | "The site generated 47 leads last month" |
| Can't prove value to clients | Exact ROI reports for clients |
| Don't know which keywords convert | Know exactly what's working |
| Guessing on optimization | Data-driven decisions |
| Losing money on bad traffic | Cutting waste, scaling winners |

---

## 📞 Call Tracking

### Why Call Tracking?

- **80%+ of local service leads** come via phone calls
- Need to know which site/marketing drove the call
- Record calls for quality assurance
- Forward to client seamlessly
- Prove value with exact call counts

### Top Call Tracking Providers

| Provider | Price/Mo | Numbers | Best For |
|----------|----------|---------|----------|
| **CallRail** | $45-95 | 1-5+ | Most popular, best overall |
| **CallTrackingMetrics** | $49-149 | 1-10+ | Advanced features |
| **Invoca** | $350+ | Unlimited | Enterprise |
| **WhatConverts** | $69-199 | 1-10+ | Lead-focused |
| **Ringba** | $50-200 | 1-10+ | Pay-per-call networks |

**Our Recommendation**: CallRail for most operators. Best balance of features, price, and ease of use.

### CallRail Setup Guide

#### Step 1: Account Setup

1. Sign up at callrail.com
2. Choose plan (Starter $45/mo for 3 numbers is fine to start)
3. Complete account setup
4. Add your business info

#### Step 2: Get Tracking Numbers

**Number Types:**

| Type | Use Case | Example |
|------|----------|---------|
| **Local Number** | Primary site number | (303) 555-0123 |
| **Toll-Free** | National campaigns | (888) 555-0123 |
| **Vanity** | Memorable numbers | (800) PLUMBER |

**How Many Numbers?**
- 1 per site (minimum)
- 1 per traffic source (ideal)
- 1 per landing page (advanced)

**Recommended Setup:**
```
Site 1 (Denver Plumbing):
├── Main tracking number (website)
├── Google Ads number
├── Facebook number
└── GBP number (if separate)
```

#### Step 3: Configure Number Settings

**Forwarding Setup:**
```
Tracking Number → CallRail → Forward To → Client/Your Phone
```

**Settings to Configure:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| **Recording** | Enabled | Quality assurance, training |
| **Whisper Message** | "Call from [Site Name]" | Know which site before answering |
| **Voicemail** | Enabled | Capture after-hours leads |
| **SMS** | Enabled | Text leads convert well |
| **Business Hours** | Set accurately | Route after-hours differently |
| **After-Hours** | Voicemail or alternate number | Never miss a lead |

#### Step 4: Install Tracking Code

**Dynamic Number Insertion (DNI):**

DNI shows different numbers based on traffic source.

**Installation:**
```html
<!-- Add to <head> of every page -->
<script type="text/javascript" src="https://cdn.callrail.com/companies/[YOUR_ID]/[YOUR_NUMBER]/script.js" defer></script>
```

**How DNI Works:**
```
Visitor from Google → Sees Google tracking number
Visitor from Facebook → Sees Facebook tracking number
Visitor from Direct → Sees main tracking number
```

**Elementor Integration:**
1. Go to Elementor → Settings → Advanced
2. Paste CallRail script in "Head Code"
3. Use CallRail widget for phone numbers

#### Step 5: Configure Call Flow

**Basic Call Flow:**
```
Call comes in → Ring your phone → No answer → Voicemail
```

**Advanced Call Flow:**
```
Call comes in → Ring Site 1 (business hours)
              → Ring Site 2 (after hours)
              → Voicemail (if no answer)
```

**Call Routing Options:**
- **Sequential**: Ring numbers in order
- **Simultaneous**: Ring all numbers at once
- **Time-Based**: Different numbers by time/day
- **Geographic**: Route by caller location

---

## 📋 Form Tracking

### Why Form Tracking?

- Capture leads who prefer not to call
- Get detailed lead information
- Automated follow-up sequences
- Easy to share with clients
- Track form abandonment

### Form Plugin Options

| Plugin | Price | Best For |
|--------|-------|----------|
| **WPForms** | Free/$199/yr | Most user-friendly |
| **Gravity Forms** | $59-259/yr | Advanced features |
| **Contact Form 7** | Free | Budget option |
| **Fluent Forms** | Free/$99/yr | Great value |
| **Formidable Forms** | Free/$99/yr | Complex forms |

**Our Recommendation**: WPForms Pro - easiest to use, great integrations.

### Lead Capture Form Template

**Essential Fields:**

```
□ Name (Required)
□ Phone (Required)
□ Email (Required)
□ Service Needed (Dropdown)
□ Best Time to Contact (Dropdown)
□ Message/Details (Text Area)
□ Address (Optional - for estimates)
□ How did you hear about us? (Dropdown)
```

**Form Best Practices:**

✅ **DO:**
- Keep it short (5-7 fields max)
- Make phone/email required
- Use clear labels
- Add privacy notice
- Enable spam protection
- Set up auto-responder
- Mobile-optimize

❌ **DON'T:**
- Ask for too much info
- Make fields confusing
- Skip mobile testing
- Forget thank-you page
- Ignore spam bots

### Form Integration Setup

**Connect to Email:**
```
Form Submission → Your Email
               → Client Email (if rented)
               → CRM (optional)
```

**Connect to SMS:**
```
Form Submission → SMS to You
               → SMS to Client
               → Auto-reply to Lead
```

**Auto-Responder Template:**
```
Subject: Thanks for contacting [Company Name]!

Hi [Name],

Thanks for reaching out! We've received your request for [service].

Someone from our team will contact you within [timeframe] to discuss 
your needs and schedule a [service type].

In the meantime:
📞 Call us: [Phone Number]
🌐 Visit: [Website]
⭐ Reviews: [Review Link]

Emergency? Call us immediately at [Phone Number]

Thanks,
[Company Name]
[Phone Number]
```

### Thank-You Page Setup

**After form submission, redirect to:**

```
Thank You Page (/thank-you/)

✓ "Thanks! We'll be in touch soon."
✓ Call-to-action: "Need immediate help? Call [Phone]"
✓ Trust signals: Reviews, badges, guarantees
✓ What to expect next
✓ Social media links
```

---

## 📊 Google Analytics 4 (GA4)

### Why GA4?

- Track website visitors
- See which pages convert
- Understand user behavior
- Measure traffic sources
- Prove ROI to clients

### GA4 Setup Guide

#### Step 1: Create Account

1. Go to analytics.google.com
2. Click "Get Started"
3. Create account
4. Set up property (your website)
5. Get Measurement ID (G-XXXXXXXXXX)

#### Step 2: Install Tracking Code

**Method 1: Google Site Kit (Easiest)**
1. Install "Site Kit by Google" plugin
2. Connect Google account
3. Follow setup wizard
4. Analytics automatically installed

**Method 2: Manual Installation**
```html
<!-- Add to <head> of every page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Method 3: Via Plugin**
- WPCode (free)
- Insert Headers and Footers (free)
- MonsterInsights (freemium)

#### Step 3: Configure Events

**Important Events to Track:**

| Event | Trigger | Why |
|-------|---------|-----|
| **phone_call** | Click on phone number | Track call intent |
| **form_submit** | Form submission | Track form leads |
| **email_click** | Click on email | Track email interest |
| **direction_click** | Click on maps/directions | Track visit intent |
| **chat_open** | Chat widget opened | Track chat interest |

**Event Setup (via Google Tag Manager):**

1. Install GTM on site
2. Create triggers for each action
3. Create tags for each event
4. Test and publish

**Phone Call Tracking Code:**
```javascript
// Add to phone number links
<a href="tel:3035550123" onclick="gtag('event', 'phone_call', {
  'event_category': 'Contact',
  'event_label': 'Header Phone'
});">(303) 555-0123</a>
```

#### Step 4: Set Up Conversions

**Mark Important Events as Conversions:**

1. Go to Admin → Conversions
2. Click "New Conversion Event"
3. Add event names:
   - `phone_call`
   - `form_submit`
   - `email_click`
4. Save

#### Step 5: Create Reports

**Essential Reports:**

1. **Acquisition Report**: Where traffic comes from
2. **Engagement Report**: What pages people view
3. **Conversion Report**: How many leads
4. **Real-Time Report**: Who's on site now

**Custom Report: Lead Sources**
```
Dimensions: Session source/medium, Landing page
Metrics: Conversions, Conversion rate, Total users
Filter: Conversion event = form_submit OR phone_call
```

---

## 📈 Google Search Console

### Why Search Console?

- See which keywords you rank for
- Track impressions and clicks
- Find indexing issues
- Submit sitemaps
- Monitor site health

### Setup Guide

#### Step 1: Verify Site

1. Go to search.google.com/search-console
2. Add property (your domain)
3. Verify ownership:
   - DNS record (best)
   - HTML file upload
   - Google Analytics
   - Google Tag Manager

#### Step 2: Submit Sitemap

1. Go to Sitemaps
2. Enter: `sitemap.xml`
3. Click Submit

#### Step 3: Monitor Performance

**Key Metrics:**
- **Total Clicks**: How many clicked from Google
- **Total Impressions**: How many saw you in results
- **CTR**: Click-through rate (clicks ÷ impressions)
- **Average Position**: Your average ranking

**Important Reports:**

1. **Performance**: Overall search performance
2. **Pages**: Which pages get traffic
3. **Countries**: Where traffic comes from
4. **Devices**: Mobile vs desktop
5. **Search Appearance**: Rich results, etc.

---

## 🔗 CRM & Lead Management

### Why Use a CRM?

- Never lose a lead
- Automated follow-up
- Pipeline management
- Client reporting
- Scale operations

### CRM Options

| CRM | Price/Mo | Best For |
|-----|----------|----------|
| **HubSpot** | Free/$50+ | Best free tier |
| **Pipedrive** | $15-99 | Sales-focused |
| **ActiveCampaign** | $29+ | Email automation |
| **GoHighLevel** | $97+ | All-in-one (our pick) |
| **Salesforce** | $25+ | Enterprise |

**Our Recommendation**: GoHighLevel for lead gen agencies. Includes CRM, SMS, email, funnels, and white-label reporting.

### Lead Flow Setup

```
Website Lead → CRM → Auto-Response → Notification → Follow-up Sequence
     ↓
Client Notification
     ↓
Lead Status Tracking
     ↓
Close/Won or Lost
```

### Essential CRM Fields

```
□ Name
□ Phone
□ Email
□ Service Interested In
□ Source (Website, Google, Facebook, etc.)
□ Status (New, Contacted, Qualified, Scheduled, Closed)
□ Assigned To (which client)
□ Notes
□ Follow-up Date
```

### Automated Follow-Up Sequence

**Day 0 (Immediate):**
- Auto-response email
- SMS notification to you/client

**Day 1:**
- Personal call from you/client
- Email with more info

**Day 3:**
- Follow-up call
- Email with testimonials

**Day 7:**
- Final follow-up call
- "Last chance" email

**Day 30:**
- Re-engagement email (if not closed)

---

## 📊 Client Reporting

### What Clients Want to See

1. **Total Leads**: Calls + forms
2. **Lead Source**: Where leads came from
3. **Cost Per Lead**: If running ads
4. **Conversion Rate**: Leads to customers
5. **ROI**: Revenue vs. cost

### Monthly Report Template

```
[Company Name] - Monthly Lead Report
Month: [Month Year]
Period: [Date Range]

═══════════════════════════════════════
LEAD SUMMARY
═══════════════════════════════════════

Total Leads: 47
├── Phone Calls: 35
├── Form Submissions: 12
└── Chat/Text: 0

Lead Sources:
├── Organic Search: 28 (60%)
├── Google Business Profile: 12 (25%)
├── Direct: 5 (10%)
└── Referral: 2 (5%)

═══════════════════════════════════════
TOP PERFORMING PAGES
═══════════════════════════════════════

1. Homepage - 18 leads
2. Emergency Service - 15 leads
3. [Service Page] - 8 leads
4. Contact - 6 leads

═══════════════════════════════════════
KEYWORD RANKINGS
═══════════════════════════════════════

Keyword                  | Rank | Change
─────────────────────────|──────|──────
plumber denver           | 3    | ↑ 2
emergency plumber        | 2    | ↑ 1
denver plumbing company  | 5    | ↓ 1

═══════════════════════════════════════
NEXT MONTH'S FOCUS
═══════════════════════════════════════

• Build 5 new backlinks
• Publish 2 new blog posts
• Optimize conversion rate on contact form
• Add 10 new citations

═══════════════════════════════════════
```

### Reporting Tools

| Tool | Purpose | Cost |
|------|---------|------|
| **Google Looker Studio** | Custom reports | Free |
| **GoHighLevel** | White-label reports | Included |
| **CallRail** | Call reports | Included |
| **BrightLocal** | Local SEO reports | $29/mo |
| **AgencyAnalytics** | All-in-one | $49/mo |

---

## 🔒 Compliance & Privacy

### Important Considerations

**Call Recording Laws:**
- **One-Party Consent**: 38 states - only one person needs to know
- **All-Party Consent**: 12 states - everyone must be informed
- **Solution**: Play disclosure message ("This call may be recorded...")

**States Requiring All-Party Consent:**
California, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Pennsylvania, Washington (plus others - verify current laws)

**Privacy Policy Requirements:**
- Disclose data collection
- Explain how data is used
- Include cookie policy
- Provide opt-out options
- GDPR compliance (if EU visitors)

**TCPA Compliance (Phone/SMS):**
- Get explicit consent for SMS
- Provide opt-out option
- Honor Do Not Call list
- Don't call before 8am or after 9pm

---

## 🛠️ Tracking Stack Summary

### Minimum Viable Setup ($50-100/mo)

```
✓ CallRail Starter ($45/mo) - Call tracking
✓ Google Analytics 4 (Free) - Website analytics
✓ Google Search Console (Free) - Search performance
✓ WPForms Lite (Free) - Basic forms
✓ Gmail/Email - Lead notifications
```

### Recommended Setup ($150-250/mo)

```
✓ CallRail Professional ($95/mo) - Advanced call tracking
✓ Google Analytics 4 (Free) - Website analytics
✓ Google Search Console (Free) - Search performance
✓ WPForms Pro ($199/yr) - Advanced forms
✓ GoHighLevel ($97/mo) - CRM + automation
✓ BrightLocal ($29/mo) - Citation + rank tracking
```

### Agency Setup ($500+/mo)

```
✓ CallRail Agency ($295/mo) - Unlimited numbers
✓ GoHighLevel Agency ($297/mo) - Unlimited clients
✓ AgencyAnalytics ($199/mo) - White-label reporting
✓ BrightLocal Agency ($79/mo) - Multi-location
✓ SEMrush/Ahrefs ($120/mo) - SEO tools
```

---

## 📊 Tracking Checklist

### Per Site Setup

- [ ] CallRail account created
- [ ] Tracking number purchased
- [ ] Call forwarding configured
- [ ] DNI code installed
- [ ] Call recording enabled
- [ ] Voicemail set up
- [ ] Form created and tested
- [ ] Form notifications configured
- [ ] GA4 installed
- [ ] GA4 events configured
- [ ] Conversions set up in GA4
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] CRM connected (if using)
- [ ] Auto-responder configured
- [ ] Thank-you page created
- [ ] Test all tracking (submit test lead)

---

## 🎯 Next Steps

1. Set up call tracking on your site
2. Create lead capture forms
3. Install Google Analytics 4
4. Verify Google Search Console
5. Set up basic CRM (even if just a spreadsheet)
6. Test all tracking before driving traffic
7. Move to [Monetization Guide](./05-monetization.md)

---

*"Data beats opinions. Track everything."*
