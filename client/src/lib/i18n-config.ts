export const locales = ["al", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "al";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
