import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "@/components/logo";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "MetaFeed", href: "#" },
      { label: "MetaDesk", href: "#" },
      { label: "MetaAI", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Learning Center", href: "#" },
      { label: "Community", href: "#community" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Risk Disclaimer", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "#", icon: <Twitter size={18} /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin size={18} /> },
  { label: "Instagram", href: "#", icon: <Instagram size={18} /> },
];

export function Footer() {
  return (
    <footer className="border-t border-accent-teal/8 bg-brand-deeper pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 font-sans text-sm text-brand-muted leading-relaxed">
              The Performance Operating System for Serious Traders.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-brand-card border border-accent-teal/10 flex items-center justify-center text-brand-muted hover:text-accent-teal hover:border-accent-teal/25 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="font-grotesk font-semibold text-sm text-brand-offwhite mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-brand-muted hover:text-brand-offwhite transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-accent-teal/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-brand-muted">
            © 2026 MetaTerminal. All rights reserved.
          </p>
          <p className="font-mono text-xs text-brand-muted">
            The Performance Operating System for Serious Traders.
          </p>
        </div>
      </div>
    </footer>
  );
}
