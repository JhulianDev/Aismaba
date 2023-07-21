import styled, { css } from 'styled-components';

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
    transform: translateX(320px);
  }
`