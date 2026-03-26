# 📱 Facebook & Google Ads Setup
## Complete Guide to Paid Advertising for E-Commerce

---

## 🎯 ADVERTISING OVERVIEW

### Platform Comparison

| Factor | Facebook/Instagram | Google Ads | TikTok |
|--------|-------------------|------------|--------|
| **Best For** | Discovery, branding | Intent, search | Gen Z, viral |
| **Avg. CPC** | $0.50-$3.00 | $1.00-$5.00 | $0.50-$2.00 |
| **Avg. ROAS** | 2-4x | 3-6x | 2-3x |
| **Learning Time** | 7-14 days | 7-14 days | 14-21 days |
| **Min. Budget** | $20/day | $10/day | $20/day |
| **Creative Focus** | Visual, lifestyle | Text, intent | Video, trends |

### Recommended Starting Strategy
```
Month 1-2: Focus on 1-2 platforms max
Month 3-4: Scale winners, test new platforms
Month 5+: Full-funnel approach across platforms
```

---

## 🔧 PIXEL & TRACKING SETUP

### Facebook/Meta Pixel Setup

#### Step 1: Create Meta Business Manager
1. Go to business.facebook.com
2. Click "Create Account"
3. Enter business name and details
4. Verify your business (recommended)

#### Step 2: Create Ad Account
1. In Business Settings, click "Ad Accounts"
2. Click "Add" → "Create a New Ad Account"
3. Set timezone and currency (cannot be changed later!)
4. Add payment method

#### Step 3: Create Pixel (Meta Pixel)
1. Go to Events Manager
2. Click "Connect Data Sources" → "Web"
3. Select "Meta Pixel"
4. Name your pixel (e.g., "[Store Name] Pixel")
5. Copy Pixel ID

#### Step 4: Install Pixel on Shopify
**Method A: Shopify Integration (Recommended)**
1. In Shopify Admin → Sales Channels → Facebook & Instagram
2. Connect Facebook account
3. Select ad account and pixel
4. Enable data sharing (Maximum recommended)
5. Complete setup

**Method B: Manual Installation**
1. In Shopify Admin → Online Store → Themes
2. Click "Edit Code"
3. Open `theme.liquid`
4. Paste pixel code before `</head>` tag
5. Add event tracking code

#### Step 5: Configure Standard Events
```javascript
// View Content (Product Pages)
fbq('track', 'ViewContent', {
  content_ids: ['{{ product.id }}'],
  content_type: 'product',
  value: {{ product.price | divided_by: 100.0 }},
  currency: '{{ shop.currency }}'
});

// Add to Cart
fbq('track', 'AddToCart', {
  content_ids: ['{{ product.id }}'],
  content_type: 'product',
  value: {{ cart.total_price | divided_by: 100.0 }},
  currency: '{{ shop.currency }}'
});

// Initiate Checkout
fbq('track', 'InitiateCheckout', {
  content_ids: ['{{ product.id }}'],
  content_type: 'product',
  value: {{ checkout.total_price | divided_by: 100.0 }},
  currency: '{{ shop.currency }}'
});

// Purchase (Thank You Page)
fbq('track', 'Purchase', {
  content_ids: ['{{ line_item.product.id }}'],
  content_type: 'product',
  value: {{ checkout.total_price | divided_by: 100.0 }},
  currency: '{{ shop.currency }}',
  num_items: {{ item_count }}
});
```

#### Step 6: Verify Domain
1. In Business Settings → Brand Safety → Domains
2. Click "Add" and enter your domain
3. Choose verification method (DNS recommended)
4. Add DNS record in your domain provider
5. Click "Verify"

#### Step 7: Configure Aggregated Event Measurement
1. Go to Events Manager
2. Select your pixel
3. Click "Aggregated Event Measurement"
4. Configure up to 8 priority events:
   - Purchase (Priority 1)
   - Initiate Checkout (Priority 2)
   - Add to Cart (Priority 3)
   - View Content (Priority 4)
   - Search (Priority 5)
   - Add Payment Info (Priority 6)
   - Add Shipping Info (Priority 7)
   - Lead/Complete Registration (Priority 8)

