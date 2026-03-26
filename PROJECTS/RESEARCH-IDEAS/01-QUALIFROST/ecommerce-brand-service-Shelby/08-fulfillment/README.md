# 08 Fulfillment

**Build a Scalable, Efficient Fulfillment Operation**

---

## 3PL Selection Criteria

### What is a 3PL?

**Third-Party Logistics (3PL):** Outsourced fulfillment service that handles:
- Receiving inventory
- Storage/warehousing
- Order picking & packing
- Shipping to customers
- Returns processing

### When to Use a 3PL

**DIY Fulfillment (Do It Yourself):**
- ✅ Under 100 orders/month
- ✅ Unique/custom products
- ✅ Very tight margins
- ✅ Want full control
- ✅ Have space/time to manage

**3PL Fulfillment:**
- ✅ 100+ orders/month
- ✅ Standard products
- ✅ Want to scale
- ✅ Value time over cost
- ✅ Multiple sales channels

### 3PL Selection Criteria

| Factor | Weight | What to Look For |
|--------|--------|------------------|
| **Location** | 20% | Near your customer base, multiple warehouses |
| **Pricing** | 20% | Transparent, no hidden fees, scalable |
| **Technology** | 15% | Real-time inventory, integrations, reporting |
| **Shipping Speed** | 15% | 1-2 day delivery to most customers |
| **Customer Service** | 10% | Responsive, proactive communication |
| **Scalability** | 10% | Can handle growth, peak seasons |
| **Special Requirements** | 10% | Kitting, custom packaging, etc. |

### Top 3PL Providers

| Provider | Best For | Starting Cost | Integrations |
|----------|----------|---------------|--------------|
| **ShipBob** | Fast scaling, tech | $99/mo | Shopify, WooCommerce, Amazon |
| **ShipMonk** | E-commerce focus | Custom | All major platforms |
| **Red Stag** | Heavy/bulky items | Custom | Major platforms |
| **Fulfillment.com** | Enterprise | Custom | Custom integrations |
| **Deliverr** | Fast shipping (2-day) | Custom | Shopify, Walmart, Amazon |
| **Amazon FBA** | Amazon sellers | Variable | Amazon-focused |
| **Rakuten Super** | Same-day delivery | Custom | Major platforms |

### 3PL Cost Structure

**Typical Fees:**

| Fee Type | Typical Cost | Notes |
|----------|--------------|-------|
| Receiving | $25-50/hour or $0.50-1.50/unit | One-time when inventory arrives |
| Storage | $5-15/pallet/month or $0.50-2/cubic foot | Monthly recurring |
| Pick & Pack | $2-5/order + $0.50-1/item | Per order fee |
| Packaging | $0.50-3/order | Materials (mailer, box, etc.) |
| Shipping | Carrier rates (discounted) | Passed through at discounted rates |
| Returns | $2-5/return | Processing returned items |
| Account Management | $0-100/month | Some charge, some include |

**Example Cost Calculation:**
```
Monthly Volume: 500 orders
Average Items/Order: 2
Average Package: Small box

Receiving: 1000 units × $0.75 = $750 (one-time)
Storage: 5 pallets × $10 = $50/month
Pick & Pack: 500 orders × $3 = $1,500/month
Additional Items: 500 × 1 × $0.75 = $375/month
Packaging: 500 × $1.50 = $750/month
Shipping: 500 × $7 (avg) = $3,500/month

Total Monthly: ~$6,175/month
Cost Per Order: ~$12.35/order
```

### 3PL RFP Template

```
REQUEST FOR PROPOSAL: E-Commerce Fulfillment Services

COMPANY OVERVIEW:
Company Name: _______________
Website: _______________
Products: _______________
Current Monthly Orders: _______________
Projected Growth: _______________

PRODUCT DETAILS:
Number of SKUs: _______________
Average Dimensions: _______________
Average Weight: _______________
Special Requirements: _______________
(temperature, hazmat, fragile, etc.)

CURRENT METRICS:
Average Orders/Month: _______________
Peak Season Orders: _______________
Average Items/Order: _______________
Current Shipping Zones: _______________
Target Delivery Time: _______________

INTEGRATION REQUIREMENTS:
E-commerce Platform: _______________
Order Management System: _______________
Other Integrations Needed: _______________

SERVICE REQUIREMENTS:
□ Receiving & inspection
□ Storage (pallet/cubic foot)
□ Pick & pack
□ Custom packaging
□ Kitting/bundling
□ Returns processing
□ Inventory management
□ Reporting/analytics
□ Customer service

REQUESTED INFORMATION:
1. Pricing structure (all fees)
2. Warehouse locations
3. Shipping carriers & rates
4. Technology platform
5. Integration capabilities
6. Service level agreements
7. References from similar clients
8. Onboarding timeline

Please submit proposal by: [Date]
Contact: [Name, Email, Phone]
```

