import React from "react";

interface Platform {
  name: string;
  status: "active" | "soon";
}

const PLATFORMS: Platform[] = [
  { name: "MT5", status: "active" },
  { name: "MT4", status: "active" },
  { name: "cTrader", status: "soon" },
  { name: "TradingView", status: "soon" },
];

export default function HeroPlatforms() {
  return (
    <div className="hero-platforms" role="list" aria-label="Supported trading platforms">
      {PLATFORMS.map((p) => (
        <div
          key={p.name}
          className="platform-badge"
          role="listitem"
          aria-label={`${p.name} — ${p.status === "active" ? "active" : "coming soon"}`}
        >
          <span
            className={`platform-dot ${p.status === "active" ? "dot-active" : "dot-soon"}`}
            aria-hidden="true"
          />
          <span className="platform-name">{p.name}</span>
          {p.status === "soon" && (
            <span className="platform-soon" aria-hidden="true">
              soon
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
