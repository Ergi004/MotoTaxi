"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ImagePlaceholderProps {
  gradient: string;
  /** Pass an already-rendered icon element, e.g. `<Bike className="h-10 w-10" />`. */
  icon?: ReactNode;
  layoutId?: string;
  className?: string;
  rounded?: "lg" | "xl";
}

/**
 * Duotone gradient placeholder standing in for real photography.
 * Swap the background for a next/image once photos are supplied.
 */
export function ImagePlaceholder({
  gradient,
  icon,
  layoutId,
  className,
  rounded = "lg",
}: ImagePlaceholderProps) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        rounded === "xl" ? "rounded-xl" : "rounded-lg",
        className
      )}
      style={{ background: gradient }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 8px)",
        }}
      />
      {icon && <span className="relative">{icon}</span>}
    </motion.div>
  );
}
