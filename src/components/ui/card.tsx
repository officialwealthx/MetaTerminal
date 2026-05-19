import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-accent-teal/10 bg-brand-card",
        glow && "shadow-glow-teal",
        className
      )}
    >
      {children}
    </div>
  );
}
