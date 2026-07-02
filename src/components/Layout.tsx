import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { assetUrl } from "@/lib/assets";

const patternBg = assetUrl("assets/pattern-bg.png");

export function Layout() {
  return (
    <>
      <div className="relative min-h-screen bg-hh-black">
        {/* Pattern — own layer so grain/overlay don't override it */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-hh-black bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url("${patternBg}")` }}
          aria-hidden
        />
        <div className="pointer-events-none fixed inset-0 z-0 hh-pattern-overlay" aria-hidden />
        <div className="pointer-events-none fixed inset-0 z-0 hh-glow-red" aria-hidden />
        <div
          className="pointer-events-none fixed inset-0 z-0 hh-grain opacity-60"
          aria-hidden
        />

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
