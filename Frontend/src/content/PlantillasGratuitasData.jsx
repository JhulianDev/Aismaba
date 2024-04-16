import { v4 as uuidv4 } from 'uuid';
// Section Hero
import LIGHT_ICON from "../assets/img/generales/light_icon.svg";
import HERO_INSTAKIT from "../assets/img/generales/plantillas_gratuitas/hero_plantillas_gratuitas.webp";
// Section Form
import IMAGE_FORM from "../assets/img/generales/plantillas_gratuitas/image_form.webp"

export const data = {
  hero: {
    tag: "RECURSOS GRATUITOS",
    iconTag: LIGHT_ICON,
    title: "Plantillas GRATIS para resaltar tu imagen.",
    description: "Completa el formulario y descarga tus plantillas!",
    buttonType: "Scroll",
    callToAction: "¡Lo Quiero!",
    link: "https://wa.link/sn2ako",
    image: HERO_INSTAKIT,
    alt: "MockUp Plantillas Instagram"
  },
  separator: {
    text: "INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES · INSTAKIT · CREACIÓN DE CONTENIDO · DISEÑO WEB · PLANTILLAS EDITABLES"
  },
  form: {
    title: "Descarga las plantillas",
    description: "Completa el formulario y recibe tus plantillas gratis!",
    callToAction: "Descargar plantillas",
    image: IMAGE_FORM
  }
}