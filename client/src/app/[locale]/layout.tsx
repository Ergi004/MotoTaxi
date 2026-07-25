import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/dictionaries";
import { serviceSlugs } from "@/lib/services";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.homeTitle,
      template: `%s — ${dict.meta.titleSuffix}`,
    },
    description: dict.meta.homeDescription,
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      locale: locale === "al" ? "sq_AL" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const serviceLinks = serviceSlugs.map((slug) => ({
    slug,
    name: dict.services[slug].name,
  }));

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SplashScreen tagline={dict.splash.tagline} />
          <Header
            locale={locale as Locale}
            homeLabel={dict.nav.home}
            serviceLinks={serviceLinks}
            ctaLabel={dict.header.cta}
            ctaMessage={dict.services.mototaxi.whatsappMessage}
            themeLabel={dict.theme.toggleLabel}
            languageLabel={dict.language.switchLabel}
            menuOpenLabel={dict.nav.menuOpen}
            menuCloseLabel={dict.nav.menuClose}
          />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer
            locale={locale as Locale}
            tagline={dict.footer.tagline}
            quickLinksTitle={dict.footer.quickLinksTitle}
            contactTitle={dict.footer.contactTitle}
            whatsappLabel={dict.footer.whatsappLabel}
            emailLabel={dict.footer.emailLabel}
            socialTitle={dict.footer.socialTitle}
            rights={dict.footer.rights}
            languageLabel={dict.language.switchLabel}
            themeLabel={dict.theme.toggleLabel}
            serviceLinks={serviceLinks}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
