# 06 Google Ads

**Capture High-Intent Traffic and Scale with Google's Ecosystem**

---

## Google Shopping Setup Guide

### Merchant Center Setup

**Step 1: Create Google Merchant Center Account**
- Visit: merchants.google.com
- Sign in with Google account
- Enter business information
- Verify and claim your website

**Step 2: Website Requirements**
- [ ] Secure checkout (HTTPS)
- [ ] Clear return/refund policy
- [ ] Contact information visible
- [ ] Accurate product information
- [ ] No prohibited content

**Step 3: Shipping Settings**
- [ ] Set up shipping rates
- [ ] Define shipping zones
- [ ] Set processing time
- [ ] Configure free shipping thresholds

**Step 4: Tax Settings**
- [ ] Configure tax settings
- [ ] Set up tax rules by region
- [ ] Enable automatic tax calculation

**Step 5: Connect to Shopify**
- [ ] Install "Google & YouTube" app
- [ ] Connect Google account
- [ ] Connect Merchant Center
- [ ] Enable product sync
- [ ] Verify product feed

### Product Feed Optimization

**Required Attributes:**
| Attribute | Description | Example |
|-----------|-------------|---------|
| id | Unique product ID | SKU-12345 |
| title | Product name | "Wireless Bluetooth Earbuds - Black" |
| description | Product description | "High-quality wireless earbuds with..." |
| link | Product page URL | https://yoursite.com/product |
| image_link | Main image URL | https://yoursite.com/image.jpg |
| price | Product price | 49.99 USD |
| availability | Stock status | in_stock / out_of_stock |
| brand | Brand name | YourBrand |
| gtin | Barcode (UPC/EAN) | 123456789012 |
| mpn | Manufacturer part number | ABC-123 |
| condition | Product condition | new / used / refurbished |

**Optimization Tips:**

**Title Optimization:**
```
Formula: Brand + Product Type + Key Feature + Size/Color

Bad: "Earbuds"
Good: "SoundMax Wireless Bluetooth Earbuds with Charging Case - Black"
```

**Description Optimization:**
- Include relevant keywords naturally
- Highlight key features and benefits
- Keep it accurate and specific
- 500-1000 characters ideal
- Don't keyword stuff

**Image Requirements:**
- Minimum 100x100 pixels (1000x1000 recommended)
- White or neutral background
- No text overlays or watermarks
- Show actual product (not lifestyle)
- High resolution, clear details

### Feed Rules & Optimization

**Common Feed Rules:**
```
1. Title: Add brand name if missing
2. Description: Truncate to 5000 characters
3. Image: Use high-res image if multiple exist
4. Price: Ensure currency matches target country
5. Availability: Map inventory status correctly
```

**Custom Labels for Bidding:**
```
Label 1: Product Category (e.g., "electronics", "apparel")
Label 2: Margin Tier (e.g., "high-margin", "low-margin")
Label 3: Best Seller (e.g., "bestseller", "regular")
Label 4: Seasonality (e.g., "summer", "winter", "year-round")
Label 5: Price Tier (e.g., "under-50", "50-100", "over-100")
```

---

## Search Campaign Structure

### Campaign Types

**1. Branded Search**
- Keywords: Your brand name, brand + product
- Intent: High (already know you)
- Budget: 10-15% of total
- Expected ROAS: 10.0+

**2. Non-Branded Search**
- Keywords: Product category, problem keywords
- Intent: Medium-High (shopping, comparing)
- Budget: 30-40% of total
- Expected ROAS: 3.0-6.0

**3. Competitor Search**
- Keywords: Competitor brand names
- Intent: Medium (comparing options)
- Budget: 10-15% of total
- Expected ROAS: 2.0-4.0

**4. Generic/Category Search**
- Keywords: Broad category terms
- Intent: Low-Medium (researching)
- Budget: 20-30% of total
- Expected ROAS: 2.0-4.0

### Keyword Research

**Keyword Match Types:**

| Match Type | Syntax | Example | Reach |
|------------|--------|---------|-------|
| Broad Match | keyword | wireless earbuds | Widest |
| Phrase Match | "keyword" | "wireless earbuds" | Medium |
| Exact Match | [keyword] | [wireless earbuds] | Narrowest |
| Negative | -keyword | -free | Excludes |

