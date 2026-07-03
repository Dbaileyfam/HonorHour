import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { shows, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { formatShowDate, upcomingShows } from "@/utils/showFormat";
import { PageHero } from "@/components/PageHero";

export function ShowsPage() {
  usePageTitle("Shows");
  const upcoming = upcomingShows(shows);

  return (
    <>
      <PageHero
        eyebrow="Live music"
        title="Upcoming shows"
        description="Where to catch Honor Hour live across Utah and beyond."
      />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {upcoming.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {upcoming.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="hh-card flex gap-5 p-5">
                  <time
                    dateTime={show.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-white/15 text-white"
                  >
                    <span className="text-xs font-bold uppercase">
                      {show.dateLabel.split(" ")[0]}
                    </span>
                    <span className="hh-display text-2xl leading-none">
                      {show.dateLabel.split(" ")[1]?.replace(",", "")}
                    </span>
                  </time>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-hh-muted">
                      {formatShowDate(show.date)}
                    </p>
                    <h2 className="mt-1 text-lg font-medium text-white">{show.venue}</h2>
                    <p className="mt-1 flex items-center gap-2 text-sm text-hh-muted">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                      {show.location}
                    </p>
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:text-hh-red"
                      >
                        Tickets →
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="hh-card p-10 text-center">
              <Calendar className="mx-auto h-10 w-10 text-hh-muted" aria-hidden />
              <p className="mt-4 text-lg font-light text-hh-silver">New dates coming soon.</p>
              <p className="mt-2 text-sm text-hh-muted">
                Follow{" "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-hh-red"
                >
                  @honorhourmusic
                </a>{" "}
                for announcements, or reach out to book a show.
              </p>
              <Link to={routes.contact} className="hh-btn-primary mt-8 inline-flex">
                Book the band
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
