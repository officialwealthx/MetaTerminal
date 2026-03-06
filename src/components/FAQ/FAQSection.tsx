"use client";

import React, { useState } from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MetaTerminal and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetaTerminal is a Trader Protection OS that monitors your trading behavior in real-time. It detects emotional patterns like revenge trading, FOMO entries, and tilt — then automatically blocks dangerous trades before they damage your account. Think of it as a seatbelt for your trading account.",
      },
    },
    {
      "@type": "Question",
      name: "Which trading platforms does MetaTerminal support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetaTerminal currently supports MetaTrader 4 (MT4) and MetaTrader 5 (MT5) with full integration. cTrader and TradingView integrations are coming soon. The system works alongside your existing broker — no need to switch.",
      },
    },
    {
      "@type": "Question",
      name: "How does MetaTerminal detect emotional trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our behavioral AI analyzes over 40 real-time signals including trade frequency, lot size patterns, time-of-day behavior, loss streaks, and deviation from your normal trading patterns. When these signals indicate emotional decision-making, MetaTerminal intervenes automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sentinel Mode™?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sentinel Mode™ is our most advanced protection layer, available on the Ultimate plan. When your Safety Score drops to Critical, Sentinel completely locks your account from placing any new trades until you've cooled down and your score recovers. It's the ultimate guardrail against emotional destruction.",
      },
    },
    {
      "@type": "Question",
      name: "Can MetaTerminal block my profitable trades by mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetaTerminal doesn't analyze whether a trade will be profitable — it analyzes whether you're making decisions emotionally. A calm, planned trade will never be blocked, even if it loses. We block the pattern, not the trade direction.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a trade is blocked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When MetaTerminal blocks a trade, you receive an instant notification explaining why. The block is logged in your dashboard with the specific pattern detected. You can review all blocked trades in your history, and many users find that 70%+ of blocked trades would have been losers.",
      },
    },
    {
      "@type": "Question",
      name: "Is there really a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our Free plan is genuinely free forever, no credit card required. It includes basic Safety Score monitoring, daily behavioral reports, and up to 3 alerts per day. It's enough to see MetaTerminal's value before upgrading.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All paid plans are month-to-month with no contracts. Cancel anytime from your dashboard — no emails, no calls, no retention tricks. If you're on annual billing, you'll keep access until the end of your billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Does MetaTerminal slow down my trade execution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MetaTerminal operates as a lightweight overlay that monitors your trading patterns without interfering with execution speed. Our median processing time is under 3ms — faster than you can click a button. Your broker connection remains direct and unaffected.",
      },
    },
    {
      "@type": "Question",
      name: "Is my trading data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data is encrypted end-to-end using AES-256 encryption, the same standard used by banks. We're hosted on Swiss infrastructure (🇨🇭), compliant with GDPR and Swiss data protection laws. We never share, sell, or analyze your trading data for any purpose other than protecting your account.",
      },
    },
  ],
};

