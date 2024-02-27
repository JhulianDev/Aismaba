import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxTextos, Button, Descripcion, Imagen, Subtitulo, Titulo } from "./PortadaServicioStyles";

const PortadaServicio = ({ titulo, subtitulo, descripcion, imagen }) => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $portada>
        <BoxTextos>
          <Titulo>{titulo}</Titulo>
          <Subtitulo>{subtitulo}</Subtitulo>
          <Descripcion>{descripcion}</Descripcion>
          <Button>Lo Quiero</Button>
        </BoxTextos>
        <Titulo $mobile>titulo</Titulo>
        <Imagen src={imagen} alt="Mockup"/>
      </MaxWidth>
    </Section>
  );
};

export default PortadaServicio;