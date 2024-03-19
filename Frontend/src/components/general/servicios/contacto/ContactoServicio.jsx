import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Button, Parrafo } from "./ContactoServicioStyles";

const ContactoServicio = ({ cta, link, bgColor }) => {
  return (
    <Section $height="100px" $bgColor={bgColor}>
      <MaxWidth $flexDirection="column">
        <Parrafo>{cta}</Parrafo>
        <Button to={link} target="_blank">Contactar</Button>
      </MaxWidth>
    </Section>
  );
};

export default ContactoServicio;