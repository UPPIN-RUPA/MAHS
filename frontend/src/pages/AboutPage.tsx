import { PageHero } from "../components/PageHero";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A school platform built around identity, communication, and community."
        description="MAHS is intended to represent the school professionally while creating a useful digital hub for students, alumni, staff, and administration."
      />
      <section className="content-section">
        <div className="container three-up">
          <article className="info-card">
            <h3>Mission</h3>
            <p>Support clear communication, meaningful education, and a stronger school community through a modern digital platform.</p>
          </article>
          <article className="info-card">
            <h3>Vision</h3>
            <p>Move beyond a static brochure site and create a school hub that can grow into accounts, alumni features, and community participation.</p>
          </article>
          <article className="info-card">
            <h3>Direction</h3>
            <p>Phase 1 keeps the scope focused on public pages and admin-managed content, with student and alumni modules reserved for later versions.</p>
          </article>
        </div>
      </section>
    </>
  );
}
