# 📱 Snapchat Ads Platform

Complete guide to setting up, managing, and optimizing Snapchat ad campaigns.

---

## 1. Account Setup

### Step 1: Create Snapchat Ads Manager Account

1. Visit [ads.snapchat.com](https://ads.snapchat.com)
2. Click "Get Started"
3. Enter business information:
   - Business name
   - Business email
   - Country/region
   - Time zone
   - Currency

4. Verify email address
5. Complete business verification (if required)

### Step 2: Set Up Payment Method

- Credit/debit card (Visa, MasterCard, Amex)
- PayPal (select regions)
- Monthly invoicing (for spend >$10K/month)

**Billing Threshold:** Snapchat charges when spend reaches threshold ($250, $500, $1,000+) or monthly, whichever comes first.

### Step 3: Install Snapchat Pixel

**What is Pixel?** Tracking code that measures conversions, optimizes delivery, and builds audiences.

**Installation Methods:**

**A. Global Site Tag (Recommended)**
```html
<!-- Place in <head> of every page -->
<script>
!function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var
o={ti:"YOUR_PIXEL_ID"};o.q=w[u],w[u]=new UET(o),w[u].push('pageLoad')},
n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var
s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},
i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)}(window,document,"script","https://snap.licdn.com/li.lms-analytics/insight.min.js","_snaptr");
</script>
```

**B. Google Tag Manager**
1. Create new tag → Custom HTML
2. Paste pixel code
3. Set trigger: All Pages
4. Publish container

**C. Partner Integration**
- Shopify: Built-in Snapchat app
- WooCommerce: Snapchat for WooCommerce plugin
- Magento: Official extension

### Step 4: Configure Conversion Events

Standard Events:
- `PageView` - Page visits
- `ViewContent` - Product views
- `AddToCart` - Items added to cart
- `Purchase` - Completed purchases
- `Lead` - Form submissions
- `CompleteRegistration` - Sign-ups
- `Search` - Search queries
- `StartCheckout` - Checkout initiated

**Event Setup Code:**
```javascript
// Purchase event example
snaptr('track', 'PURCHASE', {
  value: 50.00,
  currency: 'USD',
  transaction_id: 'ORDER123',
  item_category: 'Electronics',
  item_ids: ['SKU123', 'SKU456']
});
```

---

## 2. Campaign Structure

### Hierarchy Overview

```
Account
└── Campaign (Objective & Budget)
    └── Ad Set (Targeting & Placement)
        └── Ad (Creative & Copy)
```

### Campaign Objectives

| Objective | Best For | Optimization Goal |
|-----------|----------|-------------------|
| **Awareness** | Brand awareness, reach | Impressions, Reach |
| **Consideration** | Traffic, engagement | Link clicks, Swipe-ups, Video views |
| **Conversion** | Sales, sign-ups, leads | Purchases, Sign-ups, Add to cart |

### Campaign Settings

**Budget Types:**
- **Daily Budget:** Spend limit per day (minimum $5/day)
- **Lifetime Budget:** Total spend over campaign duration
- **Bid Strategy:** Auto-bid (recommended) or target cost

**Schedule:**
- Start/end dates
- Dayparting (specific hours/days)
- Continuous running

**Delivery:**
- Standard (even pacing)
- Accelerated (spend quickly)

---

## 3. Targeting Options

### Demographics

| Targeting | Options |
|-----------|---------|
| Age | 13-17, 18-24, 25-34, 35-44, 45+ |
| Gender | Male, Female, All |
| Location | Countries, regions, cities, ZIP codes, radius |
| Language | 30+ languages |

### Interests & Behaviors

**Interest Categories:**
- Entertainment (movies, TV, music)
- Fashion & Beauty
- Food & Drink
- Gaming
- Health & Fitness
- Shopping & Retail
- Sports
- Technology
- Travel

**Behavioral Targeting:**
- Device type (iOS/Android)
- Connection type (WiFi/Cellular)
- Purchase behavior
- App activity

### Custom Audiences

**1. Customer Lists**
- Upload email addresses, phone numbers, mobile IDs
- Minimum 100 matched users
- Hash data before upload (SHA256)

**2. Website Visitors (Pixel-based)**
- All visitors
- Specific pages
- Time window (1-180 days)
- Exclusion audiences

**3. App Activity**
- App installers
- In-app purchasers
- Specific in-app events
- Engagement level

**4. Engagement Audiences**
- Video viewers (25%, 50%, 75%, 95%)
- Story engagers
- Lead form openers
- AR Lens users

### Lookalike Audiences

Create audiences similar to your best customers:

1. Select source audience (1,000-50,000 users ideal)
2. Choose similarity level:
   - 1% (most similar, smaller)
   - 1-5% (balanced)
   - 5-10% (larger, less similar)
3. Select location

**Pro Tip:** Layer lookalikes with interest targeting for precision.

### Advanced Targeting

**Exclusion Audiences:**
- Past purchasers (avoid waste)
- Low-quality traffic sources
- Competitor audiences

**Layering:**
- Combine 2-3 targeting options
- Avoid over-segmentation (<100K audience)

---

## 4. Ad Placements

### Available Placements

| Placement | Format | Best For |
|-----------|--------|----------|
| **Stories** | Full-screen vertical | Brand awareness, engagement |
| **Discover** | Publisher content | Reach, consideration |
| **Spotlight** | Short-form video | Viral reach, Gen Z |
| **Snap Map** | Location-based | Local businesses, events |
| **Public Profiles** | Brand profiles | Followers, community |
| **AR Lenses** | Interactive filters | Engagement, UGC |
| **Commercials** | 6-second unskippable | Mass reach |
| **Collection Ads** | Product showcase | E-commerce |

### Placement Strategy

**Automatic Placements:** Let Snapchat optimize (recommended for beginners)

**Manual Placements:**
- Stories: Best for direct response
- Discover: Best for brand building
- Spotlight: Best for viral content
- AR Lenses: Best for engagement

---

## 5. Creative Specifications

### Video Ads (Stories)

| Spec | Requirement |
|------|-------------|
| Aspect Ratio | 9:16 (1080x1920) |
| Duration | 3-180 seconds (6-15s optimal) |
| File Size | Max 1GB |
| Format | MP4, MOV |
| Frame Rate | 24-30 fps |
| Resolution | Minimum 1080x1920 |

### Image Ads

| Spec | Requirement |
|------|-------------|
| Aspect Ratio | 9:16 (1080x1920) |
| File Size | Max 5MB |
| Format | JPG, PNG |
| Resolution | Minimum 1080x1920 |

### AR Lenses

- See Section 3: AR Lens Creation for full specs

### Collection Ads

- Hero video/image: 1080x1920
- Product images: 1080x1080 (minimum 4 products)
- Headline: 34 characters max
- CTA button: Shop Now, Learn More, etc.

### Creative Best Practices

**First 3 Seconds:**
- Hook immediately (no slow builds)
- Show product/brand clearly
- Use bold text overlays

**Vertical-First:**
- Design for 9:16 (not cropped horizontal)
- Fill the entire screen
- Safe zones: Keep text within center 80%

**Sound Strategy:**
- 60% watch without sound initially
- Use captions/text overlays
- Add sound for emotional impact

**CTA Optimization:**
- Clear swipe-up instruction
- Urgency ("Limited time", "Today only")
- Value proposition ("50% off", "Free shipping")

**Testing Framework:**
- Test 3-5 creative variations
- Different hooks (problem, benefit, social proof)
- Different CTAs
- Different lengths (6s, 10s, 15s)

---

## 6. Budget Guidelines

### Minimum Budgets

| Campaign Type | Daily Minimum | Recommended |
|---------------|---------------|-------------|
| Awareness | $5 | $50-200 |
| Consideration | $5 | $100-500 |
| Conversion | $5 | $200-1,000+ |

### Budget Allocation by Objective

**Brand Awareness Campaign:**
- 70% Stories placement
- 20% Discover
- 10% AR Lens promotion

**Direct Response Campaign:**
- 60% Stories (conversion optimized)
- 25% Retargeting
- 15% Lookalike audiences

**Full-Funnel Campaign:**
- 40% Top of funnel (awareness)
- 35% Middle (consideration)
- 25% Bottom (conversion)

### Scaling Strategy

**Phase 1: Testing (Week 1-2)**
- Budget: $50-100/day
- 3-5 ad sets, 2-3 creatives each
- Goal: Identify winners

**Phase 2: Optimization (Week 3-4)**
- Budget: $200-500/day
- Scale winning ad sets 20-30% every 2-3 days
- Pause underperformers

**Phase 3: Scaling (Month 2+)**
- Budget: $500-5,000+/day
- Expand audiences (lookalikes, new interests)
- Add new creative variations
- Test new placements

### ROAS Expectations

| Industry | Average ROAS | Good ROAS | Excellent ROAS |
|----------|--------------|-----------|----------------|
| E-commerce | 2.5:1 | 4:1 | 6:1+ |
| Apps | 1.5:1 | 2.5:1 | 4:1+ |
| Lead Gen | 3:1 (CPA) | 5:1 | 8:1+ |
| Entertainment | 2:1 | 3:1 | 5:1+ |

---

## 7. Campaign Setup Checklist

### Pre-Launch

- [ ] Snapchat Pixel installed and testing
- [ ] Conversion events configured
- [ ] Audiences created (custom, lookalike)
- [ ] Creative assets ready (3-5 variations)
- [ ] Landing pages optimized for mobile
- [ ] UTM parameters set up
- [ ] Budget approved

### Launch Day

- [ ] Campaign objective selected
- [ ] Targeting configured
- [ ] Placements selected
- [ ] Bidding strategy set
- [ ] Ad creative uploaded
- [ ] Tracking verified
- [ ] Campaign submitted for review

### Post-Launch (First 48 Hours)

- [ ] Campaign approved and running
- [ ] Impressions tracking
- [ ] Click-through rate monitoring
- [ ] Conversion tracking verified
- [ ] Initial optimization adjustments

---

## 8. Optimization Strategies

### Weekly Optimization Routine

**Monday: Performance Review**
- Analyze previous week's data
- Identify top/bottom performers
- Note trends and anomalies

**Tuesday: Creative Refresh**
- Launch 2-3 new creative variations
- Pause lowest CTR ads
- Update ad copy based on learnings

**Wednesday: Audience Optimization**
- Adjust bids on winning audiences
- Expand lookalikes
- Add exclusions for waste

**Thursday: Budget Reallocation**
- Shift budget to best performers
- Test new placements
- Scale winners 20-30%

**Friday: Reporting & Planning**
- Generate weekly report
- Plan next week's tests
- Client communication

### Key Metrics to Monitor

| Metric | Formula | Benchmark |
|--------|---------|-----------|
| CPM | (Cost / Impressions) × 1,000 | $5-15 |
| CTR | (Clicks / Impressions) × 100 | 0.5-2% |
| CPC | Cost / Clicks | $0.50-2.00 |
| Swipe-Up Rate | (Swipe-ups / Impressions) × 100 | 1-5% |
| Conversion Rate | (Conversions / Clicks) × 100 | 2-10% |
| CPA | Cost / Conversions | Varies by industry |
| ROAS | Revenue / Ad Spend | 3:1+ |

### Common Issues & Fixes

**High CPM:**
- Broaden targeting
- Test new placements
- Improve creative quality score

**Low CTR:**
- Stronger hook in first 3 seconds
- Clearer CTA
- Test different creative formats

**High CPA:**
- Improve landing page experience
- Refine audience targeting
- Add retargeting campaigns
- Test different offers

**Low ROAS:**
- Focus on bottom-funnel campaigns
- Improve product-market fit
- Adjust pricing/offer
- Better attribution tracking

---

## 9. Advanced Tactics

### Sequential Messaging

Tell a story across multiple ads:
1. Ad 1: Problem awareness
2. Ad 2: Solution introduction
3. Ad 3: Social proof
4. Ad 4: Urgency/CTA

### Cross-Device Retargeting

- Target mobile viewers on desktop
- Use customer lists for multi-device matching
- Frequency cap: 3-5 impressions/week

### Dynamic Creative Optimization (DCO)

- Upload multiple headlines, images, CTAs
- Snapchat auto-combines for best performance
- Requires 5+ creative elements

### Seasonal Campaigns

- Plan 4-6 weeks ahead
- Create themed creative
- Increase budget 2-3x during peak
- Use countdown timers in ads

---

## 10. Tools & Resources

### Essential Tools

- **Snapchat Ads Manager:** Campaign management
- **Snapchat Pixel Helper:** Chrome extension for testing
- **Google Analytics:** Traffic and conversion analysis
- **Looker Studio:** Custom dashboards
- **Canva/Adobe:** Creative production
- **Lens Studio:** AR filter creation

### Helpful Resources

- [Snapchat Ads Help Center](https://www.snapchat.com/business/help)
- [Snapchat Creative Best Practices](https://www.snapchat.com/creative-best-practices)
- [Snapchat Marketing Partners](https://www.snapchat.com/business/partners)

---

## Next Steps

1. Set up Ads Manager account
2. Install and test Pixel
3. Create first campaign using this guide
4. Monitor and optimize daily
5. Scale winners systematically

**Pro Tip:** Start with conversion campaigns even for awareness goals—Snapchat's algorithm optimizes better with concrete actions.
