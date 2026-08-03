import "./contact.css";
import { usePortfolio } from "../Projects/PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";
import cvFile from "../../../assets/CV_Facundo_Journade_2026.pdf";

const Contact = () => {
  const { isPortfolioDeleted } = usePortfolio();
  const { t } = useLanguage();
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <p className="projects-eyebrow">{isPortfolioDeleted ? t("contact.eyebrowDeleted") : t("contact.eyebrow")}</p>
      <h2 id="contact-title">{isPortfolioDeleted ? t("contact.titleDeleted") : t("contact.title")}</h2>
      <p>{isPortfolioDeleted ? t("contact.descriptionDeleted") : t("contact.description")}</p>
      <div className="contact-info">
        <a href="mailto:faku.metal@gmail.com" className="contact-item email"><i className="fa-solid fa-envelope" aria-hidden="true" /><span>{t("contact.email")}</span></a>
        <a href="https://wa.me/542664894519" className="contact-item whatsapp" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>{t("contact.whatsapp")}</span></a>
        <a href={cvFile} download="CV_Facundo_Journade_2026.pdf" className="contact-item cv"><i className="fa-solid fa-file-arrow-down" aria-hidden="true" /><span>{t("contact.cv")}</span></a>
      </div>
    </section>
  );
};

export default Contact;
