# Shelby AR Experiences — Platform Specification Document

**Version:** 1.0  
**Created:** March 23, 2026  
**Status:** Active  

---

## Executive Summary

Shelby AR Experiences is a full-service augmented reality production platform delivering custom AR solutions for brands, retailers, educators, museums, and enterprises. This document outlines the complete service architecture, technology stack, production workflows, pricing models, and growth projections.

---

## 1. Service Offerings

### 1.1 AR Filters & Lenses
**Description:** Custom face filters, world effects, and interactive lenses for social platforms.

**Deliverables:**
- Face tracking filters (beauty, transformation, gamification)
- World AR effects (floor effects, sky replacements, object placement)
- Interactive game lenses (quizzes, challenges, mini-games)
- Branded effect libraries (5-50 filter packs)

**Platforms:** Instagram, TikTok, Snapchat, Facebook

**Technical Specs:**
- Max polygon count: 30,000 triangles
- Texture resolution: 1024x1024 to 2048x2048
- Frame rate: 30-60 FPS target
- File size: <10MB (Instagram), <4MB (Snapchat)

---

### 1.2 Product Visualization
**Description:** 3D product models with AR try-on and placement capabilities.

**Deliverables:**
- Photorealistic 3D product models
- AR try-on (eyewear, jewelry, cosmetics, apparel)
- Room placement (furniture, decor, appliances)
- Interactive product configurators

**Technical Specs:**
- Model formats: GLB/GLTF, USDZ
- PBR materials (albedo, normal, roughness, metallic)
- LOD (Level of Detail): 3 levels optimized for mobile
- WebAR integration via 8th Wall or model-viewer

---

### 1.3 AR Marketing Campaigns
**Description:** Full-campaign AR experiences tied to product launches, events, or brand activations.

**Deliverables:**
- Campaign concept & creative direction
- Multi-platform AR deployment (3-5 platforms)
- Analytics dashboard integration
- Campaign management (4-12 weeks)
- Performance reporting

**Includes:**
- Landing page with AR integration
- Social media asset package
- QR code generation & print materials
- Influencer activation kit

---

### 1.4 Educational AR
**Description:** Interactive learning experiences for schools, museums, and training programs.

**Deliverables:**
- Interactive 3D educational models (anatomy, history, science)
- Gamified learning modules
- Museum exhibit AR overlays
- Training simulations (safety, procedures, equipment)

**Technical Specs:**
- Accessibility compliance (WCAG 2.1 AA)
- Multi-language support (up to 10 languages)
- Offline mode capability
- LMS integration (SCORM, xAPI)

---

### 1.5 Enterprise AR
**Description:** Custom AR solutions for internal business operations and customer engagement.

**Deliverables:**
- AR manuals & documentation
- Remote assistance tools
- Warehouse/logistics visualization
- Sales & demo tools
- Custom AR apps (iOS/Android)

**Technical Specs:**
- Enterprise SSO integration
- Private deployment options
- API access for CRM/ERP integration
- Admin dashboard for content management

---

## 2. Technology Stack

### 2.1 Core Development Platforms

| Platform | Use Case | License Cost |
|----------|----------|--------------|
| **Spark AR Studio** | Instagram/Facebook filters | Free |
| **Lens Studio** | Snapchat lenses | Free |
| **Effect House** | TikTok effects | Free |
| **8th Wall** | WebAR (browser-based) | $99-999/mo |
| **Adobe Aero** | Quick AR prototyping | $9.99/mo |

### 2.2 Mobile AR Frameworks

| Framework | Platform | Use Case |
|-----------|----------|----------|
| **ARKit 6** | iOS | Native iOS AR apps |
| **ARCore** | Android | Native Android AR apps |
| **Unity + AR Foundation** | Cross-platform | Custom AR applications |
| **Unreal Engine** | High-fidelity | Premium visual experiences |

### 2.3 3D Creation Tools

| Tool | Purpose | License |
|------|---------|---------|
| **Blender** | 3D modeling, animation | Free |
| **Maya** | Professional 3D | $1,875/yr |
| **Cinema 4D** | Motion graphics | $719/yr |
| **Substance Painter** | Texture painting | $19.90/mo |
| **ZBrush** | High-detail sculpting | $39.95/mo |

