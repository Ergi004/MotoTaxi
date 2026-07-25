import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { serviceSlugs, isServiceSlug } from "@/lib/services";
import { getDictionary } from "@/dictionaries";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) return {};

  const dict = await getDictionary(locale);
  const service = dict.services[slug];

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} — ${dict.meta.titleSuffix}`,
      description: service.shortDescription,
      locale: locale === "al" ? "sq_AL" : "en_US",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound();

  const dict = await getDictionary(locale as Locale);

  return <ServiceDetailTemplate locale={locale as Locale} slug={slug} dict={dict} />;
}
