import { Link } from "react-router-dom";

const highlightCards = [
  {
    title: "Academics",
    text: "Explore learning pathways, academic priorities, and structured school programs.",
    link: "/academics",
    label: "Explore",
    rotation: -12,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 8.2V15c0 2.6 3.1 4 6 4s6-1.4 6-4v-3.8l-6 3-6-3Z" />
      </svg>
    ),
  },
  {
    title: "Announcements",
    text: "Keep students, staff, and families aligned with current notices and updates.",
    link: "/announcements",
    label: "Read",
    rotation: 0,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v10H7l-3 3V5Zm4 3v2h8V8H8Zm0 4v2h5v-2H8Z" />
      </svg>
    ),
  },
  {
    title: "Events",
    text: "Follow celebrations, school activities, and calendar moments that shape campus life.",
    link: "/events",
    label: "View",
    rotation: 12,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm12 8H5v10h14V10ZM7 13h4v4H7v-4Z" />
      </svg>
    ),
  },
];

export function GlassHighlights() {
  return (
    <section className="homepage-section">
      <div className="container section-header">
        <div>
          <span className="section-kicker">Quick Access</span>
          <h2>Navigate the school hub faster.</h2>
          <p>These highlight cards keep the most important parts of the platform within immediate reach.</p>
        </div>
      </div>
      <div className="container">
        <div className="glass-highlights">
          {highlightCards.map((card) => (
            <article key={card.title} className="glass-highlight-card" style={{ ["--r" as string]: card.rotation }}>
              <div className="glass-highlight-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.link} className="text-link">
                {card.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