**Keyword Research Tools:**
- Google Keyword Planner (free)
- Ahrefs (paid)
- SEMrush (paid)
- Ubersuggest (freemium)

**Keyword Categories:**

**Commercial Intent (High Priority):**
```
- buy [product]
- [product] for sale
- best [product]
- [product] reviews
- [product] price
- cheap [product]
- [product] discount
```

**Informational Intent (Lower Priority):**
```
- what is [product]
- how to use [product]
- [product] vs [competitor]
- benefits of [product]
```

### Campaign Structure Template

```
Campaign: Search - Non-Branded
├── Ad Group: Product Category
│   ├── Keywords:
│   │   - [wireless earbuds]
│   │   - "wireless earbuds"
│   │   - bluetooth earbuds
│   │   - wireless headphones
│   └── Ads:
│       - RSA 1 (Feature-focused)
│       - RSA 2 (Benefit-focused)
│       - RSA 3 (Social proof)
│
├── Ad Group: Problem/Solution
│   ├── Keywords:
│   │   - [earbuds that stay in]
│   │   - "comfortable wireless earbuds"
│   │   - earbuds for running
│   └── Ads:
│       - RSA 1 (Problem-focused)
│       - RSA 2 (Solution-focused)
│
└── Ad Group: Competitor
    ├── Keywords:
    │   - [competitor brand]
    │   - "competitor alternative"
    │   - better than [competitor]
    └── Ads:
        - RSA 1 (Comparison)
        - RSA 2 (Advantage)
```

### Responsive Search Ads (RSA)

**RSA Structure:**
- 15 headlines (30 characters each)
- 4 descriptions (90 characters each)
- Google mixes and matches to find best combo

**Headline Templates:**
```
✓ [Product Name] - Official Site
✓ Free Shipping on All Orders
✓ [Number]-Day Money Back Guarantee
✓ Shop [Product Category] Now
✓ [Key Benefit] in [Timeframe]
✓ Rated [X] Stars by [Number]+ Customers
✓ [Discount]% Off - Limited Time
✓ The [Adjective] [Product] for [Audience]
✓ Why [Number]+ Customers Switched
✓ [Problem]? Try [Product]
✓ Best [Product Category] of [Year]
✓ [Unique Selling Proposition]
✓ Fast & Free Shipping
✓ Easy Returns
✓ [Award/Recognition] Winner
```

**Description Templates:**
```
✓ [Product] helps you [benefit] without [pain point]. 
  Shop now with free shipping and [X]-day returns.

✓ Join [number]+ happy customers. [Key benefit 1], 
  [key benefit 2], [key benefit 3]. Order today!

✓ [Problem getting you down]? [Product] is the 
  solution. [Key feature]. Try risk-free today.

✓ Get [main benefit] with [product]. [Social proof]. 
  Free shipping + [guarantee]. Shop now!
```

### Bidding Strategies

**Manual CPC (Start Here):**
- Full control over bids
- Good for learning
- Time-intensive
- Best for: New accounts, limited budget

**Maximize Clicks:**
- Google optimizes for clicks
- Set max CPC limit
- Good for: Traffic generation, new campaigns

**Maximize Conversions:**
- Google optimizes for conversions
- Needs 15-30 conversions/month
- Good for: Established campaigns

**Target CPA:**
- Set target cost per acquisition
- Google optimizes bids
- Needs 30+ conversions/month
- Good for: Scaling with CPA target

**Target ROAS:**
- Set target return on ad spend
- Google optimizes for revenue
- Needs 50+ conversions/month
- Good for: Mature campaigns, revenue focus

**Recommended Progression:**
```
Week 1-2: Manual CPC (gather data)
Week 3-4: Maximize Conversions (optimize)
Month 2+: Target ROAS (scale profitably)
```

---

## Performance Max (PMax) Strategy

### What is Performance Max?

**PMax Overview:**
- All-in-one campaign type
- Uses all Google inventory (Search, Shopping, YouTube, Display, Gmail, Discover)
- AI-driven optimization
- Requires minimal setup
- Best for: E-commerce with conversion data

