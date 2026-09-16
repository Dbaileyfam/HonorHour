import { site } from "@/content/site";

type LogoProps = {
  className?: string;
  /** `lockup` splits HNR / HR into two squared blocks */
  variant?: "inline" | "lockup";
};

/** Band wordmark — HNR HR in display type */
export function Logo({ className = "", variant = "inline" }: LogoProps) {
  const parts = site.wordmark.split(/\s+/);

  if (variant === "lockup" && parts.length > 1) {
    return (
      <span className={`hh-logo-lockup ${className}`} aria-label={site.name}>
        {parts.map((word, index) => (
          <span key={`${word}-${index}`} className="hh-logo-word">
            {word}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={`hh-logo ${className}`} aria-label={site.name}>
      {site.wordmark}
    </span>
  );
}
