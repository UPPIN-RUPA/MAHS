const featureCards = [
  {
    title: "Excellence",
    strong: "Strong academic standards",
    text: "Students are encouraged to pursue mastery, discipline, and consistent growth in every learning area.",
    tag: "Learning Culture",
  },
  {
    title: "Character",
    strong: "Values-led development",
    text: "School life is shaped around responsibility, respect, confidence, and personal integrity.",
    tag: "Student Growth",
  },
  {
    title: "Community",
    strong: "Connection beyond classrooms",
    text: "Events, communication, and participation help families, staff, and students stay meaningfully connected.",
    tag: "School Life",
  },
];

export function FeatureGlowCards() {
  return (
    <section className="homepage-section">
      <div className="container section-header">
        <div>
          <span className="section-kicker">School Values</span>
          <h2>What MAHS is built around.</h2>
          <p>These spotlight cards add a stronger visual layer to the school identity without turning the homepage into noise.</p>
        </div>
      </div>
      <div className="container feature-glow-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="feature-glow">
            <div className="feature-glow-card">
              <h3 className="feature-glow-title">{card.title}</h3>
              <div>
                <strong>{card.strong}</strong>
                <p>{card.text}</p>
                <span>{card.tag}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
