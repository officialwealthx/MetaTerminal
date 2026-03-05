"use client";

import React, { useCallback, useEffect, useRef } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const PROBLEM_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why 92% of Traders Lose Money: The Emotional Trading Problem",
  description:
    "92% of retail traders lose money not because of bad strategy, but because of emotional decisions they can't control. MetaTerminal was built to solve exactly this.",
  author: { "@type": "Organization", name: "MetaTerminal", url: "https://metaterminal.app" },
  datePublished: "2024-01-01",
  dateModified: "2025-01-01",
  inLanguage: "en",
  isAccessibleForFree: true,
  about: [
    { "@type": "Thing", name: "Revenge Trading", description: "Immediately re-entering after a loss to recover quickly, ignoring all risk rules." },
    { "@type": "Thing", name: "FOMO Entries", description: "Jumping into trades after seeing a big move, fearing to miss out on profits." },
    { "@type": "Thing", name: "Overtrading", description: "Opening too many positions too fast, draining focus and capital simultaneously." },
    { "@type": "Thing", name: "Loss Chasing", description: "Doubling down on losing positions hoping they will reverse, increasing exposure." },
    { "@type": "Thing", name: "Oversize Lots", description: "Trading 5-10x normal position size during emotional episodes, amplifying losses." },
    { "@type": "Thing", name: "Tilt Spiral", description: "Complete loss of emotional control leading to irrational, destructive trading behavior." },
  ],
};

/* ─── Counter Stats ──────────────────────────────────────────────────────── */
const COUNTER_STATS = [
  {
    value: 92,
    suffix: "%",
    isFloat: false,
    label: "of retail traders lose money due to emotional decisions",
    color: "#ff6b6b",
  },
  {
    value: 73,
    suffix: "%",
    isFloat: false,
    label: "of losses happen within 60 min after a prior loss",
    color: "#ffb450",
  },
  {
    value: 4.2,
    suffix: "x",
    isFloat: true,
    label: "larger lot sizes used during emotional episodes",
    color: "#ff6b6b",
  },
];

