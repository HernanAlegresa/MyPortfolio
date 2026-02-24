import type { Locale } from "@/lib/i18n/config";

type LocaleString = { es: string; en: string };
type LocaleStringArray = { es: string[]; en: string[] };

// ─── Slug type ───────────────────────────────────────────────────────────────

export type CaseStudySlug =
  | "shopify-integrations-rebl"
  | "keycliq"
  | "oh-shirt"
  | "card-shootout";

// ─── Shopify Integrations ───────────────────────────────────────────────────

const rawShopify = {
  hero: {
    label: { es: "Trabajo profesional · Rebl Tech", en: "Professional work · Rebl Tech" } satisfies LocaleString,
    title: {
      es: "Trabajo en Shopify y Onboarding de Clientes",
      en: "Shopify and Client Onboarding Work",
    } satisfies LocaleString,
    subtitle: {
      es: "Integración técnica para comerciantes en Shopify usando Nosto, en entornos nativos y headless, con clientes reales y en producción.",
      en: "Technical integration for Shopify merchants using Nosto, in native and headless environments, with real clients and in production.",
    } satisfies LocaleString,
  },
  tags: {
    es: ["Shopify", "Nosto", "Headless Commerce", "Integración de APIs", "Onboarding de clientes", "E-commerce"],
    en: ["Shopify", "Nosto", "Headless Commerce", "API integration", "Client onboarding", "E-commerce"],
  } satisfies LocaleStringArray,
  heroImageAlt: {
    es: "Integraciones Shopify y onboarding de clientes",
    en: "Shopify integrations and client onboarding",
  } satisfies LocaleString,
  contexto: {
    label: { es: "Contexto", en: "Context" } satisfies LocaleString,
    heading: {
      es: "Rol Hibrido de Desarrollo y Consultoría",
      en: "Hybrid Development and Consulting Role",
    } satisfies LocaleString,
    para1: {
      es: "No fue un rol donde construí un producto de cero. Fue una posición técnica y orientada al cliente dentro de entornos de e-commerce reales en producción. Fui responsable de liderar los onboardings técnicos de clientes internacionales Shopify que integraban la extensión de Shopify llamada Nosto, donde me aseguraba de que sus tiendas estuvieran bien conectadas a Nosto y su plataforma, que todas las funcionalidades estuvieran configuradas correctamente y que nada estuviera roto en producción.",
      en: "It wasn't a role where I built a product from scratch. It was a technical, client-facing position within real e-commerce production environments. I was responsible for leading technical onboardings for international Shopify clients integrating the Shopify extension called Nosto, ensuring their stores were properly connected to Nosto and its platform, that all features were correctly configured, and that nothing was broken in production.",
    } satisfies LocaleString,
    para2: {
      es: "En muchos casos no modifiqué directamente el código del cliente. Lo revisé, identifiqué los problemas y les di a sus desarrolladores la guía precisa que necesitaban para resolverlo bien.\n\nEn algunos casos, si me encargaba de desarrollar funcionalidades a medida para los clientes, como sistemas de inventario personalizados para Fame on Central y participación en el desarrollo del sitio headless de Telemundo.",
      en: "In many cases I didn't directly modify the client's code. I reviewed it, identified issues, and gave their developers the precise guidance they needed to fix it. In some cases, I did develop custom functionality for clients, such as custom inventory systems for Fame on Central and participation in the headless site development for Telemundo.",
    } satisfies LocaleString,
  },
  responsabilidades: {
    label: { es: "Responsabilidades", en: "Responsibilities" } satisfies LocaleString,
    items: {
      es: [
        { iconId: "Users", titulo: "Liderazgo del onboarding", desc: "Dirigí sesiones de onboarding técnico para clientes de la plataforma de Nosto en Shopify, reuniones en vivo en inglés donde explicaba los requisitos de integración, documentación oficial de Nosto, los tiempos y los próximos pasos. El cliente y sus desarrolladores necesitaban claridad." },
        { iconId: "Code2", titulo: "Revisión de repositorios y auditoría", desc: "Revisé los repositorios de los clientes (headless o nativo) para entender su configuración técnica antes de tocar nada. Identificar los problemas de integración temprano, antes de que se conviertan en incidentes en producción, era parte central del trabajo." },
        { iconId: "Zap", titulo: "Implementación de tracking", desc: "Me aseguré de que el tracking de eventos, la validación del feed de productos y la ubicación de scripts estuvieran implementados correctamente. Un evento mal configurado es invisible hasta que algo falla." },
        { iconId: "Settings2", titulo: "Activación y configuración de funcionalidades", desc: "Activé y configuré las funcionalidades de Nosto según el plan de suscripción de cada cliente. Eso implicaba entender qué estaba incluido, qué no, y comunicar esas restricciones con claridad para evitar malentendidos." },
        { iconId: "BarChart3", titulo: "Módulos de personalización", desc: "Configuré recomendaciones de productos, merchandising por categoría, optimización de búsqueda, personalización on-site y pop-ups. Cada módulo requería entender los objetivos de la marca y traducirlos en la configuración correcta." },
        { iconId: "ShieldCheck", titulo: "Troubleshooting en producción", desc: "Diagnostiqué y resolví problemas de integración en entornos en vivo. Diagnóstico rápido y preciso era la única opción." },
        { iconId: "Globe", titulo: "Coordinación entre equipos", desc: "Coordiné entre desarrolladores del comerciante, equipos de marketing y stakeholders internos de Rebl Tech. Cada persona necesitaba un nivel de detalle distinto, y adapté el estilo de comunicación según el contexto." },
      ],
      en: [
        { iconId: "Users", titulo: "Onboarding leadership", desc: "I led technical onboarding sessions for Nosto platform clients on Shopify—live meetings in English where I explained integration requirements, official Nosto documentation, timelines, and next steps. Clients and their developers needed clarity." },
        { iconId: "Code2", titulo: "Repository review and audit", desc: "I reviewed client repositories (headless or native) to understand their technical setup before touching anything. Identifying integration issues early, before they became production incidents, was central to the work." },
        { iconId: "Zap", titulo: "Tracking implementation", desc: "I ensured event tracking, product feed validation, and script placement were correctly implemented. A misconfigured event is invisible until something breaks." },
        { iconId: "Settings2", titulo: "Feature activation and configuration", desc: "I activated and configured Nosto features according to each client's subscription plan. That meant understanding what was included, what wasn't, and communicating those constraints clearly to avoid misunderstandings." },
        { iconId: "BarChart3", titulo: "Personalization modules", desc: "I configured product recommendations, category merchandising, search optimization, on-site personalization, and pop-ups. Each module required understanding the brand's goals and translating them into the right configuration." },
        { iconId: "ShieldCheck", titulo: "Production troubleshooting", desc: "I diagnosed and resolved integration issues in live environments. Fast, accurate diagnosis was the only option." },
        { iconId: "Globe", titulo: "Cross-team coordination", desc: "I coordinated between merchant developers, marketing teams, and internal Rebl Tech stakeholders. Each person needed a different level of detail, and I adapted my communication style to the context." },
      ],
    },
  },
  entornos: {
    label: { es: "Entornos de integración", en: "Integration environments" } satisfies LocaleString,
    heading: { es: "Shopify Nativo vs. Headless", en: "Native Shopify vs. Headless" } satisfies LocaleString,
    intro: {
      es: "No todos los clientes eran iguales. Algunos usaban temas estándar en Liquid. Otros headless completamente personalizados. El enfoque de integración y el nivel de trabajo requerido era completamente distinto en cada caso.",
      en: "Not all clients were the same. Some used standard Liquid themes. Others were fully custom headless. The integration approach and level of work required was completely different in each case.",
    } satisfies LocaleString,
    items: {
      es: [
        { etiqueta: "Shopify Nativo", subtitulo: "Temas basados en Liquid", items: ["Inyección estándar del script de Nosto mediante Shopify Admin", "Tracking de eventos de producto y carrito vía Shopify Admin", "Validación del feed y sincronización del catálogo con la estructura nativa de Shopify", "Configuración de funcionalidades desde la plataforma de Nosto"] },
        { etiqueta: "Shopify Headless", subtitulo: "Arquitecturas API-first", items: ["Codigo personalizado desde el lado del cliente", "Implementación manual de tracking de eventos vía Nosto JS API", "Auditoría más profunda de la configuración de Nosto", "Onboarding más complejo: requería colaboración estrecha con el equipo técnico del cliente"] },
      ],
      en: [
        { etiqueta: "Native Shopify", subtitulo: "Liquid-based themes", items: ["Standard Nosto script injection via Shopify Admin", "Product and cart event tracking via Shopify Admin", "Feed validation and catalog sync with Shopify's native structure", "Feature configuration from the Nosto platform"] },
        { etiqueta: "Shopify Headless", subtitulo: "API-first architectures", items: ["Custom code on the client side", "Manual event tracking implementation via Nosto JS API", "Deeper audit of Nosto configuration", "More complex onboarding: required close collaboration with the client's technical team"] },
      ],
    },
  },
  nosto: {
    label: { es: "Plataforma de Nosto", en: "Nosto platform" } satisfies LocaleString,
    intro: {
      es: "Nosto es una extensión de Shopify y una plataforma de personalización para e-commerce. Parte del onboarding era asegurarse de que cada funcionalidad que el comerciante contrató estuviera correctamente activada y entregando valor. Eso implicaba configurar los módulos correctos de Nosto, validar su funcionamiento y llegar a los resultados esperados del cliente.",
      en: "Nosto is a Shopify extension and an e-commerce personalization platform. Part of onboarding was ensuring every feature the merchant subscribed to was correctly activated and delivering value. That meant configuring the right Nosto modules, validating their behavior, and meeting the client's expected outcomes.",
    } satisfies LocaleString,
    modulos: {
      es: ["Recomendaciones de productos", "Merchandising por categoría", "Optimización de búsqueda", "Personalización on-site", "Pop-ups, emails personalizados y bundles"],
      en: ["Product recommendations", "Category merchandising", "Search optimization", "On-site personalization", "Pop-ups, personalized emails and bundles"],
    } satisfies LocaleStringArray,
  },
  crecimiento: {
    label: { es: "Crecimiento", en: "Growth" } satisfies LocaleString,
    heading: { es: "Qué me dejó este rol", en: "What this role gave me" } satisfies LocaleString,
    intro: {
      es: "Trabajar en un rol técnico orientado al cliente y a nivel producción me enseñó cosas que construir proyectos personales no puede.",
      en: "Working in a client-oriented technical role at production level taught me things that building personal projects cannot.",
    } satisfies LocaleString,
    items: {
      es: ["Auditar codebases grandes y desconocidas", "Trabajar con APIs y capas de datos de e-commerce reales", "Trabajar desde el lado tecnico y de habilidades blandas también", "Comunicar restricciones técnicas con claridad a stakeholders no técnicos", "Gestionar el scope de funcionalidades según los planes de suscripción SaaS", "Resolver problemas en producción rápido y bajo presión real del cliente", "Optimizar configuraciones de personalización para UX y conversión", "Operar con clientes muy importantes y con grandes presupuestos"],
      en: ["Auditing large and unfamiliar codebases", "Working with real e-commerce APIs and data layers", "Working on both technical and soft-skill sides", "Communicating technical constraints clearly to non-technical stakeholders", "Managing feature scope according to SaaS subscription plans", "Resolving production issues quickly under real client pressure", "Optimizing personalization configs for UX and conversion", "Operating with high-profile clients and large budgets"],
    } satisfies LocaleStringArray,
  },
  impacto: {
    label: { es: "Impacto", en: "Impact" } satisfies LocaleString,
    heading: { es: "Qué demuestra esta experiencia", en: "What this experience demonstrates" } satisfies LocaleString,
    items: {
      es: [
        { titulo: "Experiencia real en producción", desc: "No fue un proyecto personal: comerciantes en vivo, revenue real, responsabilidad real. Operé en entornos donde los errores tenían consecuencias inmediatas." },
        { titulo: "Comunicación técnica orientada al cliente", desc: "Fui la persona que explicaba requisitos complejos de integración en lenguaje claro, liderando reuniones con desarrolladores y stakeholders no técnicos al mismo tiempo." },
        { titulo: "Conocimiento de plataforma", desc: "Suficientemente profundo en Shopify y Nosto para liderar onboardings de integración en configuraciones nativas y headless." },
        { titulo: "Adaptabilidad", desc: "Cada cliente tenía un stack distinto, un equipo distinto y un nivel de preparación técnica distinto. El trabajo era adaptarse y lograr que la integración funcionara sin importar las condiciones." },
      ],
      en: [
        { titulo: "Real production experience", desc: "It wasn't a personal project: live merchants, real revenue, real responsibility. I operated in environments where mistakes had immediate consequences." },
        { titulo: "Client-oriented technical communication", desc: "I was the person explaining complex integration requirements in clear language, leading meetings with both developers and non-technical stakeholders." },
        { titulo: "Platform knowledge", desc: "Deep enough in Shopify and Nosto to lead integration onboardings in both native and headless setups." },
        { titulo: "Adaptability", desc: "Each client had a different stack, a different team, and a different level of technical readiness. The job was to adapt and make the integration work regardless of conditions." },
      ],
    },
    quote: {
      es: "Este rol me llevó más allá del código. Tuve que entender el contexto del negocio, gestionar las expectativas del cliente y resolver problemas reales en entornos en vivo, a veces bajo presión y siempre con precisión.",
      en: "This role took me beyond code. I had to understand business context, manage client expectations, and solve real problems in live environments—sometimes under pressure and always with precision.",
    } satisfies LocaleString,
  },
  cta: {
    backToProjects: { es: "← Ver todos los proyectos", en: "← Back to projects" } satisfies LocaleString,
    contact: { es: "Contacto", en: "Contact" } satisfies LocaleString,
  },
};

