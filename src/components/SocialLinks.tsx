import { Instagram, Youtube, Facebook, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.027.417 20.384.218 19.7.135 18.94.04 18.175.01 17.412.01H6.588C5.825.01 5.06.04 4.3.135 3.616.218 2.973.417 2.423.89 1.305 1.624.56 2.624.243 3.935.068 4.654.003 5.386.003 6.124v11.752c0 .738.065 1.47.24 2.19.317 1.31 1.062 2.31 2.18 3.043.55.474 1.193.672 1.877.756.76.094 1.525.124 2.288.124h10.824c.763 0 1.528-.03 2.288-.124.684-.084 1.327-.282 1.877-.756 1.118-.733 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zm-4.52 8.42c-.09.52-.36.95-.79 1.24-.39.26-.83.36-1.3.3-.2-.03-.4-.08-.59-.15l-6.07-1.92v4.37c0 .95-.4 1.66-1.12 2.05-.35.19-.73.28-1.14.28-.55 0-1.05-.17-1.48-.5-.43-.33-.7-.78-.8-1.33-.03-.18-.05-.36-.05-.54V8.85c0-.42.1-.8.3-1.14.2-.34.48-.6.82-.78.2-.1.42-.17.65-.2.2-.03.4-.03.6.02l8.05 2.55c.55.17.97.5 1.22 1 .25.5.3 1.03.15 1.58l-.39 2.68z" />
    </svg>
  );
}

type SocialKey = keyof typeof site.social;

const icons: Record<SocialKey, LucideIcon | typeof SpotifyIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  spotify: SpotifyIcon,
  appleMusic: AppleMusicIcon,
  facebook: Facebook,
};

const labels: Record<SocialKey, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  spotify: "Spotify",
  appleMusic: "Apple Music",
  facebook: "Facebook",
};

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "accent";
};

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-11 w-11",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function SocialLinks({
  className = "",
  size = "md",
  variant = "default",
}: SocialLinksProps) {
  const entries = Object.entries(site.social) as [SocialKey, string][];
  const accent = variant === "accent";

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {entries.map(([key, href]) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Honor Hour on ${labels[key]}`}
              className={`inline-flex items-center justify-center border transition ${sizeClasses[size]} ${
                accent
                  ? "border-white/20 text-white hover:border-hh-red hover:bg-hh-red hover:text-white focus-visible:border-hh-red focus-visible:bg-hh-red focus-visible:text-white active:bg-hh-red-dark"
                  : "border-white/15 text-hh-muted hover:border-hh-red hover:bg-hh-red hover:text-white focus-visible:border-hh-red focus-visible:bg-hh-red focus-visible:text-white active:bg-hh-red-dark"
              }`}
            >
              <Icon className={iconSizes[size]} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
