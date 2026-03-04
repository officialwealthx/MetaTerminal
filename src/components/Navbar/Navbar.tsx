"use client";

import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavDesktopLinks from "./NavDesktopLinks";
import NavLanguageSwitcher from "./NavLanguageSwitcher";
import NavLogo from "./NavLogo";
import NavMobileMenu from "./NavMobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleMenu() {
    setMenuOpen((v) => !v);
  }

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 9999,
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          background: "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(20px) saturate(1.2)"
            : "none",
        }}
      >
        <nav
          role="navigation"
          aria-label="Site navigation"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: 58,
            padding: "0 16px",
            gap: 6,
          }}
        >
          {/* Logo */}
          <NavLogo />

          {/* Desktop links – centred / left */}
          <div className="flex-1 flex justify-start pl-4">
            <NavDesktopLinks />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-1">
            {/* Language switcher (desktop only) */}
            <div className="hidden md:flex">
              <NavLanguageSwitcher />
            </div>

            {/* Login link (desktop only) */}
            <a
              href="https://app.metaterminal.io/login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Log in to MetaTerminal"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.95)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)";
              }}
            >
              {/* User icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Log in
            </a>

            {/* CTA button (desktop only) */}
            <a
              href="https://app.metaterminal.io/register"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started with MetaTerminal"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all nav-cta"
              style={{
                background:
                  "linear-gradient(135deg, #9b7aff, #785aff 50%, #6344ee)",
                boxShadow: "0 2px 8px rgba(120,90,255,0.25)",
                color: "#fff",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 16px rgba(120,90,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 8px rgba(120,90,255,0.25)";
              }}
            >
              Get started
            </a>

            {/* Hamburger (mobile only) */}
            <div className="flex md:hidden">
              <HamburgerButton isOpen={menuOpen} onToggle={toggleMenu} />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <NavMobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
