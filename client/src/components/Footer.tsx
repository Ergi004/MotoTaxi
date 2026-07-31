import Link from "next/link";
import { AtSign, Globe, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { Wordmark } from "@/components/Wordmark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

interface FooterProps {
  locale: Locale;
  tagline: string;
  quickLinksTitle: string;
  contactTitle: string;
  whatsappLabel: string;
  emailLabel: string;
  socialTitle: string;
  rights: string;
  languageLabel: string;
  themeLabel: string;
  serviceLinks: { slug: string; name: string }[];
}

export function Footer({
  locale,
  tagline,
  quickLinksTitle,
  contactTitle,
  whatsappLabel,
  emailLabel,
  socialTitle,
  rights,
  languageLabel,
  themeLabel,
  serviceLinks,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background-alt dark:bg-background-alt">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark size="md" />
            <p className="mt-4 max-w-xs text-body text-foreground-muted">{tagline}</p>
            <div aria-hidden="true" className="mt-6 font-display text-gold-strong">
              {"///"}
            </div>
          </div>

          <div>
            <h3 className="text-small font-semibold uppercase tracking-wide text-foreground-muted">
              {quickLinksTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${locale}/services/${s.slug}`}
                    className="text-body text-foreground transition-colors hover:text-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-small font-semibold uppercase tracking-wide text-foreground-muted">
              {contactTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-body text-foreground transition-colors hover:text-gold"
                >
                  <MessageCircle size={16} />
                  {whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href="mailto:mototaxitirana@gmail.com"
                  className="text-body text-foreground transition-colors hover:text-gold"
                >
                  {emailLabel}: mototaxitirana@gmail.com
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-small font-semibold uppercase tracking-wide text-foreground-muted">
              {socialTitle}
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-gold hover:text-gold"
              >
                <AtSign size={15} />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-gold hover:text-gold"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-small text-foreground-muted">
            © {year} MotoTaxi. {rights}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} label={languageLabel} />
            <ThemeToggle label={themeLabel} />
          </div>
        </div>
      </div>
    </footer>
  );
}