/* ─── Problem Cards ──────────────────────────────────────────────────────── */
const PROBLEM_CARDS = [
  {
    id: "revenge",
    title: "Revenge Trading",
    color: "#ff6b6b",
    description: "Immediately re-entering after a loss to recover quickly, ignoring all risk rules in the process.",
    quote: "Lost $500, then went all-in on the next trade. Lost $2,100 in 8 minutes.",
    miniPath: "M0,8 C10,8 15,8 20,10 C30,14 35,16 45,20 C55,24 65,26 75,28 C85,30 95,32 100,34",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    id: "fomo",
    title: "FOMO Entries",
    color: "#ffb450",
    description: "Jumping into trades after seeing a big move, fearing to miss out — entering at the worst possible moment.",
    quote: "Saw one green candle, jumped in at the top, immediately stopped out.",
    miniPath: "M0,20 C5,20 8,20 12,18 C18,15 20,14 25,12 C30,10 35,8 42,10 C50,12 55,16 60,20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "overtrading",
    title: "Overtrading",
    color: "#ff6b6b",
    description: "Opening too many positions too fast, draining focus and capital simultaneously until nothing is left.",
    quote: "15 trades in one hour. I couldn't think clearly. Lost my weekly gain in 60 minutes.",
    miniPath: "M0,12 C5,10 8,14 12,12 C16,10 18,14 22,12 C26,10 30,14 35,12 C40,10 45,14 50,16 C55,18 60,20 65,22",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: "losschasing",
    title: "Loss Chasing",
    color: "#ffb450",
    description: "Doubling down on losing positions hoping they will reverse — turning small losses into account-ending ones.",
    quote: "Kept adding to a losing GBPUSD position. What started as -50 pips became -380.",
    miniPath: "M0,5 C10,6 15,8 25,12 C35,16 40,20 50,24 C60,28 70,32 80,34",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: "oversize",
    title: "Oversize Lots",
    color: "#ff6b6b",
    description: "Trading 5–10× your normal position size during emotional episodes, amplifying every loss exponentially.",
    quote: "Went from 0.5 to 5.0 lots after 3 losses. The next trade wiped 40% of my account.",
    miniPath: "M0,10 C10,10 15,10 20,12 C30,16 35,22 45,28 C55,34 65,38 75,40",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "tilt",
    title: "Tilt Spiral",
    color: "#ffb450",
    description: "Complete loss of emotional control — rage-trading, ignoring stops, destroying weeks of disciplined work.",
    quote: "Rage-closed a winning trade, then opened 6 revenge trades back-to-back. Gone in 20 minutes.",
    miniPath: "M0,8 C5,8 8,9 12,11 C18,14 20,18 25,22 C30,26 35,30 40,34 C45,38 50,40 55,42",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

/* ─── Equity Curve Data Generator ────────────────────────────────────────── */
function generateInitialEquityData(points: number): number[] {
  const data: number[] = [];
  let value = 100;
  for (let i = 0; i < points; i++) {
    const trend = -0.6;
    const noise = (Math.random() - 0.4) * 4;
    value = Math.max(5, Math.min(105, value + trend + noise));
    data.push(value);
  }
  return data;
}

/* ─── SVG Path Builder ───────────────────────────────────────────────────── */
function buildSvgPath(data: number[], width: number, height: number, padding: number): string {
  if (data.length < 2) return "";
  const xStep = (width - padding * 2) / (data.length - 1);
  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const range = maxVal - minVal || 1;

  const toX = (i: number) => padding + i * xStep;
  const toY = (v: number) => padding + (1 - (v - minVal) / range) * (height - padding * 2);

  let d = `M ${toX(0)},${toY(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    const x0 = toX(i - 1), y0 = toY(data[i - 1]);
    const x1 = toX(i), y1 = toY(data[i]);
    const cpx = (x0 + x1) / 2;
    d += ` C ${cpx},${y0} ${cpx},${y1} ${x1},${y1}`;
  }
  return d;
}

function buildAreaPath(data: number[], width: number, height: number, padding: number): string {
  if (data.length < 2) return "";
  const linePath = buildSvgPath(data, width, height, padding);
  const lastX = padding + (data.length - 1) * ((width - padding * 2) / (data.length - 1));
  return `${linePath} L ${lastX},${height - padding} L ${padding},${height - padding} Z`;
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function ProblemSection() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const countedRef = useRef(false);
  const counterObserverRef = useRef<IntersectionObserver | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);
  const areaPathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const chartRunningRef = useRef(false);
  const equityDataRef = useRef<number[]>([]);
  const chartFrameRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);
  const chartObserverRef = useRef<IntersectionObserver | null>(null);

  const CHART_W = 600;
  const CHART_H = 200;
  const CHART_PAD = 10;
  const CHART_POINTS = 60;

  const setCounterRef = useCallback(
    (i: number) => (el: HTMLSpanElement | null) => {
      counterRefs.current[i] = el;
    },
    [],
  );

  /* ── Counter animation ── */
  const animateCounter = useCallback((el: HTMLSpanElement, stat: typeof COUNTER_STATS[0], delay: number) => {
    setTimeout(() => {
      const duration = 2000;
      const start = performance.now();

      const frame = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        if (stat.isFloat) {
          el.textContent = (eased * stat.value).toFixed(1) + stat.suffix;
        } else {
          el.textContent = Math.round(eased * stat.value) + stat.suffix;
        }

        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, delay);
  }, []);

  /* ── Chart update tick ── */
  const updateChart = useCallback(() => {
    const data = equityDataRef.current;
    if (!data.length || !linePathRef.current || !areaPathRef.current || !dotRef.current) return;

    const linePath = buildSvgPath(data, CHART_W, CHART_H, CHART_PAD);
    const areaPath = buildAreaPath(data, CHART_W, CHART_H, CHART_PAD);
    linePathRef.current.setAttribute("d", linePath);
    areaPathRef.current.setAttribute("d", areaPath);

    // Move pulsing dot to end of curve
    const lastVal = data[data.length - 1];
    const xStep = (CHART_W - CHART_PAD * 2) / (data.length - 1);
    const minVal = Math.min(...data);
    const maxVal = Math.max(...data);
    const range = maxVal - minVal || 1;
    const dotX = CHART_PAD + (data.length - 1) * xStep;
    const dotY = CHART_PAD + (1 - (lastVal - minVal) / range) * (CHART_H - CHART_PAD * 2);
    dotRef.current.setAttribute("cx", String(dotX));
    dotRef.current.setAttribute("cy", String(dotY));
  }, []);

  /* ── Chart RAF loop ── */
  const chartLoop = useCallback((now: number) => {
    if (!chartRunningRef.current) return;
    if (now - lastTickRef.current >= 100) {
      lastTickRef.current = now;
      const data = equityDataRef.current;
      const last = data[data.length - 1] ?? 50;
      const trend = -0.5;
      const noise = (Math.random() - 0.38) * 3.5;
      const next = Math.max(3, Math.min(105, last + trend + noise));
      equityDataRef.current = [...data.slice(1), next];
      updateChart();
    }
    chartFrameRef.current = requestAnimationFrame(chartLoop);
  }, [updateChart]);

  /* ── Counter IntersectionObserver ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      COUNTER_STATS.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (el) {
          el.textContent = stat.isFloat ? stat.value.toFixed(1) + stat.suffix : stat.value + stat.suffix;
        }
      });
      return;
    }

    const section = document.getElementById("problem");
    if (!section) return;

    counterObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countedRef.current) {
          countedRef.current = true;
          COUNTER_STATS.forEach((stat, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            animateCounter(el, stat, i * 180);
          });
          counterObserverRef.current?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    counterObserverRef.current.observe(section);
    return () => counterObserverRef.current?.disconnect();
  }, [animateCounter]);

  /* ── Equity Chart IntersectionObserver ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chartEl = document.getElementById("prob-equity-chart");
    if (!chartEl) return;

    equityDataRef.current = generateInitialEquityData(CHART_POINTS);
    updateChart();

    if (prefersReduced) return;

    chartObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !chartRunningRef.current) {
          chartRunningRef.current = true;
          chartFrameRef.current = requestAnimationFrame(chartLoop);
        } else if (!entries[0].isIntersecting && chartRunningRef.current) {
          chartRunningRef.current = false;
          cancelAnimationFrame(chartFrameRef.current);
        }
      },
      { threshold: 0.1 },
    );
    chartObserverRef.current.observe(chartEl);

    return () => {
      chartRunningRef.current = false;
      cancelAnimationFrame(chartFrameRef.current);
      chartObserverRef.current?.disconnect();
    };
  }, [chartLoop, updateChart]);

  /* ── Card tilt handlers ── */
  const handleCardMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    card.style.transition = "transform 0.06s linear";
  }, []);

  const handleCardLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
    card.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PROBLEM_JSON_LD) }}
      />

      <section
        id="problem"
        className="prob-section"
        aria-label="The Real Problem — Why Traders Lose Money"
      >
        {/* Top fade for smooth transition from Trust Section */}
        <div className="prob-top-fade" aria-hidden="true" />

        {/* Ambient background glows */}
        <div className="prob-glows" aria-hidden="true">
          <div className="prob-glow prob-glow-red-1" />
          <div className="prob-glow prob-glow-orange-1" />
          <div className="prob-glow prob-glow-red-2" />
        </div>

        {/* Rotating ring decoration */}
        <div className="prob-ring-wrap" aria-hidden="true">
          <div className="prob-ring prob-ring-outer" />
          <div className="prob-ring prob-ring-inner" />
        </div>

        {/* Badge */}
        <div className="prob-badge" role="note" aria-label="The Real Problem">
          <span className="prob-badge-dot" aria-hidden="true" />
          <span>The Real Problem</span>
        </div>

        {/* H2 Heading */}
        <h2 className="prob-h2">
          <span className="prob-h2-white">Your Biggest Enemy</span>
          <br />
          <span className="prob-h2-white">Isn&apos;t the Market —</span>
          <br />
          <span className="prob-h2-gradient">It&apos;s You.</span>
        </h2>

        {/* Subtitle */}
        <p className="prob-sub">
          <strong>92% of traders</strong> lose money not because of bad strategy —
          but because of <strong>emotional decisions</strong> they can&apos;t control.
        </p>

        {/* Counter Row */}
        <div className="prob-counters" role="list" aria-label="Emotional trading statistics">
          {COUNTER_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="prob-counter-card"
              role="listitem"
              style={{ "--counter-color": stat.color } as React.CSSProperties}
            >
              <div className="prob-counter-border" aria-hidden="true" />
              <span
                className="prob-counter-value"
                style={{ color: stat.color }}
                ref={setCounterRef(i)}
                aria-live="polite"
              >
                {stat.isFloat ? "0.0" + stat.suffix : "0" + stat.suffix}
              </span>
              <span className="prob-counter-label">{stat.label}</span>
              <div className="prob-counter-bar" aria-hidden="true">
                <div
                  className="prob-counter-bar-fill"
                  style={{ background: stat.color, width: `${stat.isFloat ? (stat.value / 5) * 100 : stat.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Live Equity Curve Dashboard */}
        <div
          id="prob-equity-chart"
          className="prob-equity-card"
          role="img"
          aria-label="Live Equity Curve — Emotional Trader losing account over time"
        >
          {/* Card glow effect */}
          <div className="prob-equity-glow" aria-hidden="true" />

          {/* Title bar */}
          <div className="prob-equity-header">
            <div className="prob-equity-title-group">
              <span className="prob-equity-live-dot" aria-hidden="true" />
              <span className="prob-equity-title">Emotional Trader — Live Equity</span>
            </div>
            <div className="prob-equity-pills">
              <span className="prob-equity-pill prob-equity-pill-red">−68.4%</span>
              <span className="prob-equity-pill prob-equity-pill-orange">47 trades</span>
            </div>
          </div>

          {/* Chart area */}
          <div className="prob-equity-chart-wrap">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              preserveAspectRatio="none"
              className="prob-equity-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="prob-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffb450" />
                  <stop offset="100%" stopColor="#ff4444" />
                </linearGradient>
                <linearGradient id="prob-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff4444" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ff4444" stopOpacity="0" />
                </linearGradient>
                <filter id="prob-line-glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="prob-dot-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid lines */}
              {[0.25, 0.5, 0.75].map((frac) => (
                <line
                  key={frac}
                  x1={CHART_PAD}
                  y1={CHART_PAD + frac * (CHART_H - CHART_PAD * 2)}
                  x2={CHART_W - CHART_PAD}
                  y2={CHART_PAD + frac * (CHART_H - CHART_PAD * 2)}
                  stroke="rgba(255,80,80,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4,6"
                />
              ))}

              {/* Area fill */}
              <path
                ref={areaPathRef}
                d=""
                fill="url(#prob-area-grad)"
              />

              {/* Line */}
              <path
                ref={linePathRef}
                d=""
                fill="none"
                stroke="url(#prob-line-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#prob-line-glow)"
              />

              {/* Pulsing end dot */}
              <circle
                ref={dotRef}
                cx={CHART_W - CHART_PAD}
                cy={CHART_H - CHART_PAD}
                r="5"
                fill="#ff4444"
                filter="url(#prob-dot-glow)"
                className="prob-chart-dot"
              />
            </svg>

            {/* Annotation badges */}
            <div className="prob-annotations" aria-hidden="true">
              <span className="prob-annotation" style={{ left: "8%", top: "20%" }}>Revenge trade</span>
              <span className="prob-annotation" style={{ left: "28%", top: "35%" }}>FOMO — doubled lot</span>
              <span className="prob-annotation" style={{ left: "52%", top: "55%" }}>Loss chasing spiral</span>
              <span className="prob-annotation prob-annotation-red" style={{ left: "74%", top: "75%" }}>Account blown</span>
            </div>

            {/* Day labels */}
            <div className="prob-day-labels" aria-hidden="true">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                <span key={d} className="prob-day-label">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="prob-cards" role="list" aria-label="Common emotional trading problems">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="prob-card"
              role="listitem"
              style={{ "--card-accent": card.color } as React.CSSProperties}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <div className="prob-card-top-bar" style={{ background: card.color }} aria-hidden="true" />
              <div className="prob-card-icon" style={{ color: card.color }} aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="prob-card-title" style={{ color: card.color }}>
                {card.title}
              </h3>
              <p className="prob-card-desc">{card.description}</p>
              <blockquote className="prob-card-quote">
                &ldquo;{card.quote}&rdquo;
              </blockquote>
              <svg
                viewBox="0 0 100 44"
                preserveAspectRatio="none"
                className="prob-card-minichart"
                aria-hidden="true"
              >
                <path
                  d={card.miniPath}
                  fill="none"
                  stroke={card.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="prob-cta">
          <p className="prob-cta-headline">
            <strong>Sound familiar?</strong> You&apos;re not alone.
          </p>
          <p className="prob-cta-sub">MetaTerminal was built to solve exactly this.</p>
          <a href="#solution" className="prob-cta-btn" aria-label="See the Solution">
            See the Solution
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="14"
              height="14"
              aria-hidden="true"
              className="prob-cta-arrow"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Bottom fade for smooth transition to Solution section */}
        <div className="prob-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
