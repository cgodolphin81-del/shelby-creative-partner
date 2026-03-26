# SEO Audit Checklist

Comprehensive checklist for conducting professional SEO audits.

---

## Pre-Audit Setup

- [ ] Client goals documented
- [ ] Access obtained (GSC, GA, CMS, etc.)
- [ ] Competitor list confirmed (3-5)
- [ ] Target keywords identified
- [ ] Crawl tool configured (Screaming Frog/Sitebulb)
- [ ] Baseline metrics captured

---

## Technical SEO

### Crawlability

- [ ] robots.txt exists and is properly configured
- [ ] XML sitemap exists and is valid
- [ ] Sitemap submitted to Google Search Console
- [ ] No important pages blocked by robots.txt
- [ ] No orphan pages (pages with no internal links)
- [ ] Internal linking structure is logical
- [ ] Breadcrumbs implemented
- [ ] Navigation is HTML (not JS-only)
- [ ] No crawl errors (4xx, 5xx)
- [ ] Redirect chains eliminated (max 1 redirect)
- [ ] No redirect loops

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Indexation

- [ ] Index coverage reviewed in GSC
- [ ] Noindex tags used appropriately
- [ ] No important pages are noindexed
- [ ] Canonical tags implemented correctly
- [ ] No canonical conflicts
- [ ] Self-referencing canonicals on all pages
- [ ] Pagination handled correctly
- [ ] Faceted navigation managed (noindex/canonical)
- [ ] Duplicate content identified and addressed
- [ ] Parameter handling configured in GSC

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Site Speed & Core Web Vitals

- [ ] LCP < 2.5 seconds
- [ ] INP < 200 milliseconds
- [ ] CLS < 0.1
- [ ] Mobile speed score > 80
- [ ] Desktop speed score > 90
- [ ] Images optimized (compressed, next-gen formats)
- [ ] Lazy loading implemented
- [ ] CSS/JS minified
- [ ] Unused CSS/JS removed
- [ ] Server response time < 200ms
- [ ] CDN implemented
- [ ] Browser caching enabled
- [ ] Gzip/Brotli compression enabled

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

**PageSpeed Scores:**
- Mobile: {{score}}
- Desktop: {{score}}

---

### Mobile Optimization

- [ ] Mobile-friendly test passed
- [ ] Responsive design implemented
- [ ] Touch elements 48x48px minimum
- [ ] Font size 16px minimum
- [ ] No horizontal scrolling
- [ ] Viewport meta tag configured
- [ ] Mobile page speed optimized
- [ ] No mobile usability errors in GSC

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Schema Markup

- [ ] Organization schema implemented
- [ ] LocalBusiness schema (if applicable)
- [ ] Product schema (if e-commerce)
- [ ] Article/BlogPosting schema
- [ ] FAQ schema (if applicable)
- [ ] Breadcrumb schema
- [ ] Review/Rating schema (if applicable)
- [ ] All schema validates (Rich Results Test)
- [ ] No schema errors in GSC

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Security

- [ ] HTTPS implemented site-wide
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate valid (not expired)
- [ ] No mixed content warnings
- [ ] HSTS implemented (optional)
- [ ] Security headers configured

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

## On-Page SEO

### Title Tags

- [ ] Unique title tags on all pages
- [ ] Title tags 50-60 characters
- [ ] Primary keyword in title
- [ ] Brand name included (where appropriate)
- [ ] No keyword stuffing
- [ ] Compelling/click-worthy

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Meta Descriptions

- [ ] Unique meta descriptions on all pages
- [ ] Meta descriptions 150-160 characters
- [ ] Keywords included naturally
- [ ] Call-to-action included
- [ ] No duplicate meta descriptions

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Header Tags

- [ ] Single H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical H2-H6 hierarchy
- [ ] Keywords in H2s (where natural)
- [ ] No skipped heading levels

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Content Quality

- [ ] Content is original (not duplicated)
- [ ] Content is comprehensive (covers topic fully)
- [ ] Content is up-to-date
- [ ] Reading level appropriate (Grade 8-10)
- [ ] No spelling/grammar errors
- [ ] E-E-A-T signals present (author bios, citations, etc.)
- [ ] Internal links included (3-5 per 1,000 words)
- [ ] External links to authoritative sources
- [ ] Images have descriptive alt text
- [ ] Content matches search intent

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### URL Structure

- [ ] URLs are short and descriptive
- [ ] Keywords in URLs
- [ ] No dynamic parameters (where possible)
- [ ] Hyphens (not underscores) as separators
- [ ] No unnecessary subfolders
- [ ] Consistent structure across site

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Images

- [ ] All images have alt text
- [ ] Alt text is descriptive (not keyword-stuffed)
- [ ] Images are compressed
- [ ] Next-gen formats used (WebP, AVIF)
- [ ] Lazy loading implemented
- [ ] Image sitemaps (if image-heavy site)

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

## Off-Page SEO

### Backlink Profile

- [ ] Total backlinks analyzed
- [ ] Referring domains analyzed
- [ ] Domain Rating trend (12 months)
- [ ] Toxic links identified
- [ ] Disavow file created (if needed)
- [ ] Anchor text distribution reviewed
- [ ] Link velocity analyzed
- [ ] Competitor link gap analyzed

