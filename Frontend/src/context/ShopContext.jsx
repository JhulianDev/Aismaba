import { createContext } from "react";
import { AESTHETIC_BROWN_1, CATEGORIA_MARCAS, CATEGORIA_PLANTILLAS, CATEGORIA_PRESETS, CURVE_PINK_1, ELEGANT_INSPO_1, GREEN_WORLD_1, MINIMAL_MOOD_1, MIX_NUDE_1, OCEAN_BLUE_1, PORTADA_ALMA_STUDIO, ROSE_LOVE_1, SOL_GREY_1, aestheticBrownImages, almaStudioContent, almaStudioImages, curvePinkImages, elegantInspoImages, greenWorldImages, minimalMoodImages, mixNudeImages, oceanBlueImages, roseLoveImages, solGreyImages } from "../assets/img/images";
import { PRODUCT_AESTHETIC_BROWN, PRODUCT_CURVE_PINK, PRODUCT_ELEGANT_INSPO, PRODUCT_GREEN_WORLD, PRODUCT_MINIMAL_MOOD, PRODUCT_MIX_NUDE, PRODUCT_OCEAN_BLUE, PRODUCT_ROSE_LOVE, PRODUCT_SOL_GREY } from "../assets/products/products";
import { v4 as uuidv4 } from 'uuid';

const shopData = {
  categorias: [
    { categoria : "Plantillas", tipo: "Instagram",      alt : "Mockup Plantillas Instagram",  imagen: CATEGORIA_PLANTILLAS },
    { categoria : "Marcas",     tipo: "Personales",     alt : "Mockup Brandboard",            imagen: CATEGORIA_MARCAS },
    { categoria : "Presets",    tipo: "Lightroom",      alt : "Mockup Presets Lightroom",     imagen: CATEGORIA_PRESETS }
  ],
  plantillas: [
    { nombre : "Minimal Mood",    tipo: "Plantillas Instagram", precio: 20, portada: MINIMAL_MOOD_1,     imagenes: minimalMoodImages },
    { nombre : "Ocean Blue",      tipo: "Plantillas Instagram", precio: 20, portada: OCEAN_BLUE_1,       imagenes: oceanBlueImages },
    { nombre : "Elegant Inspo",   tipo: "Plantillas Instagram", precio: 20, portada: ELEGANT_INSPO_1,    imagenes: elegantInspoImages },
    { nombre : "Green World",     tipo: "Plantillas Instagram", precio: 20, portada: GREEN_WORLD_1,      imagenes: greenWorldImages },
    { nombre : "Curve Pink",      tipo: "Plantillas Instagram", precio: 20, portada: CURVE_PINK_1,       imagenes: curvePinkImages },
    { nombre : "Aesthetic Brown", tipo: "Plantillas Instagram", precio: 20, portada: AESTHETIC_BROWN_1,  imagenes: aestheticBrownImages },
    { nombre : "Sol Grey",        tipo: "Plantillas Instagram", precio: 20, portada: SOL_GREY_1,         imagenes: solGreyImages },
    { nombre : "Rose Love",       tipo: "Plantillas Instagram", precio: 20, portada: ROSE_LOVE_1,        imagenes: roseLoveImages },
    { nombre : "Mix Nude",        tipo: "Plantillas Instagram", precio: 20, portada: MIX_NUDE_1,         imagenes: mixNudeImages }
  ],
  marcas: [
    { 
      id: 1,
      nombre : "Alma Studio", 
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
    { nombre : "Minimal Mood",  descargable: PRODUCT_MINIMAL_MOOD },
    { nombre : "Ocean Blue",  descargable: PRODUCT_OCEAN_BLUE },
    { nombre : "Elegant Inspo",  descargable: PRODUCT_ELEGANT_INSPO },
    { nombre : "Green World",  descargable: PRODUCT_GREEN_WORLD },
    { nombre : "Curve Pink",  descargable: PRODUCT_CURVE_PINK },
    { nombre : "Aesthetic Brown",  descargable: PRODUCT_AESTHETIC_BROWN },
    { nombre : "Sol Grey",  descargable: PRODUCT_SOL_GREY },
    { nombre : "Rose Love",  descargable: PRODUCT_ROSE_LOVE },
    { nombre : "Mix Nude",  descargable: PRODUCT_MIX_NUDE }
  ],
  instakit: {
    precio: { ARS: "89.999", USD: "99.99", EUR: "92.99" },
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
    faqs: [
      {
        id: uuidv4(),
        pregunta: "Pueden vosotros encargaros de las fotos y textos de mi web?",
        respuesta: "Si has empezado con los textos de tu web y se te han atragantado. No te preocupes, para eso estamos nosotros."
      },
      {
        id: uuidv4(),
        pregunta: "Ya tengo una web, pero quiero cambiarla. ¿Puedes ayudarme?",
        respuesta: "¡Claro que sí! Haremos un rediseño integral de la web, para que tu negocio pueda seguir creciendo."
      },
      {
        id: uuidv4(),
        pregunta: "Me crearás las cuentas de correo y de redes sociales?",
        respuesta: "Sí, daremos de alta una cuenta de correo electrónico corporativo con el nombre de tu web."
      },
      {
        id: uuidv4(),
        pregunta: "Por qué no me entra el dominio en el paquete web?",
        respuesta: "El nombre de la empresa es tuyo, por eso el dominio es algo que debe ser de tu propiedad."
      }
    ]
  }
}

const ShopContext = createContext()

const ShopProvider = ({children}) => {
  return (
    <ShopContext.Provider value={ shopData }>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContext, ShopProvider }