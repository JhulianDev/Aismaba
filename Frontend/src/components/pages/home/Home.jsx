import Portada from './portada/Portada';
import Presentacion from './presentacion/Presentacion';
import Pensamiento from './pensamiento/Pensamiento';
import Opciones from './opciones/Opciones';
import Testimonios from './testimonios/Testimonios';

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />
      <Opciones />
      <Testimonios />
    </>
  );
};

export default Home;