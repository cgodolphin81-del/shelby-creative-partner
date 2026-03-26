# Build Timeline

## GEO SEO Crawler Platform - Week-by-Week MVP Roadmap

---

## Overview

| Phase | Duration | Goal |
|-------|----------|------|
| **Phase 1** | Weeks 1-4 | Core Crawler Infrastructure |
| **Phase 2** | Weeks 5-8 | Dashboard & User Features |
| **Phase 3** | Weeks 9-12 | Analytics & Polish |
| **Launch** | Week 13 | MVP Release |

**Total MVP Timeline: 12-13 weeks (3 months)**

---

## Phase 1: Core Crawler Infrastructure (Weeks 1-4)

### Week 1: Project Setup & PinchTab Integration

**Goals:**
- Development environment ready
- PinchTab deployed and tested
- Basic database schema deployed

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Project scaffolding (FastAPI + Next.js) | 4 | Backend |
| Mon | Docker Compose setup (PostgreSQL, Redis, Weaviate) | 4 | DevOps |
| Tue | PinchTab deployment & testing | 6 | Backend |
| Tue | Database schema migration scripts | 2 | Backend |
| Wed | FastAPI auth system (JWT) | 6 | Backend |
| Wed | Weaviate collection setup | 2 | Backend |
| Thu | PinchTab navigation wrapper | 4 | Backend |
| Thu | PinchTab snapshot extraction | 4 | Backend |
| Fri | Integration tests | 4 | QA |
| Fri | Documentation | 4 | All |

**Deliverables:**
- ✅ Working development environment
- ✅ PinchTab responding to API calls
- ✅ Database migrations runnable
- ✅ Auth endpoints functional

**Risks:**
- PinchTab compatibility issues → Mitigation: Test early, have Playwright fallback
- Docker networking issues → Mitigation: Use documented configs

---

### Week 2: Crawler Engine Development

**Goals:**
- Celery worker processing jobs
- Rate limiting implemented
- Google AI Overviews crawler functional

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Celery configuration with Redis | 4 | Backend |
| Mon | Job queue schema & models | 4 | Backend |
| Tue | Crawl job state machine | 6 | Backend |
| Tue | Retry logic with backoff | 2 | Backend |
| Wed | Rate limiting middleware | 4 | Backend |
| Wed | Google AI Overviews URL construction | 4 | Backend |
| Thu | Google citation parser | 6 | Backend |
| Thu | Data normalization pipeline | 2 | Backend |
| Fri | Error handling & logging | 4 | Backend |
| Fri | Manual testing with 10 keywords | 4 | QA |

**Deliverables:**
- ✅ Crawl jobs can be created and queued
- ✅ Workers process jobs with retries
- ✅ Google AI Overviews data extracted
- ✅ Results stored in PostgreSQL

**Acceptance Criteria:**
- Can crawl 50 keywords without rate limit issues
- Citation extraction accuracy > 85%
- Failed jobs retry correctly

---

### Week 3: Additional Platform Crawlers

**Goals:**
- Bing Copilot crawler
- Perplexity crawler
- Unified results API

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Bing Copilot URL & selectors | 4 | Backend |
| Mon | Bing citation parser | 4 | Backend |
| Tue | Perplexity URL & selectors | 4 | Backend |
| Tue | Perplexity source parser | 4 | Backend |
| Wed | Unified crawl result schema | 4 | Backend |
| Wed | Embedding generation (OpenAI) | 4 | Backend |
| Thu | Weaviate storage integration | 4 | Backend |
| Thu | API: GET /crawl-results | 4 | Backend |
| Fri | API: GET /crawl-jobs | 4 | Backend |
| Fri | Cross-platform testing | 4 | QA |

**Deliverables:**
- ✅ Bing Copilot crawler functional
- ✅ Perplexity crawler functional
- ✅ Embeddings stored in Weaviate
- ✅ Results API queryable

**Acceptance Criteria:**
- All 3 platforms crawl successfully
- Embedding generation < 500ms per result
- API returns results in < 200ms

---

### Week 4: Site & Keyword Management

**Goals:**
- Tracked sites CRUD
- Keyword management
- Basic scheduling

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | API: POST/GET/PUT/DELETE /sites | 6 | Backend |
| Mon | Site validation (domain uniqueness) | 2 | Backend |
| Tue | API: Keywords CRUD | 6 | Backend |
| Tue | Bulk keyword import (CSV) | 2 | Backend |
| Wed | Scheduled jobs (cron) | 6 | Backend |
| Wed | Job priority queue | 2 | Backend |
| Thu | API integration testing | 6 | QA |
| Thu | API documentation (OpenAPI) | 2 | Backend |
| Fri | Bug fixes | 6 | All |
| Fri | Phase 1 demo prep | 2 | All |

**Deliverables:**
- ✅ Full Sites API
- ✅ Full Keywords API
- ✅ Scheduled crawl jobs
- ✅ OpenAPI documentation

