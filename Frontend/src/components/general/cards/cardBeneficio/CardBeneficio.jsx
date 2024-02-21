import React from 'react';
import { BoxCard, BoxTexts, Icon, Paragraph, Title } from './CardBeneficioStyles';

const CardBeneficio = ({ icon, title, description }) => {
  return (
    <BoxCard>
      <Icon src={icon} alt='Icono Beneficio' />
      <BoxTexts>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </BoxTexts>
    </BoxCard>
  );
};

export default CardBeneficio;