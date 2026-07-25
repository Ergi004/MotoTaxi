"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/Button";

interface HeroProps {
  eyebrow: string;
  headline1: string;
  headline2: string;
  body: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  whatsappMessage: string;
}

const EASE = [0.65, 0, 0.35, 1] as const;

export function Hero({
  eyebrow,
  headline1,
  headline2,
  body,
  ctaPrimaryLabel,
  ctaSecondaryLabel,
  whatsappMessage,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-5 py-24 md:px-10">
      <Image
        src="/images/hero-image.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25 " />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 text-small font-semibold uppercase tracking-[0.14em] text-gold"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-display text-white"
        >
          {headline1}
          <br />
          <span className="italic text-gold">{headline2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-md text-body-lg text-white/80"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <WhatsAppButton message={whatsappMessage} label={ctaPrimaryLabel} />
          <Button variant="text" href="#services" showArrow>
            {ctaSecondaryLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
