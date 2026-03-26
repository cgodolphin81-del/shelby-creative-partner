# Pricing Setup - Tiers & Configuration

## Pricing Tiers Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     PRICING STRUCTURE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│  │    FREE     │   │     HD      │   │    4K       │           │
│  │    $0       │   │    $19      │   │    $49      │           │
│  ├─────────────┤   ├─────────────┤   ├─────────────┤           │
│  │ • 720p      │   │ • 1080p     │   │ • 4K UHD    │           │
│  │ • 30 sec    │   │ • 60 sec    │   │ • 90 sec    │           │
│  │ • Watermark │   │ • No WM     │   │ • No WM     │           │
│  │ • Standard  │   │ • All styles│   │ • Custom    │           │
│  │   styles    │   │             │   │   voice     │           │
│  └─────────────┘   └─────────────┘   └─────────────┘           │
│                                                                  │
│  Conversion Goal: 15-25% Free → Paid                            │
│  Target AOV: $27 (mix of HD and 4K)                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tier Details

### 🎬 FREE TIER - $0

**Purpose:** Acquisition, viral sharing, product sampling

**Includes:**
- ✅ 720p HD resolution (1280x720)
- ✅ 30 second trailer length
- ✅ All 5 style options (Epic, Romantic, Funny, Nostalgic, Action)
- ✅ AI voiceover generation
- ✅ Background music
- ❌ Watermarked (MovieTrailer logo, bottom-right)
- ❌ No commercial use license
- ❌ Standard processing queue (may take longer)

**Limitations:**
- Maximum 3 free trailers per user
- Lower priority processing
- Watermark cannot be removed

**Psychology:** Generous enough to be valuable, limited enough to encourage upgrade

---

### 💎 HD TIER - $19

**Purpose:** Primary conversion target, best value perception

**Includes:**
- ✅ 1080p Full HD resolution (1920x1080)
- ✅ 60 second trailer length (2x free)
- ✅ No watermark
- ✅ All 5 style options
- ✅ AI voiceover generation
- ✅ Premium music selection
- ✅ Commercial use license (personal & social media)
- ✅ Download MP4 file
- ✅ Shareable link (30 days)
- ✅ Standard processing queue

**Best For:**
- Social media sharing (Instagram, TikTok, Facebook)
- Personal keepsakes
- Gift for friends/family
- Event highlights (weddings, birthdays, graduations)

**Value Proposition:** "Less than the cost of a movie ticket for your own Hollywood trailer"

---

### 👑 4K PREMIUM TIER - $49

**Purpose:** Premium experience, maximum quality, custom options

**Includes:**
- ✅ 4K Ultra HD resolution (3840x2160)
- ✅ 90 second trailer length (3x free)
- ✅ No watermark
- ✅ All 5 style options
- ✅ **Custom voiceover options** (name insertion, custom script tweaks)
- ✅ Premium music selection + custom music request
- ✅ Commercial use license (unlimited)
- ✅ Download MP4 file (all resolutions: 4K, 1080p, 720p)
- ✅ Shareable link (permanent)
- ✅ **Priority processing** (skip the queue)
- ✅ **Custom title cards** (add names, dates, locations)
- ✅ **Premium support** (email + chat)

**Best For:**
- Professional portfolios
- Business promotions
- Special occasions (anniversaries, retirements)
- Content creators
- Maximum quality enthusiasts

**Value Proposition:** "Hollywood-quality production at a fraction of studio cost"

---

## Stripe Integration

### Product Setup

```javascript
// config/pricing.js
const PRICING = {
    free: {
        id: 'free',
        name: 'Free',
        price: 0,
        currency: 'usd',
        stripePriceId: null, // No Stripe needed
        features: [
            '720p HD quality',
            '30 second trailer',
            'All 5 styles',
            'Watermarked video'
        ],
        limitations: [
            'Maximum 3 per user',
            'No commercial use',
            'Standard queue'
        ]
    },
    hd: {
        id: 'hd',
        name: 'HD',
        price: 1900, // cents
        currency: 'usd',
        stripePriceId: process.env.STRIPE_PRICE_HD,
        features: [
            '1080p Full HD',
            '60 second trailer',
            'No watermark',
            'All 5 styles',
            'Commercial use license',
            'Download & share'
        ]
    },
    '4k': {
        id: '4k',
        name: '4K Premium',
        price: 4900, // cents
        currency: 'usd',
        stripePriceId: process.env.STRIPE_PRICE_4K,
        features: [
            '4K Ultra HD',
            '90 second trailer',
            'No watermark',
            'Custom voice options',
            'Priority processing',
            'Custom title cards',
            'Premium support',
            'Unlimited commercial use'
        ]
    }
};

module.exports = PRICING;
```

### Stripe Checkout Session

```javascript
// src/server/routes/payment.js
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/api/payment/create-checkout-session', async (req, res) => {
    const { trailerId, tier } = req.body;
    
    const priceMap = {
        hd: process.env.STRIPE_PRICE_HD,
        '4k': process.env.STRIPE_PRICE_4K
    };
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceMap[tier],
                quantity: 1
            }],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}&trailer_id=${trailerId}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            metadata: {
                trailerId,
                tier
            },
            customer_email: req.user?.email, // If authenticated
        });
        
        res.json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Payment initialization failed' });
    }
});
```

