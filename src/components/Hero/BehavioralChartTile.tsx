"use client";

import React, { useEffect, useRef } from "react";

// 18 data points for a realistic trading-activity chart
// viewBox: 0 0 108 80  (x: 0–108, y: 0–80, lower y = visually higher)
const POINTS: [number, number][] = [
  [0, 62], [6, 56], [12, 49], [18, 54], [24, 46],
  [30, 38], [36, 43], [42, 36], [48, 41], [54, 33],
  [60, 27], [66, 31], [72, 24], [78, 29], [84, 20],
  [90, 24], [96, 17], [102, 21], [108, 14],
];

/** Catmull-Rom → cubic Bézier conversion for a smooth organic line */
function buildSmoothPath(pts: [number, number][], tension = 0.4): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 2)];
    const p1 = pts[i - 1];
    const p2 = pts[i];
    const p3 = pts[Math.min(pts.length - 1, i + 1)];
    const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
    const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) * tension;
    d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

function buildSmoothArea(pts: [number, number][]): string {
  const top = buildSmoothPath(pts);
  return `${top} L${pts[pts.length - 1][0]},80 L0,80 Z`;
}

const LINE_PATH = buildSmoothPath(POINTS);
const AREA_PATH = buildSmoothArea(POINTS);
const LAST_PT = POINTS[POINTS.length - 1];

export default function BehavioralChartTile() {
  const lineRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealChart = () => {
      lineRef.current?.classList.add("chart-line-visible");
      areaRef.current?.classList.add("chart-area-visible");
    };

    if (prefersReduced) {
      revealChart();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          revealChart();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dash-tile chart-tile" aria-label="Behavioral activity chart">
      <div className="tile-header">
        <span className="tile-label">Behavioral Activity</span>
        <span className="chart-badge">Live</span>
      </div>

      <div className="chart-wrap" aria-hidden="true" ref={wrapRef}>
        <svg viewBox="0 0 108 80" preserveAspectRatio="none" className="chart-svg">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#785aff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#5ef0a8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#785aff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5ef0a8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#5ef0a8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Subtle background grid lines */}
          <line x1="0" y1="20" x2="108" y2="20" className="chart-grid-line" />
          <line x1="0" y1="40" x2="108" y2="40" className="chart-grid-line" />
          <line x1="0" y1="60" x2="108" y2="60" className="chart-grid-line" />

          {/* Area fill — fades in with the line */}
          <path ref={areaRef} d={AREA_PATH} fill="url(#areaGrad)" className="chart-area" />

          {/* Main smooth line — draws left→right on scroll into view */}
          <path
            ref={lineRef}
            d={LINE_PATH}
            fill="none"
            stroke="url(#chartGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1000"
            className="chart-line"
          />

          {/* Glow ring around endpoint */}
          <circle cx={LAST_PT[0]} cy={LAST_PT[1]} r="7" fill="#5ef0a8" className="chart-endpoint-glow" />

          {/* Pulsing dot at line end */}
          <circle cx={LAST_PT[0]} cy={LAST_PT[1]} r="3" fill="#5ef0a8" className="chart-pulse-dot" />
        </svg>
      </div>

      <div className="chart-footer">
        <span className="chart-session">Session: 2h 14m</span>
        <span className="chart-pct">+12%</span>
      </div>
    </div>
  );
}
