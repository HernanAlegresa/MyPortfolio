import type { Locale } from "@/lib/i18n/config";
import type { ExperienceItem } from "@/lib/types/portfolio";

type LocaleString = { es: string; en: string };
type LocaleStringArray = { es: string[]; en: string[] };

const experienceData: Array<{
  company: string;
  role: LocaleString;
  period: string;
  location: LocaleString;
  highlights: LocaleStringArray;
}> = [
  {
    company: "Rebl Tech",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: "2024 – 2025",
    location: { es: "Remoto", en: "Remote" },
    highlights: {
      es: [
        "Fui desarrollador principal y único de KeyCliq, una aplicación móvil con integración de IA para reconocimiento de llaves y gestión de inventario, liderando su arquitectura, diseño técnico y ejecución completa de principio a fin.",
        "Desarrollé funcionalidades y onboardings técnicos en arquitecturas Shopify nativas y headless, incluyendo un sistema de inventario personalizado para Fame on Central y participación en el desarrollo del sitio headless de Telemundo.",
        "Implementé integraciones de APIs y desarrollos a medida para marcas como Monica + Andy, SKKN, Greyson, Vici, UTV y otros clientes, asumiendo responsabilidad técnica completa desde el análisis hasta la entrega.",
        "Coordiné con clientes internacionales, traduciendo requerimientos de negocio en soluciones técnicas claras y entregas confiables en entornos de producción real.",
      ],
      en: [
        "Led the full development of KeyCliq, an AI-powered mobile web app for key recognition and inventory management — sole developer, responsible for architecture, technical design, and end-to-end execution.",
        "Built features and technical onboardings for native and headless Shopify architectures, including a custom inventory system for Fame on Central and participation in the headless Telemundo site.",
        "Implemented API integrations and custom solutions for brands including Monica + Andy, SKKN, Greyson, Vici, and UTV, taking full technical ownership from analysis to delivery.",
        "Coordinated with international clients, translating business requirements into clear technical solutions and reliable delivery in live production environments.",
      ],
    },
  },
  {
    company: "Auren Uruguay",
    role: { es: "Asistente Administrativo", en: "Administrative Assistant" },
    period: "2023",
    location: { es: "Montevideo", en: "Montevideo" },
    highlights: {
      es: [
        "Gestioné operaciones administrativas y flujos de documentación utilizando herramientas como Microsoft Office, Excel y software de gestión interna, con atención constante a los plazos y la calidad del servicio.",
        "Organicé y mantuve bases de datos documentales, registros administrativos y archivos de clientes, garantizando precisión y accesibilidad de la información.",
        "Mejoré la eficiencia de procesos cotidianos mediante priorización, seguimientos estructurados y resolución proactiva de problemas en un entorno profesional dinámico.",
      ],
      en: [
        "Managed administrative operations and documentation flows using Microsoft Office, Excel, and internal management software, with constant attention to deadlines and service quality.",
        "Organized and maintained document databases, administrative records, and client files, ensuring accuracy and accessibility of information.",
        "Improved daily process efficiency through prioritization, structured follow-ups, and proactive problem-solving in a dynamic professional environment.",
      ],
    },
  },
  {
    company: "Posadas y Vecino",
    role: { es: "Asistente Contable", en: "Accounting Assistant" },
    period: "2021 – 2022",
    location: { es: "Montevideo", en: "Montevideo" },
    highlights: {
      es: [
        "Realicé tareas contables utilizando herramientas especializadas como Sigma, Padi, Bkper y Magma, abarcando ingreso de datos, mantenimiento de registros financieros y control de documentos con precisión constante.",
        "Colaboré en rutinas de reporting y conciliación financiera para apoyar cierres en tiempo y cumplimiento de estándares de control interno.",
        "Construí una base sólida de disciplina, orientación al detalle y trabajo en equipo que más adelante moldeó mi enfoque de producto y desarrollo.",
      ],
      en: [
        "Performed accounting tasks using specialized tools including Sigma, Padi, Bkper, and Magma — covering data entry, financial record maintenance, and document control with consistent accuracy.",
        "Collaborated on reporting and financial reconciliation routines to support timely closings and compliance with internal control standards.",
        "Built a solid foundation of discipline, attention to detail, and teamwork that later shaped my approach to product thinking and development.",
      ],
    },
  },
];

export function getExperience(locale: Locale): ExperienceItem[] {
  return experienceData.map((item) => ({
    company: item.company,
    role: item.role[locale],
    period: item.period,
    location: item.location[locale],
    highlights: item.highlights[locale],
  }));
}
