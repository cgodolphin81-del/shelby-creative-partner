# MVP Feature List

## GEO SEO Crawler Platform - Prioritized Roadmap

---

## Priority Legend

| Priority | Meaning | Timeline |
|----------|---------|----------|
| **P0** | CRITICAL - Must have for MVP launch | Week 1-4 |
| **P1** | HIGH - Essential for first release | Week 5-8 |
| **P2** | MEDIUM - Important but can wait | Week 9-12 |
| **P3** | LOW - Nice to have, future releases | Post-MVP |

---

## Phase 1: Core Crawler (Weeks 1-4)

### P0 - Critical Foundation

#### 1. PinchTab Integration
- [ ] Deploy PinchTab server (Docker)
- [ ] Implement navigation endpoint wrapper
- [ ] Implement snapshot extraction
- [ ] Implement text extraction
- [ ] Implement screenshot capture
- [ ] Test stealth mode against AI platforms
- [ ] **Estimated: 16 hours**

#### 2. Crawler Engine
- [ ] FastAPI project setup
- [ ] Celery worker configuration
- [ ] Redis queue integration
- [ ] Job scheduling system
- [ ] Retry logic with exponential backoff
- [ ] Rate limiting per platform
- [ ] **Estimated: 24 hours**

#### 3. Google AI Overviews Crawler
- [ ] URL construction with query params
- [ ] AI Overview detection (selector)
- [ ] Citation extraction parser
- [ ] Data normalization
- [ ] Error handling for CAPTCHA/blocks
- [ ] **Estimated: 20 hours**

#### 4. Database Setup
- [ ] PostgreSQL schema deployment
- [ ] Weaviate collection setup
- [ ] Redis connection pooling
- [ ] Migration scripts
- [ ] **Estimated: 8 hours**

#### 5. Basic API Endpoints
- [ ] POST /api/v1/crawl-jobs (create job)
- [ ] GET /api/v1/crawl-jobs (list jobs)
- [ ] GET /api/v1/crawl-jobs/:id (job status)
- [ ] GET /api/v1/crawl-results (query results)
- [ ] DELETE /api/v1/crawl-jobs/:id (cancel job)
- [ ] **Estimated: 12 hours**

**Phase 1 Total: ~80 hours (2 weeks full-time)**

---

## Phase 2: Dashboard & Tracking (Weeks 5-8)

### P1 - High Priority

#### 6. Next.js Dashboard Foundation
- [ ] Next.js 14 project setup (App Router)
- [ ] shadcn/ui component library
- [ ] Tailwind CSS configuration
- [ ] Authentication UI (login/register)
- [ ] Layout with sidebar navigation
- [ ] **Estimated: 16 hours**

#### 7. Crawl Job Management UI
- [ ] Create new crawl job form
- [ ] Job list with status badges
- [ ] Job detail page with progress
- [ ] Real-time status updates (polling)
- [ ] Cancel/retry actions
- [ ] **Estimated: 20 hours**

#### 8. Results Visualization
- [ ] Results table with sorting/filtering
- [ ] Citation display cards
- [ ] Platform comparison view
- [ ] Export to CSV/JSON
- [ ] **Estimated: 16 hours**

#### 9. Site Tracking System
- [ ] Add tracked site/domain
- [ ] Configure keywords to monitor
- [ ] Citation detection logic
- [ ] Position tracking over time
- [ ] **Estimated: 20 hours**

#### 10. GEO Score Calculation
- [ ] Citation rate calculation
- [ ] Position scoring algorithm
- [ ] Platform coverage score
- [ ] Composite GEO score (0-100)
- [ ] Historical tracking
- [ ] **Estimated: 16 hours**

#### 11. Bing Copilot Crawler
- [ ] URL construction
- [ ] Copilot content detection
- [ ] Citation parser
- [ ] Integration with main pipeline
- [ ] **Estimated: 12 hours**

#### 12. Perplexity Crawler
- [ ] URL construction
- [ ] Answer extraction
- [ ] Source citation parser
- [ ] Integration with main pipeline
- [ ] **Estimated: 12 hours**

**Phase 2 Total: ~112 hours (3 weeks full-time)**

---

## Phase 3: Analytics & Reporting (Weeks 9-12)

### P2 - Medium Priority

#### 13. Dashboard Charts (Recharts)
- [ ] GEO score trend chart (line)
- [ ] Citation count by platform (bar)
- [ ] Keyword performance heatmap
- [ ] Position distribution (pie)
- [ ] Time-series crawl volume (area)
- [ ] **Estimated: 24 hours**

#### 14. Alerting System
- [ ] GEO score drop alerts
- [ ] Citation lost notifications
- [ ] Email integration (SendGrid)
- [ ] In-app notification center
- [ ] Alert configuration UI
- [ ] **Estimated: 20 hours**

