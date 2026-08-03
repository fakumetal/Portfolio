/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../../i18n/LanguageContext";
import "./projectModal.css";

const ProjectModal = ({ project, onClose, onDelete }) => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const closeButtonRef = useRef(null);
  const projectLink = project?.url;
  const isLogo = Boolean(project?.isLogo);
  const hasGallery = Boolean(project?.images?.length);
  const coverImage = hasGallery
    ? project.images[0]
    : project?.backgroundImage;

  useEffect(() => {
    requestAnimationFrame(() => setShowModal(true));
    closeButtonRef.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(onClose, 320);
  }, [onClose]);

  const openImageModal = (index) => {
    setCurrentIndex(index);
    setShowImageModal(true);
  };

  const closeImageModal = () => setShowImageModal(false);

  const nextImage = useCallback(() => {
    if (!project?.images?.length) return;
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project?.images?.length) return;
    setDirection("left");
    setCurrentIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (showImageModal) {
        if (event.key === "ArrowRight") nextImage();
        else if (event.key === "ArrowLeft") prevImage();
        else if (event.key === "Escape") closeImageModal();
      } else if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [showImageModal, handleClose, nextImage, prevImage]);

  if (!project) return null;

  const modalTitle = project.isWarning
    ? t("modal.warningTitle")
    : project.isDuel
      ? t("modal.duelTitle")
      : project.title;

  const modalTree = (
    <>
      <div
        className={`modal-overlay ${showModal ? "show" : ""}`}
        onClick={handleClose}
        role="presentation"
      >
        <div
          className={`modal-content ${isLogo ? "is-logo" : ""}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            ref={closeButtonRef}
            aria-label={t("modal.close")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="modal-body">
            <div className={`modal-hero ${isLogo ? "is-logo" : ""}`}>
              {isLogo ? (
                <div className="logo-showcase">
                  <div className="logo-glow" aria-hidden="true" />
                  <div className="logo-frame">
                    <img
                      src={project.backgroundImage}
                      alt={project.title}
                      className="modal-logo-image"
                    />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="main-image-container"
                  onClick={() => hasGallery && openImageModal(0)}
                  disabled={!hasGallery}
                  aria-label={hasGallery ? t("modal.zoomImage") : undefined}
                >
                  <img
                    src={coverImage}
                    alt={project.title}
                    className="modal-main-image"
                  />
                  {hasGallery && (
                    <span className="image-zoom-hint">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  )}
                </button>
              )}
            </div>

            <div className="modal-info">
              <header className="modal-header">
                <div className="modal-title-row">
                  <h2 id="project-modal-title">{modalTitle}</h2>
                </div>
              </header>

              <div className="project-description">
                <p>{project.description}</p>
                {project.contribution && <p className="project-contribution">{project.contribution}</p>}
              </div>

              {project.technologies?.length > 0 && (
                <ul className="project-technologies" aria-label={t("modal.technologies")}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              )}

              <div className="modal-actions">
                {project.isPortfolio && (
                  <div className="portfolio-actions">
                    <button type="button" className="delete-btn" onClick={onDelete}>
                      <img src={`${import.meta.env.BASE_URL}skull.svg`} alt="" />
                      <span>{project.isDuel ? t("modal.acceptDuel") : t("modal.delete")}</span>
                    </button>
                  </div>
                )}
                {projectLink && (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {t("modal.viewProject")}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}

                {hasGallery && (
                  <button
                    type="button"
                    className="gallery-open-btn"
                    onClick={() => openImageModal(0)}
                  >
                    {t("modal.viewGallery")}
                  </button>
                )}
              </div>

              {hasGallery && (
                <div className="gallery-section">
                  <h3>{t("modal.gallery")}</h3>
                  <div className="thumbnails-container">
                    {project.images.slice(0, 6).map((image, index) => (
                      <button
                        type="button"
                        key={index}
                        className="thumbnail-btn"
                        onClick={() => openImageModal(index)}
                        aria-label={t("modal.imageN", { n: index + 1 })}
                      >
                        <img src={image} alt="" className="thumbnail" />
                      </button>
                    ))}
                    {project.images.length > 6 && (
                      <button
                        type="button"
                        className="more-images-indicator"
                        onClick={() => openImageModal(6)}
                      >
                        +{project.images.length - 6}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showImageModal && (
        <div
          className="image-modal-overlay"
          onClick={closeImageModal}
          role="presentation"
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={t("modal.imageGallery")}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={closeImageModal}
              aria-label={t("modal.closeGallery")}
            >
              &times;
            </button>

            <div className="carousel-container">
              <button
                type="button"
                className="carousel-control prev"
                onClick={prevImage}
                aria-label={t("modal.prev")}
              >
                <img src="./left.svg" alt="" width="28" height="28" />
              </button>

              <div className="carousel-image-wrapper">
                <img
                  key={currentIndex}
                  src={project.images[currentIndex]}
                  alt={t("modal.imageN", { n: currentIndex + 1 })}
                  className={`carousel-image slide-${direction}`}
                />
                <div className="carousel-counter">
                  {currentIndex + 1} / {project.images.length}
                </div>
              </div>

              <button
                type="button"
                className="carousel-control next"
                onClick={nextImage}
                aria-label={t("modal.next")}
              >
                <img src="./right.svg" alt="" width="28" height="28" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(modalTree, document.body);
};

export default ProjectModal;
