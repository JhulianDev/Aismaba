import { Link } from "react-router-dom";
import { NUESTROS_SERVICIOS, PRODUCTOS_DIGITALES, RECURSOS_GRATUITOS } from "../../assets/img/imagenes";
import Pensamiento from "../organisms/home/Pensamiento";
import Portada from "../organisms/home/Portada";
import Presentacion from "../organisms/home/Presentacion";
import { useEffect } from "react";
import Servicios from "../organisms/home/Servicios";

const Home = () => {
  return (
    <>
      <Portada />
      <Presentacion />
      <Pensamiento />
      <Servicios />
    </>
  );
};

export default Home;
