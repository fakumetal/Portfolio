import { useEffect, useState } from "react";
import "./about.css";
import { usePortfolio } from "../Projects/PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";

const DELAY_BETWEEN_ICONS = 50;

const ICONS = [
  "fab fa-react",
  "fab fa-js-square",
  "fab fa-css3-alt",
  "fab fa-html5",
  "fa-solid fa-database",
  "fab fa-node",
  "fab fa-aws",
  "fas fa-fire",
  "fab fa-github",
  "fa-solid fa-code-branch",
];

const About = () => {
  const [visibleIcons, setVisibleIcons] = useState(0);
  const { isPortfolioDeleted } = usePortfolio();
  const { t, dict } = useLanguage();
  const skillGroups = dict.about.skillGroups;

  useEffect(() => {
    let iconIndex = 0;
    const showIcons = () => {
      if (iconIndex < ICONS.length) {
        setVisibleIcons(iconIndex + 1);
        iconIndex++;
        setTimeout(showIcons, DELAY_BETWEEN_ICONS);
      }
    };
    showIcons();
  }, []);

  return (
    <section id="about" className="about">
      <div
        className={`about-container ${isPortfolioDeleted ? "is-deleted" : ""}`}
      >
        <div className="about-description">
          <p className="about-eyebrow">{isPortfolioDeleted ? t("about.eyebrowDeleted") : t("about.eyebrow")}</p>
          <h2>{isPortfolioDeleted ? t("about.titleDeleted") : t("about.title")}</h2>
          <p className="about-text">{isPortfolioDeleted ? t("about.descriptionDeleted") : t("about.description")}</p>
          <div className="skills-icons">
            {ICONS.map((iconClass, index) => (
              <i
                key={iconClass}
                className={`${iconClass}${index < visibleIcons ? " show" : ""}`}
                title={iconClass.split(" ")[1]?.replace("fa-", "").toUpperCase()}
              />
            ))}
          </div>
          <div className="experience-card">
            <p className="about-eyebrow">{t("about.experienceEyebrow")}</p>
            <h3>UribaSoft</h3>
            <p className="experience-role">{t("about.experienceRole")} <span>{t("about.experiencePeriod")}</span></p>
            <p>{t("about.experienceBody")}</p>
            <a href="https://www.uribasoft.com/" target="_blank" rel="noopener noreferrer">{t("about.visitUribaSoft")} <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="about-skills">
          <p className="about-eyebrow">{t("about.stackEyebrow")}</p>
          <h3>{t("about.skillsTitle")}</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h4 className="skill-group-label">{group.label}</h4>
                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-box">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
