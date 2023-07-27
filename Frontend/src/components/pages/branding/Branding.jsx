import { TROFEO_ICONO, DISEÑO_ICONO, IDEA_ICONO, SONRISA_ICONO, BRANDING_A, BRANDING_B } from "../../../assets/img/images";
import { BRANDING_VIDEO } from "../../../assets/vid/videos";
import Cabecera from "../../general/cabecera/Cabecera";
import Desarrollo from "../../general/servicios/desarrollo/Desarrollo";
import Propuesta from "../../general/servicios/propuesta/Propuesta";

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
    </>
  );
};

export default Branding;