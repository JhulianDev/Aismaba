import { useParams } from "react-router-dom";
import TarjetaElemento from "../../../../general/tarjetas/elementos/elementoMarca/TarjetaElemento";
import TarjetaProducto from "../../../../general/tarjetas/producto/TarjetaProducto";
import { useContext } from "react";
import { ShopContext } from "../../../../../context/ShopContext";
import { MarcaBoxElementos, MarcaSectionContenido } from "./MarcaContenidoStyled";
import { CartContext } from "../../../../../context/CartContext";

const MarcaContenido = () => {
  const { id } = useParams();
  const { marcas } = useContext(ShopContext)
  const producto = marcas.find(marca => marca.id === parseInt(id));

  const { dispatch } = useContext(CartContext)

  const addToCart = (producto) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: producto
    })
  }

  return (
    <MarcaSectionContenido>
      <TarjetaProducto 
        producto={producto.nombre}
        handleClick={() => addToCart(producto)} 
      />

      <MarcaBoxElementos>
        <TarjetaElemento type="A" imagen={producto.contenido[0]} nombre="Logo Principal" />
        <TarjetaElemento type="A" imagen={producto.contenido[1]} nombre="Logo Secundario" />
        <TarjetaElemento type="A" imagen={producto.contenido[2]} nombre="Variante 1" />
        <TarjetaElemento type="A" imagen={producto.contenido[3]} nombre="Variante 2" />

        <TarjetaElemento type="B" imagen={producto.contenido[4]} nombre="Paleta de Colores" />
        <TarjetaElemento type="B" imagen={producto.contenido[5]} nombre="Tarjeta Personal" />

        <TarjetaElemento type="C" imagen={producto.contenido[6]} nombre="Historias Destacadas" />
      </MarcaBoxElementos>
    </MarcaSectionContenido>
  );
};

export default MarcaContenido;