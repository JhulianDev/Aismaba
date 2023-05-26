import { Link } from "react-router-dom";
import { NUESTROS_SERVICIOS, PRODUCTOS_DIGITALES, RECURSOS_GRATUITOS } from "../../assets/img/imagenes";
import Pensamiento from "../organisms/home/Pensamiento";
import Portada from "../organisms/home/Portada";
import Presentacion from "../organisms/home/Presentacion";

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />

      <section className="main-container-servicios">
        <h2 className="servicios__interrogante">
          ¿POR DONDE QUIERES COMENZAR?
        </h2>

        <div className="servicios__box-tarjetas">

          <div className="servicios__slider">

            <div className="servicios__tarjeta">
              <img src={PRODUCTOS_DIGITALES} alt="Mockup de productos digitales" className="tarjeta__img" />
              <h1 className="tarjeta__titulo">Productos Digitales</h1>
              <p className="tarjeta__descripcion">
                Creamos para ti una serie de
                Productos Editables que te facilitaran
                gran parte del proceso creativo.
                <br />
                Gracias a su diseño original, cada
                plantilla le proporcionara a tu marca una
                personalidad unica. Otorgandote la
                posibilidad de editar cada detalle para
                que se adapte 100% al estilo de tu marca.
              </p>
              <Link to="/" className="tarjeta__boton">VER MÁS</Link>
            </div>

            <div className="servicios__tarjeta">
              <img src={NUESTROS_SERVICIOS} alt="Mockup de productos digitales" className="tarjeta__img" />
              <h1 className="tarjeta__titulo">Productos Digitales</h1>
              <p className="tarjeta__descripcion">
                Trabajaremos para ti en 3 Servicios
                que harán que tu marca resalte
                con una imagen única.
                <br />
                Gracias a nuestros conocimientos cada
                servicio le proporcionara a tu proyecto una
                estética original y un valor agregado, otorgándote la
                posibilidad de mejorar la presentación
                de tu marca ante el mundo.
              </p>
              <Link to="/" className="tarjeta__boton">VER MÁS</Link>
            </div>

            <div className="servicios__tarjeta">
              <img src={RECURSOS_GRATUITOS} alt="Mockup de productos digitales" className="tarjeta__img" />
              <h1 className="tarjeta__titulo">Productos Digitales</h1>
              <p className="tarjeta__descripcion">
                Presentamos para ti una serie de
                Recursos gráficos gratuitos que serán
                de gran ayuda en tu proceso creativo.
                <br />
                Estos recursos aportaran un granito de
                arena a la imagen de tu marca,
                otorgándote la posibilidad de ahorrar tiempo de
                largas horas de edición o brindándote tips y
                consejos que te serán de gran utilidad.
              </p>
              <Link to="/" className="tarjeta__boton">VER MÁS</Link>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
