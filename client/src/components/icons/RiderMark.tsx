"use client";

import { motion } from "framer-motion";

interface RiderMarkProps {
  className?: string;
  /** Play the stroke draw-on animation once (used by the splash screen). */
  animate?: boolean;
  /** Animation duration in seconds for the draw-on stroke. */
  duration?: number;
}

const EASE = [0.65, 0, 0.35, 1] as const;

/**
 * Simplified line-art silhouette of a rider on a motorbike, echoing the
 * MotoTaxi wordmark. Built from strokes (not a raster image) so it can be
 * redrawn on demand for the splash screen and recolored via currentColor.
 */
export function RiderMark({ className, animate = false, duration = 0.9 }: RiderMarkProps) {
  const draw = (delay: number) =>
    animate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: EASE },
        }
      : {
          initial: false,
          animate: { pathLength: 1, opacity: 1 },
        };

  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* rear wheel */}
      <motion.circle cx="24" cy="60" r="14" {...draw(0)} />
      {/* front wheel */}
      <motion.circle cx="92" cy="60" r="14" {...draw(0.05)} />
      {/* frame + seat */}
      <motion.path d="M24 60 L46 38 L70 38 L92 60" {...draw(0.15)} />
      {/* fork to handlebar */}
      <motion.path d="M70 38 L82 22 L94 22" {...draw(0.25)} />
      {/* rider back + helmet */}
      <motion.path
        d="M46 38 L42 24 Q42 16 50 16 Q56 16 56 22 L54 30"
        {...draw(0.32)}
      />
      {/* rider arm to handlebar */}
      <motion.path d="M54 26 L74 24" {...draw(0.4)} />
    </svg>
  );
}
