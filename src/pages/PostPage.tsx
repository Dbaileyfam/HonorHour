import { Link, useParams } from "react-router-dom";
import { posts, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { formatPostDate, getPostBySlug } from "@/utils/postFormat";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function PostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(posts, slug);
  usePageTitle(post?.title ?? "News");

  if (!post) return <NotFoundPage />;

  return (
    <>
      <section className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="hh-eyebrow">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </p>
          <h1 className="hh-display mt-4 text-5xl text-white sm:text-7xl">{post.title}</h1>
        </div>
      </section>

      <article className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-5 text-lg font-light leading-relaxed text-hh-silver first:mt-0">
              {paragraph}
            </p>
          ))}

          {post.videoId ? (
            <div className="hh-card mt-10 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  title={`${post.title} — ${site.name}`}
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8">
            <Link
              to={routes.news}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white transition hover:text-hh-red"
            >
              ← All news
            </Link>
            <Link
              to={routes.media}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-hh-muted transition hover:text-hh-red"
            >
              Media →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
