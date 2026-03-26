# A/B Testing Framework
## Subject Lines, Content & Send Times Optimization

---

## Executive Summary

A/B testing (split testing) is the scientific approach to email optimization. This framework provides methodologies, best practices, and ready-to-use test templates for subject lines, email content, send times, and more.

**Key Principle:** Test one variable at a time, with statistical significance, to make data-driven decisions.

---

## Table of Contents

1. A/B Testing Fundamentals
2. Statistical Significance
3. Subject Line Testing
4. Content Testing
5. Send Time Optimization
6. CTA Testing
7. Design Testing
8. Offer Testing
9. Advanced Testing Strategies
10. Test Planning Template
11. Results Analysis Framework

---

## 1. A/B TESTING FUNDAMENTALS

### 1.1 What is A/B Testing?

A/B testing compares two versions of an email (A and B) to determine which performs better. One variable is changed between versions while everything else remains constant.

```
Version A (Control) → Segment A → Results A
                          ↓
                    Compare
                          ↓
Version B (Variant) → Segment B → Results B
```

### 1.2 Why A/B Test?

**Benefits:**
- Data-driven decisions (not guesses)
- Incremental improvement over time
- Understand audience preferences
- Maximize ROI from email program
- Reduce risk of major changes

**What You Can Test:**
- Subject lines
- Preheader text
- From name
- Send time/day
- Email content
- Images vs. no images
- CTA button (color, text, placement)
- Offers/discounts
- Email length
- Personalization level

---

### 1.3 Testing Hierarchy (Priority Order)

**Tier 1: High Impact (Test First)**
1. Subject lines (biggest impact on opens)
2. Send time (affects when emails are seen)
3. Offer/value proposition (affects conversions)

**Tier 2: Medium Impact**
4. From name (trust/recognition)
5. CTA (color, text, placement)
6. Preheader text (supports subject line)

**Tier 3: Optimization**
7. Email design/layout
8. Image usage
9. Content length
10. Personalization depth

---

### 1.4 A/B Testing Process

```
1. Hypothesis → 2. Test Design → 3. Execution → 4. Analysis → 5. Implementation
       ↓              ↓              ↓             ↓              ↓
 "Changing X    Define variants   Send to      Determine      Apply winner
 will improve   and metrics       segments     winner         to future
 Y metric"                       equally                      sends"
```

---

## 2. STATISTICAL SIGNIFICANCE

### 2.1 Why It Matters

Statistical significance tells you if results are real or due to random chance. Without it, you might implement changes that don't actually work.

**Confidence Levels:**
- 90% confidence = 10% chance results are random (acceptable for most tests)
- 95% confidence = 5% chance results are random (industry standard)
- 99% confidence = 1% chance results are random (very conservative)

---

### 2.2 Sample Size Calculator

**Minimum Sample Size Formula:**

For conversion rate tests:
```
n = (Z² × p × (1-p)) / E²

Where:
n = sample size per variant
Z = Z-score (1.645 for 90%, 1.96 for 95%, 2.576 for 99%)
p = baseline conversion rate
E = margin of error (typically 0.05 for 5%)
```

**Quick Reference Table:**

| Baseline Rate | Min Sample (90%) | Min Sample (95%) |
|---------------|------------------|------------------|
| 1% | 2,200 per variant | 3,800 per variant |
| 2% | 1,100 per variant | 1,900 per variant |
| 5% | 450 per variant | 750 per variant |
| 10% | 225 per variant | 385 per variant |
| 20% | 110 per variant | 190 per variant |

---

### 2.3 When to Stop a Test

**DO stop when:**
- ✅ Statistical significance reached (90%+ confidence)
- ✅ Pre-determined sample size achieved
- ✅ Test duration completed (usually 24-72 hours)

**DON'T stop when:**
- ❌ One variant is "winning" early (wait for significance)
- ❌ After just a few hours (need full cycle)
- ❌ When you see desired result (bias!)

---

### 2.4 Test Duration Guidelines

| List Size | Minimum Duration | Recommended |
|-----------|------------------|-------------|
| <1,000 | 48 hours | 72 hours |
| 1,000-10,000 | 24 hours | 48 hours |
| 10,000-100,000 | 12 hours | 24 hours |
| 100,000+ | 6 hours | 12 hours |

**Consider:**
- Purchase cycle (B2B may need longer)
- Time zones (cover all major zones)
- Day of week (include weekdays and weekends if relevant)

---

## 3. SUBJECT LINE TESTING

