# Campaign Setup Guide
## Step-by-Step Google Ads Build

---

## 📋 PRE-CAMPAIGN CHECKLIST

### Before You Start
- [ ] Client goals defined (leads, sales, calls, awareness)
- [ ] Target budget confirmed (daily/monthly)
- [ ] Target locations identified
- [ ] Target audience defined
- [ ] Keyword research completed
- [ ] Ad copy written (2-3 variations per ad group)
- [ ] Landing pages ready and tested
- [ ] Conversion tracking plan created
- [ ] Client access/permissions confirmed

---

## 🎯 STEP 1: CAMPAIGN CREATION

### 1.1 Access Google Ads
1. Go to [ads.google.com](https://ads.google.com)
2. Sign in to your account
3. Click **+ New Campaign** (blue button)

### 1.2 Choose Campaign Objective
**Select based on client goals:**

| Objective | Best For |
|-----------|----------|
| **Sales** | E-commerce, direct purchases |
| **Leads** | Service businesses, B2B, consultations |
| **Website Traffic** | Content sites, awareness |
| **Product & Brand Consideration** | Research phase, comparisons |
| **Brand Awareness & Reach** | Top of funnel, broad awareness |
| **App Promotion** | Mobile app installs |
| **Local Store Visits** | Brick & mortar locations |

### 1.3 Choose Campaign Type
**Search Network (Most Common)**
- Text ads on Google search results
- Best for: Intent-driven traffic
- Select: **Search**

**Display Network**
- Visual ads across websites
- Best for: Awareness, remarketing
- Select: **Display**

**Shopping**
- Product listings with images
- Best for: E-commerce
- Select: **Shopping**

**Video**
- YouTube ads
- Best for: Brand awareness, tutorials
- Select: **Video**

**Performance Max**
- All Google inventory, automated
- Best for: E-commerce with good data
- Select: **Performance Max**

### 1.4 Campaign Settings

#### Campaign Name
**Format:** `[Type] - [Goal] - [Location/Product] - [Date]`
**Example:** `Search - Leads - Plumber NYC - 2026-03`

#### Networks
- ☑️ **Search Network** (usually yes)
- ☐ **Display Network** (usually no for search campaigns)

#### Locations
- Select: **Enter another location**
- Choose: Country, State, City, or Radius
- **Location Options:** 
  - ☑️ Presence: People in or regularly in your targeted locations
  - ☐ Presence or interest (default - avoid)

#### Languages
- Select languages your customers speak
- Usually: **English** (or target market language)

#### Audience Segments (Optional)
- Add remarketing lists
- Add in-market audiences
- Add custom intent audiences

#### Start Date
- Set campaign start date
- Usually: Start immediately or next day

#### End Date
- Leave blank for ongoing campaigns
- Set for seasonal/promotional campaigns

#### Ad Schedule (Optional)
- Set specific days/hours
- Default: All days, all hours
- Adjust based on business hours/conversion data

#### Device Adjustments (Optional)
- Set bid adjustments by device
- Default: No adjustment
- Adjust after gathering data

---

## 💰 STEP 2: BUDGET & BIDDING

### 2.1 Budget
**Daily Budget Formula:**
```
Monthly Budget ÷ 30.4 = Daily Budget

Example: $3,000/month ÷ 30.4 = $98.68/day
```

**Budget Recommendations by Industry:**
| Industry | Min Daily | Recommended Daily |
|----------|-----------|-------------------|
| Local Services | $20 | $50-100 |
| E-commerce | $50 | $100-500 |
| B2B Services | $50 | $100-300 |
| Legal | $100 | $200-500 |
| Healthcare | $50 | $100-300 |
| Real Estate | $50 | $100-400 |

### 2.2 Bidding Strategy

#### Manual CPC (Recommended for New Campaigns)
- You control max CPC per keyword
- Best for: Learning, control, limited budgets
- **Set default bid:** Start with suggested bid × 0.8

#### Maximize Clicks
- Google optimizes for most clicks
- Best for: Traffic campaigns, learning
- **Set bid limit:** Yes, to control costs

#### Maximize Conversions
- Google optimizes for conversions
- Best for: Campaigns with 15+ conversions/month
- **Set target CPA:** Optional, after data gathered

#### Target CPA
- Google tries to hit your cost-per-acquisition
- Best for: Established campaigns with data
- **Set CPA:** Based on historical data or goals

#### Target ROAS
- Google optimizes for return on ad spend
- Best for: E-commerce with conversion values
- **Set ROAS:** Based on profit margins

#### Maximize Conversion Value
- Google optimizes for total conversion value
- Best for: E-commerce with varied order values

**Recommended Bidding Progression:**
```
Week 1-4: Manual CPC (gather data)
Week 5-8: Maximize Clicks or Conversions (optimize)
Week 9+: Target CPA or ROAS (scale)
```

---

## 🎯 STEP 3: AD GROUP STRUCTURE

### 3.1 Ad Group Organization

**Best Practice: Tightly Themed Ad Groups**
- 5-20 keywords per ad group
- All keywords closely related
- Specific ad copy for each group

**Example Structure for Plumber:**
```
Campaign: Search - Leads - Plumber NYC
├── Ad Group: Emergency Plumber
│   ├── [emergency plumber]
│   ├── [emergency plumber near me]
│   ├── "emergency plumbing service"
│   └── +emergency +plumber +24/7
├── Ad Group: Drain Cleaning
│   ├── [drain cleaning service]
│   ├── [drain cleaning near me]
│   ├── "professional drain cleaning"
│   └── +drain +cleaning +cost
├── Ad Group: Water Heater
│   ├── [water heater repair]
│   ├── [water heater installation]
│   ├── "water heater replacement"
│   └── +water +heater +service
└── Ad Group: General Plumbing
    ├── [plumber near me]
    ├── [local plumber]
    ├── "licensed plumber"
    └── +professional +plumbing +service
```

### 3.2 Create Ad Groups
1. Click **+ New Ad Group**
2. Enter ad group name (descriptive)
3. Set default bid (if using Manual CPC)
4. Continue to keywords

---

## 🔑 STEP 4: KEYWORDS

### 4.1 Add Keywords
1. Click **+ New Keywords**
2. Enter keywords (one per line)
3. Use match type symbols:
   - `[exact match]`
   - `"phrase match"`
   - `+broad +modifier`
   - `broad match` (no symbols)

### 4.2 Keyword Best Practices
- Start with exact and phrase match
- Use broad match cautiously (with smart bidding)
- Add negative keywords from day 1
- Group by intent and theme

### 4.3 Negative Keywords
**Add at Campaign or Account Level:**

1. Click **Negative Keywords**
2. Click **+ Negative Keyword**
3. Add list (one per line)

**Starter Negative List:**
```
free
cheap
jobs
hiring
career
salary
course
training
class
tutorial
DIY
do it yourself
pdf
download
torrent
crack
hack
wholesale
bulk
```

---

## 📝 STEP 5: AD CREATION

### 5.1 Create Responsive Search Ads (RSA)

1. Click **+ New Ad**
2. Select **Responsive Search Ad**
3. Fill in ad details:

#### Final URL
- Landing page URL (must be relevant)
- Use tracking template if needed

#### Display Path
- Path 1: `yoursite.com/`**service**
- Path 2: `yoursite.com/service/`**location**

#### Headlines (Up to 15, show 3)
**Include:**
- Keywords
- Value propositions
- CTAs
- Location (if local)
- Offers

**Best Practice:**
- Headlines 1-3: Most important (often shown)
- Headlines 4-10: Variations
- Headlines 11-15: Additional options

#### Descriptions (Up to 4, show 2)
**Include:**
- Benefits
- Social proof
- CTAs
- Offers/guarantees

### 5.2 Ad Example

**Ad Group: Emergency Plumber**

**Headlines:**
```
1. Emergency Plumber 24/7
2. Licensed & Insured Pros
3. Same-Day Service
4. Free Estimates
5. Call Now For Help
6. Top-Rated Local Plumber
7. No Extra Charge Nights
8. Fast Response Time
9. 100% Satisfaction
10. NYC's Trusted Plumber
```

**Descriptions:**
```
1. Licensed plumbers ready 24/7. Fast response, fair prices. Call now for immediate help!
2. Same-day plumbing service. Upfront pricing. 5-star rated. Your satisfaction guaranteed.
```

**Display Path:**
```
yoursite.com/Emergency-Plumber
```

**Final URL:**
```
https://yoursite.com/emergency-plumbing-nyc
```

---

## 📎 STEP 6: AD EXTENSIONS (ASSETS)

### 6.1 Sitelink Extensions
**Add 4-6 sitelinks minimum**

1. Click **Assets** → **Sitelinks**
2. Click **+ New Sitelink**
3. Fill in:
   - Link text (25 chars)
   - Description line 1 (35 chars)
   - Description line 2 (35 chars)
   - Final URL

**Example Sitelinks:**
```
Link: View Our Services
Desc 1: Plumbing, HVAC, Electrical
Desc 2: Licensed Professionals
URL: /services

Link: Get Free Estimate
Desc 1: No Obligation Quote
Desc 2: Call or Request Online
URL: /quote

Link: Emergency Service
Desc 1: Available 24/7
Desc 2: Fast Response Guaranteed
URL: /emergency

Link: Customer Reviews
Desc 1: 500+ Five-Star Reviews
Desc 2: See What Customers Say
URL: /reviews
```

### 6.2 Callout Extensions
**Add 4-6 callouts**

```
✓ Licensed & Insured
✓ 24/7 Emergency Service
✓ Free Estimates
✓ Same-Day Service
✓ 5-Star Rated
✓ Satisfaction Guaranteed
✓ No Hidden Fees
✓ Local & Trusted
```

### 6.3 Structured Snippet Extensions
**Choose category and add values**

**Categories:**
- Services
- Types
- Models
- Brands
- Neighborhoods
- Insurance carriers
- Courses

**Example (Services):**
```
Drain Cleaning
Water Heaters
Pipe Repair
Leak Detection
Sewer Line
Fixture Installation
```

### 6.4 Call Extension
**Add phone number**

1. Click **Assets** → **Calls**
2. Click **+ New Call Asset**
3. Enter phone number
4. Set call schedule
5. Enable call reporting

### 6.5 Location Extension
**Link Google Business Profile**

1. Click **Assets** → **Locations**
2. Link Google Business Profile
3. Select locations to show

### 6.6 Price Extension
**Show pricing**

1. Click **Assets** → **Prices**
2. Choose price type
3. Add price entries with descriptions

---

## 📊 STEP 7: CONVERSION TRACKING

### 7.1 Set Up Conversion Actions

1. Click **Tools & Settings** → **Measurement** → **Conversions**
2. Click **+ New Conversion Action**
3. Choose source:

#### Website Conversions
- Install Google Ads tag
- Set up specific actions:
  - Purchase
  - Lead form submission
  - Phone call from website
  - Chat initiation
  - Email signup

#### Phone Call Conversions
- Calls from ads
- Calls to phone number on website
- Click-to-call on mobile

#### App Conversions
- App installs
- In-app actions

#### Import Conversions
- From Google Analytics
- From CRM
- Upload call data

### 7.2 Conversion Settings

**For Each Conversion Action:**
- **Category:** Select appropriate category
- **Value:** 
  - Same value for each conversion
  - Different values (if known)
  - Don't assign value
- **Count:**
  - Every (for sales)
  - One (for leads)
- **Conversion Window:** 30-90 days
- **Include in Conversions:** Yes (usually)

### 7.3 Install Conversion Tag

**Option 1: Google Tag Manager (Recommended)**
1. Copy conversion ID and label
2. Add to GTM as Google Ads Conversion Tracking tag
3. Set trigger (form submission, thank you page, etc.)
4. Test and publish

**Option 2: Direct Installation**
1. Copy global site tag
2. Paste between `<head>` tags on all pages
3. Copy event snippet
4. Paste on conversion confirmation page

---

## ✅ STEP 8: PRE-LAUNCH REVIEW

### Campaign Checklist
- [ ] Campaign name follows convention
- [ ] Objective matches client goal
- [ ] Locations correctly set
- [ ] Languages correct
- [ ] Budget set appropriately
- [ ] Bidding strategy selected
- [ ] Ad schedule set (if needed)

### Ad Group Checklist
- [ ] Ad groups tightly themed
- [ ] 5-20 keywords per group
- [ ] Match types appropriate
- [ ] Negative keywords added
- [ ] Keywords relevant to landing page

### Ad Checklist
- [ ] 2-3 ads per ad group
- [ ] Keywords in headlines
- [ ] Clear value proposition
- [ ] Strong CTAs
- [ ] No policy violations
- [ ] Final URLs working

### Extensions Checklist
- [ ] Sitelinks (4+ added)
- [ ] Callouts (4+ added)
- [ ] Structured snippets added
- [ ] Call extension added
- [ ] Location extension (if applicable)

### Tracking Checklist
- [ ] Conversion actions created
- [ ] Tags installed correctly
- [ ] Test conversion completed
- [ ] Google Analytics linked
- [ ] Call tracking set up (if needed)

---

## 🚀 STEP 9: LAUNCH

### 9.1 Final Steps
1. Review entire campaign
2. Check for policy warnings
3. Fix any disapproved ads
4. Click **Publish Campaign**

### 9.2 First 24 Hours
- Monitor impression share
- Check for disapproved ads
- Verify tracking is working
- Review search terms report

### 9.3 First Week
- Daily check-ins recommended
- Pause obvious poor performers
- Add negative keywords from search terms
- Adjust bids on clear winners/losers

---

## 📈 STEP 10: OPTIMIZATION SCHEDULE

### Daily Tasks (5-10 minutes)
- [ ] Check budget pacing
- [ ] Review any disapproved ads
- [ ] Check for significant changes

### Weekly Tasks (30-60 minutes)
- [ ] Review search terms report
- [ ] Add negative keywords
- [ ] Pause low-performing keywords
- [ ] Adjust bids on winners/losers
- [ ] Review ad performance
- [ ] Check quality scores

### Monthly Tasks (2-3 hours)
- [ ] Full account audit
- [ ] Competitor analysis
- [ ] Landing page review
- [ ] Ad copy refresh
- [ ] Keyword expansion
- [ ] Report to client
- [ ] Strategy adjustments

---

## 🎓 COMMON MISTAKES TO AVOID

1. **Sending traffic to homepage** → Use specific landing pages
2. **Using broad match without data** → Start with exact/phrase
3. **Not using negative keywords** → Add from day 1
4. **Only 1 ad per ad group** → Test 2-3 minimum
5. **Ignoring mobile** → Optimize for mobile first
6. **No conversion tracking** → Set up before launch
7. **Giving up too soon** → Allow 2-4 weeks for data
8. **Not reviewing search terms** → Check weekly
9. **Ignoring quality score** → Optimize for QS 7+
10. **Setting and forgetting** → Optimize regularly

---

## 📞 NEED HELP?

**Google Ads Support:**
- Help Center: support.google.com/google-ads
- Community Forum: support.google.com/google-ads/community
- Phone Support: Available in account (varies by country)

**Internal Escalation:**
- Senior PPC Specialist: [Contact]
- Account Manager: [Contact]
- Technical Support: [Contact]

---

**Guide Version:** 1.0  
**Last Updated:** 2026-03-21  
**Created by:** Google Ads Service Team
