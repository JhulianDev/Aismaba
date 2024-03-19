import { data } from '../../../content/WebDesignData';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';
import PortfolioV1 from '../../general/Portfolios/PortfolioV1';
import PricingV1 from '../../general/Pricing/PricingV1/PricingV1';
import TeamV1 from '../../general/Teams/TeamV1/TeamV1';
import BeneficiosServicios from '../../general/servicios/beneficios/BeneficiosServicios';
import PasosServicio from '../../general/servicios/pasos/PasosServicio';

const WebDesign = () => {
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

      <PasosServicio
        title={data.process.title}
        subtitle={data.process.subtitle}
        steps={data.process.steps}
      />

      <TeamV1
        title={data.team.title}
        subtitle={data.team.subtitle}
        image={data.team.image}
        description={data.team.description}
      />

      <PricingV1
        title={data.pricing.title}
        subtitle={data.pricing.subtitle}
        packs={data.pricing.packs}
      />

      <PortfolioV1 
        porfolio={data.portfolio}
      />

    </>
  );
};

export default WebDesign;