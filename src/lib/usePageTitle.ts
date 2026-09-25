import { useEffect } from "react";
import { site } from "@/content/site";

export function usePageTitle(page: string, options?: { absolute?: boolean }) {
  const absolute = options?.absolute ?? false;
  useEffect(() => {
    document.title = absolute ? page : `${site.name} | ${page}`;
  }, [page, absolute]);
}
