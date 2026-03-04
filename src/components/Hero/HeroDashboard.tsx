import React from "react";
import SafetyScoreTile from "./SafetyScoreTile";
import BehavioralChartTile from "./BehavioralChartTile";
import AccountShieldTile from "./AccountShieldTile";
import LiveAlertsTile from "./LiveAlertsTile";

export default function HeroDashboard() {
  return (
    <div className="hero-dw" role="img" aria-label="MetaTerminal Dashboard preview showing safety score, behavioral activity, account shield, and live alerts">
      {/* Window title bar */}
      <div className="dash-title-bar" aria-hidden="true">
        <div className="dash-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="dash-title-text">MetaTerminal — Dashboard v2.4</span>
        <span className="dash-live">
          <span className="dash-live-dot" />
          Live
        </span>
      </div>

      {/* Scanning line */}
      <div className="hero-scan" aria-hidden="true" />

      {/* Dashboard grid */}
      <div className="dash-grid">
        <SafetyScoreTile />
        <BehavioralChartTile />
        <AccountShieldTile />
        <LiveAlertsTile />
      </div>

      {/* Bottom fade */}
      <div className="dash-bottom-fade" aria-hidden="true" />
    </div>
  );
}
