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
    description:
      "Full Stack Developer orientado a producto. Trabajo con React, Next.js, Vue 3, React Native, Node.js, NestJS y TypeScript para convertir necesidades operativas complejas en experiencias claras, APIs confiables y productos sostenibles. Participo de punta a punta: definición funcional, UX, arquitectura, infraestructura cloud y evolución en producción.",
    descriptionDeleted:
      "Mi creador es Facundo Journade. Construye productos digitales con una extraña obsesión por esconder juegos dentro de su portfolio.",
    experienceEyebrow: "Experiencia actual",
    experienceRole: "Co-Founder & Full Stack Engineer",
    experiencePeriod: "— 2026 / Actualidad",
    experienceBody:
      "Desarrollo productos SaaS y soluciones a medida, desde la definición funcional hasta producción, trabajando en frontend, backend, arquitectura, infraestructura cloud e integración de IA.",
    visitUribaSoft: "Visitar UribaSoft",
    stackEyebrow: "Stack",
    skillsTitle: "Habilidades Técnicas",
    skillGroups: [
      {
        label: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Vue 3",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "SCSS",
          "Material-UI",
        ],
      },
      {
        label: "Backend",
        skills: [
          "Node.js",
          "NestJS",
          "TypeScript",
          "APIs seguras",
          "Procesos asíncronos",
          "Testing",
        ],
      },
      {
        label: "Mobile & Desktop",
        skills: ["React Native", "Ionic", "Electron"],
      },
      {
        label: "Bases de datos",
        skills: [
          "PostgreSQL",
          "Redis",
          "Supabase",
          "Modelado de datos",
          "Multi-tenant",
        ],
      },
      {
        label: "Cloud & DevOps",
        skills: ["Railway", "Cloudflare", "AWS S3", "CI/CD", "GitHub Actions"],
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
        description:
          "Plataforma SaaS multi-tenant para internación domiciliaria. Centraliza la gestión clínica, operativa y administrativa de pacientes, profesionales, prestaciones y visitas. Incluye app móvil para profesionales, geofencing, firma digital, NEWS2, historia clínica, trazabilidad, documentación y facturación.",
        contribution:
          "Participación integral en producto, frontend, definición de flujos, integraciones y arquitectura.",
        technologies: ["SaaS", "Multi-tenant", "App móvil", "API-first"],
      },
      wodcore: {
        description:
          "SaaS multi-tenant para boxes y centros de entrenamiento. Integra app móvil y panel administrativo para reservas, cupos, planes, WODs, pagos Marketplace con Mercado Pago, notificaciones push, encuestas, progreso y operación multi-sede.",
        contribution:
          "Desarrollo de una plataforma orientada a producto, con foco en arquitectura, seguridad, rendimiento y experiencia de uso.",
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
        description:
          "Sistema multi-tenant para consultorios odontológicos. Reúne pacientes, profesionales, turnos, prestaciones, historia clínica, odontograma, contabilidad e imágenes clínicas; también contempla radiografías, archivos STL con visor y portal de pacientes.",
        technologies: ["Multi-tenant", "Historia clínica", "PostgreSQL", "AWS S3"],
      },
      bienFria: {
        description:
          "Sistema de gestión para distribuidora: productos, pedidos, entregas, stock, cuentas corrientes, reportes, clientes y trazabilidad por unidad de venta.",
        technologies: ["React", "Supabase", "Gestión operativa"],
      },
      portfolio: {
        description:
          "Este portfolio se infiltró en la lista de proyectos. Si no se detiene ahora, pronto dominará el mundo.",
        technologies: ["React", "Easter egg"],
      },
      doseCalc: {
        description:
          "Aplicación móvil para apoyar el cálculo de dosis de medicamentos inyectables y conversiones de unidades en enfermería.",
        technologies: ["React Native"],
      },
      altoCenter: {
        description:
          "Landing para un complejo hotelero, desarrollada con Next.js y TypeScript.",
        technologies: ["Next.js", "TypeScript"],
      },
      consultorios: {
        description:
          "Landing especializada en atención médica rápida y servicios complementarios.",
        technologies: ["Next.js"],
      },
      syp: {
        description:
          "Landing para un centro especializado en estética médica.",
        technologies: ["Next.js"],
      },
    },
  },
  modal: {
    close: "Cerrar",
    zoomImage: "Ampliar imagen",
    warningTitle: "El portfolio interviene",
    duelTitle: "El portfolio te desafía",
    technologies: "Tecnologías y enfoque",
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
