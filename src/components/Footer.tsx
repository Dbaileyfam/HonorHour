import { Link, NavLink } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "./SocialLinks";

function navClass(isActive: boolean) {
  return isActive
    ? "text-white"
    : "text-hh-muted transition hover:text-white";
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo className="text-2xl text-white" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-hh-muted">{site.tagline}</p>
          </div>
          <div className="flex flex-col gap-5 sm:items-end">
            <SocialLinks size="sm" />
            <Link
              to={routes.contact}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-hh-muted transition hover:text-white"
            >
              Book the band
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === routes.home}
                className={({ isActive }) =>
                  `text-[11px] font-medium uppercase tracking-[0.28em] ${navClass(isActive)}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="text-xs text-hh-muted">
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
