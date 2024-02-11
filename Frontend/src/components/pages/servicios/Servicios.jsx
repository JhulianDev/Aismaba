import { useEffect } from "react";
import MOCKUP_INSTAKIT from "../../../assets/img/generales/mockup_instakit.png"
import MOCKUP_CONTENIDO from "../../../assets/img/generales/mockup_contenido.png"
import MOCKUP_DISEÑO_WEB from "../../../assets/img/generales/mockup_diseno-web.png"
import Footer from "../../general/footer/Footer";
import Slider from "../../general/slider/Slider";
import Mockup from "../../general/tarjetas/mockup/Mockup";
import { ServiciosContainer, ServiciosTitulo } from "./ServiciosStyled";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (<>
    <ServiciosContainer>
      <ServiciosTitulo>Elige el servicio de tu interés</ServiciosTitulo>
      <Slider>

        <Mockup
          imagen={MOCKUP_INSTAKIT}
          alt="Mockup Instakit"
          titulo="Instakit"
          textHover="Ver Más"
          enlace="/instakit"
        />

        <Mockup
          imagen={MOCKUP_CONTENIDO}
          alt="Mockup Creación De Contenido"
          titulo="Creación De Contenido"
          textHover="Ver Más"
          enlace="/creacion-contenido"
        />

        <Mockup
          imagen={MOCKUP_DISEÑO_WEB}
          alt="Mockup Diseño Web"
          titulo="Diseño Web"
          textHover="Próximamente..."
          enlace="/diseño-web"
        />

      </Slider>
    </ServiciosContainer>

    <Footer />
  </>
  );
};

export default Servicios;