### Webhook Handler

```javascript
// src/server/routes/webhook.js
app.post('/api/webhook/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            await handlePaymentSuccess(session);
            break;
            
        case 'payment_intent.payment_failed':
            const paymentIntent = event.data.object;
            await handlePaymentFailure(paymentIntent);
            break;
            
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }
    
    res.json({ received: true });
});

async function handlePaymentSuccess(session) {
    const { trailerId, tier } = session.metadata;
    
    // Update trailer record
    const trailer = await Trailer.findById(trailerId);
    trailer.tier = tier;
    trailer.paymentStatus = 'paid';
    trailer.paymentId = session.payment_intent;
    await trailer.save();
    
    // Trigger high-quality rendering
    await renderHighQualityTrailer(trailerId, tier);
    
    // Send confirmation email
    await sendConfirmationEmail(trailer.userEmail, trailerId, tier);
}
```

---

## Create Stripe Products

### Via Dashboard
1. Go to https://dashboard.stripe.com/products
2. Click "Add product"
3. Create two products:

**Product 1: HD Trailer**
- Name: HD Movie Trailer
- Description: 1080p Full HD, 60 seconds, no watermark
- Price: $19.00 USD (one-time)

**Product 2: 4K Premium Trailer**
- Name: 4K Premium Movie Trailer
- Description: 4K Ultra HD, 90 seconds, custom options, priority
- Price: $49.00 USD (one-time)

### Via API
```bash
# HD Product
curl https://api.stripe.com/v1/products \
  -u sk_test_YOUR_KEY: \
  -d name="HD Movie Trailer" \
  -d description="1080p Full HD, 60 seconds, no watermark"

# HD Price
curl https://api.stripe.com/v1/prices \
  -u sk_test_YOUR_KEY: \
  -d product=prod_HD_ID \
  -d unit_amount=1900 \
  -d currency=usd

# 4K Product
curl https://api.stripe.com/v1/products \
  -u sk_test_YOUR_KEY: \
  -d name="4K Premium Movie Trailer" \
  -d description="4K Ultra HD, 90 seconds, custom options"

# 4K Price
curl https://api.stripe.com/v1/prices \
  -u sk_test_YOUR_KEY: \
  -d product=prod_4K_ID \
  -d unit_amount=4900 \
  -d currency=usd
```

---

## Revenue Projections

### Conservative (Month 1-3)
| Metric | Value |
|--------|-------|
| Monthly visitors | 1,000 |
| Free trailers created | 300 (30%) |
| Conversion rate | 15% |
| Paid customers | 45 |
| HD mix | 70% (32 customers) |
| 4K mix | 30% (13 customers) |
| **Monthly Revenue** | **$1,245** |

### Growth (Month 4-6)
| Metric | Value |
|--------|-------|
| Monthly visitors | 5,000 |
| Free trailers created | 1,500 (30%) |
| Conversion rate | 18% |
| Paid customers | 270 |
| HD mix | 65% (176 customers) |
| 4K mix | 35% (94 customers) |
| **Monthly Revenue** | **$7,966** |

### Scale (Month 7-12)
| Metric | Value |
|--------|-------|
| Monthly visitors | 20,000 |
| Free trailers created | 6,000 (30%) |
| Conversion rate | 20% |
| Paid customers | 1,200 |
| HD mix | 60% (720 customers) |
| 4K mix | 40% (480 customers) |
| **Monthly Revenue** | **$37,080** |

---

## Upsell Opportunities

### Post-Purchase
- **Share Pack ($5):** Extended link hosting (1 year), custom thumbnail
- **Director's Cut ($15):** Alternate version with different style
- **Photo Pack ($10):** Additional 5 photos in same trailer

### Subscription (Future)
- **Pro Monthly ($29/mo):** 4 HD trailers/month, priority support
- **Pro Annual ($290/yr):** 2 months free, all Pro features

### B2B (Future)
- **Agency License ($499/mo):** Unlimited trailers, white-label, API access
- **Event Package ($99/event):** Custom branding, bulk generation

---

## Refund Policy

**Free Tier:** No refunds (no payment)

**HD Tier:**
- Full refund within 24 hours if technical issues
- 50% refund within 7 days (discretionary)
- No refund after download + 7 days

**4K Premium:**
- Full refund within 48 hours if unsatisfied
- Custom work non-refundable after delivery

**Process:**
1. Customer support ticket
2. Review within 24 hours
3. Refund processed via Stripe (3-5 business days)

---

## A/B Testing Ideas

1. **Price Anchoring:** Show 4K first ($49), then HD ($19) seems like a deal
2. **Free Trial:** 1 free HD trailer, then pay for more
3. **Bundle:** HD + Share Pack for $22 (save $2)
4. **Urgency:** "Limited time: 4K for $39" (countdown timer)
