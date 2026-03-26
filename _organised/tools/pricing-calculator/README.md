# Pricing Calculator for All Services

## 📊 Google Sheets Template

**Create new sheet and build this structure:**

---

## Sheet Structure

### Tab 1: "Service Pricing Calculator"

```
A1: SERVICE PRICING CALCULATOR
A3: Service Name:
B3: [Input - e.g., GEO SEO Package]
A4: Service Type:
B4: [Dropdown: One-time/Monthly/Project-based/Hourly]

A6: COST BREAKDOWN
A7: Labor Costs
A8: Hours Required:
B8: [Input - e.g., 20]
C8: hours
A9: Hourly Rate:
B9: [Input - e.g., 75]
C9: $/hour
A10: Total Labor Cost:
B10: =B8*B9
C10: $

A12: Software & Tools
A13: SEO Tools:
B13: [Input - e.g., 200]
C13: $/month
A14: Analytics Tools:
B14: [Input - e.g., 100]
C14: $/month
A15: Other Software:
B15: [Input - e.g., 50]
C15: $/month
A16: Total Software Cost:
B16: =SUM(B13:B15)
C16: $/month

A18: Overhead Costs
A19: Monthly Overhead (rent, utilities, etc.):
B19: [Input - e.g., 3000]
C19: $
A20: Active Clients:
B20: [Input - e.g., 10]
C20: clients
A21: Overhead Per Client:
B21: =B19/B20
C21: $

A23: Total Monthly Cost
A24: Total Cost:
B24: =B10+B16+B21
C24: $

A26: PRICING STRATEGY
A27: Desired Profit Margin:
B27: [Input - e.g., 40]
C27: %
A28: Cost-Plus Price:
B28: =B24*(1+B27/100)
C28: $
A29: Market Rate Research:
B29: [Input - e.g., 2500]
C29: $
A30: Competitive Position:
B30: [Dropdown: Premium/Market/Average/Budget]

A32: FINAL PRICING
A33: Recommended Price:
B33: =MAX(B28,B29)
C33: $
A34: Price Psychology (.97/.99):
B34: =ROUNDDOWN(B33,0)-0.03
C34: $
A35: Package Name:
B35: [Input - e.g., Professional]

A37: PROFITABILITY ANALYSIS
A38: Gross Profit:
B38: =B34-B24
C38: $
A39: Profit Margin:
B39: =IF(B34>0,(B38/B34)*100,0)
C39: %
A40: Break-even Hours:
B40: =IF(B9>0,B24/B9,0)
C40: hours
A41: Annual Revenue (monthly × 12):
B41: =B34*12
C41: $
A42: Annual Profit:
B42: =B38*12
C42: $
```

### Tab 2: "Package Comparison"

```
A1: SERVICE TIER COMPARISON
A3: Tier | Basic | Professional | Enterprise
A4: Price | $997 | $2,497 | $4,997
A5: Hours Included | 10 | 25 | 50
A6: Tools Included | Basic | Pro | Enterprise
A7: Support Level | Email | Priority | Dedicated
A8: Profit Margin | 30% | 40% | 50%
A9: Best For | Startups | Growing Biz | Enterprise
```

### Tab 3: "Pricing History"

```
A1: DATE | SERVICE | OLD PRICE | NEW PRICE | CHANGE % | NOTES
A2: [Track all price changes over time]
```

---

## 🎨 Formatting Instructions

1. **Header (A1):**
   - Merge A1:D1
   - Background: #674EA7 (Purple)
   - Text: White, Bold, 18pt

2. **Section Headers (A6, A12, A18, A23, A26, A32, A37):**
   - Background: #D9D2E9
   - Bold, 12pt
   - Top Border: 2px solid #674EA7

3. **Input Cells:**
   - Background: #FFF2CC (Yellow)
   - Border: 1px solid #F1C232

4. **Calculated Cells:**
   - Background: #D9EAD3 (Green)
   - Text: Bold

5. **Final Price (B33-B34):**
   - Background: #93C47D
   - Text: White, Bold, 14pt
   - Border: 3px solid #38761D

---

## 📊 Add Data Validation (Dropdowns)

**For B4 (Service Type):**
1. Select B4
2. Data → Data Validation
3. Criteria: List of items
4. Values: One-time, Monthly, Project-based, Hourly
5. Show dropdown list in cell ✓

**For B30 (Competitive Position):**
1. Select B30
2. Data → Data Validation
3. Values: Premium, Market, Average, Budget

---

## 🔗 Embed Code for Website

