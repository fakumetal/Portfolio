/* eslint-disable react/prop-types */
import "./projectCard.css";
import { useLanguage } from "../../../i18n/LanguageContext";

const ProjectCard = ({
  title,
  backgroundImage,
  isLogo = false,
  isCorrupted = false,
  index = 0,
  onClick,
}) => {
  const { t } = useLanguage();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <article
      className={`project-card ${isLogo ? "is-logo" : ""} ${isCorrupted ? "is-corrupted" : ""}`}
      style={{ "--stagger": `${Math.min(index, 8) * 55}ms` }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={t("projects.openProject", { title })}
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

      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-card-cta">
          {t("projects.viewProject")}
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