// ─── KeyCliq ─────────────────────────────────────────────────────────────────

const rawKeycliq = {
  hero: {
    title: { es: "KeyCliq", en: "KeyCliq" } satisfies LocaleString,
    subtitle: {
      es: "Sistema de escaneo de llaves asistido por IA para identificarlas desde fotos y matchearlas contra el inventario de un usuario.",
      en: "AI-assisted key scanning system to identify keys from photos and match them against a user's inventory.",
    } satisfies LocaleString,
    intro: {
      es: "Construido mientras trabajaba en Rebl Tech, para resolver una necesidad de un cliente real: identificar llaves físicas desde fotos, matchearlas contra un inventario y llevar el historial completo de cada escaneo. El núcleo del sistema es un pipeline de visión personalizado, KeyScan, que evolucionó en varias versiones para mejorar la precisión y reducir los falsos positivos.",
      en: "Built while working at Rebl Tech to solve a real client need: identifying physical keys from photos, matching them against an inventory, and keeping the full history of each scan. The core of the system is a custom vision pipeline, KeyScan, which evolved through several versions to improve accuracy and reduce false positives.",
    } satisfies LocaleString,
  },
  tags: {
    es: ["IA / Visión por computadora", "Procesamiento de imágenes", "Matching y similitud", "Remix + React", "Prisma + Postgres", "Cloudinary", "Ingeniería de producto"],
    en: ["AI / Computer vision", "Image processing", "Matching and similarity", "Remix + React", "Prisma + Postgres", "Cloudinary", "Product engineering"],
  } satisfies LocaleStringArray,
  liveCta: {
    label: { es: "App en producción", en: "App in production" } satisfies LocaleString,
    heading: { es: "Podés ver KeyCliq funcionando ahora mismo", en: "You can see KeyCliq running right now" } satisfies LocaleString,
    desc: { es: "La app está desplegada en Vercel y disponible para explorar.", en: "The app is deployed on Vercel and available to explore." } satisfies LocaleString,
    button: { es: "Ver app en vivo", en: "View live app" } satisfies LocaleString,
  },
  problema: {
    label: { es: "Problema", en: "Problem" } satisfies LocaleString,
    heading: { es: "No identificar llaves físicas a simple vista", en: "Not being able to identify physical keys at a glance" } satisfies LocaleString,
    items: {
      es: ["Los equipos que manejan muchas llaves físicas pierden tiempo identificándolas manualmente.", "Por ejemplo, un portero encuentra una llave sin etiqueta y no sabe si es la correcta.", "O un dueño de casa encuentra una llave en el suelo y no sabe si es la correcta."],
      en: ["Teams that manage many physical keys waste time identifying them manually.", "For example, a concierge finds an unlabeled key and doesn't know if it's the right one.", "Or a homeowner finds a key on the floor and doesn't know if it's the right one."],
    } satisfies LocaleStringArray,
  },
  solucion: {
    label: { es: "Solución", en: "Solution" } satisfies LocaleString,
    heading: { es: "Un pipeline de visión personalizado para reconocimiento de llaves a través de imágenes", en: "A custom vision pipeline for key recognition from images" } satisfies LocaleString,
    items: {
      es: ["Una web app para capturar fotos de llaves, guardar registros e identificar llaves físicas a través de imágenes.", "KeyScan: un pipeline de visión con Model AI personalizado que extrae una firma compacta de la llave y la matchea contra las firmas de las llaves guardadas previamente en el inventario del usuario.", "Matching entre llaves: Match Found, Possible Match (mas de un match found, usuario decide cual es la correcta) o No Match."],
      en: ["A web app to capture key photos, save records, and identify physical keys through images.", "KeyScan: a vision pipeline with a custom AI model that extracts a compact key signature and matches it against signatures of keys previously stored in the user's inventory.", "Key matching: Match Found, Possible Match (more than one match found, user decides which is correct), or No Match."],
    } satisfies LocaleStringArray,
  },
  funcionalidades: {
    label: { es: "Funcionalidades", en: "Features" } satisfies LocaleString,
    heading: { es: "Qué hace", en: "What it does" } satisfies LocaleString,
    items: {
      es: [
        { iconId: "Key", titulo: "Inventario de llaves", desc: "Crear, editar y gestionar llaves por usuario. Cada llave guarda su firma en la base de datos. Al borrar una llave se limpia automáticamente, datos, firma e imagen en Cloudinary para mantener el almacenamiento consistente.", tags: ["CRUD", "Limpieza en Cloudinary", "Scope por usuario", "Firma de llave"] },
        { iconId: "Scan", titulo: "Escaneo y reconocimiento", desc: "Procesa la imagen subida por el usuario y generá una firma compacta. Compará contra el inventario del usuario y obtenés un resultado: Match Found, Possible Match o No Match.", tags: ["Model AI", "Extracción de firma", "Puntuación de confianza"] },
        { iconId: "SlidersHorizontal", titulo: "Firma de llave y matching", desc: "La firma de la llave esta compuesta de parámetros como dientes, color, marca, mango, etc. Se compara la firma de la llave con las firmas de las llaves guardadas previamente en el inventario del usuario usando la API de Open AI.", tags: ["Similitud coseno", "Umbrales configurables", "Matching"] },
        { iconId: "FlaskConical", titulo: "Pruebas y reportes", desc: "Suites de prueba reproducibles. Seguimiento de falsos positivos y negativos.", tags: ["Tests reproducibles", "Busqueda de FP y FN"] },
      ],
      en: [
        { iconId: "Key", titulo: "Key inventory", desc: "Create, edit, and manage keys per user. Each key stores its signature in the database. Deleting a key automatically cleans data, signature, and image in Cloudinary to keep storage consistent.", tags: ["CRUD", "Cloudinary cleanup", "Per-user scope", "Key signature"] },
        { iconId: "Scan", titulo: "Scanning and recognition", desc: "Processes the image uploaded by the user and generates a compact signature. Compares against the user's inventory and returns a result: Match Found, Possible Match, or No Match.", tags: ["AI model", "Signature extraction", "Confidence scoring"] },
        { iconId: "SlidersHorizontal", titulo: "Key signature and matching", desc: "The key signature is made of parameters such as teeth, color, brand, handle, etc. The key's signature is compared with signatures of keys previously stored in the user's inventory using the Open AI API.", tags: ["Cosine similarity", "Configurable thresholds", "Matching"] },
        { iconId: "FlaskConical", titulo: "Testing and reports", desc: "Reproducible test suites. Tracking of false positives and negatives.", tags: ["Reproducible tests", "FP and FN search"] },
      ],
    },
  },
  keyscan: {
    label: { es: "Sistema de reconocimiento", en: "Recognition system" } satisfies LocaleString,
    heading: { es: "KeyScan — Logica de escaneo y matching", en: "KeyScan — Scanning and matching logic" } satisfies LocaleString,
    intro: {
      es: "El algoritmo de matcheo no se publicó una sola vez y quedó ahí. Cada versión atacó un problema específico de la anterior.",
      en: "The matching algorithm wasn't shipped once and left as is. Each version addressed a specific problem from the previous one.",
    } satisfies LocaleString,
    etapas: {
      es: [
        { etiqueta: "V1", titulo: "Prueba de concepto", subtitulo: "Firma híbrida + similitud coseno", desc: "La primera versión definió la arquitectura central: extraer una firma compacta de una imagen de llave y compararla contra el inventario usando la API de Open AI. El objetivo era simple: demostrar que el concepto funcionaba y establecer umbrales base.", tags: ["Firma híbrida", "Similitud coseno", "Umbrales base"] },
        { etiqueta: "V3", titulo: "Shape-first y lógica de veto", subtitulo: "Reducción de falsos positivos", desc: "Se introdujo un enfoque shape-first para detectar llaves claramente distintas antes de ejecutar el matching completo. Mejoró significativamente la discriminación entre llaves diferentes.", tags: ["Shape-first", "Momentos de Hu", "Hausdorff", "Lógica de veto"] },
        { etiqueta: "V6", titulo: "Open AI API multimodal", subtitulo: "Pipeline moderno", desc: "Los documentos base anteriores se descartaron por no llegar a un resultado valido y se me ocurrio que se podía usar la API de Open AI para extraer la firma de la llave y compararla contra el inventario. Use un prompt optimizado para que OPEN AI acceda a la imagen, extraiga las caracteristicas de la misma y la compare contra las caracteristicas de las llaves guardadas previamente en el inventario.", tags: ["IA multimodal", "Pipeline en staging", "Enfoque moderno"] },
      ],
      en: [
        { etiqueta: "V1", titulo: "Proof of concept", subtitulo: "Hybrid signature + cosine similarity", desc: "The first version defined the core architecture: extract a compact signature from a key image and compare it against the inventory using the Open AI API. The goal was simple: prove the concept worked and establish base thresholds.", tags: ["Hybrid signature", "Cosine similarity", "Base thresholds"] },
        { etiqueta: "V3", titulo: "Shape-first and veto logic", subtitulo: "Reducing false positives", desc: "A shape-first approach was introduced to detect clearly different keys before running full matching. It significantly improved discrimination between different keys.", tags: ["Shape-first", "Hu moments", "Hausdorff", "Veto logic"] },
        { etiqueta: "V6", titulo: "Open AI multimodal API", subtitulo: "Modern pipeline", desc: "Previous base approaches were discarded for not yielding a valid result, and I realized the Open AI API could be used to extract the key signature and compare it against the inventory. I used an optimized prompt so that Open AI accesses the image, extracts its features, and compares them to the features of keys previously stored in the inventory.", tags: ["Multimodal AI", "Staging pipeline", "Modern approach"] },
      ],
    },
  },
  stack: {
    heading: { es: "Stack", en: "Stack" } satisfies LocaleString,
    items: {
      es: [
        { etiqueta: "Frontend", valor: "Remix / React + Tailwind CSS" },
        { etiqueta: "Backend", valor: "Node.js / rutas de servidor en Remix" },
        { etiqueta: "Base de datos", valor: "Supabase + Postgres + Prisma" },
        { etiqueta: "Media", valor: "Cloudinary — almacenamiento de imagenes" },
        { etiqueta: "Despliegue", valor: "Heroku staging — deploy automático desde main" },
        { etiqueta: "Seguridad", valor: "Desarrollo local con .env y deployment en Heroku" },
      ],
      en: [
        { etiqueta: "Frontend", valor: "Remix / React + Tailwind CSS" },
        { etiqueta: "Backend", valor: "Node.js / server routes in Remix" },
        { etiqueta: "Database", valor: "Supabase + Postgres + Prisma" },
        { etiqueta: "Media", valor: "Cloudinary — image storage" },
        { etiqueta: "Deployment", valor: "Heroku staging — auto deploy from main" },
        { etiqueta: "Security", valor: "Local development with .env and Heroku deployment" },
      ],
    },
  },
  desafios: {
    label: { es: "DESAFÍOS Y DECISIONES", en: "CHALLENGES AND DECISIONS" } satisfies LocaleString,
    items: {
      es: [
        { titulo: "La misma llave, fotos distintas", desc: "Luz, ángulo, desenfoque: una sola llave puede verse completamente diferente en cada foto." },
        { titulo: "Calibración de umbrales", desc: "Demasiado estricto y se pierden matcheos válidos. Demasiado flexible y se generan falsos positivos." },
        { titulo: "Prompt optimizado para Open AI API", desc: "Se optimizo el prompt para que Open AI extraiga las caracteristicas de la llave y la compare contra las caracteristicas de las llaves guardadas previamente en el inventario. No fue facil encontrar el prompt optimo para que Open AI entendiera la tarea y devolviera un resultado con los menores errores posibles, pero al final lo logre." },
      ],
      en: [
        { titulo: "Same key, different photos", desc: "Light, angle, blur: a single key can look completely different in each photo." },
        { titulo: "Threshold calibration", desc: "Too strict and you miss valid matches. Too loose and you get false positives." },
        { titulo: "Optimized prompt for Open AI API", desc: "The prompt was optimized so that Open AI extracts the key's features and compares them to the features of keys previously stored in the inventory. It wasn't easy to find the optimal prompt for Open AI to understand the task and return results with the fewest possible errors, but I got there in the end." },
      ],
    },
  },
  rol: {
    label: { es: "Responsabilidad", en: "Responsibility" } satisfies LocaleString,
    items: {
      es: ["Fui el encargado de todo el desarrollo del proyecto, desde la arquitectura hasta el despliegue.", "Construí el pipeline de extracción y matcheo de principio a fin, desde la captura de la imagen hasta el resultado de matching.", "Integré el pipeline en la app con el routing completo de API", "Estructuré los modelos de base de datos para firmas, consultas y registros de matcheo", "Foco en confiabilidad, pruebas reproducibles y un flujo listo para producción"],
      en: ["I was responsible for the entire project development, from architecture to deployment.", "I built the extraction and matching pipeline end to end, from image capture to match result.", "I integrated the pipeline into the app with full API routing", "I structured the database models for signatures, queries, and match records", "Focus on reliability, reproducible tests, and a production-ready flow"],
    } satisfies LocaleStringArray,
  },
  resultados: {
    label: { es: "Resultados", en: "Results" } satisfies LocaleString,
    heading: { es: "Qué logré", en: "What I achieved" } satisfies LocaleString,
    items: {
      es: ["Entregué un flujo de reconocimiento funcional: escaneo, firma, comparación y resultado", "Reduje falsos positivos entre versiones mejorando la lógica de discriminación", "Construí la base para matching de inventario escalable", "Creé documentación clara y una metodología de prueba reproducible"],
      en: ["I delivered a functional recognition flow: scan, signature, comparison, and result", "I reduced false positives across versions by improving discrimination logic", "I built the foundation for scalable inventory matching", "I created clear documentation and a reproducible testing methodology"],
    } satisfies LocaleStringArray,
    quote: {
      es: "KeyCliq es el tipo de proyecto que lleve mis capacidades al limite, me obligo a pensar fuera de la caja y a resolver problemas complejos de manera inteligente y eficiente.",
      en: "KeyCliq is the kind of project that pushed my capabilities to the limit, forcing me to think outside the box and solve complex problems in a smart and efficient way.",
    } satisfies LocaleString,
  },
  cta: {
    backToProjects: { es: "← Ver todos los proyectos", en: "← Back to projects" } satisfies LocaleString,
    contact: { es: "Contacto", en: "Contact" } satisfies LocaleString,
  },
};

