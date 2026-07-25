import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  line1: string;
  accent: string;
  line2?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  line1,
  accent,
  line2,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-small font-semibold uppercase tracking-[0.14em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2 text-foreground">
        {line1}
        <span className="italic text-gold">{accent}</span>
        {line2}
      </h2>
    </div>
  );
}
