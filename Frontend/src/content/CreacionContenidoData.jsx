import { v4 as uuidv4 } from 'uuid';
import PORTADA_INSTAKIT from "../assets/img/generales/portada_instakit.png"
import ICONO_DOMINIO from "../assets/img/generales/Icono-Dominio-white.svg"
import ICONO_HOSTING from "../assets/img/generales/Icono-Hosting-white.svg"
import ICONO_RESPONSIVE from "../assets/img/generales/Icono-Responsive-white.svg"
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
        description: "Desarrollamos estrategias digitales adaptadas a las necesidades específicas de tu marca, lo ayudandote a alcanzar tus objetivos de manera efectiva."
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
  }
}