import { v4 as uuidv4 } from 'uuid';
// Section Hero
import HERO_HOME from "../assets/img/generales/home/hero_home.webp"
import HERO_HOME_MOBILE from "../assets/img/generales/home/hero_home_mobile.webp"
// Section Hub
import PLANTILLAS_HOME from "../assets/img/generales/home/plantillas_home.webp";
import CREACION_CONTENIDO_HOME from "../assets/img/generales/home/creacion_de_contenido_home.webp"
import INSTAKIT_HOME from "../assets/img/generales/home/instakit_home.webp"
import DISENO_WEB_HOME from "../assets/img/generales/home/diseno_web_home.webp"
// Section Testimonials
import LOGO_MULATAS_CAKE from "../assets/img/generales/home/mulatas_cake_logo.svg"
import LOGO_HI_PARTY from "../assets/img/generales/home/hi_party_logo.svg"
import LOGO_HABIGAIL from "../assets/img/generales/home/habigail_logo.svg"
import LOGO_LUMEN from "../assets/img/generales/home/lumen_logo.svg"
// Section Contact
import MOCKUP_CONTACT from "../assets/img/generales/home/mockup_contact.webp"

export const data = {
  hero: {
    tag: "AISMABA - AGENCIA CREATIVA",
    title: "Diseños increibles para",
    uppercase: "EMPRENDEDORAS",
    description: "Impulsamos tu marca en las redes sociales.",
    textButtonA: "Creación de contenido",
    linkButtonA: "/creacion-de-contenido",
    textButtonB: "Plantillas Instagram",
    linkButtonB: "/Tienda",
    image: HERO_HOME,
    imageMobile: HERO_HOME_MOBILE
  },
  separator: "INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES",
  hub: {
    cardShop: {
      title: "Plantillas Editables",
      description: "Dale una imagen profesional, atractiva y armoniosa a tu perfil de Instagram.",
      cta: "Visitar Tienda",
      link: "/tienda",
      image: PLANTILLAS_HOME,
      alt: "MockUp Plantillas"
    },
    cardsServices: [
      { id: uuidv4(), title: "Creación de contenido", image: CREACION_CONTENIDO_HOME, alt: "MockUp Creación de contenido", link: "/creacion-de-contenido" },
      { id: uuidv4(), title: "Instakit", image: INSTAKIT_HOME, alt: "MockUp Instakit", link: "/instakit" },
      { id: uuidv4(), title: "Diseño web", image: DISENO_WEB_HOME, alt: "MockUp Diseño Web", link: "/diseno-web" }
    ]
  },
  testimonials: [
    {
      id: uuidv4(),
      name: "MULATAS CAKE",
      category: "Pasteleria",
      testimony: "Fue la mejor decisión el haber contratado sus servicios de Branding. Al principio estaba nerviosa porque no tenia una idea clara de que imagen.",
      logo: LOGO_MULATAS_CAKE,
      alt: "Logo Mulatas Cake"
    },
    {
      id: uuidv4(),
      name: "HI PARTY",
      category: "Accesorios",
      testimony: "Fue la mejor decisión el haber contratado sus servicios de Branding. Al principio estaba nerviosa porque no tenia una idea clara de que imagen.",
      logo: LOGO_HI_PARTY,
      alt: "Logo Hi Party"
    },
    {
      id: uuidv4(),
      name: "HABIGAIL",
      category: "Indumentaria",
      testimony: "Fue la mejor decisión el haber contratado sus servicios de Branding. Al principio estaba nerviosa porque no tenia una idea clara de que imagen.",
      logo: LOGO_HABIGAIL,
      alt: "Logo Habigail"
    },
    {
      id: uuidv4(),
      name: "LUMEN",
      category: "Consultoria",
      testimony: "Fue la mejor decisión el haber contratado sus servicios de Branding. Al principio estaba nerviosa porque no tenia una idea clara de que imagen.",
      logo: LOGO_LUMEN,
      alt: "Logo Lumen"
    },
  ],
  contact: {
    title:
      <>
        Las grandes ideas tienen
        <br />
        pequeños comienzos
      </>,
    subtitle: "HOY ES EL MEJOR DIA PARA COMENZAR",
    image: MOCKUP_CONTACT,
    alt: "MockUp Templates",
    cta: "Contactanos",
    link: "https://wa.link/cdi3nc"
  }
}