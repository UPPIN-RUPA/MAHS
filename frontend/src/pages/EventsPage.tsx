import { PageHero } from "../components/PageHero";
import { SectionCard } from "../components/SectionCard";
import { useApiData } from "../hooks/useApiData";
import { api } from "../services/api";
import type { EventItem } from "../types";

export function EventsPage() {
  const { data } = useApiData<EventItem[]>(api.getEvents, []);

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Programs, celebrations, and campus activities."
        description="Events give students, parents, and staff shared visibility into school life and are one of the key public communication modules in the MAHS MVP."
      />
      <section className="content-section">
        <div className="container card-grid">
          {data.map((item) => (
            <SectionCard key={item.id} title={item.title} meta={`${item.event_date} · ${item.venue}`}>
              <p>{item.description}</p>
            </SectionCard>
          ))}
          {!data.length && <SectionCard title="No events scheduled">The event calendar will populate once content is added through admin.</SectionCard>}
        </div>
      </section>
    </>
  );
}