// ─── Oh Shirt ───────────────────────────────────────────────────────────────

const rawOhShirt = {
  hero: {
    title: { es: "Oh Sh!rt Web", en: "Oh Sh!rt Web" } satisfies LocaleString,
    subtitle: {
      es: "Plataforma de e-commerce moderna para una marca de ropa streetwear masculina",
      en: "Modern e-commerce platform for a men's streetwear clothing brand",
    } satisfies LocaleString,
    intro: {
      es: "Diseñé y desarrollé una plataforma de e-commerce moderna para una marca de ropa streetwear masculina. El objetivo era construir una experiencia de compra limpia y premium, con buen rendimiento, SEO bien hecho y una arquitectura pensada para crecer.",
      en: "I designed and developed a modern e-commerce platform for a men's streetwear clothing brand. The goal was to build a clean, premium shopping experience with good performance, solid SEO, and an architecture built to scale.",
    } satisfies LocaleString,
  },
  liveCta: {
    label: { es: "App en producción", en: "App in production" } satisfies LocaleString,
    heading: { es: "Podés ver Oh Sh!rt funcionando ahora mismo", en: "You can see Oh Sh!rt running right now" } satisfies LocaleString,
    desc: { es: "La app está desplegada en Vercel y disponible para explorar.", en: "The app is deployed on Vercel and available to explore." } satisfies LocaleString,
    button: { es: "Ver app en vivo", en: "View live app" } satisfies LocaleString,
  },
  highlightsLabel: { es: "Puntos clave", en: "Key points" } satisfies LocaleString,
  stackLabel: { es: "Stack", en: "Stack" } satisfies LocaleString,
  highlights: {
    es: ["Desarrollo full stack", "Arquitectura escalable", "SEO como prioridad", "Sistema de filtrado personalizado", "Modelado de datos de producto", "Deploy en producción"],
    en: ["Full stack development", "Scalable architecture", "SEO as priority", "Custom filtering system", "Product data modeling", "Production deployment"],
  } satisfies LocaleStringArray,
  stack: {
    es: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "CVA", "Framer Motion", "Supabase", "Vercel"],
    en: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "CVA", "Framer Motion", "Supabase", "Vercel"],
  } satisfies LocaleStringArray,
  videoAriaLabel: { es: "Demo de la plataforma Oh Sh!rt", en: "Oh Sh!rt platform demo" } satisfies LocaleString,
  arquitectura: {
    heading: { es: "Decisiones técnicas", en: "Technical decisions" } satisfies LocaleString,
    intro: {
      es: "Cada decisión se tomó pensando en la escalabilidad y mantenibilidad de la plataforma.",
      en: "Every decision was made with the platform's scalability and maintainability in mind.",
    } satisfies LocaleString,
    items: {
      es: [
        { titulo: "Modelo de datos escalable", items: ["Catálogo de productos tipado en TypeScript", "Productos, categorías y colecciones estructurados para reutilización", "Expandible sin refactorizar el backend"] },
        { titulo: "Filtrado y estado en la URL", items: ["Sistema de filtrado dinámico con estado en la URL", "Vistas filtradas que se pueden compartir por link", "Separación clara entre lógica de UI y capa de datos"] },
        { titulo: "Arquitectura del carrito", items: ["Carrito con localStorage y flujo de checkout modular", "Pensado para integrar Stripe en el futuro", "Estado persistente entre navegaciones"] },
        { titulo: "Capa de SEO", items: ["Metadata dinámica por producto y colección", "Datos estructurados de producto en JSON-LD", "Sitemap dinámico y configuración de robots"] },
      ],
      en: [
        { titulo: "Scalable data model", items: ["TypeScript-typed product catalog", "Products, categories and collections structured for reuse", "Expandable without refactoring the backend"] },
        { titulo: "Filtering and URL state", items: ["Dynamic filtering system with URL state", "Filtered views that can be shared by link", "Clear separation between UI logic and data layer"] },
        { titulo: "Cart architecture", items: ["Cart with localStorage and modular checkout flow", "Designed to integrate Stripe in the future", "Persistent state across navigations"] },
        { titulo: "SEO layer", items: ["Dynamic metadata per product and collection", "Product structured data in JSON-LD", "Dynamic sitemap and robots configuration"] },
      ],
    },
  },
  ux: {
    heading: { es: "UX - UI orientado a la marca", en: "UX — Brand-oriented UI" } satisfies LocaleString,
    intro: {
      es: "El diseño no fue un agregado al final. Cada decisión de layout fue intencional, construida alrededor del producto y la experiencia del cliente. Creando una tienda web minimalista y moderna.",
      en: "Design wasn't an afterthought. Every layout decision was intentional, built around the product and customer experience. Creating a minimal, modern web store.",
    } satisfies LocaleString,
    items: {
      es: ["UI orientada a la marca", "Layout responsive-first", "Optimización mobile", "Atención al rendimiento", "Tipografía y espaciado cuidados", "Transiciones con Framer Motion"],
      en: ["Brand-oriented UI", "Responsive-first layout", "Mobile optimization", "Performance awareness", "Careful typography and spacing", "Framer Motion transitions"],
    } satisfies LocaleStringArray,
  },
  features: {
    heading: { es: "Funcionalidades clave", en: "Key features" } satisfies LocaleString,
    items: {
      es: [
        { titulo: "Filtrado dinámico de productos", desc: "Estado en la URL para vistas filtradas que se pueden guardar y compartir." },
        { titulo: "Navegación por colecciones", desc: "Colecciones estructuradas para una exploración limpia del catálogo." },
        { titulo: "Tarjetas de producto reutilizables", desc: "Sistema de componentes tipado para escalar junto al catálogo." },
        { titulo: "Carrito persistente", desc: "Estado del carrito en localStorage, listo para integrar Stripe." },
        { titulo: "Páginas optimizadas para SEO", desc: "Metadata dinámica, datos estructurados JSON-LD y generación de sitemap." },
        { titulo: "Deploy en producción", desc: "Publicado en Vercel con integraciones de formularios en Supabase." },
        { titulo: "Gestión de metadatos", desc: "Metadata OpenGraph y Twitter Card por página para compartir en redes." },
        { titulo: "Integración con Supabase", desc: "Formulario de contacto y lista de espera, separados de la lógica de comercio." },
      ],
      en: [
        { titulo: "Dynamic product filtering", desc: "URL state for filtered views that can be saved and shared." },
        { titulo: "Collection navigation", desc: "Structured collections for a clean catalog exploration." },
        { titulo: "Reusable product cards", desc: "Typed component system to scale with the catalog." },
        { titulo: "Persistent cart", desc: "Cart state in localStorage, ready to integrate Stripe." },
        { titulo: "SEO-optimized pages", desc: "Dynamic metadata, JSON-LD structured data, and sitemap generation." },
        { titulo: "Production deployment", desc: "Published on Vercel with Supabase form integrations." },
        { titulo: "Metadata management", desc: "OpenGraph and Twitter Card metadata per page for sharing." },
        { titulo: "Supabase integration", desc: "Contact form and waitlist, separate from commerce logic." },
      ],
    },
  },
  impacto: {
    label: { es: "Impacto", en: "Impact" } satisfies LocaleString,
    heading: { es: "Qué demuestra este proyecto", en: "What this project demonstrates" } satisfies LocaleString,
    items: {
      es: ["Pensamiento de producto", "Habilidades de arquitectura frontend", "Diseño de componentes limpio", "Conciencia de rendimiento", "Conocimiento de SEO", "Capacidad de publicar apps en producción", "Sensibilidad UI/UX"],
      en: ["Product thinking", "Frontend architecture skills", "Clean component design", "Performance awareness", "SEO knowledge", "Ability to ship apps to production", "UI/UX sensibility"],
    } satisfies LocaleStringArray,
    quote: {
      es: "Este proyecto refleja cómo busco desarrollar productos: estructurado, escalable y orientado al detalle, pensando siempre tanto en la experiencia del usuario como en la base técnica a largo plazo. Mi objetivo es crear productos que sean eficientes, escalables y que cumplan con los requisitos de la marca y el cliente.",
      en: "This project reflects how I aim to develop products: structured, scalable, and detail-oriented, always thinking about both user experience and long-term technical foundation. My goal is to create products that are efficient, scalable, and meet the brand and client requirements.",
    } satisfies LocaleString,
  },
  cta: {
    backToProjects: { es: "← Ver todos los proyectos", en: "← Back to projects" } satisfies LocaleString,
    contact: { es: "Contacto", en: "Contact" } satisfies LocaleString,
  },
};

