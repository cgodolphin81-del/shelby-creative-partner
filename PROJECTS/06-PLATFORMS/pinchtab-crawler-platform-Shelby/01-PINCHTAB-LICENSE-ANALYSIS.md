# PinchTab License Analysis

## Executive Summary

**Repository:** https://github.com/pinchtab/pinchtab  
**License:** MIT License  
**Status:** ✅ **SAFE TO FORK, MODIFY, AND WHITE-LABEL**

---

## License Terms (MIT)

PinchTab is licensed under the **MIT License**, which is one of the most permissive open-source licenses available.

### What You CAN Do:

| Action | Permission |
|--------|------------|
| ✅ Fork the repository | Allowed |
| ✅ Modify source code | Allowed |
| ✅ White-label (rebrand) | Allowed |
| ✅ Commercial use | Allowed |
| ✅ Distribute modified versions | Allowed |
| ✅ Sublicense | Allowed |
| ✅ Private use | Allowed |
| ✅ Patent use | Allowed |

### What You MUST Do:

| Requirement | Details |
|-------------|---------|
| 📋 Include copyright notice | Must retain original copyright |
| 📋 Include license text | Must include MIT license in distributions |
| 📋 State changes | Should document significant modifications |

### What You CANNOT Do:

| Restriction | Details |
|-------------|---------|
| ❌ Hold liable | No warranty or liability on original authors |
| ❌ Claim original authorship | Cannot claim you wrote the original |

---

## Comparison: PinchTab vs Skales (BSL-1.1)

**Important Distinction:** The initial search results confused PinchTab with Skales (skalesapp/skales), which uses BSL-1.1.

| Feature | PinchTab (MIT) | Skales (BSL-1.1) |
|---------|---------------|------------------|
| Commercial use | ✅ Allowed | ❌ Requires license |
| Fork allowed | ✅ Yes | ⚠️ Non-production only |
| White-label | ✅ Yes | ❌ No (competitive use restricted) |
| Production use | ✅ Yes | ❌ Requires commercial license |
| Modification | ✅ Unlimited | ⚠️ Non-production only |
| Change date | N/A (perpetual MIT) | 4 years to open source |

### BSL-1.1 Restrictions (for reference):

If we had used Skales or any BSL-1.1 licensed project:
- **Production use prohibited** without commercial license
- **Cannot compete** with original product
- **Must purchase license** for SaaS/commercial deployment
- **Four-year change date** before becoming truly open source

---

## PinchTab Architecture Summary

### Core Components:

```
┌─────────────────────────────────────────────────────────────┐
│                    PINCHTAB SERVER                          │
│  (Go binary ~12-15MB, standalone HTTP server on :9867)     │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Profile    │  │   Instance   │  │     Tab      │      │
│  │   Manager    │  │   Manager    │  │   Manager    │      │
│  │              │  │              │  │              │      │
│  │ - Cookies    │  │ - Chrome     │  │ - Navigation │      │
│  │ - History    │  │   Process    │  │ - Snapshots  │      │
│  │ - LocalStorage│ │ - Bridge     │  │ - Actions    │      │
│  │ - Sessions   │  │   Runtime    │  │ - Text       │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│              Chrome DevTools Protocol (CDP)                 │
│                    (chromedp / cdproto)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Google Chrome  │
                    │   (Headless/    │
                    │    Headed)      │
                    └─────────────────┘
```

### Key Features for GEO Crawler:

| Feature | Relevance to GEO Crawler |
|---------|-------------------------|
| **Accessibility Tree** | Perfect for AI agent interaction |
| **Token-efficient endpoints** | `/text` (~800 tokens) vs full snapshot (~10,500) |
| **Stealth mode** | Bypasses bot detection on AI platforms |
| **Session persistence** | Maintain logged-in states |
| **Multi-instance** | Parallel crawling across platforms |
| **HTTP API** | Easy integration with any backend |
| **Dashboard** | Built-in monitoring UI |

---

## Recommendation

### ✅ **USE PINCHTAB**

**Reasons:**

1. **MIT License** - No legal restrictions on commercial use, white-labeling, or modification
2. **Lightweight** - 12MB Go binary, no dependencies
3. **Purpose-built** - Designed specifically for AI agent browser control
4. **Token-efficient** - Optimized for LLM agent workflows
5. **Active development** - Recent commits, growing community (990+ stars)
6. **OpenClaw compatible** - Already designed to work with OpenClaw ecosystem

### Implementation Strategy:

1. **Fork the repository** to your organization
2. **Modify branding** (name, logo, dashboard theme)
3. **Add GEO-specific endpoints** (see Crawler Specification)
4. **Deploy as microservice** alongside crawler backend
5. **Contribute improvements** back (optional, not required)

### Legal Disclaimer:

> This analysis is for informational purposes only and does not constitute legal advice. For commercial deployments, consult with legal counsel to review the MIT License terms and ensure compliance.

---

## Resources

- **GitHub:** https://github.com/pinchtab/pinchtab
- **Documentation:** https://pinchtab.com/docs/
- **License:** https://github.com/pinchtab/pinchtab/blob/main/LICENSE
- **MIT License Text:** https://opensource.org/licenses/MIT

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*  
*Prepared by: AI Research Agent*
