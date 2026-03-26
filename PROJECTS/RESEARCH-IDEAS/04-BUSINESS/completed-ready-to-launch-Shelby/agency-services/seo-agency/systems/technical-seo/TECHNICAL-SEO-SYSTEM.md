# Technical SEO System

Complete framework for technical optimization that enables rankings.

---

## System Overview

```
Crawl → Index → Render → Rank → Convert
```

Technical SEO ensures search engines can find, understand, and rank your content.

---

## Core Technical Pillars

| Pillar | Impact | Effort | Priority |
|--------|--------|--------|----------|
| Crawlability | Critical | Medium | P0 |
| Indexation | Critical | Medium | P0 |
| Site Speed | High | High | P1 |
| Mobile | High | Medium | P1 |
| Schema | Medium | Low-Medium | P2 |
| Site Architecture | High | High | P1 |
| Security | Medium | Low | P2 |

---

## Phase 1: Crawlability

### What Is Crawlability?

Search engines' ability to access and navigate your website.

### Crawlability Checklist

#### robots.txt

**Check:**
- [ ] File exists at domain.com/robots.txt
- [ ] Not blocking important pages
- [ ] Not blocking CSS/JS files
- [ ] Sitemap location included
- [ ] No syntax errors

**Common Issues:**
```
# BAD - Blocks everything
User-agent: *
Disallow: /

# GOOD - Allows crawling
User-agent: *
Allow: /
Sitemap: https://domain.com/sitemap.xml
```

**Testing:**
- Google Search Console → robots.txt Tester
- Manual check: domain.com/robots.txt

---

#### XML Sitemap

**Requirements:**
- [ ] Sitemap exists (domain.com/sitemap.xml)
- [ ] Only includes indexable URLs (200 status)
- [ ] Excludes noindex, canonicalized, duplicate pages
- [ ] Updated regularly (automated)
- [ ] Submitted to Google Search Console
- [ ] Under 50,000 URLs per sitemap (use sitemap index if more)

**Sitemap Types:**
- **Pages:** All indexable pages
- **Posts:** Blog posts/articles
- **Products:** E-commerce products
- **Categories:** Category pages
- **Images:** Image sitemap (if image-heavy)
- **Video:** Video sitemap (if video content)

**Best Practices:**
- Keep under 50MB uncompressed
- Use gzip compression
- Include lastmod date
- Automate updates

---

#### Internal Linking

**Check:**
- [ ] All important pages are linked (not orphaned)
- [ ] Logical hierarchy (homepage → category → subcategory → product)
- [ ] Breadcrumbs implemented
- [ ] Navigation is crawlable (HTML, not JS-only)
- [ ] No more than 3-4 clicks to important pages

**Orphan Pages:**
- Pages with no internal links pointing to them
- Search engines may not find them
- Fix: Add internal links from relevant pages

**Tools:**
- Screaming Frog (Orphan Pages report)
- Sitebulb (Internal Linking visualization)
- Ahrefs (Internal Link Opportunities)

---

#### Site Architecture

**Ideal Structure:**
```
Homepage
├── Category 1
│   ├── Subcategory 1.1
│   │   ├── Product 1.1.1
│   │   └── Product 1.1.2
│   └── Subcategory 1.2
├── Category 2
│   ├── Subcategory 2.1
│   └── Subcategory 2.2
├── Blog
│   ├── Category A
│   └── Category B
└── About/Contact/etc.
```

**Best Practices:**
- Flat architecture (fewer clicks = better)
- Logical categorization
- Consistent URL structure
- Breadcrumbs on all pages
- HTML sitemap (for users + SEO)

---

### Crawl Budget Optimization

**What Is Crawl Budget?**
Number of pages Google will crawl on your site per day.

**Important For:**
- Sites with 10,000+ pages
- E-commerce sites
- Sites with frequent content updates

**Optimization Tactics:**
1. Fix crawl errors (4xx, 5xx)
2. Eliminate redirect chains
3. Block low-value pages (robots.txt)
4. Improve site speed
5. Reduce duplicate content
6. Use canonical tags properly
7. Implement pagination correctly

---

## Phase 2: Indexation

### What Is Indexation?

Search engines adding your pages to their database.

### Indexation Checklist

#### Index Coverage Analysis

**Google Search Console → Index → Coverage**

**Status Types:**
- ✅ **Valid:** Indexed (good)
- ⚠️ **Valid with warnings:** Indexed but with issues
- ❌ **Error:** Not indexed due to critical issue
- 🚫 **Excluded:** Not indexed by choice or low priority

**Common Errors:**
- Server errors (5xx)
- Redirect errors
- Submitted URL not found (404)
- Submitted URL blocked by robots.txt
- Submitted URL marked noindex

