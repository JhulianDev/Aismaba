import { colores } from "../../../../assets/css/Colors";
import Separador from "../../../general/separador/Separador";
import TarjetaMarca from "../../../general/tarjetas/marca/TarjetaMarca";
import { MarcasBoxTarjetas, MarcasSection } from "./MarcasStyled";

const Marcas = ({ data }) => {
  return (
    <>
      <Separador
        titulo="MARCAS PRE-DISEÑADAS"
        color={colores.colorFondo}
        top="30px"
        padding={true}
      />
      <MarcasSection>

        <MarcasBoxTarjetas>

          {data.map(marca => (
            <TarjetaMarca
              key={marca.nombre}
              nombre={marca.nombre}
              descripcion={marca.descripcion}
              precio={marca.precio}
              imagen={marca.portada}
              enlace={`/marca/${marca.id}`}
            />
          ))}

        </MarcasBoxTarjetas>
      </MarcasSection>
    </>
  );
};

export default Marcas;