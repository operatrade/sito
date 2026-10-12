import "server-only";
import type { Locale } from "./config";
import type italian from "./dictionaries/it.json";

export type Dictionary = typeof italian;

// Every language file must have the same shape as it.json: a missing key fails the type check.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  it: () => import("./dictionaries/it.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  az: () => import("./dictionaries/az.json").then((module) => module.default),
  sq: () => import("./dictionaries/sq.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