### 2.4 Web Technologies

- **Three.js** — 3D rendering in browser
- **A-Frame** — WebVR/AR framework
- **model-viewer** — Google's web component
- **WebXR API** — Native browser AR/VR
- **Niantic Lightship** — Advanced WebAR features

### 2.5 Backend & Infrastructure

- **AWS S3** — Asset storage & CDN
- **Cloudflare** — Global content delivery
- **Firebase** — Analytics, authentication
- **Node.js/Express** — API layer
- **PostgreSQL** — Project & client database

---

## 3. Use Cases

### 3.1 Social Media Filters
**Clients:** Beauty brands, fashion labels, entertainment companies

**Examples:**
- Virtual makeup try-on (lipstick, eyeshadow, foundation)
- Hair color/style transformation
- Branded character masks
- Viral challenge filters

**Metrics:**
- Average engagement: 15-30 seconds per use
- Share rate: 8-15%
- Target: 1M+ uses per campaign

---

### 3.2 E-Commerce Try-On
**Clients:** Retailers, DTC brands, marketplaces

**Examples:**
- Eyewear virtual try-on (Warby Parker model)
- Jewelry visualization (rings, necklaces, watches)
- Shoe try-on with foot tracking
- Cosmetics shade matching

**ROI Metrics:**
- Reduction in returns: 25-40%
- Conversion rate increase: 20-90%
- Average order value increase: 15-30%

---

### 3.3 Museum & Cultural Exhibits
**Clients:** Museums, historical sites, galleries

**Examples:**
- Artifact reconstruction (show original state)
- Historical scene overlays
- Interactive educational tours
- Artist commentary via AR

**Features:**
- GPS-triggered content
- Image recognition for exhibits
- Multi-user synchronized experiences
- Audio guide integration

---

### 3.4 Training & Simulation
**Clients:** Corporations, trade schools, healthcare

**Examples:**
- Equipment operation training
- Safety procedure simulations
- Medical procedure practice
- Soft skills role-playing

**Benefits:**
- 40% faster training completion
- 70% better retention vs. video
- Zero-risk practice environment

---

### 3.5 Real Estate & Architecture
**Clients:** Real estate agencies, developers, architects

**Examples:**
- Virtual property staging
- Floor plan visualization
- Neighborhood walkthroughs
- Construction progress overlays

**Features:**
- Accurate scale modeling (1:1)
- Day/night lighting toggles
- Furniture swap functionality
- Measurement tools

---

## 4. Production Process

### Phase 1: Concept & Discovery (Week 1)
**Activities:**
- Client kickoff meeting (2 hours)
- Brand guidelines review
- Target audience analysis
- Platform selection
- Creative brief development

**Deliverables:**
- Creative brief document
- Mood board & reference deck
- Technical specification sheet
- Project timeline & milestones

**Stakeholders:** Client, Creative Director, Project Manager

---

### Phase 2: 3D Modeling & Asset Creation (Week 2-3)
**Activities:**
- Reference photo/video collection
- 3D modeling (Blender/Maya)
- Texture creation (Substance Painter)
- Rigging (if animated)
- Optimization for target platforms

**Deliverables:**
- 3D models (source files + exports)
- Texture maps (4K PBR)
- Animation files (if applicable)
- Asset library

**Quality Gates:**
- Polygon count within limits
- Texture resolution optimized
- File formats correct for platform

---

### Phase 3: AR Development (Week 3-5)
**Activities:**
- Platform setup (Spark AR, Lens Studio, etc.)
- Effect/interaction programming
- Face tracking/world tracking implementation
- UI/UX integration
- Audio integration

**Deliverables:**
- Working AR prototype
- Interaction flow documentation
- Internal test build

**Tools:**
- Visual scripting (Spark AR, Lens Studio)
- JavaScript/C# for custom logic
- Git for version control

---

### Phase 4: Testing & Optimization (Week 5-6)
**Activities:**
- Device testing (10+ devices minimum)
- Performance profiling
- User testing (5-10 beta testers)
- Bug fixes & iteration
- Platform compliance review

**Test Matrix:**
| Device Type | iOS | Android |
|-------------|-----|---------|
| High-end | iPhone 15 Pro | Galaxy S24 |
| Mid-range | iPhone 12 | Pixel 7 |
| Budget | iPhone SE | Galaxy A54 |

