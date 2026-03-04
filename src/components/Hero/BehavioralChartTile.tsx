import React from "react";

const POINTS = [
  [0, 60], [12, 48], [24, 55], [36, 35], [48, 42], [60, 28], [72, 38], [84, 22], [96, 30], [108, 18],
] as const;

function buildPath(pts: readonly (readonly [number, number])[]) {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
}

function buildArea(pts: readonly (readonly [number, number])[]) {
  const top = buildPath(pts);
  return `${top} L${pts[pts.length - 1][0]},80 L0,80 Z`;
}

export default function BehavioralChartTile() {
  const linePath = buildPath(POINTS);
  const areaPath = buildArea(POINTS);
  const lastPt = POINTS[POINTS.length - 1];

  return (
    <div className="dash-tile chart-tile" aria-label="Behavioral activity chart">
      <div className="tile-header">
        <span className="tile-label">Behavioral Activity</span>
        <span className="chart-badge">Live</span>
      </div>

      <div className="chart-wrap" aria-hidden="true">
        <svg viewBox="0 0 108 80" preserveAspectRatio="none" className="chart-svg">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#785aff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#5ef0a8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#785aff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5ef0a8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#5ef0a8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#areaGrad)" />
          <path d={linePath} fill="none" stroke="url(#chartGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pulsing endpoint */}
          <circle cx={lastPt[0]} cy={lastPt[1]} r="3" fill="#5ef0a8" className="chart-pulse-dot" />
        </svg>
      </div>

      <div className="chart-footer">
        <span className="chart-session">Session: 2h 14m</span>
        <span className="chart-pct">+12%</span>
      </div>
    </div>
  );
}
