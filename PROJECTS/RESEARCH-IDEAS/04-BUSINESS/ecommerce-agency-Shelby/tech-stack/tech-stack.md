# Tech Stack

## Analytics, Testing Tools, Email Platforms, Ads Managers

---

## Tech Stack Overview

### By Category

| Category | Essential Tools | Nice-to-Have | Enterprise |
|----------|----------------|--------------|------------|
| **E-Commerce Platform** | Shopify | WooCommerce | Shopify Plus, BigCommerce |
| **Analytics** | GA4, Pixel | Triple Whale | Northbeam, Rockerbox |
| **Email/SMS** | Klaviyo | Attentive, Postscript | Braze, Customer.io |
| **Ads Management** | Meta BM, Google Ads | TikTok Ads, Pinterest | Skai, Pacvue |
| **CRO/Testing** | Hotjar, Google Optimize alt | VWO, Optimizely | Optimizely, AB Tasty |
| **Help Desk** | Gorgias | Zendesk | Zendesk, Salesforce |
| **Reviews** | Judge.me, Yotpo | Okendo | Yotpo, Okendo |
| **Subscriptions** | Recharge, Skio | Appstle | Recharge, Skio |
| **Loyalty** | Smile.io | Yotpo, LoyaltyLion | LoyaltyLion, Yotpo |
| **Page Builder** | PageFly, GemPages | Shogun | Shogun, PageFly |
| **Project Mgmt** | Asana, ClickUp | Monday, Notion | Asana, Monday |
| **Communication** | Slack | Microsoft Teams | Slack, Teams |
| **Documentation** | Notion, Google Docs | Confluence | Notion, Confluence |

---

## Analytics Stack

### Google Analytics 4 (GA4)

**Purpose**: Core website analytics, conversion tracking

**Pricing**: Free

**Setup Checklist**:
- [ ] Create GA4 property
- [ ] Install GA4 tag (via GTM or direct)
- [ ] Configure enhanced e-commerce
- [ ] Set up conversion events:
  - view_item
  - add_to_cart
  - begin_checkout
  - add_payment_info
  - add_shipping_info
  - purchase
- [ ] Link to Google Ads
- [ ] Set up audiences
- [ ] Configure data retention settings
- [ ] Create custom reports

**Key Reports**:
- Acquisition overview
- E-commerce purchases
- Funnel exploration
- Path exploration
- User explorer

**Pros**: Free, comprehensive, Google ecosystem integration
**Cons**: Steep learning curve, privacy changes impacting data

---

### Meta Pixel + CAPI

**Purpose**: Facebook/Instagram conversion tracking

**Pricing**: Free

**Setup Checklist**:
- [ ] Create Meta Pixel
- [ ] Install Pixel via Shopify/partner
- [ ] Configure standard events:
  - PageView
  - ViewContent
  - AddToCart
  - InitiateCheckout
  - AddPaymentInfo
  - AddShippingInfo
  - Purchase
- [ ] Set up Conversions API (CAPI)
- [ ] Configure event matching quality
- [ ] Verify domain
- [ ] Set up Aggregated Event Measurement
- [ ] Test events in Events Manager

**Key Metrics**:
- Purchase conversion value
- ROAS by campaign
- CPA by ad set
- Frequency
- CTR

**Pros**: Essential for Meta ads, detailed audience building
**Cons**: iOS14+ limitations, data discrepancies

---

### Triple Whale

**Purpose**: E-commerce analytics, attribution, reporting

**Pricing**: $129-499/month (based on revenue)

**Key Features**:
- Unified dashboard (ads, email, organic)
- Attribution modeling (first-click, last-click, linear)
- Profit tracking (COGS, shipping, fees)
- Customer journey visualization
- Cohort analysis
- Automated reporting
- Slack notifications

**Best For**: DTC brands doing $500K+/month

**Pros**: Easy to use, e-commerce focused, good visualization
**Cons**: Cost, still relies on platform data

---

### Northbeam

**Purpose**: Multi-touch attribution, marketing mix modeling

**Pricing**: $2,000-5,000/month

**Key Features**:
- Multi-touch attribution
- Marketing mix modeling
- Incrementality testing
- Cross-channel reporting
- Customer journey mapping
- Cohort LTV analysis
- Creative performance

**Best For**: Brands spending $200K+/month on ads

**Pros**: Most accurate attribution, enterprise-grade
**Cons**: Expensive, complex setup

---

### Microsoft Clarity

**Purpose**: Session recordings, heatmaps

**Pricing**: Free

