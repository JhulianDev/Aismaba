import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { Button, Parrafo } from "./ContactoServicioStyles";

const ContactoServicio = () => {
  return (
    <Section $height="100px">
      <MaxWidth $flexDirection="column">
        <Parrafo>¿Tienes dudas sobre como comenzar? Contáctanos y te asesoraremos.</Parrafo>
        <Button to="https://wa.link/sn2ako" target="_blank">Contactar</Button>
      </MaxWidth>
    </Section>
  );
};

export default ContactoServicio;