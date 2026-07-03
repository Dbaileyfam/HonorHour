import { site } from "@/content/site";

type LogoProps = {
  className?: string;
};

/** Band wordmark — HNR HR in display type */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`hh-logo ${className}`} aria-label={site.name}>
      {site.wordmark}
    </span>
  );
}
