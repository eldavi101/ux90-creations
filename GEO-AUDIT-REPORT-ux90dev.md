# GEO Audit Report — UX90 Creations
**Domain:** https://ux90.dev  
**Date:** 2026-05-07  
**Business Type:** Local Agency — Web Design, SEO & App Development (Miami/Hialeah, FL)  
**Audited Pages:** 7 (homepage + 6 service pages)

---

## Overall GEO Score

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│          GEO SCORE:  33 / 100   ⚠ POOR             │
│                                                     │
│  The site has a sound technical foundation but      │
│  near-zero off-site authority, broken schema,       │
│  and missing AI-specific infrastructure. AI         │
│  systems cannot reliably identify or cite this      │
│  business. Immediate action is warranted.           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Score Breakdown

| Category | Weight | Score | Weighted | Status |
|----------|--------|-------|----------|--------|
| AI Citability & Visibility | 25% | 40/100 | 10.0 | ⚠ Poor |
| Brand Authority Signals | 20% | 8/100 | 1.6 | 🔴 Critical |
| Content Quality & E-E-A-T | 20% | 43/100 | 8.6 | ⚠ Fair |
| Technical Foundations | 15% | 47/100 | 7.1 | ⚠ Poor |
| Structured Data | 10% | 23/100 | 2.3 | 🔴 Critical |
| Platform Optimization | 10% | 32/100 | 3.2 | 🔴 Critical |
| **Composite GEO Score** | **100%** | | **32.7 / 100** | **⚠ Poor** |

---

## Rating Scale

| Range | Rating | Meaning |
|-------|--------|---------|
| 80–100 | Excellent | Actively cited by AI systems |
| 60–79 | Good | Frequently surfaced in AI answers |
| 40–59 | Fair | Inconsistently cited; needs improvement |
| 20–39 | **Poor** | Rarely or never cited by AI systems ← *UX90 is here* |
| 0–19 | Critical | Invisible to AI search |

---

## Executive Summary

UX90 Creations has built a technically accessible, well-structured 7-page agency site targeting the Miami/Hialeah market. Every AI crawler is allowed access, the site loads over HTTPS, and JSON-LD schema markup exists on all pages.

However, the site is nearly invisible to AI search engines for one primary reason: **it does not exist outside its own domain**. There are no profiles on Clutch, LinkedIn, Reddit, YouTube, or Wikipedia — the platforms AI systems mine to decide which businesses to cite. When a user asks ChatGPT, Perplexity, or Google Gemini "who does web design in Hialeah," UX90 has no corroborating signals to compete with agencies that have even minimal external presence.

The secondary issue is content depth. Service pages average 500 words — enough for a brochure, not enough for AI citation or organic ranking. The About page returns a 404. There is no privacy policy. The public contact email is a Gmail address. These gaps reduce trust scores across all AI platforms.

The good news: **the fixes are mostly free and implementable in days, not months.** Schema errors can be corrected in an afternoon. Meta descriptions take 30 minutes. Google Business Profile, LinkedIn, and Clutch profiles are free to create. The path from 33 to 60+ is realistic within 60–90 days.

---

## Category Deep-Dives

---

### 1. AI Citability & Visibility — 40/100 (Poor)

| Sub-Score | Value |
|-----------|-------|
| AI Crawler Access | 90/100 |
| Content Citability | 42/100 |
| Brand Mentions | 8/100 |
| llms.txt | 0/100 |

#### What's Working
- All AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot, etc.) are fully allowed via `User-agent: * / Allow: /`
- Sitemap correctly declared in robots.txt
- Several citation-ready content passages exist:
  - *"Most projects range from $1.5k–$6k"* — direct pricing answer (66/100 citability)
  - *"Most MVPs ship in 4–10 weeks"* — specific timeline (67/100)
  - *"Website development: 2–6 weeks depending on scope"* — FAQ format (69/100)

#### What's Broken
- **No llms.txt** — neither `/llms.txt` nor `/llms-full.txt` exist. The file would help AI crawlers understand site structure, entity identity, and canonical content. Virtually no Miami competitor has one — immediate differentiation opportunity.
- **Brand mentions: near zero** — No presence on Wikipedia, Reddit, YouTube, Clutch, G2, or LinkedIn. UX90 Creations is not a named entity in any AI knowledge base. When AI models answer "best web design in Hialeah," they draw from corroborated sources; UX90 has none.
- **FAQ schema errors** — FAQ sections exist on all 7 pages and FAQPage JSON-LD is present, but validation errors limit AI parser extraction.

