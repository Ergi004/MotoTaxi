import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { ExploreOthers } from "@/components/sections/ExploreOthers";
import { Reveal } from "@/components/Reveal";
import { serviceMeta, type ServiceSlug } from "@/lib/services";
import { SERVICE_CONTACT_NUMBERS } from "@/lib/whatsapp";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/dictionaries";

interface ServiceDetailTemplateProps {
  locale: Locale;
  slug: ServiceSlug;
  dict: Dictionary;
}

export function ServiceDetailTemplate({
  locale,
  slug,
  dict,
}: ServiceDetailTemplateProps) {
  const service = dict.services[slug];
  const meta = serviceMeta[slug];

  const features = "features" in service ? service.features : undefined;
  const process = "process" in service ? service.process : undefined;
  const tags = "tags" in service ? service.tags : undefined;

  return (
    <>
      <section className="px-5 pt-8 md:px-10 md:pt-12">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs
            locale={locale}
            homeLabel={dict.breadcrumbs.home}
            servicesLabel={dict.breadcrumbs.services}
            currentLabel={service.name}
          />

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h1 className="text-h1 text-foreground">{service.name}</h1>
              <p className="mt-3 font-display text-body-lg italic text-gold">
                {service.tagline}
              </p>
              <div className="mt-8 hidden gap-3 md:flex">
                <WhatsAppButton
                  message={service.whatsappMessage}
                  label={dict.serviceDetail.contact1Label}
                  number={SERVICE_CONTACT_NUMBERS.contact1}
                />
                <WhatsAppButton
                  message={service.whatsappMessage}
                  label={dict.serviceDetail.contact2Label}
                  number={SERVICE_CONTACT_NUMBERS.contact2}
                  variant="outline"
                />
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                alt={service.name}
                src={meta.image}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-small font-semibold uppercase tracking-[0.12em] text-foreground-muted">
              {dict.serviceDetail.descriptionTitle}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {service.description.map((paragraph, i) => (
                <p key={i} className="text-body-lg text-foreground-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {tags && (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-gold-soft bg-surface-alt px-3 py-1.5 text-small text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          <div className="flex flex-col gap-10">
            {process && (
              <Reveal>
                <h2 className="text-small font-semibold uppercase tracking-[0.12em] text-foreground-muted">
                  {dict.serviceDetail.processTitle}
                </h2>
                <ol className="mt-4 flex flex-col gap-6">
                  {process.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-display text-3xl italic text-gold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-h3 text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-body text-foreground-muted">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {features && (
              <Reveal delay={0.1}>
                <h2 className="text-small font-semibold uppercase tracking-[0.12em] text-foreground-muted">
                  {dict.serviceDetail.featuresTitle}
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-border bg-surface p-5"
                    >
                      <h3 className="text-h3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-body text-foreground-muted">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* <section className="px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-small font-semibold uppercase tracking-[0.12em] text-foreground-muted">
            {dict.serviceDetail.galleryTitle}
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              // TODO: replace with real photo
              <ImagePlaceholder
                key={i}
                gradient={meta.gradient}
                rounded="lg"
                className="aspect-[4/3] w-full"
              />
            ))}
          </div>
          <p className="mt-3 text-small text-foreground-muted">{dict.serviceDetail.galleryNote}</p>
        </div>
      </section> */}

      <ExploreOthers locale={locale} dict={dict} currentSlug={slug} />

      <StickyMobileCta
        message={service.whatsappMessage}
        contact1Label={dict.serviceDetail.contact1Label}
        contact1Number={SERVICE_CONTACT_NUMBERS.contact1}
        contact2Label={dict.serviceDetail.contact2Label}
        contact2Number={SERVICE_CONTACT_NUMBERS.contact2}
      />
    </>
  );
}
