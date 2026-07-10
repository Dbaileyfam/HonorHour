import { routes } from "@/lib/routes";

/** Central band copy, links, and EPK content — update as you get assets from the band. */

export const site = {
  name: "Honor Hour",
  /** Logo / wordmark shown in header, footer, and hero */
  wordmark: "HNR HR",
  tagline: "loud music for loud times",
  description:
    "Honor Hour is a Utah rock band bringing high-energy live sets to clubs, festivals, and stages across the Wasatch Front.",
  hometown: "Utah",
  genre: "Rock",
  formed: null as string | null,
  social: {
    instagram: "https://www.instagram.com/honorhourmusic/",
    youtube: "https://www.youtube.com/@honorhourmusic",
    spotify: "https://open.spotify.com/artist/3DK78RnwDgR3FB717UM3nU",
    appleMusic: "https://music.apple.com/us/artist/honor-hour/1787742879",
    facebook: "https://www.facebook.com/search/top?q=honor%20hour",
  },
  /** Compact Spotify player for EPK */
  spotifyArtistEmbed:
    "https://open.spotify.com/embed/artist/3DK78RnwDgR3FB717UM3nU?utm_source=generator&theme=0&si=0a79f0d530874999",
  /** Featured on home, EPK, and media hero */
  featuredVideoId: "bl2FLCFJoOA",
  booking: {
    name: "Honor Hour",
    email: "honorhourmusic@gmail.com",
    /** Private — shown on EPK only, not the public Contact page */
    phone: "385-221-5562",
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.media, label: "Media" },
  { to: routes.shows, label: "Shows" },
  { to: routes.epk, label: "EPK" },
  { to: routes.contact, label: "Contact" },
] as const;

/** Curated Honor Hour releases on YouTube — add videos and cover art as they release */
export const media = {
  featured: {
    id: "bl2FLCFJoOA",
    title: "Don't Give Yourselves to Brutes",
    cover: "assets/media/dont-give-yourselves-to-brutes.png",
  },
  whysoundSession: {
    title: "Whysound Session EP",
    description: "Live session recordings from WhySound in Logan, Utah.",
    cover: "assets/media/whysound-session-ep.png",
    videos: [
      { id: "ishFEGzvPAc", title: "Eventide" },
      { id: "ShqdFcZ3ZGI", title: "A.I. for the Straight Guy" },
      { id: "zdETzNCDe_o", title: "Dried Out" },
    ],
  },
  singles: [
    {
      id: "W8Nmv_HNCsg",
      title: "Six Percent",
      cover: "assets/media/six-percent.png",
    },
    {
      id: "Z0WJRONlIww",
      title: "72 thru 74",
      cover: "assets/media/72-thru-74.png",
    },
    {
      id: "yBs641G9Wxk",
      title: "Kaleidoscope",
      cover: "assets/media/kaleidoscope.png",
      note: "Tiësto + Jónsi cover",
    },
  ],
  albums: [
    {
      title: "Color & Spite EP",
      cover: "assets/media/color-and-spite-ep.png",
      description: "Honor Hour — Color & Spite EP.",
    },
  ],
  promoPhotos: [
    {
      src: "assets/media/band-rehearsal-chr.png",
      alt: "Honor Hour live in rehearsal — full band with neon floor lighting",
      featured: true,
    },
    {
      src: "assets/media/band-performance-blue-1.png",
      alt: "Honor Hour performing under blue stage lighting",
    },
    {
      src: "assets/media/band-rehearsal-warm.png",
      alt: "Honor Hour trio in the rehearsal room",
    },
    {
      src: "assets/media/vocalist-orange-beanie.png",
      alt: "Honor Hour vocalist mid-performance",
    },
    {
      src: "assets/media/drummer-blue-motion.png",
      alt: "Honor Hour drummer in motion",
    },
    {
      src: "assets/media/bass-closeup-warm.png",
      alt: "Close-up of bass guitar during a live set",
    },
    {
      src: "assets/media/band-performance-blue-2.png",
      alt: "Honor Hour full-band performance with blue lighting",
    },
    {
      src: "assets/media/bass-blue-flares.png",
      alt: "Bass player with lens flares and drum kit in background",
    },
    {
      src: "assets/media/band-rehearsal-green-flares.png",
      alt: "Honor Hour rehearsal with green neon and lens flares",
    },
    {
      src: "assets/media/band-rehearsal-warm-2.png",
      alt: "Honor Hour live session — bass, drums, and guitar",
    },
    {
      src: "assets/media/guitar-rainbow-prism.png",
      alt: "Guitar performance with rainbow prism light",
    },
    {
      src: "assets/media/band-surreal-shr.png",
      alt: "Stylized Honor Hour promo shot with mirrored effects",
    },
  ] as { src: string; alt: string; featured?: boolean }[],
  specialThanks: ["Mateo Rueda", "Weston Woodbury", "Ryan Brady"],
} as const;

