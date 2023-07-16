import styled, { css } from 'styled-components';
import { colores } from '../../../../assets/css/Colors';

const textStyles = css`
  color: ${colores.colorBlanco};
  font-family: Cinzel;
  text-align: center;
  font-weight: 400;
  letter-spacing: 4px;
  z-index: 1;
`;

export const PortadaSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(../../../src/assets/img/generales/1.jpg);
  background-size: cover;
  background-position: bottom center;
  overflow: hidden;

  @media screen and (max-width: 1300px){
    background-position: bottom right;
  }
`

export const PortadaDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  @media screen and (max-width: 520px){
    padding: 0 0.625rem;
  }
`

export const PortadaLogo = styled.img`
  height: 12%;
  z-index: 1;

  @media screen and (max-width: 768px){
    height: 10%;
  }
`

export const PortadaTituloMovil  = styled.h1`
  ${textStyles};
  font-size: 14.4px;
  display: none;

  @media screen and (max-width: 351px){
    display: flex;
  }
`

export const PortadaTituloDesktop = styled.h1`
  ${textStyles};
  font-size: 14.4px;

  @media screen and (max-width: 768px){
    font-size: 12.8px;
  }

  @media screen and (max-width: 520px){
    font-size: 11.2px;
    margin-top: 0.625rem;
  }

  @media screen and (max-width: 351px){
    display: none;
  }
`

export const PortadaSubtitulo = styled.h2`
  ${textStyles};
  font-size: 30.4px;

  @media screen and (max-width: 768px){
    font-size: 28.8px;
  }

  @media screen and (max-width: 520px){
    font-size: 27.2px;
    margin-bottom: 25%;
  }

  @media screen and (max-width: 351px){
    margin-top: -5px;
  }
`

export const PortadaParrafo = styled.p`
  ${textStyles};
  font-size: 14.4px;
  margin-bottom: 11%;

  @media screen and (max-width: 768px){
    margin-bottom: 17%;
    font-size: 12.8px;
  }

  @media screen and (max-width: 520px){
    display: none;
  }
`

export const PortadaContainerVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const PortadaVideo = styled.video`
  min-width: 100%;
  min-height: 100vh;
  opacity: 0.3;
`



