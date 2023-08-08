import { CATEGORIA_MARCAS, CATEGORIA_PLANTILLAS, CATEGORIA_PRESETS, PORTADA_TIENDA } from "../../../assets/img/images";
import Cabecera from "../../general/cabecera/Cabecera";
import Separador from "../../general/separador/Separador";
import Categorias from "./categorias/Categorias";
import Plantillas from "./plantillas/Plantillas";

const Tienda = () => {
  return (
    <>
      <Cabecera
        imagen={PORTADA_TIENDA}
        tituloS="Productos Digitales"
        parrafo="Ahorre horas de edición con nuestros productos y dedique más tiempo a conectarse con su audiencia"
      />

      <Categorias />

      <Plantillas />
    </>
  );
};

export default Tienda;