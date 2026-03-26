import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { Announcement } from "../types";

const emptyAnnouncement: Announcement = {
  id: 0,
  title: "",
  slug: "",
  summary: "",
  content: "",
  category: "",
  publish_date: "",
  expiry_date: null,
  is_published: true,
};

export function AnnouncementDetailPage() {
  const { slug = "" } = useParams();
  const { data } = useApiData(() => api.getAnnouncementDetail(slug), emptyAnnouncement);

  return (
    <>
      <PageHero eyebrow="Announcement Detail" title={data.title || "Announcement"} description={data.summary || "Detailed school notice content from the MAHS backend."} />
      <section className="content-section">
        <div className="container detail-shell">
          <article className="content-card detail-primary">
            <p className="meta">
              {data.category} {data.publish_date ? `· ${new Date(data.publish_date).toLocaleDateString()}` : ""}
            </p>
            <p>{data.content}</p>
          </article>
          <aside className="info-card detail-side">
            <p className="eyebrow">Notice Board</p>
            <h3>Back to school updates</h3>
            <p>Announcements are intended to carry notices, exam communication, admissions updates, and urgent school information.</p>
            <Link className="text-link" to="/announcements">
              Back to announcements
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
