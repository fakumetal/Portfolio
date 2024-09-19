import React, { useEffect, useState } from 'react';
import './projectModal.css';

const ProjectModal = ({ project, onClose, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 400);
  };

  const handleDelete = () => {
    setShowConfirmModal(true); 
  };

  const confirmDelete = () => {
    onDelete(project.title); 
    setShowConfirmModal(false);  
  };

  const openImageModal = (index) => {
    setCurrentIndex(index);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      setIsTransitioning(false);
    }, 200);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
      setIsTransitioning(false);
    }, 200);
  };

  if (!project) return null;

  const thumbnailClass = project.title === 'Portfolio' ? 'portfolio-thumbnail' : '';

  return (
    <>
      {/* Modal principal */}
      <div className={`modal-overlay ${showModal ? 'show' : ''}`} onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={handleClose}>X</button>
          <h2>{project.title}</h2>

          {/* Miniaturas de imágenes */}
          <div className="thumbnails-container">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Miniatura ${index + 1}`}
                className={`thumbnail ${thumbnailClass}`}
                onClick={() => openImageModal(index)}
              />
            ))}
          </div>

          <p className="modal-description" dangerouslySetInnerHTML={{ __html: project.description }} />
          {project.title === 'Portfolio' && (
            <button className='delete' onClick={handleDelete} style={{ fontSize: '24px', border: 'none', borderRadius: '10px' }}>
              <i className="fa-solid fa-skull"></i>
            </button>
          )}
        </div>
      </div>

      {/* Modal de confirmación */}
      {showConfirmModal && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal-content">
            <h3>¿Estás seguro de que deseas eliminar el portafolio?</h3>
            <div className="confirm-modal-actions">
              <button onClick={confirmDelete}>Eliminar</button>
              <button onClick={() => setShowConfirmModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de imágenes */}
      {showImageModal && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>X</button>

            <div className="carousel-container">
              <button className="carousel-control prev" onClick={prevImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.7 4.3a1 1 0 00-1.4 0L8 10.6a1 1 0 000 1.4l6.3 6.3a1 1 0 001.4-1.4L10.4 12l5.3-5.3a1 1 0 000-1.4z" />
                </svg>
              </button>
              <img
                src={project.images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className={`carousel-image ${isTransitioning ? 'fade' : 'show'}`}
              />
              <button className="carousel-control next" onClick={nextImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.3 4.3a1 1 0 011.4 0L16 10.6a1 1 0 010 1.4L11.1 18.3a1 1 0 01-1.4-1.4L13.6 12 8.3 6.7a1 1 0 010-1.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
