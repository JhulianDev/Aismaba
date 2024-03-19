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
// Section Portfolio
import PORTFOLIO_01 from "../assets/img/generales/portfolio_web_01.webp"
import PORTFOLIO_02 from "../assets/img/generales/portfolio_web_02.webp"
import PORTFOLIO_03 from "../assets/img/generales/portfolio_web_03.webp"
import PORTFOLIO_04 from "../assets/img/generales/portfolio_web_04.webp"

export const data = {
  hero: {
    tag: "DISEÑO WEB PARA EMPRENDEDORAS",
    icon: LIGHT_ICON,
    title: "Creamos tu Página Web 100% Personalizada.",
    description: "Tener un sitio web responsive y original es fundamental para el desarrollo de tu marca.",
    callToAction: "¡Lo Quiero!",
    link: "https://wa.link/njjz31",
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
  },
  pricing: {
    title: "Elige tu pack ideal",
    subtitle: "Selecciona tu moneda local",
    packs: [
      {
        id: uuidv4(),
        tag: "LANDINGPAGE",
        title: "Pack Premium",
        price: { ARS: "250.000", USD: "250", EUR: "230" },
        description: "Con una Landing Page, podras promocionar tu producto o servicio estrella, destacando sus beneficios, ventajas y captando el contacto de tus posibles clientes.",
        items: [
          "· 1 Landing Page",
          "· Redacción de textos",
          "· Selección de imagenes",
          "· Entrega de 7 a 15 Días",
          "· Adaptable a todos los dispositivos",
          "· Dominio gratuito el primer año",
          "· Hosting gratuito el primer año",
          "· Optimizada para Google"
        ],
        link: "https://wa.link/4p299u"
      },
      {
        id: uuidv4(),
        tag: "PAGINA WEB",
        title: "Pack Business",
        price: { ARS: "350.000", USD: "350  ", EUR: "320" },
        description: "Ideal para mostrar tú negocio de forma integral a través de secciones personalizadas, destacando cada aspecto y servicio de una forma mas detallada.",
        items: [
          "· 1 Página web de 5 pestañas",
          "· Redacción de textos",
          "· Selección de imagenes",
          "· Entrega de 7 a 15 Días",
          "· Adaptable a todos los dispositivos",
          "· Dominio gratuito el primer año",
          "· Hosting gratuito el primer año",
          "· Optimizada para Google"
        ],
        link: "https://wa.link/akb9z1"
      },
      {
        id: uuidv4(),
        tag: "MANTENIMIENTO",
        title: "Mantenimiento",
        price: { ARS: "50.000", USD: "50", EUR: "45" },
        description: "Mantener tu sitio web actualizado y funcional es escencial para el éxito en línea. Nuestro Pack de Mantenimiento Web garantiza la continuidad operativa de tu sitio web.",
        items: [
          "· Actualización de productos",
          "· Actualización de servicios",
          "· Actualización de imagenes",
          "· Actualización de textos",
          "· Actualizaciones de seguirdad",
          "· Optimización de velocidad",
          "· Copia de seguridad del sitio web"
        ],
        link: "https://wa.link/09doew"
      }
    ]
  },
  portfolio: [
    PORTFOLIO_01,
    PORTFOLIO_02,
    PORTFOLIO_03,
    PORTFOLIO_04
  ],
  faqs: [
    {
      id: uuidv4(),
      question: "¿Ustedes se encargarán de las fotos y textos de mi web?",
      answer: "¡Por supuesto! Nos encargaremos de crear los textos y seleccionar las imágenes adecuadas para tu sitio web. Buscaremos transmitir tu mensaje de manera efectiva y atractiva ¡hasta conseguir que tu web se vea increíble!"
    },
    {
      id: uuidv4(),
      question: "¿Qué harán en el servicio de mantenimiento web?",
      answer:
        <>
          <b>· Actualizaremos</b> tus productos, tus servicios y sus precios para que la información de tu web este siempre al día.
          <br />
          <br />
          <b>· Revisaremos mensualmente tu sitio web</b> con el objetivo de preveer posibles fallos y aplicar soluciones inmediatas.
          <br />
          <br />
          <b>· Realizaremos las actualizaciones</b> necesarias para cumplir con los últimos Estándares de seguridad y garantizar la integridad de tu web, protegiendo así los datos de tus usuarios.
          <br />
          <br />
          <b>· Optimizaremos la velocidad de tu web</b>, para ofrecerle a tus usuarios una experiencia de uso gratificante.
          <br />
          <br />
          <b>· Actualizaremos</b> los textos e imágenes de las secciones existentes cuando lo necesites.
          <br />
          <br />
          <b>· Crearemos</b> hasta 3 nuevas secciones al año (no páginas).
        </>
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
    {
      id: uuidv4(),
      question: "¿Qué costo tienen el hosting y el dominio después del primer año gratis?",
      answer:
        <>
          · Tras disfrutar de este servicio durante <b>el primer año de forma gratuita</b>, el mantenimiento del <b>Hosting</b> y <b>Dominio</b> de tu web tendrá un costo de <b>120 dólares</b> que solo deberás abonar <b>una vez al año.</b>
          <br />
          <br />
          · Esta inversión <b>garantiza</b> que tu página siga <b>en línea y accesible para tu audiencia</b>, ademas de permitirte <b>conservar el nombre</b> de tu pagina web (Dominio).
        </>
    }
  ],
  contact: {
    cta: "¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.",
    link: "https://wa.link/njjz31"
  }
}