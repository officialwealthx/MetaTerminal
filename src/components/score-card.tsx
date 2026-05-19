"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ScoreCardProps {
  label: string;
  score: number;
  emoji?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

function getScoreColor(score: number) {
  if (score >= 75) return { ring: "#4ECDC4", text: "text-accent-teal", label: "STRONG" };
  if (score >= 55) return { ring: "#C9A84C", text: "text-brand-gold", label: "FAIR" };
  return { ring: "#FF4757", text: "text-brand-danger", label: "WEAK" };
}

export function ScoreCard({ label, score, emoji, trend = "neutral", delay = 0 }: ScoreCardProps) {
  const { ring, text, label: statusLabel } = getScoreColor(score);
  const circumference = 2 * Math.PI * 28;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-accent-teal/20 transition-all duration-300"
    >
      {/* Circular progress */}
      <div className="relative w-20 h-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
          <circle
            cx="40"
            cy="40"
            r="28"
            fill="none"
            stroke="rgba(78, 205, 196, 0.1)"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="28"
            fill="none"
            stroke={ring}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-mono font-bold text-xl leading-none", text)}>{score}</span>
          {emoji && <span className="text-xs">{emoji}</span>}
        </div>
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="font-sans text-sm font-medium text-brand-offwhite">{label}</p>
        <p className={cn("font-mono text-xs mt-0.5 flex items-center gap-1", text)}>
          {trend === "up" && <TrendingUp size={10} />}
          {trend === "down" && <TrendingDown size={10} />}
          {trend === "neutral" && <Minus size={10} />}
          {statusLabel}
        </p>
      </div>
    </motion.div>
  );
}
