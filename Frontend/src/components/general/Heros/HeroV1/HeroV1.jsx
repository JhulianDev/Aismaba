import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import TagV1 from "../../Tags/TagV1/TagV1";
import { BoxImage, BoxTexts, Button, ButtonLink, ContainerHero, Description, Image, Title } from "./HeroV1Styles";

const HeroV1 = ({ tag, title, description, buttonType, scrollRef, callToAction, link, image, alt, bgColor, borderBottom }) => {

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section $bgColor={bgColor} $borderBottom={borderBottom}>
      <MaxWidth>
        <ContainerHero>

          <TagV1
            tag={tag}
            border={true}
            mobile={true}
          />

          <BoxTexts>
            <TagV1
              tag={tag}
              border={true}
            />

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