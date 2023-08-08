import Separador from "../../../general/separador/Separador";
import TarjetaCartegoria from "../../../general/tarjetas/categorias/TarjetaCartegoria";
import { CategoriasBoxTarjetas, CategoriasSection } from "./CategoriasStyled";

const Categorias = ({ data }) => {
  return (
    <CategoriasSection>
      <Separador titulo="NUESTRAS CATEGORIAS" />

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
  );
};

export default Categorias;