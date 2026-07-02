import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "@/lib/routes";

type PatternEffectsContextValue = {
  navHover: boolean;
  setNavHover: (active: boolean) => void;
  musicPlaying: boolean;
  setMusicPlaying: (active: boolean) => void;
  mediaActive: boolean;
};

const PatternEffectsContext = createContext<PatternEffectsContextValue | null>(null);

export function PatternEffectsProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [navHover, setNavHoverState] = useState(false);
  const [musicPlaying, setMusicPlayingState] = useState(false);

  const mediaActive = location.pathname === routes.media || location.pathname.endsWith("/media");

  const setNavHover = useCallback((active: boolean) => {
    setNavHoverState(active);
  }, []);

  const setMusicPlaying = useCallback((active: boolean) => {
    setMusicPlayingState(active);
  }, []);

  useEffect(() => {
    if (!mediaActive) {
      setMusicPlayingState(false);
    }
  }, [mediaActive]);

  const value = useMemo(
    () => ({
      navHover,
      setNavHover,
      musicPlaying,
      setMusicPlaying,
      mediaActive,
    }),
    [navHover, setNavHover, musicPlaying, setMusicPlaying, mediaActive],
  );

  return (
    <PatternEffectsContext.Provider value={value}>{children}</PatternEffectsContext.Provider>
  );
}

export function usePatternEffects() {
  const ctx = useContext(PatternEffectsContext);
  if (!ctx) {
    throw new Error("usePatternEffects must be used within PatternEffectsProvider");
  }
  return ctx;
}
