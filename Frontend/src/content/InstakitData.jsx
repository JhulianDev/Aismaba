import { v4 as uuidv4 } from 'uuid';
// Section Hero
import LIGHT_ICON from "../assets/img/generales/light_icon.svg";
import HERO_INSTAKIT from "../assets/img/generales/instakit/hero_instakit.webp";
// Section Benefits
import EDIT_ICON from "../assets/img/generales/instakit/edit_icon_instakit.svg"
import MINIMALIST_ICON from "../assets/img/generales/instakit/minimalist_icon_instakit.svg"
import PERSONALIZED_ICON from "../assets/img/generales/instakit/personalized_icon_instakit.svg"
// Section Portfolio
import PORTFOLIO_INSTAKIT_01 from "../assets/img/generales/instakit/portfolio_instakit_01.webp"
import PORTFOLIO_INSTAKIT_03 from "../assets/img/generales/instakit/portfolio_instakit_03.webp"
import PORTFOLIO_INSTAKIT_04 from "../assets/img/generales/instakit/portfolio_instakit_04.webp"
import PORTFOLIO_INSTAKIT_05 from "../assets/img/generales/instakit/portfolio_instakit_05.webp"
import PORTFOLIO_INSTAKIT_06 from "../assets/img/generales/instakit/portfolio_instakit_06.webp"
// Section Process
import IMAGE_PROCESS from "../assets/img/generales/portada-tienda.webp"

export const data = {
  hero: {
    tag: "INSTAKIT PARA EMPRENDEDORAS",
    icon: LIGHT_ICON,
    title: "Plantillas minimalistas 100% Personalizadas.",
    description: "Diseñadas exclusivamente para tu marca, para brindarle una personalidad única y profesional.",
    callToAction: "¡Lo Quiero!",
    link: "https://wa.link/sn2ako",
    image: HERO_INSTAKIT,
    alt: "MockUp Servicios"
  },
  benefits: [
    { id: uuidv4(), icon: EDIT_ICON, title: "Plantillas Editables", description: "En Canva Gratuito." },
    { id: uuidv4(), icon: MINIMALIST_ICON, title: "Feed Minimalista", description: "Aesthetic y funcional." },
    { id: uuidv4(), icon: PERSONALIZED_ICON, title: "Diseño Personalizado", description: "Exclusivo para tu marca" }
  ],
  information: {
    title: "Dale una imagen atractiva y armoniosa a tu perfil de Instagram.",
    description: (
      <>
        Un servicio <b>rápido y práctico</b> para darle una <b>estética de impacto</b> a tu perfil de Instagram.
        Ofrecemos plantillas <b>100% editables en Canva</b>, diseñadas para <b>reflejar la identidad de tu marca</b>,
        desde la paleta de colores hasta las tipografías y el estilo de fotografía.
      </>
    ),
    images: [
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_01, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_03, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_04, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_05, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_06, mobile: true }
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
        description: "Agendaremos una videollamada para conocernos y hablar sobre las necesidades específicas de tu marca y asi captar y transmitir con precisión su esencia y su personalidad."
      },
      {
        id: uuidv4(),
        number: "02",
        subtitle: "BRIEF",
        description: "Te enviaré un formulario con preguntas que me ayudaran a obtener la máxima información de tu marca y conocer a fondo tu proyecto."
      },
      {
        id: uuidv4(),
        number: "03",
        subtitle: "INVESTIGACIÓN",
        description: "Pautaremos una reunión vía chat de WhatsApp, para aclarar dudas del Brief, y concretar como llevaremos a cabo la imagen para tu perfil."
      },
      {
        id: uuidv4(),
        number: "04",
        subtitle: "PLANIFICACIÓN",
        description: "Levaremos a cabo un concepto visual de la imagen donde definiremos: paleta de colores, tipografías y estilo de fotografías que vayan acorde con la personalidad de tu marca."
      },
      {
        id: uuidv4(),
        number: "05",
        subtitle: "DISEÑO CREATIVO",
        description: "¡Daremos inicio a la parte más divertida! Comenzaremos a trabajar en la propuesta de las plantillas y el diseño del Feed."
      },
      {
        id: uuidv4(),
        number: "06",
        subtitle: "PROPUESTA",
        description: "Te presentaremos la propuesta diseñada y realizaremos las correcciones necesarias hasta que estés conforme con el resultado."
      },
      {
        id: uuidv4(),
        number: "07",
        subtitle: "ENTREGA",
        description: "Una vez estés conforme con el trabajo realizado y nos des tu aprobación, procederemos a enviarte vía mail la entrega final en todos los formatos correspondientes para su uso."
      }
    ]
  },
  pack: {
    title: "Adquiere tu INSTAKIT",
    subtitle: "Selecciona tu moneda local",
    price: { ARS: "99.999", USD: "99.99", EUR: "92.99" },
    items: [
      "6 PLANTILLAS POST SIMPLES",
      "3 PLANTILLAS PORTADAS REELS",
      "3 CARROUSELES (5 PAG. C/U",
      "3 PLANTILLAS DE HISTORIAS",
      "7 PORTADAS HISTORIAS DESTACADAS",
      "MANUAL DE ESTILO",
      "DISEÑO DE FEED",
      "PALETA DE COLORES",
      "TIPOGRAFIAS"
    ],
    delivery: (
      <>
        <b>ENTREGA:</b> 15 DIAS HABILES
      </>
    ),
    bonus: (
      <>
        <b>BONUS:</b> GUIA DE 96 IDEAS DE CONTENIDO PARA POSTS, REELS E HISTORIAS.
      </>
    ),
    link: "https://wa.link/sn2ako"
  },
  faqs: [
    {
      id: uuidv4(),
      question: "¿Haces el contenido de acuerdo a la marca o es genérico?",
      answer: "El servicio es totalmente personalizado, tendremos una reunión previa para hablar sobre las necesidades específicas de tu marca y asi captar y transmitir con precisión su esencia y su personalidad."
    },
    {
      id: uuidv4(),
      question: "¿Las plantillas las puedo reutilizar como yo quiera?",
      answer: "¡Claro que sí! Las plantillas que recibirás son 100% editables en Canva versión gratuita."
    },
    {
      id: uuidv4(),
      question: "Tengo una imagen que quiero conservar. ¿Se puede adaptar al servicio que estás ofreciendo?",
      answer: "Claro. Podemos respetar los lineamientos de tu imagen existente, y lograr que todo quede perfectamente armónico sin perder su esencia original."
    },
    {
      id: uuidv4(),
      question: "¿Ustedes manejarán la cuenta? ¿Crearán el contenido y lo publicarán?",
      answer: `Este servicio esta tiene como objetivo mejorar la estetica de tu feed con un diseño profesional. Si lo que buscas es el manejo de la cuenta y la ejecución de las ideas de contenido para las publicaciones dirijete a nuestro servicio "Creación de contenido".`
    },
    {
      id: uuidv4(),
      question: "¿Cual es el tiempo de entrega?",
      answer: "El servicio dura 15 días hábiles. Al finalizar esos 15 días vas a recibir todos los archivos realizados para que puedas hacer uso de ellos como tú lo desees."
    }
  ],
  contact: {
    cta: "¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.",
    link: "https://wa.link/sn2ako"
  }
}