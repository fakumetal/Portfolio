import "./techMarquee.css";

const TECH = [
  "React",
  "Next.js",
  "Vue 3",
  "TypeScript",
  "React Native",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "Railway",
  "Cloudflare",
  "AWS S3",
  "CI/CD",
];

const TechMarquee = () => {
  const items = [...TECH, ...TECH];
  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee-fade tech-marquee-fade-left" />
      <div className="tech-marquee-track">
        {items.map((tech, index) => (
          <span key={`${tech}-${index}`} className="tech-marquee-item">
            {tech}
            <span className="tech-marquee-dot" />
          </span>
        ))}
      </div>
      <div className="tech-marquee-fade tech-marquee-fade-right" />
    </div>
  );
};

export default TechMarquee;