#### Recommended llms.txt (deploy to https://ux90.dev/llms.txt)

```markdown
# UX90 Creations

> Miami and Hialeah web design, SEO, and mobile app development agency.
> Founded 2020. 50+ projects completed. Bilingual (English/Spanish) service.

## Services

- [Web Design Miami](https://ux90.dev/services/web-design-miami.html): Custom responsive websites. Projects $1,500–$6,000. Includes SEO setup, Core Web Vitals optimization, GA4 integration.
- [SEO Miami](https://ux90.dev/services/seo-miami.html): Local SEO, Google Business Profile optimization, technical SEO, bilingual content for Miami-Dade businesses.
- [Mobile App Development Miami](https://ux90.dev/services/mobile-apps-miami.html): iOS and Android apps using React Native and Flutter. MVPs in 4–10 weeks.
- [E-commerce Miami](https://ux90.dev/services/ecommerce-miami.html): Shopify and WooCommerce stores with payments and inventory management.
- [Desktop Applications](https://ux90.dev/services/desktop-apps-miami.html): Cross-platform apps using Electron, .NET, and Java.
- [UX/UI Design Miami](https://ux90.dev/services/ux-ui-design-miami.html): User-centered design, WCAG 2.1 accessibility compliance.

## About

- [Homepage](https://ux90.dev): Full agency overview, testimonials, and contact.

## Contact

- Email: hello@ux90.dev | Phone: +1 (786) 992-6153
- Location: Hialeah, Miami-Dade, FL
- Languages: English, Spanish
- Founded: 2020
```

---

### 2. Brand Authority Signals — 8/100 (Critical)

This is the **single largest drag** on the GEO Score. It is also the easiest to fix.

| Platform | Status | AI Citation Weight |
|----------|--------|-------------------|
| Wikipedia | ❌ Absent | Highest |
| Reddit | ❌ Absent | Very High |
| YouTube | ❌ Absent | High |
| Clutch.co | ❌ Absent | High (for agencies) |
| LinkedIn | ❌ Absent | High |
| G2 | ❌ Unknown | Medium |
| Yelp | ❌ Absent | Medium |
| Google Business Profile | ⚠ Unverified | High (local) |
| Instagram | ✅ Present (@ux90creations) | Low |

**Why this matters:** AI language models answer "who does SEO in Miami" by citing businesses they have found corroborated across multiple independent sources. A business that exists only on its own domain is effectively invisible. Creating profiles on Clutch and LinkedIn alone can meaningfully shift this — both are crawled heavily by all major AI systems.

**Path to 40/100 Brand Authority** (achievable in one week, all free):
1. Create Clutch.co agency profile → request 3–5 client reviews
2. Create LinkedIn Company Page (full profile: logo, description, services, location)
3. Verify Google Business Profile (category: Web Design Agency + SEO Agency)
4. Create Yelp listing with consistent NAP (Name / Address / Phone)
5. One genuine Reddit post in r/miamibusiness or r/webdev (share a tip, not a promo)

---

### 3. Content Quality & E-E-A-T — 43/100 (Fair)

| Dimension | Score |
|-----------|-------|
| Experience | 8/25 |
| Expertise | 9/25 |
| Authoritativeness | 10/25 |
| Trustworthiness | 17/25 |

#### Critical Content Issues

**Gmail contact address.** The public-facing email is `machindavid2@gmail.com`. For a web design agency selling professional services, this directly undermines credibility. Switch to `hello@ux90.dev` or `contact@ux90.dev`.

**About page returns 404.** `/about.html` does not exist. The About page is the most important E-E-A-T page on any agency site — it establishes who is behind the work, what their credentials are, and why clients should trust them.

**No privacy policy.** `/privacy-policy.html` returns 404. The site collects contact form submissions. A missing privacy policy is both a legal liability and a trust signal failure checked by Google's Quality Raters.

**Service pages are too thin:**

| Page | Word Count | Target | Gap |
|------|-----------|--------|-----|
| seo-miami.html | ~450 | 1,500+ | -1,050 |
| mobile-apps-miami.html | ~375 | 1,200+ | -825 |
| ecommerce-miami.html | ~425 | 1,200+ | -775 |
| web-design-miami.html | ~650 | 1,500+ | -850 |

**No author attribution anywhere.** Not a single page has a byline. AI models use author identity to assess E-E-A-T; anonymous content scores lower.

**No case studies.** The claim "50+ Projects Completed" is unsupported. Even three anonymized case studies with before/after metrics would provide the most powerful Experience signal currently absent from the entire site.

