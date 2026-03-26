# Klaviyo Flow Library
## 15 Complete Email Flows for E-commerce

---

## Table of Contents
1. Welcome Series (3 emails)
2. Abandoned Cart (3 emails)
3. Browse Abandonment (2 emails)
4. Post-Purchase Thank You (1 email)
5. Product Review Request (2 emails)
6. Winback Campaign (3 emails)
7. VIP Customer Flow (2 emails)
8. Birthday Flow (2 emails)
9. Back in Stock (2 emails)
10. Price Drop Alert (1 email)
11. Replenishment Reminder (2 emails)
12. Cross-Sell/Upsell (2 emails)
13. Survey/Feedback (2 emails)
14. Loyalty Program (3 emails)
15. Holiday/Seasonal (3 emails)

---

## 1. WELCOME SERIES
**Trigger:** Subscribes to list  
**Goal:** Introduce brand, build trust, drive first purchase

### Email 1: Welcome & Brand Story (Send immediately)
**Subject:** Welcome to [Brand]! Here's 15% Off Your First Order 🎉

**Preview:** We're so glad you're here. Let us introduce ourselves...

**Content:**
```
Hi {{ first_name|default:'there' }},

Welcome to the [Brand] family! We're thrilled to have you.

[BRAND STORY - 2-3 paragraphs about mission, values, what makes you unique]

As a welcome gift, here's 15% off your first order:
Code: WELCOME15

[SHOP NOW BUTTON]

What to expect from us:
✓ New product launches
✓ Exclusive member-only sales
✓ Style tips & inspiration
✓ Early access to collections

Questions? Hit reply - we're real humans who love hearing from you.

Welcome aboard,
The [Brand] Team

P.S. Follow us on Instagram [@brand] for daily inspiration!
```

**Timing:** Immediate  
**Metrics to Track:** Open rate, CTR, conversion rate, revenue per recipient

---

### Email 2: Social Proof & Best Sellers (Send Day 2)
**Subject:** See what everyone's loving right now ⭐

**Preview:** Our top-rated products that customers can't stop talking about

**Content:**
```
Hey {{ first_name }},

Still deciding? Let our customers help you choose.

Here are our BEST-SELLERS this month:

[PRODUCT GRID - 4-6 products with ratings]

★★★★★ "Absolutely love this! Best purchase I've made all year." - Sarah M.
★★★★★ "Quality exceeded my expectations. Will definitely buy again." - Mike R.
★★★★★ "Fast shipping, beautiful packaging, perfect gift!" - Jessica L.

[SHOP BEST SELLERS BUTTON]

Still have questions? Check out our FAQ or chat with our team.

Happy shopping!
[Brand] Team
```

**Timing:** 1 day after Email 1  
**Metrics to Track:** Product click rate, add-to-cart rate

---

### Email 3: Last Chance for Welcome Offer (Send Day 4)
**Subject:** {{ first_name }}, your 15% off expires soon! ⏰

**Preview:** Don't miss out on your welcome discount

**Content:**
```
Hi {{ first_name }},

Quick reminder: Your welcome discount expires in 48 hours!

Code: WELCOME15

[COUNTDOWN TIMER]

We'd hate for you to miss out on:
✓ Free shipping on orders over $50
✓ 30-day hassle-free returns
✓ Exclusive member perks

[SHOP NOW BUTTON]

Need help choosing? Our stylists are standing by.

See you soon,
[Brand] Team
```

**Timing:** 3 days after Email 1  
**Metrics to Track:** Conversion rate, urgency-driven purchases

---

## 2. ABANDONED CART FLOW
**Trigger:** Added to cart but didn't purchase  
**Goal:** Recover lost sales

### Email 1: Gentle Reminder (Send 1 hour after abandonment)
**Subject:** Forgot something, {{ first_name }}?

**Preview:** Your cart is waiting for you

**Content:**
```
Hi {{ first_name }},

We noticed you left some great picks in your cart!

[CART ITEMS WITH IMAGES]

Subtotal: ${{ cart_total }}

[RETURN TO CART BUTTON]

Need help? Common questions:
• Shipping: Free on orders $50+
• Returns: 30-day hassle-free
• Payment: All major cards + PayPal

Questions? Reply to this email!

[Brand] Team
```

**Timing:** 1 hour after cart abandonment  
**Metrics to Track:** Recovery rate, time to purchase

---

### Email 2: Social Proof + Urgency (Send 10 hours after)
**Subject:** Your cart items are selling fast! 🔥