// ─── Card Shootout ───────────────────────────────────────────────────────────

const rawCardShootout = {
  hero: {
    title: { es: "Card Shootout", en: "Card Shootout" } satisfies LocaleString,
    subtitle: {
      es: "Juego Mobile de penales de fútbol con sistema de cartas de jugadores y visión de producto a largo plazo.",
      en: "Mobile football penalty game with player card system and long-term product vision.",
    } satisfies LocaleString,
    intro: {
      es: "Card Shootout comenzó como mi proyecto final de bootcamp, pero rápidamente se convirtió en algo mucho más grande. Descubrí que con programación podía crear experiencias que mezclaran mis propios intereses, como el fútbol, con sistemas complejos diseñados desde cero.\n\nNo es un simple minijuego de penales, es una propuesta original que combina estrategia, cartas coleccionables y toma de decisiones del usuario en tiempo real, pensada como un producto escalable con potencial de negocio.",
      en: "Card Shootout started as my bootcamp final project but quickly became something much bigger. I discovered that with programming I could create experiences that mixed my own interests, like football, with complex systems designed from scratch.\n\nIt's not just a simple penalty minigame—it's an original concept that combines strategy, collectible cards, and real-time user decision-making, designed as a scalable product with business potential.",
    } satisfies LocaleString,
  },
  rolLabel: { es: "Mi rol", en: "My role" } satisfies LocaleString,
  stackLabel: { es: "Stack", en: "Stack" } satisfies LocaleString,
  stack: {
    es: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Capacitor"],
    en: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Capacitor"],
  } satisfies LocaleStringArray,
  stackNote: {
    es: "El proyecto fue originalmente desarrollado en Flutter, Firebase y Bloc como parte del bootcamp.\n\nLuego de finalizarlo, decidí reconstruirlo completamente utilizando un stack web moderno (Next.js, React, TypeScript y Supabase) con el objetivo de explorar mayor escalabilidad, arquitectura más robusta y posibilidad de expansión multiplataforma.\n\nEsta reconstrucción fue un desafío técnico intencional para validar que el concepto pudiera sostenerse como producto real.",
    en: "The project was originally developed in Flutter, Firebase and BLoC as part of the bootcamp.\n\nAfter finishing it, I decided to fully rebuild it using a modern web stack (Next.js, React, TypeScript and Supabase) to explore greater scalability, more robust architecture, and multi-platform expansion.\n\nThis rebuild was an intentional technical challenge to validate that the concept could hold up as a real product.",
  } satisfies LocaleString,
  heroImageAlt: { es: "Card Shootout — vista general del proyecto", en: "Card Shootout — project overview" } satisfies LocaleString,
  origen: {
    label: { es: "ORIGEN", en: "ORIGIN" } satisfies LocaleString,
    heading: { es: "De idea personal a concepto de producto", en: "From personal idea to product concept" } satisfies LocaleString,
    body: {
      es: "La idea nació cuando entendí que la programación no solo era una herramienta técnica, sino una forma de crear cosas que realmente me entusiasman. Quise combinar dos mundos: el desarrollo de software y el fútbol.\n\nAsí surgió Card Shootout: un juego de penales diferente a los existentes en el mercado. No es un juego basado únicamente en deslizar el dedo para ejecutar un tiro. Introduce un sistema híbrido donde las cartas influyen en cada jugada, pero la decisión final siempre pertenece al jugador.\n\nLa carta potencia, el usuario decide. Esa combinación estratégica es el núcleo del proyecto.",
      en: "The idea was born when I understood that programming wasn't just a technical tool but a way to create things that truly excite me. I wanted to combine two worlds: software development and football.\n\nThat's how Card Shootout emerged: a penalty game different from what exists on the market. It's not a game based solely on swiping to take a shot. It introduces a hybrid system where cards influence each play, but the final decision always belongs to the player.\n\nThe card empowers, the user decides. That strategic combination is the core of the project.",
    } satisfies LocaleString,
  },
  funcionalidades: {
    label: { es: "Funcionalidades", en: "Features" } satisfies LocaleString,
    heading: { es: "Qué hace el juego", en: "What the game does" } satisfies LocaleString,
    items: {
      es: [
        { titulo: "Sistema de equipo y formaciones", desc: "Los usuarios arman su equipo antes de cada partido. Gestión de jugadores con drag & drop entre titulares, suplentes y reservas. La formación afecta directamente el juego. La validación del equipo impide empezar un partido sin una alineación válida.", tags: ["Armador de equipo", "Drag & drop", "Lógica de formaciones", "Validación"] },
        { titulo: "Penales contra la CPU", desc: "Simulación estructurada de tanda de penales con turnos alternados y reglas reales. A diferencia de los juegos tradicionales basados únicamente en gestos deslizables, Card Shootout tiene una mecánica híbrida: las cartas del jugador influyen en atributos y probabilidades, pero la ejecución final depende siempre de la decisión del usuario. No es automatización, es estrategia + decisión.", tags: ["Reglas de penales", "Sistema de turnos", "Matriz de tiros"] },
        { titulo: "Sistema de cartas", desc: "Diferentes niveles de rareza (Bronce, Plata, Oro, Especial) y estructura de atributos que afectan el rendimiento en penales. Las cartas no juegan por sí solas: potencian las decisiones del jugador, manteniendo el control estratégico en manos del usuario.", tags: ["Niveles de rareza", "Supabase Storage"] },
        { titulo: "UI y experiencia", desc: "Diseño mobile-first con transiciones fluidas utilizando Framer Motion. Identidad visual inspirada en cartas deportivas y coleccionismo de fútbol. Arquitectura de pantallas pensada para escalabilidad futura (economía, tienda, perfiles y multiplayer).", tags: ["Mobile-first", "Framer Motion", "Responsive", "Arquitectura de pantallas"] },
      ],
      en: [
        { titulo: "Team and formation system", desc: "Users assemble their team before each match. Player management with drag & drop between starters, substitutes and reserves. Formation directly affects the game. Team validation prevents starting a match without a valid lineup.", tags: ["Team builder", "Drag & drop", "Formation logic", "Validation"] },
        { titulo: "Penalties vs CPU", desc: "Structured penalty shootout simulation with alternating turns and real rules. Unlike traditional games based only on swipe gestures, Card Shootout has a hybrid mechanic: player cards influence attributes and probabilities, but the final execution always depends on the user's decision. It's not automation—it's strategy + decision.", tags: ["Penalty rules", "Turn system", "Shot matrix"] },
        { titulo: "Card system", desc: "Different rarity levels (Bronze, Silver, Gold, Special) and attribute structure that affect penalty performance. Cards don't play by themselves: they enhance the player's decisions, keeping strategic control in the user's hands.", tags: ["Rarity levels", "Supabase Storage"] },
        { titulo: "UI and experience", desc: "Mobile-first design with smooth transitions using Framer Motion. Visual identity inspired by sports cards and football collectibles. Screen architecture designed for future scalability (economy, store, profiles and multiplayer).", tags: ["Mobile-first", "Framer Motion", "Responsive", "Screen architecture"] },
      ],
    },
  },
  rolItems: {
    es: ["Diseño de la arquitectura completa del juego", "Modelado de la lógica de penales y sistema de turnos", "Diseño del sistema de cartas (rareza, atributos, estructura de datos)", "Gestión de estado y flujo de partida", "Modelado de base de datos con Supabase", "Diseño de experiencia mobile-first y decisiones de UI/UX", "Dirección del roadmap y visión de producto a largo plazo"],
    en: ["Full game architecture design", "Penalty logic and turn system modeling", "Card system design (rarity, attributes, data structure)", "State management and match flow", "Database modeling with Supabase", "Mobile-first experience design and UI/UX decisions", "Roadmap direction and long-term product vision"],
  } satisfies LocaleStringArray,
  pantallas: {
    label: { es: "Pantallas", en: "Screens" } satisfies LocaleString,
    heading: { es: "Algunas pantallas del juego", en: "Some game screens" } satisfies LocaleString,
    intro: { es: "Una selección de pantallas que muestran distintos momentos de la experiencia.", en: "A selection of screens showing different moments of the experience." } satisfies LocaleString,
    captions: {
      es: ["Pantalla de inicio", "Gestión de equipo", "Vista previa pre-partida", "Tanda de penales — turno del golero", "Tanda de penales — turno del jugador", "Pantalla de resultados"],
      en: ["Home screen", "Team management", "Pre-match preview", "Penalty shootout — keeper's turn", "Penalty shootout — player's turn", "Results screen"],
    } satisfies LocaleStringArray,
  },
  vision: {
    label: { es: "Visión", en: "Vision" } satisfies LocaleString,
    heading: { es: "Hoja de ruta del producto", en: "Product roadmap" } satisfies LocaleString,
    intro: {
      es: "El objetivo es llevar Card Shootout más allá de partidas contra la CPU.\n\nEl diseño del sistema fue pensado desde el inicio con potencial de expansión hacia una economía completa de cartas y un ecosistema competitivo.",
      en: "The goal is to take Card Shootout beyond CPU matches.\n\nThe system design was conceived from the start with expansion potential toward a full card economy and a competitive ecosystem.",
    } satisfies LocaleString,
    items: {
      es: ["Sistema de monedas y recompensas", "Apertura de sobres y tienda interna", "Progresión y mejora de jugadores", "Partidas online y modo contra amigos", "Intercambio y mercado de cartas", "Torneos y competencias", "Sistema social y perfiles de usuario"],
      en: ["Coin and reward system", "Pack opening and in-app store", "Player progression and improvement", "Online matches and vs friends mode", "Card trading and marketplace", "Tournaments and competitions", "Social system and user profiles"],
    } satisfies LocaleStringArray,
  },
  impacto: {
    label: { es: "Impacto", en: "Impact" } satisfies LocaleString,
    heading: { es: "Qué demuestra este proyecto", en: "What this project demonstrates" } satisfies LocaleString,
    items: {
      es: ["Pensamiento de producto full stack", "Diseño de sistemas interactivos complejos", "Arquitectura escalable con stack moderno", "Gestión de estado y modelado de base de datos", "Capacidad de reconstrucción técnica y evolución de versiones", "Mentalidad iterativa y visión a largo plazo"],
      en: ["Full stack product thinking", "Complex interactive system design", "Scalable architecture with modern stack", "State management and database modeling", "Technical rebuild capability and version evolution", "Iterative mindset and long-term vision"],
    } satisfies LocaleStringArray,
    quote: {
      es: "Card Shootout demuestra que no solo desarrollo funcionalidades: diseño productos con visión, estructura y potencial real de crecimiento. Es un proyecto en el que creo profundamente y que, con el equipo y el tiempo adecuados, podría convertirse en un producto comercial sólido.",
      en: "Card Shootout demonstrates that I don't just build features: I design products with vision, structure, and real growth potential. It's a project I deeply believe in and that, with the right team and time, could become a solid commercial product.",
    } satisfies LocaleString,
  },
  cta: {
    backToProjects: { es: "← Ver todos los proyectos", en: "← Back to projects" } satisfies LocaleString,
    contact: { es: "Contacto", en: "Contact" } satisfies LocaleString,
  },
};

