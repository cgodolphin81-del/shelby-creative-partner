# 🚀 Deployment System Guide

## Overview

Complete deployment system for AI authority sites with:

- ✅ GitHub Pages auto-deploy
- ✅ Custom domain setup
- ✅ SSL certificate configuration
- ✅ CI/CD pipeline
- ✅ Multi-environment support

---

## 📋 Quick Start

```bash
# 1. Clone your site template
git clone https://github.com/your-username/site-template.git
cd site-template

# 2. Configure environment
cp .env.example .env
# Edit .env with your settings

# 3. Deploy
./scripts/deploy/deploy-to-github-pages.sh \
  --repo your-username/site-name \
  --domain yoursite.com
```

---

## 🏗️ Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Your Development                      │
│                         Machine                          │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │ git push
                   ▼
┌─────────────────────────────────────────────────────────┐
│                    GitHub Repository                     │
│                    (Source of Truth)                     │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │ GitHub Actions
                   ▼
┌─────────────────────────────────────────────────────────┐
│                  GitHub Pages                            │
│                  (Static Hosting)                        │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │ DNS + SSL
                   ▼
┌─────────────────────────────────────────────────────────┐
│                  Your Domain                             │
│              (yoursite.com)                              │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 Environment Setup

### .env Configuration

```bash
# Site Configuration
SITE_NAME="Your Authority Site"
SITE_DESCRIPTION="Best guide for [niche]"
SITE_URL="https://yoursite.com"

# GitHub Configuration
GITHUB_REPO="your-username/site-name"
GITHUB_TOKEN="ghp_your_token"  # For CI/CD

# Domain Configuration
CUSTOM_DOMAIN="yoursite.com"
WWW_DOMAIN="www.yoursite.com"

# Build Configuration
BUILD_ENV="production"
NODE_ENV="production"

# Analytics
GA_MEASUREMENT_ID="G-XXXXXXXXXX"
GSC_VERIFICATION="google-xxxxxxx.html"
```

---

## 📦 Deployment Methods

### Method 1: Manual Deployment (Simple)

```bash
# Build the site
npm run build

# Deploy
./scripts/deploy/deploy-to-github-pages.sh
```

**Best for:** Simple static sites, one-time deployments

### Method 2: CI/CD with GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Best for:** Production sites, frequent updates

### Method 3: Custom Domain with Cloudflare (Advanced)

```bash
# Install Cloudflare CLI
npm install -g wrangler

# Configure Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages project create your-site
wrangler pages deploy ./dist --project-name your-site
```

**Best for:** Maximum performance, advanced caching

---

## 🌐 Custom Domain Setup

### Step 1: DNS Configuration

#### Option A: GitHub Nameservers

1. Go to your domain registrar
2. Change nameservers to:
   - ns1.github.com
   - ns2.github.com
   - ns3.github.com
   - ns4.github.com

3. Add A records:
   ```
   @    A    185.199.108.153
   @    A    185.199.109.153
   @    A    185.199.110.153
   @    A    185.199.111.153
   www    CNAME    your-username.github.io
   ```

#### Option B: CNAME Record (Keep existing nameservers)

```
www    CNAME    your-username.github.io
```

### Step 2: GitHub Pages Configuration

1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Custom Domain", enter: `yoursite.com`
4. Click "Save"
5. Check "Enforce HTTPS"

### Step 3: SSL Certificate

GitHub Pages automatically provisions Let's Encrypt SSL.

**Timeline:**
- Initial certificate: 24-48 hours
- Renewal: Automatic (90 days)

**Verify SSL:**
```bash
# Check SSL status
curl -I https://yoursite.com

# Should show:
# HTTP/2 200
# server: GitHub.com
# strict-transport-security: max-age=31536000
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Set up automatic deployments on every push to main:

```yaml
# .github/workflows/auto-deploy.yml
name: Auto Deploy

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install & Build
        run: |
          npm ci
          npm run build
      
      - name: Deploy to Preview
        if: github.event_name == 'pull_request'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          destination_dir: preview/${{ github.event.pull_request.number }}
      
      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📊 Monitoring & Analytics

### Deployment Health Checks

```bash
#!/bin/bash
# scripts/deploy/health-check.sh

SITE_URL="https://yoursite.com"

echo "=== Site Health Check ==="

# Check if site is reachable
if curl -s -o /dev/null -w "%{http_code}" "$SITE_URL" | grep -q "200"; then
    echo "✓ Site is online"
else
    echo "✗ Site is offline"
    exit 1
fi

# Check SSL certificate
if curl -s -o /dev/null -w "%{http_code}" "https://$SITE_URL" | grep -q "200"; then
    echo "✓ SSL is active"
else
    echo "✗ SSL is not working"
fi

# Check page load time
START=$(date +%s%N)
curl -s -o /dev/null -w "" "$SITE_URL"
END=$(date +%s%N)
DURATION=$((($END - $START) / 1000000))
echo "✓ Page load time: ${DURATION}ms"
```

### Performance Monitoring

```yaml
# .github/workflows/performance-check.yml
name: Performance Check

on:
  push:
    branches: [ main ]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Install Lighthouse
        run: npm install -g lighthouse
      
      - name: Run Lighthouse
        run: lighthouse https://yoursite.com --output html --output-path lighthouse-report.html
      
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: lighthouse-report
          path: lighthouse-report.html
```

---

## 🛠️ Troubleshooting

### Common Issues

#### 1. Build Fails

```bash
# Check Node version
node --version

# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check build logs
npm run build 2>&1 | tee build-error.log
```

#### 2. Custom Domain Not Working

```bash
# Check DNS propagation
dig yoursite.com

# Check CNAME
dig www.yoursite.com

# Verify GitHub Pages settings
# Go to: Settings > Pages > Custom Domain
```

#### 3. SSL Not Working

```bash
# Wait 24-48 hours for certificate provisioning
# Check SSL status:
curl -vI https://yoursite.com

# If still not working:
# 1. Go to Settings > Pages
# 2. Uncheck "Enforce HTTPS"
# 3. Re-check "Enforce HTTPS"
```

#### 4. 404 on Specific Pages

```bash
# Check if files were built
ls -la dist/

# Check routing configuration
# For SPA apps, add _redirects file:
/*    /index.html    200
```

---

## 📈 Deployment Checklist

Pre-deployment checklist:

- [ ] All tests passing
- [ ] Build completes without errors
- [ ] Images optimized (WebP, <200KB)
- [ ] All links working
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Analytics tracking added
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Performance score >80

---

## 🎯 Best Practices

### 1. Version Control
- Use semantic versioning (v1.0.0)
- Tag releases in GitHub
- Keep commit messages descriptive

### 2. Performance
- Enable gzip compression
- Use CDN for assets
- Lazy load images
- Minify CSS/JS

### 3. Security
- Use environment variables for secrets
- Enable GitHub secret scanning
- Keep dependencies updated
- Use HTTPS everywhere

### 4. Monitoring
- Set up uptime monitoring
- Track error logs
- Monitor page speed
- Check search console

---

*Next: Implement monetization stacking →*
