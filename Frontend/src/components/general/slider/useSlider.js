import { useState } from "react";

const useSlider = () => {
  const [tarjetaActual, setTarjetaActual] = useState(2);

  const desplazarDerecha = () => {
    setTarjetaActual((tarjetaActual) => (tarjetaActual === 3 ? 1 : tarjetaActual + 1));
  };

  const desplazarIzquierda = () => {
    setTarjetaActual((tarjetaActual) => {
      return tarjetaActual === 1 ? 3 : tarjetaActual - 1;
    });
  };

  const movimientoSlider = {
    transform: `translateX(${(tarjetaActual - 2) * -320}px)`
  };

  return {
    tarjetaActual,
    desplazarDerecha,
    desplazarIzquierda,
    movimientoSlider,
  };
}

export default useSlider;