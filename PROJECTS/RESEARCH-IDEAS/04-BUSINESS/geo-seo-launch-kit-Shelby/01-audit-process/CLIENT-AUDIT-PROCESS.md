# CLIENT AUDIT PROCESS

**Step-by-Step GEO Audit Methodology**

**Version:** 1.0  
**Last Updated:** March 21, 2026

---

## OVERVIEW

**Audit Duration:** 2-3 hours per client  
**Deliverable:** 20-30 page GEO Audit Report  
**Tools Needed:** GEO SEO CLI, Google Sheets, Browser

### Audit Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    GEO AUDIT PROCESS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STEP 1          STEP 2          STEP 3          STEP 4        │
│  Discovery       AI Scan       Technical       Content         │
│  (15 min)        (30 min)      Audit (30 min)  Audit (30 min)  │
│                                                                 │
│  STEP 5          STEP 6          STEP 7          STEP 8        │
│  Competitor      Citation      Scoring         Report          │
│  Analysis        Audit         Calculation     Generation      │
│  (20 min)        (15 min)      (10 min)        (30 min)        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## STEP 1: DISCOVERY (15 minutes)

### 1.1 Client Intake

**Gather Basic Information:**

| Field | Where to Find | Notes |
|-------|---------------|-------|
| Company Name | Client questionnaire | |
| Website URL | Client questionnaire | Verify HTTPS |
| Industry | Client questionnaire | Use NAICS code if available |
| Target Location | Client questionnaire | Local vs. national |
| Main Competitors | Client questionnaire | Get 3-5 names |
| Primary Products/Services | Website homepage | List top 3 |
| Target Keywords | Client or infer | 5-10 core terms |

### 1.2 Define Test Queries

Create a list of 15-20 queries to test across AI platforms:

**Query Categories:**

| Category | Count | Examples |
|----------|-------|----------|
| Brand Queries | 3-5 | "[Client]", "[Client] reviews", "[Client] vs [competitor]" |
| Category Queries | 5-7 | "Best [product] for [use]", "[Product] recommendations" |
| Problem Queries | 3-5 | "How to [solve problem]", "[Problem] solution" |
| Local Queries | 3-5 | "[Service] in [city]", "Best [business] near me" |

**Template:**
```
BRAND QUERIES:
1. "[Client Company Name]"
2. "[Client Company] reviews"
3. "[Client Company] vs [Competitor 1]"
4. "[Client Company] pricing"
5. "Is [Client Company] legit"

CATEGORY QUERIES:
1. "Best [product category] for [use case]"
2. "[Product category] recommendations 2026"
3. "Top [product category] companies"
4. "[Product category] comparison"
5. "How to choose [product category]"

PROBLEM/SOLUTION QUERIES:
1. "How to [solve problem client solves]"
2. "[Problem] best solution"
3. "[Problem] tools and software"

LOCAL QUERIES (if applicable):
1. "[Service] in [City]"
2. "Best [business type] in [City]"
3. "[Service] near me"
```

### 1.3 Document Baseline Metrics

Ask client for current metrics (if available):

- Monthly organic traffic: ______
- Monthly leads: ______
- Current SEO ranking (top keyword): ______
- Previous AI visibility efforts: ______

---

## STEP 2: AI VISIBILITY SCAN (30 minutes)

### 2.1 Test Each Query Across AI Platforms

**Platforms to Test:**

| Platform | URL | Bot User-Agent |
|----------|-----|----------------|
| ChatGPT | chat.openai.com | GPTBot |
| Claude | claude.ai | ClaudeBot |
| Google AI | google.com (AI Overview) | Googlebot |
| Perplexity | perplexity.ai | PerplexityBot |
| Bing AI | bing.com/chat | Bingbot |
| You.com | you.com | YouBot |
| Phind | phind.com | PhindBot |

### 2.2 Recording Results

**For Each Query, Record:**

| Data Point | What to Capture |
|------------|-----------------|
| Was client mentioned? | Yes/No |
| Position in response | 1st, 2nd, 3rd, or Not mentioned |
| Citation quality | Direct link / Mentioned without link / Not cited |
| Competitors mentioned | List which competitors appeared |
| Response date | Date of test |

