import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { SectionCard } from "../components/SectionCard";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { Announcement } from "../types";

export function AnnouncementsPage() {
  const { data } = useApiData<Announcement[]>(api.getAnnouncements, []);

  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="School notices and important updates in one place."
        description="This module gives the administration a reliable way to publish timely communication through Django admin while the public site consumes the data through the API."
      />
      <section className="content-section">
        <div className="container stack-list">
          {data.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={`${item.category} · ${new Date(item.publish_date).toLocaleDateString()}`}>
              <p>{item.summary}</p>
              <Link className="text-link" to={`/announcements/${item.slug}`}>
                Read more
              </Link>
            </SectionCard>
          ))}
          {!data.length && <SectionCard title="No announcements published">Published announcements will appear here once the backend is populated.</SectionCard>}
        </div>
      </section>
    </>
  );
}
