# METATERMINAL — COMPLETE BUILD PLAN
### Confidential · Co-Founder Document · Version 1.0 · May 2026

---

## THE MISSION

> **Build the greatest trading software ever created.**
> A platform that makes Bloomberg look outdated, makes serious traders better,
> and becomes the standard for every trader in the world.

---

## WHAT WE ARE BUILDING

```
One platform. One login. Two powerful worlds.

┌─────────────────────────────────────────────────────────────┐
│                      METATERMINAL                           │
│                    metaterminal.io                          │
├──────────────────────────┬──────────────────────────────────┤
│       📊 MetaDesk         │        🌐 MetaFeed              │
│   Trading Intelligence    │     Social Trading World        │
│                           │                                 │
│  · 8 Performance Scores   │  · Community Feed               │
│  · AI Trade Journal       │  · Trader Profiles              │
│  · AI News Engine         │  · Trade Ideas & Analysis       │
│  · Behavioral Engine      │  · Live Sessions                │
│  · E-Learning & Certs     │  · Leaderboard                  │
│  · Backtesting Tool       │  · Verified Traders             │
│  · MetaAI Coach           │  · Direct Messages              │
│                           │                                 │
│  Subscription required    │  Free to join                   │
└──────────────────────────┴──────────────────────────────────┘
```

---

## WHY WE WILL WIN

| What exists today | What MetaTerminal does |
|---|---|
| Bloomberg — powerful but $2,000/mo, no community, 1980s design | Everything Bloomberg does + social + AI coach + modern design |
| TradingView — charts only, no behavioral intelligence | Full performance tracking + community + AI |
| Trading courses — passive learning, no tracking | Learning tied directly to your real performance data |
| Trading communities — no data, no verification | Verified performance profiles, real scores, real traders |

---

## DESIGN PHILOSOPHY

```
"More Formula 1. Less TikTok."
"The product is the pitch. The design is the proof."
"Bloomberg's power. Apple's beauty. Linear's precision."

PUBLIC WEBSITE:    White / Clean / Professional (like BCG, Stripe)
APP INSIDE:        Dark / Dense / Premium (like Bloomberg, Linear)
BOTH:              Pixel-perfect. Bug-free. World-class.
```

### Color System
| Token | Color | Usage |
|---|---|---|
| Background Base | `#080D0B` | App main background |
| Background Surface | `#0D1512` | Cards & panels |
| Background Elevated | `#132019` | Modals & hover |
| Brand Green | `#00A896` | Primary actions |
| Accent Green | `#4ECDC4` | Highlights (from logo) |
| Deep Green | `#0A3D2E` | Buttons on white |
| White | `#F0FAF6` | Primary text in app |
| Muted | `#4A6860` | Secondary text |
| Success | `#00C896` | Wins, positive |
| Danger | `#FF4757` | Losses, warnings |
| Elite Gold | `#C9A84C` | Elite features only |

### Typography
| Font | Usage |
|---|---|
| Space Grotesk Bold | All headlines |
| Inter | Body text, navigation, labels |
| JetBrains Mono | Numbers, data, scores, code |

---

## NAVIGATION DESIGN

### Public Website Navigation (White / BCG × Bloomberg)
```
🛡 MetaTerminal    Platform ▾    Pricing    Resources ▾
                                             Sign In  [Get Started →]

→ "Platform" opens a Mega Menu:
  ┌────────────────────────────────────────────────────┐
  │  📊 MetaDesk              🌐 MetaFeed              │
  │  ─────────────            ─────────────            │
  │  Dashboard                Community Feed           │
  │  8 Performance Scores     Trader Profiles          │
  │  Trade Journal            Trade Ideas              │
  │  AI News Engine           Live Sessions            │
  │  Behavioral Engine        Leaderboard              │
  │  E-Learning               Verified Traders         │
  │                                                    │
  │  ✦ New: MetaAI 2.0 — Your personal trading coach  │
  └────────────────────────────────────────────────────┘

→ Clean. Minimal. Professional.
→ On scroll: glass blur effect + subtle border
→ No hamburger on desktop
→ Mobile: Full-screen overlay menu
```

### App Navigation (Dark / Bloomberg × Linear)
```
LEFT SIDEBAR (240px):
┌──────────────────────────┐
│  🛡 MetaTerminal          │
│                           │
│  ┌─────────────────────┐  │
│  │ ▣ MetaDesk  ◉ Feed  │  │  ← WORLD SWITCHER
│  └─────────────────────┘  │
│                           │
│  MAIN                     │
│  ──────                   │
│  ○  Dashboard             │
│  ○  Scores                │
│  ○  Journal               │
│  ○  Analytics             │
│  ○  News                  │
│  ○  Calendar              │
│  ○  MetaAI          NEW   │
│  ○  Learn                 │
│  ○  Backtesting           │
│  ○  Leaderboard           │
│                           │
│  SYSTEM                   │
│  ──────                   │
│  ○  Settings              │
│                           │
│  [Avatar] username        │
│  Pro Plan 🟢              │
│  [⚡ Upgrade]             │
└──────────────────────────┘

TOP BAR (56px):
┌──────────────────────────────────────────────────────┐
│  Dashboard        [🔍 Search everything...  ⌘K]  🔔 👤│
└──────────────────────────────────────────────────────┘

MOBILE BOTTOM NAV:
┌────────────────────────────────────────────────────┐
│   🏠      📓      🤖      📰      👤              │
│  Home   Journal  MetaAI  News   Profile            │
└────────────────────────────────────────────────────┘
```

