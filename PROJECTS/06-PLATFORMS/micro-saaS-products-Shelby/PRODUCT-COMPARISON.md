# 📊 MICRO-SAAS PRODUCT COMPARISON
## Quick Reference Guide

*Created: March 2026 | Subagent: BUILD-MICRO-SAAS-Wave1-Agent*

---

## AT A GLANCE

| | FlightGuard AI | SongCraft AI | SkillScale AI |
|---|---------------|--------------|---------------|
| **🎯 Problem** | Flight disruptions are stressful and costly | Songwriters struggle with writer's block and finishing songs | Hobbyists don't know how to monetize their skills |
| **💡 Solution** | AI monitors flights, auto-rebooks, files claims | AI co-writes lyrics, suggests melodies, structures songs | AI assesses skills, creates monetization roadmap |
| **👤 Customer** | Frequent travelers, business travelers, travel managers | Songwriters, musicians, producers, content creators | Hobbyists, side-hustlers, creators, freelancers |
| **💰 Price** | $9.99-29.99/month | $14.99-79/month | $19-199/month |
| **🔧 Build Time** | 8-12 weeks | 10-14 weeks | 8-10 weeks |
| **💵 MVP Cost** | $35-50K | $40-60K | $30-45K |
| **📈 Y1 Revenue** | $45K-155K | $86K-323K | $265K-940K |
| **📈 Y3 Revenue** | $730K-5.8M | $1.2M-12M | $2.6M-22M |
| **⚡ Time to Value** | Immediate (first disruption) | 1-2 weeks (first song) | 2-4 weeks (first action) |
| **🔥 Pain Level** | 🔴 High (stress, money lost) | 🟡 Medium (creative frustration) | 🟠 Medium-High (financial need) |
| **🌊 Market Size** | $100B+ (travel) | $50B+ (music creation) | $200B+ (creator economy) |
| **🏆 Competition** | Medium | Low-Medium | Low (blue ocean) |
| **🛡️ Moat** | AI claims engine, airline partnerships | Proprietary music AI, DAW integration | Assessment algorithm, community, success data |
| **📣 Viral Potential** | Medium (travel stories) | High (shareable songs) | High (income wins) |
| **💎 Unit Economics** | LTV:CAC 4.5-8:1 | LTV:CAC 4-8:1 | LTV:CAC 4-9:1 |
| **🔄 Churn Risk** | Low (use when traveling) | Medium (hobby fluctuations) | Medium-High (goal completion) |
| **📊 Technical Risk** | Medium (APIs) | High (audio/MIDI) | Low-Medium (AI assessment) |
| **🎯 Best For** | Travel industry connections, API integration skills | Music tech background, audio engineering | Content marketing, community building |

---

## PRICING COMPARISON

### FlightGuard AI
| Tier | Price | Key Features |
|------|-------|--------------|
| Free | $0 | 5 flights/year, basic alerts, claim templates |
| Pro | $9.99/mo | Unlimited flights, auto-rebooking, automated claims |
| Business | $29.99/mo | Multi-passenger, corporate dashboard, API access |

### SongCraft AI
| Tier | Price | Key Features |
|------|-------|--------------|
| Free | $0 | 3 songs/month, basic AI lyrics, 5 melody suggestions |
| Creator | $14.99/mo | Unlimited songs, advanced AI, MIDI export, collaboration |
| Pro | $29.99/mo | DAW plugin, stem separation, distribution integration |
| Teams | $79/mo | 10 seats, shared workspace, admin dashboard |

### SkillScale AI
| Tier | Price | Key Features |
|------|-------|--------------|
| Free | $0 | 1 assessment/month, 3 pathways, basic plan |
| Starter | $19/mo | Unlimited assessments, full action plan, 10 templates/mo |
| Pro | $49/mo | AI Coach, revenue tracking, tax guidance, unlimited templates |
| Accelerator | $199/mo | 1:1 coaching, DFY setup, mastermind, expert intros |

---

## TECH STACK COMPARISON

### Shared Across All Three
- **Frontend:** Next.js 14 + Tailwind CSS
- **Auth:** Clerk or Auth0
- **Database:** Supabase (PostgreSQL)
- **Payments:** Stripe
- **Hosting:** Vercel (frontend) + Railway (backend)
- **AI:** Anthropic Claude API

### Unique Requirements

| Product | Specialized Tech |
|---------|-----------------|
| **FlightGuard AI** | FlightAware API, Twilio (SMS), Firebase (push), SendGrid Inbound Parse |
| **SongCraft AI** | MusicLM/Riffusion API, Tone.js (MIDI), Librosa (audio), VST/AU plugin development |
| **SkillScale AI** | Circle.so (community), Google Calendar API, portfolio file storage |

