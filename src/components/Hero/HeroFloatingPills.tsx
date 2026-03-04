import React from "react";

interface Pill {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  posClass: string;
  animClass: string;
  floatClass: string;
  delay: string;
}

const PILLS: Pill[] = [
  {
    icon: "◆",
    iconColor: "#785aff",
    title: "2,400+ Traders",
    subtitle: "Active worldwide",
    posClass: "pill-tl",
    animClass: "pill-anim-left",
    floatClass: "pill-float",
    delay: "0.8s",
  },
  {
    icon: "◆",
    iconColor: "#5ef0a8",
    title: "3.2M+ Trades",
    subtitle: "Analyzed & protected",
    posClass: "pill-tr",
    animClass: "pill-anim-right",
    floatClass: "pill-float",
    delay: "1.0s",
  },
  {
    icon: "◆",
    iconColor: "#f5c542",
    title: "63% Fewer Losses",
    subtitle: "From emotional trading",
    posClass: "pill-rm",
    animClass: "pill-anim-right",
    floatClass: "pill-float",
    delay: "1.2s",
  },
];

export default function HeroFloatingPills() {
  return (
    <div className="hero-pills" aria-hidden="true">
      {PILLS.map((pill) => (
        <div
          key={pill.title}
          className={`hero-pill ${pill.posClass} ${pill.animClass} ${pill.floatClass}`}
          style={{ animationDelay: pill.delay }}
        >
          <span className="pill-icon" style={{ color: pill.iconColor }} aria-hidden="true">
            {pill.icon}
          </span>
          <div className="pill-text">
            <span className="pill-title">{pill.title}</span>
            <span className="pill-sub">{pill.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
