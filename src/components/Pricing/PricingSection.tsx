"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const PRICING_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MetaTerminal",
  description:
    "Trader Protection OS that detects emotional trading patterns in real time and automatically blocks dangerous trades.",
  url: "https://metaterminal.app",
  brand: { "@type": "Brand", name: "MetaTerminal" },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/register",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Core",
      price: "29",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/register",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/register",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Elite Sentinel",
      price: "89",
      priceCurrency: "CHF",
      url: "https://metaterminal.app/register",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
};

/* ─── Plan Data ──────────────────────────────────────────────────────────── */
const PLANS = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For beginners exploring emotional awareness",
    cta: "Get Started",
    ctaHref: "/register",
    popular: false,
    elite: false,
    accentColor: "#5ef0a8",
    features: [
      { text: "Safety Score™ (basic)", divider: false },
      { text: "Daily emotional summary", divider: false },
      { text: "1 connected account", divider: false },
      { text: "Community access", divider: false },
      { text: "Basic session tracking", divider: false },
    ],
  },
  {
    id: "core",
    name: "Core",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "For serious traders wanting basic protection",
    cta: "Start Core",
    ctaHref: "/register",
    popular: false,
    elite: false,
    accentColor: "#a78bfa",
    features: [
      { text: "Everything in Free, plus:", divider: true },
      { text: "Real time Safety Score™", divider: false },
      { text: "Revenge trade detection", divider: false },
      { text: "FOMO alerts", divider: false },
      { text: "Up to 3 connected accounts", divider: false },
      { text: "Email notifications", divider: false },
      { text: "7 day session history", divider: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For active traders needing full behavioral analytics",
    cta: "Start Pro",
    ctaHref: "/register",
    popular: true,
    elite: false,
    accentColor: "#a78bfa",
    features: [
      { text: "Everything in Core, plus:", divider: true },
      { text: "Full behavioral analytics", divider: false },
      { text: "Oversize lot guard", divider: false },
      { text: "Tilt detector", divider: false },
      { text: "Cooldown timer", divider: false },
      { text: "Unlimited connected accounts", divider: false },
      { text: "Priority support", divider: false },
      { text: "30 day session history", divider: false },
      { text: "Custom alert rules", divider: false },
    ],
  },
  {
    id: "elite",
    name: "Elite Sentinel",
    monthlyPrice: 89,
    annualPrice: 71,
    description: "For professional traders demanding maximum protection",
    cta: "Go Elite",
    ctaHref: "/register",
    popular: false,
    elite: true,
    accentColor: "#f5c542",
    features: [
      { text: "Everything in Pro, plus:", divider: true },
      { text: "Sentinel™ automatic trade blocking", divider: false },
      { text: "Full account protection mode", divider: false },
      { text: "Advanced drawdown monitoring", divider: false },
      { text: "RRR enforcer", divider: false },
      { text: "Session replay with AI insights", divider: false },
      { text: "Dedicated account manager", divider: false },
      { text: "Unlimited session history", divider: false },
      { text: "API access", divider: false },
    ],
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
              aria-label="Save 20 percent when billed annually"
            >
              Save 20%
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
                    stroke="#f5c542"
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
                    className="price-live-badge"
                    aria-label="Live protection active"
                  >
                    <span
                      className="price-live-dot"
                      aria-hidden="true"
                    />
                    <span>LIVE</span>
                  </div>
                )}
              </div>

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
                {isAnnual ? "Billed annually" : "Billed monthly"}
              </p>

              {/* Description */}
              <p className="price-description">{plan.description}</p>

              {/* CTA button */}
              <a
                href={plan.ctaHref}
                className={`price-cta-btn${plan.popular ? " price-cta-btn-primary" : " price-cta-btn-ghost"}`}
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
                {plan.features.map((feature, fi) =>
                  feature.divider ? (
                    <li key={fi} className="price-feature-divider-text">
                      {feature.text}
                    </li>
                  ) : (
                    <li key={fi} className="price-feature-item">
                      <svg
                        className="price-check-icon"
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
                  ),
                )}
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
