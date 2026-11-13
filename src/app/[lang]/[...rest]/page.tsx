import { notFound } from "next/navigation";

/** Any unknown address under a language gets the site's own 404 page instead of the bare default one. */
export default function UnknownPage() {
  notFound();
}
