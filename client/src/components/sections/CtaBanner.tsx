import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Dictionary } from "@/dictionaries";

interface CtaBannerProps {
  dict: Dictionary;
  whatsappMessage: string;
}

export function CtaBanner({ dict, whatsappMessage }: CtaBannerProps) {
  return (
    <section className="bg-background-alt px-5 py-16 md:px-10 md:py-24">
      <Reveal className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-h2 text-foreground">
            {dict.ctaBanner.headingLine1}
            <span className="italic text-gold">{dict.ctaBanner.headingAccent}</span>
            {dict.ctaBanner.headingLine2}
          </h2>
          <p className="mt-3 max-w-md text-body-lg text-foreground-muted">{dict.ctaBanner.body}</p>
        </div>
        <WhatsAppButton message={whatsappMessage} label={dict.ctaBanner.cta} className="shrink-0" />
      </Reveal>
    </section>
  );
}
