# Gumroad Setup Guide

## Overview

This step-by-step guide walks you through setting up your Free AI API Database product on Gumroad, from account creation to launch.

---

## Step 1: Create Your Gumroad Account

### Sign Up

1. Go to **gumroad.com**
2. Click **"Start Selling"** (top right)
3. Enter your email address
4. Create a password
5. Verify your email

### Complete Your Profile

1. Click your profile icon → **"Settings"**
2. **Profile Settings:**
   - Display Name: Your name or brand
   - Bio: Brief description (2-3 sentences)
   - Profile Image: Professional headshot or logo
   - Cover Image: 1600x400px banner

3. **Payment Settings:**
   - Click **"Payouts"** in settings
   - Connect your bank account (ACH) or PayPal
   - Enter tax information (W-9 for US, W-8BEN for international)
   - Minimum payout: $10 (PayPal) or $50 (bank transfer)

4. **Store Settings:**
   - Store URL: `gumroad.com/yourstore`
   - Customize your storefront
   - Add social media links

**Time:** 15-20 minutes

---

## Step 2: Create Your Product

### Basic Information

1. Click **"Products"** → **"New Product"**

2. **Product Name:**
   ```
   Free AI API Database — 125+ Verified APIs for Developers
   ```

3. **Product Type:** Select **"Digital Product"**