**Preview:** Don't let these get away

**Content:**
```
{{ first_name }},

Just a heads up - items in your cart are popular and may sell out!

[CART ITEMS]

★★★★★ "Worth every penny!" - 127 reviews
★★★★★ "Exceeded expectations" - 89 reviews

[COMPLETE YOUR PURCHASE BUTTON]

Free shipping • Easy returns • Secure checkout

Don't wait too long!
[Brand] Team
```

**Timing:** 10 hours after abandonment  
**Metrics to Track:** Click rate, conversion rate

---

### Email 3: Incentive Offer (Send 24 hours after)
**Subject:** Come back! Here's 10% off your cart 🎁

**Preview:** A little something to help you decide

**Content:**
```
Hi {{ first_name }},

We get it - sometimes you need a nudge.

Here's 10% off your cart to help you decide:
Code: COMEBACK10

[CART ITEMS WITH DISCOUNTED PRICE]

[CLAIM DISCOUNT BUTTON]

This code expires in 24 hours.

Questions about your items? We're here to help!

[Brand] Team
```

**Timing:** 24 hours after abandonment  
**Metrics to Track:** Redemption rate, recovered revenue

---

## 3. BROWSE ABANDONMENT FLOW
**Trigger:** Viewed product but didn't add to cart  
**Goal:** Re-engage interested browsers

### Email 1: Product Reminder (Send 4 hours after)
**Subject:** Still thinking about {{ product.name }}?

**Preview:** We saved it for you

**Content:**
```
Hey {{ first_name }},

We noticed you were checking out {{ product.name }}.

[PRODUCT IMAGE]

{{ product.description }}

Price: ${{ product.price }}

[VIEW PRODUCT BUTTON]

Why customers love it:
✓ [Benefit 1]
✓ [Benefit 2]
✓ [Benefit 3]

[SHOP NOW BUTTON]
```

**Timing:** 4 hours after view  
**Metrics to Track:** Return to product rate, conversion rate

---

### Email 2: Related Products (Send 2 days after)
**Subject:** You might also like these...

**Preview:** Similar styles you'll love

**Content:**
```
{{ first_name }},

Based on what you viewed, we think you'll love these:

[RELATED PRODUCTS GRID - 4 items]

[EXPLORE MORE BUTTON]

Need styling advice? Our team is here to help!

[Brand] Team
```

**Timing:** 2 days after view  
**Metrics to Track:** Category engagement, cross-product interest

---

## 4. POST-PURCHASE THANK YOU
**Trigger:** Order confirmed  
**Goal:** Build loyalty, reduce buyer's remorse

### Email 1: Order Confirmation + Brand Love (Send immediately)
**Subject:** Thank you, {{ first_name }}! Order #{{ order.number }} confirmed ✅

**Preview:** Your order is being prepared with love

**Content:**
```
Hi {{ first_name }},

Thank you for your order! We're so excited for you to receive it.

ORDER DETAILS:
Order #: {{ order.number }}
Date: {{ order.date }}
Total: ${{ order.total }}

[ORDER ITEMS WITH IMAGES]

WHAT'S NEXT:
✓ Order confirmed (you are here)
✓ Processing (1-2 business days)
✓ Shipped (you'll get tracking)
✓ Delivered! 🎉

[TRACK ORDER BUTTON]

WHY YOU'LL LOVE IT:
[Brand story snippet + values]

Questions? Reply anytime - we're here for you!

With gratitude,
[Brand] Team

P.S. Follow us @brand for styling tips while you wait!
```

**Timing:** Immediate  
**Metrics to Track:** Open rate, social follows, support tickets

---

## 5. PRODUCT REVIEW REQUEST
**Trigger:** Order delivered  
**Goal:** Generate social proof

### Email 1: Review Request (Send 7 days after delivery)
**Subject:** How's your {{ product.name }} treating you? ⭐

**Preview:** Share your experience & help others decide

**Content:**
```
Hi {{ first_name }},

Your order arrived last week - we hope you're loving it!

Would you mind sharing your experience? Reviews help other customers make informed decisions.

[PRODUCT IMAGE]

{{ product.name }}

[LEAVE A REVIEW BUTTON]

It only takes 2 minutes, and your feedback means the world to us.

As a thank you, here's 10% off your next order:
Code: REVIEW10

Thank you for being part of our community!
[Brand] Team
```

**Timing:** 7 days after delivery  
**Metrics to Track:** Review submission rate, UGC generated

