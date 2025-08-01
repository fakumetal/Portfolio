import React from 'react';
import './projectCard.css'; 

const ProjectCard = ({ title, backgroundImage, isInDevelopment }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 220px',    // La imagen se ajustará sin recortarse, pero puede dejar espacios vacíos
    backgroundPosition: 'center',
    width: '300px',
    height: '220px',
  };
  
  
  return (
    <div className="project-card" style={cardStyle}>
      <div className="project-card-overlay"></div>
      <h3 className="project-card-title">{title}</h3>
      {isInDevelopment && (
        <div className="project-card-status">
          <span>En desarrollo</span>
        </div>
      )}
      <div className="project-card-hover">
        <span>Ver más</span>
        
      </div>
    </div>
  );
};

export default ProjectCard;
