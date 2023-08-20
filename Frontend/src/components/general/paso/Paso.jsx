import { BoxPaso, PasoDescripcion, PasoNumero } from "./PasoStyled";

const Paso = ({ numero, descripcion }) => {
  return (
    <BoxPaso>
      <PasoNumero>{numero}</PasoNumero>
      <PasoDescripcion>{descripcion}</PasoDescripcion>
    </BoxPaso>
  );
};

export default Paso;