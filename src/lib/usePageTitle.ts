import { useEffect } from "react";
import { site } from "@/content/site";

export function usePageTitle(page: string) {
  useEffect(() => {
    document.title = `${site.name} | ${page}`;
  }, [page]);
}
