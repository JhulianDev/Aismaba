import { COMILLAS } from "../../../../assets/img/images";
import { TestimonioBox, TestimonioBoxDatos, TestimonioBoxIdentificador, TestimonioComillasGrandes, TestimonioComillasPequeñas, TestimonioLogo, TestimonioMarca, TestimonioParrafo, TestimonioRubro } from "./TarjetaTestimonioStyled";

const TarjetaTestimonio = ({ parrafo, logo, alt, marca, rubro }) => {
  return (
    <TestimonioBox>
      <TestimonioComillasPequeñas src={COMILLAS} alt="Icono Comillas" />
      <TestimonioParrafo>{ parrafo }</TestimonioParrafo>
      <TestimonioBoxIdentificador>
        <TestimonioLogo src={ logo } alt={ alt }/>
        <TestimonioBoxDatos>
          <TestimonioMarca>{ marca }</TestimonioMarca>
          <TestimonioRubro>{ rubro }</TestimonioRubro>
        </TestimonioBoxDatos>
        <TestimonioComillasGrandes src={COMILLAS} alt="Icono Comillas" />
      </TestimonioBoxIdentificador>
    </TestimonioBox>
  );
};

export default TarjetaTestimonio;