// ─── Resolved types (per slug) ────────────────────────────────────────────────

export type ShopifyCaseStudyContent = {
  hero: { label: string; title: string; subtitle: string };
  tags: string[];
  heroImageAlt: string;
  contexto: { label: string; heading: string; para1: string; para2: string };
  responsabilidades: { label: string; items: Array<{ iconId: string; titulo: string; desc: string }> };
  entornos: { label: string; heading: string; intro: string; items: Array<{ etiqueta: string; subtitulo: string; items: string[] }> };
  nosto: { label: string; intro: string; modulos: string[] };
  crecimiento: { label: string; heading: string; intro: string; items: string[] };
  impacto: { label: string; heading: string; items: Array<{ titulo: string; desc: string }>; quote: string };
  cta: { backToProjects: string; contact: string };
};

export type KeycliqCaseStudyContent = {
  hero: { title: string; subtitle: string; intro: string };
  tags: string[];
  liveCta: { label: string; heading: string; desc: string; button: string };
  problema: { label: string; heading: string; items: string[] };
  solucion: { label: string; heading: string; items: string[] };
  funcionalidades: { label: string; heading: string; items: Array<{ iconId: string; titulo: string; desc: string; tags: string[] }> };
  keyscan: { label: string; heading: string; intro: string; etapas: Array<{ etiqueta: string; titulo: string; subtitulo: string; desc: string; tags: string[] }> };
  stack: { heading: string; items: Array<{ etiqueta: string; valor: string }> };
  desafios: { label: string; items: Array<{ titulo: string; desc: string }> };
  rol: { label: string; items: string[] };
  resultados: { label: string; heading: string; items: string[]; quote: string };
  cta: { backToProjects: string; contact: string };
};

