import { Outlet, ScrollRestoration } from "react-router-dom";
import { PatternEffectsProvider } from "@/context/PatternEffectsContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HallwayBackground } from "./HallwayBackground";

function LayoutShell() {
  return (
    <div className="relative min-h-screen bg-hh-black">
      <HallwayBackground />
      <div className="pointer-events-none fixed inset-0 z-0 hh-pattern-overlay" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-0 hh-glow-red" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export function Layout() {
  return (
    <PatternEffectsProvider>
      <LayoutShell />
      <ScrollRestoration />
    </PatternEffectsProvider>
  );
}
