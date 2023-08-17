import Footer from "../../../general/footer/Footer";
import TarjetaProducto from "../../../general/tarjetas/producto/TarjetaProducto";
import { PlantillaBoxInfo, PlantillaInfoParrafo, PlantillaInfoTitulo, PlantillaSection, PlantillaTerminos } from "./PlantillaStyled";
import { useParams } from "react-router-dom";

const Plantilla = () => {
  const { nombrePlantilla } = useParams();
  const nombreProducto = decodeURIComponent(nombrePlantilla);

  return (
    <>
      <PlantillaSection>

        <TarjetaProducto producto={nombreProducto} />

        <PlantillaBoxInfo>
          <PlantillaInfoTitulo>¿Qué incluye este pack?</PlantillaInfoTitulo>
          <PlantillaInfoParrafo>
            Con la compra de este Pack recibiras: 9 Plantillas para Post de Instagram en formato: (1350x1080px) + 9 Plantillas para Portadas de Reels en formato: (1920x1080px) + 9 Plantillas para Historias de Instagram en formato: (1920x1080px)
          </PlantillaInfoParrafo>
        </PlantillaBoxInfo>

        <PlantillaBoxInfo>
          <PlantillaInfoTitulo>¿Cómo se entregan?</PlantillaInfoTitulo>
          <PlantillaInfoParrafo>
            Una vez realizada la compra, se iniciara la descarga de una guía de instrucciones en PDF que contendrá el Link que le dará acceso a las Plantillas editables en la plataforma de Canva.
          </PlantillaInfoParrafo>
        </PlantillaBoxInfo>


        <PlantillaTerminos>
          <b>Términos de uso:</b> estos archivos <b>no se pueden:</b> compartir, vender,
          distribuir ni reproducir con ningún propósito. <br />Todos los productos de Aismaba <b>están protegidos por derechos de autor.</b>
        </PlantillaTerminos>

      </PlantillaSection>

      <Footer />

    </>
  );
};

export default Plantilla;