**Key Features**:
- Unlimited session recordings
- Heatmaps (click, scroll, move)
- Rage clicks detection
- Dead clicks detection
- Session filters
- Integrations (GA4, Hotjar)

**Best For**: All brands (it's free!)

**Pros**: Free, unlimited, easy to use
**Cons**: Less features than paid tools

---

### Hotjar

**Purpose**: Heatmaps, session recordings, surveys

**Pricing**: $0-800/month

**Plans**:
- Basic: Free (1,000 sessions/day)
- Plus: $39/month (2,000 sessions/day)
- Business: $213/month (4,000 sessions/day)
- Scale: Custom

**Key Features**:
- Heatmaps
- Session recordings
- Incoming feedback
- Surveys
- User interviews (paid add-on)

**Best For**: CRO programs, UX research

**Pros**: Easy to use, good free tier, surveys included
**Cons**: Session limits on lower tiers

---

## Email & SMS Stack

### Klaviyo

**Purpose**: Email and SMS marketing automation

**Pricing**: Free-$2,000+/month (based on contacts)

**Pricing Tiers**:
- Free: Up to 250 contacts, 500 emails/month
- Email: $20-850/month (250-150K contacts)
- SMS: Pay-as-you-go or bundles

**Key Features**:
- Drag-and-drop email builder
- SMS marketing
- Advanced segmentation
- Flows (automations)
- A/B testing
- Predictive analytics
- Integrations (Shopify, Meta, Google)
- Deliverability tools

**Essential Flows**:
1. Welcome Series (5-7 emails)
2. Abandoned Cart (3-5 emails)
3. Browse Abandonment (2-3 emails)
4. Checkout Abandonment (2-3 emails)
5. Post-Purchase (4-6 emails)
6. Win-Back (3-5 emails)
7. VIP/Loyalty (ongoing)

**Best For**: Most e-commerce brands

**Pros**: E-commerce focused, powerful segmentation, good deliverability
**Cons**: Can get expensive at scale, SMS costs add up

---

### Attentive

**Purpose**: SMS marketing platform

**Pricing**: Custom (typically $500-5,000+/month)

**Key Features**:
- SMS campaigns
- SMS flows
- Signup forms
- Segmentation
- A/B testing
- Integrations

**Best For**: Brands doing $5M+ annually

**Pros**: Enterprise features, dedicated support, high deliverability
**Cons**: Expensive, minimum commitments

---

### Postscript

**Purpose**: SMS marketing platform

**Pricing**: $0-2,000+/month (based on SMS credits)

**Plans**:
- Free: Up to 100 contacts
- Paid: $25-2,000+/month

**Key Features**:
- SMS campaigns
- SMS flows
- Signup forms
- Segmentation
- Two-way messaging
- Integrations

**Best For**: SMB to mid-market brands

**Pros**: Affordable, easy to use, good Shopify integration
**Cons**: Less advanced than Attentive

---

## Ads Management Stack

### Meta Ads Manager

**Purpose**: Facebook and Instagram advertising

**Pricing**: Free (pay for ad spend)

**Key Features**:
- Campaign creation and management
- Audience targeting
- Creative management
- A/B testing
- Conversion tracking
- Reporting
- Catalog sales
- Dynamic ads

**Best Practices**:
- Use Campaign Budget Optimization (CBO)
- Test 3-5 creatives per ad set
- Refresh creatives every 2-4 weeks
- Use broad targeting with good creative
- Implement CAPI for better tracking

**Pros**: Massive reach, sophisticated targeting, good for DTC
**Cons**: iOS14+ impact, account bans, learning phase

---

### Google Ads

**Purpose**: Search, Shopping, Display, YouTube advertising

**Pricing**: Free (pay for ad spend)

**Campaign Types**:
- Search (text ads on search results)
- Shopping (product listings)
- Performance Max (automated across Google properties)
- Display (banner ads)
- YouTube (video ads)
- Discovery (feed-based ads)

**Key Features**:
- Keyword targeting
- Audience targeting
- Smart bidding
- Responsive ads
- Conversion tracking
- Merchant Center integration

**Best Practices**:
- Start with Shopping and Search
- Use Performance Max for scale
- Implement conversion tracking
- Use negative keywords
- Optimize product feeds

**Pros**: High intent (search), massive reach, good for scaling
**Cons**: Complex, can be expensive, learning curve

---

### TikTok Ads Manager

**Purpose**: TikTok advertising

**Pricing**: Free (pay for ad spend, $500 minimum)

**Key Features**:
- In-feed ads
- TopView ads
- Branded hashtag challenges
- Branded effects
- Spark Ads (boost organic posts)
- Creator marketplace

**Best Practices**:
- Use native-looking creative (UGC style)
- Hook in first 2 seconds
- Test Spark Ads (often outperform)
- Target broad audiences
- Refresh creative weekly

**Pros**: Younger audience, viral potential, lower CPMs
**Cons**: Creative-intensive, younger demo, attribution challenges

---

### Pinterest Ads

**Purpose**: Pinterest advertising

**Pricing**: Free (pay for ad spend)

**Key Features**:
- Promoted Pins
- Shopping ads
- Video ads
- Carousel ads
- Audience targeting
- Conversion tracking

**Best Practices**:
- Use vertical creative (2:3 ratio)
- Focus on lifestyle imagery
- Target by interest and keyword
- Use Shopping ads for products
- Plan for longer conversion window

**Pros**: High purchase intent, visual platform, less competitive
**Cons**: Smaller audience, longer conversion cycle

---

## CRO & Testing Stack

### Optimizely

**Purpose**: A/B testing and personalization

**Pricing**: $0-50,000+/year

**Plans**:
- 360: Custom pricing (enterprise)
- Web: $0-2,000+/month

**Key Features**:
- Visual editor
- A/B testing
- Multivariate testing
- Personalization
- Feature flags
- Server-side testing
- Stats engine

**Best For**: Mid-market to enterprise

**Pros**: Powerful, enterprise-grade, good support
**Cons**: Expensive, complex for beginners

---

### VWO (Visual Website Optimizer)

**Purpose**: A/B testing and optimization

**Pricing**: $0-3,000+/month

**Plans**:
- Free: Up to 10K monthly visitors
- Growth: $0-200/month
- Pro: $333-1,000/month
- Enterprise: Custom

**Key Features**:
- Visual editor
- A/B testing
- Multivariate testing
- Split URL testing
- Heatmaps
- Session recordings
- Surveys

**Best For**: SMB to mid-market

**Pros**: Good value, all-in-one (testing + heatmaps), easy to use
**Cons**: Less powerful than Optimizely

---

### Convert

**Purpose**: Privacy-focused A/B testing

**Pricing**: $0-700/month

**Plans**:
- Free: Up to 10K monthly visitors
- Pro: $59-300/month
- Premium: $350-700/month
- Enterprise: Custom

**Key Features**:
- Visual editor
- A/B testing
- Multivariate testing
- Server-side testing
- GDPR compliant
- No cookie consent needed

**Best For**: Privacy-conscious brands, EU companies

**Pros**: Privacy-focused, good features, reasonable pricing
**Cons**: Smaller company, less brand recognition

---

## E-Commerce Platform Apps

### Judge.me

**Purpose**: Product reviews

**Pricing**: Free-$15/month

**Plans**:
- Free: Unlimited reviews, basic features
- Premium: $15/month (advanced features)

**Key Features**:
- Product reviews
- Photo/video reviews
- Review requests
- Widgets (carousel, grid, etc.)
- Import reviews
- SEO rich snippets

**Best For**: Most Shopify stores

**Pros**: Affordable, good features, easy to use
**Cons**: Less polished than premium options

---

### Yotpo

**Purpose**: Reviews, loyalty, referrals

**Pricing**: $0-500+/month

**Plans**:
- Free: Up to 50 orders/month
- Growth: $19-149/month
- Premium: $199-499/month
- Enterprise: Custom

**Key Features**:
- Product reviews
- Photo/video reviews
- Review requests
- Loyalty program
- Referrals
- SMS marketing
- Analytics

**Best For**: Growing to enterprise brands

**Pros**: Comprehensive, good integrations, scalable
**Cons**: Can get expensive, aggressive upselling

---

### Recharge

**Purpose**: Subscription management

**Pricing**: $0-500+/month + 1% transaction fee

**Plans**:
- Standard: Free + 1% + $0.49/transaction
- Pro: $200-500/month + reduced fees
- Enterprise: Custom

**Key Features**:
- Subscription management
- Customer portal
- Dunning management
- Analytics
- Integrations

**Best For**: Subscription e-commerce brands

**Pros**: Market leader, robust features, good integrations
**Cons**: Transaction fees, can be complex

---

### Skio

**Purpose**: Subscription management (Shopify-focused)

**Pricing**: $250-1,000+/month (no transaction fees)

**Key Features**:
- Subscription management
- Customer portal
- SMS notifications
- Retention tools
- Analytics
- Integrations

**Best For**: Shopify subscription brands

**Pros**: No transaction fees, modern UX, Shopify-native
**Cons**: Shopify only, newer than Recharge

---

### Smile.io

**Purpose**: Loyalty and rewards

**Pricing**: $0-500+/month

**Plans**:
- Free: Up to 200 orders/month
- Plus: $49-199/month
- Pro: $299-500/month
- Enterprise: Custom

**Key Features**:
- Points program
- VIP tiers
- Referrals
- Rewards
- Integrations

**Best For**: SMB to mid-market

**Pros**: Easy to use, affordable, good integrations
**Cons**: Limited customization on lower tiers

---

### PageFly

**Purpose**: Landing page builder

**Pricing**: $0-100+/month

**Plans**:
- Free: 1 published page
- Basic: $24/month (5 pages)
- Pro: $74/month (unlimited pages)
- Enterprise: Custom

**Key Features**:
- Drag-and-drop builder
- Templates
- Mobile optimization
- SEO tools
- Integrations
- A/B testing (Pro+)

**Best For**: Shopify stores needing custom pages

**Pros**: Easy to use, good templates, affordable
**Cons**: Can slow site if overused

---

## Help Desk & Support

### Gorgias

**Purpose**: Customer support helpdesk

**Pricing**: $0-900+/month

**Plans**:
- Free: Up to 50 tickets/month
- Basic: $60/month (350 tickets)
- Pro: $225-900/month (1,000-5,000 tickets)
- Advanced: Custom

**Key Features**:
- Multi-channel (email, chat, social)
- Shopify integration
- Macros (canned responses)
- Automation rules
- Customer data sidebar
- Analytics

**Best For**: Shopify stores

**Pros**: Shopify-native, easy to use, good automation
**Cons**: Can get expensive, Shopify-focused

---

### Zendesk

**Purpose**: Customer support helpdesk

**Pricing**: $0-200+/agent/month

**Plans**:
- Suite Team: $0-19/agent/month
- Suite Growth: $49-79/agent/month
- Suite Pro: $95-115/agent/month
- Suite Enterprise: Custom

**Key Features**:
- Multi-channel support
- Ticketing
- Knowledge base
- Chat
- Automation
- Analytics
- Integrations

**Best For**: All business sizes

**Pros**: Scalable, comprehensive, good integrations
**Cons**: Can be complex, pricing adds up

---

## Project Management

### Asana

**Purpose**: Project and task management

**Pricing**: $0-30+/user/month

**Plans**:
- Basic: Free (up to 15 users)
- Premium: $13.49/user/month
- Business: $30.49/user/month
- Enterprise: Custom

**Key Features**:
- Task management
- Projects
- Timeline view
- Custom fields
- Automation
- Reporting
- Integrations

**Best For**: Teams of all sizes

**Pros**: Intuitive, good features, scalable
**Cons**: Can get expensive, feature overload

---

### ClickUp

**Purpose**: All-in-one project management

**Pricing**: $0-19+/user/month

**Plans**:
- Free: Free (unlimited users)
- Unlimited: $9/user/month
- Business: $19/user/month
- Enterprise: Custom

**Key Features**:
- Task management
- Docs
- Goals
- Whiteboards
- Time tracking
- Automation
- Reporting
- Integrations

**Best For**: Teams wanting all-in-one solution

**Pros**: Feature-rich, affordable, customizable
**Cons**: Can be overwhelming, learning curve

---

### Monday.com

**Purpose**: Work operating system

**Pricing**: $0-24+/user/month

**Plans**:
- Free: Free (up to 2 users)
- Basic: $9/user/month
- Standard: $12/user/month
- Pro: $19/user/month
- Enterprise: Custom

**Key Features**:
- Workflows
- Task management
- Dashboards
- Automations
- Integrations
- Reporting
- Time tracking

**Best For**: Visual teams, operations

**Pros**: Visual, customizable, good automation
**Cons**: Can get expensive, pricing by user

---

## Communication

### Slack

**Purpose**: Team communication

**Pricing**: $0-15+/user/month

**Plans**:
- Free: Free (90-day history)
- Pro: $8.75/user/month
- Business+: $15/user/month
- Enterprise: Custom

**Key Features**:
- Channels
- Direct messages
- File sharing
- Integrations
- Huddles (audio)
- Canvas (docs)
- Workflow builder

**Best For**: All teams

**Pros**: Industry standard, great integrations, easy to use
**Cons**: Can be distracting, expensive at scale

---

## Documentation

### Notion

**Purpose**: All-in-one workspace

**Pricing**: $0-20+/user/month

**Plans**:
- Free: Free (personal use)
- Plus: $10/user/month
- Business: $18/user/month
- Enterprise: Custom

**Key Features**:
- Docs
- Wikis
- Databases
- Projects
- Calendar
- Templates
- Integrations

**Best For**: Documentation, wikis, knowledge bases

**Pros**: Flexible, all-in-one, good templates
**Cons**: Can be slow, learning curve

---

## Tech Stack by Stage

### Starter ($0-1M revenue)

**Budget**: $200-500/month

```
E-Commerce: Shopify ($39-105/month)
Analytics: GA4 (Free) + Meta Pixel (Free) + Clarity (Free)
Email: Klaviyo (Free-$100/month)
Reviews: Judge.me (Free)
Help Desk: Gorgias Free or email
Project Mgmt: Asana Free or ClickUp Free
Communication: Slack Free
Documentation: Notion Free
```

### Growth ($1M-10M revenue)

**Budget**: $1,000-5,000/month

```
E-Commerce: Shopify ($105-399/month)
Analytics: GA4 + Triple Whale ($129-299/month) + Hotjar ($39-213/month)
Email: Klaviyo ($200-850/month) + Postscript ($100-500/month)
Reviews: Yotpo ($19-149/month) or Judge.me Premium ($15/month)
Subscriptions: Recharge or Skio ($200-500/month)
Loyalty: Smile.io ($49-199/month)
Help Desk: Gorgias ($225-450/month)
Page Builder: PageFly ($74/month)
Project Mgmt: Asana Premium or ClickUp Business
Communication: Slack Pro
Documentation: Notion Plus
```

### Scale ($10M-50M revenue)

**Budget**: $5,000-20,000/month

```
E-Commerce: Shopify Plus ($2,300/month)
Analytics: Northbeam ($2,000-5,000/month) + Hotjar Business ($213+/month)
Email: Klaviyo ($850-2,000+/month) + Attentive ($2,000-5,000/month)
Reviews: Yotpo Premium ($199-499/month)
Subscriptions: Skio or Recharge Pro ($500-1,000/month)
Loyalty: LoyaltyLion or Yotpo ($500-2,000/month)
Help Desk: Gorgias Advanced or Zendesk ($500-2,000/month)
CRO: Optimizely or VWO Pro ($500-2,000/month)
Project Mgmt: Asana Business or Monday Pro
Communication: Slack Business+
Documentation: Notion Business
```

### Enterprise ($50M+ revenue)

**Budget**: $20,000+/month

```
E-Commerce: Shopify Plus or Custom ($2,300-10,000/month)
Analytics: Northbeam Enterprise + Custom data warehouse
Email: Klaviyo Enterprise + Attentive Enterprise
Reviews: Yotpo Enterprise
Subscriptions: Skio or Recharge Enterprise
Loyalty: Custom or Enterprise loyalty platform
Help Desk: Zendesk Enterprise or Salesforce
CRO: Optimizely 360
Project Mgmt: Asana Enterprise or Monday Enterprise
Communication: Slack Enterprise
Documentation: Notion Enterprise or Confluence
```

---

## Integration Best Practices

### Data Flow

```
Shopify → Klaviyo (customer data, orders)
Shopify → GA4 (e-commerce events)
Shopify → Meta (Pixel + CAPI)
Shopify → Google Ads (conversion tracking)
Klaviyo → Meta (email list sync for audiences)
Klaviyo → Google (customer match)
All platforms → Triple Whale/Northbeam (unified reporting)
```

### Naming Conventions

**UTM Parameters**:
```
utm_source: facebook, google, email, sms
utm_medium: cpc, cpm, email, sms
utm_campaign: [campaign_name]
utm_content: [creative_variant]
utm_term: [keyword - for search]
```

**Campaign Naming**:
```
[Campaign Type]_[Audience]_[Creative]_[Date]

Examples:
- TOF_BroadUGC_Jan24
- MOF_ATC_Retarget_Jan24
- BOF_Purchase_Retarget_Jan24
```

---

## Summary

```
Tech Stack Principles:

1. Start simple (don't over-tool early)
2. Add tools as you scale (not before)
3. Prioritize integration (tools should talk to each other)
4. Train your team (tools are only as good as the users)
5. Review quarterly (kill tools that aren't delivering)

ROI Framework:
- Tool cost < Value delivered
- Time saved > Time spent managing
- Data quality improves decisions
- Team adoption is high

Red Flags:
- Tool sprawl (too many tools)
- Low adoption (< 50% of team using)
- No clear owner for each tool
- No regular review process
```

---

**Need help choosing tools?**

We offer a **Tech Stack Audit** ($2,500) that includes:
- Current stack review
- Gap analysis
- Recommendations by priority
- Implementation roadmap
- Cost optimization

**Contact us** to get started.
