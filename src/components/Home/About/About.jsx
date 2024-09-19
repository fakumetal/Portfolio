import React, { useEffect, useState } from "react";
import { usePortfolio } from '../Projects/PortfolioContext';
import './about.css'
const DELAY_BETWEEN_ICONS = 50;

const getIcons = () => [
  "fab fa-react",
  "fab fa-js-square",
  "fab fa-css3-alt",
  "fab fa-html5",
  "fa-solid fa-database",
  "fab fa-node",
  "fab fa-aws",
  "fas fa-fire",
  "fab fa-github",
  "fa-solid fa-code-branch"
];

const getSkills = () => [
  'React',
  'HTML',
  'CSS3',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'Linux',
  'Material-UI',
  'Node.js',
  'Socket.io',
  'MongoDB',
  'Express.js',
  'VPS',
  'React Native',
  'Ionic',
  'Firebase (Firestore, Authentication)',
  'Electron',
  'MySQL',
  'AWS (EC2, Lightsail, RDS)',
  'Git',
  'GitHub',
];

const getTitle = (isPortfolioDeleted) => (isPortfolioDeleted ? "Sobre mi creador..." : "Sobre Mí");

const getAboutStyle = (isPortfolioDeleted) => ({
  backgroundColor: isPortfolioDeleted ? 'black' : '#333333',
  color: isPortfolioDeleted ? 'white' : 'white',
});

const getSkillsContent = () => (
  <div className="skills-grid">
    {getSkills().map((skill, index) => (
      <div key={index} className="skill-box">
        {skill}
      </div>
    ))}
  </div>
);

const getIconsContent = (icons, visibleIcons) => (
  <div className="skills-icons">
    {icons.map((iconClass, index) => (
      <i
        key={index}
        className={iconClass + (index < visibleIcons ? ' show' : '')}
        title={iconClass.split(' ')[1].replace('fa-', '').toUpperCase()}
      ></i>
    ))}
  </div>
);

const About = () => {
  const [visibleIcons, setVisibleIcons] = useState(0);
  const { isPortfolioDeleted } = usePortfolio();

  useEffect(() => {
    let iconIndex = 0;
    const showIcons = () => {
      if (iconIndex < getIcons().length) {
        setVisibleIcons(iconIndex + 1);
        iconIndex++;
        setTimeout(showIcons, DELAY_BETWEEN_ICONS);
      }
    };
    showIcons();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container" style={getAboutStyle(isPortfolioDeleted)}>
        <div className="about-description">
          <h2>{getTitle(isPortfolioDeleted)}</h2>
          <p>
            Soy un Desarrollador Full Stack con una sólida experiencia en React
            y las últimas tecnologías. Me especializo en construir aplicaciones
            web que sean tanto responsivas como eficientes, y en gestionar bases
            de datos para que todo funcione a la perfección. Además, tengo
            experiencia en el desarrollo de aplicaciones móviles usando Ionic y
            React Native, y aplicaciones de escritorio con Electron. Me
            encanta asegurar que cada proyecto tenga una solución escalable y
            adaptada a sus necesidades.
          </p>
          {getIconsContent(getIcons(), visibleIcons)}
        </div>
        <div className="about-skills">
          <h3>Habilidades Técnicas</h3>
          {getSkillsContent()}
        </div>
      </div>
    </section>
  );
};

export default About;