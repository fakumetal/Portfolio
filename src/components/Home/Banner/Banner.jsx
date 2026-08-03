import { useEffect, useState } from "react";
import "./banner.css";
import eyes from "../../../assets/projects/eyes3.mp4";
import { usePortfolio } from "../Projects/PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isPortfolioDeleted } = usePortfolio();
  const { t } = useLanguage();
  useEffect(() => setIsVisible(true), []);

  return (
    <div className={`banner-content ${isVisible ? "show" : ""}`}>
      {isPortfolioDeleted ? <video src={eyes} className="eyes-video" autoPlay loop muted /> : <img className="console-icon" src={`${import.meta.env.BASE_URL}terminal-solid.svg`} alt="" aria-hidden="true" />}
      <p className="banner-eyebrow">{isPortfolioDeleted ? t("banner.eyebrowDeleted") : t("banner.eyebrow")}</p>
      <h1 className="banner-title">{isPortfolioDeleted ? t("banner.titleDeleted") : t("banner.title")}</h1>
      <p className="banner-description">{isPortfolioDeleted ? t("banner.descriptionDeleted") : t("banner.description")}</p>
      <div className="banner-actions">
        <a className="button button-primary" href="#proyectos">{t("banner.ctaProjects")}</a>
        <a className="button button-secondary" href="#contacto">{t("banner.ctaContact")}</a>
      </div>
    </div>
  );
};

export default Banner;
