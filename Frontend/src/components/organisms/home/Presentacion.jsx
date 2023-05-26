import { ESCRITORIO_AISMABA, FUNDADORA_1, FUNDADORA_2 } from '../../../assets/img/imagenes';

const Presentacion = () => {
  return (
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

          <div className="presentacion__box-imagenes">
            <img src={FUNDADORA_1} alt="Foto de la creadora de Aismaba" className="presentacion__img-1" />
            <img src={FUNDADORA_2} alt="Foto de la creadora de Aismaba" className="presentacion__img-2" />
          </div>
        </div>

        <div className="presentacion__box-interrogante">
          <img src={ESCRITORIO_AISMABA} alt="Foto del escritorio de Aismaba" className="presentacion__img-3" />

          <div className="presentacion__box-textos-interrogante">
            <h2 className="presentacion__pregunta">¿COMO LO HAREMOS?</h2>
            <p className="presentacion__respuesta">
              Te brindaremos las herramientas necesarias para que tu emprendimiento sea un éxito en internet.
              <br />
              <br />
              Diseñaremos paso a paso el branding de tu marca logrando que tus clientes puedan identificar cuales son sus valores, su visión y las cualidades que la hacen diferente a las demás.
              <br />
              <br />
              Daremos vida a tus redes sociales ofreciendo contenido innovador, creativo y de calidad que te garantizara los mejores resultados.
              <br />
              <br />
              No dejaremos nada a la suerte! Cada paso sera planificado a traves de nuestras estrategias de marketing para asegurarnos de que se cumplan todos tus objetivos!
            </p>
          </div>
        </div>
      </section>
  );
};

export default Presentacion;