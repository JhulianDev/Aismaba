import { TarjetaPlantillaBox, TarjetaPlantillaBoxButton, TarjetaPlantillaBoxInfo, TarjetaPlantillaBoxPrecio, TarjetaPlantillaButton, TarjetaPlantillaImg, TarjetaPlantillaMoneda, TarjetaPlantillaPrecio, TarjetaPlantillaSubtitulo, TarjetaPlantillaTitulo, TarjetaPlantillasBoxTextos } from "./TarjetaPlantillaStyled"

const TarjetaPlantilla = ({ titulo, subtitulo, precio, imagen }) => {
  return (
    <TarjetaPlantillaBox>

      <TarjetaPlantillaImg src={imagen} alt="Mockup Plantillas Instagram" />

      <TarjetaPlantillaBoxInfo>

        <TarjetaPlantillasBoxTextos>
          <TarjetaPlantillaTitulo>{titulo}</TarjetaPlantillaTitulo>
          <TarjetaPlantillaSubtitulo>{subtitulo}</TarjetaPlantillaSubtitulo>
        </TarjetaPlantillasBoxTextos>

        <TarjetaPlantillaBoxPrecio>
          <TarjetaPlantillaMoneda>$</TarjetaPlantillaMoneda>
          <TarjetaPlantillaPrecio>{precio}</TarjetaPlantillaPrecio>
        </TarjetaPlantillaBoxPrecio>

      </TarjetaPlantillaBoxInfo>

      <TarjetaPlantillaBoxButton>
        <TarjetaPlantillaButton>Agregar al carrito</TarjetaPlantillaButton>
      </TarjetaPlantillaBoxButton>

    </TarjetaPlantillaBox>
  );
};

export default TarjetaPlantilla;