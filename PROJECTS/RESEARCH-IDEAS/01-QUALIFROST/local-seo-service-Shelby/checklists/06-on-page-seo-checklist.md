# On-Page SEO Checklist
## NAP Consistency, Schema Markup & Local Content Optimization

---

## 📍 SECTION 1: NAP CONSISTENCY (Name, Address, Phone)

### Homepage NAP
- [ ] Business name matches GBP exactly
- [ ] Street address complete and formatted correctly
- [ ] Phone number is local (not toll-free)
- [ ] NAP is in HTML text (not images)
- [ ] NAP is visible without scrolling (above the fold)
- [ ] Click-to-call enabled for mobile: `<a href="tel:+1234567890">`
- [ ] Address links to Google Maps

### Footer NAP (Site-wide)
- [ ] NAP appears in website footer on all pages
- [ ] Format consistent with homepage
- [ ] Schema markup applied to footer NAP
- [ ] Phone number clickable on mobile
- [ ] Address includes city, state, ZIP

### Contact Page NAP
- [ ] Full NAP displayed prominently
- [ ] Embedded Google Map with business location
- [ ] Contact form includes NAP fields
- [ ] Business hours displayed
- [ ] Multiple contact methods (phone, email, form)
- [ ] Parking/accessibility info (if applicable)

### NAP Formatting Standards
- [ ] **Business Name:** Use exact legal name consistently
- [ ] **Address Format:** 
  - Street abbreviation consistent (St. vs Street)
  - Suite/Apt format consistent (Ste. vs Suite)
  - City, State ZIP format consistent
- [ ] **Phone Format:** (XXX) XXX-XXXX or XXX-XXX-XXXX (pick one)
- [ ] **URL:** www vs non-www consistent, HTTPS everywhere

### NAP Audit Checklist
- [ ] Homepage NAP matches GBP
- [ ] Contact page NAP matches homepage
- [ ] Footer NAP matches homepage
- [ ] All location pages (if multi-location) consistent
- [ ] Social media profiles match website NAP
- [ ] Citation directories match website NAP
- [ ] Email signatures include correct NAP
- [ ] Business cards match website NAP

---

## 🏷️ SECTION 2: SCHEMA MARKUP (LocalBusiness)

### Required Schema Properties
Implement LocalBusiness schema on homepage and contact page:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://yourdomain.com/logo.jpg",
  "@id": "https://yourdomain.com",
  "url": "https://yourdomain.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "ST",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

### Schema Implementation Checklist
- [ ] JSON-LD format used (preferred by Google)
- [ ] Schema on homepage
- [ ] Schema on contact page
- [ ] Schema on location pages (if multi-location)
- [ ] All required properties included
- [ ] Schema validated with Google Rich Results Test
- [ ] aggregateRating matches actual reviews
- [ ] openingHours matches GBP hours
- [ ] geo coordinates accurate

### Additional Schema Types (Industry-Specific)

**For Restaurants:**
```json
"@type": "Restaurant",
"servesCuisine": "Italian",
"menu": "https://yourdomain.com/menu",
"acceptsReservations": "true"
```

**For Medical Practices:**
```json
"@type": "Physician",
"medicalSpecialty": "FamilyPractice",
"availableService": {
  "@type": "MedicalProcedure",
  "name": "Annual Physical Exam"
}
```

**For Legal Services:**
```json
"@type": "Attorney",
"areaServed": {
  "@type": "City",
  "name": "City Name"
},
"practiceArea": "Personal Injury"
```

**For Home Services:**
```json
"@type": "HomeAndConstructionBusiness",
"areaServed": {
  "@type": "City",
  "name": "City Name"
},
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Plumbing Services"
}
```

### Schema Validation
- [ ] Test with Google Rich Results Test
- [ ] Test with Schema.org Validator
- [ ] Check for errors and warnings
- [ ] Verify mobile compatibility
- [ ] Monitor Search Console for issues

---

## 📄 SECTION 3: TITLE TAGS & META DESCRIPTIONS

### Title Tag Optimization
- [ ] Length: 50-60 characters
- [ ] Primary keyword near beginning
- [ ] City/region included
- [ ] Business name included (at end)
- [ ] Unique for each page
- [ ] No keyword stuffing
- [ ] Compelling and descriptive

