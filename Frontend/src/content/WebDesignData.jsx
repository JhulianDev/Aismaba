import { v4 as uuidv4 } from 'uuid';
// Section Hero
import HERO_WEB_DESIGN from "../assets/img/generales/web_design/hero_web_design.webp";
import LIGHT_ICON from "../assets/img/generales/light_icon.svg";
// Section Benefits
import DOMINIO_ICON from "../assets/img/generales/web_design/Icono-Dominio.svg"
import HOSTING_ICON from "../assets/img/generales/web_design/Icono-Hosting.svg"
import RESPONSIVE_ICON from "../assets/img/generales/web_design/Icono-Responsive.svg"
// Section Process
import IMAGE_PROCESS from "../assets/img/generales/web_design/image_process.webp"
// Section Team
import TEAM from "../assets/img/generales/web_design/Team.webp";
// Section Portfolio
import PORTFOLIO_01 from "../assets/img/generales/web_design/portfolio_web_01.webp"
import PORTFOLIO_02 from "../assets/img/generales/web_design/portfolio_web_02.webp"
import PORTFOLIO_03 from "../assets/img/generales/web_design/portfolio_web_05.webp"
import PORTFOLIO_04 from "../assets/img/generales/web_design/portfolio_web_06.webp"

export const data = {
  hero: {
    tag: "DISEÑO WEB PARA EMPRENDEDORAS",
    icon: LIGHT_ICON,
    title: "Creamos tu Página Web 100% Personalizada.",
    description: "Diseñamos webs increibles, para impulsar tu negocio al éxito y que triunfes en el mundo digital.",
    callToAction: "¡Lo Quiero!",
    link: "https://wa.link/2fp3lt",
    image: HERO_WEB_DESIGN,
    alt: "MockUp Servicios"
  },
  benefits: [
    { id: uuidv4(), icon: DOMINIO_ICON, title: "Dominio Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: HOSTING_ICON, title: "Hosting Gratis", description: "De regalo por un año" },
    { id: uuidv4(), icon: RESPONSIVE_ICON, title: "Diseño Adaptable", description: "A todos los dispositivos" }
  ],
  pillars: {
    presentation: "En AISMABA, ofrecemos un servicio completo para mejorar tu presencia en la web.",
    title: "Trabajaremos juntos en:",
    items: [
      {
        id: uuidv4(),
        subtitle: "Estructura web",
        description: "Planificaremos la estructura de tu web, adaptándola a las necesidades específicas de tu marca y ayudándote a alcanzar tus objetivos de manera efectiva."
      },
      {
        id: uuidv4(),
        subtitle: "Diseño Personalizado",
        description: "Crearemos un diseño único y atractivo para tu web, que resalte la identidad de tu marca, para destacar entre la competencia y generar una impresión duradera en tus visitantes."
      },
      {
        id: uuidv4(),
        subtitle: "Redacción de textos",
        description: "Nos encargaremos de crear contenido único y relevante para tu web, enfocado en transmitir tu mensaje de manera clara y persuasiva, captando así la atención de tu audiencia"
      },
      {
        id: uuidv4(),
        subtitle: "Selección de imágenes",
        description: "Seleccionaremos imágenes que complementen y realcen la estética de tu web, transmitiendo la identidad visual de tu marca de forma impactante y profesional."
      }
    ]
  },
  process: {
    title: "Proceso de desarrollo",
    image: IMAGE_PROCESS,
    steps: [
      {
        id: uuidv4(),
        number: "01",
        subtitle: "Contacto Inicial",
        description: "Agendaremos una llamada para conocernos mejor. En ella determinaremos cuales son las necesidades específicas de tu marca y estableceremos el proceso de trabajo que seguiremos para desarrollar tu sitio web."
      },
      {
        id: uuidv4(),
        number: "02",
        subtitle: "BRIEF",
        description: "Te enviaremos un formulario con preguntas simples que me ayudaran a obtener la máxima información de tu marca y conocer a fondo tu proyecto."
      },
      {
        id: uuidv4(),
        number: "03",
        subtitle: "Propuesta escrita",
        description: "Recibirás una primera propuesta donde plasmaremos por escrito la estrategia que utilizaremos para el desarrollo de tu sitio web basándonos en la información obtenida en los 2 primeros pasos."
      },
      {
        id: uuidv4(),
        number: "04",
        subtitle: "Proceso de diseño",
        description: "Una vez aprobada la propuesta escrita, daremos inicio al proceso de diseño de tu página web. En este paso nos enfocaremos en diseñar una web atractiva y funcional siguiendo la estructura acordada anteriormente."
      },
      {
        id: uuidv4(),
        number: "05",
        subtitle: "Revisión y ajustes",
        description: "En esta etapa, podrás revisar detenidamente la propuesta realizada y sugerir cualquier corrección o ajuste que consideres necesarios, para asegurarnos de que el resultado final sea exactamente como lo deseas."
      },
      {
        id: uuidv4(),
        number: "06",
        subtitle: "Entrega final",
        description: "Una vez aplicadas todas las correcciones y sugerencias acordadas en la etapa de revisión, procederemos a hacer entrega de la propuesta final para su aprobación, garantizando así tu completa satisfacción con nuestro servicio de diseño web."
      },
      {
        id: uuidv4(),
        number: "07",
        subtitle: "Puesta en marcha",
        description: "Una vez hayamos recibido tu aprobación final, procederemos a vincular tu dominio con tu página web, haciéndote la entrega final de tu web lista y en funcionamiento."
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
        description: "Con una Landing Page, podrás promocionar tu producto o servicio estrella, destacando sus beneficios, ventajas y captando el contacto de tus posibles clientes.",
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
        link: "https://wa.link/0k1x1q"
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
        link: "https://wa.link/b2nelf"
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
          "· Actualizaciones de seguridad",
          "· Optimización de velocidad",
          "· Copia de seguridad del sitio web"
        ],
        link: "https://wa.link/bo8miq"
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
    link: "https://wa.link/2fp3lt"
  }
}