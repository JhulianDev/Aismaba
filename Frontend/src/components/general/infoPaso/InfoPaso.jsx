import { InfoPasoBox, InfoPasoIcono, InfoPasoParrafo, InfoPasoTitulo } from "./InfoPasoStyled";

const InfoPaso = ({ icono, alt, titulo, parrafo }) => {
  return (
    <InfoPasoBox>
      <InfoPasoIcono src={icono} alt={alt} />
      <InfoPasoTitulo>{titulo}</InfoPasoTitulo>
      <InfoPasoParrafo>{parrafo}</InfoPasoParrafo>
    </InfoPasoBox>
  );
};

export default InfoPaso;