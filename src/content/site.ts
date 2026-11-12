import aboutLiving from "@/assets/photos/about-living.jpg";
import heroLiving from "@/assets/photos/hero-living.jpg";
import heroPendants from "@/assets/photos/hero-pendants.jpg";
import sectorContract from "@/assets/photos/sector-contract.jpg";
import sectorHome from "@/assets/photos/sector-home.jpg";
import sectorHotel from "@/assets/photos/sector-hotel.jpg";
import sectorOffice from "@/assets/photos/sector-office.jpg";
import sectorYacht from "@/assets/photos/sector-yacht.jpg";
import workDrawings from "@/assets/photos/work-drawings.jpg";
import workFinishes from "@/assets/photos/work-finishes.jpg";
import workKitchen from "@/assets/photos/work-kitchen.jpg";
import workKitchenWhite from "@/assets/photos/work-kitchen-white.jpg";
import workMaterials from "@/assets/photos/work-materials.jpg";
import type { Dictionary } from "@/i18n/dictionaries";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.operatrade.it",
  /**
   * While true the page shows the "preview" ribbon and marks the founder quote as a draft.
   * Switch to false once real photos, figures, renders and the approved quote are in.
   */
  draft: true,
  phone: { display: "+39 333 814 3526", href: "tel:+393338143526" },
  whatsapp: "https://wa.me/393338143526",
  emails: { info: "info@operatrade.it", ceo: "damiano.baldoni@operatrade.it" },
  vatNumber: "IT02553120417",
} as const;

// Placeholder figures: confirm with Damiano before going live.
export const stats = [
  { value: 25, suffix: "+", key: "years" },
  { value: 7, suffix: "+", key: "countries" },
  { value: 4, key: "makers" },
  { value: 1, key: "contact" },
] as const satisfies ReadonlyArray<{ value: number; suffix?: string; key: keyof Dictionary["stats"] }>;

export const photos = { heroLiving, heroPendants, aboutLiving };

// The first sector gets the wide tile; the hero badge shows how many there are.
export const sectors = [
  { key: "home", photo: sectorHome },
  { key: "office", photo: sectorOffice },
  { key: "yacht", photo: sectorYacht },
  { key: "hotel", photo: sectorHotel },
  { key: "contract", photo: sectorContract },
] as const satisfies ReadonlyArray<{ key: keyof Dictionary["sectors"]["items"]; photo: unknown }>;

/**
 * Project gallery. Stock images for now: add Opera Trade's renders here, with `render: true`,
 * and a caption under `projects.captions` in every dictionary. `size` picks the column span in globals.css.
 */
export const gallery: ReadonlyArray<{
  key: keyof Dictionary["projects"]["captions"];
  photo: typeof workKitchen;
  size: "wide" | "narrow" | "third";
  render?: boolean;
}> = [
  { key: "kitchen", photo: workKitchen, size: "wide" },
  { key: "drawings", photo: workDrawings, size: "narrow" },
  { key: "materials", photo: workMaterials, size: "third" },
  { key: "kitchenWhite", photo: workKitchenWhite, size: "third" },
  { key: "finishes", photo: workFinishes, size: "third" },
];
