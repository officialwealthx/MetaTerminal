"use client";

import React from "react";

/* ─── Testimonial Data ─────────────────────────────────────────────────── */
interface Testimonial {
  name: string;
  location: string;
  quote: string;
  stars: number;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  /* ── Row 1 (first 6) ── */
  {
    name: "Marcus T.",
    location: "London, UK",
    quote:
      "MetaTerminal caught my revenge trade pattern before I even realized I was tilting. Saved me from a £2,400 loss in one session.",
    stars: 5,
    color: "#5ef0a8",
  },
  {
    name: "Sarah K.",
    location: "Toronto, CA",
    quote:
      "The Safety Score changed how I think about every trade. I went from emotional wreck to disciplined in 3 weeks.",
    stars: 5,
    color: "#a78bfa",
  },
  {
    name: "David R.",
    location: "Sydney, AU",
    quote:
      "Sentinel Mode is like having a trading coach that physically stops you. Best investment I've made this year.",
    stars: 5,
    color: "#f5c542",
  },
  {
    name: "Elena V.",
    location: "Frankfurt, DE",
    quote:
      "Finally a tool that doesn't just show you charts. It protects you from yourself. My drawdown dropped 60%.",
    stars: 5,
    color: "#5ef0a8",
  },
  {
    name: "James L.",
    location: "Singapore",
    quote:
      "The behavioral analytics in Pro showed me patterns I was blind to. I was revenge trading 3-4x per week without knowing.",
    stars: 4,
    color: "#a78bfa",
  },
  {
    name: "Ana M.",
    location: "New York, US",
    quote:
      "Switched from manual journaling to MetaTerminal. The automated tracking alone saves me 30 minutes daily.",
    stars: 5,
    color: "#ff6b6b",
  },
  /* ── Row 2 (second 6) ── */
  {
    name: "Thomas W.",
    location: "Zurich, CH",
    quote:
      "The cooldown timer alone paid for my subscription. It forced me to step away when I needed it most.",
    stars: 5,
    color: "#f5c542",
  },
  {
    name: "Priya S.",
    location: "Mumbai, IN",
    quote:
      "I was skeptical at first, but after MetaTerminal blocked my third FOMO trade in a week, I became a believer.",
    stars: 5,
    color: "#ff6b6b",
  },
  {
    name: "Oliver H.",
    location: "Berlin, DE",
    quote:
      "The emotion heatmap revealed I make 80% of my bad trades between 2-4pm. Game-changing insight.",
    stars: 5,
    color: "#a78bfa",
  },
  {
    name: "Rachel C.",
    location: "Chicago, US",
    quote:
      "Prop firm mode saved my FTMO challenge. MetaTerminal kept me within the drawdown limits when I would have blown it.",
    stars: 5,
    color: "#5ef0a8",
  },
  {
    name: "Kenji T.",
    location: "Tokyo, JP",
    quote:
      "The weekly intelligence report is like having a personal trading psychologist. Worth every franc.",
    stars: 4,
    color: "#f5c542",
  },
  {
    name: "Sofia B.",
    location: "São Paulo, BR",
    quote:
      "My win rate went from 38% to 54% in two months. Not because I traded better, but because MetaTerminal stopped me from trading worse.",
    stars: 5,
    color: "#ff6b6b",
  },
];

/* ─── Star Renderer ────────────────────────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="testi-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={i < count ? "testi-star testi-star-filled" : "testi-star testi-star-empty"}
          viewBox="0 0 16 16"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <path d="M8 1l1.85 3.75L14 5.49l-3 2.92.71 4.12L8 10.4l-3.71 2.13.71-4.12-3-2.92 4.15-.74z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Single Card ───────────────────────────────────────────────────────── */
function TestiCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="testi-card"
      style={{ "--card-color": t.color } as React.CSSProperties}
      role="listitem"
    >
      {/* Corner brackets */}
      <span className="testi-card-corner testi-card-corner-tl" aria-hidden="true" />
      <span className="testi-card-corner testi-card-corner-br" aria-hidden="true" />

      {/* Quote */}
      <blockquote className="testi-quote">
        <p className="testi-quote-text">&ldquo;{t.quote}&rdquo;</p>
      </blockquote>

      {/* Stars */}
      <StarRating count={t.stars} />

      {/* Author */}
      <div className="testi-author">
        <div
          className="testi-avatar"
          style={{ "--avatar-color": t.color } as React.CSSProperties}
          aria-hidden="true"
        >
          {t.name.charAt(0)}
        </div>
        <div className="testi-author-info">
          <span className="testi-author-name">{t.name}</span>
          <span className="testi-author-location">{t.location}</span>
        </div>
      </div>

      {/* Bottom gradient accent line */}
      <span className="testi-card-bottom-line" aria-hidden="true" />
    </div>
  );
}

/* ─── JSON-LD Schema ────────────────────────────────────────────────────── */
const TESTIMONIALS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MetaTerminal Trader Reviews",
  itemListElement: TESTIMONIALS.map((t, i) => ({
    "@type": "Review",
    position: i + 1,
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.stars,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "MetaTerminal",
    },
  })),
};

/* ─── Row 1 & Row 2 testimonials ────────────────────────────────────────── */
const ROW1 = TESTIMONIALS.slice(0, 6);
const ROW2 = TESTIMONIALS.slice(6, 12);

/* ─── Main Component ────────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TESTIMONIALS_JSON_LD) }}
      />
      <section
        id="testimonials"
        className="testi-section"
        aria-label="Testimonials — Trusted by Traders Worldwide"
      >
        {/* Top fade — smooth transition from Pricing */}
        <div className="testi-top-fade" aria-hidden="true" />

        {/* Dot-grid background */}
        <div className="testi-grid-bg" aria-hidden="true" />

        {/* Ambient glows */}
        <div className="testi-glows" aria-hidden="true">
          <div className="testi-glow testi-glow-purple" />
          <div className="testi-glow testi-glow-green" />
        </div>

        {/* ── Section Header ── */}
        <div className="testi-header">
          <div className="testi-badge" role="note" aria-label="Testimonials">
            <span className="testi-badge-dot" aria-hidden="true" />
            Testimonials
          </div>

          <h2 className="testi-h2">
            <span className="testi-h2-white">Trusted by Traders</span>
            <span className="testi-h2-gradient">Worldwide.</span>
          </h2>

          <p className="testi-sub">Real traders. Real protection. Real results.</p>
        </div>

        {/* ── Infinite Marquee ── */}
        <div className="testi-marquee-outer" aria-hidden="false">
          {/* Row 1 — scrolls left */}
          <div className="testi-marquee-wrap" aria-label="Testimonials row 1">
            <div className="testi-marquee-row testi-marquee-row-left" role="list">
              {/* Original set */}
              {ROW1.map((t) => (
                <TestiCard key={`r1a-${t.name}`} t={t} />
              ))}
              {/* Duplicate for seamless loop */}
              {ROW1.map((t) => (
                <TestiCard key={`r1b-${t.name}`} t={t} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="testi-marquee-wrap" aria-label="Testimonials row 2">
            <div className="testi-marquee-row testi-marquee-row-right" role="list">
              {/* Original set */}
              {ROW2.map((t) => (
                <TestiCard key={`r2a-${t.name}`} t={t} />
              ))}
              {/* Duplicate for seamless loop */}
              {ROW2.map((t) => (
                <TestiCard key={`r2b-${t.name}`} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Static grid fallback (shown via prefers-reduced-motion CSS) ── */}
        <div className="testi-static-grid" role="list" aria-label="Testimonials">
          {TESTIMONIALS.map((t) => (
            <TestiCard key={`static-${t.name}`} t={t} />
          ))}
        </div>

        {/* Bottom fade — smooth transition into FAQ */}
        <div className="testi-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
