import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-accent-teal text-brand-deeper hover:bg-accent-green active:scale-[0.98] shadow-glow-teal-sm":
              variant === "primary",
            "bg-transparent text-brand-offwhite border border-brand-offwhite/20 hover:border-accent-teal/40 hover:text-accent-teal":
              variant === "ghost",
            "bg-transparent text-accent-teal border border-accent-teal/30 hover:bg-accent-teal/10":
              variant === "outline",
          },
          {
            "text-sm px-4 py-2 rounded-lg": size === "sm",
            "text-sm px-5 py-2.5 rounded-lg": size === "md",
            "text-base px-6 py-3 rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
