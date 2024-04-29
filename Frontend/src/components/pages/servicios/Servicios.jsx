import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { BoxCards } from "../../general/Sections/Hubs/HubV1/HubV1Styles";
import CardV2 from "../../general/cards/CardV2/CardV2";
import CREACION_CONTENIDO_HOME from "../../../assets/img/generales/home/creacion_de_contenido_home.webp"
import INSTAKIT_HOME from "../../../assets/img/generales/home/instakit_home.webp"
import DISENO_WEB_HOME from "../../../assets/img/generales/home/diseno_web_home.webp"
import { coloresV2 } from "../../../assets/css/Colors";
import { Subtitle, Title } from "./ServiciosStyled";
import FooterV2 from "../../general/footerV2/FooterV2";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: "Creación de contenido", image: CREACION_CONTENIDO_HOME, alt: "MockUp Creación de contenido", link: "/creacion-de-contenido" },
    { title: "Instakit", image: INSTAKIT_HOME, alt: "MockUp Instakit", link: "/instakit" },
    { title: "Diseño web", image: DISENO_WEB_HOME, alt: "MockUp Diseño Web", link: "/diseno-web" }
  ]
  return (
    <>
      <Section $bgColor={coloresV2.colorSecundario}>
        <MaxWidth $flexDirection="column">
          <Title>CONOCE NUESTROS</Title>
          <Subtitle>SERVICIOS</Subtitle>
          <BoxCards>
            {services.map((service) => (
              <CardV2 key={uuidv4()} data={service} />
            ))}
          </BoxCards>
        </MaxWidth>
      </Section>

      <FooterV2 />
    </>
  );
};

export default Servicios;