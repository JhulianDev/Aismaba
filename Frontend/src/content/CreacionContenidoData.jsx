import { v4 as uuidv4 } from 'uuid';
import PORTADA_INSTAKIT from "../assets/img/generales/portada_instakit.png"
import ICONO_DOMINIO from "../assets/img/generales/Icono-Dominio.svg"
import ICONO_HOSTING from "../assets/img/generales/Icono-Hosting.svg"
import ICONO_RESPONSIVE from "../assets/img/generales/Icono-Responsive.svg"
import IMAGE_PROCESS from "../assets/img/generales/portada-tienda.webp"

export const data = {
  portada: {
    title: "Contenido",
    subtitle: "En Redes Sociales",
    description: "Que impulsa tu marca al siguiente nivel ",
    image: PORTADA_INSTAKIT
  },
  benefits: [
    { id: uuidv4(), icon: ICONO_DOMINIO, title: "Diseño de Feed", description: "Estetico y funcional" },
    { id: uuidv4(), icon: ICONO_HOSTING, title: "Edición de Reels", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_RESPONSIVE, title: "Ideas de Contenido", description: "A todos los dispositivos" }
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
        description: "Agendamos una videollamada para compartir todos los detalles de tus ideas y ponerte al tanto sobre cada detalle de nuestro trabajo el primer mes y los meses siguientes."
      },
      {
        id: uuidv4(),
        number: "02",
        subtitle: "BRIEF",
        description: "Te enviaré un formulario donde obtendremos la máxima información de tu marca. Conoceremos a fondo tu proyecto."
      },
      {
        id: uuidv4(),
        number: "03",
        subtitle: "INVESTIGACIÓN",
        description: "Pautaremos una reunión vía chat de WhatsApp, para aclarar dudas del Brief, y concretar como llevaremos a cabo la estrategia e imagen."
      },
      {
        id: uuidv4(),
        number: "04",
        subtitle: "ESTRATEGIA",
        description: "Realizaremos un diagnostico de tu perfil y desarrollaremos una estrategia digital específica para la esencia de tu marca."
      },
      {
        id: uuidv4(),
        number: "05",
        subtitle: "CALENDARIO MENSUAL",
        description: "Elaboraremos mes a mes un calendario de ideas de contenido basados en los objetivos del mes."
      },
      {
        id: uuidv4(),
        number: "06",
        subtitle: "DISEÑO Y EDICIÓN",
        description: "Prepararemos el contenido, estructura de posts, guion y edición para los videos, redacción de copies. Diseño de las piezas de contenido."
      },
      {
        id: uuidv4(),
        number: "07",
        subtitle: "PUBLICACIÓN",
        description: "Una vez aprobado y culminado cada uno de las piezas de contenido del Feed, programare mediante una aplicación para que se suban automáticamente el contenido del Feed a Instagram."
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
  },
  faqs: [
    {
      id: uuidv4(),
      question: "¿Cómo haríamos el contenido si somos de distintos países?",
      answer: "Podemos trabajar desde cualquier parte del mundo, todo de forma online. Nosotros Llevaremos a cabo la estructura de cómo serán los Reels, el guion, te daremos técnicas para que tu hagas la grabación, y luego editamos los videos."
    },
    {
      id: uuidv4(),
      question: "¿Ustedes me darán las ideas de contenido para mis publicaciones?",
      answer: "¡Claro que sí! Llevaremos a cabo las ideas mes a mes para desarrollar todo el contenido de la marca. Elaboraremos desde las ideas, hasta plasmarlas en los posts y videos, y luego redactar los copies para que esté listo para publicar."
    },
    {
      id: uuidv4(),
      question: "Si ya tengo los colores y tipografías, pero quiero cambiar ¿Podrías ayudarme?",
      answer: "¡Por supuesto! Te ayudaremos a definir una imagen completa, que incluye los colores, las tipografías, y el estilo de fotografías."
    },
    {
      id: uuidv4(),
      question: "Ya tengo una imagen que quiero conservar. ¿Se puede adaptar al servicio que estás ofreciendo?",
      answer: "Claro. Podemos respetar los lineamientos de tu imagen existente, y lograr que todo quede perfectamente armónico sin perder su esencia original."
    },
    {
      id: uuidv4(),
      question: "Si aún no tengo un perfil ¿Me crearan todo desde cero?",
      answer: "Te asesoramos como crear el perfil nuevo, con tu correo, nombre de usuario. Y te darémos las herramientas necesarias para que coloques en cada parte del perfil. Eso acompañado de la imagen que prepararemos como el diseño del Feed y las portadas de historias destacadas."
    },
    {
      id: uuidv4(),
      question: "¿Ustedes manejarán la cuenta? ¿Crearán el contenido y lo publicarán?",
      answer: "Programaremos mediante una aplicación la carga automática del contenido exclusivo del Feed a Instagram. Pero el seguimiento del perfil, las publicaciones de las historias, los mensajes y comentarios corren por tu cuenta."
    }
  ],
  contact: {
    cta: "¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.",
    link: "https://wa.link/xc6bbv"
  }
}