### 3PL Evaluation Checklist

**Questions to Ask:**

- [ ] What are ALL your fees? (get complete fee schedule)
- [ ] Are there any hidden fees?
- [ ] What's your typical turnaround time?
- [ ] What's your order accuracy rate?
- [ ] How do you handle errors/mistakes?
- [ ] What's your returns process?
- [ ] Can you handle custom packaging?
- [ ] What integrations do you support?
- [ ] What's your inventory management system?
- [ ] Can I get real-time inventory data?
- [ ] What's your peak season capacity?
- [ ] How do you handle stockouts?
- [ ] What's your customer service availability?
- [ ] Can I visit the warehouse?
- [ ] What's the onboarding process?
- [ ] Can you provide 2-3 client references?

**Red Flags:**
- ❌ Vague pricing or hidden fees
- ❌ Poor communication during sales process
- ❌ No references or case studies
- ❌ Outdated technology
- ❌ Limited warehouse locations
- ❌ Inflexible contracts
- ❌ Poor reviews online

---

## Shipping Strategy Guide

### Shipping Rate Strategy

**Option 1: Free Shipping (Recommended)**
```
Pros:
✓ Increases conversion rate (biggest driver)
✓ Simplifies checkout
✓ Customers love it
✓ Easy to market

Cons:
✗ Need to build cost into product price
✗ May attract low-value customers

Implementation:
- Build shipping cost into product price
- Set minimum order threshold (2-3x AOV)
- Example: AOV is $50 → Free shipping over $75
```

**Option 2: Flat Rate Shipping**
```
Pros:
✓ Predictable for customers
✓ Easy to understand
✓ Can partially subsidize

Cons:
✗ May not cover actual costs
✗ Can deter small orders

Implementation:
- Calculate average shipping cost
- Set flat rate (e.g., $5.95 or $7.95)
- Consider free over threshold
```

**Option 3: Real-Time Carrier Rates**
```
Pros:
✓ Accurate costs
✓ No subsidization needed

Cons:
✗ Can surprise customers at checkout
✗ May reduce conversion

Implementation:
- Show rates from multiple carriers
- Display delivery estimates
- Consider capping maximum rate
```

**Option 4: Tiered Shipping**
```
Pros:
✓ Options for different needs
✓ Can upsell to faster shipping

Cons:
✗ More complex
✗ Decision fatigue

Implementation:
- Standard (5-7 days): Free or low cost
- Expedited (2-3 days): $9.95
- Express (1-2 days): $19.95
```

### Recommended Strategy: Free Shipping Threshold

**Why It Works:**
- Increases average order value (AOV)
- Improves conversion rate
- Customers prefer simplicity
- Easy to market and communicate

**How to Set Threshold:**
```
Step 1: Calculate current AOV
Example: $50

Step 2: Set threshold at 2-3x AOV
Example: $75-100

Step 3: Build shipping cost into product pricing
Example: If shipping averages $8, increase prices by $8-10

Step 4: Communicate clearly
"Free shipping on orders over $75"
```

**Progress Bar Implementation:**
```
[Cart Page]
"Add $23 more for FREE shipping!"
[████████████░░] 75%
```

### Carrier Selection

**USPS (United States Postal Service):**
- Best for: Lightweight packages (<2 lbs)
- Pros: Cheap, nationwide coverage
- Cons: Slower, less reliable tracking
- Services: First Class, Priority Mail

**UPS (United Parcel Service):**
- Best for: Heavier packages, business addresses
- Pros: Reliable, good tracking, fast
- Cons: More expensive, residential surcharges
- Services: Ground, 2-Day, Next Day Air

**FedEx:**
- Best for: Time-sensitive, heavier packages
- Pros: Fast, reliable, good for express
- Cons: Expensive, complex pricing
- Services: Ground, Express, Overnight

**Regional Carriers:**
- Examples: OnTrac, LaserShip, GLS
- Best for: Specific regions, cost savings
- Pros: Cheaper in their regions
- Cons: Limited coverage

### Shipping Zones

**USPS/UPS/FedEx Zones:**
- Zone 1-2: Local/regional (1-2 days)
- Zone 3-4: Regional (2-4 days)
- Zone 5-6: Cross-country (4-6 days)
- Zone 7-8: Farthest (6-8 days)

