# 📊 Analytics Setup Guide

## Overview

Complete analytics and tracking setup for authority sites:

1. **Google Analytics 4** (Traffic & Behavior)
2. **Google Search Console** (SEO Performance)
3. **Affiliate Tracking** (Commission Monitoring)
4. **Heatmap Tools** (User Behavior)
5. **Performance Monitoring** (Page Speed)

---

## 1️⃣ Google Analytics 4 Setup

### Step 1: Create GA4 Property

```bash
# 1. Go to analytics.google.com
# 2. Click "Admin" (gear icon)
# 3. Under Property, click "Create Property"
# 4. Enter:
#    - Business name: [Your Site Name]
#    - Industry category: [Your Niche]
#    - Reporting time zone: [Your Timezone]
# 5. Select "Website"
# 6. Enter website URL
# 7. Click "Create"
```

### Step 2: Add Tracking Code

```html
<!-- Add to <head> of every page -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Step 3: Configure Data Streams

```
Admin → Data Streams → Web Stream → Configure

Settings:
✓ Enable enhanced measurement
✓ Enable scroll tracking
✓ Enable site search tracking
✓ Enable video engagement tracking
✓ Enable outbound click tracking
✓ Enable file downloads tracking
```

### Step 4: Set Up Conversions

```
Admin → Events → Create conversion event

Key events to track:
1. affiliate_click (button clicks)
2. email_signup (form submissions)
3. product_view (product pages)
4. checkout_start (if e-commerce)
5. lead_submit (contact forms)
```

### Step 5: Create Custom Reports

```
Reports → Library → Create New Report

Report 1: Traffic Sources
- Dimension: Session default channel group
- Metric: Users, Sessions, Conversions

Report 2: Top Pages
- Dimension: Page path
- Metric: Views, Average engagement time

Report 3: Affiliate Performance
- Dimension: Event name
- Metric: Event count
- Filter: Event name = "affiliate_click"
```

---

## 2️⃣ Google Search Console Setup

### Step 1: Verify Ownership

```
1. Go to search.google.com/search-console
2. Enter domain: yoursite.com
3. Choose verification method:

Option A: HTML Tag
<head>
  <meta name="google-site-verification" content="verification_code" />
</head>

Option B: DNS Record
Add TXT record to DNS:
google-site-verification=verification_code
```

### Step 2: Submit Sitemap

```
1. Go to Sitemaps
2. Enter: sitemap.xml
3. Click Submit
```

### Step 3: Configure Settings

```
Settings → General Settings

✓ Enable preferred domain (www vs non-www)
✓ Enable mobile usability reporting
✓ Enable structured data reporting
```

### Step 4: Monitor Key Reports

**Performance Report:**
- Clicks, Impressions, CTR, Position
- Filter by page, query, country, device

**Indexing Report:**
- Pages indexed
- Excluded pages
- Sitemap status

**Enhancements:**
- Core Web Vitals
- Mobile Usability
- Rich Results

**Manual Actions:**
- Check for penalties
- Review removal requests

---

## 3️⃣ Affiliate Tracking Setup

### Method 1: PrettyLinks (WordPress)

```bash
# Install PrettyLinks plugin
# Configure settings:

Dashboard → PrettyLinks → Settings

General:
- Default domain: yoursite.com
- Link type: 301 redirect
- No-follow affiliate links: ✓

Tracking:
- Track clicks: ✓
- Track conversions: ✓
- Track geolocation: ✓
```

### Method 2: Custom Tracking Code

```html
<!-- Add to affiliate buttons -->
<a href="https://affiliate-link.com?ref=YOUR_ID" 
   onclick="trackAffiliateClick('product-name', 'button-position')">
   Check Price
</a>

