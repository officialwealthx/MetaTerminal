"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function HamburgerButton({
  isOpen,
  onToggle,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className="relative flex flex-col justify-center items-center w-9 h-9 rounded-lg shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      {/* Top bar */}
      <span
        aria-hidden="true"
        className="absolute block h-[1.5px] rounded-full transition-all duration-300 ease-in-out"
        style={{
          width: 18,
          background: "rgba(255,255,255,0.7)",
          transform: isOpen
            ? "translateY(0px) rotate(45deg)"
            : "translateY(-5px) rotate(0deg)",
        }}
      />
      {/* Middle bar */}
      <span
        aria-hidden="true"
        className="absolute block h-[1.5px] rounded-full transition-all duration-300 ease-in-out"
        style={{
          width: 18,
          background: "rgba(255,255,255,0.7)",
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      {/* Bottom bar */}
      <span
        aria-hidden="true"
        className="absolute block h-[1.5px] rounded-full transition-all duration-300 ease-in-out"
        style={{
          width: 18,
          background: "rgba(255,255,255,0.7)",
          transform: isOpen
            ? "translateY(0px) rotate(-45deg)"
            : "translateY(5px) rotate(0deg)",
        }}
      />
    </button>
  );
}
