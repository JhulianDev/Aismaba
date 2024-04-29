import React from 'react';
import { BoxButton, BoxImage, BoxTexts, CardContainer, Description, Icon, Image, TextButton, Title } from './CardV1Styles';
import ARROW_ICON from "../../../../assets/img/generales/home/arrow_icon.svg"

const CardV1 = ({ data }) => {
  return (
    <CardContainer>
      <BoxTexts>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>

        <BoxButton to={data.link}>
          <TextButton>{data.cta}</TextButton>
          <Icon src={ARROW_ICON} alt='Arrow icon' />
        </BoxButton>
      </BoxTexts>

      <BoxImage>
        <Image src={data.image} alt={data.alt} />
      </BoxImage>
    </CardContainer>
  );
};

export default CardV1;