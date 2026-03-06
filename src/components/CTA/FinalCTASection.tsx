import React from "react";

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="finalcta-section"
      aria-label="Get started with MetaTerminal"
    >
      {/* Animated glow border */}
      <div className="finalcta-glow-border" aria-hidden="true" />

      {/* Background radial glows */}
      <div className="finalcta-glows" aria-hidden="true">
        <div className="finalcta-glow finalcta-glow-purple" />
        <div className="finalcta-glow finalcta-glow-green" />
      </div>

      <div className="finalcta-inner">
        {/* Badge */}
        <div className="finalcta-badge" role="note" aria-label="Ready to start">
          <span className="finalcta-badge-dot" aria-hidden="true" />
          <span>Ready to Start?</span>
        </div>

        {/* Heading */}
        <h2 className="finalcta-h2">
          Stop Losing Money{" "}
          <span className="finalcta-h2-gradient">
            Start Protecting Your Account.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="finalcta-sub">
          Join 3,000+ traders who eliminated emotional trading losses. Start free — no credit card required.
        </p>

        {/* CTA Buttons */}
        <div className="finalcta-buttons">
          <a href="/register" className="finalcta-btn-primary">
            Start Free Today →
          </a>
          <a href="#pricing" className="finalcta-btn-ghost">
            Compare Plans
          </a>
        </div>

        {/* Trust signals */}
        <p className="finalcta-trust">
          ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime &nbsp;·&nbsp; ✓ Swiss data protection 🇨🇭
        </p>
      </div>
    </section>
  );
}
