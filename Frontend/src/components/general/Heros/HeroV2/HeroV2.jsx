import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxButtons, BoxImage, BoxTexts, Button, ContainerHero, Description, Image, Title, Uppercase } from "./HeroV2Styles";
import { coloresV2 } from "../../../../assets/css/Colors";
import TagV1 from "../../Tags/TagV1/TagV1";

const HeroV2 = ({ data, bgColor }) => {
  return (
    <Section $bgColor={bgColor}>
      <MaxWidth>
        <ContainerHero>

          <TagV1
            tag={data.tag}
            border={true}
            mobile={true}
          />

          <BoxTexts>
            <TagV1
              tag={data.tag}
              border={true}
            />

            <Title>{data.title}<br /><Uppercase>{data.uppercase}</Uppercase></Title>
            <Description>{data.description}</Description>

            <BoxButtons>
              <Button $bgColor={coloresV2.colorPrincipal}   to={data.linkButtonA}>{data.textButtonA}</Button>
              <Button $bgColor={coloresV2.colorSecundario}  to={data.linkButtonB}>{data.textButtonB}</Button>
            </BoxButtons>
          </BoxTexts>

          <BoxImage>
            <Image src={data.image} alt="MockUp Aismaba" />
            <Image src={data.imageMobile} alt="MockUp Aismaba" $mobile />
          </BoxImage>

        </ContainerHero>
      </MaxWidth>
    </Section>
  );
};

export default HeroV2;