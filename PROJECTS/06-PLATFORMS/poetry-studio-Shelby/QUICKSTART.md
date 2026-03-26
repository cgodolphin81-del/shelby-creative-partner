# 🚀 AI Poetry Studio - Quick Start Guide

Get your poetry platform running in under 1 hour.

---

## 📁 Project Structure

```
poetry-studio/
├── README.md                    # Project overview
├── QUICKSTART.md                # You are here!
├── generators/
│   └── poem-generator.py        # AI poem generation
├── voice/
│   └── narrate.py               # ElevenLabs integration
├── visuals/
│   └── canva-templates.md       # Instagram card designs
├── print/
│   └── integration.md           # Printful POD setup
├── pricing/
│   └── strategy.md              # Pricing tiers & strategy
├── website/
│   └── landing.html             # Landing page (ready to deploy)
├── social/
│   └── 30-posts.md              # 30-day content calendar
├── email/
│   └── nurture-sequence.md      # Email funnel (15 emails)
├── collaboration/
│   └── custom-poems.md          # Custom poem service
└── financials/
    └── revenue-projections.md   # 12-month forecast
```

---

## ⚡ 1-Hour Launch Checklist

### Step 1: Set Up API Keys (10 min)

```bash
# Create .env file
cd poetry-studio
touch .env
```

Add to `.env`:
```
# AI & Voice
OPENAI_API_KEY=sk-...
ELEVENLABS_API_KEY=your-key-here

# E-commerce
STRIPE_SECRET_KEY=sk_test_...
PRINTFUL_API_KEY=your-key-here

# Email
MAILCHIMP_API_KEY=your-key-here
```

**Get API Keys**:
- OpenAI: https://platform.openai.com/api-keys
- ElevenLabs: https://elevenlabs.io/api-keys
- Stripe: https://dashboard.stripe.com/apikeys
- Printful: https://www.printful.com/dashboard/settings/api

---

### Step 2: Test Poem Generator (5 min)

```bash
cd generators
python poem-generator.py haiku "cherry blossoms"
```

Expected output:
```json
{
  "system": "You are a haiku master...",
  "user": "Write a haiku about: cherry blossoms...",
  "style": "haiku",
  "topic": "cherry blossoms"
}
```

**Test all styles**:
```bash
python poem-generator.py sonnet "eternal love"
python poem-generator.py free_verse "city rain"
python poem-generator.py rap "overcoming struggles"
```

---

### Step 3: Deploy Landing Page (15 min)

**Option A: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd website
vercel --prod
```

**Option B: Netlify**
```bash
# Drag and drop website/ folder to netlify.com/drop
```

**Option C: GitHub Pages**
```bash
# Create repo, push landing.html, enable Pages
```

**Custom Domain** (optional):
- Buy domain: namecheap.com (~$10/year)
- Connect in Vercel/Netlify settings

---

### Step 4: Set Up Stripe Checkout (15 min)

1. Go to stripe.com → Dashboard
2. Products → Add Product
   - Name: "AI Poetry Studio Premium"
   - Price: $9.99/month
   - Description: "Unlimited poems + voice narration"
3. Copy Price ID (e.g., `price_1ABC123...`)
4. Add to `website/landing.html`:
```javascript
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY');

// In checkout button click handler:
stripe.redirectToCheckout({
  lineItems: [{price: 'price_1ABC123...', quantity: 1}],
  mode: 'subscription',
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel',
});
```

---

### Step 5: Connect Printful (10 min)

1. Create account: printful.com
2. Dashboard → Settings → API → Generate Key
3. Add key to `.env`
4. Create first product:
   - Products → Posters → 12x18" Matte
   - Upload sample poetry design
   - Set retail price: $24.99
   - Sync to your store (Shopify/WooCommerce/Etsy)

**Test Order**:
- Order sample for yourself (~$15 with shipping)
- Check quality, shipping time, packaging

---

### Step 6: Set Up Email (10 min)

**Option A: ConvertKit (Recommended)**
```
1. convertkit.com → Sign up (free <1,000 subs)
2. Create form: "7 Days of Poetry"
3. Embed on website
4. Create automation: Welcome sequence (5 emails)
5. Copy form code → Add to landing.html
```

**Option B: Mailchimp**
```
1. mailchimp.com → Sign up (free <500 contacts)
2. Create audience + signup form
3. Set up automation (welcome series)
4. Add form to website
```

---

### Step 7: Create Social Accounts (10 min)

**Instagram**:
- Username: @aipoetrystudio (or similar)
- Bio: "AI-generated poetry in seconds 🎭 | Haiku, Sonnet, Free Verse, Rap | Start free → [link]"
- Profile pic: Use logo or poetry card design

**TikTok**:
- Same username
- Bio: "Poetry meets AI ✨ | Link in bio"

**Pinterest**:
- Business account (free analytics)
- Create boards: "AI Poetry", "Poetry Prints", "Writing Inspiration"

---

### Step 8: Launch! (5 min)

**Pre-Launch Checklist**:
- [ ] Website live
- [ ] Payment working (test mode)
- [ ] Email signup working
- [ ] Social accounts created
- [ ] First 10 poems generated (for samples)
- [ ] First 3 poetry cards designed (Canva)

**Launch Announcement**:
```
🎭 AI Poetry Studio is LIVE!

