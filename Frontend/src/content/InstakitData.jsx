import { v4 as uuidv4 } from 'uuid';
import PORTADA_INSTAKIT from "../assets/img/generales/portada_instakit.png"
import ICONO_DOMINIO from "../assets/img/generales/Icono-Dominio.svg"
import ICONO_HOSTING from "../assets/img/generales/Icono-Hosting.svg"
import ICONO_RESPONSIVE from "../assets/img/generales/Icono-Responsive.svg"
import PORTFOLIO_INSTAKIT_A from "../assets/img/generales/portfolio_instakit_1.jpg"
import PORTFOLIO_INSTAKIT_B from "../assets/img/generales/portfolio_instakit_2.jpg"
import PORTFOLIO_INSTAKIT_C from "../assets/img/generales/portfolio_instakit_3.jpg"
import PORTFOLIO_INSTAKIT_D from "../assets/img/generales/portfolio_instakit_4.jpg"
import STEP_01 from "../assets/img/generales/Step-01.webp";
import STEP_02 from "../assets/img/generales/Step-02.webp";
import STEP_03 from "../assets/img/generales/Step-03.webp";

export const data = {
  frontpage: {
    title: "Instakit",
    subtitle: "Plantillas Editables",
    description: "Diseñadas 100% con la identidad de tu marca",
    image: PORTADA_INSTAKIT
  },
  benefits: [
    { id: uuidv4(), icon: ICONO_DOMINIO, title: "Dominio Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_HOSTING, title: "Hosting Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_RESPONSIVE, title: "Diseño Adaptable", description: "A todos los dispositivos" }
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
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_A, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_B, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_C, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_D, mobile: false },
      { id: uuidv4(), image: PORTFOLIO_INSTAKIT_A, mobile: true }
    ]
  },
  process: {
    title: "¿Como lo haremos?",
    subtitle: "¡En 3 simples pasos!",
    steps: [
      {
        id: uuidv4(),
        position: "left",
        number: "01",
        image: STEP_01,
        alt: "Joven en reunion de trabajo",
        title: "Reunion Inicial",
        description: "Programaremos una reunion en la que resolveremos todas tus dudas y planearemos juntos el contenido y la estructura que tendra tu sitio web",
        bgColor: "#d9cdbf",
        border: "true"
      },
      {
        id: uuidv4(),
        position: "right",
        number: "02",
        image: STEP_02,
        alt: "Mockup Propuestas Web",
        title: "Presentacion de propuesta",
        description: "Presentaremos una propuesta del sitio web donde plasmaremos todas las solicitudes y requerimientos acordados en la reunión inicial",
        bgColor: "#b69f89",
        border: "true"
      },
      {
        id: uuidv4(),
        position: "left",
        number: "03",
        image: STEP_03,
        alt: "Mockup Entrega Web",
        title: "Entrega Final",
        description: "Una vez realizadas las correcciones correspondientes y estes conforme con el resultado, te haremos entrega del sitio web desplegado y en funcionamiento.",
        bgColor: "#b49483",
        border: "true"
      }
    ]
  },
  pack: {
    title: "Adquiere tu INSTAKIT",
    subtitle: "Selecciona tu moneda local",
    price: { ARS: "89.999", USD: "99.99", EUR: "92.99" },
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
      question: "Pueden vosotros encargaros de las fotos y textos de mi web?",
      answer: "Si has empezado con los textos de tu web y se te han atragantado. No te preocupes, para eso estamos nosotros."
    },
    {
      id: uuidv4(),
      question: "Ya tengo una web, pero quiero cambiarla. ¿Puedes ayudarme?",
      answer: "¡Claro que sí! Haremos un rediseño integral de la web, para que tu negocio pueda seguir creciendo."
    },
    {
      id: uuidv4(),
      question: "Me crearás las cuentas de correo y de redes sociales?",
      answer: "Sí, daremos de alta una cuenta de correo electrónico corporativo con el nombre de tu web."
    },
    {
      id: uuidv4(),
      question: "Por qué no me entra el dominio en el paquete web?",
      answer: "El nombre de la empresa es tuyo, por eso el dominio es algo que debe ser de tu propiedad."
    }
  ],
  contact: {
    cta: "¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.",
    link: "https://wa.link/sn2ako"
  }
}