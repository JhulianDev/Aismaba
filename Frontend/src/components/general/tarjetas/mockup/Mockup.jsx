import { MockupContainer, MockupHover, MockupImg, MockupLink, MockupTitulo } from "./MockupStyled";

const Mockup = ({ imagen, alt, titulo, enlace }) => {
  return (
    <MockupContainer>
      <MockupLink to={ enlace }>
        <MockupHover>Ver Más</MockupHover>
        <MockupImg src={ imagen } alt={ alt }/>
      </MockupLink>
      <MockupTitulo>{ titulo }</MockupTitulo>
    </MockupContainer>
  );
};

export default Mockup;