### 3.1 What to Test

**Subject Line Elements:**
- Length (short vs. long)
- Personalization (with/without name)
- Emojis (with/without, which emojis)
- Questions vs. statements
- Urgency (time-sensitive language)
- Curiosity (intrigue vs. clear)
- Numbers (specific vs. vague)
- Capitalization (normal vs. title case)

---

### 3.2 Subject Line Test Templates

**Test 1: Personalization**
```
Version A: New arrivals just dropped!
Version B: {{ first_name }}, new arrivals just dropped!

Hypothesis: Personalization will increase open rate by 10%+
Metric: Open rate
Min sample: 1,000 per variant
```

**Test 2: Length**
```
Version A: Summer Sale: Up to 50% Off Everything - Limited Time Only!
Version B: Summer Sale: 50% Off

Hypothesis: Shorter subject lines perform better on mobile
Metric: Open rate
Min sample: 1,000 per variant
```

**Test 3: Emoji Usage**
```
Version A: Your cart is waiting
Version B: Your cart is waiting 🛒

Hypothesis: Emoji will increase visibility and opens
Metric: Open rate
Min sample: 1,000 per variant
```

**Test 4: Question vs. Statement**
```
Version A: Ready for summer?
Version B: Get ready for summer

Hypothesis: Questions create more engagement
Metric: Open rate
Min sample: 1,000 per variant
```

**Test 5: Urgency**
```
Version A: Weekend sale starts now
Version B: Weekend sale ends tonight!

Hypothesis: Urgency drives faster action
Metric: Open rate AND click rate
Min sample: 1,000 per variant
```

**Test 6: Curiosity vs. Clarity**
```
Version A: You won't believe what's inside...
Version B: 20% off your favorite products

Hypothesis: Clarity outperforms curiosity for our audience
Metric: Open rate AND click rate
Min sample: 1,000 per variant
```

**Test 7: Numbers**
```
Version A: Save big on summer styles
Version B: Save 30% on summer styles

Hypothesis: Specific numbers outperform vague claims
Metric: Open rate AND click rate
Min sample: 1,000 per variant
```

---

### 3.3 Subject Line Best Practices

**DO:**
- ✅ Keep under 50 characters (mobile preview)
- ✅ Front-load important words
- ✅ Test personalization tokens
- ✅ Match email content (no clickbait)
- ✅ Use active voice

**DON'T:**
- ❌ Use all caps (appears spammy)
- ❌ Overuse exclamation points!!!
- ❌ Mislead about content
- ❌ Use spam trigger words excessively
- ❌ Make it too vague

---

### 3.4 Subject Line Performance Benchmarks

| Industry | Average Open Rate | Good | Excellent |
|----------|-------------------|------|-----------|
| E-commerce | 15-20% | 20-25% | 25%+ |
| B2B | 15-25% | 25-30% | 30%+ |
| Media/Publishing | 20-25% | 25-30% | 30%+ |
| Non-profit | 20-25% | 25-30% | 30%+ |
| SaaS | 20-25% | 25-30% | 30%+ |

---

## 4. CONTENT TESTING

### 4.1 What to Test

**Content Elements:**
- Email length (short vs. long)
- Tone (casual vs. formal)
- Storytelling vs. direct
- Image-heavy vs. text-heavy
- Product count (few vs. many)
- Social proof placement
- Personalization depth

---

### 4.2 Content Test Templates

**Test 1: Email Length**
```
Version A: Short email (100 words, 1 CTA)
Version B: Long email (400 words, story + 3 CTAs)

Hypothesis: Short emails perform better for promotional content
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

**Test 2: Tone**
```
Version A: Casual tone ("Hey {{ first_name }}, check this out!")
Version B: Professional tone ("Dear {{ first_name }}, we invite you...")

Hypothesis: Casual tone resonates better with our audience
Metric: Click rate, reply rate
Min sample: 500 per variant
```

**Test 3: Image vs. Text**
```
Version A: Image-heavy (60% images, 40% text)
Version B: Text-heavy (20% images, 80% text)

Hypothesis: Text-heavy emails have better deliverability and engagement
Metric: Click rate, spam complaints
Min sample: 500 per variant
```

**Test 4: Product Count**
```
Version A: 3 featured products
Version B: 12 featured products

Hypothesis: Fewer products reduce decision paralysis
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

