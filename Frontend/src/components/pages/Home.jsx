import Pensamiento from "../organisms/home/Pensamiento";
import Portada from "../organisms/home/Portada";
import Presentacion from "../organisms/home/Presentacion";
import Servicios from "../organisms/home/Servicios";
import Testimonios from "../organisms/home/Testimonios";
import Clientes from "../organisms/home/Clientes";
import MainFooter from "../organisms/footer/MainFooter";

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />
      <Servicios />
      <Testimonios />
      <Clientes />
      <MainFooter color="var(--color-secundario)" />
    </>
  );
};

export default Home;
