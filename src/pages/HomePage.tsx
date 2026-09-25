import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { posts, site } from "@/content/site";
import type { Post } from "@/content/site";
import { assetUrl } from "@/lib/assets";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";
import { formatPostDate, publishedPosts } from "@/utils/postFormat";

const patternSrc = assetUrl("assets/pattern-hooks.jpg");

const tiles = [
  { to: routes.media, title: "Media", body: "Original music, videos, and performance highlights." },
  { to: routes.shows, title: "Shows", body: "Upcoming dates and live sets." },
  { to: routes.contact, title: "Contact & EPK", body: "Booking, press, and the EPK." },
] as const;

export function HomePage() {
  usePageTitle(`${site.wordmark} | Official Site`, { absolute: true });
  const latest = publishedPosts(posts);

  return (
    <div className="relative">
      <section className="relative z-10 overflow-hidden px-4 pb-32 pt-10 sm:px-6 sm:pb-36 sm:pt-14">
        <div className="hh-pattern-band" aria-hidden>
          <div className="hh-pattern-band-fill">
            <div
              className="hh-pattern-band-shift"
              style={{ backgroundImage: `url("${patternSrc}")` }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="hh-hero-lockup text-[3.75rem] sm:text-7xl md:text-[8.25rem]">
            <h1>
              <Logo variant="lockup" />
            </h1>
            <p className="hh-hero-tagline">
              {site.tagline.split(/\s+/).map((word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center sm:bottom-4">
          <SocialLinks size="md" variant="framed" className="justify-center" />
        </div>
      </section>

      <section id="news" className="relative z-10 scroll-mt-24 border-y border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="hh-eyebrow">News</p>
          <h2 className="hh-section-heading mt-4">Latest</h2>

          {latest.length === 0 ? (
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
            <div className="mt-10 space-y-8">
              {latest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="hh-eyebrow">Navigate</p>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {tiles.map((tile) => (
              <li key={tile.to}>
                <Link
                  to={tile.to}
                  className="group flex items-baseline justify-between gap-6 border-l-2 border-transparent py-6 pl-4 transition hover:border-hh-red sm:py-8"
                >
                  <span className="hh-display text-3xl transition group-hover:text-hh-red sm:text-4xl">
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
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="hh-card overflow-hidden">
      <div className="p-6 sm:p-8">
        <time dateTime={post.date} className="hh-eyebrow">
          {formatPostDate(post.date)}
        </time>
        <h3 className="hh-display mt-3 text-3xl sm:text-4xl">
          <Link to={routes.post(post.slug)} className="transition hover:text-hh-red">
            {post.title}
          </Link>
        </h3>
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-4 text-base font-light leading-relaxed text-hh-silver">
            {paragraph}
          </p>
        ))}
        {post.links && post.links.length > 0 ? (
          <div className="mt-6 flex flex-col gap-3">
            {post.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white transition hover:text-hh-red"
              >
                {link.label} →
              </a>
            ))}
          </div>
        ) : null}
      </div>
      {post.links?.some((link) => link.embedUrl) ? (
        <div className="flex flex-col gap-px border-t border-white/10">
          {post.links.map((link) =>
            link.embedUrl ? (
              <iframe
                key={link.url}
                title={`${post.title} on ${link.label}`}
                src={link.embedUrl}
                style={{ height: link.embedHeight ?? 352 }}
                className="w-full border-0"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              />
            ) : null,
          )}
        </div>
      ) : null}
      {post.videos && post.videos.length > 0 ? (
        <div className="grid gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {post.videos.map((video) => (
            <figure key={video.id} className="bg-hh-charcoal">
              <div className="aspect-video">
                <iframe
                  title={`${video.title} — ${site.name}`}
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="px-4 py-3">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:text-hh-red"
                >
                  {video.title}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  );
}