---

### Email 2: Reminder (Send 5 days after Email 1 if no review)
**Subject:** {{ first_name }}, your opinion matters! 💭

**Preview:** Quick favor - 2 minutes to help fellow shoppers

**Content:**
```
Hey {{ first_name }},

Just a friendly nudge! Your review would mean so much to us.

[WRITE YOUR REVIEW BUTTON]

Already reviewed? You're amazing - ignore this! 🙏

[Brand] Team
```

**Timing:** 5 days after first review request  
**Metrics to Track:** Secondary conversion rate

---

## 6. WINBACK CAMPAIGN
**Trigger:** No purchase in 90+ days  
**Goal:** Reactivate dormant customers

### Email 1: We Miss You (Send at 90 days)
**Subject:** We miss you, {{ first_name }}! 💙

**Preview:** It's been a while - come see what's new

**Content:**
```
Hi {{ first_name }},

It's been a minute! We've missed having you around.

A lot has changed since your last visit:
✓ New collections launched
✓ [Specific improvement/update]
✓ [Another update]

[WHAT'S NEW GRID]

Come back and see what you've been missing:

[SHOP NOW BUTTON]

As a welcome back gift: 20% off your next order
Code: WELCOMEBACK20

We hope to see you soon!
[Brand] Team
```

**Timing:** 90 days since last purchase  
**Metrics to Track:** Reactivation rate, repeat purchase rate

---

### Email 2: Strong Incentive (Send 7 days after Email 1)
**Subject:** Last chance: 25% off inside 🔥

**Preview:** Your exclusive winback offer expires soon

**Content:**
```
{{ first_name }},

Final reminder! Your exclusive winback offer expires in 48 hours.

25% OFF EVERYTHING
Code: COMEBACK25

[SHOP NOW BUTTON]

[COUNTDOWN TIMER]

We'd love to have you back in the family!

[Brand] Team
```

**Timing:** 7 days after first winback email  
**Metrics to Track:** Urgency-driven reactivation

---

### Email 3: Breakup Email (Send 14 days after Email 2)
**Subject:** Is this goodbye, {{ first_name }}? 💔

**Preview:** One last message from us

**Content:**
```
Hi {{ first_name }},

This will be our last email for a while.

If you'd like to stay connected (no pressure!), here are other ways to follow along:
• Instagram: @brand
• TikTok: @brand
• Blog: [URL]

If you ever want to return, we'll be here with open arms.

Take care,
[Brand] Team

[UNSUBSCRIBE LINK] | [UPDATE PREFERENCES]
```

**Timing:** 14 days after second winback email  
**Metrics to Track:** Unsubscribe rate, final reactivation

---

## 7. VIP CUSTOMER FLOW
**Trigger:** Customer reaches VIP tier (e.g., $500+ lifetime)  
**Goal:** Reward loyalty, increase LTV

### Email 1: VIP Announcement (Send when tier reached)
**Subject:** 🎉 You're officially VIP, {{ first_name }}!

**Preview:** Unlock exclusive perks and early access

**Content:**
```
CONGRATULATIONS, {{ first_name }}! 🎊

You've officially reached VIP status!

YOUR EXCLUSIVE PERKS:
✓ Early access to new collections (48 hours before public)
✓ Free expedited shipping on all orders
✓ Exclusive VIP-only sales
✓ Birthday gift
✓ Dedicated support line
✓ Double points on all purchases

[SHOP VIP COLLECTION BUTTON]

Thank you for being an incredible part of our community. You make what we do possible!

With love,
[Brand] Team

P.S. Keep an eye on your inbox - VIP exclusives coming soon!
```

**Timing:** When VIP threshold reached  
**Metrics to Track:** VIP engagement, increased AOV

---

### Email 2: VIP Early Access (Send before public launches)
**Subject:** VIP Early Access: New Collection Inside 👀

**Preview:** Shop 48 hours before everyone else

**Content:**
```
{{ first_name }},

As a valued VIP member, you get FIRST access to our new collection!

[NEW COLLECTION PREVIEW]

Shop now before it goes public on [Date].

[SHOP EARLY ACCESS BUTTON]

VIP perks applied automatically at checkout:
✓ Free expedited shipping
✓ Double points

Enjoy your exclusive access!
[Brand] Team
```

**Timing:** 48 hours before public launch  
**Metrics to Track:** Early access conversion, VIP revenue contribution

---

## 8. BIRTHDAY FLOW
**Trigger:** Customer birthday  
**Goal:** Personal connection, drive purchase

