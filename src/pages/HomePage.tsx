import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { posts, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";
import { formatPostDate, publishedPosts } from "@/utils/postFormat";

const tiles = [
  { to: routes.media, title: "Media", body: "Videos, streaming, and photos." },
  { to: routes.shows, title: "Shows", body: "Upcoming dates and live sets." },
  { to: routes.epk, title: "EPK", body: "Bio, lineup, and press kit." },
  { to: routes.contact, title: "Contact", body: "Booking and media inquiries." },
] as const;

export function HomePage() {
  usePageTitle("Home");
  const [featured, ...rest] = publishedPosts(posts);

  return (
    <>
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="hh-eyebrow">{site.hometown} · {site.genre}</p>
          <h1 className="mt-4">
            <Logo className="block text-7xl text-white sm:text-8xl md:text-[9.5rem]" />
          </h1>
          <p className="mt-4 max-w-md text-lg font-light leading-relaxed text-hh-silver sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-6">
            <SocialLinks size="md" className="justify-center" />
          </div>
        </div>
      </section>

      <section id="news" className="scroll-mt-24 border-y border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="hh-eyebrow">News</p>
          <h2 className="hh-section-heading mt-4">Latest</h2>

          {!featured ? (
            <div className="hh-card mt-10 p-10 text-center">
              <p className="text-lg font-light text-hh-silver">More soon.</p>
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
                for announcements.
              </p>
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              <article className="hh-card overflow-hidden">
                <div className={`grid ${featured.videoId ? "lg:grid-cols-2" : ""}`}>
                  {featured.videoId ? (
                    <div className="aspect-video bg-hh-charcoal">
                      <iframe
                        title={`${featured.title} — ${site.name}`}
                        src={`https://www.youtube.com/embed/${featured.videoId}`}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <time dateTime={featured.date} className="hh-eyebrow">
                      {formatPostDate(featured.date)}
                    </time>
                    <h3 className="hh-display mt-3 text-3xl text-white sm:text-4xl">
                      <Link to={routes.post(featured.slug)} className="transition hover:text-hh-red">
                        {featured.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-base font-light leading-relaxed text-hh-silver">
                      {featured.excerpt}
                    </p>
                    <Link
                      to={routes.post(featured.slug)}
                      className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white transition hover:text-hh-red"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>

              {rest.length > 0 ? (
                <ul className="divide-y divide-white/10 border border-white/10">
                  {rest.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={routes.post(post.slug)}
                        className="group flex flex-col gap-2 px-5 py-6 transition hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                      >
                        <div>
                          <time
                            dateTime={post.date}
                            className="text-[11px] font-medium uppercase tracking-[0.22em] text-hh-muted"
                          >
                            {formatPostDate(post.date)}
                          </time>
                          <h3 className="hh-display mt-2 text-2xl text-white transition group-hover:text-hh-red sm:text-3xl">
                            {post.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-sm leading-relaxed text-hh-muted">
                            {post.excerpt}
                          </p>
                        </div>
                        <span className="text-hh-muted transition group-hover:text-hh-red">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
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
                  className="group flex items-baseline justify-between gap-6 border-l-2 border-transparent py-6 pl-4 transition hover:border-hh-red sm:py-8"
                >
                  <span className="hh-display text-3xl text-white transition group-hover:text-hh-red sm:text-4xl">
                    {tile.title}
                  </span>
                  <span className="hidden text-sm text-hh-muted transition group-hover:text-hh-red sm:block">{tile.body}</span>
                  <span className="text-hh-muted transition group-hover:text-hh-red">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
