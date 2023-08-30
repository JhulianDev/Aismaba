import { useContext, useEffect } from "react";
import { PORTADA_TIENDA } from "../../../assets/img/images";
import Cabecera from "../../general/cabecera/Cabecera";
import Categorias from "./categorias/Categorias";
import Plantillas from "./plantillas/Plantillas";
import { ShopContext } from "../../../context/ShopContext";
import Marcas from "./marcas/Marcas";
import Footer from "../../general/footer/Footer";
import { colores } from "../../../assets/css/Colors";

const Tienda = () => {
  const { categorias, plantillas, marcas } = useContext(ShopContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Cabecera
        imagen={PORTADA_TIENDA}
        tituloS="Productos Digitales"
        parrafo="Ahorre horas de edición con nuestros productos y dedique más tiempo a conectarse con su audiencia"
      />
      <Categorias data={categorias}/>
      <Plantillas data={plantillas} />
      <Marcas     data={marcas}/>

      <Footer color={colores.colorSecundario} />
    </>
  );
};

export default Tienda;