import { Link } from "react-router-dom";
import Slider from "../organisms/slider/Slider";
import { MOCKUP_ASESORIAS, MOCKUP_BRANDING, MOCKUP_CREACION_CONTENIDO } from "../../assets/img/imagenes";
import MainFooter from "../organisms/footer/MainFooter";
import MockupServicio from "../molecules/home/servicios/MockupServicio";

const Servicios = () => {
  return (
    <>
      <div className="main-container-slider-servicios">

        <h1 className="servicios__h1">Elige el servicio de tu interés</h1>

        <Slider>

          <MockupServicio
            imagen={MOCKUP_BRANDING}
            titulo="Diseño De Branding"
          />

          <MockupServicio
            imagen={MOCKUP_CREACION_CONTENIDO}
            titulo="Creación De Contenido"
          />

          <MockupServicio
            imagen={MOCKUP_ASESORIAS}
            titulo="Asesorías Personalizadas"
          />

        </Slider>

      </div>

      <MainFooter color="var(--color-secundario)" />
    </>
  );
};

export default Servicios;