import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import {
  bio,
  epkNav,
  pressPhotos,
  pressLogos,
  pressQuotes,
  quickFacts,
  shows,
  site,
} from "@/content/site";
import { routes } from "@/lib/routes";
import { assetUrl } from "@/lib/assets";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EPKPage() {
  usePageTitle("Electronic Press Kit");

  return (
    <>
      <section className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="hh-eyebrow">Electronic Press Kit</p>
          <h1 className="mt-4">
            <Logo className="text-5xl text-white sm:text-7xl" />
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-hh-silver">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="hh-btn-primary" onClick={() => scrollToSection("contact")}>
              Book the band
            </button>
            <button type="button" className="hh-btn-ghost" onClick={() => scrollToSection("press")}>
              Press photos
            </button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[73px] z-40 border-b border-white/10 bg-hh-black/95 backdrop-blur-md"
        aria-label="EPK sections"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3">
          {epkNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="shrink-0 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-hh-muted transition hover:text-hh-red"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="border-b border-white/10 px-4 py-10" aria-label="Quick facts">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {quickFacts.map((fact) => (
              <li key={fact.label} className="hh-card p-5 text-center">
                <p className="hh-eyebrow">{fact.label}</p>
                <p className="mt-2 text-base font-light text-white sm:text-lg">{fact.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bio" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="hh-section-heading">About the band</h2>
            <p className="mt-4 text-lg leading-relaxed text-hh-silver">{bio.short}</p>
            {bio.long.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-hh-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="hh-card h-fit p-6">
            <h3 className="hh-eyebrow">Lineup</h3>
            <ul className="mt-4 space-y-3">
              {bio.lineup.map((member) => (
                <li
                  key={member.role}
                  className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-white">{member.name}</span>
                  {member.role ? (
                    <span className="text-sm text-hh-muted">{member.role}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="music" className="scroll-mt-36 border-y border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Music &amp; streaming</h2>
          <p className="mt-2 text-hh-muted">Listen and follow across platforms.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="hh-card overflow-hidden">
              {site.featuredVideoId ? (
                <div className="aspect-video">
                  <iframe
                    title={`${site.name} music video`}
                    src={`https://www.youtube.com/embed/${site.featuredVideoId}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-3 p-8 text-center">
                  <p className="text-hh-silver">Videos &amp; releases on YouTube</p>
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

            <div className="hh-card flex flex-col justify-center p-6">
              <h3 className="text-lg font-semibold text-white">Listen &amp; follow</h3>
              <p className="mt-2 text-sm text-hh-muted">Find Honor Hour on your platform of choice.</p>
              <SocialLinks className="mt-6" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`${site.name} on Spotify`}
              src={site.spotifyArtistEmbed}
              className="h-[152px] w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="press" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Press</h2>

          {pressQuotes.length > 0 ? (
            <div className="mt-8 space-y-6">
              {pressQuotes.map((item) => (
                <blockquote key={item.source} className="hh-card border-l border-l-white/40 p-6">
                  <p className="text-lg italic leading-relaxed text-hh-silver">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm text-hh-muted">
                    — {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hh-accent-link">
                        {item.source}
                      </a>
                    ) : (
                      item.source
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : null}

          <div className="hh-card mt-8 p-6">
            <h3 className="text-lg font-semibold text-white">Press kit assets</h3>
            <p className="mt-2 text-sm text-hh-muted">
              High-res photos and logos for promoters and media. Click to download.
            </p>

            {pressLogos.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-hh-muted">Logo</h4>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {pressLogos.map((logo) => (
                    <li key={logo.caption}>
                      <figure className="overflow-hidden rounded-xl border border-white/10">
                        <div className="flex aspect-[3/1] items-center justify-center bg-hh-black p-6">
                          <img
                            src={assetUrl(logo.preview)}
                            alt={logo.alt}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-hh-black/50 px-3 py-2 text-sm text-hh-muted">
                          <span>{logo.caption}</span>
                          <span className="flex gap-2">
                            {logo.downloads.map((file) => (
                              <a
                                key={file.downloadName}
                                href={assetUrl(file.src)}
                                download={file.downloadName}
                                className="font-medium text-white transition hover:text-hh-red"
                              >
                                {file.label}
                              </a>
                            ))}
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {pressPhotos.length > 0 ? (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pressPhotos.map((photo) => (
                  <li key={photo.src}>
                    <figure className="overflow-hidden rounded-xl border border-white/10">
                      <a href={assetUrl(photo.src)} download={photo.downloadName}>
                        <img
                          src={assetUrl(photo.src)}
                          alt={photo.alt}
                          className="aspect-video w-full object-cover transition hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </a>
                      <figcaption className="bg-hh-black/50 px-3 py-2 text-sm text-hh-muted">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-white/15 bg-hh-black/30 p-10 text-center">
                <p className="text-hh-silver">Press photos coming soon.</p>
                <p className="mt-2 text-sm text-hh-muted">
                  Drop images in <code className="text-hh-silver">public/assets/press/</code> and list them in{" "}
                  <code className="text-hh-silver">src/content/site.ts</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="shows" className="scroll-mt-36 border-y border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Upcoming shows</h2>
          {shows.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {shows.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="hh-card flex gap-5 p-5">
                  <time
                    dateTime={show.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-white/15 text-white"
                  >
                    <span className="text-xs font-bold uppercase">{show.dateLabel.split(" ")[0]}</span>
                    <span className="hh-display text-2xl leading-none">
                      {show.dateLabel.split(" ")[1]?.replace(",", "")}
                    </span>
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{show.venue}</h3>
                    <p className="text-sm text-hh-muted">{show.location}</p>
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block hh-accent-link text-sm"
                      >
                        Tickets →
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-hh-muted">
              No dates listed yet — follow{" "}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hh-accent-link"
              >
                @honorhourmusic
              </a>{" "}
              for announcements.
            </p>
          )}
        </div>
      </section>

      <section id="tech" className="scroll-mt-36 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Stage plot &amp; input list</h2>
          <p className="mt-2 text-hh-muted">Technical details for sound engineers and promoters.</p>

          <div className="mt-8 space-y-4">
            <details className="hh-card group p-6">
              <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Stage plot
                  <span className="text-sm font-normal text-hh-muted group-open:hidden">Show details</span>
                </span>
              </summary>
              <div className="mt-4 rounded-xl border border-dashed border-white/15 bg-hh-black/30 p-10 text-center text-sm text-hh-muted">
                Add a stage plot image to <code className="text-hh-silver">public/assets/</code> and link it here.
              </div>
            </details>

            <details className="hh-card group p-6">
              <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  Input list
                  <span className="text-sm font-normal text-hh-muted group-open:hidden">Show channels</span>
                </span>
              </summary>
              <p className="mt-4 text-sm text-hh-muted">
                Input list will be added when available from the band.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 border-t border-white/10 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="hh-section-heading">Booking &amp; press contact</h2>
          <p className="mt-4 text-hh-silver">
            Festivals, venues, private events, and media inquiries. Sets up to 1 hr 15 min.
            Willing to open for strong opportunities. Travel: continental USA.
          </p>
          <address className="hh-card mt-8 not-italic">
            <p className="text-lg font-medium text-white">{site.booking.name}</p>
            <p className="mt-3">
              <a
                href={`mailto:${site.booking.email}`}
                className="text-white transition hover:text-hh-red"
              >
                {site.booking.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-hh-muted">All booking inquiries</p>
            <p className="mt-4">
              <a
                href={`tel:${site.booking.phone.replace(/\D/g, "")}`}
                className="text-white transition hover:text-hh-red"
              >
                {site.booking.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-hh-muted">EPK / direct booking line</p>
            <Link to={routes.contact} className="hh-btn-primary mt-6 inline-flex">
              Public contact page
            </Link>
          </address>
        </div>
      </section>
    </>
  );
}
