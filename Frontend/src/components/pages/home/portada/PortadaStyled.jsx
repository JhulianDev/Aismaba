import styled, { css } from 'styled-components';
import { colores } from '../../../../assets/css/Colors';
import { FONDO_PORTADA } from '../../../../assets/img/images';

const textStyles = css`
  color: ${colores.colorBlanco};
  font-family: Cinzel;
  text-align: center;
  font-weight: 400;
  letter-spacing: .25rem;
  z-index: 1;
`;

export const PortadaSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${FONDO_PORTADA});
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
  font-size: .9rem;
  display: none;

  @media screen and (max-width: 351px){
    display: flex;
  }
`

export const PortadaTituloDesktop = styled.h1`
  ${textStyles};
  font-size: .9rem;

  @media screen and (max-width: 768px){
    font-size: .8rem;
  }

  @media screen and (max-width: 520px){
    font-size: .7rem;
    margin-top: 0.625rem;
  }

  @media screen and (max-width: 351px){
    display: none;
  }
`

export const PortadaSubtitulo = styled.h2`
  ${textStyles};
  font-size: 1.9rem;

  @media screen and (max-width: 768px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 520px){
    font-size: 1.7rem;
    margin-bottom: 25%;
  }

  @media screen and (max-width: 351px){
    margin-top: -0.3125rem;
  }
`

export const PortadaParrafo = styled.p`
  ${textStyles};
  font-size: .9rem;
  margin-bottom: 11%;

  @media screen and (max-width: 768px){
    margin-bottom: 17%;
    font-size: .8rem;
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



