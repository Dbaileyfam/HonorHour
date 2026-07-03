import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { bio, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";

const tiles = [
  { to: routes.media, title: "Media", body: "Videos, streaming, and photos." },
  { to: routes.shows, title: "Shows", body: "Upcoming dates and live sets." },
  { to: routes.epk, title: "EPK", body: "Bio, lineup, and press kit." },
  { to: routes.contact, title: "Contact", body: "Booking and media inquiries." },
] as const;

export function HomePage() {
  usePageTitle("Home");

  return (
    <>
      <section className="flex min-h-[78vh] flex-col justify-center px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="hh-eyebrow">{site.hometown} · {site.genre}</p>
          <h1 className="mt-6">
            <Logo className="block text-7xl text-white sm:text-8xl md:text-[9.5rem]" />
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-hh-silver sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={routes.shows} className="hh-btn-primary">
              Shows
            </Link>
            <Link to={routes.contact} className="hh-btn-ghost">
              Book
            </Link>
          </div>
          <div className="mt-12">
            <SocialLinks size="md" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="hh-eyebrow">About</p>
            <h2 className="hh-section-heading mt-4">The band</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-hh-silver">{bio.short}</p>
            {bio.long.slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-hh-muted">
                {paragraph}
              </p>
            ))}
            <Link
              to={routes.epk}
              className="mt-8 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white transition hover:text-hh-red"
            >
              Full press kit →
            </Link>
          </div>

          <div className="hh-card overflow-hidden">
            {site.featuredVideoId ? (
              <div className="aspect-video">
                <iframe
                  title={`${site.name} featured video`}
                  src={`https://www.youtube.com/embed/${site.featuredVideoId}`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-hh-charcoal p-8 text-center">
                <p className="text-sm text-hh-muted">Latest videos on YouTube</p>
                <Link to={routes.media} className="hh-btn-primary">
                  Browse media
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="hh-eyebrow">Navigate</p>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {tiles.map((tile) => (
              <li key={tile.to}>
                <Link
                  to={tile.to}
                  className="group flex items-baseline justify-between gap-6 py-6 transition sm:py-8"
                >
                  <span className="hh-display text-3xl text-white transition group-hover:text-hh-red sm:text-4xl">
                    {tile.title}
                  </span>
                  <span className="hidden text-sm text-hh-muted sm:block">{tile.body}</span>
                  <span className="text-hh-muted transition group-hover:text-white">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