**Google Sheet Template:**

Create a sheet called "AI Visibility Test" with these columns:

```
A: Query
B: Category (Brand/Category/Problem/Local)
C: ChatGPT Result (Found/Not Found + Position)
D: Claude Result
E: Google AI Result
F: Perplexity Result
G: Bing AI Result
H: You.com Result
I: Phind Result
J: Total Platforms Found (0-7)
K: Notes
```

### 2.3 Capture Screenshots

**For Each Platform:**

1. Run the query
2. Wait for full response
3. Screenshot the AI response
4. Highlight where client is mentioned (or note absence)
5. Save with naming convention: `[Client]_[Query]_[Platform]_[Date].png`

**Folder Structure:**
```
/clients/[client-name]/audit/
  └── screenshots/
      ├── chatgpt/
      ├── claude/
      ├── google-ai/
      ├── perplexity/
      └── bing-ai/
```

### 2.4 Calculate Visibility Score

**Formula:**

```
Visibility Score = (Platforms Found / 7) × 100

Example:
- Found on 4 of 7 platforms for brand queries
- Found on 2 of 7 platforms for category queries
- Found on 3 of 7 platforms for problem queries

Brand Visibility: (4/7) × 100 = 57%
Category Visibility: (2/7) × 100 = 29%
Problem Visibility: (3/7) × 100 = 43%

Overall Visibility: (57 + 29 + 43) / 3 = 43%
```

---

## STEP 3: TECHNICAL AUDIT (30 minutes)

### 3.1 robots.txt Analysis

**Check:** `https://[client-domain]/robots.txt`

**Look For:**

```
✅ GOOD: User-agent: GPTBot
        Allow: /

✅ GOOD: User-agent: ClaudeBot
        Allow: /

❌ BAD: User-agent: GPTBot
        Disallow: /

❌ BAD: No AI bot rules (defaults to full access or block)
```

**Record:**
- AI bots explicitly allowed: Y/N
- AI bots explicitly blocked: Y/N
- Default crawl access: Allow/Block/Unspecified

### 3.2 llms.txt Check

**Check:** `https://[client-domain]/llms.txt`

**What It Is:** Emerging standard for AI crawler guidance

**Record:**
- llms.txt exists: Y/N
- If exists: Contains sitemap reference? Y/N
- If exists: Contains AI-specific guidance? Y/N

### 3.3 Schema Markup Audit