**Quality Metrics:**
- Frame rate: 30+ FPS (all devices)
- Load time: <3 seconds
- Crash rate: <0.5%
- Tracking accuracy: 95%+

---

### Phase 5: Deployment & Launch (Week 6-7)
**Activities:**
- Platform submission (Instagram, TikTok, Snapchat)
- Client approval & revisions
- Marketing asset creation
- Launch coordination
- Analytics setup

**Deliverables:**
- Live AR experience
- QR codes & share links
- Launch announcement kit
- Analytics dashboard access

**Timeline:**
- Instagram review: 24-72 hours
- Snapchat review: 3-5 business days
- TikTok review: 24-48 hours

---

### Phase 6: Post-Launch Support (Ongoing)
**Activities:**
- Performance monitoring
- User feedback collection
- Minor updates & bug fixes
- Monthly reporting

**SLA:**
- Critical bugs: 24-hour response
- Minor issues: 5 business days
- Monthly performance report

---

## 5. Pricing Model

### 5.1 Per-Filter/Lens Pricing

| Tier | Price | Includes | Turnaround |
|------|-------|----------|------------|
| **Basic** | $500-1,500 | Simple face filter, 1 platform, 2 revisions | 5-7 days |
| **Standard** | $1,500-5,000 | Interactive filter, 2 platforms, 3 revisions, basic 3D | 10-14 days |
| **Premium** | $5,000-10,000 | Complex effects, 3+ platforms, unlimited revisions, custom 3D | 21-28 days |

---

### 5.2 Campaign Pricing

| Tier | Price | Includes | Duration |
|------|-------|----------|----------|
| **Starter** | $10,000-25,000 | 3-5 filters, 2 platforms, basic analytics, 4-week campaign | 4-6 weeks |
| **Growth** | $25,000-60,000 | 5-10 filters, 4 platforms, advanced analytics, influencer kit, 8-week campaign | 6-10 weeks |
| **Enterprise** | $60,000-100,000+ | 10+ filters, all platforms, custom dashboard, full creative, 12-week campaign | 10-16 weeks |

---

### 5.3 Product Visualization

| Product Type | Price | Notes |
|--------------|-------|-------|
| Simple product (shoes, bags) | $2,000-5,000 | Single SKU, basic materials |
| Complex product (watches, jewelry) | $5,000-15,000 | Detailed materials, multiple variants |
| Product line (5-10 SKUs) | $15,000-40,000 | Bulk discount, shared assets |
| Full catalog (20+ SKUs) | $40,000-100,000 | Enterprise pricing, API integration |

---

### 5.4 Educational & Enterprise

| Project Type | Price | Notes |
|--------------|-------|-------|
| Museum exhibit (single) | $15,000-50,000 | Includes installation support |
| Training module | $20,000-75,000 | Per module, LMS integration extra |
| Custom AR app | $50,000-250,000+ | iOS + Android, backend included |
| Enterprise license | $10,000-50,000/yr | Annual platform access, unlimited users |

---

### 5.5 Retainer Packages

| Tier | Monthly | Includes |
|------|---------|----------|
| **Starter** | $3,000/mo | 1 filter/month, priority support, analytics |
| **Growth** | $7,500/mo | 2-3 filters/month, campaign support, dedicated PM |
| **Enterprise** | $15,000+/mo | Unlimited filters, full team access, SLA guarantees |

---

### 5.6 Add-On Services

| Service | Price |
|---------|-------|
| Rush delivery (50% speed increase) | +50% |
| Additional platform | +$1,000-3,000 |
| Advanced analytics dashboard | $2,500-10,000 |
| Influencer activation kit | $5,000-15,000 |
| Multi-language localization | $500/language |
| Ongoing maintenance (monthly) | $500-2,000/mo |

---

## 6. Client Acquisition

### 6.1 Target Segments

#### Brands & CPG Companies
- **Ideal Client:** $50M+ revenue, marketing budget $5M+
- **Decision Makers:** CMO, Brand Manager, Digital Marketing Director
- **Pain Points:** Low engagement, need for innovation, Gen Z outreach
- **Acquisition Strategy:** LinkedIn outreach, industry events, case studies

