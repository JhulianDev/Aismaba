import { ElementoImg, ElementoNombre, MarcaBoxElemento } from "./TarjetaElementoStyled";

const TarjetaElemento = ({ type, imagen, nombre }) => {
  return (
    <MarcaBoxElemento $type={type}>
      <ElementoImg src={imagen} alt={nombre}/>
      <ElementoNombre>{nombre}</ElementoNombre>
    </MarcaBoxElemento>
  );
};

export default TarjetaElemento;