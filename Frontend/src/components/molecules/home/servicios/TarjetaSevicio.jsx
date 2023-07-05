import { Link } from "react-router-dom";

const TarjetaSevicio = (props) => {
  return (
    <div className="servicios__tarjeta">
      <img src={props.imagen} alt="Mockup de productos digitales" className="tarjeta__img" />
      <h1 className="tarjeta__titulo">{props.titulo}</h1>
      <p className="tarjeta__descripcion">
        {props.parrafo1}
      </p>
      <p className="tarjeta__descripcion tarjeta__descripcion--height">
        {props.parrafo2}
      </p>
      <Link to={props.enlace} className="tarjeta__boton">VER MÁS</Link>
    </div>
  );
};

export default TarjetaSevicio;