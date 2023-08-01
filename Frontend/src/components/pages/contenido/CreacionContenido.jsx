import { useEffect } from "react";
import { BRANDING_A, BRANDING_B, BRIEF_ICONO, COMPLEMENTOS_ICONO, CONTENIDO_ICONO, DIAMANTE_ICONO, GUIA_ICONO, MOODBOARD_ICONO, PANTALLA_DISENO_ICONO, PAPELERIA_ICONO, PROPUESTAS_ICONO, PROTOTIPO_ICONO, REDES_SOCIALES_ICONO, REGALO_ICONO } from "../../../assets/img/images";
import { BRANDING_VIDEO } from "../../../assets/vid/videos";
import Cabecera from "../../general/cabecera/Cabecera";
import Footer from "../../general/footer/Footer";
import Desarrollo from "../../general/servicios/desarrollo/Desarrollo";
import Paquetes from "../../general/servicios/paquetes/Paquetes";
import Propuesta from "../../general/servicios/propuesta/Propuesta";
import RoadMap from "../../general/servicios/roadmap/RoadMap";
import TarjetaPaquete from "../../general/tarjetas/paquetes/TarjetaPaquete";

const CreacionContenido = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Cabecera
        titulo="Creación de contenido"
        video={BRANDING_VIDEO}
      />

      <Propuesta
        titulo="LA INTERACCION CONSTANTE"
        subtitulo="TE POSICIONA"
        parrafo="Por eso es importante mantener activas nuestras redes sociales."

        iconoA={REDES_SOCIALES_ICONO}
        tituloA="Innovación y creatividad"
        parrafoA="Generaremos contenido innovador, creativo y de calidad que le garanticen los mejores resultados a tu proyecto."

        iconoB={PROTOTIPO_ICONO}
        tituloB="Distinción y originalidad"
        parrafoB="Crearemos contenido distintivo y personalizado que te realcen de lo común y te diferencien del resto."

        iconoC={PANTALLA_DISENO_ICONO}
        tituloC="Esencia y conexión"
        parrafoC="Reflejaremos la esencia de tu marca en un feed que conecte con tu audiencia y tus clientes potenciales."

        iconoD={DIAMANTE_ICONO}
        tituloD="Contenido de valor"
        parrafoD="Transmitiremos contenido útil y valioso que aporte soporte a tu publico y fortalezca su conexión con tu marca."
      />

      <Desarrollo
        imagenA={BRANDING_A}
        tituloA="SOLUCIONES E INTERACCIONES"
        parrafoA="Lograremos que tu contenido responda a una necesidad, mientras nos aventuramos en entender porque tus clientes quieren lo que quieren, logrando responder las inquietudes del usuario de forma interactiva y buscando enamorar a tu cliente con lo que ofreces."

        imagenB={BRANDING_B}
        tituloB="EL CONTENIDO ES EL REY"
        parrafoB="El contenido que compartes puede ser la clave de tu crecimiento, ya que te da la posibilidad de educar a tu audiencia generando una conexión con sus sentimientos que los lleve a consumir tu producto o contenido."
      />

      <RoadMap
        iconoA={BRIEF_ICONO}
        altA="Icono Brief"
        tituloA="Brief"
        parrafoA="Te enviaremos un formulario con una serie de preguntas que nos ayudaran a conocer a fondo tu proyecto, sus características y preferencias a tener en cuenta al momento de crear el contenido."

        iconoB={GUIA_ICONO}
        altB="Icono Guia De Marca"
        tituloB="Estrategia de marca"
        parrafoB="Elaboraremos un documento con todos los conceptos y métodos que utilizaremos al momento de crear el contenido para explotar tu marca de manera estratégica."

        iconoC={PROPUESTAS_ICONO}
        altC="Icono de Propuestas"
        tituloC="Propuestas"
        parrafoC="Te presentaremos una propuesta de marca que te ayudara a visualizar el camino que tomaremos y realizaremos las correcciones necesarias hasta que estés conforme con el resultado."

        iconoD={MOODBOARD_ICONO}
        altD="Icono de moodboard"
        tituloD="Moodboard"
        parrafoD="Crearemos una tabla de inspiración con diferentes elementos escenciales que servirán para formar el universo visual de tu marca y así darle vida a tu proyecto."

        iconoE={CONTENIDO_ICONO}
        altE="Icono de contenido"
        tituloE="Contenido"
        parrafoE="Diseñaremos contenido variado para tu marca distribuyéndolo en flyers, imágenes y frases para que tengas un feed lleno de vida y mucha intereacción."

        iconoF={REGALO_ICONO}
        altF="Icono de entrega"
        tituloF="Entrega"
        parrafoF="Una vez estés conforme con el trabajo realizado, procederemos a enviarte vía mail la entrega final en todos los formatos correspondientes para su uso."
      />

      <Paquetes servicio="Creación de contenido">
        <TarjetaPaquete
          precio="100"
          nombre="SIMPLE"
          items={["✦ 12 POSTS ✦"]}
          parrafo="Ideal para dar ese primer paso e iniciarse en el mundo de las Redes Sociales."
        />

        <TarjetaPaquete
          precio="200"
          nombre="PREMIUM"
          items={["★ 30 Posts ★"]}
          parrafo="Ideal para mantener a tu audiencia en contacto constante con tus posts con el objetivo de crear un vínculo mas cercano que beneficie a tu marca."
        />

        <TarjetaPaquete
          precio="100"
          nombre="SOCIAL"
          items={["✤ 21 Posts ✤"]}
          parrafo="Ideal para mantener tus redes sociales activas de forma equilibrada."
        />

      </Paquetes>

      <Footer />
    </>
  );
};

export default CreacionContenido;