import { v4 as uuidv4 } from 'uuid';
import PORTADA_INSTAKIT from "../assets/img/generales/portada_instakit.png"
import ICONO_DOMINIO from "../assets/img/generales/Icono-Dominio.svg"
import ICONO_HOSTING from "../assets/img/generales/Icono-Hosting.svg"
import ICONO_RESPONSIVE from "../assets/img/generales/Icono-Responsive.svg"
import IMAGE_PROCESS from "../assets/img/generales/portada-tienda.png"
import PORTFOLIO_INSTAKIT_A from "../assets/img/generales/portfolio_instakit_1.jpg"
import PORTFOLIO_INSTAKIT_B from "../assets/img/generales/portfolio_instakit_2.jpg"
import PORTFOLIO_INSTAKIT_C from "../assets/img/generales/portfolio_instakit_3.jpg"
import PORTFOLIO_INSTAKIT_D from "../assets/img/generales/portfolio_instakit_4.jpg"
import STEP_01 from "../assets/img/generales/Step-01.webp";
import STEP_02 from "../assets/img/generales/Step-02.webp";
import STEP_03 from "../assets/img/generales/Step-03.webp";

export const data = {
  portada: {
    title: "Contenido",
    subtitle: "En Redes Sociales",
    description: "Que impulsa tu marca al siguiente nivel ",
    image: PORTADA_INSTAKIT
  },
  benefits: [
    { id: uuidv4(), icon: ICONO_DOMINIO, title: "Dominio Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_HOSTING, title: "Hosting Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_RESPONSIVE, title: "Diseño Adaptable", description: "A todos los dispositivos" }
  ],
  pillars: {
    presentation: "En AISMABA, ofrecemos un servicio completo para mejorar tu presencia en Instagram.",
    title: "Trabajaremos juntos en:",
    items: [
      {
        id: uuidv4(),
        subtitle: "ESTRATEGIA DIGITAL",
        description: "Desarrollamos estrategias digitales adaptadas a las necesidades específicas de tu marca, ayudandote a alcanzar tus objetivos de manera efectiva."
      },
      {
        id: uuidv4(),
        subtitle: "IMAGEN EN INSTAGRAM",
        description: "Creamos contenido visualmente atractivo, estetico y funcional, diseñando posts y edición de reels, que reflejen la identidad de tu marca."
      },
      {
        id: uuidv4(),
        subtitle: "DISEÑO DE CONTENIDO",
        description: "Te proporcionamos diseños de contenido y edición de reels completamente personalizados que se alinean perfectamente con tu marca."
      },
      {
        id: uuidv4(),
        subtitle: "ELEMENTOS DE MARCA",
        description: "Definimos aspectos clave de tu marca, como su concepto, valores, personalidad e identidad visual, diferenciandote y generando confianza en tu audiencia."
      }
    ]
  },
  process: {
    title: "Proceso de desarrollo",
    image: IMAGE_PROCESS,
    steps: [
      {
        id: uuidv4(),
        number: "01",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "02",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "03",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "04",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "05",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "06",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      },
      {
        id: uuidv4(),
        number: "07",
        subtitle: "LLAMADA INICIAL",
        description: "Nos reuniremos en una videollamada para conocernos y hablar sobre las necesidades que tiene tu marca. ¡Queremos conocer tu historia para transmitir tu esencia y valores únicos!"
      }
    ]
  },
  packPrimerMes: {
    namePack: "PACK PRIMER MES",
    note: (
      <>
        APLICA SI ES <b>TU PRIMERA VEZ</b> CONTRATANDO EL SERVICIO
      </>
    ),
    subtitle: "Selecciona tu moneda local",
    price: { ARS: "150.000", USD: "150", EUR: "140" },
    items: [
      { id: uuidv4(), number: "· 3", description: "POST SIMPLES (DE 1 PÁG C/U)" },
      { id: uuidv4(), number: "· 1", description: "Edición de Reels (Videos de hasta 30 segundos)" },
      { id: uuidv4(), number: "· 1", description: "Edición de Reels (Videos de hasta 1 minuto)" },
      { id: uuidv4(), number: "· 2", description: "Portadas de Reels para los videos mencionados" },
      { id: uuidv4(), number: "· 1", description: "Post de Carrusel (de 5 páginas)" },
      { id: uuidv4(), number: "· 8", description: "Historias" },
      { id: uuidv4(), description: "Copy (Descripciones) de los posts" },
      { id: uuidv4(), description: "Calendario mensual" },
      { id: uuidv4(), description: "Ideas de contenido especificAs para tu marca" },
      { id: uuidv4(), description: "Estructura y guión para los videos de reels" }
    ],
    additionals: {
      title: "Adicionales",
      items: [
        { id: uuidv4(), description: "Portadas para historias destacadas." },
        { id: uuidv4(), description: "Estrategia digital general." },
        { id: uuidv4(), description: "Guía de marca: Historia, misión, visión, arquetipo, personalidad." },
        { id: uuidv4(), description: "Reporte del estado actual del perfil de Instagram." },
        { id: uuidv4(), description: "Correcciones y mejoras en el perfil." },
        { id: uuidv4(), description: "Transformación y oportunidades." },
        { id: uuidv4(), description: "Paleta de colores." },
        { id: uuidv4(), description: "Tipografías." },
        { id: uuidv4(), description: "Estilo de fotografías." },
        { id: uuidv4(), description: "Propuesta de Feed." }
      ]
    },
    link: "https://wa.link/xc6bbv"
  },
  packMesPorMes: {
    namePack: "PACK MES POR MES",
    note: (
      <>
        APLICA SI YA CONTRATASTE EL <b>PACK PRIMER MES</b>
      </>
    ),
    subtitle: "Selecciona tu moneda local",
    price: { ARS: "150.000", USD: "150", EUR: "140" },
    items: [
      { id: uuidv4(), number: "· 4", description: "Posts simples (de 1 sola página c/u)" },
      { id: uuidv4(), number: "· 4", description: "Edición de Reels (Videos de hasta 30 segundos)" },
      { id: uuidv4(), number: "· 4", description: "Edición de Reels (Videos de hasta 1 minuto)" },
      { id: uuidv4(), number: "· 8", description: "Portadas de Reels para los videos mencionados" },
      { id: uuidv4(), number: "· 3", description: "Post de Carrusel (de 5 páginas)" },
      { id: uuidv4(), number: "· 20", description: "Historias" },
      { id: uuidv4(), description: "Copy (Descripciones) de los posts" },
      { id: uuidv4(), description: "Calendario mensual y diseño de feed" },
      { id: uuidv4(), description: "Ideas de contenido especificas para tu marca" },
      { id: uuidv4(), description: "Estructura y guión para los videos de reels" }
    ],
    additionals: {
      title: "Adicionales",
      items: [
        { id: uuidv4(), description: "Ideas de contenido para tus historias de Instagram de lunes a viernes." },
        { id: uuidv4(), description: "Estructura de contenido para los posts." },
        { id: uuidv4(), description: "Programación de la publicación de las piezas de contenido para el feed." },
        { id: uuidv4(), description: "Redacción de Copies (descripciones) y Hashtags." },
        { id: uuidv4(), description: "Diseño del Feed." }
      ]
    },
    link: "https://wa.link/xc6bbv"
  }
}