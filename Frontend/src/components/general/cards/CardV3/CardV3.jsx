import React from 'react';
import { BoxImage, BoxTexts, Button, CardContainer, Image, Quotes, Shadow, Subtitle, Title } from './CardV3Styles';
import SHADOW from "../../../../assets/img/generales/home/shadow_V1.webp"
import QUOTES_ICON from "../../../../assets/img/generales/home/quotes_icon.svg"

const CardV3 = ({ dataCard }) => {
  return (
    <CardContainer>
      <Shadow src={SHADOW} alt='Shadow' />
      <BoxTexts>
        <Quotes src={QUOTES_ICON} alt='Quotes icon' />
        <Title>{dataCard.title}</Title>
        <Subtitle>{dataCard.subtitle}</Subtitle>
        <Button to={dataCard.link} target='_blank'>{dataCard.cta}</Button>
      </BoxTexts>

      <BoxImage>
        <Image src={dataCard.image} alt={dataCard.alt} />
      </BoxImage>
    </CardContainer>
  );
};

export default CardV3;