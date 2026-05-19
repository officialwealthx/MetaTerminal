"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { ScoreCard } from "@/components/score-card";

const SCORES = [
  { label: "Emotion Score", score: 74, emoji: "🟢", trend: "up" as const },
  { label: "Consistency Score", score: 81, emoji: "💎", trend: "up" as const },
  { label: "Discipline Score", score: 88, emoji: "💎", trend: "up" as const },
  { label: "Greed Score", score: 43, emoji: "🔴", trend: "down" as const },
  { label: "FOMO Score", score: 67, emoji: "🟡", trend: "neutral" as const },
  { label: "Risk Score", score: 79, emoji: "🟢", trend: "up" as const },
];

export function Scores() {
  return (
    <section className="py-24 bg-brand-card/20 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(78, 205, 196, 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-3">
            Performance Scores
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite">
            Know Exactly Where You Stand.
          </h2>
          <p className="mt-4 font-sans text-brand-muted max-w-2xl mx-auto text-lg">
            WHOOP-style performance tracking built specifically for traders. 
            Eight scores that tell you everything about your trading health.
          </p>
        </motion.div>

        {/* Score grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {SCORES.map((score, i) => (
            <ScoreCard
              key={score.label}
              label={score.label}
              score={score.score}
              emoji={score.emoji}
              trend={score.trend}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Account health bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-6 glow-border max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-accent-teal" />
              <span className="font-grotesk font-semibold text-brand-offwhite">
                Account Health
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="font-mono text-sm text-accent-teal font-medium">Stable</span>
            </div>
          </div>

          <div className="w-full bg-brand-deeper/60 rounded-full h-2.5 mb-3">
            <motion.div
              className="h-2.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #4ECDC4, #00A896)",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "73%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="font-sans text-sm text-brand-muted">
              Account Status: <span className="text-accent-teal font-medium">Stable</span> — 180+ days projected
            </p>
            <p className="font-mono text-sm text-brand-muted">73 / 100</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
