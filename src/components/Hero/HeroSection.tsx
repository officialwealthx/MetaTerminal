"use client";

import React from "react";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroSubtitle from "./HeroSubtitle";
import HeroCTA from "./HeroCTA";
import HeroDashboard from "./HeroDashboard";
import HeroFloatingPills from "./HeroFloatingPills";
import HeroPlatforms from "./HeroPlatforms";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MetaTerminal",
  url: "https://metaterminal.app",
  description:
    "MetaTerminal is a Trader Protection OS that detects emotional trading patterns in real-time and automatically blocks dangerous trades before you lose money.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "CHF",
      description: "Basic trader protection for free",
    },
    {
      "@type": "Offer",
      name: "Core",
      price: "29",
      priceCurrency: "CHF",
      description: "Core protection features",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49",
      priceCurrency: "CHF",
      description: "Advanced protection with behavioral analytics",
    },
    {
      "@type": "Offer",
      name: "Ultimate",
      price: "89",
      priceCurrency: "CHF",
      description: "Full Sentinel mode with elite protection",
    },
  ],
  featureList: [
    "Real-time emotional pattern detection",
    "Automatic trade blocking",
    "Safety Score gauge",
    "Behavioral Activity Chart",
    "Account Shield",
    "Live Alerts feed",
    "Revenge trade blocking",
    "Oversize lot blocking",
    "Cooldown enforcement",
    "Sentinel mode",
    "MT5 integration",
    "MT4 integration",
    "cTrader integration (coming soon)",
    "TradingView integration (coming soon)",
    "Prefers-reduced-motion accessibility",
    "Mobile responsive dashboard",
    "Session analytics",
    "Score-based risk levels",
    "Glassmorphism UI",
    "Dark mode",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "412",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function HeroSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section
        id="hero"
        className="hero-section"
        aria-label="Hero — MetaTerminal Trader Protection OS"
      >
        <HeroBackground />

        <div className="hero-content">
          <HeroBadge />
          <HeroHeading />
          <HeroSubtitle />
          <HeroCTA />
        </div>

        <div className="hero-dashboard-wrap">
          <HeroFloatingPills />
          <HeroDashboard />
        </div>

        <HeroPlatforms />
      </section>
    </>
  );
}
