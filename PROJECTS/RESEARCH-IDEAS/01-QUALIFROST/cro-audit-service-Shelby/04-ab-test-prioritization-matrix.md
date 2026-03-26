# A/B Test Prioritization Matrix
## Impact vs. Effort Scoring Framework

**Client**: ________________________  
**Created By**: ________________________  
**Date**: ________________________  
**Review Date**: ________________________  

---

## 🎯 SCORING METHODOLOGY

### The PIE Framework (Recommended)

Developed by WiderFunnel, PIE scores each test on three dimensions:

| Factor | Weight | Description |
|--------|--------|-------------|
| **P**otential | 40% | How much improvement is possible? |
| **I**mportance | 40% | How valuable is the page/traffic? |
| **E**ase | 20% | How easy is it to implement? |

**Formula**: `PIE Score = (P × 0.4) + (I × 0.4) + (E × 0.2)`

---

### Scoring Scales

#### Potential (1-10)
| Score | Criteria |
|-------|----------|
| 9-10 | Major usability issue, clear best practice violation |
| 7-8 | Significant friction, strong hypothesis |
| 5-6 | Moderate issue, reasonable hypothesis |
| 3-4 | Minor issue, weak hypothesis |
| 1-2 | Negligible issue, speculative |

#### Importance (1-10)
| Score | Criteria |
|-------|----------|
| 9-10 | Homepage, pricing, checkout, high-traffic pages |
| 7-8 | Key landing pages, product pages |
| 5-6 | Supporting pages, moderate traffic |
| 3-4 | Low-traffic pages, secondary flows |
| 1-2 | Rarely visited pages |

#### Ease (1-10)
| Score | Criteria |
|-------|----------|
| 9-10 | Copy change, no dev needed, <1 day |
| 7-8 | Simple design change, 1-2 days |
| 5-6 | Moderate dev work, 3-5 days |
| 3-4 | Complex change, 1-2 weeks |
| 1-2 | Major development, 2+ weeks |

---

## 📊 PRIORITIZATION MATRIX TEMPLATE

### Test Backlog

| ID | Test Name | Page | Hypothesis | Potential | Importance | Ease | PIE Score | Priority |
|----|-----------|------|------------|-----------|------------|------|-----------|----------|
| T01 | | | | /10 | /10 | /10 | | |
| T02 | | | | /10 | /10 | /10 | | |
| T03 | | | | /10 | /10 | /10 | | |
| T04 | | | | /10 | /10 | /10 | | |
| T05 | | | | /10 | /10 | /10 | | |
| T06 | | | | /10 | /10 | /10 | | |
| T07 | | | | /10 | /10 | /10 | | |
| T08 | | | | /10 | /10 | /10 | | |
| T09 | | | | /10 | /10 | /10 | | |
| T10 | | | | /10 | /10 | /10 | | |

**Priority Legend:**
- 🔴 **High** (PIE Score 7.5+): Run immediately
- 🟡 **Medium** (PIE Score 5.0-7.4): Schedule for next sprint
- 🟢 **Low** (PIE Score <5.0): Backlog for later

---

## 🎯 IMPACT VS. EFFORT MATRIX (Visual)

```
                    IMPACT VS. EFFORT MATRIX
                            
    HIGH IMPACT │  ┌─────────┬─────────┐
                │  │  QUICK  │  MAJOR  │
                │  │  WINS   │ PROJECTS│
                │  │  (Do    │  (Plan  │
                │  │   Now)  │   Carefully)
                │  ├─────────┼─────────┤
                │  │  FILL-  │  TIME   │
                │  │  INS    │  WASTERS│
                │  │  (If    │  (Avoid │
                │  │   Time) │   or    │
                │  │         │   Reject)
                │  └─────────┴─────────┘
    LOW IMPACT  │
                └─────────────────────────
                  LOW      MEDIUM    HIGH
                          EFFORT
```

### Quadrant Definitions

#### 🚀 Quick Wins (High Impact, Low Effort)
**Action**: Do these first
**Examples**: 
- CTA copy changes
- Button color tests
- Headline variations
- Trust badge additions

#### 📋 Major Projects (High Impact, High Effort)
**Action**: Plan carefully, allocate resources
**Examples**:
- Checkout flow redesign
- New landing page creation
- Mobile experience overhaul
- Pricing page restructuring

#### 📝 Fill-Ins (Low Impact, Low Effort)
**Action**: Do when you have spare capacity
**Examples**:
- Minor copy tweaks
- Image swaps
- Form field reordering

#### ⏰ Time Wasters (Low Impact, High Effort)
**Action**: Avoid or reject
**Examples**:
- Complete site redesign without data
- Adding features nobody asked for
- Changing what already works well

---

## 📋 DETAILED TEST CARDS

### Test Card Template

Copy this template for each test in your backlog:

---

#### TEST #___: [Test Name]

**Status**: Backlog | Planned | Running | Completed | Won | Lost | Inconclusive

**Page URL**: ________________________

**Traffic Allocation**: ___% of visitors

**Current Conversion Rate**: ___%

**Minimum Detectable Effect**: ___%

**Sample Size Needed**: ___ visitors per variant

**Estimated Duration**: ___ days/weeks

---

**Hypothesis Statement**:
```
We believe that [changing X to Y] for [this audience]
will result in [this outcome].

We will know this is true when we see [metric] 
increase by [X]%.
```

---

