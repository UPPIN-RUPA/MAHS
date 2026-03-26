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
        <div className="container stack-list">
          <article className="content-card">
            <p>{data.description}</p>
            <Link className="text-link" to="/events">
              Back to events
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
