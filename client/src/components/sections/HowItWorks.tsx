import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/dictionaries";

interface HowItWorksProps {
  dict: Dictionary;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  const steps = dict.howItWorks.steps;

  return (
    <section className="px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow={dict.howItWorks.eyebrow}
          line1={dict.howItWorks.headingLine1}
          accent={dict.howItWorks.headingAccent}
          line2={dict.howItWorks.headingLine2}
        />

        <div className="mt-10 flex flex-col gap-3 md:mt-16 md:flex-row md:gap-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.1}
              className="relative flex-1 border-l border-border pb-8 pl-6 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8"
            >
              <span className="font-display text-4xl italic text-gold md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h3 text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-xs text-body text-foreground-muted">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
