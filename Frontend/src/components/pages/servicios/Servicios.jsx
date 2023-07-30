import { useEffect } from "react";
import { MOCKUP_ASESORIAS, MOCKUP_BRANDING, MOCKUP_CREACION_CONTENIDO } from "../../../assets/img/images";
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
          imagen={MOCKUP_BRANDING}
          alt="Mockup Branding"
          titulo="Diseño De Branding"
          textHover="Ver Más"
          enlace="/branding"
        />

        <Mockup
          imagen={MOCKUP_CREACION_CONTENIDO}
          alt="Mockup Creación De Contenido"
          titulo="Creación De Contenido"
          textHover="Ver Más"
          enlace="/creacion-contenido"
        />

        <Mockup
          imagen={MOCKUP_ASESORIAS}
          alt="Mockup Asesorías"
          titulo="Asesorías Personalizadas"
          textHover="Próximamente..."
          enlace="/servicios"
        />

      </Slider>
    </ServiciosContainer>

    <Footer />
  </>
  );
};

export default Servicios;