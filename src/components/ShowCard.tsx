import { Instagram, MapPin } from "lucide-react";
import type { Show } from "@/content/site";
import { formatShowDate, showDirectionsHref, showMapEmbedSrc } from "@/utils/showFormat";

type ShowCardProps = {
  show: Show;
  heading?: "h2" | "h3";
};

export function ShowCard({ show, heading = "h2" }: ShowCardProps) {
  const Heading = heading;
  const bands = show.bands ?? [];

  return (
    <li className={`hh-card flex flex-col gap-5 p-5 sm:flex-row ${show.address ? "sm:col-span-2" : ""}`}>
      <time
        dateTime={show.date}
        className="flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-white/15 text-hh-title"
      >
        <span className="text-xs font-bold uppercase">{show.dateLabel.split(" ")[0]}</span>
        <span className="hh-display text-2xl leading-none">
          {show.dateLabel.split(" ")[1]?.replace(",", "")}
        </span>
      </time>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-hh-muted">
          {formatShowDate(show.date)}
        </p>
        <Heading className="mt-1 text-lg font-medium text-hh-title">{show.venue}</Heading>
        <p className="mt-1 flex items-center gap-2 text-sm text-hh-muted">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          {show.address ?? show.location}
        </p>
        {show.time ? <p className="mt-1 text-sm text-hh-muted">{show.time}</p> : null}
        {bands.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {bands.map((band) => (
              <li key={band.name}>
                {band.instagram ? (
                  <a
                    href={band.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-hh-silver transition hover:text-hh-red"
                  >
                    <Instagram className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {band.name}
                  </a>
                ) : (
                  <span className="text-sm text-hh-silver">{band.name}</span>
                )}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {show.address ? (
            <a
              href={showDirectionsHref(show)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:text-hh-red"
            >
              Directions
            </a>
          ) : null}
          {show.ticketUrl ? (
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:text-hh-red"
            >
              Tickets
            </a>
          ) : null}
        </div>
        {show.address ? (
          <div className="mt-4 overflow-hidden border border-white/10">
            <iframe
              title={`Map to ${show.venue}, ${show.address}`}
              src={showMapEmbedSrc(show)}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : null}
      </div>
    </li>
  );
}
