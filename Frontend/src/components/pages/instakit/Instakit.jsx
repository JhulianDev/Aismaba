import FooterV2 from "../../general/footerV2/FooterV2";
import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import ContactoServicio from "../../general/servicios/contacto/ContactoServicio";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import InstakitPack from "../../general/servicios/packs/instakitPack/InstakitPack";
import PasosServicio from "../../general/servicios/pasos/PasosServicio";
import PortadaServicio from "../../general/servicios/portada/PortadaServicio";
import PreguntasFrecuentes from "../../general/servicios/preguntas/PreguntasFrecuentes";

const Instakit = () => {
  return (
    <>
      <PortadaServicio />
      <BeneficiosServicios />
      <DescripcionServicio />
      <PasosServicio />
      <InstakitPack />
      <PreguntasFrecuentes />
      <ContactoServicio />
      <FooterV2 />
    </>
  );
};

export default Instakit;