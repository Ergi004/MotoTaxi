import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";

interface BreadcrumbsProps {
  locale: Locale;
  homeLabel: string;
  servicesLabel: string;
  currentLabel: string;
}

export function Breadcrumbs({ locale, homeLabel, servicesLabel, currentLabel }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-small text-foreground-muted">
      <Link href={`/${locale}`} className="transition-colors hover:text-foreground">
        {homeLabel}
      </Link>
      <ChevronRight size={13} />
      <Link href={`/${locale}#services`} className="transition-colors hover:text-foreground">
        {servicesLabel}
      </Link>
      <ChevronRight size={13} />
      <span className="text-foreground">{currentLabel}</span>
    </nav>
  );
}
