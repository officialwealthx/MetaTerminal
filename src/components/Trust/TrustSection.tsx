"use client";

import React, { useCallback, useEffect, useRef } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const TRUST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MetaTerminal",
  url: "https://metaterminal.app",
  description:
    "MetaTerminal is a Trader Protection OS trusted by over 3,000 traders across 40+ countries. It detects emotional trading patterns in real-time and automatically blocks dangerous trades.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Trading Psychology",
    "Behavioral Finance",
    "Risk Management",
    "Emotional Trading",
    "Algorithmic Trading",
    "MetaTrader",
    "cTrader",
    "TradingView",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MetaTerminal Plans",
    itemListElement: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "CHF", url: "https://metaterminal.app/pricing", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Core", price: "29", priceCurrency: "CHF", url: "https://metaterminal.app/pricing", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Pro", price: "49", priceCurrency: "CHF", url: "https://metaterminal.app/pricing", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Elite Sentinel", price: "89", priceCurrency: "CHF", url: "https://metaterminal.app/pricing", availability: "https://schema.org/InStock" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "412",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ─── Ticker Events ──────────────────────────────────────────────────────── */
const TICKER_EVENTS = [
  { color: "#ff6b6b", text: "Revenge trade blocked", detail: "EURUSD · London · 2s ago" },
  { color: "#5ef0a8", text: "Account protected", detail: "Score normalized · Tokyo · 8s ago" },
  { color: "#a78bfa", text: "Tilt detected", detail: "3 trades in 90s · Frankfurt · 14s ago" },
  { color: "#f5c542", text: "Oversize lot blocked", detail: "GBPJPY · New York · 21s ago" },
  { color: "#5ef0a8", text: "Cooldown complete", detail: "Trading resumed · Sydney · 34s ago" },
  { color: "#ff6b6b", text: "FOMO entry blocked", detail: "XAUUSD · Dubai · 41s ago" },
  { color: "#a78bfa", text: "Emotion spike", detail: "Score 82 paused · Singapore · 53s ago" },
  { color: "#5ef0a8", text: "Shield activated", detail: "4th loss streak · Toronto · 1m ago" },
];

