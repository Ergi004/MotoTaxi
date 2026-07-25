"use client";

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n-config";
import { locales } from "@/lib/i18n-config";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

function withLocale(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = nextLocale;
  return segments.join("/") || `/${nextLocale}`;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.push(withLocale(pathname, next));
  }

  const other = locales.find((l) => l !== locale)!;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => switchTo(other)}
      className="relative flex h-9 w-14 items-center justify-center overflow-hidden rounded-md border border-border text-sm font-medium text-foreground-muted transition-colors hover:border-gold-soft hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="uppercase tracking-wide"
        >
          {locale}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
