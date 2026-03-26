import { Link } from "react-router-dom";

type LeadershipSectionProps = {
  principalName?: string;
  principalMessage?: string;
  schoolName?: string;
};

export function LeadershipSection({
  principalName = "School Leadership",
  principalMessage = "This section can carry a principal or leadership message pulled directly from the backend.",
  schoolName = "MAHS",
}: LeadershipSectionProps) {
  return (
    <section className="leadership-section">
      <div className="container leadership-grid">
        <div className="leadership-content">
          <span className="section-kicker">Leadership Message</span>
          <h2>Welcome to {schoolName}</h2>
          <p className="leadership-message">{principalMessage}</p>

          <div className="leadership-signoff">
            <strong>{principalName}</strong>
            <span>Principal, {schoolName}</span>
          </div>

          <div className="leadership-actions">
            <Link to="/academics" className="button primary">
              Explore Academics
            </Link>
            <Link to="/contact" className="button btn-secondary-dark">
              Contact School
            </Link>
          </div>
        </div>

        <div className="leadership-panel">
          <div className="leadership-highlight-card">
            <span className="section-kicker">Why Families Choose MAHS</span>
            <ul>
              <li>Strong academic foundation with student-focused teaching</li>
              <li>Balanced development through sports, culture, and leadership</li>
              <li>Safe and supportive school environment</li>
              <li>Consistent communication through announcements and events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
