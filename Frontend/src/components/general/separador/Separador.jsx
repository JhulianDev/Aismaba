import { SeparadorMainContainer, SeparadorBox, SeparadorLinea, SeparadorTitulo } from "./SeparadorStyled";

const Separador = ({ titulo, color, top, padding }) => {
  return (
    <SeparadorMainContainer $bgColor={color} $top={top} $padding={padding}>
      <SeparadorBox>
        <SeparadorLinea />
        <SeparadorTitulo $bgColor={color}>{titulo}</SeparadorTitulo>
      </SeparadorBox>
    </SeparadorMainContainer>
  );
};

export default Separador;