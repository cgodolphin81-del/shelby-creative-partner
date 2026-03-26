# Conversion Tracking Setup
## GA4, GTM & Enhanced Conversions Complete Guide

---

## Table of Contents
1. [Conversion Tracking Fundamentals](#1-conversion-tracking-fundamentals)
2. [Google Ads Tag Implementation](#2-google-ads-tag-implementation)
3. [Google Tag Manager Setup](#3-google-tag-manager-setup)
4. [GA4 Integration](#4-ga4-integration)
5. [Enhanced Conversions](#5-enhanced-conversions)
6. [E-commerce Tracking](#6-e-commerce-tracking)
7. [Lead Generation Tracking](#7-lead-generation-tracking)
8. [Testing & Verification](#8-testing--verification)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Conversion Tracking Fundamentals

### 1.1 Why Conversion Tracking Matters

**The Foundation of Performance Marketing:**
```
WITHOUT CONVERSION TRACKING:
✗ Flying blind on campaign performance
✗ Can't optimize for results
✗ Wasting budget on non-converters
✗ No ROAS calculation possible
✗ AI can't optimize (PMax, Smart Bidding)

WITH CONVERSION TRACKING:
✓ Measure actual business results
✓ Optimize bids for conversions
✓ Calculate true ROI/ROAS
✓ Enable AI-powered bidding
✓ Make data-driven decisions
✓ Scale what works, cut what doesn't
```

### 1.2 Conversion Types

**Primary vs. Secondary Conversions:**
```
PRIMARY CONVERSIONS:
→ Directly tied to business goals
→ Used for bidding optimization
→ Examples: Purchases, qualified leads, sign-ups
→ Include in "Conversions" column

SECONDARY CONVERSIONS:
→ Supporting actions
→ NOT used for bidding (typically)
→ Examples: Newsletter signups, page views, video views
→ Include in "All Conversions" column
→ Useful for funnel analysis

RECOMMENDATION:
→ 1-3 primary conversion actions max
→ Clear definition of what counts
→ Consistent across all campaigns
→ Regular review and cleanup
```

**Conversion Categories:**
```
E-COMMERCE:
├── Purchase (most important)
├── Add to Cart
├── Begin Checkout
├── Add Payment Info
├── Add Shipping Info
└── View Item

LEAD GENERATION:
├── Lead Form Submit
├── Phone Call (qualified)
├── Contact Form Submit
├── Quote Request
├── Demo Request
└── Consultation Booking

APP/SAAS:
├── Free Trial Start
├── Account Creation
├── Subscription Purchase
├── Feature Usage (key)
├── Upgrade/Purchase
└── Referral Sign-up

LOCAL BUSINESS:
├── Direction Request
├── Phone Call
├── Booking/Reservation
├── Store Visit (estimated)
└── Menu View
```

### 1.3 Conversion Windows

**Understanding Attribution Windows:**
```
CLICK-THROUGH CONVERSION WINDOW:
→ Time between click and conversion
→ Default: 30 days
→ Options: 1, 7, 14, 30, 60, 90 days
→ Recommendation: 30 days (most businesses)

VIEW-THROUGH CONVERSION WINDOW:
→ Time between ad view (no click) and conversion
→ Default: 30 days (Display, YouTube)
→ Cannot be changed in Google Ads
→ Important for upper-funnel campaigns

CONVERSION DELAY:
→ Time between conversion action and reporting
→ Typical: 1-3 days for full data
→ Purchases: May have longer delay
→ Consider when analyzing recent data

SETTING CONVERSION WINDOWS:

SHORT CYCLE (Impulse purchases, apps):
├── Click window: 7-14 days
├── Rationale: Quick decision
└── Examples: Food delivery, apps, low-cost items

MEDIUM CYCLE (Standard e-commerce):
├── Click window: 30 days
├── Rationale: Some consideration
└── Examples: Apparel, electronics, home goods

LONG CYCLE (High-consideration, B2B):
├── Click window: 60-90 days
├── Rationale: Extended research
└── Examples: Luxury goods, B2B services, real estate
```

### 1.4 Counting Methods

**Every vs. One Conversion:**
```
EVERY CONVERSION:
→ Count every conversion action
→ Best for: E-commerce (multiple purchases)
→ Example: Customer buys 3 times = 3 conversions
→ Use when: Each conversion has value

ONE CONVERSION:
→ Count one conversion per click
→ Best for: Lead generation
→ Example: Customer submits 3 forms = 1 conversion
→ Use when: First conversion is what matters

DECISION FRAMEWORK:

ASK YOURSELF:
1. Is each conversion valuable?
   → Yes: Use "Every"
   → No: Use "One"

2. Can customers convert multiple times?
   → Yes, and each matters: Use "Every"
   → No, first is enough: Use "One"

3. What does my business model dictate?
   → E-commerce: Every
   → Lead gen: One
   → Subscription: Every (each renewal)
   → Appointment: One (per booking)
```

---

## 2. Google Ads Tag Implementation

### 2.1 Getting Your Tag

**Retrieve Google Ads Tag:**
```
STEP-BY-STEP:

1. LOG INTO GOOGLE ADS
   → tools.google.com (or ads.google.com)

2. NAVIGATE TO CONVERSIONS
   → Tools & Settings (wrench icon)
   → Measurement
   → Conversions

3. CREATE NEW CONVERSION ACTION
   → Click + New conversion action
   → Select type:
     • Website
     • App
     • Phone calls
     • Import from GA4

4. FOR WEBSITE CONVERSIONS:
   → Select "Website"
   → Enter website URL
   → Click "Scan"
   → Or manually set up

5. GET TAG CODE
   → Choose installation method:
     • Install manually
     • Use Google Tag Manager
     • Email instructions
   → Copy tag code
```

### 2.2 Tag Structure

**Understanding the Tag:**
```
GOOGLE ADS TAG COMPONENTS:

GLOBAL SITE TAG (gtag.js):
→ Placed on ALL pages
→ Loads once per session
→ Base tracking code
→ Should be in <head> section

EVENT SNIPPET:
→ Placed on conversion page
→ Fires on specific action
→ Sends conversion data
→ Unique per conversion action

EXAMPLE - GLOBAL SITE TAG:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-CONVERSION_ID');
</script>
```

EXAMPLE - EVENT SNIPPET (Purchase):
```html
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/LABEL',
    'value': 100.00,
    'currency': 'USD',
    'transaction_id': 'ORDER123'
  });
</script>
```

TAG PARAMETERS:

REQUIRED:
├── send_to: Conversion ID + Label
├── value: Conversion value (optional but recommended)
├── currency: Currency code (USD, EUR, etc.)
└── transaction_id: Unique order ID (for e-commerce)

OPTIONAL (Enhanced Conversions):
├── email: Hashed customer email
├── phone: Hashed phone number
├── address: Hashed address data
└── first_name, last_name: Hashed names
```

### 2.3 Manual Installation

**Step-by-Step Manual Setup:**
```
STEP 1: ADD GLOBAL SITE TAG

Add to <head> section of EVERY page:
→ WordPress: header.php or via plugin
→ Shopify: theme.liquid
→ WooCommerce: header.php
→ Custom site: Master template/header

PLACEMENT EXAMPLE:
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Google Ads Tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-123456789');
  </script>
  
  <!-- Other head content -->
  <title>Your Site</title>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

STEP 2: ADD EVENT SNIPPET

Add to conversion confirmation page ONLY:
→ Order confirmation page
→ Thank you page
→ Lead submission confirmation
→ Booking confirmation

PLACEMENT EXAMPLE (Order Confirmation):
```html
<!-- Order confirmation page -->
<!DOCTYPE html>
<html>
<head>
  <!-- Global site tag already here -->
</head>
<body>
  <h1>Thank you for your order!</h1>
  <p>Order #<?php echo $order_id; ?></p>
  <p>Total: $<?php echo $order_total; ?></p>
  
  <!-- Conversion tracking -->
  <script>
    gtag('event', 'conversion', {
      'send_to': 'AW-123456789/AbCdEfGhIjKlMnOpQr',
      'value': <?php echo $order_total; ?>,
      'currency': 'USD',
      'transaction_id': '<?php echo $order_id; ?>'
    });
  </script>
</body>
</html>
```

STEP 3: VERIFY INSTALLATION

1. Visit your website
2. Open browser DevTools (F12)
3. Go to Network tab
4. Filter by "googleads"
5. Complete a test conversion
6. Verify conversion request fires
7. Check Google Ads (wait 24 hours)
```

### 2.4 Platform-Specific Installation

**WordPress:**
```
METHOD 1: GOOGLE SITE KIT PLUGIN
1. Install "Site Kit by Google" plugin
2. Connect Google Ads account
3. Enable conversion tracking
4. Select conversion actions
5. Plugin handles implementation

METHOD 2: HEADERS & FOOTERS PLUGIN
1. Install "WPCode" or "Insert Headers and Footers"
2. Add global site tag to Header
3. Add event snippet to specific page
4. Use conditional logic for thank you page

METHOD 3: WOOCOMMERCE (E-commerce)
1. Install "Kokonut Analytics" or "PixelYourSite"
2. Connect Google Ads
3. Configure conversion events
4. Map WooCommerce data
5. Test purchase flow
```

**Shopify:**
```
METHOD 1: GOOGLE & YOUTUBE APP
1. Install "Google & YouTube" app
2. Connect Google Ads account
3. Enable conversion tracking
4. App handles automatic setup

METHOD 2: MANUAL (theme.liquid)
1. Online Store → Themes → Edit code
2. Open theme.liquid
3. Add global tag before </head>
4. Add event snippet to order confirmation
5. Settings → Checkout → Additional scripts
6. Paste event snippet there

ORDER CONFIRMATION SETUP:
→ Settings → Checkout → Order processing
→ Add event snippet in "Additional scripts"
→ Use Liquid variables for dynamic values:
  {{ total_price | money_without_currency }}
  {{ order_name }}
```

**WooCommerce:**
```
RECOMMENDED: USE PLUGIN
1. Install "Kokonut Analytics for Google"
   OR "PixelYourSite"
   OR "Google Ads for WooCommerce"

2. Configure plugin:
   → Enter Conversion ID
   → Enable purchase tracking
   → Enable add to cart tracking
   → Enable checkout tracking
   → Map product data

3. Test purchase flow
4. Verify in Google Ads

MANUAL METHOD:
1. Add global tag to functions.php or header
2. Add event to thank-you page template
3. Use WooCommerce hooks for dynamic data
4. More complex, not recommended
```

**Custom/Other Platforms:**
```
GENERAL APPROACH:

1. IDENTIFY HEADER TEMPLATE
   → Find master header file
   → Add global site tag before </head>
   → Deploy to all pages

2. IDENTIFY CONVERSION PAGES
   → Thank you pages
   → Confirmation pages
   → Order completion
   → Add event snippets

3. USE DYNAMIC VALUES
   → Order total
   → Order ID
   → Currency
   → Product data

4. TEST THOROUGHLY
   → Complete test conversions
   → Verify in browser DevTools
   → Check Google Ads reporting
```

---

## 3. Google Tag Manager Setup

### 3.1 Why Use GTM

**Benefits of Google Tag Manager:**
```
ADVANTAGES:

✓ CENTRALIZED MANAGEMENT
  → All tags in one place
  → No code changes needed
  → Marketing team can manage
  → Version control built-in

✓ FLEXIBILITY
  → Easy to add/modify tags
  → Built-in templates
  → Custom JavaScript possible
  → Trigger-based firing

✓ TESTING & DEBUGGING
  → Preview mode
  → Real-time validation
  → Error identification
  → Before publishing

✓ PERFORMANCE
  → Single container load
  → Async loading
  → Reduced page impact
  → Better site speed

RECOMMENDATION:
→ Use GTM for all but simplest sites
→ Especially valuable for e-commerce
→ Essential for complex tracking
→ Industry standard approach
```

### 3.2 GTM Setup Process

**Initial GTM Setup:**
```
STEP 1: CREATE GTM ACCOUNT

1. Visit tagmanager.google.com
2. Click "Create Account"
3. Enter account name (company name)
4. Select country
5. Create container:
   → Container name: Website name
   → Target platform: Web
6. Accept terms of service
7. Get container code

STEP 2: INSTALL GTM CONTAINER

Add BOTH snippets to your website:

SNIPPET 1 (Head):
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->

SNIPPET 2 (Body - immediately after <body>):
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

STEP 3: VERIFY INSTALLATION

1. Install "Google Tag Assistant" Chrome extension
2. Visit your website
3. Check Tag Assistant shows GTM
4. Or use GTM Preview mode
5. Verify dataLayer is present
```

### 3.3 Creating Google Ads Tags in GTM

**Step-by-Step Tag Creation:**
```
STEP 1: CREATE CONVERSION LINKER

1. Tags → New
2. Tag Type: Conversion Linker
3. Triggering: All Pages
4. Save
5. Name: "Conversion Linker"

PURPOSE: Enables conversion tracking
across domains and prevents data loss

STEP 2: CREATE GOOGLE ADS CONVERSION TAG

1. Tags → New
2. Tag Type: Google Ads Conversion Tracking
3. Configure tag:
   → Conversion ID: AW-XXXXXXXXX
   → Conversion Label: AbCdEfGhIjKl
   → (Found in Google Ads conversion setup)
4. Triggering:
   → Create new trigger
   → Trigger Type: Page View
   → Trigger fires on: Some Page Views
   → Condition: Page Path contains /thank-you
   → Or: Page Path contains /order-confirmed
5. Save
6. Name: "Google Ads - Purchase"

STEP 3: ADD DYNAMIC VALUES

For e-commerce, add transaction data:

1. In tag configuration, enable:
   ✓ Conversion Value
   ✓ Currency
   ✓ Transaction ID

2. Use Data Layer Variables:
   → Conversion Value: {{DLV - transaction_total}}
   → Currency: {{DLV - currency}}
   → Transaction ID: {{DLV - transaction_id}}

3. Create Data Layer Variables:
   → Variables → New
   → Variable Type: Data Layer Variable
   → Data Layer Variable Name: transaction_total
   → Repeat for each variable

STEP 4: TEST & PUBLISH

1. Click "Preview"
2. Visit your website
3. Complete test conversion
4. Verify tag fires in GTM debug
5. Check tag shows "Tags Fired"
6. Verify data is correct
7. Submit and Publish container
```

### 3.4 E-commerce Data Layer

**Setting Up E-commerce Data Layer:**
```
DATA LAYER STRUCTURE:

PURCHASE EVENT:
```javascript
dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T12345',
    'value': 99.99,
    'currency': 'USD',
    'items': [{
      'item_id': 'SKU123',
      'item_name': 'Product Name',
      'price': 49.99,
      'quantity': 2
    }]
  }
});
```

GTM SETUP FOR E-COMMERCE:

STEP 1: ENABLE E-COMMERCE DATA LAYER
1. Variables → Configure
2. Check "E-commerce" checkbox
3. This enables built-in e-commerce variables

STEP 2: CREATE GOOGLE ADS TAG
1. Tags → New
2. Tag Type: Google Ads Conversion Tracking
3. Conversion ID: Your ID
4. Conversion Label: Your label
5. Enable conversion value
6. Use variables:
   → Value: {{Transaction Revenue}}
   → Currency: {{Currency}}
   → Transaction ID: {{Transaction ID}}
7. Trigger: Custom Event
8. Event name: purchase
9. Save and test

STEP 3: PLATFORM INTEGRATION

WORDPRESS/WOOCOMMERCE:
→ Use "Kokonut Analytics" plugin
→ Or "PixelYourSite"
→ Auto-populates data layer

SHOPIFY:
→ Use Google & YouTube app
→ Or add to checkout.liquid
→ Use Liquid variables

MAGENTO:
→ Use Google Tag Manager extension
→ Configure e-commerce events
→ Map to data layer

CUSTOM:
→ Work with developer
→ Push data layer on purchase
→ Include all required fields
```

### 3.5 Trigger Configuration

**Common Trigger Setups:**
```
PURCHASE/TRANKSACTION:
Trigger Type: Page View
Fire on: Some Page Views
Condition: Page Path contains /thank-you
OR
Trigger Type: Custom Event
Event name: purchase

LEAD FORM SUBMIT:
Trigger Type: Form Submission
Form ID: contact-form
OR
Trigger Type: Page View
Page Path: /thank-you-lead

PHONE CALL (Click-to-Call):
Trigger Type: Click - Just Links
Click URL: contains tel:
OR
Trigger Type: Click - All Elements
Click ID: phone-number

EMAIL SIGNUP:
Trigger Type: Form Submission
Form ID: newsletter-form
OR
Trigger Type: Custom Event
Event name: newsletter_signup

DOWNLOAD:
Trigger Type: Click - Just Links
Click URL: contains .pdf OR .doc OR .zip

VIDEO PLAY:
Trigger Type: YouTube Video
Video Status: Start (or Complete)

SCROLL DEPTH:
Trigger Type: Scroll Depth
Vertical Scroll Depths: 50 (or 90)
```

### 3.6 Built-in Variables

**Essential GTM Variables:**
```
ENABLE THESE VARIABLES:

PAGE VARIABLES:
✓ Page URL
✓ Page Path
✓ Page Hostname
✓ Page Title
✓ Referrer

CLICK VARIABLES:
✓ Click URL
✓ Click Text
✓ Click ID
✓ Click Classes

FORM VARIABLES:
✓ Form ID
✓ Form Classes
✓ Form Elements
✓ Form URL

E-COMMERCE VARIABLES:
✓ Transaction ID
✓ Transaction Revenue
✓ Transaction Tax
✓ Transaction Shipping
✓ Currency
✓ Items

UTILITY VARIABLES:
✓ Container ID
✓ Debug Mode
✓ Random Number
✓ Container Version
```

---

## 4. GA4 Integration

### 4.1 Linking GA4 to Google Ads

**Connection Setup:**
```
STEP 1: CREATE/IDENTIFY GA4 PROPERTY

1. analytics.google.com
2. Select or create GA4 property
3. Ensure data is flowing
4. Note Measurement ID (G-XXXXXXXX)

STEP 2: LINK TO GOOGLE ADS

1. In GA4: Admin → Google Ads Links
2. Click "Link"
3. Select Google Ads account
4. Choose personalization settings:
   ✓ Enable personalized advertising
   ✓ This enables remarketing
5. Review and submit
6. Wait for approval (usually instant)

STEP 3: ENABLE AUTO-IMPORT

1. In Google Ads: Tools → Conversions
2. Click + New conversion action
3. Select "Import"
4. Select "Google Analytics 4"
5. Choose events to import:
   → purchase
   → lead
   → sign_up
   → contact
   → etc.
6. Configure as primary/secondary
7. Set attribution model
8. Save
```

### 4.2 GA4 Conversion Events

**Setting Up GA4 Events:**
```
AUTOMATIC EVENTS (No setup needed):
├── page_view
├── scroll
├── click
├── site_search
├── video_start
├── video_progress
├── video_complete
├── file_download
└── view_search_results

RECOMMENDED EVENTS (Setup required):
├── purchase (e-commerce)
├── add_to_cart
├── begin_checkout
├── add_shipping_info
├── add_payment_info
├── sign_up
├── login
├── generate_lead
├── contact
└── schedule (appointments)

MARKING EVENTS AS CONVERSIONS:

METHOD 1: IN GA4 INTERFACE
1. GA4 → Admin → Conversions
2. Click "New conversion event"
3. Enter event name (must match exactly)
4. Save
5. Event now counts as conversion

METHOD 2: FROM EVENTS REPORT
1. GA4 → Reports → Engagement → Events
2. Find relevant event
3. Toggle "Mark as conversion"
4. Now tracked as conversion

IMPORTANT:
→ Event names are case-sensitive
→ Must match exactly what's sent
→ Allow 24-48 hours for data
→ Can mark up to 30 events as conversions
```

### 4.3 GA4 E-commerce Events

**E-commerce Event Implementation:**
```
REQUIRED E-COMMERCE EVENTS:

1. VIEW_ITEM
When: Product page viewed
```javascript
gtag('event', 'view_item', {
  currency: 'USD',
  value: 29.99,
  items: [{
    item_id: 'SKU123',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 1
  }]
});
```

2. ADD_TO_CART
When: Item added to cart
```javascript
gtag('event', 'add_to_cart', {
  currency: 'USD',
  value: 29.99,
  items: [{
    item_id: 'SKU123',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 1
  }]
});
```

3. BEGIN_CHECKOUT
When: Checkout started
```javascript
gtag('event', 'begin_checkout', {
  currency: 'USD',
  value: 59.98,
  items: [{
    item_id: 'SKU123',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 2
  }]
});
```

4. PURCHASE
When: Order completed
```javascript
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 69.97,
  currency: 'USD',
  tax: 5.99,
  shipping: 4.99,
  items: [{
    item_id: 'SKU123',
    item_name: 'Product Name',
    price: 29.99,
    quantity: 2
  }]
});
```

IMPLEMENTATION OPTIONS:

OPTION 1: GA4 DIRECT (gtag.js)
→ Add code directly to site
→ Use gtag('event', ...)
→ More technical

OPTION 2: GOOGLE TAG MANAGER
→ Use GA4 Event tag type
→ Configure event name and params
→ Trigger-based firing
→ Recommended approach

OPTION 3: E-COMMERCE PLATFORM
→ Shopify: Auto-implemented
→ WooCommerce: Via plugin
→ Magento: Via extension
→ Easiest option
```

### 4.4 GA4 to Google Ads Data Flow

**Understanding the Integration:**
```
DATA FLOW:

WEBSITE → GA4 → GOOGLE ADS

1. USER ACTION ON SITE
   → Clicks, views, purchases
   → Triggers GA4 event

2. GA4 CAPTURES EVENT
   → Event sent to GA4
   → Processed and stored
   → Available in reports

3. GOOGLE ADS IMPORTS
   → Daily import of conversions
   → 24-48 hour delay typical
   → Used for bidding/reporting

ATTRIBUTION:

GA4 ATTRIBUTION MODEL:
→ Data-driven (default)
→ Considers all touchpoints
→ Different from Google Ads

GOOGLE ADS ATTRIBUTION:
→ Data-driven (recommended)
→ Cross-channel
→ Used for bidding

IMPORTANT:
→ Attribution may differ between platforms
→ GA4 data has 24-48 hour delay
→ Google Ads may show different numbers
→ Use Google Ads for bidding decisions
→ Use GA4 for holistic analysis
```

---

## 5. Enhanced Conversions

### 5.1 What Are Enhanced Conversions?

**Overview:**
```
ENHANCED CONVERSIONS EXPLAINED:

WHAT THEY ARE:
→ First-party data sent with conversions
→ Hashed customer information
→ Improves conversion measurement
→ Works with privacy restrictions

WHAT DATA IS SENT:
├── Email address (hashed)
├── Phone number (hashed)
├── Mailing address (hashed)
├── First name (hashed)
└── Last name (hashed)

BENEFITS:
✓ More accurate conversion tracking
✓ Better measurement in cookieless world
✓ Improved bidding optimization
→ Recovers lost conversions (10-30% typical)
✓ Works across devices
✓ Privacy-safe (hashed data)

REQUIREMENTS:
→ User consent for data sharing
→ Secure data handling
→ Proper hashing (SHA-256)
→ Privacy policy disclosure
```

### 5.2 Setting Up Enhanced Conversions

**GTM Setup:**
```
STEP 1: ENABLE IN GOOGLE ADS

1. Google Ads → Tools → Conversions
2. Click on conversion action
3. Scroll to "Enhanced conversions"
4. Click "Edit"
5. Select "Use Google Tag Manager"
6. Save

STEP 2: CONFIGURE IN GTM

1. Tags → Edit your Google Ads tag
2. Check "Enable enhanced conversions"
3. Select data source:
   → Data layer (recommended)
   → User-provided data
   → GTM variables

4. Map customer data:
   → Email: {{DLV - email}}
   → Phone: {{DLV - phone}}
   → Address: {{DLV - address}}
   → First name: {{DLV - first_name}}
   → Last name: {{DLV - last_name}}

5. Save and publish

STEP 3: PUSH DATA TO DATA LAYER

On conversion page, add:
```javascript
dataLayer.push({
  'ecomm_provided_data': {
    'email': 'customer@example.com',
    'phone': '+1-555-123-4567',
    'address': {
      'street': '123 Main St',
      'city': 'Anytown',
      'state': 'CA',
      'postal_code': '12345',
      'country': 'US'
    },
    'first_name': 'John',
    'last_name': 'Doe'
  }
});
```

NOTE: GTM handles hashing automatically
DO NOT hash data before sending to GTM
```

**gtag.js Setup:**
```
MANUAL IMPLEMENTATION:

Add to conversion page:
```javascript
gtag('set', 'user_data', {
  'email': 'customer@example.com',
  'phone_number': '+1-555-123-4567',
  'address': {
    'street': '123 Main St',
    'city': 'Anytown',
    'region': 'CA',
    'postal_code': '12345',
    'country': 'US'
  },
  'first_name': 'John',
  'last_name': 'Doe'
});
```

IMPORTANT:
→ gtag.js handles hashing automatically
→ Send plain text (not pre-hashed)
→ Data must be from converting user
→ Must have user consent
```

**Platform-Specific:**
```
SHOPIFY:
1. Settings → Customer Events
2. Enable enhanced conversions
3. Shopify handles automatically
4. No code needed

WOOCOMMERCE:
1. Use "Kokonut Analytics" plugin
2. Enable enhanced conversions
3. Map customer fields
4. Plugin handles implementation

MAGENTO:
1. Use Google Ads extension
2. Enable enhanced conversions
3. Configure data mapping
4. Test thoroughly

CUSTOM:
1. Work with developer
2. Capture customer data at checkout
3. Push to data layer or gtag
4. Ensure proper consent
5. Test with real data
```

### 5.3 Privacy & Consent

**Compliance Requirements:**
```
CONSENT REQUIREMENTS:

GDPR (EU):
→ Explicit consent required
→ Must explain data use
→ Right to opt-out
→ Document consent

CCPA/CPRA (California):
→ Notice at collection
→ Right to opt-out
→ "Do Not Sell" option
→ Honor global privacy control

CONSENT MODE V2:

REQUIRED FOR EU TRAFFIC:
1. Implement consent mode
2. Respect user choices
3. Adjust tagging accordingly
4. Use CMP (Consent Management Platform)

BASIC IMPLEMENTATION:
```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});

// After consent granted:
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

PRIVACY POLICY:
→ Disclose data collection
→ Explain enhanced conversions
→ List data types collected
→ Provide opt-out mechanism
→ Update privacy policy
```

---

## 6. E-commerce Tracking

### 6.1 Complete E-commerce Setup

**Tracking All Steps:**
```
COMPLETE FUNNEL TRACKING:

1. VIEW_ITEM_LIST (Category page)
Event: view_item_list
Parameters: item_list_id, item_list_name, items[]

2. VIEW_ITEM (Product page)
Event: view_item
Parameters: currency, value, items[]

3. ADD_TO_CART
Event: add_to_cart
Parameters: currency, value, items[]

4. REMOVE_FROM_CART
Event: remove_from_cart
Parameters: currency, value, items[]

5. VIEW_CART
Event: view_cart
Parameters: currency, value, items[]

6. BEGIN_CHECKOUT
Event: begin_checkout
Parameters: currency, value, items[], coupon

7. ADD_SHIPPING_INFO
Event: add_shipping_info
Parameters: currency, value, shipping_tier, items[]

8. ADD_PAYMENT_INFO
Event: add_payment_info
Parameters: currency, value, payment_type, items[]

9. PURCHASE (Most Important)
Event: purchase
Parameters: transaction_id, value, currency, tax, shipping, items[]

10. REFUND (If applicable)
Event: refund
Parameters: transaction_id, value, currency, items[]
```

### 6.2 Purchase Event Details

**Complete Purchase Tracking:**
```
PURCHASE EVENT PARAMETERS:

REQUIRED:
├── transaction_id: Unique order ID
├── value: Total order value
├── currency: Currency code (USD, EUR, etc.)
└── items[]: Array of products

OPTIONAL BUT RECOMMENDED:
├── tax: Tax amount
├── shipping: Shipping cost
├── coupon: Coupon code used
└── affiliation: Store/affiliate name

ITEM ARRAY PARAMETERS:
├── item_id: SKU or product ID
├── item_name: Product name
├── price: Unit price
├── quantity: Quantity purchased
├── item_category: Product category
├── item_variant: Variant (size, color)
└── coupon: Item-level coupon

COMPLETE EXAMPLE:
```javascript
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 129.97,
  'currency': 'USD',
  'tax': 10.00,
  'shipping': 9.99,
  'coupon': 'SAVE10',
  'affiliation': 'Online Store',
  'items': [
    {
      'item_id': 'SKU123',
      'item_name': 'Running Shoes',
      'item_category': 'Footwear',
      'item_variant': 'Black/Size 10',
      'price': 79.99,
      'quantity': 1
    },
    {
      'item_id': 'SKU456',
      'item_name': 'Athletic Socks',
      'item_category': 'Accessories',
      'item_variant': 'White/3-Pack',
      'price': 24.99,
      'quantity': 2
    }
  ]
});
```
```

### 6.3 Platform Implementation

**Shopify:**
```
AUTOMATIC TRACKING:

1. Google & YouTube App:
   → Installs automatically
   → Tracks all e-commerce events
   → Enhanced conversions supported
   → No code needed

2. Verify Setup:
   → Complete test purchase
   → Check GA4 real-time
   → Check Google Ads (24-48 hours)
   → Verify all events firing

MANUAL ENHANCEMENTS:
→ Add custom events in theme.liquid
→ Track additional actions
→ Custom data layer pushes
→ Work with Shopify developer
```

**WooCommerce:**
```
PLUGIN OPTIONS:

1. KOKONUT ANALYTICS:
   → Full e-commerce tracking
   → Enhanced conversions
   → All funnel events
   → Easy setup

2. PIXELYOURSITE:
   → Comprehensive tracking
   → Multiple platforms
   → Advanced features
   → Good support

3. GOOGLE ADS FOR WOOCOMMERCE:
   → Official solution
   → Basic tracking
   → Free
   → Limited features

SETUP STEPS:
1. Install chosen plugin
2. Connect Google Ads account
3. Enable e-commerce tracking
4. Configure conversion actions
5. Test purchase flow
6. Verify in Google Ads
```

**Magento:**
```
EXTENSION OPTIONS:

1. GOOGLE ADS OFFICIAL EXTENSION:
   → From Magento Marketplace
   → Official support
   → Basic tracking

2. THIRD-PARTY EXTENSIONS:
   → Mageplaza
   → Amasty
   → Wyomind
   → More features

IMPLEMENTATION:
1. Install extension
2. Configure in admin panel
3. Enter Conversion ID
4. Enable e-commerce events
5. Test thoroughly
6. Monitor performance
```

**Custom E-commerce:**
```
DEVELOPER REQUIREMENTS:

1. DATA LAYER IMPLEMENTATION:
   → Push events at each funnel step
   → Include all required parameters
   → Handle dynamic values
   → Error handling

2. EVENT TRIGGERING:
   → View item: Product page load
   → Add to cart: Button click
   → Begin checkout: Checkout page
   → Purchase: Thank you page

3. TESTING:
   → Complete full purchase flow
   → Verify each event
   → Check data accuracy
   → Test edge cases

4. MONITORING:
   → Regular data quality checks
   → Monitor for broken tracking
   → Update with site changes
   → Version control
```

---

## 7. Lead Generation Tracking

### 7.1 Lead Tracking Methods

**Tracking Approaches:**
```
METHOD 1: THANK YOU PAGE (Recommended)

PROS:
✓ Most reliable
✓ Easy to implement
✓ Works with any form
✓ Clear conversion point

CONS:
✗ Requires redirect
✗ Can be bookmarked
✗ Page must load

IMPLEMENTATION:
1. Form submits → Thank you page
2. Fire conversion on page load
3. Use page path trigger
4. Pass lead value if known

METHOD 2: FORM SUBMISSION EVENT

PROS:
✓ No redirect needed
✓ Works with modals/popups
✓ Immediate tracking

CONS:
✗ More complex setup
✗ Can track incomplete submissions
✗ May need form validation

IMPLEMENTATION:
1. Track form submit event
2. Validate before firing
3. Use GTM form trigger
4. Or custom JavaScript

METHOD 3: AJAX SUBMISSION

PROS:
✓ Modern implementation
✓ No page reload
✓ Good UX

CONS:
✗ Most complex
✗ Requires developer
✗ Custom implementation

IMPLEMENTATION:
1. Listen for AJAX success
2. Push dataLayer event
3. Fire conversion tag
4. Handle errors
```

### 7.2 Lead Value Tracking

**Assigning Lead Values:**
```
WHY TRACK LEAD VALUE:

→ Enables ROAS calculation
→ Better bid optimization
→ Compare lead quality
→ Optimize for value, not just volume

METHODS TO DETERMINE VALUE:

METHOD 1: HISTORICAL CLOSE RATE
Average Deal Value: $5,000
Close Rate: 10%
Lead Value = $5,000 × 10% = $500

METHOD 2: LEAD SCORING
High-quality lead: $500
Medium-quality lead: $200
Low-quality lead: $50
→ Pass score with conversion

METHOD 3: LEAD TYPE
Demo request: $300
Contact form: $100
Newsletter: $10
→ Different values per action

METHOD 4: DYNAMIC VALUE
→ Calculate based on form inputs
→ Budget selected
→ Service tier
→ Company size
→ Pass actual estimated value

IMPLEMENTATION:
```javascript
// Static value
gtag('event', 'generate_lead', {
  'value': 100,
  'currency': 'USD'
});

// Dynamic value (from form)
gtag('event', 'generate_lead', {
  'value': formValue,
  'currency': 'USD'
});

// With lead quality
gtag('event', 'generate_lead', {
  'value': leadScore,
  'currency': 'USD',
  'lead_quality': 'high'
});
```
```

### 7.3 Phone Call Tracking

**Call Tracking Options:**
```
METHOD 1: CALL EXTENSIONS (Google Ads)

SETUP:
1. Google Ads → Assets → Call assets
2. Add phone number
3. Set schedule
4. Enable call reporting

TRACKING:
→ Calls from ads tracked automatically
→ Call duration available
→ Missed vs. answered
→ No website code needed

METHOD 2: WEBSITE CALL TRACKING

DYNAMIC NUMBER INSERTION:
1. Use call tracking service
   → CallRail
   → CallTrackingMetrics
   → Invoca
   → Google Forwarding Number

2. Replace number dynamically
   → Show unique number to ad visitors
   → Track source of call
   → Record calls (if legal)

3. Integrate with Google Ads
   → Import offline conversions
   → Connect call data
   → Optimize for calls

METHOD 3: CLICK-TO-CALL TRACKING

GTM SETUP:
1. Trigger: Click - Just Links
2. Condition: Click URL contains "tel:"
3. Fire Google Ads tag
4. Track as conversion

IMPLEMENTATION:
```javascript
// GTM Trigger Configuration
Trigger Type: Click - Just Links
Fire on: Some Clicks
Condition: Click URL contains tel:

// Google Ads Tag
Conversion action: Phone call
Value: Assign call value
Count: Every (or One)
```

CALL VALUE ASSIGNMENT:
→ Average deal value × close rate
→ Different values by call type
→ Duration-based (longer = higher value)
→ Answered vs. missed
```

### 7.4 Offline Conversion Tracking

**Importing Offline Conversions:**
```
WHAT IS OFFLINE CONVERSION TRACKING:

→ Track conversions that happen offline
→ Import back to Google Ads
→ Close the loop on lead gen
→ Optimize for actual sales

USE CASES:
├── Phone sales after lead
├── In-person appointments
├── Contract signings
├── Long sales cycles
└── CRM-based conversions

SETUP PROCESS:

STEP 1: ENABLE IN GOOGLE ADS
1. Tools → Conversions
2. Click conversion action
3. Enable "Include in Conversions"
4. Note Conversion ID

STEP 2: CAPTURE GCLICK (gclid)
1. Add hidden field to form
2. Capture gclid from URL
3. Store with lead in CRM
4. Also capture: dclid, wbraid, gbraid

JAVASCRIPT TO CAPTURE:
```javascript
function getGclid() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('gclid');
}
// Store with lead data
```

STEP 3: UPLOAD CONVERSIONS

METHOD A: MANUAL UPLOAD
1. Tools → Conversions → Uploads
2. Download template
3. Fill in conversion data
4. Upload to Google Ads
5. Wait for processing

METHOD B: API (Automated)
1. Use Google Ads API
2. Automate from CRM
3. Real-time or batch upload
4. Requires development

REQUIRED FIELDS:
├── Google Click ID (gclid)
├── Conversion name
├── Conversion time
├── Conversion value (optional)
├── Currency code (optional)
└── Order ID (optional)

BEST PRACTICES:
→ Upload within 90 days of click
→ Include value when possible
→ Track conversion status changes
→ Regular upload schedule
→ Validate before uploading
```

---

## 8. Testing & Verification

### 8.1 Testing Tools

**Essential Testing Tools:**
```
GOOGLE TAG ASSISTANT (Chrome Extension):
→ Real-time tag validation
→ Shows all tags firing
→ Error identification
→ Recording mode for flows

GTM PREVIEW MODE:
→ Built-in GTM debugging
→ See tags fire in real-time
→ Check variables and triggers
→ Before publishing

GOOGLE ADS TAG DIAGNOSTICS:
→ Tools → Conversions → Diagnostics
→ Shows tag status
→ Identifies issues
→ Recommendations

GA4 DEBUGVIEW:
→ Admin → DebugView
→ Real-time event monitoring
→ See all parameters
→ Test event flow

NETWORK TAB (Browser DevTools):
→ Filter by "google"
→ See all Google requests
→ Check payload data
→ Identify failures
```

### 8.2 Testing Checklist

**Pre-Launch Testing:**
```
COMPLETE TESTING CHECKLIST:

□ GLOBAL TAG VERIFICATION
  □ Tag present on all pages
  □ Loads correctly
  □ No console errors
  □ GTM container loads

□ CONVERSION TAG TESTING
  □ Complete test conversion
  □ Tag fires on correct page
  □ Correct conversion ID/label
  □ Dynamic values populate
  □ Transaction ID unique

□ E-COMMERCE TRACKING
  □ View item events fire
  □ Add to cart tracked
  □ Checkout steps tracked
  □ Purchase event complete
  □ All parameters correct
  □ Items array accurate
  □ Values match order

□ ENHANCED CONVERSIONS
  □ Customer data captured
  □ Data layer populated
  □ Hashing working (GTM)
  □ Consent mode working

□ GA4 INTEGRATION
  □ Events appearing in GA4
  □ Conversions marked
  □ Import to Google Ads
  □ Data matching

□ LEAD TRACKING
  □ Form submissions tracked
  □ Thank you page fires
  □ Phone calls tracked
  □ Values assigned

□ CROSS-BROWSER TESTING
  □ Chrome
  □ Firefox
  □ Safari
  □ Edge
  □ Mobile browsers

□ DEVICE TESTING
  □ Desktop
  □ Tablet
  □ Mobile
  □ Different screen sizes

□ DATA ACCURACY
  □ Values match actual
  □ Currency correct
  □ Transaction IDs unique
  □ No duplicate conversions
```

### 8.3 Common Test Scenarios

**Test Purchase Flow:**
```
E-COMMERCE TEST SCRIPT:

1. START ON HOMEPAGE
   → Verify global tag loads
   → Check Tag Assistant

2. BROWSE CATEGORY
   → Verify view_item_list event
   → Check parameters

3. VIEW PRODUCT
   → Verify view_item event
   → Check product data
   → Verify price correct

4. ADD TO CART
   → Click add to cart
   → Verify add_to_cart event
   → Check quantity and price

5. VIEW CART
   → Verify view_cart event
   → Check cart contents

6. BEGIN CHECKOUT
   → Click checkout
   → Verify begin_checkout event
   → Check total value

7. ADD SHIPPING
   → Enter shipping info
   → Verify add_shipping_info
   → Check shipping cost

8. ADD PAYMENT
   → Enter payment info
   → Verify add_payment_info

9. COMPLETE PURCHASE
   → Complete order
   → Verify purchase event
   → Check all parameters
   → Verify transaction ID unique
   → Check total value accurate
   → Verify items array complete

10. VERIFY IN GOOGLE ADS
    → Wait 24-48 hours
    → Check conversions report
    → Verify value matches
    → Check ROAS calculation
```

**Test Lead Flow:**
```
LEAD GENERATION TEST SCRIPT:

1. VISIT LANDING PAGE
   → Verify global tag
   → Check page view tracking

2. FILL OUT FORM
   → Enter test data
   → Submit form

3. VERIFY CONVERSION
   → Check thank you page loads
   → Verify conversion tag fires
   → Check conversion value
   → Verify in Tag Assistant

4. CHECK GOOGLE ADS
   → Wait 24-48 hours
   → Verify conversion recorded
   → Check in conversions report

5. TEST VARIATIONS
   → Different forms
   → Different landing pages
   → Mobile forms
   → Popup forms
```

---

## 9. Troubleshooting

### 9.1 Common Issues

**Conversions Not Recording:**
```
PROBLEM: Conversions not showing in Google Ads

DIAGNOSIS STEPS:

1. CHECK TAG INSTALLATION
   → Use Tag Assistant
   → Verify tag on thank you page
   → Check for errors
   → Verify Conversion ID correct

2. CHECK TRIGGER (GTM)
   → Preview mode
   → Does trigger fire?
   → Is condition correct?
   → Check page path

3. CHECK CONVERSION ACTION
   → Is it active?
   → Correct status?
   → Not paused?
   → Include in conversions enabled?

4. CHECK DATA DELAY
   → Allow 24-48 hours
   → Check recent vs. all time
   → Verify time zone

5. CHECK FOR DUPLICATES
   → Multiple tags firing?
   → Both gtag and GTM?
   → Remove duplicates

SOLUTIONS:
→ Fix tag placement
→ Correct trigger conditions
→ Activate conversion action
→ Wait for data processing
→ Remove duplicate tags
```

**Duplicate Conversions:**
```
PROBLEM: Same conversion counted multiple times

CAUSES:
1. Tag installed twice (gtag + GTM)
2. Multiple tags in GTM
3. Tag on wrong pages
4. Refresh on thank you page
5. Back button navigation

SOLUTIONS:

IF INSTALLED TWICE:
→ Remove one installation
→ Keep either gtag OR GTM
→ Not both

IF MULTIPLE GTM TAGS:
→ Review all tags
→ Disable duplicates
→ Use trigger conditions

IF WRONG PAGE:
→ Change trigger
→ Use specific page path
→ Add exclusions

IF REFRESH ISSUE:
→ Use "Once per session" setting
→ Implement cookie check
→ Use unique transaction ID

IF BACK BUTTON:
→ Use session-based counting
→ Implement prevention logic
→ Use "One" counting method
```

**Incorrect Values:**
```
PROBLEM: Conversion values wrong or missing

CAUSES:
1. Dynamic values not populating
2. Wrong variable in GTM
3. Data layer not set
4. Currency mismatch
5. Hardcoded wrong value

SOLUTIONS:

CHECK DATA LAYER:
→ Inspect dataLayer in console
→ Verify values present
→ Check variable names match

CHECK GTM VARIABLES:
→ Preview mode
→ Verify variable values
→ Check data layer variable names
→ Test with real data

CHECK CURRENCY:
→ Must match account currency
→ Or be converted properly
→ Use correct currency code

TEST WITH REAL DATA:
→ Don't rely on test values
→ Use actual purchase
→ Compare to order
```

**Enhanced Conversions Not Working:**
```
PROBLEM: Enhanced conversions not improving match rate

CAUSES:
1. Data not being sent
2. Hashing issues
3. Consent not granted
4. Data quality issues
5. Implementation errors

SOLUTIONS:

VERIFY DATA IS SENT:
→ Check dataLayer in console
→ Verify customer data present
→ Check GTM variables

CHECK HASHING:
→ GTM handles automatically
→ Don't pre-hash data
→ Send plain text to GTM

VERIFY CONSENT:
→ Consent mode implemented?
→ User granted consent?
→ CMP configured correctly?

CHECK DATA QUALITY:
→ Valid email format?
→ Complete phone numbers?
→ Accurate addresses?
→ No test data?

TEST IMPLEMENTATION:
→ Use real customer data
→ Check in Google Ads diagnostics
→ Verify match rate improving
```

### 9.2 Data Discrepancies

**GA4 vs. Google Ads:**
```
WHY NUMBERS DIFFER:

1. ATTRIBUTION MODELS
   → GA4: Data-driven
   → Google Ads: Data-driven (or other)
   → Different credit assignment

2. REPORTING DELAYS
   → GA4: 24-48 hours
   → Google Ads: 3-4 hours typical
   → Different processing times

3. CONVERSION WINDOWS
   → May be configured differently
   → Check settings match

4. COUNTING METHODS
   → GA4: Every event
   → Google Ads: Configurable
   → May count differently

5. FILTERS
   → GA4: Internal traffic filters
   → Google Ads: Click fraud filters
   → Different exclusions

WHICH TO TRUST:

FOR BIDDING:
→ Use Google Ads data
→ What the algorithm sees
→ Drives optimization

FOR ANALYSIS:
→ Use GA4 for holistic view
→ Cross-channel attribution
→ Full customer journey

FOR REPORTING:
→ Be transparent about source
→ Explain discrepancies
→ Use consistent source over time
```

---

## Quick Reference: Conversion Tracking Checklist

### Pre-Launch
```
□ Conversion actions created in Google Ads
□ Tags installed (gtag or GTM)
□ Triggers configured correctly
□ Dynamic values tested
□ Enhanced conversions enabled
□ GA4 linked to Google Ads
□ Conversions imported from GA4
□ Test conversions completed
□ Verified in Tag Assistant
□ Privacy/consent configured
```

### Post-Launch Verification
```
□ Conversions appearing in Google Ads
□ Values accurate
□ No duplicates
□ Enhanced conversions active
□ Match rate improving
□ Data consistent with analytics
□ ROI/ROAS calculable
□ Bidding optimizing
```

### Monthly Maintenance
```
□ Review conversion data quality
□ Check for tracking issues
□ Verify values still accurate
□ Update for site changes
□ Clean up old conversions
□ Review attribution settings
□ Test conversion flows
□ Document any changes
```

---

## Resources

- **Google Ads Tag Guide:** support.google.com/google-ads/answer/7523746
- **GTM Documentation:** developers.google.com/tag-manager
- **GA4 E-commerce:** support.google.com/analytics/answer/10094095
- **Enhanced Conversions:** support.google.com/google-ads/answer/9888656

---

*Last Updated: March 2026*
*Version: 2.1*
