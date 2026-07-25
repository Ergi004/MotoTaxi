"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { Wordmark } from "@/components/Wordmark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  closeLabel: string;
  links: { href: string; label: string }[];
  themeLabel: string;
  languageLabel: string;
  ctaLabel: string;
  ctaMessage: string;
}

const listVariants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  closed: {},
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 24 },
};

export function MobileMenu({
  open,
  onClose,
  locale,
  closeLabel,
  links,
  themeLabel,
  languageLabel,
  ctaLabel,
  ctaMessage,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-background"
        >
          <div className="flex items-center justify-between px-5 py-5">
            <Wordmark size="sm" />
            <button
              type="button"
              aria-label={closeLabel}
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <motion.nav
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-1 flex-col justify-center gap-2 px-5"
          >
            {links.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-[clamp(1.75rem,8vw,2.75rem)] leading-tight text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            variants={itemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-5 border-t border-border px-5 py-6"
          >
            <WhatsAppButton message={ctaMessage} label={ctaLabel} className="w-full" />
            <div className="flex items-center justify-between">
              <span className="text-small text-foreground-muted">{languageLabel}</span>
              <LanguageSwitcher locale={locale} label={languageLabel} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-small text-foreground-muted">{themeLabel}</span>
              <ThemeToggle label={themeLabel} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
