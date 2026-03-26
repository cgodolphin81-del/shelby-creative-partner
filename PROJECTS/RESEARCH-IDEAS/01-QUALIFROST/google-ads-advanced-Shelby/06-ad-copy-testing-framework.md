# Ad Copy Testing Framework
## A/B Test Templates & Statistical Significance

---

## Table of Contents
1. [Testing Fundamentals](#1-testing-fundamentals)
2. [Test Planning](#2-test-planning)
3. [RSA Testing Strategy](#3-rsa-testing-strategy)
4. [Test Templates](#4-test-templates)
5. [Statistical Significance](#5-statistical-significance)
6. [Testing Tools](#6-testing-tools)
7. [Analysis & Implementation](#7-analysis--implementation)
8. [Testing Calendar](#8-testing-calendar)

---

## 1. Testing Fundamentals

### 1.1 Why Test Ad Copy

**The Business Case:**
```
IMPACT OF AD COPY TESTING:

TYPICAL IMPROVEMENTS FROM TESTING:
├── CTR: +20-50%
├── Quality Score: +1-2 points
├── CPC: -10-30%
├── Conversion Rate: +10-30%
├── Overall ROAS: +25-60%

COMPOUND EFFECT:
Month 1: +15% improvement
Month 2: +15% on improved baseline = +32% total
Month 3: +15% on new baseline = +52% total
Month 6: +15% monthly = +131% total

ROI OF TESTING:
→ Time investment: 5-10 hours/month
→ Potential revenue impact: 50-100%+ annually
→ Competitive advantage: Continuous improvement
→ Learning: Understand what resonates
```

### 1.2 Testing Principles

**Core Principles:**
```
PRINCIPLE 1: ONE VARIABLE AT A TIME
✓ Change only one element per test
✓ Isolate the impact
✓ Clear attribution
✓ Actionable insights

EXAMPLE:
Test A: Headline 1 variation
Test B: Description variation
Test C: CTA variation
NOT: All three at once

PRINCIPLE 2: STATISTICAL SIGNIFICANCE
✓ Wait for enough data
✓ Use significance calculators
✓ Don't act on hunches
✓ Confidence level: 95% minimum

PRINCIPLE 3: TEST DURATION
✓ Minimum 2 weeks
✓ Full business cycle (week + weekend)
✓ Enough conversions (100+ per variant)
✓ Avoid seasonal anomalies

PRINCIPLE 4: DOCUMENT EVERYTHING
✓ Hypothesis recorded
✓ Test parameters saved
✓ Results documented
✓ Learnings shared

PRINCIPLE 5: CONTINUOUS TESTING
✓ Always have tests running
✓ Pipeline of test ideas
✓ Never "done" optimizing
✓ Build on learnings
```

### 1.3 Test Hierarchy

**What to Test (Priority Order):**
```
TIER 1 (Highest Impact):

1. VALUE PROPOSITION
   → Core benefit messaging
   → Primary differentiator
   → Main offer
   → Impact: 30-100%+

2. HEADLINES (RSA)
   → Primary headline (H1)
   → Benefit vs. feature focus
   → Question vs. statement
   → Impact: 20-50%

3. LANDING PAGE ALIGNMENT
   → Message match
   → Offer consistency
   → Visual continuity
   → Impact: 20-50%

TIER 2 (High Impact):

4. CALLS TO ACTION
   → CTA wording
   → Urgency level
   → Action verbs
   → Impact: 15-30%

5. SOCIAL PROOF
   → Reviews/ratings
   → Customer count
   → Trust badges
   → Impact: 15-30%

6. OFFERS/PROMOTIONS
   → Discount amounts
   → Free shipping
   → Trial periods
   → Impact: 15-40%

TIER 3 (Moderate Impact):

7. DESCRIPTIONS (RSA)
   → Length variations
   → Feature emphasis
   → Benefit elaboration
   → Impact: 10-20%

8. AD EXTENSIONS
   → Sitelink variations
   → Callout testing
   → Structured snippets
   → Impact: 10-20%

9. FORMATTING
   → Capitalization
   → Punctuation
   → Emoji (where allowed)
   → Impact: 5-15%

TIER 4 (Lower Impact):

10. MINOR TWEAKS
    → Word order
    → Synonyms
    → Minor phrasing
    → Impact: 5-10%
```

---

## 2. Test Planning

### 2.1 Hypothesis Development

**Hypothesis Framework:**
```
HYPOTHESIS TEMPLATE:

"By changing [ELEMENT] from [CURRENT] to [VARIANT],
we expect [METRIC] to [DIRECTION] by [X]%,
because [RATIONALE]."

EXAMPLES:

HEADLINE TEST:
"By changing Headline 1 from 'Buy Running Shoes' 
to 'Run Faster, Longer, Better', we expect CTR to 
increase by 25%, because benefit-focused messaging 
resonates more with serious runners."

CTA TEST:
"By changing CTA from 'Learn More' to 'Start Free Trial', 
we expect conversion rate to increase by 20%, because 
specific action with clear value reduces friction."

OFFER TEST:
"By changing offer from '10% Off' to 'Free Shipping', 
we expect conversion rate to increase by 15%, because 
shipping costs are a top cart abandonment reason."

SOCIAL PROOF TEST:
"By adding 'Join 50,000+ Happy Customers' to headlines, 
we expect CTR to increase by 20%, because social proof 
builds trust and reduces perceived risk."

HYPOTHESIS QUALITY CHECK:

✓ CLEAR ELEMENT
  → Specific component being tested
  → Measurable change
  → Implementable

✓ PREDICTED OUTCOME
  → Specific metric
  → Direction (increase/decrease)
  → Estimated magnitude

✓ SOUND RATIONALE
  → Based on data or research
  → Logical connection
  → Customer-centric reasoning

✓ TESTABLE
  → Can be isolated
  → Measurable results
  → Reasonable timeline
```

### 2.2 Test Prioritization

**ICE Scoring Model:**
```
ICE = IMPACT × CONFIDENCE × EASE

IMPACT (1-10):
10 = Potential game-changer (50%+ improvement)
7  = Significant impact (25-50% improvement)
5  = Moderate impact (10-25% improvement)
3  = Minor impact (5-10% improvement)
1  = Negligible impact (<5% improvement)

CONFIDENCE (1-10):
10 = Certain (data-backed, proven elsewhere)
7  = High confidence (strong rationale)
5  = Medium confidence (reasonable hypothesis)
3  = Low confidence (hunch/assumption)
1  = Guessing (no basis)

EASE (1-10):
10 = Trivial (5 minutes, no dependencies)
7  = Easy (30 minutes, simple)
5  = Moderate (2 hours, some complexity)
3  = Difficult (1 day, multiple dependencies)
1  = Very difficult (1+ week, major effort)

SCORING EXAMPLE:

Test A: Headline benefit vs. feature
Impact: 8 (headlines drive CTR)
Confidence: 7 (industry best practice)
Ease: 10 (change in Google Ads)
ICE Score: 8 × 7 × 10 = 560

Test B: New landing page
Impact: 9 (major conversion impact)
Confidence: 5 (untested approach)
Ease: 3 (developer required)
ICE Score: 9 × 5 × 3 = 135

Test C: Add ratings to ad
Impact: 6 (moderate trust boost)
Confidence: 8 (proven tactic)
Ease: 9 (simple extension)
ICE Score: 6 × 8 × 9 = 432

PRIORITY ORDER:
1. Test A (560) - Start here
2. Test C (432) - Second
3. Test B (135) - Later or reconsider

PRIORITIZATION MATRIX:

QUADRANT 1 (High ICE: 400+):
→ Do first
→ Quick wins
→ High confidence
→ Maximum ROI

QUADRANT 2 (Medium ICE: 200-399):
→ Schedule next
→ Good opportunities
→ Worth testing
→ Plan resources

QUADRANT 3 (Low ICE: 100-199):
→ Backlog
→ When time allows
→ Lower priority
→ May not be worth it

QUADRANT 4 (Very Low ICE: <100):
→ Probably skip
→ Poor ROI
→ Reconsider approach
→ Or combine with other tests
```

### 2.3 Test Roadmap

**Creating a Testing Calendar:**
```
TESTING CADENCE:

ONGOING TESTS:
→ Always 2-3 tests running
→ Different campaigns/ad groups
→ Staggered start dates
→ Continuous learning

TEST PIPELINE:
→ 10+ ideas in backlog
→ Prioritized by ICE score
→ Ready to launch
→ No downtime

MONTHLY CADENCE:

WEEK 1:
→ Launch 1-2 new tests
→ Review previous week's data
→ Make minor adjustments
→ Document observations

WEEK 2:
→ Monitor ongoing tests
→ Check statistical significance
→ Prepare next tests
→ Analyze completed tests

WEEK 3:
→ Implement winners
→ Launch next tests
→ Update documentation
→ Share learnings

WEEK 4:
→ Review monthly results
→ Update testing strategy
→ Plan next month
→ Team knowledge share

QUARTERLY REVIEW:
→ Overall testing impact
→ Win rate analysis
→ Best learnings
→ Strategy adjustment
→ Resource allocation
```

---

## 3. RSA Testing Strategy

### 3.1 RSA Testing Fundamentals

**Understanding RSA Optimization:**
```
HOW RSAs WORK:

GOOGLE'S AI:
→ Tests all headline combinations
→ Learns which perform best
→ Shows best combinations more
→ Continuously optimizes

WHAT YOU CONTROL:
→ Headlines provided (3-15)
→ Descriptions provided (2-4)
→ Pinning (limited use)
→ Asset quality

WHAT GOOGLE CONTROLS:
→ Which combinations show
→ When each shows
→ Optimization over time
→ Final performance

RSA TESTING APPROACH:

TRADITIONAL A/B (Not Possible):
✗ Can't test Ad A vs. Ad B
✗ Google optimizes automatically
✗ Multiple ads per ad group

RSA ASSET TESTING (Correct):
✓ Test individual assets
✓ Provide variations
✓ Let Google optimize
✓ Review asset ratings
```

### 3.2 Asset-Level Testing

**Testing Individual Assets:**
```
HEADLINE TESTING:

STEP 1: CREATE VARIATIONS
Provide 10-15 headlines covering:

KEYWORD HEADLINES (3-5):
→ [Exact Keyword]
→ Buy [Keyword]
→ [Keyword] Sale
→ Best [Keyword]
→ [Keyword] Near Me

BENEFIT HEADLINES (3-5):
→ Get [Result] Fast
→ [Benefit] Guaranteed
→ Solve [Problem] Today
→ Achieve [Goal] Now
→ [Outcome] in [Timeframe]

SOCIAL PROOF HEADLINES (2-3):
→ Rated 4.8 Stars
→ Join 50,000+ Customers
→ Award-Winning [Product]
→ Trusted by [Brands]

OFFER HEADLINES (2-3):
→ Save [X]% Today
→ Free Shipping $50+
→ 30-Day Free Trial
→ [Offer] Ends Soon

STEP 2: PIN STRATEGICALLY
PINNING GUIDELINES:

PIN H1 (Required):
→ Keyword or main benefit
→ Most important message
→ Ensures relevance

PIN H2 (Recommended):
→ Secondary benefit
→ Differentiator
→ Support for H1

DON'T PIN H3:
→ Let Google optimize
→ Maximum flexibility
→ Better performance

STEP 3: MONITOR ASSET RATINGS
RATING SCALE:
→ Best (top performing)
→ Good (average)
→ Low (underperforming)
→ Pending (not enough data)

ACTION BY RATING:

BEST ASSETS:
→ Keep running
→ Create variations
→ Apply learnings
→ Use in other ads

GOOD ASSETS:
→ Monitor trends
→ Test improvements
→ Consider replacements
→ Generally OK

LOW ASSETS:
→ Replace within 2 weeks
→ Test new approach
→ Learn from failure
→ Don't repeat mistakes

PENDING ASSETS:
→ Wait 2-4 weeks
→ Ensure enough data
→ Don't judge prematurely
→ May improve with time

STEP 4: ITERATE CONTINUOUSLY
MONTHLY RSA REFRESH:
→ Replace 30-50% of assets
→ Test new angles
→ Apply learnings
→ Keep fresh
```

**Description Testing:**
```
DESCRIPTION VARIATIONS:

CREATE 4-5 DESCRIPTIONS:

DESCRIPTION 1 (Benefit-focused):
→ Lead with main benefit
→ Support with features
→ End with CTA
→ 90 characters

DESCRIPTION 2 (Feature-focused):
→ List key features
→ Explain benefits
→ Include social proof
→ 90 characters

DESCRIPTION 3 (Offer-focused):
→ Lead with offer
→ Explain value
→ Add urgency
→ 90 characters

DESCRIPTION 4 (Problem/Solution):
→ State the problem
→ Present solution
→ Call to action
→ 90 characters

DESCRIPTION 5 (Social Proof):
→ Customer count
→ Rating/reviews
→ Trust indicator
→ 90 characters

TESTING APPROACH:
→ Provide all variations
→ Let Google optimize
→ Review ratings monthly
→ Replace low performers
→ Test new angles
```

### 3.3 Ad-Level Testing

**Multiple RSA Testing:**
```
WHY TEST MULTIPLE RSAs:

BENEFITS:
→ More headline inventory
→ Different angles tested
→ Broader coverage
→ Faster learning

RECOMMENDATION:
→ 2-3 RSAs per ad group
→ Different approaches
→ Let Google optimize across
→ Review combined performance

TESTING FRAMEWORK:

RSA 1 (Control):
→ Current best performer
→ Proven messaging
→ Baseline comparison
→ Keep running

RSA 2 (Variant A):
→ New angle/approach
→ Different value prop
→ Test hypothesis
→ Monitor performance

RSA 3 (Variant B - Optional):
→ Another angle
→ Different audience
→ Additional test
→ If ad group has volume

SETUP IN GOOGLE ADS:

1. Create RSA 1 (Control)
   → Use current best assets
   → Mark as "Control" in name
   → Keep active

2. Create RSA 2 (Test)
   → Implement hypothesis
   → Different messaging
   → Mark as "Test - [Hypothesis]"
   → Keep active

3. Monitor Performance
   → Compare combined metrics
   → Check asset ratings
   → Review search terms
   → Wait for significance

4. Decide & Iterate
   → If test wins: Make new control
   → If control wins: New hypothesis
   → If unclear: More data or new test
```

---

## 4. Test Templates

### 4.1 Headline Test Templates

**Template 1: Benefit vs. Feature**
```
HYPOTHESIS:
Benefit-focused headlines will outperform feature-focused
headlines because customers care about outcomes, not specs.

CONTROL (Feature):
H1: [Product] with [Feature]
H2: [Number] [Feature] Included
H3: Advanced [Feature] Technology

VARIANT (Benefit):
H1: Get [Result] in [Timeframe]
H2: [Benefit] Without [Pain Point]
H3: Finally, [Desired Outcome]

EXAMPLE:

CONTROL:
H1: Running Shoes with Carbon Fiber Plate
H2: 8mm Drop, 280g Weight
H3: Advanced Cushioning Technology

VARIANT:
H1: Run 5 Minutes Faster Per Mile
H2: Race Day Speed Without Injury
H3: Finally, Break Your PR

METRICS TO TRACK:
→ CTR
→ Quality Score
→ Conversion Rate
→ Cost per Conversion

TEST DURATION: 2-4 weeks
MINIMUM DATA: 100 conversions per variant
```

**Template 2: Question vs. Statement**
```
HYPOTHESIS:
Question headlines will generate higher CTR by engaging
curiosity and self-identification.

CONTROL (Statement):
H1: [Solution] for [Problem]
H2: [Benefit] Guaranteed
H3: Try [Product] Risk-Free

VARIANT (Question):
H1: Struggling with [Problem]?
H2: Want [Desired Result]?
H3: Ready to [Take Action]?

EXAMPLE:

CONTROL:
H1: Accounting Software for Small Business
H2: Save 10 Hours Per Week
H3: Try Free for 30 Days

VARIANT:
H1: Spending Too Much Time on Books?
H2: Want to Save 10 Hours Weekly?
H3: Ready to Simplify Accounting?

METRICS TO TRACK:
→ CTR (primary)
→ Engagement rate
→ Conversion Rate
→ Bounce rate

TEST DURATION: 2-3 weeks
MINIMUM DATA: 5,000 impressions per variant
```

**Template 3: Specific vs. General**
```
HYPOTHESIS:
Specific headlines with numbers/details will outperform
general headlines due to credibility and clarity.

CONTROL (General):
H1: Great [Product] at Low Prices
H2: Fast Shipping Available
H3: Shop Our Selection Today

VARIANT (Specific):
H1: [Product] from $[X.XX]
H2: Free 2-Day Shipping
H3: [Number] Options in Stock

EXAMPLE:

CONTROL:
H1: Great Laptops at Low Prices
H2: Fast Shipping Available
H3: Shop Our Selection Today

VARIANT:
H1: Laptops from $299.99
H2: Free 2-Day Shipping
H3: 47 Models in Stock

METRICS TO TRACK:
→ CTR
→ Quality Score
→ Conversion Rate
→ Average Order Value

TEST DURATION: 2-3 weeks
MINIMUM DATA: 100 conversions per variant
```

**Template 4: Urgency Levels**
```
HYPOTHESIS:
Moderate urgency will outperform both no urgency and
high pressure urgency.

CONTROL (No Urgency):
H1: [Product] Available Now
H2: Shop When You're Ready
H3: Browse Our Collection

VARIANT (Moderate Urgency):
H1: [Product] - Limited Stock
H2: Sale Ends This Week
H3: Order by Friday for Weekend

VARIANT (High Urgency):
H1: LAST CHANCE - 90% Off
H2: Ends Tonight at Midnight
H3: Only 3 Left in Stock

EXAMPLE:

CONTROL:
H1: Winter Jackets Available Now
H2: Shop When You're Ready
H3: Browse Our Collection

VARIANT (Moderate):
H1: Winter Jackets - Limited Stock
H2: Sale Ends This Week
H3: Order by Friday for Weekend

VARIANT (High):
H1: LAST CHANCE - 90% Off Jackets
H2: Ends Tonight at Midnight
H3: Only 3 Left in Stock

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Time to Convert
→ Refund/Return Rate

TEST DURATION: 2-3 weeks
MINIMUM DATA: 100 conversions per variant

NOTE: High urgency may increase CTR but decrease
conversion quality. Monitor downstream metrics.
```

### 4.2 Description Test Templates

**Template 1: Length Variation**
```
HYPOTHESIS:
Longer descriptions with more detail will outperform
shorter descriptions for high-consideration products.

CONTROL (Short ~60 chars):
[Benefit]. [CTA].

VARIANT (Medium ~75 chars):
[Benefit]. [Supporting point]. [CTA].

VARIANT (Long ~90 chars):
[Benefit]. [Supporting point]. [Social proof]. [CTA].

EXAMPLE:

CONTROL:
Save 50% today. Shop now.

VARIANT (Medium):
Save 50% on all winter gear. Free shipping $50+. Shop now.

VARIANT (Long):
Save 50% on all winter gear. Free shipping $50+. 
4.8 stars from 10,000+ customers. Shop now.

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Time on site
→ Pages per session

TEST DURATION: 2-3 weeks
```

**Template 2: CTA Variation**
```
HYPOTHESIS:
Action-specific CTAs will outperform generic CTAs.

CONTROL (Generic):
→ Learn More
→ Shop Now
→ Get Started

VARIANT (Specific):
→ Get Your Free Quote
→ Start Your Free Trial
→ Book Your Consultation
→ Download the Guide
→ Calculate Your Savings

EXAMPLE:

CONTROL:
Professional accounting software. Learn More.

VARIANT:
Professional accounting software. Start Your Free Trial.

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Cost per Conversion

TEST DURATION: 2-3 weeks
```

### 4.3 Offer Test Templates

**Template 1: Discount Amount**
```
HYPOTHESIS:
Higher discount percentages will increase conversion rate
but may decrease average order value and profitability.

CONTROL:
Save 10% on Your First Order

VARIANT A:
Save 20% on Your First Order

VARIANT B:
Save 30% on Your First Order

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Average Order Value
→ Profit Margin
→ Customer Lifetime Value

TEST DURATION: 2-4 weeks
MINIMUM DATA: 200 conversions per variant

NOTE: Monitor profitability, not just conversion rate.
```

**Template 2: Offer Type**
```
HYPOTHESIS:
Free shipping will outperform percentage discounts for
orders under $100.

CONTROL:
Save 15% on Your Order

VARIANT A:
Free Shipping on All Orders

VARIANT B:
Free Shipping on Orders $50+

EXAMPLE:

CONTROL:
Save 15% on Your Order. Use code SAVE15.

VARIANT A:
Free Shipping on All Orders. No Minimum.

VARIANT B:
Free Shipping on Orders $50+. Easy Returns.

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Average Order Value
→ Cart Abandonment Rate
→ Profit per Order

TEST DURATION: 3-4 weeks
MINIMUM DATA: 200 conversions per variant
```

### 4.4 Social Proof Test Templates

**Template 1: Customer Count**
```
HYPOTHESIS:
Including customer count will increase trust and CTR.

CONTROL (No Social Proof):
H1: [Product/Service]
H2: [Benefit]
H3: [CTA]

VARIANT (With Customer Count):
H1: Join [Number]+ Happy Customers
H2: [Product/Service] That Delivers
H3: [CTA]

EXAMPLE:

CONTROL:
H1: Email Marketing Platform
H2: Grow Your Business
H3: Start Free Trial

VARIANT:
H1: Join 50,000+ Happy Customers
H2: Email Marketing That Delivers
H3: Start Free Trial

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Quality Score

TEST DURATION: 2-3 weeks
```

**Template 2: Ratings/Reviews**
```
HYPOTHESIS:
Displaying star ratings will increase CTR and trust.

CONTROL (No Rating):
H1: [Product Category]
H2: [Benefit]
H3: [Offer]

VARIANT (With Rating):
H1: [Product Category] - 4.8 Stars
H2: Loved by [Number]+ Customers
H3: [Offer]

EXAMPLE:

CONTROL:
H1: Running Shoes
H2: Comfort Meets Performance
H3: Free Shipping

VARIANT:
H1: Running Shoes - 4.8 Stars
H2: Loved by 10,000+ Runners
H3: Free Shipping & Returns

METRICS TO TRACK:
→ CTR
→ Conversion Rate
→ Quality Score

TEST DURATION: 2-3 weeks
```

---

## 5. Statistical Significance

### 5.1 Understanding Significance

**Key Concepts:**
```
STATISTICAL SIGNIFICANCE:

DEFINITION:
The probability that a result is not due to random chance.

CONFIDENCE LEVEL:
→ 95% confidence = 5% chance result is random
→ Industry standard for marketing tests
→ Higher = more certainty, more data needed

P-VALUE:
→ Probability of seeing results if no real difference
→ p < 0.05 = statistically significant
→ p < 0.01 = highly significant

STATISTICAL POWER:
→ Probability of detecting a real difference
→ Aim for 80%+ power
→ Affected by sample size and effect size

WHY IT MATTERS:

WITHOUT SIGNIFICANCE:
✗ Acting on random noise
✗ False positives
✗ Wasted optimization
✗ Potentially harmful changes

WITH SIGNIFICANCE:
✓ Confident decisions
✓ Real improvements
✓ Efficient optimization
✓ Reliable learnings
```

### 5.2 Sample Size Calculation

**Minimum Sample Size:**
```
SAMPLE SIZE CALCULATOR INPUTS:

1. BASELINE CONVERSION RATE:
   → Current conversion rate
   → Example: 3.0%

2. MINIMUM DETECTABLE EFFECT:
   → Smallest improvement worth detecting
   → Example: 20% relative improvement
   → Or: 0.6% absolute (from 3.0% to 3.6%)

3. CONFIDENCE LEVEL:
   → Standard: 95%
   → More certain: 99%
   → Less certain: 90%

4. STATISTICAL POWER:
   → Standard: 80%
   → More power: 90%

SAMPLE SIZE EXAMPLES:

Baseline: 3.0% CR
Minimum Effect: 20% relative (0.6% absolute)
Confidence: 95%
Power: 80%

REQUIRED PER VARIANT: ~6,300 visitors
TOTAL SAMPLE: ~12,600 visitors

At 1,000 visitors/day: ~13 days

Baseline: 5.0% CR
Minimum Effect: 15% relative (0.75% absolute)
Confidence: 95%
Power: 80%

REQUIRED PER VARIANT: ~3,800 visitors
TOTAL SAMPLE: ~7,600 visitors

At 1,000 visitors/day: ~8 days

BASELINE: 1.0% CR
Minimum Effect: 25% relative (0.25% absolute)
Confidence: 95%
Power: 80%

REQUIRED PER VARIANT: ~21,000 visitors
TOTAL SAMPLE: ~42,000 visitors

At 1,000 visitors/day: ~42 days

QUICK REFERENCE TABLE:

| Baseline CR | Min Effect | Visitors/Variant | Days (@1K/day) |
|-------------|------------|------------------|----------------|
| 1.0%        | 25%        | 21,000           | 21             |
| 1.0%        | 50%        | 5,500            | 6              |
| 2.0%        | 20%        | 12,000           | 12             |
| 2.0%        | 30%        | 5,500            | 6              |
| 3.0%        | 20%        | 6,300            | 6              |
| 3.0%        | 30%        | 3,000            | 3              |
| 5.0%        | 15%        | 3,800            | 4              |
| 5.0%        | 25%        | 1,400            | 1-2            |
| 10.0%       | 15%        | 1,700            | 2              |
| 10.0%       | 25%        | 650              | 1              |
```

### 5.3 Significance Testing

**Chi-Square Test:**
```
WHEN TO USE:
→ Comparing conversion rates
→ A/B test results
→ Categorical data
→ Most ad copy tests

CHI-SQUARE CALCULATOR:

INPUT:
Variant A: [X] conversions out of [Y] visitors
Variant B: [X] conversions out of [Y] visitors

OUTPUT:
→ p-value
→ Significance (Yes/No)
→ Confidence level

ONLINE TOOLS:
→ abtestingcalculator.com
→ optimizely.com/sample-size-calculator
→ vwo.com/ab-significance-calculator
→ google/optimize (built-in)

MANUAL CALCULATION (Simplified):

1. Calculate conversion rates:
   CR_A = Conversions_A / Visitors_A
   CR_B = Conversions_B / Visitors_B

2. Calculate pooled conversion rate:
   CR_pooled = (Conv_A + Conv_B) / (Vis_A + Vis_B)

3. Calculate standard error:
   SE = sqrt(CR_pooled × (1 - CR_pooled) × (1/Vis_A + 1/Vis_B))

4. Calculate z-score:
   z = (CR_B - CR_A) / SE

5. Determine significance:
   |z| > 1.96 = Significant at 95%
   |z| > 2.58 = Significant at 99%

EXAMPLE:

Variant A (Control):
→ 150 conversions / 5,000 visitors = 3.0%

Variant B (Test):
→ 180 conversions / 5,000 visitors = 3.6%

Pooled CR = (150 + 180) / (5,000 + 5,000) = 3.3%

SE = sqrt(0.033 × 0.967 × (1/5000 + 1/5000))
   = sqrt(0.0319 × 0.0004)
   = sqrt(0.00001276)
   = 0.00357

z = (0.036 - 0.030) / 0.00357
  = 0.006 / 0.00357
  = 1.68

RESULT:
|z| = 1.68 < 1.96
NOT statistically significant at 95%

NEED MORE DATA BEFORE DECIDING
```

**T-Test (for Continuous Metrics):**
```
WHEN TO USE:
→ Comparing average order value
→ Comparing time on site
→ Comparing pages per session
→ Continuous numerical data

EXAMPLE - AOV TEST:

Variant A (Control):
→ Mean AOV: $85.50
→ Standard Deviation: $32.40
→ Sample Size: 500

Variant B (Test):
→ Mean AOV: $92.30
→ Standard Deviation: $35.20
→ Sample Size: 500

Use online t-test calculator or statistical software
to determine significance.
```

### 5.4 When to Stop Tests

**Stopping Rules:**
```
STOP WHEN:

✓ STATISTICALLY SIGNIFICANT (Winner)
  → p < 0.05
  → Clear winner identified
  → Implement winner
  → Document learnings

✓ STATISTICALLY SIGNIFICANT (Loser)
  → p < 0.05
  → Test variant significantly worse
  → Keep control
  → Document learnings

✓ NOT SIGNIFICANT (After Max Duration)
  → Ran for 4+ weeks
  → No significant difference
  → Inconclusive
  → Consider new hypothesis

✓ SAMPLE SIZE REACHED
  → Calculated sample size achieved
  → Check significance
  → Decide based on results

✓ TECHNICAL ISSUES
  → Tracking broken
  → Data corrupted
  → External factors
  → Restart test

DON'T STOP WHEN:

✗ Early significance (peeking problem)
  → Wait for full sample
  → Early results often reverse
  → Minimum 1 week regardless

✗ "Looks like a winner"
  → Use statistics, not gut
  → Wait for significance
  → Avoid false positives

✗ One variant ahead temporarily
  → Normal fluctuation
  → Need sustained difference
  → Wait for full data

✗ Impatience
  → Trust the process
  → Bad decisions from early stops
  → Document and wait
```

---

## 6. Testing Tools

### 6.1 Google Ads Native Tools

**Experiments (Campaign Drafts & Experiments):**
```
SETUP:

1. CREATE DRAFT
   → Select campaign
   → Click "Drafts & experiments"
   → Create draft
   → Make changes to draft

2. CREATE EXPERIMENT
   → From draft, create experiment
   → Set split (50/50 recommended)
   → Set duration
   → Launch

3. MONITOR
   → Compare experiment vs. original
   → Statistical significance shown
   → Decide to apply or discard

PROS:
✓ Built into Google Ads
✓ Proper randomization
✓ Statistical significance
✓ Easy to implement

CONS:
✗ Campaign-level only
✗ Can't test across campaigns
✗ Limited to one experiment per campaign
✗ Learning phase reset
```

**Ad Variations:**
```
SETUP:

1. TOOLS → AD VARIATIONS
2. Select campaign(s)
3. Choose variation type:
   → Replace text
   → Add text
   → Remove text
4. Set parameters
5. Review and run

PROS:
✓ Quick to set up
✓ Multiple campaigns
✓ Various change types

CONS:
✗ Limited test types
✗ No statistical significance
✗ Manual analysis needed
```

### 6.2 External Tools

**Significance Calculators:**
```
RECOMMENDED TOOLS:

1. AB TESTING CALCULATOR
   → abtestingcalculator.com
   → Free
   → Easy to use
   → Multiple test types

2. OPTIMIZELY
   → optimizely.com/sample-size-calculator
   → Free calculator
   → Sample size + significance
   → Professional tool

3. VWO
   → vwo.com/ab-significance-calculator
   → Free
   → Quick results
   → Clear explanations

4. EVAN MILLER
   → evanmiller.org/ab-testing
   → Free
   → Advanced options
   → Statistical rigor
```

**Test Management:**
```
SPREADSHEET TEMPLATES:

CREATE TRACKING SHEET WITH:

TEST LOG:
├── Test ID
├── Test name
├── Hypothesis
├── Start date
├── End date
├── Status (Running/Complete/Inconclusive)
├── Variant A description
├── Variant B description
├── Primary metric
├── Sample size needed
├── Current sample
├── Current results
├── Significance
├── Winner
└── Learnings

RESULTS DATABASE:
├── All completed tests
├── Win/loss
├── Impact
├── Key learnings
├── Applied where
└── ROI of test

TEMPLATE STRUCTURE:
→ Google Sheets (shareable)
→ One tab per test type
→ Summary dashboard
→ Historical archive
```

---

## 7. Analysis & Implementation

### 7.1 Test Analysis

**Analysis Framework:**
```
STEP 1: VERIFY DATA QUALITY

CHECKS:
□ Tracking working correctly?
□ No data gaps?
□ External factors accounted for?
□ Sample size adequate?
□ Test ran full duration?

STEP 2: REVIEW PRIMARY METRIC

ANALYSIS:
→ Conversion rate by variant
→ Statistical significance
→ Confidence level
→ Direction of effect
→ Magnitude of effect

STEP 3: REVIEW SECONDARY METRICS

CHECK:
→ Any negative impacts?
→ AOV changes?
→ Quality Score changes?
→ Downstream metrics?
→ Long-term implications?

STEP 4: SEGMENT ANALYSIS

BREAK DOWN BY:
→ Device type
→ Location
→ Time of day
→ Day of week
→ Audience segment
→ New vs. returning

STEP 5: DRAW CONCLUSIONS

QUESTIONS:
→ Statistically significant?
→ Practically significant?
→ Consistent across segments?
→ Any red flags?
→ Actionable?
```

### 7.2 Decision Framework

**Implementation Decisions:**
```
DECISION TREE:

SIGNIFICANT WIN (p < 0.05, positive):
→ Implement immediately
→ Roll out to all ad groups
→ Document learnings
→ Plan next test
→ Expected impact: [X]%

SIGNIFICANT LOSS (p < 0.05, negative):
→ Keep control
→ Document learnings
→ Understand why it failed
→ Plan new hypothesis
→ No implementation needed

INCONCLUSIVE (p > 0.05):
→ Option A: Run longer
  → If close to significance
  → If sample size not reached
  → If test is high-priority

→ Option B: Call it even
  → If ran full duration
  → If sample size reached
  → If low priority

→ Option C: Iterate and retest
  → If learnings suggest adjustment
  → If close to winning
  → If high priority

MIXED RESULTS:
→ Primary metric won, secondary lost?
→ Some segments won, some lost?
→ Short-term win, long-term concern?
→ Requires judgment call
→ Consider partial implementation
→ Or test more

IMPLEMENTATION CHECKLIST:

□ Update all relevant ad groups
□ Update documentation
□ Notify team
□ Update templates
□ Apply learnings to future tests
□ Monitor for 2 weeks post-implementation
□ Verify expected impact realized
```

### 7.3 Learning Documentation

**Test Report Template:**
```
TEST REPORT:

TEST ID: [ID-001]
TEST NAME: [Benefit vs. Feature Headlines]
DATE RANGE: [Start] - [End]
STATUS: [Complete]

HYPOTHESIS:
[Full hypothesis statement]

VARIANTS:
Control: [Description]
Variant: [Description]

SAMPLE SIZE:
Required: [X] per variant
Achieved: [X] per variant
Duration: [X] days

RESULTS:

PRIMARY METRIC ([Metric]):
Control: [X.X%]
Variant: [X.X%]
Change: [+/-X.X%]
Significance: [Yes/No]
Confidence: [XX%]

SECONDARY METRICS:
→ [Metric 1]: [Result]
→ [Metric 2]: [Result]
→ [Metric 3]: [Result]

SEGMENT INSIGHTS:
→ [Segment 1]: [Finding]
→ [Segment 2]: [Finding]

DECISION:
[Implement / Keep Control / Inconclusive]

LEARNINGS:
1. [Key learning 1]
2. [Key learning 2]
3. [Key learning 3]

NEXT STEPS:
1. [Action 1]
2. [Action 2]
3. [Action 3]

FOLLOW-UP TESTS:
→ [Related test idea 1]
→ [Related test idea 2]

ROI:
Time invested: [X] hours
Expected annual impact: $[X]
Actual impact (if implemented): $[X]
```

---

## 8. Testing Calendar

### 8.1 Monthly Testing Schedule

**Sample Monthly Calendar:**
```
WEEK 1:

TEST 1 LAUNCH (Headline - Benefit vs. Feature)
→ Campaign: Non-Brand - Shoes
→ Ad Groups: 5 high-volume
→ Sample needed: 10,000 visitors
→ Duration: 2 weeks
→ Owner: [Name]

TEST 2 MONITORING (CTA Variation)
→ Week 2 of 3
→ Check significance
→ Monitor for issues
→ Owner: [Name]

WEEK 2:

TEST 1 MONITORING
→ Week 2 of 2
→ Check significance
→ Prepare implementation

TEST 2 COMPLETE
→ Analyze results
→ Document learnings
→ Implement if winner

TEST 3 LAUNCH (Offer - Free Shipping vs. % Off)
→ Campaign: Remarketing
→ All ad groups
→ Sample needed: 5,000 visitors
→ Duration: 3 weeks
→ Owner: [Name]

WEEK 3:

TEST 1 COMPLETE
→ Finalize analysis
→ Implement winner
→ Document

TEST 3 MONITORING
→ Week 2 of 3
→ Check data quality

TEST 4 LAUNCH (Social Proof - Rating Display)
→ Campaign: Brand
→ All ad groups
→ Sample needed: 3,000 visitors
→ Duration: 2 weeks
→ Owner: [Name]

WEEK 4:

TEST 3 MONITORING
→ Week 3 of 3
→ Final week

TEST 4 MONITORING
→ Week 2 of 2
→ Final week

MONTHLY REVIEW:
→ All completed tests
→ Win rate
→ Total impact
→ Next month planning
→ Team knowledge share
```

### 8.2 Quarterly Testing Plan

**Q1 Testing Focus:**
```
JANUARY:
→ Post-holiday optimization
→ New year messaging tests
→ Offer structure tests
→ Focus: Conversion Rate

FEBRUARY:
→ Value proposition tests
→ Headline optimization
→ CTA variations
→ Focus: CTR

MARCH:
→ Social proof tests
→ Landing page alignment
→ Extension tests
→ Focus: Quality Score

Q1 GOALS:
→ Run 8-12 tests
→ Achieve 50%+ win rate
→ Improve overall CTR by 15%
→ Improve conversion rate by 10%
→ Document all learnings
```

---

## Quick Reference: Testing Checklist

### Pre-Test
```
□ Hypothesis documented
□ ICE score calculated
□ Sample size calculated
□ Test duration determined
□ Variants created
□ Tracking verified
□ Team notified
□ Baseline captured
```

### During Test
```
□ Monitor data quality
□ Check for technical issues
□ Don't peek early
□ Wait for significance
□ Document observations
□ Note external factors
```

### Post-Test
```
□ Calculate significance
□ Review all metrics
□ Segment analysis
□ Draw conclusions
□ Make decision
□ Implement if winner
□ Document learnings
□ Share with team
□ Plan next test
```

---

## Resources

- **Google Ads Experiments:** support.google.com/google-ads/answer/6013642
- **A/B Testing Calculator:** abtestingcalculator.com
- **Sample Size Calculator:** optimizely.com/sample-size-calculator
- **Statistical Significance Guide:** vwo.com/ab-testing/statistical-significance

---

*Last Updated: March 2026*
*Version: 2.1*
