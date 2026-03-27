import { Link } from "react-router-dom";
import { useMemo } from "react";
import { HomeCarousel } from "../components/HomeCarousel";
import { HomeStats } from "../components/HomeStats";
import { LeadershipSection } from "../components/LeadershipSection";
import { PencilLoader } from "../components/PencilLoader";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { Announcement, EventItem, GalleryItem, SiteSettings } from "../types";

const defaultSettings: SiteSettings = {
  school_name: "MAHS",
  tagline: "",
  logo: "",
  hero_title: "A modern school website built for communication and community.",
  hero_subtitle: "MAHS brings announcements, academics, events, gallery content, and school information into one digital platform.",
  about_title: "About Our School",
  address: "",
  phone: "",
  email: "",
  principal_name: "",
  principal_message: "",
  principal_photo: "",
  about_text: "",
  facebook_url: "",
  instagram_url: "",
  youtube_url: "",
  is_active: true,
  updated_at: null,
};

export function HomePage() {
  const site = useApiData(api.getSiteSettings, defaultSettings);
  const announcements = useApiData<Announcement[]>(api.getAnnouncements, []);
  const events = useApiData<EventItem[]>(api.getEvents, []);
  const gallery = useApiData<GalleryItem[]>(api.getGallery, []);

  const featuredEvents = useMemo(() => events.data.slice(0, 3), [events.data]);
  const featuredAnnouncements = useMemo(() => announcements.data.slice(0, 3), [announcements.data]);
  const featuredGallery = useMemo(() => gallery.data.filter((item) => item.is_featured).slice(0, 3), [gallery.data]);
  const galleryPreview = useMemo(() => gallery.data.slice(0, 6), [gallery.data]);
  const heroStats = [
    { value: `${featuredAnnouncements.length || 0}`, label: "Active notices" },
    { value: `${featuredEvents.length || 0}`, label: "Visible events" },
    { value: `${featuredGallery.length || 0}`, label: "Featured moments" },
  ];
  const schoolStats = [
    {
      value: `${featuredAnnouncements.length || 0}`,
      label: "Current notices",
      description: "Timely school updates and announcements are kept visible in one place.",
    },
    {
      value: `${featuredEvents.length || 0}`,
      label: "Event highlights",
      description: "Programs, celebrations, and important calendar moments stay easy to follow.",
    },
    {
      value: `${featuredGallery.length || 0}`,
      label: "Featured moments",
      description: "School life, campus culture, and activity highlights are surfaced visually.",
    },
    {
      value: site.data.principal_name ? "1" : "Live",
      label: "Leadership voice",
      description: "Principal messaging and school identity content come directly from the backend.",
    },
  ];
  const heroSlides = useMemo(() => {
    const galleryImages = featuredGallery.map((item) => item.image).filter(Boolean);
    const eventImage = featuredEvents.find((item) => item.cover_image)?.cover_image;

    return [
      {
        key: "identity",
        eyebrow: "MAHS School",
        title: site.data.hero_title || site.data.school_name,
        description: site.data.hero_subtitle || "A modern school platform for communication, academics, and community life.",
        ctaLabel: "Explore academics",
        ctaTo: "/academics",
        image: galleryImages[0] || eventImage || "",
        tone: "maroon",
      },
      {
        key: "admissions",
        eyebrow: "Admissions",
        title: "Admissions open for the 2026-27 academic year.",
        description: "Discover the MAHS learning environment, academic priorities, and student support experience.",
        ctaLabel: "Contact us",
        ctaTo: "/contact",
        image: galleryImages[1] || galleryImages[0] || "",
        tone: "gold",
      },
      {
        key: "events",
        eyebrow: "Events",
        title: featuredEvents[0]?.title || "Campus events that keep the school community connected.",
        description: featuredEvents[0]?.description || "From celebrations to student programs, the school calendar stays visible and accessible.",
        ctaLabel: "View events",
        ctaTo: "/events",
        image: eventImage || galleryImages[2] || "",
        tone: "navy",
      },
      {
        key: "community",
        eyebrow: "Community",
        title: "One platform for school updates, milestones, and everyday campus life.",
        description: "Announcements, events, academics, and gallery highlights now live in one place for students, staff, and families.",
        ctaLabel: "Open gallery",
        ctaTo: "/gallery",
        image: galleryImages[2] || galleryImages[0] || "",
        tone: "forest",
      },
    ];
  }, [featuredEvents, featuredGallery, site.data.hero_subtitle, site.data.hero_title, site.data.school_name]);

  return (
    <>
      <HomeCarousel schoolName={site.data.school_name} tagline={site.data.tagline} slides={heroSlides} stats={heroStats} />
      <HomeStats stats={schoolStats} />
      <LeadershipSection principalName={site.data.principal_name || "School Leadership"} principalMessage={site.data.principal_message || undefined} schoolName={site.data.school_name || "MAHS"} />

      <section className="homepage-section">
        <div className="container section-header">
          <div>
            <span className="section-kicker">Latest Updates</span>
            <h2>Announcements</h2>
            <p>Stay informed with the latest notices, academic updates, and school communications.</p>
          </div>
          <Link className="text-link" to="/announcements">
            View all announcements
          </Link>
        </div>
        <div className="container">
          {announcements.loading ? (
            <PencilLoader label="Loading announcements..." />
          ) : announcements.error ? (
            <p className="state-text">Unable to load announcements right now.</p>
          ) : featuredAnnouncements.length === 0 ? (
            <p className="state-text">No announcements available.</p>
          ) : (
            <div className="content-grid three-column-grid">
              {featuredAnnouncements.map((item) => (
                <article key={item.id} className="content-card">
                  <div className="content-meta-row">
                    <span className="content-chip">{item.category}</span>
                    <span className="content-date">{new Date(item.publish_date).toLocaleDateString()}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary || "Read the latest update from MAHS."}</p>
                  <Link className="text-link" to={`/announcements/${item.slug}`}>
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="homepage-section">
        <div className="container section-header">
          <div>
            <span className="section-kicker">Upcoming Activities</span>
            <h2>Events & School Life</h2>
            <p>Explore the events and celebrations that make school life engaging and memorable.</p>
          </div>
          <Link className="text-link" to="/events">
            View all events
          </Link>
        </div>
        <div className="container">
          {events.loading ? (
            <PencilLoader label="Loading events..." />
          ) : events.error ? (
            <p className="state-text">Unable to load events right now.</p>
          ) : featuredEvents.length === 0 ? (
            <p className="state-text">No events available.</p>
          ) : (
            <div className="content-grid three-column-grid">
              {featuredEvents.map((item) => (
                <article key={item.id} className="content-card event-card">
                  <div className="content-meta-row">
                    <span className="content-chip">{item.status}</span>
                    <span className="content-date">{new Date(item.event_date).toLocaleDateString()}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="event-mini-meta">
                    {item.venue ? <span>{item.venue}</span> : null}
                    {item.start_time ? <span>{item.start_time}</span> : null}
                  </div>
                  <Link className="text-link" to={`/events/${item.slug}`}>
                    View details
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="homepage-section">
        <div className="container section-header">
          <div>
            <span className="section-kicker">Campus Moments</span>
            <h2>Gallery Preview</h2>
            <p>Take a quick look at the activities, celebrations, and experiences that shape student life.</p>
          </div>
          <Link className="text-link" to="/gallery">
            Open full gallery
          </Link>
        </div>
        <div className="container">
          {gallery.loading ? (
            <PencilLoader label="Loading gallery..." />
          ) : gallery.error ? (
            <p className="state-text">Unable to load gallery right now.</p>
          ) : galleryPreview.length === 0 ? (
            <p className="state-text">No gallery items available.</p>
          ) : (
            <div className="gallery-preview-grid">
              {galleryPreview.map((item) => (
                <article key={item.id} className="gallery-preview-card">
                  <div className="gallery-preview-image-wrap">
                    <img src={item.image} alt={item.title} className="gallery-preview-image" />
                  </div>
                  <div className="gallery-preview-body">
                    <span className="content-chip">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="homepage-section community-section">
        <div className="container community-card">
          <div className="community-copy">
            <span className="section-kicker">School Community</span>
            <h2>Building a learning environment that extends beyond the classroom</h2>
            <p>
              MAHS supports academic growth, discipline, participation, and shared experiences through strong communication,
              meaningful events, and a connected school culture.
            </p>
          </div>
          <div className="community-actions">
            <Link to="/academics" className="button primary">
              Explore Academics
            </Link>
            <Link to="/contact" className="button btn-secondary-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
