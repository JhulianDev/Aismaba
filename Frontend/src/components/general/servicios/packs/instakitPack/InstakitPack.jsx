import { v4 as uuidv4 } from 'uuid';
import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import { BoxBonus, BoxItem, BoxPrice, Button, ContainerItems, ContainerPack, Currency, ItemPack, Price, Sign, Subtitle, SubtitlePack, Title } from "./InstakitPackStyles";
import CurrencySelectorV2 from "../../../currencySelector/CurrencySelectorV2";
import useCurrencyStore from "../../../../../stores/useCurrencyStore";

const InstakitPack = ({ title, subtitle, price, items, delivery, bonus, link, bgColor}) => {
  const { currencySelected } = useCurrencyStore();
  
  return (
    <Section $bgColor={bgColor} $borderBottom>
      <MaxWidth $flexDirection="column">

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CurrencySelectorV2 />

        <ContainerPack $bgColor={bgColor}>

          <BoxPrice>
            <Sign>$</Sign>
            <Price>{price[currencySelected]}</Price>
            <Currency>{currencySelected}</Currency>
          </BoxPrice>

          <SubtitlePack>QUE INCLUYE</SubtitlePack>

          <ContainerItems>

            {items.map((item) => (
              <BoxItem key={uuidv4()}>
                <ItemPack>{item}</ItemPack>
              </BoxItem>
            ))}

            <BoxItem>
              <ItemPack>{delivery}</ItemPack>
            </BoxItem>

            <BoxBonus>
              <ItemPack>{bonus}</ItemPack>
            </BoxBonus>

          </ContainerItems>

          <Button to={link} target="_blank">Lo Quiero</Button>

        </ContainerPack>
      </MaxWidth>
    </Section>
  );
};

export default InstakitPack;