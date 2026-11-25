import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { shows, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { upcomingShows } from "@/utils/showFormat";
import { PageHero } from "@/components/PageHero";
import { ShowCard } from "@/components/ShowCard";

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
                <ShowCard key={`${show.date}-${show.venue}`} show={show} />
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
