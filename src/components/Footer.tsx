import { Link, NavLink } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "./SocialLinks";

function navClass(isActive: boolean) {
  return isActive
    ? "font-semibold text-hh-red"
    : "font-medium text-hh-muted transition hover:text-white";
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-hh-charcoal/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <Logo className="text-2xl text-white" />
            <p className="mt-1 text-sm text-hh-muted">{site.tagline}</p>
            <p className="mt-3 text-xs text-hh-muted">
              &copy; {year} {site.name}. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <SocialLinks size="sm" />
            <Link
              to={routes.contact}
              className="text-sm font-medium text-hh-red transition hover:text-white"
            >
              Book the band →
            </Link>
          </div>
        </div>

        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-8"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => `text-sm uppercase tracking-wide ${navClass(isActive)}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