export type OhShirtCaseStudyContent = {
  hero: { title: string; subtitle: string; intro: string };
  liveCta: { label: string; heading: string; desc: string; button: string };
  highlightsLabel: string;
  stackLabel: string;
  highlights: string[];
  stack: string[];
  videoAriaLabel: string;
  arquitectura: { heading: string; intro: string; items: Array<{ titulo: string; items: string[] }> };
  ux: { heading: string; intro: string; items: string[] };
  features: { heading: string; items: Array<{ titulo: string; desc: string }> };
  impacto: { label: string; heading: string; items: string[]; quote: string };
  cta: { backToProjects: string; contact: string };
};

export type CardShootoutCaseStudyContent = {
  hero: { title: string; subtitle: string; intro: string };
  rolLabel: string;
  stackLabel: string;
  stack: string[];
  stackNote: string;
  rolItems: string[];
  heroImageAlt: string;
  origen: { label: string; heading: string; body: string };
  funcionalidades: { label: string; heading: string; items: Array<{ titulo: string; desc: string; tags: string[] }> };
  pantallas: { label: string; heading: string; intro: string; captions: string[] };
  vision: { label: string; heading: string; intro: string; items: string[] };
  impacto: { label: string; heading: string; items: string[]; quote: string };
  cta: { backToProjects: string; contact: string };
};

