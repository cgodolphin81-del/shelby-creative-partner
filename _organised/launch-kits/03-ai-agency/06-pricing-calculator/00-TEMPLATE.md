# 📊 Pricing Calculator - Google Sheet Template

**Instructions:** Create a Google Sheet with the following structure

---

## Sheet 1: ROI Calculator

### Section A: Client's Current Costs

| Row | A (Label) | B (Input) | C (Formula) |
|-----|-----------|-----------|-------------|
| 1 | **Current State Analysis** | | |
| 2 | | | |
| 3 | Hours spent per week on [TASK] | [INPUT] | |
| 4 | Hourly rate (fully loaded) | $[INPUT] | |
| 5 | **Weekly labor cost** | | `=B3*B4` |
| 6 | **Monthly labor cost** | | `=C5*4.33` |
| 7 | | | |
| 8 | Lost revenue per month (estimate) | $[INPUT] | |
| 9 | Other costs (tools, errors, etc.) | $[INPUT] | |
| 10 | | | |
| 11 | **TOTAL MONTHLY COST** | | `=C6+B8+B9` |

---

### Section B: Projected Savings

| Row | A (Label) | B (Input/Formula) | C (Notes) |
|-----|-----------|-------------------|-----------|
| 13 | **Projected Savings with AI** | | |
| 14 | | | |
| 15 | Time savings (%) | 70% | Typical range: 60-80% |
| 16 | **Monthly labor savings** | `=C6*B15` | |
| 17 | | | |
| 18 | Revenue recovery (%) | 50% | Typical range: 30-70% |
| 19 | **Monthly revenue recovered** | `=B8*B18` | |
| 20 | | | |
| 21 | Error reduction savings | $[INPUT] | Optional |
| 22 | | | |
| 23 | **TOTAL MONTHLY SAVINGS** | `=C16+C19+B21` | |
| 24 | **TOTAL ANNUAL SAVINGS** | `=C23*12` | |

---

### Section C: Investment & ROI

| Row | A (Label) | B (Input/Formula) | C (Notes) |
|-----|-----------|-------------------|-----------|
| 26 | **Investment** | | |
| 27 | | | |
| 28 | Setup fee | $[INPUT] | Your price |
| 29 | Monthly support | $[INPUT] | Your price |
| 30 | | | |
| 31 | **First Year Investment** | `=B28+(B29*12)` | |
| 32 | | | |
| 33 | **ROI CALCULATION** | | |
| 34 | First year savings | `=C24` | |
| 35 | First year investment | `=B31` | |
| 36 | **Net First Year Gain** | `=C34-B35` | |
| 37 | **ROI (%)** | `=(C34-B35)/B35*100` | |
| 38 | | | |
| 39 | **PAYBACK PERIOD** | | |
| 40 | Monthly savings | `=C23` | |
| 41 | **Months to Payback** | `=B28/C40` | |

---

### Section D: Visual Summary (Optional)

Create a simple bar chart:
- X-axis: Categories (Current Cost, Investment, Savings, Net Gain)
- Y-axis: Dollar amounts
- Colors: Red (costs), Green (savings)

---

## Sheet 2: Pricing Tiers

### Tier Comparison Table

| Feature | Starter | Professional | Enterprise |
|---------|---------|--------------|------------|
| **Price** | $5,000 | $15,000 | $50,000 |
| **Best For** | Small business | Growing company | Enterprise |
| | | | |
| **AI Agents** | 1 | 3 | Unlimited |
| **Integrations** | 2 | 5 | Unlimited |
| **Monthly Volume** | 1,000 interactions | 10,000 interactions | Unlimited |
| **Support** | Email | Priority email + chat | Dedicated Slack |
| **Setup Time** | 2 weeks | 4-6 weeks | 8-12 weeks |
| | | | |
| **Setup Fee** | $5,000 | $15,000 | $50,000 |
| **Monthly** | $500 | $1,500 | $5,000 |
| **Annual** | $5,400 | $16,200 | $54,000 |
| **Annual Savings** | 10% | 10% | 10% |

---

### ROI by Tier (Example)

| Metric | Starter | Professional | Enterprise |
|--------|---------|--------------|------------|
| Setup Fee | $5,000 | $15,000 | $50,000 |
| Monthly Savings | $3,000 | $10,000 | $35,000 |
| Payback Period | 1.7 months | 1.5 months | 1.4 months |
| First Year ROI | 620% | 700% | 740% |
| 3-Year Value | $103,000 | $345,000 | $1,210,000 |

---

## Sheet 3: Proposal Generator