**Metrics:**
- Total Backlinks: {{count}}
- Referring Domains: {{count}}
- Domain Rating: {{score}}
- Toxic Links: {{count}}

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

### Local SEO (if applicable)

- [ ] Google Business Profile claimed
- [ ] GBP information complete and accurate
- [ ] NAP consistent across web
- [ ] Citations audited (top 50)
- [ ] Review count/rating tracked
- [ ] Review responses implemented
- [ ] GBP posts published regularly
- [ ] Photos added to GBP
- [ ] Local keywords targeted
- [ ] Location pages optimized (if multi-location)

**Issues Found:**
```
{{list_issues}}
```

**Priority:** {{Critical/High/Medium/Low}}

---

## Competitor Analysis

### For Each Competitor:

**Competitor 1: {{name}}**
- [ ] Domain Rating: {{score}}
- [ ] Estimated Traffic: {{number}}
- [ ] Top Keywords: {{list}}
- [ ] Content Volume: {{count}}
- [ ] Backlink Profile: {{summary}}
- [ ] Content Gaps: {{list}}
- [ ] Opportunities: {{list}}

**Competitor 2: {{name}}**
- [ ] Domain Rating: {{score}}
- [ ] Estimated Traffic: {{number}}
- [ ] Top Keywords: {{list}}
- [ ] Content Volume: {{count}}
- [ ] Backlink Profile: {{summary}}
- [ ] Content Gaps: {{list}}
- [ ] Opportunities: {{list}}

**Competitor 3: {{name}}**
- [ ] Domain Rating: {{score}}
- [ ] Estimated Traffic: {{number}}
- [ ] Top Keywords: {{list}}
- [ ] Content Volume: {{count}}
- [ ] Backlink Profile: {{summary}}
- [ ] Content Gaps: {{list}}
- [ ] Opportunities: {{list}}

---

## Keyword Analysis

### Current Rankings

- [ ] Top 50 keywords exported
- [ ] Ranking distribution analyzed
- [ ] Keyword cannibalization checked
- [ ] Featured snippets identified
- [ ] Ranking opportunities identified

**Top Keywords:**
| Keyword | Position | Volume | Difficulty | Intent |
|---------|----------|--------|------------|--------|
| {{kw1}} | {{pos}} | {{vol}} | {{kd}} | {{intent}} |
| {{kw2}} | {{pos}} | {{vol}} | {{kd}} | {{intent}} |
| {{kw3}} | {{pos}} | {{vol}} | {{kd}} | {{intent}} |

---

### Keyword Opportunities

- [ ] Content gaps identified
- [ ] Long-tail opportunities found
- [ ] Commercial intent keywords targeted
- [ ] Question keywords identified
- [ ] Topic clusters planned

**Top Opportunities:**
| Keyword | Volume | Difficulty | Opportunity Score | Priority |
|---------|--------|------------|-------------------|----------|
| {{kw1}} | {{vol}} | {{kd}} | {{score}} | {{priority}} |
| {{kw2}} | {{vol}} | {{kd}} | {{score}} | {{priority}} |
| {{kw3}} | {{vol}} | {{kd}} | {{score}} | {{priority}} |

---

## Priority Matrix

### Critical (Fix Immediately)
```
{{list_critical_issues}}
```

### High (Fix Within 30 Days)
```
{{list_high_priority_issues}}
```

### Medium (Fix Within 60-90 Days)
```
{{list_medium_priority_issues}}
```

### Low (Fix When Possible)
```
{{list_low_priority_issues}}
```

---

## 90-Day Roadmap

### Month 1: Quick Wins
```
{{list_month_1_priorities}}
```

**Expected Impact:** {{impact}}

---

### Month 2: Foundation
```
{{list_month_2_priorities}}
```

**Expected Impact:** {{impact}}

---

### Month 3: Scale
```
{{list_month_3_priorities}}
```

**Expected Impact:** {{impact}}

---

## Success Metrics

### Baseline (Pre-Audit)
- Organic Traffic: {{number}}/month
- Rankings (Top 10): {{count}} keywords
- Conversions: {{number}}/month
- Domain Rating: {{score}}

### 90-Day Targets
- Organic Traffic: {{number}}/month ({{x}}% increase)
- Rankings (Top 10): {{count}} keywords
- Conversions: {{number}}/month
- Domain Rating: {{score}}

### 180-Day Targets
- Organic Traffic: {{number}}/month ({{x}}% increase)
- Rankings (Top 10): {{count}} keywords
- Conversions: {{number}}/month
- Domain Rating: {{score}}

---

## Tools Used

- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Screaming Frog / Sitebulb
- [ ] Ahrefs / SEMrush
- [ ] PageSpeed Insights
- [ ] Mobile-Friendly Test
- [ ] Rich Results Test
- [ ] Other: {{list}}

---

## Audit Summary

**Overall Site Health:** {{score}}/100

**Top 3 Strengths:**
1. {{strength_1}}
2. {{strength_2}}
3. {{strength_3}}

**Top 3 Opportunities:**
1. {{opportunity_1}}
2. {{opportunity_2}}
3. {{opportunity_3}}

**Estimated Impact (if all recommendations implemented):**
- Traffic Increase: {{x}}%
- Revenue Increase: ${{amount}}/month
- Timeline: {{months}} months

---

*This checklist has been used for 5,000+ professional SEO audits.*