### Email 1: Birthday Greeting (Send on birthday)
**Subject:** 🎂 Happy Birthday, {{ first_name }}!

**Preview:** A special gift for your special day

**Content:**
```
HAPPY BIRTHDAY, {{ first_name }}! 🎉🎈

We hope your day is as amazing as you are!

As a birthday gift from us to you:
🎁 30% OFF your next order
Code: BDAY30

Valid for 7 days.

[SHOP BIRTHDAY GIFT BUTTON]

Treat yourself - you deserve it!

Warmest wishes,
[Brand] Team
```

**Timing:** On birthday  
**Metrics to Track:** Birthday redemption rate, emotional engagement

---

### Email 2: Birthday Reminder (Send 5 days after)
**Subject:** {{ first_name }}, your birthday gift is expiring! ⏰

**Preview:** Last chance to use your 30% off

**Content:**
```
Hi {{ first_name }},

Your birthday week is almost over!

Don't forget to use your gift:
30% OFF - Code: BDAY30

Expires in 48 hours.

[TREAT YOURSELF BUTTON]

Hope you had an amazing birthday! 🎂
[Brand] Team
```

**Timing:** 5 days after birthday  
**Metrics to Track:** Last-chance conversions

---

## 9. BACK IN STOCK FLOW
**Trigger:** Previously out-of-stock product is available  
**Goal:** Capture demand, drive quick sales

### Email 1: Back in Stock Alert (Send immediately)
**Subject:** Good news! {{ product.name }} is back! ✅

**Preview:** The item you wanted is available again

**Content:**
```
Hi {{ first_name }},

Great news! {{ product.name }} is back in stock!

[PRODUCT IMAGE]

{{ product.name }}
Price: ${{ product.price }}

[SHOP NOW BUTTON]

⚠️ Popular items sell out fast - grab yours before it's gone!

Thanks for your patience!
[Brand] Team
```

**Timing:** When restocked  
**Metrics to Track:** Conversion rate, time to purchase

---

### Email 2: Low Stock Warning (Send 24 hours after if not purchased)
**Subject:** {{ first_name }}, only a few left! ⚡

**Preview:** {{ product.name }} is selling fast

**Content:**
```
Hey {{ first_name }},

Just a heads up - {{ product.name }} is selling quickly!

Only {{ inventory_count }} left in stock.

[GET IT BEFORE IT'S GONE BUTTON]

Don't miss out this time!
[Brand] Team
```

**Timing:** 24 hours after first alert  
**Metrics to Track:** Urgency-driven conversions

---

## 10. PRICE DROP ALERT
**Trigger:** Price reduction on viewed/wishlisted item  
**Goal:** Convert price-sensitive shoppers

### Email 1: Price Drop Notification (Send immediately)
**Subject:** Price drop! {{ product.name }} is now ${{ new_price }} 📉

**Preview:** You watched it, now it's on sale!

**Content:**
```
Hi {{ first_name }},

Remember {{ product.name }}?

Good news - the price just dropped!

[PRODUCT IMAGE]

Was: ${{ old_price }}
Now: ${{ new_price }}
You save: ${{ savings }}

[SHOP THE DEAL BUTTON]

Sale ends {{ end_date }}.

Happy shopping!
[Brand] Team
```

**Timing:** When price drops  
**Metrics to Track:** Price sensitivity conversion, revenue from discounts

---

## 11. REPLENISHMENT REMINDER
**Trigger:** Based on product usage cycle  
**Goal:** Drive repeat purchases

### Email 1: Time to Restock (Send based on average usage)
**Subject:** Running low, {{ first_name }}? Time to restock! 🔄

**Preview:** Your {{ product.name }} might need replacing soon

**Content:**
```
Hi {{ first_name }},

Based on your last purchase, you might be running low on {{ product.name }}!

[PRODUCT IMAGE]

{{ product.name }}
Last purchased: {{ last_purchase_date }}

[RESTOCK NOW BUTTON]

Subscribe & Save 15% on recurring orders!

[SET UP SUBSCRIPTION BUTTON]

Never run out again!
[Brand] Team
```

**Timing:** Based on product lifecycle (e.g., 30 days for skincare)  
**Metrics to Track:** Repeat purchase rate, subscription conversions

---

### Email 2: Subscription Incentive (Send 5 days after if no purchase)
**Subject:** Never run out + save 15% 🎯

**Preview:** Set up auto-delivery for {{ product.name }}

