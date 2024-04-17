import React, { useEffect, useRef } from 'react';
import HeroV1 from '../../general/Heros/HeroV1/HeroV1';
import { data } from '../../../content/PlantillasGratuitasData';
import { coloresV2 } from '../../../assets/css/Colors';
import FormV1 from '../../general/Sections/Forms/FormV1/FormV1';
import SeparatorV1 from '../../general/Separators/SeparatorV1/SeparatorV1';
import FooterV2 from '../../general/footerV2/FooterV2';

const PlantillasGratuitas = () => {
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroV1
        tag={data.hero.tag}
        icon={data.hero.iconTag}
        title={data.hero.title}
        description={data.hero.description}
        buttonType={data.hero.buttonType}
        scrollRef={formRef}
        callToAction={data.hero.callToAction}
        image={data.hero.image}
        alt={data.hero.alt}
        bgColor={coloresV2.colorSecundario}
      />

      <SeparatorV1
        data={data.separator.text}
      />

      <FormV1
        data={data.form}
        formRef={formRef}
      />

      <FooterV2 />
    </>
  );
};

export default PlantillasGratuitas;