import { useEffect, useState } from "react";
import { usePortfolio } from "../Projects/PortfolioContext";
import "./about.css";

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

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Vue 3", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Material-UI"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Socket.io", "Sequelize"],
  },
  {
    label: "Mobile & Desktop",
    skills: ["React Native", "Ionic", "Electron"],
  },
  {
    label: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Supabase", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "VPS", "Linux", "Git", "GitHub"],
  },
];

const DESCRIPTION =
  "Desarrollador Full Stack con experiencia en aplicaciones web, móviles y de escritorio, especializado en React, Next.js, Vue 3, React Native, Node.js y TypeScript. Experiencia en arquitecturas API-first, sistemas multi-tenant, APIs seguras, modelado de datos y optimización de soluciones productivas. Aplico Spec-Driven Development e inteligencia artificial supervisada para automatización, refactorización, testing y documentación. Perfil orientado a producto, con participación desde la definición funcional hasta el despliegue y evolución en producción.";

const About = () => {
  const [visibleIcons, setVisibleIcons] = useState(0);
  const { isPortfolioDeleted } = usePortfolio();

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
          <p className="about-eyebrow">Perfil</p>
          <h2>{isPortfolioDeleted ? "Sobre mi creador..." : "Sobre Mí"}</h2>
          <p className="about-text">{DESCRIPTION}</p>
          <div className="skills-icons">
            {ICONS.map((iconClass, index) => (
              <i
                key={iconClass}
                className={`${iconClass}${index < visibleIcons ? " show" : ""}`}
                title={iconClass.split(" ")[1]?.replace("fa-", "").toUpperCase()}
              />
            ))}
          </div>
        </div>

        <div className="about-skills">
          <p className="about-eyebrow">Stack</p>
          <h3>Habilidades Técnicas</h3>
          <div className="skill-groups">
            {SKILL_GROUPS.map((group) => (
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
