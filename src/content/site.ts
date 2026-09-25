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
    "https://open.spotify.com/embed/artist/3DK78RnwDgR3FB717UM3nU?utm_source=generator&si=f289f95aef5442eb",
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
  { to: routes.contact, label: "Contact & EPK" },
] as const;

/** Curated Honor Hour releases on YouTube — add videos and cover art as they release */
export const media = {
  featured: {
    id: "bl2FLCFJoOA",
    title: "Don't Give Yourselves to Brutes",
    cover: "assets/media/dont-give-yourselves-to-brutes.png",
    more: [
      { id: "Ic1gCUNMFro", title: "Color & Spite", cover: "assets/media/color-and-spite-ep.jpg" },
      { id: "2dnHWW84gCI", title: "Kingdom" },
    ],
  },
  whysoundSession: {
    title: "Whysound Session EP",
    description: "Live session recordings from WhySound in Logan, Utah.",
    cover: "assets/media/whysound-session-ep.png",
    videos: [
      { id: "ishFEGzvPAc", title: "Eventide" },
      { id: "wwc1HHC1pjk", title: "Bad at Love (Halsey Cover)" },
      { id: "ShqdFcZ3ZGI", title: "A.I. for the Straight Guy" },
      { id: "zdETzNCDe_o", title: "Dried Out" },
    ],
  },
  singles: [
    {
      id: "RAoIaiDuFuE",
      title: "Kaleidoscope",
      cover: "assets/media/kaleidoscope.png",
      note: "Tiësto + Jónsi cover",
    },
    {
      id: "rohKV3u58RI",
      title: "72 thru 74",
      cover: "assets/media/72-thru-74.png",
    },
    {
      id: "mAhCLJZIuzc",
      title: "Don't Give Yourselves to Brutes",
      cover: "assets/media/dont-give-yourselves-to-brutes.png",
    },
    {
      id: "M3HxGIJ22OE",
      title: "Six Percent",
      cover: "assets/media/six-percent.png",
    },
  ],
  albums: [
    {
      title: "Color & Spite EP",
      cover: "assets/media/color-and-spite-ep.jpg",
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
  specialThanks: ["Mateo Rueda", "Weston Woodbury", "Ryan Brady", "Desiree Bailey"],
} as const;

export const bio = {
  homepage:
    "HNR HR (Honor Hour Music) is a musical project based out of SLC, UT. Mason Wendell, Shane Kelson, and Aaron Maughan incorporate all their musical tastes into one cohesive heavy rock experience.",
  short:
    "HNR HR (Honor Hour Music) is a musical project based out of SLC, UT. Mason Wendell, Shane Kelson, and Aaron Maughan incorporate all their musical tastes into one cohesive heavy rock experience where there are no rules as to what they create and how they perform.",
  long: [] as string[],
  lineup: [
    { name: "Mason Wendell", role: "Vocals & guitar" },
    { name: "Shane Kelson", role: "Bass" },
    { name: "Aaron Maughan", role: "Drums" },
  ],
} as const;

export const shows = [] as {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  ticketUrl?: string;
}[];

/** Homepage news/blog — newest first. Add a post here when you have something to put out. */
export type ListenLink = {
  url: string;
  label: string;
  embedUrl?: string;
  embedHeight?: number;
};

export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  videoId?: string;
  videos?: { id: string; title: string }[];
  links?: ListenLink[];
};

export const posts: Post[] = [
  {
    slug: "the-color-and-spite-ep",
    date: "2026-09-25",
    title: "The Color & Spite EP",
    excerpt: "",
    body: ["HNR HR’s newest album is The Color & Spite EP, out now on streaming services"],
    links: [
      {
        url: "https://music.apple.com/us/album/the-color-spite-ep-ep/6808918832",
        label: "Listen on Apple Music",
        embedUrl: "https://embed.music.apple.com/us/album/the-color-spite-ep-ep/6808918832?theme=dark",
        embedHeight: 450,
      },
      {
        url: "https://open.spotify.com/album/4ZQHoUBAeua0Ba2F3HDmPe",
        label: "Listen on Spotify",
        embedUrl: "https://open.spotify.com/embed/album/4ZQHoUBAeua0Ba2F3HDmPe",
        embedHeight: 352,
      },
    ],
  },
  {
    slug: "the-color-and-spite-ep-videos",
    date: "2026-09-25",
    title: "Music videos for The Color & Spite EP",
    excerpt: "",
    body: [],
    videos: [
      { id: "2dnHWW84gCI", title: "Kingdom" },
      { id: "Ic1gCUNMFro", title: "Color & Spite" },
      { id: "JYIXMah6EQ0", title: "The Hand That Feeds" },
    ],
  },
  {
    slug: "spring-video-sessions",
    date: "2026-09-25",
    title: "Spring video sessions",
    excerpt: "",
    body: [
      "In the Spring of 2026, HNR HR worked with director Weston Woodbury and cam op Ryan Brady to produce a new series of videos for many songs released so far. These videos are the result",
    ],
    videos: [
      { id: "LLMUf89k4F0", title: "The Hand That Feeds" },
      { id: "RAoIaiDuFuE", title: "Kaleidoscope" },
      { id: "rohKV3u58RI", title: "72 thru 74" },
      { id: "mAhCLJZIuzc", title: "Don't Give Yourselves to Brutes" },
      { id: "M3HxGIJ22OE", title: "Six Percent" },
      { id: "wK0qeq3BbqI", title: "Dried Out" },
      { id: "9AYYiQrqiMg", title: "A.I. for the Straight Guy" },
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
  { id: "press", label: "Press and Assets" },
  { id: "show-needs", label: "Show Needs" },
  { id: "contact", label: "Book" },
] as const;
