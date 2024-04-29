import React from 'react';
import { BoxCard, BoxTexts, Icon, Paragraph, Title } from './CardBeneficioStyles';

const CardBeneficio = ({ color, icon, title, description }) => {
  return (
    <BoxCard $color={color}>
      <Icon src={icon} alt='Icono Beneficio' />
      <BoxTexts $color={color}>
        <Title>{title}</Title>
        {description && (
          <Paragraph>{description}</Paragraph>
        )}
      </BoxTexts>
    </BoxCard>
  );
};

export default CardBeneficio;