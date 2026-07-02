import { Disc3, Music2 } from "lucide-react";
import { media, site, streamingLinks } from "@/content/site";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0`;
}

function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function MediaPage() {
  usePageTitle("Media");

  const featuredId = site.featuredVideoId;
  const featuredVideo = featuredId
    ? media.youtubeVideos.find((v) => v.id === featuredId)
    : undefined;

  const sessionIds = new Set<string>(media.sessionVideos.map((v) => v.id));
  const otherVideos = media.youtubeVideos.filter(
    (v) => !sessionIds.has(v.id) && v.id !== featuredId,
  );

  return (
    <>
      <PageHero
        eyebrow="Watch · Listen · Photos"
        title="Media"
        description={`Videos, releases, and press photos for ${site.name}.`}
      />

      {featuredVideo ? (
        <section className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="hh-section-heading">Featured</h2>
            <p className="mt-2 text-hh-muted">Latest from @honorhourmusic on YouTube.</p>
            <figure className="hh-card mx-auto mt-8 max-w-4xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  title={featuredVideo.title}
                  src={youtubeEmbedSrc(featuredVideo.id)}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="px-4 py-3">
                <a
                  href={youtubeWatchUrl(featuredVideo.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white transition hover:text-hh-red"
                >
                  {featuredVideo.title}
                </a>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/10 bg-hh-charcoal/60 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Whysound Session EP</h2>
          <p className="mt-2 text-hh-muted">Live session recordings from WhySound in Logan, Utah.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {media.sessionVideos.map((video) => (
              <figure key={video.id} className="hh-card overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    title={video.title}
                    src={youtubeEmbedSrc(video.id)}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption className="px-4 py-3">
                  <a
                    href={youtubeWatchUrl(video.id)}
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
        </div>
      </section>

      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Releases</h2>
          <p className="mt-2 text-hh-muted">
            Singles and the Whysound Session EP — stream on{" "}
            <a
              href="https://www.youtube.com/@honorhourmusic/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hh-red hover:text-white"
            >
              YouTube Music
            </a>
            .
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {media.releases.map((release) => (
              <article key={release.title} className="hh-card p-6">
                <div className="flex items-start gap-3">
                  <Disc3 className="mt-1 h-6 w-6 shrink-0 text-hh-red" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-hh-red">
                      {release.type}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{release.title}</h3>
                    {"description" in release && release.description ? (
                      <p className="mt-2 text-sm text-hh-muted">{release.description}</p>
                    ) : null}
                    <ol className="mt-4 space-y-2">
                      {release.tracks.map((track, index) => (
                        <li key={track.videoId}>
                          <a
                            href={youtubeWatchUrl(track.videoId)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-baseline gap-3 text-sm text-hh-silver transition hover:text-white"
                          >
                            <span className="w-5 shrink-0 text-hh-muted">{index + 1}.</span>
                            <span>{track.title}</span>
                            <span className="ml-auto text-hh-red">Watch →</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-hh-charcoal/60 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Videos</h2>
          <p className="mt-2 text-hh-muted">Official music videos and live session clips.</p>

          {otherVideos.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherVideos.map((video) => (
                <figure key={video.id} className="hh-card overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      title={video.title}
                      src={youtubeEmbedSrc(video.id)}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-4 py-3">
                    <a
                      href={youtubeWatchUrl(video.id)}
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
          ) : (
            <div className="hh-card mt-8 flex aspect-video max-w-3xl flex-col items-center justify-center gap-4 p-8 text-center">
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

          {media.officialPlaylistId ? (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">Official music videos playlist</h3>
              <div className="hh-card mt-4 overflow-hidden">
                <div className="aspect-video max-w-3xl">
                  <iframe
                    title={`${site.name} official music videos`}
                    src={`https://www.youtube.com/embed/videoseries?list=${media.officialPlaylistId}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Listen &amp; follow</h2>
          <p className="mt-2 text-hh-muted">Stream and follow across platforms.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="hh-card p-6">
              <ul className="space-y-3">
                {streamingLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-hh-red transition hover:text-white"
                    >
                      {link.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hh-card flex flex-col justify-center p-6">
              <h3 className="text-lg font-semibold text-white">Social</h3>
              <p className="mt-2 text-sm text-hh-muted">
                Clips, announcements, and behind-the-scenes from the road.
              </p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Photos</h2>
          <p className="mt-2 max-w-2xl text-hh-muted">
            Press and promo shots — right-click to save for posters or listings.
          </p>

          {media.promoPhotos.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {media.promoPhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-hh-panel/80"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-hh-muted">{photo.alt}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="hh-card mt-8 p-10 text-center">
              <p className="text-hh-silver">Promo photos coming soon.</p>
              <p className="mt-2 text-sm text-hh-muted">
                Drop images in <code className="text-hh-silver">public/assets/media/</code> and list
                them in <code className="text-hh-silver">src/content/site.ts</code>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