Generate beautiful poems in seconds:
✨ Haiku, Sonnet, Free Verse, Rap
🎙️ Voice narration
🎨 Instagram cards
🖨️ Order prints

Start free (5 poems/day, no card needed)
→ [your-website.com]

#AIPoetry #PoetryCommunity #LaunchDay
```

Post on:
- Instagram (feed + stories)
- TikTok (30-sec demo video)
- Twitter/X
- LinkedIn (if targeting corporate)
- Reddit: r/poetry, r/artificial, r/sideproject

---

## 📈 First Week Goals

| Day | Task | Target |
|-----|------|--------|
| 1 | Launch + announce | 50 visitors |
| 2 | Post 3 social posts | 10 signups |
| 3 | Engage with comments | 5 poems generated |
| 4 | Post customer testimonial | 1 print order |
| 5 | Email first nurture sequence | 1 premium signup |
| 6 | Weekend writing prompt | 20 poems generated |
| 7 | Week 1 recap post | 100 visitors total |

---

## 🛠️ Daily Operations

### Morning (15 min)
- [ ] Check orders (Printful dashboard)
- [ ] Respond to customer emails
- [ ] Review custom poem requests
- [ ] Post 1-2 social posts

### Afternoon (15 min)
- [ ] Generate sample poems (for content)
- [ ] Create 2-3 poetry cards (Canva)
- [ ] Engage with community (comments, DMs)
- [ ] Check analytics (visitors, conversions)

### Evening (10 min)
- [ ] Schedule tomorrow's posts
- [ ] Review metrics (signups, revenue)
- [ ] Plan improvements

---

## 📊 Key Metrics to Track

**Daily**:
- Website visitors
- Free signups
- Poems generated
- Social engagement (likes, comments, shares)

**Weekly**:
- Premium conversions
- Print orders
- Custom poem requests
- Revenue (MRR + one-time)
- Customer acquisition cost

**Monthly**:
- Churn rate
- Lifetime value
- Net promoter score (customer surveys)
- Profit margin

---

## 🎯 Growth Hacks

### Week 1-4: Organic Growth
- Post 2x daily on Instagram
- 1 TikTok/day (poetry + voice)
- Pinterest: 5 pins/day (evergreen)
- Engage in poetry communities

### Month 2-3: Paid Acquisition
- Instagram ads: $20/day
- Pinterest promoted pins: $10/day
- Target: poetry lovers, writers, mindfulness
- Goal: <$30 CAC

### Month 4-6: Partnerships
- Wedding planners (referral fees)
- Poetry influencers (affiliate program)
- Greeting card companies (licensing)

### Month 7-12: Scale
- Hire VA for customer support
- Outsource social media management
- Launch mobile app
- Explore enterprise/corporate sales

---

## 🔗 Helpful Resources

**Design**:
- Canva: canva.com (templates)
- Unsplash: unsplash.com (free images)
- Coolors: coolors.co (color palettes)

**Marketing**:
- Later: later.com (social scheduling)
- Buffer: buffer.com (social scheduling)
- Mailchimp: mailchimp.com (email)

**Analytics**:
- Google Analytics: analytics.google.com
- Stripe Dashboard: dashboard.stripe.com
- Printful Dashboard: printful.com/dashboard

**Community**:
- Reddit: r/poetry, r/writing, r/Entrepreneur
- Facebook Groups: Poetry Lovers, AI Art
- Discord: Writing communities

---

## 🆘 Troubleshooting

**Problem**: No signups
- **Fix**: Improve landing page CTA, add social proof, simplify signup

**Problem**: High churn
- **Fix**: Improve onboarding, add engagement emails, survey churned users

**Problem**: Low print sales
- **Fix**: Better product photos, bundle deals, limited-time offers

**Problem**: Custom poem demand low
- **Fix**: Target wedding planners, run Instagram ads, showcase testimonials

**Problem**: API costs too high
- **Fix**: Optimize prompts, cache common requests, negotiate rates

---

## 📞 Support

**Technical Issues**:
- GitHub Issues: [your-repo]/issues
- Email: tech@aipoetrystudio.com

**Customer Support**:
- Email: support@aipoetrystudio.com
- Response time: 24-48 hours

**Business Inquiries**:
- Email: partnerships@aipoetrystudio.com
- Custom poems: custom@aipoetrystudio.com

---

**You're ready to launch! 🚀**

Remember: Start small, iterate fast, listen to customers.

The goal isn't perfection—it's progress.

Good luck! 💜

— The AI Poetry Studio Team