---

## ALL 43 PAGES — COMPLETE OVERVIEW

```
STATUS: ⬜ Not Built  🔨 In Progress  ✅ Done
```

### STEP 0 — FOUNDATION *(before any page)*
```
⬜  0A   Design System (tokens, colors, fonts, spacing)
⬜  0B   UI Components (Button, Card, Badge, Input, Modal...)
⬜  0C   Public Navbar + Mega Menu
⬜  0D   App Sidebar + World Switcher + Top Bar
⬜  0E   Mobile Bottom Navigation
⬜  0F   Supabase Database Schema
```

### STEP 1 — LANDING PAGE *(public, white)*
```
⬜  01   / — Landing Page
         · Navbar + Mega Menu
         · Hero (headline + product mockup)
         · Live market ticker bar
         · "Two Worlds" interactive showcase
         · Score system showcase
         · MetaAI showcase
         · Community preview (MetaFeed)
         · E-Learning preview
         · Pricing section
         · Final CTA
         · Footer
```

### STEP 2 — PUBLIC PAGES *(white)*
```
⬜  02   /features       Full features overview
⬜  03   /pricing        Pricing & packages detail
⬜  04   /community      MetaFeed public preview
⬜  05   /learn          E-Learning public preview
⬜  06   /about          About MetaTerminal
⬜  07   /blog           Insights & articles
⬜  08   /changelog      What's new
```

### STEP 3 — AUTH PAGES *(dark)*
```
⬜  09   /login              Sign in
⬜  10   /register           Create account
⬜  11   /onboarding         4-step setup (one time)
⬜  12   /forgot-password    Password reset
```

### STEP 4 — MetaDESK *(dark, trading)*
```
⬜  13   /desk                  MAIN DASHBOARD
⬜  14   /desk/scores           8 Scores detail
⬜  15   /desk/journal          Trade journal
⬜  16   /desk/journal/[id]     Single trade detail
⬜  17   /desk/analytics        Performance analytics
⬜  18   /desk/news             AI news feed
⬜  19   /desk/calendar         Economic calendar
⬜  20   /desk/ai               MetaAI assistant
⬜  21   /desk/backtesting      Backtesting tool
⬜  22   /desk/learn            E-Learning hub
⬜  23   /desk/learn/[course]   Course detail
⬜  24   /desk/leaderboard      Top traders
⬜  25   /desk/connections      Broker connections
⬜  26   /desk/certificates     My certificates
```

### STEP 5 — MetaFEED *(dark, social)*
```
⬜  27   /feed                  Main community feed
⬜  28   /feed/explore          Explore & trending
⬜  29   /feed/notifications    Notifications
⬜  30   /feed/messages         Direct messages
⬜  31   /feed/bookmarks        Saved posts
⬜  32   /profile/[username]    Trader profile
```

### STEP 6 — SETTINGS *(dark)*
```
⬜  33   /settings                   Overview
⬜  34   /settings/profile           Edit profile
⬜  35   /settings/plan              Manage subscription
⬜  36   /settings/billing           Payments & invoices
⬜  37   /settings/security          Password & security
⬜  38   /settings/notifications     Notification prefs
⬜  39   /settings/connections       Broker connections
⬜  40   /settings/privacy           Privacy settings
```

### STEP 7 — LEGAL & FINISH
```
⬜  41   /terms       Terms of service
⬜  42   /privacy     Privacy policy
⬜  43   /cookies     Cookie policy
⬜  44   Stripe integration (payments)
⬜  45   Full testing & bug fixing
⬜  46   🚀 LAUNCH
```

---

## THE 4 PACKAGES

| | 🆓 FREE | 🥈 STARTER | 🥇 PRO | 💎 ELITE |
|---|---|---|---|---|
| **Price** | $0 | $29/mo | $79/mo | $199/mo |
| **Yearly** | — | $19/mo | $59/mo | $149/mo |
| MetaFeed | ✅ Basic | ✅ Full | ✅ Full + Verified | ✅ Elite Badge |
| Dashboard | Preview only | ✅ 6 Scores | ✅ All 8 Scores | ✅ All 8 Scores |
| Trade Journal | ❌ | ✅ | ✅ | ✅ |
| AI News | ❌ | ✅ Basic | ✅ Full | ✅ Institutional |
| MetaAI | ❌ | ❌ | ✅ 50/day | ✅ Unlimited |
| E-Learning | 1 course | Paths 1–3 | All courses | Elite Masterclass |
| Backtesting | ❌ | ❌ | ✅ Manual | ✅ Auto + Order Flow |
| AI Coach | ❌ | ❌ | ❌ | ✅ Daily personal |
| Mentor Sessions | ❌ | ❌ | ❌ | ✅ 2x/month |
| Support | — | Standard | Priority | Same-day |

