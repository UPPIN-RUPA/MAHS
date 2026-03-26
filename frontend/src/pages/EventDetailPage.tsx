import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { EventItem } from "../types";

const emptyEvent: EventItem = {
  id: 0,
  title: "",
  slug: "",
  description: "",
  event_date: "",
  start_time: null,
  end_time: null,
  venue: "",
  cover_image: "",
  is_featured: false,
  status: "",
};

export function EventDetailPage() {
  const { slug = "" } = useParams();
  const { data } = useApiData(() => api.getEventDetail(slug), emptyEvent);

  return (
    <>
      <PageHero eyebrow="Event Detail" title={data.title || "Event"} description={data.venue ? `${data.event_date} · ${data.venue}` : "Detailed event information from the MAHS backend."} />
      <section className="content-section">
        <div className="container detail-shell">
          <article className="content-card detail-primary">
            {data.cover_image ? <div className="detail-image" style={{ backgroundImage: `linear-gradient(rgba(9, 28, 48, 0.18), rgba(9, 28, 48, 0.4)), url('${data.cover_image}')` }} /> : null}
            <p className="meta">
              {data.event_date}
              {data.start_time ? ` · ${data.start_time}` : ""}
              {data.end_time ? ` - ${data.end_time}` : ""}
            </p>
            <p>{data.description}</p>
          </article>
          <aside className="info-card detail-side">
            <p className="eyebrow">Event Info</p>
            <h3>{data.venue || "Venue to be announced"}</h3>
            <p>Status: {data.status || "upcoming"}</p>
            <Link className="text-link" to="/events">
              Back to events
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
