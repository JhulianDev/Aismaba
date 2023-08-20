import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TarjetaProducto from "../../../general/tarjetas/producto/TarjetaProducto";
import { PlantillaSection } from "./PlantillaStyled";
import PlantillaInfo from "./info/PlantillaInfo";
import Footer from "../../../general/footer/Footer";
import Terminos from "../../../general/terminos/Terminos";

const Plantilla = () => {
  const { nombrePlantilla } = useParams();
  const nombreProducto = decodeURIComponent(nombrePlantilla);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PlantillaSection>

        <TarjetaProducto producto={nombreProducto} />

        <PlantillaInfo
          titulo="¿Qué incluye este pack?"
          descripcion="Con la compra de este Pack recibiras: 9 Plantillas para Post de Instagram en formato: (1350x1080px) + 9 Plantillas para Portadas de Reels en formato: (1920x1080px) + 9 Plantillas para Historias de Instagram en formato: (1920x1080px)."
        />

        <PlantillaInfo
          titulo="¿Cómo se entregan?"
          descripcion="Una vez realizada la compra, se iniciara la descarga de una guía de instrucciones en PDF que contendrá el Link que le dará acceso a las Plantillas editables en la plataforma de Canva."
        />

        <Terminos />

      </PlantillaSection>

      <Footer />

    </>
  );
};

export default Plantilla;