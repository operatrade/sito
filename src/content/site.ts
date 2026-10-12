import aboutLiving from "@/assets/photos/about-living.jpg";
import heroLiving from "@/assets/photos/hero-living.jpg";
import heroPendants from "@/assets/photos/hero-pendants.jpg";
import projectBakuHotel from "@/assets/photos/project-baku-hotel.jpg";
import projectGulfResort from "@/assets/photos/project-gulf-resort.jpg";
import projectMontenegroVilla from "@/assets/photos/project-montenegro-villa.jpg";
import projectTiranaOffices from "@/assets/photos/project-tirana-offices.jpg";
import supplyAcoustic from "@/assets/photos/supply-acoustic.jpg";
import supplyDoorsWindows from "@/assets/photos/supply-doors-windows.jpg";
import supplyFurniture from "@/assets/photos/supply-furniture.jpg";
import supplyKitchens from "@/assets/photos/supply-kitchens.jpg";
import supplyLighting from "@/assets/photos/supply-lighting.jpg";
import supplyMetal from "@/assets/photos/supply-metal.jpg";
import supplySofas from "@/assets/photos/supply-sofas.jpg";
import supplySurfaces from "@/assets/photos/supply-surfaces.jpg";
import type { Dictionary } from "@/i18n/dictionaries";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.operatrade.it",
  /**
   * While true the page shows the "preview" ribbon and marks the founder quote as a draft.
   * Switch to false once real photos, figures, projects and the approved quote are in.
   */
  draft: true,
  phone: { display: "+39 333 814 3526", href: "tel:+393338143526" },
  whatsapp: "https://wa.me/393338143526",
  emails: { info: "info@operatrade.it", ceo: "damiano.baldoni@operatrade.it" },
  vatNumber: "IT02553120417",
  regionalOffice: { building: "AF Mall Business Centre", street: "Samed Vurgun 34A/35", postcode: "AZ1005" },
} as const;

// Placeholder figures: confirm with Damiano before going live.
export const stats = [
  { value: 25, suffix: "+", key: "years" },
  { value: 19, key: "brands" },
  { value: 8, key: "categories" },
  { value: 2, key: "offices" },
] as const satisfies ReadonlyArray<{ value: number; suffix?: string; key: keyof Dictionary["stats"] }>;

export const photos = { heroLiving, heroPendants, aboutLiving };

export const supplyCategories = [
  { key: "kitchens", photo: supplyKitchens },
  { key: "lighting", photo: supplyLighting },
  { key: "sofas", photo: supplySofas },
  { key: "furniture", photo: supplyFurniture },
  { key: "surfaces", photo: supplySurfaces },
  { key: "doorsWindows", photo: supplyDoorsWindows },
  { key: "acoustic", photo: supplyAcoustic },
  { key: "metal", photo: supplyMetal },
] as const satisfies ReadonlyArray<{ key: keyof Dictionary["supply"]["categories"]; photo: unknown }>;

// From the partner page of the current operatrade.it.
export const partnerGroups = [
  { key: "kitchens", brands: ["GCinque", "Vama Cucine", "Busatto"] },
  { key: "lighting", brands: ["Patrizia Garganti", "Renzo del Ventisette", "Light4"] },
  { key: "sofas", brands: ["Ulivi Salotti", "Artnova", "Formerin Italia"] },
  { key: "furniture", brands: ["Vismara Design", "Turati T4", "Mobilform", "DOM Edizioni"] },
  { key: "doors", brands: ["Pietrelli", "Blindatoeffepi"] },
  { key: "safes", brands: ["Agresti"] },
  { key: "metal", brands: ["Forni Metal Design"] },
  { key: "acoustic", brands: ["Formerin Italia"] },
] as const satisfies ReadonlyArray<{ key: keyof Dictionary["partners"]["groups"]; brands: readonly string[] }>;

// Sample projects: replace photos and texts (in the dictionaries) with real references.
export const projectPhotos = [projectBakuHotel, projectGulfResort, projectMontenegroVilla, projectTiranaOffices];
