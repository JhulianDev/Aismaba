import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxImage, BoxTag, BoxTexts, Button, ButtonLink, ContainerHero, Description, Icon, Image, Tag, Title } from "./HeroV1Styles";

const HeroV1 = ({ tag, icon, title, description, buttonType, scrollRef, callToAction, link, image, alt, bgColor, borderBottom }) => {

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section $bgColor={bgColor} $borderBottom={borderBottom}>
      <MaxWidth>
        <ContainerHero>

          <BoxTag $mobile>
            <Tag>{tag}</Tag>
          </BoxTag>

          <BoxTexts>
            <BoxTag>
              <Icon src={icon} alt="Icon" />
              <Tag>{tag}</Tag>
            </BoxTag>

            <Title>{title}</Title>
            <Description>{description}</Description>
            {buttonType === "Link" && (
              <ButtonLink to={link} target="_blank">{callToAction}</ButtonLink>
            )}
            {buttonType === "Scroll" && (
              <Button onClick={handleScroll}>{callToAction}</Button>
            )}
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