---

## BROKER CONNECTIONS

```
4 Ways to connect — all automatic, all read-only:

1. MT4/MT5 Expert Advisor (EA download)
2. cTrader OAuth login
3. Broker API key (read-only: Binance, Bybit, OANDA...)
4. TradingView Webhook

NEVER: Manual trade input (scores would be meaningless)
NEVER: Write access to broker accounts
NEVER: Money transactions of any kind
```

---

## TECH STACK

| Tool | Purpose | Cost |
|---|---|---|
| Next.js 15 + TypeScript | Frontend framework | Free |
| Tailwind CSS + shadcn/ui | Design system | Free |
| Framer Motion | Animations | Free |
| Supabase | Database + Auth + Realtime | Free to start |
| Stripe | Subscriptions & payments | 2.9% per transaction |
| OpenAI API (GPT-4o mini) | MetaAI + News explanations | ~$30/mo |
| Mux.com | Video hosting (E-Learning) | Free to start |
| Resend.com | Transactional emails | Free (3K/mo) |
| Vercel | Hosting & deployment | Free to start |
| NewsAPI | Live news feed | Free (100 req/day) |
| **Total** | | **~$30–50/mo to start** |

---

## QUALITY STANDARDS

```
Every single page we build must meet these standards:

DESIGN:
✅ Matches design system exactly
✅ Every element has a purpose
✅ All states: hover / active / focus / loading / error / empty
✅ Consistent typography everywhere

RESPONSIVE:
✅ 375px  — Mobile
✅ 768px  — Tablet
✅ 1280px — Desktop
✅ 1920px — Wide screen

TECHNICAL:
✅ TypeScript strict (no 'any')
✅ Zero console errors
✅ Page load < 2 seconds
✅ Lighthouse score 95+
✅ WCAG 2.1 accessibility

CONTENT:
✅ No placeholder text
✅ Real, professional copy
✅ English as primary language
```

---

## CO-FOUNDER RESPONSIBILITIES

| | Founder 1 | Founder 2 |
|---|---|---|
| **Role** | Software & Development | Content & Education |
| **Builds** | All 43 pages, full software | Video courses, written guides |
| **Tools** | Next.js, Supabase, AI tools | Camera, editing software |
| **Deadline** | Step by step (see timeline) | Ready by Step 4 (E-Learning) |
| **Daily sync** | 30 min every morning | 30 min every morning |

---

## TIMELINE

```
WEEK 1:   Step 0 (Foundation) + Step 1 (Landing Page)
WEEK 2:   Step 2 (Public Pages) + Step 3 (Auth)
WEEK 3:   Step 4 (MetaDesk — all 14 pages)
WEEK 4:   Step 5 (MetaFeed — all 6 pages)
WEEK 5:   Step 6 (Settings) + Step 7 (Legal + Stripe)
WEEK 6:   Full testing + polish + LAUNCH 🚀
```

---

## REVENUE PROJECTION

| Month | Paying Users | MRR |
|---|---|---|
| Month 1 | 200 | $8,000 |
| Month 3 | 1,500 | $75,000 |
| Month 6 | 10,000 | $580,000 |
| Month 12 | 50,000 | $3,250,000 |

**Year 1 ARR target: ~$39,000,000**

---

## 5-YEAR VISION

```
YEAR 1:   Dominate the retail trading software market
YEAR 2:   Global expansion (EN/DE/ES/AR) + Mobile app launch
YEAR 3:   Expand to investing, personal finance, portfolio tracking
YEAR 4:   B2B — white label for brokers & prop firms
YEAR 5:   Industry standard — "If you trade, you use MetaTerminal"
           Target valuation: $1 Billion+
```

---

## IMMEDIATE ACTIONS

```
FOUNDER 1 (Software) — THIS WEEK:
□ Create accounts: Supabase, Vercel, Stripe, OpenAI, Mux, Resend
□ Reset GitHub repository completely
□ Start Step 0: Design System + Foundation

FOUNDER 2 (Content) — THIS WEEK:
□ Script first 5 video courses
□ Write first 5 trading guides
□ Prepare recording setup
□ All content ready before Step 4 begins

BOTH — THIS WEEK:
□ Set up shareholders agreement
□ Open business bank account
□ Daily 30-min sync call scheduled
□ Register company (GmbH / Ltd)
```

---

## WHERE WE ARE RIGHT NOW

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ✅  Vision defined                                     ║
║   ✅  All 43 pages planned                               ║
║   ✅  Navigation designed (Bloomberg × BCG × Linear)     ║
║   ✅  Design system defined                              ║
║   ✅  Tech stack chosen                                  ║
║   ✅  Revenue model clear                                ║
║   ✅  Co-founder responsibilities assigned               ║
║                                                          ║
║   → NEXT: Step 0 — Build the Foundation                  ║
║     Then: Step 1 — Landing Page                          ║
║     Then: Page by page until launch 🚀                   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

*MetaTerminal Build Plan · Version 1.0 · May 2026*
*Confidential — Co-Founders Only*
