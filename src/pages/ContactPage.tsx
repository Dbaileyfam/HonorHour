import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { eventTypes, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactPage() {
  usePageTitle("Contact");

  return (
    <>
      <PageHero
        eyebrow="Bookings & press"
        title="Contact us"
        description="Email or Instagram DMs for festivals, venues, private events, and media — we'd love to hear from you."
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="hh-card p-8">
            <h2 className="text-lg font-medium text-white">Booking &amp; press</h2>
            <p className="mt-2 text-sm text-hh-muted">
              For festivals, clubs, private events, and media inquiries.
            </p>
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
              className="hh-btn-primary mt-8"
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

          <div>
            <h2 className="hh-section-heading">Perfect for</h2>
            <ul className="mt-6 space-y-3">
              {eventTypes.map((type) => (
                <li key={type} className="text-hh-muted">
                  · {type}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-hh-muted">
              Promoters and press can find photos, tech details, and more in the{" "}
              <Link to={routes.epk} className="hh-accent-link">
                electronic press kit
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
