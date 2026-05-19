"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #001A17 0%, #00342E 50%, #001A17 100%)",
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-4">
            Get Early Access
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite mb-4">
            Ready to Become a Better Trader?
          </h2>
          <p className="font-sans text-lg text-brand-muted mb-10">
            Join 2,400+ traders already on the waitlist. Be first in when we launch.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-brand-card border border-accent-teal/20 rounded-xl px-4 py-3 font-sans text-sm text-brand-offwhite placeholder:text-brand-muted focus:outline-none focus:border-accent-teal/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-accent-teal text-brand-deeper font-sans font-semibold text-sm px-6 py-3 rounded-xl hover:bg-accent-green transition-colors duration-200 flex items-center justify-center gap-2 shrink-0"
              >
                Join Waitlist
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-accent-teal/10 border border-accent-teal/20 rounded-2xl px-8 py-5 max-w-md mx-auto"
            >
              <div className="w-8 h-8 rounded-full bg-accent-teal/20 border border-accent-teal/30 flex items-center justify-center">
                <Check size={16} className="text-accent-teal" />
              </div>
              <p className="font-sans text-sm text-brand-offwhite">
                You&apos;re on the list! We&apos;ll notify you at launch.
              </p>
            </motion.div>
          )}

          {/* Trust signals */}
          <p className="mt-6 font-sans text-xs text-brand-muted">
            No credit card required &nbsp;•&nbsp; Cancel anytime &nbsp;•&nbsp; Start free
          </p>
        </motion.div>
      </div>
    </section>
  );
}
