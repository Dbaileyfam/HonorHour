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
