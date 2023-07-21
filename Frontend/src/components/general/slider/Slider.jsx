import FlechaAnterior from "../flechas/FlechaAnterior";
import FlechaSiguiente from "../flechas/FlechaSiguiente";
import { SliderContainer, SliderMovil, SliderVentana } from "./SliderStyled";
import useSlider from "./useSlider";

const Slider = ({ children }) => {
  const { desplazarDerecha, desplazarIzquierda, movimientoSlider } = useSlider();

  return (
    <SliderContainer>

      <FlechaAnterior handleFlecha={desplazarIzquierda} />

      <SliderVentana>
        <SliderMovil style={movimientoSlider}>
          {children}
        </SliderMovil>
      </SliderVentana>

      <FlechaSiguiente handleFlecha={desplazarDerecha} />

    </SliderContainer>
  );
};

export default Slider;