import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p>¡Estoy disponible para trabajar en tu proyecto! No dudes en contactarme.</p>

      <div className="contact-info">
        <a href="mailto:faku.metal@gmail.com" className="contact-item email">
          <i className="fas fa-envelope"></i>
          <span>Mail</span>
        </a>

        <a href="https://wa.me/2664895193" className="contact-item whatsapp" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
          <span>Whastapp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
