import { Link } from "react-router-dom";

const MockupServicio = (props) => {
  return (
    <div className="servicio">
      <Link className="servicio__link">
        <span className="servicio__hover">Ver Más</span>
        <img src={props.imagen} alt="Mockup" className="servicio__img" />
      </Link>
      <h1 className="servicio__titulo">{props.titulo}</h1>
    </div>
  );
};

export default MockupServicio;