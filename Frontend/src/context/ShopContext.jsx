import { createContext } from "react";
import { AESTHETIC_BROWN_1, CATEGORIA_MARCAS, CATEGORIA_PLANTILLAS, CATEGORIA_PRESETS, CURVE_PINK_1, ELEGANT_INSPO_1, GREEN_WORLD_1, MINIMAL_MOOD_1, MIX_NUDE_1, OCEAN_BLUE_1, PORTADA_ALMA_STUDIO, ROSE_LOVE_1, SOL_GREY_1 } from "../assets/img/images";

const shopData = {
  categorias: [
    { categoria : "Plantillas", tipo: "Instagram",      alt : "Mockup Plantillas Instagram",  imagen: CATEGORIA_PLANTILLAS },
    { categoria : "Marcas",     tipo: "Personales",     alt : "Mockup Brandboard",            imagen: CATEGORIA_MARCAS },
    { categoria : "Presets",    tipo: "Lightroom",      alt : "Mockup Presets Lightroom",     imagen: CATEGORIA_PRESETS }
  ],
  plantillas: [
    { nombre : "Minimal Mood",    tipo: "Plantillas Instagram", precio: "20", imagen: MINIMAL_MOOD_1 },
    { nombre : "Ocean Blue",      tipo: "Plantillas Instagram", precio: "20", imagen: OCEAN_BLUE_1 },
    { nombre : "Elegant Inspo",   tipo: "Plantillas Instagram", precio: "20", imagen: ELEGANT_INSPO_1 },
    { nombre : "Green World",     tipo: "Plantillas Instagram", precio: "20", imagen: GREEN_WORLD_1 },
    { nombre : "Curve Pink",      tipo: "Plantillas Instagram", precio: "20", imagen: CURVE_PINK_1 },
    { nombre : "Aesthetic Brown", tipo: "Plantillas Instagram", precio: "20", imagen: AESTHETIC_BROWN_1 },
    { nombre : "Sol Grey",        tipo: "Plantillas Instagram", precio: "20", imagen: SOL_GREY_1 },
    { nombre : "Rose Love",       tipo: "Plantillas Instagram", precio: "20", imagen: ROSE_LOVE_1 },
    { nombre : "Mix Nude",        tipo: "Plantillas Instagram", precio: "20", imagen: MIX_NUDE_1 }
  ],
  marcas: [
    { 
      nombre : "Alma Studio", 
      descripcion: "Esta identidad prediseñada es perfecta para aportar una imagen fresca y elegante a tu proyecto. Su diseño tipográfico estilizado le otorga a tu marca un hermoso toque moderno y minimalista.", 
      precio: "100", 
      imagen: PORTADA_ALMA_STUDIO
    }
  ]
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