4. **Price:** 
   - Set to **$29** (we'll add variants for other tiers)
   - Check **"Allow customers to pay what they want"** — UNCHECKED
   - Check **"Show price in multiple currencies"** — CHECKED

5. **Description:** (Use landing page copy from `landing-page-copy.md`)

   Paste the hero section, problem section, solution section, and what's inside section.

6. **Call to Action:** 
   - Select **"I want this"** (standard)
   - Or customize: **"Get Instant Access"**

**Time:** 10 minutes

---

## Step 3: Set Up Product Variants (Tiers)

### Create Three Variants

1. Click **"Variants"** tab

2. **Variant 1: Free Tier**
   - Name: `Free — 20 API Starter Pack`
   - Price: `$0`
   - Description: `20 curated free APIs + email course`
   - File: Upload `free-tier-20-apis.csv`
   - Quantity: Unlimited

3. **Variant 2: Pro (Default)**
   - Name: `Pro — 125+ APIs + Complete Kit`
   - Price: `$29`
   - Description: `Full database + Notion template + all bonuses`
   - File: Upload complete product bundle (see Step 4)
   - Quantity: Unlimited
   - Mark as **"Most Popular"**

4. **Variant 3: Lifetime**
   - Name: `Lifetime — All APIs + Updates Forever`
   - Price: `$99`
   - Description: `Everything in Pro + lifetime updates + priority support + community`
   - File: Upload complete product bundle + lifetime bonus files
   - Quantity: Unlimited

**Pro Tip:** Set Pro as the default selected variant.

**Time:** 10 minutes

---

## Step 4: Upload Your Files

### Create Your Product Bundle

Organize your files in a ZIP archive:

```
free-api-database-pro/
├── database/
│   ├── apis-full.csv
│   ├── CATEGORIZATION.md
│   └── NOTION-TEMPLATE.md
├── marketing/
│   ├── landing-page-copy.md
│   ├── pricing-strategy.md
│   └── marketing-plan.md
├── guides/
│   ├── gumroad-setup-guide.md
│   ├── update-system.md
│   ├── affiliate-integration.md
│   └── launch-checklist.md
├── templates/
│   ├── notion-template-link.txt
│   ├── email-templates.md
│   └── social-media-posts.md
└── README.md
```

### Upload Process

1. Click **"Content"** tab
2. Click **"Add file"**
3. Upload your ZIP file
4. Name it: `Free_AI_API_Database_Pro.zip`
5. For Lifetime tier, also upload:
   - `lifetime-bonus-access.txt` (Discord invite link)
   - `commercial-license.pdf`
   - `priority-support-contact.txt`

**File Size Limit:** Gumroad allows up to 5GB per file

**Time:** 10 minutes

---

## Step 5: Customize Product Page

### Cover Image

1. **Dimensions:** 1280x720px (16:9 ratio)
2. **Design Elements:**
   - Clear title text
   - Subtitle: "125+ Verified Free AI APIs"
   - Your branding/logo
   - Clean, professional design
3. **Tools:** Canva, Figma, or hire a designer on Fiverr

### Gallery Images (3-5 recommended)

1. **Image 1:** Database preview (Notion screenshot)
2. **Image 2:** Category breakdown (infographic)
3. **Image 3:** What's included (visual list)
4. **Image 4:** Testimonials (when you have them)
5. **Image 5:** Bonus materials preview

### Product Preview

1. Click **"Preview"** tab
2. Upload a sample PDF showing:
   - 5-10 sample API entries
   - Table of contents
   - What customers get
3. This builds trust before purchase

### Custom Fields (Optional)

Add custom questions for buyers:

1. **"What will you use this for?"** (Text, optional)
2. **"How did you hear about us?"** (Multiple choice, optional)
3. **"Join our email list for updates?"** (Checkbox, checked by default)

**Time:** 30-45 minutes (longer if designing graphics)

---

## Step 6: Configure Checkout Settings

### Checkout Options

1. Click **"Checkout"** tab

2. **Recommended Settings:**
   - ✅ Collect email address (required)
   - ✅ Allow gift purchases
   - ✅ Show order summary
   - ✅ Enable discount codes
   - ❌ Require account creation (reduces friction)
   - ❌ Collect phone number (unnecessary)

3. **Receipt Customization:**
   - Add thank you message
   - Include support email
   - Add link to Discord/community
   - Include request for review

4. **Upsell (Optional):**
   - Enable post-purchase upsell
   - Offer: Lifetime upgrade for $70 (one-time)
   - Discount: Show savings amount

**Time:** 10 minutes

---

## Step 7: Set Up Email Automation

### Welcome Email Sequence

1. Click **"Emails"** tab

2. **Immediate Email (Receipt):**
   ```
   Subject: Your Free AI API Database is ready! 🚀
   
   Hey [Name],
   
   Thanks for purchasing the Free AI API Database!
   
   Your download link: [Download Link]
   
   Quick Start Guide:
   1. Download the ZIP file
   2. Import the CSV into Notion (see NOTION-TEMPLATE.md)
   3. Browse the 125+ APIs
   4. Start building!
   
   Questions? Reply to this email.
   
   Happy building,
   [Your Name]
   
   P.S. Join our Discord community: [Link]
   ```

3. **Day 3 Email:**
   ```
   Subject: 3 ways to use your API database 💡
   
   Hey [Name],
   
   Hope you're enjoying the database!
   
   Here are 3 popular use cases:
   
   1. [Use Case 1]
   2. [Use Case 2]
   3. [Use Case 3]
   
   Need help? Just reply!
   
   [Your Name]
   ```

4. **Day 7 Email:**
   ```
   Subject: Quick question...
   
   Hey [Name],
   
   Quick check-in: How's the database working for you?
   
   If you're loving it, would you mind leaving a review?
   It helps more developers discover the resource.
   
   [Leave a Review Link]
   
   Thanks!
   [Your Name]
   ```

5. **Day 30 Email (Update):**
   ```
   Subject: March update: 15 new APIs added 🎉
   
   Hey [Name],
   
   Quick update: We just added 15 new APIs to the database!
   
   New additions include:
   - [API 1]
   - [API 2]
   - [API 3]
   
   Download the updated CSV: [Link]
   
   [Your Name]
   ```

**Time:** 30 minutes

---

## Step 8: Set Up Discount Codes

### Create Discount Codes

1. Click **"Discounts"** tab

2. **Launch Discount:**
   - Code: `LAUNCH20`
   - Type: Percentage
   - Amount: 20%
   - Applies to: All variants
   - Usage limit: 100
   - Expiry: 7 days from launch

3. **Community Discount:**
   - Code: `COMMUNITY15`
   - Type: Percentage
   - Amount: 15%
   - Applies to: Pro and Lifetime
   - Usage limit: Unlimited
   - Expiry: None

4. **Black Friday (Create Later):**
   - Code: `BLACKFRIDAY`
   - Type: Percentage
   - Amount: 30%
   - Applies to: All variants
   - Usage limit: 500
   - Expiry: 7 days

**Time:** 10 minutes

---

## Step 9: Configure Analytics

### Enable Analytics

1. Click **"Analytics"** tab

2. **Track These Metrics:**
   - Views
   - Sales
   - Conversion rate
   - Revenue
   - Refunds
   - Email open rates

3. **Set Up Goals:**
   - 100 sales in first month
   - 15% conversion rate (free → pro)
   - <5% refund rate

4. **Connect Google Analytics (Optional):**
   - Add tracking ID to product page
   - Track traffic sources
   - Set up conversion events

**Time:** 10 minutes

---

## Step 10: Test Before Launch

### Pre-Launch Checklist

- [ ] Account setup complete
- [ ] Payment method connected
- [ ] All three variants created
- [ ] Files uploaded and downloadable
- [ ] Product page looks good (desktop + mobile)
- [ ] Cover image and gallery uploaded
- [ ] Preview file working
- [ ] Email sequence configured
- [ ] Discount codes tested
- [ ] Checkout flow tested (do a test purchase)
- [ ] Download links working
- [ ] Thank you page customized
- [ ] Social sharing enabled

### Test Purchase

1. Create a discount code for 100% off (test only)
2. Go through the entire checkout flow
3. Verify:
   - Email receipt arrives
   - Download link works
   - Files are accessible
   - Follow-up emails are scheduled
4. Refund yourself (or use test mode)

**Time:** 20 minutes

---

## Step 11: Launch!

### Launch Day Actions

1. **Publish Product:**
   - Click **"Publish"** (product goes live)
   - Copy your product URL

2. **Announce Everywhere:**
   - Twitter/X thread
   - LinkedIn post
   - Reddit (relevant subreddits)
   - Discord communities
   - Email list (if you have one)
   - Product Hunt (schedule for next day)

3. **Monitor:**
   - Sales notifications
   - Customer emails
   - Social media mentions
   - Fix any issues immediately

**Time:** 2-3 hours on launch day

---

## Step 12: Post-Launch Optimization

### Week 1

- Respond to all customer emails within 24 hours
- Monitor reviews and respond to all
- Track which traffic sources convert best
- Note any common questions (update FAQ)

### Week 2-4

- A/B test product page (cover image, description)
- Optimize email subject lines
- Create content based on customer questions
- Reach out for testimonials

### Month 2+

- Consider price increase (if conversion >25%)
- Add new APIs and notify customers
- Create upsell products (courses, consulting)
- Build affiliate program

---

## Gumroad Fees

### Fee Structure

- **Gumroad Fee:** 10% flat rate
- **Payment Processing:** 2.9% + $0.30 (US cards)
- **Total Fees:** ~13% + $0.30 per sale

### Example Calculation

**Pro Tier ($29):**
- Gumroad fee: $2.90
- Payment processing: $1.14
- **You keep: ~$24.96**

**Lifetime Tier ($99):**
- Gumroad fee: $9.90
- Payment processing: $3.17
- **You keep: ~$85.93**

### Payout Schedule

- **Weekly payouts** (every Friday)
- **Minimum:** $10 (PayPal) or $50 (bank transfer)
- **Hold period:** 7 days for new sellers

---

## Pro Tips

### Optimization Tips

1. **Use Gumroad's "Discover" feature** — Submit your product for their marketplace
2. **Enable "Pay What You Want" for free tier** — Some people will pay voluntarily
3. **Add urgency** — "First 100 buyers get Discord access"
4. **Social proof** — Add testimonials as you get them
5. **Update regularly** — Gumroad notifies customers of updates
6. **Cross-sell** — Link to your other products in the receipt

### Common Mistakes to Avoid

1. ❌ Skipping the test purchase
2. ❌ Not customizing the receipt email
3. ❌ Forgetting to set up email sequences
4. ❌ Using low-quality images
5. ❌ Not responding to customer emails
6. ❌ Never updating the product
7. ❌ Not asking for reviews

---

## Support Resources

### Gumroad Help

- **Help Center:** help.gumroad.com
- **Creator University:** gumroad.com/university
- **Community:** Discord, Twitter (@gumroad)
- **Email:** support@gumroad.com

### Your Support Setup

- **Support Email:** support@yourdomain.com
- **Response Time:** 24-48 hours (48 hours for free tier, 24 hours for Pro, 12 hours for Lifetime)
- **FAQ Page:** Link in product description
- **Discord Community:** For Lifetime members

---

*Guide Version: 1.0*
*Last Updated: March 2026*
*Platform: Gumroad*
