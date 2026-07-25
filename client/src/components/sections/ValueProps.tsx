import { Zap, ShieldCheck, BadgeCheck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/dictionaries";

interface ValuePropsProps {
  dict: Dictionary;
}

const icons = [Zap, ShieldCheck, BadgeCheck, HeartHandshake];

export function ValueProps({ dict }: ValuePropsProps) {
  return (
    <section className="bg-background-alt px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow={dict.valueProps.eyebrow}
          line1={dict.valueProps.headingLine1}
          accent={dict.valueProps.headingAccent}
          line2={dict.valueProps.headingLine2}
        />

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-14 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          {dict.valueProps.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="min-w-[70%] shrink-0 snap-start rounded-lg border border-border bg-surface p-6 sm:min-w-[45%] md:min-w-0"
              >
                <Icon className="text-gold" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 text-h3 text-foreground">{item.title}</h3>
                <p className="mt-2 text-body text-foreground-muted">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
