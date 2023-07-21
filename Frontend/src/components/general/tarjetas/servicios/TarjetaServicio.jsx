import { TarjetaBox, TarjetaDescripcionA, TarjetaDescripcionB, TarjetaImg, TarjetaLink, TarjetaTitulo } from "./TarjetaServicioStyled";

const TarjetaServicio = ({ imagen, alt, titulo, parrafoA, parrafoB, enlace}) => {
  return (
    <TarjetaBox>
      <TarjetaImg src={imagen} alt={alt} />
      <TarjetaTitulo>{titulo}</TarjetaTitulo>
      <TarjetaDescripcionA>{parrafoA}</TarjetaDescripcionA>
      <TarjetaDescripcionB>{parrafoB}</TarjetaDescripcionB>
      <TarjetaLink to={enlace}>VER MÁS</TarjetaLink>
    </TarjetaBox>
  );
};

export default TarjetaServicio;