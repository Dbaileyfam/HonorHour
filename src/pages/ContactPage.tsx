import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { lockEpk } from "@/lib/epkGate";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactPage() {
  usePageTitle("Contact & EPK");

  return (
    <>
      <PageHero eyebrow="Bookings & press" title="Contact & EPK" />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="hh-card p-8">
            <h2 className="text-lg font-medium text-hh-title">Booking &amp; press</h2>
            <Link
              to={routes.epk}
              className="mt-6 inline-flex items-center justify-center gap-2 border border-hh-red/55 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-hh-red hover:text-white focus-visible:bg-hh-red focus-visible:text-white active:bg-hh-red-dark"
              onClick={lockEpk}
            >
              HNR HR EPK
            </Link>
            <address className="mt-6 not-italic">
              <p className="text-lg font-medium text-white">{site.booking.name}</p>
              <p className="mt-3">
                <a
                  href={`mailto:${site.booking.email}`}
                  className="text-white transition hover:text-hh-red"
                >
                  {site.booking.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-hh-muted">Email</p>
              <p className="mt-5">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white transition hover:text-hh-red"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  {site.instagramHandle}
                </a>
              </p>
              <p className="mt-2 text-sm text-hh-muted">Instagram DMs — booking and questions</p>
            </address>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 border border-hh-red/55 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-hh-red hover:text-white focus-visible:bg-hh-red focus-visible:text-white active:bg-hh-red-dark"
            >
              Message on Instagram
            </a>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-hh-muted">
                Also on
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
