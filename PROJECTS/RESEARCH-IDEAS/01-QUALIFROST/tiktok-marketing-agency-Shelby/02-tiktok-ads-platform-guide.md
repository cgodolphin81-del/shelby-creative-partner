# TikTok Ads Platform Guide

## Complete Guide to TikTok Advertising

### Table of Contents
1. Getting Started
2. Campaign Structure
3. Campaign Objectives
4. Targeting Options
5. Ad Formats
6. Budget & Bidding
7. Creative Best Practices
8. Campaign Setup Walkthrough
9. Optimization Strategies
10. Measurement & Reporting

---

## 1. Getting Started

### TikTok Ads Manager Access

**Requirements:**
- Business account on TikTok
- Verified business information
- Payment method on file
- Advertiser agreement signed

**Getting Access:**
1. Visit [ads.tiktok.com](https://ads.tiktok.com)
2. Click "Create Account"
3. Fill in business details
4. Verify email and phone number
5. Add payment method
6. Wait for approval (typically 24-48 hours)

### Ads Manager Interface Overview

**Main Sections:**
- **Campaigns**: High-level campaign management
- **Ad Groups**: Audience, budget, and scheduling
- **Ads**: Individual ad creatives
- **Assets**: Images, videos, catalogs, pixels
- **Audiences**: Custom and lookalike audiences
- **Reports**: Performance analytics

**Navigation Tips:**
- Use filters to customize views
- Export data for offline analysis
- Set up column customization for key metrics
- Use folder organization for complex accounts

---

## 2. Campaign Structure

### Hierarchy Overview

```
Campaign (Objective & Budget)
└── Ad Group (Targeting & Placements)
    └── Ad (Creative & Copy)
```

**Campaign Level:**
- Set advertising objective
- Choose campaign budget optimization (CBO) or ad group budget
- Set campaign start/end dates
- Apply A/B testing

**Ad Group Level:**
- Define target audience
- Select placements
- Set budget and schedule
- Choose bidding strategy
- Exclude audiences

**Ad Level:**
- Upload creative assets
- Write ad copy
- Set destination URL
- Add tracking parameters

### Best Practices

**Campaign Structure:**
- One campaign per objective
- 3-5 ad groups per campaign (testing different audiences)
- 3-5 ads per ad group (testing creatives)
- Use naming conventions: `Objective_Audience_Creative_Variant_Date`

**Example Structure:**
```
Campaign: CONVERSION_ECOM_WINTER_SALE
├── Ad Group: Age 18-24_Interests_Fashion
│   ├── Ad: Video_A_Hook1
│   ├── Ad: Video_A_Hook2
│   └── Ad: Image_Carousel
├── Ad Group: Age 25-34_Interests_Shopping
│   ├── Ad: Video_B_Demo
│   └── Ad: Video_C_Testimonial
└── Ad Group: Lookalike_1%_ purchasers
    └── Ad: Video_B_Demo
```

---

## 3. Campaign Objectives

### Awareness

**Goal**: Maximize brand visibility and reach

**Best For:**
- Brand launches
- Product announcements
- Market expansion
- Building top-of-funnel awareness

**Metrics to Track:**
- Reach
- Impressions
- CPM (Cost per 1,000 impressions)
- Brand lift studies

**When to Use:**
- New market entry
- Major product launches
- Building brand equity

### Consideration

**Goal**: Drive engagement and traffic

**Objectives:**
- **Traffic**: Send users to website/app
- **Video Views**: Maximize video plays
- **Engagement**: Generate likes, comments, shares
- **Lead Generation**: Collect user information
- **App Installs**: Drive mobile app downloads

**Best For:**
- Website traffic campaigns
- Content promotion
- Lead generation
- App acquisition

**Metrics to Track:**
- CTR (Click-through rate)
- CPC (Cost per click)
- Video completion rate
- Cost per lead
- Cost per install

### Conversion

**Goal**: Drive valuable actions

**Objectives:**
- **Conversions**: Website purchases, sign-ups
- **Catalog Sales**: Dynamic product ads
- **Store Traffic**: Drive foot traffic to physical locations

**Best For:**
- E-commerce sales
- Lead generation
- App purchases
- Local business promotions

**Metrics to Track:**
- CPA (Cost per acquisition)
- ROAS (Return on ad spend)
- Conversion rate
- Purchase value
- Attribution window performance

---

## 4. Targeting Options

### Core Targeting

**Demographics:**
- **Age**: 13-65+ (segments: 13-17, 18-24, 25-34, 35-44, 45-54, 55-64, 65+)
- **Gender**: All, Male, Female, Other
- **Location**: Country, region, city, postal code, radius targeting (5-100 miles)
- **Language**: All available languages

**Pro Tip:** TikTok's user base skews younger. 60% of users are under 34. Optimize for 18-34 demographic.

### Interest Targeting

**Categories (300+ options):**
- **Arts & Entertainment**: Movies, music, TV, gaming
- **Beauty & Fashion**: Makeup, skincare, clothing, accessories
- **Business & Finance**: Investing, entrepreneurship, personal finance
- **Education**: Online learning, language learning, test prep
- **Food & Drink**: Cooking, restaurants, recipes, beverages
- **Health & Fitness**: Workouts, nutrition, mental health
- **Home & Garden**: DIY, interior design, landscaping
- **News & Politics**: Current events, politics
- **Online Communities**: Fan communities, forums, social causes
- **Shopping**: E-commerce, deals, product reviews
- **Sports**: Team sports, fitness, outdoor activities
- **Technology**: Software, gadgets, tech news

**Best Practices:**
- Use 5-15 interest categories per ad group
- Combine broad interests for larger audiences (1M+ users)
- Layer narrow interests for precision (100K-500K users)
- Test both broad and specific interest targeting

### Behavior Targeting

**Device:**
- Operating system (iOS, Android)
- Device price tier (premium, mid-range, budget)
- Network type (WiFi, cellular)

**Purchase Behavior:**
- Frequent online shoppers
- High-value purchasers
- Product category buyers

**App Activity:**
- TikTok app installers
- Competitor app users
- Engagement levels (heavy, medium, light users)

### Custom Audiences

**1. Pixel-Based:**
- Website visitors (all, specific pages, cart abandoners)
- App users
- Engagement on TikTok (video viewers, lead form openers)
- Customer list uploads

**2. Customer List:**
- Upload email lists (hashed for privacy)
- Minimum 100 users for matching
- Best for retargeting existing customers

**3. Engagement Audiences:**
- 25%+ video viewers (7-90 day window)
- 50%+ video viewers
- Video completers
- Lead form engagers
- Profile visitors

**Retention Periods:**
- 7 days: Hot audience, highest intent
- 30 days: Warm audience, good for retargeting
- 90 days: Cool audience, broader retargeting

### Lookalike Audiences

**How It Works:**
- TikTok finds users similar to your source audience
- Based on behavior, interests, demographics
- 1% = most similar (smallest audience)
- 10% = broader but less similar (largest audience)

**Best Practices:**
- Use high-quality seed audiences (1,000+ users)
- Create lookalikes from converters, not just visitors
- Test 1%, 3%, and 5% lookalikes
- Combine with interest stacking for scale

**Source Audience Hierarchy:**
1. Purchasers (best)
2. Add to cart
3. Initiate checkout
4. Add to wishlist
5. Video completers
6. Website visitors

### Exclusion Audiences

**Who to Exclude:**
- Existing customers (for acquisition campaigns)
- Current employees
- Low-quality traffic sources
- Competitor audiences (if irrelevant)
- Irrelevant demographics

**Why Exclude:**
- Save budget on unlikely converters
- Improve campaign efficiency
- Prevent ad fatigue
- Increase relevance scores

---

## 5. Ad Formats

### In-Feed Ads (Native Ads)

**Description:**
Native ads that appear in users' For You feed, indistinguishable from organic content.

**Specs:**
- **Format**: Video (recommended) or image
- **Video Length**: 5-60 seconds (15-30s optimal)
- **Aspect Ratio**: 9:16 (vertical), 4:5, 1:1
- **Resolution**: 1080x1920 (9:16)
- **File Size**: <30MB for video
- **Copy**: Up to 80 characters (primary text)
- **Headline**: Up to 30 characters
- **CTA Button**: Shop Now, Learn More, Sign Up, etc.

**Best For:**
- Traffic and conversion campaigns
- Product demonstrations
- Brand storytelling
- Retargeting

**Performance:**
- Average CTR: 0.5-1.5%
- Average CPC: $0.50-$2.00
- Best for testing and scaling

### Spark Ads

**Description:**
Promote existing organic TikTok posts as ads. Uses authentic creator content.

**Requirements:**
- Organic post must be public
- Creator must grant ad usage permission
- Post must comply with TikTok policies

**Benefits:**
- Authentic, creator-led content
- Higher engagement rates
- Social proof (shows likes, comments)
- Cost-effective (use existing content)

**Best For:**
- Influencer marketing campaigns
- User-generated content amplification
- Building trust and credibility
- Retargeting engaged users

### Brand Takeover

**Description:**
Full-screen ad that appears immediately when users open TikTok.

**Formats:**
- **Image Takeover**: Static image
- **Video Takeover**: 3-5 second video
- **Text Link Takeover**: Includes CTA button

**Specs:**
- **Video**: 5 seconds max, 1080x1920
- **Image**: 1080x1920
- **File Size**: <15MB

**Pros:**
- Maximum visibility (100% of app openers in target audience)
- High impact
- Drive immediate action

**Cons:**
- Premium pricing (minimum $50,000/day)
- Limited availability
- Short exposure time

**Best For:**
- Product launches
- Major announcements
- Brand awareness campaigns
- Time-sensitive promotions

### TopView

**Description:**
Premium ad format appearing at the top of For You feed when app opens. Up to 60 seconds.

**Specs:**
- **Video Length**: Up to 60 seconds
- **Aspect Ratio**: 9:16
- **Sound**: Auto-play with sound on
- **CTA**: Click-through to landing page

**Benefits:**
- Immersive experience
- Longer storytelling time
- Higher engagement than Takeover
- More affordable than Takeover

**Best For:**
- Brand storytelling
- Product launches
- Campaigns with longer narratives
- High-budget awareness campaigns

### Branded Hashtag Challenges

**Description:**
Interactive brand experience centered around a custom hashtag. Users create content using brand's theme.

**Components:**
- Hashtag challenge page
- Branded effects/filters
- Brand logo and visuals
- Incentives for participation
- Influencer kickoff

**Specs:**
- **Duration**: 3-7 days (can extend)
- **Minimum Budget**: $150,000
- **Hashtag**: 1-3 words, memorable
- **Call-to-Action**: Encourage participation

**Features:**
- Dedicated challenge page in TikTok
- Top videos featured in For You feed
- Branded effects available to all users
- Influencer partnership opportunities

**Best For:**
- Viral marketing campaigns
- User-generated content generation
- Brand awareness at scale
- Community building

**Success Metrics:**
- Hashtag views (millions to billions)
- User-generated videos created
- Engagement rate
- Follower growth
- Brand sentiment

### Branded Effects (AR Filters)

**Description:**
Custom augmented reality filters and effects users can apply to their videos.

**Types:**
- **Effect House Filters**: 2D/3D effects created in TikTok's Effect House
- **Face Filters**: Transform users' faces
- **Body Filters**: Full-body effects
- **Interactive Effects**: User-triggered animations
- **Green Screen Effects**: Custom backgrounds

**Specs:**
- **Duration**: 7-30 days campaign
- **Minimum Budget**: $100,000
- **Development Time**: 2-4 weeks
- **File Formats**: Various (depends on effect type)

**Best For:**
- Brand immersion
- User engagement
- Viral potential
- Product visualization
- Interactive experiences

### Collection Ads

**Description:**
Immersive ads that showcase multiple products in a catalog format. Users can browse and purchase without leaving TikTok.

**Components:**
- Hero video or image
- Product grid below (4-9 products)
- Quick open landing page
- In-app checkout (TikTok Shop)

**Best For:**
- E-commerce brands
- Product catalogs
- Multiple product promotions
- TikTok Shop integration

---

## 6. Budget & Bidding

### Budget Types

**Campaign Budget Optimization (CBO):**
- Set budget at campaign level
- TikTok automatically allocates to best-performing ad groups
- Best for: Scaling winning campaigns, simplifying management
- Minimum: $50/day

**Ad Group Budget:**
- Set budget at ad group level
- Manual control over allocation
- Best for: Testing different audiences, controlled experiments
- Minimum: $20/day per ad group

### Budget Recommendations by Objective

**Awareness:**
- **Small**: $500-1,000/day
- **Medium**: $1,000-5,000/day
- **Large**: $5,000-20,000+/day

**Consideration:**
- **Small**: $200-500/day
- **Medium**: $500-2,000/day
- **Large**: $2,000-10,000+/day

**Conversion:**
- **Small**: $100-300/day
- **Medium**: $300-1,000/day
- **Large**: $1,000-5,000+/day

### Bidding Strategies

**Lowest Cost (Recommended for most):**
- Automatic bidding to get lowest cost per result
- TikTok optimizes delivery for conversions
- Best for: Testing, scaling, most objectives
- No bid cap

**Cost Cap:**
- Set maximum average cost per result
- TikTok tries to maintain below your cap
- Best for: Maintaining profitability at scale
- Requires: 50+ conversions/week for stability

**Bid Cap:**
- Set maximum bid per auction
- Manual control over costs
- Best for: Highly competitive auctions, specific KPIs
- Risk: May limit delivery if cap too low

**Recommended Approach:**
1. Start with Lowest Cost for learning
2. Once stable (50+ conversions/week), test Cost Cap
3. Set cap at 1.5-2x your target CPA
4. Monitor delivery and adjust as needed

### Budget Pacing

**Daily Budget:**
- TikTok may spend up to 2.5x daily budget in a day
- Averages over 30-day period
- Best for: Consistent, predictable spending

**Lifetime Budget:**
- Fixed budget for entire campaign duration
- TikTok distributes across campaign period
- Best for: Time-sensitive campaigns, controlled spend

**Pacing Tips:**
- Start with conservative budgets
- Increase by 20-30% every 2-3 days if performing
- Never double budget in one day (resets learning)
- Monitor daily spend vs. target

### Minimum Requirements

**Campaign:**
- Minimum CBO: $50/day
- Minimum ad group budget: $20/day

**Ad Group:**
- Minimum 3 ads for A/B testing
- Minimum 2 ad variations for optimization

**Billing:**
- Payment method required
- Automatic top-ups when balance low
- Invoice available for monthly billing

---

## 7. Creative Best Practices

### Video Creative Principles

**The 3-Second Rule:**
- First 3 seconds determine 80% of performance
- Must grab attention immediately
- Use hooks: questions, surprises, bold statements

**Hook Types That Work:**
1. **Visual Hook**: Unusual imagery, quick cuts, text overlay
2. **Question Hook**: "Did you know...?" "Ever wondered...?"
3. **Problem/Solution**: "Struggling with X? Here's the fix"
4. **Social Proof**: "10K people tried this..."
5. **Controversial**: Counter-intuitive statements
6. **Trending Audio**: Leverage viral sounds

**Video Structure:**
```
0-3s:   Hook (grab attention)
3-10s:  Value proposition (what's in it for them)
10-30s: Demonstration/proof (show, don't tell)
30-60s: CTA (clear next step)
```

**Technical Specs:**
- **Length**: 15-30 seconds optimal
- **Aspect Ratio**: 9:16 vertical (primary)
- **Resolution**: 1080x1920 minimum
- **Format**: MP4 or MOV
- **File Size**: <30MB
- **Frame Rate**: 30fps minimum
- **Captions**: Always include (85% watch without sound)

### Copy & Text

**Primary Text:**
- **Length**: 40-80 characters optimal
- **Tone**: Conversational, authentic
- **Emojis**: 1-3 max (don't overdo it)
- **Key info**: First 60 characters visible before "...more"

**Headline:**
- **Length**: Max 30 characters
- **Purpose**: Reinforce message, add urgency
- **Examples**: "50% Off Today Only", "Free Shipping", "Limited Stock"

**CTA Button:**
- Match to objective:
  - Conversions: "Shop Now", "Buy Now"
  - Leads: "Sign Up", "Learn More"
  - Traffic: "Learn More", "Visit Website"

### Creative Types That Perform

**1. UGC-Style Content:**
- Creator-led, authentic feel
- Natural lighting, minimal editing
- Real testimonials and experiences
- **CTR**: 2x higher than polished ads

**2. Product Demonstrations:**
- Show product in action
- Before/after comparisons
- Problem → Solution format
- **Conversion Rate**: 3x higher than static images

**3. Trending Format Adaptations:**
- Jump on viral trends quickly
- Add brand twist
- Use trending audio
- **Viral Potential**: Highest

**4. Educational Content:**
- Tips and how-tos
- Industry insights
- "Secrets" and "Hacks"
- **Engagement**: Highest save/share rates

**5. Behind-the-Scenes:**
- Brand story
- Team introductions
- Product creation process
- **Trust Building**: Highest

**6. User-Generated Content:**
- Customer reviews
- Unboxing videos
- Social proof
- **Credibility**: Highest

### What NOT to Do

**❌ Common Mistakes:**
- No hook in first 3 seconds
- Too much branding upfront
- Low quality video/audio
- No captions
- Generic stock footage
- Long-form content (60+ seconds)
- Hard selling without value
- Confusing CTA
- Ignoring trending formats
- One-size-fits-all creative

**✅ Best Practices:**
- Test 5-10 creative variations minimum
- Refresh creatives every 2-4 weeks
- Create platform-specific content (not repurposed)
- Include social proof
- Optimize for mobile-first viewing
- A/B test hooks, CTAs, and formats

### A/B Testing Framework

**Test Variables:**
1. **Hooks** (most important)
   - Different opening 3 seconds
   - Test 3-5 variations minimum

2. **Creative Format**
   - UGC vs. polished
   - Vertical vs. horizontal
   - Video vs. image carousel

3. **CTA**
   - "Shop Now" vs. "Learn More"
   - "Get Started" vs. "Sign Up"

4. **Audience**
   - Interest stacking
   - Lookalike percentages
   - Demographic splits

5. **Placement**
   - For You Feed
   - Instagram (if cross-posting)
   - Audience Network

**Testing Process:**
1. Launch 5+ ad variations
2. Let run for 3-4 days (learning phase)
3. Kill bottom 50% by CPA
4. Scale top performers by 20-30%
5. Repeat with new creatives

---

## 8. Campaign Setup Walkthrough

### Step-by-Step Setup

**Step 1: Create Campaign**
1. Click "Create" in Ads Manager
2. Select campaign objective:
   - Awareness → Brand awareness
   - Consideration → Traffic, Video views, Engagement, Leads, App installs
   - Conversion → Conversions, Catalog sales, Store traffic
3. Name campaign: `OBJ_AUDIENCE_VERSION_DATE`
4. Set CBO: On/Off
5. Set budget and schedule
6. Click "Publish"

**Step 2: Create Ad Group**
1. Select campaign
2. Click "Ad Group" tab
3. Name ad group
4. Define audience:
   - Location (countries, regions, cities)
   - Age and gender
   - Interests (5-15 categories)
   - Custom audiences (retargeting)
   - Lookalike audiences (1-3%)
5. Set placements:
   - TikTok (default)
   - Optional: Instagram, Audience Network
6. Set budget and schedule
7. Choose bidding strategy
8. Set budget cap if needed

**Step 3: Create Ad**
1. Select ad group
2. Click "Ad" tab
3. Choose ad format
4. Upload creative:
   - Video or image
   - Primary text
   - Headline
   - Display link
5. Add CTA button
6. Set tracking:
   - Add TikTok Pixel
   - Configure conversion events
   - Add UTM parameters
7. Preview ad
8. Submit for review

**Step 4: Review & Launch**
- TikTok review: 1-24 hours
- Check status in Ads Manager
- Monitor initial performance
- Make adjustments as needed

### Tracking Setup

**Install TikTok Pixel:**
1. Get pixel ID from Ads Manager
2. Add to website:
   - Global site code (head tag)
   - Event code (specific pages)
3. Verify installation with Pixel Helper

**Key Events to Track:**
- **ViewContent**: Product page views
- **AddToCart**: Items added to cart
- **InitiateCheckout**: Checkout started
- **Purchase**: Completed purchases
- **Lead**: Form submissions
- **CompleteRegistration**: Account creation

**Conversion Window:**
- **Click-through**: 1-7 days (default)
- **View-through**: 1 day (default)
- Can extend to 30 days for consideration

**Attribution:**
- Last-click attribution by default
- Can analyze view-through separately
- Use TikTok's attribution tool for deeper insights

---

## 9. Optimization Strategies

### Learning Phase

**What It Is:**
TikTok's algorithm needs data to optimize delivery. Typically requires 50 conversions per week per ad group.

**Signs of Learning Phase:**
- High CPA variability
- Inconsistent delivery
- Fluctuating CTR

**How to Exit Learning Phase:**
- Provide enough budget (5x target CPA/day)
- Simplify audience (don't over-segment)
- Use proven creatives
- Avoid frequent edits

**During Learning:**
- Don't make changes
- Let it run 3-4 days minimum
- Monitor but don't micromanage

### Scaling Strategies

**Vertical Scaling (Increase Budget):**
- Increase by 20-30% every 2-3 days
- Never double budget in one day
- Monitor CPA after each increase
- If CPA spikes, pause and reassess

**Horizontal Scaling (New Audiences):**
- Expand to new interest groups
- Create new lookalikes
- Test new demographics
- Duplicate winning ad groups

**Creative Scaling:**
- Create new variations of top performers
- Test new hooks with proven concepts
- Refresh creatives every 2-4 weeks
- Maintain 20% of budget for testing

### Optimization Checklist (Daily)

**Budget & Delivery:**
- [ ] Spend on pace with daily target
- [ ] Ad groups getting adequate delivery
- [ ] No budget constraints limiting reach

**Performance:**
- [ ] CPA within target range
- [ ] CTR above benchmark (0.5%+)
- [ ] Conversion rate stable or improving
- [ ] ROAS meeting goals

**Creative:**
- [ ] Monitor fatigue (declining CTR)
- [ ] Identify underperforming ads
- [ ] Plan creative refreshes

**Audience:**
- [ ] Review audience performance
- [ ] Identify top/bottom performers
- [ ] Adjust exclusions if needed

### Optimization Checklist (Weekly)

**Analysis:**
- [ ] Weekly performance summary
- [ ] Identify trends and patterns
- [ ] Calculate ROAS by campaign/ad group
- [ ] Review audience insights

**Strategy:**
- [ ] Kill underperforming ads (bottom 20%)
- [ ] Scale winners (increase budget 20-30%)
- [ ] Launch new creative tests
- [ ] Adjust bids and budgets

**Planning:**
- [ ] Plan next week's tests
- [ ] Review upcoming trends/holidays
- [ ] Update creative calendar
- [ ] Schedule strategy call

### Common Issues & Solutions

**Issue: Low Delivery**
- **Cause**: Competitive audience, low relevance score, high bid
- **Solution**: Expand audience, improve creative, increase bid

**Issue: High CPA**
- **Cause**: Poor creative, wrong audience, landing page issues
- **Solution**: Test new creatives, refine audience, optimize landing page

**Issue: Ad Fatigue**
- **Cause**: Same creative shown too many times
- **Solution**: Refresh creatives, introduce new hooks, rotate ads

**Issue: Low CTR**
- **Cause**: Weak hook, irrelevant audience, poor creative
- **Solution**: Improve first 3 seconds, refine targeting, A/B test hooks

**Issue: High Impressions, Low Conversions**
- **Cause**: Wrong audience, weak offer, poor landing page
- **Solution**: Refine targeting, strengthen offer, optimize landing page

---

## 10. Measurement & Reporting

### Key Metrics

**Awareness Metrics:**
- **Reach**: Unique users who saw ad
- **Impressions**: Total ad views
- **CPM**: Cost per 1,000 impressions
- **Frequency**: Average impressions per user

**Consideration Metrics:**
- **CTR**: Click-through rate (clicks ÷ impressions)
- **CPC**: Cost per click
- **Video View Rate**: Views ÷ impressions
- **Avg. Watch Time**: How long users watched
- **Engagement Rate**: (Likes + Comments + Shares) ÷ Impressions

**Conversion Metrics:**
- **Conversions**: Total actions completed
- **CPA**: Cost per acquisition
- **Conversion Rate**: Conversions ÷ Clicks
- **ROAS**: Revenue ÷ Ad spend
- **Purchase Value**: Total revenue from ads

### Reporting Templates

**Weekly Performance Report:**
```
Week of: [Date Range]

OVERALL PERFORMANCE
- Spend: $X,XXX
- Revenue: $XX,XXX
- ROAS: X.Xx
- CPA: $XX

CAMPAIGN BREAKDOWN
[Campaign Name]
- Spend: $XXX
- Conversions: XX
- CPA: $XX
- ROAS: X.Xx

TOP PERFORMING ADS
1. [Ad Name] - CPA $XX, ROAS X.Xx
2. [Ad Name] - CPA $XX, ROAS X.Xx
3. [Ad Name] - CPA $XX, ROAS X.Xx

KEY INSIGHTS
- [Insight 1]
- [Insight 2]
- [Insight 3]

RECOMMENDATIONS
- [Action 1]
- [Action 2]
- [Action 3]
```

**Monthly Strategy Report:**
```
Month: [Month Year]

EXECUTIVE SUMMARY
- Total spend: $XX,XXX
- Total revenue: $XXX,XXX
- Overall ROAS: X.Xx
- Month-over-month change: +X%

PERFORMANCE BY OBJECTIVE
- Awareness: $X,XXX spend, X.XM reach
- Consideration: $X,XXX spend, XX,XXX clicks
- Conversion: $X,XXX spend, X,XXX conversions

AUDIENCE INSIGHTS
- Top performing demographic: [Age/Gender]
- Best interest category: [Category]
- Top location: [Location]
- Lookalike performance: 1% vs 5% vs 10%

CREATIVE INSIGHTS
- Best performing format: [Format]
- Best hook type: [Hook]
- Average video completion rate: XX%
- Top creative themes: [Themes]

LEARNINGS & INSIGHTS
- [Key learning 1]
- [Key learning 2]
- [Key learning 3]

NEXT MONTH STRATEGY
- [Strategy 1]
- [Strategy 2]
- [Strategy 3]

BUDGET RECOMMENDATIONS
- Increase: [Campaign/Audience]
- Decrease: [Campaign/Audience]
- Test: [New ideas]
```

### Attribution & Analytics

**TikTok Analytics:**
- Native reporting in Ads Manager
- Conversion tracking
- Audience insights
- Creative performance

**Google Analytics Integration:**
- Import TikTok conversions
- Cross-channel attribution
- User journey analysis
- Offline conversion tracking

**Third-Party Tools:**
- **Triple Whale**: E-commerce analytics
- **Northbeam**: Attribution modeling
- **Northdata**: Multi-touch attribution
- **Hyros**: Post-purchase tracking

### A/B Testing Framework

**Testing Hypothesis:**
"If we change [variable] from [A] to [B], we expect [outcome] because [reasoning]."

**Test Structure:**
- **Control**: Current best performer
- **Variations**: 3-5 tests of single variable
- **Sample Size**: Minimum 1,000 conversions per variant
- **Duration**: 7-14 days minimum
- **Significance**: 95% confidence level

**Variables to Test:**
1. **Creative**: Video vs. image, UGC vs. polished
2. **Hook**: Different first 3 seconds
3. **Audience**: Interest stacks, lookalike %
4. **CTA**: Different call-to-action text
5. **Landing Page**: Different offers, layouts
6. **Placement**: TikTok vs. Instagram vs. both

**Test Results Analysis:**
- Calculate statistical significance
- Consider practical significance (business impact)
- Document learnings for future tests
- Implement winners, kill losers

---

## Quick Reference: Benchmarks

### Industry Benchmarks (Average)

**E-commerce:**
- CTR: 0.8-1.5%
- CPC: $0.80-$2.00
- CPA: $15-$40
- ROAS: 2.5-4.0x

**Mobile Apps:**
- CTR: 1.0-2.0%
- CPI: $0.50-$3.00
- Install Rate: 10-20%
- Day-1 Retention: 25-35%

**Lead Generation:**
- CTR: 1.5-3.0%
- CPC: $1.00-$5.00
- CPA: $10-$50
- Lead Quality: Varies by industry

**Brand Awareness:**
- CPM: $8-$20
- Reach: Varies by budget
- Frequency: 2-4x optimal
- Video View Rate: 15-25%

---

## Resources

- [TikTok Ads Help Center](https://help.tiktok.com/ads)
- [TikTok Creative Center](https://creators.tiktok.com/creativetool)
- [TikTok Business Blog](https://www.tiktok.com/business/en/blog)
- [Effect House](https://effecthouse.tiktok.com) - Create AR effects
- [TikTok Pixel Guide](https://www.tiktok.com/business/en/resource/tiktok-pixel-guide)

---

**Remember:** TikTok moves fast. What works today might not work tomorrow. Stay agile, test constantly, and keep creative fresh.