#### 15. Keyword Management
- [ ] Bulk keyword import (CSV)
- [ ] Keyword categorization
- [ ] Search volume integration (optional API)
- [ ] Keyword difficulty scoring
- [ ] **Estimated: 16 hours**

#### 16. Competitor Tracking
- [ ] Add competitor domains
- [ ] Compare GEO scores
- [ ] Share of voice calculation
- [ ] Competitive gap analysis
- [ ] **Estimated: 20 hours**

#### 17. Report Generation
- [ ] PDF report templates
- [ ] Weekly digest emails
- [ ] Client-ready white-label reports
- [ ] Scheduled report delivery
- [ ] **Estimated: 24 hours**

#### 18. User Management
- [ ] Team member invitations
- [ ] Role-based access (admin/viewer)
- [ ] API key management
- [ ] Usage quotas
- [ ] **Estimated: 16 hours**

**Phase 3 Total: ~120 hours (3 weeks full-time)**

---

## Phase 4: Advanced Features (Post-MVP)

### P3 - Future Enhancements

#### 19. Claude AI Integration
- [ ] Manual crawl workflow
- [ ] Anthropic API integration (paid)
- [ ] Citation extraction
- [ ] **Estimated: 12 hours**

#### 20. ChatGPT Integration
- [ ] Browser automation flow
- [ ] Auth handling (risky)
- [ ] Citation tracking
- [ ] **Estimated: 16 hours**

#### 21. Advanced Analytics
- [ ] Sentiment analysis of citations
- [ ] Topic modeling
- [ ] Trend prediction
- [ ] Anomaly detection
- [ ] **Estimated: 40 hours**

#### 22. API for External Access
- [ ] Public API documentation
- [ ] API key authentication
- [ ] Rate limiting
- [ ] Webhook notifications
- [ ] **Estimated: 24 hours**

#### 23. Browser Extension
- [ ] Chrome extension for on-demand checks
- [ ] Real-time GEO score overlay
- [ ] Quick citation check
- [ ] **Estimated: 32 hours**

#### 24. Multi-Language Support
- [ ] Internationalization (i18n)
- [ ] Multi-language crawls
- [ ] Locale-specific GEO scores
- [ ] **Estimated: 24 hours**

#### 25. Historical Data Analysis
- [ ] Trend analysis dashboard
- [ ] Seasonal pattern detection
- [ ] Year-over-year comparison
- [ ] **Estimated: 20 hours**

**Phase 4 Total: ~168 hours (4+ weeks)**

---

## MVP Scope Definition

### ✅ **INCLUDED in MVP (Weeks 1-8)**

| Feature | Priority | Status |
|---------|----------|--------|
| PinchTab browser layer | P0 | Core |
| Google AI Overviews crawler | P0 | Core |
| Bing Copilot crawler | P1 | Core |
| Perplexity crawler | P1 | Core |
| PostgreSQL + Weaviate storage | P0 | Core |
| REST API (job management) | P0 | Core |
| Next.js dashboard | P1 | Core |
| Site & keyword tracking | P1 | Core |
| GEO score calculation | P1 | Core |
| Basic visualizations | P1 | Core |

**MVP Total: ~192 hours (5-6 weeks full-time)**

### ❌ **EXCLUDED from MVP (Post-Launch)**

| Feature | Reason |
|---------|--------|
| Claude/ChatGPT integration | Manual/auth complexity |
| Advanced analytics | Nice-to-have |
| Competitor tracking | Phase 3 |
| Report generation | Phase 3 |
| Team management | Single-user MVP |
| API for external access | Post-launch |
| Browser extension | Post-launch |

---

## Success Metrics (MVP)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Crawl Accuracy** | >95% | Successful crawls / total attempts |
| **Citation Detection** | >90% | Manual audit of 100 results |
| **Dashboard Load Time** | <2s | Page load performance |
| **API Response Time** | <500ms | P95 latency |
| **GEO Score Correlation** | >0.8 | vs manual audit |
| **User Retention** | >60% | Week 2 / Week 1 users |

---

## Technical Debt to Manage

| Area | Risk | Mitigation |
|------|------|------------|
| **PinchTab dependency** | Single point of failure | Abstract interface, fallback to Playwright |
| **Selector fragility** | AI platforms change DOM | Version parsers, monitoring alerts |
| **Rate limiting** | IP blocks | Rotating proxies, conservative limits |
| **Embedding costs** | OpenAI API expenses | Batch processing, cache embeddings |
| **Weaviate scaling** | Vector DB performance | Monitor, plan horizontal scaling |

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