<script>
function trackAffiliateClick(product, position) {
  // Send to Google Analytics
  gtag('event', 'affiliate_click', {
    'event_category': 'Affiliate',
    'event_label': product,
    'button_position': position,
    'value': 1
  });
  
  // Send to your analytics dashboard
  fetch('/api/track-affiliate', {
    method: 'POST',
    body: JSON.stringify({ product, position })
  });
}
</script>
```

### Method 3: ClickMeter Integration

```bash
# 1. Create account at clickmeter.com
# 2. Create new campaign
# 3. Generate tracking pixel

<!-- Add to site -->
<img src="https://tracking.clickmeter.com/pixel/12345" 
     style="display:none" alt="">
```

### Affiliate Tracking Dashboard

```markdown
# Affiliate Performance Dashboard

## Summary (Last 30 Days)
- Total Clicks: ___
- Click-Through Rate: ___%
- Conversions: ___
- Revenue: $___

## Top Performing Links
1. [Product Name] - ___ clicks, $___ revenue
2. [Product Name] - ___ clicks, $___ revenue
3. [Product Name] - ___ clicks, $___ revenue

## Performance by Page
- /product-review-1: ___ clicks
- /product-review-2: ___ clicks
- /comparison-guide: ___ clicks

## Performance by Source
- Organic Search: ___ clicks
- Direct: ___ clicks
- Social: ___ clicks
- Email: ___ clicks
```

---

## 4️⃣ Heatmap & User Behavior Tools

### Hotjar Setup

```bash
# 1. Create account at hotjar.com
# 2. Add tracking code:

<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid: YOUR_ID, hjsv: 6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

### Configure Heatmaps

```
Dashboard → Heatmaps → New Heatmap

Settings:
- URL: Full site or specific pages
- Sample size: 100%
- Device: All devices
- Session length: 60 seconds

Tracking:
✓ Click heatmaps
✓ Scroll maps
✓ Move heatmaps
```

### Setup Recordings

```
Dashboard → Recordings → New Recording

Settings:
- Minimum visits: 10
- Device type: All
- URL filter: /products/*, /reviews/*
- Track form interactions: ✓
- Track AJAX: ✓
```

---

## 5️⃣ Performance Monitoring

### PageSpeed Insights

```bash
# Test your site:
https://pagespeed.web.dev/

# Target scores:
✓ Mobile: 90+
✓ Desktop: 95+

# Optimization tips:
- Compress images (WebP format)
- Minify CSS/JS
- Enable caching
- Use CDN
- Reduce server response time
```

### Core Web Vitals Setup

```
Google Search Console → Core Web Vitals

Monitor:
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1
```

### GTmetrix Setup

```bash
# 1. Create account at gtmetrix.com
# 2. Add your site
# 3. Configure tests:

Test Settings:
- Location: New York (primary audience)
- Connection: Cable
- Device: Desktop + Mobile
- Run frequency: Daily

Alerts:
✓ Email when score drops below target
✓ Track improvements over time
```

---

## 6️⃣ Custom Analytics Dashboard

### Google Data Studio Setup

```bash
# 1. Go to datastudio.google.com
# 2. Create new report
# 3. Add data sources:
   - Google Analytics 4
   - Google Search Console
   - Affiliate API (if available)

# 4. Create dashboard sections:

Section 1: Traffic Overview
- Users, Sessions, Pageviews
- Traffic sources breakdown
- User demographics

Section 2: SEO Performance
- Organic clicks, impressions
- Top keywords
- Average position

Section 3: Revenue Metrics
- Affiliate revenue
- Ad revenue
- Product sales

Section 4: Content Performance
- Top pages by traffic
- Top pages by revenue
- Pages with highest engagement

Section 5: Conversion Metrics
- Email subscribers
- Affiliate clicks
- Conversion rate
```

---

## 7️⃣ Event Tracking Configuration

### Essential Events to Track

