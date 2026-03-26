const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const Brand = require('../models/Brand');

// Pricing plans
const PLANS = {
  pro: {
    id: 'pro-monthly',
    name: 'Pro',
    price: 999, // $9.99
    interval: 'month',
    features: [
      'No watermark',
      'Premium templates',
      'HD downloads',
      'Priority support',
      'Advanced filters'
    ]
  },
  api: {
    id: 'api-monthly',
    name: 'API',
    price: 9900, // $99/month
    interval: 'month',
    features: [
      'All Pro features',
      'API access',
      '10,000 API calls/month',
      'Custom integrations',
      'Dedicated support'
    ]
  },
  brand: {
    id: 'brand-custom',
    name: 'Brand',
    price: 500000, // Starting at $5,000
    interval: 'month',
    features: [
      'All API features',
      'Custom meme packs',
      'Brand guidelines',
      'Analytics dashboard',
      'White-label options',
      'Dedicated account manager'
    ]
  }
};

// Create checkout session
router.post('/checkout', async (req, res) => {
  try {
    const { planId, successUrl, cancelUrl } = req.body;

    const plan = PLANS[planId];
    if (!plan) {
      return res.status(400).json({ success: false, error: 'Invalid plan' });
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: req.user.email,
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${plan.name} Plan`,
            description: plan.features.join(', ')
          },
          unit_amount: plan.price,
          recurring: {
            interval: plan.interval
          }
        },
        quantity: 1
      }],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: req.user._id.toString(),
        planId
      }
    });

    res.json({ success: true, sessionId: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Webhook for Stripe events
router.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(event.data.object);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object);
      break;
  }

  res.json({ received: true });
});

async function handleCheckoutCompleted(session) {
  const userId = session.metadata.userId;
  const planId = session.metadata.planId;

  const user = await User.findById(userId);
  if (!user) return;

  user.subscription = {
    plan: planId.split('-')[0],
    status: 'active',
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    stripeCustomerId: session.customer,
    stripeSubscriptionId: session.subscription
  };

  await user.save();
  console.log(`✅ User ${user.email} subscribed to ${planId}`);
}

async function handleSubscriptionUpdated(subscription) {
  const user = await User.findOne({ 'subscription.stripeSubscriptionId': subscription.id });
  if (!user) return;

  user.subscription.status = subscription.status;
  await user.save();
}

async function handleSubscriptionDeleted(subscription) {
  const user = await User.findOne({ 'subscription.stripeSubscriptionId': subscription.id });
  if (!user) return;

  user.subscription.status = 'cancelled';
  user.subscription.plan = 'free';
  await user.save();
}

// Get current subscription
router.get('/subscription', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    res.json({
      success: true,
      data: {
        plan: user.subscription?.plan || 'free',
        status: user.subscription?.status || 'active',
        endDate: user.subscription?.endDate,
        features: PLANS[user.subscription?.plan]?.features || []
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Cancel subscription
router.post('/cancel', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    if (!user.subscription?.stripeSubscriptionId) {
      return res.status(400).json({ success: false, error: 'No active subscription' });
    }

    await stripe.subscriptions.cancel(user.subscription.stripeSubscriptionId);
    
    user.subscription.status = 'cancelled';
    user.subscription.plan = 'free';
    await user.save();

    res.json({ success: true, message: 'Subscription cancelled' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get pricing plans
router.get('/plans', (req, res) => {
  res.json({
    success: true,
    data: Object.values(PLANS).map(plan => ({
      ...plan,
      price: plan.price / 100 // Convert to dollars
    }))
  });
});

// Brand service inquiry
router.post('/brand-inquiry', async (req, res) => {
  try {
    const { company, email, budget, requirements } = req.body;

    // Create brand inquiry (in production, send to sales team)
    console.log('📧 Brand inquiry:', { company, email, budget, requirements });

    res.json({
      success: true,
      message: 'Thank you! Our team will contact you within 24 hours.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
