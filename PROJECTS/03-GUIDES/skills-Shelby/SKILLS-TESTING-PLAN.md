# OpenClaw Skills Testing Plan

**Date:** March 24, 2026  
**Tester:** Shelby  
**Goal:** Test 13 core skills for functionality, errors, and user experience

---

## Skills to Test (13)

| # | Skill | Category | Test Type | Priority |
|---|-------|----------|-----------|----------|
| 1 | `weather` | Utility | Live API call | P1 |
| 2 | `crypto-prices` | Utility | Live API call | P1 |
| 3 | `currency-convert` | Utility | Live API call | P1 |
| 4 | `summarize` | Content | URL/file test | P1 |
| 5 | `markitdown` | Content | File conversion | P1 |
| 6 | `gog` | Google Workspace | Auth + read test | P1 |
| 7 | `notion-api` | Productivity | Database query | P2 |
| 8 | `github-pages-auto-deploy` | Deployment | Deploy test | P2 |
| 9 | `gumroad-pro` | Sales | API connection | P2 |
| 10 | `facebook-page-manager` | Social | Page read test | P2 |
| 11 | `instagram-content-generation` | Social | Content gen test | P2 |
| 12 | `linkedin` | Social | Profile/connection test | P3 |
| 13 | `geo-seo` | SEO | Audit test | P2 |

---

## Testing Checklist

### For Each Skill:

- [ ] **Installation Check** — Skill folder exists, SKILL.md present
- [ ] **Dependencies** — Required binaries/packages installed
- [ ] **Authentication** — API keys/configured (if needed)
- [ ] **Basic Function Test** — Core functionality works
- [ ] **Error Handling** — Graceful failures on bad input
- [ ] **Output Quality** — Results are useful and accurate
- [ ] **Documentation** — SKILL.md is clear and complete

---

## Test Results Template

```markdown
### Skill: [name]

**Date Tested:** YYYY-MM-DD  
**Tester:** [name]  
**Status:** ✅ Pass / ❌ Fail / ⚠️ Partial

**Tests Run:**
1. [Test description] — ✅/❌
2. [Test description] — ✅/❌

**Issues Found:**
- [Issue description]

**Notes:**
- [Any observations]

**Recommendation:** [Deploy as-is / Fix before deploy / Remove]
```

---

## Execution Plan

### Phase 1: Utility Skills (No Auth Required)
**Time:** ~30 minutes

1. **weather** — Test current weather + forecast
2. **crypto-prices** — Test BTC, ETH prices
3. **currency-convert** — Test USD→EUR, GBP→USD
4. **summarize** — Test URL summarization
5. **markitdown** — Test file conversion

### Phase 2: Google/Productivity (Auth Required)
**Time:** ~45 minutes

6. **gog** — Test Gmail/Calendar/Drive read
7. **notion-api** — Test database query
8. **github-pages-auto-deploy** — Test deployment

### Phase 3: Sales/Social (Auth Required)
**Time:** ~45 minutes

9. **gumroad-pro** — Test product read
10. **facebook-page-manager** — Test page read
11. **instagram-content-generation** — Test content gen
12. **linkedin** — Test profile read

### Phase 4: SEO
**Time:** ~30 minutes

13. **geo-seo** — Test website audit

---

## Success Criteria

| Criteria | Pass | Fail |
|----------|------|------|
| **Functionality** | Core feature works | Feature broken |
| **Errors** | Graceful handling | Crashes/hangs |
| **Output** | Useful, accurate | Wrong/useless |
| **Speed** | <10 seconds | >30 seconds |
| **Docs** | Clear SKILL.md | Missing/unclear |

**Overall Pass:** 4/5 criteria met  
**Overall Fail:** 3+ criteria failed

---

## Issues Log

| Skill | Issue | Severity | Fix | Status |
|-------|-------|----------|-----|--------|
| | | | | |

---

## Final Report

**Skills Tested:** 13  
**Passed:** TBD  
**Failed:** TBD  
**Needs Fixes:** TBD  

**Recommendation:** [Deploy all / Deploy X / Fix Y first]

---

*Testing started: March 24, 2026 13:40 UTC*
