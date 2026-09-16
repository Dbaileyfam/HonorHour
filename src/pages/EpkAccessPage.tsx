import { useEffect, useState, type ComponentType, type FormEvent } from "react";
import { Logo } from "@/components/Logo";
import { isEpkUnlocked, unlockEpk } from "@/lib/epkGate";
import { usePageTitle } from "@/lib/usePageTitle";

export function EpkAccessPage() {
  usePageTitle("Electronic Press Kit");

  const [unlocked, setUnlocked] = useState(isEpkUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [Kit, setKit] = useState<ComponentType | null>(null);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  useEffect(() => {
    if (!unlocked) {
      setKit(null);
      return;
    }

    let cancelled = false;
    void import("@/pages/EPKPage").then((mod) => {
      if (!cancelled) setKit(() => mod.EPKPage);
    });
    return () => {
      cancelled = true;
    };
  }, [unlocked]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const ok = await unlockEpk(password);
    setBusy(false);
    if (!ok) {
      setError("That password doesn’t match.");
      return;
    }
    setPassword("");
    setUnlocked(true);
  }

  if (unlocked && Kit) return <Kit />;

  if (unlocked) {
    return (
      <section className="px-4 py-24 text-center">
        <p className="text-sm text-hh-muted">Loading press kit…</p>
      </section>
    );
  }

  return (
    <section className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-md">
        <p className="hh-eyebrow">Electronic Press Kit</p>
        <h1 className="mt-4">
          <Logo className="text-5xl sm:text-7xl" />
        </h1>
        <p className="mt-5 text-base leading-relaxed text-hh-muted">
          This press kit is for promoters and media. Enter the password to continue.
        </p>
        <form className="mt-8" onSubmit={onSubmit}>
          <label htmlFor="epk-password" className="hh-eyebrow">
            Password
          </label>
          <input
            id="epk-password"
            className="hh-input mt-3"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error ? <p className="mt-3 text-sm text-hh-red">{error}</p> : null}
          <button type="submit" className="hh-btn-primary mt-6" disabled={busy}>
            {busy ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    </section>
  );
}
