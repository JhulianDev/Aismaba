import { coloresV2 } from "../../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import CardV1 from "../../../cards/CardV1/CardV1";
import CardV2 from "../../../cards/CardV2/CardV2";
import { BoxCards, Subtitle, Title } from "./HubV1Styles";

const HubV1 = ({ dataCardShop, dataCardsServices }) => {
  return (
    <Section $height="100px" $bgColor={coloresV2.colorSecundario} $borderBottom>
      <MaxWidth $flexDirection="column">
        <Title>CONOCE NUESTROS</Title>
        <Subtitle>SERVICIOS</Subtitle>
        <CardV1 data={dataCardShop} />

        <BoxCards>
          {dataCardsServices.map((service) => (
            <CardV2 key={service.id} data={service} />
          ))}
        </BoxCards>
      </MaxWidth>
    </Section>
  );
};

export default HubV1;