**Bilingual gap.** The agency markets bilingual capability but has no Spanish-language pages. Hialeah is 94% Hispanic. A Spanish-speaking business owner sees English-only content — a credibility disconnect and a major missed traffic opportunity. The WCAG reference on the web design page cites version 2.1, but 2.2 was released October 2023 — update it.

#### Content Priority Matrix

| Action | Impact | Effort | Priority |
|--------|--------|--------|----------|
| Create About page with founder bio | Very High | Low | P1 |
| Add privacy policy | High | Low | P1 |
| Replace Gmail with branded email | High | Low | P1 |
| Add author bylines to all pages | Medium | Low | P1 |
| Expand service pages to 1,500+ words | Very High | High | P2 |
| Add 3 named case studies | Very High | Medium | P2 |
| Create Spanish service pages + hreflang | High | High | P3 |
| Launch blog (8–12 articles) | High | High | P3 |

---

### 4. Technical Foundations — 47/100 (Poor)

| Check | Score | Status |
|-------|-------|--------|
| Crawlability & robots.txt | 72/100 | ✅ Clean |
| Server-Side Rendering | 65/100 | ✅ Likely static/pre-rendered |
| Mobile Optimization | 60/100 | ⚠ Missing srcset |
| URL Structure | 55/100 | ⚠ .html extension risk |
| Core Web Vitals (CLS/LCP) | 40/100 | ⚠ Image dimensions missing |
| Meta Tags & Indexability | 35/100 | 🔴 No meta descriptions, no canonical |
| Security Headers | 30/100 | 🔴 4 of 6 headers absent |

#### Critical Technical Fixes

**Zero meta descriptions.** Not a single page out of 7 has a `<meta name="description">` tag. Google writes its own snippet, losing click-through control on highest-conversion pages.

**No canonical tags.** Every page needs `<link rel="canonical" href="[self-url]">`. The `.html` extension pattern creates duplicate content risk if extension-free URLs also resolve.

**Missing `lang` attribute.** The `<html>` tag has no `lang="en"` attribute. This is a baseline accessibility requirement and a language detection signal for AI parsers.

**Images missing dimensions.** All images lack explicit `width` and `height` attributes, causing Cumulative Layout Shift (CLS). Client logos, hero images, and service icons are the primary offenders.

**Security headers absent:**
```
Content-Security-Policy:    MISSING
X-Frame-Options:            MISSING
X-Content-Type-Options:     MISSING
Referrer-Policy:            MISSING
Permissions-Policy:         MISSING
```
All five can be added in a single server configuration block.

**No Open Graph tags.** Sharing any page on social media or in a messaging app generates an uncontrolled preview. Add `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, and `og:type` to all pages.

**Stale sitemap.** All 7 URLs show `lastmod: 2025-10-15` — unchanged for 7 months. Implement dynamic lastmod or update manually when content changes.

#### Quick Technical Wins (< 1 hour each)

1. Add meta descriptions to all 7 pages (30 min of copy)
2. Add `lang="en"` to `<html>` tag (1 minute)
3. Add `width` and `height` to all `<img>` tags (eliminates CLS)
4. Add security headers via server config (one block)
5. Add canonical self-referencing tags to all pages

---

### 5. Structured Data — 23/100 (Critical)

**Note:** Schema markup does exist (16 JSON-LD blocks across 5 pages) but has significant validation errors.

| Schema Type | Present | Valid | Issues |
|-------------|---------|-------|--------|
| LocalBusiness | ✅ | ❌ | Wrong type, invalid `services` property, missing `logo`/`postalCode`/`streetAddress`, `areaServed` in wrong object |
| FAQPage | ✅ | ✅ | Valid but restricted — Google removed FAQ rich results for non-authority sites (Aug 2023). Kept for AI parsers. |
| HowTo | ✅ | ✅ (deprecated) | Google removed HowTo rich results (Sep 2023). **Remove immediately.** |
| BreadcrumbList | ✅ | ⚠ | Valid on service pages; homepage has single-item stub. Anchor URL `#services` may not resolve. |
| Service | ✅ | ⚠ | Missing `image`, `offers`, and `provider.sameAs` on all service pages |
| Organization | ❌ | — | Not present as standalone type |
| Person (founder) | ❌ | — | Not present anywhere |
| WebSite | ❌ | — | Not present |
| speakable | ❌ | — | Not present on any page |

#### Critical Schema Fix: LocalBusiness (Homepage)