**Action:** Fix all errors, monitor weekly

---

#### Noindex Tags

**When to Use:**
- Thank you pages
- Internal search results
- Admin/login pages
- Duplicate content (tag pages, etc.)
- Staging/development pages

**Implementation:**
```html
<meta name="robots" content="noindex">
```

**Check:**
- [ ] No important pages are noindexed
- [ ] All appropriate pages are noindexed
- [ ] Noindex + nofollow for sensitive pages

**Audit:**
- Screaming Frog (filter by noindex)
- Site search: `site:domain.com` (check what's indexed)

---

#### Canonical Tags

**Purpose:** Tell search engines which version of duplicate content to index.

**When to Use:**
- Duplicate content (printer-friendly versions)
- Similar products (different colors/sizes)
- HTTP vs HTTPS
- WWW vs non-WWW
- URL parameters (sorting, filtering)

**Implementation:**
```html
<link rel="canonical" href="https://domain.com/preferred-url/">
```

**Best Practices:**
- Self-referencing canonicals on all pages
- Point to the preferred version
- Don't canonicalize to a different domain (unless migrating)
- Don't chain canonicals

**Common Mistakes:**
- Canonicalizing to a 404 page
- Canonicalizing to a noindex page
- Inconsistent canonicals
- Multiple canonicals on one page

---

#### Pagination

**Best Practices:**
- Use rel="next" and rel="prev" (though deprecated, still helpful)
- Ensure all paginated pages are crawlable
- Include pagination in sitemap
- Consider "view all" option
- Avoid infinite scroll without crawlable fallback

**Implementation:**
```html
<link rel="next" href="https://domain.com/page/2/">
<link rel="prev" href="https://domain.com/page/1/">
```

---

#### Faceted Navigation (E-commerce)

**Challenge:** Filters create thousands of duplicate URLs.

**Solutions:**
1. **Noindex filter pages:**
   ```html
   <meta name="robots" content="noindex, follow">
   ```

2. **Canonical to main category:**
   ```html
   <link rel="canonical" href="https://domain.com/category/">
   ```

3. **Block via robots.txt:**
   ```
   Disallow: /*?*sort=
   Disallow: /*?*filter=
   ```

4. **Use JavaScript for filters:**
   - URLs don't change
   - Content updates dynamically

---

## Phase 3: Site Speed

### Core Web Vitals

Google's user experience metrics (ranking factor).

| Metric | What It Measures | Good | Needs Improvement | Poor |
|--------|-----------------|------|-------------------|------|
| LCP | Loading speed | <2.5s | 2.5-4s | >4s |
| FID/INP | Interactivity | <100ms | 100-300ms | >300ms |
| CLS | Visual stability | <0.1 | 0.1-0.25 | >0.25 |

---

### LCP Optimization (Largest Contentful Paint)

**What It Is:** Time to render the largest visible element.

**Common Issues:**
- Slow server response
- Render-blocking resources
- Slow resource load times
- Client-side rendering

**Solutions:**
1. **Improve server response time:**
   - Use CDN
   - Upgrade hosting
   - Implement caching
   - Optimize database

2. **Optimize images:**
   - Compress images
   - Use next-gen formats (WebP, AVIF)
   - Implement lazy loading
   - Specify image dimensions

3. **Remove render-blocking resources:**
   - Inline critical CSS
   - Defer non-critical CSS
   - Async JavaScript
   - Remove unused CSS/JS

4. **Preload key resources:**
   ```html
   <link rel="preload" href="hero-image.webp" as="image">
   ```

---

### INP Optimization (Interaction to Next Paint)

**What It Is:** Responsiveness to user interactions.

**Common Issues:**
- Heavy JavaScript execution
- Long tasks blocking main thread
- Complex event handlers

**Solutions:**
1. **Break up long tasks:**
   - Split large JavaScript files
   - Use web workers
   - Defer non-critical JS

2. **Optimize event handlers:**
   - Debounce/throttle scroll events
   - Use passive event listeners
   - Minimize DOM manipulation

3. **Reduce JavaScript:**
   - Remove unused JS
   - Code split
   - Tree shaking

---

### CLS Optimization (Cumulative Layout Shift)

**What It Is:** Visual stability during page load.

**Common Issues:**
- Images without dimensions
- Ads/embeds without reserved space
- Dynamic content injection
- Web fonts causing FOIT/FOUT

**Solutions:**
1. **Specify image/video dimensions:**
   ```html
   <img src="image.jpg" width="800" height="600" alt="...">
   ```

2. **Reserve space for ads/embeds:**
   ```css
   .ad-container {
     min-height: 250px;
   }
   ```

3. **Handle dynamic content:**
   - Reserve space for banners
   - Use skeleton loaders
   - Avoid inserting content above existing content

4. **Optimize web fonts:**
   - Use font-display: swap
   - Preload critical fonts
   - Use system fonts as fallback

---

### Speed Testing Tools

| Tool | Purpose | URL |
|------|---------|-----|
| PageSpeed Insights | CWV + recommendations | pagespeed.web.dev |
| GTmetrix | Waterfall + recommendations | gtmetrix.com |
| WebPageTest | Advanced testing | webpagetest.org |
| Chrome DevTools | Real-time debugging | Built into Chrome |
| Lighthouse | Audits + CWV | Built into Chrome |

---

### Speed Optimization Checklist

**Server-Level:**
- [ ] Use CDN (Cloudflare, CloudFront, etc.)
- [ ] Enable compression (gzip, Brotli)
- [ ] Implement caching (browser, server, object)
- [ ] Use HTTP/2 or HTTP/3
- [ ] Optimize server response time (<200ms)

**Frontend:**
- [ ] Minify CSS, JS, HTML
- [ ] Remove unused CSS/JS
- [ ] Defer non-critical JavaScript
- [ ] Inline critical CSS
- [ ] Lazy load images/videos
- [ ] Preload key resources
- [ ] Use next-gen image formats

**Images:**
- [ ] Compress all images
- [ ] Specify dimensions
- [ ] Use responsive images (srcset)
- [ ] Implement lazy loading
- [ ] Serve from CDN

**Third-Party:**
- [ ] Audit third-party scripts
- [ ] Remove unnecessary scripts
- [ ] Load non-critical scripts asynchronously
- [ ] Use self-hosted fonts when possible

---

## Phase 4: Mobile Optimization

### Mobile-First Indexing

Google primarily uses mobile version for indexing and ranking.

### Mobile Checklist

- [ ] Responsive design
- [ ] Touch-friendly elements (48x48px minimum)
- [ ] Readable font sizes (16px minimum)
- [ ] Adequate spacing between clickable elements
- [ ] No horizontal scrolling
- [ ] Mobile page speed optimized
- [ ] Mobile-friendly navigation
- [ ] Viewport meta tag configured

**Viewport Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

---

### Mobile Usability Issues

**Check in GSC:** Experience → Mobile Usability

**Common Issues:**
- Text too small to read
- Clickable elements too close together
- Content wider than screen
- Viewport not set

**Fix:** Responsive design, proper CSS, testing

---

### Mobile Testing

**Tools:**
- Google Mobile-Friendly Test
- Chrome DevTools (Device Mode)
- BrowserStack (real device testing)
- Google Search Console (Mobile Usability report)

---

## Phase 5: Schema Markup

### What Is Schema?

Structured data that helps search engines understand your content.

### Schema Types

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555",
    "contactType": "customer service"
  }
}
```

---

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "telephone": "+1-555-555-5555"
}
```

