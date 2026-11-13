import Link from "next/link";
import { BrandMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="not-found">
      <BrandMark className="not-found-mark" />
      <h1>404</h1>
      <p>Pagina non trovata · Page not found</p>
      <Link className="btn" href="/">
        Opera Trade
      </Link>
    </main>
  );
}
