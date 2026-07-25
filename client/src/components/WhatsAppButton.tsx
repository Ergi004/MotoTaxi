"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  variant?: "primary" | "outline";
  pulse?: boolean;
  className?: string;
}

export function WhatsAppButton({
  message,
  label,
  variant = "primary",
  pulse = false,
  className,
}: WhatsAppButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.97 }}
      animate={pulse ? { scale: [1, 1.02, 1] } : undefined}
      transition={
        pulse
          ? { duration: 2.4, ease: "easeInOut", repeat: Infinity }
          : { duration: 0.22, ease: [0.65, 0, 0.35, 1] }
      }
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-medium transition-colors duration-200",
        isPrimary
          ? "bg-gold text-white hover:brightness-105"
          : "border-[1.5px] border-border text-foreground hover:bg-surface-alt",
        className
      )}
    >
      <MessageCircle size={17} />
      {label}
    </motion.a>
  );
}
