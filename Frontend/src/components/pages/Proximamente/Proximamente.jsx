import React from 'react';
import { MaxWidth, Section } from '../../../assets/styles/GeneralStyles';
import { coloresV2 } from '../../../assets/css/Colors';
import { Title } from './ProximamenteStyles';

const Proximamente = () => {
  return (
    <Section $bgColor={coloresV2.colorSecundario}>
      <MaxWidth $flexDirection="column">
        <Title>PRÓXIMAMENTE</Title>
      </MaxWidth>
    </Section>
  );
};

export default Proximamente;