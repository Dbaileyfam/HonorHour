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
  instagramHandle: "@honorhourmusic",
  /** Compact Spotify player for EPK */
  spotifyArtistEmbed:
    "https://open.spotify.com/embed/artist/3DK78RnwDgR3FB717UM3nU?utm_source=generator&theme=0&si=0a79f0d530874999",
  /** Featured on home, EPK, and media hero */
  featuredVideoId: "bl2FLCFJoOA",
  booking: {
    name: "Honor Hour",
    email: "honorhourmusic@gmail.com",
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
    more: [
      { id: "Ic1gCUNMFro", title: "Color & Spite" },
      { id: "2dnHWW84gCI", title: "Kingdom" },
    ],
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
      title: "Don't Give Yourselves to Brutes",
      cover: "assets/media/dont-give-yourselves-to-brutes.png",
      description: "Latest original from Honor Hour.",
      videoId: "bl2FLCFJoOA",
    },
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
    "HNR HR (Honor Hour Music) is a musical project based out of SLC, UT. Mason Wendell, Shane Kelson, and Aaron Maughan incorporate all their musical tastes into one cohesive heavy rock experience where there are no rules as to what they create and how they perform.",
  long: [] as string[],
  lineup: [
    { name: "Mason Wendell", role: "Vocals & guitar" },
    { name: "Shane Kelson", role: "Bass" },
    { name: "Aaron Maughan", role: "Drums" },
  ],
} as const;

export const quickFacts = [
  { label: "Genre", value: site.genre },
  { label: "Hometown", value: "SLC, Utah" },
  { label: "Set length", value: "1 hr" },
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

/** Homepage news/blog — newest first. Add a post here when you have something to put out. */
export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  videoId?: string;
};

export const posts: Post[] = [
  {
    slug: "dont-give-yourselves-to-brutes",
    date: "2025-11-20",
    title: "Don't Give Yourselves to Brutes",
    excerpt:
      "New original from Honor Hour — loud, pointed, and built to hit from the first downbeat.",
    body: [
      "Honor Hour's latest original is up now. Don't Give Yourselves to Brutes is the kind of track we write for rooms that want to move — heavy, tight, and not here to play it safe.",
      "Mason Wendell on vocals and guitar, Shane Kelson on bass, Dan Fields on drums. Engineered, mixed, and mastered by Ryan Brady.",
    ],
    videoId: "bl2FLCFJoOA",
  },
  {
    slug: "whysound-session-ep",
    date: "2024-05-06",
    title: "The Whysound Session EP",
    excerpt:
      "Live session recordings from WhySound in Logan — Eventide, A.I. for the Straight Guy, and Dried Out.",
    body: [
      "We recorded loud at WhySound in Logan. The Whysound Session EP is three tracks cut in the room: Eventide, A.I. for the Straight Guy, and Dried Out.",
      "Watch the full session on the Media page, or find Honor Hour wherever you stream.",
    ],
  },
];

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

/** Stage plot is drawn from the audience. Stage left / right are from the band. */
export const stagePlot = [
  { id: "drums", label: "Drums", detail: "Center / rear", area: "rear" },
  { id: "bass", label: "Bass / backup vocals", detail: "Stage right", area: "right" },
  { id: "guitar", label: "Guitar / lead vocals", detail: "Stage left", area: "left" },
] as const;

export const inputList = [
  { channel: 1, name: "Kick Drum" },
  { channel: 2, name: "Snare Drum" },
  { channel: 3, name: "Hi-Hat" },
  { channel: 4, name: "Rack Tom" },
  { channel: 5, name: "Floor Tom" },
  { channel: 6, name: "Drum Overhead Left" },
  { channel: 7, name: "Drum Overhead Right" },
  { channel: 8, name: "Bass Guitar" },
  { channel: 9, name: "Electric Guitar" },
  { channel: 10, name: "Lead Vocals — Guitarist" },
  { channel: 11, name: "Backing Vocals — Bassist" },
] as const;

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "music", label: "Music" },
  { id: "press", label: "Press" },
  { id: "shows", label: "Shows" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Book" },
] as const;
