import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxImage, BoxTag, BoxTexts, Button, ContainerHero, Description, Icon, Image, Tag, Subtitle } from "./HeroV1Styles";

const HeroV1 = ({ tag, icon, title, description, callToAction, link, image, alt }) => {
  return (
    <Section>
      <MaxWidth>
        <ContainerHero>

          <BoxTag $mobile>
            <Tag>{tag}</Tag>
          </BoxTag>

          <BoxTexts>
            <BoxTag>
              <Icon src={icon} />
              <Tag>{tag}</Tag>
            </BoxTag>

            <Subtitle>{title}</Subtitle>
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