**Content:**
```
{{ first_name }},

Make life easier with Subscribe & Save!

✓ 15% off every order
✓ Free shipping
✓ Skip or cancel anytime
✓ Delivered on your schedule

[START SUBSCRIPTION BUTTON]

Your next delivery: {{ suggested_date }}

[Brand] Team
```

**Timing:** 5 days after first reminder  
**Metrics to Track:** Subscription signup rate

---

## 12. CROSS-SELL/UPSELL FLOW
**Trigger:** Post-purchase (complementary products)  
**Goal:** Increase AOV

### Email 1: Complete Your Look/Set (Send 3 days after delivery)
**Subject:** {{ first_name }}, complete your {{ product.category }}! ✨

**Preview:** These pair perfectly with your recent purchase

**Content:**
```
Hi {{ first_name }},

Hope you're loving your {{ product.name }}!

Customers who bought this also love:

[COMPLEMENTARY PRODUCTS GRID]

[SHOP THE COLLECTION BUTTON]

[Brand] Team
```

**Timing:** 3 days after delivery  
**Metrics to Track:** Cross-sell rate, AOV increase

---

### Email 2: Upgrade Opportunity (Send 7 days after)
**Subject:** Love {{ product.name }}? Try the premium version 💎

**Preview:** Upgrade your experience

**Content:**
```
{{ first_name }},

Ready to take it to the next level?

[PREMIUM PRODUCT COMPARISON]

Standard → Premium:
✓ [Upgrade benefit 1]
✓ [Upgrade benefit 2]
✓ [Upgrade benefit 3]

[UPGRADE NOW BUTTON]

Special upgrade pricing: ${{ upgrade_price }}

[Brand] Team
```

**Timing:** 7 days after delivery  
**Metrics to Track:** Upsell conversion rate

---

## 13. SURVEY/FEEDBACK FLOW
**Trigger:** Post-purchase or periodic  
**Goal:** Gather insights, show customers they're heard

### Email 1: Survey Request (Send 14 days after purchase)
**Subject:** {{ first_name }}, help us serve you better! 💭

**Preview:** 3-minute survey = 20% off your next order

**Content:**
```
Hi {{ first_name }},

We're always working to improve, and your feedback is invaluable!

Would you spare 3 minutes to share your thoughts?

[TAKE SURVEY BUTTON]

As a thank you:
🎁 20% off your next order (code sent after completion)

Your voice shapes our future!
[Brand] Team
```

**Timing:** 14 days after purchase  
**Metrics to Track:** Survey completion rate, NPS score

---

### Email 2: Thank You + Results (Send after survey)
**Subject:** Thank you! Here's your 20% off 🎉

**Preview:** Plus, see what we're doing with your feedback

**Content:**
```
{{ first_name }},

Thank you for sharing your thoughts!

Your discount code: FEEDBACK20

[SHOP NOW BUTTON]

Based on feedback like yours, we're:
• [Action item 1]
• [Action item 2]
• [Action item 3]

We're listening!
[Brand] Team
```

**Timing:** Immediately after survey completion  
**Metrics to Track:** Discount redemption, customer sentiment

---

## 14. LOYALTY PROGRAM FLOW
**Trigger:** Loyalty program enrollment/milestones  
**Goal:** Increase engagement, repeat purchases

### Email 1: Welcome to Loyalty Program (Send on enrollment)
**Subject:** Welcome to [Program Name], {{ first_name }}! 🌟

**Preview:** Start earning points on every purchase

**Content:**
```
Welcome to [Program Name], {{ first_name }}! 🎊

You're now earning points on every purchase!

YOUR CURRENT BALANCE: {{ points }} points

HOW TO EARN:
✓ 1 point per $1 spent
✓ 50 points for following on Instagram
✓ 100 points for birthday
✓ 200 points for referrals

HOW TO REDEEM:
100 pts = $5 off
250 pts = $15 off
500 pts = $35 off

[SHOP & EARN BUTTON]

[VIEW REWARDS BUTTON]

Let's start earning!
[Brand] Team
```

**Timing:** On enrollment  
**Metrics to Track:** Program engagement, points earned/redeemed

---

### Email 2: Points Milestone (Send when reaching threshold)
**Subject:** {{ first_name }}, you're {{ points_to_next }} points from a reward! 🎯

**Preview:** So close to your next reward!