### Input Section

| Field | Value |
|-------|-------|
| Client Name | [INPUT] |
| Company | [INPUT] |
| Email | [INPUT] |
| Industry | [INPUT] |
| Selected Tier | [DROPDOWN: Starter/Professional/Enterprise] |
| Custom Add-ons | [INPUT] |

---

### Auto-Generated Output

**Investment Summary:**

```
Client: {{Client Name}} at {{Company}}
Tier: {{Selected Tier}}
Add-ons: {{Custom Add-ons}}

Setup Fee: $[AUTO-FILLED]
Monthly Support: $[AUTO-FILLED]
Annual Total: $[AUTO-FILLED]

Expected Monthly Savings: $[CALCULATED]
Payback Period: [CALCULATED] months
First Year ROI: [CALCULATED]%
```

---

## Sheet 4: Competitor Comparison

### Feature Comparison

| Feature | Us | Competitor A | Competitor B | Traditional |
|---------|-----|--------------|--------------|-------------|
| Setup Time | 2-4 weeks | 6-8 weeks | 4-6 weeks | 3-6 months |
| Customization | 100% | 50% | 70% | 100% |
| AI-Powered | ✅ Yes | ❌ No | ⚠️ Partial | ❌ No |
| 24/7 Support | ✅ Yes | ❌ No | ✅ Yes | ❌ No |
| Price (Setup) | $15K | $25K | $18K | $50K+ |
| Price (Monthly) | $1.5K | $3K | $2K | $5K+ |
| ROI Timeline | 60 days | 120 days | 90 days | 180 days |

---

## Sheet 5: Use Case Library

### Pre-Built ROI Calculations

| Use Case | Avg. Time Saved/Month | Avg. Cost Saved/Month | Typical Investment | Payback |
|----------|----------------------|----------------------|-------------------|---------|
| Lead Qualification | 20 hours | $4,000 | $10K setup + $1K/mo | 2.5 months |
| Customer Support | 40 hours | $8,000 | $15K setup + $2K/mo | 2 months |
| Content Repurposing | 15 hours | $3,000 | $7K setup + $750/mo | 2.5 months |
| Data Entry | 30 hours | $6,000 | $8K setup + $1K/mo | 1.5 months |
| Appointment Scheduling | 10 hours | $2,000 | $5K setup + $500/mo | 2.5 months |
| Email Management | 15 hours | $3,000 | $6K setup + $750/mo | 2 months |
| Social Media Management | 20 hours | $4,000 | $8K setup + $1K/mo | 2 months |
| Reporting & Analytics | 12 hours | $2,500 | $6K setup + $750/mo | 2.5 months |

---

## How to Use This Calculator

### In Sales Calls

1. **Share your screen** with the ROI Calculator sheet
2. **Input their numbers** in real-time (makes it tangible)
3. **Watch their reaction** when they see the payback period
4. **Let the math sell** for you

### In Proposals

1. **Include screenshots** of the ROI calculation
2. **Customize with their data** from discovery call
3. **Highlight payback period** and first-year ROI
4. **Make it undeniable**

### In Follow-Ups

1. **Send the calculator** as an interactive Google Sheet
2. **Let them play with the numbers** themselves
3. **Follow up**: "Did you get a chance to review the ROI calc?"
4. **Address concerns**: "What would need to change for this to make sense?"

---

## Pro Tips

✅ **Use conservative estimates** - Better to under-promise and over-deliver  
✅ **Show ranges** - "Based on similar clients, you can expect 60-80% time savings"  
✅ **Include opportunity cost** - "What could your team do with 20 extra hours/week?"  
✅ **Make it visual** - Charts and graphs are more persuasive than tables  
✅ **Update regularly** - Keep your benchmarks current based on real client data  

---

## Google Sheet Setup Instructions

1. **Create new Google Sheet**
2. **Create 5 tabs** named:
   - ROI Calculator
   - Pricing Tiers
   - Proposal Generator
   - Competitor Comparison
   - Use Case Library

3. **Copy the tables above** into each tab

4. **Set up formulas** as specified

5. **Format for readability:**
   - Bold headers
   - Currency formatting for $ values
   - Percentage formatting for % values
   - Conditional formatting for positive/negative numbers

6. **Share settings:**
   - View-only for clients
   - Edit access for your team
   - Make a copy for each prospect

7. **Save as template:**
   - File → Make a copy → Template naming convention
   - Example: "ROI Calculator - [Client Name] - [Date]"

---

*Numbers don't lie. Let the ROI speak for itself.* 💰
