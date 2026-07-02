import { Instagram, Youtube, Facebook, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const icons: Record<keyof typeof site.social, LucideIcon | typeof SpotifyIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  spotify: SpotifyIcon,
  facebook: Facebook,
};

type SocialKey = keyof typeof site.social;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "accent";
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

const variantClasses = {
  default:
    "border border-white/15 bg-white/5 text-white hover:border-hh-red hover:bg-hh-red/20 hover:text-white",
  accent:
    "border border-hh-red/50 bg-hh-red/10 text-hh-red shadow-md shadow-hh-red/20 hover:border-hh-red hover:bg-hh-red hover:text-white hover:shadow-lg hover:shadow-hh-red/35 hover:scale-105",
};

export function SocialLinks({
  className = "",
  size = "md",
  variant = "default",
}: SocialLinksProps) {
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
              className={`inline-flex items-center justify-center rounded-full transition ${variantClasses[variant]} ${sizeClasses[size]}`}
            >
              <Icon className={iconSizes[size]} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
