import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceSlugs, serviceMeta } from "@/lib/services";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/dictionaries";

interface ServiceGridProps {
  locale: Locale;
  dict: Dictionary;
}

export function ServiceGrid({ locale, dict }: ServiceGridProps) {
  return (
    <section id="services" className="px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={dict.servicesSection.eyebrow}
          line1={dict.servicesSection.headingLine1}
          accent={dict.servicesSection.headingAccent}
          line2={dict.servicesSection.headingLine2}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {serviceSlugs.map((slug, index) => {
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
                icon={
                  <Icon
                    className="h-10 w-10 text-background/80"
                    strokeWidth={1.5}
                  />
                }
                gradient={meta.gradient}
                colSpan={meta.colSpan}
                featured={meta.featured}
                viewDetailsLabel={dict.servicesSection.viewDetails}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
