import { TarjetaPlantillaBox, TarjetaPlantillaBoxButton, TarjetaPlantillaBoxInfo, TarjetaPlantillaBoxPrecio, TarjetaPlantillaButton, TarjetaPlantillaImg, TarjetaPlantillaLink, TarjetaPlantillaMoneda, TarjetaPlantillaPrecio, TarjetaPlantillaSubtitulo, TarjetaPlantillaTitulo, TarjetaPlantillasBoxTextos } from "./TarjetaPlantillaStyled"

const TarjetaPlantilla = ({ nombre, tipo, precio, imagen, enlace }) => {
  return (
    <TarjetaPlantillaBox>

      <TarjetaPlantillaLink to={enlace}>
        <TarjetaPlantillaImg src={imagen} alt="Mockup Plantillas Instagram" />
      </TarjetaPlantillaLink>

      <TarjetaPlantillaBoxInfo>

        <TarjetaPlantillasBoxTextos>
          <TarjetaPlantillaTitulo>{nombre}</TarjetaPlantillaTitulo>
          <TarjetaPlantillaSubtitulo>{tipo}</TarjetaPlantillaSubtitulo>
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