**Supporting Evidence**:
- [ ] Analytics data (describe):
- [ ] Heatmap/session recording findings:
- [ ] User feedback/surveys:
- [ ] Best practice research:
- [ ] Competitor analysis:
- [ ] Other:

---

**Variables**:

| Element | Control (A) | Variant (B) |
|---------|-------------|-------------|
| | | |
| | | |
| | | |

---

**Success Metrics**:

| Metric | Type | Current | Goal |
|--------|------|---------|------|
| | Primary | | |
| | Secondary | | |
| | Guardrail | | |

---

**Implementation Requirements**:

| Task | Owner | Estimated Time | Status |
|------|-------|----------------|--------|
| Design | | | |
| Development | | | |
| QA | | | |
| Analytics Setup | | | |

---

**Risk Assessment**:
- [ ] Low risk (cosmetic changes only)
- [ ] Medium risk (functional changes, reversible)
- [ ] High risk (checkout/payment changes)

**Mitigation Plan**:
```


```

---

**Results** (Complete after test):

| Metric | Control | Variant | Change | Significance |
|--------|---------|---------|--------|--------------|
| Conversion Rate | % | % | % | |
| Revenue/Visitor | $ | $ | % | |
| AOV | $ | $ | % | |
| Bounce Rate | % | % | % | |

**Winner**: ☐ Control ☐ Variant ☐ Inconclusive

**Learnings**:
```


```

**Follow-up Tests**:
```


```

---

## 📅 TEST CALENDAR

### Monthly Test Schedule

| Week | Test Name | Page | Status | Owner | Notes |
|------|-----------|------|--------|-------|-------|
| Week 1 | | | | | |
| Week 2 | | | | | |
| Week 3 | | | | | |
| Week 4 | | | | | |

### Quarterly Roadmap

| Quarter | Tests Planned | Tests Completed | Win Rate | Key Learnings |
|---------|---------------|-----------------|----------|---------------|
| Q1 | | | | |
| Q2 | | | | |
| Q3 | | | | |
| Q4 | | | | |

---

## 🧮 SAMPLE SIZE CALCULATOR

Use this formula or an online calculator:

**Required Sample Size per Variant**:
```
n = (Zα/2 + Zβ)² × (p₁(1-p₁) + p₂(1-p₂)) / (p₁ - p₂)²

Where:
- Zα/2 = 1.96 (for 95% confidence)
- Zβ = 0.84 (for 80% power)
- p₁ = Current conversion rate
- p₂ = Expected conversion rate (current + MDE)
```

**Quick Reference Table**:

| Current CR | MDE | Sample Size/Variant | Duration* |
|------------|-----|---------------------|-----------|
| 2% | 10% | 39,000 | 39 days |
| 2% | 20% | 9,500 | 10 days |
| 2% | 30% | 4,200 | 4 days |
| 5% | 10% | 16,000 | 16 days |
| 5% | 20% | 3,900 | 4 days |
| 5% | 30% | 1,700 | 2 days |
| 10% | 10% | 8,000 | 8 days |
| 10% | 20% | 2,000 | 2 days |

*Assumes 1,000 visitors/day

---

## 📊 TEST RESULTS TRACKER

### Completed Tests Summary

| Test ID | Name | Date | Winner | Lift | Significance | Learnings Applied |
|---------|------|------|--------|------|--------------|-------------------|
| | | | | % | | |
| | | | | % | | |
| | | | | % | | |
| | | | | % | | |
| | | | | % | | |

**Overall Win Rate**: ___%

**Average Lift from Winners**: ___%

**Cumulative Impact**: ___% improvement in conversion rate

---

## 🎓 LEARNING LOG

Capture insights from every test, win or lose:

### Key Learnings

| Learning | Supporting Tests | Implications |
|----------|-----------------|--------------|
| | | |
| | | |
| | | |

### Patterns Discovered

```
What consistent patterns have emerged from testing?


What audience segments respond differently?


What channels show different behaviors?


```

### Hypotheses Validated

```
Which assumptions were confirmed?


```

### Hypotheses Invalidated

```
Which assumptions were proven wrong?


```

---

## 📈 PROGRAM MATURITY ASSESSMENT

Rate your CRO program maturity:

| Level | Characteristics | Your Status |
|-------|-----------------|-------------|
| **Level 1: Ad Hoc** | Occasional tests, no process, no dedicated resources | ☐ |
| **Level 2: Emerging** | Regular tests, basic process, part-time owner | ☐ |
| **Level 3: Defined** | Documented process, dedicated owner, monthly tests | ☐ |
| **Level 4: Managed** | Predictable cadence, cross-functional team, quarterly roadmap | ☐ |
| **Level 5: Optimizing** | Continuous testing, advanced segmentation, personalization | ☐ |

**Next Level Actions**:
```
What do you need to do to advance one level?


```

---

## 📎 APPENDIX

### Tools & Resources

**A/B Testing Platforms**:
- Optimizely
- VWO
- Google Optimize (alternative needed post-sunset)
- Adobe Target
- AB Tasty

**Sample Size Calculators**:
- Evan Miller: https://www.evanmiller.org/ab-testing/sample-size.html
- Optimizely: https://www.optimizely.com/sample-size-calculator/

**Statistical Significance**:
- A/B Test Calculator: https://abtestguide.com/calc/

---

**Document Owner**: ________________________  
**Last Updated**: ________________________  
**Next Review**: ________________________  

---

*This template is part of the CRO Audit Service package.*
