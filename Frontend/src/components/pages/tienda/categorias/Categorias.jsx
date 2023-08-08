import { CATEGORIA_MARCAS, CATEGORIA_PLANTILLAS, CATEGORIA_PRESETS } from "../../../../assets/img/images";
import Separador from "../../../general/separador/Separador";
import TarjetaCartegoria from "../../../general/tarjetas/categorias/TarjetaCartegoria";
import { CategoriasBoxTarjetas, CategoriasBoxTextos, CategoriasImg, CategoriasSection, CategoriasTarjeta, CategoriasTarjetaSubtitulo, CategoriasTarjetaTitulo } from "./CategoriasStyled";

const Categorias = () => {
  return (
    <CategoriasSection>
      <Separador titulo="NUESTRAS CATEGORIAS" />
      <CategoriasBoxTarjetas>

        <TarjetaCartegoria
          imagen={CATEGORIA_PLANTILLAS}
          alt="Mockup Plantillas Instagram"
          titulo="Plantillas"
          subtitulo="INSTAGRAM"
        />

        <TarjetaCartegoria
          imagen={CATEGORIA_MARCAS}
          alt="Mockup Brandboard"
          titulo="Marcas"
          subtitulo="PERSONALES"
        />

        <TarjetaCartegoria
          imagen={CATEGORIA_PRESETS}
          alt="Mockup Plantillas Instagram"
          titulo="Presets"
          subtitulo="LIGHTROOM"
        />

      </CategoriasBoxTarjetas>
    </CategoriasSection>
  );
};

export default Categorias;