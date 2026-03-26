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
        <div className="container stack-list">
          <article className="content-card">
            <p>{data.content}</p>
            <Link className="text-link" to="/academics">
              Back to academics
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
