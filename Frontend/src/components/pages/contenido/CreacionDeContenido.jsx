import { data } from '../../../content/CreacionContenidoData';
import { coloresV2 } from '../../../assets/css/Colors';
import PortadaServicio from '../../general/servicios/portada/PortadaServicio';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import PilaresServicio from '../../general/servicios/pilares/PilaresServicio';

const CreacionDeContenido = () => {
  return (
    <>
      <PortadaServicio
        title={data.portada.title}
        subtitle={data.portada.subtitle}
        description={data.portada.description}
        image={data.portada.image}
      />

      <BeneficiosServicios
        benefits={data.benefits}
      />

      <PilaresServicio
        presentation={ data.pillars.presentation}
        title={data.pillars.title}
        items={data.pillars.items}
      />

    </>
  );
};

export default CreacionDeContenido;