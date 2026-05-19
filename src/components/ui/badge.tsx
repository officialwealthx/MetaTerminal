import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "danger" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full border",
        {
          "bg-accent-teal/10 text-accent-teal border-accent-teal/20": variant === "default",
          "bg-brand-gold/10 text-brand-gold border-brand-gold/20": variant === "gold",
          "bg-brand-danger/10 text-brand-danger border-brand-danger/20": variant === "danger",
          "bg-brand-muted/10 text-brand-muted border-brand-muted/20": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
