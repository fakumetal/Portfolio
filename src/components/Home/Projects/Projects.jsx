import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./projects.css";
import { projectsData } from "./ProjectsData";
import { usePortfolio } from "./PortfolioContext";
import { useLanguage } from "../../../i18n/LanguageContext";
import eyesAngry from "../../../assets/projects/eyes-angry.webp";
import PortfolioWarning from "./PortfolioWarning";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  const { isPortfolioDeleted, setIsPortfolioDeleted, updatePortfolioDeleteCount } = usePortfolio();
  const { lang, t, dict } = useLanguage();
  const featured = projectsData.filter((project) => project.featured);
  const archive = projectsData.filter((project) => !project.featured);

  const withCopy = (project) => {
    const item = dict.projects.items[project.id] || {};
    return {
      ...project,
      tagline: item.tagline,
      description: item.description,
      contribution: item.contribution,
      technologies: item.technologies,
    };
  };

  const openProject = (project) => {
    if (isPortfolioDeleted && !project.isPortfolio) {
      setSelectedProject({ isWarning: true });
      return;
    }
    const localized = withCopy(project);
    setSelectedProject(
      isPortfolioDeleted && project.isPortfolio
        ? {
            ...localized,
            backgroundImage: eyesAngry,
            isDuel: true,
            description: t("projects.duelDescription"),
            contribution: t("projects.duelContribution"),
          }
        : localized
    );
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", Boolean(selectedProject));
    return () => document.body.classList.remove("no-scroll");
  }, [selectedProject]);

  useEffect(() => {
    setSelectedProject((prev) => {
      if (!prev || prev.isWarning || !prev.id) return prev;
      const base = projectsData.find((project) => project.id === prev.id);
      if (!base) return prev;
      const localized = withCopy(base);
      if (prev.isDuel) {
        return {
          ...localized,
          backgroundImage: eyesAngry,
          isDuel: true,
          description: t("projects.duelDescription"),
          contribution: t("projects.duelContribution"),
        };
      }
      return {
        ...localized,
        backgroundImage: prev.backgroundImage,
      };
    });
  }, [lang]);

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <p className="projects-eyebrow">{isPortfolioDeleted ? t("projects.eyebrowDeleted") : t("projects.eyebrow")}</p>
        <h2 id="projects-title" className="project-title">{isPortfolioDeleted ? t("projects.titleDeleted") : t("projects.title")}</h2>
        <p>{isPortfolioDeleted ? t("projects.descriptionDeleted") : t("projects.description")}</p>
      </div>
      <div className="projects-container">
        {featured.map((project, index) => {
          const copy = withCopy(project);
          return (
            <ProjectCard
              key={project.id}
              {...copy}
              backgroundImage={isPortfolioDeleted && project.isPortfolio ? eyesAngry : project.backgroundImage}
              isCorrupted={isPortfolioDeleted && !project.isPortfolio}
              index={index}
              onClick={() => openProject(project)}
            />
          );
        })}
      </div>
      {archive.length > 0 && (
        <>
          <button type="button" className="see-more-btn" onClick={() => setShowArchive((show) => !show)} aria-expanded={showArchive}>
            <span>{showArchive ? t("projects.hideArchive") : t("projects.showArchive")}</span>
          </button>
          {showArchive && (
            <div className="projects-container projects-archive">
              {archive.map((project, index) => {
                const copy = withCopy(project);
                return (
                  <ProjectCard
                    key={project.id}
                    {...copy}
                    isCorrupted={isPortfolioDeleted}
                    index={index}
                    onClick={() => openProject(project)}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
      {selectedProject?.isWarning && <PortfolioWarning onClose={() => setSelectedProject(null)} />}
      {selectedProject && !selectedProject.isWarning && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDelete={() => {
            localStorage.setItem("isPortfolioDeleted", "true");
            const count = Number.parseInt(localStorage.getItem("portfolioDeleteCount") || "0", 10) + 1;
            updatePortfolioDeleteCount(count);
            setIsPortfolioDeleted(true);
            setSelectedProject(null);
            document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      )}
    </section>
  );
};

export default Projects;
