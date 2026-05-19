"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    desc: "Start your journey",
    features: [
      "MetaFeed community access",
      "Public trader profile",
      "5 posts per day",
      "Basic performance dashboard",
      "3 performance scores",
    ],
    cta: "Start Free",
    highlight: false,
    badge: null,
  },
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 29, yearly: 24 },
    desc: "For consistent traders",
    features: [
      "All 8 performance scores",
      "Broker connection",
      "Trading journal",
      "3 learning paths",
      "Community guides",
      "Email support",
    ],
    cta: "Get Starter",
    highlight: false,
    badge: null,
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 79, yearly: 66 },
    desc: "For serious traders",
    features: [
      "Everything in Starter",
      "MetaAI news explained",
      "Behavioral engine",
      "All courses & learning paths",
      "Verified trader badge",
      "Advanced backtesting",
      "Priority support",
    ],
    cta: "Go Pro",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    id: "elite",
    name: "Elite",
    price: { monthly: 199, yearly: 166 },
    desc: "For elite performance",
    features: [
      "Everything in Pro",
      "Daily AI coaching session",
      "Elite masterclass access",
      "1-on-1 mentor sessions",
      "Prop firm mode",
      "Institutional market reports",
      "Dedicated account manager",
    ],
    cta: "Go Elite",
    highlight: false,
    badge: "ELITE",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-brand-card/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-brand-offwhite">
            Invest in Your Edge.
          </h2>
          <p className="mt-4 font-sans text-brand-muted max-w-xl mx-auto text-lg">
            Choose the plan that matches your ambition.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`font-sans text-sm ${!isYearly ? "text-brand-offwhite" : "text-brand-muted"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                isYearly ? "bg-accent-teal" : "bg-brand-green"
              }`}
              aria-label="Toggle yearly billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`font-sans text-sm ${isYearly ? "text-brand-offwhite" : "text-brand-muted"}`}>
              Yearly
              <span className="ml-1.5 font-mono text-xs text-accent-teal">Save 2 months</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl p-6 flex flex-col",
                plan.highlight
                  ? "bg-accent-teal/10 border border-accent-teal/30 shadow-glow-teal"
                  : "glass border border-accent-teal/10"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={cn(
                  "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-mono font-bold",
                  plan.highlight
                    ? "bg-accent-teal text-brand-deeper"
                    : "bg-brand-gold text-brand-deeper"
                )}>
                  {plan.badge}
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {plan.id === "elite" && <Crown size={16} className="text-brand-gold" />}
                  {plan.id === "pro" && <Star size={16} className="text-accent-teal" />}
                  <h3 className="font-grotesk font-bold text-lg text-brand-offwhite">{plan.name}</h3>
                </div>
                <p className="font-sans text-sm text-brand-muted mb-4">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="font-grotesk font-bold text-4xl text-brand-offwhite">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="font-sans text-sm text-brand-muted mb-1.5">/mo</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plan.highlight ? "text-accent-teal" : "text-accent-green"
                      )}
                    />
                    <span className="font-sans text-sm text-brand-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlight ? "primary" : "ghost"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
