import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/content/site";
import { routes } from "@/lib/routes";

function navClass(isActive: boolean) {
  return isActive
    ? "text-hh-red"
    : "text-hh-muted transition hover:text-hh-red";
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
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${className} text-[11px] font-medium uppercase tracking-[0.28em] ${navClass(isActive)}`.trim()
      }
      onClick={onNavigate}
    >
      {label}
    </NavLink>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hh-black/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link to={routes.home} className="group min-w-0">
          <Logo className="block truncate text-xl text-white transition group-hover:text-hh-red sm:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} end={link.to === routes.home} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-hh-red hover:text-hh-red md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-hh-black px-4 py-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavItem
                  to={link.to}
                  label={link.label}
                  end={link.to === routes.home}
                  className="block"
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
