import { useEffect } from 'react';
import { data } from '../../../content/HomeData';
import Portada from './portada/Portada';
import Presentacion from './presentacion/Presentacion';
import Pensamiento from './pensamiento/Pensamiento';
import Opciones from './opciones/Opciones';
import Testimonios from './testimonios/Testimonios';
import Clientes from './clientes/Clientes';
import Footer from '../../general/footer/Footer';
import HeroV2 from '../../general/Heros/HeroV2/HeroV2';
import SeparatorV1 from '../../general/Separators/SeparatorV1/SeparatorV1';
import HubV1 from '../../general/Sections/Hubs/HubV1/HubV1';
import { coloresV2 } from '../../../assets/css/Colors';

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
        data={data.separator}
      />

      <HubV1 
        dataCardShop={data.hub.cardShop}
        dataCardsServices={data.hub.cardsServices}
      />



      {/* <Portada /> */}
      {/* <Presentacion /> */}
      {/* <Pensamiento /> */}
      {/* <Opciones /> */}
      <Testimonios />
      <Clientes />
      <Footer />
    </>
  );
};

export default Home;