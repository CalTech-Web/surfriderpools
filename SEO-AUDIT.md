# Surfrider Pool Service - Pre-Launch SEO Audit

Site: https://surfriderpools.vercel.app
Stack: Next.js 16 (App Router) + Tailwind v4 on Vercel
Last updated: 2026-06-19

This maps the site against the pre-launch SEO checklist, the on-page SEO elements,
internal linking, and external linking frameworks. Items are marked DONE (in code),
or ACTION (needs an external account or the production domain).

---

## Section 1 - Technical Foundation

| Item | Status | Notes |
|---|---|---|
| HTTPS + valid SSL | DONE | Vercel serves HTTPS with auto certificates |
| HTTP to HTTPS redirect | DONE | Handled by Vercel |
| WWW canonicalization | ACTION | Decide at custom-domain cutover (currently *.vercel.app) |
| Noindex removed sitewide | DONE | Only privacy and terms are noindex by design |
| Self-referencing canonicals | DONE | Every page sets alternates.canonical |
| robots.txt | DONE | /robots.txt allows all, points to sitemap |
| XML sitemap | DONE | /sitemap.xml, 19 URLs, all 200, includes city pages |
| Submit sitemap to Google Search Console | ACTION | Needs GSC account + verification |
| Submit sitemap to Bing Webmaster Tools | ACTION | Needs Bing account |
| HTML sitemap page | DONE | /sitemap, linked in footer |
| Custom 404 | DONE | app/not-found.tsx, branded |
| Redirect chains/loops | DONE | None |
| Security headers | DONE | HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy (next.config.ts) |
| Mobile responsive | DONE | Tested 375 / 768 / 1280, mobile action bar, no horizontal scroll |
| Viewport meta + theme-color | DONE | Next default viewport + themeColor #06b6d4 |
| Core Web Vitals | ACTION | Static site + next/image is fast; run PageSpeed Insights after domain cutover |
| CDN | DONE | Vercel edge network |
| Image compression / WebP | PARTIAL | Source images optimized with sharp; next/image serves AVIF/WebP automatically |
| Lazy loading | DONE | next/image lazy loads below-the-fold images, hero uses priority |

## Section 2 - On-Page SEO Elements

| Item | Status | Notes |
|---|---|---|
| Unique title tags, keyword near front, brand suffix | DONE | Title template + per-page titles |
| Unique meta descriptions with keyword + CTA | DONE | All pages, ~150-160 chars, no quotes |
| One H1 per page with focus keyword | DONE | PageHero renders the single H1 |
| Heading hierarchy H1>H2>H3 | DONE | Section/Heading components |
| Focus keyword in first 100 words | DONE | Home, service, city, blog intros |
| Focus keyword bolded once | DONE | Blog post intro (strong) |
| Image alt text (keyword/location aware) | DONE | All meaningful images; decorative use empty alt |
| Image file names | PARTIAL | Descriptive names (hero-pool, pool-cleaning, pressure-washing); not fully keyword-renamed |

## Section 3 - Open Graph & Social

| Item | Status | Notes |
|---|---|---|
| og:title / description / url / type | DONE | Root + per-page openGraph |
| og:image 1200x630 + width/height/alt | DONE | app/opengraph-image.tsx (next/og), referenced with dimensions + alt |
| og:site_name / og:locale | DONE | site name + en_US |
| Twitter summary_large_image + image alt | DONE | Uses the 1200x630 OG image with alt |
| Unique OG per page type | PARTIAL | Branded default OG sitewide; per-page custom OG images optional later |
| Clear social scrape cache after launch | ACTION | Run FB/LinkedIn debuggers after domain cutover |

## Section 4 - Schema Markup (validated structure)

| Schema | Status | Notes |
|---|---|---|
| Organization | DONE | layout |
| LocalBusiness (NAP, geo, hours, hasMap, OfferCatalog) | DONE | layout + per city page |
| WebSite | DONE | layout (SearchAction points at /blog filter; optional to remove) |
| BreadcrumbList | DONE | All inner pages |
| Service | DONE | Service pages + OfferCatalog |
| FAQPage | DONE | Home, services, service + city FAQ sections |
| Article + author (Organization) | DONE | Blog post, with visible byline + date |
| Validate in Rich Results Test | ACTION | Run search.google.com/test/rich-results after launch |

## Section 5 - Analytics & Tracking

