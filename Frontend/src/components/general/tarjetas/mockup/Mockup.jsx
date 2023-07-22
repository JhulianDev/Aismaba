import { MockupContainer, MockupHover, MockupImg, MockupLink, MockupTitulo } from "./MockupStyled";

const Mockup = ({ imagen, alt, titulo }) => {
  return (
    <MockupContainer>
      <MockupLink>
        <MockupHover>Ver Más</MockupHover>
        <MockupImg src={ imagen } alt={ alt }/>
      </MockupLink>
      <MockupTitulo>{ titulo }</MockupTitulo>
    </MockupContainer>
  );
};

export default Mockup;