import { TarjetaMarcaBox, TarjetaMarcaBoxPrecio, TarjetaMarcaBoxTextos, TarjetaMarcaButton, TarjetaMarcaDescripcion, TarjetaMarcaImg, TarjetaMarcaMoneda, TarjetaMarcaNombre, TarjetaMarcaPrecio } from "./TarjetaMarcaStyled";

const TarjetaMarca = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <TarjetaMarcaBox>
      <TarjetaMarcaImg src={imagen} alt="Mockup Logo Marca" />
      <TarjetaMarcaBoxTextos>
        <TarjetaMarcaBoxPrecio>
          <TarjetaMarcaMoneda>$</TarjetaMarcaMoneda>
          <TarjetaMarcaPrecio>{precio}</TarjetaMarcaPrecio>
        </TarjetaMarcaBoxPrecio>
        <TarjetaMarcaNombre>{nombre}</TarjetaMarcaNombre>
        <TarjetaMarcaDescripcion>{descripcion}</TarjetaMarcaDescripcion>
        <TarjetaMarcaButton>¡VER MARCA!</TarjetaMarcaButton>
      </TarjetaMarcaBoxTextos>
    </TarjetaMarcaBox>
  );
};

export default TarjetaMarca;