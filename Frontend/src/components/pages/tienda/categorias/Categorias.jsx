import Separador from "../../../general/separador/Separador";
import TarjetaCartegoria from "../../../general/tarjetas/categorias/TarjetaCartegoria";
import { CategoriasBoxTarjetas, CategoriasSection } from "./CategoriasStyled";

const Categorias = ({ data }) => {
  return (
    <>
      <Separador
        titulo="NUESTRAS CATEGORIAS"
        padding={true}
      />
      <CategoriasSection>
        <CategoriasBoxTarjetas>

          {data.map(categoria => (
            <TarjetaCartegoria
              key={categoria.categoria}
              categoria={categoria.categoria}
              tipo={categoria.tipo}
              imagen={categoria.imagen}
              alt={categoria.alt}
            />
          ))}

        </CategoriasBoxTarjetas>
      </CategoriasSection>
    </>
  );
};

export default Categorias;