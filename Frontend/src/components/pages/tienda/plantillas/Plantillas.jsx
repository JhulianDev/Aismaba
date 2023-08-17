import { colores } from "../../../../assets/css/Colors";
import Separador from "../../../general/separador/Separador";
import TarjetaPlantilla from "../../../general/tarjetas/plantilla/TarjetaPlantilla";
import { PlantillasBoxTarjetas, PlantillasSection } from "./PlantillasStyled";

const Plantillas = ({ data }) => {
  return (
    <>
      <PlantillasSection>
      <Separador
        titulo="PLANTILLAS INSTAGRAM"
        color={colores.colorFondo}
      />

        <PlantillasBoxTarjetas>
          {data.map(plantilla => (
            <TarjetaPlantilla
              key={plantilla.nombre}
              nombre={plantilla.nombre}
              tipo={plantilla.tipo}
              precio={plantilla.precio}
              imagen={plantilla.imagen}
              enlace={`/plantilla/${plantilla.nombre}`}
            />
          ))}
        </PlantillasBoxTarjetas>
      </PlantillasSection>
    </>
  );
};

export default Plantillas;