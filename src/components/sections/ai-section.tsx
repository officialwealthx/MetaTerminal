"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, BookOpen, BarChart3, Zap } from "lucide-react";

const AI_FEATURES = [
  {
    icon: <TrendingUp size={18} className="text-accent-teal" />,
    title: "Pattern Recognition",
    desc: "Analyzes 180+ trades to find losing patterns",
  },
  {
    icon: <Brain size={18} className="text-accent-green" />,
    title: "Emotional Analysis",
    desc: "Tracks emotional state across sessions & times",
  },
  {
    icon: <Shield size={18} className="text-accent-teal" />,
    title: "Risk Assessment",
    desc: "Real-time risk warnings before you over-leverage",
  },
  {
    icon: <BookOpen size={18} className="text-brand-gold" />,
    title: "Learning Coach",
    desc: "Personalized improvement plans based on your data",
  },
  {
    icon: <BarChart3 size={18} className="text-accent-teal" />,
    title: "Market Context",
    desc: "Explains every market move with institutional context",
  },
  {
    icon: <Zap size={18} className="text-accent-green" />,
    title: "Live Alerts",
    desc: "Warns you before FOMO and revenge trades happen",
  },
];

const CHAT_MESSAGES = [
  {
    role: "user",
    text: "Why do I keep losing in the NY session?",
  },
  {
    role: "ai",
    text: `I analyzed your last 180 trades. Your win rate drops from 68% in London to 31% in NY. Your emotion score averages 28 points lower after 8PM. Recommendation: Limit NY trades to 2 max, no trading after 10PM.`,
    stats: [
      { label: "London Win Rate", value: "68%", color: "text-accent-teal" },
      { label: "NY Win Rate", value: "31%", color: "text-brand-danger" },
      { label: "Emotion Drop", value: "-28pts", color: "text-brand-gold" },
    ],
  },
];

export function AiSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-3">
            MetaAI
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite">
            Your Personal Trading Intelligence.
          </h2>
          <p className="mt-4 font-sans text-brand-muted max-w-2xl mx-auto text-lg">
            Not a chatbot. An institutional analyst that knows your trading history, 
            patterns, and psychology — built to make you better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden glow-border"
          >
            {/* Chat header */}
            <div className="bg-brand-deeper/80 px-5 py-4 border-b border-accent-teal/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-teal/20 border border-accent-teal/30 flex items-center justify-center">
                <Brain size={16} className="text-accent-teal" />
              </div>
              <div>
                <p className="font-grotesk font-semibold text-sm text-brand-offwhite">MetaAI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
                  <p className="font-mono text-xs text-brand-muted">Analyzing your data</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-5 space-y-4">
              {CHAT_MESSAGES.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "user" ? (
                    <div className="bg-accent-teal/15 border border-accent-teal/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      <p className="font-sans text-sm text-brand-offwhite">{msg.text}</p>
                    </div>
                  ) : (
                    <div className="bg-brand-deeper/60 border border-accent-teal/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="font-sans text-sm text-brand-muted leading-relaxed">{msg.text}</p>
                      {msg.stats && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {msg.stats.map((stat) => (
                            <div key={stat.label} className="bg-brand-card rounded-lg p-2 text-center">
                              <p className={`font-mono text-sm font-bold ${stat.color}`}>{stat.value}</p>
                              <p className="font-sans text-xs text-brand-muted mt-0.5">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              <div className="flex justify-start">
                <div className="bg-brand-deeper/60 border border-accent-teal/10 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-accent-teal"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <div className="space-y-5">
            {AI_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-accent-teal/10 flex items-center justify-center shrink-0 group-hover:border-accent-teal/25 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-grotesk font-semibold text-brand-offwhite mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
