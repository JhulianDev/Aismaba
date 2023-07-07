import { useEffect } from "react";
import { NUESTROS_SERVICIOS, PRODUCTOS_DIGITALES, RECURSOS_GRATUITOS } from "../../../assets/img/imagenes";
import TarjetaSevicio from "../../molecules/home/servicios/TarjetaSevicio";
import FlechaAnterior from "../../molecules/home/servicios/FlechaAnterior";
import FlechaSiguiente from "../../molecules/home/servicios/FlechaSiguiente";
import PuntosSlider from "../../molecules/home/servicios/PuntosSlider";

const Servicios = () => {
  useEffect(() => {
    const movimientoSlider = document.querySelector(".servicios__slider")
    const flechaAnterior = document.querySelector(".flecha-anterior")
    const flechaSiguiente = document.querySelector(".flecha-siguiente")
    const punto = document.querySelectorAll(".punto")

    // Estableciendo tarjeta por defecto
    let tarjetaActual = 1

    // Manejo de flecha derecha Slider
    function desplazarDerecha() {
      switch (tarjetaActual) {
        case 1:
          movimientoSlider.style.transform = `translateX(0px)`;
          tarjetaActual = 2;
          punto[0].classList.remove("punto-activo");
          punto[1].classList.add("punto-activo");
          break;

        case 2:
          movimientoSlider.style.transform = `translateX(-320px)`;
          tarjetaActual = 3;
          punto[1].classList.remove("punto-activo");
          punto[2].classList.add("punto-activo");
          break;

        case 3:
          movimientoSlider.style.transform = `translateX(320px)`;
          tarjetaActual = 1;
          punto[2].classList.remove("punto-activo");
          punto[0].classList.add("punto-activo");
          break;

        default:
          break;
      }
    }
    // Manejo de flecha izquierda Slider
    function desplazarIzquierda() {
      switch (tarjetaActual) {
        case 1:
          movimientoSlider.style.transform = `translateX(-320px)`;
          tarjetaActual = 3;
          punto[0].classList.remove("punto-activo");
          punto[2].classList.add("punto-activo");
          break;

        case 2:
          movimientoSlider.style.transform = `translateX(320px)`;
          tarjetaActual = 1;
          punto[1].classList.remove("punto-activo");
          punto[0].classList.add("punto-activo");
          break;

        case 3:
          movimientoSlider.style.transform = `translateX(0px)`;
          tarjetaActual = 2;
          punto[2].classList.remove("punto-activo");
          punto[1].classList.add("punto-activo");
          break;

        default:
          break;
      }
    }
    // Manejo de puntos Slider
    punto.forEach((cadaPunto, index) => {
      punto[index].addEventListener("click", () => {

        let posicion = index

        if (posicion === 0) {
          movimientoSlider.style.transform = `translateX(320px)`;
          tarjetaActual = 1;
        }
        if (posicion === 1) {
          movimientoSlider.style.transform = `translateX(0px)`
          tarjetaActual = 2;
        } if (posicion === 2) {
          movimientoSlider.style.transform = `translateX(-320px)`
          tarjetaActual = 3;
        }

        punto.forEach((cadaPunto, index) => {
          punto[index].classList.remove("punto-activo")
        })

        punto[index].classList.add("punto-activo")

      })
    });

    flechaAnterior.addEventListener("click", () => desplazarIzquierda());
    flechaSiguiente.addEventListener("click", () => desplazarDerecha());
  }, [])
  return (
    <>
      <section className="main-container-servicios">
        <h2 className="servicios__interrogante">
          ¿POR DONDE QUIERES COMENZAR?
        </h2>
        <div className="servicios__sistema-slider">

          <FlechaAnterior />

          <div className="servicios__box-tarjetas">
            <div className="servicios__slider">

              <TarjetaSevicio
                imagen={PRODUCTOS_DIGITALES}
                titulo="Productos Digitales"
                parrafo1="Creamos para ti una serie de
                Productos Editables que te facilitaran
                gran parte del proceso creativo."
                parrafo2="Gracias a su diseño original, cada
                plantilla le proporcionara a tu marca una
                personalidad unica. Otorgandote la
                posibilidad de editar cada detalle para
                que se adapte 100% al estilo de tu marca."
                enlace="/"
              />

              <TarjetaSevicio
                imagen={NUESTROS_SERVICIOS}
                titulo="Nuestros Servicios"
                parrafo1="Trabajaremos para ti en 3 Servicios
                que harán que tu marca resalte
                con una imagen única."
                parrafo2="Gracias a nuestros conocimientos cada
                servicio le proporcionara a tu proyecto una
                estética original y un valor agregado, otorgándote la
                posibilidad de mejorar la presentación
                de tu marca ante el mundo."
                enlace="/servicios"
              />

              <TarjetaSevicio
                imagen={RECURSOS_GRATUITOS}
                titulo="Recursos Gratuitos"
                parrafo1="Presentamos para ti una serie de
                Recursos gratuitos que te servirán de
                ayuda en tu proceso creativo."
                parrafo2="Estos recursos aportaran un granito de
                arena a la imagen de tu marca,
                otorgándote la posibilidad de ahorrar tiempo de
                largas horas de edición o brindándote tips y
                consejos que te serán de gran utilidad."
                enlace="/"
              />
            </div>
          </div>

          <FlechaSiguiente />

        </div>

        <PuntosSlider />
        
      </section>
    </>
  );
};

export default Servicios;