// ─── Resolvers ────────────────────────────────────────────────────────────────

function resolveShopify(locale: Locale): ShopifyCaseStudyContent {
  const d = rawShopify;
  return {
    hero: { label: d.hero.label[locale], title: d.hero.title[locale], subtitle: d.hero.subtitle[locale] },
    tags: d.tags[locale],
    heroImageAlt: d.heroImageAlt[locale],
    contexto: {
      label: d.contexto.label[locale],
      heading: d.contexto.heading[locale],
      para1: d.contexto.para1[locale],
      para2: d.contexto.para2[locale],
    },
    responsabilidades: { label: d.responsabilidades.label[locale], items: d.responsabilidades.items[locale] },
    entornos: {
      label: d.entornos.label[locale],
      heading: d.entornos.heading[locale],
      intro: d.entornos.intro[locale],
      items: d.entornos.items[locale],
    },
    nosto: {
      label: d.nosto.label[locale],
      intro: d.nosto.intro[locale],
      modulos: d.nosto.modulos[locale],
    },
    crecimiento: {
      label: d.crecimiento.label[locale],
      heading: d.crecimiento.heading[locale],
      intro: d.crecimiento.intro[locale],
      items: d.crecimiento.items[locale],
    },
    impacto: {
      label: d.impacto.label[locale],
      heading: d.impacto.heading[locale],
      items: d.impacto.items[locale],
      quote: d.impacto.quote[locale],
    },
    cta: { backToProjects: d.cta.backToProjects[locale], contact: d.cta.contact[locale] },
  };
}

