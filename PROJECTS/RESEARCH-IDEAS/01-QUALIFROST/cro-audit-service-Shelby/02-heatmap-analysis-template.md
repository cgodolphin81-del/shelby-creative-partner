# Heatmap Analysis Template
## Interpreting Hotjar, Crazy Egg, Microsoft Clarity & Session Recordings

**Client**: ________________________  
**Analyst**: ________________________  
**Date Range**: ________________________  
**Pages Analyzed**: ________________________  

---

## 🔥 HEATMAP TYPES EXPLAINED

### 1. Click Heatmaps
Shows where users click/tap most frequently.

**What to Look For:**
- 🔴 **Red zones**: High click concentration (attention hotspots)
- 🟡 **Yellow zones**: Moderate engagement
- 🔵 **Blue zones**: Low/no interaction

**Red Flags:**
- Clicks on non-clickable elements (indicates false affordance)
- Ignored CTAs (cold spots on buttons)
- "Rage clicks" (repeated clicking in same area = frustration)

---

### 2. Scroll Heatmaps
Shows how far down the page users scroll.

**What to Look For:**
- **Fold line**: Where 50% of users stop scrolling
- **Drop-off points**: Sharp decreases in scroll depth
- **Content engagement**: Which sections hold attention

**Key Metrics:**
| Metric | Good | Concerning | Critical |
|--------|------|------------|----------|
| 50% scroll depth | Below fold | At fold | Above fold |
| 90% scroll depth | Near bottom | Middle of page | Top third |
| Average scroll % | 60%+ | 40-60% | <40% |

---

### 3. Move Heatmaps (Desktop)
Tracks mouse movement patterns (correlates with eye tracking).

**What to Look For:**
- Reading patterns (F-pattern, Z-pattern)
- Areas where cursor pauses (indicates reading/consideration)
- Areas cursor skips entirely

---

### 4. Attention Heatmaps (AI-Enhanced)
Predicts visual attention based on design elements.

**What to Look For:**
- Does attention align with key messages?
- Is the CTA in a high-attention zone?
- Are trust signals being noticed?

---

## 📊 ANALYSIS WORKSHEET

### Page: ________________________

#### A. Click Analysis

| Element | Expected Clicks | Actual Clicks | Status | Notes |
|---------|-----------------|---------------|--------|-------|
| Primary CTA | High | | ✅ ⚠️ ❌ | |
| Secondary CTA | Medium | | ✅ ⚠️ ❌ | |
| Navigation links | Medium | | ✅ ⚠️ ❌ | |
| Non-clickable images | None | | ✅ ⚠️ ❌ | |
| Trust badges | Low-Medium | | ✅ ⚠️ ❌ | |
| Footer links | Low | | ✅ ⚠️ ❌ | |

**Click Insights:**
```
What unexpected elements are users clicking?


Are CTAs receiving appropriate attention?


Any signs of confusion or misclicks?


```

---

#### B. Scroll Analysis

| Section | % Users Who Reached | Time Spent | Action |
|---------|---------------------|------------|--------|
| Hero (0-25%) | | | |
| Features (25-50%) | | | |
| Social Proof (50-75%) | | | |
| CTA Section (75-100%) | | | |
| Footer | | | |

**Scroll Insights:**
```
Where is the biggest drop-off point?


Is critical content above or below the drop-off?


Should content be reordered?


```

---

#### C. Session Recording Observations

**Watch at least 10-20 recordings per page type.**

| Recording # | Device | Behavior Observed | Frustration Signs | Conversion Outcome |
|-------------|--------|-------------------|-------------------|-------------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |

**Frustration Signs Checklist:**
- [ ] Rapid/erratic mouse movements
- [ ] Repeated clicking (rage clicks)
- [ ] Form field abandonment
- [ ] Back/forward navigation loops
- [ ] Long pauses before actions
- [ ] Zooming in/out repeatedly
- [ ] Hitting browser back button

**Common Patterns Observed:**
```
1.


2.


3.


```

---

## 🎯 WHAT TO LOOK FOR BY PAGE TYPE

