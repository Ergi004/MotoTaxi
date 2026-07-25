"use client";

import { motion } from "framer-motion";

interface SpeedLinesProps {
  className?: string;
  animate?: boolean;
  delay?: number;
}

/** The three gold accelerating speed-lines from the logo, staggered left-to-right. */
export function SpeedLines({ className, animate = false, delay = 0 }: SpeedLinesProps) {
  const lengths = [46, 34, 22];

  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {lengths.map((len, i) => (
        <motion.line
          key={len}
          x1={0}
          y1={8 + i * 12}
          x2={len}
          y2={8 + i * 12}
          stroke="var(--color-gold)"
          strokeWidth={3}
          strokeLinecap="square"
          initial={animate ? { scaleX: 0, opacity: 0 } : false}
          animate={{ scaleX: 1, opacity: 1 }}
          style={{ transformOrigin: "0% 50%" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </svg>
  );
}
