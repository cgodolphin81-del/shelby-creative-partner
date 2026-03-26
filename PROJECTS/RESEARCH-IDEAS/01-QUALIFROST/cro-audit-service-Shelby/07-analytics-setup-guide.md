# Analytics Setup Guide
## GA4, Heatmaps, Session Recordings & Conversion Tracking

**Version**: 1.0  
**Last Updated**: 2026-03-21  

---

## 📋 TABLE OF CONTENTS

1. Google Analytics 4 (GA4) Setup
2. Google Tag Manager (GTM) Setup
3. Conversion Event Configuration
4. Heatmap Tool Setup (Hotjar/Clarity)
5. Session Recording Configuration
6. Funnel Tracking
7. UTM Parameter Standards
8. Data Validation Checklist
9. Dashboard Templates

---

## 1. GOOGLE ANALYTICS 4 (GA4) SETUP

### Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** (gear icon, bottom left)
3. Under **Account**, select or create an account
4. Under **Property**, click **Create Property**
5. Enter property details:
   - Property Name: [Client Name] Website
   - Reporting Time Zone: [Client's timezone]
   - Currency: [Client's currency]
6. Click **Next**
7. Select business information:
   - Industry Category
   - Business Size
   - How you intend to use GA4
8. Click **Create**

### Step 2: Create Data Stream

1. In the property, click **Data Streams**
2. Click **Add Stream** → **Web**
3. Enter website URL (e.g., https://example.com)
4. Enter Stream Name (e.g., "Main Website")
5. Enable **Enhanced Measurement** (recommended)
6. Click **Create Stream**
7. Copy the **Measurement ID** (G-XXXXXXXXXX)

### Step 3: Install GA4 Tracking Code

**Option A: Direct Installation**

Add this code to the `<head>` of every page:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Option B: Google Tag Manager (Recommended)**

See Section 2 for GTM setup.

### Step 4: Configure Enhanced Measurement

In GA4 → Data Streams → [Your Stream] → Enhanced Measurement:

**Enable these events:**
- ✅ Page views
- ✅ Scrolls (90% scroll depth)
- ✅ Outbound clicks
- ✅ Site search
- ✅ File downloads
- ✅ Video engagement

**Configure as needed:**
- Scroll depth percentage (default 90%)
- Which file types to track as downloads
- Which domains count as outbound

---

## 2. GOOGLE TAG MANAGER (GTM) SETUP

### Step 1: Create GTM Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **Create Account**
3. Enter account name (usually company name)
4. Enter container name (usually website URL)
5. Select **Web** as target platform
6. Click **Create**
7. Accept terms of service
8. Copy the container code

### Step 2: Install GTM Container

Add both code snippets to every page:

**First snippet in `<head>`:**
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Second snippet after opening `<body>`:**
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### Step 3: Create GA4 Configuration Tag

1. In GTM, click **Tags** → **New**
2. Click **Tag Configuration**
3. Select **Google Tag**
4. Enter your Measurement ID (G-XXXXXXXXXX)
5. Under **Triggering**, select **All Pages**
6. Name the tag: "GA4 Configuration"
7. Click **Save**

### Step 4: Create GA4 Event Tags

For each conversion event you want to track:

1. Click **Tags** → **New**
2. Click **Tag Configuration**
3. Select **Google Analytics: GA4 Event**
4. Select your GA4 Configuration tag
5. Enter Event Name (e.g., "generate_lead")
6. Add Event Parameters as needed
7. Set up trigger (see below)
8. Name and save

### Step 5: Set Up Triggers

**Common Trigger Types:**

| Event | Trigger Type | Conditions |
|-------|--------------|------------|
| Form Submit | Form Submission | Form ID or CSS Selector |
| Button Click | Click - Just Links or All Elements | Click ID, Class, or Text |
| Page View | Page View | Page Path contains |
| Scroll Depth | Scroll Depth | Depth: 50%, 75%, 90% |
| Video Play | Video | Video provider, action |
| File Download | Click - Just Links | File extension |

**Example: Form Submit Trigger**
```
Trigger Type: Form Submission
Some Form Submissions
Form ID contains: contact-form
```

**Example: Button Click Trigger**
```
Trigger Type: Click - All Elements
Some Clicks
Click ID equals: cta-button
```

### Step 6: Test & Publish

1. Click **Preview** (top right)
2. Enter your website URL
3. Complete test actions on your site
4. Verify tags fire in GTM debug console
5. Check GA4 DebugView for events
6. When ready, click **Submit** → **Publish**

---

## 3. CONVERSION EVENT CONFIGURATION

### Recommended Events to Track

| Event Name | GA4 Event Name | When to Fire |
|------------|----------------|--------------|
| Lead Form Submit | `generate_lead` | Contact/demo form complete |
| Purchase | `purchase` | E-commerce transaction |
| Sign Up | `sign_up` | Account/trial creation |
| Download | `file_download` | Resource/whitepaper download |
| Add to Cart | `add_to_cart` | Product added to cart |
| Begin Checkout | `begin_checkout` | Checkout process started |
| Schedule | `schedule` | Calendar/demo booking |
| Contact | `contact` | Contact method clicked |
| Search | `search` | Site search performed |
| Video Play | `video_start` | Video begins playing |

### E-commerce Event Setup

For online stores, implement the full e-commerce flow:

```javascript
// View Item
gtag('event', 'view_item', {
  currency: 'USD',
  value: 29.99,
  items: [{
    item_id: 'SKU_12345',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 1
  }]
});

// Add to Cart
gtag('event', 'add_to_cart', {
  currency: 'USD',
  value: 29.99,
  items: [{
    item_id: 'SKU_12345',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 1
  }]
});

// Purchase
gtag('event', 'purchase', {
  transaction_id: 'T_12345',
  value: 29.99,
  currency: 'USD',
  items: [{
    item_id: 'SKU_12345',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 1
  }]
});
```

### Mark Events as Conversions

In GA4:
1. Go to **Admin** → **Conversions**
2. Click **New Conversion Event**
3. Enter event name (must match exactly)
4. Click **Save**

**Recommended conversion events:**
- `generate_lead`
- `purchase`
- `sign_up`
- `schedule`

---

## 4. HEATMAP TOOL SETUP

### Hotjar Setup

**Step 1: Create Site**
1. Go to [hotjar.com](https://hotjar.com)
2. Sign in/create account
3. Click **Add Site**
4. Enter site name and URL
5. Verify ownership (add meta tag or HTML file)

**Step 2: Install Tracking Code**

Add to every page, just before `</head>`:

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

**Step 3: Configure Heatmaps**
1. Go to **Heatmaps** → **New Heatmap**
2. Select page type (specific URL or pattern)
3. Set sample size (minimum 300 sessions recommended)
4. Choose device type (Desktop, Mobile, Tablet)
5. Click **Create Heatmap**

**Step 4: Configure Recordings**
1. Go to **Recordings** → **Settings**
2. Set daily capture limit (based on plan)
3. Configure exclusion rules (sensitive pages)
4. Enable text masking for privacy

---

### Microsoft Clarity Setup (Free Alternative)

**Step 1: Create Project**
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign in with Microsoft account
3. Click **Add Project**
4. Enter project name and URL
5. Accept terms

**Step 2: Install Tracking Code**

Add to every page, just after opening `<head>`:

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "XXXXXXXXXX");
</script>
```

**Step 3: Configure Settings**
1. Go to **Project Settings**
2. Set data retention period
3. Configure custom tags for segmentation
4. Enable rage click and dead click detection

---

### Crazy Egg Setup

**Step 1: Create Snapshot**
1. Go to [crazyegg.com](https://crazyegg.com)
2. Sign in/create account
3. Click **Create New Snapshot**
4. Enter page URL
5. Name your snapshot

**Step 2: Install Tracking Code**

Add to every page:

```html
<!-- Crazy Egg Tracking Code -->
<script type="text/javascript">
setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/00XX/XXXX.js?"+Math.random();
a.type="text/javascript";
a.async="true";
b.parentNode.insertBefore(a,b)}, 1);
</script>
```

**Step 3: Configure Reports**
- Heatmap: Shows click density
- Scrollmap: Shows scroll depth
- Confetti: Segmented click data
- List: Click data in table format
- Overlay: Click counts on elements

---

## 5. SESSION RECORDING CONFIGURATION

### Best Practices

**What to Record:**
- ✅ All pages (with exclusions)
- ✅ All device types
- ✅ Minimum 100-500 recordings per week

**What to Exclude:**
- ❌ Checkout/payment pages (PCI compliance)
- ❌ Account settings with sensitive data
- ❌ Thank you pages with order details
- ❌ Admin/backend areas

### Privacy Configuration

**Hotjar:**
1. Go to **Site Settings** → **Privacy**
2. Enable **Text Masking** (masks all text)
3. Add **Input Masking** for specific fields
4. Configure **IP Anonymization**

**Microsoft Clarity:**
1. Go to **Project Settings** → **Privacy**
2. Enable **Mask All Text**
3. Add **Custom CSS Selectors** to mask
4. Configure **Session Sampling** if needed

### Recording Sample Size

| Site Traffic | Recommended Daily Recordings |
|--------------|------------------------------|
| <1,000/day | 50-100 |
| 1,000-10,000/day | 100-500 |
| 10,000-50,000/day | 500-1,000 |
| 50,000+/day | 1,000-2,000 |

---

## 6. FUNNEL TRACKING

### GA4 Funnel Setup

**Step 1: Create Exploration**
1. Go to **Explore** (left sidebar)
2. Click **Blank** or **Funnel Exploration**
3. Name your funnel

**Step 2: Define Steps**
1. Under **Steps**, click **Add Step**
2. Enter step name (e.g., "Landing Page View")
3. Add condition (e.g., "Page path contains /landing")
4. Repeat for each step

**Step 3: Configure Settings**
- **Breakdowns**: Add device, traffic source, etc.
- **Segment Comparisons**: Compare user segments
- **Step Settings**: Open funnel, time between steps

**Example: Lead Gen Funnel**
```
Step 1: Landing Page View
  - Event name: page_view
  - Page path contains: /landing

Step 2: CTA Click
  - Event name: click
  - Link text contains: "Get Started"

Step 3: Form Start
  - Event name: form_start
  - Form ID: lead-form

Step 4: Form Submit
  - Event name: generate_lead
  - Form ID: lead-form
```

### Hotjar Funnel Setup

1. Go to **Funnels** → **Create Funnel**
2. Name your funnel
3. Add steps (URLs or events)
4. Set time limit between steps
5. Click **Create**

**Benefits:**
- See recordings of users who dropped off
- Filter by device, country, etc.
- Identify friction points visually

---

## 7. UTM PARAMETER STANDARDS

### UTM Parameter Format

```
?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]&utm_content=[content]&utm_term=[term]
```

### Standard Values

**utm_source** (Required)
| Value | Use Case |
|-------|----------|
| `google` | Google Ads |
| `facebook` | Facebook/Instagram Ads |
| `linkedin` | LinkedIn Ads |
| `twitter` | Twitter/X Ads |
| `newsletter` | Email newsletter |
| `blog` | Blog post |
| `partner` | Partner referral |

**utm_medium** (Required)
| Value | Use Case |
|-------|----------|
| `cpc` | Paid search |
| `cpm` | Paid display |
| `social` | Social media |
| `email` | Email marketing |
| `organic` | Organic search |
| `referral` | Referral traffic |
| `affiliate` | Affiliate marketing |

**utm_campaign** (Required)
- Use consistent naming: `product_audience_goal`
- Examples:
  - `crm_enterprise_demo`
  - `ebook_download_leadgen`
  - `blackfriday_sale_2026`

**utm_content** (Optional)
- Differentiate ads/links in same campaign
- Examples:
  - `banner_vs_text`
  - `image_a_vs_b`
  - `top_link_vs_bottom`

**utm_term** (Optional)
- Paid search keywords
- Usually auto-populated by ad platforms

### URL Builder Tools

- Google Campaign URL Builder: https://ga-dev-tools.google/campaign-url-builder/
- UTM.io: https://utm.io/
- Terminus App: https://terminusapp.net/

---

## 8. DATA VALIDATION CHECKLIST

### Pre-Launch Validation

- [ ] GA4 tracking code on all pages
- [ ] GTM container installed correctly
- [ ] GA4 Configuration tag firing
- [ ] All conversion events configured
- [ ] Triggers working correctly
- [ ] Heatmap tool installed
- [ ] Session recordings capturing
- [ ] Funnel steps defined
- [ ] UTM parameters standardized

### Testing Protocol

**Use GTM Preview Mode:**
1. Enable Preview in GTM
2. Visit your website
3. Complete test conversions
4. Verify all tags fire correctly
5. Check for errors

**Use GA4 DebugView:**
1. Enable Debug Mode (via GTM or browser extension)
2. Visit your website
3. Go to GA4 → DebugView
4. Verify events appear in real-time
5. Check event parameters

**Verify Heatmaps:**
1. Wait 24-48 hours for data
2. Check that pages are capturing
3. Verify scroll depth showing
4. Confirm clicks are recording

### Common Issues & Fixes

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| No data in GA4 | Code not installed | Verify code on all pages |
| Events not firing | Trigger misconfigured | Check trigger conditions |
| Duplicate events | Multiple tracking codes | Remove duplicate installations |
| Inaccurate funnels | Step conditions wrong | Refine page path conditions |
| No recordings | Exclusion rules too broad | Review privacy settings |
| Heatmaps empty | Not enough traffic | Increase sample size or wait |

---

## 9. DASHBOARD TEMPLATES

### GA4 Dashboard: CRO Overview

**Create in GA4 → Explore → Blank**

**Dimensions:**
- Page path
- Event name
- Device category
- Session source/medium

**Metrics:**
- Views
- Event count
- Conversions
- Conversion rate
- Total revenue

**Visualizations:**

1. **Conversion Rate by Page**
   - Type: Table
   - Rows: Page path
   - Values: Conversions, Conversion rate

2. **Traffic by Source**
   - Type: Pie chart
   - Dimension: Session source/medium
   - Metric: Sessions

3. **Device Performance**
   - Type: Bar chart
   - Dimension: Device category
   - Metric: Conversion rate

4. **Funnel Visualization**
   - Type: Funnel
   - Steps: Your conversion funnel

### Google Looker Studio Dashboard

**Create at [lookerstudio.google.com](https://lookerstudio.google.com)**

**Recommended Pages:**
1. Executive Summary
2. Traffic Overview
3. Conversion Performance
4. Page Analysis
5. Device Breakdown
6. Traffic Source Analysis
7. Funnel Performance

**Key Widgets:**
- Scorecards: Sessions, Conversions, CR, Revenue
- Time series: Trends over time
- Tables: Top pages, top sources
- Funnels: Conversion funnel visualization
- Geo map: Traffic by location

---

## 📎 APPENDIX

### GTM Container Export Template

Save your GTM container as a template for future clients:
1. GTM → Admin → Export Container
2. Save as JSON file
3. Store in your template library
4. Import and modify for new clients

### Event Naming Convention

Use consistent naming across all tools:

```
Format: [action]_[object]

Examples:
- generate_lead
- sign_up
- purchase
- add_to_cart
- begin_checkout
- file_download
- video_start
- form_submit
- button_click
- link_click
```

### Documentation Checklist

For each client, maintain:
- [ ] GA4 Property ID
- [ ] GTM Container ID
- [ ] Heatmap Tool Account
- [ ] Event tracking documentation
- [ ] Funnel definitions
- [ ] UTM naming conventions
- [ ] Dashboard links
- [ ] Access credentials (securely stored)

---

**Setup Completed By**: ________________________  
**Date**: ________________________  
**Client**: ________________________  

---

*This guide is part of the CRO Audit Service package.*
