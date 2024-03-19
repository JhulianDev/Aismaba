import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxDescription, CardBox, Description, Image, Subtitle, Title } from "./TeamV1Styles";

const TeamV1 = ({ title, subtitle, image, description }) => {
  return (
    <Section  $bgColor={coloresV2.colorPrincipal} $borderBottom>
      <MaxWidth $flexDirection="column">

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CardBox>
          <Image src={image} alt="Team"/>
          <BoxDescription>
            <Description>{description}</Description>
          </BoxDescription>
        </CardBox>

      </MaxWidth>
    </Section>
  );
};

export default TeamV1;