---

## GO-TO-MARKET COMPARISON

### FlightGuard AI
| Channel | Strategy | Budget |
|---------|----------|--------|
| **SEO** | "Flight delay compensation," "airline rebooking" keywords | $0 (content) |
| **Paid** | Google Ads (travel disruption keywords) | $2K/month |
| **PR** | Travel blogs, The Points Guy, travel hackers | $0 (outreach) |
| **Partnerships** | Travel credit cards, corporate travel, travel agencies | Revenue share |
| **Product Hunt** | Travel tech category, target Top 5 | $0 |

### SongCraft AI
| Channel | Strategy | Budget |
|---------|----------|--------|
| **SEO** | "Songwriting software," "lyric generator," "melody maker" | $0 (content) |
| **Paid** | Facebook/Instagram (musician interests), YouTube pre-roll | $3K/month |
| **Influencers** | Music production YouTubers, songwriting coaches | Affiliate 30% |
| **PR** | MusicTech, Producer Hive, Songwriter Universe | $0 (outreach) |
| **Product Hunt** | Music Tech category, target Top 3 | $0 |

### SkillScale AI
| Channel | Strategy | Budget |
|---------|----------|--------|
| **SEO** | "Monetize my hobby," "sell my [skill] online" (50+ articles) | $0 (content) |
| **Paid** | Facebook (side hustle interests), Pinterest (visual hobbies) | $3K/month |
| **Influencers** | Side hustle, Etsy, freelancing micro-influencers | Affiliate 40% |
| **PR** | Forbes, Entrepreneur, Inc., side hustle podcasts | $0 (outreach) |
| **Product Hunt** | Productivity category, target Top 5 | $0 |

---

## REVENUE MODEL COMPARISON

| Revenue Stream | FlightGuard AI | SongCraft AI | SkillScale AI |
|----------------|---------------|--------------|---------------|
| **Subscription** | Primary (80%) | Primary (85%) | Primary (70%) |
| **Usage-Based** | Claim success fee (15%) | Distribution % (opt-in) | Success fee (5%, Accelerator) |
| **Affiliate** | Hotel rebooking (10%) | DAW/plugins (15%) | Platform referrals (10-30%) |
| **Services** | None | None | DFY setup (40-60% margin) |
| **B2B** | Corporate travel ($29.99/user) | Teams ($79/10 seats) | Teams ($79/10 seats), coaching |

---

## BUILD VS BUY RECOMMENDATION

### FlightGuard AI
**Recommendation:** Hybrid Approach
- **Phase 1 (4 weeks):** No-code MVP with FlightAware API + Zapier + Bubble ($15K)
- **Phase 2 (8-12 weeks):** Custom build with proprietary rebooking algorithm ($35K)
- **Total:** $50K, 16 weeks to full product

### SongCraft AI
**Recommendation:** Build Custom (or Hybrid with Open Source)
- **Phase 1 (5 weeks):** Commercial APIs (Soundraw, Claude) + Bubble ($20K)
- **Phase 2 (10-14 weeks):** Fine-tune open-source models, build DAW plugins ($50K)
- **Total:** $70K, 19 weeks to full product
- **Alternative:** Use open-source models from day 1 to reduce API costs (adds 4-6 weeks)

### SkillScale AI
**Recommendation:** Hybrid Approach
- **Phase 1 (4 weeks):** Typeform + Claude API + Circle.so + Softr ($20K)
- **Phase 2 (8-10 weeks):** Custom assessment engine, AI Coach, integrated platform ($40K)
- **Total:** $60K, 14 weeks to full product

---

## RISK ASSESSMENT

### FlightGuard AI
| Risk | Level | Mitigation |
|------|-------|------------|
| Airline API access | Medium | Start with flight tracking only; add rebooking via partnerships |
| Claim regulation changes | Low | Diversify across EU261, DOT, airline-specific policies |
| Competition from incumbents | Medium | Focus on AI automation (AirHelp is manual); build B2B moat |
| Seasonal demand | Low | Travel is year-round; business travel consistent |

### SongCraft AI
| Risk | Level | Mitigation |
|------|-------|------------|
| AI music copyright issues | Medium | Position as "AI-assisted" not "AI-generated"; user owns output |
| High API costs at scale | Medium | Fine-tune open-source models; negotiate volume discounts |
| Niche market size | Low-Medium | Expand to adjacent creators (podcasters, video creators) |
| DAW integration complexity | High | Partner with existing plugin developers; white-label initially |

