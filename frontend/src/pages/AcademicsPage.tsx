import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { SectionCard } from "../components/SectionCard";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { AcademicsContent } from "../types";

export function AcademicsPage() {
  const { data } = useApiData<AcademicsContent[]>(api.getAcademics, []);

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Academic pathways, programs, and learning priorities."
        description="This section is designed to present the school’s academic structure clearly and can expand into richer curriculum and department views later."
      />
      <section className="content-section">
        <div className="container card-grid">
          {data.map((item) => (
            <SectionCard key={item.id} title={item.title}>
              <p>{item.summary || item.content}</p>
              <Link className="text-link" to={`/academics/${item.slug}`}>
                Read more
              </Link>
            </SectionCard>
          ))}
          {!data.length && <SectionCard title="No academic sections yet">Academic content from the backend will appear here.</SectionCard>}
        </div>
      </section>
    </>
  );
}
