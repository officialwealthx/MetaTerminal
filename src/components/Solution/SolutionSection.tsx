"use client";

import React, { useCallback, useEffect, useRef } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const SOLUTION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MetaTerminal",
  url: "https://metaterminal.app",
  applicationCategory: "FinanceApplication",
  description:
    "MetaTerminal's Safety Score™ monitors trading behavior in real-time, providing instant protection against emotional trading with automated cooldowns, danger alerts, and account protection.",
  featureList: [
    "Safety Score™ (0-100) real-time calculation",
    "Cooldown Mode: automatic trade blocking",
    "Danger Alerts: real-time emotional trading warnings",
    "News Alerts: NFP, FOMC, CPI event notifications",
    "Account Protection: max drawdown monitoring",
    "RRR Enforcer: Risk-Reward Ratio tracking",
    "Session Replay: emotional episode review",
  ],
  operatingSystem: "MetaTrader 4, MetaTrader 5, cTrader, TradingView",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CHF",
    url: "https://metaterminal.app/pricing",
  },
};

/* ─── Score Constants ────────────────────────────────────────────────────── */
const SCORE_SEQUENCE = [82, 65, 42, 28, 55, 74, 82];
const RING_CIRCUMFERENCE = 2 * Math.PI * 120; // ≈ 753.98

function getScoreColor(score: number): string {
  if (score >= 80) return "#5ef0a8";
  if (score >= 60) return "#f5c542";
  if (score >= 40) return "#ffa03c";
  return "#ff6b6b";
}

function getScoreStatus(score: number): string {
  if (score >= 80) return "SAFE";
  if (score >= 60) return "CAUTION";
  if (score >= 40) return "DANGER";
  return "CRITICAL";
}

/** Convert a 6-digit hex color string to rgba(r,g,b,a) */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ─── Score Chip multipliers ─────────────────────────────────────────────── */
const CHIP_MULTIPLIERS = [0.95, 0.9, 0.85, 1.0, 0.88, 0.92];

/* ─── Levels ─────────────────────────────────────────────────────────────── */
const LEVELS = [
  { range: "80–100", label: "Safe", color: "#5ef0a8", min: 80, max: 100, desc: "Normal trading. Small recommendations." },
  { range: "60–79", label: "Caution", color: "#f5c542", min: 60, max: 79, desc: "Warnings + focus reminders activated." },
  { range: "40–59", label: "Danger", color: "#ffa03c", min: 40, max: 59, desc: "Cooldown recommended. Slow down." },
  { range: "0–39", label: "Critical", color: "#ff6b6b", min: 0, max: 39, desc: "Safety mode activated. Trade blocked." },
];

