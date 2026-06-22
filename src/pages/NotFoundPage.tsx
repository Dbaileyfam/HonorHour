import { Link } from "react-router-dom";
import { routes } from "@/lib/routes";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="hh-display text-8xl text-hh-red">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-hh-muted">That page doesn&apos;t exist.</p>
      <Link to={routes.home} className="hh-btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
