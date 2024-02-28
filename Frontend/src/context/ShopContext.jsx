import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AESTHETIC_BROWN_1, CATEGORIA_MARCAS, CATEGORIA_PLANTILLAS, CATEGORIA_PRESETS, CURVE_PINK_1, ELEGANT_INSPO_1, GREEN_WORLD_1, MINIMAL_MOOD_1, MIX_NUDE_1, OCEAN_BLUE_1, PORTADA_ALMA_STUDIO, ROSE_LOVE_1, SOL_GREY_1, aestheticBrownImages, almaStudioContent, almaStudioImages, curvePinkImages, elegantInspoImages, greenWorldImages, minimalMoodImages, mixNudeImages, oceanBlueImages, roseLoveImages, solGreyImages } from "../assets/img/images";
import { PRODUCT_AESTHETIC_BROWN, PRODUCT_CURVE_PINK, PRODUCT_ELEGANT_INSPO, PRODUCT_GREEN_WORLD, PRODUCT_MINIMAL_MOOD, PRODUCT_MIX_NUDE, PRODUCT_OCEAN_BLUE, PRODUCT_ROSE_LOVE, PRODUCT_SOL_GREY } from "../assets/products/products";

// Pagina Instakit
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

const shopData = {
  categorias: [
    { categoria: "Plantillas", tipo: "Instagram", alt: "Mockup Plantillas Instagram", imagen: CATEGORIA_PLANTILLAS },
    { categoria: "Marcas", tipo: "Personales", alt: "Mockup Brandboard", imagen: CATEGORIA_MARCAS },
    { categoria: "Presets", tipo: "Lightroom", alt: "Mockup Presets Lightroom", imagen: CATEGORIA_PRESETS }
  ],
  plantillas: [
    { nombre: "Minimal Mood", tipo: "Plantillas Instagram", precio: 20, portada: MINIMAL_MOOD_1, imagenes: minimalMoodImages },
    { nombre: "Ocean Blue", tipo: "Plantillas Instagram", precio: 20, portada: OCEAN_BLUE_1, imagenes: oceanBlueImages },
    { nombre: "Elegant Inspo", tipo: "Plantillas Instagram", precio: 20, portada: ELEGANT_INSPO_1, imagenes: elegantInspoImages },
    { nombre: "Green World", tipo: "Plantillas Instagram", precio: 20, portada: GREEN_WORLD_1, imagenes: greenWorldImages },
    { nombre: "Curve Pink", tipo: "Plantillas Instagram", precio: 20, portada: CURVE_PINK_1, imagenes: curvePinkImages },
    { nombre: "Aesthetic Brown", tipo: "Plantillas Instagram", precio: 20, portada: AESTHETIC_BROWN_1, imagenes: aestheticBrownImages },
    { nombre: "Sol Grey", tipo: "Plantillas Instagram", precio: 20, portada: SOL_GREY_1, imagenes: solGreyImages },
    { nombre: "Rose Love", tipo: "Plantillas Instagram", precio: 20, portada: ROSE_LOVE_1, imagenes: roseLoveImages },
    { nombre: "Mix Nude", tipo: "Plantillas Instagram", precio: 20, portada: MIX_NUDE_1, imagenes: mixNudeImages }
  ],
  marcas: [
    {
      id: 1,
      nombre: "Alma Studio",
      tipo: "Marcas Pre-Diseñadas",
      descripcion: "Esta identidad prediseñada es perfecta para aportar una imagen fresca y elegante a tu proyecto. Su diseño tipográfico estilizado le otorga a tu marca un hermoso toque moderno y minimalista.",
      precio: 100,
      portada: PORTADA_ALMA_STUDIO,
      imagenes: almaStudioImages,
      contenido: almaStudioContent
    }
  ],
  paises: ["Argentina", "Chile", "España", "México", "Venezuela"],
  products: [
    { nombre: "Minimal Mood", descargable: PRODUCT_MINIMAL_MOOD },
    { nombre: "Ocean Blue", descargable: PRODUCT_OCEAN_BLUE },
    { nombre: "Elegant Inspo", descargable: PRODUCT_ELEGANT_INSPO },
    { nombre: "Green World", descargable: PRODUCT_GREEN_WORLD },
    { nombre: "Curve Pink", descargable: PRODUCT_CURVE_PINK },
    { nombre: "Aesthetic Brown", descargable: PRODUCT_AESTHETIC_BROWN },
    { nombre: "Sol Grey", descargable: PRODUCT_SOL_GREY },
    { nombre: "Rose Love", descargable: PRODUCT_ROSE_LOVE },
    { nombre: "Mix Nude", descargable: PRODUCT_MIX_NUDE }
  ],
  instakit: {
    portada: {
      titulo: "Instakit",
      subtitulo: "Plantillas Editables",
      descripcion: "Diseñadas 100% con la identidad de tu marca",
      imagen: PORTADA_INSTAKIT
    },
    beneficios: [
      { id: uuidv4(), icon: ICONO_DOMINIO, title: "Dominio Gratis", description: "De regalo por un año" },
      { id: uuidv4(), icon: ICONO_HOSTING, title: "Hosting Gratis", description: "De regalo por un año" },
      { id: uuidv4(), icon: ICONO_RESPONSIVE, title: "Diseño Adaptable", description: "A todos los dispositivos" }
    ],
    informacion: {
      titulo: "Dale una imagen atractiva y armoniosa a tu perfil de Instagram.",
      descripcion: (
        <>
          Un servicio <b>rápido y práctico</b> para darle una <b>estética de impacto</b> a tu perfil de Instagram.
          Ofrecemos plantillas <b>100% editables en Canva</b>, diseñadas para <b>reflejar la identidad de tu marca</b>,
          desde la paleta de colores hasta las tipografías y el estilo de fotografía.
        </>
      ),
      imagenes: [
        { id: uuidv4(), imagen: PORTFOLIO_INSTAKIT_A, mobile: false },
        { id: uuidv4(), imagen: PORTFOLIO_INSTAKIT_B, mobile: false },
        { id: uuidv4(), imagen: PORTFOLIO_INSTAKIT_C, mobile: false },
        { id: uuidv4(), imagen: PORTFOLIO_INSTAKIT_D, mobile: false },
        { id: uuidv4(), imagen: PORTFOLIO_INSTAKIT_A, mobile: true }
      ]
    },
    proceso: {
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
}

const ShopContext = createContext()

const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={shopData}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContext, ShopProvider }