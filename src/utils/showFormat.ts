import type { Show } from "@/content/site";

/** Shared formatting for `shows` entries in site.ts */

export function formatShowDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function showMapQuery(show: Pick<Show, "address" | "venue" | "location">) {
  return encodeURIComponent(show.address || `${show.venue}, ${show.location}`);
}

export function showMapEmbedSrc(show: Pick<Show, "address" | "venue" | "location">) {
  return `https://maps.google.com/maps?hl=en&q=${showMapQuery(show)}&z=15&output=embed`;
}

export function showDirectionsHref(show: Pick<Show, "address" | "venue" | "location">) {
  return `https://www.google.com/maps/dir/?api=1&destination=${showMapQuery(show)}`;
}

export function upcomingShows<T extends { date: string }>(items: readonly T[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return items.filter((s) => {
    const d = new Date(`${s.date}T12:00:00`);
    return d >= today;
  });
}
