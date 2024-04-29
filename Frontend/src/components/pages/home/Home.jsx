import { useEffect } from 'react';
import { data } from '../../../content/HomeData';
import { coloresV2 } from '../../../assets/css/Colors';
import HeroV2 from '../../general/Heros/HeroV2/HeroV2';
import SeparatorV1 from '../../general/Separators/SeparatorV1/SeparatorV1';
import HubV1 from '../../general/Sections/Hubs/HubV1/HubV1';
import TestimonialsV1 from '../../general/Sections/Testimonials/TestimonialsV1';
import ContactV1 from '../../general/Sections/Contact/ContactV1';
import FooterV2 from '../../general/footerV2/FooterV2';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroV2
        data={data.hero}
        bgColor={coloresV2.colorSecundario}
      />

      <SeparatorV1
        data={data.separator.text}
      />

      <HubV1
        dataCardShop={data.hub.cardShop}
        dataCardsServices={data.hub.cardsServices}
      />

      <TestimonialsV1
        data={data.testimonials}
        bgColor={coloresV2.colorPrincipal}
      />

      <ContactV1 
        data={data.contact}
      />

      <FooterV2 />
    </>
  );
};

export default Home;