import { Link } from "react-router-dom";
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
        description="Festivals, venues, private events, and media inquiries — we'd love to hear from you."
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
              <p className="mt-2 text-sm text-hh-muted">All booking inquiries</p>
            </address>
            <div className="mt-8 border-t border-white/10 pt-6">
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
