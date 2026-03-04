import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      aria-label="MetaTerminal – Home"
      className="flex items-center gap-2.5 no-underline shrink-0"
      style={{ textDecoration: "none" }}
    >
      {/* Logo-Mark */}
      <span
        aria-hidden="true"
        className="flex items-center justify-center shrink-0"
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: "linear-gradient(135deg, #785aff, #5ef0a8)",
        }}
      >
        {/* Shield SVG */}
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L1.5 3.5V8.5C1.5 12.09 4.29 15.44 8 16.5C11.71 15.44 14.5 12.09 14.5 8.5V3.5L8 1Z"
            fill="rgba(255,255,255,0.9)"
          />
          <path
            d="M6 9L7.5 10.5L10.5 7.5"
            stroke="#785aff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Wordmark */}
      <span className="text-[15px] font-semibold leading-none tracking-tight select-none">
        <span className="text-white">Meta</span>
        <span
          style={{
            background: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Terminal
        </span>
      </span>
    </Link>
  );
}
