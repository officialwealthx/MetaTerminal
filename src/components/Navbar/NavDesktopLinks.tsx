"use client";

import Link from "next/link";
import { ProductsDropdown, ResourcesDropdown } from "./NavMegaDropdown";

export default function NavDesktopLinks() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:flex items-center gap-0.5"
    >
      <ProductsDropdown />

      <Link
        href="/pricing"
        className="text-sm font-medium px-3 py-2 rounded-lg transition-colors"
        style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color =
            "rgba(255,255,255,0.95)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color =
            "rgba(255,255,255,0.55)";
        }}
      >
        Pricing
      </Link>

      <ResourcesDropdown />
    </nav>
  );
}
