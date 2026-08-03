/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import eyesAngry from "../../../assets/projects/eyes-angry.webp";
import { useLanguage } from "../../../i18n/LanguageContext";
import "./portfolioWarning.css";

const PortfolioWarning = ({ onClose }) => {
  const { t } = useLanguage();
  return createPortal(
    <>
      <button type="button" className="portfolio-warning-backdrop" aria-label={t("warning.close")} onClick={onClose} />
      <div className="portfolio-warning" role="status" aria-live="polite">
        <img src={eyesAngry} alt={t("warning.alt")} />
        <div>
          <strong>{t("warning.title")}</strong>
          <p>{t("warning.body")}</p>
        </div>
        <button type="button" onClick={onClose} aria-label={t("warning.close")}>×</button>
      </div>
    </>,
    document.body
  );
};

export default PortfolioWarning;
