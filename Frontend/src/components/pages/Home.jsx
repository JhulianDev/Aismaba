import { ISOTIPO_BLANCO } from "../../assets/img/imagenes";
import { SOMBRAS_VIDEO } from "../../assets/vid/videos";

const Home = () => {
  return (
    <>
      <div className="main-container-portada">
        <div className="portada">
          <img src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" className="portada__logo" />
          <h1 className="portada__aismaba">AISMABA</h1>
          <h1 className="portada__bienvenida">BIENVENIDOS A AISMABA</h1>
          <h2 className="portada__agencia">AGENCIA CREATIVA</h2>
          <h3 className="portada__frase">¡IMPULSAMOS TU MARCA AL SIGUIENTE NIVEL!</h3>
        </div>
      </div>

      <div className="portada__container-sombras">
        <video src={SOMBRAS_VIDEO} className="portada__sombras" autoPlay loop muted></video>
      </div>

      <section className="main-container-presentacion">
        <div className="presentacion">
          <div className="presentacion__box-textos">
            <h2 className="presentacion__titulo"><i>Creemos en ti...</i></h2>
            <h3 className="presentacion__subtitulo">CREAMOS POR TI</h3>
            <p className="presentacion__parrafo">
              En Aismaba encontraras todos los servicios digitales
              necesarios para <b>impulsar tu negocio al éxito.</b>
              <br />
              <br />
              A través del Diseño Original, Contenido Creativo y
              Estrategias de marketing personalizadas <b>daremos vida</b> a ese proyecto que tanto anhelas.
              <br />
              <br />
              Lograremos transmitir en cada detalle <b>la verdadera escencia</b> y personalidad de tu marca.
            </p>

            <h3 className="presentacion__frase">
              <i>Deja de soñarlo...</i>
              <br />
              <i>¡estamos aqui para crearlo!</i>
            </h3>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
