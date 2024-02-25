import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import InstakitPack from "../../general/servicios/packs/instakitPack/InstakitPack";
import PasosServicio from "../../general/servicios/pasos/PasosServicio";
import PortadaServicio from "../../general/servicios/portada/PortadaServicio";

const Instakit = () => {
  return (
    <>
      <PortadaServicio />
      <BeneficiosServicios />
      <DescripcionServicio />
      <PasosServicio />
      <InstakitPack />
    </>
  );
};

export default Instakit;