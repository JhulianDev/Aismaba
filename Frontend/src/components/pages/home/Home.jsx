import { useEffect } from 'react';
import Portada from './portada/Portada';
import Presentacion from './presentacion/Presentacion';
import Pensamiento from './pensamiento/Pensamiento';
import Opciones from './opciones/Opciones';
import Testimonios from './testimonios/Testimonios';
import Clientes from './clientes/Clientes';
import Footer from '../../general/footer/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Portada />
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