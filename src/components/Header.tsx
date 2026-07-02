import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";

function navClass(isActive: boolean) {
  return isActive
    ? "font-semibold text-hh-red"
    : "font-medium text-white/70 transition hover:text-white";
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hh-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to={routes.home} className="group min-w-0">
          <Logo className="block truncate text-2xl text-white transition group-hover:text-hh-red sm:text-3xl" />
          <span className="hidden text-xs font-medium uppercase tracking-widest text-hh-muted sm:block">
            {site.hometown} · Rock
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
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

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-white/10 bg-hh-charcoal px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === routes.home}
                  className={({ isActive }) =>
                    `block py-2 text-sm uppercase tracking-wide ${navClass(isActive)}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
