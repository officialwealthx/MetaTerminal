import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // MetaTerminal Brand Colors
        "brand-dark": "#00342E",
        "brand-deeper": "#001A17",
        "brand-card": "#002420",
        "brand-green": "#00423A",
        "accent-teal": "#4ECDC4",
        "accent-green": "#00A896",
        "brand-white": "#FFFFFF",
        "brand-offwhite": "#E8F5F3",
        "brand-muted": "#7A9E99",
        "brand-gold": "#C9A84C",
        "brand-danger": "#FF4757",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(78, 205, 196, 0.15) 0%, transparent 60%)",
        "glow-green": "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-teal": "0 0 30px rgba(78, 205, 196, 0.15)",
        "glow-teal-sm": "0 0 15px rgba(78, 205, 196, 0.1)",
        "card": "0 1px 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
