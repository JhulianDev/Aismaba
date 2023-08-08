import { colores } from "../../../../assets/css/Colors";
import { AESTHETIC_BROWN_1, CURVE_PINK_1, ELEGANT_INSPO_1, GREEN_WORLD_1, MINIMAL_MOOD_1, OCEAN_BLUE_1 } from "../../../../assets/img/images";
import Separador from "../../../general/separador/Separador";
import TarjetaPlantilla from "../../../general/tarjetas/plantilla/TarjetaPlantilla";
import { PlantillasBoxTarjetas, PlantillasSection } from "./PlantillasStyled";

const Plantillas = () => {
  return (
    <PlantillasSection>

      <Separador
        titulo="PLANTILLAS INSTAGRAM"
        color={colores.colorFondo}
      />

      <PlantillasBoxTarjetas>

        <TarjetaPlantilla
          titulo="Minimal Mood"
          subtitulo="Plantillas Editables"
          precio="20"
          imagen={GREEN_WORLD_1}
        />

        <TarjetaPlantilla
          titulo="Minimal Mood"
          subtitulo="Plantillas Editables"
          precio="20"
          imagen={OCEAN_BLUE_1}
        />

      </PlantillasBoxTarjetas>
    </PlantillasSection>
  );
};

export default Plantillas;