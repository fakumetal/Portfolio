const en = {
  meta: {
    title: "Facundo Journade — Full Stack Developer",
    description:
      "Portfolio of Facundo Journade, product-minded Full Stack Developer. SaaS, multi-tenant platforms, React, Next.js, React Native, Node.js, and NestJS.",
    ogDescription:
      "SaaS products and multi-tenant platforms, from product definition to production.",
  },
  header: {
    goHome: "Go to home",
    openNav: "Open navigation",
    navLabel: "Main navigation",
    home: "Home",
    profile: "Profile",
    projects: "Projects",
    contact: "Contact",
    langLabel: "Language",
    langEs: "ES",
    langEn: "EN",
  },
  banner: {
    eyebrow: "Full Stack Engineer",
    eyebrowDeleted: "[Bip Bop]",
    title: "From idea to production.",
    titleDeleted: "Hello, human. Was that all?",
    description:
      "I design and build SaaS, multi-tenant platforms, and web & mobile experiences: from product definition through architecture, deployment, and ongoing evolution.",
    descriptionDeleted:
      "You deleted me... You can pretend it was an accident… or try again. Your call.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  about: {
    eyebrow: "Profile",
    eyebrowDeleted: "Warning",
    title: "Professional profile",
    titleDeleted: "About my creator…",
    signature: "Product-minded engineer. End to end.",
    description:
      "I turn complex operational needs into clear experiences, reliable APIs, and sustainable products. I work end to end: product definition, UX, architecture, cloud, and production evolution.",
    descriptionDeleted:
      "My creator is Facundo Journade. He builds digital products with a strange obsession for hiding games inside his portfolio.",
    experienceEyebrow: "Current experience",
    experienceRole: "Co-Founder & Full Stack Engineer",
    experiencePeriod: "2026 — Present",
    experienceBody:
      "At UribaSoft I build SaaS products and custom solutions, from idea to production.",
    experienceHighlights: [
      "Multi-tenant SaaS in production (health, training, ops)",
      "Full-stack architecture: React, NestJS, PostgreSQL, cloud",
      "Product, UX, and infrastructure in the same loop",
    ],
    visitUribaSoft: "Visit UribaSoft",
    stackEyebrow: "Stack",
    skillsTitle: "Tools I use",
    stackLead:
      "Not a generic checklist — the stack I use on real products.",
    usedIn: "Used in",
    skillGroups: [
      {
        id: "frontend",
        label: "Frontend",
        skills: [
          { name: "React", usedIn: "UribaSalud · WodCore · Bien Fría" },
          { name: "Next.js", usedIn: "Alto Center · landings" },
          { name: "Vue 3", usedIn: "Custom products" },
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
          { name: "Node.js", usedIn: "APIs · services" },
          { name: "NestJS", usedIn: "WodCore · UribaSalud" },
          { name: "TypeScript", usedIn: "Typed backends" },
          { name: "Secure APIs", usedIn: "Auth · multi-tenant" },
          { name: "Mercado Pago", usedIn: "WodCore Marketplace" },
          { name: "Async processes", usedIn: "Jobs · notifications" },
          { name: "Testing", usedIn: "Production quality" },
        ],
      },
      {
        id: "mobile",
        label: "Mobile & Desktop",
        skills: [
          { name: "React Native", usedIn: "WodCore · DoseCalc · UribaSalud" },
          { name: "Ionic", usedIn: "Hybrid apps" },
          { name: "Electron", usedIn: "Desktop tools" },
        ],
      },
      {
        id: "data",
        label: "Databases",
        skills: [
          { name: "PostgreSQL", usedIn: "Multi-tenant SaaS" },
          { name: "Redis", usedIn: "Cache · sessions" },
          { name: "Supabase", usedIn: "Bien Fría" },
          { name: "Data modeling", usedIn: "Complex domains" },
          { name: "Multi-tenant", usedIn: "UribaSalud · WodCore · Kiru" },
        ],
      },
      {
        id: "cloud",
        label: "Cloud & DevOps",
        skills: [
          { name: "Railway", usedIn: "Continuous deploy" },
          { name: "Vercel", usedIn: "Next.js · landings" },
          { name: "Netlify", usedIn: "Sites · landings · projects" },
          { name: "Docker", usedIn: "Containers · environments" },
          { name: "Cloudflare", usedIn: "Edge · DNS · assets" },
          { name: "AWS S3", usedIn: "Files · clinical images" },
          { name: "GitHub Pages", usedIn: "Portfolio" },
          { name: "CI/CD", usedIn: "GitHub Actions" },
          { name: "GitHub Actions", usedIn: "Pipelines" },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Selected projects",
    eyebrowDeleted: "Don't do it again",
    title: "Real products.",
    titleDeleted: "Some of my creator's projects.",
    description:
      "Solutions designed for teams, processes, and users who need reliability.",
    descriptionDeleted:
      "That was a bold move. You can keep exploring, but the portfolio is watching.",
    showArchive: "View other projects",
    hideArchive: "Hide other projects",
    openProject: "Open {title}",
    viewProject: "View project",
    duelDescription:
      "Back for me? The rest doesn't matter. If you really want to end this, accept the duel and delete me once more.",
    duelContribution: "But this time I won't sit still.",
    items: {
      uribasalud: {
        tagline: "Multi-tenant SaaS for home hospitalization.",
        description:
          "Multi-tenant SaaS platform for home hospitalization. Centralizes clinical, operational, and administrative management of patients, professionals, services, and visits. Includes a mobile app for professionals, geofencing, digital signature, NEWS2, clinical records, traceability, documentation, and billing.",
        contribution:
          "End-to-end ownership: product, UX, frontend, backend, architecture, integrations, infrastructure, and production deployment.",
        technologies: ["SaaS", "Multi-tenant", "Mobile app", "API-first"],
      },
      wodcore: {
        tagline: "Platform for gym boxes and training centers.",
        description:
          "Multi-tenant SaaS for gym boxes and training centers. Integrates a mobile app and admin panel for bookings, capacity, plans, WODs, Mercado Pago Marketplace payments, push notifications, surveys, progress tracking, and multi-location operations.",
        contribution:
          "End-to-end ownership: product, UX, mobile app, admin panel, backend, architecture, payments, infrastructure, and production.",
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
        tagline: "End-to-end system for dental practices.",
        description:
          "Multi-tenant system for dental practices. Brings together patients, professionals, appointments, services, clinical records, odontogram, accounting, and clinical imaging; also covers X-rays, STL files with a viewer, and a patient portal.",
        contribution:
          "End-to-end ownership: product, UX, frontend, backend, data modeling, multi-tenant architecture, and infrastructure.",
        technologies: ["Multi-tenant", "Clinical records", "PostgreSQL", "AWS S3"],
      },
      bienFria: {
        tagline: "Ops and traceability for a distributor.",
        description:
          "Management system for a distributor: products, orders, deliveries, stock, current accounts, reports, clients, and traceability per sales unit.",
        contribution:
          "End-to-end ownership: product, UX, frontend, backend, operational data, and infrastructure.",
        technologies: ["React", "Supabase", "Operations management"],
      },
      portfolio: {
        tagline: "A portfolio with a mind of its own.",
        description:
          "This portfolio snuck into the project list. If it isn't stopped now, it will soon take over the world.",
        contribution:
          "End-to-end ownership: experience, UI, motion, i18n, and interaction design.",
        technologies: ["React", "Easter egg"],
      },
      doseCalc: {
        tagline: "Dose calculation for nursing.",
        description:
          "Mobile app to support injectable medication dose calculations and unit conversions in nursing.",
        contribution:
          "End-to-end ownership: product, UX, and the full mobile app.",
        technologies: ["React Native"],
      },
      altoCenter: {
        tagline: "Landing page for a hotel complex.",
        description:
          "Landing page for a hotel complex, built with Next.js and TypeScript.",
        contribution:
          "End-to-end ownership: design, frontend, content, and deployment.",
        technologies: ["Next.js", "TypeScript"],
      },
      consultorios: {
        tagline: "Landing for fast medical care.",
        description:
          "Landing page specialized in fast medical care and complementary services.",
        contribution:
          "End-to-end ownership: design, frontend, content, and deployment.",
        technologies: ["Next.js"],
      },
      syp: {
        tagline: "Landing for medical aesthetics.",
        description:
          "Landing page for a medical aesthetics center.",
        contribution:
          "End-to-end ownership: design, frontend, content, and deployment.",
        technologies: ["Next.js"],
      },
    },
  },
  modal: {
    close: "Close",
    zoomImage: "Enlarge image",
    warningTitle: "The portfolio intervenes",
    duelTitle: "The portfolio challenges you",
    technologies: "Stack",
    role: "My role",
    overview: "Overview",
    live: "Live",
    delete: "Delete",
    acceptDuel: "Accept the duel",
    viewProject: "View project",
    viewGallery: "View gallery",
    gallery: "Gallery",
    imageN: "Image {n}",
    imageGallery: "Image gallery",
    closeGallery: "Close gallery",
    prev: "Previous",
    next: "Next",
  },
  warning: {
    close: "Close warning",
    alt: "Angry red portfolio eyes",
    title: "The portfolio intervenes",
    body: "Don't waste time on the others. The duel is still pending.",
  },
  contact: {
    eyebrow: "Contact",
    eyebrowDeleted: "My creator",
    title: "Got a product to build or improve?",
    titleDeleted: "If you want to talk to my creator, you can find him here.",
    description: "Let's talk about the next stage of your platform.",
    descriptionDeleted:
      "Facundo Journade can probably help you. I, on the other hand, will remember this.",
    email: "Email me",
    whatsapp: "WhatsApp",
    cv: "Download CV",
  },
  process: {
    eyebrow: "Method",
    title: "How I build products.",
    description:
      "A clear end-to-end process: discover the problem, design the experience, build with solidity, and ship to production.",
    steps: {
      discover: {
        title: "Discover",
        body: "I understand the problem, the users, and the real constraints before writing a line of code.",
      },
      design: {
        title: "Design",
        body: "I define flows, UX, and architecture so the product is usable, scalable, and sustainable.",
      },
      build: {
        title: "Build",
        body: "I develop frontend, backend, and infrastructure with a focus on quality, security, and iteration speed.",
      },
      ship: {
        title: "Ship",
        body: "I deploy, monitor, and evolve the product in production with continuous improvements.",
      },
    },
  },
  home: {
    scrollTop: "Back to top",
  },
  game: {
    exit: "EXIT",
    messages: [
      "So you accepted the duel. My creator builds products; I build excuses to keep you from leaving. Ready to try escaping?",
      "Brave. Or very optimistic. Let's see how long you last.",
      "Nice reflexes… but that button has its own agenda.",
      "Almost. The portfolio is enjoying this way too much.",
      "Now you're starting to understand the rules of the game.",
      "Not bad, human. My creator would approve of your persistence.",
      "Final round. Weakling, you shall not pass.",
      "Well played. I admit defeat… for now. Back to normal.",
    ],
  },
};

export default en;
