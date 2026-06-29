import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clapperboard, MapPin, Music2, Sparkles } from "lucide-react";
import { bio, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";

const tiles = [
  {
    to: routes.media,
    title: "Media",
    body: "Videos, streaming links, and promo photos — watch, listen, browse.",
    icon: Clapperboard,
  },
  {
    to: routes.shows,
    title: "Shows",
    body: "Upcoming dates and where to catch Honor Hour live.",
    icon: Calendar,
  },
  {
    to: routes.epk,
    title: "EPK",
    body: "Condensed kit: lineup, booking, and press notes.",
    icon: Sparkles,
  },
  {
    to: routes.contact,
    title: "Contact",
    body: "Book clubs, festivals, private events, and media inquiries.",
    icon: MapPin,
  },
] as const;

export function HomePage() {
  usePageTitle("Home");

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-hh-red">
            Utah Rock
          </p>
          <h1 className="hh-display mt-4 text-6xl text-white sm:text-8xl md:text-9xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-hh-silver sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to={routes.shows} className="hh-btn-primary">
              <Calendar className="h-4 w-4" aria-hidden />
              See shows
            </Link>
            <Link to={routes.contact} className="hh-btn-ghost">
              Book the band
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <SocialLinks size="lg" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-hh-charcoal/60 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="hh-section-heading">About the band</h2>
            <p className="mt-4 text-lg leading-relaxed text-hh-silver">{bio.short}</p>
            {bio.long.slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-hh-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
            <Link
              to={routes.epk}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hh-red transition hover:text-white"
            >
              Full bio &amp; press kit
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="hh-card overflow-hidden">
            {site.featuredVideoId ? (
              <div className="aspect-video">
                <iframe
                  title={`${site.name} featured video`}
                  src={`https://www.youtube.com/embed/${site.featuredVideoId}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-hh-black/50 p-8 text-center">
                <Music2 className="h-12 w-12 text-hh-red" aria-hidden />
                <p className="text-hh-silver">Latest videos on YouTube</p>
                <Link to={routes.media} className="hh-btn-primary">
                  Browse media
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading text-center">Explore</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-hh-muted">
            Loud music for loud times — clubs, festivals, and stages across the Wasatch Front.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => (
              <Link
                key={tile.to}
                to={tile.to}
                className="group block h-full rounded-3xl border border-white/10 bg-hh-panel/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-hh-red/40"
              >
                <tile.icon className="h-8 w-8 text-hh-red" aria-hidden />
                <h3 className="mt-4 font-display text-2xl text-white group-hover:text-hh-red">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hh-muted">{tile.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-hh-red">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
