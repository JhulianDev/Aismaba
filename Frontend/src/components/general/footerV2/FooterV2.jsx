import React from 'react';
import { CopyRight, FooterContainer } from './FooterV2Styles';
import { MaxWidth } from '../../../assets/styles/GeneralStyles';

const FooterV2 = () => {
  return (
    <FooterContainer>
      <MaxWidth $justifyContent="center">
        <CopyRight>© Copyright 2021 Aismaba, todos los derechos reservados.</CopyRight>
      </MaxWidth>
    </FooterContainer>
  );
};

export default FooterV2;