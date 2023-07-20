import { COMILLAS } from "../../../../assets/img/images";
import { PensamientoComillas, PensamientoDiv, PensamientoFraseA, PensamientoFraseB, PensamientoSection } from "./PensamientoStyled";

const Pensamiento = () => {
  return (
    <PensamientoSection>
      <PensamientoDiv>
        <PensamientoComillas src={COMILLAS} alt="Icono Comillas" />
        <PensamientoFraseA>
          Las grandes ideas tienen
          <br />
          pequeños comienzos.
        </PensamientoFraseA>
        <PensamientoFraseB>
          HOY ES EL MEJOR DIA PARA COMENZAR.
        </PensamientoFraseB>
      </PensamientoDiv>
    </PensamientoSection>
  );
};

export default Pensamiento;