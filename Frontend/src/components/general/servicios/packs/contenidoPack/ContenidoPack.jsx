import { useContext } from "react";
import { coloresV2 } from "../../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import CurrencySelectorV2 from "../../../currencySelector/CurrencySelectorV2";
import { BoxItems, BoxTexts, Item, MainBoxPack, Note, Number, Description, Subtitle, Title, BoxAdditionals, AdditionalsTitle, BoxItemsAditionals, ItemAditional, BoxPrice, Sign, Price, Currency, ItemTitle, AdditionalDescription, Button } from "./ContenidoPackStyles";
import { CurrencyContextV2 } from "../../../../../context/CurrencyContextV2";

const ContenidoPack = ({ type, bgColor, namePack, note, subtitle, items, additionalsTitle, additionalsItems, price, link }) => {
  const { currencySelected } = useContext(CurrencyContextV2);

  return (
    <Section $bgColor={bgColor} $borderBottom>
      <MaxWidth $flexDirection="column">

        <BoxTexts>
          <Title $type={type}>{namePack}</Title>
          <Note>{note}</Note>
        </BoxTexts>

        <Subtitle>{subtitle}</Subtitle>

        <CurrencySelectorV2 />

        <MainBoxPack>

          <BoxPrice $type={type}>
            <Sign>$</Sign>
            <Price>{price[currencySelected]}</Price>
            <Currency>{currencySelected}</Currency>
          </BoxPrice>

          <BoxItems>
            <Item $mobile>
              <ItemTitle>ESTE PACK INCLUYE</ItemTitle>
            </Item>

            {items.map((item) => (
              <Item key={item.id}>
                {item.number && <Number>{item.number}</Number>}
                <Description>{item.description}</Description>
              </Item>
            ))}
          </BoxItems>

          <BoxAdditionals $type={type}>
            <AdditionalsTitle>{additionalsTitle}</AdditionalsTitle>

            <BoxItemsAditionals>
              {additionalsItems.map((item) => (
                <ItemAditional key={item.id}>
                  <Number>·</Number>
                  <AdditionalDescription>{item.description}</AdditionalDescription>
                </ItemAditional>
              ))}
            </BoxItemsAditionals>
          </BoxAdditionals>
        </MainBoxPack>

        <Button to={link} $type={type} target="_blank">Lo Quiero</Button>

      </MaxWidth>
    </Section>
  );
};

export default ContenidoPack;