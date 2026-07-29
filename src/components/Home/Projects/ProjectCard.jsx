import "./projectCard.css";

const ProjectCard = ({
  title,
  backgroundImage,
  isInDevelopment,
  isLogo = false,
  index = 0,
  onClick,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <article
      className={`project-card ${isLogo ? "is-logo" : ""}`}
      style={{ "--stagger": `${Math.min(index, 8) * 55}ms` }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Abrir ${title}`}
    >
      <div className="project-card-media">
        {isLogo ? (
          <div className="project-card-logo-panel">
            <img
              src={backgroundImage}
              alt=""
              className="project-card-image"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={backgroundImage}
            alt=""
            className="project-card-image"
            loading="lazy"
          />
        )}
        <div className="project-card-gradient" aria-hidden="true" />
      </div>

      {isInDevelopment && (
        <span className="project-card-badge">En desarrollo</span>
      )}

      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-card-cta">
          Ver proyecto
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
