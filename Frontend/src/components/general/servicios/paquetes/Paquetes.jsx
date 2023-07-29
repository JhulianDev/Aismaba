import Slider from "../../slider/Slider";
import { PaquetesSection, PaquetesSubtitulo, PaquetesTitulo } from "./PaquetesStyled";

const Paquetes = ({ children }) => {
  return (
    <PaquetesSection>

      <PaquetesTitulo>Nuestros Paquetes</PaquetesTitulo>
      <PaquetesSubtitulo>BRANDING</PaquetesSubtitulo>

      <Slider>
        {children}
      </Slider>

    </PaquetesSection>
  );
};

export default Paquetes;