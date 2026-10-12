export const locales = ["it", "en", "ru", "az", "sq"] as const;

export type Locale = (typeof locales)[number];

/** Language served to visitors whose browser language we don't translate. */
export const fallbackLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  ru: "Русский",
  az: "Azərbaycanca",
  sq: "Shqip",
};

export const openGraphLocales: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  ru: "ru_RU",
  az: "az_AZ",
  sq: "sq_AL",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
