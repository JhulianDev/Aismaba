import { PlantillaBoxInfo, PlantillaInfoParrafo, PlantillaInfoTitulo } from "./PlantillaInfoStyled";

const PlantillaInfo = ({ titulo, descripcion }) => {
  return (
    <PlantillaBoxInfo>
      <PlantillaInfoTitulo>{titulo}</PlantillaInfoTitulo>
      <PlantillaInfoParrafo>{descripcion}</PlantillaInfoParrafo>
    </PlantillaBoxInfo>
  );
};

export default PlantillaInfo;