**Title Tag Templates:**

**Homepage:**
```
Primary Service + City | Business Name
Example: Plumber in Denver | Smith Plumbing Co.
```

**Service Page:**
```
Service + City + Secondary Keyword | Business Name
Example: Water Heater Repair Denver | Emergency Service | Smith Plumbing
```

**Location Page:**
```
Service + Neighborhood/City | Business Name
Example: Plumber in Capitol Hill Denver | Smith Plumbing
```

**Blog Post:**
```
How-To/Question + Primary Keyword | Business Name
Example: How to Fix a Leaky Faucet | Denver Plumber Tips
```

### Meta Description Optimization
- [ ] Length: 150-160 characters
- [ ] Include primary keyword
- [ ] Include city/region
- [ ] Compelling call-to-action
- [ ] Unique for each page
- [ ] Matches search intent
- [ ] Highlights unique value

**Meta Description Templates:**

**Service Page:**
```
Looking for [service] in [city]? [Business Name] provides 
[unique value]. Licensed & insured. Call [phone] for free estimate!
```

**Homepage:**
```
[Business Name] has served [city] since [year]. Expert [service] 
with upfront pricing. 5-star rated. Call today: [phone]
```

---

## 📝 SECTION 4: HEADER TAGS (H1-H6)

### H1 Tag Best Practices
- [ ] One H1 per page
- [ ] Include primary keyword
- [ ] Include location modifier
- [ ] Compelling and descriptive
- [ ] Different from title tag (but similar)
- [ ] 20-70 characters

**H1 Examples:**
```
✅ Denver's Trusted Plumbing Experts Since 1985
✅ Emergency Plumber in Denver | 24/7 Service
✅ Professional Water Heater Repair in Denver, CO
```

### H2-H6 Structure
- [ ] H2s for main sections
- [ ] H3s for subsections
- [ ] Include keywords naturally
- [ ] Logical hierarchy maintained
- [ ] Scannable structure

**Sample Page Structure:**
```
H1: Denver Plumbing Services

H2: Our Plumbing Services
  H3: Emergency Plumbing
  H3: Drain Cleaning
  H3: Water Heater Services
  
H2: Why Choose Us
  H3: Licensed & Insured
  H3: Upfront Pricing
  H3: 24/7 Availability
  
H2: Service Areas
  H3: Downtown Denver
  H3: Capitol Hill
  H3: Cherry Creek
  
H2: Contact Us Today
```

---

## 🖼️ SECTION 5: IMAGE OPTIMIZATION

### Image File Optimization
- [ ] Descriptive file names (not IMG_1234.jpg)
- [ ] Hyphens between words
- [ ] Include keywords where relevant
- [ ] Compressed for web (under 200KB)
- [ ] WebP format preferred
- [ ] Proper dimensions (not scaled in HTML)

**Good File Names:**
```
✅ denver-plumber-emergency-service.jpg
✅ water-heater-repair-denver.jpg
✅ smith-plumbing-team.jpg
```

### Alt Text Optimization
- [ ] Descriptive alt text for all images
- [ ] Include keywords naturally
- [ ] Describe image content accurately
- [ ] Keep under 125 characters
- [ ] Don't keyword stuff
- [ ] Decorative images: alt=""

**Alt Text Examples:**
```
✅ "Licensed plumber fixing water heater in Denver home"
✅ "Smith Plumbing team photo - Denver plumbing experts"
✅ "Before and after drain cleaning service Denver"
```

### Image Schema (Optional)
- [ ] ImageObject schema for key images
- [ ] Include caption and credit
- [ ] Specify dimensions

---

## 📍 SECTION 6: LOCAL CONTENT STRATEGY

### Location Pages (Multi-Location or Service Area)
Create dedicated pages for each service area:

**Location Page Checklist:**
- [ ] Unique content for each location (not duplicated)
- [ ] Location-specific H1 and title tag
- [ ] NAP for that location (if applicable)
- [ ] Embedded Google Map for area
- [ ] Local landmarks/neighborhoods mentioned
- [ ] Location-specific testimonials
- [ ] Location-specific photos
- [ ] Internal links to and from location page
- [ ] Schema markup for each location

