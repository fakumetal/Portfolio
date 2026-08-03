/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./projectCard.css";
import { useLanguage } from "../../../i18n/LanguageContext";

const ProjectCard = ({
  title,
  tagline,
  technologies = [],
  backgroundImage,
  isLogo = false,
  isCorrupted = false,
  wide = false,
  index = 0,
  onClick,
}) => {
  const { t } = useLanguage();
  const tiltRef = useRef(null);
  const chips = technologies.slice(0, 3);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  const onPointerMove = (event) => {
    const el = tiltRef.current;
    if (!el || isCorrupted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    el.style.setProperty("--tilt-x", `${(-py * 6).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 7).toFixed(2)}deg`);
    el.style.setProperty("--shine-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--shine-y", `${(y / rect.height) * 100}%`);
  };

  const onPointerLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      className={`project-card ${isLogo ? "is-logo" : ""} ${isCorrupted ? "is-corrupted" : ""} ${wide ? "is-wide" : ""}`}
      style={{ "--stagger": `${Math.min(index, 8) * 55}ms` }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      role="button"
      tabIndex={0}
      aria-label={t("projects.openProject", { title })}
    >
      <div ref={tiltRef} className="project-card-tilt">
        <div className="project-card-shine" aria-hidden="true" />
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
          {tagline && <p className="project-card-tagline">{tagline}</p>}
          {chips.length > 0 && (
            <ul className="project-card-chips" aria-label={t("modal.technologies")}>
              {chips.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          )}
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
      </div>
    </article>
  );
};

export default ProjectCard;
