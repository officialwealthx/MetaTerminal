"use client";

import React, { useCallback, useEffect, useRef } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const FEATURES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MetaTerminal Features",
  description:
    "MetaTerminal watches every trade, detects emotional patterns, and acts before you make a costly mistake.",
  url: "https://metaterminal.app",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Revenge Trade Blocker",
      description:
        "Detects and blocks immediate re entries after losses, preventing the most destructive emotional pattern in trading.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FOMO Shield",
      description:
        "Stops impulsive entries after large market moves, keeping you from chasing candles at the worst possible moment.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Oversize Lot Guard",
      description:
        "Automatically blocks position sizes that exceed your normal range during emotional episodes, protecting your capital.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cooldown Timer",
      description:
        "Enforces smart cooling periods after loss streaks, giving your mind time to reset before the next trade.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Tilt Detector",
      description:
        "Identifies overtrading patterns when too many positions open in rapid succession, catching tilt before it spirals.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Sentinel Mode",
      description:
        "Full automatic protection that blocks all trading activity when your Safety Score™ drops to critical levels.",
    },
  ],
};

/* ─── How It Works Steps ─────────────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Detect",
    desc: "Our behavioral engine analyzes your trading in real time — frequency, lot sizes, timing patterns, and emotional signals across every session.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Alert",
    desc: "When emotional patterns emerge, your Safety Score™ drops instantly with visual warnings and risk level changes you can see and feel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Protect",
    desc: "If risk exceeds your threshold, Sentinel™ automatically blocks dangerous trades and enforces smart cooldown periods.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

/* ─── Feature Cards ──────────────────────────────────────────────────────── */
const FEATURE_CARDS = [
  {
    title: "Revenge Trade Blocker",
    color: "#ff6b6b",
    desc: "Detects and blocks immediate re entries after losses, preventing the most destructive emotional pattern in trading.",
    miniPath: "M0,18 C15,20 30,8 50,10 C70,12 85,4 100,6 C115,8 135,14 160,12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    title: "FOMO Shield",
    color: "#ffb450",
    desc: "Stops impulsive entries after large market moves, keeping you from chasing candles at the worst possible moment.",
    miniPath: "M0,12 C20,14 40,6 60,8 C80,10 100,4 120,6 C140,8 155,10 160,8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Oversize Lot Guard",
    color: "#ff6b6b",
    desc: "Automatically blocks position sizes that exceed your normal range during emotional episodes, protecting your capital.",
    miniPath: "M0,14 C20,16 35,20 55,14 C75,8 95,12 115,10 C135,8 150,14 160,12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Cooldown Timer",
    color: "#5ef0a8",
    desc: "Enforces smart cooling periods after loss streaks, giving your mind time to reset before the next trade.",
    miniPath: "M0,16 C15,14 30,10 50,12 C70,14 90,8 110,10 C130,12 145,8 160,10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Tilt Detector",
    color: "#a78bfa",
    desc: "Identifies overtrading patterns when too many positions open in rapid succession, catching tilt before it spirals.",
    miniPath: "M0,10 C20,12 40,18 60,14 C80,10 100,16 120,12 C140,8 155,12 160,10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Sentinel Mode",
    color: "#5ef0a8",
    desc: "Full automatic protection that blocks all trading activity when your Safety Score™ drops to critical levels.",
    miniPath: "M0,14 C20,12 40,8 60,10 C80,12 100,6 120,8 C140,10 155,6 160,8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="24" height="24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepObserverRef = useRef<IntersectionObserver | null>(null);
  const cardObserverRef = useRef<IntersectionObserver | null>(null);
  const setStepRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      stepsRef.current[i] = el;
    },
    [],
  );

  const setLineRef = useCallback(
    (i: number) => (el: SVGLineElement | null) => {
      linesRef.current[i] = el;
    },
    [],
  );

  const setCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      cardsRef.current[i] = el;
    },
    [],
  );

  /* ── Steps entrance animation ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      stepsRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
      linesRef.current.forEach((el) => {
        if (el) el.style.strokeDashoffset = "0";
      });
      return;
    }

    const container = sectionRef.current?.querySelector(".feat-steps");
    if (!container) return;

    stepObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        stepsRef.current.forEach((el, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 200);
        });

        linesRef.current.forEach((el, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.strokeDashoffset = "0";
          }, i * 200 + 300);
        });

        stepObserverRef.current?.disconnect();
      },
      { threshold: 0.15 },
    );

    stepObserverRef.current.observe(container);
    return () => stepObserverRef.current?.disconnect();
  }, []);

  /* ── Cards entrance animation ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      cardsRef.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
      return;
    }

    const grid = sectionRef.current?.querySelector(".feat-cards-grid");
    if (!grid) return;

    cardObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        cardsRef.current.forEach((el, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
          }, i * 120);
        });

        cardObserverRef.current?.disconnect();
      },
      { threshold: 0.1 },
    );

    cardObserverRef.current.observe(grid);
    return () => cardObserverRef.current?.disconnect();
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FEATURES_JSON_LD) }}
      />
      <section
        id="features"
        ref={sectionRef}
        className="feat-section"
        aria-label="Features — How MetaTerminal Protects Your Trading"
        role="region"
      >
        {/* Top fade — smooth transition from Solution */}
        <div className="feat-top-fade" aria-hidden="true" />

        {/* Dot-grid background */}
        <div className="feat-grid-bg" aria-hidden="true" />

        {/* Ambient glows */}
        <div className="feat-glows" aria-hidden="true">
          <div className="feat-glow feat-glow-purple" />
          <div className="feat-glow feat-glow-green" />
          <div className="feat-glow feat-glow-purple-2" />
        </div>

        {/* ── A. Section Header ── */}
        <div className="feat-header">
          <div className="feat-badge" role="note" aria-label="How It Works">
            <span className="feat-badge-dot" aria-hidden="true" />
            <span>How It Works</span>
          </div>

          <h2 className="feat-h2">
            <span className="feat-h2-white">Protection That</span>
            <span className="feat-h2-gradient">Never Sleeps.</span>
          </h2>

          <p className="feat-sub">
            MetaTerminal watches every trade, detects emotional patterns, and acts before you make a costly mistake.
          </p>
        </div>

        {/* ── B. 3-Step Flow ── */}
        <div className="feat-steps" role="list" aria-label="How MetaTerminal works in 3 steps">

          {/* Desktop connecting lines (SVG) */}
          <svg
            className="feat-steps-lines"
            viewBox="0 0 800 20"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="feat-line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5ef0a8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="feat-line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#5ef0a8" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <line
              ref={setLineRef(0)}
              x1="260" y1="10" x2="390" y2="10"
              stroke="url(#feat-line-grad-1)"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="feat-step-line"
            />
            <line
              ref={setLineRef(1)}
              x1="410" y1="10" x2="540" y2="10"
              stroke="url(#feat-line-grad-2)"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="feat-step-line"
            />
          </svg>

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={setStepRef(i)}
              className="feat-step"
              role="listitem"
              style={{ "--step-delay": `${i * 0.2}s` } as React.CSSProperties}
            >
              <div className="feat-step-circle" aria-hidden="true">
                <div className="feat-step-glow-ring" />
                <span className="feat-step-icon">{step.icon}</span>
              </div>
              <div className="feat-step-num" aria-hidden="true">{step.num}</div>
              <h3 className="feat-step-title">{step.title}</h3>
              <p className="feat-step-desc">{step.desc}</p>
            </div>
          ))}

          {/* Mobile vertical connecting line */}
          <div className="feat-steps-vline" aria-hidden="true" />
        </div>

        {/* ── C. Feature Cards Grid ── */}
        <div
          className="feat-cards-grid"
          role="list"
          aria-label="MetaTerminal protection features"
        >
          {FEATURE_CARDS.map((card, i) => (
            <article
              key={card.title}
              ref={setCardRef(i)}
              className="feat-card"
              role="listitem"
              style={
                {
                  "--card-color": card.color,
                  "--card-delay": `${i * 0.12}s`,
                } as React.CSSProperties
              }
            >
              {/* Corner brackets */}
              <div className="feat-card-corner feat-card-corner-tl" aria-hidden="true" />
              <div className="feat-card-corner feat-card-corner-br" aria-hidden="true" />

              {/* Live indicator */}
              <div className="feat-card-live" aria-hidden="true">
                <span className="feat-card-live-dot" style={{ background: card.color }} />
                <span className="feat-card-live-text">LIVE</span>
              </div>

              {/* Icon */}
              <div className="feat-card-icon" style={{ color: card.color }} aria-hidden="true">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="feat-card-title">{card.title}</h3>
              <p className="feat-card-desc">{card.desc}</p>

              {/* Mini sparkline */}
              <svg
                className="feat-card-sparkline"
                viewBox="0 0 160 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d={card.miniPath}
                  fill="none"
                  stroke={card.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                  strokeLinecap="round"
                />
              </svg>
            </article>
          ))}
        </div>

        {/* ── D. Bottom CTA ── */}
        <div className="feat-cta">
          <p className="feat-cta-text">Your strategy deserves protection.</p>
          <div className="feat-cta-buttons">
            <a
              href="/register"
              className="feat-cta-btn-primary"
              aria-label="Start free today — create your MetaTerminal account"
            >
              Start Free Today
              <svg
                className="feat-cta-arrow"
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
              href="#pricing"
              className="feat-cta-btn-ghost"
              aria-label="See MetaTerminal pricing plans"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="feat-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
