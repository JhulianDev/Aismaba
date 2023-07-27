import { DISEÑO_ICONO, IDEA_ICONO, SONRISA_ICONO, TROFEO_ICONO } from "../../../../assets/img/images";
import InfoIcono from "../../infoIconos/InfoIcono";
import { PropuestaBoxInfoIconos, PropuestaBoxPresentacion, PropuestaDiv, PropuestaH2, PropuestaH3, PropuestaParrafo, PropuestaSection } from "./PropuestaStyled";

const Propuesta = ({ titulo, subtitulo, parrafo, iconoA, tituloA, parrafoA, iconoB, tituloB, parrafoB, iconoC, tituloC, parrafoC, iconoD, tituloD, parrafoD }) => {
  return (
    <PropuestaSection>
      <PropuestaDiv>

        <PropuestaBoxPresentacion>
          <PropuestaH2>{titulo}</PropuestaH2>
          <PropuestaH3>{subtitulo}</PropuestaH3>
          <PropuestaParrafo>{parrafo}</PropuestaParrafo>
        </PropuestaBoxPresentacion>

        <PropuestaBoxInfoIconos>
          <InfoIcono
            imagen={iconoA}
            titulo={tituloA}
            parrafo={parrafoA}
          />

          <InfoIcono
            imagen={iconoB}
            titulo={tituloB}
            parrafo={parrafoB}
          />

          <InfoIcono
            imagen={iconoC}
            titulo={tituloC}
            parrafo={parrafoC}
          />

          <InfoIcono
            imagen={iconoD}
            titulo={tituloD}
            parrafo={parrafoD}
          />
        </PropuestaBoxInfoIconos>

      </PropuestaDiv>
    </PropuestaSection>
  );
};

export default Propuesta;