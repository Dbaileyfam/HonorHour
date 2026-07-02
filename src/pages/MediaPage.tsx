import { media, site, streamingLinks } from "@/content/site";
import { usePatternEffects } from "@/context/PatternEffectsContext";
import { assetUrl } from "@/lib/assets";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1`;
}

function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

type Video = { id: string; title: string };

function CoverArt({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`aspect-square w-full object-cover ${className}`}
    />
  );
}

function VideoPlayer({ video }: { video: Video }) {
  const { setMusicPlaying } = usePatternEffects();

  return (
    <div
      className="aspect-video min-h-0 w-full"
      onPointerDown={() => setMusicPlaying(true)}
    >
      <iframe
        title={video.title}
        src={youtubeEmbedSrc(video.id)}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        onFocus={() => setMusicPlaying(true)}
        onBlur={() => setMusicPlaying(false)}
      />
    </div>
  );
}

function SpotifyEmbed() {
  const { setMusicPlaying } = usePatternEffects();

  return (
    <div
      className="overflow-hidden rounded-xl"
      onPointerDown={() => setMusicPlaying(true)}
    >
      <iframe
        title={`${site.name} on Spotify`}
        src="https://open.spotify.com/embed/artist/3DK78RnwDgR3FB717UM3nU?utm_source=generator&si=006082fea1464224"
        className="h-[352px] w-full border-0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onFocus={() => setMusicPlaying(true)}
        onBlur={() => setMusicPlaying(false)}
      />
    </div>
  );
}

function SingleRelease({
  video,
  cover,
  note,
}: {
  video: Video;
  cover: string;
  note?: string;
}) {
  return (
    <article className="hh-card overflow-hidden">
      <div className="grid sm:grid-cols-[minmax(160px,220px)_1fr]">
        <CoverArt src={cover} alt={`${video.title} cover art`} />
        <div className="flex min-w-0 flex-col">
          <VideoPlayer video={video} />
          <div className="border-t border-white/10 px-4 py-3">
            <a
              href={youtubeWatchUrl(video.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition hover:text-hh-red"
            >
              {video.title}
            </a>
            {note ? <p className="mt-1 text-sm text-hh-muted">{note}</p> : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function MediaPage() {
  usePageTitle("Media");

  return (
    <>
      <PageHero
        eyebrow="Watch · Listen · Photos"
        title="Media"
        description={`Original music and live sessions from ${site.name}.`}
      />

      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Featured</h2>
          <p className="mt-2 text-hh-muted">Latest original from @honorhourmusic.</p>
          <div className="mx-auto mt-8 max-w-4xl">
            <SingleRelease video={media.featured} cover={media.featured.cover} />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-hh-charcoal/60 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(200px,280px)_1fr] lg:items-start">
            <figure className="hh-card mx-auto w-full max-w-xs overflow-hidden lg:max-w-none">
              <CoverArt
                src={media.whysoundSession.cover}
                alt={`${media.whysoundSession.title} cover art`}
              />
              <figcaption className="px-4 py-3 text-center text-sm font-medium text-white">
                {media.whysoundSession.title}
              </figcaption>
            </figure>
            <div>
              <h2 className="hh-section-heading">{media.whysoundSession.title}</h2>
              <p className="mt-2 text-hh-muted">{media.whysoundSession.description}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {media.whysoundSession.videos.map((video) => (
                  <figure key={video.id} className="hh-card overflow-hidden">
                    <VideoPlayer video={video} />
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
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Singles</h2>
          <p className="mt-2 text-hh-muted">More from the band.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {media.singles.map((single) => (
              <SingleRelease
                key={single.id}
                video={{ id: single.id, title: single.title }}
                cover={single.cover}
                note={"note" in single ? single.note : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {media.albums.length > 0 ? (
        <section className="border-b border-white/10 bg-hh-charcoal/60 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="hh-section-heading">Albums</h2>
            <p className="mt-2 text-hh-muted">EPs and full releases.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {media.albums.map((album) => (
                <figure key={album.title} className="hh-card overflow-hidden">
                  <CoverArt src={album.cover} alt={`${album.title} cover art`} />
                  <figcaption className="px-4 py-4">
                    <h3 className="font-semibold text-white">{album.title}</h3>
                    <p className="mt-1 text-sm text-hh-muted">{album.description}</p>
                    <a
                      href="https://www.youtube.com/@honorhourmusic/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-hh-red hover:text-white"
                    >
                      Stream on YouTube Music →
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="hh-section-heading">Listen &amp; follow</h2>
          <p className="mt-2 text-hh-muted">Stream and follow across platforms.</p>

          <div className="mx-auto mt-8 max-w-3xl">
            <SpotifyEmbed />
          </div>

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
                    src={assetUrl(photo.src)}
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
