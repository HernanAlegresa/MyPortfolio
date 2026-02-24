import type { Locale } from "@/lib/i18n/config";

type LocaleString = { es: string; en: string };

// ─── Raw locale-keyed data ────────────────────────────────────────────────────

const rawAbout = {
  hero: {
    label: {
      es: "Sobre mí",
      en: "About me",
    } satisfies LocaleString,
    heading: {
      es: "Construyo productos completos,\nno partes sueltas.",
      en: "I build complete products,\nnot disconnected pieces.",
    } satisfies LocaleString,
    subheading: {
      es: "Desarrollador Full Stack de Uruguay. Dispuesto a desarrollarme como profesional y persona. Nadie nace sabiendo todo, siempre hay algo por aprender. Trabajo en frontend, backend, mobile y APIs, siempre de punta a punta: desde el diseño del sistema hasta lo que el usuario ve en pantalla.",
      en: "Full Stack Developer from Uruguay. Committed to growing as a professional and as a person — nobody knows everything, there's always something new to learn. I work across frontend, backend, mobile, and APIs, always end to end: from system design down to what the user sees on screen.",
    } satisfies LocaleString,
    imageAlt: {
      es: "Hernán Alegresa trabajando",
      en: "Hernán Alegresa working",
    } satisfies LocaleString,
  },

  trayectoria: {
    originLabel: {
      es: "Dónde empecé",
      en: "Where I started",
    } satisfies LocaleString,
    originHeading: {
      es: "De la administración al desarrollo",
      en: "From administration to development",
    } satisfies LocaleString,
    originText: {
      es: "Antes de dedicarme al desarrollo, trabaje en el area de Administración y Contabilidad. No fue un desvío, fue una base. Aprendí a pensar en procesos, a entender el contexto del negocio y desarrollar habilidades de gestión administrativa y contable. Las cuales hoy en dia como desarrollador me ayudan a tener un mejor entendimiento del negocio y de la empresa, fuera de lo que es el codigo. Hoy en dia no dejé esa experiencia atrás, la traje conmigo.",
      en: "Before moving into development, I worked in Administration and Accounting. It wasn't a detour — it was a foundation. I learned to think in processes, understand business context, and develop strong administrative and financial skills. Today, as a developer, those skills give me a sharper understanding of business beyond the code. I didn't leave that experience behind — I brought it with me.",
    } satisfies LocaleString,
    currentLabel: {
      es: "Dónde estoy hoy",
      en: "Where I am today",
    } satisfies LocaleString,
    currentHeading: {
      es: "Desarrollo Full Stack con sentido de negocio",
      en: "Full Stack development with business sense",
    } satisfies LocaleString,
    currentText: {
      es: "Porque comence mi carrera como desarrollador? Por el avance de la tecnologia y mi curiosidad por entender la programacion y codigo, el cual parecia chino para mi y algo muy dificil de aprender. Y hoy en dia, me da esa capacidad de poder crear, que tanto me llamaba la atencion. Hoy construyo sistemas que son técnicamente sólidos y también tienen sentido desde el punto de vista del negocio. Entiendo por qué el producto tiene que funcionar, no solo cómo hacerlo funcionar.",
      en: "Why did I start a career in development? Technology was advancing fast, and I was deeply curious about code — something that seemed impossible to grasp at first. Today, it gives me the ability to create, which is exactly what drew me in. I now build systems that are technically solid and make business sense. I understand why a product needs to work, not just how to make it work.",
    } satisfies LocaleString,
    remoteImageAlt: {
      es: "Trabajando de forma remota",
      en: "Working remotely",
    } satisfies LocaleString,
  },

  principios: {
    sectionLabel: {
      es: "Cómo trabajo",
      en: "How I work",
    } satisfies LocaleString,
    items: {
      es: [
        {
          titulo: "De punta a punta",
          desc: "Sigo un problema desde la arquitectura hasta la interfaz. Me importa cómo todo conecta: el modelo de datos, el diseño de la API, la estructura de componentes y el último detalle de UI.",
        },
        {
          titulo: "El producto primero",
          desc: "Cada decisión técnica que tomo tiene en cuenta lo que el producto realmente necesita. Construyo pensando en el usuario y en el resultado, no en cerrar tickets.",
        },
        {
          titulo: "La comunicación también es trabajo",
          desc: "Dirigí onboardings con clientes internacionales y revisé repositorios en producción. Saber moverse entre lo técnico y lo humano es algo que tomo en serio y me parece muy importante.",
        },
        {
          titulo: "Construir bien, mejorar con intención",
          desc: "Los buenos sistemas no nacen perfectos. Por ejemplo, en el desarrollo de KeyCliq, pasé por multiples versiones de logica, porque medí lo que fallaba y lo arreglé con criterio. Esa forma de trabajar la aplico en todo lo que construyo.",
        },
      ],
      en: [
        {
          titulo: "End to end",
          desc: "I follow a problem from architecture to interface. I care about how everything connects: the data model, the API design, the component structure, and the last UI detail.",
        },
        {
          titulo: "Product first",
          desc: "Every technical decision I make considers what the product actually needs. I build thinking about the user and the outcome — not about closing tickets.",
        },
        {
          titulo: "Communication is also work",
          desc: "I've led onboardings with international clients and reviewed production repositories. Moving fluidly between technical and human contexts is something I take seriously.",
        },
        {
          titulo: "Build right, improve with intention",
          desc: "Good systems aren't born perfect. In KeyCliq for example, I went through multiple logic iterations — measuring what failed and fixing it with criteria. That's the approach I apply to everything I build.",
        },
      ],
    },
  },

  proyectos: {
    sectionLabel: {
      es: "Proyectos seleccionados",
      en: "Selected projects",
    } satisfies LocaleString,
    sublabel: {
      es: "Cuatro dominios distintos, cuatro conjuntos de problemas distintos. Cada uno me enseñó algo que no podría haber aprendido de otra forma.",
      en: "Four distinct domains, four distinct problem sets. Each one taught me something I couldn't have learned any other way.",
    } satisfies LocaleString,
    items: {
      es: [
        {
          etiqueta: "Mobile Web App",
          titulo: "KeyCliq",
          slug: "keycliq",
          nota: "Construí toda la aplicación web, de principio a fin. Una aplicación web con integración de IA, que permite reconocer llaves y gestionar inventario, fue creada por pedido de una clienta de Canada relacionada al rubro de real-estate. Keycliq fue un proyecto de aproximadamente 2 meses de desarrollo, donde yo era el unico desarrollador. Un desafio muy grande y de mucha complejidad, pero que me ayudo a crecer mucho como desarrollador.",
        },
        {
          etiqueta: "Videojuego Mobile",
          titulo: "Card Shootout",
          slug: "card-shootout",
          nota: "Mi proyecto favorito, aun no finalizado, ya que tiene muchisimo por agregar y hacer. Una idea que tengo desde que comence mis estudios de programacion, juntando algo que me apasiona como el futbol y la programacion. Este videojuego lo presente en mi proyecto final del bootcamp de desarrollo full stack. En aquel entonces lo habia desarrollado en flutter, pero ahora lo estoy reconstruyendo en React Native. Es un juego el cual tiene una logica de negocio y monetizacion, el cual se que puede ser un juego que rompa el mercado y le puede ir muy bien en los mercados de juegos.",
        },
        {
          etiqueta: "E-commerce Shop",
          titulo: "Oh Sh!rt",
          slug: "oh-shirt",
          nota: "Una arquitectura de e-commerce lista para producción. SEO como prioridad, componentes reutilizables, etc. Un sitio web de e-commerce que se adapta a la marca y a los productos que se venden. Un sitio web que se puede expandir y crecer sin un rebuild completo.",
        },
        {
          etiqueta: "Trabajo con clientes Shopify",
          titulo: "Shopify Integrations",
          slug: "shopify-integrations-rebl",
          nota: "Entornos de producción, clientes reales, revenue real. Aprendí a diagnosticar rápido, comunicar con claridad y ser responsable del resultado. Un rol muy interesante y desafiante, donde trabaje para clientes muy importantes como Monica + Andy, SKKN, Greyson, Vici, y UTV.",
        },
      ],
      en: [
        {
          etiqueta: "Mobile Web App",
          titulo: "KeyCliq",
          slug: "keycliq",
          nota: "I built the entire web application from scratch, end to end. An AI-powered web app for key recognition and inventory management, created for a Canadian real-estate client. KeyCliq was roughly two months of development where I was the sole developer — a massive challenge that pushed me to grow significantly as an engineer.",
        },
        {
          etiqueta: "Mobile Game",
          titulo: "Card Shootout",
          slug: "card-shootout",
          nota: "My favorite project — still in progress, with a lot more to build. An idea I've had since I started learning to code, combining two passions: football and programming. I presented it as my bootcamp final project built in Flutter, and I'm now rebuilding it in React Native. It has a real business and monetization model — a game I genuinely believe can break into the market.",
        },
        {
          etiqueta: "E-commerce Shop",
          titulo: "Oh Sh!rt",
          slug: "oh-shirt",
          nota: "A production-ready e-commerce architecture. SEO-first, reusable components, built to scale. A storefront that adapts to the brand and its products — one that can expand and grow without a full rebuild.",
        },
        {
          etiqueta: "Shopify Client Work",
          titulo: "Shopify Integrations",
          slug: "shopify-integrations-rebl",
          nota: "Production environments, real clients, real revenue. I learned to diagnose fast, communicate clearly, and own outcomes. An interesting and demanding role working for major brands including Monica + Andy, SKKN, Greyson, Vici, and UTV.",
        },
      ],
    },
  },

  experiencia: {
    sectionLabel: {
      es: "Experiencia",
      en: "Experience",
    } satisfies LocaleString,
  },

  outOfOffice: {
    sectionLabel: {
      es: "Un poco sobre mi vida cotidiana y mis hobbies.",
      en: "A bit about my daily life and hobbies.",
    } satisfies LocaleString,
    heading: {
      es: "Out Of Office...",
      en: "Out Of Office...",
    } satisfies LocaleString,
    text: {
      es: "Fuera del mundo laboral y estudiantil soy una persona tranquila. Disfruto mucho estar con mi familia, mi perra \"Pipa\" y mis amigos, compartir tiempo de calidad, salir, reírnos y simplemente pasar buenos momentos.\n\nEl deporte es una parte muy importante de mi vida. El fútbol me acompaña desde chico. Jugué a nivel profesional juvenil y hoy sigo jugando a nivel amateur, disfrutándolo con la misma pasión de siempre.\n\nMe encanta viajar, conocer lugares nuevos y vivir experiencias. Creo que salir de la rutina, descubrir culturas y paisajes diferentes abre la cabeza y ayuda a crecer tanto personal como profesionalmente.",
      en: "Outside of work and study I'm a calm, grounded person. I love spending time with my family, my dog \"Pipa\", and my friends — quality time, going out, laughing, and simply enjoying good moments together.\n\nSport is a major part of my life. Football has been with me since childhood. I played at a professional youth level and still play amateur today, with the same passion as always.\n\nI love traveling, discovering new places, and collecting experiences. I think stepping outside your routine and exploring different cultures and landscapes opens your mind and helps you grow — personally and professionally.",
    } satisfies LocaleString,
  },

  educacion: {
    sectionLabel: {
      es: "Educación",
      en: "Education",
    } satisfies LocaleString,
    items: {
      es: [
        {
          institucion: "Holberton School Uruguay",
          titulo: "Desarrollo Full Stack",
          periodo: "Oct 2023 – Nov 2024",
        },
        {
          institucion: "FCEA — Udelar",
          titulo: "Licenciatura en Administración (Retomada)",
          periodo: "2021 – 2023",
        },
        {
          institucion: "Stella Maris School",
          titulo: "Educación primaria y secundaria bilingüe",
          periodo: "",
        },
      ],
      en: [
        {
          institucion: "Holberton School Uruguay",
          titulo: "Full Stack Development",
          periodo: "Oct 2023 – Nov 2024",
        },
        {
          institucion: "FCEA — Udelar",
          titulo: "Business Administration (Resumed)",
          periodo: "2021 – 2023",
        },
        {
          institucion: "Stella Maris School",
          titulo: "Bilingual primary and secondary education",
          periodo: "",
        },
      ],
    },
  },

  idiomas: {
    sectionLabel: {
      es: "Idiomas",
      en: "Languages",
    } satisfies LocaleString,
    items: {
      es: [
        { idioma: "Español", nivel: "Nativo" },
        { idioma: "Inglés", nivel: "Avanzado" },
        { idioma: "Portugués", nivel: "Bueno" },
      ],
      en: [
        { idioma: "Spanish", nivel: "Native" },
        { idioma: "English", nivel: "Advanced" },
        { idioma: "Portuguese", nivel: "Good" },
      ],
    },
    availabilityLabel: {
      es: "Disponible para",
      en: "Available for",
    } satisfies LocaleString,
    availabilityTags: {
      es: ["Remoto", "Full-time", "Freelance", "Contrato"],
      en: ["Remote", "Full-time", "Freelance", "Contract"],
    },
  },

  cta: {
    heading: {
      es: "Construyamos algo juntos",
      en: "Let's build something together",
    } satisfies LocaleString,
    contactButton: {
      es: "Escribime",
      en: "Get in touch",
    } satisfies LocaleString,
    projectsButton: {
      es: "Ver mis proyectos",
      en: "See my projects",
    } satisfies LocaleString,
  },

  lifestyleImageAlt: {
    es: "Hernán Alegresa",
    en: "Hernán Alegresa",
  } satisfies LocaleString,
};

