"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Check, Zap, BookOpen, Activity } from "lucide-react";

const META_FEED_FEATURES = [
  "Follow top traders & see their live performance",
  "Share trade ideas with score verification",
  "Verified trader badges based on real data",
  "Community challenges & leaderboards",
  "Real-time trade commentary & analysis",
];

const META_DESK_FEATURES = [
  "8 WHOOP-style performance scores",
  "AI-powered behavioral pattern detection",
  "Multi-broker connection & tracking",
  "AI news explained in seconds",
  "Journal with emotional tagging",
  "Advanced backtesting tools",
];

const FEATURE_HIGHLIGHTS = [
  {
    icon: <Activity size={24} className="text-accent-teal" />,
    title: "8 Performance Scores",
    desc: "WHOOP-style tracking for traders. Know your Emotion, Consistency, Discipline, Greed, FOMO, and Risk scores daily.",
    tag: "TRACKING",
  },
  {
    icon: <Zap size={24} className="text-brand-gold" />,
    title: "AI News Explained",
    desc: "Every market-moving news story explained by MetaAI instantly. No noise, just signal. Know why markets move.",
    tag: "AI POWERED",
  },
  {
    icon: <BookOpen size={24} className="text-accent-green" />,
    title: "Behavioral Engine",
    desc: "Catches revenge trading, FOMO, overtrading before they destroy your account. Alerts you in real-time.",
    tag: "PROTECTION",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-3">
            Platform
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite">
            Two Worlds. One Platform.
          </h2>
          <p className="mt-4 font-sans text-brand-muted max-w-2xl mx-auto text-lg">
            MetaTerminal combines a professional trading social network with a cutting-edge performance intelligence hub.
          </p>
        </motion.div>

        {/* Two main feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* MetaFeed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 glow-border hover:border-accent-teal/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center">
                <Users size={22} className="text-accent-teal" />
              </div>
              <div>
                <p className="font-mono text-xs text-brand-muted uppercase tracking-widest">MetaFeed</p>
                <h3 className="font-grotesk font-bold text-xl text-brand-offwhite">
                  The Twitter for Traders
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {META_FEED_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-accent-teal mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-brand-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MetaDesk */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 glow-border hover:border-accent-teal/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                <BarChart3 size={22} className="text-accent-green" />
              </div>
              <div>
                <p className="font-mono text-xs text-brand-muted uppercase tracking-widest">MetaDesk</p>
                <h3 className="font-grotesk font-bold text-xl text-brand-offwhite">
                  Your Trading Intelligence Hub
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {META_DESK_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="text-accent-green mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-brand-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURE_HIGHLIGHTS.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card rounded-2xl p-6 border border-accent-teal/8 hover:border-accent-teal/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-deeper/80 border border-accent-teal/10 flex items-center justify-center group-hover:border-accent-teal/20 transition-colors">
                  {f.icon}
                </div>
                <span className="font-mono text-xs text-brand-muted border border-brand-muted/20 px-2 py-1 rounded-full">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-grotesk font-bold text-lg text-brand-offwhite mb-2">{f.title}</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
