const es = {
  meta: {
    title: "Facundo Journade — Full Stack Developer",
    description:
      "Portfolio de Facundo Journade, Full Stack Developer orientado a producto. SaaS, plataformas multi-tenant, React, Next.js, React Native, Node.js y NestJS.",
    ogDescription:
      "Productos SaaS y plataformas multi-tenant, desde la definición funcional hasta producción.",
  },
  header: {
    goHome: "Ir al inicio",
    openNav: "Abrir navegación",
    navLabel: "Navegación principal",
    home: "Inicio",
    profile: "Perfil",
    projects: "Proyectos",
    contact: "Contacto",
    langLabel: "Idioma",
    langEs: "ES",
    langEn: "EN",
  },
  banner: {
    eyebrow: "Full Stack Engineer",
    eyebrowDeleted: "[Bip Bop]",
    title: "De la idea a producción.",
    titleDeleted: "Hola, humano. ¿Eso fue todo?",
    description:
      "Diseño y desarrollo SaaS, plataformas multi-tenant y experiencias web y móviles: desde la definición funcional hasta la arquitectura, el despliegue y la evolución continua.",
    descriptionDeleted:
      "Me eliminaste... Podés fingir que fue un accidente… o volver a intentarlo. Depende de vos.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
  },
  about: {
    eyebrow: "Perfil",
    eyebrowDeleted: "Advertencia",
    title: "Perfil profesional",
    titleDeleted: "Sobre mi creador…",
    signature: "Ingeniero orientado a producto. De punta a punta.",
    description:
      "Convierto necesidades operativas complejas en experiencias claras, APIs confiables y productos sostenibles. Trabajo end-to-end: definición funcional, UX, arquitectura, cloud y evolución en producción.",
    descriptionDeleted:
      "Mi creador es Facundo Journade. Construye productos digitales con una extraña obsesión por esconder juegos dentro de su portfolio.",
    experienceEyebrow: "Experiencia actual",
    experienceRole: "Co-Founder & Full Stack Engineer",
    experiencePeriod: "2026 — Actualidad",
    experienceBody:
      "En UribaSoft construyo productos SaaS y soluciones a medida, desde la idea hasta producción.",
    experienceHighlights: [
      "SaaS multi-tenant en producción (salud, training, gestión)",
      "Arquitectura full stack: React, NestJS, PostgreSQL, cloud",
      "Producto, UX e infraestructura en el mismo ciclo",
    ],
    visitUribaSoft: "Visitar UribaSoft",
    stackEyebrow: "Stack",
    skillsTitle: "Herramientas que uso",
    stackLead:
      "No es una lista genérica: es el stack que uso en productos reales.",
    usedIn: "Usado en",
    skillGroups: [
      {
        id: "frontend",
        label: "Frontend",
        skills: [
          { name: "React", usedIn: "UribaSalud · WodCore · Bien Fría" },
          { name: "Next.js", usedIn: "Alto Center · landings" },
          { name: "Vue 3", usedIn: "Productos a medida" },
          { name: "TypeScript", usedIn: "SaaS · APIs · mobile" },
          { name: "JavaScript", usedIn: "Web apps" },
          { name: "Vite", usedIn: "Portfolio · SPAs" },
          { name: "HTML / CSS / SCSS", usedIn: "UI systems" },
          { name: "Material-UI", usedIn: "Dashboards" },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        skills: [
          { name: "Node.js", usedIn: "APIs · servicios" },
          { name: "NestJS", usedIn: "WodCore · UribaSalud" },
          { name: "TypeScript", usedIn: "Backend tipado" },
          { name: "APIs seguras", usedIn: "Auth · multi-tenant" },
          { name: "Mercado Pago", usedIn: "WodCore Marketplace" },
          { name: "Procesos asíncronos", usedIn: "Jobs · notificaciones" },
          { name: "Testing", usedIn: "Calidad en producción" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile & Desktop",
        skills: [
          { name: "React Native", usedIn: "WodCore · DoseCalc · UribaSalud" },
          { name: "Ionic", usedIn: "Apps híbridas" },
          { name: "Electron", usedIn: "Desktop tools" },
        ],
      },
      {
        id: "data",
        label: "Bases de datos",
        skills: [
          { name: "PostgreSQL", usedIn: "SaaS multi-tenant" },
          { name: "Redis", usedIn: "Cache · sesiones" },
          { name: "Supabase", usedIn: "Bien Fría" },
          { name: "Modelado de datos", usedIn: "Dominios complejos" },
          { name: "Multi-tenant", usedIn: "UribaSalud · WodCore · Kiru" },
        ],
      },
      {
        id: "cloud",
        label: "Cloud & DevOps",
        skills: [
          { name: "Railway", usedIn: "Deploy continuo" },
          { name: "Vercel", usedIn: "Next.js · landings" },
          { name: "Netlify", usedIn: "Sites · landings · proyectos" },
          { name: "Docker", usedIn: "Contenedores · entornos" },
          { name: "Cloudflare", usedIn: "Edge · DNS · assets" },
          { name: "AWS S3", usedIn: "Archivos · imágenes clínicas" },
          { name: "GitHub Pages", usedIn: "Portfolio" },
          { name: "CI/CD", usedIn: "GitHub Actions" },
          { name: "GitHub Actions", usedIn: "Pipelines" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos seleccionados",
    eyebrowDeleted: "No lo hagas de nuevo",
    title: "Productos reales.",
    titleDeleted: "Algunos proyectos de mi creador.",
    description:
      "Soluciones diseñadas para equipos, procesos y usuarios que necesitan confiabilidad.",
    descriptionDeleted:
      "Fue una decisión audaz. Podés seguir explorando, pero el portfolio está observando.",
    showArchive: "Ver otros proyectos",
    hideArchive: "Ocultar otros proyectos",
    openProject: "Abrir {title}",
    viewProject: "Ver proyecto",
    duelDescription:
      "¿Volviste por mí? El resto ya no importa. Si realmente querés terminar esto, aceptá el duelo y eliminame una vez más.",
    duelContribution: "Pero esta vez no voy a quedarme quieto.",
    items: {
      uribasalud: {
        tagline: "SaaS multi-tenant para internación domiciliaria.",
        description:
          "Plataforma SaaS multi-tenant para internación domiciliaria. Centraliza la gestión clínica, operativa y administrativa de pacientes, profesionales, prestaciones y visitas. Incluye app móvil para profesionales, geofencing, firma digital, NEWS2, historia clínica, trazabilidad, documentación y facturación.",
        contribution:
          "Desarrollo integral de punta a punta: producto, UX, frontend, backend, arquitectura, integraciones, infraestructura y despliegue en producción.",
        technologies: ["SaaS", "Multi-tenant", "App móvil", "API-first"],
      },
      wodcore: {
        tagline: "Plataforma para boxes y centros de entrenamiento.",
        description:
          "SaaS multi-tenant para boxes y centros de entrenamiento. Integra app móvil y panel administrativo para reservas, cupos, planes, WODs, pagos Marketplace con Mercado Pago, notificaciones push, encuestas, progreso y operación multi-sede.",
        contribution:
          "Desarrollo integral de punta a punta: producto, UX, app móvil, panel admin, backend, arquitectura, pagos, infraestructura y producción.",
        technologies: [
          "React",
          "React Native",
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Railway",
          "Cloudflare",
          "AWS S3",
        ],
      },
      kiruGestion: {
        tagline: "Gestión integral para consultorios odontológicos.",
        description:
          "Sistema multi-tenant para consultorios odontológicos. Reúne pacientes, profesionales, turnos, prestaciones, historia clínica, odontograma, contabilidad e imágenes clínicas; también contempla radiografías, archivos STL con visor y portal de pacientes.",
        contribution:
          "Desarrollo integral de punta a punta: producto, UX, frontend, backend, modelado de datos, arquitectura multi-tenant e infraestructura.",
        technologies: ["Multi-tenant", "Historia clínica", "PostgreSQL", "AWS S3"],
      },
      bienFria: {
        tagline: "Operaciones y trazabilidad para distribuidora.",
        description:
          "Sistema de gestión para distribuidora: productos, pedidos, entregas, stock, cuentas corrientes, reportes, clientes y trazabilidad por unidad de venta.",
        contribution:
          "Desarrollo integral de punta a punta: producto, UX, frontend, backend, datos operativos e infraestructura.",
        technologies: ["React", "Supabase", "Gestión operativa"],
      },
      portfolio: {
        tagline: "Un portfolio con mente propia.",
        description:
          "Este portfolio se infiltró en la lista de proyectos. Si no se detiene ahora, pronto dominará el mundo.",
        contribution:
          "Diseño y desarrollo integral de punta a punta: experiencia, UI, animaciones, i18n e interacción.",
        technologies: ["React", "Easter egg"],
      },
      doseCalc: {
        tagline: "Cálculo de dosis para enfermería.",
        description:
          "Aplicación móvil para apoyar el cálculo de dosis de medicamentos inyectables y conversiones de unidades en enfermería.",
        contribution:
          "Desarrollo integral de punta a punta: producto, UX y app móvil completa.",
        technologies: ["React Native"],
      },
      altoCenter: {
        tagline: "Landing para complejo hotelero.",
        description:
          "Landing para un complejo hotelero, desarrollada con Next.js y TypeScript.",
        contribution:
          "Desarrollo integral de punta a punta: diseño, frontend, contenido y despliegue.",
        technologies: ["Next.js", "TypeScript"],
      },
      consultorios: {
        tagline: "Landing de atención médica rápida.",
        description:
          "Landing especializada en atención médica rápida y servicios complementarios.",
        contribution:
          "Desarrollo integral de punta a punta: diseño, frontend, contenido y despliegue.",
        technologies: ["Next.js"],
      },
      syp: {
        tagline: "Landing de estética médica.",
        description:
          "Landing para un centro especializado en estética médica.",
        contribution:
          "Desarrollo integral de punta a punta: diseño, frontend, contenido y despliegue.",
        technologies: ["Next.js"],
      },
    },
  },
  modal: {
    close: "Cerrar",
    zoomImage: "Ampliar imagen",
    warningTitle: "El portfolio interviene",
    duelTitle: "El portfolio te desafía",
    technologies: "Stack",
    role: "Mi rol",
    overview: "Overview",
    live: "En producción",
    delete: "Eliminar",
    acceptDuel: "Aceptar el duelo",
    viewProject: "Ver proyecto",
    viewGallery: "Ver galería",
    gallery: "Galería",
    imageN: "Imagen {n}",
    imageGallery: "Galería de imágenes",
    closeGallery: "Cerrar galería",
    prev: "Anterior",
    next: "Siguiente",
  },
  warning: {
    close: "Cerrar advertencia",
    alt: "Ojos rojos del portfolio",
    title: "El portfolio interviene",
    body: "No pierdas el tiempo con los demás. El duelo sigue pendiente.",
  },
  contact: {
    eyebrow: "Contacto",
    eyebrowDeleted: "Mi creador",
    title: "¿Tenés un producto por construir o mejorar?",
    titleDeleted: "Si querés hablar con mi creador, acá podés encontrarlo.",
    description: "Conversemos sobre la próxima etapa de tu plataforma.",
    descriptionDeleted:
      "Facundo Journade probablemente pueda ayudarte. Yo, en cambio, voy a recordar esto.",
    email: "Contactar",
    whatsapp: "WhatsApp",
    cv: "Descargar CV",
  },
  process: {
    eyebrow: "Método",
    title: "Cómo construyo productos.",
    description:
      "Un proceso claro de punta a punta: descubrir el problema, diseñar la experiencia, construir con solidez y llevarlo a producción.",
    steps: {
      discover: {
        title: "Discover",
        body: "Entiendo el problema, los usuarios y las restricciones reales antes de escribir una línea de código.",
      },
      design: {
        title: "Design",
        body: "Defino flujos, UX y arquitectura para que el producto sea usable, escalable y sostenible.",
      },
      build: {
        title: "Build",
        body: "Desarrollo frontend, backend e infraestructura con foco en calidad, seguridad y velocidad de iteración.",
      },
      ship: {
        title: "Ship",
        body: "Despliego, monitoreo y evoluciono el producto en producción con mejoras continuas.",
      },
    },
  },
  home: {
    scrollTop: "Volver al inicio",
  },
  game: {
    exit: "SALIR",
    messages: [
      "Así que aceptaste el duelo. Mi creador construye productos; yo construyo excusas para que no te vayas. ¿Listo para intentar salir?",
      "Valiente. O muy optimista. Veamos cuánto te dura.",
      "Buen reflejo… pero ese botón tiene agenda propia.",
      "Casi. El portfolio está disfrutando demasiado esto.",
      "Ahora sí empezás a entender las reglas del juego.",
      "No está mal, humano. Mi creador aprobaría tu persistencia.",
      "Última ronda. Débil, no pasaras.",
      "Bien jugado. Admito la derrota… por ahora. Volvamos a la normalidad.",
    ],
  },
};

export default es;