---

#### Article/BlogPosting Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "image": "https://domain.com/image.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}
```

---

#### Product Schema (E-commerce)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://domain.com/product.jpg",
  "description": "Product description",
  "sku": "SKU123",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "128"
  }
}
```

---

#### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Question 1?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Answer 1."
    }
  }, {
    "@type": "Question",
    "name": "Question 2?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Answer 2."
    }
  }]
}
```

---

### Schema Implementation

**Methods:**
1. **JSON-LD** (Recommended by Google)
   - Added in `<head>` or `<body>`
   - Separate from HTML
   - Easiest to implement

2. **Microdata**
   - Embedded in HTML tags
   - More complex
   - Legacy approach

3. **RDFa**
   - Similar to microdata
   - Less common

**Tools:**
- Google Rich Results Test
- Schema Markup Validator
- Merkle Schema Generator
- WordPress plugins (Yoast, RankMath, Schema Pro)

---

### Schema Testing

**Tools:**
- Google Rich Results Test: test.google.com/rich-results
- Schema Markup Validator: validator.schema.org

**Check:**
- [ ] Valid markup (no errors)
- [ ] All required fields included
- [ ] Testing tool shows eligible for rich results

---

## Phase 6: Security & HTTPS

### HTTPS Implementation

**Requirements:**
- [ ] SSL certificate installed
- [ ] All pages served over HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] No mixed content warnings
- [ ] HSTS implemented (optional but recommended)

**Implementation:**
```apache
# .htaccess redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

### Security Headers

