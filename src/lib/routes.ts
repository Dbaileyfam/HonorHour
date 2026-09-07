export const routes = {
  home: "/",
  media: "/media",
  shows: "/shows",
  epk: "/epk",
  contact: "/contact",
  news: { pathname: "/", hash: "news" },
  post: (slug: string) => `/news/${slug}`,
} as const;
