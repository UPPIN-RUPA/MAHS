import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SectionCard } from "../components/SectionCard";
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
  const heroStats = [
    { value: `${featuredAnnouncements.length || 0}`, label: "Active notices" },
    { value: `${featuredEvents.length || 0}`, label: "Visible events" },
    { value: `${featuredGallery.length || 0}`, label: "Featured moments" },
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
      <section className="hero">
        <div className="container">
          <div className="hero-carousel-shell">
            <Swiper className="hero-carousel" modules={[Autoplay, Pagination]} autoplay={{ delay: 4500, disableOnInteraction: false }} pagination={{ clickable: true }} loop>
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.key}>
                  <article
                    className={`hero-slide tone-${slide.tone}`}
                    style={
                      slide.image
                        ? {
                            backgroundImage: `linear-gradient(120deg, rgba(10, 24, 45, 0.78), rgba(10, 24, 45, 0.38)), url('${slide.image}')`,
                          }
                        : undefined
                    }
                  >
                    <div className="hero-slide-copy">
                      <p className="eyebrow">{slide.eyebrow}</p>
                      <h1>{slide.title}</h1>
                      <p className="lead">{slide.description}</p>
                      <div className="button-row">
                        <Link className="button primary" to={slide.ctaTo}>
                          {slide.ctaLabel}
                        </Link>
                        <Link className="button secondary" to="/announcements">
                          Latest updates
                        </Link>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <aside className="hero-card hero-side-panel">
              <h2>{site.data.school_name}</h2>
              <p className="card-kicker">{site.data.tagline || "A connected school experience"}</p>
              <ul>
                <li>Professional public website</li>
                <li>API-first backend content system</li>
                <li>School announcements and events visibility</li>
                <li>Admin-managed updates without code edits</li>
              </ul>
            </aside>
          </div>
          <div className="hero-stat-row">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container showcase-grid">
          <article className="showcase-card">
            <p className="eyebrow">Welcome</p>
            <h2>One digital home for students, staff, and alumni.</h2>
            <p>
              MAHS is designed to work as the school’s communication layer, not just its public brochure. Announcements,
              events, academics, and school identity now live in one platform.
            </p>
          </article>
          <article className="showcase-card accent">
            <p className="eyebrow">Principal Message</p>
            <h2>{site.data.principal_name || "School Leadership"}</h2>
            <p>{site.data.principal_message || "This section can carry a principal or leadership message pulled directly from the backend."}</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Announcements</p>
            <h2>Latest updates</h2>
          </div>
          <Link className="text-link" to="/announcements">
            All notices
          </Link>
        </div>
        <div className="container card-grid">
          {featuredAnnouncements.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={`${item.category} · ${new Date(item.publish_date).toLocaleDateString()}`}>
              <p>{item.summary}</p>
              <Link className="text-link" to={`/announcements/${item.slug}`}>
                Read notice
              </Link>
            </SectionCard>
          ))}
          {!featuredAnnouncements.length && <SectionCard title="No announcements yet">Add content in Django admin to populate the homepage.</SectionCard>}
        </div>
      </section>

      <section className="content-section alt">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Events</p>
            <h2>School calendar highlights</h2>
          </div>
          <Link className="text-link" to="/events">
            Event calendar
          </Link>
        </div>
        <div className="container card-grid">
          {featuredEvents.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={`${item.event_date} · ${item.venue}`}>
              <p>{item.description}</p>
              <Link className="text-link" to={`/events/${item.slug}`}>
                Event details
              </Link>
            </SectionCard>
          ))}
          {!featuredEvents.length && <SectionCard title="No events yet">Upcoming programs and celebrations will appear here.</SectionCard>}
        </div>
      </section>

      <section className="content-section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>School life highlights</h2>
          </div>
          <Link className="text-link" to="/gallery">
            Open gallery
          </Link>
        </div>
        <div className="container gallery-grid">
          {featuredGallery.map((item) => (
            <article key={item.id} className="gallery-card" style={{ backgroundImage: `linear-gradient(rgba(9, 28, 48, 0.55), rgba(9, 28, 48, 0.8)), url('${item.image}')` }}>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </article>
          ))}
          {!featuredGallery.length && (
            <article className="gallery-card placeholder">
              <h3>Gallery preview</h3>
              <p>Featured gallery content will appear here after backend data is added.</p>
            </article>
          )}
        </div>
      </section>

      <section className="content-section alt">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Community</p>
            <h2>Built to grow beyond a brochure site.</h2>
          </div>
        </div>
        <div className="container three-up">
          <article className="info-card">
            <h3>Students</h3>
            <p>Clear access to school updates, academic information, and events from a mobile-friendly public platform.</p>
          </article>
          <article className="info-card">
            <h3>Administration</h3>
            <p>Django admin keeps content current without developers having to update static pages manually.</p>
          </article>
          <article className="info-card">
            <h3>Future Alumni Layer</h3>
            <p>The architecture is ready to grow into alumni profiles, networking, and deeper school-community participation.</p>
          </article>
        </div>
      </section>
    </>
  );
}
