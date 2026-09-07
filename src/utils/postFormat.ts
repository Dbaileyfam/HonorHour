import type { Post } from "@/content/site";

export function formatPostDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function publishedPosts(items: readonly Post[]) {
  return [...items].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(items: readonly Post[], slug: string | undefined) {
  if (!slug) return undefined;
  return items.find((post) => post.slug === slug);
}
