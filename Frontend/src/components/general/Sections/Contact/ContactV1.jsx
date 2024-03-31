import React from 'react';
import { MaxWidth, Section } from '../../../../assets/styles/GeneralStyles';
import CardV3 from '../../cards/CardV3/CardV3';

const ContactV1 = ({ data }) => {
  return (
    <Section $height="100px">
      <MaxWidth>
        <CardV3 dataCard={data}/>
      </MaxWidth>
    </Section>
  );
};

export default ContactV1;