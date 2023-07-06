import { COMILLAS_GRISES } from "../../../../assets/img/imagenes";

const TarjetaTestimonio = (props) => {
  return (
    <div className="testimonios__tarjeta">
      <img src={COMILLAS_GRISES} alt="Icono de Comillas" className="testimonio__comillas" />
      <p className="testimonio__parrafo">
        <i>
          {props.parrafo}
        </i>
      </p>
      <div className="testimonio__identificador">
        <img src={props.logo} alt="Logo Mulatas Cake" className="testimonio__logo" />
        <div className="testimonio__box_datos">
          <h2 className="testimonio__marca">{props.marca}</h2>
          <h3 className="testimonio__rubro">{props.rubro}</h3>
        </div>
        <img src={COMILLAS_GRISES} alt="Icono de Comillas" className="testimonio__comillas testimonio__comillas--grandes" />
      </div>
    </div>
  );
};

export default TarjetaTestimonio;