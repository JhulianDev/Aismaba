import { AddToCartButton, FlechaDerecha, FlechaIzquierda, SliderContador, SliderContadorBox, SliderImg, SliderMovil, SliderVentana, TarjetaProductoBox, TarjetaProductoBoxPrecio, TarjetaProductoDescripcion, TarjetaProductoInfoBox, TarjetaProductoMoneda, TarjetaProductoNombre, TarjetaProductoPrecio } from "./TarjetaProductoStyled";
import useImageSlider from "./useImageSlider";

const TarjetaProducto = ({ producto }) => {
  const { dataProducto, currentImage, imagenesLength, handleArrow } = useImageSlider(producto);

  return (
    <TarjetaProductoBox>
      <SliderVentana>

        <SliderMovil $currentImage={currentImage}>
          {(dataProducto.imagenes).map((imagen, index) => (
            <SliderImg key={index} src={imagen} alt={`MockUp ${producto} ${index}`} />
          ))}
        </SliderMovil>

        <SliderContadorBox>
          <SliderContador>{`${currentImage + 1}/${imagenesLength}`}</SliderContador>
        </SliderContadorBox>

        <FlechaIzquierda onClick={() => handleArrow("left")} xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 48 48" fill="currentcolor"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" /></FlechaIzquierda>

        <FlechaDerecha onClick={() => handleArrow("right")} xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 48 48" fill="currentcolor"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" /></FlechaDerecha>

      </SliderVentana>

      <TarjetaProductoInfoBox>
        <TarjetaProductoBoxPrecio>
          <TarjetaProductoMoneda>$</TarjetaProductoMoneda>
          <TarjetaProductoPrecio>{dataProducto.precio}</TarjetaProductoPrecio>
        </TarjetaProductoBoxPrecio>
        <TarjetaProductoNombre>{producto}</TarjetaProductoNombre>
        <TarjetaProductoDescripcion>
          {dataProducto.descripcion || "Encontrarás 27 Plantillas Editables en Canva. Podrás modificarlas y personalizarlas para que se adapten al estilo de tu marca cambiando los colores, imágenes, textos, elementos. ¡Lo mejor de todo es que no necesitas una cuenta premium!"}
        </TarjetaProductoDescripcion>


        <AddToCartButton>Agregar al carrito</AddToCartButton>
      </TarjetaProductoInfoBox>
    </TarjetaProductoBox>
  );
};

export default TarjetaProducto;