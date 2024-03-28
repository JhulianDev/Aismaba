import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxButtons, BoxImage, BoxTexts, Button, ContainerHero, Description, Image, Title, Uppercase } from "./HeroV2Styles";
import { BoxTag, Icon, Tag } from "../HeroV1/HeroV1Styles";
import { coloresV2 } from "../../../../assets/css/Colors";
import HERO_HOME from "../../../../assets/img/generales/home/hero_home.webp"
import HERO_HOME_MOBILE from "../../../../assets/img/generales/home/hero_home_mobile.webp"
import LIGHT_ICON from "../../../../assets/img/generales/light_icon.svg";

const HeroV2 = ({ data, bgColor }) => {
  return (
    <Section $bgColor={bgColor}>
      <MaxWidth>
        <ContainerHero>

          <BoxTag $mobile>
            <Icon src={LIGHT_ICON} alt="Icon" />
            <Tag>{data.tag}</Tag>
          </BoxTag>

          <BoxTexts>
            <BoxTag>
              <Icon src={LIGHT_ICON} alt="Icon" />
              <Tag>{data.tag}</Tag>
            </BoxTag>

            <Title>{data.title}<br /><Uppercase>{data.uppercase}</Uppercase></Title>
            <Description>{data.description}</Description>

            <BoxButtons>
              <Button $bgColor={coloresV2.colorPrincipal}   to={data.linkButtonA}>{data.textButtonA}</Button>
              <Button $bgColor={coloresV2.colorSecundario}  to={data.linkButtonB}>{data.textButtonB}</Button>
            </BoxButtons>
          </BoxTexts>

          <BoxImage>
            <Image src={HERO_HOME} alt="MockUp Aismaba" />
            <Image src={HERO_HOME_MOBILE} alt="MockUp Aismaba" $mobile />
          </BoxImage>

        </ContainerHero>
      </MaxWidth>
    </Section>
  );
};

export default HeroV2;