### When to Use PMax

**Good Fit:**
- ✅ 50+ conversions/month in Google Ads
- ✅ Quality product feed
- ✅ Multiple creatives available
- ✅ Clear conversion goals
- ✅ Want simplified management

**Not Ideal:**
- ❌ New accounts with no data
- ❌ Need search query visibility
- ❌ Want full control over placements
- ❌ Very limited budget (<$50/day)

### PMax Setup

**Step 1: Campaign Goal**
- Select: Sales
- Conversion action: Purchase

**Step 2: Budget & Bidding**
- Daily budget: Start with $50-100/day
- Bidding: Maximize Conversions (start)
- Target ROAS: Add after 30+ conversions

**Step 3: Asset Group**
- **Images:** 5-10 images (various sizes)
- **Logos:** 1-2 logos
- **Videos:** 1-3 videos (can auto-generate)
- **Headlines:** 5-15 headlines
- **Descriptions:** 1-5 descriptions
- **Call-to-action:** Select from options

**Step 4: Audience Signals**
- Customer lists (email uploads)
- Website visitors
- Custom segments (keywords, URLs, apps)
- Demographics

**Step 5: Product Feed**
- Connect Merchant Center
- Select product groups to include
- Set up filters if needed

### PMax Best Practices

**Asset Quality:**
- Use high-quality images (1200x1200+)
- Include lifestyle and product-only images
- Add videos if possible (even simple ones)
- Write benefit-focused headlines
- Test multiple asset combinations

**Audience Signals:**
- Add customer email lists
- Include website visitors
- Create custom segments with competitor keywords
- Layer demographic insights

**Product Feed:**
- Optimize titles and descriptions
- Use custom labels for segmentation
- Ensure accurate pricing/availability
- High-quality product images

**Budget Allocation:**
- Start with 20-30% of total Google budget
- Scale based on performance
- Don't cannibalize Shopping campaigns

### PMax vs. Shopping Campaigns

| Factor | Shopping | PMax |
|--------|----------|------|
| Inventory | Shopping only | All Google networks |
| Control | High | Low |
| Visibility | Full | Limited |
| Setup | Moderate | Simple |
| Performance | Good | Often better |
| Best For | Control, transparency | Scale, simplicity |

**Recommended Approach:**
```
Start: Shopping campaigns (learn what works)
Scale: Add PMax (20-30% of budget)
Mature: PMax dominant (60-70% of budget)
```

---

## YouTube Ads Framework

### YouTube Ad Formats

**1. Skippable In-Stream (Most Common)**
- Plays before/during videos
- Skippable after 5 seconds
- Pay per view (30 seconds or completion)
- Best for: Awareness, consideration

**2. Non-Skippable In-Stream**
- 15-20 seconds, can't skip
- Higher CPM
- Best for: Brand awareness

**3. Video Discovery**
- Appears in search results
- User chooses to watch
- Pay per click
- Best for: Consideration, intent

**4. Bumper Ads**
- 6 seconds, non-skippable
- Low cost, high frequency
- Best for: Retargeting, awareness

### YouTube Creative Best Practices

**Hook in First 5 Seconds:**
- State the problem immediately
- Show something surprising
- Ask a provocative question
- Use bold visuals

**Structure (30 seconds):**
```
0-5s:   Hook (grab attention)
5-15s:  Problem + Solution intro
15-25s: Product demo/benefits
25-30s: CTA
```

**Structure (60 seconds):**
```
0-5s:   Hook
5-20s:  Problem agitated
20-40s: Solution + demo
40-50s: Social proof
50-60s: CTA + urgency
```

### YouTube Targeting

**Affinity Audiences:**
- Broad interest-based
- Good for awareness
- Examples: "Fitness enthusiasts", "Beauty lovers"

**Custom Intent:**
- Based on search behavior
- Higher intent
- Use competitor keywords, product keywords

**In-Market Audiences:**
- Actively shopping
- High intent
- Examples: "Apparel shoppers", "Electronics shoppers"

**Placement Targeting:**
- Specific YouTube channels
- Specific videos
- Good for control

