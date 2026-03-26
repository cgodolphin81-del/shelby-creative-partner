# Account Restructuring Framework
## SKAGs, STAGs & Portfolio Bid Strategies

---

## Table of Contents
1. [When to Restructure](#1-when-to-restructure)
2. [Account Architecture Principles](#2-account-architecture-principles)
3. [SKAGs Implementation](#3-skags-implementation)
4. [STAGs Implementation](#4-stags-implementation)
5. [Portfolio Bid Strategies](#5-portfolio-bid-strategies)
6. [Campaign Consolidation](#6-campaign-consolidation)
7. [Migration Process](#7-migration-process)
8. [Post-Restructure Optimization](#8-post-restructure-optimization)

---

## 1. When to Restructure

### 1.1 Restructure Triggers

**Signs You Need to Restructure:**
```
PERFORMANCE INDICATORS:

✗ DECLINING PERFORMANCE
  → ROAS dropping 20%+ over 30 days
  → CPA increasing 20%+ over 30 days
  → Quality Scores declining
  → Impression share lost to rank > 40%

✗ MANAGEMENT COMPLEXITY
  → 50+ campaigns hard to manage
  → Too many ad groups per campaign
  → Can't identify winners/losers quickly
  → Spending more time managing than optimizing

✗ BIDDING INEFFICIENCY
  → Smart Bidding not working
  → Manual bids unsustainable
  → Can't set appropriate targets
  → Budgets misallocated

✗ ACCOUNT CHANGES
  → New product lines
  → Geographic expansion
  → Business model pivot
  → Merger/acquisition
```

**When NOT to Restructure:**
```
AVOID RESTRUCTURING WHEN:

✗ Peak season approaching
  → Holiday season
  → Major sale events
  → High-traffic periods

✗ Limited historical data
  → Account less than 90 days old
  → Less than 100 conversions
  → Still in learning phase

✗ Minor issues
  → Can be fixed with optimization
  → Single campaign problem
  → Temporary performance dip

✗ No clear plan
  → Haven't defined new structure
  → No migration strategy
  → Team not prepared
```

### 1.2 Restructure Impact Assessment

**Expected Impact:**
```
SHORT-TERM (Weeks 1-4):
├── Learning phase reset
├── Temporary performance dip (10-30%)
├── Data fragmentation
├── Increased management time
└── Historical data reset

MID-TERM (Weeks 5-12):
├── Performance stabilization
├── Improved control
├── Better optimization
├── Clearer insights
└── Gradual improvement

LONG-TERM (Month 4+):
├── Sustained performance gains
├── Efficient management
├── Scalable structure
├── Better ROI
└── Easier optimization

DECISION FRAMEWORK:

ASK:
1. Is current pain > restructuring pain?
2. Do we have resources for transition?
3. Is timing appropriate (not peak season)?
4. Do we have clear new structure?
5. Is there executive buy-in?

IF 4+ YES: Proceed with restructure
IF 2-3 YES: Reconsider timing/approach
IF 0-1 YES: Don't restructure yet
```

---

## 2. Account Architecture Principles

### 2.1 Hierarchy Best Practices

**Optimal Account Structure:**
```
ACCOUNT HIERARCHY:

GOOGLE ADS ACCOUNT
│
├── CAMPAIGNS (Goal/Channel level)
│   │
│   └── AD GROUPS (Theme/Product level)
│       │
│       └── KEYWORDS & ADS (Specific level)

RECOMMENDED LIMITS:

CAMPAIGNS PER ACCOUNT:
→ Ideal: 10-50 campaigns
→ Maximum: 100 campaigns (manageable)
→ Beyond 100: Consider multiple accounts

AD GROUPS PER CAMPAIGN:
→ Ideal: 3-10 ad groups
→ Maximum: 20 ad groups
→ Beyond 20: Split campaign

KEYWORDS PER AD GROUP:
→ SKAGs: 1-3 keywords
→ STAGs: 5-15 keywords
→ Thematic: 10-25 keywords
→ Maximum: 50 keywords

ADS PER AD GROUP:
→ Minimum: 2 RSA ads
→ Recommended: 3-5 RSA ads
→ Maximum: 15 ads (Google limit)
```

### 2.2 Campaign Segmentation

**Segmentation Strategies:**
```
STRATEGY 1: BY MATCH TYPE
├── Campaign: Exact Match - Brand
├── Campaign: Exact Match - Non-Brand
├── Campaign: Phrase Match - Non-Brand
└── Campaign: Broad Match - Smart Bidding

PROS:
✓ Clear match type performance
✓ Different bid strategies
✓ Controlled testing

CONS:
✗ More campaigns to manage
✗ Fragmented data
✗ Complex structure

BEST FOR:
→ Large accounts
→ Testing match types
→ Advanced management

STRATEGY 2: BY PRODUCT/SERVICE
├── Campaign: Product Category A
├── Campaign: Product Category B
├── Campaign: Service Line A
└── Campaign: Service Line B

PROS:
✓ Aligns with business
✓ Easy budget allocation
✓ Clear performance by offering

CONS:
✗ May need many campaigns
✗ Overlap between categories
✗ Seasonal adjustments complex

BEST FOR:
→ Diverse product lines
→ Different margins
→ Clear categories

STRATEGY 3: BY FUNNEL STAGE
├── Campaign: Awareness (Top)
├── Campaign: Consideration (Middle)
├── Campaign: Conversion (Bottom)
└── Campaign: Retargeting

PROS:
✓ Different messaging
✓ Appropriate bids per stage
✓ Clear funnel metrics

CONS:
✗ Attribution complexity
✗ Overlap between stages
✗ More complex tracking

BEST FOR:
→ Long sales cycles
→ Complex purchases
→ B2B marketing

STRATEGY 4: BY BRAND VS NON-BRAND
├── Campaign: Brand - Exact
├── Campaign: Brand - Generic
├── Campaign: Non-Brand - High Intent
├── Campaign: Non-Brand - Research
└── Campaign: Competitor

PROS:
✓ Protect brand terms
✓ Different ROAS targets
✓ Clear conquesting performance

CONS:
✗ Brand cannibalization risk
✗ More campaigns
✗ Overlap management

BEST FOR:
→ Established brands
→ Competitor targeting
→ Brand protection

STRATEGY 5: BY GEOGRAPHY
├── Campaign: North America
├── Campaign: Europe
├── Campaign: Asia Pacific
└── Campaign: Local Markets

PROS:
✓ Local budget control
✓ Time zone management
✓ Regional messaging

CONS:
✗ Many campaigns
✗ Duplicated effort
✗ Complex reporting

BEST FOR:
→ International businesses
→ Location-specific offers
→ Multi-location businesses

STRATEGY 6: BY DEVICE (Less Common Now)
├── Campaign: Desktop
├── Campaign: Mobile
└── Campaign: Tablet

NOTE: Generally NOT recommended
→ Use device bid adjustments instead
→ Only if dramatically different performance
→ Smart Bidding handles device well

BEST FOR:
→ Extreme device differences
→ App-specific campaigns
→ Mobile-only businesses
```

### 2.3 Naming Conventions

**Campaign Naming:**
```
STANDARD FORMAT:
[Network] - [Goal] - [Theme] - [Match] - [Geo]

EXAMPLES:
Search - Conv - Brand - Exact - US
Search - Conv - Shoes - Phrase - US
Search - Traffic - Blog - Broad - US
Shopping - Conv - All - NA - US
Display - Remarketing - Cart - NA - US
Video - Awareness - Brand - NA - US

COMPONENTS:

NETWORK:
├── Search
├── Shopping
├── Display
├── Video
├── PMax
└── Discovery

GOAL:
├── Conv (Conversions)
├── Traffic
├── Awareness
├── Leads
├── Sales
└── ROAS

THEME:
├── Brand
├── Category name
├── Product line
├── Service type
└── Audience

MATCH TYPE:
├── Exact
├── Phrase
├── Broad
└── Mixed

GEOGRAPHY:
├── US, UK, CA, etc.
├── Region (West, East)
├── City name
└── NA (North America)
```

**Ad Group Naming:**
```
STANDARD FORMAT:
[Theme] - [Sub-theme] - [Intent]

EXAMPLES:
Running-Shoes-Men-HighIntent
Running-Shoes-Women-Research
Nike-AirMax-Buy
Adidas-Ultraboost-Review

COMPONENTS:

THEME:
→ Product category
→ Service type
→ Topic

SUB-THEME:
→ Specific product
→ Audience
→ Feature

INTENT:
├── Buy (High intent)
├── Price (Commercial)
├── Review (Research)
├── Best (Comparison)
└── Info (Informational)
```

---

## 3. SKAGs Implementation

### 3.1 What Are SKAGs?

**Single Keyword Ad Groups:**
```
SKAG DEFINITION:
→ One keyword (or close variants) per ad group
→ Highly targeted ads
→ Maximum relevance
→ Precise control

TRADITIONAL STRUCTURE:
Ad Group: Running Shoes
├── Keyword: men's running shoes
├── Keyword: women's running shoes
├── Keyword: best running shoes
├── Keyword: running shoes sale
└── Ads: Generic running shoe ads

SKAG STRUCTURE:
Ad Group: [Men's Running Shoes]
├── Keyword: [men's running shoes]
└── Ads: Specifically about men's running shoes

Ad Group: [Women's Running Shoes]
├── Keyword: [women's running shoes]
└── Ads: Specifically about women's running shoes

Ad Group: [Best Running Shoes]
├── Keyword: [best running shoes]
└── Ads: Specifically about best running shoes
```

### 3.2 When to Use SKAGs

**Best Use Cases:**
```
USE SKAGS FOR:

✓ HIGH-VALUE KEYWORDS
  → Top 10-20% by revenue
  → High CPA keywords
  → Strategic keywords
  → Brand protection

✓ HIGH-INTENT KEYWORDS
  → Transactional queries
  → "Buy" keywords
  → Product-specific
  → Ready to purchase

✓ COMPETITIVE KEYWORDS
  → Need maximum relevance
  → Quality Score focus
  → Beat competitors
  → Premium positions

✓ TESTING NEW KEYWORDS
  → Isolate performance
  → Quick learnings
  → Easy optimization
  → Clear attribution

AVOID SKAGS FOR:

✗ LONG-TAIL KEYWORDS
  → Low search volume
  → Better grouped
  → Management overhead
  → Limited impact

✗ LOW-PRIORITY KEYWORDS
  → Not worth the effort
  → Group thematically
  → Focus on winners
  → Efficiency over control

✗ BROAD MATCH KEYWORDS
  → Defeats the purpose
  → Too many variations
  → Use with Smart Bidding
  → Better in STAGs
```

### 3.3 SKAG Setup Process

**Step-by-Step Implementation:**
```
STEP 1: IDENTIFY SKAG CANDIDATES

ANALYZE SEARCH TERMS REPORT:
1. Export last 90 days
2. Sort by conversions/revenue
3. Identify top performers
4. Look for exact match opportunities
5. Note high-CPA keywords

CRITERIA FOR SKAGS:
→ 10+ conversions in 90 days
→ $1,000+ spend in 90 days
→ Clear commercial intent
→ Specific product/service
→ Adequate search volume (100+/month)

STEP 2: CREATE SKAG STRUCTURE

FOR EACH KEYWORD:
1. Create new ad group
2. Name: [Keyword] (with brackets)
3. Add keyword as exact match
4. Add close variant (optional)
5. Pause keyword in old ad group

EXAMPLE:
Old: Ad Group "Running Shoes"
  - men's running shoes (pause)
  - women's running shoes (pause)
  - best running shoes (pause)

New: Ad Group "[Men's Running Shoes]"
  - [men's running shoes]
  - [men's running shoe]

New: Ad Group "[Women's Running Shoes]"
  - [women's running shoes]
  - [women's running shoe]

STEP 3: CREATE TARGETED ADS

HEADLINE REQUIREMENTS:
→ Include keyword in H1
→ Include keyword in H2 (if possible)
→ Match search intent
→ Specific to keyword

DESCRIPTION REQUIREMENTS:
→ Expand on keyword promise
→ Specific benefits
→ Relevant CTAs
→ Match landing page

EXAMPLE SKAG ADS:

KEYWORD: [men's running shoes]

AD 1:
Headlines:
→ Men's Running Shoes
→ Shop Men's Running Shoes
→ Free Shipping on Orders $50+

Descriptions:
→ Browse our collection of men's running 
  shoes. Top brands, best prices. Shop now.
→ Find your perfect fit. Free returns within 
  30 days. Order today.

Path:
→ /mens/shoes
→ /running

LANDING PAGE:
→ Men's running shoes category
→ NOT homepage
→ NOT general shoes page
→ Specifically men's running

STEP 4: SET BIDS & BUDGETS

INITIAL BIDS:
→ Start 10-20% above old ad group
→ Monitor closely first week
→ Adjust based on performance
→ Use portfolio bid strategy if multiple SKAGs

BUDGET ALLOCATION:
→ Prioritize high-value SKAGs
→ Ensure adequate budget
→ Monitor budget exhaustion
→ Reallocate from underperformers

STEP 5: MONITOR & OPTIMIZE

WEEK 1-2:
→ Check search terms daily
→ Ensure relevance
→ Monitor Quality Score
→ Adjust bids as needed

WEEK 3-4:
→ Analyze performance vs. old structure
→ Check impression share
→ Review Quality Score trends
→ Optimize ads

ONGOING:
→ Add negative keywords
→ Test new ad variations
→ Refine landing pages
→ Expand successful SKAGs
```

### 3.4 SKAG Management

**Ongoing Optimization:**
```
WEEKLY TASKS:

□ SEARCH TERMS REVIEW
  → Add negative keywords
  → Identify new SKAG opportunities
  → Check for irrelevant traffic
  → Monitor close variants

□ QUALITY SCORE CHECK
  → Target QS 7+
  → Improve ad relevance
  → Enhance landing page
  → Expected CTR optimization

□ BID ADJUSTMENTS
  → Increase on winners
  → Decrease on underperformers
  → Adjust for position
  → Consider competition

□ AD TESTING
  → Test new headlines
  → Try different CTAs
  → Experiment with offers
  → Monitor CTR changes

MONTHLY TASKS:

□ PERFORMANCE ANALYSIS
  → ROAS by SKAG
  → CPA trends
  → Conversion rate
  → Impression share

□ STRUCTURE REVIEW
  → Consolidate underperformers
  → Expand winners
  → Add new SKAGs
  → Pause non-performers

□ LANDING PAGE AUDIT
  → Relevance check
  → Load speed
  → Mobile optimization
  → Conversion rate

QUARTERLY TASKS:

□ FULL SKAG AUDIT
  → Which SKAGs still justified?
  → New opportunities?
  → Restructure needed?
  → Budget reallocation

□ COMPETITIVE ANALYSIS
  → Who's bidding on your SKAGs?
  → Their ad copy
  → Their landing pages
  → Their offers

□ STRATEGY REVIEW
  → SKAGs still appropriate?
  → Smart Bidding impact
  → PMax considerations
  → Overall account health
```

### 3.5 SKAG Pros & Cons

**Advantages:**
```
SKAG BENEFITS:

✓ MAXIMUM RELEVANCE
  → Ads match search exactly
  → Higher Quality Scores
  → Better CTRs
  → Lower CPCs

✓ PRECISE CONTROL
  → Individual keyword bids
  → Specific ad copy
  → Targeted landing pages
  → Clear performance data

✓ EASY OPTIMIZATION
  → Clear winners/losers
  → Simple decisions
  → Fast iteration
  → Isolated testing

✓ BETTER INSIGHTS
  → Exact keyword performance
  → No averaging
  → Clear attribution
  → Actionable data
```

**Disadvantages:**
```
SKAG DRAWBACKS:

✗ MANAGEMENT OVERHEAD
  → Many ad groups
  → More time required
  → Complex structure
  → Scaling challenges

✗ DATA FRAGMENTATION
  → Less data per ad group
  → Smart Bidding limitations
  → Longer learning
  → Statistical significance issues

✗ LIMITED SCALE
  → Not all keywords qualify
  → Low volume keywords suffer
  → Misses long-tail
  → May limit reach

✗ MODERN SEARCH BEHAVIOR
  → Google matches broadly anyway
  → Close variants expand reach
  → Smart Bidding prefers data
  → PMax makes SKAGs less relevant
```

**When SKAGs Make Sense in 2026:**
```
STILL USEFUL FOR:

✓ Brand protection campaigns
✓ High-value, high-volume keywords
✓ Competitive industries
✓ Quality Score improvement
✓ Specific product campaigns
✓ Testing new keywords
✓ Accounts with manual bidding

CONSIDER ALTERNATIVES FOR:

→ Smart Bidding campaigns (use STAGs)
→ PMax campaigns (not applicable)
→ Low-volume keywords
→ Long-tail strategies
→ Accounts with limited management time
→ When scale is priority
```

---

## 4. STAGs Implementation

### 4.1 What Are STAGs?

**Single Theme Ad Groups:**
```
STAG DEFINITION:
→ One clear theme per ad group
→ Multiple related keywords
→ Balanced control and efficiency
→ Modern best practice

STAG STRUCTURE EXAMPLE:

Ad Group: Men's Running Shoes
├── [men's running shoes]
├── [men's running shoe]
├── "running shoes for men"
├── "mens athletic shoes"
├── best men's running shoes
├── men's running shoes sale
└── Ads: All about men's running shoes

KEY PRINCIPLES:
→ Tight thematic grouping
→ All keywords could use same ads
→ Single landing page relevant to all
→ 5-15 keywords typical
→ Mix of match types OK
```

### 4.2 STAG vs. SKAG

**Comparison:**
```
STAGS VS. SKAGS:

FACTOR                  | STAGs          | SKAGs
------------------------|----------------|----------------
Ad Groups per Campaign  | 5-15           | 20-100+
Keywords per Ad Group   | 5-15           | 1-3
Management Time         | Moderate       | High
Data per Ad Group       | Good           | Limited
Smart Bidding Friendly  | Yes            | Sometimes
Quality Score           | Good (7-9)     | Excellent (8-10)
CTR                     | Good           | Excellent
Scalability             | High           | Low
Modern Best Practice    | Yes            | Declining

WHEN TO USE STAGS:
✓ Most campaigns
✓ Smart Bidding enabled
✓ Limited management time
✓ Need scale
✓ Long-tail keywords
✓ Modern account structure

WHEN TO USE SKAGS:
✓ High-value keywords only
✓ Maximum control needed
✓ Quality Score critical
✓ Competitive terms
✓ Brand protection
✓ Testing specific terms
```

### 4.3 STAG Setup Process

**Step-by-Step Implementation:**
```
STEP 1: IDENTIFY THEMES

THEME IDENTIFICATION:

PRODUCT-BASED THEMES:
├── Men's Running Shoes
├── Women's Running Shoes
├── Kids' Athletic Shoes
├── Running Accessories
└── Shoe Care Products

INTENT-BASED THEMES:
├── Buy [Product]
├── [Product] Reviews
├── Best [Product]
├── [Product] Sale
└── Cheap [Product]

FEATURE-BASED THEMES:
├── Waterproof Running Shoes
├── Minimalist Running Shoes
├── Trail Running Shoes
├── Cushioned Running Shoes
└── Lightweight Running Shoes

STEP 2: GROUP KEYWORDS BY THEME

KEYWORD GROUPING EXERCISE:

1. Export all keywords
2. Create theme categories
3. Assign each keyword to theme
4. Ensure tight relevance
5. Remove outliers

THEME QUALITY CHECK:
→ Could all keywords use the same ad?
→ Is one landing page relevant to all?
→ Do they share search intent?
→ Are they at similar funnel stage?
→ If YES to all: Good STAG

STEP 3: CREATE STAG STRUCTURE

FOR EACH THEME:
1. Create ad group with theme name
2. Add all theme keywords
3. Use appropriate match types
4. Set initial bids
5. Create 3-5 RSA ads

EXAMPLE STAG:

Ad Group Name: Trail Running Shoes

Keywords:
├── [trail running shoes]
├── [trail running shoe]
├── [best trail running shoes]
├── "trail running shoes for men"
├── "trail running shoes for women"
├── waterproof trail running shoes
├── trail running shoes sale
├── best trail running shoes 2026
├── trail vs road running shoes
└── lightweight trail running shoes

Match Type Strategy:
→ 3-5 exact match (core terms)
→ 3-5 phrase match (variations)
→ 2-5 broad match (discovery, with Smart Bidding)

Ads (3-5 RSAs):
→ All focused on trail running shoes
→ Highlight trail-specific features
→ Mention terrain, durability, grip
→ Trail-specific landing page

Landing Page:
→ Trail running shoes category
→ NOT general running shoes
→ Trail-specific content
→ Trail product recommendations

STEP 4: SET BIDS

INITIAL BID STRATEGY:

NEW STAGS:
→ Start with portfolio tCPA/tROAS
→ Or use campaign-level strategy
→ Let Smart Bidding optimize

MIGRATED STAGS:
→ Start at ad group historical average
→ Monitor first 2 weeks
→ Adjust based on performance
→ Transition to Smart Bidding

MANUAL BIDS (if needed):
→ High-intent keywords: +20%
→ Research keywords: -20%
→ Brand keywords: Market rate
→ Competitor keywords: Strategic

STEP 5: CREATE ADS

RSA BEST PRACTICES:

HEADLINES (Provide 10-15):
→ 3-5 with main keyword
→ 3-5 with benefits
→ 2-3 with social proof
→ 2-3 with offers/CTAs
→ 2-3 with urgency

DESCRIPTIONS (Provide 4-5):
→ Expand on headline promise
→ Include keywords naturally
→ Add specific benefits
→ Clear CTAs
→ Match landing page

PINNING STRATEGY:
→ Pin keyword headline to H1
→ Pin benefit headline to H2
→ Leave H3 flexible
→ Don't over-pin (limits optimization)

EXAMPLE RSA:

Headlines:
→ Trail Running Shoes (Pinned H1)
→ Built for Any Terrain (Pinned H2)
→ Shop Trail Running Shoes
→ Waterproof & Durable
→ Free Shipping $50+
→ 4.8 Star Reviews
→ Top-Rated Trail Shoes
→ Grip That Lasts
→ Shop Now & Save
→ 30-Day Free Returns

Descriptions:
→ Conquer any trail with our durable, 
  waterproof running shoes. Free shipping.
→ Built for serious trail runners. 
  Maximum grip, minimum weight. Shop now.
→ Rated 4.8 stars by 5,000+ runners. 
  Try risk-free for 30 days.
```

### 4.4 STAG Optimization

**Ongoing Management:**
```
WEEKLY OPTIMIZATION:

□ SEARCH TERMS ANALYSIS
  → Add negative keywords
  → Identify new keyword opportunities
  → Check theme consistency
  → Remove irrelevant terms

□ AD PERFORMANCE
  → Check asset ratings
  → Replace low-rated assets
  → Test new headlines
  → Monitor CTR trends

□ BID ADJUSTMENTS
  → Review by keyword
  → Adjust for performance
  → Consider position
  → Check competition

□ QUALITY SCORE
  → Monitor trends
  → Improve ad relevance
  → Enhance landing pages
  → Address low scores

MONTHLY OPTIMIZATION:

□ THEME REVIEW
  → Are themes still tight?
  → Any outliers to remove?
  → New themes to create?
  → Consolidate small STAGs?

□ KEYWORD EXPANSION
  → Add new relevant keywords
  → Test new match types
  → Explore long-tail
  → Competitive keywords

□ LANDING PAGE AUDIT
  → Relevance check
  → Conversion rate
  → Load speed
  → Mobile experience

□ COMPETITOR ANALYSIS
  → Their ad copy
  → Their offers
  → Their landing pages
  → Market positioning

QUARTERLY REVIEW:

□ STRUCTURE AUDIT
  → STAGs still appropriate?
  → Need more/fewer themes?
  → Campaign reorganization?
  → Budget reallocation?

□ PERFORMANCE TRENDS
  → ROAS by STAG
  → CPA trends
  → Quality Score trends
  → Market share

□ STRATEGY ADJUSTMENT
  → Match type balance
  → Bid strategy review
  → Smart Bidding performance
  → PMax opportunities
```

---

## 5. Portfolio Bid Strategies

### 5.1 What Are Portfolio Bid Strategies?

**Overview:**
```
PORTFOLIO BID STRATEGY DEFINITION:
→ Single bid strategy across multiple campaigns
→ Shared learning and optimization
→ Unified performance goal
→ Efficient budget allocation

WHEN TO USE:

✓ SIMILAR CAMPAIGNS
  → Same goal (conversions, ROAS)
  → Similar products/services
  → Similar margins
  → Similar conversion values

✓ LIMITED DATA CAMPAIGNS
  → Individual campaigns < 30 conversions
  → Combined data enables Smart Bidding
  → Faster learning
  → Better optimization

✓ UNIFIED GOALS
  → Overall account ROAS target
  → Blended CPA target
  → Shared budget pool
  → Holistic optimization

✓ EFFICIENCY FOCUS
  → Less manual management
  → Automated allocation
  → Cross-campaign learning
  → Scaled optimization
```

### 5.2 Portfolio Strategy Types

**Available Strategies:**
```
TARGET CPA (PORTFOLIO):

BEST FOR:
→ Lead generation
→ Similar CPA targets
→ Conversion-focused
→ Multiple campaigns

SETUP:
1. Tools → Shared Library → Portfolio Bid Strategies
2. Create new: Target CPA
3. Name: "All Lead Gen - tCPA $50"
4. Set target CPA: $50
5. Select campaigns to include
6. Save

CONSIDERATIONS:
→ All campaigns share same CPA target
→ Budget allocation automatic
→ Best for similar offerings
→ Not for different margins

TARGET ROAS (PORTFOLIO):

BEST FOR:
→ E-commerce
→ Similar margins
→ Revenue-focused
→ Multiple product campaigns

SETUP:
1. Tools → Shared Library → Portfolio Bid Strategies
2. Create new: Target ROAS
3. Name: "All E-commerce - tROAS 400%"
4. Set target ROAS: 400%
5. Select campaigns to include
6. Save

CONSIDERATIONS:
→ All campaigns share same ROAS target
→ Works best with similar margins
→ Automatic budget allocation
→ Requires conversion values

MAXIMIZE CONVERSIONS (PORTFOLIO):

BEST FOR:
→ Volume focus
→ New campaigns
→ Learning phase
→ No specific CPA target

SETUP:
1. Create portfolio strategy
2. Select: Maximize Conversions
3. Optional: Set target CPA
4. Add campaigns
5. Save

CONSIDERATIONS:
→ Focuses on volume
→ CPA may vary
→ Good for scaling
→ Add tCPA once stable

MAXIMIZE CONVERSION VALUE (PORTFOLIO):

BEST FOR:
→ Revenue focus
→ E-commerce
→ No specific ROAS target
→ Value optimization

SETUP:
1. Create portfolio strategy
2. Select: Maximize Conversion Value
3. Optional: Set target ROAS
4. Add campaigns
5. Save

CONSIDERATIONS:
→ Focuses on revenue
→ ROAS may vary
→ Good for growth
→ Add tROAS once stable
```

### 5.3 Portfolio Strategy Setup

**Implementation Guide:**
```
STEP 1: IDENTIFY CANDIDATES

CAMPAIGNS TO COMBINE:

GOOD CANDIDATES:
✓ Same business goal
✓ Similar products/services
✓ Similar conversion values
✓ Similar margins
✓ Combined 50+ conversions/month
✓ Same attribution model
✓ Same conversion window

POOR CANDIDATES:
✗ Different goals (brand vs. performance)
✗ Very different margins
✗ Different conversion values
✗ Brand vs. non-brand
✗ Different funnel stages
✗ Different geographies (sometimes)

EXAMPLE GROUPINGS:

GROUP 1: NON-BRAND SEARCH
├── Campaign: Shoes - Non-Brand
├── Campaign: Apparel - Non-Brand
├── Campaign: Accessories - Non-Brand
└── Strategy: tROAS 400%

GROUP 2: BRAND SEARCH
├── Campaign: Brand - Exact
├── Campaign: Brand - Generic
├── Campaign: Brand - Competitor
└── Strategy: tROAS 600%

GROUP 3: REMARKETING
├── Campaign: Display - Remarketing
├── Campaign: YouTube - Remarketing
├── Campaign: Search - Remarketing
└── Strategy: tROAS 350%

STEP 2: CREATE PORTFOLIO STRATEGY

1. NAVIGATE:
   → Tools & Settings
   → Shared Library
   → Portfolio Bid Strategies

2. CREATE NEW:
   → Click + button
   → Select strategy type
   → Name strategically

3. CONFIGURE:
   → Set target (CPA or ROAS)
   → Start conservative
   → Can adjust later

4. SELECT CAMPAIGNS:
   → Choose all relevant campaigns
   → Review current performance
   → Ensure alignment

5. SAVE & MONITOR:
   → Save strategy
   → Monitor first 2 weeks closely
   → Expect learning phase
   → Adjust if needed

STEP 3: SET INITIAL TARGETS

TARGET CPA CALCULATION:

METHOD 1 - WEIGHTED AVERAGE:
Campaign A: 100 conv, $40 CPA
Campaign B: 50 conv, $60 CPA
Campaign C: 25 conv, $50 CPA

Weighted Avg = (100×40 + 50×60 + 25×50) / 175
             = (4000 + 3000 + 1250) / 175
             = $47.14 CPA

Set initial target: $47-50 CPA

METHOD 2 - GOAL-BASED:
Current blended CPA: $55
Target improvement: -15%
Initial target: $55 × 0.85 = $46.75 CPA

TARGET ROAS CALCULATION:

METHOD 1 - WEIGHTED AVERAGE:
Campaign A: $10K spend, $40K revenue (400%)
Campaign B: $5K spend, $20K revenue (400%)
Campaign C: $2K spend, $6K revenue (300%)

Total: $17K spend, $66K revenue
Blended ROAS: 66/17 = 388%

Set initial target: 380-400% ROAS

METHOD 2 - MARGIN-BASED:
Average margin: 40%
Break-even ROAS: 1/0.40 = 250%
Target ROAS: 250% × 1.6 = 400%

STEP 4: MONITOR TRANSITION

WEEK 1-2 (LEARNING):
□ Expect performance fluctuation
□ Don't make major changes
□ Monitor spend pacing
□ Check delivery is normal
□ Review daily

WEEK 3-4 (STABILIZATION):
□ Performance should stabilize
□ Compare to pre-portfolio baseline
□ Check individual campaign impact
□ Identify winners/losers
□ Minor adjustments OK

WEEK 5+ (OPTIMIZATION):
□ Full optimization mode
□ Adjust targets based on results
□ Add/remove campaigns as needed
□ Scale successful approach
□ Document learnings

STEP 5: OPTIMIZE TARGETS

WHEN TO ADJUST TARGETS:

INCREASE AGGRESSIVENESS (Lower tCPA / Higher tROAS):
→ Consistently beating target
→ Budget not fully spent
→ Impression share < 70%
→ Want more efficiency

DECREASE AGGRESSIVENESS (Higher tCPA / Lower tROAS):
→ Missing target consistently
→ Budget exhausted too early
→ Impression share declining
→ Want more volume

ADJUSTMENT GUIDELINES:
→ Change by 10-20% max
→ Wait 2 weeks between changes
→ One change at a time
→ Document all changes
```

### 5.4 Portfolio Strategy Management

**Ongoing Optimization:**
```
WEEKLY CHECKS:

□ PERFORMANCE VS. TARGET
  → Are we hitting target?
  → Which campaigns over/under?
  → Trend improving or declining?
  → Any anomalies?

□ BUDGET UTILIZATION
  → All budgets spent?
  → Any campaigns limited?
  → Budget reallocation needed?
  → Pacing on track?

□ DELIVERY CHECKS
  → Impression share stable?
  → Any campaigns not delivering?
  → Lost to rank vs. budget?
  → Auction insights changes?

□ CONVERSION QUALITY
  → Conversion rate stable?
  → Average order value consistent?
  → Lead quality maintained?
  → Any red flags?

MONTHLY REVIEW:

□ CAMPAIGN CONTRIBUTION
  → Which campaigns driving results?
  → Any underperformers?
  → Should we add/remove campaigns?
  → Budget allocation optimal?

□ TARGET APPROPRIATENESS
  → Target still realistic?
  → Market conditions changed?
  → Seasonality impact?
  → Competitive landscape?

□ PORTFOLIO COMPOSITION
  → Still cohesive group?
  → Any campaigns no longer fit?
  → New campaigns to add?
  → Split into multiple portfolios?

□ STRATEGY EFFECTIVENESS
  → Better than individual strategies?
  → Management time reduced?
  → Performance improved?
  → Continue or adjust?

QUARTERLY AUDIT:

□ FULL PERFORMANCE REVIEW
  → vs. Pre-portfolio baseline
  → vs. Industry benchmarks
  → Trend analysis
  → ROI impact

□ STRUCTURE OPTIMIZATION
  → Portfolio still make sense?
  → Need to split/combine?
  → New campaign types?
  → PMax considerations?

□ STRATEGIC ALIGNMENT
  → Business goals changed?
  → New products/services?
  → Market expansion?
  → Budget changes?
```

### 5.5 Portfolio Pros & Cons

**Advantages:**
```
PORTFOLIO BENEFITS:

✓ SHARED LEARNING
  → More data for Smart Bidding
  → Faster optimization
  → Cross-campaign insights
  → Better predictions

✓ EFFICIENT MANAGEMENT
  → One strategy to manage
  → Less manual bidding
  → Automated allocation
  → Time savings

✓ UNIFIED GOALS
  → Holistic optimization
  → Blended performance focus
  → Budget flexibility
  → Cross-subsidization

✓ SCALABILITY
  → Easy to add campaigns
  → Consistent approach
  → Standardized optimization
  → Growth-friendly
```

**Disadvantages:**
```
PORTFOLIO DRAWBACKS:

✗ LESS GRANULAR CONTROL
  → Can't set individual targets
  → Blended performance
  → May not suit all campaigns
  → Less precision

✗ CAMPAIGN VARIABILITY
  → High performers subsidize low
  → May hide underperformers
  → Less visibility per campaign
  → Potential inefficiency

✗ TRANSITION IMPACT
  → Learning phase reset
  → Temporary performance dip
  → Data reorganization
  → Adjustment period

✗ NOT ALWAYS APPROPRIATE
  → Different margins problematic
  → Different goals don't mix
  → Brand vs. performance
  → Different funnel stages
```

---

## 6. Campaign Consolidation

### 6.1 When to Consolidate

**Consolidation Triggers:**
```
CONSOLIDATE WHEN:

✓ TOO MANY SMALL CAMPAIGNS
  → 50+ campaigns
  → Many with < $100/day spend
  → Hard to manage
  → Data fragmented

✓ SMART BIDDING LIMITATIONS
  → Campaigns < 30 conversions/month
  → Not enough data for AI
  → Poor performance
  → Learning phase never ends

✓ SIMILAR PERFORMANCE
  → Campaigns performing similarly
  → Same targets appropriate
  → Same audiences
  → Same products/services

✓ MANAGEMENT OVERHEAD
  → Too much time managing
  → Diminishing returns
  → Can't focus on strategy
  → Team overwhelmed

✓ STRUCTURAL CHANGES
  → Business model change
  → Product line simplification
  → Geographic consolidation
  → New strategy direction
```

### 6.2 Consolidation Process

**Step-by-Step:**
```
STEP 1: AUDIT CURRENT STRUCTURE

CREATE CAMPAIGN INVENTORY:
├── Campaign name
├── Daily spend
├── Monthly conversions
├── CPA/ROAS
├── Match types
├── Targeting
├── Performance trend
└── Strategic importance

IDENTIFY CONSOLIDATION CANDIDATES:

GROUP 1: LOW SPEND, SIMILAR THEME
→ Spend < $50/day each
→ Same product category
→ Similar performance
→ Good candidates to combine

GROUP 2: FRAGMENTED MATCH TYPES
→ Separate exact/phrase/broad
→ Same keywords
→ Could use Smart Bidding
→ Good candidates to combine

GROUP 3: UNDERPERFORMERS
→ Consistently missing targets
→ Limited strategic value
→ Drain on management time
→ Consider pausing or combining

STEP 2: PLAN NEW STRUCTURE

DESIGN TARGET STATE:
→ Number of campaigns
→ Campaign themes
→ Budget allocation
→ Bid strategies
→ Timeline

EXAMPLE CONSOLIDATION:

BEFORE (12 campaigns):
├── Shoes - Exact - 3 campaigns
├── Shoes - Phrase - 3 campaigns
├── Shoes - Broad - 3 campaigns
├── Apparel - Exact - 2 campaigns
└── Apparel - Phrase - 1 campaign

AFTER (4 campaigns):
├── Shoes - Smart Bidding (combined)
├── Apparel - Smart Bidding (combined)
├── Brand - All Match Types
└── Remarketing - All Channels

STEP 3: EXECUTE CONSOLIDATION

METHOD 1: GRADUAL MIGRATION (Recommended)

WEEK 1-2:
→ Create new consolidated campaign
→ Copy best ad groups
→ Set appropriate bids
→ Run parallel to old campaigns
→ Start with 20% of old budget

WEEK 3-4:
→ Increase new campaign budget
→ Decrease old campaign budgets
→ Monitor performance closely
→ Adjust as needed

WEEK 5-6:
→ Complete budget transfer
→ Pause old campaigns
→ Full optimization of new
→ Document results

METHOD 2: IMMEDIATE SWAP (Faster, Riskier)

DAY 1:
→ Create new campaign
→ Pause old campaigns
→ Transfer full budget
→ Monitor closely

WEEK 1-2:
→ Daily performance checks
→ Quick adjustments
→ Address issues immediately
→ Stabilize performance

STEP 4: MONITOR TRANSITION

KEY METRICS TO WATCH:

IMMEDIATE (Daily):
□ Spend pacing
□ Impression share
□ Average position
□ Click volume
□ CTR

SHORT-TERM (Weekly):
□ Conversion volume
□ CPA/ROAS
□ Quality Score
□ Search terms
□ Budget utilization

LONG-TERM (Monthly):
□ Overall performance vs. baseline
□ Management time savings
□ Strategic alignment
□ Scalability
□ Team feedback

STEP 5: OPTIMIZE NEW STRUCTURE

POST-CONSOLIDATION OPTIMIZATION:

WEEK 1-4:
→ Focus on stabilization
→ Minor bid adjustments
→ Search term management
→ Ad optimization

MONTH 2-3:
→ Full optimization mode
→ Bid strategy refinement
→ Budget reallocation
→ Structure fine-tuning

MONTH 4+:
→ Strategic improvements
→ Expansion opportunities
→ Advanced optimization
→ Documentation & learnings
```

### 6.3 Consolidation Best Practices

**Do's and Don'ts:**
```
DO:

✓ PLAN THOROUGHLY
  → Map current state
  → Design target state
  → Create migration plan
  → Get stakeholder buy-in

✓ COMMUNICATE CLEARLY
  → Team expectations
  → Timeline
  → Potential impacts
  → Success metrics

✓ START CONSERVATIVE
  → Lower initial targets
  → Gradual budget transfer
  → Monitor closely
  → Be ready to adjust

✓ DOCUMENT EVERYTHING
  → Before/after structure
  → Performance baseline
  → All changes made
  → Lessons learned

✓ ALLOW LEARNING TIME
  → 2-4 weeks minimum
  → Avoid knee-jerk reactions
  → Trust the process
  → Focus on trends

DON'T:

✗ CONSOLIDATE DURING PEAK
  → Holiday season
  → Major sales
  → High-traffic periods
  → Wait for calm period

✗ COMBINE INCOMPATIBLES
  → Different goals
  → Different margins
  → Brand with non-brand
  → Different funnels

✗ EXPECT IMMEDIATE RESULTS
  → Learning phase required
  → Temporary dip normal
  → Patience needed
  → Trust Smart Bidding

✗ MAKE MULTIPLE CHANGES
  → One change at a time
  → Isolate variables
  → Clear attribution
  → Measurable impact

✗ FORGET NEGATIVES
  → Transfer negative keywords
  → Review search terms
  → Add new negatives
  → Prevent waste
```

---

## 7. Migration Process

### 7.1 Pre-Migration Checklist

**Preparation:**
```
□ STRUCTURE DESIGNED
  → New campaign structure mapped
  → Ad group themes defined
  → Keyword assignments made
  → Ad copy prepared

□ BASELINE DOCUMENTED
  → Current performance captured
  → Key metrics recorded
  → Screenshots taken
  → Historical data exported

□ STAKEHOLDERS ALIGNED
  → Management informed
  → Timeline approved
  → Expectations set
  → Resources allocated

□ TEAM PREPARED
  → Roles assigned
  → Training completed
  → Documentation available
  → Support plan ready

□ TIMING OPTIMAL
  → Not peak season
  → Adequate runway
  → No major conflicts
  → Team availability

□ TOOLS READY
  → Google Ads Editor installed
  → Spreadsheets prepared
  → Tracking verified
  → Reporting set up
```

### 7.2 Migration Execution

**Using Google Ads Editor:**
```
STEP 1: DOWNLOAD ACCOUNT
1. Open Google Ads Editor
2. Select account
3. Download full account
4. Wait for completion
5. Verify all campaigns loaded

STEP 2: CREATE NEW STRUCTURE
1. Create new campaigns
2. Set campaign settings
3. Create ad groups
4. Add keywords
5. Create ads
6. Set bids and budgets

STEP 3: COPY ASSETS
1. Copy high-performing ads
2. Copy negative keyword lists
3. Copy audience lists
4. Copy extensions
5. Copy conversion tracking

STEP 4: REVIEW CHANGES
1. Use "Review" tab
2. Check all changes
3. Verify settings
4. Check for errors
5. Validate structure

STEP 5: POST CHANGES
1. Click "Post"
2. Review posting results
3. Fix any errors
4. Confirm success
5. Verify in Google Ads UI

STEP 6: PAUSE OLD CAMPAIGNS
1. Select old campaigns
2. Change status to Paused
3. Post changes
4. Verify paused
5. Document completion
```

### 7.3 Post-Migration Monitoring

**First 48 Hours:**
```
HOURLY CHECKS (First 24 hours):

□ CAMPAIGN STATUS
  → All campaigns active?
  → Any disapprovals?
  → Budget allocation correct?
  → Bids applying?

□ DELIVERY CHECKS
  → Impressions serving?
  → Clicks coming in?
  → Spend pacing?
  → Any delivery issues?

□ TECHNICAL CHECKS
  → Tracking working?
  → Conversions firing?
  → Landing pages loading?
  → No errors?

DAILY CHECKS (Days 2-7):

□ PERFORMANCE METRICS
  → Impressions vs. baseline
  → Clicks vs. baseline
  → CTR comparison
  → CPC trends
  → Conversion volume
  → CPA/ROAS

□ DELIVERY METRICS
  → Impression share
  → Lost to rank
  → Lost to budget
  → Top of page rate
  → Absolute top rate

□ QUALITY METRICS
  → Quality Score trends
  → Ad relevance
  → Landing page experience
  → Expected CTR

□ SEARCH TERMS
  → Relevance check
  → New negatives needed
  → New opportunities
  → Any issues
```

**Week 2-4:**
```
WEEKLY ANALYSIS:

□ PERFORMANCE VS. BASELINE
  → Conversions: +/-%
  → CPA/ROAS: +/-%
  → Spend: +/-%
  → Revenue: +/-%

□ LEARNING PHASE STATUS
  → Exit learning phase?
  → Performance stabilizing?
  → Smart Bidding optimizing?
  → Any anomalies?

□ OPTIMIZATION OPPORTUNITIES
  → Bid adjustments
  → Budget reallocation
  → Ad improvements
  → Keyword additions

□ ISSUE RESOLUTION
  → Any delivery problems?
  → Tracking issues?
  → Disapprovals?
  → Technical problems?
```

---

## 8. Post-Restructure Optimization

### 8.1 Optimization Timeline

**90-Day Plan:**
```
DAYS 1-14: STABILIZATION

FOCUS:
→ Ensure delivery is normal
→ Fix any technical issues
→ Monitor learning phase
→ Minor adjustments only

ACTIONS:
□ Daily performance checks
□ Search term monitoring
□ Negative keyword additions
□ Disapproval resolution
□ Budget pacing checks

AVOID:
✗ Major bid changes
✗ Structural changes
✗ Pausing campaigns
✗ Significant budget shifts

DAYS 15-45: OPTIMIZATION

FOCUS:
→ Full optimization mode
→ Bid strategy refinement
→ Ad testing
→ Landing page improvements

ACTIONS:
□ Bid adjustments based on data
□ RSA asset optimization
□ Negative keyword expansion
□ Budget reallocation
□ A/B testing initiation
□ Quality Score improvements

MONITOR:
□ Performance trends
□ Learning phase exit
□ Smart Bidding effectiveness
□ ROI trajectory

DAYS 46-90: SCALING

FOCUS:
→ Scale what works
→ Expand successful elements
→ Advanced optimization
→ Strategic planning

ACTIONS:
□ Budget increases (20% increments)
□ Campaign expansion
□ New keyword testing
□ Advanced bid strategies
□ Portfolio strategies
□ PMax integration (if appropriate)

EVALUATE:
□ vs. Pre-restructure baseline
□ Management time savings
□ Team feedback
□ Strategic alignment
□ ROI improvement
```

### 8.2 Success Metrics

**Measuring Restructure Success:**
```
PERFORMANCE METRICS (30-90 days post):

EFFICIENCY:
✓ CPA reduced by 10%+
✓ ROAS increased by 15%+
✓ Quality Score improved 1+ point
✓ CTR improved 10%+

SCALE:
✓ Impression share increased
✓ Click volume maintained/grown
✓ Conversion volume maintained/grown
✓ Revenue maintained/grown

MANAGEMENT:
✓ Time spent reduced 20%+
✓ Easier to identify issues
✓ Faster optimization cycles
✓ Team satisfaction improved

STRATEGIC:
✓ Better aligned with goals
✓ More scalable structure
✓ Easier to test/iterate
✓ Clearer performance insights

RED FLAGS (May Need Reversal):

PERFORMANCE:
✗ CPA increased 30%+ after 60 days
✗ ROAS decreased 25%+ after 60 days
✗ Conversion volume down 30%+
✗ Quality Scores declining

DELIVERY:
✗ Impression share down 40%+
✗ Campaigns not spending
✗ Persistent delivery issues
✗ Learning phase never exits

MANAGEMENT:
✗ More time spent, not less
✗ Confusion on structure
✗ Can't identify issues
✗ Team frustrated

IF RED FLAGS APPEAR:
1. Diagnose root cause
2. Try targeted fixes first
3. Consider partial reversal
4. Document learnings
5. Plan next iteration
```

### 8.3 Documentation

**Restructure Documentation:**
```
DOCUMENT TO CREATE:

1. RESTRUCTURE PLAN
   → Original structure
   → New structure design
   → Migration approach
   → Timeline
   → Success metrics

2. MIGRATION CHECKLIST
   → All steps completed
   → Who completed each
   → When completed
   → Any issues encountered

3. BASELINE REPORT
   → Pre-restructure performance
   → Key metrics captured
   → Screenshots
   → Historical context

4. POST-MIGRATION REPORT
   → 30-day performance
   → 60-day performance
   → 90-day performance
   → vs. Baseline comparison

5. LESSONS LEARNED
   → What worked well
   → What didn't work
   → Surprises encountered
   → Recommendations for next time

6. OPERATING PROCEDURES
   → How to manage new structure
   → Optimization routines
   → Reporting cadence
   → Escalation procedures

STORE IN:
→ Shared drive
→ Documentation system
→ Team wiki
→ Accessible to all stakeholders
```

---

## Quick Reference: Restructure Decision Tree

```
START: Considering Restructure
│
├─ Is account > 90 days old?
│  ├─ NO → Wait, optimize instead
│  └─ YES → Continue
│
├─ Are there clear performance issues?
│  ├─ NO → Optimize current structure
│  └─ YES → Continue
│
├─ Is it peak season?
│  ├─ YES → Wait for calm period
│  └─ NO → Continue
│
├─ Do you have clear new structure?
│  ├─ NO → Design first
│  └─ YES → Continue
│
├─ Are resources available?
│  ├─ NO → Secure resources first
│  └─ YES → Continue
│
├─ SKAGs or STAGs?
│  ├─ High-value keywords only → SKAGs
│  └─ General campaigns → STAGs
│
├─ Smart Bidding appropriate?
│  ├─ YES → Portfolio strategies
│  └─ NO → Manual or Enhanced CPC
│
├─ Too many small campaigns?
│  ├─ YES → Consolidate
│  └─ NO → Maintain campaign count
│
└─ EXECUTE RESTRUCTURE
   → Follow migration process
   → Monitor closely
   → Optimize over 90 days
   → Document everything
```

---

## Resources

- **Google Ads Structure Guide:** support.google.com/google-ads/answer/7377398
- **SKAGs Best Practices:** support.google.com/google-ads/answer/7134466
- **Portfolio Strategies:** support.google.com/google-ads/answer/2975553
- **Account Reorganization:** support.google.com/google-ads/answer/2472733

---

*Last Updated: March 2026*
*Version: 2.1*
