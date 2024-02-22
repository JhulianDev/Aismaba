import BeneficiosServicios from "../../general/servicios/beneficios/BeneficiosServicios";
import DescripcionServicio from "../../general/servicios/descripcion/DescripcionServicio";
import PortadaServicio from "../../general/servicios/portada/PortadaServicio";

const Instakit = () => {
  return (
    <>
      <PortadaServicio />
      <BeneficiosServicios />
      <DescripcionServicio />
    </>
  );
};

export default Instakit;