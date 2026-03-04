"use client";

import Link from "next/link";
import { useRef, useState } from "react";

// ── Icon components ─────────────────────────────────────────────────────────

function IconShield({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L3 7v6c0 5 3.6 9.4 9 10.5C17.4 22.4 21 18 21 13V7L12 2z"
        fill={color}
        opacity={0.9}
      />
      <path
        d="M9 12l2.5 2.5L15 9.5"
        stroke="#121116"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLock({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" fill={color} opacity={0.9} />
      <path
        d="M8 11V7a4 4 0 0 1 8 0v4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBell({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGrid({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" fill={color} opacity={0.9} />
      <rect x="14" y="3" width="7" height="7" rx="1" fill={color} opacity={0.9} />
      <rect x="3" y="14" width="7" height="7" rx="1" fill={color} opacity={0.9} />
      <rect x="14" y="14" width="7" height="7" rx="1" fill={color} opacity={0.9} />
    </svg>
  );
}

function IconActivity({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPen({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHelpCircle({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path
        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCode({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline
        points="16 18 22 12 16 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="8 6 2 12 8 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2" />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline
        points="9 18 15 12 9 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────

type BadgeType = "Elite" | "Soon";

interface DropdownItem {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  badge?: BadgeType;
  external?: boolean;
  separator?: false;
}

interface SeparatorItem {
  separator: true;
}

type MenuItem = DropdownItem | SeparatorItem;

// ── Menu definitions ─────────────────────────────────────────────────────────

const PRODUCTS: MenuItem[] = [
  {
    href: "/safety-score",
    icon: <IconShield color="#a78bfa" />,
    label: "Safety Score",
    description: "Real-time risk rating for your account",
  },
  {
    href: "/sentinel",
    icon: <IconLock color="#5ef0a8" />,
    label: "Sentinel Mode",
    description: "Automated protection against drawdown",
    badge: "Elite",
  },
  {
    href: "/news-alerts",
    icon: <IconBell color="#f5c542" />,
    label: "News Alerts",
    description: "High-impact event notifications",
  },
  {
    href: "/journal",
    icon: <IconBook color="#60a5fa" />,
    label: "Journal & Reports",
    description: "Track and analyse your trading history",
  },
  {
    href: "/rrr-enforcer",
    icon: <IconActivity color="#fb7185" />,
    label: "RRR Enforcer",
    description: "Enforce your risk-reward discipline",
  },
  {
    href: "/prop-mode",
    icon: <IconGrid color="#34d399" />,
    label: "Prop Firm Mode",
    description: "Optimised settings for funded accounts",
    badge: "Soon",
  },
];

const RESOURCES: MenuItem[] = [
  {
    href: "/blog",
    icon: <IconPen color="#a78bfa" />,
    label: "Blog",
    description: "Insights and trading strategies",
  },
  {
    href: "/help",
    icon: <IconHelpCircle color="#60a5fa" />,
    label: "Help Center",
    description: "Guides, FAQs and support",
  },
  {
    href: "/api",
    icon: <IconCode color="#5ef0a8" />,
    label: "API Docs",
    description: "Integrate MetaTerminal into your stack",
    badge: "Soon",
  },
  { separator: true },
  {
    href: "/community",
    icon: <IconUsers color="#f5c542" />,
    label: "Community",
    description: "Join traders around the world",
  },
  {
    href: "/contact",
    icon: <IconMail color="#fb7185" />,
    label: "Contact",
    description: "Get in touch with our team",
  },
];

// ── Badge ────────────────────────────────────────────────────────────────────

function Badge({ type }: { type: BadgeType }) {
  const isElite = type === "Elite";
  return (
    <span
      className="inline-flex items-center text-[10px] font-semibold px-1.5 py-0.5 rounded-md leading-none"
      style={{
        background: isElite
          ? "rgba(94,240,168,0.12)"
          : "rgba(255,255,255,0.06)",
        color: isElite ? "#5ef0a8" : "rgba(255,255,255,0.4)",
        border: isElite
          ? "1px solid rgba(94,240,168,0.25)"
          : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {type}
    </span>
  );
}

// ── Item renderer ────────────────────────────────────────────────────────────

function DropdownMenuItem({
  item,
  onClose,
}: {
  item: DropdownItem;
  onClose: () => void;
}) {
  const inner = (
    <span className="flex items-start gap-3 w-full">
      {/* Icon wrapper */}
      <span
        className="flex items-center justify-center shrink-0 rounded-lg mt-0.5"
        style={{
          width: 32,
          height: 32,
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {item.icon}
      </span>
      {/* Text */}
      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-1.5 mb-0.5">
          <span
            className="text-sm font-medium leading-tight"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {item.label}
          </span>
          {item.badge && <Badge type={item.badge} />}
        </span>
        <span
          className="text-xs leading-snug"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {item.description}
        </span>
      </span>
      {/* Arrow */}
      <span
        className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <IconChevronRight color="rgba(255,255,255,0.35)" />
      </span>
    </span>
  );

  const sharedClass =
    "group flex items-center px-3 py-2.5 rounded-xl transition-colors cursor-pointer";
  const sharedStyle = { background: "transparent" };

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        role="menuitem"
        className={sharedClass}
        style={sharedStyle}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(255,255,255,0.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      role="menuitem"
      aria-label={item.label}
      onClick={onClose}
      className={sharedClass}
      style={sharedStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      {inner}
    </Link>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface NavMegaDropdownProps {
  label: string;
  items: MenuItem[];
  columns?: 1 | 2;
}

export function NavMegaDropdown({
  label,
  items,
  columns = 1,
}: NavMegaDropdownProps) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scheduleClose() {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }
  function cancelClose() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        style={{
          background: "transparent",
          border: "none",
          color: open ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
          cursor: "pointer",
        }}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Panel */}
      <div
        role="menu"
        aria-label={`${label} menu`}
        className="absolute left-0 pt-2"
        style={{
          top: "100%",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 200,
        }}
      >
        <div
          className="py-2 px-2"
          style={{
            background: "rgba(18,17,22,0.96)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
            minWidth: columns === 2 ? 480 : 280,
          }}
        >
          <div
            className={columns === 2 ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}
          >
            {items.map((item, idx) => {
              if ("separator" in item && item.separator) {
                return (
                  <div
                    key={`sep-${idx}`}
                    role="separator"
                    className="col-span-2 my-1.5 mx-3"
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />
                );
              }
              return (
                <DropdownMenuItem
                  key={(item as DropdownItem).href}
                  item={item as DropdownItem}
                  onClose={() => setOpen(false)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Preset exports ────────────────────────────────────────────────────────────

export function ProductsDropdown() {
  return <NavMegaDropdown label="Products" items={PRODUCTS} columns={2} />;
}

export function ResourcesDropdown() {
  return <NavMegaDropdown label="Resources" items={RESOURCES} columns={1} />;
}

export { PRODUCTS, RESOURCES };
