import { useEffect } from 'react';
import { coloresV2 } from '../../../assets/css/Colors';
import { data } from '../../../content/WebDesignData';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';
import PortfolioV1 from '../../general/Portfolios/PortfolioV1/PortfolioV1';
import PricingV1 from '../../general/Pricing/PricingV1/PricingV1';
import TeamV1 from '../../general/Teams/TeamV1/TeamV1';
import FooterV2 from '../../general/footerV2/FooterV2';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import ContactoServicio from '../../general/servicios/contacto/ContactoServicio';
import PreguntasFrecuentes from '../../general/servicios/preguntas/PreguntasFrecuentes';
import PilaresServicio from '../../general/servicios/pilares/PilaresServicio';
import Proceso from '../../general/servicios/proceso/Proceso';

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroV1
        tag={data.hero.tag}
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
        buttonType={data.hero.buttonType}
        callToAction={data.hero.callToAction}
        link={data.hero.link}
        image={data.hero.image}
        alt={data.hero.alt}
        bgColor={coloresV2.colorSecundario}
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

      <PricingV1
        title={data.pricing.title}
        subtitle={data.pricing.subtitle}
        packs={data.pricing.packs}
      />

      <TeamV1
        title={data.team.title}
        subtitle={data.team.subtitle}
        image={data.team.image}
        description={data.team.description}
      />

      <PortfolioV1
        porfolio={data.portfolio}
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

export default WebDesign;