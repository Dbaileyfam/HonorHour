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
  /** Featured on home, EPK, and media hero */
  featuredVideoId: "bl2FLCFJoOA",
  booking: {
    name: "Honor Hour",
    email: null as string | null,
    phone: null as string | null,
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.media, label: "Media" },
  { to: routes.shows, label: "Shows" },
  { to: routes.epk, label: "EPK" },
  { to: routes.contact, label: "Contact" },
] as const;

/** YouTube videos, releases, and promo photos from @honorhourmusic */
export const media = {
  officialPlaylistId: "PLt-NLJfm9EBm4VLF8_8ZtkI-CJjufztat",
  youtubeVideos: [
    { id: "bl2FLCFJoOA", title: "Don't Give Yourselves to Brutes" },
    { id: "W8Nmv_HNCsg", title: "Six Percent" },
    { id: "yBs641G9Wxk", title: "Kaleidoscope (Tiësto + Jónsi cover)" },
    { id: "Z0WJRONlIww", title: "72 thru 74" },
    { id: "ShqdFcZ3ZGI", title: "A.I. for the Straight Guy" },
    { id: "zdETzNCDe_o", title: "Dried Out" },
    { id: "wwc1HHC1pjk", title: "Bad at Love (Halsey cover)" },
    { id: "ishFEGzvPAc", title: "Eventide" },
  ],
  releases: [
    {
      title: "The Whysound Session EP",
      type: "EP",
      description: "Live session recordings from WhySound in Logan, Utah.",
      tracks: [
        { title: "A.I. for the Straight Guy", videoId: "ShqdFcZ3ZGI" },
        { title: "Dried Out", videoId: "zdETzNCDe_o" },
        { title: "Bad at Love (Halsey cover)", videoId: "wwc1HHC1pjk" },
        { title: "Eventide", videoId: "ishFEGzvPAc" },
      ],
    },
    {
      title: "Don't Give Yourselves to Brutes",
      type: "Single",
      tracks: [{ title: "Don't Give Yourselves to Brutes", videoId: "bl2FLCFJoOA" }],
    },
    {
      title: "Six Percent",
      type: "Single",
      tracks: [{ title: "Six Percent", videoId: "W8Nmv_HNCsg" }],
    },
    {
      title: "Kaleidoscope",
      type: "Single",
      description: "Tiësto + Jónsi cover.",
      tracks: [{ title: "Kaleidoscope", videoId: "yBs641G9Wxk" }],
    },
    {
      title: "72 thru 74",
      type: "Single",
      tracks: [{ title: "72 thru 74", videoId: "Z0WJRONlIww" }],
    },
  ],
  promoPhotos: [] as { src: string; alt: string }[],
} as const;

export const eventTypes = [
  "Clubs & live venues",
  "Festivals",
  "Private events",
  "Corporate & brand activations",
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

export const streamingLinks = [
  { label: "YouTube — @honorhourmusic", href: site.social.youtube },
  {
    label: "YouTube Music — releases",
    href: "https://www.youtube.com/@honorhourmusic/releases",
  },
  {
    label: "Official music videos (playlist)",
    href: "https://www.youtube.com/playlist?list=PLt-NLJfm9EBm4VLF8_8ZtkI-CJjufztat",
  },
] as const;

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
