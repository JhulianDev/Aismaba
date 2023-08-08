import { useContext } from "react";
import { PORTADA_TIENDA } from "../../../assets/img/images";
import Cabecera from "../../general/cabecera/Cabecera";
import Categorias from "./categorias/Categorias";
import Plantillas from "./plantillas/Plantillas";
import { ShopContext } from "../../../context/ShopContext";

const Tienda = () => {
  const { categorias, plantillas } = useContext(ShopContext)
  return (
    <>
      <Cabecera
        imagen={PORTADA_TIENDA}
        tituloS="Productos Digitales"
        parrafo="Ahorre horas de edición con nuestros productos y dedique más tiempo a conectarse con su audiencia"
      />
      <Categorias data={categorias}/>
      <Plantillas data={plantillas} />
    </>
  );
};

export default Tienda;