#### Retailers & E-Commerce
- **Ideal Client:** Online-first brands, omnichannel retailers
- **Decision Makers:** VP E-commerce, Head of Digital, CXO
- **Pain Points:** High return rates, low conversion, differentiation
- **Acquisition Strategy:** Shopify Plus partners, e-commerce conferences

#### Museums & Cultural Institutions
- **Ideal Client:** Mid-large museums, historical societies
- **Decision Makers:** Director, Head of Education, Curator
- **Pain Points:** Visitor engagement, funding, modernization
- **Acquisition Strategy:** Museum association partnerships, grants

#### Educational Institutions
- **Ideal Client:** Universities, private schools, edtech companies
- **Decision Makers:** Dean, EdTech Director, Department Head
- **Pain Points:** Student engagement, remote learning, funding
- **Acquisition Strategy:** EdTech conferences, grant partnerships

#### Real Estate & Architecture
- **Ideal Client:** Brokerages, developers, architecture firms
- **Decision Makers:** Managing Broker, Development Director
- **Pain Points:** Remote tours, visualization, sales conversion
- **Acquisition Strategy:** Real estate tech partnerships, referrals

---

### 6.2 Acquisition Channels

| Channel | Investment | Expected ROI | Timeline |
|---------|------------|--------------|----------|
| **Content Marketing** | $5,000/mo | 3-5 leads/mo | 3-6 months |
| **LinkedIn Outreach** | $2,000/mo | 5-10 leads/mo | 1-3 months |
| **Industry Events** | $10,000/event | 10-20 leads/event | Immediate |
| **Partnership Referrals** | $0-5,000/mo | 5-15 leads/mo | 2-4 months |
| **Paid Advertising** | $5,000-20,000/mo | 10-30 leads/mo | 1-2 months |
| **Case Study PR** | $3,000/mo | 2-5 leads/mo | 2-3 months |

---

### 6.3 Sales Process

**Stage 1: Discovery Call (30 min)**
- Understand client needs
- Assess budget & timeline
- Qualify fit

**Stage 2: Proposal & Demo (1 week)**
- Custom proposal
- Demo relevant past work
- Technical Q&A

**Stage 3: Contract & Deposit (1 week)**
- Contract negotiation
- 50% deposit required
- Project kickoff scheduled

**Stage 4: Production (4-8 weeks)**
- Follow production process
- Weekly client updates
- Milestone approvals

**Stage 5: Launch & Follow-Up**
- Campaign launch
- Performance review (30 days)
- Retainer conversation

---

### 6.4 Conversion Metrics

| Metric | Target |
|--------|--------|
| Lead to demo | 40% |
| Demo to proposal | 60% |
| Proposal to close | 35% |
| Overall conversion | 8-10% |
| Average deal size | $25,000 |
| Sales cycle | 4-8 weeks |

---

## 7. Quality Control

### 7.1 Device Testing Matrix

**Minimum Test Coverage:**

| Platform | Devices | OS Versions |
|----------|---------|-------------|
| **iOS** | iPhone SE (2022), iPhone 12, iPhone 15 Pro | iOS 15, 16, 17 |
| **Android** | Galaxy A54, Pixel 7, Galaxy S24 | Android 12, 13, 14 |
| **Tablets** | iPad Air, Galaxy Tab S8 | Latest 2 OS versions |

**Testing Checklist:**
- [ ] Face tracking accuracy (all angles, lighting conditions)
- [ ] World tracking stability (various surfaces)
- [ ] Performance (30+ FPS on all devices)
- [ ] Memory usage (<500MB)
- [ ] Load time (<3 seconds)
- [ ] Audio sync (if applicable)
- [ ] Touch interaction responsiveness
- [ ] Platform compliance (all guidelines met)

---

### 7.2 Performance Optimization

**Targets:**
- **Frame Rate:** 30 FPS minimum, 60 FPS ideal
- **Draw Calls:** <200 per frame
- **Polygon Count:** <30,000 triangles (mobile)
- **Texture Memory:** <100MB
- **File Size:** Platform-specific limits

**Optimization Techniques:**
- Texture atlasing (combine textures)
- LOD (Level of Detail) implementation
- Occlusion culling
- Shader optimization
- Asset compression (ASTC, ETC2)