Replace the current LocalBusiness block with this corrected version:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "UX90 Creations",
  "alternateName": "UX90",
  "description": "UX90 Creations is a web design, SEO, and application development agency based in Hialeah, FL, serving businesses across Miami-Dade.",
  "url": "https://ux90.dev",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ux90.dev/images/logo.png",
    "width": 200,
    "height": 60
  },
  "telephone": "+1-786-992-6153",
  "email": "hello@ux90.dev",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[YOUR STREET ADDRESS]",
    "addressLocality": "Hialeah",
    "addressRegion": "FL",
    "postalCode": "[YOUR ZIP]",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Hialeah"},
    {"@type": "City", "name": "Miami"},
    {"@type": "AdministrativeArea", "name": "Miami-Dade County"}
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.8576",
    "longitude": "-80.2781"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Web Design", "url": "https://ux90.dev/services/web-design-miami.html"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "SEO Services", "url": "https://ux90.dev/services/seo-miami.html"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Mobile App Development", "url": "https://ux90.dev/services/mobile-apps-miami.html"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "E-commerce Development", "url": "https://ux90.dev/services/ecommerce-miami.html"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Desktop Applications", "url": "https://ux90.dev/services/desktop-apps-miami.html"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "UX/UI Design", "url": "https://ux90.dev/services/ux-ui-design-miami.html"}}
    ]
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".faq-question", ".faq-answer", ".hero-description"]
  },
  "sameAs": [
    "https://www.instagram.com/ux90creations",
    "[ADD: LinkedIn company page URL]",
    "[ADD: Google Business Profile URL]",
    "[ADD: Clutch.co profile URL]",
    "[ADD: Crunchbase profile URL]"
  ]
}
```

#### Additional Missing Schemas to Add to Homepage

**Person schema (founder):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[FOUNDER NAME]",
  "jobTitle": "Founder & Lead Developer",
  "worksFor": {"@type": "Organization", "name": "UX90 Creations", "url": "https://ux90.dev"},
  "sameAs": ["[PERSONAL LINKEDIN URL]"]
}
```

