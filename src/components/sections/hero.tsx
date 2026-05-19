"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

const AVATARS = [
  { initials: "JK", color: "bg-accent-teal" },
  { initials: "AM", color: "bg-accent-green" },
  { initials: "TL", color: "bg-brand-gold" },
  { initials: "SR", color: "bg-brand-danger" },
  { initials: "PN", color: "bg-accent-teal" },
];

const SCORE_CARDS = [
  { label: "Emotion Score", value: 74, color: "#4ECDC4", status: "Controlled" },
  { label: "Consistency", value: 81, color: "#4ECDC4", status: "Strong" },
  { label: "Discipline", value: 88, color: "#4ECDC4", status: "Elite" },
  { label: "Risk Score", value: 79, color: "#4ECDC4", status: "Stable" },
  { label: "Greed Score", value: 43, color: "#FF4757", status: "Warning" },
  { label: "FOMO Score", value: 67, color: "#C9A84C", status: "Monitor" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(78, 205, 196, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>
                <Zap size={10} />
                The Performance OS for Serious Traders
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-brand-offwhite">
                Trade Smarter.{" "}
                <span className="text-gradient">Not Harder.</span>
              </h1>
              <p className="mt-4 font-grotesk font-semibold text-2xl sm:text-3xl text-brand-offwhite/70 leading-tight">
                The AI-Powered Platform That Makes You a Better Trader.
              </p>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
            >
              Join thousands of traders using MetaTerminal to track performance, learn from AI,
              and build discipline — all in one place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button variant="primary" size="lg" className="group">
                Start Free Today
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                See How It Works
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {AVATARS.map((a, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-brand-deeper ${a.color} flex items-center justify-center text-xs font-bold text-white font-mono`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-mono text-sm font-medium text-brand-offwhite">
                  2,400+ traders
                </p>
                <p className="font-sans text-xs text-brand-muted">on the waitlist</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main dashboard card */}
            <div className="glass rounded-2xl p-6 glow-border relative overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-mono text-xs text-brand-muted uppercase tracking-widest">
                    Performance Dashboard
                  </p>
                  <p className="font-grotesk font-bold text-lg text-brand-offwhite mt-0.5">
                    Account Overview
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                  <span className="font-mono text-xs text-accent-teal">LIVE</span>
                </div>
              </div>

              {/* Score cards grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {SCORE_CARDS.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="bg-brand-deeper/60 rounded-xl p-3 border border-accent-teal/5"
                  >
                    <p className="font-mono text-2xl font-bold" style={{ color: card.color }}>
                      {card.value}
                    </p>
                    <p className="font-sans text-xs text-brand-muted mt-0.5">{card.label}</p>
                    <p className="font-mono text-xs mt-1" style={{ color: card.color }}>
                      {card.status}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Account health bar */}
              <div className="bg-brand-deeper/60 rounded-xl p-3 border border-accent-teal/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans text-xs text-brand-muted flex items-center gap-1.5">
                    <Shield size={12} className="text-accent-teal" />
                    Account Health
                  </p>
                  <p className="font-mono text-xs text-accent-teal">Stable</p>
                </div>
                <div className="w-full bg-brand-green/30 rounded-full h-1.5">
                  <motion.div
                    className="bg-accent-teal h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "73%" }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="font-mono text-xs text-brand-muted mt-1.5">
                  180+ days projected — Keep it up
                </p>
              </div>

              {/* Floating decorative elements */}
              <div
                className="absolute top-4 right-4 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(78, 205, 196, 0.06) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating mini cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-accent-teal/15 shadow-glow-teal-sm"
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-accent-teal" />
                <div>
                  <p className="font-mono text-sm font-bold text-accent-teal">+23.4%</p>
                  <p className="font-sans text-xs text-brand-muted">Monthly PnL</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl p-3 border border-accent-teal/15 shadow-glow-teal-sm"
            >
              <div className="flex items-center gap-2">
                <Brain size={14} className="text-accent-green" />
                <div>
                  <p className="font-mono text-sm font-bold text-brand-offwhite">MetaAI</p>
                  <p className="font-sans text-xs text-brand-muted">Analysis ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
