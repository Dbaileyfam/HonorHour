import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-hh-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="hh-display text-2xl text-white">{site.name}</p>
          <p className="mt-1 text-sm text-hh-muted">{site.tagline}</p>
          <p className="mt-3 text-xs text-hh-muted">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <SocialLinks size="sm" />
          <Link
            to={routes.epk}
            className="text-sm font-medium text-hh-red transition hover:text-white"
          >
            Press &amp; booking (EPK) →
          </Link>
        </div>
      </div>
    </footer>
  );
}
