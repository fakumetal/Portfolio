import React, { useEffect, useRef } from 'react';
import Banner from '../../components/Home/Banner/Banner';
import About from '../../components/Home/About/About';
import Projects from '../../components/Home/Projects/Projects';
import Contact from '../../components/Home/Contact/Contact';
import './home.css';

const Home = () => {
  const sectionsRef = useRef([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div>
      <section
        id="banner"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="fade-in-section"
      >
        <Banner />
      </section>
      <section
        id="about"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="fade-in-section"
      >
        <About />
      </section>
      <section
        id="projects"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="fade-in-section"
      >
        <Projects />
      </section>
      <section
        id="contact"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="fade-in-section"
      >
        <Contact />
      </section>
      
      <button className="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default Home;
