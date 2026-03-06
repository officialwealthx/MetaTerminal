"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const PRICING_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MetaTerminal",
  description:
    "The only trading tool that actively blocks emotional trades. Real-time Safety Score, behavioral analysis, and automated protection.",
  url: "https://metaterminal.app/pricing",
  brand: { "@type": "Brand", name: "MetaTerminal" },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/pricing",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Core",
      price: "29",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/pricing",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/pricing",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Elite Sentinel",
      price: "89",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/pricing",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
};

/* ─── Types ──────────────────────────────────────────────────────────────── */
type FeatureIcon = "check" | "lock" | "warn" | "eye" | "no" | "soon" | "divider";
interface FeatureItem {
  text: string;
  type: FeatureIcon;
}

/* ─── Plan Data ──────────────────────────────────────────────────────────── */
const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "Start tracking. Start seeing.",
    monthlyPrice: 0,
    annualPrice: 0,
    annualSavings: "",
    description: "Start for free. No credit card required.",
    cta: "Start Free",
    ctaHref: "/register",
    popular: false,
    elite: false,
    accentColor: "#5ef0a8",
    features: [
      { text: "Safety Score™ — 1× daily calculation", type: "check" },
      { text: "Trade Journal — today only, resets at midnight", type: "check" },
      { text: "Equity Curve — today only", type: "check" },
      { text: "Win Rate & CRV — today only", type: "check" },
      { text: "News Alerts — 1× email, high-impact events", type: "check" },
      { text: "1 Connected Account", type: "check" },
      { text: "MT4 · MT5 · cTrader", type: "check" },
      { text: "Score History — locked", type: "lock" },
      { text: "No protection tools", type: "no" },
      { text: "No analytics", type: "no" },
    ] as FeatureItem[],
  },
  {
    id: "core",
    name: "Core",
    tagline: "See everything. Know everything. Every week, delivered.",
    monthlyPrice: 29,
    annualPrice: 24,
    annualSavings: "Save 17%",
    description: "Full visibility into your trading patterns.",
    cta: "Get Core",
    ctaHref: "/register",
    popular: false,
    elite: false,
    accentColor: "#60a5fa",
    features: [
      { text: "Everything in Free, plus:", type: "divider" },
      { text: "Real-Time Safety Score™ + Full History", type: "eye" },
      { text: "Unlimited Journal History — forever", type: "eye" },
      { text: "Full Equity Curve — historical, zoomable", type: "eye" },
      { text: "Complete Win Rate & CRV Tracking", type: "eye" },
      { text: "Drawdown Tracker — current + max + history", type: "eye" },
      { text: "Daily P&L Overview", type: "eye" },
      { text: "Weekly Intelligence Report — email + PDF", type: "check" },
      { text: "Passive Pattern Labels — ⚠️ Revenge, ⚠️ FOMO tags", type: "eye" },
      { text: "Daily Score Summary — email", type: "check" },
      { text: "CSV Export", type: "check" },
      { text: "3 Connected Accounts", type: "check" },
      { text: "No active protection (no pop-ups)", type: "no" },
      { text: "No deep analytics", type: "no" },
    ] as FeatureItem[],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Your trading coach that never sleeps.",
    monthlyPrice: 49,
    annualPrice: 40,
    annualSavings: "Save 18%",
    description: "Active protection and deep behavioral insights.",
    cta: "Get Pro",
    ctaHref: "/register",
    popular: true,
    elite: false,
    accentColor: "#a78bfa",
    features: [
      { text: "Everything in Core, plus:", type: "divider" },
      { text: "Revenge Trade Blocker — skippable pop-up", type: "warn" },
      { text: "FOMO Shield — skippable pop-up", type: "warn" },
      { text: "Oversize Lot Guard — skippable warning", type: "warn" },
      { text: "Tilt Detector — skippable warning", type: "warn" },
      { text: "Cooldown Mode — auto-pause, skippable", type: "warn" },
      { text: "Max Drawdown Guard — skippable", type: "warn" },
      { text: "Daily Loss Limit — skippable", type: "warn" },
      { text: "RRR Enforcer — skippable", type: "warn" },
      { text: "Danger Alerts — real-time pop-up + sound", type: "check" },
      { text: "Smart News Alerts — 1h / 30min / 5min", type: "check" },
      { text: "Zone Change Alerts — automatic", type: "check" },
      { text: "Session Analytics — London / NY / Tokyo / Sydney", type: "check" },
      { text: "Pair Performance Analysis", type: "check" },
      { text: "Emotion Heatmap — day × time matrix", type: "check" },
      { text: "Streak Analytics & Sentiment Tracker", type: "check" },
      { text: "Session Replay", type: "check" },
      { text: "Trading Plan Builder + Compliance Score", type: "check" },
      { text: "Pro Weekly Report — heatmap + action items", type: "check" },
      { text: "CSV + PDF Export", type: "check" },
      { text: "10 Connected Accounts", type: "check" },
      { text: "Priority Email Support", type: "check" },
    ] as FeatureItem[],
  },
  {
    id: "elite",
    name: "Elite Sentinel",
    tagline: "Zero compromise. Sentinel protects — even from yourself.",
    monthlyPrice: 89,
    annualPrice: 72,
    annualSavings: "Save 19%",
    description: "Total lockdown. Maximum protection. No exceptions.",
    cta: "Get Elite",
    ctaHref: "/register",
    popular: false,
    elite: true,
    accentColor: "#ff6b6b",
    features: [
      { text: "Everything in Pro, plus:", type: "divider" },
      { text: "Sentinel Mode™ — total lockdown, NOT skippable", type: "lock" },
      { text: "Hard Cooldown — timer must expire", type: "lock" },
      { text: "Hard Daily Loss Limit — locked until tomorrow", type: "lock" },
      { text: "Hard Max Drawdown — account auto-protected", type: "lock" },
      { text: "Hard Lot Size Lock — oversized trades blocked", type: "lock" },
      { text: "Hard RRR Lock — below min CRV blocked", type: "lock" },
      { text: "Custom Rules Engine — IF/THEN/AND/OR logic", type: "check" },
      { text: "Prop Firm Mode — FTMO / MyFundedFX / The5%ers", type: "check" },
      { text: "Challenge Tracker + Health Score", type: "check" },
      { text: "Elite Weekly Report — AI recommendations", type: "check" },
      { text: "API Access — REST API", type: "check" },
      { text: "Webhook Notifications — Discord, Telegram, Slack", type: "check" },
      { text: "Multi-Account Dashboard", type: "check" },
      { text: "White-Glove Onboarding — 1:1 setup call", type: "check" },
      { text: "Unlimited Connected Accounts", type: "check" },
      { text: "Priority Support + Personal Contact", type: "check" },
      { text: "Community Leaderboard", type: "soon" },
    ] as FeatureItem[],
  },
];