/* ─── Feature Cards ──────────────────────────────────────────────────────── */
const FEATURES = [
  {
    id: "cooldown",
    title: "Cooldown Mode",
    color: "#a78bfa",
    desc: "Score drops critical? Trading automatically paused. Elite users get optional hard lock via EA.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "alerts",
    title: "Danger Alerts",
    color: "#ff6b6b",
    desc: "Real-time warnings before emotional mistakes reach your account. Get notified before you act.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "news",
    title: "News Alerts",
    color: "#f5c542",
    desc: "High-impact events (NFP, FOMC, CPI) flagged via dashboard and email before they hit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: "account",
    title: "Account Protection",
    color: "#5ef0a8",
    desc: "Max drawdown and daily loss limit monitoring. Hard stops before damage becomes permanent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "rrr",
    title: "RRR Enforcer",
    color: "#60a5fa",
    desc: "Fixed Risk-Reward Ratio tracking. Every trade scored for discipline. Deviation penalizes score.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "replay",
    title: "Session Replay",
    color: "#c4b5fd",
    desc: "Review past emotional episodes with full trade timeline. Understand your patterns. Improve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
];

const CHIP_LABELS = ["Risk", "Discipline", "Emotional", "Tilt", "Execution", "Consistency"];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function SolutionSection() {
  /* Ring animation refs */
  const ringCircleRef = useRef<SVGCircleElement>(null);
  const scoreNumberRef = useRef<HTMLSpanElement>(null);
  const scoreStatusRef = useRef<HTMLSpanElement>(null);
  const ringGlowRef = useRef<HTMLDivElement>(null);
  const ringObserverRef = useRef<IntersectionObserver | null>(null);
  const ringRunningRef = useRef(false);
  const ringFrameRef = useRef<number>(0);
  const scoreRef = useRef<number>(82);
  const targetScoreRef = useRef<number>(82);
  const seqIndexRef = useRef<number>(0);
  const lastStepTimeRef = useRef<number>(0);
  const prefersReducedMotionRef = useRef<boolean>(false);

  /* Chip fill refs */
  const chipFillRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Level card refs */
  const levelCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Feature card entrance */
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const featuresObserverRef = useRef<IntersectionObserver | null>(null);
  const featureCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setChipFillRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      chipFillRefs.current[i] = el;
    },
    [],
  );

  const setLevelCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      levelCardRefs.current[i] = el;
    },
    [],
  );

  const setFeatureCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      featureCardRefs.current[i] = el;
    },
    [],
  );

  /* ── Update DOM from current score ── */
  const applyScore = useCallback((score: number) => {
    const rounded = Math.round(score);
    const color = getScoreColor(score);
    const status = getScoreStatus(score);

    if (ringCircleRef.current) {
      ringCircleRef.current.style.strokeDashoffset = String(
        RING_CIRCUMFERENCE * (1 - score / 100),
      );
      ringCircleRef.current.style.stroke = color;
    }

    if (scoreNumberRef.current) {
      scoreNumberRef.current.textContent = String(rounded);
      scoreNumberRef.current.style.color = color;
    }

    if (scoreStatusRef.current) {
      scoreStatusRef.current.textContent = status;
      scoreStatusRef.current.style.color = color;
      scoreStatusRef.current.style.borderColor = hexToRgba(color, 0.33);
      scoreStatusRef.current.style.background = hexToRgba(color, 0.1);
    }

    if (ringGlowRef.current) {
      ringGlowRef.current.style.boxShadow = `0 0 80px 20px ${hexToRgba(color, 0.2)}, 0 0 140px 40px ${hexToRgba(color, 0.1)}`;
    }

    /* Active level card highlight */
    levelCardRefs.current.forEach((card, i) => {
      if (!card) return;
      const level = LEVELS[i];
      const isActive = score >= level.min && score <= level.max;
      if (isActive) {
        card.classList.add("sol-level-card-active");
      } else {
        card.classList.remove("sol-level-card-active");
      }
    });

    /* Chip bars */
    chipFillRefs.current.forEach((fill, i) => {
      if (!fill) return;
      const pct = Math.min(100, CHIP_MULTIPLIERS[i] * score);
      fill.style.width = `${pct}%`;
      fill.style.background = color;
    });
  }, []);

  /* ── Score RAF loop ── */
  const scoreLoop = useCallback(
    (now: number) => {
      if (!ringRunningRef.current) return;

      if (now - lastStepTimeRef.current >= 3000) {
        lastStepTimeRef.current = now;
        seqIndexRef.current = (seqIndexRef.current + 1) % SCORE_SEQUENCE.length;
        targetScoreRef.current = SCORE_SEQUENCE[seqIndexRef.current];
      }

      const current = scoreRef.current;
      const target = targetScoreRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.15) {
        scoreRef.current = current + diff * 0.025;
      } else {
        scoreRef.current = target;
      }

      applyScore(scoreRef.current);

      ringFrameRef.current = requestAnimationFrame(scoreLoop);
    },
    [applyScore],
  );

  /* ── Score ring IntersectionObserver ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    prefersReducedMotionRef.current = prefersReduced;
    const section = document.getElementById("solution");
    if (!section) return;

    if (prefersReduced) {
      scoreRef.current = 82;
      applyScore(82);
      return;
    }

    ringObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !ringRunningRef.current) {
          ringRunningRef.current = true;
          lastStepTimeRef.current = performance.now();
          ringFrameRef.current = requestAnimationFrame(scoreLoop);
        } else if (!entries[0].isIntersecting && ringRunningRef.current) {
          ringRunningRef.current = false;
          cancelAnimationFrame(ringFrameRef.current);
        }
      },
      { threshold: 0.1 },
    );
    ringObserverRef.current.observe(section);

    /* Set initial static state */
    applyScore(82);

    return () => {
      ringRunningRef.current = false;
      cancelAnimationFrame(ringFrameRef.current);
      ringObserverRef.current?.disconnect();
    };
  }, [scoreLoop, applyScore]);

  /* ── Feature cards entrance IntersectionObserver ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = featuresSectionRef.current;
    if (!section) return;

    if (prefersReduced) {
      featureCardRefs.current.forEach((card) => {
        card?.classList.add("sol-card-visible");
      });
      return;
    }

    featuresObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          featureCardRefs.current.forEach((card, i) => {
            if (!card) return;
            setTimeout(() => {
              card.classList.add("sol-card-visible");
            }, i * 90);
          });
          featuresObserverRef.current?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    featuresObserverRef.current.observe(section);

    return () => featuresObserverRef.current?.disconnect();
  }, []);

  /* ── Card tilt handlers ── */
  const handleCardMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    card.style.transition = "transform 0.06s linear";
  }, []);

  const handleCardLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current) return;
    const card = e.currentTarget;
    card.style.transform = "";
    card.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTION_JSON_LD) }}
      />

      <section
        id="solution"
        className="sol-section"
        aria-label="The Solution — MetaTerminal Safety Score"
      >
        {/* Top fade from Problem section */}
        <div className="sol-top-fade" aria-hidden="true" />

        {/* Ambient background glows */}
        <div className="sol-glows" aria-hidden="true">
          <div className="sol-glow sol-glow-purple-1" />
          <div className="sol-glow sol-glow-green-1" />
          <div className="sol-glow sol-glow-purple-2" />
        </div>

        {/* Badge */}
        <div className="sol-badge" role="note" aria-label="The Solution">
          <span className="sol-badge-dot" aria-hidden="true" />
          <span>⚡ The Solution</span>
        </div>

        {/* H2 */}
        <h2 className="sol-h2">
          <span className="sol-h2-white">The Safety Score™</span>
          <br />
          <span className="sol-h2-gradient">Your Trading Guardian.</span>
        </h2>

        {/* Subtitle */}
        <p className="sol-sub">
          A master score from 0–100 that monitors your trading behavior in real time. Instant
          penalty deductions for rule violations. When it drops — MetaTerminal acts.
        </p>

        {/* ── 1. Animated Safety Score Ring ── */}
        <div
          className="sol-ring-section"
          aria-live="polite"
          aria-label="Animated Safety Score demonstration"
        >
          <div className="sol-ring-wrap">
            <div ref={ringGlowRef} className="sol-ring-glow" aria-hidden="true" />
            <svg
              className="sol-ring-svg"
              viewBox="0 0 280 280"
              aria-hidden="true"
            >
              <circle cx="140" cy="140" r="120" className="sol-ring-track" />
              <circle
                ref={ringCircleRef}
                cx="140"
                cy="140"
                r="120"
                className="sol-ring-fill"
                strokeDasharray={String(RING_CIRCUMFERENCE)}
                strokeDashoffset={String(RING_CIRCUMFERENCE * (1 - 82 / 100))}
                transform="rotate(-90 140 140)"
              />
            </svg>
            <div className="sol-score-display" aria-live="polite">
              <span ref={scoreNumberRef} className="sol-score-number" style={{ color: "#5ef0a8" }}>
                82
              </span>
              <span
                ref={scoreStatusRef}
                className="sol-score-status"
                style={{ color: "#5ef0a8", borderColor: "#5ef0a855", background: "#5ef0a818" }}
              >
                SAFE
              </span>
            </div>
          </div>

          {/* Score component chips */}
          <div className="sol-chips" role="list" aria-label="Score components">
            {CHIP_LABELS.map((label, i) => (
              <div key={label} className="sol-chip" role="listitem">
                <span className="sol-chip-label">{label}</span>
                <div className="sol-chip-bar" aria-hidden="true">
                  <div
                    ref={setChipFillRef(i)}
                    className="sol-chip-fill"
                    style={{ width: `${CHIP_MULTIPLIERS[i] * 82}%`, background: "#5ef0a8" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Safety Levels Grid ── */}
        <div className="sol-levels" role="list" aria-label="Safety score levels">
          {LEVELS.map((level, i) => (
            <div
              key={level.label}
              ref={setLevelCardRef(i)}
              className={`sol-level-card${i === 0 ? " sol-level-card-active" : ""}`}
              role="listitem"
              style={{ "--level-color": level.color } as React.CSSProperties}
            >
              <div className="sol-level-range" style={{ color: level.color }}>
                {level.range}
              </div>
              <div className="sol-level-label" style={{ color: level.color }}>
                {level.label}
              </div>
              <div className="sol-level-desc">{level.desc}</div>
            </div>
          ))}
        </div>

        {/* ── 3. Active Protection Features ── */}
        <div
          ref={featuresSectionRef}
          className="sol-features"
          role="list"
          aria-label="Active protection features"
        >
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              ref={setFeatureCardRef(i)}
              className="sol-feature-card"
              role="listitem"
              style={{ "--card-color": feature.color } as React.CSSProperties}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <div className="sol-feature-top-bar" style={{ background: feature.color }} aria-hidden="true" />
              <div className="sol-feature-icon" style={{ color: feature.color }} aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="sol-feature-title" style={{ color: feature.color }}>
                {feature.title}
              </h3>
              <p className="sol-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ── 4. Before vs After Comparison ── */}
        <div className="sol-comparison" aria-label="Before and after MetaTerminal comparison">
          {/* Without MetaTerminal */}
          <div className="sol-compare-card sol-compare-card-bad">
            <div className="sol-compare-header">
              <span className="sol-compare-pill sol-compare-pill-red">Without MetaTerminal</span>
            </div>
            <svg
              viewBox="0 0 200 80"
              className="sol-compare-svg"
              aria-label="Declining equity curve without MetaTerminal"
              role="img"
            >
              <defs>
                <linearGradient id="sol-bad-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M10,10 C20,12 30,14 40,20 C55,28 60,30 70,38 C80,46 85,52 95,56 C105,60 115,64 125,66 C135,68 145,70 160,72 L160,80 L10,80 Z"
                fill="url(#sol-bad-grad)"
              />
              <path
                d="M10,10 C20,12 30,14 40,20 C55,28 60,30 70,38 C80,46 85,52 95,56 C105,60 115,64 125,66 C135,68 145,70 160,72"
                fill="none"
                stroke="#ff6b6b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="sol-compare-stats">
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-bad">−68%</span>
                <span className="sol-compare-stat-label">Account</span>
              </div>
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-bad">47</span>
                <span className="sol-compare-stat-label">Trades/week</span>
              </div>
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-na">N/A</span>
                <span className="sol-compare-stat-label">Safety Score</span>
              </div>
            </div>
          </div>

          {/* With MetaTerminal */}
          <div className="sol-compare-card sol-compare-card-good">
            <div className="sol-compare-header">
              <span className="sol-compare-pill sol-compare-pill-green">With MetaTerminal</span>
            </div>
            <svg
              viewBox="0 0 200 80"
              className="sol-compare-svg"
              aria-label="Ascending equity curve with MetaTerminal"
              role="img"
            >
              <defs>
                <linearGradient id="sol-good-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5ef0a8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5ef0a8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M10,68 C20,65 30,62 40,58 C55,52 60,50 70,44 C80,38 90,34 100,30 C110,26 120,22 135,18 C145,15 155,13 165,10 L165,80 L10,80 Z"
                fill="url(#sol-good-grad)"
              />
              <path
                d="M10,68 C20,65 30,62 40,58 C55,52 60,50 70,44 C80,38 90,34 100,30 C110,26 120,22 135,18 C145,15 155,13 165,10"
                fill="none"
                stroke="#5ef0a8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="sol-compare-stats">
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-good">+12%</span>
                <span className="sol-compare-stat-label">Account</span>
              </div>
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-good">18</span>
                <span className="sol-compare-stat-label">Trades/week</span>
              </div>
              <div className="sol-compare-stat">
                <span className="sol-compare-stat-value sol-compare-stat-good">81</span>
                <span className="sol-compare-stat-label">Safety Score</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. Bottom CTA ── */}
        <div className="sol-cta">
          <h2 className="sol-cta-headline">Stop guessing. Let the data protect you.</h2>
          <p className="sol-cta-sub">Connect in under 2 minutes. No strategy changes needed.</p>
          <div className="sol-cta-buttons">
            <a href="#pricing" className="sol-cta-btn-primary">
              Start Free Today →
            </a>
            <a href="#how-it-works" className="sol-cta-btn-ghost">
              See How It Works
            </a>
          </div>
        </div>

        {/* Bottom fade for smooth transition to Features section */}
        <div className="sol-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
