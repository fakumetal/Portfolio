import { useEffect, useRef } from "react";
import Banner from "../../components/Home/Banner/Banner";
import About from "../../components/Home/About/About";
import Projects from "../../components/Home/Projects/Projects";
import Contact from "../../components/Home/Contact/Contact";
import { useLanguage } from "../../i18n/LanguageContext";
import "./home.css";

const Home = () => {
  const sectionsRef = useRef([]);
  const { t } = useLanguage();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { threshold: 0.15 });
    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <section id="inicio" ref={(el) => (sectionsRef.current[0] = el)} className="banner fade-in-section"><Banner /></section>
    <section id="perfil" ref={(el) => (sectionsRef.current[1] = el)} className="fade-in-section"><About /></section>
    <section id="proyectos" ref={(el) => (sectionsRef.current[2] = el)} className="fade-in-section"><Projects /></section>
    <section id="contacto" ref={(el) => (sectionsRef.current[3] = el)} className="fade-in-section"><Contact /></section>
    <a className="scroll-to-top" href="#inicio" aria-label={t("home.scrollTop")}><img src="/up.svg" alt="" /></a>
  </>;
};

export default Home;
