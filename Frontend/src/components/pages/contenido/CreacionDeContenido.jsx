import { data } from '../../../content/CreacionContenidoData';
import { coloresV2 } from '../../../assets/css/Colors';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import PilaresServicio from '../../general/servicios/pilares/PilaresServicio';
import Proceso from '../../general/servicios/proceso/Proceso';
import ContenidoPack from '../../general/servicios/packs/contenidoPack/ContenidoPack';
import PortfolioV2 from '../../general/Portfolios/PortfolioV2/PortfolioV2';
import PreguntasFrecuentes from '../../general/servicios/preguntas/PreguntasFrecuentes';
import ContactoServicio from '../../general/servicios/contacto/ContactoServicio';
import FooterV2 from '../../general/footerV2/FooterV2';

const CreacionDeContenido = () => {
  return (
    <>
      <HeroV1
        tag={data.hero.tag}
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
        callToAction={data.hero.callToAction}
        link={data.hero.link}
        image={data.hero.image}
        alt={data.hero.alt}
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
        bgColor={coloresV2.colorPrincipal}
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

      <PortfolioV2
        title={data.portfolio.title}
        subtitle={data.portfolio.subtitle}
        images={data.portfolio.images}
        bgColor={coloresV2.colorSecundario}
      />

      <PreguntasFrecuentes
        faqs={data.faqs}
        bgColor={coloresV2.colorPrincipal}
      />

      <ContactoServicio
        cta={data.contact.cta}
        link={data.contact.link}
        bgColor={coloresV2.colorSecundario}
      />

      <FooterV2 />

    </>
  );
};

export default CreacionDeContenido;