**Strategy:**
- Use multiple 3PL locations to reduce zones
- Position inventory near customer clusters
- Aim for 80%+ customers in Zones 1-4

---

## Returns Management System

### Returns Policy Template

```
RETURNS & EXCHANGES

We want you to love your purchase! If you're not completely 
satisfied, here's our hassle-free return policy:

**ELIGIBILITY:**
✓ Items must be returned within 30 days of delivery
✓ Items must be unused, unworn, and in original packaging
✓ All tags and labels must be attached
✓ Proof of purchase required (order number)

**NON-RETURNABLE ITEMS:**
✗ Final sale items
✗ Personalized/custom items
✗ Intimate apparel (for hygiene reasons)
✗ Gift cards

**HOW TO RETURN:**

1. Visit [returns portal URL]
2. Enter your order number and email
3. Select items to return and reason
4. Print prepaid return label
5. Pack items securely and drop off at carrier

**REFUND PROCESSING:**
- Refunds processed within 5 business days of receipt
- Refunds issued to original payment method
- Original shipping cost non-refundable (unless our error)
- Return shipping: [Free / $X deducted from refund]

**EXCHANGES:**
We offer free exchanges for different sizes/colors. Follow the 
return process and place a new order.

**DAMAGED OR DEFECTIVE ITEMS:**
Contact us at support@[brand].com within 7 days of delivery. 
We'll send a replacement or refund immediately.

**QUESTIONS?**
Email: support@[brand].com
Hours: Mon-Fri, 9am-5pm [Timezone]
```

### Returns Process Flow

```
Customer Request → Approval → Label → Ship → Receive → Process → Refund
     ↓              ↓         ↓       ↓       ↓         ↓         ↓
  Portal/       Auto or    Email    Drop    Quality   Inspect   Issue
  Email         manual      PDF     off     Check               Refund
```

### Returns Best Practices

**Make It Easy:**
- Self-service returns portal
- Prepaid return labels
- Clear instructions
- Fast processing

**Reduce Returns:**
- Accurate product descriptions
- Size guides and fit info
- Multiple product images
- Customer reviews with photos
- Video demonstrations

**Learn from Returns:**
- Track return reasons
- Identify problematic products
- Address quality issues
- Update product pages
- Improve sizing accuracy

**Returns Metrics to Track:**
```
Return Rate = (Returns / Total Orders) × 100
Industry Average: 5-15% (higher for apparel)

Return Reason Breakdown:
- Wrong size: ___%
- Defective: ___%
- Not as described: ___%
- Changed mind: ___%
- Other: ___%

Refund Processing Time: Target <5 days
```

### Exchange vs. Refund Strategy

**Encourage Exchanges:**
- Offer free exchanges
- Make exchange process easy
- Store credit with bonus (e.g., 110% value)
- Instant exchange (ship before return received)

**Why Exchanges Are Better:**
- Retain revenue
- Customer stays engaged
- Lower processing costs
- Better customer experience

---

## International Shipping Guide

### When to Ship Internationally

**Good Indicators:**
- ✅ Consistent organic traffic from other countries
- ✅ Customer inquiries from international buyers
- ✅ Domestic market saturated
- ✅ Product has universal appeal
- ✅ Margins can support shipping costs

**Challenges:**
- ❌ Higher shipping costs
- ❌ Longer delivery times
- ❌ Customs and duties complexity
- ❌ Returns are expensive
- ❌ Customer service complexity

### International Shipping Options

**Option 1: Direct International Shipping**
```
How it works: Ship from your warehouse to international customers

Pros:
✓ Simple to start
✓ No additional inventory
✓ Test international demand

Cons:
✗ Expensive shipping
✗ Long delivery times (7-21 days)
✗ Customs/duties customer responsibility
✗ Complex returns

Best for: Testing international markets
```

**Option 2: DDP (Delivered Duty Paid)**
```
How it works: You prepay duties/taxes, customer receives without fees

Pros:
✓ Better customer experience
✓ No surprise fees for customers
✓ Fewer abandoned deliveries

Cons:
✗ More expensive for you
✗ Complex customs paperwork
✗ Need to calculate duties accurately

Best for: Premium brands, key markets
```

**Option 3: International 3PL**
```
How it works: Store inventory in 3PLs in target countries

Pros:
✓ Fast local delivery (2-5 days)
✓ Lower shipping costs
✓ No customs for customers
✓ Easier returns

Cons:
✗ Need inventory in multiple locations
✗ More complex inventory management
✗ Higher fixed costs

Best for: Established brands, high-volume markets
```

