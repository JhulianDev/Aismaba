import React from 'react';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';
import { data } from '../../../content/PlantillasGratuitasData';
import { coloresV2 } from '../../../assets/css/Colors';
import FormV1 from '../../general/Sections/Forms/FormV1/FormV1';
import SeparatorV1 from '../../general/Separators/SeparatorV1/SeparatorV1';
import FooterV2 from '../../general/footerV2/FooterV2';

const PlantillasGratuitas = () => {
  return (
    <>
      <HeroV1
        tag={data.hero.tag}
        icon={data.hero.iconTag}
        title={data.hero.title}
        description={data.hero.description}
        callToAction={data.hero.callToAction}
        // link={data.hero.link}
        image={data.hero.image}
        alt={data.hero.alt}
        bgColor={coloresV2.colorSecundario}
      />

      <SeparatorV1 
        data={data.separator.text}
      />

      <FormV1 />

      <FooterV2 />
    </>
  );
};

export default PlantillasGratuitas;