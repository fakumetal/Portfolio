import React, { useState, useEffect, useRef } from 'react';
import './header.css';  
import benelli from "../../assets/projects/benelli.png";
import deletedPortfolioImg from "../../assets/projects/eyes-happy.png";  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioDeleted, setIsPortfolioDeleted] = useState(false);  
  const menuRef = useRef(null);

  useEffect(() => {
    
    const portfolioDeleted = localStorage.getItem('isPortfolioDeleted') === 'true';
    setIsPortfolioDeleted(portfolioDeleted);  
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);  
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      let offset = window.innerWidth > 1500 ? (window.innerHeight / 2) - (section.offsetHeight / 2) : 0;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);  
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);  
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src={isPortfolioDeleted ? deletedPortfolioImg : benelli}  
          alt="Profile"
          className="profile-img"
        />
     <span className="name">
          {isPortfolioDeleted ? 'Portfolio' : 'Facundo Journade'}  
        </span>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav ref={menuRef} className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={scrollToTop}>HOME</button>
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </nav>
    </header>
  );
};

export default Header;