**Phase 1 Review (Friday PM):**
- Demo: Crawl 100 keywords across 3 platforms
- Review: Code quality, test coverage
- Decide: Proceed to Phase 2

---

## Phase 2: Dashboard & User Features (Weeks 5-8)

### Week 5: Next.js Dashboard Foundation

**Goals:**
- Next.js app deployed
- Authentication UI
- Layout with navigation

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Next.js 14 project setup | 4 | Frontend |
| Mon | shadcn/ui installation | 2 | Frontend |
| Tue | Auth pages (login, register) | 6 | Frontend |
| Tue | JWT token handling | 2 | Frontend |
| Wed | Dashboard layout (sidebar, topbar) | 6 | Frontend |
| Wed | Responsive navigation | 2 | Frontend |
| Thu | Route protection (auth guard) | 4 | Frontend |
| Thu | User profile page | 4 | Frontend |
| Fri | API integration (auth endpoints) | 4 | Frontend |
| Fri | Styling polish | 4 | Frontend |

**Deliverables:**
- ✅ Deployed Next.js app (Vercel/staging)
- ✅ Login/register flow working
- ✅ Protected routes functional
- ✅ Responsive layout

---

### Week 6: Sites & Keywords UI

**Goals:**
- Sites management interface
- Keywords management
- Add/edit forms

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Sites list page | 6 | Frontend |
| Mon | Sites table with sorting | 2 | Frontend |
| Tue | Add site modal | 4 | Frontend |
| Tue | Edit site form | 4 | Frontend |
| Wed | Keywords list page | 6 | Frontend |
| Wed | Keyword import UI | 2 | Frontend |
| Thu | Site detail page | 6 | Frontend |
| Thu | Platform breakdown chart | 2 | Frontend |
| Fri | API integration | 6 | Frontend |
| Fri | Bug fixes | 2 | Frontend |

**Deliverables:**
- ✅ Full sites CRUD UI
- ✅ Keywords management UI
- ✅ Site detail view with stats

---

### Week 7: Crawl Jobs UI

**Goals:**
- Create crawl job wizard
- Job list with status
- Real-time updates

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Crawl job wizard (step 1-2) | 6 | Frontend |
| Mon | Platform selection cards | 2 | Frontend |
| Tue | Wizard steps 3-4 (keywords, schedule) | 6 | Frontend |
| Tue | Form validation | 2 | Frontend |
| Wed | Jobs list page | 6 | Frontend |
| Wed | Status badges & progress bars | 2 | Frontend |
| Thu | Job detail page | 6 | Frontend |
| Thu | Polling for status updates | 2 | Frontend |
| Fri | Cancel/retry actions | 4 | Frontend |
| Fri | Testing & polish | 4 | Frontend |

**Deliverables:**
- ✅ 4-step crawl job wizard
- ✅ Jobs list with filtering
- ✅ Real-time status updates
- ✅ Job actions (cancel, retry)

---

### Week 8: Results & GEO Scores

**Goals:**
- Results browser
- GEO score calculation
- Basic visualizations

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Results list page | 6 | Frontend |
| Mon | Filters & search | 2 | Frontend |
| Tue | Result detail page | 6 | Frontend |
| Tue | Citation display cards | 2 | Frontend |
| Wed | GEO score calculation logic | 6 | Backend |
| Wed | Daily aggregation job | 2 | Backend |
| Thu | GEO score trend chart | 6 | Frontend |
| Thu | Platform comparison chart | 2 | Frontend |
| Fri | Integration testing | 6 | QA |
| Fri | Phase 2 demo prep | 2 | All |

**Deliverables:**
- ✅ Results browser UI
- ✅ GEO score calculation
- ✅ Trend visualizations
- ✅ Phase 2 complete

**Phase 2 Review (Friday PM):**
- Demo: Full user flow (signup → crawl → view results)
- Review: UI/UX feedback
- Decide: Proceed to Phase 3

---

## Phase 3: Analytics & Polish (Weeks 9-12)

### Week 9: Advanced Visualizations

**Goals:**
- Recharts integration
- Dashboard charts
- Export functionality

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Recharts setup | 2 | Frontend |
| Mon | GEO score trend (line chart) | 4 | Frontend |
| Tue | Platform breakdown (bar chart) | 4 | Frontend |
| Tue | Keyword performance (heatmap) | 4 | Frontend |
| Wed | Dashboard stat cards | 4 | Frontend |
| Wed | Chart tooltips & legends | 4 | Frontend |
| Thu | Export to CSV | 4 | Backend |
| Thu | Export to PDF (basic) | 4 | Backend |
| Fri | Responsive chart testing | 4 | Frontend |
| Fri | Performance optimization | 4 | Frontend |

**Deliverables:**
- ✅ Dashboard with 5+ charts
- ✅ CSV export
- ✅ PDF report (basic)

