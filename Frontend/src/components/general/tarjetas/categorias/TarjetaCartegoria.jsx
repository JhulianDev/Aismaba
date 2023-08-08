import { TarjetaCategoriaBox, TarjetaCategoriaImg, TarjetaCategoriaSubtitulo, TarjetaCategoriaTitulo, TarjetaCategoriasBoxTextos } from "./TarjetaCategoriaStyled";

const TarjetaCartegoria = ({ imagen, alt, categoria, tipo }) => {
  return (
    <TarjetaCategoriaBox>
      <TarjetaCategoriaImg src={imagen} alt={alt}/>
      <TarjetaCategoriasBoxTextos>
        <TarjetaCategoriaTitulo>{categoria}</TarjetaCategoriaTitulo>
        <TarjetaCategoriaSubtitulo>{tipo}</TarjetaCategoriaSubtitulo>
      </TarjetaCategoriasBoxTextos>
    </TarjetaCategoriaBox>
  );
};

export default TarjetaCartegoria;