# Project 001: CV Templates Etsy Shop

**Status:** 🚀 EXECUTING  
**Priority:** P1 (Critical)  
**Started:** 2026-03-31 15:56 UTC  
**Human Green Light:** "yes go on then" — Charmaine, 15:56 UTC

---

## 📋 OVERVIEW

**Goal:** Create Etsy shop and upload 5-10 CV template listings  
**Assets:** 320 CV templates ready in `PROJECTS/08-REVENUE/shops/cv-templates-etsy/`  
**Time Estimate:** 2-3 hours  
**Revenue Potential:** $10-25 per template, passive income

---

## 🎯 SUB-AGENT TASK BREAKDOWN

### Agent 1: Shop Setup
**Role:** Research + create Etsy shop  
**Skills:** Web research, form filling, OAuth  
**Tasks:**
- [ ] Research Etsy seller requirements
- [ ] Research Etsy fees (listing + transaction)
- [ ] Check if Charmaine has existing Etsy account
- [ ] Create shop account (or guide Charmaine)
- [ ] Configure shop settings (name, policies, banking)

**Status:** ⏳ In Progress  
**Blocked By:** Need to know if Etsy account exists

---

### Agent 2: Market Research + Pricing
**Role:** Competitive analysis + pricing strategy  
**Skills:** Market research, data analysis  
**Tasks:**
- [x] Research competitor CV template shops
- [x] Analyze pricing ($5-15 individual, bundles higher)
- [x] Identify best-selling formats
- [ ] Recommend pricing strategy
- [ ] Write positioning/differentiation

**Status:** 🔄 In Progress (60%)  
**Blocked By:** None

**Research Findings:**
- **Price Range:** $5-15 per template, bundles $15-50+
- **Fees:** ~10-11% without offsite ads ($0.20 listing + 6.5% transaction + 3%+$0.25 processing)
- **Strategy:** Tiered pricing (basic/premium/bundle), opt out of offsite ads initially

---

### Agent 3: Listing Creation
**Role:** Write 10 listing titles + descriptions  
**Skills:** Copywriting, SEO, Etsy optimization  
**Tasks:**
- [x] Select best 10 templates from 320
- [x] Write SEO-optimized titles
- [x] Write compelling descriptions
- [x] Add relevant tags (13 per listing)
- [x] Create pricing for each

**Status:** ✅ COMPLETE  
**Output:** `listings/01-listing-drafts.md` (10 full listings)

---

### Agent 4: Visual Assets
**Role:** Create listing mockup images  
**Skills:** Design, image generation prompts  
**Tasks:**
- [ ] Create prompts for CV mockup images (50+ images total)
- [ ] Generate 5-7 mockup images per listing
- [ ] Format for Etsy (min 2000px width)
- [ ] Organize by listing

**Status:** ⏳ In Progress (prompts next)  
**Blocked By:** None

---

### Agent 5: Upload + Launch
**Role:** Upload listings to Etsy  
**Skills:** Etsy API or manual upload  
**Tasks:**
- [ ] Upload 10 listings
- [ ] Add images to each
- [ ] Set pricing
- [ ] Publish shop
- [ ] Test checkout flow

**Status:** ⏳ Queued  
**Blocked By:** Agents 3 + 4 (listings + images ready)

---

## 📊 PROGRESS TRACKER

| Phase | Tasks | Complete | In Progress | Blocked |
|-------|-------|----------|-------------|---------|
| Shop Setup | 5 | 0 | 1 | 0 |
| Market Research | 5 | 5 | 0 | 0 |
| Listing Creation | 5 | 5 | 0 | 0 |
| Visual Assets | 4 | 0 | 1 | 0 |
| Upload + Launch | 5 | 0 | 0 | 0 |
| **TOTAL** | **24** | **10** | **2** | **0** |

---

## 🙋 HUMAN DEPENDENCIES

| Task | Who | Status | Notes |
|------|-----|--------|-------|
| Confirm Etsy account status | Charmaine | ⏳ Pending | Do you have an Etsy account? |
| Approve shop name | Charmaine | ⏳ Pending | Will propose options |
| Banking/payout setup | Charmaine | ⏳ Pending | Required for payments |

---

## 📁 FILES

| File | Purpose | Status |
|------|---------|--------|
| `planning-tracker.md` | This file | ✅ Created |
| `research/` | Market research data | ⏳ In Progress |
| `listings/` | Listing drafts | ⏳ Queued |
| `images/` | Mockup images | ⏳ Queued |
| `templates/` | CV templates (source) | ✅ Ready (320 files) |

---

## 🎯 SUCCESS CRITERIA

- [ ] Etsy shop created and published
- [ ] 5-10 listings live
- [ ] All images uploaded
- [ ] Payment processing configured
- [ ] First sale made (ultimate success!)

---

**Last Updated:** 2026-03-31 17:05 UTC  
**Next Update:** 2026-03-31 17:15 UTC  
**Agent:** Shelby (Orchestrator)