---

### Week 10: Alerts & Notifications

**Goals:**
- Alert system
- Email notifications
- In-app notifications

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Alerts database schema | 4 | Backend |
| Mon | Alert generation logic | 4 | Backend |
| Tue | Score drop detection | 4 | Backend |
| Tue | Citation lost detection | 4 | Backend |
| Wed | SendGrid integration | 4 | Backend |
| Wed | Email templates | 4 | Frontend |
| Thu | In-app notification center | 6 | Frontend |
| Thu | Alert list UI | 2 | Frontend |
| Fri | Alert preferences UI | 4 | Frontend |
| Fri | Testing | 4 | QA |

**Deliverables:**
- ✅ Alert generation system
- ✅ Email notifications
- ✅ In-app notification UI

---

### Week 11: Competitor & Advanced Features

**Goals:**
- Competitor tracking
- Share of voice
- Bug fixes

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | Competitor domain tracking | 6 | Backend |
| Mon | Competitor comparison query | 2 | Backend |
| Tue | Share of voice calculation | 6 | Backend |
| Tue | Competitor UI components | 2 | Frontend |
| Wed | Keyword categories & filtering | 4 | Backend |
| Wed | Category performance chart | 4 | Frontend |
| Thu | Bug fixes (batch 1) | 8 | All |
| Fri | Bug fixes (batch 2) | 8 | All |

**Deliverables:**
- ✅ Competitor tracking
- ✅ Share of voice metrics
- ✅ Reduced bug count

---

### Week 12: Polish & Pre-Launch

**Goals:**
- Performance optimization
- Security audit
- Documentation

**Tasks:**

| Day | Task | Estimated Hours | Owner |
|-----|------|-----------------|-------|
| Mon | API response time optimization | 6 | Backend |
| Mon | Database query optimization | 2 | Backend |
| Tue | Frontend bundle optimization | 6 | Frontend |
| Tue | Image optimization | 2 | Frontend |
| Wed | Security audit (OWASP) | 8 | Security |
| Thu | User documentation | 6 | Tech Writing |
| Thu | API documentation polish | 2 | Backend |
| Fri | Load testing | 6 | QA |
| Fri | Launch checklist | 2 | All |

**Deliverables:**
- ✅ Performance benchmarks met
- ✅ Security audit passed
- ✅ User docs complete
- ✅ Ready for launch

---

## Launch Week (Week 13)

### Pre-Launch (Mon-Wed)

| Day | Task |
|-----|------|
| Mon | Production deployment |
| Mon | DNS configuration |
| Mon | SSL certificates |
| Tue | Smoke testing |
| Tue | Backup verification |
| Wed | Monitoring setup (Datadog/Sentry) |
| Wed | Alert thresholds configured |

### Launch (Thursday)

| Time | Activity |
|------|----------|
| 9:00 AM | Final go/no-go decision |
| 10:00 AM | Deploy to production |
| 11:00 AM | Verify all systems |
| 12:00 PM | Announce launch (beta) |
| 2:00 PM | Monitor metrics |
| 5:00 PM | Launch retrospective |

### Post-Launch (Fri+)

| Day | Focus |
|-----|-------|
| Fri | Bug triage, hotfixes |
| Week 14 | User feedback collection |
| Week 15 | Prioritize Phase 4 features |

---

## Critical Path

```
Week 1-2: PinchTab Integration → Crawler Engine
              ↓
Week 3: Platform Crawlers (Google, Bing, Perplexity)
              ↓
Week 4: Sites & Keywords API
              ↓
Week 5-6: Dashboard UI
              ↓
Week 7-8: Crawl Jobs + Results UI
              ↓
Week 9-10: Charts + Alerts
              ↓
Week 11-12: Polish + Testing
              ↓
Week 13: LAUNCH
```

**Buffer:** 1 week built into Phase 3 for unexpected delays

---

## Milestones

| Milestone | Date | Success Criteria |
|-----------|------|------------------|
| M1: Core Crawler | Week 4 | Can crawl 100 keywords across 3 platforms |
| M2: Dashboard Alpha | Week 6 | Users can manage sites & keywords |
| M3: Full MVP | Week 8 | End-to-end flow: create job → view results |
| M4: Analytics | Week 10 | Charts, alerts, exports working |
| M5: Launch Ready | Week 12 | Performance, security, docs complete |
| M6: MVP Launch | Week 13 | Production deployment live |

---

## Resource Allocation

| Role | Weeks 1-4 | Weeks 5-8 | Weeks 9-12 |
|------|-----------|-----------|------------|
| Backend Dev | 100% | 50% | 50% |
| Frontend Dev | 25% | 100% | 75% |
| DevOps | 50% | 25% | 25% |
| QA | 25% | 25% | 50% |
| Designer | 10% | 25% | 25% |

**Total Estimated Hours: ~750 hours**

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
