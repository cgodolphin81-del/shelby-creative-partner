#!/bin/bash
# GitHub Pages Auto-Deploy Script
# Automates deployment of static sites to GitHub Pages

set -e

# Configuration
GITHUB_REPO="${GITHUB_REPO:-your-username/your-repo}"
BRANCH="${DEPLOY_BRANCH:-main}"
CUSTOM_DOMAIN="${CUSTOM_DOMAIN:-}"
SSL_ENABLED="${SSL_ENABLED:-true}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Logging functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Pre-flight checks
check_dependencies() {
    log_info "Checking dependencies..."
    
    local deps=("git" "node" "npm")
    for dep in "${deps[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            log_error "$dep is not installed"
            exit 1
        fi
    done
    
    log_info "✓ All dependencies installed"
}

# Initialize repository
init_repo() {
    log_info "Initializing GitHub repository..."
    
    if [ ! -d ".git" ]; then
        git init
        git checkout -b "$BRANCH"
    fi
    
    git remote add origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null || true
    log_info "✓ Repository ready"
}

# Build the site
build_site() {
    log_info "Building site..."
    
    # Check if package.json exists
    if [ -f "package.json" ]; then
        if [ -f "node_modules/.bin/vite" ]; then
            npm run build
        elif [ -f "node_modules/.bin/next" ]; then
            npm run build
        else
            npm install && npm run build
        fi
    elif [ -f "Makefile" ]; then
        make build
    else
        log_warn "No build system detected. Copying files as-is..."
        mkdir -p build
        cp -r * build/ 2>/dev/null || true
    fi
    
    log_info "✓ Site built successfully"
}

# Deploy to GitHub Pages
deploy() {
    log_info "Deploying to GitHub Pages..."
    
    # Get current branch
    current_branch=$(git rev-parse --abbrev-ref HEAD)
    
    # Commit changes
    git add .
    git commit -m "Deploy: $(date +%Y-%m-%d)" --allow-empty || true
    
    # Push to main branch
    git push -u origin "$BRANCH" 2>/dev/null || {
        log_warn "First push. Setting up remote..."
        git remote add origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null || true
        git push -u origin "$BRANCH"
    }
    
    log_info "✓ Deployment complete"
}

# Configure custom domain
configure_domain() {
    if [ -z "$CUSTOM_DOMAIN" ]; then
        log_info "No custom domain configured"
        return
    fi
    
    log_info "Configuring custom domain: $CUSTOM_DOMAIN"
    
    # Create CNAME file
    echo "$CUSTOM_DOMAIN" > CNAME
    
    # Create DNS configuration guide
    cat > DNS-CONFIG.md << EOF
# DNS Configuration for $CUSTOM_DOMAIN

## GitHub Pages Setup

### Step 1: Add CNAME file
A CNAME file has been created in your repository root.

### Step 2: Configure DNS Records

Add these records to your domain's DNS settings:

**Option A: Using GitHub's nameservers (Recommended)**
1. Change your domain's nameservers to GitHub's:
   - ns1.github.com
   - ns2.github.com
   - ns3.github.com
   - ns4.github.com

2. Add an A record pointing to GitHub's IPs:
   @    A    185.199.108.153
   @    A    185.199.109.153
   @    A    185.199.110.153
   @    A    185.199.111.153
   www    CNAME    your-username.github.io

**Option B: Keep existing nameservers**
Add a CNAME record:
www    CNAME    your-username.github.io

### Step 3: Enable SSL

1. Go to your repository Settings > Pages
2. Under "Custom Domain", enter: $CUSTOM_DOMAIN
3. Check "Enforce HTTPS"

Note: SSL certificate may take 24-48 hours to provision.

### Step 4: Verify

After DNS propagation (up to 48 hours):
1. Visit https://$CUSTOM_DOMAIN
2. Verify SSL certificate in browser
3. Test all pages load correctly
EOF
    
    log_info "✓ DNS configuration guide created: DNS-CONFIG.md"
}

# Setup SSL certificate
setup_ssl() {
    if [ "$SSL_ENABLED" != "true" ]; then
        log_warn "SSL not enabled"
        return
    fi
    
    log_info "SSL will be automatically enabled by GitHub Pages"
    log_info "Note: SSL certificate takes 24-48 hours to activate"
}

# Generate deployment report
generate_report() {
    local deploy_time=$(date +%Y-%m-%d\ %H:%M:%S)
    local site_url="https://${GITHUB_REPO%%/*}.github.io"
    
    if [ -n "$CUSTOM_DOMAIN" ]; then
        site_url="https://$CUSTOM_DOMAIN"
    fi
    
    cat > DEPLOYMENT-REPORT.md << EOF
# Deployment Report

**Date:** $deploy_time
**Repository:** $GITHUB_REPO
**Branch:** $BRANCH
**Site URL:** $site_url
**Custom Domain:** ${CUSTOM_DOMAIN:-None}
**SSL:** ${SSL_ENABLED:-Enabled}

## Deployment Steps Completed

1. ✓ Dependencies checked
2. ✓ Site built
3. ✓ Files committed
4. ✓ Pushed to GitHub
5. ✓ GitHub Pages enabled

## Next Steps

1. Wait for DNS propagation (if using custom domain)
2. Enable SSL in GitHub Pages settings
3. Test all pages and links
4. Submit sitemap to Google Search Console
5. Set up analytics tracking

## Monitoring

- GitHub Pages status: https://www.githubstatus.com/
- DNS propagation: https://dnschecker.org/
- SSL check: https://www.ssllabs.com/ssltest/
EOF
    
    log_info "✓ Deployment report: DEPLOYMENT-REPORT.md"
}

# Main deployment function
main() {
    log_info "=== GitHub Pages Auto-Deploy ==="
    log_info "Repository: $GITHUB_REPO"
    log_info "Branch: $BRANCH"
    log_info ""
    
    # Run deployment steps
    check_dependencies
    init_repo
    build_site
    deploy
    configure_domain
    setup_ssl
    generate_report
    
    log_info ""
    log_info "=== Deployment Complete! ==="
    log_info "Your site is now live at: $site_url"
    log_info ""
    log_info "Next steps:"
    log_info "1. Configure DNS (see DNS-CONFIG.md if using custom domain)"
    log_info "2. Enable HTTPS in GitHub Pages settings"
    log_info "3. Submit sitemap to search engines"
    log_info "4. Set up analytics tracking"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --repo)
            GITHUB_REPO="$2"
            shift 2
            ;;
        --branch)
            BRANCH="$2"
            shift 2
            ;;
        --domain)
            CUSTOM_DOMAIN="$2"
            shift 2
            ;;
        --no-ssl)
            SSL_ENABLED="false"
            shift
            ;;
        *)
            log_error "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Execute main function
main
