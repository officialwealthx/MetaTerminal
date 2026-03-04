import React from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      className="hero-cta-arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroCTA() {
  return (
    <div className="hero-btns" role="group" aria-label="Call to action buttons">
      <Link href="/register" className="hero-btn-filled" aria-label="Get started for free">
        Get Started Free
        <ArrowIcon />
      </Link>
      <Link href="#solution" className="hero-btn-ghost" aria-label="See how MetaTerminal works">
        See How It Works
      </Link>
    </div>
  );
}
