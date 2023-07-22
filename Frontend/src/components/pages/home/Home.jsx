import Portada from './portada/Portada';
import Presentacion from './presentacion/Presentacion';
import Pensamiento from './pensamiento/Pensamiento';
import Opciones from './opciones/Opciones';
import Testimonios from './testimonios/Testimonios';
import Clientes from './clientes/Clientes';

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />
      <Opciones />
      <Testimonios />
      <Clientes />
    </>
  );
};

export default Home;