// ─── Resolved types ───────────────────────────────────────────────────────────

export type PrincipioItem = { titulo: string; desc: string };
export type ProyectoAboutItem = { etiqueta: string; titulo: string; slug: string; nota: string };
export type EducacionItem = { institucion: string; titulo: string; periodo: string };
export type IdiomaItem = { idioma: string; nivel: string };

export type AboutContent = {
  hero: {
    label: string;
    heading: string;
    subheading: string;
    imageAlt: string;
  };
  trayectoria: {
    originLabel: string;
    originHeading: string;
    originText: string;
    currentLabel: string;
    currentHeading: string;
    currentText: string;
    remoteImageAlt: string;
  };
  principios: {
    sectionLabel: string;
    items: PrincipioItem[];
  };
  proyectos: {
    sectionLabel: string;
    sublabel: string;
    items: ProyectoAboutItem[];
  };
  experiencia: {
    sectionLabel: string;
  };
  outOfOffice: {
    sectionLabel: string;
    heading: string;
    text: string;
  };
  educacion: {
    sectionLabel: string;
    items: EducacionItem[];
  };
  idiomas: {
    sectionLabel: string;
    items: IdiomaItem[];
    availabilityLabel: string;
    availabilityTags: string[];
  };
  cta: {
    heading: string;
    contactButton: string;
    projectsButton: string;
  };
  lifestyleImageAlt: string;
};

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function getAboutContent(locale: Locale): AboutContent {
  const d = rawAbout;
  return {
    hero: {
      label: d.hero.label[locale],
      heading: d.hero.heading[locale],
      subheading: d.hero.subheading[locale],
      imageAlt: d.hero.imageAlt[locale],
    },
    trayectoria: {
      originLabel: d.trayectoria.originLabel[locale],
      originHeading: d.trayectoria.originHeading[locale],
      originText: d.trayectoria.originText[locale],
      currentLabel: d.trayectoria.currentLabel[locale],
      currentHeading: d.trayectoria.currentHeading[locale],
      currentText: d.trayectoria.currentText[locale],
      remoteImageAlt: d.trayectoria.remoteImageAlt[locale],
    },
    principios: {
      sectionLabel: d.principios.sectionLabel[locale],
      items: d.principios.items[locale],
    },
    proyectos: {
      sectionLabel: d.proyectos.sectionLabel[locale],
      sublabel: d.proyectos.sublabel[locale],
      items: d.proyectos.items[locale],
    },
    experiencia: {
      sectionLabel: d.experiencia.sectionLabel[locale],
    },
    outOfOffice: {
      sectionLabel: d.outOfOffice.sectionLabel[locale],
      heading: d.outOfOffice.heading[locale],
      text: d.outOfOffice.text[locale],
    },
    educacion: {
      sectionLabel: d.educacion.sectionLabel[locale],
      items: d.educacion.items[locale],
    },
    idiomas: {
      sectionLabel: d.idiomas.sectionLabel[locale],
      items: d.idiomas.items[locale],
      availabilityLabel: d.idiomas.availabilityLabel[locale],
      availabilityTags: d.idiomas.availabilityTags[locale],
    },
    cta: {
      heading: d.cta.heading[locale],
      contactButton: d.cta.contactButton[locale],
      projectsButton: d.cta.projectsButton[locale],
    },
    lifestyleImageAlt: d.lifestyleImageAlt[locale],
  };
}
