"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PRODUCTS, RESOURCES } from "./NavMegaDropdown";
import NavLanguageSwitcher from "./NavLanguageSwitcher";

interface NavMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-semibold uppercase tracking-widest mb-2 px-1"
      style={{ color: "rgba(255,255,255,0.25)" }}
    >
      {children}
    </p>
  );
}

export default function NavMobileMenu({ isOpen, onClose }: NavMobileMenuProps) {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const products = PRODUCTS.filter((item) => !("separator" in item)) as Exclude<
    (typeof PRODUCTS)[number],
    { separator: true }
  >[];

  const resources = RESOURCES.filter((item) => !("separator" in item)) as Exclude<
    (typeof RESOURCES)[number],
    { separator: true }
  >[];

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-x-0 bottom-0 overflow-y-auto md:hidden transition-all duration-300"
      style={{
        top: 58,
        background: "rgba(12,11,16,0.99)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-8px)",
        pointerEvents: isOpen ? "auto" : "none",
        zIndex: 9998,
      }}
    >
      <div className="px-4 py-6 space-y-7 max-w-lg mx-auto">
        {/* Products */}
        <section aria-label="Products">
          <SectionHeading>Products</SectionHeading>
          <ul className="space-y-1" role="list">
            {products.map((item) => (
              <li key={item.href} role="listitem">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  <span
                    className="flex items-center justify-center shrink-0 rounded-lg"
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(255,255,255,0.05)",
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.label}
                      {item.badge && (
                        <span
                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                          style={{
                            background:
                              item.badge === "Elite"
                                ? "rgba(94,240,168,0.12)"
                                : "rgba(255,255,255,0.06)",
                            color:
                              item.badge === "Elite"
                                ? "#5ef0a8"
                                : "rgba(255,255,255,0.4)",
                            border:
                              item.badge === "Elite"
                                ? "1px solid rgba(94,240,168,0.25)"
                                : "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing */}
        <section aria-label="Pricing">
          <SectionHeading>Pricing</SectionHeading>
          <Link
            href="/pricing"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Pricing
          </Link>
        </section>

        {/* Resources */}
        <section aria-label="Resources">
          <SectionHeading>Resources</SectionHeading>
          <ul className="space-y-1" role="list">
            {resources.map((item) => (
              <li key={item.href} role="listitem">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  <span
                    className="flex items-center justify-center shrink-0 rounded-lg"
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(255,255,255,0.05)",
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.label}
                      {item.badge && (
                        <span
                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.4)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Language */}
        <section aria-label="Language selection">
          <SectionHeading>Language</SectionHeading>
          <NavLanguageSwitcher isMobile />
        </section>

        {/* Auth */}
        <section aria-label="Account actions" className="pb-4">
          <div className="flex flex-col gap-2.5">
            <a
              href="https://app.metaterminal.io/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-medium transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
              }}
            >
              Log in
            </a>
            <a
              href="https://app.metaterminal.io/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold transition-all"
              style={{
                background:
                  "linear-gradient(135deg, #9b7aff, #785aff 50%, #6344ee)",
                boxShadow: "0 2px 8px rgba(120,90,255,0.25)",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Get started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