### Homepage
- [ ] Do users scroll to value proposition?
- [ ] Is primary CTA getting clicks?
- [ ] Are navigation paths clear?
- [ ] Do users explore beyond homepage?

### Product/Service Pages
- [ ] Do users view pricing information?
- [ ] Are feature sections being read?
- [ ] Is social proof section reached?
- [ ] CTA click-through rate?

### Pricing Page
- [ ] Which plan gets most attention?
- [ ] Do users compare plans (back/forth)?
- [ ] Is FAQ section being used?
- [ ] Where do users drop off?

### Checkout/Form Pages
- [ ] Which fields cause hesitation?
- [ ] At what step do users abandon?
- [ ] Are error messages being read?
- [ ] Do users return after abandonment?

### Blog/Content Pages
- [ ] How far do users read?
- [ ] Are internal links clicked?
- [ ] Do users reach content upgrades?
- [ ] Is related content being explored?

---

## 📈 ACTIONABLE INSIGHTS TEMPLATE

### Insight #1: [Brief Description]

**Evidence:**
- Heatmap observation:
- Session recording example:
- Quantitative data:

**Hypothesis:**
```
Users are [behavior] because [reason]. If we [change], 
then [outcome] because [rationale].
```

**Recommended Test:**
- Type: A/B Test | Multivariate | Usability Fix
- Priority: High | Medium | Low
- Estimated Impact: ___%

---

### Insight #2: [Brief Description]

**Evidence:**
- Heatmap observation:
- Session recording example:
- Quantitative data:

**Hypothesis:**
```
Users are [behavior] because [reason]. If we [change], 
then [outcome] because [rationale].
```

**Recommended Test:**
- Type: A/B Test | Multivariate | Usability Fix
- Priority: High | Medium | Low
- Estimated Impact: ___%

---

### Insight #3: [Brief Description]

**Evidence:**
- Heatmap observation:
- Session recording example:
- Quantitative data:

**Hypothesis:**
```
Users are [behavior] because [reason]. If we [change], 
then [outcome] because [rationale].
```

**Recommended Test:**
- Type: A/B Test | Multivariate | Usability Fix
- Priority: High | Medium | Low
- Estimated Impact: ___%

---

## 🔧 TECHNICAL SETUP CHECKLIST

### Hotjar
- [ ] Tracking code installed on all pages
- [ ] Heatmaps configured for key pages
- [ ] Recordings set to capture 100+ sessions/day
- [ ] Funnels created for key user flows
- [ ] Feedback widgets deployed

### Microsoft Clarity (Free Alternative)
- [ ] Clarity code installed
- [ ] Custom tags configured
- [ ] Rage click detection enabled
- [ ] Dead click detection enabled
- [ ] Session recording retention set

### Crazy Egg
- [ ] Snapshot created for each key page
- [ ] A/B testing integration configured
- [ ] Confetti report enabled for segmentation
- [ ] Scrollmap configured
- [ ] List report for click data export

---

## 📋 HEATMAP ANALYSIS REPORT STRUCTURE

Use this structure when presenting findings to clients:

1. **Executive Summary** (1 page)
   - Key findings
   - Top 3 opportunities
   - Recommended next steps

2. **Methodology** (1 page)
   - Tools used
   - Date range
   - Sample size
   - Pages analyzed

3. **Page-by-Page Analysis** (2-3 pages per page)
   - Screenshots with annotations
   - Key metrics
   - Observed behaviors
   - Recommendations

4. **Session Recording Highlights** (1-2 pages)
   - Notable patterns
   - Frustration points
   - Success moments

5. **Prioritized Recommendations** (1-2 pages)
   - Quick wins (1-2 weeks)
   - Strategic initiatives (1-3 months)
   - Test backlog

6. **Appendix**
   - Raw data exports
   - Additional screenshots
   - Technical notes

---

**Analysis Completed By**: ________________________  
**Date**: ________________________  
**Next Review Date**: ________________________  

---

*This template is part of the CRO Audit Service package.*
