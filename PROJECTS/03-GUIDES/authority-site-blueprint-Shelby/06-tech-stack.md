# Tech Stack: Platform & Hosting Decisions

**WordPress vs. Static Sites, hosting options, and deployment (2025)**

---

## Table of Contents

1. [Platform Comparison](#platform-comparison)
2. [WordPress Setup Guide](#wordpress-setup-guide)
3. [Static Site Generators](#static-site-generators)
4. [Hosting Options](#hosting-options)
5. [Essential Plugins & Tools](#essential-plugins--tools)
6. [Performance Optimization](#performance-optimization)
7. [Security Best Practices](#security-best-practices)

---

## Platform Comparison

### WordPress vs. Static Site Generators

| Factor | WordPress | Static Site (SSG) |
|--------|-----------|-------------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Security** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Flexibility** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Cost** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintenance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Scalability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### When to Choose WordPress

**Choose WordPress if:**
- ✅ You want the easiest content management
- ✅ You need frequent content updates
- ✅ You want access to thousands of plugins
- ✅ You're not technically inclined
- ✅ You need e-commerce (WooCommerce)
- ✅ You need user accounts, comments, forums
- ✅ You want to hire writers/editors easily

**Best For:** Most authority sites, especially for non-technical founders

---

### When to Choose Static Site Generator

**Choose SSG if:**
- ✅ Performance is your #1 priority
- ✅ You have development resources
- ✅ You want minimal maintenance
- ✅ Security is paramount
- ✅ You want lowest hosting costs
- ✅ Content doesn't change frequently
- ✅ You're comfortable with Git/workflows

**Best For:** Technical founders, developer-led projects, maximum performance needs

---

### Popular Static Site Generators

| SSG | Language | Best For | Learning Curve |
|-----|----------|----------|----------------|
| **Next.js** | JavaScript/React | Dynamic features, large sites | Medium-High |
| **Astro** | JavaScript | Content sites, best performance | Medium |
| **Hugo** | Go | Speed, simplicity | Low-Medium |
| **Gatsby** | JavaScript/React | React developers | Medium-High |
| **Eleventy (11ty)** | JavaScript | Flexibility, simplicity | Medium |
| **Jekyll** | Ruby | Simplicity, GitHub Pages | Low |

---

## WordPress Setup Guide

### Step 1: Choose Hosting

**Recommended WordPress Hosts:**

| Host | Best For | Starting Price | Key Feature |
|------|----------|----------------|-------------|
| **Cloudways** | Performance/Value | $14/mo | Cloud hosting, managed |
| **SiteGround** | Beginners | $3.99/mo | Great support |
| **WP Engine** | Premium/Enterprise | $20/mo | Managed WordPress |
| **Kinsta** | Premium | $35/mo | Google Cloud, fast |
| **Hostinger** | Budget | $2.99/mo | Cheap starter option |
| **Flywheel** | Agencies | $15/mo | Agency features |

**Our Recommendation:** Cloudways (DigitalOcean or Vultr) for best performance/price ratio

---

### Step 2: Install WordPress

**Via Hosting Panel (Typical):**
1. Log into hosting account
2. Find "One-Click Install" or "WordPress"
3. Select domain
4. Set admin username/password
5. Click Install

**Manual Installation:**
1. Download WordPress from wordpress.org
2. Upload to server via FTP
3. Create MySQL database
4. Run installation script
5. Configure wp-config.php

---

### Step 3: Basic Configuration

**Settings to Update Immediately:**

1. **General Settings**
   - Site Title
   - Tagline
   - Timezone
   - Date format

2. **Permalinks** (Settings → Permalinks)
   - Choose "Post name" (`/sample-post/`)
   - Avoid dates in URLs

3. **Reading Settings**
   - Set homepage (static or latest posts)
   - Set posts page (if using static homepage)
   - Discourage search engines (UNCHECK when ready to launch)

4. **Discussion Settings**
   - Enable/disable comments
   - Moderation settings
   - Avatar settings

---

### Step 4: Choose a Theme

**Recommended Themes for Authority Sites:**

| Theme | Price | Best For | Speed |
|-------|-------|----------|-------|
| **GeneratePress** | $59/yr | Speed, flexibility | ⭐⭐⭐⭐⭐ |
| **Kadence** | Free-$149/yr | Features, value | ⭐⭐⭐⭐⭐ |
| **Astra** | Free-$59/yr | Lightweight, popular | ⭐⭐⭐⭐⭐ |
| **Blocksy** | Free-$99/yr | Modern, Gutenberg | ⭐⭐⭐⭐ |
| **GenerateBlocks** | $39/yr | Page builder | ⭐⭐⭐⭐⭐ |

**Avoid:**
- Heavy multipurpose themes (Avada, Divi for content sites)
- Themes with bundled page builders (slower)
- Themes with poor reviews or no updates

---

### Step 5: Install Essential Plugins

**Must-Have Plugins:**

| Category | Plugin | Purpose |
|----------|--------|---------|
| **SEO** | Rank Math or Yoast SEO | On-page optimization |
| **Caching** | WP Rocket | Speed optimization |
| **Security** | Wordfence or Sucuri | Security firewall |
| **Backup** | UpdraftPlus or BlogVault | Automated backups |
| **Image Optimization** | ShortPixel or Imagify | Compress images |
| **Table of Contents** | Table of Contents Plus | Auto TOC generation |
| **Internal Linking** | Link Whisper | Internal link suggestions |
| **Analytics** | Site Kit by Google | GA4 + Search Console |

**Nice-to-Have:**
- **Pretty Links** - Link management
- **Redirection** - 301 redirects
- **WPForms** - Contact forms
- **MonsterInsights** - Advanced analytics
- **Perfmatters** - Additional optimization

---

## Static Site Generators

### Getting Started with Astro (Recommended SSG)

**Why Astro:**
- Best-in-class performance
- Easy to learn (if you know HTML/CSS)
- Built for content sites
- Island architecture (load JS only when needed)
- Great developer experience

**Basic Setup:**

```bash
# Create new project
npm create astro@latest my-authority-site

# Install dependencies
cd my-authority-site
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**Project Structure:**
```
my-authority-site/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   └── [slug].astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── components/
│       ├── Header.astro
│       └── Footer.astro
├── public/
├── astro.config.mjs
└── package.json
```

---

### Content Management for Static Sites

**Options:**

1. **Markdown/MDX Files**
   - Simple, version-controlled
   - Edit in any text editor
   - No database needed

2. **Headless CMS**
   - **Contentful** - Enterprise-grade
   - **Sanity** - Developer-friendly
   - **Strapi** - Self-hosted
   - **Forestry** - Git-based
   - **Decap CMS** - Open source

3. **WordPress as Headless CMS**
   - Use WordPress for content entry
   - Static site pulls via API
   - Best of both worlds

---

### Deployment for Static Sites

**Recommended Platforms:**

| Platform | Best For | Pricing | Key Feature |
|----------|----------|---------|-------------|
| **Vercel** | Next.js, general | Free-$20/mo | Easy deployment |
| **Netlify** | General SSGs | Free-$19/mo | Forms, functions |
| **Cloudflare Pages** | Performance | Free-$20/mo | Global CDN |
| **GitHub Pages** | Simple projects | Free | Integrated with Git |
| **AWS S3 + CloudFront** | Enterprise | Pay-as-you-go | Full control |

**Typical Deployment Workflow:**
1. Push code to GitHub/GitLab
2. Connect repository to hosting platform
3. Configure build settings
4. Automatic deployment on push
5. Custom domain setup

---

## Hosting Options

### Hosting Types Explained

#### Shared Hosting
- **What:** Your site shares server with other sites
- **Pros:** Cheap, easy to use
- **Cons:** Slower, less secure, limited resources
- **Best For:** Very small sites, testing
- **Price:** $3-10/month

#### VPS (Virtual Private Server)
- **What:** Dedicated portion of server resources
- **Pros:** Better performance, more control
- **Cons:** Requires more technical knowledge
- **Best For:** Growing sites, custom needs
- **Price:** $10-50/month

#### Managed WordPress Hosting
- **What:** Optimized specifically for WordPress
- **Pros:** Fast, secure, WordPress-specific features
- **Cons:** More expensive, WordPress only
- **Best For:** Serious WordPress sites
- **Price:** $20-100/month

#### Cloud Hosting
- **What:** Resources across multiple servers
- **Pros:** Scalable, reliable, pay for what you use
- **Cons:** Can get expensive, complex pricing
- **Best For:** High-traffic sites, variable traffic
- **Price:** $10-200+/month

#### Dedicated Server
- **What:** Entire physical server
- **Pros:** Maximum performance and control
- **Cons:** Expensive, requires expertise
- **Best For:** Very large sites, enterprise
- **Price:** $100-500+/month

---

### Recommended Hosting by Stage

| Site Stage | Traffic | Recommended Hosting | Monthly Cost |
|------------|---------|--------------------|--------------|
| **Starting** | 0-10K visits | Shared or entry VPS | $5-15 |
| **Growing** | 10K-50K visits | Managed WordPress or Cloud | $20-50 |
| **Established** | 50K-200K visits | Premium Managed or Cloud | $50-150 |
| **Authority** | 200K+ visits | Enterprise Cloud or Dedicated | $150-500+ |

---

### Cloudways Setup (Recommended)

**Why Cloudways:**
- Managed cloud hosting
- Choose from 5 cloud providers
- Easy scaling
- Great performance
- 24/7 support

**Setup Steps:**

1. **Sign Up**
   - Visit cloudways.com
   - Start free trial (3 days)
   - No credit card required

2. **Launch Server**
   - Choose cloud provider (DigitalOcean recommended)
   - Select server size (2GB RAM to start)
   - Choose location (closest to audience)
   - Launch server (~5 minutes)

3. **Install WordPress**
   - From Cloudways panel
   - One-click WordPress install
   - Set admin credentials

4. **Configure Domain**
   - Point domain to server IP
   - Add domain in Cloudways
   - Install SSL certificate (free)

5. **Optimize**
   - Enable Breeze caching (built-in)
   - Configure CDN (optional)
   - Set up automated backups

**Pricing:**
- 1GB RAM: $14/month (up to ~10K visits)
- 2GB RAM: $28/month (up to ~25K visits)
- 4GB RAM: $56/month (up to ~50K visits)
- 8GB RAM: $112/month (up to ~100K+ visits)

---

## Essential Plugins & Tools

### WordPress Plugin Stack (Recommended)

```
SEO & Content:
├── Rank Math (SEO)
├── Table of Contents Plus
└── Link Whisper (internal linking)

Performance:
├── WP Rocket (caching)
├── ShortPixel (images)
└── Perfmatters (optimization)

Security:
├── Wordfence (firewall)
├── UpdraftPlus (backups)
└── Cloudflare (CDN + security)

Analytics:
├── Site Kit by Google
└── MonsterInsights (optional, advanced)

Utility:
├── Pretty Links (link management)
├── Redirection (301s)
└── WPForms (forms)
```

**Total Monthly Cost:** ~$50-100/month (many have free versions)

---

### SaaS Tools for Authority Sites

| Tool | Purpose | Cost |
|------|---------|------|
| **Ahrefs/SEMrush** | SEO research | $99-200/mo |
| **Surfer SEO** | Content optimization | $89/mo |
| **Grammarly** | Writing assistance | $12/mo |
| **Canva Pro** | Graphics | $15/mo |
| **ConvertKit** | Email marketing | $29+/mo |
| **Notion** | Content calendar | Free-$10/mo |
| **Zapier** | Automation | $20+/mo |

---

## Performance Optimization

### Speed Optimization Checklist

**Server-Level:**
- [ ] Quality hosting (not cheapest shared)
- [ ] Server location near audience
- [ ] PHP 8.1+ (for WordPress)
- [ ] HTTP/2 or HTTP/3 enabled
- [ ] Gzip/Brotli compression

**WordPress-Specific:**
- [ ] Caching plugin configured
- [ ] Object caching (Redis/Memcached)
- [ ] Database optimization
- [ ] Lazy loading enabled
- [ ] Heartbeat API limited

**Front-End:**
- [ ] Images optimized (WebP, compressed)
- [ ] Minified CSS/JS
- [ ] Critical CSS inlined
- [ ] JavaScript deferred
- [ ] Unused CSS removed

**CDN:**
- [ ] CDN enabled (Cloudflare, BunnyCDN)
- [ ] Assets served from CDN
- [ ] Cache rules configured

---

### Performance Targets

| Metric | Target | Tool to Measure |
|--------|--------|-----------------|
| **PageSpeed Score** | 90+ (mobile) | PageSpeed Insights |
| **Time to First Byte** | <200ms | WebPageTest |
| **Largest Contentful Paint** | <2.5s | PageSpeed Insights |
| **Total Page Size** | <2MB | GTmetrix |
| **Total Requests** | <100 | GTmetrix |

---

### Image Optimization Workflow

**Before Upload:**
1. Resize to max display width (usually 1200-1600px)
2. Compress (TinyPNG, ShortPixel)
3. Convert to WebP if possible

**After Upload:**
1. Auto-optimize with plugin
2. Generate multiple sizes
3. Enable lazy loading
4. Add descriptive alt text

**Tools:**
- **ShortPixel** - WordPress plugin, excellent compression
- **Imagify** - WordPress plugin, good alternative
- **TinyPNG** - Online tool, free tier available
- **Squoosh** - Google's free tool

---

## Security Best Practices

### WordPress Security Checklist

**Essential:**
- [ ] Strong admin password
- [ ] Two-factor authentication
- [ ] Regular backups (daily)
- [ ] Security plugin (Wordfence/Sucuri)
- [ ] SSL certificate (HTTPS)
- [ ] Regular updates (core, plugins, themes)

**Recommended:**
- [ ] Change default admin username
- [ ] Limit login attempts
- [ ] Disable file editing in dashboard
- [ ] Hide WordPress version
- [ ] Disable XML-RPC if not needed
- [ ] Web application firewall (WAF)

**Advanced:**
- [ ] Security headers
- [ ] Regular malware scans
- [ ] File integrity monitoring
- [ ] Database security
- [ ] DDoS protection

---

### Backup Strategy

**The 3-2-1 Rule:**
- 3 copies of your data
- 2 different media types
- 1 off-site backup

**WordPress Backup Setup:**

**Plugin:** UpdraftPlus (free) or BlogVault (paid)

**Schedule:**
- Database: Daily
- Files: Weekly
- Retention: 4+ weeks

**Storage Locations:**
- Server (primary)
- Cloud storage (Google Drive, Dropbox, S3)
- Local download (monthly)

**Test Restores:**
- Test restoration quarterly
- Document the process
- Ensure team knows how to restore

---

### Monitoring & Maintenance

**Weekly Tasks:**
- Check for updates
- Review security logs
- Verify backups completed
- Check uptime

**Monthly Tasks:**
- Full site backup test
- Performance audit
- Security scan
- Plugin/theme audit (remove unused)

**Quarterly Tasks:**
- Full security audit
- Speed optimization review
- Plugin updates (major versions)
- Content audit

---

## Cost Breakdown

### Starting Budget (Months 1-6)

| Item | Monthly Cost |
|------|--------------|
| Hosting (Cloudways 1GB) | $14 |
| Domain | $1.50 |
| Theme (one-time) | $5 |
| Essential Plugins | $0-30 |
| **Total** | **$20-50/month** |

### Growth Budget (Months 7-12)

| Item | Monthly Cost |
|------|--------------|
| Hosting (Cloudways 2-4GB) | $28-56 |
| Domain | $1.50 |
| Premium Plugins | $30-50 |
| SEO Tools | $99 |
| Email Marketing | $29 |
| **Total** | **$180-230/month** |

### Authority Budget (Year 2+)

| Item | Monthly Cost |
|------|--------------|
| Hosting (Cloudways 4-8GB) | $56-112 |
| Premium Tools Stack | $200-400 |
| Content/Editor | $500-2000 |
| **Total** | **$750-2500+/month** |

---

## Action Steps

1. **Choose your platform** - WordPress for most, SSG if technical
2. **Select hosting** - Cloudways recommended for WordPress
3. **Install and configure** - Follow setup guide
4. **Install essential plugins** - Security, SEO, caching
5. **Set up backups** - Automated, off-site
6. **Configure CDN** - Cloudflare free tier
7. **Optimize performance** - Follow checklist
8. **Implement security** - Follow security checklist

---

**Next:** [07-revenue-projections.md](./07-revenue-projections.md) - Realistic income timelines
