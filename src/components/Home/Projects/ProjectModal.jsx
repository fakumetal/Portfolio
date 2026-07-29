import { useEffect, useState } from "react";
import "./projectModal.css";

const ProjectModal = ({ project, onClose, onDelete }) => {
 /* State */
 const [showModal, setShowModal] = useState(false);
 const [showImageModal, setShowImageModal] = useState(false);
 const [showConfirmModal, setShowConfirmModal] = useState(false);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [direction, setDirection] = useState("right");

 useEffect(() => {
  setShowModal(true);
 }, []);

 /* Handlers */
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
  setDirection("right");
  setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
 };

 const prevImage = () => {
  setDirection("left");
  setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
 };

 /* Keyboard Navigation */
 useEffect(() => {
  const handleKeydown = (event) => {
   if (showImageModal) {
    if (event.key === "ArrowRight") {
     nextImage();
    } else if (event.key === "ArrowLeft") {
     prevImage();
    } else if (event.key === "Escape") {
     closeImageModal();
    }
   } else if (event.key === "Escape") {
    handleClose();
   }
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
   window.removeEventListener("keydown", handleKeydown);
  };
 }, [showImageModal]);

 if (!project) return null;

 const thumbnailClass = project.title === "Portfolio" ? "portfolio-thumbnail" : "";

 return (
  <>
   <div className={`modal-overlay ${showModal ? "show" : ""}`} onClick={handleClose}>
    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
     <button className='modal-close-btn' onClick={handleClose}>
      &times;
     </button>

     <div className='modal-header'>
      <h2>{project.title}</h2>
     </div>

     <div className='modal-body'>
      {/* Main Image */}
      <div className='main-image-section'>
       <div className='main-image-container' onClick={() => project.images && project.images.length > 0 && openImageModal(0)}>
        <img src={project.backgroundImage || (project.images && project.images[0])} alt={project.title} className='modal-main-image' />
       </div>
      </div>

      {/* Description */}
      <div className='description-section'>
       <div className='project-description'>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
       </div>
      </div>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
       <div className='gallery-section'>
        <h3>Galería</h3>
        <div className='thumbnails-container'>
         {project.images.slice(0, 5).map((image, index) => (
          <img key={index} src={image} alt={`Miniatura ${index + 1}`} className={`thumbnail ${thumbnailClass}`} onClick={() => openImageModal(index)} />
         ))}
         {project.images.length > 5 && (
          <div className='more-images-indicator' onClick={() => openImageModal(5)}>
           +{project.images.length - 5}
          </div>
         )}
        </div>
       </div>
      )}

      {project.title === "Portfolio" && (
       <div className='portfolio-actions'>
        <button className='delete-btn' onClick={handleDelete} title='Eliminar Portfolio'>
         <img src='./skull.svg' alt='skull' />
        </button>
       </div>
      )}
     </div>
    </div>
   </div>

   {/* Confirm */}
   {showConfirmModal && (
    <div className='confirm-modal-overlay'>
     <div className='confirm-modal-content'>
      <h3>¿Estás seguro de que deseas eliminar el portafolio?</h3>
      <p>Esta acción no se puede deshacer.</p>
      <div className='confirm-modal-actions'>
       <button className='btn-cancel' onClick={() => setShowConfirmModal(false)}>
        Cancelar
       </button>
       <button className='btn-confirm' onClick={confirmDelete}>
        Eliminar
       </button>
      </div>
     </div>
    </div>
   )}

   {/* Gallery Modal - Slide Effect */}
   {showImageModal && (
    <div className='image-modal-overlay' onClick={closeImageModal}>
     <div className='image-modal-content' onClick={(e) => e.stopPropagation()}>
      <button className='image-modal-close' onClick={closeImageModal}>
       &times;
      </button>

      <div className='carousel-container'>
       <button className='carousel-control prev' onClick={prevImage}>
        <img style={{ width: "30px", filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.8))" }} src='./left.svg' alt='Left' />
       </button>

       <div className='carousel-image-wrapper'>
        <img key={currentIndex} src={project.images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className={`carousel-image slide-${direction}`} />
        <div className='carousel-counter'>
         {currentIndex + 1} / {project.images.length}
        </div>
       </div>

       <button className='carousel-control next' onClick={nextImage}>
        <img style={{ width: "30px", filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.8))" }} src='./right.svg' alt='Right' />
       </button>
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default ProjectModal;
