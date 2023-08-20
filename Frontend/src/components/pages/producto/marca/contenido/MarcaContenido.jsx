import { useParams } from "react-router-dom";
import TarjetaElemento from "../../../../general/tarjetas/elementos/elementoMarca/TarjetaElemento";
import TarjetaProducto from "../../../../general/tarjetas/producto/TarjetaProducto";
import { useContext } from "react";
import { ShopContext } from "../../../../../context/ShopContext";
import { MarcaBoxElementos, MarcaSectionContenido } from "./MarcaContenidoStyled";

const MarcaContenido = () => {
  const { id } = useParams();
  const { marcas } = useContext(ShopContext)
  const marca = marcas.find(marca => marca.id === parseInt(id));

  return (
    <MarcaSectionContenido>
      <TarjetaProducto producto={marca.nombre} />

      <MarcaBoxElementos>
        <TarjetaElemento type="A" imagen={marca.contenido[0]} nombre="Logo Principal" />
        <TarjetaElemento type="A" imagen={marca.contenido[1]} nombre="Logo Secundario" />
        <TarjetaElemento type="A" imagen={marca.contenido[2]} nombre="Variante 1" />
        <TarjetaElemento type="A" imagen={marca.contenido[3]} nombre="Variante 2" />

        <TarjetaElemento type="B" imagen={marca.contenido[4]} nombre="Paleta de Colores" />
        <TarjetaElemento type="B" imagen={marca.contenido[5]} nombre="Tarjeta Personal" />

        <TarjetaElemento type="C" imagen={marca.contenido[6]} nombre="Historias Destacadas" />
      </MarcaBoxElementos>
    </MarcaSectionContenido>
  );
};

export default MarcaContenido;