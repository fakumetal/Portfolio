import dose1 from "../../../assets/projects/DoseCalc/dose1.png";
import dose2 from "../../../assets/projects/DoseCalc/dose2.png";
import dose3 from "../../../assets/projects/DoseCalc/dose3.png";
import dose4 from "../../../assets/projects/DoseCalc/dose4.png";
import dose5 from "../../../assets/projects/DoseCalc/dose5.png";
 


import image1VisitAR from "../../../assets/projects/VisitAR/1.png";
import image3VisitAR from "../../../assets/projects/VisitAR/3.png";
import image4VisitAR from "../../../assets/projects/VisitAR/4.png";
import image5VisitAR from "../../../assets/projects/VisitAR/5.png";
import image6VisitAR from "../../../assets/projects/VisitAR/6.png";
import image7VisitAR from "../../../assets/projects/VisitAR/7.png";
import image8VisitAR from "../../../assets/projects/VisitAR/8.png";
import backgroundVisitAR from "../../../assets/projects/VisitAR/9.png";  

import image1Sucur from "../../../assets/projects/SucurApp/1.png";
import image2Sucur from "../../../assets/projects/SucurApp/2.png";
import image3Sucur from "../../../assets/projects/SucurApp/3.png";
import image4Sucur from "../../../assets/projects/SucurApp/4.png";
import image5Sucur from "../../../assets/projects/SucurApp/m1.png";
import image6Sucur from "../../../assets/projects/SucurApp/m2.png";
import image7Sucur from "../../../assets/projects/SucurApp/5.png";
import image8Sucur from "../../../assets/projects/SucurApp/6.png";
import backgroundSucur from "../../../assets/projects/SucurApp/0.png";

import image1Lava from "../../../assets/projects/LavaRiso/1.png";
import image2Lava from "../../../assets/projects/LavaRiso/2.png";
import image3Lava from "../../../assets/projects/LavaRiso/3.png";
import image5Lava from "../../../assets/projects/LavaRiso/5.png";
import image6Lava from "../../../assets/projects/LavaRiso/m1.png";
import image7Lava from "../../../assets/projects/LavaRiso/m2.png";
import image8Lava from "../../../assets/projects/LavaRiso/m3.png";
import image9Lava from "../../../assets/projects/LavaRiso/m4.png";
import image10Lava from "../../../assets/projects/LavaRiso/6.png";
import image11Lava from "../../../assets/projects/LavaRiso/7.png";
import backgroundLava from "../../../assets/projects/LavaRiso/1.png";

import backgroundEnigmax from "../../../assets/projects/Enigmax/enigmax.png";
import backgroundCalu from "../../../assets/projects/Calu/calu.png";

import image1CRM from "../../../assets/projects/CRM/1.png";
import image2CRM from "../../../assets/projects/CRM/2.png";
import image3CRM from "../../../assets/projects/CRM/3.png";
import image4CRM from "../../../assets/projects/CRM/4.png";
 
import eyesHappy from "../../../assets/projects/eyes-happy.png";



export const projectsData = [
  {
    title: "LavaRiso",
    backgroundImage: backgroundLava,
    description: "Aplicación CRM/ERP desarrollada con Ionic y Electron para empresas de reparación de electrodomésticos. Incluye funcionalidades contables, control de stock, y una app móvil para la gestión de técnicos en campo. Facilita la interacción con clientes a través de redes sociales.",
    images: [image1Lava, image2Lava, image3Lava, image5Lava, image6Lava, image7Lava, image8Lava, image9Lava, image10Lava, image11Lava],
    isInDevelopment: true,  // Indicamos que está en desarrollo
  },
  {
    title: "DoseCalc",
    backgroundImage: dose1,
    description: "DoseCalc es una aplicación simple desarrollada en React Native diseñada específicamente para enfermería, facilitando el cálculo preciso de dosis de medicamentos inyectables. Con una interfaz intuitiva permite a los profesionales de la salud ingresar concentraciones de medicamentos y calcular las dosis según la presentación. Ademas posee un simple pero útil conversor de unidades.",
    images: [dose1, dose2, dose3, dose4, dose5],
    isInDevelopment: false,  // Indicamos que está en desarrollo
  },

  {
    title: "CRM",
    backgroundImage: image1CRM,
    description: "Plataforma para estudios de mercado inmobiliario, diseñada para proporcionar análisis detallados y datos clave del sector. Incluye un visor de PDFs que permite acceder a informes y estudios de mercado directamente desde la plataforma, mejorando la comprensión de tendencias y oportunidades.",
    images: [image1CRM, image2CRM, image3CRM, image4CRM],
    isInDevelopment: true,  // Indicamos que está en desarrollo
  },
 
  {
    title: "VisitAR",
    backgroundImage: backgroundVisitAR,
    description: "Aplicación desarrollada en Ionic para gestionar y hacer seguimiento de visitas de pacientes en domicilio. Permite a los profesionales de la salud registrar y actualizar información en tiempo real, utilizando Firebase para la autenticación y sincronización.",
    images: [image8VisitAR, image1VisitAR, image3VisitAR, image4VisitAR, image5VisitAR, image6VisitAR, image7VisitAR],
    isInDevelopment: false,   
  },
 
 
  {
    title: "Portfolio",
    backgroundImage:eyesHappy ,
   description: "Este portafolio ha evolucionado infiltrandose en la lista de proyectos. Si no se detiene ahora, pronto dominará el mundo!. Para evitar lo inevitable mejor elimínalo antes de que sea tarde." ,
    url: "#",  
    images: [ eyesHappy],
    isInDevelopment: false,   
  },
  {
    title: "Enigmax",
    backgroundImage: backgroundEnigmax,
    description: "Empresa dedicada a la realización de juegos de rol inmersivos e innovadores. Nacida de la colaboración entre amigos, ofrece experiencias lúdicas únicas. Visita <a href='https://www.enigmaxoficial.com/#/' target='_blank' rel='noopener noreferrer'>EnigmaxOficial</a>.",
    images: [backgroundEnigmax],
    isInDevelopment: false,   
  },
  
  {
    title: "SucurApp",
    backgroundImage: backgroundSucur,
    description: "Solución contable avanzada desarrollada con Ionic ( App )  y Electron ( Software ) para monitorizar ingresos y egresos en sucursales mayoristas. Automatiza procesos financieros, facilita el intercambio con Excel y optimiza la gestión financiera.",
    images: [image1Sucur, image2Sucur, image3Sucur, image4Sucur, image5Sucur, image6Sucur, image7Sucur, image8Sucur],
    isInDevelopment: false,  
  },
  {
    title: "Calu",
    backgroundImage: backgroundCalu,
    description: "Sitio web para una agencia de marketing con diseño atractivo y plataforma back-end personalizable. Permite la edición detallada, gestión de contenidos, visualización de analíticas y optimización SEO. Visita <a href='https://calu-mkt.com/#/' target='_blank' rel='noopener noreferrer'>calu-mkt</a>.",
    images: [backgroundCalu],
    isInDevelopment: false,  
  },
];
