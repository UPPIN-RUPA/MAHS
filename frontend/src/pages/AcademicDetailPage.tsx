import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { AcademicsContent } from "../types";

const emptyAcademic: AcademicsContent = {
  id: 0,
  title: "",
  slug: "",
  summary: "",
  content: "",
  display_order: 0,
  is_active: true,
};

export function AcademicDetailPage() {
  const { slug = "" } = useParams();
  const { data } = useApiData(() => api.getAcademicDetail(slug), emptyAcademic);

  return (
    <>
      <PageHero eyebrow="Academic Detail" title={data.title || "Academic section"} description={data.summary || "Detailed academic content from the MAHS backend."} />
      <section className="content-section">
        <div className="container detail-shell">
          <article className="content-card detail-primary">
            <p>{data.content}</p>
          </article>
          <aside className="info-card detail-side">
            <p className="eyebrow">Navigate</p>
            <h3>Academic overview</h3>
            <p>This detail page is intended for richer curriculum, department, or program content.</p>
            <Link className="text-link" to="/academics">
              Back to academics
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
