import { TROFEO_ICONO, DISEÑO_ICONO, IDEA_ICONO, SONRISA_ICONO, BRANDING_A, BRANDING_B, BRIEF_ICONO, GUIA_ICONO, PROPUESTAS_ICONO, COMPLEMENTOS_ICONO, PAPELERIA_ICONO, REGALO_ICONO } from "../../../assets/img/images";
import { BRANDING_VIDEO } from "../../../assets/vid/videos";
import Cabecera from "../../general/cabecera/Cabecera";
import Desarrollo from "../../general/servicios/desarrollo/Desarrollo";
import Propuesta from "../../general/servicios/propuesta/Propuesta";
import RoadMap from "../../general/servicios/roadmap/RoadMap";

const Branding = () => {
  return (
    <>
      <Cabecera
      titulo = "Branding"
      video = {BRANDING_VIDEO}
      />
      <Propuesta
      titulo="LA PRIMERA IMPRESIÓN"
      subtitulo="TE ENAMORA"
      parrafo="Por eso es importante tener una 
      identidad visual de deje huella."

      iconoA={TROFEO_ICONO}
      tituloA="Marca la diferencia"
      parrafoA="Posicionaremos tu marca en la mente del 
      consumidor creando una primera impresión que marque 
      la diferencia."

      iconoB={IDEA_ICONO}
      tituloB="Elementos innovadores"
      parrafoB="Diseñaremos diferente elementos que darán una fácil distinción a tu marca volviéndola única y original."

      iconoC={DISEÑO_ICONO}
      tituloC="Construcción atractiva"
      parrafoC="Crearemos una imagen diferente y atractiva que refleje la personalidad de tu marca y resalte sus cualidades."

      iconoD={SONRISA_ICONO}
      tituloD="Experiencia gratificante"
      parrafoD="Tu felicidad es la nuestra. Por eso nos enfocaremos en satisfacer tus ideas con nuestra creatividad."
      />

      <Desarrollo
      imagenA={BRANDING_A}
      tituloA="CREAREMOS EL ADN DE TU MARCA"
      parrafoA="La identidad de tu marca no comprende solo el logo. 
      Es un lenguaje propio formado por el nombre, paleta de colores, 
      tipografiás y elementos complementarios formando una composición 
      que directa o indirectamente comunica la personalidad de tu marca
      a través de tu diseño."

      imagenB={BRANDING_B}
      tituloB="ESTILO Y RECONOCIMIENTO"
      parrafoB="Crearemos una identidad visual que contenga un estilo 
      diferenciador que la separe de todos sus competidores y logre 
      que la nueva audiencia pueda identificarla rápidamente."
      />

      <RoadMap 
      iconoA={BRIEF_ICONO}
      altA="Icono Brief"
      tituloA="Brief"
      parrafoA="Te enviaremos un formulario con una serie de preguntas que nos ayudaran a conocer a fondo tu proyecto, sus características y preferencias a tener en cuenta al momento de crear tu marca."

      iconoB={GUIA_ICONO}
      altB="Icono Guia De Marca"
      tituloB="Guia de marca"
      parrafoB="Elaboraremos un documento guia que reunira todos los conceptos que representan el branding de tu marca para que tu y tu equipo puedan darle el uso adecuado a cada recurso."

      iconoC={PROPUESTAS_ICONO}
      altC="Icono de Propuestas"
      tituloC="Propuestas"
      parrafoC="Te presentaremos 3 propuestas de marca para que escojas la que desees y realizaremos las correcciones necesarias hasta que estés conforme con el resultado."

      iconoD={COMPLEMENTOS_ICONO}
      altD="Icono de complementos"
      tituloD="Complementos"
      parrafoD="Diseñaremos diferentes elementos visuales que acompañen a tu marca para que tengas un conjunto de recursos gráficos que le sirvan de complemento a tu proyecto."

      iconoE={PAPELERIA_ICONO}
      altE="Icono de papeleria"
      tituloE="Papelería"
      parrafoE="Diseñaremos los elementos de papelería que hayas seleccionado y agregaremos en ellos los diferentes recursos graficos correspondientes al branding de tu marca."

      iconoF={REGALO_ICONO}
      altF="Icono de entrega"
      tituloF="Entrega"
      parrafoF="Una vez estés conforme con el trabajo realizado y nos des tu aprobación, procederemos a enviarte vía mail la entrega final en todos los formatos correspondientes para su uso."
      />
    </>
  );
};

export default Branding;