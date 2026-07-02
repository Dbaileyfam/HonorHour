/** Resolve a public asset path for GitHub Pages base URL. */
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.replace(/^\//, "");
  return base ? `${base}/${normalized}` : `/${normalized}`;
}
