import InfoPaso from "../../infoPaso/InfoPaso";
import { RoadMapBoxPasos, RoadMapBoxTitulo, RoadMapSection, RoadMapTitulo } from "./RoadMapStyled";

const RoadMap = ({ iconoA, altA, tituloA, parrafoA, iconoB, altB, tituloB, parrafoB, iconoC, altC, tituloC, parrafoC, iconoD, altD, tituloD, parrafoD, iconoE, altE, tituloE, parrafoE, iconoF, altF, tituloF, parrafoF } ) => {
  return (
    <RoadMapSection>
      <RoadMapBoxTitulo>
        <RoadMapTitulo>¿CÓMO LO HAREMOS?</RoadMapTitulo>
      </RoadMapBoxTitulo>

      <RoadMapBoxPasos>

        <InfoPaso
          icono={iconoA}
          alt={altA}
          titulo={tituloA}
          parrafo={parrafoA}
        />

        <InfoPaso
          icono={iconoB}
          alt={altB}
          titulo={tituloB}
          parrafo={parrafoB}
        />

        <InfoPaso
          icono={iconoC}
          alt={altC}
          titulo={tituloC}
          parrafo={parrafoC}
        />

        <InfoPaso
          icono={iconoD}
          alt={altD}
          titulo={tituloD}
          parrafo={parrafoD}
        />

        <InfoPaso
          icono={iconoE}
          alt={altE}
          titulo={tituloE}
          parrafo={parrafoE}
        />

        <InfoPaso
          icono={iconoF}
          alt={altF}
          titulo={tituloF}
          parrafo={parrafoF}
        />

      </RoadMapBoxPasos>
    </RoadMapSection>
  );
};

export default RoadMap;