import { SeparadorMainContainer, SeparadorBox, SeparadorLinea, SeparadorTitulo } from "./SeparadorStyled";

const Separador = ({ titulo, color }) => {
  return (
    <SeparadorMainContainer $bgColor={color}>
      <SeparadorBox>
        <SeparadorLinea />
        <SeparadorTitulo $bgColor={color}>{titulo}</SeparadorTitulo>
      </SeparadorBox>
    </SeparadorMainContainer>
  );
};

export default Separador;