import { TarjetaCategoriaBox, TarjetaCategoriaImg, TarjetaCategoriaSubtitulo, TarjetaCategoriaTitulo, TarjetaCategoriasBoxTextos } from "./TarjetaCategoriaStyled";

const TarjetaCartegoria = ({ imagen, alt, titulo, subtitulo }) => {
  return (
    <TarjetaCategoriaBox>
      <TarjetaCategoriaImg src={imagen} alt={alt}/>
      <TarjetaCategoriasBoxTextos>
        <TarjetaCategoriaTitulo>{titulo}</TarjetaCategoriaTitulo>
        <TarjetaCategoriaSubtitulo>{subtitulo}</TarjetaCategoriaSubtitulo>
      </TarjetaCategoriasBoxTextos>
    </TarjetaCategoriaBox>
  );
};

export default TarjetaCartegoria;