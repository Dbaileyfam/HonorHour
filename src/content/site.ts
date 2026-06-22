import { routes } from "@/lib/routes";

/** Central band copy, links, and EPK content — update as you get assets from the band. */

export const site = {
  name: "Honor Hour",
  tagline: "Loud music for loud times.",
  description:
    "Honor Hour is a Utah rock band bringing high-energy live sets to clubs, festivals, and stages across the Wasatch Front.",
  hometown: "Utah",
  genre: "Rock",
  formed: null as string | null,
  social: {
    instagram: "https://www.instagram.com/honorhourmusic/",
    youtube: "https://www.youtube.com/@honorhourmusic",
    facebook: "https://www.facebook.com/search/top?q=honor%20hour",
  },
  /** Replace with a featured video ID from youtube.com/@honorhourmusic when ready */
  featuredVideoId: null as string | null,
  booking: {
    name: "Honor Hour",
    email: null as string | null,
    phone: null as string | null,
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.epk, label: "EPK" },
] as const;

export const bio = {
  short:
    "Honor Hour is a Utah rock band built for volume, momentum, and rooms that want to move. Loud guitars, tight grooves, and sets that hit hard from the first downbeat.",
  long: [
    "Formed in Utah, Honor Hour channels the energy of classic and modern rock into a live show that doesn't ease in — it arrives loud and stays there.",
    "The band has been building a following through social media and local shows, sharing new music and performance clips with fans across Instagram and YouTube.",
    "Honor Hour is booking clubs, private events, and festival slots. For promoters and press, the full electronic press kit has bio, photos, and technical details.",
  ],
  lineup: [
    { name: "TBD", role: "Vocals" },
    { name: "TBD", role: "Guitar" },
    { name: "TBD", role: "Bass" },
    { name: "TBD", role: "Drums" },
  ],
} as const;

export const quickFacts = [
  { label: "Genre", value: site.genre },
  { label: "Hometown", value: site.hometown },
  { label: "Style", value: "High-energy live rock" },
  { label: "Set length", value: "45–90 min (flexible)" },
] as const;

export const shows = [] as {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  ticketUrl?: string;
}[];

export const pressPhotos = [] as {
  src: string;
  alt: string;
  downloadName: string;
  caption: string;
}[];

export const pressQuotes = [] as {
  quote: string;
  source: string;
  url?: string;
}[];

export const streamingLinks = [] as {
  label: string;
  href: string;
}[];

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
