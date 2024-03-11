import { data } from '../../../content/WebDesignData';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';

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
    </>
  );
};

export default WebDesign;