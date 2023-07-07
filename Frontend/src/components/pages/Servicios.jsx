import { Link } from "react-router-dom";
import Slider from "../organisms/slider/Slider";
import { MOCKUP_ASESORIAS, MOCKUP_BRANDING, MOCKUP_CREACION_CONTENIDO } from "../../assets/img/imagenes";
import MainFooter from "../organisms/footer/MainFooter";

const Servicios = () => {
  return (
    <>
      <div className="main-container-servicios">

        <h1 className="servicios__h1">Elige el servicio de tu interés</h1>

        <Slider>

          <div className="servicio">
            <Link className="servicio__link">
              <span className="servicio__hover">Ver Más</span>
              <img src={MOCKUP_BRANDING} alt="Mockup" className="servicio__img" />
            </Link>
            <h1 className="servicio__titulo">Diseño De Branding</h1>
          </div>

          <div className="servicio">
            <Link className="servicio__link">
              <span className="servicio__hover">Ver Más</span>
              <img src={MOCKUP_CREACION_CONTENIDO} alt="Mockup" className="servicio__img" />
            </Link>
            <h1 className="servicio__titulo">Creación De Contenido</h1>
          </div>

          <div className="servicio">
            <Link className="servicio__link">
              <span className="servicio__hover">Próximamente...</span>
              <img src={MOCKUP_ASESORIAS} alt="Mockup" className="servicio__img" />
            </Link>
            <h1 className="servicio__titulo">Asesorías Personalizadas</h1>
          </div>



        </Slider>
      </div>

      <MainFooter color="var(--color-secundario)" />
    </>
  );
};

export default Servicios;