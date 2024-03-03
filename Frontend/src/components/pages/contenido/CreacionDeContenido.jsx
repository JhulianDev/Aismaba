import { data } from '../../../content/CreacionContenidoData';
import PortadaServicio from '../../general/servicios/portada/PortadaServicio';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import { coloresV2 } from '../../../assets/css/Colors';
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
        bgColor={coloresV2.colorTextos}
        color={coloresV2.colorSecundario}
        benefits={data.benefits}
      />

      <PilaresServicio 
        
      />

    </>
  );
};

export default CreacionDeContenido;