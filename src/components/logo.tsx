export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield SVG */}
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#00342E" />
          </linearGradient>
        </defs>
        {/* Shield body */}
        <path
          d="M16 1L2 7v10c0 9.25 5.96 17.9 14 20 8.04-2.1 14-10.75 14-20V7L16 1z"
          fill="url(#shieldGrad)"
        />
        {/* Shield border highlight */}
        <path
          d="M16 1L2 7v10c0 9.25 5.96 17.9 14 20 8.04-2.1 14-10.75 14-20V7L16 1z"
          fill="none"
          stroke="rgba(78, 205, 196, 0.4)"
          strokeWidth="1"
        />
        {/* Terminal icon inside shield */}
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="700"
          fontFamily="monospace"
        >
          MT
        </text>
      </svg>
      {/* Text */}
      <span
        className="font-grotesk font-bold text-lg tracking-tight text-white"
        style={{ letterSpacing: "-0.01em" }}
      >
        MetaTerminal
      </span>
    </div>
  );
}
