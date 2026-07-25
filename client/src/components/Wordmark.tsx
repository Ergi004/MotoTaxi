import { cn } from "@/lib/cn";

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-[clamp(2.5rem,9vw,5.5rem)]",
};

export function Wordmark({ className, size = "sm" }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display leading-none tracking-tight",
        sizeClasses[size],
        className
      )}
    >
      <span className="text-foreground">Moto</span>
      <span className="text-gold italic">Taxi</span>
    </span>
  );
}