/* ─── Platform Icons ─────────────────────────────────────────────────────── */
const PLATFORMS = [
  {
    name: "MetaTrader 4",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" width="20" height="20" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(94,240,168,0.15)" />
        <text x="16" y="22" textAnchor="middle" fill="#5ef0a8" fontSize="11" fontWeight="800" fontFamily="monospace">MT4</text>
      </svg>
    ),
  },
  {
    name: "MetaTrader 5",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" width="20" height="20" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(167,139,250,0.15)" />
        <text x="16" y="22" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="800" fontFamily="monospace">MT5</text>
      </svg>
    ),
  },
  {
    name: "cTrader",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" width="20" height="20" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(94,240,168,0.15)" />
        <text x="16" y="22" textAnchor="middle" fill="#5ef0a8" fontSize="12" fontWeight="800" fontFamily="monospace">cT</text>
      </svg>
    ),
  },
  {
    name: "TradingView",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" width="20" height="20" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(245,197,66,0.15)" />
        <text x="16" y="22" textAnchor="middle" fill="#f5c542" fontSize="11" fontWeight="800" fontFamily="monospace">TV</text>
      </svg>
    ),
  },
];

/* ─── FAQ Data ───────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we will prorate your billing.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Every paid plan comes with a 14 day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through Stripe.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep access until the end of your billing period. Your data is retained for 90 days in case you want to reactivate.",
  },
];

/* ─── Price Animation ────────────────────────────────────────────────────── */
function animatePrice(
  el: HTMLSpanElement,
  from: number,
  to: number,
  duration = 1500,
) {
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(from + (to - from) * eased)}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currentPricesRef = useRef<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);
  const prefersReducedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardObserverRef = useRef<IntersectionObserver | null>(null);
  const isAnnualRef = useRef(false);

  const setCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[i] = el;
    },
    [],
  );

  const setPriceRef = useCallback(
    (i: number) => (el: HTMLSpanElement | null) => {
      priceRefs.current[i] = el;
    },
    [],
  );

  /* ── Check prefers-reduced-motion on mount ── */
  useEffect(() => {
    prefersReducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  /* ── Sync isAnnual ref ── */
  useEffect(() => {
    isAnnualRef.current = isAnnual;
  }, [isAnnual]);

  /* ── 3D tilt handlers ── */
  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedRef.current) return;
      const card = e.currentTarget;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const isPopular = card.dataset.popular === "true";
        const baseY = isPopular ? -8 : 0;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(${baseY - 4}px) scale(${isPopular ? 1.04 : 1.02})`;
        card.style.transition = "transform 0.06s linear";
      });
    },
    [],
  );

  const handleCardMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      cancelAnimationFrame(rafRef.current);
      const card = e.currentTarget;
      const isPopular = card.dataset.popular === "true";
      card.style.transform = isPopular
        ? "translateY(-8px) scale(1.02)"
        : "translateY(0) scale(1)";
      card.style.transition =
        "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
    },
    [],
  );

  /* ── Card entrance animation ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      cardRefs.current.forEach((el, i) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = PLANS[i]?.popular
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)";
        }
      });
      return;
    }

    const grid = sectionRef.current?.querySelector(".price-cards-grid");
    if (!grid) return;

    cardObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = PLANS[i]?.popular
              ? "translateY(-8px) scale(1.02)"
              : "translateY(0) scale(1)";
          }, i * 120);
        });
        cardObserverRef.current?.disconnect();
      },
      { threshold: 0.15 },
    );

    cardObserverRef.current.observe(grid);
    return () => cardObserverRef.current?.disconnect();
  }, []);

  /* ── Price entrance animation (fires once on scroll into view) ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const section = sectionRef.current;
    if (!section) return;

    if (prefersReduced) {
      PLANS.forEach((plan, i) => {
        const el = priceRefs.current[i];
        if (el) el.textContent = `${plan.monthlyPrice}`;
        currentPricesRef.current[i] = plan.monthlyPrice;
      });
      hasAnimatedRef.current = true;
      return;
    }

    PLANS.forEach((_, i) => {
      const el = priceRefs.current[i];
      if (el) el.textContent = "0";
    });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          PLANS.forEach((plan, i) => {
            const el = priceRefs.current[i];
            if (!el) return;
            const target = isAnnualRef.current
              ? plan.annualPrice
              : plan.monthlyPrice;
            animatePrice(el, 0, target, 1500);
            currentPricesRef.current[i] = target;
          });
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observerRef.current.observe(section);
    return () => observerRef.current?.disconnect();
  }, []);

  /* ── Price animation on billing toggle ── */
  useEffect(() => {
    if (!hasAnimatedRef.current) return;
    const prefersReduced = prefersReducedRef.current;
    PLANS.forEach((plan, i) => {
      const el = priceRefs.current[i];
      if (!el) return;
      const from = currentPricesRef.current[i];
      const to = isAnnual ? plan.annualPrice : plan.monthlyPrice;
      if (prefersReduced) {
        el.textContent = `${to}`;
      } else {
        animatePrice(el, from, to, 600);
      }
      currentPricesRef.current[i] = to;
    });
  }, [isAnnual]);

  /* ── FAQ toggle ── */
  const toggleFaq = useCallback((i: number) => {
    setOpenFaq((prev) => (prev === i ? null : i));
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_JSON_LD) }}
      />
      <section
        id="pricing"
        ref={sectionRef}
        className="price-section"
        aria-label="Pricing — Choose Your Protection Level"
        role="region"
      >
        {/* Top fade */}
        <div className="price-top-fade" aria-hidden="true" />

        {/* Dot-grid background */}
        <div className="price-grid-bg" aria-hidden="true" />

        {/* Ambient glows */}
        <div className="price-glows" aria-hidden="true">
          <div className="price-glow price-glow-purple" />
          <div className="price-glow price-glow-gold" />
        </div>

        {/* Scan line */}
        <div className="price-scan-line" aria-hidden="true" />

        {/* ── A. Section Header ── */}
        <div className="price-header">
          <div className="price-badge" role="note" aria-label="Pricing section">
            <span className="price-badge-dot" aria-hidden="true" />
            <span>Pricing</span>
          </div>

          <h2 className="price-h2">
            <span className="price-h2-white">Choose Your</span>
            <br />
            <span className="price-h2-gradient">Protection Level.</span>
          </h2>

          <p className="price-sub">
            Start free, upgrade when you&apos;re ready. Every plan includes our
            core emotional trading detection engine.
          </p>
        </div>

        {/* ── B. Billing Toggle ── */}
        <div
          className="price-toggle-wrap"
          role="group"
          aria-label="Billing period"
        >
          <button
            className={`price-toggle-btn${!isAnnual ? " price-toggle-active" : ""}`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
          >
            Monthly
          </button>
          <button
            className={`price-toggle-btn${isAnnual ? " price-toggle-active" : ""}`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Annual
            <span
              className="price-toggle-save"
              aria-label="Save up to 19 percent when billed annually"
            >
              Save up to 19%
            </span>
          </button>
        </div>

        {/* ── C. Pricing Cards ── */}
        <div
          className="price-cards-grid"
          id="pricing-cards"
          role="list"
          aria-label="Pricing plans"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              ref={setCardRef(i)}
              role="listitem"
              data-card-index={i}
              data-popular={plan.popular ? "true" : "false"}
              className={`price-card${plan.popular ? " price-card-popular" : ""}${plan.elite ? " price-card-elite" : ""}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              aria-label={`${plan.name} plan`}
            >
              {/* Corner decorations */}
              <span
                className="price-card-corner price-card-corner-tl"
                aria-hidden="true"
              />
              <span
                className="price-card-corner price-card-corner-tr"
                aria-hidden="true"
              />

              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="price-popular-badge"
                  aria-label="Most Popular plan"
                >
                  <span
                    className="price-popular-dot"
                    aria-hidden="true"
                  />
                  Most Popular
                </div>
              )}

              {/* Plan name row */}
              <div className="price-plan-name-row">
                {plan.elite && (
                  <svg
                    className="price-shield-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff6b6b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                <h3
                  className="price-plan-name"
                  style={{ color: plan.accentColor }}
                >
                  {plan.name}
                </h3>
                {plan.elite && (
                  <div
                    className="price-live-badge price-live-badge-elite"
                    aria-label="Live protection active"
                  >
                    <span
                      className="price-live-dot price-live-dot-elite"
                      aria-hidden="true"
                    />
                    <span>LIVE</span>
                  </div>
                )}
              </div>

              {/* Tagline */}
              <p className="price-tagline">{plan.tagline}</p>

              {/* Price display */}
              <div
                className="price-price-row"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="price-currency">CHF</span>
                <span
                  ref={setPriceRef(i)}
                  className="price-number"
                  style={{ color: plan.accentColor }}
                ></span>
                <span className="price-per">/mo</span>
              </div>

              {/* Billing note */}
              <p className="price-billing-note">
                {isAnnual
                  ? plan.annualSavings
                    ? `Billed annually · ${plan.annualSavings}`
                    : "Billed annually"
                  : "Billed monthly"}
              </p>

              {/* Description */}
              <p className="price-description">{plan.description}</p>

              {/* CTA button */}
              <a
                href={plan.ctaHref}
                className={`price-cta-btn${plan.popular ? " price-cta-btn-primary" : plan.elite ? " price-cta-btn-elite" : " price-cta-btn-ghost"}`}
                aria-label={`${plan.cta} — ${plan.name} plan`}
              >
                {plan.cta}
                <svg
                  className="price-cta-arrow"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>

              {/* Feature section divider */}
              <div className="price-feature-divider" aria-hidden="true" />

              {/* Feature list */}
              <ul
                className="price-feature-list"
                aria-label={`${plan.name} plan features`}
              >
                {plan.features.map((feature, fi) => {
                  if (feature.type === "divider") {
                    return (
                      <li key={fi} className="price-feature-divider-text">
                        {feature.text}
                      </li>
                    );
                  }
                  if (feature.type === "no") {
                    return (
                      <li key={fi} className="price-feature-item price-feature-item-no">
                        <svg
                          className="price-feat-icon price-icon-no"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="14"
                          height="14"
                          aria-hidden="true"
                        >
                          <line x1="4" y1="4" x2="12" y2="12" />
                          <line x1="12" y1="4" x2="4" y2="12" />
                        </svg>
                        {feature.text}
                      </li>
                    );
                  }
                  if (feature.type === "lock") {
                    return (
                      <li key={fi} className="price-feature-item price-feature-item-lock">
                        <svg
                          className="price-feat-icon price-icon-lock"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="14"
                          height="14"
                          aria-hidden="true"
                        >
                          <rect x="3" y="7" width="10" height="8" rx="1.5" />
                          <path d="M5 7V5a3 3 0 0 1 6 0v2" />
                        </svg>
                        {feature.text}
                      </li>
                    );
                  }
                  if (feature.type === "warn") {
                    return (
                      <li key={fi} className="price-feature-item price-feature-item-warn">
                        <svg
                          className="price-feat-icon price-icon-warn"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="14"
                          height="14"
                          aria-hidden="true"
                        >
                          <path d="M8 2L1 14h14L8 2z" />
                          <line x1="8" y1="7" x2="8" y2="10" />
                          <circle cx="8" cy="12.5" r="0.5" fill="currentColor" />
                        </svg>
                        {feature.text}
                      </li>
                    );
                  }
                  if (feature.type === "eye") {
                    return (
                      <li key={fi} className="price-feature-item price-feature-item-eye">
                        <svg
                          className="price-feat-icon price-icon-eye"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="14"
                          height="14"
                          aria-hidden="true"
                        >
                          <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" />
                          <circle cx="8" cy="8" r="2" />
                        </svg>
                        {feature.text}
                      </li>
                    );
                  }
                  if (feature.type === "soon") {
                    return (
                      <li key={fi} className="price-feature-item price-feature-item-soon">
                        <svg
                          className="price-feat-icon price-icon-soon"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="14"
                          height="14"
                          aria-hidden="true"
                        >
                          <circle cx="8" cy="8" r="6" />
                          <polyline points="8 5 8 8 10 10" />
                        </svg>
                        {feature.text}
                        <span className="price-soon-badge" aria-label="Coming soon">
                          Soon
                        </span>
                      </li>
                    );
                  }
                  /* default: check */
                  return (
                    <li key={fi} className="price-feature-item">
                      <svg
                        className="price-feat-icon price-check-icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke={plan.accentColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="14"
                        height="14"
                        aria-hidden="true"
                      >
                        <polyline points="2 8 6 12 14 4" />
                      </svg>
                      {feature.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* ── D. Trust Reinforcement ── */}
        <div
          className="price-trust"
          role="complementary"
          aria-label="Trust signals"
        >
          <div className="price-trust-row">
            <span className="price-trust-item">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="#5ef0a8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <polyline points="2 8 6 12 14 4" />
              </svg>
              No credit card required for free plan
            </span>
            <span className="price-trust-sep" aria-hidden="true">
              ·
            </span>
            <span className="price-trust-item">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="#5ef0a8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <polyline points="2 8 6 12 14 4" />
              </svg>
              Cancel anytime
            </span>
            <span className="price-trust-sep" aria-hidden="true">
              ·
            </span>
            <span className="price-trust-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5c542"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Trusted by 3,000+ traders worldwide
            </span>
          </div>

          <div
            className="price-platforms"
            aria-label="Supported trading platforms"
          >
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="price-platform-badge"
                title={p.name}
                aria-label={p.name}
              >
                {p.icon}
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── E. FAQ Accordion ── */}
        <div className="price-faq-wrap" aria-label="Frequently asked questions">
          <h3 className="price-faq-title">Common Questions</h3>
          <div className="price-faq-list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`price-faq-item${openFaq === i ? " price-faq-item-open" : ""}`}
              >
                <button
                  id={`price-faq-trigger-${i}`}
                  className="price-faq-trigger"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`price-faq-content-${i}`}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`price-faq-icon${openFaq === i ? " price-faq-icon-open" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div
                  id={`price-faq-content-${i}`}
                  role="region"
                  aria-labelledby={`price-faq-trigger-${i}`}
                  className={`price-faq-content${openFaq === i ? " price-faq-content-open" : ""}`}
                >
                  <p className="price-faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── F. Bottom CTA ── */}
        <div
          className="price-bottom-cta"
          role="complementary"
          aria-label="Call to action"
        >
          <h3 className="price-bottom-cta-text">
            Ready to protect your trading?
          </h3>
          <div className="price-bottom-cta-buttons">
            <a
              href="/register"
              className="price-cta-btn price-cta-btn-primary"
              aria-label="Start free today — create your MetaTerminal account"
            >
              Start Free Today
              <svg
                className="price-cta-arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#pricing-cards"
              className="price-cta-btn price-cta-btn-ghost"
              aria-label="Compare all pricing plans"
            >
              Compare Plans
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="price-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
