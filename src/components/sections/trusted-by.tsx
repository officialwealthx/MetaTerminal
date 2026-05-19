"use client";

import { motion } from "framer-motion";

const MARKETS = [
  { label: "FOREX", desc: "Major & Minor Pairs" },
  { label: "CRYPTO", desc: "All Digital Assets" },
  { label: "STOCKS", desc: "Global Equities" },
  { label: "FUTURES", desc: "Commodities & Index" },
  { label: "OPTIONS", desc: "Derivatives" },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-accent-teal/8 bg-brand-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-brand-muted text-center mb-8 uppercase tracking-widest"
        >
          Built for serious traders across all markets
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {MARKETS.map((market, i) => (
            <motion.div
              key={market.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl border border-accent-teal/10 bg-brand-deeper/40 hover:border-accent-teal/30 transition-colors duration-200"
            >
              <span className="font-mono font-bold text-sm text-accent-teal tracking-widest">
                {market.label}
              </span>
              <span className="font-sans text-xs text-brand-muted">{market.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
