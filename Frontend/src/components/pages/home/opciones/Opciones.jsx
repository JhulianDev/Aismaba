import { OpcionesInterrogante, OpcionesSection } from './OpcionesStyled';
import Slider from '../../../general/slider/Slider';
import TarjetaServicio from '../../../general/tarjetas/servicios/TarjetaServicio';
import { NUESTROS_SERVICIOS, PRODUCTOS_DIGITALES, RECURSOS_GRATUITOS } from '../../../../assets/img/images';

const Opciones = () => {
  return (
    <OpcionesSection>
      <OpcionesInterrogante>¿POR DONDE QUIERES COMENZAR?</OpcionesInterrogante>

      <Slider>

        <TarjetaServicio
          imagen={PRODUCTOS_DIGITALES}
          alt="Mockup de productos digitales"
          titulo="Productos Digitales"
          parrafoA="Creamos para ti una serie de
          Productos Editables que te facilitaran
          gran parte del proceso creativo."
          parrafoB="Gracias a su diseño original, cada
          plantilla le proporcionara a tu marca una
          personalidad unica. Otorgandote la
          posibilidad de editar cada detalle para
          que se adapte 100% al estilo de tu marca."
          boton="VER MÁS"
          enlace="/Tienda"
        />

        <TarjetaServicio
          imagen={NUESTROS_SERVICIOS}
          alt="Mockup de Nuestros Servicios"
          titulo="Nuestros Servicios"
          parrafoA="Trabajaremos para ti en 3 Servicios
          que harán que tu marca resalte
          con una imagen única."
          parrafoB="Gracias a nuestros conocimientos cada
          servicio le proporcionara a tu proyecto una
          estética original y un valor agregado, otorgándote la
          posibilidad de mejorar la presentación
          de tu marca ante el mundo."
          boton="VER MÁS"
          enlace="/Servicios"
        />

        <TarjetaServicio
          imagen={RECURSOS_GRATUITOS}
          alt="Mockup de Recursos Gratuitos"
          titulo="Recursos Gratuitos"
          parrafoA="Presentamos para ti una serie de
          Recursos gratuitos que te servirán de
          ayuda en tu proceso creativo."
          parrafoB="Estos recursos aportaran un granito 
          de arena a la imagen de tu marca, 
          otorgándote la posibilidad de ahorrar tiempo 
          de largas horas de edición o brindándote tips 
          y consejos que te serán de gran utilidad."
          boton="PRÓXIMAMENTE"
          enlace="/"
        />

      </Slider>

    </OpcionesSection>
  );
};

export default Opciones;