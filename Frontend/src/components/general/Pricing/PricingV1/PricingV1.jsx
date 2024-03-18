import { coloresV2 } from "../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import CardPricingV1 from "../../cards/CardPricingV1/CardPricingV1";
import CurrencySelectorV2 from "../../currencySelector/CurrencySelectorV2";
import SliderV1 from "../../sliders/sliderV1/SliderV1";
import { Subtitle, Title } from "./PricingV1Styles";

const PricingV1 = ({ title, subtitle, packs }) => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CurrencySelectorV2 />

        <SliderV1>
          {packs.map((pack) => (
            <CardPricingV1 
              key={pack.id} 
              pack={pack} 
            />
          ))}
        </SliderV1>

      </MaxWidth>
    </Section>
  )
};

export default PricingV1;