**Location Page Template:**
```markdown
# [Service] in [Neighborhood/City]

[Business Name] provides expert [service] to residents and 
businesses in [neighborhood/city]. Our local team has been 
serving this community since [year].

## Why [Neighborhood] Chooses Us

- Local technicians who know the area
- Fast response times to [neighborhood]
- Familiar with local building codes
- [Local landmark or community reference]

## Our [Neighborhood] Services

[List services specific to this area]

## Service Areas Near [Neighborhood]

[Link to nearby location pages]

## Contact Our [Neighborhood] Team

[NAP]
[Embedded map]
[CTA]
```

### Local Content Topics

**Blog Post Ideas:**
- [ ] "Best [Service] in [City]: Complete Guide"
- [ ] "[City] Building Codes for [Service Type]"
- [ ] "How to Choose a [Service Provider] in [City]"
- [ ] "[Seasonal Service] Tips for [City] Residents"
- [ ] "[Neighborhood] Home Improvement Guide"
- [ ] "Common [Service] Issues in [City] Homes"
- [ ] "[City] vs [Nearby City]: [Service] Comparison"
- [ ] Local event sponsorships and community involvement
- [ ] Customer success stories from local areas

### Local Content Best Practices
- [ ] Mention city/neighborhood names naturally
- [ ] Include local landmarks and references
- [ ] Feature local customers (with permission)
- [ ] Cover local events and news
- [ ] Address local regulations and codes
- [ ] Create city-specific landing pages
- [ ] Embed local maps and directions
- [ ] Use local photos (not stock)

---

## 🔗 SECTION 7: INTERNAL LINKING

### Internal Link Strategy
- [ ] Link to service pages from homepage
- [ ] Link to location pages from service pages
- [ ] Link to related blog posts
- [ ] Use descriptive anchor text
- [ ] Include location keywords in anchors
- [ ] Create topic clusters
- [ ] Fix broken links

**Anchor Text Examples:**
```
✅ "Learn more about our Denver plumbing services"
✅ "See our water heater repair pricing"
✅ "Read customer reviews from Capitol Hill"
❌ "click here"
❌ "read more"
```

### Site Architecture
```
Homepage
├── Services
│   ├── Service 1
│   ├── Service 2
│   └── Service 3
├── Locations
│   ├── Location 1
│   ├── Location 2
│   └── Location 3
├── About Us
├── Reviews
├── Blog
│   ├── Category 1
│   └── Category 2
└── Contact
```

---

## ⚡ SECTION 8: TECHNICAL SEO

### Page Speed
- [ ] Page loads in under 3 seconds
- [ ] Images optimized and compressed
- [ ] Minified CSS and JavaScript
- [ ] Browser caching enabled
- [ ] CDN implemented (if applicable)
- [ ] Mobile page speed acceptable

### Mobile Optimization
- [ ] Responsive design
- [ ] Tap targets appropriately sized
- [ ] No horizontal scrolling
- [ ] Readable font sizes
- [ ] Mobile-friendly navigation
- [ ] Click-to-call buttons

### URL Structure
- [ ] Clean, descriptive URLs
- [ ] Include keywords
- [ ] Use hyphens (not underscores)
- [ ] Lowercase only
- [ ] No unnecessary parameters
- [ ] HTTPS on all pages

**Good URL Examples:**
```
✅ yourdomain.com/plumbing-services/denver
✅ yourdomain.com/services/water-heater-repair
✅ yourdomain.com/locations/capitol-hill
```

---

## 📊 ON-PAGE SEO AUDIT CHECKLIST

### Quick Audit (Monthly)
- [ ] Title tags present and optimized
- [ ] Meta descriptions present
- [ ] H1 tags on all pages
- [ ] Images have alt text
- [ ] NAP consistent across site
- [ ] No broken links
- [ ] Schema markup validated

### Deep Audit (Quarterly)
- [ ] Full keyword ranking review
- [ ] Content freshness check
- [ ] Competitor comparison
- [ ] New location pages needed?
- [ ] New service pages needed?
- [ ] Blog content calendar review
- [ ] Technical SEO audit

---

**Last Audit Date:** _______________  
**Next Audit Date:** _______________  
**Audit Completed By:** _______________  
**Overall Score:** ___/100

---

*Template Version 1.0 | Local SEO Service Package*