/* ─── FAQ Data ───────────────────────────────────────────────────────────── */
const FAQS: { category: string; q: string; a: string }[] = [
  {
    category: "Getting Started",
    q: "What is MetaTerminal and how does it work?",
    a: "MetaTerminal is a Trader Protection OS that monitors your trading behavior in real-time. It detects emotional patterns like revenge trading, FOMO entries, and tilt — then automatically blocks dangerous trades before they damage your account. Think of it as a seatbelt for your trading account.",
  },
  {
    category: "Getting Started",
    q: "Which trading platforms does MetaTerminal support?",
    a: "MetaTerminal currently supports MetaTrader 4 (MT4) and MetaTrader 5 (MT5) with full integration. cTrader and TradingView integrations are coming soon. The system works alongside your existing broker — no need to switch.",
  },
  {
    category: "Getting Started",
    q: "How does MetaTerminal detect emotional trading?",
    a: "Our behavioral AI analyzes over 40 real-time signals including trade frequency, lot size patterns, time-of-day behavior, loss streaks, and deviation from your normal trading patterns. When these signals indicate emotional decision-making, MetaTerminal intervenes automatically.",
  },
  {
    category: "Protection Features",
    q: "What is Sentinel Mode™?",
    a: "Sentinel Mode™ is our most advanced protection layer, available on the Ultimate plan. When your Safety Score drops to Critical, Sentinel completely locks your account from placing any new trades until you've cooled down and your score recovers. It's the ultimate guardrail against emotional destruction.",
  },
  {
    category: "Protection Features",
    q: "Can MetaTerminal block my profitable trades by mistake?",
    a: "MetaTerminal doesn't analyze whether a trade will be profitable — it analyzes whether you're making decisions emotionally. A calm, planned trade will never be blocked, even if it loses. We block the pattern, not the trade direction.",
  },
  {
    category: "Protection Features",
    q: "What happens when a trade is blocked?",
    a: "When MetaTerminal blocks a trade, you receive an instant notification explaining why. The block is logged in your dashboard with the specific pattern detected. You can review all blocked trades in your history, and many users find that 70%+ of blocked trades would have been losers.",
  },
  {
    category: "Billing & Plans",
    q: "Is there really a free plan?",
    a: "Yes — our Free plan is genuinely free forever, no credit card required. It includes basic Safety Score monitoring, daily behavioral reports, and up to 3 alerts per day. It's enough to see MetaTerminal's value before upgrading.",
  },
  {
    category: "Billing & Plans",
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. All paid plans are month-to-month with no contracts. Cancel anytime from your dashboard — no emails, no calls, no retention tricks. If you're on annual billing, you'll keep access until the end of your billing period.",
  },
  {
    category: "Technical",
    q: "Does MetaTerminal slow down my trade execution?",
    a: "No. MetaTerminal operates as a lightweight overlay that monitors your trading patterns without interfering with execution speed. Our median processing time is under 3ms — faster than you can click a button. Your broker connection remains direct and unaffected.",
  },
  {
    category: "Technical",
    q: "Is my trading data secure?",
    a: "Your data is encrypted end-to-end using AES-256 encryption, the same standard used by banks. We're hosted on Swiss infrastructure (🇨🇭), compliant with GDPR and Swiss data protection laws. We never share, sell, or analyze your trading data for any purpose other than protecting your account.",
  },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <section
        id="faq"
        className="faq-section"
        aria-label="Frequently Asked Questions"
      >
        {/* Ambient glows */}
        <div className="faq-glows" aria-hidden="true">
          <div className="faq-glow faq-glow-purple" />
          <div className="faq-glow faq-glow-green" />
        </div>

        {/* Badge */}
        <div className="faq-badge" role="note" aria-label="FAQ section">
          <span className="faq-badge-dot" aria-hidden="true" />
          <span>Frequently Asked Questions</span>
        </div>

        {/* Heading */}
        <h2 className="faq-h2">
          Got Questions?{" "}
          <span className="faq-h2-gradient">We&apos;ve Got Answers.</span>
        </h2>
        <p className="faq-sub">
          Everything you need to know about protecting your trading account with MetaTerminal.
        </p>

        {/* FAQ List */}
        <div className="faq-list" role="list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-card${isOpen ? " faq-card-open" : ""}`}
                role="listitem"
              >
                <button
                  id={`faq-trigger-${i}`}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-question">{item.q}</span>
                  <svg
                    className={`faq-chevron${isOpen ? " faq-chevron-open" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <polyline points="4 6 8 10 12 6" />
                  </svg>
                </button>
                <div
                  id={`faq-content-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`faq-answer-wrap${isOpen ? " faq-answer-wrap-open" : ""}`}
                >
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <p className="faq-bottom-cta">
          Still have questions?{" "}
          <a href="mailto:support@metaterminal.app" className="faq-support-link">
            Contact our support team →
          </a>
        </p>
      </section>
    </>
  );
}
