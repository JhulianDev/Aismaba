import styled, { css, keyframes } from 'styled-components';

const sliderAnimation = keyframes`
  0% {
    transform: translateX(320px);
  }
  11.1% {
    transform: translateX(320px);
  }
  22.2% {
    transform: translateX(0px);
  }
  33.3% {
    transform: translateX(0px);
  }
  44.4% {
    transform: translateX(-320px);
  }
  55.5% {
    transform: translateX(-320px);
  }
  66.6% {
    transform: translateX(0px);
  }
  77.7% {
    transform: translateX(0px);
  }
  88.8% {
    transform: translateX(320px);
  }
  100% {
    transform: translateX(320px);
  }
`

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SliderContainer = styled.div`
  ${flexCenter};
`

export const SliderVentana = styled.div`
  ${flexCenter};

  @media screen and (max-width: 768px){
    width: 300px; /*-----------------------   Convertir a prop */
    overflow: hidden;
  }
`

export const SliderMovil = styled.div`
  ${flexCenter};
  gap: 80px; /*---------------------------   Convertir a prop */
  transition: all .7s ease;
  transform: translateX(0px);

  @media screen and (max-width: 1440px){
    gap: 60px; /*--------------------------  Convertir a prop */
  }

  @media screen and (max-width: 1024px){
    gap: 16px; /*--------------------------  Convertir a prop */
  }

  @media screen and (max-width: 768px){
    gap: 20px; /*--------------------------- Convertir a prop */
  }

  @media screen and (max-width: 410px){
    animation: ${sliderAnimation} 12s infinite;
  }
`