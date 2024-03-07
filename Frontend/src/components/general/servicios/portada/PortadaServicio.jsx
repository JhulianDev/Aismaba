import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxTextos, Button, Descripcion, Imagen, Subtitulo, Titulo } from "./PortadaServicioStyles";

const PortadaServicio = ({ title, subtitle, description, image, link }) => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $portada>
        <BoxTextos>
          <Titulo>{title}</Titulo>
          <Subtitulo>{subtitle}</Subtitulo>
          <Descripcion>{description}</Descripcion>
          <Button to={link} target="_blank">Lo Quiero</Button>
        </BoxTextos>
        <Titulo $mobile>{title}</Titulo>
        <Imagen src={image} alt="Mockup"/>
      </MaxWidth>
    </Section>
  );
};

export default PortadaServicio;