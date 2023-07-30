import Slider from "../../slider/Slider";
import { PaquetesSection, PaquetesSubtitulo, PaquetesTitulo } from "./PaquetesStyled";

const Paquetes = ({ children, servicio }) => {
  return (
    <PaquetesSection>

      <PaquetesTitulo>Nuestros Paquetes</PaquetesTitulo>
      <PaquetesSubtitulo>{servicio}</PaquetesSubtitulo>

      <Slider>
        {children}
      </Slider>

    </PaquetesSection>
  );
};

export default Paquetes;