**Demographics:**
- Age, gender, parental status
- Household income
- Layer with other targeting

### YouTube Campaign Structure

```
Campaign: YouTube - Prospecting
├── Ad Group: Affinity Audiences
│   ├── Targeting: Fitness enthusiasts, Health conscious
│   └── Ads: 3-5 video variations
│
├── Ad Group: Custom Intent
│   ├── Targeting: Keywords (product, problem, competitor)
│   └── Ads: 3-5 video variations
│
└── Ad Group: In-Market
    ├── Targeting: Shopping categories
    └── Ads: 3-5 video variations

Campaign: YouTube - Retargeting
├── Ad Group: Video Viewers (90 days)
├── Ad Group: Website Visitors (30 days)
└── Ad Group: Cart Abandoners (14 days)
```

---

## Keyword Research Templates

### Keyword Research Worksheet

| Keyword | Volume | CPC | Competition | Intent | Priority |
|---------|--------|-----|-------------|--------|----------|
| | | | | | |
| | | | | | |
| | | | | | |

**Intent Categories:**
- **Transactional:** Ready to buy (buy, order, sale)
- **Commercial:** Researching (best, review, compare)
- **Informational:** Learning (how to, what is, guide)
- **Navigational:** Looking for brand (brand name)

### Negative Keyword List

**Add These to Prevent Waste:**
```
- free
- cheap
- diy
- homemade
- tutorial
- how to make
- jobs
- career
- salary
- wholesale
- bulk
- supplier
- manufacturer
- used
- second hand
- repair
- fix
```

### Competitor Keyword Research

**Steps:**
1. Identify 3-5 main competitors
2. Use SEMrush/Ahrefs to find their keywords
3. Filter for commercial intent
4. Add to your keyword list
5. Create competitor ad groups

---

## Feed Optimization Guide

### Title Optimization

**Formula:**
```
Brand + Product Type + Key Feature + Size/Color/Material

Examples:
✓ "SoundMax Wireless Bluetooth Earbuds with Charging Case - Black"
✓ "EcoGreen Organic Cotton T-Shirt - Men's Crew Neck - Navy - Large"
✓ "FitPro Resistance Bands Set - 5 Levels - with Door Anchor & Bag"
```

**Best Practices:**
- Put important keywords first
- Include key features
- Stay under 150 characters
- Don't keyword stuff
- Match search intent

### Description Optimization

**Formula:**
```
[Product overview] + [Key features] + [Benefits] + [Use cases]

Example:
"Experience premium sound quality with SoundMax Wireless Earbuds. 
Features active noise cancellation, 30-hour battery life, and IPX7 
waterproof rating. Perfect for workouts, commutes, and everyday use. 
Includes charging case and multiple ear tip sizes."
```

**Best Practices:**
- 500-1000 characters ideal
- Include relevant keywords naturally
- Highlight unique features
- Mention use cases
- Don't copy from website exactly

### Image Optimization

**Requirements:**
- Minimum 100x100 pixels
- Recommended: 1000x1000+ pixels
- White or neutral background
- No text overlays
- No watermarks
- Show actual product

**Tips:**
- Use high-resolution images
- Show product from best angle
- Include detail shots
- Ensure accurate colors
- Compress for fast loading

---

## Resources

**Tools:**
- Google Keyword Planner: ads.google.com (free)
- Google Trends: trends.google.com (free)
- Merchant Center: merchants.google.com (free)
- SEMrush: semrush.com (paid)
- Ahrefs: ahrefs.com (paid)

**Learning:**
- Google Skillshop: skillshop.withgoogle.com (free certifications)
- Google Ads Blog: ads.google.com/blog
- YouTube: Surfside PPC, Solutions 8
- Podcasts: PPC Rockstars, Paid Search Magic

**Optimization:**
- Feedonomics: feedonomics.com (feed management)
- DataFeedWatch: datafeedwatch.com (feed optimization)
- GoDataFeed: godatafeed.com (feed management)

---

*Previous: [05 Facebook/Instagram Ads](../05-facebook-instagram-ads/README.md) | Next: [07 Email/SMS Flows](../07-email-sms-flows/README.md)*
