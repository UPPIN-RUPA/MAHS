import { useMemo } from "react";
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
  address: "",
  phone: "",
  email: "",
  principal_message: "",
  about_text: "",
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

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">MAHS School Platform</p>
            <h1>{site.data.hero_title}</h1>
            <p className="lead">{site.data.hero_subtitle}</p>
          </div>
          <div className="hero-card">
            <h2>Phase 1 Focus</h2>
            <ul>
              <li>Professional public website</li>
              <li>API-first backend content system</li>
              <li>School announcements and events visibility</li>
              <li>Admin-managed updates without code edits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Announcements</p>
            <h2>Latest updates</h2>
          </div>
        </div>
        <div className="container card-grid">
          {featuredAnnouncements.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={item.category}>
              <p>{item.summary}</p>
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
        </div>
        <div className="container card-grid">
          {featuredEvents.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={`${item.event_date} · ${item.venue}`}>
              <p>{item.description}</p>
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
    </>
  );
}
