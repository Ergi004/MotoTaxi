"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileMenu } from "@/components/MobileMenu";

interface HeaderProps {
  locale: Locale;
  homeLabel: string;
  serviceLinks: { slug: string; name: string }[];
  ctaLabel: string;
  ctaMessage: string;
  themeLabel: string;
  languageLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
}

export function Header({
  locale,
  homeLabel,
  serviceLinks,
  ctaLabel,
  ctaMessage,
  themeLabel,
  languageLabel,
  menuOpenLabel,
  menuCloseLabel,
}: HeaderProps) {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed(latest > 40);
  });

  const links = serviceLinks.map((s) => ({
    href: `/${locale}/services/${s.slug}`,
    label: s.name,
  }));

  return (
    <>
      <motion.header
        animate={{
          paddingTop: condensed ? 10 : 20,
          paddingBottom: condensed ? 10 : 20,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 px-5 md:px-10"
        style={{
          backgroundColor: condensed ? "var(--color-surface)" : "transparent",
          backdropFilter: condensed ? "blur(10px)" : "none",
          borderBottom: condensed
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href={`/${locale}`}
            aria-label={homeLabel}
            className="flex items-center text-foreground"
          >
            <Image
              src="/images/logo.png"
              alt="MotoTaxi"
              width={1206}
              height={1198}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} label={languageLabel} />
            <ThemeToggle label={themeLabel} />
            <WhatsAppButton
              message={ctaMessage}
              label={ctaLabel}
              className="px-4 py-2.5 text-[13px]"
            />
          </div>

          <button
            type="button"
            aria-label={menuOpenLabel}
            onClick={() => setMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        closeLabel={menuCloseLabel}
        links={[{ href: `/${locale}`, label: homeLabel }, ...links]}
        themeLabel={themeLabel}
        languageLabel={languageLabel}
        ctaLabel={ctaLabel}
        ctaMessage={ctaMessage}
      />
    </>
  );
}
