import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Music2 } from "lucide-react";
import { bio, shows, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { SocialLinks } from "@/components/SocialLinks";

export function HomePage() {
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
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hh-btn-primary">
              <Music2 className="h-4 w-4" aria-hidden />
              Watch on YouTube
            </a>
            <Link to={routes.epk} className="hh-btn-ghost">
              Press kit
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
            <h2 className="hh-section-heading">About</h2>
            <p className="mt-4 text-lg leading-relaxed text-hh-silver">{bio.short}</p>
            <p className="mt-4 text-hh-muted leading-relaxed">{bio.long[0]}</p>
            <Link to={routes.epk} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hh-red transition hover:text-white">
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
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hh-btn-primary"
                >
                  @honorhourmusic
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="hh-section-heading">Shows</h2>
              <p className="mt-2 text-hh-muted">Where to catch Honor Hour live.</p>
            </div>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-hh-red transition hover:text-white"
            >
              Follow for updates →
            </a>
          </div>

          {shows.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {shows.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="hh-card flex gap-4 p-5">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-hh-red/15 text-hh-red">
                    <Calendar className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-hh-red">
                      {show.dateLabel}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{show.venue}</h3>
                    <p className="text-sm text-hh-muted">{show.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="hh-card mt-8 p-8 text-center">
              <Calendar className="mx-auto h-10 w-10 text-hh-red" aria-hidden />
              <p className="mt-4 text-lg text-hh-silver">New dates coming soon.</p>
              <p className="mt-2 text-sm text-hh-muted">
                Check Instagram for the latest announcements.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 bg-hh-charcoal/60 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="hh-section-heading">Book the band</h2>
          <p className="mt-4 text-hh-silver">
            Festivals, venues, and private events — promoters can find everything in the EPK.
          </p>
          <Link to={routes.epk} className="hh-btn-primary mt-8">
            Open electronic press kit
          </Link>
        </div>
      </section>
    </>
  );
}
