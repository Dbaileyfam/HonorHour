import { Instagram, Youtube, Facebook } from "lucide-react";
import { site } from "@/content/site";

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
} as const;

type SocialKey = keyof typeof icons;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = Object.entries(site.social) as [SocialKey, string][];

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const Icon = icons[key];
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Honor Hour on ${label}`}
              className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-hh-red hover:bg-hh-red/20 hover:text-white ${sizeClasses[size]}`}
            >
              <Icon className={iconSizes[size]} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
