import { useContext } from "react";
import { colores } from "../../../../assets/css/Colors";
import Separador from "../../../general/separador/Separador";
import TarjetaPlantilla from "../../../general/tarjetas/plantilla/TarjetaPlantilla";
import { PlantillasBoxTarjetas, PlantillasSection } from "./PlantillasStyled";
import { CartContext } from "../../../../context/CartContext";

const Plantillas = ({ data }) => {
  const { dispatch } = useContext(CartContext)

  const addToCart = (producto) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: producto
    })
  }
  return (
    <>
      <PlantillasSection>
      <Separador
        titulo="PLANTILLAS INSTAGRAM"
        color={colores.colorFondo}
      />

        <PlantillasBoxTarjetas>
          {data.map(plantilla => (
            <TarjetaPlantilla
              key={plantilla.nombre}
              nombre={plantilla.nombre}
              tipo={plantilla.tipo}
              precio={plantilla.precio}
              imagen={plantilla.portada}
              enlace={`/plantilla/${plantilla.nombre}`}
              handleClick={() => addToCart(plantilla)}
            />
          ))}
        </PlantillasBoxTarjetas>
      </PlantillasSection>
    </>
  );
};

export default Plantillas;