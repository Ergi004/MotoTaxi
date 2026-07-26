import { ServiceCard } from "@/components/ServiceCard";
import { serviceSlugs, serviceMeta, type ServiceSlug } from "@/lib/services";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/dictionaries";

interface ExploreOthersProps {
  locale: Locale;
  dict: Dictionary;
  currentSlug: ServiceSlug;
}

export function ExploreOthers({ locale, dict, currentSlug }: ExploreOthersProps) {
  const others = serviceSlugs.filter((slug) => slug !== currentSlug);

  return (
    <section className="border-t border-border px-5 pb-28 pt-16 md:px-10 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-small font-semibold uppercase tracking-[0.14em] text-gold">
          {dict.serviceDetail.exploreOthersEyebrow}
        </p>
        <h2 className="mt-3 text-h2 text-foreground">{dict.serviceDetail.exploreOthersHeading}</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {others.map((slug, index) => {
            const meta = serviceMeta[slug];
            const service = dict.services[slug];
            const Icon = meta.icon;
            return (
              <ServiceCard
                key={slug}
                locale={locale}
                slug={slug}
                name={service.name}
                shortDescription={service.shortDescription}
                icon={<Icon className="h-10 w-10 text-background/80" strokeWidth={1.5} />}
                gradient={meta.gradient}
                colSpan=""
                viewDetailsLabel={dict.servicesSection.viewDetails}
                index={index}
                image={meta.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
