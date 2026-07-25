"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

interface RevealProps extends ComponentProps<typeof motion.div> {
  delay?: number;
}

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
