import MarcaContenido from "./contenido/MarcaContenido";
import MarcaEntrega from "./entrega/MarcaEntrega";
import MarcaBeneficios from "./beneficios/MarcaBeneficios";
import Footer from "../../../general/footer/Footer";
import { useEffect } from "react";

const Marca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <MarcaContenido />
      <MarcaEntrega />
      <MarcaBeneficios />
      <Footer />
    </>
  );
};

export default Marca;