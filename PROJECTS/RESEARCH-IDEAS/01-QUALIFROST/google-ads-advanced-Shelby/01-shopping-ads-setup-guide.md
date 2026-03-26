# Shopping Ads Setup Guide
## Product Feed Optimization & Merchant Center Mastery

---

## Table of Contents
1. [Google Merchant Center Setup](#1-google-merchant-center-setup)
2. [Product Feed Optimization](#2-product-feed-optimization)
3. [Feed Rules & Automation](#3-feed-rules--automation)
4. [Shopping Campaign Structure](#4-shopping-campaign-structure)
5. [Product Group Strategies](#5-product-group-strategies)
6. [Bid Optimization](#6-bid-optimization)
7. [Performance Monitoring](#7-performance-monitoring)
8. [Troubleshooting Common Issues](#8-troubleshooting-common-issues)

---

## 1. Google Merchant Center Setup

### 1.1 Account Creation & Verification

**Step-by-Step Setup:**

1. **Create Merchant Center Account**
   - Visit: merchants.google.com
   - Use the same Google account as your Google Ads
   - Select correct country and time zone

2. **Business Information**
   - Legal business name (must match website)
   - Physical address (required for verification)
   - Customer service contact details
   - Phone number (must be answerable)

3. **Website Verification**
   - HTML file upload method (recommended)
   - Google Tag Manager method
   - Google Analytics method
   - DNS record method

4. **Claim Website URL**
   - Must be verified first
   - Only one MC account can claim a URL
   - Ensures product data attribution

### 1.2 Shipping Configuration

```
Shipping Settings Template:
├── Domestic Shipping
│   ├── Standard (5-7 days): $5.99 or free over $50
│   ├── Expedited (2-3 days): $12.99
│   └── Express (1-2 days): $24.99
├── International Shipping
│   ├── Canada: $15.99 standard
│   ├── EU: $25.99 standard
│   └── Rest of World: $35.99 standard
└── Shipping Labels
    ├── Free shipping threshold rules
    ├── Weight-based calculations
    └── Price-based calculations
```

**Best Practices:**
- Offer free shipping when possible (increases CTR by 20-30%)
- Set realistic delivery times (under-promise, over-deliver)
- Configure shipping for all target countries
- Update rates quarterly or when carrier prices change

### 1.3 Tax Settings

- Configure tax settings for required regions
- US: Set up tax rules by state
- EU: Configure VAT settings
- Enable automatic tax calculation when available
- Mark products as tax-exempt if applicable

---

## 2. Product Feed Optimization

### 2.1 Required Attributes

| Attribute | Type | Example | Notes |
|-----------|------|---------|-------|
| `id` | Required | "SKU-12345" | Unique product identifier |
| `title` | Required | "Nike Air Max 270 - Men's Running Shoes" | Include brand, product type, key features |
| `description` | Required | "Comfortable running shoes with..." | 500-1000 characters, include keywords |
| `link` | Required | "https://store.com/product/123" | Direct product page URL |
| `image_link` | Required | "https://store.com/images/product.jpg" | Min 100x100px, 800x800px recommended |
| `availability` | Required | "in stock", "out of stock", "preorder" | Must be accurate and updated |
| `price` | Required | "89.99 USD" | Include currency code |
| `gtin` | Conditional | "0123456789012" | Required for branded products |
| `mpn` | Conditional | "AB1234CD" | Required if no GTIN |
| `brand` | Conditional | "Nike" | Required for branded products |
| `condition` | Required | "new", "refurbished", "used" | Default: "new" |

### 2.2 Recommended Attributes for Optimization

| Attribute | Impact | Example |
|-----------|--------|---------|
| `product_type` | High | "Apparel & Accessories > Shoes > Athletic Shoes" |
| `google_product_category` | High | "187 - Shoes" |
| `custom_label_0-4` | High | "bestseller", "high-margin", "seasonal" |
| `sale_price` | Medium | "69.99 USD" (with sale_price_effective_date) |
| `shipping_weight` | Medium | "1.5 lbs" |
| `material` | Medium | "Leather", "Cotton" |
| `pattern` | Medium | "Striped", "Solid" |
| `size` | Medium | "M", "10", "One Size" |
| `color` | Medium | "Black", "Navy Blue" |
| `age_group` | Medium | "adult", "kids", "infant" |
| `gender` | Medium | "male", "female", "unisex" |
| `multipack` | Low | "6" (for bulk items) |
| `is_bundle` | Low | "yes" (for product bundles) |

### 2.3 Title Optimization Formula

```
OPTIMAL TITLE STRUCTURE:

For Apparel:
[Brand] + [Product Type] + [Key Feature] + [Size] + [Color]
Example: "Nike Dri-FIT Running T-Shirt - Men's Large - Navy Blue"

For Electronics:
[Brand] + [Model] + [Product Type] + [Key Specs] + [Color]
Example: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones - Black"

For Home Goods:
[Brand] + [Product Type] + [Material] + [Size/Dimensions] + [Color]
Example: "KitchenAid Stand Mixer - 5 Quart - Stainless Steel - Red"
```

**Title Best Practices:**
- Front-load important keywords (first 70 characters most visible)
- Include brand name (increases CTR by 15-25%)
- Stay under 150 characters (Google may truncate)
- Use title case for readability
- Avoid ALL CAPS, excessive punctuation, or promotional text

### 2.4 Description Optimization

**Structure:**
```
PARAGRAPH 1: Product Overview (100-150 characters)
- Main benefit and use case
- Key differentiator

PARAGRAPH 2: Features & Specifications (200-300 characters)
- Technical details
- Materials and dimensions
- What's included

PARAGRAPH 3: Benefits & Use Cases (150-200 characters)
- How it solves problems
- Ideal customer/profile
- Occasions for use
```

**Keyword Integration:**
- Include primary keyword in first sentence
- Use 3-5 related keywords naturally
- Avoid keyword stuffing (hurts quality score)
- Write for humans first, algorithms second

### 2.5 Image Requirements & Optimization

**Technical Requirements:**
- Minimum: 100x100 pixels
- Recommended: 800x800 pixels or larger
- Format: JPG, PNG, GIF, BMP, TIFF
- File size: Under 16MB
- No watermarks or promotional overlays

**Best Practices:**
```
IMAGE QUALITY CHECKLIST:
☐ White or neutral background (required for Shopping)
☐ Product fills 75-90% of frame
☐ High resolution (no pixelation)
☐ Accurate color representation
☐ Multiple angles when possible
☐ Show product in use (for additional images)
☐ Include size reference if helpful
☐ No text overlays or borders
```

**Image Optimization Tips:**
- Use professional photography when possible
- Show product from multiple angles
- Include lifestyle images for additional slots
- Ensure mobile-friendly (test on small screens)
- Compress images without quality loss

---

## 3. Feed Rules & Automation

### 3.1 Creating Feed Rules

**Common Feed Rules:**

1. **Title Optimization Rule**
   ```
   IF brand EXISTS AND product_type EXISTS
   THEN title = brand + " " + product_type + " " + original_title
   ```

2. **Category Mapping Rule**
   ```
   IF custom_category CONTAINS "shoes"
   THEN google_product_category = "187 - Shoes"
   ```

3. **Custom Label Assignment**
   ```
   IF price > 100
   THEN custom_label_0 = "high-value"
   ELSE IF price > 50
   THEN custom_label_0 = "mid-value"
   ELSE
   THEN custom_label_0 = "budget"
   ```

4. **Image Enhancement Rule**
   ```
   IF image_link IS EMPTY
   THEN image_link = default_image_url
   ```

### 3.2 Scheduled Fetches

**Setup Process:**
1. Create product feed file (XML, CSV, TSV, or TXT)
2. Host on your server (must be publicly accessible)
3. In Merchant Center: Products → Feeds → Add Feed
4. Select "Scheduled fetch" as input method
5. Configure fetch schedule (daily recommended)
6. Set fetch time during low-traffic hours

**Recommended Schedule:**
- Inventory-heavy sites: Daily fetch at 3 AM local time
- Stable inventory: Weekly fetch on Sunday at 2 AM
- Sale periods: Multiple daily fetches during promotions

### 3.3 Supplemental Feeds

**Use Cases:**
- Add missing attributes without modifying main feed
- Override specific product data
- Add seasonal attributes
- Test changes before main feed update

**Example Supplemental Feed (CSV):**
```csv
id,sale_price,sale_price_effective_date,custom_label_0
SKU-12345,79.99,2024-12-01/2024-12-31,holiday-sale
SKU-12346,149.99,2024-12-01/2024-12-31,holiday-sale
SKU-12347,29.99,2024-12-01/2024-12-31,holiday-sale
```

---

## 4. Shopping Campaign Structure

### 4.1 Campaign Types

| Campaign Type | Best For | Bid Strategy |
|---------------|----------|--------------|
| Standard Shopping | Control, testing, specific products | Manual CPC, Enhanced CPC |
| Performance Max | Automation, cross-channel reach | Maximize Conversions, tROAS |
| Smart Shopping | Simplicity (being phased out) | Automated |

### 4.2 Campaign Structure Framework

```
ACCOUNT STRUCTURE:

├── Brand Campaign (Exact brand terms)
│   ├── Brand - High Margin (tROAS: 600%)
│   ├── Brand - Medium Margin (tROAS: 400%)
│   └── Brand - Low Margin (tROAS: 250%)
│
├── Non-Brand Campaign (Generic terms)
│   ├── Non-Brand - Bestsellers (tROAS: 450%)
│   ├── Non-Brand - High Margin (tROAS: 500%)
│   ├── Non-Brand - New Products (Maximize Clicks)
│   └── Non-Brand - Clearance (Target CPA)
│
├── Category Campaigns
│   ├── Category - Shoes (tROAS: 400%)
│   ├── Category - Apparel (tROAS: 350%)
│   └── Category - Accessories (tROAS: 500%)
│
└── Remarketing Campaign
    ├── Cart Abandoners (tROAS: 300%)
    ├── Past Purchasers (tROAS: 200%)
    └── Browser Remarketing (tROAS: 350%)
```

### 4.3 Campaign Settings

**Recommended Settings:**
```
CAMPAIGN CONFIGURATION:

Network: Google Search Network only (initially)
  - Uncheck: Search Partners (test separately)
  - Uncheck: YouTube, Gmail, Discover (use PMax)

Locations: Target specific countries/regions
  - Exclude: Low-performing areas
  - Consider: Radius targeting for local

Language: Customer's language (not website language)

Inventory Filter: Select specific products if needed

Priority: Set campaign priority (1-3, 3 = highest)
  - Use for: Brand vs. Non-Brand separation
  - Use for: Clearance vs. Regular pricing
```

---

## 5. Product Group Strategies

### 5.1 Subdivision Methods

**Method 1: By Product Type**
```
All Products
├── Product Type = Shoes
│   ├── Brand = Nike
│   ├── Brand = Adidas
│   └── Brand = New Balance
├── Product Type = Apparel
│   ├── Product Type = Shirts
│   └── Product Type = Pants
└── Product Type = Accessories
```

**Method 2: By Custom Labels**
```
All Products
├── Custom Label 0 = Bestseller
├── Custom Label 0 = High Margin
├── Custom Label 0 = New Arrival
└── Custom Label 0 = Clearance
```

**Method 3: By Margin Tier**
```
All Products
├── Margin > 50% (Aggressive bids)
├── Margin 30-50% (Moderate bids)
├── Margin 15-30% (Conservative bids)
└── Margin < 15% (Minimal bids or exclude)
```

**Method 4: By Performance**
```
All Products
├── ROAS > 500% (Increase budget)
├── ROAS 300-500% (Maintain)
├── ROAS 100-300% (Optimize)
└── ROAS < 100% (Pause or reduce)
```

### 5.2 Bid Adjustments by Segment

| Segment | Bid Adjustment | Rationale |
|---------|---------------|-----------|
| Bestsellers | +20-40% | Proven converters, scale winners |
| High Margin | +15-30% | More room for ad spend |
| New Products | +10-20% | Gather data, build momentum |
| Seasonal (in-season) | +25-50% | Capitalize on demand |
| Seasonal (off-season) | -50-75% | Reduce waste |
| Low Margin | -30-50% | Protect profitability |
| Poor Performers | -50-100% | Cut losses |

### 5.3 Exclusion Strategy

**Products to Exclude:**
- Out of stock items (use feed rules to auto-exclude)
- Discontinued products
- Very low margin items (<10%)
- Products with poor reviews (<3 stars)
- Items with high return rates (>15%)

**How to Exclude:**
1. Navigate to product group
2. Click "..." menu
3. Select "Exclude"
4. Or set bid to $0.00

---

## 6. Bid Optimization

### 6.1 Bid Strategy Selection

| Strategy | When to Use | Requirements |
|----------|-------------|--------------|
| Manual CPC | Testing, full control | None |
| Enhanced CPC | Transition to automated | Conversion tracking |
| Maximize Clicks | Traffic generation | Daily budget |
| Maximize Conversions | Conversion volume | 15+ conversions/month |
| Target ROAS | Profitability focus | 50+ conversions/month |
| Target CPA | Cost-per-acquisition focus | 30+ conversions/month |

### 6.2 Target ROAS Calculation

```
FORMULA: Target ROAS = (Revenue / Ad Spend) × 100

EXAMPLE CALCULATION:
- Average Order Value: $100
- Profit Margin: 40% ($40)
- Maximum Acceptable CPA: $25 (62.5% of profit)
- Target ROAS: ($100 / $25) × 100 = 400%

BREAKDOWN:
At 400% ROAS:
- $1 ad spend = $4 revenue
- $25 ad spend = $100 revenue (one sale)
- Profit after ads: $40 - $25 = $15
```

**ROAS Benchmarks by Industry:**
```
Industry                  | Good ROAS | Excellent ROAS
--------------------------|-----------|---------------
Apparel & Fashion         | 300%      | 500%+
Electronics               | 250%      | 400%+
Home & Garden             | 350%      | 550%+
Beauty & Personal Care    | 400%      | 600%+
Sports & Outdoors         | 350%      | 500%+
Toys & Games              | 300%      | 450%+
Food & Beverage           | 250%      | 400%+
```

### 6.3 Bid Adjustment Schedule

**Dayparting Adjustments:**
```
TIME OF DAY ADJUSTMENTS (E-commerce Example):

Hour        | Bid Adjustment | Reason
------------|---------------|--------
12 AM - 6 AM| -50%          | Low conversion hours
6 AM - 9 AM | +10%          | Morning commute browsing
9 AM - 12 PM| Baseline      | Standard business hours
12 PM - 2 PM| +15%          | Lunch break shopping
2 PM - 6 PM | +20%          | Afternoon peak
6 PM - 10 PM| +30%          | Evening peak (highest)
10 PM - 12 AM| -20%         | Late night decline
```

**Day of Week Adjustments:**
```
DAY OF WEEK ADJUSTMENTS:

Day         | Bid Adjustment | Reason
------------|---------------|--------
Monday      | +10%          | Post-weekend catch-up
Tuesday     | Baseline      | Standard
Wednesday   | +5%           | Mid-week peak
Thursday    | +10%          | Pre-weekend shopping
Friday      | +20%          | Weekend prep
Saturday    | +25%          | Highest traffic
Sunday      | +15%          | Strong evening traffic
```

### 6.4 Automated Rules

**Rule 1: Pause Poor Performers**
```
Condition: ROAS < 150% AND Clicks > 100 AND Conversions = 0
Action: Pause product group
Frequency: Daily at 8 AM
```

**Rule 2: Increase Bids on Winners**
```
Condition: ROAS > 600% AND Impressions > 5000 AND Conversions > 20
Action: Increase bid by 15%
Frequency: Weekly on Monday
```

**Rule 3: Budget Reallocation**
```
Condition: Campaign spent > 80% of budget AND ROAS > target
Action: Increase budget by 20%
Frequency: Daily at 3 PM
```

---

## 7. Performance Monitoring

### 7.1 Key Metrics Dashboard

| Metric | Formula | Good Benchmark | Action Threshold |
|--------|---------|----------------|------------------|
| CTR | Clicks / Impressions | 2-4% | < 1%: Optimize |
| Conversion Rate | Conversions / Clicks | 2-5% | < 1%: Investigate |
| ROAS | Revenue / Cost | 400%+ | < 250%: Adjust |
| CPA | Cost / Conversions | < 25% of AOV | > 40% of AOV: Pause |
| Impression Share | Impressions / Eligible | > 70% | < 50%: Increase bids |
| Quality Score | Google metric | 7-10 | < 5: Optimize feed |
| Click Share | Clicks / Eligible Clicks | > 30% | < 20%: Increase bids |

### 7.2 Weekly Review Checklist

```
WEEKLY SHOPPING ADS REVIEW:

□ Check disapproved products (fix within 24 hours)
□ Review search terms report (add negatives)
□ Analyze top 10 products by spend (optimize or scale)
□ Identify bottom 10 products by ROAS (pause or reduce)
□ Check impression share lost to rank (adjust bids)
□ Check impression share lost to budget (increase if ROAS good)
□ Review competitor pricing (adjust if needed)
□ Update sale prices for promotions
□ Check inventory levels (exclude out of stock)
□ Test new product titles/images
```

### 7.3 Monthly Optimization Tasks

```
MONTHLY SHOPPING ADS AUDIT:

□ Full feed health check (all attributes)
□ Image quality review (update poor images)
□ Title optimization (A/B test new formats)
□ Category structure review (reorganize if needed)
□ Bid strategy evaluation (switch if appropriate)
□ Campaign structure review (consolidate or split)
□ Negative keyword expansion
□ Landing page experience audit
□ Mobile experience check
□ Competitor analysis update
□ Seasonal preparation (next month's products)
□ Budget allocation review (shift to winners)
```

---

## 8. Troubleshooting Common Issues

### 8.1 Product Disapprovals

| Issue | Cause | Solution |
|-------|-------|----------|
| "Invalid image" | Watermark, text, wrong size | Use clean, white background images |
| "Price mismatch" | Feed price ≠ Landing page price | Sync prices, check sale_price field |
| "Availability mismatch" | Feed says in stock, page says out | Implement real-time inventory sync |
| "Invalid GTIN" | Wrong format or counterfeit | Verify GTIN with manufacturer |
| "Restricted product" | Policy violation | Review Shopping ads policies |
| "Poor image quality" | Too small, pixelated | Use 800x800px minimum |
| "Promotional text in title" | Words like "sale", "free shipping" | Remove promotional language |

### 8.2 Low Impression Share

**Diagnosis Steps:**
1. Check "Impression share lost to rank"
   - If > 50%: Increase bids or improve Quality Score
2. Check "Impression share lost to budget"
   - If > 30%: Increase budget or reduce bids on low performers
3. Check product approval status
   - Disapproved products get no impressions
4. Review search term relevance
   - Products may not match user queries

**Solutions:**
```
LOW IMPRESSION SHARE FIXES:

If Lost to Rank:
→ Increase bids by 10-20%
→ Improve product titles (more relevant keywords)
→ Enhance product descriptions
→ Add missing attributes (GTIN, brand, MPN)

If Lost to Budget:
→ Increase daily budget
→ Reduce bids on low-ROAS products
→ Pause underperforming product groups
→ Focus budget on high-margin categories

If Products Not Showing:
→ Check disapproval status
→ Verify landing page availability
→ Ensure prices are competitive
→ Check geographic targeting
```

### 8.3 High CPC, Low Conversions

**Root Cause Analysis:**
```
HIGH CPC + LOW CONVERSION DIAGNOSIS:

1. LANDING PAGE ISSUES:
   □ Page load speed > 3 seconds
   □ Mobile-unfriendly design
   □ Out of stock on landing page
   □ Price higher than competitors
   □ Poor product information
   □ Complicated checkout process

2. PRODUCT FEED ISSUES:
   □ Misleading titles
   □ Inaccurate descriptions
   □ Wrong product category
   □ Poor quality images

3. BIDDING ISSUES:
   □ Bidding too high for product type
   □ Wrong bid strategy selected
   □ No negative keywords
   □ Bidding on irrelevant queries

4. AUDIENCE ISSUES:
   □ Targeting wrong geographic areas
   □ Wrong device bid adjustments
   □ No remarketing lists
```

**Action Plan:**
1. Audit landing pages (use PageSpeed Insights)
2. Check mobile conversion rate vs. desktop
3. Review search terms report for irrelevant queries
4. Add negative keywords
5. Adjust bids by device
6. Implement remarketing campaigns
7. Test different product groupings

### 8.4 Feed Sync Issues

**Common Problems:**
- Scheduled fetch failures
- File format errors
- Encoding issues
- Server downtime during fetch

**Solutions:**
```
FEED SYNC TROUBLESHOOTING:

1. Check fetch logs in Merchant Center
2. Verify file is accessible (test URL in browser)
3. Check file encoding (UTF-8 recommended)
4. Validate feed format (use Feed Validator)
5. Ensure server has uptime during fetch window
6. Set up email notifications for fetch failures
7. Create backup manual upload process
```

---

## Quick Reference: Shopping Ads Checklist

### Pre-Launch Checklist
```
□ Merchant Center account verified
□ Website claimed and verified
□ Shipping settings configured
□ Tax settings configured
□ Product feed created with all required attributes
□ Feed uploaded and approved
□ No disapproved products
□ Google Ads account linked to Merchant Center
□ Conversion tracking implemented
□ Campaign structure planned
□ Negative keyword list prepared
□ Budget allocated
□ Bid strategy selected
□ Landing pages tested (mobile + desktop)
```

### Daily Tasks
```
□ Check for new disapprovals
□ Monitor spend vs. budget
□ Review top performers
□ Check for out-of-stock items
□ Respond to any policy warnings
```

### Weekly Tasks
```
□ Search terms analysis
□ Bid adjustments based on performance
□ Product group performance review
□ Competitor price monitoring
□ Feed optimization tests
```

### Monthly Tasks
```
□ Full account audit
□ Feed attribute optimization
□ Campaign restructuring if needed
□ Seasonal planning
□ Budget reallocation
□ Strategy review and adjustment
```

---

## Resources

- **Merchant Center Help:** support.google.com/merchants
- **Shopping Ads Policies:** support.google.com/merchants/answer/6149970
- **Feed Specifications:** support.google.com/merchants/answer/6324410
- **Product Data Quality:** support.google.com/merchants/answer/6324477

---

*Last Updated: March 2026*
*Version: 2.1*