**Tool:** Google Rich Results Test (https://search.google.com/test/rich-results)

**Test:** Homepage + 5 key internal pages

**Schema Types to Check:**

| Schema Type | Relevant For | Status |
|-------------|--------------|--------|
| Organization | All businesses | ✅/❌ |
| LocalBusiness | Local businesses | ✅/❌ |
| Product | E-commerce | ✅/❌ |
| Service | Service businesses | ✅/❌ |
| FAQPage | Pages with FAQs | ✅/❌ |
| HowTo | Tutorial content | ✅/❌ |
| Article | Blog posts | ✅/❌ |
| Person | Author bios | ✅/❌ |
| Review | Testimonials | ✅/❌ |

**Record:**
- Total schema types found: ___
- Missing critical schemas: [List]
- Schema errors found: [List]

### 3.4 Site Speed & Core Web Vitals

**Tool:** Google PageSpeed Insights (https://pagespeed.web.dev/)

**Test:** Homepage + 3 key internal pages

**Record:**

| Metric | Homepage | Page 2 | Page 3 | Page 4 | Target |
|--------|----------|--------|--------|--------|--------|
| LCP (Desktop) | | | | | <2.5s |
| LCP (Mobile) | | | | | <2.5s |
| FID (Desktop) | | | | | <100ms |
| FID (Mobile) | | | | | <100ms |
| CLS (Desktop) | | | | | <0.1 |
| CLS (Mobile) | | | | | <0.1 |
| Overall Score | | | | | 90+ |

### 3.5 Mobile-Friendliness

**Tool:** Google Mobile-Friendly Test

**Record:**
- Mobile-friendly: Y/N
- Mobile usability issues: [List]

### 3.6 Technical Score Calculation

```
Technical Score (0-100):

- AI bots allowed in robots.txt: +20 points
- llms.txt exists: +15 points
- Organization schema present: +15 points
- Relevant schema types (5+): +20 points
- Core Web Vitals pass (desktop): +15 points
- Core Web Vitals pass (mobile): +10 points
- Mobile-friendly: +5 points

Maximum: 100 points
```

---

## STEP 4: CONTENT AUDIT (30 minutes)

### 4.1 Key Pages Review

**Select 10 Key Pages:**
- Homepage
- About Us
- Top 3 product/service pages
- Top 3 blog posts (by traffic)
- Contact page
- FAQ page (if exists)

### 4.2 Content Evaluation Criteria

**For Each Page, Evaluate:**

| Criterion | What to Look For | Score (0-5) |
|-----------|------------------|-------------|
| Clear Definition | Does it clearly define what it's about? | |
| Answer Blocks | Are there 150-word answer-style sections? | |
| Statistics | Does it cite specific data/numbers? | |
| Headers | Are H2/H3 headers descriptive and keyword-rich? | |
| Internal Links | Does it link to relevant internal content? | |
| External Citations | Does it cite authoritative external sources? | |
| Author Info | Is authorship/expertise clear? | |
| Freshness | Is content updated in last 12 months? | |
| Readability | Is it easy to scan (bullets, short paragraphs)? | |
| Call-to-Action | Is there a clear next step for readers? | |

**Total per page: ___/50**

### 4.3 E-E-A-T Assessment

**Experience:**
- Does content show first-hand experience? Y/N
- Are there case studies or examples? Y/N

**Expertise:**
- Are authors identified with credentials? Y/N
- Is expertise demonstrated in content depth? Y/N

**Authoritativeness:**
- Does the site have backlinks from authoritative sources? (Check Ahrefs/Semrush)
- Are there mentions in industry publications? Y/N

**Trustworthiness:**
- Is contact information clear? Y/N
- Are there trust signals (certifications, awards)? Y/N
- Is privacy policy/terms present? Y/N

**E-E-A-T Score:** ___/10

### 4.4 Content Gap Analysis

**Compare Client Content to Top-Ranking Competitors:**

| Content Type | Client Has? | Competitor Has? | Gap |
|--------------|-------------|-----------------|-----|
| FAQ Section | Y/N | Y/N | |
| How-To Guides | Y/N | Y/N | |
| Case Studies | Y/N | Y/N | |
| Comparison Pages | Y/N | Y/N | |
| Industry Reports | Y/N | Y/N | |
| Video Content | Y/N | Y/N | |
| Downloadable Resources | Y/N | Y/N | |

### 4.5 Content Score Calculation

```
Content Score (0-100):

- Average page evaluation score (× 2): ___/100
- E-E-A-T score (× 4): ___/40
- Content gap penalty (-5 per gap): -___

Content Score = (Page Avg + E-E-A-T) - Gap Penalty
Cap at 100, floor at 0
```

---

## STEP 5: COMPETITOR ANALYSIS (20 minutes)

### 5.1 Identify Competitors

**Sources:**
- Client-provided list
- AI query results (who's being cited?)
- Google search for target keywords

**Select 3-5 Competitors:**
- 1-2 direct competitors (similar size/offerings)
- 1-2 aspirational competitors (market leaders)
- 1 emerging competitor (gaining traction)

### 5.2 Competitor AI Visibility

**Run Same Test Queries for Each Competitor**

| Competitor | Brand Visibility | Category Visibility | Problem Visibility | Average |
|------------|-----------------|---------------------|-------------------|---------|
| [Client] | ___% | ___% | ___% | ___% |
| [Competitor 1] | ___% | ___% | ___% | ___% |
| [Competitor 2] | ___% | ___% | ___% | ___% |
| [Competitor 3] | ___% | ___% | ___% | ___% |

### 5.3 Competitor Technical Comparison

| Technical Element | Client | Comp 1 | Comp 2 | Comp 3 |
|-------------------|--------|--------|--------|--------|
| llms.txt | Y/N | Y/N | Y/N | Y/N |
| Schema Count | # | # | # | # |
| FAQ Schema | Y/N | Y/N | Y/N | Y/N |
| Page Speed Score | # | # | # | # |
| Mobile-Friendly | Y/N | Y/N | Y/N | Y/N |

### 5.4 Competitor Content Comparison

| Content Element | Client | Comp 1 | Comp 2 | Comp 3 |
|-----------------|--------|--------|--------|--------|
| Blog Post Count | # | # | # | # |
| Avg Post Length | # words | # | # | # |
| FAQ Pages | Y/N | Y/N | Y/N | Y/N |
| Case Studies | # | # | # | # |
| Video Content | Y/N | Y/N | Y/N | Y/N |

### 5.5 Competitive Position

**Calculate Client's Rank:**

```
For each metric, rank 1-4 (1 = best):
- AI Visibility
- Technical Score
- Content Quality
- Schema Implementation

Average Rank = Sum of Ranks / 4

Position:
- 1.0-1.5: Market Leader
- 1.6-2.5: Strong Contender
- 2.6-3.5: Chasing Pack
- 3.6-4.0: Needs Work
```

---

## STEP 6: CITATION AUDIT (15 minutes)

### 6.1 Current Citation Inventory

**Search for Client Mentions:**

| Source Type | Search Method | Found? | URL |
|-------------|---------------|--------|-----|
| Google Business | Google Maps | Y/N | |
| Yelp | yelp.com | Y/N | |
| Industry Directories | [Industry-specific] | Y/N | |
| Review Sites | [G2, Capterra, etc.] | Y/N | |
| News/Media | Google News search | Y/N | |
| Social | LinkedIn, Twitter, FB | Y/N | |
| Forums | Reddit, Quora | Y/N | |
| Wikipedia | wikipedia.org | Y/N | |

### 6.2 Citation Quality Assessment

**For Each Citation Found:**

| Citation | Domain Authority | Follow/Nofollow | Complete Profile? |
|----------|-----------------|-----------------|-------------------|
| [Source 1] | 0-100 | F/NF | Y/N |
| [Source 2] | 0-100 | F/NF | Y/N |

### 6.3 Citation Gap Analysis

**Where Competitors Are Cited But Client Isn't:**

| Source | Comp 1 | Comp 2 | Comp 3 | Client | Priority |
|--------|--------|--------|--------|--------|----------|
| [Directory 1] | Y | Y | N | N | High |
| [Directory 2] | Y | N | Y | N | Medium |

### 6.4 Citation Score Calculation

```
Citation Score (0-100):

- Total citations found (× 2, max 40): ___/40
- Average DA of citations (× 0.6, max 30): ___/30
- Complete profiles (% × 0.3, max 30): ___/30

Citation Score = Sum (cap at 100)
```

---

## STEP 7: GEO SCORE CALCULATION (10 minutes)

### 7.1 Component Scores

| Component | Score | Weight | Weighted Score |
|-----------|-------|--------|----------------|
| AI Visibility | ___/100 | 25% | ___ |
| Technical | ___/100 | 15% | ___ |
| Content E-E-A-T | ___/100 | 20% | ___ |
| Structured Data | ___/100 | 10% | ___ |
| Citations | ___/100 | 20% | ___ |
| Competitive Position | ___/100 | 10% | ___ |

### 7.2 Calculate Final GEO Score

```
GEO Score = Sum of Weighted Scores

Example:
- AI Visibility: 45 × 0.25 = 11.25
- Technical: 60 × 0.15 = 9.00
- Content: 55 × 0.20 = 11.00
- Structured Data: 40 × 0.10 = 4.00
- Citations: 50 × 0.20 = 10.00
- Competitive: 35 × 0.10 = 3.50

GEO Score = 48.75 → 49/100
```

### 7.3 Score Interpretation

| Score Range | Status | Description |
|-------------|--------|-------------|
| 80-100 | Excellent | Dominant AI visibility |
| 65-79 | Good | Strong foundation, room to grow |
| 50-64 | Average | Basic presence, significant gaps |
| 35-49 | Below Average | Limited AI visibility |
| 0-34 | Poor | Virtually invisible to AI |

---

## STEP 8: REPORT GENERATION (30 minutes)

### 8.1 Compile Findings

**Use the GEO Audit Report Template** (see: `/03-audit-template/`)

### 8.2 Key Sections to Complete

1. **Executive Summary** (5 min)
   - Overall GEO Score
   - Top 3 findings
   - Top 3 recommendations

2. **AI Visibility Results** (5 min)
   - Platform-by-platform breakdown
   - Query-level results
   - Screenshot highlights

3. **Technical Audit Results** (5 min)
   - robots.txt status
   - Schema findings
   - Speed metrics

4. **Content Analysis** (5 min)
   - E-E-A-T assessment
   - Content gaps
   - Optimization opportunities

5. **Competitive Analysis** (5 min)
   - Competitor comparison
   - Market position
   - Gap analysis

6. **Recommendations** (5 min)
   - Quick wins (30 days)
   - Strategic initiatives (90 days)
   - Implementation roadmap

### 8.3 Quality Check

Before delivering:

- [ ] All scores calculated correctly
- [ ] All screenshots attached
- [ ] All competitor data accurate
- [ ] Recommendations are actionable
- [ ] Report is client-branded (if applicable)
- [ ] No internal notes left in document

### 8.4 Delivery

**Deliver via:**
- PDF attachment (client-facing)
- Google Doc (editable, for internal)
- Video walkthrough (optional, Loom)

**Accompanying Email:**

```
Subject: Your GEO Audit Report — [Client Company]

Hi [Client Name],

Your comprehensive GEO Audit is complete!

**Key Findings:**
- GEO Score: [XX]/100 ([Status])
- AI Visibility: Found on [X] of 7 platforms
- Top Opportunity: [Brief description]

**Next Steps:**
1. Review the attached report
2. Schedule debrief call: [Calendar Link]
3. We'll walk through findings and answer questions

Looking forward to discussing how we can improve your AI visibility!

Best,
[Your Name]
```

---

## AUDIT CHECKLIST (Printable)

```
□ STEP 1: Discovery (15 min)
  □ Client info gathered
  □ Test queries defined (15-20)
  □ Baseline metrics documented

□ STEP 2: AI Visibility Scan (30 min)
  □ Tested all queries on 7 platforms
  □ Results recorded in spreadsheet
  □ Screenshots captured
  □ Visibility score calculated

□ STEP 3: Technical Audit (30 min)
  □ robots.txt analyzed
  □ llms.txt checked
  □ Schema markup audited
  □ Site speed tested
  □ Mobile-friendliness checked
  □ Technical score calculated

□ STEP 4: Content Audit (30 min)
  □ 10 key pages evaluated
  □ E-E-A-T assessed
  □ Content gaps identified
  □ Content score calculated

□ STEP 5: Competitor Analysis (20 min)
  □ 3-5 competitors identified
  □ Competitor AI visibility tested
  □ Technical comparison completed
  □ Content comparison completed
  □ Competitive position determined

□ STEP 6: Citation Audit (15 min)
  □ Current citations inventoried
  □ Citation quality assessed
  □ Citation gaps identified
  □ Citation score calculated

□ STEP 7: GEO Score Calculation (10 min)
  □ All component scores calculated
  ✓ Weighted scores computed
  ✓ Final GEO Score determined
  ✓ Score interpretation assigned

□ STEP 8: Report Generation (30 min)
  □ Report template populated
  □ Executive summary written
  □ Recommendations prioritized
  □ Quality check completed
  □ Report delivered to client

TOTAL TIME: ~2.5 hours
```

---

*Process Document v1.0 | March 21, 2026*
*For internal use — [Your Company Name]*
