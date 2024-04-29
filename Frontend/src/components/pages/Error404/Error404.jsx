import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { LinkButton, Title } from "../CartV1/CartV1Styles";
import { coloresV2 } from "../../../assets/css/Colors";
import Header from "../../general/header/Header";

const Error404 = () => {
  return (
    <>
      <Header color={coloresV2.colorPrincipal} />
      <Section $bgColor={coloresV2.colorSecundario}>
        <MaxWidth $flexDirection="column">
          <Title>La página que ingresó no existe o a cambiado de ruta</Title>
          <LinkButton $typeB to="/">Ir a home</LinkButton>
        </MaxWidth>
      </Section>
    </>
  );
};

export default Error404;