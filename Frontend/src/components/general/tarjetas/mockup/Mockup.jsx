import { MockupContainer, MockupHover, MockupImg, MockupLink, MockupTitulo } from "./MockupStyled";

const Mockup = ({ imagen, alt, titulo, enlace, textHover }) => {
  return (
    <MockupContainer>
      <MockupLink to={ enlace }>
        <MockupHover>{ textHover }</MockupHover>
        <MockupImg src={ imagen } alt={ alt }/>
      </MockupLink>
      <MockupTitulo>{ titulo }</MockupTitulo>
    </MockupContainer>
  );
};

export default Mockup;