import {
  Bike,
  Car,
  Package,
  Compass,
  Plane,
  type LucideIcon,
} from "lucide-react";

export const serviceSlugs = [
  "mototaxi",
  "mototaxi-premium",
  "motodelivery",
  "motoguide",
  "airport-transfer",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

interface ServiceMeta {
  icon: LucideIcon;
  /** Featured card spans two columns in the homepage grid. */
  featured?: boolean;
  /** Column span classes for the homepage's asymmetric grid. */
  colSpan: string;
  /** Placeholder gradient used for the shared hero/card image until real photography is supplied. */
  gradient: string;
}

export const serviceMeta: Record<ServiceSlug, ServiceMeta> = {
  mototaxi: {
    icon: Bike,
    featured: true,
    colSpan: "sm:col-span-2 lg:col-span-2",
    gradient:
      "linear-gradient(135deg, var(--color-gold-soft) 0%, var(--color-gold) 55%, var(--color-foreground) 130%)",
  },
  "mototaxi-premium": {
    icon: Car,
    colSpan: "sm:col-span-1 lg:col-span-1",
    gradient:
      "linear-gradient(150deg, var(--color-foreground) 0%, var(--color-gold-strong) 100%)",
  },
  motodelivery: {
    icon: Package,
    colSpan: "sm:col-span-1 lg:col-span-1",
    gradient:
      "linear-gradient(150deg, var(--color-gold) 0%, var(--color-background-alt) 110%)",
  },
  motoguide: {
    icon: Compass,
    colSpan: "sm:col-span-2 lg:col-span-2",
    gradient:
      "linear-gradient(150deg, var(--color-gold-soft) 0%, var(--color-foreground-muted) 120%)",
  },
  "airport-transfer": {
    icon: Plane,
    colSpan: "sm:col-span-2 lg:col-span-2",
    gradient:
      "linear-gradient(150deg, var(--color-foreground) 0%, var(--color-gold) 120%)",
  },
};
