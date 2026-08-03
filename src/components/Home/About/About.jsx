import { useState } from "react";
import "./about.css";
import { usePortfolio } from "../Projects/PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";

const About = () => {
  const { isPortfolioDeleted } = usePortfolio();
  const { t, dict } = useLanguage();
  const skillGroups = dict.about.skillGroups;
  const highlights = dict.about.experienceHighlights;
  const [activeGroup, setActiveGroup] = useState(0);
  const currentGroup = skillGroups[activeGroup] || skillGroups[0];

  return (
    <section id="about" className={`about ${isPortfolioDeleted ? "is-deleted" : ""}`}>
      <div className="about-profile">
        <div className="about-profile-copy">
          <p className="about-eyebrow">
            {isPortfolioDeleted ? t("about.eyebrowDeleted") : t("about.eyebrow")}
          </p>
          <h2>{isPortfolioDeleted ? t("about.titleDeleted") : t("about.title")}</h2>
          {!isPortfolioDeleted && <p className="about-signature">{t("about.signature")}</p>}
          <p className="about-text">
            {isPortfolioDeleted ? t("about.descriptionDeleted") : t("about.description")}
          </p>
        </div>

        <article className="experience-spotlight">
          <div className="experience-spotlight-glow" aria-hidden="true" />
          <p className="about-eyebrow">{t("about.experienceEyebrow")}</p>
          <div className="experience-spotlight-header">
            <h3>UribaSoft</h3>
            <span className="experience-period">{t("about.experiencePeriod")}</span>
          </div>
          <p className="experience-role">{t("about.experienceRole")}</p>
          <p className="experience-body">{t("about.experienceBody")}</p>
          {!isPortfolioDeleted && (
            <ul className="experience-highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <a
            href="https://www.uribasoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
            {t("about.visitUribaSoft")}
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>

      <div className="about-stack">
        <div className="about-stack-heading">
          <p className="about-eyebrow">{t("about.stackEyebrow")}</p>
          <h3>{t("about.skillsTitle")}</h3>
          <p className="about-stack-lead">{t("about.stackLead")}</p>
        </div>

        <div className="stack-tabs" role="tablist" aria-label={t("about.skillsTitle")}>
          {skillGroups.map((group, index) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`stack-tab-${group.id}`}
              aria-selected={activeGroup === index}
              aria-controls={`stack-panel-${group.id}`}
              className={`stack-tab ${activeGroup === index ? "is-active" : ""}`}
              onClick={() => setActiveGroup(index)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div
          className="stack-panel"
          role="tabpanel"
          id={`stack-panel-${currentGroup.id}`}
          aria-labelledby={`stack-tab-${currentGroup.id}`}
          key={currentGroup.id}
        >
          <div className="skills-grid">
            {currentGroup.skills.map((skill, index) => (
              <span
                key={skill.name}
                className="skill-box"
                style={{ "--i": index }}
                title={skill.usedIn ? `${t("about.usedIn")} ${skill.usedIn}` : undefined}
              >
                <span className="skill-name">{skill.name}</span>
                {skill.usedIn && (
                  <span className="skill-used">{skill.usedIn}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