function resolveKeycliq(locale: Locale): KeycliqCaseStudyContent {
  const d = rawKeycliq;
  return {
    hero: { title: d.hero.title[locale], subtitle: d.hero.subtitle[locale], intro: d.hero.intro[locale] },
    tags: d.tags[locale],
    liveCta: {
      label: d.liveCta.label[locale],
      heading: d.liveCta.heading[locale],
      desc: d.liveCta.desc[locale],
      button: d.liveCta.button[locale],
    },
    problema: { label: d.problema.label[locale], heading: d.problema.heading[locale], items: d.problema.items[locale] },
    solucion: { label: d.solucion.label[locale], heading: d.solucion.heading[locale], items: d.solucion.items[locale] },
    funcionalidades: { label: d.funcionalidades.label[locale], heading: d.funcionalidades.heading[locale], items: d.funcionalidades.items[locale] },
    keyscan: {
      label: d.keyscan.label[locale],
      heading: d.keyscan.heading[locale],
      intro: d.keyscan.intro[locale],
      etapas: d.keyscan.etapas[locale],
    },
    stack: { heading: d.stack.heading[locale], items: d.stack.items[locale] },
    desafios: { label: d.desafios.label[locale], items: d.desafios.items[locale] },
    rol: { label: d.rol.label[locale], items: d.rol.items[locale] },
    resultados: {
      label: d.resultados.label[locale],
      heading: d.resultados.heading[locale],
      items: d.resultados.items[locale],
      quote: d.resultados.quote[locale],
    },
    cta: { backToProjects: d.cta.backToProjects[locale], contact: d.cta.contact[locale] },
  };
}

function resolveOhShirt(locale: Locale): OhShirtCaseStudyContent {
  const d = rawOhShirt;
  return {
    hero: { title: d.hero.title[locale], subtitle: d.hero.subtitle[locale], intro: d.hero.intro[locale] },
    liveCta: {
      label: d.liveCta.label[locale],
      heading: d.liveCta.heading[locale],
      desc: d.liveCta.desc[locale],
      button: d.liveCta.button[locale],
    },
    highlightsLabel: d.highlightsLabel[locale],
    stackLabel: d.stackLabel[locale],
    highlights: d.highlights[locale],
    stack: d.stack[locale],
    videoAriaLabel: d.videoAriaLabel[locale],
    arquitectura: {
      heading: d.arquitectura.heading[locale],
      intro: d.arquitectura.intro[locale],
      items: d.arquitectura.items[locale],
    },
    ux: {
      heading: d.ux.heading[locale],
      intro: d.ux.intro[locale],
      items: d.ux.items[locale],
    },
    features: { heading: d.features.heading[locale], items: d.features.items[locale] },
    impacto: {
      label: d.impacto.label[locale],
      heading: d.impacto.heading[locale],
      items: d.impacto.items[locale],
      quote: d.impacto.quote[locale],
    },
    cta: { backToProjects: d.cta.backToProjects[locale], contact: d.cta.contact[locale] },
  };
}

function resolveCardShootout(locale: Locale): CardShootoutCaseStudyContent {
  const d = rawCardShootout;
  return {
    hero: { title: d.hero.title[locale], subtitle: d.hero.subtitle[locale], intro: d.hero.intro[locale] },
    rolLabel: d.rolLabel[locale],
    stackLabel: d.stackLabel[locale],
    stack: d.stack[locale],
    stackNote: d.stackNote[locale],
    rolItems: d.rolItems[locale],
    heroImageAlt: d.heroImageAlt[locale],
    origen: { label: d.origen.label[locale], heading: d.origen.heading[locale], body: d.origen.body[locale] },
    funcionalidades: { label: d.funcionalidades.label[locale], heading: d.funcionalidades.heading[locale], items: d.funcionalidades.items[locale] },
    pantallas: {
      label: d.pantallas.label[locale],
      heading: d.pantallas.heading[locale],
      intro: d.pantallas.intro[locale],
      captions: d.pantallas.captions[locale],
    },
    vision: {
      label: d.vision.label[locale],
      heading: d.vision.heading[locale],
      intro: d.vision.intro[locale],
      items: d.vision.items[locale],
    },
    impacto: {
      label: d.impacto.label[locale],
      heading: d.impacto.heading[locale],
      items: d.impacto.items[locale],
      quote: d.impacto.quote[locale],
    },
    cta: { backToProjects: d.cta.backToProjects[locale], contact: d.cta.contact[locale] },
  };
}

export function getCaseStudyContent(
  slug: CaseStudySlug,
  locale: Locale
): ShopifyCaseStudyContent | KeycliqCaseStudyContent | OhShirtCaseStudyContent | CardShootoutCaseStudyContent {
  switch (slug) {
    case "shopify-integrations-rebl":
      return resolveShopify(locale);
    case "keycliq":
      return resolveKeycliq(locale);
    case "oh-shirt":
      return resolveOhShirt(locale);
    case "card-shootout":
      return resolveCardShootout(locale);
    default:
      throw new Error(`Unknown case study slug: ${slug}`);
  }
}
