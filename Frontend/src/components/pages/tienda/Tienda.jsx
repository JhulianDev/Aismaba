import { PORTADA_TIENDA } from "../../../assets/img/images";
import Cabecera from "../../general/cabecera/Cabecera";

const Tienda = () => {
  return (
    <Cabecera 
    imagen={PORTADA_TIENDA}
    tituloS="Productos Digitales"
    parrafo="Ahorre horas de edición con nuestros productos y dedique más tiempo a conectarse con su audiencia"
    />
  );
};

export default Tienda;