```html
<!-- Pricing Calculator Widget -->
<div class="pricing-calculator" style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif;">
  <h2 style="color: #674EA7; text-align: center;">Service Pricing Calculator</h2>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Service Type:</label>
    <select id="serviceType" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
      <option value="monthly">Monthly Service</option>
      <option value="one-time">One-Time Project</option>
      <option value="hourly">Hourly Consulting</option>
    </select>
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Hours Required:</label>
    <input type="number" id="hours" value="20" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Hourly Rate ($):</label>
    <input type="number" id="rate" value="75" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>
  
  <div style="margin: 15px 0;">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Profit Margin (%):</label>
    <input type="number" id="margin" value="40" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>
  
  <button onclick="calculatePrice()" style="width: 100%; padding: 12px; background: #674EA7; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 10px;">Calculate Price</button>
  
  <div id="result" style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 4px; display: none;">
    <h3 style="margin: 0 0 10px 0; color: #333;">Recommended Price:</h3>
    <div id="priceDisplay" style="font-size: 32px; color: #674EA7; font-weight: bold;"></div>
    <div id="profitDisplay" style="margin-top: 10px; color: #666;"></div>
  </div>
  
  <script>
    function calculatePrice() {
      const hours = parseFloat(document.getElementById('hours').value) || 0;
      const rate = parseFloat(document.getElementById('rate').value) || 0;
      const margin = parseFloat(document.getElementById('margin').value) || 0;
      
      const cost = hours * rate;
      const price = cost * (1 + margin/100);
      const profit = price - cost;
      const profitMargin = (profit/price) * 100;
      
      document.getElementById('priceDisplay').textContent = '$' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      document.getElementById('profitDisplay').innerHTML = 
        'Cost: $' + cost.toFixed(2) + ' | Profit: $' + profit.toFixed(2) + ' (' + profitMargin.toFixed(1) + '%)';
      document.getElementById('result').style.display = 'block';
    }
  </script>
</div>
```

---

## 📝 Customization Guide

### Industry-Specific Presets:

**GEO SEO Services:**
- Hours: 20-40/month
- Rate: $75-150/hour
- Tools: $200-500/month
- Margin: 35-50%

**Web Design:**
- Hours: 40-100/project
- Rate: $85-200/hour
- Tools: $50-100/month
- Margin: 40-60%

**Content Writing:**
- Hours: 10-30/month
- Rate: $50-100/hour
- Tools: $30-50/month
- Margin: 50-70%

**Consulting:**
- Hours: 5-20/month
- Rate: $150-500/hour
- Tools: $100-200/month
- Margin: 60-80%

### Pricing Strategy Adjustments:

**Value-Based Pricing:**
- Increase B27 (margin) to 60-80%
- Focus on client ROI, not your costs

**Competitive Pricing:**
- Set B29 (market rate) as primary
- Adjust costs to meet market

**Premium Positioning:**
- Price 20-30% above market
- Justify with superior deliverables

---

## 🎯 Usage Instructions

1. **For Each New Service:**
   - Fill in all yellow input cells
   - Review calculated costs
   - Adjust profit margin based on strategy
   - Note final recommended price

2. **Package Tier Creation:**
   - Use Tab 2 to compare tiers
   - Ensure clear value differentiation
   - Price anchors (Professional should look best value)

3. **Price Reviews:**
   - Update Tab 3 with any changes
   - Review quarterly
   - Adjust for inflation/cost increases

4. **Client Proposals:**
   - Export as PDF for professional look
   - Include cost breakdown transparency (optional)
   - Show value vs. cost

---

## 💡 Pro Tips

1. **Psychological Pricing:**
   - Use .97 or .99 endings (B34 formula does this)
   - $2,497 feels less than $2,500

2. **Anchor Pricing:**
   - Show 3 tiers: Basic ($997), Pro ($2,497), Enterprise ($4,997)
   - Middle tier appears most reasonable

3. **Value Stacking:**
   - List each deliverable separately
   - Show individual values
   - Total exceeds package price

4. **Annual Discounts:**
   - Offer 10-15% off for annual prepay
   - Improves cash flow
   - Locks in clients

5. **Price Increase Strategy:**
   - Grandfather existing clients
   - 10-15% annual increases
   - Add value with each increase

---

## 📋 Quick Pricing Formulas

**Cost-Plus:** `Price = Total Cost × (1 + Desired Margin)`

**Value-Based:** `Price = Client's Expected ROI × 20-30%`

**Market-Based:** `Price = Competitor Average ± Positioning`

**Hourly Equivalent:** `Price = Hours × Rate + Expenses + Margin`

**Package Pricing:** `Price = (Individual Items Total) × 0.85` (15% discount)

---

## 🚀 Ready-to-Use Pricing Templates

**Starter Package:** $997-1,497/month
- Basic GEO SEO
- 10-15 hours
- Email support
- Monthly reports

**Growth Package:** $2,497-3,497/month
- Full GEO SEO + Content
- 25-35 hours
- Priority support
- Bi-weekly calls
- **MOST POPULAR**

**Enterprise Package:** $4,997-7,497/month
- Everything + Strategy
- 50+ hours
- Dedicated manager
- Weekly calls
- Custom integrations

---

*Tool Version: 1.0 | Last Updated: 2026-03-21 | Compatible: Google Sheets (Free)*
