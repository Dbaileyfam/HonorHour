import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { usePatternEffects } from "@/context/PatternEffectsContext";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";

function navClass(isActive: boolean) {
  return isActive
    ? "font-semibold text-hh-red"
    : "font-medium text-white/70 transition hover:text-white";
}

function NavItem({
  to,
  label,
  end,
  onNavigate,
  className = "",
}: {
  to: string;
  label: string;
  end?: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const { setNavHover } = usePatternEffects();

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${className} text-sm uppercase tracking-wide ${navClass(isActive)}`.trim()
      }
      onMouseEnter={() => setNavHover(true)}
      onMouseLeave={() => setNavHover(false)}
      onFocus={() => setNavHover(true)}
      onBlur={() => setNavHover(false)}
      onClick={onNavigate}
    >
      {label}
    </NavLink>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { setNavHover } = usePatternEffects();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hh-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          to={routes.home}
          className="group min-w-0"
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
        >
          <Logo className="block truncate text-2xl text-white transition group-hover:text-hh-red sm:text-3xl" />
          <span className="hidden text-xs font-medium uppercase tracking-widest text-hh-muted sm:block">
            {site.hometown} · Rock
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} end={link.to === routes.home} />
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
                <NavItem
                  to={link.to}
                  label={link.label}
                  end={link.to === routes.home}
                  className="block py-2"
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