```javascript
// Google Analytics 4 Event Tracking

// 1. Affiliate Click
gtag('event', 'affiliate_click', {
  'event_category': 'Affiliate',
  'event_label': 'Solar Panel Review',
  'value': 1
});

// 2. Email Signup
gtag('event', 'email_signup', {
  'event_category': 'Lead Generation',
  'event_label': 'Newsletter Signup',
  'value': 1
});

// 3. Product View
gtag('event', 'product_view', {
  'event_category': 'Product',
  'event_label': 'Product Name',
  'value': 0
});

// 4. Download
gtag('event', 'download', {
  'event_category': 'Content',
  'event_label': 'Lead Magnet PDF',
  'value': 1
});

// 5. Scroll Depth
gtag('event', 'scroll', {
  'event_category': 'Engagement',
  'event_label': '50% Scroll',
  'value': 50
});
```

---

## 8️⃣ Privacy & Compliance

### GDPR Compliance

```html
<!-- Cookie Consent Banner -->
<div id="cookie-consent" style="display:none;">
  <p>We use cookies to improve your experience. 
  <a href="/privacy-policy">Learn more</a></p>
  <button id="accept-cookies">Accept</button>
</div>

<script>
// Show consent banner
if (!localStorage.getItem('cookie-consent')) {
  document.getElementById('cookie-consent').style.display = 'block';
}

// Handle consent
document.getElementById('accept-cookies').onclick = function() {
  localStorage.setItem('cookie-consent', 'accepted');
  document.getElementById('cookie-consent').style.display = 'none';
  // Enable tracking scripts
  enableTracking();
};
</script>
```

### CCPA Compliance

```
Privacy Policy must include:
✓ Right to know what data is collected
✓ Right to delete personal data
✓ Right to opt-out of data sales
✓ Contact information for requests
```

---

## 📊 Analytics Dashboard Template

### Weekly Report Template

```markdown
# Weekly Analytics Report
**Week of:** [Date Range]

## Traffic Overview
- Total Visitors: ___ (▲/▼ __%)
- Pageviews: ___ (▲/▼ __%)
- Average Session Duration: ___ (▲/▼ __%)
- Bounce Rate: ___% (▲/▼ __%)

## Traffic Sources
- Organic Search: ___%
- Direct: ___%
- Social: ___%
- Referral: ___%
- Email: ___%

## Top Pages
1. [Page Title] - ___ pageviews
2. [Page Title] - ___ pageviews
3. [Page Title] - ___ pageviews

## SEO Performance
- Organic Clicks: ___ (▲/▼ __%)
- Impressions: ___ (▲/▼ __%)
- Average Position: ___ (▲/▼ __)
- Top Query: [Keyword] - ___ clicks

## Affiliate Performance
- Total Clicks: ___ (▲/▼ __%)
- Conversions: ___
- Revenue: $___ (▲/▼ __%)
- Top Link: [Product] - ___ clicks

## Email List
- New Subscribers: ___
- Total Subscribers: ___
- Open Rate: ___%
- Click Rate: ___%

## Action Items
1. 
2. 
3. 
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. GA4 Not Tracking

```bash
# Check if tracking code is installed
# Use Google Tag Assistant extension

# Verify data is being sent:
Google Analytics → Realtime → Active users

# If no data:
- Check tracking code placement
- Verify property ID is correct
- Clear browser cache
- Check for ad blockers
```

#### 2. Search Console Not Indexing

```bash
# Request indexing:
Search Console → URL Inspection → Request Indexing

# Check sitemap:
Search Console → Sitemaps → Resubmit

# Review indexing report:
Search Console → Pages → Excluded pages
```

#### 3. Affiliate Links Not Tracking

```bash
# Check click tracking:
Analytics → Events → affiliate_click

# Verify tracking code is on buttons
# Check for JavaScript errors in console
# Test with multiple browsers
```

---

## 📈 Key Metrics to Monitor

### Daily
- Pageviews
- Unique visitors
- New vs returning visitors

### Weekly
- Traffic by source
- Top performing pages
- Conversion rate
- Revenue

### Monthly
- Growth trends
- SEO performance
- Affiliate ROI
- Content performance

---

*Next: Learn how to scale to 10-20 sites →*
