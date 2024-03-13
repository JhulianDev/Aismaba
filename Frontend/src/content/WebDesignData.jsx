import { v4 as uuidv4 } from 'uuid';
// Section Hero
import HERO_WEB_DESIGN from "../assets/img/generales/hero_web_design.png";
import LIGHT_ICON from "../assets/img/generales/light_icon.svg";
// Section Benefits
import ICONO_DOMINIO from "../assets/img/generales/Icono-Dominio.svg"
import ICONO_HOSTING from "../assets/img/generales/Icono-Hosting.svg"
import ICONO_RESPONSIVE from "../assets/img/generales/Icono-Responsive.svg"
// Section Process
import STEP_01 from "../assets/img/generales/Step-01.webp";
import STEP_02 from "../assets/img/generales/Step-02.webp";
import STEP_03 from "../assets/img/generales/Step-03.webp";
// Section Team
import TEAM from "../assets/img/generales/Team.webp";

export const data = {
  hero: {
    tag: "DISEÑO WEB PARA EMPRENDEDORAS",
    icon: LIGHT_ICON,
    title: "Creamos tu Página Web 100% Personalizada.",
    description: "Tener un sitio web responsive y original es fundamental para el desarrollo de tu marca.",
    callToAction: "¡Lo Quiero!",
    link: "www.youtube.com",
    image: HERO_WEB_DESIGN,
    alt: "MockUp Servicios"
  },
  benefits: [
    { id: uuidv4(), icon: ICONO_DOMINIO, title: "Dominio Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_HOSTING, title: "Hosting Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: ICONO_RESPONSIVE, title: "Diseño Adaptable", description: "A todos los dispositivos" }
  ],
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
  team: {
    title: "¿Tienes algunas dudas?",
    subtitle: "¡Nosotros te guiaremos!",
    image: TEAM,
    description:
      <>
        Sabemos que la creación de una página web podría parecer abrumadora, sin embargo, con una planificacion apropiada y el equipo adecuado, se puede convertir en un proceso sencillo y agradable.
        <br />
        <br />
        <b>
          Nuestro equipo se encargará de asistirte durante todo el proceso de desarrollo, planificacion y diseño de tu pagina web para que obtengas el resultado  que deseas.
        </b>
        <br />
        <br />
        Además te ofrecemos el servicio de mantenimiento web, para gestionar todos los cambios y ajustes que desees realizarle a tu web en el futuro.
      </>
  }
}