/* ─── Stat Cards ─────────────────────────────────────────────────────────── */
const STAT_CARDS = [
  {
    target: 3200000,
    label: "Trades analyzed & protected",
    color: "#5ef0a8",
    format: (n: number) => {
      if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M+`;
      if (n >= 1000) return `${(n / 1000).toFixed(0)}K+`;
      return `${n}+`;
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    miniPath: "M0,20 C10,18 20,10 40,12 C60,14 80,8 100,10 C120,12 140,6 160,8",
  },
  {
    target: 63,
    label: "Fewer emotional trading losses",
    color: "#a78bfa",
    format: (n: number) => `${Math.round(n)}%`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    miniPath: "M0,16 C20,14 40,18 60,12 C80,6 100,10 120,8 C140,6 160,4 180,6",
  },
  {
    target: 3000,
    label: "Trusted Users Worldwide",
    color: "#f5c542",
    format: (n: number) => {
      if (n >= 1000) return `${(n / 1000).toFixed(0)},000+`;
      return `${n}+`;
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    miniPath: "M0,18 C15,16 30,14 50,12 C70,10 90,8 110,7 C130,6 150,5 170,4",
  },
];

/* ─── Platform Badges ────────────────────────────────────────────────────── */
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

/* ─── Scramble Counter ──────────────────────────────────────────────────── */
const DIGITS = "0123456789";

function scrambleAnimate(
  el: HTMLSpanElement,
  target: number,
  format: (n: number) => string,
  duration = 2400,
) {
  const SCRAMBLE_END = 0.52; // first 52% rapid random digits
  // Throttle random-character generation to ~30 fps to avoid excessive Math.random() calls
  const SCRAMBLE_INTERVAL = 1000 / 30;
  const start = performance.now();
  let lastScramble = 0;

  const frame = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    if (progress >= 1) {
      el.textContent = format(target);
      el.classList.add("trust-num-settled");
      return;
    }

    if (progress < SCRAMBLE_END) {
      // Slot-machine phase: throttled random digit cycling
      if (now - lastScramble >= SCRAMBLE_INTERVAL) {
        lastScramble = now;
        const scrambleRatio = progress / SCRAMBLE_END;
        const targetStr = format(target);
        el.textContent = targetStr
          .split("")
          .map((char) => {
            if (char >= "0" && char <= "9" && Math.random() > scrambleRatio * 0.85) {
              return DIGITS[Math.floor(Math.random() * 10)];
            }
            return char;
          })
          .join("");
      }
    } else {
      // Count-up phase: smooth cubic ease to final value
      const countProgress = (progress - SCRAMBLE_END) / (1 - SCRAMBLE_END);
      const eased = 1 - Math.pow(1 - countProgress, 3);
      el.textContent = format(Math.round(eased * target));
    }

    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function TrustSection() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animFrameRef = useRef<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const countedRef = useRef(false);

  const setCounterRef = useCallback(
    (i: number) => (el: HTMLSpanElement | null) => {
      counterRefs.current[i] = el;
    },
    [],
  );

  /* ── 3D tilt handlers ── */
  const handleCardMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px) scale(1.02)`;
      card.style.transition = "transform 0.06s linear";
    },
    [],
  );

  const handleCardMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      card.style.transform = "";
      card.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease";
    },
    [],
  );

  /* ── Ticker RAF animation ── */
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let pos = 0;
    const speed = 0.5;

    const tick = () => {
      if (!el) return;
      const half = el.scrollWidth / 2;
      pos += speed;
      if (pos >= half) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  /* ── Scramble counters via IntersectionObserver ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      STAT_CARDS.forEach((card, i) => {
        const el = counterRefs.current[i];
        if (el) {
          el.textContent = card.format(card.target);
          el.classList.add("trust-num-settled");
        }
      });
      return;
    }

    const section = document.getElementById("trust");
    if (!section) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countedRef.current) {
          countedRef.current = true;
          STAT_CARDS.forEach((card, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            setTimeout(() => {
              scrambleAnimate(el, card.target, card.format, 2400);
            }, i * 160);
          });
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observerRef.current.observe(section);
    return () => observerRef.current?.disconnect();
  }, []);

  const allEvents = [...TICKER_EVENTS, ...TICKER_EVENTS];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TRUST_JSON_LD) }}
      />
      <section
        id="trust"
        className="trust-section"
        aria-label="Social Proof — Trusted by Traders Around the World"
      >
        {/* Cinematic fog — smooth gradient transition from Hero, no hard line */}
        <div className="trust-fog" aria-hidden="true" />

        {/* Command-Center dot-grid background */}
        <div className="trust-grid-bg" aria-hidden="true" />

        {/* Animated horizontal scan line */}
        <div className="trust-scan-line" aria-hidden="true" />

        {/* Ambient background glows */}
        <div className="trust-glows" aria-hidden="true">
          <div className="trust-glow trust-glow-purple" />
          <div className="trust-glow trust-glow-green" />
          <div className="trust-glow trust-glow-gold" />
        </div>

        {/* Badge */}
        <div className="trust-badge" role="note" aria-label="Social Proof">
          <span className="trust-badge-dot" aria-hidden="true" />
          <span>Social Proof</span>
        </div>

        {/* H2 Heading */}
        <h2 className="trust-h2">
          <span className="trust-h2-white">Trusted by Traders</span>
          <br />
          <span className="trust-h2-gradient">Around the World.</span>
        </h2>

        {/* Subtitle */}
        <p className="trust-sub">
          <strong>3,000+ traders</strong> across <strong>40+ countries</strong>{" "}
          trust MetaTerminal to protect their accounts from emotional trading decisions.
        </p>

        {/* Platform Badges */}
        <div className="trust-platforms" role="list" aria-label="Supported trading platforms">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="trust-platform-badge" role="listitem">
              <span className="trust-platform-icon" aria-hidden="true">{p.icon}</span>
              <span className="trust-platform-name">{p.name}</span>
            </div>
          ))}
          <p className="trust-platform-sub">over 3,000 trusted users</p>
        </div>

        {/* Stat Cards — Command Center style */}
        <div className="trust-stats" role="list" aria-label="MetaTerminal statistics">
          {STAT_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="trust-stat-card"
              role="listitem"
              style={
                {
                  "--card-color": card.color,
                  "--card-delay": `${i * 0.14}s`,
                } as React.CSSProperties
              }
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Animated gradient border overlay */}
              <div className="trust-card-border" aria-hidden="true" />

              {/* Corner bracket decorations */}
              <div className="trust-card-corner trust-card-corner-tl" aria-hidden="true" />
              <div className="trust-card-corner trust-card-corner-br" aria-hidden="true" />

              <div className="trust-stat-icon" aria-hidden="true" style={{ color: card.color }}>
                {card.icon}
              </div>

              <span
                className="trust-stat-number"
                style={{ color: card.color }}
                ref={setCounterRef(i)}
                aria-live="polite"
              >
                {card.format(0)}
              </span>

              <span className="trust-stat-label">{card.label}</span>

              <svg
                className="trust-stat-mini-chart"
                viewBox="0 0 160 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d={card.miniPath}
                  fill="none"
                  stroke={card.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
              </svg>

              {/* Live data indicator */}
              <div className="trust-card-live" aria-hidden="true">
                <span
                  className="trust-card-live-dot"
                  style={{ background: card.color }}
                />
                <span className="trust-card-live-text">LIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Ticker */}
        <div className="trust-ticker-wrap" aria-hidden="true">
          <div className="trust-ticker-label">
            <span className="trust-ticker-live-dot" />
            LIVE FEED
          </div>
          <div className="trust-ticker-fade-left" />
          <div className="trust-ticker-fade-right" />
          <div className="trust-ticker-track">
            <div className="trust-ticker-inner" ref={tickerRef}>
              {allEvents.map((ev, idx) => (
                <div key={idx} className="trust-ticker-event">
                  <span className="trust-ticker-dot" style={{ background: ev.color }} />
                  <span className="trust-ticker-text">{ev.text}</span>
                  <span className="trust-ticker-detail">· {ev.detail}</span>
                  <span className="trust-ticker-sep" aria-hidden="true">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="trust-cta">
          <p className="trust-cta-text">
            <strong>Join thousands of traders</strong> who stopped losing money to their emotions.
          </p>
          <a href="#pricing" className="trust-cta-btn" aria-label="Start free today">
            Start Free Today
            <svg
              className="trust-cta-arrow"
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
        </div>
        <div className="trust-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