**Content:**
```
Hi {{ first_name }},

You're on a roll! 

CURRENT BALANCE: {{ points }} points
NEXT REWARD: {{ next_reward }} ({{ points_to_next }} points away)

[SHOP TO EARN MORE BUTTON]

Popular rewards:
• $5 off (100 pts)
• $15 off (250 pts)
• $35 off (500 pts)

[VIEW ALL REWARDS BUTTON]

Keep earning!
[Brand] Team
```

**Timing:** At point milestones  
**Metrics to Track:** Points acceleration, reward redemption

---

### Email 3: Points Expiring Soon (Send 30 days before expiry)
**Subject:** ⚠️ {{ points }} points expiring soon!

**Preview:** Use them before {{ expiry_date }}

**Content:**
```
{{ first_name }},

Don't lose your hard-earned points!

{{ points }} points expire on {{ expiry_date }}

That's ${{ point_value }} in rewards!

[REDEEM NOW BUTTON]

Popular choices:
• $5 off orders $50+
• Free shipping
• Exclusive products

[VIEW REWARDS BUTTON]

[Brand] Team
```

**Timing:** 30 days before expiry  
**Metrics to Track:** Point redemption rate, urgency conversions

---

## 15. HOLIDAY/SEASONAL FLOW
**Trigger:** Holiday season approach  
**Goal:** Maximize seasonal revenue

### Email 1: Holiday Preview (Send 6 weeks before)
**Subject:** 🎄 Holiday Collection Preview!

**Preview:** Be the first to see what's coming

**Content:**
```
'Tis the season, {{ first_name }}! 🎁

Get ready for our Holiday Collection - launching soon!

[TEASER IMAGES]

What to expect:
✓ Limited edition gifts
✓ Special holiday bundles
✓ Exclusive packaging
✓ Early access for subscribers

[GET EARLY ACCESS BUTTON]

Sign up for early access + 15% off holiday orders!

Happy holidays from our family to yours!
[Brand] Team
```

**Timing:** 6 weeks before holiday  
**Metrics to Track:** Early access signups, anticipation engagement

---

### Email 2: Gift Guide (Send 4 weeks before)
**Subject:** The Ultimate Holiday Gift Guide 🎁

**Preview:** Perfect gifts for everyone on your list

**Content:**
```
Hi {{ first_name }},

Gift-giving made easy!

[Gift Guide by Category]
• For Her: [SHOP BUTTON]
• For Him: [SHOP BUTTON]
• For Kids: [SHOP BUTTON]
• For Home: [SHOP BUTTON]
• Stocking Stuffers (Under $25): [SHOP BUTTON]

[VIEW FULL GIFT GUIDE BUTTON]

FREE gift wrapping on all orders through Dec 20!

[Brand] Team
```

**Timing:** 4 weeks before holiday  
**Metrics to Track:** Gift guide engagement, category sales

---

### Email 3: Last Chance Shipping (Send 10 days before deadline)
**Subject:** ⏰ Last day for guaranteed holiday delivery!

**Preview:** Order by midnight tonight

**Content:**
```
{{ first_name }},

FINAL CALL for holiday delivery! 🚨

Order by MIDNIGHT TONIGHT for guaranteed delivery before [Holiday].

[LAST CHANCE SHOPPING BUTTON]

Still need ideas?
• Gift cards (instant delivery)
• Best sellers under $50
• Top-rated gifts

[EXPRESS SHIPPING INFO]

Don't miss the deadline!
[Brand] Team
```

**Timing:** 10 days before shipping deadline  
**Metrics to Track:** Urgency conversions, shipping tier selection

---

## IMPLEMENTATION NOTES

### Flow Best Practices
1. **Personalization:** Use merge tags for first name, product names, past purchases
2. **Mobile Optimization:** All templates are mobile-first
3. **Testing:** A/B test subject lines, send times, and CTAs
4. **Segmentation:** Adjust flows based on customer tier, location, behavior
5. **Compliance:** Include unsubscribe links, physical address, comply with CAN-SPAM/GDPR

### Klaviyo Setup
- Create each flow in Klaviyo Flows section
- Set appropriate triggers and filters
- Configure timing delays between emails
- Add conditional splits for personalization
- Set up analytics dashboards for each flow

### Metrics Dashboard
Track these KPIs across all flows:
- Flow enrollment rate
- Email open rate
- Click-through rate
- Conversion rate
- Revenue per recipient
- Flow-attributed revenue %
- Unsubscribe rate per flow

---

*This flow library is ready for implementation. Customize brand voice, products, and timing based on your specific business needs.*