export const eventTypes = [
  "Clubs & live venues",
  "Festivals",
  "Private events",
  "Corporate & brand activations",
  "Opening slots for the right bills",
] as const;

export const bio = {
  short:
    "Honor Hour is a Utah rock band built for volume, momentum, and rooms that want to move. Loud guitars, tight grooves, and sets that hit hard from the first downbeat.",
  /** Fan-facing copy for the homepage only — EPK uses short bio alone */
  home: [
    "Honor Hour makes hard rock for people who still want a song to go somewhere.",
    "Recorded loud at sessions like Whysound in Logan, with steady releases through 2025 — originals with sharp titles, unexpected covers, and zero interest in playing it safe.",
  ],
  long: [] as string[],
  lineup: [
    { name: "Mason Wendell", role: "" },
    { name: "Shane Kelson", role: "" },
    { name: "Aaron Maughan", role: "" },
  ],
} as const;

export const quickFacts = [
  { label: "Genre", value: site.genre },
  { label: "Hometown", value: site.hometown },
  { label: "Set length", value: "Up to 1 hr 15 min" },
  { label: "Travel", value: "Continental USA" },
  { label: "Opening", value: "Open to strong opportunities" },
] as const;

export const shows = [] as {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  ticketUrl?: string;
}[];

export const pressLogos = [
  {
    preview: "assets/press/honor-hour-wordmark-white.png",
    alt: "Honor Hour wordmark — white on transparent",
    caption: "Wordmark — white (transparent)",
    downloads: [
      {
        src: "assets/press/honor-hour-wordmark-white.svg",
        downloadName: "honor-hour-wordmark-white.svg",
        label: "SVG",
      },
      {
        src: "assets/press/honor-hour-wordmark-white.png",
        downloadName: "honor-hour-wordmark-white.png",
        label: "PNG",
      },
    ],
  },
  {
    preview: "assets/press/honor-hour-wordmark-black-bg.png",
    alt: "Honor Hour wordmark — white on black",
    caption: "Wordmark — white on black",
    downloads: [
      {
        src: "assets/press/honor-hour-wordmark-black-bg.svg",
        downloadName: "honor-hour-wordmark-black-bg.svg",
        label: "SVG",
      },
      {
        src: "assets/press/honor-hour-wordmark-black-bg.png",
        downloadName: "honor-hour-wordmark-black-bg.png",
        label: "PNG",
      },
    ],
  },
] as {
  preview: string;
  alt: string;
  caption: string;
  downloads: { src: string; downloadName: string; label: string }[];
}[];

export const pressPhotos = [
  {
    src: "assets/media/band-rehearsal-chr.png",
    alt: "Honor Hour — full band in rehearsal",
    downloadName: "honor-hour-band-rehearsal-chr.png",
    caption: "Full band — rehearsal",
  },
  {
    src: "assets/media/band-rehearsal-warm.png",
    alt: "Honor Hour — trio live in the rehearsal room",
    downloadName: "honor-hour-band-rehearsal-warm.png",
    caption: "Full band — live session",
  },
  {
    src: "assets/media/band-performance-blue-1.png",
    alt: "Honor Hour — full band under blue stage lighting",
    downloadName: "honor-hour-band-performance-blue.png",
    caption: "Full band — performance",
  },
] as {
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

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