---

### 7.3 User Testing Protocol

**Beta Testing Group:** 5-10 users matching target demographic

**Testing Sessions:**
1. **First Impressions (5 min):** Unmoderated, observe initial interaction
2. **Task Completion (10 min):** Specific tasks (e.g., "try on the glasses")
3. **Feedback Interview (10 min):** Structured questions

**Metrics Collected:**
- Time to first interaction
- Task completion rate
- Error rate
- Net Promoter Score (NPS)
- Qualitative feedback

**Success Criteria:**
- 80%+ task completion rate
- NPS > 50
- No critical bugs reported
- 4.0+ average rating

---

### 7.4 Platform Compliance

**Instagram Spark AR:**
- No misleading claims
- No political content
- Age-appropriate content
- Brand safety guidelines
- [Full guidelines](https://sparkar.facebook.com/ar-policy/)

**Snapchat Lens Studio:**
- Community Guidelines compliance
- No harmful content
- Proper disclosures (sponsored content)
- [Full guidelines](https://lensstudio.snapchat.com/guidelines/)

**TikTok Effect House:**
- Community Guidelines adherence
- No dangerous acts
- Proper music licensing
- [Full guidelines](https://effecthouse.tiktok.com/guidelines)

---

### 7.5 Bug Tracking & Resolution

**Severity Levels:**

| Level | Description | Response Time | Resolution |
|-------|-------------|---------------|------------|
| **Critical** | App crash, core feature broken | 4 hours | 24 hours |
| **High** | Major functionality impaired | 24 hours | 3 days |
| **Medium** | Minor issues, workarounds exist | 3 days | 1 week |
| **Low** | Cosmetic, edge cases | 1 week | Next release |

**Tools:**
- Jira or Linear for bug tracking
- GitHub/GitLab for version control
- TestFlight (iOS) / Internal Testing (Android) for distribution

---

## 8. Distribution

### 8.1 Social Media Platforms

| Platform | Submission Time | Review Process | Best For |
|----------|-----------------|----------------|----------|
| **Instagram** | 24-72 hours | Automated + manual | Beauty, fashion, lifestyle |
| **TikTok** | 24-48 hours | Automated | Viral campaigns, Gen Z |
| **Snapchat** | 3-5 days | Manual | Gaming, entertainment |
| **Facebook** | 24-72 hours | Automated + manual | Older demographics |

**Distribution Strategy:**
- Submit to all relevant platforms simultaneously
- Coordinate launch timing with client marketing
- Provide QR codes for offline activation
- Create platform-specific preview videos

---

### 8.2 WebAR Distribution

**Platforms:**
- **8th Wall:** Premium WebAR, advanced features
- **Zappar:** Affordable WebAR options
- **101XR:** Enterprise WebAR
- **Custom (Three.js + WebXR):** Full control

**Access Methods:**
- QR codes (print, packaging, ads)
- Short URLs (bit.ly, custom domains)
- NFC tags (physical locations)
- Social media bio links

**Advantages:**
- No app download required
- Works on any modern smartphone
- Easy to update without resubmission
- Better analytics control

---

### 8.3 App Store Distribution

**When to Build Native Apps:**
- Complex, multi-feature experiences
- Offline functionality required
- Enterprise/internal use
- Ongoing user engagement needed

**iOS App Store:**
- Review time: 24-48 hours
- Developer account: $99/year
- ARKit required (iPhone 6s+)

**Google Play Store:**
- Review time: 1-3 days
- Developer account: $25 one-time
- ARCore required (varies by device)

---

### 8.4 In-Person Activation

**Use Cases:**
- Retail store installations
- Event activations
- Museum exhibits
- Trade show booths

**Requirements:**
- Stable WiFi or offline mode
- Device provisioning (rental or client-provided)
- On-site technical support
- Backup plans (tablet demos, videos)

**Best Practices:**
- Test on-site before launch
- Have backup devices ready
- Clear signage with instructions
- Staff training on troubleshooting

---

### 8.5 Analytics & Tracking

**Native Platform Analytics:**
- Instagram: Impressions, captures, shares, sends
- TikTok: Views, uses, favorites, shares
- Snapchat: Views, captures, shares, play time

**Custom Analytics (WebAR):**
- Google Analytics 4 integration
- Custom event tracking
- Heatmap analysis
- Conversion tracking

**Metrics Dashboard:**
- Real-time usage data
- Geographic distribution
- Device breakdown
- Engagement time
- Share/conversion rates

---

## 9. Turnaround Times

### 9.1 Standard Timelines

| Service Tier | Express | Standard | Premium |
|--------------|---------|----------|---------|
| **Single Filter** | 5-7 days | 10-14 days | 21-28 days |
| **Product Viz (1 SKU)** | 1 week | 2 weeks | 3-4 weeks |
| **Campaign (3-5 filters)** | 2 weeks | 4-6 weeks | 8-10 weeks |
| **Educational Module** | 3 weeks | 6 weeks | 10-12 weeks |
| **Enterprise App** | 6 weeks | 10-12 weeks | 16-20 weeks |

---

### 9.2 Express Service Details

**What's Included:**
- Priority queue placement
- Dedicated project team
- Extended work hours (if needed)
- Fast-track review cycles
- 24-hour revision turnaround

**Premium:** +50% of base price

**Limitations:**
- Maximum 2 revision rounds
- Pre-approved asset library only
- Limited platform options (1-2)
- No complex custom 3D modeling

---

### 9.3 Standard Service Details

**What's Included:**
- Normal queue placement
- Standard project team
- Business hours work
- Standard review cycles (48-72 hours)
- 3-5 revision rounds

**Limitations:**
- Platform review times not included
- Client feedback delays extend timeline
- Complex features may require timeline adjustment

---

### 9.4 Premium Service Details

**What's Included:**
- Senior creative team
- Extensive discovery phase
- Custom 3D modeling & animation
- Unlimited revisions (within scope)
- Dedicated project manager
- White-glove client service

**Best For:**
- Enterprise clients
- Complex technical requirements
- High-visibility campaigns
- Multi-market launches

---

### 9.5 Timeline Risk Factors

**Client-Dependent Delays:**
- Late feedback (>72 hours)
- Asset delivery delays
- Stakeholder approval bottlenecks
- Scope changes mid-project

**Platform-Dependent Delays:**
- Extended review times (holidays, high volume)
- Rejection & resubmission
- Policy changes

**Mitigation Strategies:**
- Build 20% buffer into all timelines
- Clear escalation paths
- Weekly status updates
- Early platform pre-submission checks

---

## 10. Revenue Projections

### 10.1 Year 1 — Foundation

**Assumptions:**
- Team: 3 FTE (Creative Director, 3D Artist, Developer)
- Average project value: $25,000
- Close rate: 8%
- Leads needed: ~50

**Revenue Model:**

| Quarter | Projects | Avg Value | Project Revenue | Retainers | Total |
|---------|----------|-----------|-----------------|-----------|-------|
| Q1 | 3 | $20,000 | $60,000 | $5,000 | $65,000 |
| Q2 | 5 | $22,000 | $110,000 | $12,000 | $122,000 |
| Q3 | 7 | $25,000 | $175,000 | $20,000 | $195,000 |
| Q4 | 10 | $28,000 | $280,000 | $35,000 | $315,000 |

**Year 1 Total: $697,000**

**Expenses:**
- Salaries: $300,000
- Software/Tools: $15,000
- Marketing: $50,000
- Overhead: $35,000
- **Total Expenses: $400,000**

**Year 1 Profit: $297,000 (43% margin)**

---

### 10.2 Year 2 — Growth

**Assumptions:**
- Team: 6 FTE (add 2 developers, 1 PM, 1 sales)
- Average project value: $35,000 (larger deals)
- Close rate: 10%
- Retainer conversion: 40%

**Revenue Model:**

| Quarter | Projects | Avg Value | Project Revenue | Retainers | Total |
|---------|----------|-----------|-----------------|-----------|-------|
| Q1 | 10 | $30,000 | $300,000 | $60,000 | $360,000 |
| Q2 | 12 | $32,000 | $384,000 | $90,000 | $474,000 |
| Q3 | 14 | $35,000 | $490,000 | $120,000 | $610,000 |
| Q4 | 16 | $38,000 | $608,000 | $160,000 | $768,000 |

**Year 2 Total: $2,212,000**

**Expenses:**
- Salaries: $650,000
- Software/Tools: $30,000
- Marketing: $150,000
- Overhead: $80,000
- **Total Expenses: $910,000**

**Year 2 Profit: $1,302,000 (59% margin)**

---

### 10.3 Year 3 — Scale

**Assumptions:**
- Team: 12 FTE (full production team + sales/marketing)
- Average project value: $50,000 (enterprise focus)
- Close rate: 12%
- Retainer conversion: 50%
- Enterprise contracts: 5-10

**Revenue Model:**

| Quarter | Projects | Avg Value | Project Revenue | Retainers | Enterprise | Total |
|---------|----------|-----------|-----------------|-----------|------------|-------|
| Q1 | 15 | $45,000 | $675,000 | $200,000 | $150,000 | $1,025,000 |
| Q2 | 18 | $48,000 | $864,000 | $280,000 | $200,000 | $1,344,000 |
| Q3 | 20 | $50,000 | $1,000,000 | $350,000 | $250,000 | $1,600,000 |
| Q4 | 22 | $55,000 | $1,210,000 | $450,000 | $350,000 | $2,010,000 |

**Year 3 Total: $5,979,000**

**Expenses:**
- Salaries: $1,400,000
- Software/Tools: $60,000
- Marketing: $400,000
- Overhead: $200,000
- Office/Equipment: $100,000
- **Total Expenses: $2,160,000**

**Year 3 Profit: $3,819,000 (64% margin)**

---

### 10.4 Revenue Mix Evolution

| Year | Projects | % | Retainers | % | Enterprise | % |
|------|----------|---|-----------|---|------------|---|
| Year 1 | $662,000 | 95% | $35,000 | 5% | $0 | 0% |
| Year 2 | $1,782,000 | 81% | $430,000 | 19% | $0 | 0% |
| Year 3 | $3,749,000 | 63% | $1,280,000 | 21% | $950,000 | 16% |

**Strategic Goal:** Shift from project-based to recurring revenue (retainers + enterprise)

---

### 10.5 Key Performance Indicators

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Revenue | $697K | $2.2M | $6.0M |
| Projects Completed | 25 | 52 | 75 |
| Active Retainers | 3 | 12 | 25 |
| Enterprise Clients | 0 | 0 | 8 |
| Team Size | 3 | 6 | 12 |
| Profit Margin | 43% | 59% | 64% |
| Customer Retention | 60% | 70% | 80% |
| NPS Score | 50 | 60 | 70 |

---

## Appendix A: Glossary

- **AR (Augmented Reality):** Digital content overlaid on the real world
- **WebAR:** AR experiences accessed via web browser (no app download)
- **Face Tracking:** Technology that maps facial features for filter placement
- **World Tracking:** Technology that maps physical surfaces for object placement
- **SLAM:** Simultaneous Localization and Mapping (AR positioning tech)
- **PBR:** Physically Based Rendering (realistic material system)
- **LOD:** Level of Detail (multiple model resolutions for performance)
- **NPS:** Net Promoter Score (customer satisfaction metric)

---

## Appendix B: Resource Links

**Development Tools:**
- Spark AR: https://sparkar.facebook.com
- Lens Studio: https://lensstudio.snapchat.com
- Effect House: https://effecthouse.tiktok.com
- 8th Wall: https://www.8thwall.com

**3D Assets:**
- Sketchfab: https://sketchfab.com
- TurboSquid: https://www.turbosquid.com
- Unity Asset Store: https://assetstore.unity.com

**Learning Resources:**
- Spark AR Learning Center
- Lens Studio Creator Community
- 8th Wall Academy
- Blender Guru (YouTube)

---

## Appendix C: Contract Templates

**Included in separate document:**
- Master Services Agreement (MSA)
- Statement of Work (SOW) Template
- NDA Template
- Influencer Agreement Template
- Retainer Agreement Template

---

**Document Control:**
- **Owner:** Shelby AR Experiences
- **Last Updated:** March 23, 2026
- **Next Review:** June 23, 2026
- **Confidentiality:** Internal Use Only

---

*This is a living document. Update quarterly or when significant changes occur.*
