"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "text";

interface ButtonProps extends Omit<ComponentProps<typeof motion.a>, "children"> {
  variant?: Variant;
  showArrow?: boolean;
  children?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200";

const variantClasses: Record<Variant, string> = {
  primary:
    "rounded-md bg-gold px-6 py-3.5 text-[15px] text-white hover:brightness-105",
  outline:
    "rounded-md border-[1.5px] border-border px-6 py-3.5 text-[15px] text-foreground hover:bg-surface-alt",
  text: "group text-gold px-0 py-0 text-[15px]",
};

export function Button({
  variant = "primary",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.65, 0, 0.35, 1] }}
      className={cn(base, variantClasses[variant], className)}
      {...props}
    >
      <span className={variant === "text" ? "relative" : undefined}>
        {children}
        {variant === "text" && (
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-200 ease-out group-hover:scale-x-100" />
        )}
      </span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </motion.a>
  );
}
