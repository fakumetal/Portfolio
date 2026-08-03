import { useLanguage } from "../../../i18n/LanguageContext";
import "./process.css";

const STEPS = ["discover", "design", "build", "ship"];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="process" aria-labelledby="process-title">
      <div className="process-heading">
        <p className="projects-eyebrow">{t("process.eyebrow")}</p>
        <h2 id="process-title">{t("process.title")}</h2>
        <p className="process-lead">{t("process.description")}</p>
      </div>
      <ol className="process-timeline">
        {STEPS.map((step, index) => (
          <li key={step} className="process-step" style={{ "--step": index }}>
            <span className="process-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="process-card">
              <h3>{t(`process.steps.${step}.title`)}</h3>
              <p>{t(`process.steps.${step}.body`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;
