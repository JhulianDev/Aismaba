import { DesarrolloBoxInfo, DesarrolloDiv, DesarrolloParrafo, DesarrolloSection, DesarrolloTitulo, DesarrolloImg } from "./DesarrolloStyled";

const Desarrollo = ({ tituloA, parrafoA, imagenA, tituloB, parrafoB, imagenB}) => {
  return (
    <DesarrolloSection>
      <DesarrolloDiv>

      <DesarrolloBoxInfo>
          <DesarrolloTitulo>{tituloA}</DesarrolloTitulo>
          <DesarrolloParrafo>{parrafoA}</DesarrolloParrafo>
          <DesarrolloImg src={imagenA} />
        </DesarrolloBoxInfo>

        <DesarrolloBoxInfo>
          <DesarrolloImg src={imagenB} $mobileOrder={3} />
          <DesarrolloTitulo $mobileOrder={1}>{tituloB}</DesarrolloTitulo>
          <DesarrolloParrafo $mobileOrder={2}>{parrafoB}</DesarrolloParrafo>
        </DesarrolloBoxInfo>

      </DesarrolloDiv>
    </DesarrolloSection>
  );
};

export default Desarrollo;