```apache
# HSTS
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# X-Frame-Options (clickjacking protection)
Header always set X-Frame-Options "SAMEORIGIN"

# X-Content-Type-Options (MIME sniffing)
Header always set X-Content-Type-Options "nosniff"

# X-XSS-Protection
Header always set X-XSS-Protection "1; mode=block"

# Content-Security-Policy
Header always set Content-Security-Policy "default-src 'self'"
```

---

### Security Checklist

- [ ] SSL certificate valid (not expired)
- [ ] HTTPS enforced site-wide
- [ ] Mixed content resolved
- [ ] Security headers implemented
- [ ] Regular security updates
- [ ] Strong passwords
- [ ] Two-factor authentication
- [ ] Regular backups

---

## Phase 7: JavaScript SEO

### JavaScript Rendering

**Challenge:** Search engines may not execute JavaScript properly.

**Solutions:**

#### 1. Server-Side Rendering (SSR)
- HTML rendered on server
- Search engines see complete content
- Best for SEO

#### 2. Static Site Generation (SSG)
- Pre-rendered HTML at build time
- Fast, SEO-friendly
- Good for content sites

#### 3. Dynamic Rendering
- Serve HTML to bots, JS to users
- Use Prerender.io, Rendertron
- Good fallback option

#### 4. Hydration
- SSR + client-side interactivity
- Best of both worlds
- Used by Next.js, Nuxt.js

---

### JavaScript SEO Checklist

- [ ] Content visible in rendered HTML
- [ ] Links are standard `<a>` tags with href
- [ ] Important content not JS-dependent
- [ ] Lazy-loaded content crawlable
- [ ] Test with Google's URL Inspection Tool
- [ ] Check rendered HTML in GSC

---

### Testing JavaScript SEO

**Tools:**
- Google Search Console → URL Inspection → View Crawled Page
- Screaming Frog (JavaScript rendering mode)
- Chrome DevTools (disable JavaScript)
- Mobile-Friendly Test

---

## Technical SEO Tools

### Essential (Free)
| Tool | Purpose |
|------|---------|
| Google Search Console | Index coverage, CWV, mobile issues |
| Google Analytics | Traffic analysis |
| PageSpeed Insights | Speed + CWV |
| Screaming Frog (free up to 500 URLs) | Site crawl |
| Chrome DevTools | Debugging |

### Professional (Paid)
| Tool | Purpose | Cost |
|------|---------|------|
| Screaming Frog | Site crawl | £149/year |
| Sitebulb | Site crawl + visualization | $9+/mo |
| Ahrefs | Backlinks + keywords | $99+/mo |
| SEMrush | All-in-one | $119+/mo |
| DeepCrawl/Botify | Enterprise crawl | Custom |
| Botify | Enterprise technical SEO | Custom |

---

## Technical SEO Audit Checklist

### Crawlability
- [ ] robots.txt allows important pages
- [ ] XML sitemap exists and is valid
- [ ] No orphan pages
- [ ] Logical site architecture
- [ ] Breadcrumbs implemented

### Indexation
- [ ] Noindex tags used correctly
- [ ] Canonical tags implemented
- [ ] Pagination handled correctly
- [ ] Faceted navigation managed
- [ ] Index coverage errors resolved

### Site Speed
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Images optimized
- [ ] CDN implemented
- [ ] Caching enabled

### Mobile
- [ ] Responsive design
- [ ] Mobile-friendly test passed
- [ ] Touch elements properly sized
- [ ] No mobile usability errors

### Schema
- [ ] Organization schema
- [ ] Relevant type-specific schema
- [ ] Valid markup (no errors)
- [ ] Rich results eligible

### Security
- [ ] HTTPS implemented
- [ ] No mixed content
- [ ] Security headers
- [ ] SSL certificate valid

### JavaScript
- [ ] Content crawlable
- [ ] Links standard `<a>` tags
- [ ] Rendering tested
- [ ] No critical JS-dependent content

---

## Technical SEO Reporting

### Weekly
- Crawl errors (GSC)
- Index coverage changes
- Core Web Vitals status

### Monthly
- Site speed trends
- Mobile usability
- Schema validation
- Security status

### Quarterly
- Full technical audit
- Architecture review
- JavaScript rendering check
- Competitor technical comparison

---

## Best Practices

1. **Crawlability first** - If they can't crawl, they can't rank
2. **Mobile-first** - Google indexes mobile version
3. **Speed matters** - CWV is a ranking factor
4. **Schema helps** - Rich results increase CTR
5. **HTTPS is mandatory** - Security is a ranking signal
6. **Monitor constantly** - Technical issues creep in
7. **Test changes** - Always test before deploying
8. **Document everything** - For team + future reference

---

*This system has fixed technical issues for 1,000+ websites.*
