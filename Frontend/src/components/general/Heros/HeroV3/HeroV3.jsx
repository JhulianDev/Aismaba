import { useEffect, useState } from "react";
import { MaxWidth, Section } from "../../../../assets/styles/GeneralStyles";
import { BoxImage, BoxTexts, ContainerHero, Description, Image, Shadow, SocialIcons, Title } from "./HeroV3Styles";
import TagV1 from "../../Tags/TagV1/TagV1";
import SHADOW from "../../../../assets/img/generales/home/shadow_V1.webp"

const HeroV3 = ({ data, bgColor }) => {
  const [coverIndex, setCoverIndex] = useState(0);
  const [coverImage, setCoverImage] = useState(data.covers[coverIndex]);

  const changeCover = () => {
    const nextCover = (coverIndex + 1) % data.covers.length;
    setCoverIndex(nextCover);
    setCoverImage(data.covers[nextCover]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeCover();
    }, 1600);

    return () => clearInterval(interval);
  }, [coverIndex]);

  return (
    <Section $bgColor={bgColor}>
      <Shadow src={SHADOW} alt="Shadow" />
      <MaxWidth>
        <ContainerHero>

          <TagV1
            icon={data.iconTag}
            tag={data.tag}
            border={true}
            mobile={true}
          />

          <BoxTexts>
            <TagV1
              icon={data.iconTag}
              tag={data.tag}
              border={true}
            />
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <SocialIcons src={data.iconTexts} alt="Icons" />
          </BoxTexts>

          <BoxImage>
            <Image src={coverImage} alt="Hero Image" />
          </BoxImage>
        </ContainerHero>

      </MaxWidth>
    </Section>
  );
};

export default HeroV3;