| Item | Status | Notes |
|---|---|---|
| GA4 install | SCAFFOLDED | components/Analytics.tsx loads GA4 only when NEXT_PUBLIC_GA_ID is set. ACTION: add the real Measurement ID in Vercel env vars |
| Google Search Console verified | ACTION | Needs account + verification at domain cutover |
| Bing Webmaster Tools | ACTION | Needs account |
| Conversion tracking (form, calls) | ACTION | Configure in GA4 once live; phone links are tel: ready |

## Section 6 - Security & Trust

| Item | Status | Notes |
|---|---|---|
| Privacy Policy + Terms published | DONE | /privacy-policy, /terms-of-service, footer links |
| Contact info visible | DONE | Phone, email, address in header, footer, contact page |
| About page | DONE | /about |
| Spam protection on form | PARTIAL | Turnstile widget present; ACTION: add real sitekey + register domain in caltechweb-forms |
| Security headers | DONE | See Section 1 |
| No mixed content | DONE | All assets HTTPS |

## Section 7 - Local SEO

| Item | Status | Notes |
|---|---|---|
| LocalBusiness schema on homepage | DONE | With geo + areaServed |
| City/region in title + H1 of local pages | DONE | 6 city pages: "Pool Service in {City}, FL" |
| Location pages, unique content | DONE | Dunedin, Clearwater, Palm Harbor, Tarpon Springs, Safety Harbor, Oldsmar |
| NAP consistent | DONE | Single source in lib/site.ts |
| Embedded Google Map on contact | ACTION | Optional, can embed map iframe (hasMap link present in schema) |
| Google Business Profile | ACTION | Create + verify for the Dunedin address |
| Local directories (Yelp, Apple Maps) | ACTION | Manual listings |

## Section 8 - Internal Linking

| Item | Status | Notes |
|---|---|---|
| Homepage links to all key pages | DONE | Nav + footer |
| No orphan pages | DONE | All pages reachable; city pages linked from /service-areas, /services, and each other |
| Contextual in-body internal links | DONE | Blog (to pool-cleaning, pool-repair, services, contact), service pages (to service-areas), about (to services, service-areas), services hub (to cities), city pages (to services, contact, nearby city) |
| Varied anchor text, no "click here" | DONE | Descriptive anchors throughout |
| Crawlable navigation (a href) | DONE | Standard Link/anchor tags |
| Click depth under 3 | DONE | Flat architecture |

## Section 9 - External Linking

| Item | Status | Notes |
|---|---|---|
| Authoritative, vetted external links | DONE | Blog post: CDC Healthy Swimming (cdc.gov) and Wikipedia Algae, both verified HTTP 200 |
| Open in new tab + rel noopener noreferrer | DONE | All external links |
| Relevant, descriptive anchor text | DONE | "healthy swimming guidance from the CDC", "algae" |

## Section 10 - Content Readiness

| Item | Status | Notes |
|---|---|---|
| No placeholder/dummy content | DONE | Verified, no Lorem/TODO |
| No duplicate content | DONE | City pages have unique intros, neighborhoods, tips |
| Minimum word counts | DONE | Service + city + blog exceed minimums |
| All CTAs link correctly | DONE | Quote buttons to /contact, tel: links work |
| Contact form submitting | ACTION | Form posts to forms.caltechweb.com; register surfriderpools.com in caltechweb-forms sites.ts (routes to todd@surfriderpm.com) and add Turnstile sitekey |
| tel: and mailto: links work | DONE | PhoneLink + mailto in footer/contact |
| Spelling/grammar, no em dashes | DONE | Style rule enforced |

---

## Launch blockers still open (need you / accounts)
1. Register surfriderpools.com in caltechweb-forms sites.ts + add Turnstile sitekey (contact form is otherwise non-functional in production).
2. Add real GA4 Measurement ID as NEXT_PUBLIC_GA_ID in Vercel env vars.
3. Custom domain cutover (surfriderpools.com to Vercel) + decide www vs non-www.

## High priority within first week
4. Verify Google Search Console + submit sitemap; submit to Bing.
5. Create + verify Google Business Profile (Dunedin NAP).
6. Run Rich Results Test + PageSpeed Insights on the live domain; clear FB/LinkedIn scrape cache.

## Optional polish
7. Per-page custom OG images; embed a Google Map on the contact page; consider removing the WebSite SearchAction until an on-site search exists.
