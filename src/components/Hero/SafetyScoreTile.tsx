"use client";

import React, { useEffect, useState } from "react";

const SCORE_SEQUENCE = [82, 65, 42, 28, 55, 74];
const STEP_MS = 120;

function getStatus(score: number): { label: string; color: string } {
  if (score >= 80) return { label: "Safe", color: "#5ef0a8" };
  if (score >= 60) return { label: "Caution", color: "#f5c542" };
  if (score >= 40) return { label: "Danger", color: "#ffa03c" };
  return { label: "Critical", color: "#ff6b6b" };
}

export default function SafetyScoreTile() {
  const [score, setScore] = useState(82);
  const [targetIdx, setTargetIdx] = useState(1);
  const scoreRef = React.useRef(82);

  useEffect(() => {
    const target = SCORE_SEQUENCE[targetIdx];
    const direction = target > scoreRef.current ? 1 : -1;

    const interval = setInterval(() => {
      scoreRef.current += direction;
      setScore(scoreRef.current);
      if (scoreRef.current === target) {
        clearInterval(interval);
        setTargetIdx((prev) => (prev + 1) % SCORE_SEQUENCE.length);
      }
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [targetIdx]);

  const status = getStatus(score);
  const RADIUS = 36;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const filledPct = score / 100;
  const dashArray = CIRCUMFERENCE * filledPct;

  return (
    <div className="dash-tile score-tile" aria-label={`Safety score: ${score}, status: ${status.label}`}>
      <div className="tile-header">
        <span className="tile-label">Safety Score</span>
        <span
          className="score-tag"
          style={{ color: status.color, borderColor: status.color + "44", background: status.color + "18" }}
        >
          {status.label}
        </span>
      </div>

      <div className="score-gauge-wrap" aria-hidden="true">
        <svg className="score-svg" viewBox="0 0 90 90" width="90" height="90">
          {/* Track circle */}
          <circle
            cx="45"
            cy="45"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="7"
          />
          {/* Animated arc */}
          <circle
            className="score-arc"
            cx="45"
            cy="45"
            r={RADIUS}
            fill="none"
            stroke={status.color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${dashArray} ${CIRCUMFERENCE - dashArray}`}
            strokeDashoffset="0"
            transform="rotate(-90 45 45)"
            style={{
              filter: `drop-shadow(0 0 6px ${status.color}59)`,
              transition: "stroke-dasharray 0.15s ease, stroke 0.3s ease",
            }}
          />
        </svg>
        <div className="score-number" style={{ color: status.color }}>
          {score}
        </div>
      </div>

      <p className="score-desc">
        Your emotional risk profile is monitored in real-time. Sentinel activates at{" "}
        <strong style={{ color: "#ff6b6b" }}>Critical</strong>.
      </p>

      <div className="score-sentinel-badge" aria-label="Sentinel activates at Critical score">
        <span className="sentinel-dot" aria-hidden="true" />
        Sentinel activates at Critical
      </div>
    </div>
  );
}
