import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { MediaPage } from "@/pages/MediaPage";
import { ShowsPage } from "@/pages/ShowsPage";
import { ContactPage } from "@/pages/ContactPage";
import { EPKPage } from "@/pages/EPKPage";
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
        { path: "epk", element: <EPKPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export { routes };
