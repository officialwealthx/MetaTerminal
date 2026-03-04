"use client";

import { useEffect, useRef, useState } from "react";

const LANGUAGES = [
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "de", label: "DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "fr", label: "FR", flag: "🇫🇷", name: "Français" },
  { code: "es", label: "ES", flag: "🇪🇸", name: "Español" },
  { code: "ar", label: "AR", flag: "🇸🇦", name: "العربية" },
  { code: "zh", label: "ZH", flag: "🇨🇳", name: "中文" },
  { code: "ja", label: "JA", flag: "🇯🇵", name: "日本語" },
];

const STORAGE_KEY = "mt-lang";

interface NavLanguageSwitcherProps {
  /** When true, renders as full-width buttons (mobile layout) */
  isMobile?: boolean;
}

export default function NavLanguageSwitcher({
  isMobile = false,
}: NavLanguageSwitcherProps) {
  const [activeLang, setActiveLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hydrate from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES.some((l) => l.code === stored)) {
      setActiveLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  // Click-outside to close
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  function selectLang(code: string) {
    setActiveLang(code);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code;
    }
    setIsOpen(false);
  }

  const active = LANGUAGES.find((l) => l.code === activeLang) ?? LANGUAGES[0];

  // ── Mobile layout: inline list of flag buttons ──────────────────────────
  if (isMobile) {
    return (
      <div
        role="listbox"
        aria-label="Select language"
        className="flex flex-wrap gap-2"
      >
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            role="option"
            aria-selected={activeLang === lang.code}
            onClick={() => selectLang(lang.code)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            style={{
              background:
                activeLang === lang.code
                  ? "rgba(120,90,255,0.15)"
                  : "rgba(255,255,255,0.05)",
              border:
                activeLang === lang.code
                  ? "1px solid rgba(120,90,255,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              color:
                activeLang === lang.code
                  ? "#a78bfa"
                  : "rgba(255,255,255,0.55)",
              cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // ── Desktop layout: globe icon + dropdown ────────────────────────────────
  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={`Language: ${active.name}. Click to change`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1 h-8 px-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        style={{
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.55)",
          cursor: "pointer",
        }}
      >
        {/* Globe icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
        </svg>
        <span className="text-xs font-medium">{active.label}</span>
        {/* Chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 py-1.5 rounded-2xl shadow-xl overflow-hidden"
          style={{
            top: "100%",
            minWidth: 140,
            background: "rgba(18,17,22,0.96)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
            zIndex: 100,
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={activeLang === lang.code}
              onClick={() => selectLang(lang.code)}
              className="flex items-center gap-2.5 w-full px-4 py-2 text-sm transition-colors text-left"
              style={{
                background: "transparent",
                border: "none",
                color:
                  activeLang === lang.code
                    ? "#a78bfa"
                    : "rgba(255,255,255,0.55)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.04)";
                if (activeLang !== lang.code) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.95)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                if (activeLang !== lang.code) {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.55)";
                }
              }}
            >
              <span aria-hidden="true" className="text-base">
                {lang.flag}
              </span>
              <span className="font-medium">{lang.label}</span>
              <span className="ml-auto text-xs opacity-50">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
