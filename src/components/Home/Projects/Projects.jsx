import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./projects.css";
import { projectsData } from "./ProjectsData";
import { usePortfolio } from "./PortfolioContext";
import eyes2 from "../../../assets/projects/eyes-angry.webp";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const {
    isPortfolioDeleted,
    setIsPortfolioDeleted,
    updatePortfolioDeleteCount,
  } = usePortfolio();

  const modifiedProjectsData = projectsData.map((project) => {
    if (project.title === "Portfolio") {
      return {
        ...project,
        backgroundImage: isPortfolioDeleted ? eyes2 : project.backgroundImage,
        description: isPortfolioDeleted
          ? "¿ Otra vez aquí ? Piensa bien en tu decisión y actúa con precaución. No te atrevas"
          : project.description,
        images: isPortfolioDeleted ? [eyes2] : project.images,
      };
    }
    return project;
  });

  const title = isPortfolioDeleted ? "..." : "Algunos proyectos";
  const visibleProjects = showAllProjects
    ? modifiedProjectsData
    : modifiedProjectsData.slice(0, 9);

  const scrollToBanner = () => {
    const bannerSection = document.getElementById("banner");
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  /* Solo dispara el easter-egg / juego — no oculta el proyecto */
  const handlePortfolioDelete = () => {
    localStorage.setItem("isPortfolioDeleted", "true");
    const deleteCount =
      (parseInt(localStorage.getItem("portfolioDeleteCount"), 10) || 0) + 1;
    updatePortfolioDeleteCount(deleteCount);
    setIsPortfolioDeleted(true);
    setSelectedProject(null);
    scrollToBanner();
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <p className="projects-eyebrow">Trabajo seleccionado</p>
        <h2 className="project-title">{title}</h2>
      </div>

      <div className="projects-container">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            backgroundImage={project.backgroundImage}
            isInDevelopment={project.isInDevelopment}
            isLogo={project.isLogo}
            index={index}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {modifiedProjectsData.length > 9 && (
        <button
          type="button"
          className="see-more-btn"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          <span>{showAllProjects ? "Ver menos" : "Ver más"}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={showAllProjects ? "rotated" : ""}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onDelete={handlePortfolioDelete}
        />
      )}
    </section>
  );
};

export default Projects;
