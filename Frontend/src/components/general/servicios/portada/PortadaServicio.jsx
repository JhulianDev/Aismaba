import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxTextos, Button, Descripcion, Imagen, Subtitulo, Titulo } from "./PortadaServicioStyles";
import PORTADA_INSTAKIT from "../../../../assets/img/generales/portada_instakit.png"

const PortadaServicio = () => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $portada>
        <BoxTextos>
          <Titulo>Instakit</Titulo>
          <Subtitulo>Plantillas Editables</Subtitulo>
          <Descripcion>Diseñadas 100% con la identidad de tu marca</Descripcion>
          <Button>Lo Quiero</Button>
        </BoxTextos>
        <Titulo $mobile>Instakit</Titulo>
        <Imagen src={PORTADA_INSTAKIT} alt="Portada Instakit"/>
      </MaxWidth>
    </Section>
  );
};

export default PortadaServicio;