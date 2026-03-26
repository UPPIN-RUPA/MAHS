type StatItem = {
  value: string;
  label: string;
  description: string;
};

type HomeStatsProps = {
  stats: StatItem[];
};

export function HomeStats({ stats }: HomeStatsProps) {
  return (
    <section className="home-stats-section">
      <div className="container home-stats-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="home-stat-card">
            <p className="home-stat-value">{stat.value}</p>
            <h3>{stat.label}</h3>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