**Test 5: Social Proof Placement**
```
Version A: Reviews at top of email
Version B: Reviews at bottom of email

Hypothesis: Early social proof increases trust and clicks
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

---

### 4.3 Content Best Practices

**DO:**
- ✅ Match content to audience segment
- ✅ Keep main message above the fold
- ✅ Use clear hierarchy (headers, subheaders)
- ✅ Include white space for readability
- ✅ Mobile-optimize all content

**DON'T:**
- ❌ Wall of text (hard to scan)
- ❌ Too many CTAs (decision paralysis)
- ❌ Generic content (personalize when possible)
- ❌ Ignore mobile experience

---

## 5. SEND TIME OPTIMIZATION

### 5.1 What to Test

**Send Time Variables:**
- Day of week (Monday-Sunday)
- Time of day (morning, afternoon, evening)
- Time zone (local vs. sender time)
- Frequency (daily, weekly, bi-weekly)

---

### 5.2 Send Time Test Templates

**Test 1: Day of Week**
```
Version A: Tuesday 10 AM
Version B: Thursday 10 AM
Version C: Saturday 10 AM

Hypothesis: Mid-week performs best for B2B, weekends for B2C
Metric: Open rate, click rate
Min sample: 1,000 per variant
Duration: 2 weeks (to capture multiple instances)
```

**Test 2: Time of Day**
```
Version A: 8 AM (morning commute)
Version B: 12 PM (lunch break)
Version C: 6 PM (evening)

Hypothesis: Morning sends perform best for our audience
Metric: Open rate, click rate
Min sample: 1,000 per variant
Duration: 1 week
```

**Test 3: Local Time vs. Sender Time**
```
Version A: Send at 10 AM EST (all recipients)
Version B: Send at 10 AM recipient's local time

Hypothesis: Local time sends improve engagement
Metric: Open rate, click rate
Min sample: 1,000 per variant
Duration: 2 weeks
```

---

### 5.3 Industry Send Time Benchmarks

**B2C E-commerce:**
- Best days: Tuesday, Wednesday, Thursday
- Best times: 10 AM - 2 PM, 6 PM - 8 PM
- Avoid: Monday mornings, weekends (varies)

**B2B:**
- Best days: Tuesday, Wednesday, Thursday
- Best times: 9 AM - 11 AM, 2 PM - 4 PM
- Avoid: Mondays, Fridays, weekends

**Media/Publishing:**
- Best days: Daily (news), Sunday (weekly roundups)
- Best times: 6 AM - 8 AM (morning reading)
- Avoid: Late evening

**Note:** These are general guidelines. Always test for YOUR audience!

---

### 5.4 Predictive Send Time

**What it is:** AI determines optimal send time for each subscriber

**How it works:**
- Analyzes historical open behavior
- Identifies patterns per subscriber
- Sends at individual optimal time

**Klaviyo Setup:**
1. Enable "Predictive Send Time" in campaign settings
2. Requires 6+ months of data
3. Minimum 1,000 subscribers for accuracy

**When to Use:**
- Large lists (10,000+ subscribers)
- Sufficient historical data
- Global audiences (multiple time zones)

**When NOT to Use:**
- Time-sensitive campaigns (flash sales)
- Small lists (insufficient data)
- When testing specific send times

---

## 6. CTA TESTING

### 6.1 What to Test

**CTA Elements:**
- Button text
- Button color
- Button size
- Button placement
- Number of CTAs
- CTA style (button vs. link)

---

### 6.2 CTA Test Templates

**Test 1: Button Text**
```
Version A: "Shop Now"
Version B: "Get Yours"
Version C: "Claim Your Discount"

Hypothesis: Action-oriented, benefit-driven text outperforms generic
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

**Test 2: Button Color**
```
Version A: Brand color (blue #0066CC)
Version B: Contrasting color (orange #FF6600)
Version C: Red urgency (#CC0000)

Hypothesis: High-contrast colors increase visibility and clicks
Metric: Click rate
Min sample: 500 per variant
```

**Test 3: Button Size**
```
Version A: Small button (40px height)
Version B: Medium button (50px height)
Version C: Large button (60px height)

Hypothesis: Larger buttons are easier to tap on mobile
Metric: Click rate (especially mobile)
Min sample: 500 per variant
```

**Test 4: CTA Placement**
```
Version A: CTA above the fold (top of email)
Version B: CTA below the fold (after content)
Version C: Multiple CTAs (top, middle, bottom)

Hypothesis: Multiple CTAs increase conversion opportunities
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

**Test 5: Button vs. Text Link**
```
Version A: Styled button
Version B: Hyperlinked text ("Click here to shop")

