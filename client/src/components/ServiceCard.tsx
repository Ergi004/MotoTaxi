"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n-config";
import Image from "next/image";

interface ServiceCardProps {
  locale: Locale;
  slug: string;
  name: string;
  shortDescription: string;
  icon: ReactNode;
  gradient: string;
  colSpan: string;
  featured?: boolean;
  viewDetailsLabel: string;
  image?: string;
  index: number;
}

export function ServiceCard({
  locale,
  slug,
  name,
  shortDescription,
  // icon,
  // gradient,
  colSpan,
  featured = false,
  viewDetailsLabel,
  index,
  image,
}: ServiceCardProps) {
  console.log(image);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.65, 0, 0.35, 1],
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative rounded-lg border border-border bg-surface p-5 shadow-card transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold-soft hover:shadow-elevated md:p-6",
        colSpan,
      )}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.75 rounded-t-lg bg-gold"
        />
      )}
      <Link
        href={`/${locale}/services/${slug}`}
        className="flex h-full flex-col"
      >
        <div
          className={cn(
            "overflow-hidden rounded-md",
            featured ? "aspect-video" : "aspect-4/3",
          )}
        >
          <Image
            alt={name}
            src="/images/airport-service.png"
            width={0}
            height={0}
            sizes="100vh"
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {/* ) : (
            <ImagePlaceholder
              gradient={gradient}
              icon={icon}
              layoutId={`service-image-${slug}`}
              rounded="lg"
              className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          )} */}
          {/* TODO: replace with real photo */}
        </div>

        <h3 className="mt-5 text-h3 text-foreground">{name}</h3>
        <p className="mt-2 flex-1 text-body text-foreground-muted">
          {shortDescription}
        </p>

        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-gold">
          {viewDetailsLabel}
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}
