import { v4 as uuidv4 } from 'uuid';
import { ContainerImages, Image, Subtitle, Title } from "./PortfolioV1Styles";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";

const PortfolioV1 = ({ porfolio }) => {
  return (
    <Section $height="100px">
      <MaxWidth $flexDirection="column">
        <Title>Nuestro portafolio</Title>
        <Subtitle>Webs esteticas y funcionales</Subtitle>
        <ContainerImages>
          {porfolio.map((image) => (
            <Image key={uuidv4()} src={image} alt="Mockup Proyecto Web" />
          ))}
        </ContainerImages>
      </MaxWidth>
    </Section>
  );
};

export default PortfolioV1;