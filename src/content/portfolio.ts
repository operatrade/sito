import residence1 from "@/assets/portfolio/residence-1.jpg";
import residence2 from "@/assets/portfolio/residence-2.jpg";
import residence3 from "@/assets/portfolio/residence-3.jpg";
import residence4 from "@/assets/portfolio/residence-4.jpg";
import residence5 from "@/assets/portfolio/residence-5.jpg";
import residence6 from "@/assets/portfolio/residence-6.jpg";
import residence7 from "@/assets/portfolio/residence-7.jpg";
import residence8 from "@/assets/portfolio/residence-8.jpg";
import residence9 from "@/assets/portfolio/residence-9.jpg";
import hotelRooms1 from "@/assets/portfolio/hotel-rooms-1.jpg";
import hotelRooms2 from "@/assets/portfolio/hotel-rooms-2.jpg";
import hotelRooms3 from "@/assets/portfolio/hotel-rooms-3.jpg";
import hotelRooms4 from "@/assets/portfolio/hotel-rooms-4.jpg";
import hotelRooms5 from "@/assets/portfolio/hotel-rooms-5.jpg";
import hotelRooms6 from "@/assets/portfolio/hotel-rooms-6.jpg";
import apartment1 from "@/assets/portfolio/apartment-1.jpg";
import apartment2 from "@/assets/portfolio/apartment-2.jpg";
import apartment3 from "@/assets/portfolio/apartment-3.jpg";
import apartment4 from "@/assets/portfolio/apartment-4.jpg";
import apartment5 from "@/assets/portfolio/apartment-5.jpg";
import apartment6 from "@/assets/portfolio/apartment-6.jpg";
import facade1 from "@/assets/portfolio/facade-1.jpg";
import facade2 from "@/assets/portfolio/facade-2.jpg";
import facade3 from "@/assets/portfolio/facade-3.jpg";
import manor1 from "@/assets/portfolio/manor-1.jpg";
import manor2 from "@/assets/portfolio/manor-2.jpg";
import manor3 from "@/assets/portfolio/manor-3.jpg";
import manor4 from "@/assets/portfolio/manor-4.jpg";
import manor5 from "@/assets/portfolio/manor-5.jpg";
import manor6 from "@/assets/portfolio/manor-6.jpg";
import hotelSuite1 from "@/assets/portfolio/hotel-suite-1.jpg";
import hotelSuite2 from "@/assets/portfolio/hotel-suite-2.jpg";
import hotelSuite3 from "@/assets/portfolio/hotel-suite-3.jpg";
import villa1 from "@/assets/portfolio/villa-1.jpg";
import villa2 from "@/assets/portfolio/villa-2.jpg";
import villa3 from "@/assets/portfolio/villa-3.jpg";
import beach1 from "@/assets/portfolio/beach-1.jpg";
import beach2 from "@/assets/portfolio/beach-2.jpg";
import beach3 from "@/assets/portfolio/beach-3.jpg";
import loft1 from "@/assets/portfolio/loft-1.jpg";
import loft2 from "@/assets/portfolio/loft-2.jpg";
import loft3 from "@/assets/portfolio/loft-3.jpg";
import loft4 from "@/assets/portfolio/loft-4.jpg";
import loft5 from "@/assets/portfolio/loft-5.jpg";
import loft6 from "@/assets/portfolio/loft-6.jpg";
import hall1 from "@/assets/portfolio/hall-1.jpg";
import hall2 from "@/assets/portfolio/hall-2.jpg";
import hall3 from "@/assets/portfolio/hall-3.jpg";
import type { StaticImageData } from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

type Texts = Dictionary["portfolio"];

export type PortfolioSector = "home" | "hotel" | "contract";

export type PortfolioProject = {
  key: keyof Texts["projects"];
  sector: PortfolioSector;
  /**
   * The first photo gets the large tile. Keep 3, 6 or 9 photos: the grid is a large tile
   * with two beside it, then rows of three, so other counts leave a gap.
   */
  photos: ReadonlyArray<{ image: StaticImageData; room: keyof Texts["rooms"] }>;
};

/**
 * Projects on the /portfolio page, in display order. Renders picked from Opera Trade's project
 * presentations: no client names and no places. To add a project, put its images in
 * src/assets/portfolio and its title and text in every dictionary.
 */
export const portfolio: ReadonlyArray<PortfolioProject> = [
  {
    key: "residence",
    sector: "home",
    photos: [
      { image: residence1, room: "living" },
      { image: residence2, room: "living" },
      { image: residence3, room: "dining" },
      { image: residence4, room: "kitchen" },
      { image: residence5, room: "kitchen" },
      { image: residence6, room: "bedroom" },
      { image: residence7, room: "bedroom" },
      { image: residence8, room: "bathroom" },
      { image: residence9, room: "bathroom" },
    ],
  },
  {
    key: "hotelRooms",
    sector: "hotel",
    photos: [
      { image: hotelRooms1, room: "guestRoom" },
      { image: hotelRooms2, room: "guestRoom" },
      { image: hotelRooms3, room: "guestRoom" },
      { image: hotelRooms4, room: "seating" },
      { image: hotelRooms5, room: "wardrobe" },
      { image: hotelRooms6, room: "bathroom" },
    ],
  },
  {
    key: "apartment",
    sector: "home",
    photos: [
      { image: apartment1, room: "living" },
      { image: apartment2, room: "dining" },
      { image: apartment3, room: "kitchen" },
      { image: apartment4, room: "bedroom" },
      { image: apartment5, room: "bathroom" },
      { image: apartment6, room: "bathroom" },
    ],
  },
  {
    key: "facade",
    sector: "contract",
    photos: [
      { image: facade1, room: "after" },
      { image: facade2, room: "before" },
      { image: facade3, room: "night" },
    ],
  },
  {
    key: "manor",
    sector: "home",
    photos: [
      { image: manor1, room: "living" },
      { image: manor2, room: "living" },
      { image: manor3, room: "living" },
      { image: manor4, room: "study" },
      { image: manor5, room: "bedroom" },
      { image: manor6, room: "bathroom" },
    ],
  },
  {
    key: "hotelSuite",
    sector: "hotel",
    photos: [
      { image: hotelSuite1, room: "guestRoom" },
      { image: hotelSuite2, room: "guestRoom" },
      { image: hotelSuite3, room: "guestRoom" },
    ],
  },
  {
    key: "villa",
    sector: "home",
    photos: [
      { image: villa1, room: "living" },
      { image: villa2, room: "dining" },
      { image: villa3, room: "living" },
    ],
  },
  {
    key: "beach",
    sector: "contract",
    photos: [
      { image: beach1, room: "aerial" },
      { image: beach2, room: "lounge" },
      { image: beach3, room: "lounge" },
    ],
  },
  {
    key: "loft",
    sector: "home",
    photos: [
      { image: loft1, room: "living" },
      { image: loft2, room: "kitchen" },
      { image: loft3, room: "entrance" },
      { image: loft4, room: "bedroom" },
      { image: loft5, room: "wardrobe" },
      { image: loft6, room: "bedroom" },
    ],
  },
  {
    key: "hall",
    sector: "home",
    photos: [
      { image: hall1, room: "staircase" },
      { image: hall2, room: "detail" },
      { image: hall3, room: "corridor" },
    ],
  },
];
