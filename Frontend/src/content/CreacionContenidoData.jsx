import { v4 as uuidv4 } from 'uuid';
// Section Hero
import LIGHT_ICON from "../assets/img/generales/light_icon.svg";
import HERO_CREACION_CONTENIDO from "../assets/img/generales/contenido/hero_creacion_contenido.webp";
// Section Benefits
import GUION_ICON from "../assets/img/generales/contenido/guion_icon_creacion_contenido.svg"
import FEED_ICON from "../assets/img/generales/contenido/feed_icon_creacion_contenido.svg"
import DIAMOND_ICON from "../assets/img/generales/contenido/diamond_icon_creacion_contenido.svg"
// Section Portfolio
import PORTFOLIO_CONTENIDO_01 from "../assets/img/generales/contenido/portfolio_creacion_contenido_01.webp"
import PORTFOLIO_CONTENIDO_02 from "../assets/img/generales/contenido/portfolio_creacion_contenido_02.webp"
import PORTFOLIO_CONTENIDO_03 from "../assets/img/generales/contenido/portfolio_creacion_contenido_03.webp"
import PORTFOLIO_CONTENIDO_04 from "../assets/img/generales/contenido/portfolio_creacion_contenido_04.webp"
import PORTFOLIO_CONTENIDO_05 from "../assets/img/generales/contenido/portfolio_creacion_contenido_05.webp"
import PORTFOLIO_CONTENIDO_06 from "../assets/img/generales/contenido/portfolio_creacion_contenido_06.webp"
import PORTFOLIO_CONTENIDO_07 from "../assets/img/generales/contenido/portfolio_creacion_contenido_07.webp"
import PORTFOLIO_CONTENIDO_08 from "../assets/img/generales/contenido/portfolio_creacion_contenido_08.webp"
import PORTFOLIO_CONTENIDO_09 from "../assets/img/generales/contenido/portfolio_creacion_contenido_09.webp"
import PORTFOLIO_CONTENIDO_10 from "../assets/img/generales/contenido/portfolio_creacion_contenido_10.webp"
// Section Process
import IMAGE_PROCESS from "../assets/img/generales/portada-tienda.webp"

export const data = {
  hero: {
    tag: "CREACIÓN DE CONTENIDO",
    icon: LIGHT_ICON,
    title: "Creación de Contenido para emprendedoras.",
    description: "Diseñamos la estrategia perfecta para impulsar tu negocio en las redes sociales.",
    buttonType: "Link",
    callToAction: "¡Lo Quiero!",
    link: "https://wa.link/5x3oun",
    image: HERO_CREACION_CONTENIDO,
    alt: "MockUp Servicios"
  },
  benefits: [
    { id: uuidv4(), icon: GUION_ICON, title: "Guiones", description: "Ideas para tus Reels" },
    { id: uuidv4(), icon: FEED_ICON, title: "Diseño de feed", description: "Estético y Funcional" },
    { id: uuidv4(), icon: DIAMOND_ICON, title: "Ideas de contenido", description: "Especificas para tu marca" }
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
    price: { ARS: "150.000", USD: "200", EUR: "186" },
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
    link: "https://wa.link/xeaycn"
  },
  packMesPorMes: {
    namePack: "PACK MES POR MES",
    note: (
      <>
        APLICA SI YA CONTRATASTE EL <b>PACK PRIMER MES</b>
      </>
    ),
    subtitle: "Selecciona tu moneda local",
    price: { ARS: "150.000", USD: "200", EUR: "186" },
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
    link: "https://wa.link/wr86qg"
  },
  portfolio: {
    title: "Nuestro portafolio",
    subtitle: "¡Parte de nuestra magia!",
    images: [
      PORTFOLIO_CONTENIDO_01,
      PORTFOLIO_CONTENIDO_02,
      PORTFOLIO_CONTENIDO_03,
      PORTFOLIO_CONTENIDO_04,
      PORTFOLIO_CONTENIDO_05,
      PORTFOLIO_CONTENIDO_06,
      PORTFOLIO_CONTENIDO_07,
      PORTFOLIO_CONTENIDO_08,
      PORTFOLIO_CONTENIDO_09,
      PORTFOLIO_CONTENIDO_10
    ]
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
      question: "¿Ustedes manejarán la cuenta? ¿Crearán el contenido y lo publicarán?",
      answer: "Programaremos mediante una aplicación la carga automática del contenido exclusivo del Feed a Instagram. Pero el seguimiento del perfil, las publicaciones de las historias, los mensajes y comentarios corren por tu cuenta."
    },
    {
      id: uuidv4(),
      question: "Ya tengo una imagen que quiero conservar. ¿Se puede adaptar al servicio que estás ofreciendo?",
      answer: "Claro. Podemos respetar los lineamientos de tu imagen existente, y lograr que todo quede perfectamente armónico sin perder su esencia original."
    },
    {
      id: uuidv4(),
      question: "Si aún no tengo un perfil ¿Me crearan todo desde cero?",
      answer: "Te asesoramos como crear el perfil nuevo, con tu correo, nombre de usuario. Y te darémos las herramientas necesarias para que optimices cada parte del perfil. Eso acompañado de la imagen que prepararemos como el diseño del Feed y las portadas de historias destacadas."
    },
    {
      id: uuidv4(),
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer:
        <>
          · <b>Argentina:</b> podrás realizar el pago en pesos a través de MercadoPago o transferencia bancaria.
          <br />
          <br />
          · <b>Otros países:</b> te enviaremos un enlace de PayPal, con el que podrás pagar usando cualquier tarjeta de débito o crédito de tu país.
          <br />
          <br />
          · <b>Otros métodos de pago:</b> Binance, Payonner.
        </>
    },
  ],
  contact: {
    cta: "¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.",
    link: "https://wa.link/5x3oun"
  }
}