import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../Projects/PortfolioContext';  
import "./banner.css";
import eyes from '../../../assets/projects/eyes3.mp4'; 

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [visibleIcons, setVisibleIcons] = useState(0);
  const { isPortfolioDeleted } = usePortfolio();

 
  const fullTitle = isPortfolioDeleted ? "Hola humano! Soy el portfolio que quieres eliminar" : "Hola, soy Facu";
  const fullDescription = isPortfolioDeleted ? "[Bip Bop] Aunque tal vez lo hiciste por error, te lo advierto: no lo intentes nuevamente..." : "Desarrollador FullStack especializado en React para web, móvil y desktop.";

  const icons = [
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

  useEffect(() => {
    setIsVisible(true);

   
    let titleIndex = 0;
    const typeTitle = () => {
      if (titleIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
        setTimeout(typeTitle, 30);
      }
    };
    typeTitle();

 
    let iconIndex = 0;
    const showIcons = () => {
      if (iconIndex < icons.length) {
        setVisibleIcons(iconIndex + 1); 
        iconIndex++;
        setTimeout(showIcons, 50);  
      }
    };
    showIcons();
  }, [fullTitle]);

  return (
    <div className="banner" id='banner'>
      <div className="banner-overlay"></div>
      <div className={`banner-content ${isVisible ? 'show' : ''}`}>
   
        {isPortfolioDeleted ? (
    <video src={eyes} alt="eyes video" className="eyes-video" autoPlay loop muted />
        ) : (
         <img  className="console-icon" src="./terminal-solid.svg" alt="Terminal Icon" />   
        )}
        
        <h1 className="banner-title">
          {displayedTitle}<span className="dot">.</span>
        </h1>
        <p className="banner-description">{fullDescription}</p>
        <br />

        <div className="skills-icons">
          {icons.map((iconClass, index) => (
            <i
              key={index}
              className={iconClass + (index < visibleIcons ? ' show' : '')}
              title={iconClass.split(' ')[1].replace('fa-', '').toUpperCase()}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
