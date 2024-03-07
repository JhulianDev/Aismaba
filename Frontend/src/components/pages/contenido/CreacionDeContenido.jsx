import { data } from '../../../content/CreacionContenidoData';
import PortadaServicio from '../../general/servicios/portada/PortadaServicio';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import PilaresServicio from '../../general/servicios/pilares/PilaresServicio';
import Proceso from '../../general/servicios/proceso/Proceso';
import ContenidoPack from '../../general/servicios/packs/contenidoPack/ContenidoPack';
import { coloresV2 } from '../../../assets/css/Colors';

const CreacionDeContenido = () => {
  return (
    <>
      <PortadaServicio
        title={data.portada.title}
        subtitle={data.portada.subtitle}
        description={data.portada.description}
        image={data.portada.image}
        link={data.packPrimerMes.link}
      />

      <BeneficiosServicios
        benefits={data.benefits}
      />

      <PilaresServicio
        presentation={data.pillars.presentation}
        title={data.pillars.title}
        items={data.pillars.items}
      />

      <Proceso
        title={data.process.title}
        steps={data.process.steps}
        image={data.process.image}
      />

      <ContenidoPack
        key={data.packPrimerMes.namePack}
        bgColor={coloresV2.colorSecundario}
        namePack={data.packPrimerMes.namePack}
        note={data.packPrimerMes.note}
        subtitle={data.packPrimerMes.subtitle}
        items={data.packPrimerMes.items}
        additionalsTitle={data.packPrimerMes.additionals.title}
        additionalsItems={data.packPrimerMes.additionals.items}
        price={data.packPrimerMes.price}
        link={data.packPrimerMes.link}
        type="A"
      />

      <ContenidoPack
        key={data.packMesPorMes.namePack}
        bgColor={coloresV2.colorPrincipal}
        namePack={data.packMesPorMes.namePack}
        note={data.packMesPorMes.note}
        subtitle={data.packMesPorMes.subtitle}
        items={data.packMesPorMes.items}
        additionalsTitle={data.packMesPorMes.additionals.title}
        additionalsItems={data.packMesPorMes.additionals.items}
        price={data.packMesPorMes.price}
        link={data.packMesPorMes.link}
        type="B"
      />

    </>
  );
};

export default CreacionDeContenido;