# GEO SEO Crawler Platform

## Technical Specification & Build Roadmap

**Version:** 1.0  
**Date:** 2026-03-21  
**Status:** Ready for Development

---

## Executive Summary

This document provides complete technical specifications for building a **GEO (Generative Engine Optimization) SEO Crawler Platform** - a system that tracks website visibility across AI-powered search platforms including Google AI Overviews, Bing Copilot, and Perplexity AI.

### Key Findings

✅ **PinchTab License:** MIT License - **SAFE TO FORK, MODIFY, AND WHITE-LABEL**  
✅ **Tech Stack:** FastAPI + Next.js + PostgreSQL + Weaviate  
✅ **MVP Timeline:** 12-13 weeks  
✅ **MVP Cost:** $435/month operating + sweat equity  
✅ **Break-Even:** 5 paying customers

---

## Document Index

| # | Document | Description | Status |
|---|----------|-------------|--------|
| 01 | [License Analysis](./01-PINCHTAB-LICENSE-ANALYSIS.md) | PinchTab MIT license terms, comparison with BSL-1.1 | ✅ Complete |
| 02 | [Technical Architecture](./02-TECHNICAL-ARCHITECTURE.md) | System design, tech stack decisions, data flow | ✅ Complete |
| 03 | [Crawler Specification](./03-CRAWLER-SPECIFICATION.md) | Platform endpoints, data fields, extraction logic | ✅ Complete |
| 04 | [MVP Feature List](./04-MVP-FEATURE-LIST.md) | Prioritized features, phased roadmap | ✅ Complete |
| 05 | [Database Schema](./05-DATABASE-SCHEMA.md) | PostgreSQL tables, Weaviate collections, Redis keys | ✅ Complete |
| 06 | [API Specification](./06-API-ENDPOINT-SPEC.md) | REST endpoints, request/response examples | ✅ Complete |
| 07 | [Dashboard Wireframe](./07-DASHBOARD-WIREFRAME.md) | UI/UX design, page layouts, component specs | ✅ Complete |
| 08 | [Build Timeline](./08-BUILD-TIMELINE.md) | Week-by-week development schedule | ✅ Complete |
| 09 | [Cost Estimate](./09-COST-ESTIMATE.md) | Infrastructure, APIs, development costs | ✅ Complete |

---

## Platform Overview

### What We're Building

A SaaS platform that helps businesses track and improve their visibility in AI-generated search results.

### Core Capabilities

1. **Multi-Platform Crawling**
   - Google AI Overviews
   - Bing Copilot
   - Perplexity AI
   - (Future: Claude, ChatGPT)

2. **Citation Tracking**
   - Detect when your site is cited
   - Track position in citations
   - Monitor competitors

3. **GEO Scoring**
   - Proprietary 0-100 score
   - Platform-specific breakdowns
   - Historical trends

4. **Alerting & Reporting**
   - Score drop alerts
   - Citation lost notifications
   - Weekly PDF reports

---

## Architecture at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS DASHBOARD                         │
│              (Vercel - Frontend Hosting)                     │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────────┐
│                  FASTAPI BACKEND                             │
│              (Railway/AWS - API Hosting)                     │
├─────────────────────────────────────────────────────────────┤
│  Celery Workers  │  PinchTab Controller  │  Embedding Gen   │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌───────▼───────┐ ┌──────▼──────┐ ┌──────▼──────┐
│  PostgreSQL   │ │   Weaviate  │ │    Redis    │
│  (Neon/RDS)   │ │  (Vectors)  │ │   (Cache)   │
└───────────────┘ └─────────────┘ └─────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    PINCHTAB LAYER                            │
│           (Go HTTP Server - Browser Control)                 │
└────────────────────────┬────────────────────────────────────┘
                         │ CDP
┌────────────────────────▼────────────────────────────────────┐
│                  GOOGLE CHROME                               │
│         (Headless - Stealth Mode Enabled)                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Backend
- **Framework:** Python FastAPI 0.115+
- **Task Queue:** Celery + Redis
- **Database:** PostgreSQL 16 (Neon/RDS)
- **Vector DB:** Weaviate (self-hosted)
- **Embeddings:** OpenAI text-embedding-3-small

### Frontend
- **Framework:** Next.js 14 (App Router)
- **UI Library:** shadcn/ui + Tailwind CSS
- **Charts:** Recharts
- **State:** Zustand
- **Data Fetching:** TanStack Query

### Infrastructure
- **Browser Layer:** PinchTab (MIT License)
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Railway → AWS ECS
- **CDN:** Cloudflare
- **Monitoring:** Sentry + Datadog

---

