import { PageHero } from "../components/PageHero";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { GalleryItem } from "../types";

export function GalleryPage() {
  const { data } = useApiData<GalleryItem[]>(api.getGallery, []);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="School moments, celebrations, and achievements."
        description="The gallery is one of the strongest storytelling modules for the public site and will later support richer media handling beyond URL-based images."
      />
      <section className="content-section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">Campus Storytelling</p>
            <h2>Visual moments from the MAHS community.</h2>
          </div>
        </div>
        <div className="container gallery-grid">
          {data.map((item) => (
            <article key={item.id} className="gallery-card" style={{ backgroundImage: `linear-gradient(rgba(9, 28, 48, 0.55), rgba(9, 28, 48, 0.8)), url('${item.image}')` }}>
              <h3>{item.title}</h3>
              <p>{item.category}{item.related_event_title ? ` · ${item.related_event_title}` : ""}</p>
            </article>
          ))}
          {!data.length && (
            <article className="gallery-card placeholder">
              <h3>No gallery items yet</h3>
              <p>Gallery content from the API will appear here once the backend is populated.</p>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
