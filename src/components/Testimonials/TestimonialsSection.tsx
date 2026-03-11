"use client";

import React, { useEffect, useRef, useCallback } from "react";

/* ─── Testimonial Data ─────────────────────────────────────────────────── */
interface Testimonial {
  name: string;
  location: string;
  quote: string;
  stars: number;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
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

/* ─── Main Component ────────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[i] = el;
    },
    [],
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      cardRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
      return;
    }

    const grid = sectionRef.current?.querySelector(".testi-grid");
    if (!grid) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 100);
        });

        observerRef.current?.disconnect();
      },
      { threshold: 0.1 },
    );

    observerRef.current.observe(grid);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TESTIMONIALS_JSON_LD) }}
      />
      <section
        id="testimonials"
        ref={sectionRef}
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

        {/* ── Cards Grid ── */}
        <div className="testi-grid" role="list">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              ref={setCardRef(i)}
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
            </div>
          ))}
        </div>

        {/* Bottom fade — smooth transition into FAQ */}
        <div className="testi-bottom-fade" aria-hidden="true" />
      </section>
    </>
  );
}