## MVP Scope

### ✅ Included (Weeks 1-8)

- PinchTab browser automation
- Google AI Overviews crawler
- Bing Copilot crawler
- Perplexity crawler
- Site & keyword management
- Crawl job scheduling
- Results browser
- GEO score calculation
- Basic dashboard with charts
- Email alerts

### ❌ Excluded (Post-MVP)

- Claude/ChatGPT integration
- Advanced analytics
- Competitor tracking
- White-label reports
- Team management
- Public API
- Browser extension

---

## Development Phases

### Phase 1: Core Crawler (Weeks 1-4)
- PinchTab integration
- Crawler engine
- Google/Bing/Perplexity parsers
- Database setup
- Basic API

### Phase 2: Dashboard (Weeks 5-8)
- Next.js app
- Sites & keywords UI
- Crawl job wizard
- Results browser
- GEO scores

### Phase 3: Analytics (Weeks 9-12)
- Recharts visualizations
- Alert system
- Competitor tracking
- Performance optimization
- Security audit

### Launch: Week 13
- Production deployment
- Monitoring setup
- Beta launch

---

## Cost Summary

| Category | MVP Monthly | Scale Monthly |
|----------|-------------|---------------|
| Infrastructure | $151 | $1,200 |
| APIs (OpenAI, etc.) | $60 | $600 |
| Monitoring/Tools | $26 | $120 |
| **Total** | **$237** | **$1,920** |

**Development Cost:** $0 (sweat equity) or $85,000 (outsourced)

**Break-Even:** 5 paying customers at $100/month average

---

## Key Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| PinchTab breaks | Low | High | Abstract interface, Playwright fallback |
| AI platforms block crawlers | Medium | High | Rotating IPs, conservative rate limits |
| OpenAI embedding costs spike | Low | Medium | Cache embeddings, self-host option |
| Selector changes (DOM) | High | Medium | Version parsers, monitoring alerts |
| Competition | Medium | Medium | Focus on UX, faster iteration |

---

## Success Metrics

### Technical
- Crawl accuracy: >95%
- API response time: <500ms (P95)
- Dashboard load time: <2s
- Uptime: 99.9%

### Business
- User activation: >40%
- Week 2 retention: >60%
- MRR growth: 20% MoM
- CAC payback: <6 months

---

## Next Steps

### Immediate (This Week)

1. **Review all 9 specification documents**
2. **Set up development environment**
   - Fork PinchTab repository
   - Create GitHub repo for project
   - Set up local Docker Compose
3. **Begin Week 1 tasks**
   - Project scaffolding
   - PinchTab deployment testing

### Short-Term (Month 1)

1. Complete Phase 1 (Core Crawler)
2. Validate crawl accuracy with manual audit
3. Begin Phase 2 (Dashboard)

### Medium-Term (Months 2-3)

1. Complete MVP (all 3 phases)
2. Beta test with 10-20 users
3. Iterate based on feedback
4. Launch publicly

---

## Team Requirements

### Minimum Viable Team

- **1 Full-Stack Developer** (FastAPI + Next.js)
- **1 Backend Developer** (crawlers, data pipeline)

### Ideal Team

- **1 Full-Stack Developer** (lead)
- **1 Backend Developer** (crawlers)
- **1 Frontend Developer** (dashboard)
- **0.5 DevOps** (infrastructure, CI/CD)
- **0.5 Designer** (UI/UX, part-time)

---

## Legal Considerations

### PinchTab (MIT License)
✅ Can fork, modify, white-label, use commercially  
✅ No attribution required (but recommended)  
✅ No licensing fees

### Data Collection
⚠️ Respect robots.txt  
⚠️ Implement rate limiting  
⚠️ Terms of Service compliance (review for each platform)

### User Data
✅ GDPR compliance required  
✅ Data encryption at rest and in transit  
✅ User data export/deletion capabilities

---

## Contact & Support

**Repository:** [To be created]  
**Documentation:** This folder  
**Issues:** [To be created]  

---

## Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| **GEO** | Generative Engine Optimization - SEO for AI search |
| **AI Overview** | Google's AI-generated search summaries |
| **Citation** | When your site is referenced in AI output |
| **GEO Score** | Proprietary 0-100 visibility metric |
| **PinchTab** | MIT-licensed browser automation layer |

### B. Useful Links

- [PinchTab Documentation](https://pinchtab.com/docs/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Weaviate Documentation](https://weaviate.io/developers/)
- [MIT License](https://opensource.org/licenses/MIT)

---

*This document is a living specification. Update as the project evolves.*

**Last Updated:** 2026-03-21  
**Version:** 1.0