Hypothesis: Buttons outperform text links for primary CTAs
Metric: Click rate
Min sample: 500 per variant
```

---

### 6.3 CTA Best Practices

**DO:**
- ✅ Use action verbs (Shop, Get, Claim, Start)
- ✅ Create urgency when appropriate (Now, Today, Limited)
- ✅ Make buttons touch-friendly (44px+ height)
- ✅ Use contrasting colors for visibility
- ✅ Place primary CTA above the fold

**DON'T:**
- ❌ Use generic text ("Click Here")
- ❌ Make buttons too small (mobile)
- ❌ Use too many CTAs (focus on one primary)
- ❌ Hide CTAs in images only

---

### 6.4 CTA Performance Benchmarks

| Metric | Average | Good | Excellent |
|--------|---------|------|-----------|
| Click-to-Open Rate (CTOR) | 10-15% | 15-20% | 20%+ |
| Overall Click Rate | 2-4% | 4-6% | 6%+ |
| Mobile CTR | 1.5-3% | 3-5% | 5%+ |

---

## 7. DESIGN TESTING

### 7.1 What to Test

**Design Elements:**
- Layout (single column vs. multi-column)
- Template style (minimal vs. detailed)
- Header design (logo + nav vs. logo only)
- Footer design (minimal vs. detailed)
- Dark mode optimization
- GIF usage (static vs. animated)

---

### 7.2 Design Test Templates

**Test 1: Layout**
```
Version A: Single column (mobile-first)
Version B: Multi-column (desktop-optimized)

Hypothesis: Single column performs better overall (mobile majority)
Metric: Click rate, conversion rate (by device)
Min sample: 500 per variant
```

**Test 2: Template Complexity**
```
Version A: Minimal (logo, image, text, CTA)
Version B: Detailed (header, nav, multiple sections, footer links)

Hypothesis: Minimal templates focus attention on primary CTA
Metric: Click rate, conversion rate
Min sample: 500 per variant
```

**Test 3: GIF vs. Static**
```
Version A: Static product image
Version B: Animated GIF (product in use)

Hypothesis: GIFs increase engagement and time spent
Metric: Click rate, time spent (if trackable)
Min sample: 500 per variant
```

**Test 4: Dark Mode**
```
Version A: Standard design
Version B: Dark mode optimized

Hypothesis: Dark mode optimization improves readability for dark mode users
Metric: Click rate (segment by email client if possible)
Min sample: 500 per variant
```

---

### 7.3 Design Best Practices

**DO:**
- ✅ Design mobile-first (60%+ opens on mobile)
- ✅ Use web-safe fonts
- ✅ Keep width under 600px
- ✅ Include alt text for images
- ✅ Test across email clients

**DON'T:**
- ❌ Image-only emails (spam risk, accessibility)
- ❌ Tiny text (under 14px)
- ❌ Complex layouts (break on mobile)
- ❌ Rely on JavaScript (not supported)

---

## 8. OFFER TESTING

### 8.1 What to Test

**Offer Variables:**
- Discount percentage (10% vs. 20% vs. 30%)
- Dollar amount ($10 off vs. 20% off)
- Free shipping threshold
- BOGO (Buy One Get One)
- Gift with purchase
- Time limit (24 hours vs. 7 days)

---

### 8.2 Offer Test Templates

**Test 1: Discount Level**
```
Version A: 15% off
Version B: 25% off
Version C: 30% off

Hypothesis: 25% off maximizes revenue (balance of conversion and margin)
Metric: Conversion rate, revenue per recipient, profit margin
Min sample: 1,000 per variant
```

**Test 2: Percentage vs. Dollar Amount**
```
Version A: 20% off
Version B: $20 off

Hypothesis: Dollar amount better for high AOV, percentage for low AOV
Metric: Conversion rate, AOV, revenue per recipient
Min sample: 1,000 per variant
```

**Test 3: Free Shipping Threshold**
```
Version A: Free shipping on orders $50+
Version B: Free shipping on orders $75+
Version C: Free shipping (no minimum)

Hypothesis: $75 threshold increases AOV without hurting conversion
Metric: Conversion rate, AOV, revenue per recipient
Min sample: 1,000 per variant
```

**Test 4: Urgency**
```
Version A: Sale ends Sunday
Version B: Sale ends tonight at midnight!
Version C: Flash sale: 6 hours only!