**WebSite schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "UX90 Creations",
  "url": "https://ux90.dev/",
  "inLanguage": ["en-US", "es"],
  "publisher": {"@type": "Organization", "name": "UX90 Creations", "url": "https://ux90.dev"}
}
```

---

### 6. Platform Optimization — 32/100 (Critical)

| Platform | Score | Primary Blocker |
|----------|-------|----------------|
| Bing Copilot | 40/100 | No IndexNow, no Bing Webmaster Tools, no LinkedIn |
| Google AI Overviews | 38/100 | No GBP, schema errors, thin content |
| Google Gemini | 30/100 | No GBP, no YouTube, no Knowledge Graph entry |
| Perplexity AI | 28/100 | No Reddit/Clutch presence, no original data |
| ChatGPT Web Search | 24/100 | No entity recognition (no Wikipedia/LinkedIn), no author attribution |

#### Platform Quick Wins

| Action | Platforms Affected | Effort |
|--------|-------------------|--------|
| Add meta descriptions to all 7 pages | Google AIO, ChatGPT, Bing | 30 min |
| Verify Google Business Profile | Gemini, Google AIO | Free, 1 hr |
| Create LinkedIn Company Page | ChatGPT, Copilot, Gemini | Free, 1 hr |
| Create Clutch.co profile | Perplexity, ChatGPT | Free, 1 hr |
| Create llms.txt | All 5 platforms | 30 min |
| Add explicit bot user-agents to robots.txt | ChatGPT, Perplexity | 15 min |
| Implement IndexNow + Bing Webmaster Tools | Bing Copilot | 1 hr |
| Add visible last-updated dates to pages | ChatGPT, Perplexity, Google AIO | 30 min |

---

## Prioritized Action Plan

### Phase 1 — Critical (This Week, ~8 hours, mostly free)

| # | Action | Est. Time | GEO Impact |
|---|--------|-----------|------------|
| 1 | Verify Google Business Profile (full: logo, photos, services, hours, link to site) | 1 hr | +6 pts |
| 2 | Create LinkedIn Company Page (logo, description, services, Hialeah/Miami location) | 1 hr | +4 pts |
| 3 | Create Clutch.co agency profile → request 3–5 client reviews | 1 hr | +4 pts |
| 4 | Create `/llms.txt` at site root (use template in Section 1) | 30 min | +3 pts |
| 5 | Add meta descriptions to all 7 pages (150–160 chars each) | 30 min | +2 pts |
| 6 | Fix LocalBusiness schema: correct @type, fix `areaServed`, add `logo`/`foundingDate`, fix `hasOfferCatalog`, expand `sameAs` | 1 hr | +2 pts |
| 7 | Remove deprecated HowTo schema from homepage | 15 min | +1 pt |
| 8 | Add `lang="en"` to `<html>` tag | 5 min | Technical |
| 9 | Replace `machindavid2@gmail.com` with branded `hello@ux90.dev` email | 30 min | Trust |
| 10 | Create privacy policy page at `/privacy-policy.html` | 1 hr | Legal/Trust |

**Estimated score after Phase 1: ~47/100 (Fair)**

---

### Phase 2 — High Priority (This Month, ~20 hours)

| # | Action | Impact |
|---|--------|--------|
| 11 | Create About page with founder bio, photo, credentials, founding story | E-E-A-T, Authority |
| 12 | Add canonical self-referencing tags to all 7 pages | Technical, Dedup |
| 13 | Add `width` and `height` to all `<img>` tags (CLS fix) | Core Web Vitals |
| 14 | Add security headers (CSP, X-Frame-Options, nosniff, Referrer-Policy) | Security |
| 15 | Add Open Graph + Twitter Card meta tags to all pages | Social / AI Previews |
| 16 | Add `Person` schema for founder to homepage | E-E-A-T |
| 17 | Add `WebSite` schema block to homepage | Entity Recognition |
| 18 | Add `speakable` property to all LocalBusiness and Service schemas | AI Citability |
| 19 | Implement IndexNow + verify Bing Webmaster Tools, submit sitemap | Bing Copilot |
| 20 | Add visible last-updated dates to all service pages | Freshness |
| 21 | Add author bylines to all service pages | Expertise |
| 22 | Publish 3 named case studies with measurable outcomes (before/after metrics) | Experience, Authority |

**Estimated score after Phase 2: ~58/100 (Fair → Good boundary)**

---

### Phase 3 — Strategic (Next Quarter, ~40 hours)

| # | Action | Impact |
|---|--------|--------|
| 23 | Expand each service page to 1,500+ words with genuine depth | Content Authority |
| 24 | Create Spanish-language service pages + hreflang tags | Bilingual Traffic |
| 25 | Launch blog: 8–12 articles targeting informational queries | Topical Authority |
| 26 | Create Crunchbase and Yelp profiles | Brand Authority |
| 27 | Obtain Google Partner / Shopify Partner certifications | Expertise |
| 28 | Earn a Miami press mention or local directory feature | Authority |
| 29 | Create a GitHub organization profile | Entity Signals |
| 30 | Add `Offer` with pricing to all Service schemas | Schema Completeness |

**Estimated score after Phase 3: ~68–72/100 (Good)**

---

## Suggested Blog Topics (Phase 3)

Target informational queries where AI systems pull answers from local sources:

1. "How much does a website cost in Miami in 2026"
2. "Local SEO for restaurants in Hialeah"
3. "Shopify vs WooCommerce for Miami businesses"
4. "What are Core Web Vitals and why they matter for Florida businesses"
5. "How to rank on Google Maps in Miami-Dade"
6. "Best practices for bilingual SEO in English and Spanish"
7. "How to hire a web developer in Miami: what to look for"
8. "Mobile app development cost guide for Miami startups"

---

## Site Snapshot

| Property | Value |
|----------|-------|
| Domain | ux90.dev |
| Business | UX90 Creations |
| Location | Hialeah, Miami-Dade, FL |
| Founded | 2020 |
| Services | Web Design, SEO, Mobile Apps, Desktop Apps, UX/UI, E-commerce |
| Pages Indexed | 7 |
| Hosting | GitHub Pages (static HTML — good for AI crawlers) |
| HTTPS | ✅ Enforced (.dev TLD) |
| robots.txt | ✅ All bots allowed |
| Sitemap | ✅ https://ux90.dev/sitemap.xml (stale lastmod) |
| llms.txt | ❌ Missing |
| Schema | ⚠ 16 JSON-LD blocks present, significant validation errors |
| Meta Descriptions | ❌ Missing on all 7 pages |
| Canonical Tags | ❌ Missing on all 7 pages |
| About Page | ❌ 404 |
| Privacy Policy | ❌ 404 |
| Brand Profiles | ❌ Instagram only |

---

*Generated by GEO Audit — Claude Code / Anthropic*  
*Next recommended audit: 2026-08-07 (90 days)*
