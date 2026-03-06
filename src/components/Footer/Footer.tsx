import React from "react";

/* ─── JSON-LD Schema ─────────────────────────────────────────────────────── */
const FOOTER_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MetaTerminal AG",
  url: "https://metaterminal.app",
  logo: "https://metaterminal.app/logo.png",
  description:
    "MetaTerminal is a Trader Protection OS that detects emotional trading patterns in real-time and automatically blocks dangerous trades.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "CH",
    addressLocality: "Switzerland",
  },
  sameAs: [
    "https://twitter.com/metaterminal",
    "https://discord.gg/metaterminal",
    "https://linkedin.com/company/metaterminal",
    "https://youtube.com/@metaterminal",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@metaterminal.app",
  },
};

/* ─── Social Icon SVGs ───────────────────────────────────────────────────── */
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ─── Link Column ────────────────────────────────────────────────────────── */
interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: "green" | "purple";
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "API", href: "#", badge: "Soon", badgeColor: "purple" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Trading Psychology Guide", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Community", href: "#" },
      { label: "Status Page", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring", badgeColor: "green" },
      { label: "Press Kit", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
      { label: "GDPR Compliance", href: "#" },
      { label: "Imprint", href: "#" },
    ],
  },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FOOTER_JSON_LD) }}
      />
      <footer className="footer-root" aria-label="Site footer">
        {/* Top fade from CTA section */}
        <div className="footer-top-fade" aria-hidden="true" />

        {/* Dot-grid background pattern */}
        <div className="footer-dot-grid" aria-hidden="true" />

        <div className="footer-inner">
          {/* Top area: brand + columns */}
          <div className="footer-columns">
            {/* Brand column */}
            <div className="footer-brand-col">
              <a href="#" className="footer-logo" aria-label="MetaTerminal home">
                <span className="footer-logo-meta">Meta</span>
                <span className="footer-logo-terminal">Terminal</span>
              </a>
              <p className="footer-tagline">
                The Trader Protection OS. Detect emotional patterns. Block dangerous trades. Protect your account.
              </p>
              {/* Social icons */}
              <div className="footer-socials" aria-label="Social media links">
                <a href="https://twitter.com/metaterminal" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="MetaTerminal on X (Twitter)">
                  <IconX />
                </a>
                <a href="https://discord.gg/metaterminal" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="MetaTerminal Discord">
                  <IconDiscord />
                </a>
                <a href="https://linkedin.com/company/metaterminal" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="MetaTerminal on LinkedIn">
                  <IconLinkedIn />
                </a>
                <a href="https://youtube.com/@metaterminal" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="MetaTerminal on YouTube">
                  <IconYouTube />
                </a>
              </div>
              <p className="footer-swiss">Swiss-Engineered 🇨🇭</p>
            </div>

            {/* Link columns */}
            {COLUMNS.map((col) => (
              <nav key={col.title} className="footer-link-col" aria-label={col.title}>
                <h3 className="footer-col-title">{col.title}</h3>
                <ul className="footer-link-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                        {link.badge && (
                          <span className={`footer-badge footer-badge-${link.badgeColor ?? "purple"}`}>
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom" role="contentinfo">
            <p className="footer-copy">© 2025 MetaTerminal AG. All rights reserved.</p>
            <p className="footer-made">Made with precision in Switzerland 🇨🇭</p>
            <div className="footer-lang" aria-label="Language selector">
              <select className="footer-lang-select" defaultValue="en" aria-label="Select language">
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
