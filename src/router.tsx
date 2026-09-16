import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { MediaPage } from "@/pages/MediaPage";
import { ShowsPage } from "@/pages/ShowsPage";
import { ContactPage } from "@/pages/ContactPage";
import { EpkAccessPage } from "@/pages/EpkAccessPage";
import { PostPage } from "@/pages/PostPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routes } from "@/lib/routes";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "media", element: <MediaPage /> },
        { path: "shows", element: <ShowsPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "epk", element: <EpkAccessPage /> },
        { path: "news/:slug", element: <PostPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export { routes };
