import "server-only";
import type { Locale } from "@/lib/i18n-config";
import al from "./al.json";

export type Dictionary = typeof al;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  al: () => import("./al.json").then((m) => m.default),
  en: () => import("./en.json").then((m) => m.default as Dictionary),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
