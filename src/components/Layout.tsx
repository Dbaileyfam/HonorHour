import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <div className="hh-grain relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 hh-glow-red" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
}