Hypothesis: Shorter urgency drives faster action
Metric: Conversion rate, time to purchase
Min sample: 1,000 per variant
```

---

### 8.3 Offer Testing Metrics

**Primary Metrics:**
- Conversion rate
- Revenue per recipient (RPR)
- Average order value (AOV)

**Secondary Metrics:**
- Discount redemption rate
- Profit margin impact
- Long-term customer value

**Calculation:**
```
Revenue Per Recipient = Total Revenue / Number of Recipients

Example:
Version A: $5,000 revenue / 1,000 recipients = $5.00 RPR
Version B: $6,500 revenue / 1,000 recipients = $6.50 RPR

Winner: Version B (+30% RPR)
```

---

## 9. ADVANCED TESTING STRATEGIES

### 9.1 Multivariate Testing

**What it is:** Testing multiple variables simultaneously

**Example:**
- Subject line (2 variants) × CTA color (3 variants) = 6 total combinations

**When to Use:**
- Large lists (100,000+ subscribers)
- High email volume
- Advanced analytics capabilities

**Challenges:**
- Requires much larger sample sizes
- Complex analysis
- Harder to isolate winning elements

---

### 9.2 Sequential Testing

**What it is:** Series of tests building on previous learnings

**Example Flow:**
1. Test subject lines → Find winner
2. Test CTA text (using winning subject) → Find winner
3. Test send time (using winning subject + CTA) → Find winner

**Benefits:**
- Compounding improvements
- Clear learning path
- Manageable sample sizes

---

### 9.3 Holdout Testing

**What it is:** Control group that receives no email

**Purpose:**
- Measure true incremental impact
- Understand email's contribution to revenue
- Avoid over-emailing

**Setup:**
- Randomly select 5-10% of list as holdout
- Exclude from all campaigns for test period (30-90 days)
- Compare purchase behavior

**Calculation:**
```
Incremental Revenue = (Revenue from emailed group) - (Revenue from holdout group)

Example:
Emailed group (90%): $90,000 revenue
Holdout group (10%): $8,000 revenue (scaled to 90% = $72,000)
Incremental revenue: $90,000 - $72,000 = $18,000
```

---

### 9.4 Segmented Testing

**What it is:** Different tests for different segments

**Example:**
- VIP customers: Test exclusive offers
- New subscribers: Test welcome incentives
- At-risk customers: Test winback offers

**Benefits:**
- More relevant tests
- Better insights per segment
- Avoid one-size-fits-all mistakes

---

### 9.5 Long-Term Impact Testing

**What it is:** Measure beyond immediate conversion

**Metrics to Track:**
- 30-day customer value
- Repeat purchase rate
- Unsubscribe rate impact
- Spam complaint rate impact
- Long-term engagement

**Why:** Some tactics boost short-term but hurt long-term (e.g., excessive discounting)

---

## 10. TEST PLANNING TEMPLATE

### A/B Test Plan

**Test Name:** [Descriptive name]

**Date Created:** [Date]

**Owner:** [Team member]

---

**Hypothesis:**
```
We believe that [changing X] will improve [Y metric] because [reason].
```

**Example:**
We believe that adding urgency to subject lines will improve open rates because it creates FOMO and prompts immediate action.

---

**Variables:**
```
Version A (Control): [Description]
Version B (Variant): [Description]
[Version C if applicable]
```

---

**Primary Metric:**
```
[Metric that determines winner]
```

**Secondary Metrics:**
```
[Additional metrics to monitor]
```

---

**Sample Size:**
```
Minimum per variant: [Number]
Confidence level: [90%/95%/99%]
```

---

**Test Duration:**
```
Start date: [Date]
End date: [Date]
Total duration: [X days/hours]
```

---

**Audience:**
```
Segment: [Which segment is being tested]
Size: [Total size]
Split: [50/50, 80/20, etc.]
```

---

**Success Criteria:**
```
Winner determined by: [Primary metric]
Minimum improvement: [X%]
Statistical significance: [90%+]
```

---

**Results:**
```
[To be filled after test completion]

Version A:
- Metric 1: [Value]
- Metric 2: [Value]

Version B:
- Metric 1: [Value]
- Metric 2: [Value]

