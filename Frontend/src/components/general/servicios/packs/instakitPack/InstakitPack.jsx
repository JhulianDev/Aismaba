import { useContext } from "react";
import { coloresV2 } from "../../../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../../../assets/styles/GeneralStyles";
import { CurrencyContextV2 } from "../../../../../context/CurrencyContextV2";
import { ShopContext } from "../../../../../context/ShopContext";
import CurrencySelectorV2 from "../../../currencySelector/CurrencySelectorV2";
import { BoxBonus, BoxItem, BoxPrice, Button, ContainerItems, ContainerPack, Currency, ItemPack, Price, Sign, Subtitle, SubtitlePack, Title } from "./InstakitPackStyles";
import { v4 as uuidv4 } from 'uuid';

const InstakitPack = () => {
  const { currencySelected } = useContext(CurrencyContextV2);
  const { instakit } = useContext(ShopContext)
  
  return (
    <Section $bgColor={coloresV2.colorPrincipal}>
      <MaxWidth $flexDirection="column">
        <Title>Adquiere tu INSTAKIT</Title>
        <Subtitle>Selecciona tu moneda local</Subtitle>

        <CurrencySelectorV2 />

        <ContainerPack>

          <BoxPrice>
            <Sign>$</Sign>
            <Price>{instakit.precio[currencySelected]}</Price>
            <Currency>{currencySelected}</Currency>
          </BoxPrice>

          <SubtitlePack>QUE INCLUYE</SubtitlePack>

          <ContainerItems>

            {instakit.items.map((item) => (
              <BoxItem key={uuidv4()}>
                <ItemPack>{item}</ItemPack>
              </BoxItem>
            ))}

            <BoxItem>
              <ItemPack><b>ENTREGA:</b> 15 DIAS HABILES</ItemPack>
            </BoxItem>

            <BoxBonus>
              <ItemPack>
                <b>BONUS:</b> GUIA DE 96 IDEAS DE CONTENIDO PARA POSTS, REELS E HISTORIAS.
              </ItemPack>
            </BoxBonus>

          </ContainerItems>

          <Button to="https://wa.link/sn2ako" target="_blank">Lo Quiero</Button>

        </ContainerPack>
      </MaxWidth>
    </Section>
  );
};

export default InstakitPack;