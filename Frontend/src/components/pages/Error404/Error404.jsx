import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>La pagina que ingresó no existe o a cambiado de ruta</p>
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
};

export default Error404;