Winner: [Version]
Confidence: [X%]
Statistical significance: [Yes/No]
```

---

**Learnings:**
```
[What was learned from this test]
```

---

**Action Items:**
```
[What will be implemented based on results]
```

---

## 11. RESULTS ANALYSIS FRAMEWORK

### 11.1 Analysis Checklist

**Before Declaring a Winner:**
- [ ] Statistical significance reached (90%+ confidence)
- [ ] Minimum sample size achieved
- [ ] Test ran for full duration
- [ ] No external factors skewed results (holiday, outage, etc.)
- [ ] Results consistent across segments (if segmented)

---

### 11.2 Results Interpretation

**Clear Winner:**
- Statistically significant (90%+ confidence)
- Meaningful improvement (5%+ on primary metric)
- **Action:** Implement immediately

**No Clear Winner:**
- Not statistically significant
- Or improvement too small to matter
- **Action:** Keep control, test new variant

**Unexpected Results:**
- Variant performed worse than expected
- Or secondary metrics moved negatively
- **Action:** Investigate why, learn, iterate

---

### 11.3 Results Documentation

**Test Report Template:**

```
TEST REPORT: [Test Name]
Date: [Completion Date]

SUMMARY:
- Hypothesis: [Original hypothesis]
- Result: [Confirmed/Rejected/Inconclusive]
- Winner: [Version A/B/No winner]

METRICS:
| Metric | Version A | Version B | % Change |
|--------|-----------|-----------|----------|
| Open Rate | X% | Y% | +Z% |
| Click Rate | X% | Y% | +Z% |
| Conversion | X% | Y% | +Z% |
| Revenue/Recipient | $X | $Y | +Z% |

STATISTICAL SIGNIFICANCE:
- Confidence level: X%
- Sample size: X per variant
- Test duration: X days

LEARNINGS:
[Key insights from test]

NEXT STEPS:
[Implementation plan]
[Follow-up tests]
```

---

### 11.4 Building a Testing Roadmap

**Quarterly Planning:**

| Quarter | Focus Area | Tests Planned |
|---------|------------|---------------|
| Q1 | Subject Lines | 4 tests |
| Q2 | Send Time | 3 tests |
| Q3 | Content/Design | 4 tests |
| Q4 | Offers/CTA | 4 tests |

**Annual Goal:**
- Minimum 15-20 tests per year
- At least 50% should show improvement
- Document all learnings (even failures)

---

## TESTING CALENDAR TEMPLATE

### Monthly Testing Schedule

**Week 1:**
- [ ] Launch Test #1: [Subject line test]
- [ ] Monitor Test #1 results

**Week 2:**
- [ ] Analyze Test #1 results
- [ ] Launch Test #2: [Send time test]
- [ ] Implement Test #1 winner

**Week 3:**
- [ ] Monitor Test #2 results
- [ ] Launch Test #3: [CTA test]

**Week 4:**
- [ ] Analyze Test #2 results
- [ ] Monitor Test #3 results
- [ ] Plan next month's tests

---

## KLAVIYO A/B TESTING SETUP

### Creating A/B Test in Klaviyo

1. **Create Campaign**
   - Click "Create Campaign"
   - Choose email type

2. **Enable A/B Test**
   - Toggle "A/B Test" on
   - Select what to test (Subject, From, Send Time, Content)

3. **Configure Variants**
   - Version A (Control)
   - Version B (Variant)
   - [Version C if available]

4. **Set Test Parameters**
   - Test size (% of list)
   - Wait time (how long before sending winner)
   - Metric to determine winner

5. **Review and Schedule**
   - Review both versions
   - Schedule send time
   - Launch test

### Recommended Klaviyo Settings

**For Subject Line Tests:**
- Test size: 20-30% of list
- Wait time: 4 hours
- Winning metric: Open rate

**For Content Tests:**
- Test size: 20-30% of list
- Wait time: 4-6 hours
- Winning metric: Click rate

**For Send Time Tests:**
- Test size: Equal splits
- Wait time: N/A (send at different times)
- Winning metric: Open rate OR click rate

---

## COMMON TESTING MISTAKES TO AVOID

1. **Testing too many variables at once**
   - Can't isolate what caused change

2. **Stopping tests too early**
   - Results not statistically significant

3. **Insufficient sample size**
   - Results may be random chance

4. **Not documenting results**
   - Can't build on learnings

5. **Ignoring secondary metrics**
   - Winner might hurt other important metrics

6. **Testing during unusual periods**
   - Holidays, sales, events skew results

7. **Not implementing winners**
   - Wasted test if learnings aren't applied

8. **Testing too frequently**
   - Audience fatigue, list burnout

---

*This framework should be reviewed quarterly and updated based on new testing methodologies and platform capabilities.*
