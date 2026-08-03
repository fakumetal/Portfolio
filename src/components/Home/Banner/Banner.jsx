import { useEffect, useRef, useState } from "react";
import "./banner.css";
import eyes from "../../../assets/projects/eyes3.mp4";
import { usePortfolio } from "../Projects/PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isPortfolioDeleted } = usePortfolio();
  const { t } = useLanguage();
  const spotlightRef = useRef(null);
  const title = isPortfolioDeleted ? t("banner.titleDeleted") : t("banner.title");
  const words = title.split(" ");

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={spotlightRef} className={`banner-content ${isVisible ? "show" : ""}`}>
      <div className="banner-spotlight" aria-hidden="true" />
      {isPortfolioDeleted ? (
        <video src={eyes} className="eyes-video" autoPlay loop muted />
      ) : (
        <img className="console-icon" src={`${import.meta.env.BASE_URL}terminal-solid.svg`} alt="" aria-hidden="true" />
      )}
      <p className="banner-eyebrow">{isPortfolioDeleted ? t("banner.eyebrowDeleted") : t("banner.eyebrow")}</p>
      <h1 className="banner-title" aria-label={title}>
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="banner-word-wrap">
            <span className="banner-word" style={{ "--i": index }}>
              {word}
            </span>
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </h1>
      <p className="banner-description">{isPortfolioDeleted ? t("banner.descriptionDeleted") : t("banner.description")}</p>
      <div className="banner-actions">
        <a className="button button-primary" href="#proyectos">
          <span>{t("banner.ctaProjects")}</span>
        </a>
        <a className="button button-secondary" href="#contacto">
          <span>{t("banner.ctaContact")}</span>
        </a>
      </div>
      <div className="banner-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </div>
  );
};

export default Banner;
