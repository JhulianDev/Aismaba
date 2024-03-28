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

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroV2 
        data={data.hero}
      />
      {/* <Portada /> */}
      <Presentacion />
      <Pensamiento />
      <Opciones />
      <Testimonios />
      <Clientes />
      <Footer />
    </>
  );
};

export default Home;