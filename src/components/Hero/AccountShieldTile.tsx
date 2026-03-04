import React from "react";

function ShieldIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
      className="shield-icon"
    >
      <path
        d="M26 4L8 12v14c0 11 8 20 18 24 10-4 18-13 18-24V12L26 4z"
        fill="rgba(94,240,168,0.12)"
        stroke="#5ef0a8"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 26l4 4 8-8"
        stroke="#5ef0a8"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1.2" fill="none" stroke="#5ef0a8" strokeWidth="1.2" />
      <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" stroke="#5ef0a8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function AccountShieldTile() {
  return (
    <div className="dash-tile shield-tile" aria-label="Account shield — protected">
      <div className="tile-header">
        <span className="tile-label">Account Shield</span>
      </div>

      <div className="shield-center" aria-hidden="true">
        <div className="shield-icon-wrap">
          <ShieldIcon />
        </div>
      </div>

      <div className="shield-status">
        <span className="shield-protected">PROTECTED</span>
        <span className="shield-subtitle">All systems active</span>
      </div>

      <div className="shield-feature-badge" aria-label="Sentinel mode enabled">
        <LockIcon />
        <span>Sentinel mode enabled</span>
      </div>
    </div>
  );
}
