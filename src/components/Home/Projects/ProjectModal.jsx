import   { useEffect, useState } from 'react';
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

 
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeImageModal();  
     
      }
    };
  
    window.addEventListener('keydown', handleKeydown);
  
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [currentIndex, isTransitioning]);
  

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
              <img src="./skull.svg" alt="" style={{width:'25px'}}/>
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
                <img 
                  style={{
                    width: '20px', 
                    marginRight: '50px',
                    filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))'  
                  }}  
                  src="./left.svg" 
                  alt="Left" 
                />
              </button>
              <img
                src={project.images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className={`carousel-image ${isTransitioning ? 'fade' : 'show'}`}
              />
              <button className="carousel-control next" onClick={nextImage}>
                <img  
                  style={{
                    width:'20px',
                    marginLeft:'50px',
                    filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))'  
                  }}  
                  src="./right.svg" 
                  alt="Right" 
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