### Key International Markets

| Market | Pros | Cons | Considerations |
|--------|------|------|----------------|
| **Canada** | Close to US, similar culture | Customs, smaller market | Start here first |
| **UK** | Large market, English-speaking | Brexit complexity, VAT | High potential |
| **EU** | Large combined market | VAT, multiple languages, regulations | Complex but valuable |
| **Australia** | English-speaking, affluent | Far from US, expensive shipping | Good for Asia-Pacific hub |
| **Japan** | High-value customers | Language, unique preferences | Requires localization |

### Customs & Duties

**Key Terms:**
- **HS Code:** Harmonized System code for product classification
- **COO:** Country of Origin
- **Commercial Invoice:** Required for all international shipments
- **De Minimis:** Value threshold below which no duties are charged

**De Minimis Values:**
| Country | De Minimis (USD) |
|---------|------------------|
| USA | $800 |
| Canada | $20 CAD |
| UK | £135 |
| EU | €150 |
| Australia | $1000 AUD |
| Japan | $130 |

**Required Documentation:**
- Commercial invoice (3 copies)
- Packing slip
- Customs declaration form
- Certificate of origin (if applicable)

### International Returns

**Challenges:**
- Expensive return shipping
- Customs on returned goods
- Long processing times
- Potential duties on returns

**Solutions:**
- Offer refunds without return (for low-cost items)
- Provide local return addresses (via 3PL)
- Offer store credit instead of refunds
- Build return cost into pricing

---

## Inventory Management Best Practices

### Key Metrics

**Inventory Turnover:**
```
Inventory Turnover = COGS / Average Inventory Value

Good: 4-6x per year (varies by industry)
High turnover = efficient use of capital
Low turnover = potential overstock
```

**Days of Inventory:**
```
Days of Inventory = 365 / Inventory Turnover

Target: 60-90 days
Too high = capital tied up
Too low = stockout risk
```

**Stockout Rate:**
```
Stockout Rate = (Stockout Days / Total Days) × 100

Target: <2%
Stockouts = lost sales + customer frustration
```

### Reorder Point Formula

```
Reorder Point = (Daily Sales × Lead Time) + Safety Stock

Example:
Daily Sales: 10 units
Lead Time: 30 days
Safety Stock: 100 units

Reorder Point = (10 × 30) + 100 = 400 units

When inventory hits 400 units, place reorder.
```

### Safety Stock Formula

```
Safety Stock = (Max Daily Sales × Max Lead Time) - (Avg Daily Sales × Avg Lead Time)

Example:
Max Daily Sales: 20 units
Max Lead Time: 45 days
Avg Daily Sales: 10 units
Avg Lead Time: 30 days

Safety Stock = (20 × 45) - (10 × 30) = 900 - 300 = 600 units
```

### Inventory Management Tips

**Prevent Stockouts:**
- Set reorder points for all SKUs
- Monitor sales velocity weekly
- Build relationships with suppliers
- Keep safety stock for bestsellers
- Plan for seasonality

**Prevent Overstock:**
- Don't over-order untested products
- Use pre-orders for new products
- Run promotions to move slow inventory
- Consider liquidation for dead stock
- Regular inventory audits

**Best Practices:**
- [ ] Weekly inventory review
- [ ] Monthly demand forecasting
- [ ] Quarterly supplier reviews
- [ ] Annual inventory audit
- [ ] ABC analysis (prioritize high-value SKUs)
- [ ] Track inventory by location (if multiple)
- [ ] Set up low-stock alerts
- [ ] Document all inventory processes

---

## Resources

**3PL Directories:**
- 3PL Central: 3plcentral.com
- Freightos: freightos.com
- ShipBob: shipbob.com
- ShipMonk: shipmonk.com

**Shipping Tools:**
- ShipStation: shipstation.com
- Shippo: goshippo.com
- Pirate Ship: pirateship.com (free)
- EasyShip: easyship.com

**Returns Management:**
- Loop Returns: loopreturns.com
- Happy Returns: happyreturns.com
- Returnly: returnly.com

**Inventory Management:**
- Stocky: stockyapp.com (Shopify)
- TradeGecko: tradegecko.com
- Cin7: cin7.com
- Skubana: skubana.com

**International Shipping:**
- Zonos: zonos.com (duties/taxes)
- Borderlinx: borderlinx.com
- Flow: flow.io

---

*Previous: [07 Email/SMS Flows](../07-email-sms-flows/README.md) | Next: [09 Customer Service](../09-customer-service/README.md)*