---

### Google Ads & Conversion Tracking

#### Step 1: Create Google Ads Account
1. Go to ads.google.com
2. Click "Start Now"
3. Create account with Google account
4. Set up billing information
5. Choose campaign goal (skip for now, we'll create properly)

#### Step 2: Link Google Analytics 4 (GA4)
1. In Google Analytics, go to Admin
2. Under Property, click "Google Ads Linking"
3. Select your Google Ads account
4. Enable auto-tagging
5. Complete linking

#### Step 3: Create Conversion Actions
1. In Google Ads → Tools & Settings → Conversions
2. Click "+ New Conversion Action"
3. Select "Website"
4. Enter your website URL
5. Choose setup method:

**Method A: Google Tag (Recommended)**
- Install base tag on all pages
- Add event snippets for specific actions

**Method B: Google Tag Manager**
- Create GTM account at tagmanager.google.com
- Install GTM container on Shopify
- Create tags for each conversion event

#### Step 4: Configure Conversion Events
```
Purchase Conversion:
- Category: Purchase
- Value: Use dynamic value
- Count: Every
- Conversion Window: 30 days
- Click-through: 30 days
- View-through: 1 day

Add to Cart:
- Category: Add to Cart
- Value: Use dynamic value
- Count: Every
- Conversion Window: 30 days

Initiate Checkout:
- Category: Checkout
- Value: Use dynamic value
- Count: Every
- Conversion Window: 30 days

View Content:
- Category: View Item
- Value: Don't include
- Count: Every
- Conversion Window: 30 days
```

#### Step 5: Install on Shopify
**Google & YouTube App (Recommended):**
1. In Shopify Admin → Sales Channels → Google
2. Connect Google account
3. Set up Merchant Center
4. Enable conversion tracking
5. Sync products

**Manual Installation:**
1. In Shopify Admin → Online Store → Preferences
2. Add Google Analytics 4 Measurement ID
3. In theme.liquid, add Google Ads conversion tracking
4. Add to thank you page for purchase tracking

---

### Google Merchant Center Setup

#### Step 1: Create Merchant Center Account
1. Go to merchants.google.com
2. Create account with Google account
3. Enter business information
4. Verify and claim website

#### Step 2: Configure Shipping Settings
1. Go to Shipping and Returns
2. Set up shipping services
3. Define shipping rates
4. Set delivery times
5. Configure return policy

#### Step 3: Set Up Tax Settings
1. Go to Tax Settings
2. Configure tax rates by region
3. Set up tax exclusions if applicable

#### Step 4: Product Feed Setup
**Using Shopify Google Channel:**
1. Products sync automatically
2. Review and fix any disapprovals
3. Optimize product titles and descriptions

**Manual Feed (Advanced):**
1. Create product feed in required format
2. Upload via scheduled fetch
3. Set up feed rules for optimization

#### Step 5: Product Approval Checklist
- [ ] Accurate product titles
- [ ] High-quality images (white background)
- [ ] Correct pricing
- [ ] Available inventory
- [ ] Valid landing pages
- [ ] Clear return policy
- [ ] Accurate shipping info

---

## 📱 FACEBOOK/INSTAGRAM ADS

### Campaign Structure

```
CAMPAIGN (Objective)
├── Ad Set 1 (Audience)
│   ├── Ad A (Creative)
│   ├── Ad B (Creative)
│   └── Ad C (Creative)
├── Ad Set 2 (Audience)
│   ├── Ad A (Creative)
│   └── Ad B (Creative)
└── Ad Set 3 (Audience)
    ├── Ad A (Creative)
    └── Ad B (Creative)
```

### Campaign Objectives

| Objective | Best For | When to Use |
|-----------|----------|-------------|
| **Sales** | Direct response, ROAS | Most e-commerce |
| **Traffic** | Site visits, awareness | New stores, content |
| **Engagement** | Post engagement | Brand building |
| **Leads** | Email capture | Lead magnets |
| **Awareness** | Brand awareness | Large budgets |

**Recommendation:** Start with **Sales** objective for e-commerce

---

### Audience Targeting

#### Advantage+ Audience (Recommended for Most)
- Let Facebook's AI find your customers
- Provide broad targeting signals
- Best for accounts with conversion data

#### Detailed Targeting Options

**Demographics:**
- Age: 25-54 (adjust for your product)
- Gender: All or specific
- Location: Countries/regions you ship to
- Language: Match your store

**Interests (Use Sparingly):**
- Related to your product category
- Competitor brands
- Relevant publications
- Complementary products

**Behaviors:**
- Engaged shoppers
- Online purchasers
- Device usage

#### Custom Audiences (High Value)

**Website Visitors:**
- All visitors (30 days)
- Product viewers (30 days)
- Add to cart (30 days)
- Initiated checkout (30 days)
- Purchasers (180 days) - for exclusions

**Customer List:**
- Upload email list
- Create lookalike audiences
- Target past purchasers

**Engagement:**
- Instagram engagers
- Facebook page engagers
- Video viewers

#### Lookalike Audiences
- **1% Lookalike:** Most similar, smaller audience
- **2-5% Lookalike:** Balance of similarity and size
- **6-10% Lookalike:** Broader reach

**Best Sources:**
1. Purchasers (180 days)
2. Add to cart (30 days)
3. Email subscribers
4. High-value customers

---

### Ad Creative Best Practices

#### Image Ads
**Specifications:**
- Size: 1080x1080px (feed), 1080x1920px (stories)
- Format: JPG or PNG
- File size: Under 30MB
- Text: Less than 20% of image

**Best Practices:**
- [ ] Show product in use (lifestyle)
- [ ] High-quality, well-lit photos
- [ ] Minimal text overlay
- [ ] Clear product focus
- [ ] Brand colors consistent
- [ ] Mobile-optimized (test on phone)

#### Video Ads
**Specifications:**
- Length: 5-15 seconds (feed), up to 60 seconds
- Format: MP4 or MOV
- Size: 1080x1080px or 1080x1920px
- File size: Under 4GB

**Best Practices:**
- [ ] Hook in first 3 seconds
- [ ] Show product benefits visually
- [ ] Add captions (85% watched without sound)
- [ ] Include CTA overlay
- [ ] Test different lengths
- [ ] Show before/after if applicable

#### Carousel Ads
**Best For:**
- Multiple products
- Product features
- Step-by-step demonstrations
- Collection showcase

**Best Practices:**
- [ ] 3-5 cards optimal
- [ ] Consistent visual style
- [ ] Tell a story across cards
- [ ] Strong CTA on last card
- [ ] Each card should work standalone

---

### Ad Copy Templates

#### Template 1: Problem-Solution
```
[HEADLINE]
Tired of [Problem]?

[PRIMARY TEXT]
We get it. [Describe problem and pain points].

That's why we created [Product] - designed to [main benefit].

✓ [Benefit 1]
✓ [Benefit 2]
✓ [Benefit 3]

Join [number]+ happy customers who've made the switch!

[CALL TO ACTION]
Shop now with free shipping!
```

#### Template 2: Social Proof
```
[HEADLINE]
⭐⭐⭐⭐⭐ "Best purchase ever!"

[PRIMARY TEXT]
Don't just take our word for it:

"[Customer testimonial]"
- [Customer name]

"[Another testimonial]"
- [Customer name]

See why [number]+ customers give us 5 stars!

[PRODUCT BENEFITS]
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

[CALL TO ACTION]
Try it risk-free for 30 days!
```

#### Template 3: Urgency/Scarcity
```
[HEADLINE]
⏰ Last Chance: 50% Off Ends Tonight!

[PRIMARY TEXT]
Our biggest sale of the year is almost over!

Get 50% off everything + free shipping

⚠️ Only [X] hours left
⚠️ Limited stock available
⚠️ No code needed - discount applied at checkout

[CALL TO ACTION]
Shop the sale before it's gone!
```

#### Template 4: New Product Launch
```
[HEADLINE]
✨ Finally Here! Introducing [Product]

[PRIMARY TEXT]
After [timeframe] of development, it's finally ready!

[Product name] is here to [main benefit/promise].

🎉 Launch Special: [Offer] for first [number] customers

[KEY FEATURES]
• [Feature 1]
• [Feature 2]
• [Feature 3]

[CALL TO ACTION]
Be the first to try it!
```

---

### Campaign Launch Checklist

#### Pre-Launch
- [ ] Pixel installed and firing correctly
- [ ] Conversion events configured
- [ ] Domain verified
- [ ] Payment method added
- [ ] Ad account settings reviewed
- [ ] Audiences created
- [ ] Creatives designed and approved
- [ ] Ad copy written and proofread
- [ ] Landing pages tested
- [ ] Tracking links tested

#### Launch Day
- [ ] Campaign budget set
- [ ] Bid strategy selected
- [ ] Schedule configured
- [ ] Ads reviewed and published
- [ ] Conversion tracking verified
- [ ] Monitor spend in first 2 hours

#### Post-Launch (Days 1-7)
- [ ] Check delivery daily
- [ ] Monitor cost per result
- [ ] Review ad-level performance
- [ ] Pause underperforming ads
- [ ] Scale winning ads
- [ ] Document learnings

---

## 🔍 GOOGLE ADS

### Campaign Types for E-Commerce

#### 1. Performance Max (Recommended)
**Best For:** Most e-commerce stores, automated optimization

**Setup:**
1. Campaign → New Campaign → Sales
2. Select Performance Max
3. Connect Merchant Center feed
4. Set budget and bids
5. Add audience signals
6. Upload creative assets

**Asset Requirements:**
- Images: 5+ (1080x1080px, 1080x1920px)
- Logos: 1+ (1200x1200px)
- Videos: 1+ (optional but recommended)
- Headlines: 5+ (30 characters)
- Descriptions: 5+ (90 characters)

---

#### 2. Shopping Campaigns
**Best For:** Product-focused advertising

**Standard Shopping:**
- More control over bids and structure
- Good for large catalogs
- Manual optimization

**Smart Shopping (being phased out for PMax):**
- Automated bidding and placement
- Less control, easier management

**Product Group Structure:**
```
Shopping Campaign
├── Product Group: Bestsellers (Bid: $2.00)
├── Product Group: High Margin (Bid: $1.50)
├── Product Group: New Arrivals (Bid: $1.00)
└── Product Group: All Other Products (Bid: $0.50)
```

---

#### 3. Search Campaigns
**Best For:** High-intent keywords, branded terms

**Campaign Structure:**
```
Search Campaign
├── Ad Group: Branded Keywords
│   ├── [brand name]
│   ├── [brand] + [product]
│   └── [brand] + [category]
├── Ad Group: Product Keywords
│   ├── [product type]
│   ├── [product] + [benefit]
│   └── [product] + [use case]
└── Ad Group: Competitor Keywords
    ├── [competitor name]
    └── [competitor] + [product]
```

**Keyword Match Types:**
- **Broad Match:** [shoes] - widest reach, less control
- **Phrase Match:** "running shoes" - moderate reach
- **Exact Match:** [running shoes] - most control, lowest reach
- **Negative Keywords:** Exclude irrelevant searches

**Recommended:** Start with phrase and exact match

---

#### 4. Display Campaigns
**Best For:** Remarketing, brand awareness

**Audience Targeting:**
- Website visitors (remarketing)
- Customer match (email list)
- Similar audiences
- Interest-based targeting
- Demographic targeting

**Ad Formats:**
- Responsive display ads (recommended)
- Uploaded image ads
- Gmail ads

---

### Bidding Strategies

#### Manual CPC
- You set maximum cost per click
- Most control
- Best for: Learning phase, small budgets

#### Enhanced CPC (ECPC)
- Automatic adjustments based on conversion likelihood
- Good balance of control and automation
- Best for: Most campaigns

#### Maximize Conversions
- Google optimizes for most conversions
- No target CPA
- Best for: Sufficient conversion data (30+/month)

#### Target CPA
- Set target cost per acquisition
- Google optimizes to hit target
- Best for: Consistent conversion volume

#### Target ROAS
- Set target return on ad spend
- Google optimizes for revenue
- Best for: E-commerce with good tracking

**Recommended Progression:**
```
Week 1-2: Manual CPC or ECPC (gather data)
Week 3-4: Maximize Conversions (if 30+ conversions)
Month 2+: Target ROAS (optimize for profitability)
```

---

### Ad Copy Best Practices

#### Responsive Search Ads (RSA)
**Headlines (15 max, 30 characters each):**
- Include keywords
- Highlight unique value props
- Add social proof
- Create urgency
- Use numbers and specifics

**Example Headlines:**
```
Free Shipping Over $50
4.9 Stars from 10,000+ Customers
Shop [Product] - 50% Off Today
30-Day Money-Back Guarantee
Best [Product] of 2026
Limited Stock - Order Now
[Brand] Official Store
New Arrivals Just Dropped
```

**Descriptions (4 max, 90 characters each):**
```
Shop our collection of [products]. Free shipping on orders over $50. 
30-day returns.

Rated 4.9 stars by 10,000+ customers. See why everyone loves [product]!

Limited time offer: 50% off everything + free shipping. Shop now!

Quality [products] at affordable prices. Fast shipping. Easy returns.
```

---

### Google Ads Campaign Checklist

#### Pre-Launch
- [ ] Conversion tracking verified
- [ ] Merchant Center linked and approved
- [ ] Product feed optimized
- [ ] Keyword research completed
- [ ] Negative keyword list created
- [ ] Ad copy written (multiple variations)
- [ ] Landing pages optimized
- [ ] Budget determined
- [ ] Bidding strategy selected

#### Launch
- [ ] Campaign settings reviewed
- [ ] Ad groups structured logically
- [ ] Keywords added with correct match types
- [ ] Ads approved and running
- [ ] Tracking verified in real-time
- [ ] Initial bids set

#### Optimization (Weekly)
- [ ] Review search terms report
- [ ] Add negative keywords
- [ ] Pause underperforming keywords
- [ ] Test new ad copy
- [ ] Adjust bids based on performance
- [ ] Check quality scores
- [ ] Review competitor activity

---

## 📊 BUDGET ALLOCATION

### Starting Budget Recommendations

| Business Stage | Daily Budget | Monthly Budget | Focus |
|---------------|--------------|----------------|-------|
| **Testing** | $20-50 | $600-1,500 | Learning, data gathering |
| **Growing** | $50-200 | $1,500-6,000 | Scaling winners |
| **Scaling** | $200-1,000+ | $6,000-30,000+ | Full funnel |

### Platform Allocation (Starting)
```
Facebook/Instagram: 60-70%
Google Ads: 30-40%
Other (TikTok, Pinterest): 0-10%
```

### Campaign Allocation (Facebook)
```
Prospecting (Cold): 60-70%
Retargeting (Warm): 20-30%
Customer Retention: 10%
```

### Campaign Allocation (Google)
```
Performance Max/Shopping: 60-70%
Search (Branded): 10-15%
Search (Non-Branded): 15-20%
Display/Remarketing: 5-10%
```

---

## 📈 OPTIMIZATION STRATEGIES

### Week 1-2: Learning Phase
**Focus:** Gather data, don't over-optimize

**Actions:**
- [ ] Let campaigns run with minimal changes
- [ ] Monitor delivery and spend
- [ ] Check tracking is working
- [ ] Document initial performance
- [ ] Note any disapproved ads

**Don't:**
- ❌ Make major changes daily
- ❌ Pause ads too quickly
- ❌ Change budgets significantly
- ❌ Expect profitability immediately

---

### Week 3-4: Initial Optimization
**Focus:** Identify winners and losers

**Actions:**
- [ ] Pause ads with CPA 2x+ above target
- [ ] Increase budget on winning ads (+20%)
- [ ] Test new creatives for winners
- [ ] Review audience performance
- [ ] Add negative keywords (Google)
- [ ] Refine targeting based on data

**Metrics to Evaluate:**
- Cost per Purchase (CPA)
- Return on Ad Spend (ROAS)
- Click-Through Rate (CTR)
- Conversion Rate (CVR)
- Cost per Click (CPC)

---

### Month 2+: Scaling
**Focus:** Scale what works, test new angles

**Scaling Strategies:**

**Vertical Scaling (Increase Budget):**
- Increase budget 20% every 2-3 days
- Monitor performance closely
- Stop if performance drops significantly

**Horizontal Scaling (New Audiences/Creatives):**
- Test new audience segments
- Launch new creative variations
- Expand to new placements
- Test new campaign types

**Creative Refresh:**
- New creatives every 2-4 weeks
- Test different hooks and angles
- Seasonal creative updates
- UGC integration

---

## 🔍 TROUBLESHOOTING

### Common Issues & Solutions

**Issue: Ads Not Delivering**
- Check budget (may be too low)
- Review audience size (may be too narrow)
- Check bid competitiveness
- Review ad approval status
- Verify payment method

**Issue: High CPC**
- Improve Quality Score (Google)
- Increase ad relevance
- Improve landing page experience
- Test different audiences
- Adjust bid strategy

**Issue: Low CTR**
- Test new ad creative
- Improve ad copy
- Refine targeting
- Add urgency/benefits
- Review placement performance

**Issue: High CPA**
- Review landing page experience
- Check tracking accuracy
- Refine audience targeting
- Test different offers
- Improve ad-to-landing page relevance

**Issue: Low ROAS**
- Increase AOV (bundles, upsells)
- Improve conversion rate
- Refine targeting to high-value customers
- Adjust bidding strategy
- Review product margins

---

## 📊 REPORTING TEMPLATE

### Weekly Performance Report

```markdown
## Paid Ads Report: [Week of Date]

### Overall Performance
| Metric | This Week | Last Week | Change |
|--------|-----------|-----------|--------|
| Spend | $___ | $___ | ___% |
| Revenue | $___ | $___ | ___% |
| ROAS | ___ | ___ | ___ |
| Conversions | ___ | ___ | ___% |
| CPA | $___ | $___ | ___% |
| CTR | ___% | ___% | ___ |

### Facebook/Instagram
| Campaign | Spend | Revenue | ROAS | CPA |
|----------|-------|---------|------|-----|
| [Campaign 1] | $___ | $___ | ___ | $___ |
| [Campaign 2] | $___ | $___ | ___ | $___ |

### Google Ads
| Campaign | Spend | Revenue | ROAS | CPA |
|----------|-------|---------|------|-----|
| [Campaign 1] | $___ | $___ | ___ | $___ |
| [Campaign 2] | $___ | $___ | ___ | $___ |

### Top Performers
**Best Ad Creative:** [Description + Screenshot]
**Best Audience:** [Audience name + metrics]
**Best Keyword:** [Keyword + metrics]

### Insights & Learnings
- ________________
- ________________
- ________________

### Next Week's Actions
1. ________________
2. ________________
3. ________________

### Tests to Launch
1. ________________
2. ________________
```

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-22  
**Service Provider:** Shopify Store Setup Service
