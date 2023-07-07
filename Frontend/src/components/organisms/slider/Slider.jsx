import React, { useEffect } from 'react';
import FlechaAnterior from '../../molecules/home/servicios/FlechaAnterior';
import FlechaSiguiente from '../../molecules/home/servicios/FlechaSiguiente';
import PuntosSlider from '../../molecules/home/servicios/PuntosSlider';
import "./slider.css"

const Slider = ({ children }) => {
  useEffect(() => {
    const movimientoSlider = document.querySelector(".slider__movil")
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
  return (<>
    <div className="main-container-slider">
      <FlechaAnterior />
      <div className="slider__ventana">
        <div className="slider__movil">

          {children}

        </div>
      </div>
      <FlechaSiguiente />
    </div>
    <PuntosSlider />
  </>
  );
};

export default Slider;



// servicios__sistema-slider --> main-container-slider
// servicios__box-tarjetas --> slider__ventana
// servicios__slider --> slider__movil