### SkillScale AI
| Risk | Level | Mitigation |
|------|-------|------------|
| User follow-through (low activation) | Medium-High | Strong onboarding, accountability features, quick-win milestones |
| Affiliate revenue dependency | Low | Diversify: subscription (70%), affiliate (15%), services (15%) |
| Competition from free content | Medium | Emphasize personalization, community, accountability (free content lacks these) |
| Coaching scalability (Accelerator) | Medium | Group coaching first; 1:1 only at premium price point |

---

## SUCCESS METRICS (First 90 Days)

| Metric | FlightGuard AI | SongCraft AI | SkillScale AI |
|--------|---------------|--------------|---------------|
| **Total Signups** | 2,000 | 3,000 | 5,000 |
| **Paid Conversion** | 4% | 4.8% (4% Creator + 0.8% Pro) | 4.8% (4% Starter + 0.8% Pro) |
| **Paying Customers** | 80 | 144 | 240 |
| **MRR** | $800 | $2,000 | $5,000 |
| **Activation Rate** | 60% | 50% | 55% |
| **Day-30 Retention** | 70% | 35% | 40% |
| **NPS** | 40+ | 35+ | 40+ |
| **Churn (monthly)** | <7% | <8% | <7% |

---

## FOUNDER FIT QUIZ

### Choose FlightGuard AI if you:
✅ Have travel industry connections or experience  
✅ Enjoy working with APIs and real-time data  
✅ Want fast time-to-revenue (immediate value prop)  
✅ Are comfortable with B2B sales (corporate travel)  
✅ Don't mind moderate regulatory complexity  

### Choose SongCraft AI if you:
✅ Are a musician or have music industry connections  
✅ Have audio/MIDI programming experience (or can hire it)  
✅ Are passionate about creativity and AI augmentation  
✅ Want to build in a passionate, loyal niche  
✅ Are comfortable with higher technical complexity  

### Choose SkillScale AI if you:
✅ Have content marketing or community building skills  
✅ Are passionate about helping people monetize their skills  
✅ Want the largest TAM (creator economy)  
✅ Enjoy building educational content and programs  
✅ Are comfortable with multiple revenue streams  

---

## INVESTMENT REQUIRED

### FlightGuard AI
| Phase | Investment | Timeline | Outcome |
|-------|------------|----------|---------|
| MVP | $35-50K | 8-12 weeks | Launch-ready product |
| V1.5 | $20-30K | 8 weeks | B2B features, airline partnerships |
| Scale | $100-200K | 12 months | Team of 5, $50K MRR |

### SongCraft AI
| Phase | Investment | Timeline | Outcome |
|-------|------------|----------|---------|
| MVP | $40-60K | 10-14 weeks | Launch-ready product |
| V1.5 | $30-50K | 10 weeks | DAW plugins, distribution integration |
| Scale | $150-300K | 12 months | Team of 6, $75K MRR |

### SkillScale AI
| Phase | Investment | Timeline | Outcome |
|-------|------------|----------|---------|
| MVP | $30-45K | 8-10 weeks | Launch-ready product |
| V1.5 | $25-40K | 8 weeks | AI Coach, DFY partner network |
| Scale | $100-200K | 12 months | Team of 5, $100K MRR |

---

## FINAL RECOMMENDATION

### If You Can Only Build ONE:

**🏆 FlightGuard AI** — Best balance of:
- Fastest path to revenue
- Lowest technical risk
- Clear customer ROI
- Strong B2B expansion potential

### If You Can Build TWO:

**1. FlightGuard AI** (Months 1-4)  
**2. SkillScale AI** (Months 5-9)

Revenue from FlightGuard funds SkillScale. Both have strong recurring revenue and complementary customer bases (travelers + creators).

### If You Have a Team + Funding:

Build all three in parallel with dedicated teams. Diversification reduces risk. Portfolio approach maximizes market capture.

---

## NEXT STEPS

1. **Review all 3 PRODUCT-SPEC.md files** — Understand each product deeply
2. **Choose your first product** — Based on founder fit, capital, and timeline
3. **Read the STARTER-CHECKLIST.md** (for FlightGuard AI) — Day-by-day build plan
4. **Start customer interviews** — 10 interviews before writing code
5. **Set up infrastructure** — Shared auth, database, payments
6. **Begin building** — First commit today, launch in 30 days

---

*Micro-SaaS Product Comparison v1.0*  
*Created: March 2026 | Subagent: BUILD-MICRO-SAAS-Wave1-Agent*  
*For detailed specs, see individual PRODUCT-SPEC.md files*
