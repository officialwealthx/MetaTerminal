import React from "react";

interface Alert {
  color: string;
  bg: string;
  title: string;
  desc: string;
  time: string;
  delayClass: string;
}

const ALERTS: Alert[] = [
  {
    color: "#ff6b6b",
    bg: "rgba(255,107,107,0.15)",
    title: "Revenge Trade Blocked",
    desc: "EURUSD · 2.0 lots · auto-blocked",
    time: "2s ago",
    delayClass: "alert-d1",
  },
  {
    color: "#f5c542",
    bg: "rgba(245,197,66,0.12)",
    title: "Safety Score: Danger",
    desc: "Score 42 · cooldown recommended",
    time: "14s ago",
    delayClass: "alert-d2",
  },
  {
    color: "#785aff",
    bg: "rgba(120,90,255,0.15)",
    title: "Oversize Lot Blocked",
    desc: "GBPJPY · 5.0 lots · exceeds limit",
    time: "41s ago",
    delayClass: "alert-d3",
  },
  {
    color: "#5ef0a8",
    bg: "rgba(94,240,168,0.12)",
    title: "Cooldown Complete",
    desc: "Trading re-enabled · score 74",
    time: "3m ago",
    delayClass: "alert-d4",
  },
];

export default function LiveAlertsTile() {
  return (
    <div className="dash-tile alerts-tile" aria-label="Live trade alerts">
      <div className="tile-header">
        <span className="tile-label">Live Alerts</span>
        <span className="alerts-live-dot" aria-hidden="true" />
      </div>

      <ul className="alerts-list" role="list">
        {ALERTS.map((alert) => (
          <li
            key={alert.title}
            className={`hero-fi ${alert.delayClass}`}
            role="listitem"
            aria-label={`${alert.title}: ${alert.desc}, ${alert.time}`}
          >
            <span
              className="alert-icon"
              aria-hidden="true"
              style={{ background: alert.bg, color: alert.color }}
            />
            <div className="alert-body">
              <span className="alert-title" style={{ color: alert.color }}>
                {alert.title}
              </span>
              <span className="alert-desc">{alert.desc}</span>
            </div>
            <span className="alert-time">{alert.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
