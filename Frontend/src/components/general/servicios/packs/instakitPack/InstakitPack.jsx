import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import { CurrencyContextV2 } from "../../../../../context/CurrencyContextV2";
import { BoxBonus, BoxItem, BoxPrice, Button, ContainerItems, ContainerPack, Currency, ItemPack, Price, Sign, Subtitle, SubtitlePack, Title } from "./InstakitPackStyles";
import { coloresV2 } from "../../../../../assets/css/Colors";
import CurrencySelectorV2 from "../../../currencySelector/CurrencySelectorV2";

const InstakitPack = ({ title, subtitle, price, items, delivery, bonus, link}) => {
  const { currencySelected } = useContext(CurrencyContextV2);
  
  return (
    <Section $bgColor={coloresV2.colorPrincipal} $borderBottom>
      <MaxWidth $flexDirection="column">

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CurrencySelectorV2 />

        <ContainerPack>

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