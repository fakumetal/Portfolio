import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './projects.css';
import { projectsData } from './ProjectsData';
import { usePortfolio } from './PortfolioContext';
import eyes2 from '../../../assets/projects/eyes-angry.webp';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hiddenProjects, setHiddenProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const { isPortfolioDeleted, setIsPortfolioDeleted, updatePortfolioDeleteCount } = usePortfolio();

  const modifiedProjectsData = projectsData.map(project => {
    if (project.title === "Portfolio") {
      return {
        ...project,
        title: isPortfolioDeleted ? "Portfolio" : "Portfolio",
        backgroundImage: isPortfolioDeleted ? [eyes2] : project.backgroundImage,
        description: isPortfolioDeleted
          ? "¿ Otra vez aquí ? Piensa bien en tu decisión y actúa con precaución. No te atrevas"
          : project.description,
        images: isPortfolioDeleted ? [eyes2] : project.images,
      };
    }
    return project;
  });


  const title = isPortfolioDeleted ? "..." : "Algunos proyectos";
  const scrollToBanner = () => {
    const bannerSection = document.getElementById('banner');
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleDeleteProject = (projectTitle) => {
    setHiddenProjects([...hiddenProjects, projectTitle]);

    if (projectTitle === 'Portfolio' || projectTitle === 'Portfolio') {

      localStorage.setItem('isPortfolioDeleted', 'true');


      let deleteCount = parseInt(localStorage.getItem('portfolioDeleteCount'), 10) || 0;
      deleteCount += 1;
      updatePortfolioDeleteCount(deleteCount);

      setIsPortfolioDeleted(true);
      scrollToBanner();


    }

    setSelectedProject(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <h2 className='project-title'>{title}</h2>

      <div className="projects-container">
        {(showAllProjects ? modifiedProjectsData : modifiedProjectsData.slice(0, 9)).map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(project)}
            className={hiddenProjects.includes(project.title) ? 'hidden' : ''}
          >
            <ProjectCard
              title={project.title}
              backgroundImage={project.backgroundImage}
              isInDevelopment={project.isInDevelopment}
              onDelete={handleDeleteProject}
            />
          </div>
        ))}
      </div>

      {modifiedProjectsData.length > 9 && (
        <button 
          className="see-more-btn" 
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? 'Ver menos' : 'Ver más'}
        </button>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onDelete={handleDeleteProject}
        />
      )}
    </section>
  );
};

export default Projects;
