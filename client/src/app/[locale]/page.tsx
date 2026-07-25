import { isLocale, type Locale } from "@/lib/i18n-config";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { serviceSlugs } from "@/lib/services";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const marqueeItems = serviceSlugs.map((slug) => dict.services[slug].name);

  return (
    <>
      <Hero
        eyebrow={dict.hero.eyebrow}
        headline1={dict.hero.headline1}
        headline2={dict.hero.headline2}
        body={dict.hero.body}
        ctaPrimaryLabel={dict.hero.ctaPrimary}
        ctaSecondaryLabel={dict.hero.ctaSecondary}
        whatsappMessage={dict.services.mototaxi.whatsappMessage}
      />
      <MarqueeStrip items={marqueeItems} />
      <ServiceGrid locale={locale as Locale} dict={dict} />
      <ValueProps dict={dict} />
      <HowItWorks dict={dict} />
      <CtaBanner dict={dict} whatsappMessage={dict.services.mototaxi.whatsappMessage} />
    </>
  );
}
