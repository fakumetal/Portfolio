import { useEffect, useRef, useState } from "react";
import "./header.css";
import profileImage from "../../assets/projects/1.webp";
import deletedPortfolioImg from "../../assets/projects/eyes-happy.webp";
import { usePortfolio } from "../Home/Projects/PortfolioContext";
import { useLanguage } from "../../i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isPortfolioDeleted } = usePortfolio();
  const { lang, setLang, t } = useLanguage();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <button className="logo" type="button" onClick={() => goTo("inicio")} aria-label={t("header.goHome")}>
        <img src={isPortfolioDeleted ? deletedPortfolioImg : profileImage} alt={isPortfolioDeleted ? "Portfolio" : "Facundo Journade"} className="profile-img" />
        <span className="name">{isPortfolioDeleted ? "Portfolio" : "Facundo Journade"}</span>
      </button>
      <nav id="site-navigation" ref={menuRef} className={`nav ${isMenuOpen ? "open" : ""}`} aria-label={t("header.navLabel")}>
        <button type="button" onClick={() => goTo("inicio")}>{t("header.home")}</button>
        <button type="button" onClick={() => goTo("perfil")}>{t("header.profile")}</button>
        <button type="button" onClick={() => goTo("proyectos")}>{t("header.projects")}</button>
        <button type="button" onClick={() => goTo("contacto")}>{t("header.contact")}</button>
      </nav>
      <div className="header-actions">
        <div className="lang-switch" role="group" aria-label={t("header.langLabel")}>
          <button type="button" className={lang === "es" ? "is-active" : ""} onClick={() => setLang("es")} aria-pressed={lang === "es"}>{t("header.langEs")}</button>
          <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>{t("header.langEn")}</button>
        </div>
        <button className="hamburger" type="button" onClick={() => setIsMenuOpen((open) => !open)} ref={buttonRef} aria-expanded={isMenuOpen} aria-controls="site-navigation" aria-label={t("header.openNav")}>☰</button>
      </div>
    </header>
  );
};

export default Header;
