import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type HeroStat = {
  value: string;
  label: string;
};

type CarouselSlide = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  image: string;
  tone: string;
};

type HomeCarouselProps = {
  schoolName: string;
  tagline: string;
  slides: CarouselSlide[];
  stats: HeroStat[];
};

export function HomeCarousel({ schoolName, tagline, slides, stats }: HomeCarouselProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-carousel-shell">
          <Swiper className="hero-carousel" modules={[Autoplay, Pagination]} autoplay={{ delay: 4500, disableOnInteraction: false }} pagination={{ clickable: true }} loop>
            {slides.map((slide) => (
              <SwiperSlide key={slide.key}>
                <article
                  className={`hero-slide tone-${slide.tone}`}
                  style={
                    slide.image
                      ? {
                          backgroundImage: `linear-gradient(120deg, rgba(10, 24, 45, 0.78), rgba(10, 24, 45, 0.38)), url('${slide.image}')`,
                        }
                      : undefined
                  }
                >
                  <div className="hero-slide-copy">
                    <p className="eyebrow">{slide.eyebrow}</p>
                    <h1>{slide.title}</h1>
                    <p className="lead">{slide.description}</p>
                    <div className="button-row">
                      <Link className="button primary" to={slide.ctaTo}>
                        {slide.ctaLabel}
                      </Link>
                      <Link className="button secondary" to="/announcements">
                        Latest updates
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <aside className="hero-card hero-side-panel">
            <h2>{schoolName}</h2>
            <p className="card-kicker">{tagline || "A connected school experience"}</p>
            <ul>
              <li>Professional public website</li>
              <li>API-first backend content system</li>
              <li>School announcements and events visibility</li>
              <li>Admin-managed updates without code edits</li>
            </ul>
          </aside>
        </div>
        <div className="hero-stat-row">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
