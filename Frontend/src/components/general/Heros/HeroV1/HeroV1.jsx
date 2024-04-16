import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxImage, BoxTag, BoxTexts, Button, ContainerHero, Description, Icon, Image, Tag, Title } from "./HeroV1Styles";

const HeroV1 = ({ tag, icon, title, description, callToAction, link, image, alt, bgColor, borderBottom }) => {
  return (
    <Section $bgColor={bgColor} $borderBottom={borderBottom}>
      <MaxWidth>
        <ContainerHero>

          <BoxTag $mobile>
            <Tag>{tag}</Tag>
          </BoxTag>

          <BoxTexts>
            <BoxTag>
              <Icon src={icon} alt="Icon"/>
              <Tag>{tag}</Tag>
            </BoxTag>

            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button to={link} target="_blank">{callToAction}</Button>
          </BoxTexts>

          <BoxImage>
            <Image src={image} alt={alt} />
          </BoxImage>

        </ContainerHero>
      </MaxWidth>
    </Section>
  );
};

export default HeroV1;